import { DownloadIcon } from "./Icons";
import { cvFiles } from "@/data/cv";
import type { UiDict } from "@/i18n/ui";

export default function CvDownloads({
  t,
  id,
}: {
  t: UiDict["cv"];
  id?: string;
}) {
  return (
    <div className="cv-downloads" id={id}>
      <span className="cv-label">
        <DownloadIcon />
        {t.label}
      </span>
      <a className="cv-btn" href={cvFiles.vi.href} download={cvFiles.vi.filename}>
        {t.vi}
      </a>
      <a className="cv-btn" href={cvFiles.en.href} download={cvFiles.en.filename}>
        {t.en}
      </a>
    </div>
  );
}
