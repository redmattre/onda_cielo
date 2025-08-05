#!/bin/bash

# Spostati nella directory dello script
cd "$(dirname "$0")"

# Cartella da servire
TARGET_DIR="Cielo_ver0.1.1"
PORT=8000

# Controlla se la porta 8000 è libera
if lsof -i :$PORT >/dev/null 2>&1; then
  echo "❌ Porta $PORT già in uso. Chiudi il processo che la occupa e riprova."
  exit 1
fi

# Controlla che la cartella esista
if [ ! -d "$TARGET_DIR" ]; then
  echo "❌ Cartella '$TARGET_DIR' non trovata"
  exit 1
fi

# Avvia il server Python in background
cd "$TARGET_DIR"
echo "🚀 Avvio server su http://localhost:$PORT..."
python3 -m http.server "$PORT" > /dev/null 2>&1 &
SERVER_PID=$!
cd ..

# Quando lo script termina, uccidi il server
trap "echo '🛑 Arresto del server sulla porta $PORT...'; kill $SERVER_PID 2>/dev/null" EXIT

# Apri la pagina nel browser
open "http://localhost:$PORT"

# Apri il file Max
echo "🎧 Apertura di main_ondacielo.maxpat..."
open -a "Max" main_ondacielo.maxpat

# Attendi la chiusura (Ctrl+C)
echo "⏳ Server attivo. Premi Ctrl+C per uscire."
wait