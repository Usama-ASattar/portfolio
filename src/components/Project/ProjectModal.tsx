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
      className="fixed inset-0 z-50 bg-black/50 p-3 md:p-6 flex items-start justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      {/* modal shell */}
      <div
        ref={panelRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="
          w-full max-w-4xl 
          rounded-3xl border bg-white shadow-2xl ring-1 ring-black/5
          max-h-[90vh] grid grid-rows-[auto,1fr] focus:outline-none 
          overflow-hidden
        "
      >
        {/* sticky header */}
        <header className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b rounded-t-3xl">
          <div className="flex items-start justify-between gap-4 p-4 md:p-6">
            <div className="min-w-0">
              <h3
                id="project-modal-title"
                className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-600"
              >
                {open.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="
    shrink-0 rounded-full border p-2 text-sm
    text-neutral-700 hover:bg-neutral-100
    dark:text-neutral-300 dark:hover:text-white
    dark:bg-neutral-900 dark:hover:bg-neutral-600
    border-neutral-300 dark:border-neutral-700
    transition-colors
  "
              aria-label={t.close}
              title={t.close}
            >
              ✕
            </button>
          </div>
        </header>

        {/* scrollable body */}
        <div className="overflow-y-auto p-4 md:p-8 rounded-b-3xl">
          {/* details as bullets */}
          <>
            <h4 className="text-sm font-bold text-neutral-700 mb-3">
              Description
            </h4>
            <div className="max-w-4xl text-neutral-800 mb-6 text-justify">
              {open.shortDescription}
            </div>
          </>

          {/* Features section (new), visually consistent with other sections */}
          {!!open.features?.length && (
            <>
              <hr className="my-6 md:my-8 border-neutral-200" />
              <section className="max-w-4xl text-justify">
                <h4 className="text-sm font-bold text-neutral-700 mb-3">
                  Features
                </h4>
                <ul className="list-disc ml-5 space-y-2 text-[0.95rem] leading-7 text-neutral-800">
                  {open.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {/* compact screenshots */}
          {!!open.extraImages?.length && (
            <>
              <hr className="my-6 md:my-8 border-neutral-200" />
              <h4 className="text-sm font-bold text-neutral-700 mb-3">
                Screenshots
              </h4>

              {/* Uniform gallery grid, preserves array order, no cropping */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {open.extraImages.map((src, i) => (
                  <figure
                    key={i}
                    className="rounded-lg border bg-neutral-50 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Fixed tile shape for a tidy gallery, image fits inside */}
                    <a
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative w-full aspect-[4/3] p-2">
                        <img
                          src={src}
                          alt={`Additional view ${i + 1}`}
                          className="absolute inset-0 m-auto max-w-full max-h-full object-contain"
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

          {/* tech */}
          {!!open.tech?.length && (
            <>
              <hr className="my-6 md:my-8 border-neutral-200" />
              <section className="max-w-3xl">
                <h4 className="text-sm font-bold text-neutral-700 mb-3">
                  Tech
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {open.tech.map((tItem) => (
                    <li
                      key={tItem}
                      className="rounded-full border px-3 py-1 text-xs md:text-[0.8rem] text-neutral-700"
                    >
                      {tItem}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {/* links, styled like ProjectCard buttons */}
          {(open.github || open.demo) && (
            <>
              <hr className="my-6 md:my-8 border-neutral-200" />
              <section className="max-w-3xl">
                <h4 className="text-sm font-bold text-neutral-700 mb-3">
                  Links
                </h4>
                <div className="flex flex-wrap gap-3">
                  {open.github && (
                    <a
                      href={open.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#24292f] text-white px-3 py-1.5 text-xs font-medium hover:opacity-90 transition"
                      title="GitHub"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-4 w-4"
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
                      className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 text-white px-3 py-1.5 text-xs font-medium hover:bg-blue-700 transition"
                      title="Live Demo"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-4 w-4"
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
