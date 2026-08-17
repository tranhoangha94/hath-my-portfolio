#!/bin/sh
set -e

export OLLAMA_HOST="${OLLAMA_HOST:-127.0.0.1:11434}"
export OLLAMA_KEEP_ALIVE="${OLLAMA_KEEP_ALIVE:-24h}"

ollama serve &

i=0
while [ "$i" -lt 60 ]; do
  if curl -sf "http://127.0.0.1:11434/api/tags" >/dev/null; then
    break
  fi
  i=$((i + 1))
  sleep 2
done

if ! curl -sf "http://127.0.0.1:11434/api/tags" >/dev/null; then
  echo "Ollama did not start"
  exit 1
fi

# Answer Railway healthchecks while models download.
python3 - <<'PY' &
import os
from http.server import BaseHTTPRequestHandler, HTTPServer

class H(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(b'{"ok":true,"starting":true}')

    def log_message(self, *_args):
        pass

HTTPServer(("0.0.0.0", int(os.environ.get("PORT", "8080"))), H).serve_forever()
PY
BOOT_PID=$!

echo "Pulling models (first boot can take several minutes)..."
ollama pull "${CHAT_MODEL:-qwen3:4b}"
ollama pull "${EMBED_MODEL:-bge-m3}"

kill "$BOOT_PID" 2>/dev/null || true
wait "$BOOT_PID" 2>/dev/null || true
sleep 1

echo "Starting API on port ${PORT:-8080}"
exec python3 -m uvicorn main:app --host 0.0.0.0 --port "${PORT:-8080}"
