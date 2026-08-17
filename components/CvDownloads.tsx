import Link from "next/link";
import { DownloadIcon } from "./Icons";
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
      <Link className="cv-btn" href="/cv?lang=vi">
        {t.vi}
      </Link>
      <Link className="cv-btn" href="/cv?lang=en">
        {t.en}
      </Link>
    </div>
  );
}
