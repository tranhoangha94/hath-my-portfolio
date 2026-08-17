from __future__ import annotations

import asyncio
import json
import os
from typing import Literal

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field

from rag import CHAT_MODEL, generate, generate_stream, warm_model

app = FastAPI(title="Ha Portfolio Chat")

_defaults = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://tranhoangha-portfolio.vercel.app",
]
_extra = [o.strip() for o in os.getenv("ALLOWED_ORIGINS", "").split(",") if o.strip()]
origins = list(dict.fromkeys(_defaults + _extra))

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=False,
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["*"],
)


class ChatIn(BaseModel):
    message: str = Field(min_length=1, max_length=800)
    locale: Literal["vi", "en"] = "vi"


class ChatOut(BaseModel):
    reply: str


async def _warm() -> None:
    try:
        await warm_model()
    except Exception as exc:
        print(f"[chat-api] warmup skipped: {exc}")


@app.on_event("startup")
async def startup() -> None:
    asyncio.create_task(_warm())


@app.get("/health")
async def health() -> dict:
    return {"ok": True, "chat_model": CHAT_MODEL, "router": "tools+guardrails"}


@app.post("/chat", response_model=ChatOut)
async def chat(body: ChatIn) -> ChatOut:
    try:
        reply = await generate(body.message.strip(), body.locale)
        return ChatOut(reply=reply)
    except Exception as exc:
        raise HTTPException(status_code=503, detail=f"Chat backend unavailable: {exc}") from exc


@app.post("/chat/stream")
async def chat_stream(body: ChatIn) -> StreamingResponse:
    async def events():
        yield ": ping\n\n"
        try:
            async for delta in generate_stream(body.message.strip(), body.locale):
                yield f"data: {json.dumps({'delta': delta}, ensure_ascii=False)}\n\n"
            yield "data: {\"done\":true}\n\n"
        except Exception as exc:
            yield f"data: {json.dumps({'error': str(exc)})}\n\n"

    return StreamingResponse(
        events(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )
