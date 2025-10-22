import type { ExperinceItem } from "../../types";

type CardProps = {
  item: ExperinceItem;
  onOpen: () => void;
  viewDetailsLabel: string;
};

export function ExperienceCard({
  item: it,
  onOpen,
  viewDetailsLabel,
}: CardProps) {
  return (
    <article className="rounded-2xl border bg-background p-6 shadow-sm transition hover:shadow-md">
      {/* period on mobile */}
      <div className="md:hidden mb-2">
        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
          {it.period}
        </span>
      </div>

      <header className="mb-3">
        <h3 className="text-lg font-semibold leading-tight">{it.role}</h3>
        <div className="flex flex-wrap items-center gap-2 text-sm opacity-70">
          <span>{it.company}</span>
        </div>
      </header>

      {!!it.points?.length && (
        <ul className="ml-4 list-disc space-y-2 marker:text-primary">
          {it.points.map((p, i) => (
            <li key={i} className="text-sm leading-relaxed">
              {p}
            </li>
          ))}
        </ul>
      )}

      {!!it.tech?.length && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {it.tech.map((tag) => (
            <li
              key={tag}
              className="rounded-full border px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {!!it.links?.length && (
        <div className="mt-4 flex flex-wrap gap-3">
          {it.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-3 py-1 text-sm hover:bg-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {it.details && (
        <div className="mt-6">
          <button
            type="button"
            onClick={onOpen}
            className="
          group absolute bottom-4 right-5 inline-flex items-center gap-1.5
          text-sm font-medium text-foreground/80
          underline-offset-4 transition
          hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
          active:translate-y-px
        "
            aria-label={viewDetailsLabel}
            title={viewDetailsLabel}
          >
            {viewDetailsLabel}
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7 4a1 1 0 010-2h9a1 1 0 011 1v9a1 1 0 11-2 0V5.414l-9.293 9.293a1 1 0 01-1.414-1.414L13.586 4H7z" />
            </svg>
          </button>
        </div>
      )}
    </article>
  );
}
