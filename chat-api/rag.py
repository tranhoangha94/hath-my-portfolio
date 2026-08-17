from __future__ import annotations

import json
import os
import re
import time
from collections.abc import AsyncIterator
from pathlib import Path

import httpx

from faq import match_faq

OLLAMA_URL = os.getenv("OLLAMA_URL", "http://127.0.0.1:11434").rstrip("/")
CHAT_MODEL = os.getenv("CHAT_MODEL", "qwen3:4b")
KNOWLEDGE_PATH = Path(__file__).parent / "knowledge.md"

_chunks: list[str] = []
_FOLD = str.maketrans(
    "áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ"
    "ÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ",
    "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd"
    "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd",
)


def _norm(text: str) -> str:
    return text.lower().translate(_FOLD)


def _tokens(text: str) -> set[str]:
    return {t for t in re.findall(r"[a-z0-9]+", _norm(text)) if len(t) > 1}


def _split_chunks(text: str) -> list[str]:
    parts = re.split(r"\n(?=## )", text.strip())
    return [part.strip() for part in parts if part.strip()]


def ensure_index() -> None:
    global _chunks
    if _chunks:
        return
    _chunks = _split_chunks(KNOWLEDGE_PATH.read_text(encoding="utf-8"))
    print(f"[chat-api] loaded {len(_chunks)} knowledge chunks")


def retrieve(query: str, k: int = 3) -> list[str]:
    ensure_index()
    q = _tokens(query)
    if not q:
        return _chunks[:k]
    scored: list[tuple[float, str]] = []
    for chunk in _chunks:
        words = _tokens(chunk)
        overlap = len(q & words)
        if overlap == 0:
            continue
        scored.append((overlap / (len(q) ** 0.5), chunk))
    scored.sort(key=lambda item: item[0], reverse=True)
    picked = [chunk for _, chunk in scored[:k]]
    return picked or _chunks[:k]


def strip_think(text: str) -> str:
    cleaned = re.sub(r"<think>[\s\S]*?</think>", "", text, flags=re.I)
    cleaned = re.sub(r"<\|?think\|>[\s\S]*?<\|?/think\|>", "", cleaned, flags=re.I)
    return cleaned.strip()


def _payload(question: str, locale: str, stream: bool) -> dict:
    context = retrieve(question)
    context_block = "\n\n---\n\n".join(context)
    lang = "Vietnamese" if locale.startswith("vi") else "English"
    system = (
        "You are Trần Hoàng Hà’s portfolio assistant in Hanoi. "
        "Answer ONLY from the context. If it is not enough, say you do not know "
        "and suggest emailing tranhoangha94@gmail.com. Do not invent facts. "
        f"Reply in {lang}, 2–5 short sentences."
    )
    return {
        "model": CHAT_MODEL,
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": f"Context:\n{context_block}\n\nQuestion: {question}"},
        ],
        "stream": stream,
        "think": False,
        "keep_alive": "24h",
        "options": {
            "temperature": 0.2,
            "num_predict": 180,
            "num_ctx": 2048,
        },
    }


async def warm_model() -> None:
    ensure_index()
    started = time.perf_counter()
    payload = _payload("who is Tran Hoang Ha?", "en", stream=False)
    payload["options"]["num_predict"] = 8
    async with httpx.AsyncClient() as client:
        r = await client.post(f"{OLLAMA_URL}/api/chat", json=payload, timeout=180)
        r.raise_for_status()
    print(f"[chat-api] chat model warm in {time.perf_counter() - started:.1f}s")


async def generate_stream(question: str, locale: str) -> AsyncIterator[str]:
    canned = match_faq(question, locale)
    if canned:
        print("[chat-api] faq hit")
        yield canned
        return
    payload = _payload(question, locale, stream=True)
    async with httpx.AsyncClient() as client:
        async with client.stream("POST", f"{OLLAMA_URL}/api/chat", json=payload, timeout=180) as response:
            response.raise_for_status()
            async for line in response.aiter_lines():
                if not line:
                    continue
                data = json.loads(line)
                piece = data.get("message", {}).get("content") or ""
                if piece:
                    yield piece


async def generate(question: str, locale: str) -> str:
    started = time.perf_counter()
    parts: list[str] = []
    async for piece in generate_stream(question, locale):
        parts.append(piece)
    text = strip_think("".join(parts))
    print(f"[chat-api] reply in {time.perf_counter() - started:.1f}s ({len(text)} chars)")
    if text:
        return text
    return (
        "Sorry, I could not answer that."
        if locale.startswith("en")
        else "Xin lỗi, mình chưa trả lời được câu này."
    )
