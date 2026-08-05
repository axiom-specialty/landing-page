import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "cream" | "canvas" | "dark" | "brand";

const toneClass: Record<Tone, string> = {
  canvas: "bg-background text-foreground",
  cream: "gradient-cream text-foreground",
  dark: "gradient-navy text-ink",
  brand: "gradient-brand text-ink",
};

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
  /** Constrain inner content width. */
  container?: "narrow" | "tight" | "none";
}

/**
 * Standard page section: background tone + vertical rhythm + centered container.
 * Keeps tone logic in one place so pages read as composition, not styling.
 */
export function Section({ children, id, tone = "canvas", className, container = "narrow" }: SectionProps) {
  const inner =
    container === "none" ? children : (
      <div className={container === "tight" ? "container-tight" : "container-narrow"}>{children}</div>
    );
  return (
    <section id={id} className={cn("section-padding", toneClass[tone], className)}>
      {inner}
    </section>
  );
}
