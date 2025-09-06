// asp_spatial_menu.js - Visualizzazione spaziale ASP con viste Floor/Height
// Mostra posizioni IR e microfoni su planimetria con toggle F/H

// Configurazione canvas
mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

// Dichiarazione numero di outlet
outlets = 2;

// Variabili globali
var dict_name = "";
var dict_obj = null;
var view_mode = "F"; // "F" = Floor (x,y), "H" = Height (x,z)

// Posizioni e dimensioni
var ir_positions = [];
var mic_positions = [];
var margin = 20;
var header_height = 40;
var toggle_size = 30;

// Stato dell'interfaccia
var selected_ir = -1; // Indice IR selezionato (-1 = nessuno)
var selected_mic = -1; // Indice microfono selezionato (-1 = nessuno)
var hover_ir = -1;
var hover_mic = -1;
var mics_active = false; // True quando un IR è selezionato

// Dimensioni di scaling automatico
var scale_factor = 1.0;
var offset_x = 0;
var offset_y = 0;
var bounds = {min_x: 0, max_x: 0, min_y: 0, max_y: 0};

// Colori - palette pastello
var bg_color = [1.0, 1.0, 1.0, 1.0];           // Bianco
var ir_color = [0.2, 0.2, 0.2, 1.0];           // Grigio scuro per crosshair IR
var ir_inactive_color = [0.2, 0.2, 0.2, 0.1];  // Grigio scuro molto trasparente per IR non selezionati
var mic_outer_color = [1.0, 1.0, 1.0, 1.0];    // Bianco per cerchio esterno mic
var mic_border_color = [0.0, 0.0, 0.0, 1.0];   // Nero per bordo mic
var mic_inner_color = [0.0, 0.0, 0.0, 1.0];    // Nero per cerchio interno mic
var ir_select_color = [1.0, 1.0, 0.4, 0.6];    // Giallo pastello trasparente
var mic_active_color = [1.0, 0.6, 0.6, 0.4];   // Rosso pastello molto trasparente
var mic_selected_color = [1.0, 0.3, 0.3, 0.8]; // Rosso intenso completamente opaco per microfono selezionato
var text_color = [0.0, 0.0, 0.0, 1.0];         // Nero per testo
var text_inactive_color = [0.7, 0.7, 0.7, 1.0]; // Grigio chiaro per testo inattivo
var toggle_color = [0.9, 0.9, 0.9, 1.0];       // Grigio chiaro per toggle

// Dimensioni elementi
var ir_size = 12;      // Dimensione crosshair IR
var mic_outer_radius = 8;
var mic_inner_radius = 3;
var select_radius = 20;  // Raggio cerchio selezione
var active_radius = 15;  // Raggio cerchio attivazione microfoni

// Inizializzazione
function loadbang() {
    mgraphics.redraw();
}

// Funzione per ricevere il nome del dizionario ASP
function setDict(name) {
    dict_name = name;
    load_asp_dict();
}

// Funzione per caricare il dizionario ASP
function load_asp_dict() {
    if (dict_name === "") {
        post("No dictionary name specified\n");
        return;
    }
    
    try {
        dict_obj = new Dict(dict_name);
        
        // Verifica che sia un ASP valido
        var preset_name = dict_obj.get("Preset_Name");
        var ir_files = dict_obj.get("IRfiles");
        
        if (preset_name && ir_files) {
            load_positions();
            // post("Loaded ASP spatial view: " + preset_name + "\n");
        } else {
            post("Warning: Dictionary doesn't seem to be a valid ASP\n");
        }
        
        mgraphics.redraw();
        
    } catch (e) {
        post("Error loading ASP dictionary: " + e.toString() + "\n");
        dict_obj = null;
        mgraphics.redraw();
    }
}

