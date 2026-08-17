import Reveal from "@/components/Reveal";
import RoleBadge from "@/components/RoleBadge";
import ProjectsTabs from "@/components/ProjectsTabs";
import CvDownloads from "@/components/CvDownloads";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/Icons";
import { getProfile } from "@/data/profile";
import { getFeaturedProjects, getVibecodeProjects, getWorkProjects } from "@/data/projects";
import { getLocale } from "@/i18n/get-locale";
import { getUi } from "@/i18n/ui";

export default function HomePage() {
  const locale = getLocale();
  const t = getUi(locale);
  const profile = getProfile(locale);

  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <div>
            <RoleBadge readyFor={t.hero.readyFor} />
            <h1>
              {profile.name}
              <br />
              <span className="grad-text">{profile.role}</span>
            </h1>
            <p className="role">{profile.heroRole}</p>
            <p className="lede">{profile.heroLede}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#projects">{t.hero.ctaProjects}</a>
              <a className="btn btn-outline" href="#contact">{t.hero.ctaContact}</a>
            </div>
            <CvDownloads t={t.cv} />
            <div className="contact-row">
              <div><PhoneIcon />{profile.phone}</div>
              <div><MailIcon />{profile.email}</div>
              <div><PinIcon />{profile.locationShort}</div>
            </div>
          </div>
          <div className="hero-photo">
            <div className="ring"></div>
            <img src="/avatar.png" alt={profile.name} />
            <div className="badge">🚀 <b>5+</b>&nbsp;{t.hero.photoBadge}</div>
          </div>
        </div>
      </section>

      <Reveal className="section" id="about">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">{t.about.kicker}</div>
            <h2>{t.about.title}</h2>
            <p>{profile.objective}</p>
          </div>

          <div className="summary-grid">
            {profile.stats.map((s) => (
              <div className="sum-card" key={s.label}>
                <div className="num">{s.number}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>

          <ul className="highlight-list">
            {profile.summary.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section" id="skills">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">{t.skills.kicker}</div>
            <h2>{t.skills.title}</h2>
          </div>
          <div className="skills-grid">
            {profile.skills.map((skill) => (
              <div className={`skill-card${skill.wide ? " wide" : ""}`} key={skill.title}>
                <h4>{skill.title}</h4>
                <div className="tags">
                  {skill.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section" id="experience">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">{t.experience.kicker}</div>
            <h2>{t.experience.title}</h2>
          </div>
          <div className="timeline">
            {profile.experience.map((exp) => (
              <div className="tl-item" key={exp.company + exp.period}>
                <div className="tl-head">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="tl-date">{exp.period}</span>
                </div>
                <ul>
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section" id="projects">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">{t.projects.kicker}</div>
            <h2>{t.projects.title}</h2>
            <p>{t.projects.intro}</p>
          </div>

          <ProjectsTabs
            seeDetails={t.projects.seeDetails}
            groups={[
              { key: "ai", label: t.projects.tabAi, projects: getFeaturedProjects(locale) },
              { key: "work", label: t.projects.tabWork, projects: getWorkProjects(locale) },
              { key: "vibecode", label: t.projects.tabVibecode, projects: getVibecodeProjects(locale) },
            ]}
          />
        </div>
      </Reveal>

      <Reveal className="section" id="education">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">{t.education.kicker}</div>
            <h2>{t.education.title}</h2>
          </div>
          <div className="two-col">
            <div>
              {profile.education.map((edu) => (
                <div className="edu-card" key={edu.school}>
                  <h3>{edu.school}</h3>
                  <div className="sub">{edu.sub}</div>
                  <div className="date">{edu.date}</div>
                  <ul>
                    {edu.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="cert-card">
              <h4>{t.education.certs}</h4>
              {profile.certificates.map((c) => (
                <div className="cert-item" key={c}>
                  <span className="dot"></span>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
