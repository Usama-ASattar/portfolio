import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>("#home");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry nearest the top of the viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveId(`#${visible[0].target.id}`);
      },
      {
        rootMargin: `-${offset}px 0px -70% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids, offset]);

  // Extra: ensure top section counts on load
  useEffect(() => {
    const handleScrollTop = () => {
      if (window.scrollY < 200) setActiveId("#home");
    };
    window.addEventListener("scroll", handleScrollTop, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollTop);
  }, []);

  return activeId;
}
