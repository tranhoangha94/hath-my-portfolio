import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ClockIcon, UsersIcon } from "@/components/Icons";
import { getProjectBySlug, getProjectSlugs, getProjects, projectCategories, type Project } from "@/data/projects";
import { getLocale } from "@/i18n/get-locale";
import { getUi } from "@/i18n/ui";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const locale = getLocale();
  const t = getUi(locale);
  const project = getProjectBySlug(params.slug, locale);
  if (!project) return { title: t.detail.notFound };
  return {
    title: `${project.title} — TranHoangHa Portfolio`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const locale = getLocale();
  const t = getUi(locale);
  const project = getProjectBySlug(params.slug, locale);
  if (!project) notFound();

  const cats = projectCategories(project);
  const related = getProjects(locale)
    .filter((p) => p.slug !== project.slug && projectCategories(p).some((c) => cats.includes(c)))
    .slice(0, 3);

  const categoryLabel: Record<Project["category"], string> = t.detail.category;
  const shots = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : [];

  return (
    <>
      <section className="detail-hero">
        <div className="wrap">
          <Link href="/#projects" className="detail-back">
            <ArrowLeft /> {t.detail.back}
          </Link>

          <div className="detail-badges">
            {cats.map((c) => (
              <span className="detail-badge" key={c}>{categoryLabel[c]}</span>
            ))}
            {project.status && <span className="detail-badge status">{project.status}</span>}
          </div>

          <h1>{project.title}</h1>

          <div className="detail-meta">
            <span><ClockIcon /> {project.period}</span>
            <span><UsersIcon /> {project.role}{project.team ? ` · ${project.team}` : ""}</span>
          </div>

          <p className="detail-summary">{project.summary}</p>

          <div className="detail-cta">
            {project.link && (
              <a className="btn btn-primary" href={project.link} target="_blank" rel="noopener noreferrer">
                {t.detail.liveDemo} <ArrowUpRight />
              </a>
            )}
            <Link className="btn btn-outline" href="/#contact">{t.detail.contact}</Link>
          </div>

          {shots.length > 0 && (
            <div className="detail-shots">
              {shots.map((src) => (
                <div className="detail-shot" key={src}>
                  <img src={src} alt={`${t.detail.screenshotAlt} ${project.title}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="detail-body">
        <div className="wrap">
          <div className="detail-grid">
            <div>
              <div className="detail-block">
                <h2>{t.detail.description}</h2>
                {project.description.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="detail-block">
                <h2>{t.detail.features}</h2>
                <ul className="detail-features">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="detail-side">
              <div className="side-card">
                <h3>{t.detail.tech}</h3>
                <div className="tags">
                  {project.tech.map((tech) => (
                    <span className="tag" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="side-card">
                <h3>{t.detail.info}</h3>
                <div className="tags" style={{ flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
                  <span className="tag" style={{ width: "100%" }}>{t.detail.period}: {project.period}</span>
                  <span className="tag" style={{ width: "100%" }}>{t.detail.role}: {project.role}</span>
                  {project.team && <span className="tag" style={{ width: "100%" }}>{project.team}</span>}
                </div>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="detail-related">
              <h2>{t.detail.related}</h2>
              <div className="related-grid">
                {related.map((p) => (
                  <Link href={`/projects/${p.slug}`} className="related-card" key={p.slug}>
                    {p.image && (
                      <div className="related-thumb">
                        <img src={p.image} alt={p.title} />
                      </div>
                    )}
                    <h4>{p.title}</h4>
                    <p>{p.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
