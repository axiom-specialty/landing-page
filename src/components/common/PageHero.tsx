import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HeroGrid } from "./HeroGrid";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  /** Optional mono index shown at the right of the metadata rule. */
  index?: string;
  className?: string;
}

/**
 * Dark gradient hero for interior pages, "underwriter's instrument" style: a top
 * metadata rule carrying a mono eyebrow (and optional index), then a Fraunces
 * title, subtitle, and optional actions over the interactive grid.
 */
export function PageHero({ eyebrow, title, subtitle, children, index, className }: PageHeroProps) {
  return (
    <header className={cn("relative overflow-hidden gradient-navy text-ink", className)}>
      <HeroGrid className="opacity-60" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-abyss/70" />
      <div className="container-narrow relative px-6 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28 lg:px-20">
        {(eyebrow || index) && (
          <div className="mb-8 flex items-center gap-4 border-t border-ink/25 pt-3">
            {eyebrow && <span className="data-label text-signal">{eyebrow}</span>}
            {index && <span className="ml-auto font-mono text-[0.7rem] tabular-nums text-ink/40">{index}</span>}
          </div>
        )}
        <h1 className="max-w-4xl font-serif font-semibold tracking-tight leading-[1.02] text-4xl sm:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink/75 leading-relaxed text-pretty">{subtitle}</p>
        )}
        {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
      </div>
    </header>
  );
}
