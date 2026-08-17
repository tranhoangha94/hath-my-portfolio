"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "./Icons";
import type { Project } from "@/data/projects";

type Group = { key: string; label: string; projects: Project[] };

export default function ProjectsTabs({
  groups,
  seeDetails,
}: {
  groups: Group[];
  seeDetails: string;
}) {
  const [active, setActive] = useState(groups[0]?.key ?? "");
  const current = groups.find((g) => g.key === active) ?? groups[0];

  return (
    <div>
      <div className="tabs-row">
        {groups.map((g) => (
          <button
            key={g.key}
            type="button"
            className={`tab-btn${g.key === active ? " active" : ""}`}
            onClick={() => setActive(g.key)}
          >
            {g.label}
            <span className="tab-count">{g.projects.length}</span>
          </button>
        ))}
      </div>

      <div className="tab-grid">
        {current?.projects.map((p) => (
          <Link href={`/projects/${p.slug}`} className="tab-card" key={p.slug}>
            {p.image && (
              <div className="tab-card-thumb">
                <img src={p.image} alt={p.title} />
              </div>
            )}
            <div className="tab-card-top">
              <span className={`tab-card-badge${p.status ? " dev" : ""}`}>{p.status ?? p.badge}</span>
              <span className="tab-card-period">{p.period}</span>
            </div>
            <h3>{p.title}</h3>
            <div className="tab-card-role">
              {p.role}
              {p.team ? ` · ${p.team}` : ""}
            </div>
            <p>{p.summary}</p>
            <div className="tab-card-tech">
              {p.tech.slice(0, 4).map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <span className="tab-card-link">
              {seeDetails} <ArrowUpRight />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
