import type { ReactNode } from "react";

import { Fleur } from "./Fleur";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <main className="pt-32">
      <section
        className="relative overflow-hidden px-6 py-20"
        style={{ background: "var(--gradient-champagne)" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <Fleur className="mx-auto size-9 text-gold animate-fleur" />
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="gold-rule w-14" />
            <span className="eyebrow">{eyebrow}</span>
            <span className="gold-rule w-14" />
          </div>
          <h1 className="title-display mt-6 text-4xl md:text-6xl">{title}</h1>
          {intro && (
            <p className="section-lede mx-auto mt-6 max-w-2xl">
              {intro}
            </p>
          )}
        </div>
      </section>
      {children}
    </main>
  );
}
