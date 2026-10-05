import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HeroGrid } from "./HeroGrid";
import { CoverImage } from "./CoverImage";
import { HeroVideo, type HeroVideoSources } from "./HeroVideo";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  /** A second name set under the title, such as the policy's own name. */
  subname?: string;
  subtitle?: ReactNode;
  children?: ReactNode;
  /** Optional mono index shown at the right of the metadata rule. */
  index?: string;
  /**
   * Product slug. When set, that product's art becomes the hero background in
   * place of the animated grid.
   */
  mediaSlug?: string;
  /** Looping video in place of the still art. Product pages only. */
  video?: HeroVideoSources;
  /** A short mono line under the title, e.g. how a product is bought. */
  note?: string;
  className?: string;
}

/**
 * Dark hero for interior pages, "underwriter's instrument" style: a top
 * metadata rule carrying a mono eyebrow (and optional index), then a Fraunces
 * title, subtitle, and optional actions.
 *
 * The background is normally the interactive grid. A product page passes
 * `mediaSlug` instead and gets its own art. Those pages carry the title alone,
 * so the scrim only has to hold contrast for one large heading and can stay
 * light enough to let the illustration through.
 */
export function PageHero({
  eyebrow,
  title,
  subname,
  subtitle,
  children,
  index,
  mediaSlug,
  video,
  note,
  className,
}: PageHeroProps) {
  return (
    <header
      className={cn(
        "relative flex overflow-hidden text-ink",
        // Art-backed heroes get height so the illustration has room to read,
        // and sit their title at the foot of the frame rather than the top.
        mediaSlug ? "bg-brand-abyss min-h-[34rem] items-end md:min-h-[40rem]" : "gradient-navy",
        className,
      )}
    >
      {mediaSlug ? (
        <>
          {video ? (
            <HeroVideo {...video} />
          ) : (
            <div aria-hidden className="absolute inset-0">
              <CoverImage slug={mediaSlug} alt="" fill />
            </div>
          )}
          {/* The title sits left, so the scrim is heaviest there and thins out
              to let the illustration read on the right. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-brand-abyss/85 via-brand-abyss/55 to-brand-abyss/20"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-abyss/80 via-transparent to-brand-abyss/45"
          />
        </>
      ) : (
        <>
          <HeroGrid className="opacity-60" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-abyss/70" />
        </>
      )}

      <div
        className={cn(
          "container-narrow relative w-full px-6 md:px-12 lg:px-20",
          mediaSlug ? "pt-40 pb-12 md:pb-16" : "pt-32 pb-20 md:pt-40 md:pb-28",
        )}
      >
        {(eyebrow || index) && (
          <div className="mb-8 flex items-center gap-4 border-t border-ink/25 pt-3">
            {eyebrow && <span className="data-label text-signal">{eyebrow}</span>}
            {index && <span className="ml-auto font-mono text-[0.7rem] tabular-nums text-ink/40">{index}</span>}
          </div>
        )}
        <h1
          className={cn(
            "max-w-4xl font-serif font-semibold tracking-tight text-balance",
            // The leading follows the size on purpose: cn() drops a leading
            // class that comes before an arbitrary text size, which left
            // phones on the body line height of 1.5.
            mediaSlug
              ? "text-[3.375rem] leading-[0.95] sm:text-7xl lg:text-8xl"
              : "leading-[1.02] text-4xl sm:text-5xl lg:text-6xl",
          )}
        >
          {title}
        </h1>
        {subname && (
          <p className="mt-3 font-serif text-2xl font-semibold tracking-tight text-ink/80 md:text-3xl">{subname}</p>
        )}
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink/75 leading-relaxed text-pretty">{subtitle}</p>
        )}
        {note && <p className="mt-5 data-label text-ink/70">{note}</p>}
        {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
      </div>
    </header>
  );
}
