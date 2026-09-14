import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

interface LogoProps {
  /** "light" for dark backgrounds (cream ink), "dark" for light backgrounds. */
  tone?: "light" | "dark";
  /** Hide the "SPECIALTY INSURANCE" line (compact contexts). */
  compact?: boolean;
  className?: string;
  /** Render as a link to home (default) or plain markup. */
  asLink?: boolean;
}

/**
 * The Auxilium wordmark: the supplied logo artwork, in cream for dark grounds
 * and deep green for light ones, over a tracked-out "SPECIALTY INSURANCE"
 * label. Both files are the same mask at the same proportions, so the two
 * tones are pixel-identical apart from the ink.
 */
export function Logo({ tone = "dark", compact = false, className, asLink = true }: LogoProps) {
  const src = tone === "light" ? "/brand/auxilium-wordmark-cream.png" : "/brand/auxilium-wordmark-green.png";
  const mark = (
    <span className={cn("inline-flex flex-col items-start leading-none select-none", className)}>
      <img
        src={src}
        alt={site.name}
        width={900}
        height={169}
        className={compact ? "h-[1.35rem] w-auto" : "h-7 w-auto"}
        decoding="async"
      />
      {!compact && (
        <span
          className={cn(
            "font-mono text-[0.5rem] font-medium uppercase tracking-[0.315em] mt-[0.5rem] opacity-75",
            tone === "light" ? "text-ink" : "text-brand-deep",
          )}
        >
          Specialty&nbsp;Insurance
        </span>
      )}
    </span>
  );

  if (!asLink) return mark;
  return (
    <Link
      to="/"
      aria-label={`${site.name}, home`}
      className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm"
    >
      {mark}
    </Link>
  );
}
