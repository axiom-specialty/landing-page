import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroGrid } from "@/components/common/HeroGrid";
import { products } from "@/content/products";
import { cn } from "@/lib/utils";

const statusGlyph = (status: string) =>
  status === "available" ? "●" : status === "alpha" ? "◐" : "○";
const statusText = (status: string) =>
  status === "available" ? "Live" : status === "alpha" ? "Alpha" : "Soon";
const statusColor = (status: string) =>
  status === "available" ? "text-signal" : status === "alpha" ? "text-signal/80" : "text-ink/40";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-navy text-ink">
      <HeroGrid className="opacity-[0.45]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-brand-abyss" />

      <div className="container-narrow relative px-6 pt-32 pb-16 md:px-12 md:pt-40 md:pb-20 lg:px-20">
        {/* Metadata rule */}
        <div className="flex items-center justify-between border-t border-ink/25 pt-3 animate-rise">
          <span className="data-label text-ink/55">Specialty Insurance / Managing General Agent</span>
          <span className="data-label tabular-nums text-ink/40">Est. 2026</span>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          {/* Statement */}
          <div>
            <h1
              className="max-w-3xl font-serif font-semibold tracking-tight leading-[1.0] text-5xl sm:text-6xl lg:text-7xl text-balance animate-rise"
              style={{ animationDelay: "0.06s" }}
            >
              Insuring industrial revolutions.
            </h1>
            <p
              className="mt-7 max-w-xl text-lg text-ink/75 leading-relaxed text-pretty animate-rise"
              style={{ animationDelay: "0.14s" }}
            >
              Axiom Specialty underwrites the risks of frontier technology, the exposures that conventional insurers
              exclude, misprice, or don't yet understand. We build the coverage, and the software to govern it.
            </p>
            <div className="mt-9 flex flex-wrap gap-4 animate-rise" style={{ animationDelay: "0.22s" }}>
              <Button asChild variant="hero" size="lg">
                <Link to="/coverages">
                  Explore coverages <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/partners#brokerages">For brokers</Link>
              </Button>
            </div>
          </div>

          {/* Schedule of lines */}
          <div className="animate-rise" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center justify-between border-t border-ink/25 pt-3">
              <span className="data-label text-ink/55">Schedule of lines</span>
              <span className="data-label tabular-nums text-ink/40">{String(products.length).padStart(2, "0")}</span>
            </div>
            <ul className="mt-1 font-mono text-[0.8rem]">
              {products.map((p, i) => (
                <li key={p.slug}>
                  <Link
                    to={p.href}
                    className="group flex items-center gap-3 border-b border-ink/10 py-2.5 text-ink/70 transition-colors hover:text-ink"
                  >
                    <span className="tabular-nums text-ink/35">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 truncate uppercase tracking-wide">{p.name}</span>
                    <span className={cn("flex shrink-0 items-center gap-1.5 tabular-nums", statusColor(p.status))}>
                      <span aria-hidden>{statusGlyph(p.status)}</span>
                      <span className="text-[0.6rem] uppercase tracking-wider">{statusText(p.status)}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
