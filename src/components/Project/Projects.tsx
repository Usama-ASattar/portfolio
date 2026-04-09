import React from "react";
import { Section } from "../index";
import { ProjectCard, ProjectModal } from "./index";

import type { UIStrings, ProjectItem } from "../../types";

type ProjectsProps = {
  t: UIStrings;
  items: ProjectItem[];
};

export function Projects({ t, items }: ProjectsProps) {
  const [open, setOpen] = React.useState<ProjectItem | null>(null);

  const STEP = 2;
  const total = items.length;
  const [visible, setVisible] = React.useState(Math.min(STEP, total));

  const canPaginate = total > STEP;
  const allVisible = visible >= total;

  const onLoadMore = () => setVisible((v) => Math.min(v + STEP, total));
  const onShowLess = () => setVisible(STEP);

  return (
    <Section id="projects" title={t.projectsTitle} subtitle={t.projectsLead}>
      <div className="projects-grid">
        {items.slice(0, visible).map((p) => (
          <ProjectCard key={p.id} p={p} t={t} onOpen={setOpen} />
        ))}
      </div>

      {canPaginate && (
        <div className="projects-load-wrap">
          <button
            type="button"
            onClick={allVisible ? onShowLess : onLoadMore}
            className="projects-load-btn"
          >
            {allVisible
              ? t.showLess ?? "Weniger anzeigen"
              : t.loadMore ?? "Mehr anzeigen"}
          </button>
        </div>
      )}

      <ProjectModal open={open} t={t} onClose={() => setOpen(null)} />
    </Section>
  );
}
