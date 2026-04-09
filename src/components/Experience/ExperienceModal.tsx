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
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exp-modal-title"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="modal-panel modal-panel--experience modal-panel-shell"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header">
          <div className="modal-header__row">
            <div className="modal-header__title-wrap">
              <h3 id="exp-modal-title" className="modal-title">
                {item.role}
              </h3>
              <p className="modal-meta">{item.company}</p>

              <div className="modal-meta-grid">
                <div className="modal-meta-row">
                  <span className="modal-meta-label">Duration:</span>
                  <span>
                    {item.period} ({pluralize(months, "Month")})
                  </span>
                </div>

                <div className="modal-meta-row">
                  <span className="modal-meta-label">Location:</span>
                  <span>{item.location}</span>
                </div>

                <div className="modal-meta-row">
                  <span className="modal-meta-label">Employment type:</span>
                  <span>{employmentType}</span>
                </div>

                <div className="modal-meta-row">
                  <span className="modal-meta-label">Mode:</span>
                  <span>{mode}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="modal-close"
              aria-label={closeLabel}
              title={closeLabel}
            >
              ✕
            </button>
          </div>
        </header>

        <div className="modal-body modal-body--experience">
          {introParagraphs.length > 0 && (
            <div className="modal-intro">
              {introParagraphs.map((para, i) => (
                <p key={i} className="modal-paragraph">
                  {para}
                </p>
              ))}
            </div>
          )}

          {(introParagraphs.length > 0 || detailSentences.length > 0) && (
            <hr className="modal-hr" />
          )}

          {detailSentences.length > 0 && (
            <section className="modal-section-narrow">
              <h4 className="modal-section-title">
                Key contributions include:
              </h4>
              <ul className="modal-list">
                {detailSentences.map((sentence, i) => (
                  <li key={i}>{sentence}</li>
                ))}
              </ul>
            </section>
          )}

          {!!item.tech?.length && (
            <>
              <hr className="modal-hr" />
              <section className="modal-section-narrow">
                <h4 className="modal-section-title">Tech</h4>
                <ul className="modal-tech-list">
                  {item.tech.map((techItem) => (
                    <li key={techItem} className="modal-tech-pill">
                      {techItem}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {!!item.links?.length && (
            <>
              <hr className="modal-hr" />
              <section className="modal-section-narrow">
                <h4 className="modal-links-heading">Links</h4>
                <div className="modal-links-row">
                  {item.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link-out"
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
