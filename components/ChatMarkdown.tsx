"use client";

import type { ReactNode } from "react";

function isSafeHref(href: string) {
  return /^(https?:\/\/|mailto:|tel:|\/)/i.test(href);
}

function inline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\[([^\]]+)\]\(([^)]+)\)|https?:\/\/[^\s<]+)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const token = match[0];
    const key = `${keyPrefix}-${match.index}`;
    if (token.startsWith("**")) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("[")) {
      const label = match[2] ?? "";
      const href = match[3] ?? "";
      if (href && isSafeHref(href)) {
        const external = href.startsWith("http");
        nodes.push(
          <a key={key} href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
            {label}
          </a>,
        );
      } else {
        nodes.push(label);
      }
    } else {
      nodes.push(
        <a key={key} href={token} target="_blank" rel="noreferrer">
          {token}
        </a>,
      );
    }
    last = match.index + token.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export default function ChatMarkdown({
  text,
  onAsk,
  askDisabled,
}: {
  text: string;
  onAsk?: (question: string) => void;
  askDisabled?: boolean;
}) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let b = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={b}>{inline(line.slice(4), String(b))}</h3>,
      );
      b += 1;
      i += 1;
      continue;
    }
    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) {
        items.push(lines[i].slice(2));
        i += 1;
      }
      const listKey = b;
      const asks = Boolean(onAsk) && items.every((item) => item.trim().endsWith("?"));
      blocks.push(
        <ul key={listKey} className={asks ? "chat-asks" : undefined}>
          {items.map((item, j) => {
            const question = item.trim();
            if (asks && onAsk) {
              return (
                <li key={j}>
                  <button
                    type="button"
                    className="chat-ask"
                    disabled={askDisabled}
                    onClick={() => onAsk(question)}
                  >
                    {inline(question, `${listKey}-${j}`)}
                  </button>
                </li>
              );
            }
            return <li key={j}>{inline(item, `${listKey}-${j}`)}</li>;
          })}
        </ul>,
      );
      b += 1;
      continue;
    }
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("### ") &&
      !/^[-*] /.test(lines[i])
    ) {
      para.push(lines[i]);
      i += 1;
    }
    const paraKey = b;
    blocks.push(
      <p key={paraKey}>
        {para.map((row, j) => (
          <span key={j}>
            {j > 0 ? <br /> : null}
            {inline(row, `${paraKey}-${j}`)}
          </span>
        ))}
      </p>,
    );
    b += 1;
  }

  return <div className="chat-md">{blocks}</div>;
}
