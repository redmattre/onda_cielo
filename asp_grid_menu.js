// asp_grid_menu.js - Griglia interattiva per ASP (Acoustic Space Preset)
// Griglia 9x6: 9 posizioni IR x 6 microfoni

// Configurazione canvas
mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

// Dichiarazione numero di outlet
outlets = 2;

// Variabili globali
var dict_name = "";
var dict_obj = null;
var grid_rows = 9; // posizioni IR - default, verrà aggiornato dal dizionario
var grid_cols = 6; // microfoni - default, verrà aggiornato dal dizionario
var cell_width = 0;
var cell_height = 0;
var margin = 2;
var header_height = 35; // Aumentato per dare più spazio all'intestazione
var label_height = 20;  // Nuovo: spazio dedicato alle labels M1, M2, etc.
var label_width = 30;   // spazio per le labels delle posizioni

// Stato della griglia
var hover_row = -1;
var hover_col = -1;
var selected_row = -1;
var selected_col = -1;

// Colori - Sfondo bianco con testo nero e dettagli grigi
var bg_color = [1.0, 1.0, 1.0, 1.0];        // Bianco
var grid_color = [0.6, 0.6, 0.6, 1.0];      // Grigio medio per i bordi
var cell_color = [0.95, 0.95, 0.95, 1.0];   // Grigio molto chiaro per le celle
var hover_color = [0.85, 0.85, 0.85, 1.0];  // Grigio chiaro per hover
var selected_color = [0.7, 0.7, 0.7, 1.0];  // Grigio medio per selezione
var text_color = [0.0, 0.0, 0.0, 1.0];      // Nero per il testo
var header_color = [0.9, 0.9, 0.9, 1.0];    // Grigio molto chiaro per header

// Inizializzazione
function loadbang() {
    // post("asp_grid_menu.js loaded\n");
    // post("Outlets: 0=key, 1=file\n");
    // Forza il ridisegno dopo un breve ritardo per assicurarsi che box.rect sia inizializzato
    mgraphics.redraw();
}

