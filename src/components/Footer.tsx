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
    <footer className="footer">
      <div className="footer__panel">
        <p className="footer__copy">
          © 2024 {name} | {t.allRightsReserved}
        </p>

        <div className="footer__socials">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social footer__social--linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="footer__social-icon--linkedin" />
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social footer__social--github"
            aria-label="GitHub"
          >
            <FaGithub className="footer__social-icon--github" />
          </a>
        </div>
      </div>
    </footer>
  );
};
