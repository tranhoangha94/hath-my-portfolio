# Portfolio chatbot (RAG)

Widget trên site gọi API này. Model: **qwen3:4b** (chat) + **bge-m3** (embedding), chạy bằng Ollama.

Portfolio vẫn ở **Vercel**. Ollama không chạy được trên Vercel serverless — cần Railway (hoặc VPS) bật 24/7.

## Local

1. Cài [Ollama](https://ollama.com), rồi:

```bash
ollama pull qwen3:4b
ollama pull bge-m3
```

2. Chạy API (Python 3.11+):

```bash
cd chat-api
python -m venv .venv
# Windows:
.venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8080
```

3. File `.env.local` ở **root Next.js**:

```
NEXT_PUBLIC_CHAT_API_URL=http://localhost:8080
```

4. `npm run dev` — nút chat góc trái dưới.

Cần máy ~8GB RAM. Không cần GPU.

## Railway

RAM **tối thiểu 8GB** (2 model ~3.7GB + Python + Ollama). CPU inference nên câu trả lời có thể mất 20–60 giây.

1. New service → Deploy from GitHub.
2. **Root Directory** = `chat-api`.
3. Settings → Memory **8 GB** (hoặc hơn).
4. (Khuyến nghị) Volume mount tại `/root/.ollama` để không phải `pull` lại mỗi lần restart.
5. Variables:

```
CHAT_MODEL=qwen3:4b
EMBED_MODEL=bge-m3
ALLOWED_ORIGINS=https://tranhoangha-portfolio.vercel.app,https://<custom-domain>
```

Lần deploy đầu `ollama pull` ~3.7GB nên khá lâu (có thể 5–10 phút). Healthcheck `/health` chỉ lên sau khi pull xong.

6. Trên **Vercel** (build-time, rồi Redeploy):

```
NEXT_PUBLIC_CHAT_API_URL=https://<service>.up.railway.app
```

`NEXT_PUBLIC_*` được nhúng lúc build — đổi biến xong phải deploy lại site.
