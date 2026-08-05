import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroGrid } from "@/components/common/HeroGrid";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-navy text-ink">
      <HeroGrid className="opacity-[0.45]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-brand-abyss" />

      <div className="container-narrow relative px-6 pt-36 pb-24 md:px-12 md:pt-44 md:pb-32 lg:px-20">
        {/* Metadata rule */}
        <div className="flex items-center justify-between border-t border-ink/25 pt-3 animate-rise">
          <span className="data-label text-ink/55">Specialty Insurance / Managing General Agent</span>
          <span className="data-label tabular-nums text-ink/40">Est. 2026</span>
        </div>

        <h1
          className="mt-12 max-w-4xl font-serif font-semibold tracking-tight leading-[1.0] text-5xl sm:text-6xl lg:text-7xl text-balance animate-rise"
          style={{ animationDelay: "0.06s" }}
        >
          Insuring industrial revolutions.
        </h1>
        <p
          className="mt-7 max-w-2xl text-lg md:text-xl text-ink/75 leading-relaxed text-pretty animate-rise"
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
    </section>
  );
}
