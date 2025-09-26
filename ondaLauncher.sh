#!/bin/bash

# Spostati nella directory dello script
cd "$(dirname "$0")"

# Cartella da servire
TARGET_DIR="Cielo_ver0.1.1"

# Porta iniziale
PORT=7776

# Trova la prima porta libera
while lsof -i :$PORT >/dev/null 2>&1; do
  PORT=$((PORT + 1))
done

echo "✅ Porta libera trovata: $PORT"

# Controlla che la cartella esista
if [ ! -d "$TARGET_DIR" ]; then
  echo "❌ Cartella '$TARGET_DIR' non trovata"
  exit 1
fi

# Avvia il server Python in background e salva il PID
cd "$TARGET_DIR"
echo "🚀 Avvio server su http://localhost:$PORT..."
python3 -m http.server "$PORT" > /dev/null 2>&1 &
SERVER_PID=$!
cd ..

# Quando lo script termina, uccidi il server Python
trap "echo '🛑 Arresto del server sulla porta $PORT...'; kill $SERVER_PID 2>/dev/null" EXIT

# Apri il browser
# open "http://localhost:$PORT"

# Apri il file Max
# echo "🎧 Apertura di main_ondacielo.maxpat..."
# open -a "Max" main_ondacielo.maxpat

# Attendi la chiusura di Max o termina con Ctrl+C
echo "⏳ Server attivo. Premi Ctrl+C per uscire."
wait