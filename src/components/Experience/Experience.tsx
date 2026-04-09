import React from "react";
import { Section } from "../index";
import type { UIStrings, ExperinceItem } from "../../types";
import { ExperienceCard, ExperienceModal } from "./index";

type Props = { t: UIStrings; items: ExperinceItem[] };

export function Experience({ t, items }: Props) {
  const [open, setOpen] = React.useState<ExperinceItem | null>(null);
  const viewDetailsLabel = t.viewDetails ?? "View details";
  const closeLabel = t.close ?? "Close";

  return (
    <Section id="experience" title={t.expTitle} subtitle={t.expLead}>
      <div className="experience-timeline">
        {items.map((it, idx) => (
          <div
            key={`${it.company}-${it.role}-${idx}`}
            className="experience-row"
          >
            <div className="experience-date">
              <span className="experience-date__text">{it.period}</span>
            </div>

            <ExperienceCard
              item={it}
              onOpen={() => setOpen(it)}
              viewDetailsLabel={viewDetailsLabel}
            />
          </div>
        ))}
      </div>

      {open && (
        <ExperienceModal
          item={open}
          onClose={() => setOpen(null)}
          closeLabel={closeLabel}
        />
      )}
    </Section>
  );
}
