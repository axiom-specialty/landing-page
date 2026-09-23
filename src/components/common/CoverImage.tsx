import { cn } from "@/lib/utils";

/**
 * Product cover art read from `public/covers/<slug>.jpg`. A branded gradient
 * placeholder sits behind it, so a slug with no art yet never looks broken.
 * The image is a CSS background rather than an <img> so a 404 falls through to
 * that placeholder instead of rendering a broken-image icon.
 */
export function CoverImage({
  slug,
  alt,
  fill = false,
  className,
}: {
  slug: string;
  alt: string;
  /** Fill the parent instead of holding a 16:10 card shape. */
  fill?: boolean;
  className?: string;
}) {
  const img = `${import.meta.env.BASE_URL}covers/${slug}.jpg`;
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        fill ? "h-full w-full" : "aspect-[16/10] border border-border",
        className,
      )}
    >
      <div aria-hidden className="absolute inset-0 gradient-navy" />
      <div aria-hidden className="absolute inset-0 flex items-center justify-center">
        <span className="h-16 w-16 rotate-45 border border-ink/15" />
      </div>
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />
    </div>
  );
}