// Carica le posizioni IR e microfoni dal dizionario
function load_positions() {
    if (!dict_obj) return;
    
    ir_positions = [];
    mic_positions = [];
    
    try {
        // Carica posizioni IR
        var ir_pos_data = dict_obj.get("IRpositions");
        if (ir_pos_data) {
            for (var i = 1; i <= 20; i++) {
                try {
                    var pos = dict_obj.get("IRpositions::pos" + i);
                    if (pos && pos.length >= 2) {
                        // Assicurati che ci sia coordinate Z (default 1.2)
                        var z = pos.length >= 3 ? pos[2] : 1.2;
                        ir_positions.push({
                            id: i,
                            x: pos[0],
                            y: pos[1],
                            z: z
                        });
                    }
                } catch (e) {
                    // Posizione non esiste, continua
                    continue;
                }
            }
        }
        
        // Carica posizioni microfoni
        var mic_pos_data = dict_obj.get("MicPositions");
        if (mic_pos_data) {
            for (var i = 1; i <= 20; i++) {
                try {
                    var pos = dict_obj.get("MicPositions::pos" + i);
                    if (pos && pos.length >= 2) {
                        // Assicurati che ci sia coordinate Z (default 1.2)
                        var z = pos.length >= 3 ? pos[2] : 1.2;
                        mic_positions.push({
                            id: i,
                            x: pos[0],
                            y: pos[1],
                            z: z
                        });
                    }
                } catch (e) {
                    // Posizione non esiste, continua
                    continue;
                }
            }
        }
        
        // post("Loaded " + ir_positions.length + " IR positions and " + mic_positions.length + " microphones\n");
        calculate_bounds();
        
    } catch (e) {
        post("Error loading positions: " + e.toString() + "\n");
    }
}

// Calcola i bounds e il fattore di scala per auto-fit
function calculate_bounds() {
    if (ir_positions.length === 0 && mic_positions.length === 0) return;
    
    var all_positions = ir_positions.concat(mic_positions);
    
    // Calcola bounds in base alla vista corrente
    if (view_mode === "F") {
        // Vista Floor: usa x, y
        bounds.min_x = Math.min.apply(Math, all_positions.map(function(p) { return p.x; }));
        bounds.max_x = Math.max.apply(Math, all_positions.map(function(p) { return p.x; }));
        bounds.min_y = Math.min.apply(Math, all_positions.map(function(p) { return p.y; }));
        bounds.max_y = Math.max.apply(Math, all_positions.map(function(p) { return p.y; }));
    } else {
        // Vista Height: usa x, z
        bounds.min_x = Math.min.apply(Math, all_positions.map(function(p) { return p.x; }));
        bounds.max_x = Math.max.apply(Math, all_positions.map(function(p) { return p.x; }));
        bounds.min_y = Math.min.apply(Math, all_positions.map(function(p) { return p.z; }));
        bounds.max_y = Math.max.apply(Math, all_positions.map(function(p) { return p.z; }));
    }
    
    // Calcola fattore di scala e offset per centrare
    var width = box.rect[2] - box.rect[0];
    var height = box.rect[3] - box.rect[1];
    
    var content_width = width - (margin * 2);
    var content_height = height - header_height - (margin * 2);
    
    var data_width = bounds.max_x - bounds.min_x;
    var data_height = bounds.max_y - bounds.min_y;
    
    // Evita divisione per zero
    if (data_width === 0) data_width = 1;
    if (data_height === 0) data_height = 1;
    
    var scale_x = content_width / data_width;
    var scale_y = content_height / data_height;
    
    // Usa il fattore di scala più piccolo per mantenere le proporzioni
    scale_factor = Math.min(scale_x, scale_y) * 0.8; // 0.8 per margine extra
    
    // Calcola offset per centrare
    var center_x = (bounds.min_x + bounds.max_x) / 2;
    var center_y = (bounds.min_y + bounds.max_y) / 2;
    
    offset_x = (width / 2) - (center_x * scale_factor);
    offset_y = (height / 2) - (center_y * scale_factor);
}

// Converte coordinate mondo in coordinate schermo
function world_to_screen(world_x, world_y) {
    return {
        x: offset_x + (world_x * scale_factor),
        y: offset_y + (world_y * scale_factor)
    };
}

// Converte coordinate schermo in coordinate mondo
function screen_to_world(screen_x, screen_y) {
    return {
        x: (screen_x - offset_x) / scale_factor,
        y: (screen_y - offset_y) / scale_factor
    };
}

// Ottiene le coordinate da visualizzare in base alla vista corrente
function get_display_coords(pos) {
    if (view_mode === "F") {
        return {x: pos.x, y: pos.y}; // Floor: x, y
    } else {
        return {x: pos.x, y: pos.z}; // Height: x, z
    }
}

