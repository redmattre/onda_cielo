// dict_menu.js - Test per dizionario Max/MSP
// Versione semplificata per debugging

// Configurazione canvas
mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

// Variabili globali
var dict_name = "";
var key_count = 0;
var status_message = "Send 'setDict <name>'";
var menu_items = [];
var selected_item = -1;
var hover_item = -1;
var is_open = false;
var item_height = 20;
var dict_obj = null;

// Colori
var bg_color = [0.2, 0.2, 0.2, 1.0];
var text_color = [0.9, 0.9, 0.9, 1.0];
var border_color = [0.5, 0.5, 0.5, 1.0];
var item_color = [0.3, 0.3, 0.3, 1.0];
var hover_color = [0.4, 0.4, 0.5, 1.0];
var selected_color = [0.5, 0.6, 0.8, 1.0];

// Inizializzazione
function loadbang() {
    post("dict_menu.js loaded - simple version\n");
    mgraphics.redraw();
}

// Funzione per gestire il comando setDict
function setDict(name) {
    dict_name = name;
    post("Trying to load dictionary: " + dict_name + "\n");
    check_dictionary();
}

// Funzione per controllare il dizionario
function check_dictionary() {
    if (dict_name === "") {
        status_message = "No dictionary name";
        key_count = 0;
        menu_items = [];
        mgraphics.redraw();
        return;
    }
    
    try {
        post("Creating Dict object for: " + dict_name + "\n");
        dict_obj = new Dict(dict_name);
        
        post("Getting keys...\n");
        var keys = dict_obj.getkeys();
        
        if (keys && keys.length > 0) {
            key_count = keys.length;
            menu_items = [];
            
            // Copia le chiavi nell'array menu_items
            for (var i = 0; i < keys.length; i++) {
                menu_items.push(keys[i]);
                post("Key " + i + ": " + keys[i] + "\n");
            }
            
            status_message = "Dict '" + dict_name + "': " + key_count + " keys - Click to open";
            post("Success! Found " + key_count + " keys\n");
            
        } else {
            key_count = 0;
            menu_items = [];
            status_message = "Dict '" + dict_name + "': empty";
            post("Dictionary is empty\n");
        }
        
        // Reset selezioni
        selected_item = -1;
        hover_item = -1;
        is_open = false;
        
    } catch (e) {
        status_message = "Error: " + e.toString();
        key_count = 0;
        menu_items = [];
        post("ERROR: " + e.toString() + "\n");
    }
    
    mgraphics.redraw();
}

// Funzione di disegno principale
function paint() {
    var width = box.rect[2] - box.rect[0];
    var height = box.rect[3] - box.rect[1];
    
    // Pulisci canvas
    mgraphics.set_source_rgba(bg_color[0], bg_color[1], bg_color[2], bg_color[3]);
    mgraphics.rectangle(0, 0, width, height);
    mgraphics.fill();
    
    // Disegna bordo
    mgraphics.set_source_rgba(border_color[0], border_color[1], border_color[2], border_color[3]);
    mgraphics.set_line_width(1);
    mgraphics.rectangle(0, 0, width, height);
    mgraphics.stroke();
    
    if (menu_items.length === 0) {
        // Mostra il messaggio di stato se non ci sono elementi
        mgraphics.set_source_rgba(text_color[0], text_color[1], text_color[2], text_color[3]);
        mgraphics.select_font_face("Arial");
        mgraphics.set_font_size(12);
        
        var text_dims = mgraphics.text_measure(status_message);
        mgraphics.move_to((width - text_dims[0]) / 2, (height + text_dims[1]) / 2);
        mgraphics.text_path(status_message);
        mgraphics.fill();
        return;
    }
    
    if (is_open) {
        // Menu aperto - mostra tutti gli elementi
        for (var i = 0; i < menu_items.length; i++) {
            var y = i * item_height;
            
            // Colore di sfondo dell'elemento
            if (i === selected_item) {
                mgraphics.set_source_rgba(selected_color[0], selected_color[1], selected_color[2], selected_color[3]);
            } else if (i === hover_item) {
                mgraphics.set_source_rgba(hover_color[0], hover_color[1], hover_color[2], hover_color[3]);
            } else {
                mgraphics.set_source_rgba(item_color[0], item_color[1], item_color[2], item_color[3]);
            }
            
            mgraphics.rectangle(1, y + 1, width - 2, item_height - 1);
            mgraphics.fill();
            
            // Testo dell'elemento
            mgraphics.set_source_rgba(text_color[0], text_color[1], text_color[2], text_color[3]);
            mgraphics.select_font_face("Arial");
            mgraphics.set_font_size(11);
            mgraphics.move_to(5, y + item_height - 5);
            mgraphics.text_path(menu_items[i]);
            mgraphics.fill();
            
            // Linea separatrice
            if (i < menu_items.length - 1) {
                mgraphics.set_source_rgba(border_color[0], border_color[1], border_color[2], border_color[3]);
                mgraphics.set_line_width(0.5);
                mgraphics.move_to(1, y + item_height);
                mgraphics.line_to(width - 1, y + item_height);
                mgraphics.stroke();
            }
        }
    } else {
        // Menu chiuso - mostra solo l'elemento selezionato o placeholder
        var display_text = selected_item >= 0 ? menu_items[selected_item] : "Click to select...";
        
        // Sfondo
        mgraphics.set_source_rgba(item_color[0], item_color[1], item_color[2], item_color[3]);
        mgraphics.rectangle(1, 1, width - 2, height - 2);
        mgraphics.fill();
        
        // Testo
        mgraphics.set_source_rgba(text_color[0], text_color[1], text_color[2], text_color[3]);
        mgraphics.select_font_face("Arial");
        mgraphics.set_font_size(11);
        mgraphics.move_to(5, height - 6);
        mgraphics.text_path(display_text);
        mgraphics.fill();
        
        // Freccia dropdown
        mgraphics.set_source_rgba(text_color[0], text_color[1], text_color[2], text_color[3]);
        var arrow_x = width - 15;
        var arrow_y = height / 2;
        mgraphics.move_to(arrow_x, arrow_y - 3);
        mgraphics.line_to(arrow_x + 5, arrow_y + 2);
        mgraphics.line_to(arrow_x + 10, arrow_y - 3);
        mgraphics.stroke();
    }
}

