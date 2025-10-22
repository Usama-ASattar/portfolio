import { DICTIONARY } from "./dictionary";
import { type LangKey, type UIStrings } from "../types";

import { useEffect, useMemo, useState } from "react";

export function getStrings(lang: LangKey): UIStrings {
  return DICTIONARY[lang] ?? DICTIONARY.en;
}

export function formatDate(d: Date, lang: LangKey) {
  return new Intl.DateTimeFormat(lang, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(d);
}

export function useLocalized(defaultLang: LangKey = "en") {
  const [lang, setLang] = useState<LangKey>(() => {
    if (typeof window === "undefined") return defaultLang;
    const stored = window.localStorage.getItem("lang") as LangKey | null;
    return stored ?? defaultLang;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = useMemo(() => getStrings(lang), [lang]);

  return { lang, setLang, t };
}
