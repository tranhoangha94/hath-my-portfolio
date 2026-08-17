FROM ollama/ollama:latest

ENV PIP_BREAK_SYSTEM_PACKAGES=1 \
    PYTHONUNBUFFERED=1 \
    OLLAMA_HOST=127.0.0.1:11434 \
    OLLAMA_KEEP_ALIVE=24h \
    CHAT_MODEL=qwen3:4b \
    EMBED_MODEL=bge-m3 \
    PORT=8080

RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 python3-pip curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt
COPY . .
RUN sed -i 's/\r$//' /app/start.sh && chmod +x /app/start.sh

EXPOSE 8080
# Official image ENTRYPOINT is `ollama`; reset so start.sh can boot both services.
ENTRYPOINT ["/bin/sh", "/app/start.sh"]
