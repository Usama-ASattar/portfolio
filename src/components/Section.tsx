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
    <section id={id} className={cn("py-10 md:py-16", className)}>
      <div className="mx-auto max-w-6xl px-4">
        {title && (
          <header className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground mt-2">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
