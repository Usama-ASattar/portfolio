import { type LangKey, type UIStrings } from "../types";

export const DICTIONARY: Record<LangKey, UIStrings> = {
  en: {
    navHome: "Home",
    navTech: "Technologies",
    navProjects: "Projects",
    navExperience: "Experience",
    navContact: "Contact",

    heroTitle: "Hi, I’m Usama.",
    heroTypewriter: [
      "Software Engineer",
      "Full Stack Developer",
      "Frontend Engineer",
      "Tech Enthusiast",
    ],
    heroSubtitle:
      "Building scalable, user-first web applications through a full-stack approach. Blending React, Python, and DevOps to deliver efficient, user-centered products.",
    heroCtaPrimary: "View Projects",
    heroCtaSecondary: "Resume/CV",

    techTitle: "Technologies",
    techLead: "The technologies powering my work.",

    projectsTitle: "Projects",
    projectsLead:
      "Exploring ideas brought to life through design and development.",
    github: "GitHub",
    live: "Live",
    viewDetails: "View details",
    close: "Close",

    expTitle: "Experience",
    expLead: "A summary of my work and achievements so far.",
    liveDemo: "Live Demo",
    loadMore: "Show More",
    showLess: "Show Less",

    contactTitle: "Contact",
    contactLead: "Let’s build something great together.",
    name: "Your name",
    email: "Email address",
    message: "Message",
    send: "Send",
    contactSending: "Sending...",
    contactSuccess: "Thanks! Your message has been sent.",
    contactSendError: "Sorry, something went wrong. Please try again.",
    contactConfigError:
      "The contact form is not configured. Set EmailJS variables in .env.local (see .env.example).",

    allRightsReserved: " All rights reserved",
  },
  de: {
    navHome: "Start",
    navTech: "Technologien",
    navProjects: "Projekte",
    navExperience: "Erfahrung",
    navContact: "Kontakt",

    heroTitle: "Hi, ich bin Usama.",
    heroTypewriter: [
      "Softwareentwickler",
      "Full-Stack-Entwickler",
      "Frontend-Entwickler",
      "Technologiebegeistert",
    ],
    heroSubtitle:
      "Entwickle skalierbare, nutzerzentrierte Webanwendungen mit einem Full-Stack-Ansatz. Kombiniere React, Python, und DevOps, um effiziente und benutzerfreundliche Produkte zu liefern.",

    heroCtaPrimary: "Projekte ansehen",
    heroCtaSecondary: "Lebenslauf",

    techTitle: "Technologien",
    techLead: "Die Technologien, die meine Arbeit antreiben",

    projectsTitle: "Projekte",
    projectsLead:
      "Ideen, die durch Design und Entwicklung zum Leben erweckt wurden.",
    github: "GitHub",
    live: "Live",
    viewDetails: "Details ansehen",
    close: "Schließen",

    expTitle: "Erfahrung",
    expLead: "Eine Zusammenfassung meiner bisherigen Arbeit und Erfolge.",
    liveDemo: "Zur Live-Demo",
    loadMore: "Mehr anzeigen",
    showLess: "Weniger anzeigen",

    contactTitle: "Kontakt",
    contactLead: "Lass uns gemeinsam Großes bauen.",
    name: "Vollständiger Name",
    email: "E-Mail-Adresse",
    message: "Nachricht",
    send: "Senden",
    contactSending: "Wird gesendet...",
    contactSuccess: "Danke! Deine Nachricht wurde gesendet.",
    contactSendError:
      "Entschuldigung, etwas ist schiefgelaufen. Bitte versuche es erneut.",
    contactConfigError:
      "Das Kontaktformular ist nicht konfiguriert. Bitte EmailJS-Variablen in .env.local setzen (siehe .env.example).",

    allRightsReserved: " Alle Rechte vorbehalten",
  },
};
