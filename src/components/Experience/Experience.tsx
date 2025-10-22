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
      <div className="relative space-y-10 md:pl-[4.5rem]">
        <div
          className="hidden md:block absolute left-[3.8rem] top-0 bottom-0 w-px bg-border"
          aria-hidden="true"
        />

        {items.map((it, idx) => (
          <div
            key={`${it.company}-${it.role}-${idx}`}
            className="relative grid md:grid-cols-[8rem_1fr] gap-4 md:gap-8"
          >
            <div className="hidden md:flex items-center justify-end pr-3">
              <span className="text-sm font-medium text-muted-foreground text-right leading-tight">
                {it.period}
              </span>
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
