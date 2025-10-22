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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.slice(0, visible).map((p) => (
          <ProjectCard key={p.id} p={p} t={t} onOpen={setOpen} />
        ))}
      </div>

      {canPaginate && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={allVisible ? onShowLess : onLoadMore}
            className="
    px-6 py-2.5 
    text-sm md:text-base font-medium 
    text-white bg-gradient-to-r from-blue-600 to-indigo-600
    rounded-full shadow-md
    transition-all duration-300 ease-in-out
    hover:from-indigo-600 hover:to-blue-600
    active:scale-95
    focus:outline-none focus:ring-0
  "
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
