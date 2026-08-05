import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AxiomLine } from "./AxiomLine";

/**
 * Recurring call-to-action band used to close pages. Defaults to the dark
 * green treatment; `tone="cream"` gives a light variant (useful when the
 * preceding section is already dark).
 */
export function CtaBand({
  title,
  subtitle,
  children,
  tone = "dark",
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  tone?: "dark" | "cream";
}) {
  const dark = tone === "dark";
  return (
    <section className={cn(dark ? "gradient-navy text-ink" : "gradient-cream text-foreground")}>
      <div className="container-narrow section-padding text-center">
        <AxiomLine className={cn("mx-auto mb-8 w-24", dark ? "text-ink/50" : "text-brand-mid/50")} />
        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className={cn("mx-auto mt-5 max-w-xl text-lg", dark ? "text-ink/70" : "text-muted-foreground")}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-9 flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}
