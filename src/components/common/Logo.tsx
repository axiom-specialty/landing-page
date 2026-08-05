import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
 * The Axiom wordmark, reproduced as type so it stays crisp at any size and
 * inherits the brand fonts: "AXIOM" in Fraunces with the signature axis line
 * struck through the letters, ending in a diamond node, over a tracked-out
 * "SPECIALTY INSURANCE" label.
 */
export function Logo({ tone = "dark", compact = false, className, asLink = true }: LogoProps) {
  const color = tone === "light" ? "text-ink" : "text-brand-deep";
  const mark = (
    <span className={cn("inline-flex flex-col items-start leading-none select-none", color, className)}>
      <span className="relative inline-block">
        <span className="font-serif font-semibold text-2xl tracking-[0.04em]">AXIOM</span>
        {/* axis line struck through the wordmark */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-[-3px] right-[-11px] top-1/2 h-px -translate-y-1/2 bg-current opacity-70"
        />
        {/* diamond node */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-[-11px] top-1/2 h-[7px] w-[7px] -translate-y-1/2 rotate-45 bg-current"
        />
      </span>
      {!compact && (
        <span className="font-mono text-[0.5rem] font-medium uppercase tracking-[0.34em] mt-[0.45rem] opacity-75">
          Specialty&nbsp;Insurance
        </span>
      )}
    </span>
  );

  if (!asLink) return mark;
  return (
    <Link to="/" aria-label="Axiom Specialty, home" className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm">
      {mark}
    </Link>
  );
}
