import type { ReactNode } from "react";
import { AxiomLine } from "./AxiomLine";

/**
 * Recurring dark call-to-action band used to close pages.
 */
export function CtaBand({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="gradient-navy text-ink">
      <div className="container-narrow section-padding text-center">
        <AxiomLine className="mx-auto mb-8 w-24 text-ink/50" />
        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] text-balance">
          {title}
        </h2>
        {subtitle && <p className="mx-auto mt-5 max-w-xl text-lg text-ink/70">{subtitle}</p>}
        <div className="mt-9 flex flex-wrap justify-center gap-4">{children}</div>
      </div>
    </section>
  );
}
