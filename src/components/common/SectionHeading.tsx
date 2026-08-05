import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Use on dark backgrounds to soften the subtitle color. */
  tone?: "light" | "dark";
  /** Optional mono section index shown at the right of the rule, e.g. "01 / 06". */
  index?: string;
  className?: string;
}

/**
 * Report-style section header for the "underwriter's instrument" system: a top
 * hairline rule carrying a mono eyebrow (left) and an optional section index
 * (right), then a Fraunces title and optional subtitle. Consistent across every
 * section so the page reads like a precise document, not a stack of cards.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  index,
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";
  return (
    <div className={cn("w-full", className)}>
      {(eyebrow || index) && (
        <div
          className={cn(
            "mb-6 flex items-center gap-4 border-t pt-3",
            isLight ? "border-ink/25" : "border-brand-deep/25",
          )}
        >
          {eyebrow && (
            <span className={cn("data-label", isLight ? "text-signal" : "text-brand-mid")}>{eyebrow}</span>
          )}
          {index && (
            <span
              className={cn(
                "ml-auto font-mono text-[0.7rem] tabular-nums",
                isLight ? "text-ink/45" : "text-muted-foreground",
              )}
            >
              {index}
            </span>
          )}
        </div>
      )}
      <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
        <h2
          className={cn(
            "font-serif font-semibold tracking-tight leading-[1.05] text-3xl sm:text-4xl lg:text-[2.75rem]",
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
    </div>
  );
}
