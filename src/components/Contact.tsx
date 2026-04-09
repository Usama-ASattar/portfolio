import React from "react";
import { Section } from "./index";
import emailjs from "@emailjs/browser";
import { type UIStrings } from "../types";
import { cn } from "../utils/classNames";

type ContactProps = { t: UIStrings };

export function Contact({ t }: ContactProps) {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<null | "ok" | "err">(null);

  React.useEffect(() => {
    if (!status) return;
    const id = setTimeout(() => setStatus(null), 4000);
    return () => clearTimeout(id);
  }, [status]);

  function clearStatusOnEdit() {
    if (status) setStatus(null);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current as HTMLFormElement,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      setStatus("ok");
      formRef.current?.reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("EmailJS error:", message);
      setStatus("err");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section id="contact" title={t.contactTitle} subtitle={t.contactLead}>
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="contact-form"
      >
        <div className="contact-field-grid">
          <label className="contact-label">
            <span className="contact-label-text">
              {t.name} <span className="contact-required">*</span>
            </span>
            <input
              name="name"
              type="text"
              required
              onInput={clearStatusOnEdit}
              placeholder={t.name}
              className="contact-input"
            />
          </label>

          <label className="contact-label">
            <span className="contact-label-text">
              {t.email} <span className="contact-required">*</span>
            </span>
            <input
              name="email"
              type="email"
              required
              onInput={clearStatusOnEdit}
              placeholder="name@example.com"
              className="contact-input"
            />
          </label>
        </div>

        <label className="contact-label contact-label--message">
          <span className="contact-label-text">
            {t.message} <span className="contact-required">*</span>
          </span>
          <textarea
            name="message"
            required
            rows={6}
            onInput={clearStatusOnEdit}
            placeholder={t.message}
            className="contact-textarea"
          />
        </label>

        <div className="contact-footer">
          <div className="contact-status" role="status" aria-live="polite">
            {status === "ok" && (
              <span className="contact-status--ok">
                Thanks! Your message has been sent.
              </span>
            )}
            {status === "err" && (
              <span className="contact-status--err">
                Sorry, something went wrong. Please try again.
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={cn(
              "contact-submit",
              submitting && "contact-submit--busy"
            )}
          >
            <span className="contact-submit__label">
              {submitting ? "Sending..." : t.send}
            </span>
            {!submitting && (
              <svg
                className="contact-submit__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            )}
            <span className="contact-submit__shine" />
          </button>
        </div>
      </form>
    </Section>
  );
}
