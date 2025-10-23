import React from "react";
import { useTheme } from "../hooks/useTheme";
import { type LangKey, type UIStrings } from "../types";

type NavbarProps = {
  t: UIStrings;
  lang: LangKey;
  setLang: (l: LangKey) => void;
  currentHash?: string;
};

const links: Array<{ href: string; key: keyof UIStrings }> = [
  { href: "#home", key: "navHome" },
  { href: "#experience", key: "navExperience" },
  { href: "#projects", key: "navProjects" },
  { href: "#tech", key: "navTech" },
  { href: "#contact", key: "navContact" },
];

export function Navbar({ t, lang, setLang, currentHash }: NavbarProps) {
  const { theme, toggle } = useTheme();
  const [langOpen, setLangOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Close language dropdown when clicking outside
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el.closest("#lang-dropdown")) setLangOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Close mobile menu on hash change
  React.useEffect(() => {
    const onHash = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Strengthen shadow after tiny scroll
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Spacer so the fixed bar doesn't overlap content */}
      <div className="h-16 sm:h-[3.5rem]" />

      {/* Fixed, centered capsule */}
      <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2 w-full px-4">
        <div className="mx-auto w-full max-w-[64rem]">
          <div
            className={[
              // Make width stable at breakpoints (no w-fit!)
              "mx-auto w-full xs:w-[360px] sm:w-[520px] md:w-[820px] lg:w-[960px]",
              "px-4 sm:px-5 py-2 rounded-full border backdrop-blur",
              // 3-column grid: brand | links (center) | controls
              "grid grid-cols-[auto,1fr,auto] items-center gap-3",
              // Light
              "bg-white/90 text-neutral-900 border-neutral-200 ring-1 ring-black/5",
              // Dark: higher opacity for visibility + subtle ring/shadow
              "dark:bg-neutral-900/95 dark:text-neutral-100 dark:border-white/10 dark:ring-white/10",
              // Shadow reacts to scroll
              scrolled
                ? "shadow-md dark:shadow-black/40"
                : "shadow-sm dark:shadow-black/20",
            ].join(" ")}
          >
            {/* Brand (left) */}
            <a
              href="#home"
              className="text-base sm:text-lg font-semibold whitespace-nowrap md:hidden lg:hidden"
            >
              Usama
            </a>

            {/* Desktop links (center) */}
            <ul className="hidden md:flex items-center justify-center gap-6 whitespace-nowrap">
              {links.map((l) => {
                const active = currentHash === l.href;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={`transition ${
                        active
                          ? "font-semibold text-primary"
                          : "opacity-80 hover:opacity-100"
                      }`}
                    >
                      {t[l.key]}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Controls (right) */}
            <div className="ml-auto flex items-center gap-2">
              {/* Theme */}
              <button
                type="button"
                onClick={toggle}
                className="rounded-full border px-3 pt-0.5 pb-1 text-sm transition hover:bg-neutral-100 dark:hover:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
                aria-label="Toggle theme"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </button>

              {/* Language */}
              <div id="lang-dropdown" className="relative">
                <button
                  type="button"
                  onClick={() => setLangOpen((v) => !v)}
                  className="flex items-center gap-1 rounded-full border px-3 py-1 text-sm transition hover:bg-neutral-100 dark:hover:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
                  aria-haspopup="listbox"
                  aria-expanded={langOpen}
                  title="Change language"
                >
                  🌐 {lang === "en" ? "EN" : "DE"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-1 h-3 w-3 transition-transform ${
                      langOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {langOpen && (
                  <ul
                    className="absolute right-0 mt-1 w-36 rounded-md border bg-white text-neutral-900 shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
                    role="listbox"
                  >
                    <li>
                      <button
                        onClick={() => {
                          setLang("en");
                          setLangOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-1.5 text-sm transition hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                          lang === "en" ? "font-semibold" : ""
                        }`}
                        role="option"
                        aria-selected={lang === "en"}
                      >
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setLang("de");
                          setLangOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-1.5 text-sm transition hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                          lang === "de" ? "font-semibold" : ""
                        }`}
                        role="option"
                        aria-selected={lang === "de"}
                      >
                        Deutsch
                      </button>
                    </li>
                  </ul>
                )}
              </div>

              {/* Mobile menu button (hidden on md+) */}
              <button
                className="inline-flex items-center justify-center rounded-full p-2 md:hidden hover:bg-neutral-100 dark:hover:bg-neutral-800"
                aria-label="Open menu"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {menuOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 11-1.414 1.414L12 12l-4.361 4.361a1 1 0 11-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile floating panel under the capsule */}
          {menuOpen && (
            <div className="relative">
              <div className="absolute left-1/2 z-40 mt-2 w-[calc(100vw-2rem)] max-w-sm -translate-x-1/2 rounded-2xl border bg-white text-neutral-900 shadow-lg dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-100">
                <ul className="flex flex-col gap-1 p-2">
                  {links.map((l) => {
                    const active = currentHash === l.href;
                    return (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          className={`block rounded-lg px-3 py-2 transition hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                            active ? "font-semibold text-primary" : ""
                          }`}
                        >
                          {t[l.key]}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