// Funzione di disegno principale
function paint() {
    var width = box.rect[2] - box.rect[0];
    var height = box.rect[3] - box.rect[1];
    
    // Ricalcola bounds ad ogni disegno
    calculate_bounds();
    
    // Sfondo
    mgraphics.set_source_rgba(bg_color[0], bg_color[1], bg_color[2], bg_color[3]);
    mgraphics.rectangle(0, 0, width, height);
    mgraphics.fill();
    
    if (!dict_obj) {
        // Messaggio se non c'è dizionario caricato
        mgraphics.set_source_rgba(text_color[0], text_color[1], text_color[2], text_color[3]);
        mgraphics.select_font_face("Arial");
        mgraphics.set_font_size(14);
        var text = "Send 'setDict <asp_name>'";
        var text_dims = mgraphics.text_measure(text);
        mgraphics.move_to((width - text_dims[0]) / 2, (height + text_dims[1]) / 2);
        mgraphics.text_path(text);
        mgraphics.fill();
        return;
    }
    
    // Header con nome preset
    draw_header(width);
    
    // Toggle button F/H
    draw_toggle_button(width);
    
    // Disegna le posizioni
    draw_positions();
}

// Disegna header
function draw_header(width) {
    mgraphics.set_source_rgba(text_color[0], text_color[1], text_color[2], text_color[3]);
    mgraphics.select_font_face("Arial");
    mgraphics.set_font_size(14);
    
    try {
        var preset_name = dict_obj.get("Preset_Name");
        var view_text = view_mode === "F" ? "Floor View" : "Height View";
        var text = "ASP: " + preset_name + " (" + view_text + ")";
        mgraphics.move_to(10, 25);
        mgraphics.text_path(text);
        mgraphics.fill();
    } catch (e) {
        // Ignore error se non c'è Preset_Name
    }
}

// Disegna toggle button
function draw_toggle_button(width) {
    var toggle_x = width - toggle_size - 10;
    var toggle_y = 5;
    
    // Sfondo toggle
    mgraphics.set_source_rgba(toggle_color[0], toggle_color[1], toggle_color[2], toggle_color[3]);
    mgraphics.rectangle(toggle_x, toggle_y, toggle_size, toggle_size);
    mgraphics.fill();
    
    // Testo toggle (bold e centrato)
    mgraphics.set_source_rgba(text_color[0], text_color[1], text_color[2], text_color[3]);
    mgraphics.select_font_face("Arial", 0, 1); // Bold
    mgraphics.set_font_size(16);
    var text_dims = mgraphics.text_measure(view_mode);
    mgraphics.move_to(
        toggle_x + (toggle_size - text_dims[0]) / 2,
        toggle_y + (toggle_size + text_dims[1]) / 2
    );
    mgraphics.text_path(view_mode);
    mgraphics.fill();
}

// Disegna tutte le posizioni
function draw_positions() {
    // Disegna prima i cerchi di selezione (sotto)
    if (selected_ir >= 0 && selected_ir < ir_positions.length) {
        draw_ir_selection(selected_ir);
    }
    
    if (mics_active) {
        draw_mic_activations();
    }
    
    // Poi disegna microfoni
    for (var i = 0; i < mic_positions.length; i++) {
        draw_microphone(i);
    }
    
    // Infine disegna IR (sopra)
    for (var i = 0; i < ir_positions.length; i++) {
        draw_ir_position(i);
    }
}

// Disegna cerchio di selezione IR
function draw_ir_selection(ir_index) {
    var pos = ir_positions[ir_index];
    var display_coords = get_display_coords(pos);
    var screen_pos = world_to_screen(display_coords.x, display_coords.y);
    
    mgraphics.set_source_rgba(ir_select_color[0], ir_select_color[1], ir_select_color[2], ir_select_color[3]);
    mgraphics.arc(screen_pos.x, screen_pos.y, select_radius, 0, 2 * Math.PI);
    mgraphics.fill();
}

// Disegna cerchi di attivazione microfoni
function draw_mic_activations() {
    for (var i = 0; i < mic_positions.length; i++) {
        var pos = mic_positions[i];
        var display_coords = get_display_coords(pos);
        var screen_pos = world_to_screen(display_coords.x, display_coords.y);
        
        // Usa colore diverso se questo microfono è selezionato
        var color = (selected_mic === i) ? mic_selected_color : mic_active_color;
        
        mgraphics.set_source_rgba(color[0], color[1], color[2], color[3]);
        mgraphics.arc(screen_pos.x, screen_pos.y, active_radius, 0, 2 * Math.PI);
        mgraphics.fill();
    }
}