// Funzione per ricevere il nome del dizionario ASP
function setDict(name) {
    dict_name = name;
    // post("Loading ASP dictionary: " + dict_name + "\n");
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
            // Calcola dinamicamente le dimensioni della griglia dal dizionario
            calculate_grid_size_from_dict();
            // post("Loaded ASP: " + preset_name + "\n");
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

// Calcola le dimensioni della griglia dal contenuto del dizionario
function calculate_grid_size_from_dict() {
    if (!dict_obj) return;
    
    try {
        var ir_files = dict_obj.get("IRfiles");
        if (!ir_files) return;
        
        var max_pos = 0;
        var max_mic = 0;
        
        // Approccio diverso: controlla direttamente le posizioni da 1 a 20
        for (var pos = 1; pos <= 20; pos++) {
            var pos_key = "pos" + pos;
            try {
                var pos_data = dict_obj.get("IRfiles::" + pos_key);
                if (pos_data) {
                    // Questa posizione esiste, aggiorna max_pos
                    if (pos > max_pos) max_pos = pos;
                    
                    // Ora controlla i microfoni per questa posizione
                    for (var mic = 1; mic <= 20; mic++) {
                        var mic_key = "mic" + mic;
                        try {
                            var file_path = dict_obj.get("IRfiles::" + pos_key + "::" + mic_key);
                            if (file_path) {
                                // Questo microfono esiste, aggiorna max_mic
                                if (mic > max_mic) max_mic = mic;
                            }
                        } catch (mic_error) {
                            // Microfono non esiste, continua
                            continue;
                        }
                    }
                }
            } catch (pos_error) {
                // Posizione non esiste, continua
                continue;
            }
        }
        
        // Aggiorna le dimensioni della griglia se trovate
        if (max_pos > 0 && max_mic > 0) {
            grid_rows = max_pos;
            grid_cols = max_mic;
            post("Grid size from dictionary: " + grid_rows + " rows x " + grid_cols + " cols\n");
        }
        
    } catch (e) {
        post("Error calculating grid size: " + e.toString() + "\n");
        // Mantieni i valori di default in caso di errore
        grid_rows = 9;
        grid_cols = 6;
    }
}

// Calcola le dimensioni della griglia
function calculate_grid_dimensions() {
    var width = box.rect[2] - box.rect[0];
    var height = box.rect[3] - box.rect[1];
    
    var available_width = width - (margin * 2) - label_width;
    var available_height = height - header_height - label_height - (margin * 2);
    
    // Assicurati che le dimensioni siano positive
    if (available_width > 0 && available_height > 0) {
        cell_width = available_width / grid_cols;
        cell_height = available_height / grid_rows;
    } else {
        // Dimensioni minime di sicurezza
        cell_width = 50;
        cell_height = 30;
    }
    
    // post("Grid dimensions: " + cell_width + "x" + cell_height + " (total: " + width + "x" + height + ")\n");
}

// Funzione di disegno principale
function paint() {
    // Calcola le dimensioni ad ogni disegno per essere sicuri
    calculate_grid_dimensions();
    
    var width = box.rect[2] - box.rect[0];
    var height = box.rect[3] - box.rect[1];
    
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
    
    // Verifica che le dimensioni siano ragionevoli prima di disegnare
    if (cell_width < 10 || cell_height < 10) {
        mgraphics.set_source_rgba(text_color[0], text_color[1], text_color[2], text_color[3]);
        mgraphics.select_font_face("Arial");
        mgraphics.set_font_size(12);
        var text = "Resize window larger";
        var text_dims = mgraphics.text_measure(text);
        mgraphics.move_to((width - text_dims[0]) / 2, (height + text_dims[1]) / 2);
        mgraphics.text_path(text);
        mgraphics.fill();
        return;
    }
    
    // Header con nome preset
    draw_header(width);
    
    // Griglia
    draw_grid();
    
    // Labels
    draw_labels();
}

function draw_header(width) {
    // Sfondo header - più alto e separato
    mgraphics.set_source_rgba(header_color[0], header_color[1], header_color[2], header_color[3]);
    mgraphics.rectangle(0, 0, width, header_height);
    mgraphics.fill();
    
    // Testo header - centrato verticalmente nell'area header
    try {
        var preset_name = dict_obj.get("Preset_Name");
        mgraphics.set_source_rgba(text_color[0], text_color[1], text_color[2], text_color[3]);
        mgraphics.select_font_face("Arial");
        mgraphics.set_font_size(14);
        mgraphics.move_to(10, header_height - 12);
        mgraphics.text_path("ASP: " + preset_name);
        mgraphics.fill();
    } catch (e) {
        // Ignore error se non c'è Preset_Name
    }
}

function draw_grid() {
    var start_x = margin + label_width;
    var start_y = header_height + label_height + margin;
    
    for (var row = 0; row < grid_rows; row++) {
        for (var col = 0; col < grid_cols; col++) {
            var x = start_x + (col * cell_width);
            var y = start_y + (row * cell_height);
            
            // Colore della cella
            var color = cell_color;
            if (row === selected_row && col === selected_col) {
                color = selected_color;
            } else if (row === hover_row && col === hover_col) {
                color = hover_color;
            }
            
            // Disegna cella (senza bordi)
            mgraphics.set_source_rgba(color[0], color[1], color[2], color[3]);
            mgraphics.rectangle(x, y, cell_width, cell_height);
            mgraphics.fill();
            
            // Testo del nome del file
            var file_name = get_file_name(row + 1, col + 1);
            if (file_name) {
                mgraphics.set_source_rgba(text_color[0], text_color[1], text_color[2], text_color[3]);
                mgraphics.select_font_face("Arial");
                mgraphics.set_font_size(11);
                
                // Tronca il nome del file se troppo lungo
                var display_name = file_name;
                if (display_name.length > 15) {
                    display_name = display_name.substring(0, 12) + "...";
                }
                
                var text_dims = mgraphics.text_measure(display_name);
                var text_x = x + (cell_width - text_dims[0]) / 2;
                var text_y = y + (cell_height + text_dims[1]) / 2;
                
                mgraphics.move_to(text_x, text_y);
                mgraphics.text_path(display_name);
                mgraphics.fill();
            }
        }
    }
}

function draw_labels() {
    var start_x = margin + label_width;
    var start_y = header_height + label_height + margin;
    
    mgraphics.set_source_rgba(text_color[0], text_color[1], text_color[2], text_color[3]);
    mgraphics.select_font_face("Arial");
    mgraphics.set_font_size(11);
    
    // Labels colonne (microfoni) - ora hanno il loro spazio dedicato
    for (var col = 0; col < grid_cols; col++) {
        var x = start_x + (col * cell_width) + (cell_width / 2);
        var text = "M" + (col + 1);
        
        // Font bold per le labels
        mgraphics.select_font_face("Arial", 0, 1); // weight=1 per bold
        var text_dims = mgraphics.text_measure(text);
        // Posizionate nell'area dedicata tra header e griglia
        mgraphics.move_to(x - (text_dims[0] / 2), header_height + label_height - 5);
        mgraphics.text_path(text);
        mgraphics.fill();
    }
    
    // Labels righe (posizioni IR) - a sinistra
    for (var row = 0; row < grid_rows; row++) {
        var y = start_y + (row * cell_height) + (cell_height / 2);
        var text = "P" + (row + 1);
        
        // Font bold per le labels
        mgraphics.select_font_face("Arial", 0, 1); // weight=1 per bold
        var text_dims = mgraphics.text_measure(text);
        mgraphics.move_to(margin + 2, y + (text_dims[1] / 2));
        mgraphics.text_path(text);
        mgraphics.fill();
    }
}

// Ottiene il nome del file (senza percorso)
function get_file_name(pos, mic) {
    try {
        var file_path = dict_obj.get("IRfiles::pos" + pos + "::mic" + mic);
        if (file_path) {
            // Estrae solo il nome del file dal percorso
            var parts = file_path.split("/");
            return parts[parts.length - 1];
        }
        return null;
    } catch (e) {
        return null;
    }
}

// Verifica se il file esiste nel dizionario
function check_file_exists(pos, mic) {
    try {
        var file_path = dict_obj.get("IRfiles::pos" + pos + "::mic" + mic);
        return file_path !== null && file_path !== undefined;
    } catch (e) {
        return false;
    }
}

// Gestione mouse
function onclick(x, y, button, cmd, shift, capslock, option, ctrl) {
    if (!dict_obj) return;
    
    var cell_coords = get_cell_from_coords(x, y);
    if (cell_coords.row >= 0 && cell_coords.col >= 0) {
        selected_row = cell_coords.row;
        selected_col = cell_coords.col;
        
        var pos = selected_row + 1;
        var mic = selected_col + 1;
        
        var key_path = "IRfiles::pos" + pos + "::mic" + mic;
        
        // post("Selected: " + key_path + "\n");
        
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
        
        mgraphics.redraw();
    }
}

function onmousemove(x, y, button, cmd, shift, capslock, option, ctrl) {
    if (!dict_obj) return;
    
    var cell_coords = get_cell_from_coords(x, y);
    if (cell_coords.row !== hover_row || cell_coords.col !== hover_col) {
        hover_row = cell_coords.row;
        hover_col = cell_coords.col;
        mgraphics.redraw();
    }
}

function onmouseleave() {
    if (hover_row !== -1 || hover_col !== -1) {
        hover_row = -1;
        hover_col = -1;
        mgraphics.redraw();
    }
}

// Converte coordinate mouse in coordinate griglia
function get_cell_from_coords(x, y) {
    var start_x = margin + label_width;
    var start_y = header_height + label_height + margin;  // Aggiunto label_height per compensare l'header
    
    if (x < start_x || y < start_y) {
        return {row: -1, col: -1};
    }
    
    var col = Math.floor((x - start_x) / cell_width);
    var row = Math.floor((y - start_y) / cell_height);
    
    if (col >= grid_cols || row >= grid_rows) {
        return {row: -1, col: -1};
    }
    
    return {row: row, col: col};
}

// Gestione ridimensionamento
function onresize(w, h) {
    calculate_grid_dimensions();
    mgraphics.redraw();
}

// Funzioni aggiuntive
function clear() {
    dict_name = "";
    dict_obj = null;
    selected_row = -1;
    selected_col = -1;
    hover_row = -1;
    hover_col = -1;
    // Reset alle dimensioni di default
    grid_rows = 9;
    grid_cols = 6;
    mgraphics.redraw();
}

// Help
function help() {
    post("asp_grid_menu.js - ASP Grid Selector\n");
    post("Usage: setDict <asp_dictionary_name>\n");
    post("Click on grid cells to select IR position + microphone\n");
    post("Outlet 0: key <IRfiles::posX::micY>\n");
    post("Outlet 1: file <path>\n");
    post("Grid shows file names in cells\n");
    post("Messages: clear\n");
}
