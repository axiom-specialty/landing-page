import { cn } from "@/lib/utils";

/**
 * A quiet, marquee-style strip of pedigree wordmarks for the About section.
 * Text-based (not brand image files) so it renders crisply and is trivial to
 * edit, swap in real logos later or remove entirely. Duplicated once so the
 * CSS marquee loops seamlessly.
 */
const DEFAULT_CREDENTIALS = [
  "Munich Re",
  "Harvard",
  "Lloyd's",
  "NIST AI RMF",
  "MIT",
  "Berkshire Hathaway",
  "Stanford",
];

export function CredentialStrip({
  items = DEFAULT_CREDENTIALS,
  tone = "dark",
  className,
}: {
  items?: string[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const loop = [...items, ...items];
  const color = tone === "light" ? "text-ink/60" : "text-foreground/45";
  return (
    <div className={cn("marquee-mask overflow-hidden", className)}>
      <div className="flex w-max animate-marquee items-center gap-14 pr-14">
        {loop.map((item, i) => (
          <span
            key={i}
            className={cn(
              "font-serif text-xl md:text-2xl whitespace-nowrap tracking-tight",
              color,
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