// Disegna posizione IR (crosshair)
function draw_ir_position(ir_index) {
    var pos = ir_positions[ir_index];
    var display_coords = get_display_coords(pos);
    var screen_pos = world_to_screen(display_coords.x, display_coords.y);
    
    // Determina colore in base allo stato di selezione
    var color, text_col;
    if (selected_ir === -1) {
        // Nessun IR selezionato: tutti a massima opacità
        color = ir_color;
        text_col = text_color;
    } else if (selected_ir === ir_index) {
        // Questo IR è selezionato: massima opacità
        color = ir_color;
        text_col = text_color;
    } else {
        // Questo IR non è selezionato: bassa opacità
        color = ir_inactive_color;
        text_col = text_inactive_color;
    }
    
    mgraphics.set_source_rgba(color[0], color[1], color[2], color[3]);
    mgraphics.set_line_width(2);
    
    // Crosshair orizzontale
    mgraphics.move_to(screen_pos.x - ir_size, screen_pos.y);
    mgraphics.line_to(screen_pos.x + ir_size, screen_pos.y);
    mgraphics.stroke();
    
    // Crosshair verticale
    mgraphics.move_to(screen_pos.x, screen_pos.y - ir_size);
    mgraphics.line_to(screen_pos.x, screen_pos.y + ir_size);
    mgraphics.stroke();
    
    // Label posizione con colore appropriato
    mgraphics.set_source_rgba(text_col[0], text_col[1], text_col[2], text_col[3]);
    mgraphics.select_font_face("Arial");
    mgraphics.set_font_size(10);
    var label = "P" + pos.id;
    var text_dims = mgraphics.text_measure(label);
    mgraphics.move_to(screen_pos.x - text_dims[0]/2, screen_pos.y + ir_size + 15);
    mgraphics.text_path(label);
    mgraphics.fill();
}

// Disegna microfono
function draw_microphone(mic_index) {
    var pos = mic_positions[mic_index];
    var display_coords = get_display_coords(pos);
    var screen_pos = world_to_screen(display_coords.x, display_coords.y);
    
    // Determina opacità in base allo stato globale
    var mic_alpha, text_col;
    if (selected_ir === -1) {
        // Nessun IR selezionato: microfoni a bassa opacità
        mic_alpha = 0.1;
        text_col = text_inactive_color;
    } else {
        // C'è un IR selezionato: microfoni a opacità normale
        mic_alpha = 1.0;
        text_col = text_color;
    }
    
    // Cerchio esterno bianco
    mgraphics.set_source_rgba(mic_outer_color[0], mic_outer_color[1], mic_outer_color[2], mic_alpha);
    mgraphics.arc(screen_pos.x, screen_pos.y, mic_outer_radius, 0, 2 * Math.PI);
    mgraphics.fill();
    
    // Bordo nero
    mgraphics.set_source_rgba(mic_border_color[0], mic_border_color[1], mic_border_color[2], mic_alpha);
    mgraphics.set_line_width(1);
    mgraphics.arc(screen_pos.x, screen_pos.y, mic_outer_radius, 0, 2 * Math.PI);
    mgraphics.stroke();
    
    // Cerchio interno nero
    mgraphics.set_source_rgba(mic_inner_color[0], mic_inner_color[1], mic_inner_color[2], mic_alpha);
    mgraphics.arc(screen_pos.x, screen_pos.y, mic_inner_radius, 0, 2 * Math.PI);
    mgraphics.fill();
    
    // Label microfono con colore appropriato
    mgraphics.set_source_rgba(text_col[0], text_col[1], text_col[2], text_col[3]);
    mgraphics.select_font_face("Arial");
    mgraphics.set_font_size(9);
    var label = "M" + pos.id;
    var text_dims = mgraphics.text_measure(label);
    mgraphics.move_to(screen_pos.x - text_dims[0]/2, screen_pos.y + mic_outer_radius + 12);
    mgraphics.text_path(label);
    mgraphics.fill();
}

