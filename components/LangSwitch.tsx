"use client";

import { useRouter } from "next/navigation";
import { localeCookie, type Locale } from "@/i18n/config";

export default function LangSwitch({ locale, label }: { locale: Locale; label: string }) {
  const router = useRouter();

  function setLocale(next: Locale) {
    if (next === locale) return;
    document.cookie = `${localeCookie}=${next}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <div className="lang-switch" role="group" aria-label={label}>
      <button type="button" className={locale === "vi" ? "active" : ""} onClick={() => setLocale("vi")}>
        VI
      </button>
      <button type="button" className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")}>
        EN
      </button>
    </div>
  );
}
