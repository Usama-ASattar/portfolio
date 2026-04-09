import React from "react";
import { useTheme } from "../hooks/useTheme";
import { type LangKey, type UIStrings } from "../types";
import { cn } from "../utils/classNames";

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

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el.closest("#lang-dropdown")) setLangOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  React.useEffect(() => {
    const onHash = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="nav-spacer" />

      <div className="nav-fixed">
        <div className="nav-inner">
          <div
            className={cn(
              "nav-shell",
              scrolled ? "nav-shell--raised" : "nav-shell--rest"
            )}
          >
            <a href="#home" className="nav-brand">
              Usama
            </a>

            <ul className="nav-links">
              {links.map((l) => {
                const active = currentHash === l.href;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={cn("nav-link", active && "nav-link--active")}
                    >
                      {t[l.key]}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="nav-controls">
              <button
                type="button"
                onClick={toggle}
                className="nav-icon-btn"
                aria-label="Toggle theme"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </button>

              <div id="lang-dropdown" className="nav-dropdown">
                <button
                  type="button"
                  onClick={() => setLangOpen((v) => !v)}
                  className="nav-lang-btn"
                  aria-haspopup="listbox"
                  aria-expanded={langOpen}
                  title="Change language"
                >
                  🌐 {lang === "en" ? "EN" : "DE"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                      "nav-lang-chevron",
                      langOpen && "nav-lang-chevron--open"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
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
                  <ul className="nav-lang-menu" role="listbox">
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setLang("en");
                          setLangOpen(false);
                        }}
                        className={cn(
                          "nav-lang-item",
                          lang === "en" && "nav-lang-item--active"
                        )}
                        role="option"
                        aria-selected={lang === "en"}
                      >
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setLang("de");
                          setLangOpen(false);
                        }}
                        className={cn(
                          "nav-lang-item",
                          lang === "de" && "nav-lang-item--active"
                        )}
                        role="option"
                        aria-selected={lang === "de"}
                      >
                        Deutsch
                      </button>
                    </li>
                  </ul>
                )}
              </div>

              <button
                type="button"
                className="nav-menu-toggle"
                aria-label="Open menu"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-menu-toggle__icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
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

          {menuOpen && (
            <div className="nav-mobile-anchor">
              <div className="nav-mobile-panel">
                <ul className="nav-mobile-list">
                  {links.map((l) => {
                    const active = currentHash === l.href;
                    return (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          className={cn(
                            "nav-mobile-link",
                            active && "nav-mobile-link--active"
                          )}
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
