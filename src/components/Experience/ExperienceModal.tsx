import React, { useEffect } from "react";
import type { ExperinceItem } from "../../types/experience";

type ModalProps = {
  item: ExperinceItem;
  onClose: () => void;
  closeLabel: string;
};

function getMonthDifference(period: string): number {
  try {
    const [startStr, endStr] = period.split(" - ").map((s) => s.trim());
    const [sm, sy] = startStr.split("/").map(Number);
    const [em, ey] = endStr.split("/").map(Number);
    if (!sm || !sy || !em || !ey) return 0;
    return (ey - sy) * 12 + (em - sm) + 1;
  } catch {
    return 0;
  }
}

const pluralize = (n: number, s: string, p?: string) =>
  `${n} ${n === 1 ? s : p ?? `${s}s`}`;

export function ExperienceModal({ item, onClose, closeLabel }: ModalProps) {
  // ✅ Lock background scroll while modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const months = getMonthDifference(item.period);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const introParagraphs = Array.isArray(item.company_intro)
    ? item.company_intro
    : item.company_intro
    ? [item.company_intro]
    : [];

  const detailSentences: string[] = Array.isArray(item.details)
    ? item.details.flatMap((d) =>
        d
          .split(/(?<=\.)\s+/)
          .map((s) => s.trim())
          .filter(Boolean)
      )
    : typeof item.details === "string"
    ? item.details
        .split(/(?<=\.)\s+/)
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  const employmentType = item.work_arrangement ?? "Not specified";
  const mode = item.mode ?? "Not specified";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 p-3 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exp-modal-title"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="
          mx-auto w-full max-w-4xl
          rounded-3xl border bg-white shadow-2xl ring-1 ring-black/5
          grid max-h-[90vh] grid-rows-[auto,1fr]
          min-h-0 overflow-hidden         /* ✅ allows inner scroll */
          focus:outline-none
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b">
          <div className="flex items-start justify-between gap-4 p-4 md:p-6">
            <div className="min-w-0">
              <h3
                id="exp-modal-title"
                className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-600"
              >
                {item.role}
              </h3>
              <p className="mt-0.5 text-sm md:text-base text-neutral-600">
                {item.company}
              </p>

              <div className="mt-3 grid gap-2 text-sm text-neutral-700 md:grid-cols-2">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium">Duration:</span>
                  <span>
                    {item.period} ({pluralize(months, "Month")})
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium">Location:</span>
                  <span>{item.location}</span>
                </div>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium">Employment type:</span>
                  <span>{employmentType}</span>
                </div>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium">Mode:</span>
                  <span>{mode}</span>
                </div>
              </div>
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
              aria-label={closeLabel}
              title={closeLabel}
            >
              ✕
            </button>
          </div>
        </header>

        {/* ✅ Scrollable Body */}
        <div className="min-h-0 overflow-y-auto overscroll-contain p-4 md:p-8">
          {introParagraphs.length > 0 && (
            <div className="max-w-4xl text-neutral-800 text-justify">
              {introParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="leading-7 md:leading-8 text-base md:text-[1.05rem] mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>
          )}

          {(introParagraphs.length > 0 || detailSentences.length > 0) && (
            <hr className="my-6 md:my-8 border-neutral-200" />
          )}

          {detailSentences.length > 0 && (
            <section className="max-w-3xl">
              <h4 className="text-sm font-bold text-neutral-700 mb-3">
                Key contributions include:
              </h4>
              <ul className="ml-5 list-disc space-y-2 text-[0.95rem] leading-7 text-neutral-800">
                {detailSentences.map((sentence, i) => (
                  <li key={i}>{sentence}</li>
                ))}
              </ul>
            </section>
          )}

          {!!item.tech?.length && (
            <>
              <hr className="my-6 md:my-8 border-neutral-200" />
              <section className="max-w-3xl">
                <h4 className="text-sm font-bold text-neutral-700 mb-3">
                  Tech
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border px-3 py-1 text-xs md:text-[0.8rem] text-neutral-700"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {!!item.links?.length && (
            <>
              <hr className="my-6 md:my-8 border-neutral-200" />
              <section className="max-w-3xl">
                <h4 className="text-sm font-semibold text-neutral-700 mb-3">
                  Links
                </h4>
                <div className="flex flex-wrap gap-3">
                  {item.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border px-3 py-1 text-sm hover:bg-neutral-50 underline-offset-4 hover:underline"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
