import type { LangKey, ProjectItem } from "../types";
import { paragraphToArray } from "../utils";
import {
  portfolioPreview,
  portfolioPreviewDark,
  portfolioPreviewMobile,
  portfolioPreviewMobileDark,
  travelMapPreview,
  platePreview,
  platePreviewTwo,
  platePreviewMobile,
  platePreviewMobileTwo,
  platePreviewMobileThree,
} from "../assets";

export const projectItems: Record<LangKey, ProjectItem[]> = {
  en: [
    {
      id: 1,
      title: "Sustainable Travel Map",
      shortDescription:
        "The Sustainable Mobility Map is a master’s thesis project that reimagines digital navigation as a tool for environmental awareness. It visualizes the relationship between personal travel behavior and CO₂ emission limits defined by the Paris Agreement. Developed as an interactive web prototype using React.js, Tailwind CSS, and Google Maps API, the project helps users reflect on how their mobility choices contribute to or stay within sustainable emission goals. By translating complex climate data into relatable “mobility days,” it encourages users to rethink their daily commutes and travel habits in a more eco-conscious way.",
      blurb:
        "An interactive map linking personal travel habits to CO₂ goals for promoting sustainable mobility choices.",
      image: travelMapPreview,
      imageAlt: "Screenshot of portfolio website",
      extraImages: [travelMapPreview],
      tech: [
        "React",
        "JavaScript",
        "Vercel",
        "Google Maps API",
        "Tailwind CSS",
      ],
      demo: "https://sustainable-travel-map.vercel.app/explore",
      features: paragraphToArray(
        `The Sustainable Mobility Map allows users to select yearly CO₂ emission targets (2024–2045) to see how personal travel aligns with Paris Agreement limits. The Mobility Cost Bar converts emissions into “mobility days,” helping users understand how much of their yearly travel budget is consumed. The Commute Mode analyzes daily travel routines and reveals the CO₂ impact and annual mobility budget usage. The Radius Mode visualizes how far users can travel within a chosen number of mobility days, depending on the transport mode. The Explore Mode provides real-time CO₂ emission feedback for single trips, allowing users to compare different travel options. The system uses Google Maps API to calculate routes and emissions across multiple transport modes. It encourages reflection and sustainable decision-making through persuasive design principles. It has been empirically proven through user studies to increase awareness and motivation for eco-friendly mobility choices.`
      ),
    },
    {
      id: 2,
      title: "Portfolio Website",
      shortDescription:
        "This project is a personal portfolio website designed to present professional experience, technical expertise, and selected projects in a visually engaging and accessible way. It was developed using React and TypeScript, following a component-driven architecture to ensure scalability and clean code organization. The styling was implemented with Tailwind CSS, creating a modern, minimal, and cohesive interface. The website emphasizes strong fundamentals in frontend development, performance optimization, and maintainability, reflecting professional best practices. It also demonstrates an understanding of accessibility standards, structured design systems, and modern deployment workflows.",
      blurb:
        "A responsive personal portfolio website built with React, TypeScript, and Tailwind CSS showcasing projects and professional work.",
      image: portfolioPreview,
      imageAlt: "Screenshot of portfolio website",
      extraImages: [
        portfolioPreview,
        portfolioPreviewDark,
        portfolioPreviewMobile,
        portfolioPreviewMobileDark,
      ],
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
        "GitHub Calendar",
        "EmailJS",
      ],
      github: "https://github.com/yourusername/portfolio",
      features: paragraphToArray(
        `The portfolio offers a responsive layout that adjusts seamlessly across mobile, tablet, and desktop screens for a consistent user experience. It includes a dark/light theme toggle with preference persistence, allowing users to choose their preferred viewing mode. Built with multilingual support (English / Deutsch) through i18n integration, it caters to an international audience. Smooth section transitions and subtle animations enhance the visual experience without compromising performance. The site is also SEO-optimized, including meta and Open Graph tags for better discoverability on search engines and social platforms. Additional highlights include modular reusable components, lazy loading, and accessibility compliance, ensuring both performance and inclusivity.`
      ),
    },
    {
      id: 3,
      title: "Plate Generator",
      shortDescription:
        "A responsive and interactive Plate & Socket Generator System built with React and Vite.  This tool allows users to configure, visualize, and export custom wall plates, now enhanced with socket group creation and placement for realistic layout simulation. It dynamically manages plate resizing, scaling, and socket positioning, maintaining real-world proportions and visual accuracy, while being highly performant and mobile-friendly.",
      blurb:
        "An interactive wall plate and socket generator built with React and Vite for designing and exporting realistic, scalable layouts.",
      image: platePreview,
      imageAlt: "Screenshot of portfolio website",
      extraImages: [
        platePreview,
        platePreviewTwo,
        platePreviewMobile,
        platePreviewMobileTwo,
        platePreviewMobileThree,
      ],
      tech: [
        "React (18+)",
        "Vite",
        "Tailwind CSS",
        "HTML5 Canvas API",
        "Intl.NumberFormat for locale-based input",
        "LocalStorage for persistence",
      ],
      github: "https://github.com/Usama-ASattar/plate-generator-system",
      demo: "https://plate-generator-system-psi.vercel.app/",
      features: paragraphToArray(
        `The Plate & Socket Generator System is a responsive and interactive web tool built with React, Vite, and Tailwind CSS that enables users to design, visualize, and export realistic wall plate layouts. It features a combined plate and socket interface with a real-time interactive canvas that supports proportional scaling, drag controls, and touch input for mobile devices. The system maintains true physical proportions (1 cm = 1 unit) and dynamically adjusts layouts to fit multiple plates while preserving aspect ratios. Users receive live visual feedback through distance indicators and placement guidelines during socket positioning, ensuring accuracy and preventing invalid configurations. Plates can be added, resized, or deleted dynamically, with configurations saved through localStorage. Socket groups can be customized with adjustable counts, orientations, and positions, following strict placement rules and spacing constraints to simulate real-world layouts. The tool includes robust validation and feedback mechanisms that block invalid actions and provide clear visual messages. Additional features include custom motif uploads, PNG export, automatic unit conversion between centimeters and inches, and smooth real-time performance. Leveraging the HTML5 Canvas API and optimized rendering, the system delivers high responsiveness and visual precision across both desktop and mobile devices.`
      ),
    },
  ],

  de: [
    {
      id: 1,
      title: "Nachhaltige Reisekarte",
      shortDescription:
        "Die Sustainable Mobility Map ist ein Masterarbeitsprojekt, das digitale Navigation als Instrument zur Förderung des Umweltbewusstseins neu interpretiert. Sie visualisiert den Zusammenhang zwischen individuellem Reiseverhalten und den CO₂-Emissionsgrenzen des Pariser Abkommens. Entwickelt wurde der interaktive Webprototyp mit React.js, Tailwind CSS und der Google Maps API. Das Projekt hilft Nutzerinnen und Nutzern, ihre Mobilitätsentscheidungen zu reflektieren und zu verstehen, wie sie zu nachhaltigen Emissionszielen beitragen können. Durch die Übersetzung komplexer Klimadaten in nachvollziehbare „Mobilitätstage“ regt die Anwendung zu einem bewussteren Umgang mit täglichen Wegen und Reisegewohnheiten an.",
      blurb:
        "Eine interaktive Karte, die persönliches Reiseverhalten mit CO₂-Zielen verknüpft, um nachhaltige Mobilitätsentscheidungen zu fördern.",
      image: travelMapPreview,
      imageAlt: "Screenshot der Nachhaltigen Reisekarte",
      extraImages: [travelMapPreview],
      tech: [
        "React",
        "JavaScript",
        "Vercel",
        "Google Maps API",
        "Tailwind CSS",
      ],
      demo: "https://sustainable-travel-map.vercel.app/explore",
      features: paragraphToArray(
        `Die Sustainable Mobility Map ermöglicht es, jährliche CO₂-Emissionsziele (2024–2045) auszuwählen und zu sehen, wie das persönliche Reiseverhalten mit den Vorgaben des Pariser Abkommens übereinstimmt. Die Mobility Cost Bar wandelt Emissionen in „Mobilitätstage“ um und zeigt, wie viel des jährlichen Reisebudgets verbraucht wird. Der Commute Mode analysiert tägliche Wege und zeigt den CO₂-Einfluss sowie den jährlichen Budgetverbrauch. Der Radius Mode visualisiert, wie weit man innerhalb einer bestimmten Anzahl an Mobilitätstagen je nach Verkehrsmittel reisen kann. Der Explore Mode liefert Echtzeit-Feedback zu den CO₂-Emissionen einzelner Reisen und ermöglicht den Vergleich verschiedener Optionen. Das System nutzt die Google Maps API, um Routen und Emissionen über mehrere Verkehrsmittel hinweg zu berechnen. Es fördert Reflexion und nachhaltige Entscheidungsfindung durch persuasive Designprinzipien. Eine empirische Studie bestätigte, dass der Prototyp das Umweltbewusstsein und die Motivation zu umweltfreundlicheren Mobilitätsentscheidungen deutlich steigert.`
      ),
    },
    {
      id: 2,
      title: "Portfolio",
      shortDescription:
        "Dieses Projekt ist eine persönliche Portfolio-Website, die Berufserfahrung, technische Expertise und ausgewählte Projekte in einem modernen, klaren und zugänglichen Design präsentiert. Entwickelt mit React und TypeScript folgt sie einer komponentenbasierten Architektur für Skalierbarkeit und saubere Code-Struktur. Das Styling wurde mit Tailwind CSS umgesetzt, um eine minimalistische und konsistente Benutzeroberfläche zu schaffen. Die Website legt Wert auf saubere Frontend-Prinzipien, Performance-Optimierung und Wartbarkeit. Sie demonstriert außerdem ein tiefes Verständnis für Barrierefreiheit, strukturierte Designsysteme und moderne Deployment-Workflows.",
      blurb:
        "Eine responsive Portfolio-Website, entwickelt mit React, TypeScript und Tailwind CSS, zur Präsentation von Projekten und beruflicher Arbeit.",
      image: portfolioPreview,
      imageAlt: "Screenshot der Portfolio-Website",
      extraImages: [
        portfolioPreview,
        portfolioPreviewDark,
        portfolioPreviewMobile,
        portfolioPreviewMobileDark,
      ],
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
        "GitHub Calendar",
        "EmailJS",
      ],
      github: "https://github.com/yourusername/portfolio",
      features: paragraphToArray(
        `Das Portfolio bietet ein responsives Layout, das sich nahtlos an mobile, Tablet- und Desktop-Ansichten anpasst und ein konsistentes Nutzererlebnis gewährleistet. Es enthält einen Dunkel-/Hellmodus mit Speicherung der bevorzugten Einstellung. Durch die Integration von Mehrsprachigkeit (Englisch / Deutsch) über i18n richtet es sich an ein internationales Publikum. Sanfte Übergänge und dezente Animationen verbessern die Benutzererfahrung, ohne die Performance zu beeinträchtigen. Die Seite ist SEO-optimiert und verwendet Meta- sowie Open-Graph-Tags für bessere Sichtbarkeit in Suchmaschinen und sozialen Medien. Weitere Highlights sind modulare, wiederverwendbare Komponenten, Lazy Loading und Einhaltung von Barrierefreiheitsstandards, wodurch Leistung und Zugänglichkeit gleichermaßen gewährleistet sind.`
      ),
    },
    {
      id: 3,
      title: "Platten-Generator",
      shortDescription:
        "Ein responsives und interaktives Platten- und Steckdosen-Generatorsystem, entwickelt mit React und Vite. Dieses Tool ermöglicht es Nutzerinnen und Nutzern, individuelle Wandplatten zu konfigurieren, zu visualisieren und zu exportieren – jetzt erweitert um die Erstellung und Platzierung von Steckdosengruppen für eine realistische Layoutsimulation. Es verwaltet dynamisch die Größenänderung, Skalierung und Positionierung der Steckdosen und sorgt dabei für realitätsgetreue Proportionen und hohe visuelle Präzision, während es zugleich performant und mobiloptimiert bleibt.",
      blurb:
        "Ein interaktiver Wandplatten- und Steckdosen-Generator, entwickelt mit React und Vite, zur Gestaltung und zum Export realistischer, skalierbarer Layouts.",
      image: platePreview,
      imageAlt: "Screenshot des Platten-Generators",
      extraImages: [
        platePreview,
        platePreviewTwo,
        platePreviewMobile,
        platePreviewMobileTwo,
        platePreviewMobileThree,
      ],
      tech: [
        "React (18+)",
        "Vite",
        "Tailwind CSS",
        "HTML5 Canvas API",
        "Intl.NumberFormat für lokale Eingaben",
        "LocalStorage für Persistenz",
      ],
      github: "https://github.com/Usama-ASattar/plate-generator-system",
      demo: "https://plate-generator-system-psi.vercel.app/",
      features: paragraphToArray(
        `Das Platten- und Steckdosen-Generatorsystem ist ein responsives, interaktives Webtool, das die Gestaltung, Visualisierung und den Export realistischer Wandplattenlayouts ermöglicht. Es verfügt über eine kombinierte Platten- und Steckdosenoberfläche mit Echtzeitvorschau, proportionaler Skalierung und Touch-Unterstützung für mobile Geräte. Das System hält reale Maßstäbe ein (1 cm = 1 Einheit) und passt Layouts dynamisch an, um mehrere Platten bei gleichbleibenden Proportionen anzuzeigen. Während des Positionierens erhalten Nutzerinnen und Nutzer visuelles Feedback über Abstände und Platzierungslinien, um Fehler zu vermeiden. Platten können dynamisch hinzugefügt, skaliert oder gelöscht werden, wobei Konfigurationen in LocalStorage gespeichert bleiben. Steckdosengruppen lassen sich mit anpassbarer Anzahl, Ausrichtung und Positionierung konfigurieren, unter Berücksichtigung von Platzierungsregeln und Mindestabständen. Das Tool enthält umfangreiche Validierungs- und Feedbackmechanismen, verhindert ungültige Aktionen und liefert klare visuelle Rückmeldungen. Weitere Funktionen umfassen den Upload eigener Motivbilder, PNG-Export, automatische Umrechnung zwischen cm und Zoll sowie flüssige Echtzeitleistung. Mit der HTML5 Canvas API und optimierter Darstellung bietet das System hohe Reaktionsfähigkeit und visuelle Präzision auf allen Geräten.`
      ),
    },
  ],
};
