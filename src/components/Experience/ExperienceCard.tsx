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
    <article className="experience-card">
      <div className="experience-card__period-wrap">
        <span className="experience-card__period">{it.period}</span>
      </div>

      <header className="experience-card__header">
        <h3 className="experience-card__role">{it.role}</h3>
        <div className="experience-card__company-row">
          <span>{it.company}</span>
        </div>
      </header>

      {!!it.points?.length && (
        <ul className="experience-card__points">
          {it.points.map((p, i) => (
            <li key={i} className="experience-card__point">
              {p}
            </li>
          ))}
        </ul>
      )}

      {!!it.tech?.length && (
        <ul className="experience-card__tech-list">
          {it.tech.map((tag) => (
            <li key={tag} className="experience-card__tech">
              {tag}
            </li>
          ))}
        </ul>
      )}

      {!!it.links?.length && (
        <div className="experience-card__links">
          {it.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-card__link"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {it.details && (
        <div className="experience-card__details-wrap">
          <button
            type="button"
            onClick={onOpen}
            className="experience-card__details-btn"
            aria-label={viewDetailsLabel}
            title={viewDetailsLabel}
          >
            {viewDetailsLabel}
            <svg
              className="experience-card__details-icon"
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
