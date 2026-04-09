import { type UIStrings } from "../types";
import heroPhoto from "../assets/hero/hero-photo.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

type HeroProps = { t: UIStrings };

export function Hero({ t }: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="hero__layout">
        <div className="hero__media-col">
          <img src={heroPhoto} alt="Developer portrait" className="hero__img" />
        </div>

        <div className="hero__content">
          <h1 className="hero__heading">{t.heroTitle}</h1>
          <p className="hero__typewriter">
            <Typewriter
              words={t.heroTypewriter}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className="hero__lead">{t.heroSubtitle}</p>

          <div className="hero__actions">
            <a href="#projects" className="hero__cta">
              {t.heroCtaPrimary}
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__cta"
            >
              {t.heroCtaSecondary}
            </a>
          </div>

          <div className="hero__social-row">
            <a
              href="https://www.linkedin.com/in/usama-a-b75133105/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social hero__social--linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Usama-ASattar"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social hero__social--github"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.instagram.com/usa__as"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social hero__social--instagram"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
