"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { UiDict } from "@/i18n/ui";

type Msg = { role: "user" | "bot"; text: string };

const API = process.env.NEXT_PUBLIC_CHAT_API_URL || "http://localhost:8080";

export default function ChatWidget({ locale, t }: { locale: Locale; t: UiDict["chat"] }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "bot", text: t.hello }]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: "bot", text: t.hello }]);
  }, [t.hello]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setBusy(true);
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 180_000);
    try {
      const res = await fetch(`${API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, locale }),
        signal: ctrl.signal,
      });
      const data = await res.json().catch(() => ({}));
      const reply =
        res.ok && typeof data.reply === "string"
          ? data.reply
          : t.error;
      setMessages((m) => [...m, { role: "bot", text: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "bot", text: t.offline }]);
    } finally {
      clearTimeout(timer);
      setBusy(false);
    }
  }

  return (
    <div className={`chat-dock${open ? " open" : ""}`}>
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
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.role}`}>
                {msg.text}
              </div>
            ))}
            {busy && <div className="chat-bubble bot typing">{t.thinking}</div>}
          </div>
          <form
            className="chat-form"
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              maxLength={800}
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
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t.close : t.title}
      >
        {open ? "×" : "✦"}
      </button>
    </div>
  );
}
