from __future__ import annotations

import os
import re
import time
from collections.abc import AsyncIterator
from pathlib import Path

import httpx

from tools import execute_tool, is_off_topic, ollama_tool_schema, parse_tool_call, route_tool, _norm

OLLAMA_URL = os.getenv("OLLAMA_URL", "http://127.0.0.1:11434").rstrip("/")
CHAT_MODEL = os.getenv("CHAT_MODEL", "qwen3:4b")
KNOWLEDGE_PATH = Path(__file__).parent / "knowledge.md"

_chunks: list[str] = []


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


def _tool_payload(question: str) -> dict:
    return {
        "model": CHAT_MODEL,
        "messages": [
            {
                "role": "system",
                "content": (
                    "You route questions about Trần Hoàng Hà’s portfolio. "
                    "Call exactly one tool. Never answer in natural language. "
                    "If the question is not about him, call refuse_off_topic."
                ),
            },
            {"role": "user", "content": question},
        ],
        "stream": False,
        "think": False,
        "keep_alive": "24h",
        "tools": ollama_tool_schema(),
        "options": {"temperature": 0, "num_predict": 64, "num_ctx": 1024},
    }


async def warm_model() -> None:
    ensure_index()
    print("[chat-api] tools+guardrails ready")


async def _ollama_pick_tool(question: str) -> str:
    async with httpx.AsyncClient() as client:
        r = await client.post(f"{OLLAMA_URL}/api/chat", json=_tool_payload(question), timeout=120)
        r.raise_for_status()
        message = r.json().get("message") or {}
    return parse_tool_call(message) or "refuse_off_topic"


async def generate_stream(question: str, locale: str) -> AsyncIterator[str]:
    if is_off_topic(question):
        print("[chat-api] guardrail refuse")
        yield execute_tool("refuse_off_topic", locale)
        return
    name = route_tool(question)
    if name:
        print(f"[chat-api] tool {name}")
        yield execute_tool(name, locale)
        return
    print(f"[chat-api] llm router: {question!r}")
    try:
        name = await _ollama_pick_tool(question)
    except Exception as exc:
        print(f"[chat-api] llm router failed: {exc}")
        name = "refuse_off_topic"
    print(f"[chat-api] tool {name}")
    yield execute_tool(name, locale)


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
