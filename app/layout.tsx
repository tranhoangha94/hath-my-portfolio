import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { getLocale } from "@/i18n/get-locale";
import { getUi } from "@/i18n/ui";

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocale();
  const t = getUi(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
    metadataBase: new URL("https://tranhoangha-portfolio.vercel.app"),
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png" }],
      apple: [{ url: "/favicon.png", type: "image/png" }],
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website",
      locale: locale === "en" ? "en_US" : "vi_VN",
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = getLocale();
  const t = getUi(locale);

  return (
    <html lang={locale}>
      <body>
        <Nav locale={locale} t={t.nav} />
        {children}
        <Footer locale={locale} t={t.footer} cv={t.cv} />
        <ScrollToTop label={t.nav.scrollTop} />
      </body>
    </html>
  );
}
