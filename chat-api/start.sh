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

ollama pull "${CHAT_MODEL:-qwen3:4b}"
ollama pull "${EMBED_MODEL:-bge-m3}"

exec python3 -m uvicorn main:app --host 0.0.0.0 --port "${PORT:-8080}"
