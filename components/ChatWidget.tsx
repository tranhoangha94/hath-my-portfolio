"use client";

import { useEffect, useRef, useState } from "react";
import ChatMarkdown from "@/components/ChatMarkdown";
import { ChatBotIcon } from "@/components/Icons";
import type { Locale } from "@/i18n/config";
import type { UiDict } from "@/i18n/ui";

type Msg = { role: "user" | "bot"; text: string };
type Pos = { x: number; y: number };

const API = process.env.NEXT_PUBLIC_CHAT_API_URL || "http://localhost:8080";
const STORAGE = "ha-chat-pos";
const FAB = 44;
const PAD = 16;
const DRAG_PX = 6;

function clamp(x: number, y: number): Pos {
  const maxX = Math.max(PAD, window.innerWidth - FAB - PAD);
  const maxY = Math.max(PAD, window.innerHeight - FAB - PAD);
  return {
    x: Math.min(maxX, Math.max(PAD, x)),
    y: Math.min(maxY, Math.max(PAD, y)),
  };
}

function defaultPos(): Pos {
  return clamp(PAD + 6, window.innerHeight - FAB - PAD - 6);
}

export default function ChatWidget({ locale, t }: { locale: Locale; t: UiDict["chat"] }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "bot", text: t.hello }]);
  const [pos, setPos] = useState<Pos | null>(null);
  const [dragging, setDragging] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const posRef = useRef<Pos | null>(null);
  const busyRef = useRef(false);
  const dragRef = useRef<{
    id: number;
    sx: number;
    sy: number;
    ox: number;
    oy: number;
    moved: boolean;
  } | null>(null);

  posRef.current = pos;

  useEffect(() => {
    setMessages([{ role: "bot", text: t.hello }]);
  }, [t.hello]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) {
        const parsed = JSON.parse(raw) as Pos;
        if (typeof parsed.x === "number" && typeof parsed.y === "number") {
          setPos(clamp(parsed.x, parsed.y));
          return;
        }
      }
    } catch {
      /* keep default */
    }
    setPos(defaultPos());
  }, []);

  useEffect(() => {
    function onResize() {
      setPos((p) => (p ? clamp(p.x, p.y) : p));
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  async function sendText(raw: string) {
    const text = raw.trim();
    if (!text || busyRef.current) return;
    busyRef.current = true;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }, { role: "bot", text: "" }]);
    setBusy(true);
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 180_000);
    try {
      const res = await fetch(`${API}/chat/stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, locale }),
        signal: ctrl.signal,
      });
      if (!res.ok || !res.body) {
        const fallback = await fetch(`${API}/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, locale }),
          signal: ctrl.signal,
        });
        const data = await fallback.json().catch(() => ({}));
        setMessages((m) => [
          ...m.slice(0, -1),
          { role: "bot", text: fallback.ok && typeof data.reply === "string" ? data.reply : t.error },
        ]);
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let reply = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const parts = buf.split("\n\n");
        buf = parts.pop() ?? "";
        for (const part of parts) {
          const line = part.split("\n").find((row) => row.startsWith("data: "));
          if (!line) continue;
          const data = JSON.parse(line.slice(6)) as { delta?: string; done?: boolean; error?: string };
          if (data.error) {
            setMessages((m) => [...m.slice(0, -1), { role: "bot", text: t.error }]);
            return;
          }
          if (data.delta) {
            reply += data.delta;
            const snapshot = reply;
            setMessages((m) => [...m.slice(0, -1), { role: "bot", text: snapshot }]);
          }
        }
      }
      if (!reply.trim()) {
        const fallback = await fetch(`${API}/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, locale }),
          signal: ctrl.signal,
        });
        const data = await fallback.json().catch(() => ({}));
        setMessages((m) => [
          ...m.slice(0, -1),
          { role: "bot", text: fallback.ok && typeof data.reply === "string" ? data.reply : t.error },
        ]);
      }
    } catch {
      setMessages((m) => [...m.slice(0, -1), { role: "bot", text: t.offline }]);
    } finally {
      clearTimeout(timer);
      busyRef.current = false;
      setBusy(false);
    }
  }

  function send() {
    void sendText(input);
  }

  function fillQuestion(question: string) {
    if (busyRef.current) return;
    setInput(question);
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  function onPointerDown(e: React.PointerEvent<HTMLButtonElement>) {
    if (e.button !== 0) return;
    const current = posRef.current ?? defaultPos();
    dragRef.current = {
      id: e.pointerId,
      sx: e.clientX,
      sy: e.clientY,
      ox: current.x,
      oy: current.y,
      moved: false,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLButtonElement>) {
    const drag = dragRef.current;
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.sx;
    const dy = e.clientY - drag.sy;
    if (!drag.moved && dx * dx + dy * dy < DRAG_PX * DRAG_PX) return;
    drag.moved = true;
    setDragging(true);
    setPos(clamp(drag.ox + dx, drag.oy + dy));
  }

  function onPointerUp(e: React.PointerEvent<HTMLButtonElement>) {
    const drag = dragRef.current;
    if (!drag || e.pointerId !== drag.id) return;
    dragRef.current = null;
    setDragging(false);
    if (drag.moved) {
      const next = posRef.current;
      if (next) localStorage.setItem(STORAGE, JSON.stringify(next));
      return;
    }
    setOpen((v) => !v);
  }

  const vw = typeof window !== "undefined" ? window.innerWidth : 1200;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const panelEnd = Boolean(pos && pos.x > vw / 2);
  const panelBelow = Boolean(pos && pos.y < vh / 2);

  return (
    <div
      className={[
        "chat-dock",
        open ? "open" : "",
        pos ? "is-placed" : "",
        dragging ? "dragging" : "",
        panelEnd ? "panel-end" : "",
        panelBelow ? "panel-below" : "",
      ].filter(Boolean).join(" ")}
      style={pos ? { left: pos.x, top: pos.y } : undefined}
    >
      {open && (
        <div className="chat-panel" role="dialog" aria-label={t.title}>
          <div className="chat-head">
            <div>
              <strong>{t.title}</strong>
              <p>{t.subtitle}</p>
            </div>
            <button type="button" className="chat-x" onClick={() => setOpen(false)} aria-label={t.close}>
              ×
            </button>
          </div>
          <div className="chat-list" ref={listRef}>
            {messages.map((msg, i) =>
              msg.text ? (
                <div key={i} className={`chat-bubble ${msg.role}`}>
                  {msg.role === "bot" ? (
                    <ChatMarkdown text={msg.text} onAsk={fillQuestion} askDisabled={busy} />
                  ) : (
                    msg.text
                  )}
                </div>
              ) : null,
            )}
            {busy && !messages.at(-1)?.text && (
              <div className="chat-bubble bot typing">{t.thinking}</div>
            )}
          </div>
          <form
            className="chat-form"
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              maxLength={2000}
              disabled={busy}
            />
            <button type="submit" disabled={busy || !input.trim()}>
              {t.send}
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        className="chat-fab"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onLostPointerCapture={onPointerUp}
        aria-label={open ? t.close : t.title}
      >
        <ChatBotIcon />
      </button>
    </div>
  );
}
