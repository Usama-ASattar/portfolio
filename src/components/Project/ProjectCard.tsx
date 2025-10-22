import type { UIStrings, ProjectItem } from "../../types";

type ProjectCardProps = {
  p: ProjectItem;
  t: UIStrings;
  onOpen: (p: ProjectItem) => void;
};

// GitHub icon
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

// External link icon
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
    <article className="relative rounded-xl border bg-background shadow-sm transition hover:shadow-md hover:-translate-y-0.5 overflow-hidden">
      {/* Project image */}
      {p.image && (
        <img
          src={p.image}
          alt={p.imageAlt || p.title}
          className="w-full aspect-video object-cover"
          loading="lazy"
        />
      )}

      <div className="p-4 space-y-2 pb-12">
        {/* Title */}
        <h3 className="text-base font-semibold leading-tight">{p.title}</h3>

        {/* Short description */}
        <p className="text-sm text-muted-foreground line-clamp-2">{p.blurb}</p>

        {/* Skills / Tech tags */}
        <ul className="flex flex-wrap gap-2 pt-1">
          {p.tech.slice(0, 6).map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-gray-300 dark:border-gray-600 px-3 py-1 text-xs text-foreground/80 hover:bg-accent transition-colors"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-3">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-[#24292f] text-white px-3 py-1.5 text-xs font-medium hover:opacity-90 transition"
              title={t.github}
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 text-white px-3 py-1.5 text-xs font-medium hover:bg-blue-700 transition"
              title={t.live}
            >
              <ExternalLinkIcon className="h-4 w-4" />
              {t.liveDemo}
            </a>
          )}
        </div>
      </div>

      {/* Bottom-right interactive “View details” */}
      <button
        type="button"
        onClick={() => onOpen(p)}
        className="
          group absolute bottom-4 right-5 inline-flex items-center gap-1.5
          text-sm font-medium text-foreground/80
          underline-offset-4 transition
          hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
          active:translate-y-px
        "
        aria-label={t.viewDetails}
        title={t.viewDetails}
      >
        {t.viewDetails}
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
