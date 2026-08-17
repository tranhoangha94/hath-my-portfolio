from __future__ import annotations

import os
from typing import Literal

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from rag import CHAT_MODEL, EMBED_MODEL, generate, ensure_index

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


@app.on_event("startup")
async def startup() -> None:
    try:
        await ensure_index()
    except Exception as exc:
        print(f"[chat-api] index warmup skipped: {exc}")


@app.get("/health")
async def health() -> dict:
    return {"ok": True, "chat_model": CHAT_MODEL, "embed_model": EMBED_MODEL}


@app.post("/chat", response_model=ChatOut)
async def chat(body: ChatIn) -> ChatOut:
    try:
        reply = await generate(body.message.strip(), body.locale)
        return ChatOut(reply=reply)
    except Exception as exc:
        raise HTTPException(status_code=503, detail=f"Chat backend unavailable: {exc}") from exc
