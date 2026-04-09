# Usama Abdal Sattar - Portfolio

A modern and responsive personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.  
It showcases my projects, skills, and experience with a clean design, fast performance, theme switching, and multilingual support.

---

### 🌟 Features

- **Responsive Design** — Works perfectly on mobile, tablet, and desktop devices.
- **Theme Toggle** — Light and dark modes with smooth transitions.
- **Multi-Language Support** — Available in **English** and **German**, with instant language switching.
- **Smooth Navigation** — Scrolls seamlessly between sections.
- **Dynamic Project Showcase** — Displays projects with links to GitHub and live demos.
- **About Section** — Highlights background and professional summary.
- **Skills Section** — Organized list of technical skills and tools.
- **Contact Section** — Allows users to get in touch via form or direct links.
- **Fast Performance** — Powered by Vite for quick loading and optimal performance.
- **Easy Customization** — Easily update content, themes, and translations.

---

### 🧰 Tech Stack

- **React** – Frontend library for building interactive UIs
- **TypeScript** – Ensures type safety and better developer experience
- **Vite** – Lightning-fast build tool and dev server
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Custom i18n** – English and German copy from typed dictionaries
- **React Icons** – For consistent, scalable vector icons
- **Prettier** – Code formatting
- **GitHub Actions** – CI runs format check, lint, and build

---

### 🚀 Getting Started

```bash
git clone https://github.com/Usama-ASattar/portfolio.git
cd portfolio
npm install
cp .env.example .env.local   # then add your EmailJS keys for the contact form
npm run dev
```

### Environment variables

Contact form uses [EmailJS](https://www.emailjs.com/). Copy `.env.example` to `.env.local` (never commit real keys) and set:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### Scripts

| Command                | Description                       |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Start Vite dev server             |
| `npm run build`        | Typecheck + production build      |
| `npm run lint`         | ESLint                            |
| `npm run format`       | Prettier (write)                  |
| `npm run format:check` | Prettier (check only, used in CI) |
| `npm run preview`      | Preview production build locally  |

CI (`.github/workflows/ci.yml`) runs `format:check`, `lint`, and `build` on pushes and pull requests to `main` / `master`.
