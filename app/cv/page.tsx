import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, DownloadIcon } from "@/components/Icons";
import { cvFiles } from "@/data/cv";
import { getLocale } from "@/i18n/get-locale";
import { getUi } from "@/i18n/ui";
import type { Locale } from "@/i18n/config";

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocale();
  const t = getUi(locale);
  return {
    title: `${t.cv.title} — TranHoangHa Portfolio`,
    description: t.cv.previewTitle,
  };
}

export default function CvPage({ searchParams }: { searchParams: { lang?: string } }) {
  const locale = getLocale();
  const t = getUi(locale);
  const lang: Locale = searchParams.lang === "en" || searchParams.lang === "vi" ? searchParams.lang : locale;
  const file = cvFiles[lang];

  return (
    <section className="cv-page">
      <div className="wrap">
        <Link href="/" className="detail-back">
          <ArrowLeft /> {t.cv.back}
        </Link>

        <div className="section-head">
          <div className="kicker">{t.cv.kicker}</div>
          <h1>{t.cv.title}</h1>
        </div>

        <div className="cv-toolbar">
          <div className="cv-downloads" style={{ marginBottom: 0 }}>
            <Link className={`cv-btn${lang === "vi" ? " active" : ""}`} href="/cv?lang=vi">
              {t.cv.vi}
            </Link>
            <Link className={`cv-btn${lang === "en" ? " active" : ""}`} href="/cv?lang=en">
              {t.cv.en}
            </Link>
          </div>
          <a className="btn btn-primary cv-download" href={file.href} download={file.filename}>
            <DownloadIcon /> {t.cv.download}
          </a>
        </div>

        <div className="cv-frame-wrap">
          <iframe
            className="cv-frame"
            title={`${t.cv.previewTitle} — ${lang === "vi" ? t.cv.vi : t.cv.en}`}
            src={`${file.href}#view=FitH`}
          />
        </div>
      </div>
    </section>
  );
}
