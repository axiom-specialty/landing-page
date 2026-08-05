import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AxiomLine } from "./AxiomLine";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  /** Extra top padding to clear the fixed header. */
}

/**
 * Dark gradient hero for interior pages — grid texture, eyebrow with axiom line,
 * Fraunces title, subtitle, and optional actions.
 */
export function PageHero({ eyebrow, title, subtitle, children, className }: PageHeroProps) {
  return (
    <header className={cn("relative overflow-hidden gradient-navy text-ink", className)}>
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-abyss/70" />
      <div className="container-narrow relative px-6 pt-36 pb-20 md:px-12 md:pt-44 md:pb-28 lg:px-20">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow text-signal">{eyebrow}</span>
            <AxiomLine className="w-16 text-ink" />
          </div>
        )}
        <h1 className="font-serif font-semibold tracking-tight leading-[1.04] text-4xl sm:text-5xl lg:text-6xl max-w-4xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-ink/75 max-w-2xl leading-relaxed text-pretty">{subtitle}</p>
        )}
        {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
      </div>
    </header>
  );
}
