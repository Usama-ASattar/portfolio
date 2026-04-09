import type { UIStrings, ProjectItem } from "../../types";

type ProjectCardProps = {
  p: ProjectItem;
  t: UIStrings;
  onOpen: (p: ProjectItem) => void;
};

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58l-.01-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.76.08-.75.08-.75 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.77-1.61-2.67-.3-5.48-1.34-5.48-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.64-5.49 5.94.43.38.81 1.12.81 2.27l-.01 3.36c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z"
      />
    </svg>
  );
}

function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42L17.59 5H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"
      />
    </svg>
  );
}

export function ProjectCard({ p, t, onOpen }: ProjectCardProps) {
  return (
    <article className="project-card">
      {p.image && (
        <img
          src={p.image}
          alt={p.imageAlt || p.title}
          className="project-card__media"
          loading="lazy"
        />
      )}

      <div className="project-card__body">
        <h3 className="project-card__title">{p.title}</h3>

        <p className="project-card__blurb">{p.blurb}</p>

        <ul className="project-card__tags">
          {p.tech.slice(0, 6).map((tag) => (
            <li key={tag} className="project-card__tag">
              {tag}
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__btn-github"
              title={t.github}
            >
              <GitHubIcon className="icon-inline" />
              GitHub
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__btn-demo"
              title={t.live}
            >
              <ExternalLinkIcon className="icon-inline" />
              {t.liveDemo}
            </a>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => onOpen(p)}
        className="project-card__details-btn"
        aria-label={t.viewDetails}
        title={t.viewDetails}
      >
        {t.viewDetails}
        <svg
          className="project-card__details-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7 4a1 1 0 010-2h9a1 1 0 011 1v9a1 1 0 11-2 0V5.414l-9.293 9.293a1 1 0 01-1.414-1.414L13.586 4H7z" />
        </svg>
      </button>
    </article>
  );
}
