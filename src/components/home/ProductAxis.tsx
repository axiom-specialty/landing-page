import { Link } from "react-router-dom";
import { products } from "@/content/products";
import { cn } from "@/lib/utils";

/**
 * The homepage signature element: a horizontal axis with a diamond node per
 * product line — a literal "axiom" (a number line) and the logo's axis motif,
 * doubling as the product roadmap. Live/alpha lines are lit; in-development
 * lines are dimmed. On desktop it's a real axis; on mobile it stacks.
 */
export function ProductAxis() {
  return (
    <div className="w-full">
      {/* Desktop / tablet: horizontal axis */}
      <div className="relative hidden md:block">
        <div className="absolute left-0 right-0 top-[7px] h-px bg-ink/20" />
        <div className="absolute left-0 top-[7px] h-px w-[14.3%] bg-signal" />
        <ul className="relative flex justify-between">
          {products.map((p) => {
            const lit = p.status !== "development";
            return (
              <li key={p.slug} className="flex flex-1 flex-col items-center text-center first:items-start last:items-end">
                <Link to={p.href} className="group flex flex-col items-center focus-visible:outline-none">
                  <span
                    className={cn(
                      "h-[15px] w-[15px] rotate-45 border transition-all duration-300 group-hover:scale-110",
                      lit
                        ? "border-signal bg-signal group-focus-visible:ring-2 group-focus-visible:ring-signal/60"
                        : "border-ink/30 bg-brand-abyss group-hover:border-ink/60",
                      p.status === "alpha" && "animate-node",
                    )}
                  />
                  <span
                    className={cn(
                      "mt-4 max-w-[9rem] text-[0.78rem] font-medium leading-snug transition-colors",
                      lit ? "text-ink" : "text-ink/45 group-hover:text-ink/75",
                    )}
                  >
                    {p.name}
                  </span>
                  <span className="mt-1 font-mono text-[0.55rem] uppercase tracking-wider text-ink/35">
                    {p.status === "available" ? "Live" : p.status === "alpha" ? "Alpha" : "Soon"}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile: stacked list with node markers */}
      <ul className="space-y-3 md:hidden">
        {products.map((p) => {
          const lit = p.status !== "development";
          return (
            <li key={p.slug}>
              <Link to={p.href} className="flex items-center gap-3">
                <span
                  className={cn(
                    "h-2.5 w-2.5 rotate-45 border",
                    lit ? "border-signal bg-signal" : "border-ink/30 bg-transparent",
                  )}
                />
                <span className={cn("text-sm", lit ? "text-ink" : "text-ink/50")}>{p.name}</span>
                <span className="ml-auto font-mono text-[0.55rem] uppercase tracking-wider text-ink/35">
                  {p.status === "available" ? "Live" : p.status === "alpha" ? "Alpha" : "Soon"}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
