import { getProfile } from "@/data/profile";
import CvDownloads from "@/components/CvDownloads";
import type { Locale } from "@/i18n/config";
import type { UiDict } from "@/i18n/ui";

export default function Footer({
  locale,
  t,
  cv,
}: {
  locale: Locale;
  t: UiDict["footer"];
  cv: UiDict["cv"];
}) {
  const profile = getProfile(locale);

  return (
    <footer id="contact">
      <div className="wrap">
        <h2>
          {t.headlineBefore} <span className="grad-text">AI</span> {t.headlineAfter}
        </h2>
        <p>{t.sub}</p>
        <CvDownloads t={cv} id="cv" />
        <div className="foot-links">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {t.email}
          </a>
          <a className="btn btn-outline" href={`tel:${profile.phoneRaw}`}>
            {t.call}
          </a>
        </div>
        <div className="foot-bottom">
          {profile.name} · {profile.address} · © 2026
        </div>
      </div>
    </footer>
  );
}
