import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/content/products";

const statusLabel = (status: Product["status"]) =>
  status === "available" ? "Live" : status === "alpha" ? "Alpha" : "Soon";

/**
 * Coverage card with a cover image. The image is read from
 * `public/covers/<slug>.jpg`; until that file exists, a branded gradient
 * placeholder (with the diamond motif) shows through, so missing art never
 * looks broken. Drop the generated images into public/covers/ to light them up.
 */
export function CoverageCard({ product, index }: { product: Product; index: number }) {
  const img = `/covers/${product.slug}.jpg`;
  return (
    <Link
      to={product.href}
      className="group flex flex-col overflow-hidden border border-border bg-card transition-colors hover:border-brand-mid/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* Branded placeholder (behind the image) */}
        <div className="absolute inset-0 gradient-navy" />
        <div aria-hidden className="absolute inset-0 flex items-center justify-center">
          <span className="h-14 w-14 rotate-45 border border-ink/20" />
        </div>
        {/* Cover image (CSS background so a 404 falls back to the placeholder) */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div aria-hidden className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-brand-abyss/60 to-transparent" />
        {/* Overlays */}
        <span className="absolute left-3 top-3 z-10 font-mono text-[0.65rem] tabular-nums text-ink/70">
          {String(index).padStart(2, "0")}
        </span>
        <span className="absolute right-3 top-3 z-10 rounded-full bg-brand-abyss/70 px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-wider text-ink/90 backdrop-blur-sm">
          {statusLabel(product.status)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-semibold text-foreground transition-colors group-hover:text-brand-deep">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.blurb}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-mid">
          {product.status === "development" ? "Coming soon" : "Explore"}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