// Gestione click del mouse
function onclick(x, y, button, cmd, shift, capslock, option, ctrl) {
    if (!dict_obj) return;
    
    // Controlla click su toggle button
    var width = box.rect[2] - box.rect[0];
    var toggle_x = width - toggle_size - 10;
    var toggle_y = 5;
    
    if (x >= toggle_x && x <= toggle_x + toggle_size && 
        y >= toggle_y && y <= toggle_y + toggle_size) {
        // Toggle view mode
        view_mode = view_mode === "F" ? "H" : "F";
        mgraphics.redraw();
        return;
    }
    
    // Controlla click su microfoni (solo se un IR è selezionato)
    if (mics_active && selected_ir >= 0) {
        for (var i = 0; i < mic_positions.length; i++) {
            var pos = mic_positions[i];
            var display_coords = get_display_coords(pos);
            var screen_pos = world_to_screen(display_coords.x, display_coords.y);
            
            var dist = Math.sqrt(Math.pow(x - screen_pos.x, 2) + Math.pow(y - screen_pos.y, 2));
            if (dist <= active_radius) {
                // Click su microfono
                selected_mic = i; // Segna questo microfono come selezionato
                select_microphone(selected_ir, i);
                mgraphics.redraw(); // Ridisegna immediatamente per mostrare la selezione
                return;
            }
        }
    }
    
    // Controlla click su IR positions
    for (var i = 0; i < ir_positions.length; i++) {
        var pos = ir_positions[i];
        var display_coords = get_display_coords(pos);
        var screen_pos = world_to_screen(display_coords.x, display_coords.y);
        
        var dist = Math.sqrt(Math.pow(x - screen_pos.x, 2) + Math.pow(y - screen_pos.y, 2));
        if (dist <= select_radius) {
            // Click su IR position
            select_ir_position(i);
            return;
        }
    }
    
    // Click su area vuota - deseleziona tutto
    selected_ir = -1;
    selected_mic = -1;
    mics_active = false;
    mgraphics.redraw();
}

// Seleziona posizione IR
function select_ir_position(ir_index) {
    selected_ir = ir_index;
    // Seleziona automaticamente il primo microfono quando si seleziona un IR
    selected_mic = mic_positions.length > 0 ? 0 : -1;
    mics_active = true;
    var pos = ir_positions[ir_index];
    // post("Selected IR position: P" + pos.id + "\n");
    
    // Se c'è un microfono disponibile, selezionalo automaticamente
    if (selected_mic >= 0) {
        select_microphone(selected_ir, selected_mic);
    }
    
    mgraphics.redraw();
}

// Seleziona microfono e invia output
function select_microphone(ir_index, mic_index) {
    var ir_pos = ir_positions[ir_index];
    var mic_pos = mic_positions[mic_index];
    
    var key_path = "IRfiles::pos" + ir_pos.id + "::mic" + mic_pos.id;
    
    // post("Selected: P" + ir_pos.id + " -> M" + mic_pos.id + "\n");
    
    // Invia informazioni
    try {
        var file_path = dict_obj.get(key_path);
        if (file_path) {
            outlet(0, "key", key_path);
            outlet(1, "file", file_path);
            // post("Key: " + key_path + " -> File: " + file_path + "\n");
        } else {
            outlet(0, "key", key_path);
            outlet(1, "file", "not_found");
            // post("No file found for " + key_path + "\n");
        }
    } catch (e) {
        post("Error getting file: " + e.toString() + "\n");
    }
}

// Gestione ridimensionamento
function onresize(w, h) {
    calculate_bounds();
    mgraphics.redraw();
}

// Funzioni aggiuntive
function clear() {
    dict_name = "";
    dict_obj = null;
    ir_positions = [];
    mic_positions = [];
    selected_ir = -1;
    selected_mic = -1;
    hover_ir = -1;
    hover_mic = -1;
    mics_active = false;
    mgraphics.redraw();
}

// Help
function help() {
    post("asp_spatial_menu.js - ASP Spatial Selector\n");
    post("Usage: setDict <asp_dictionary_name>\n");
    post("Click toggle button (top-right) to switch between Floor (F) and Height (H) views\n");
    post("Click on IR position (crosshair) to select, then click on microphone (circle)\n");
    post("Outlet 0: key <IRfiles::posX::micY>\n");
    post("Outlet 1: file <path>\n");
    post("Messages: clear\n");
}
