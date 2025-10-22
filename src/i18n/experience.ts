import type { LangKey, ExperinceItem } from "../types";
import { paragraphToArray } from "../utils";

export const experienceItems: Record<LangKey, ExperinceItem[]> = {
  en: [
    {
      company: "Universität Siegen",
      location: "Siegen, Germany",
      role: "Full Stack Developer",
      period: "12/2022 - 01/2024",
      work_arrangement: "Working Student",
      mode: "Hybrid",
      tech: ["React.js", "Node.js", "PostgreSQL", "Docker", "GitHub Actions"],
      points: paragraphToArray(`
Developed and maintained the university's internal Research Collaboration Platform.
Delivered end-to-end features such as a communities interface and a reactions system backed by PostgreSQL.
Achieved 25% higher engagement and 20% better satisfaction scores (survey) by applying accessible design and interactive UI features.
Improved efficiency by 35% through faster API response times and 40% shorter release cycles via automated CI/CD pipelines.
      `),
      company_intro: paragraphToArray(`
Universität Siegen is a leading German public research university where I contributed as a Full Stack Developer in a hybrid setup.
I worked on the university's Research Collaboration Platform, a web-based system that connects researchers, facilitates knowledge sharing, and streamlines collaboration workflows.
      `),
      details: paragraphToArray(`
Developed and maintained full-stack features using React.js, Node.js, and PostgreSQL, ensuring performance and scalability across the platform.
Delivered end-to-end functionalities, including a community interface and a dynamic reactions system, improving user engagement and social interaction.
Enhanced accessibility and multilingual reach by implementing i18n (English / Deutsch), a theme toggle, and WCAG-compliant design improvements.
Increased user engagement by 25% and satisfaction scores by 20% through interactive UI enhancements and inclusive design.
Optimized backend efficiency with 35% faster API response times and 40% shorter release cycles using Docker and GitHub Actions.
      `),
    },

    {
      company: "Websential (SMC-Private) Limited",
      location: "Lahore, Pakistan",
      role: "Frontend Developer",
      period: "01/2021 - 11/2022",
      work_arrangement: "Full Time",
      mode: "Remote",
      tech: [
        "React",
        "TypeScript",
        "Storybook",
        "Material-UI",
        "AWS",
        "Docker",
        "React Testing Library",
      ],
      points: paragraphToArray(`
Migrated legacy PHP clients (Simple Pay, Tax Slips) to modern React and TypeScript apps, improving maintainability.
Built 10+ shared frontend libraries that sped up delivery across projects.
Boosted performance with 20% faster load times and 30% lower API overhead via efficient RESTful API integration.
Increased stability and deployment reliability with 20% fewer bugs and roughly half the release time using AWS and Docker.
      `),
      company_intro: paragraphToArray(`
Websential is the software development wing of Simple Pay and Tax Slips, two B2B SaaS finance tools serving the Canadian market.
As a Frontend Developer, I worked remotely with a distributed team to build, modernize, and scale web applications used by financial professionals across Canada.
      `),
      details: paragraphToArray(`
Led the migration from deprecated PHP clients to modern React and TypeScript applications, significantly improving maintainability and performance.
Developed over ten reusable frontend libraries and shared UI components to standardize design and accelerate implementation across React clients.
Optimized frontend performance by increasing load speed by over 20% and reducing API overhead by 30% through efficient RESTful API integration and caching.
Enhanced stability and reduced bugs by 20% through robust testing practices using Storybook and React Testing Library.
Halved deployment times by creating scalable, containerized infrastructure using AWS and Docker for continuous delivery.
Collaborated closely with backend engineers and product teams to align UI/UX design with business and technical goals.
      `),
    },

    {
      company: "Pioneer Logix",
      location: "Lahore, Pakistan",
      role: "Frontend Developer",
      period: "02/2019 - 10/2020",
      work_arrangement: "Part Time",
      mode: "Hybrid",
      tech: ["React.js", "Redux", "REST APIs", "JavaScript"],
      points: paragraphToArray(`
Built responsive single-page e-commerce interfaces with cross-browser support, improving page load performance by 15%.
Reduced system errors by 20% by adding structured API error handling and validation for orders and inventory.
Maintained high code quality via peer reviews and consistent frontend best practices.
      `),
      company_intro: paragraphToArray(`
Pioneer Logix is a technology company specializing in building digital commerce and enterprise solutions for international clients.
As a Frontend Developer, I contributed to several e-commerce and business web applications using modern JavaScript technologies.
      `),
      details: paragraphToArray(`
Built and maintained responsive single-page applications using React.js and Redux, ensuring cross-browser compatibility and smooth performance.
Improved load times by 15% through efficient rendering and optimized asset handling.
Reduced critical production issues by 20% by introducing structured API validation and consistent error handling across modules.
Worked closely with designers and backend developers to ensure seamless integration between frontend interfaces and RESTful APIs.
Participated in regular code reviews to maintain high development standards and enforce consistent best practices across the team.
      `),
    },
  ],

  // --- German localized version ---
  de: [
    {
      company: "Universität Siegen",
      location: "Siegen, Deutschland",
      role: "Full Stack Entwickler",
      period: "12/2022 - 01/2024",
      work_arrangement: "Werkstudent",
      mode: "Hybrid",
      tech: ["React.js", "Node.js", "PostgreSQL", "Docker", "GitHub Actions"],
      points: paragraphToArray(`
Entwicklung und Wartung der internen Forschungs-Kooperationsplattform der Universität.
Bereitstellung von End-to-End-Funktionen wie einer Community-Oberfläche und einem Reaktionssystem auf Basis von PostgreSQL.
Steigerung der Nutzerinteraktion um 25 % und der Zufriedenheitswerte um 20 % durch barrierefreies Design und interaktive UI-Elemente.
Verbesserung der Effizienz um 35 % durch schnellere API-Antwortzeiten und um 40 % verkürzte Release-Zyklen dank automatisierter CI/CD-Pipelines.
      `),
      company_intro: paragraphToArray(`
Die Universität Siegen ist eine führende deutsche Forschungsuniversität, an der ich als Full Stack Entwickler in einem hybriden Arbeitsumfeld tätig war.
Ich arbeitete an der webbasierten Forschungsplattform der Universität, die Forschende miteinander vernetzt, den Wissensaustausch erleichtert und kollaborative Arbeitsabläufe optimiert.
      `),
      details: paragraphToArray(`
Entwicklung und Wartung von Full-Stack-Funktionen mit React.js, Node.js und PostgreSQL zur Sicherstellung von Leistung und Skalierbarkeit der Plattform.
Bereitstellung vollständiger Funktionen, einschließlich einer Community-Oberfläche und eines dynamischen Reaktionssystems zur Verbesserung der Nutzerbindung und Interaktion.
Erweiterung der Barrierefreiheit und Mehrsprachigkeit durch Implementierung von i18n (Englisch / Deutsch), einem Dunkel-/Hellmodus und WCAG-konformem Design.
Steigerung der Nutzerbindung um 25 % und der Zufriedenheit um 20 % durch interaktive UI-Verbesserungen und inklusives Design.
Optimierung der Back-End-Effizienz mit 35 % schnelleren API-Antwortzeiten und 40 % kürzeren Release-Zyklen durch Docker und GitHub Actions.
      `),
    },

    {
      company: "Websential (SMC-Private) Limited",
      location: "Lahore, Pakistan",
      role: "Frontend Entwickler",
      period: "01/2021 - 11/2022",
      work_arrangement: "Vollzeit",
      mode: "Remote",
      tech: [
        "React",
        "TypeScript",
        "Storybook",
        "Material-UI",
        "AWS",
        "Docker",
        "React Testing Library",
      ],
      points: paragraphToArray(`
Migration älterer PHP-Clients (Simple Pay, Tax Slips) auf moderne React- und TypeScript-Anwendungen zur besseren Wartbarkeit.
Entwicklung von über zehn gemeinsam genutzten Frontend-Bibliotheken, die die Umsetzung über Projekte hinweg beschleunigten.
Steigerung der Performance mit 20 % schnelleren Ladezeiten und 30 % geringerem API-Overhead durch effiziente REST-API-Integration.
Erhöhung der Stabilität und Zuverlässigkeit durch 20 % weniger Fehler und halbierte Release-Zeiten mithilfe von AWS und Docker.
      `),
      company_intro: paragraphToArray(`
Websential ist die Entwicklungsabteilung von Simple Pay und Tax Slips, zwei B2B-SaaS-Finanztools für den kanadischen Markt.
Als Frontend-Entwickler arbeitete ich remote in einem verteilten Team an der Modernisierung und Skalierung von Webanwendungen für Finanzdienstleister in ganz Kanada.
      `),
      details: paragraphToArray(`
Leitung der Migration veralteter PHP-Clients auf moderne React- und TypeScript-Anwendungen zur Verbesserung von Wartbarkeit und Leistung.
Entwicklung wiederverwendbarer Frontend-Bibliotheken und gemeinsamer UI-Komponenten zur Vereinheitlichung des Designs und Beschleunigung der Umsetzung.
Optimierung der Frontend-Performance durch 20 % schnellere Ladezeiten und 30 % geringeren API-Verkehr mithilfe effizienter REST-API-Integration und Caching.
Erhöhung der Stabilität durch 20 % weniger Bugs dank Testautomatisierung mit Storybook und React Testing Library.
Reduzierung der Bereitstellungszeit um 50 % durch Aufbau einer skalierbaren, containerisierten Infrastruktur mit AWS und Docker.
Enge Zusammenarbeit mit Backend-Entwicklern und Produktteams zur Abstimmung von UI/UX-Design mit technischen und geschäftlichen Zielen.
      `),
    },

    {
      company: "Pioneer Logix",
      location: "Lahore, Pakistan",
      role: "Frontend Entwickler",
      period: "02/2019 - 10/2020",
      work_arrangement: "Teilzeit",
      mode: "Hybrid",
      tech: ["React.js", "Redux", "REST APIs", "JavaScript"],
      points: paragraphToArray(`
Entwicklung responsiver E-Commerce-Oberflächen mit Cross-Browser-Support, wodurch die Ladezeit um 15 % verbessert wurde.
Reduzierung von Systemfehlern um 20 % durch strukturierte API-Fehlerbehandlung und Validierung von Bestellungen und Lagerbeständen.
Sicherstellung hoher Codequalität durch Peer Reviews und konsistente Frontend-Best Practices.
      `),
      company_intro: paragraphToArray(`
Pioneer Logix ist ein Technologieunternehmen, das auf die Entwicklung digitaler Handels- und Unternehmenslösungen für internationale Kunden spezialisiert ist.
Als Frontend-Entwickler trug ich zur Erstellung moderner E-Commerce- und Geschäftsanwendungen mit aktuellen JavaScript-Technologien bei.
      `),
      details: paragraphToArray(`
Entwicklung und Pflege reaktionsfähiger Single-Page-Anwendungen mit React.js und Redux, um Kompatibilität und Leistung über verschiedene Browser hinweg sicherzustellen.
Verbesserung der Ladezeiten um 15 % durch effizientes Rendering und optimiertes Ressourcenmanagement.
Reduzierung kritischer Produktionsfehler um 20 % durch strukturierte API-Validierung und konsistente Fehlerbehandlung.
Zusammenarbeit mit Designern und Backend-Entwicklern zur nahtlosen Integration von Frontend und REST-APIs.
Teilnahme an regelmäßigen Code-Reviews zur Sicherstellung hoher Entwicklungsstandards und Förderung konsistenter Best Practices.
      `),
    },
  ],
};
