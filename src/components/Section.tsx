import React from "react";
import { cn } from "../utils/classNames";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

export function Section({
  id,
  className,
  children,
  title,
  subtitle,
}: SectionProps) {
  return (
    <section id={id} className={cn("app-section", className)}>
      <div className="app-section__inner">
        {title && (
          <header className="app-section__header">
            <h2 className="app-section__title">{title}</h2>
            {subtitle && <p className="app-section__subtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
