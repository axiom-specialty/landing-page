import { Link } from "react-router-dom";
import type { Product } from "@/content/products";

const statusLabel = (status: Product["status"]) =>
  status === "available" ? "Live" : status === "alpha" ? "Alpha" : "Soon";

/**
 * Coverage card: the whole cover image is the link, with the product name set
 * inside the image over a bottom scrim. Art is read from
 * `public/covers/<slug>.jpg`; a branded gradient placeholder shows until the
 * file exists, so missing art never looks broken.
 */
export function CoverageCard({ product, index }: { product: Product; index: number }) {
  const img = `${import.meta.env.BASE_URL}covers/${product.slug}.jpg`;
  return (
    <Link
      to={product.href}
      aria-label={product.name}
      className="group relative block aspect-[4/3] overflow-hidden border border-border"
    >
      {/* Branded placeholder (behind the image) */}
      <div className="absolute inset-0 gradient-navy" />
      <div aria-hidden className="absolute inset-0 flex items-center justify-center">
        <span className="h-16 w-16 rotate-45 border border-ink/15" />
      </div>
      {/* Cover image (CSS background so a 404 falls back to the placeholder) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        style={{ backgroundImage: `url(${img})` }}
      />
      {/* Scrim for title legibility */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-brand-abyss/95 via-brand-abyss/40 to-transparent" />
      {/* Overlays */}
      <span className="absolute left-4 top-4 z-10 font-mono text-[0.65rem] tabular-nums text-ink/70">
        {String(index).padStart(2, "0")}
      </span>
      <span className="absolute right-4 top-4 z-10 rounded-full bg-brand-abyss/70 px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-wider text-ink/90 backdrop-blur-sm">
        {statusLabel(product.status)}
      </span>
      <h3 className="absolute inset-x-0 bottom-0 z-10 p-4 font-serif text-xl font-semibold leading-tight text-ink md:p-5 md:text-2xl">
        {product.name}
      </h3>
    </Link>
  );
}