// Gestione mouse
function onclick(x, y, button, cmd, shift, capslock, option, ctrl) {
    if (menu_items.length === 0) return;
    
    if (is_open) {
        // Menu aperto - seleziona elemento
        var item_index = Math.floor(y / item_height);
        if (item_index >= 0 && item_index < menu_items.length) {
            selected_item = item_index;
            post("Selected: " + menu_items[selected_item] + "\n");
            
            // Invia il valore selezionato
            outlet(0, menu_items[selected_item]);
            
            // Invia anche il valore dal dizionario se esiste
            if (dict_obj) {
                try {
                    var value = dict_obj.get(menu_items[selected_item]);
                    outlet(1, value);
                    post("Value: " + value + "\n");
                } catch (e) {
                    post("Error getting value for key '" + menu_items[selected_item] + "': " + e.toString() + "\n");
                }
            }
        }
        is_open = false;
        hover_item = -1;
        
        // Ripristina dimensioni originali
        box.rect = [box.rect[0], box.rect[1], box.rect[2], box.rect[1] + 25];
        
    } else {
        // Menu chiuso - aprilo
        is_open = true;
        hover_item = -1;
        
        // Ridimensiona l'oggetto per mostrare tutti gli elementi
        var new_height = menu_items.length * item_height + 2;
        box.rect = [box.rect[0], box.rect[1], box.rect[2], box.rect[1] + new_height];
    }
    
    mgraphics.redraw();
}

function onmousemove(x, y, button, cmd, shift, capslock, option, ctrl) {
    if (is_open && menu_items.length > 0) {
        var new_hover = Math.floor(y / item_height);
        if (new_hover >= 0 && new_hover < menu_items.length && new_hover !== hover_item) {
            hover_item = new_hover;
            mgraphics.redraw();
        }
    }
}

function onmouseleave() {
    if (hover_item !== -1) {
        hover_item = -1;
        mgraphics.redraw();
    }
}

// Gestione ridimensionamento
function onresize(w, h) {
    mgraphics.redraw();
}

// Funzioni aggiuntive
function clear() {
    menu_items = [];
    selected_item = -1;
    hover_item = -1;
    is_open = false;
    dict_name = "";
    status_message = "Send 'setDict <name>'";
    mgraphics.redraw();
}

function close() {
    if (is_open) {
        is_open = false;
        box.rect = [box.rect[0], box.rect[1], box.rect[2], box.rect[1] + 25];
        mgraphics.redraw();
    }
}

// Help
function help() {
    post("dict_menu.js - Interactive dictionary menu\n");
    post("Usage: setDict <dictionary_name>\n");
    post("Click to open menu and select items\n");
    post("Outlet 0: Selected key\n");
    post("Outlet 1: Selected value from dictionary\n");
    post("Messages: clear, close\n");
}
