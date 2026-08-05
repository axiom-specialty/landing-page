import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AxiomLine } from "@/components/common/AxiomLine";
import { HeroGrid } from "@/components/common/HeroGrid";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-navy text-ink">
      <HeroGrid className="opacity-[0.5]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-brand-abyss" />

      <div className="container-narrow relative px-6 pt-40 pb-20 md:px-12 md:pt-48 md:pb-24 lg:px-20">
        <div className="mb-7 flex items-center gap-3 animate-rise" style={{ animationDelay: "0.05s" }}>
          <span className="eyebrow text-signal">Specialty insurance, managing general agent</span>
          <AxiomLine className="w-16 text-ink" />
        </div>

        <h1
          className="max-w-4xl font-serif font-semibold tracking-tight leading-[1.02] text-5xl sm:text-6xl lg:text-7xl text-balance animate-rise"
          style={{ animationDelay: "0.12s" }}
        >
          Insuring industrial revolutions.
        </h1>

        <p
          className="mt-7 max-w-2xl text-lg md:text-xl text-ink/75 leading-relaxed text-pretty animate-rise"
          style={{ animationDelay: "0.2s" }}
        >
          Axiom Specialty underwrites the risks of frontier technology, the exposures that conventional
          insurers exclude, misprice, or don't yet understand. We build the coverage, and the software to
          govern it, for the industries the future runs on.
        </p>

        <div className="mt-9 flex flex-wrap gap-4 animate-rise" style={{ animationDelay: "0.28s" }}>
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
