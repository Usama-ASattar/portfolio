/** EmailJS (contact form). Variables are injected by Vite from `.env.local`. */
export function isEmailJsConfigured(): boolean {
  const id = String(import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "").trim();
  const tpl = String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "").trim();
  const key = String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "").trim();
  return Boolean(id && tpl && key);
}

export function getEmailJsEnv(): {
  serviceId: string;
  templateId: string;
  publicKey: string;
} | null {
  if (!isEmailJsConfigured()) {
    if (import.meta.env.DEV) {
      console.warn(
        "[EmailJS] Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to .env.local — see .env.example",
      );
    }
    return null;
  }
  return {
    serviceId: String(import.meta.env.VITE_EMAILJS_SERVICE_ID).trim(),
    templateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID).trim(),
    publicKey: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY).trim(),
  };
}
