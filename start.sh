#!/bin/bash
echo "🛡️  Starting SafeBites..."

# Check if port 8000 is already in use and kill it
if lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null ; then
    echo "📌 Stopping existing server on port 8000..."
    kill -9 $(lsof -t -i:8000) 2>/dev/null
    sleep 1
fi

echo "📍 Opening http://localhost:8000 in your browser..."
python3 -m http.server 8000 &
sleep 2
open http://localhost:8000 || xdg-open http://localhost:8000 || start http://localhost:8000
