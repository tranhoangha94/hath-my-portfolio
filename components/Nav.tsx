"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LangSwitch from "./LangSwitch";
import type { Locale } from "@/i18n/config";
import type { UiDict } from "@/i18n/ui";

const TOP_OFFSET = 24;
const HIDE_AFTER_MS = 1600;

export default function Nav({ locale, t }: { locale: Locale; t: UiDict["nav"] }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openRef = useRef(open);
  const hovering = useRef(false);
  openRef.current = open;

  const close = () => setOpen(false);

  useEffect(() => {
    const clearHide = () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };

    const scheduleHide = () => {
      clearHide();
      hideTimer.current = setTimeout(() => {
        if (window.scrollY > TOP_OFFSET && !openRef.current && !hovering.current) {
          setHidden(true);
        }
      }, HIDE_AFTER_MS);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const atTop = y <= TOP_OFFSET;
      const goingUp = y < lastY.current - 1;

      if (atTop || openRef.current) {
        setHidden(false);
        clearHide();
      } else if (goingUp) {
        setHidden(false);
        scheduleHide();
      } else {
        scheduleHide();
      }

      lastY.current = y;
    };

    lastY.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearHide();
    };
  }, []);

  useEffect(() => {
    if (open) {
      setHidden(false);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    }
  }, [open]);

  return (
    <header
      className={hidden ? "is-hidden" : undefined}
      onMouseEnter={() => {
        hovering.current = true;
        if (hideTimer.current) clearTimeout(hideTimer.current);
      }}
      onMouseLeave={() => {
        hovering.current = false;
        if (window.scrollY > TOP_OFFSET && !openRef.current) {
          hideTimer.current = setTimeout(() => {
            if (window.scrollY > TOP_OFFSET && !openRef.current && !hovering.current) {
              setHidden(true);
            }
          }, HIDE_AFTER_MS);
        }
      }}
    >
      <nav>
        <Link href="/" className="logo" onClick={close}>
          <span></span>Trần Hoàng Hà
        </Link>
        <div className={`navlinks${open ? " open" : ""}`}>
          <Link href="/#about" onClick={close}>{t.about}</Link>
          <Link href="/#skills" onClick={close}>{t.skills}</Link>
          <Link href="/#experience" onClick={close}>{t.experience}</Link>
          <Link href="/#projects" onClick={close}>{t.projects}</Link>
          <Link href="/#education" onClick={close}>{t.education}</Link>
          <Link href="/#cv" onClick={close}>{t.cv}</Link>
          <Link href="/#contact" onClick={close}>{t.contact}</Link>
        </div>
        <div className="nav-end">
          <LangSwitch locale={locale} label={t.lang} />
          <button className="navtoggle" aria-label={t.menu} onClick={() => setOpen((v) => !v)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
