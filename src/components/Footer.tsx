import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { type UIStrings } from "../types";

type FooterProps = {
  t: UIStrings;
  name?: string;
  linkedin?: string;
  github?: string;
};

export const Footer: React.FC<FooterProps> = ({
  t,
  name = "Usama Abdul Sattar",
  linkedin = "https://www.linkedin.com/in/usama-a-b75133105/",
  github = "https://github.com/Usama-ASattar",
}) => {
  return (
    <footer className="py-8 px-4 sm:px-6">
      <div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4
                   rounded-2xl border bg-white/70 px-5 py-5 shadow-sm backdrop-blur
                   dark:border-white/10 dark:bg-zinc-900/60 sm:flex-row sm:gap-6"
      >
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-300 sm:text-left">
          © 2024 {name} | {t.allRightsReserved}
        </p>

        <div className="flex items-center gap-3">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-grid size-10 place-items-center rounded-full
                       border border-zinc-500 bg-white text-zinc-600 transition-all duration-300
                       hover:border-transparent hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2]
                       dark:border-zinc-300 dark:bg-zinc-900 dark:text-zinc-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="size-4 transition-colors duration-300 group-hover:text-white" />
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-grid size-10 place-items-center rounded-full
                       border border-zinc-500 bg-white text-zinc-600 transition-all duration-300
                       hover:border-transparent hover:bg-[#24292e] dark:hover:bg-white
                       dark:border-zinc-300 dark:bg-zinc-900 dark:text-zinc-300"
            aria-label="GitHub"
          >
            <FaGithub className="size-5 transition-colors duration-300 group-hover:text-white dark:group-hover:text-[#24292e]" />
          </a>
        </div>
      </div>
    </footer>
  );
};
