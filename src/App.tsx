import { useEffect } from "react";
import {
  Navbar,
  Hero,
  Projects,
  Technologies,
  Experience,
  GitHubHeatmap,
  Contact,
  Footer,
} from "./components";

import { useScrollSpy } from "./hooks";
import { useLocalized, experienceItems, projectItems } from "./i18n";

export default function App() {
  const { t, lang, setLang } = useLocalized("en");

  const sectionIds = ["home", "experience", "projects", "tech", "contact"];
  const currentHash = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    if (!currentHash) return;

    const newHash = `${currentHash}`;

    if (window.location.hash !== newHash) {
      history.replaceState(null, "", newHash);
    }
  }, [currentHash]);

  return (
    <>
      <div className="flex justify-center">
        <Navbar t={t} lang={lang} setLang={setLang} currentHash={currentHash} />
      </div>

      <Hero t={t} />

      <Experience t={t} items={experienceItems[lang]} />

      <Projects t={t} items={projectItems[lang]} />

      <Technologies t={t} />

      <div className="mx-auto max-w-6xl px-4">
        <GitHubHeatmap username="Usama-ASattar" />
      </div>

      <Contact t={t} />
      <Footer t={t} />
    </>
  );
}
