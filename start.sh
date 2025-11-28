#!/bin/bash
echo "🛡️  Starting SafeBites..."
echo "📍 Opening http://localhost:8000 in your browser..."
python3 -m http.server 8000 &
sleep 2
open http://localhost:8000 || xdg-open http://localhost:8000 || start http://localhost:8000
