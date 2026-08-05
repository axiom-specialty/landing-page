import { cn } from "@/lib/utils";
import { AxiomLine } from "./AxiomLine";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Use on dark backgrounds to soften the subtitle color. */
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Consistent section header: monospace eyebrow with the axiom line, a Fraunces
 * title, and an optional subtitle.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className={cn("flex items-center gap-3 mb-5", align === "center" && "justify-center")}>
          <span className={cn("eyebrow", isLight ? "text-signal" : "text-brand-mid")}>{eyebrow}</span>
          <AxiomLine className={cn("w-12", isLight ? "text-ink" : "text-brand-mid")} />
        </div>
      )}
      <h2
        className={cn(
          "font-serif font-semibold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-[2.75rem]",
          isLight ? "text-ink" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-5 text-lg leading-relaxed", isLight ? "text-ink/70" : "text-muted-foreground")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
