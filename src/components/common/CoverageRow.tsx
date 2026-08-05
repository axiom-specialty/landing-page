import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/content/products";
import { cn } from "@/lib/utils";

const statusLabel = (status: Product["status"]) =>
  status === "available" ? "Live" : status === "alpha" ? "Alpha" : "In development";

const statusTone = (status: Product["status"]) =>
  status === "available"
    ? "bg-brand-mid/15 text-brand-mid"
    : status === "alpha"
      ? "bg-signal/20 text-brand-deep"
      : "bg-muted text-muted-foreground";

/**
 * One line in the coverage "schedule": an index, the product name with its
 * status, a blurb, and an arrow that slides in on hover. Rows share a top
 * hairline so a stack of them reads like an underwriter's schedule of lines
 * rather than another card grid.
 */
export function CoverageRow({ product, index }: { product: Product; index: number }) {
  return (
    <Link
      to={product.href}
      className="group grid grid-cols-[1.75rem_1fr_auto] items-center gap-4 border-t border-border py-5 transition-colors hover:bg-card sm:grid-cols-[2.5rem_1fr_auto] sm:gap-6 md:py-6"
    >
      <span className="font-mono-num text-sm text-muted-foreground/60">{String(index).padStart(2, "0")}</span>
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-brand-deep md:text-[1.6rem]">
            {product.name}
          </h3>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-wider",
              statusTone(product.status),
            )}
          >
            {statusLabel(product.status)}
          </span>
        </div>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">{product.blurb}</p>
      </div>
      <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-mid opacity-0 transition-all duration-300 group-hover:opacity-100 sm:-translate-x-2 sm:group-hover:translate-x-0" />
    </Link>
  );
}
