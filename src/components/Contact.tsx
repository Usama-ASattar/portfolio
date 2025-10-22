import React from "react";
import { Section } from "./index";
import emailjs from "@emailjs/browser";
import { type UIStrings } from "../types";

type ContactProps = { t: UIStrings };

export function Contact({ t }: ContactProps) {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<null | "ok" | "err">(null);

  // Auto hide status after 4 seconds
  React.useEffect(() => {
    if (!status) return;
    const id = setTimeout(() => setStatus(null), 4000);
    return () => clearTimeout(id);
  }, [status]);

  // Clear status when the user edits any field
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
      formRef.current?.reset(); // safely reset form
    } catch (err: unknown) {
      const error = err as Error;
      console.error("EmailJS error:", error.message);
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
        className="mx-auto max-w-2xl rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur md:p-8 dark:bg-zinc-900/60"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* Name */}
          <label className="grid gap-2">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {t.name} <span className="text-red-500">*</span>
            </span>
            <input
              name="name"
              type="text"
              required
              onInput={clearStatusOnEdit}
              placeholder={t.name}
              className="h-11 rounded-xl border border-zinc-300 bg-white px-4 text-zinc-900 shadow-xs outline-none transition focus:border-transparent focus:ring-4 focus:ring-primary/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </label>

          {/* Email */}
          <label className="grid gap-2">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {t.email} <span className="text-red-500">*</span>
            </span>
            <input
              name="email"
              type="email"
              required
              onInput={clearStatusOnEdit}
              placeholder="name@example.com"
              className="h-11 rounded-xl border border-zinc-300 bg-white px-4 text-zinc-900 shadow-xs outline-none transition focus:border-transparent focus:ring-4 focus:ring-primary/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </label>
        </div>

        {/* Message */}
        <label className="mt-6 grid gap-2">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {t.message} <span className="text-red-500">*</span>
          </span>
          <textarea
            name="message"
            required
            rows={6}
            onInput={clearStatusOnEdit}
            placeholder={t.message}
            className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 shadow-xs outline-none transition focus:border-transparent focus:ring-4 focus:ring-primary/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </label>

        {/* Status + Submit Button */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm" role="status" aria-live="polite">
            {status === "ok" && (
              <span className="text-green-600">
                Thanks! Your message has been sent.
              </span>
            )}
            {status === "err" && (
              <span className="text-red-600">
                Sorry, something went wrong. Please try again.
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`relative inline-flex items-center justify-center gap-2
              rounded-full bg-gradient-to-r from-[#007bff] to-[#6f42c1]
              px-7 py-2.5 text-sm font-semibold text-white
              shadow-[0_4px_14px_-2px_rgba(79,70,229,0.4)]
              transition-all duration-300 hover:opacity-90 active:scale-[0.98]
              focus:outline-none focus:ring-4 focus:ring-[#007bff]/30 group
              ${submitting ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            <span className="relative z-10">
              {submitting ? "Sending..." : t.send}
            </span>
            {!submitting && (
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            )}
            <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
          </button>
        </div>
      </form>
    </Section>
  );
}
