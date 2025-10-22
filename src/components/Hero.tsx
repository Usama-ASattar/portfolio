import { type UIStrings } from "../types";
import { cn } from "../utils";
import heroPhoto from "../assets/hero/hero-photo.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

type HeroProps = { t: UIStrings };

export function Hero({ t }: HeroProps) {
  return (
    <section id="home" className="relative md:py-10 py-8 md:py-16">
      <div
        className="
          mx-auto max-w-6xl px-4 
          flex flex-col md:grid md:grid-cols-2 md:items-center gap-10
        "
      >
        {/* --- IMAGE --- */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src={heroPhoto}
            alt="Developer portrait"
            className="
              w-48 h-48 sm:w-56 sm:h-56 md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[520px] 
              rounded-full md:rounded-2xl
              border border-border object-cover shadow-lg
              transition-all duration-300
            "
          />
        </div>

        {/* --- TEXT --- */}
        <div className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
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

          <p className="mt-4 text-lg md:pt-7 md:text-xl md:text-justify text-muted-foreground max-w-2xl mx-auto md:mx-0">
            {t.heroSubtitle}
          </p>

          {/* --- BUTTONS --- */}
          <div className="mt-4 md:mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            {/* Primary CTA */}
            <a
              href="#projects"
              className={cn(
                "inline-flex items-center rounded-xl border px-5 py-2 text-sm font-medium transition transform hover:scale-105",
                "hover:shadow-lg hover:bg-accent"
              )}
            >
              {t.heroCtaPrimary}
            </a>

            {/* Download CV */}
            <a
              href="/cv.pdf"
              download
              className={cn(
                "inline-flex items-center rounded-xl border px-5 py-2 text-sm font-medium transition transform hover:scale-105",
                "hover:shadow-lg hover:bg-accent"
              )}
            >
              {t.heroCtaSecondary}
            </a>
          </div>

          {/* --- SOCIAL BUTTONS ON NEXT LINE --- */}
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="https://www.linkedin.com/in/usama-a-b75133105/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center rounded-full border p-3 text-white transition transform hover:scale-110 shadow-sm",
                "bg-[#0077B5] hover:shadow-lg"
              )}
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/Usama-ASattar"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center rounded-full border p-3 text-white transition transform hover:scale-110 shadow-sm",
                "bg-black hover:shadow-lg"
              )}
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.instagram.com/usa__as"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center rounded-full border p-3 text-white transition transform hover:scale-110 shadow-sm",
                "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:shadow-lg"
              )}
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
