import { useEffect, useRef } from "react";
import type { UIStrings, ProjectItem } from "../../types";

type ProjectModalProps = {
  open: ProjectItem | null;
  t: UIStrings;
  onClose: () => void;
};

export function ProjectModal({ open, t, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal-backdrop modal-backdrop--centered"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="modal-panel modal-panel--project modal-panel-shell"
      >
        <header className="modal-header modal-header--rounded">
          <div className="modal-header__row">
            <div className="modal-header__title-wrap">
              <h3 id="project-modal-title" className="modal-title">
                {open.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="modal-close"
              aria-label={t.close}
              title={t.close}
            >
              ✕
            </button>
          </div>
        </header>

        <div className="modal-body modal-body--project">
          <>
            <h4 className="modal-section-title">Description</h4>
            <div className="modal-prose">{open.shortDescription}</div>
          </>

          {!!open.features?.length && (
            <>
              <hr className="modal-hr" />
              <section className="modal-section-wide">
                <h4 className="modal-section-title">Features</h4>
                <ul className="modal-list">
                  {open.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {!!open.extraImages?.length && (
            <>
              <hr className="modal-hr" />
              <h4 className="modal-section-title">Screenshots</h4>

              <div className="modal-gallery-grid">
                {open.extraImages.map((src, i) => (
                  <figure key={i} className="modal-gallery-figure">
                    <a
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-gallery-link"
                    >
                      <div className="modal-gallery-aspect">
                        <img
                          src={src}
                          alt={`Additional view ${i + 1}`}
                          className="modal-gallery-img"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </a>
                  </figure>
                ))}
              </div>
            </>
          )}

          {!!open.tech?.length && (
            <>
              <hr className="modal-hr" />
              <section className="modal-section-narrow">
                <h4 className="modal-section-title">Tech</h4>
                <ul className="modal-tech-list">
                  {open.tech.map((tItem) => (
                    <li key={tItem} className="modal-tech-pill">
                      {tItem}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {(open.github || open.demo) && (
            <>
              <hr className="modal-hr" />
              <section className="modal-section-narrow">
                <h4 className="modal-section-title">Links</h4>
                <div className="modal-links-row">
                  {open.github && (
                    <a
                      href={open.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn-github"
                      title="GitHub"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="icon-inline"
                      >
                        <path
                          fill="currentColor"
                          d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58l-.01-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.76.08-.75.08-.75 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.77-1.61-2.67-.3-5.48-1.34-5.48-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.64-5.49 5.94.43.38.81 1.12.81 2.27l-.01 3.36c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z"
                        />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {open.demo && (
                    <a
                      href={open.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn-demo"
                      title="Live Demo"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="icon-inline"
                      >
                        <path
                          fill="currentColor"
                          d="M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42L17.59 5H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
