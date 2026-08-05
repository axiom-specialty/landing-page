import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AxiomLine } from "@/components/common/AxiomLine";
import { useWaitlist } from "@/features/waitlist/WaitlistProvider";
import { ProductAxis } from "./ProductAxis";

export function Hero() {
  const { open } = useWaitlist();
  return (
    <section className="relative overflow-hidden gradient-navy text-ink">
      <div aria-hidden className="absolute inset-0 bg-grid animate-drift opacity-[0.5]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-brand-abyss" />

      <div className="container-narrow relative px-6 pt-40 pb-16 md:px-12 md:pt-48 md:pb-20 lg:px-20">
        <div className="flex items-center gap-3 mb-7 animate-rise" style={{ animationDelay: "0.05s" }}>
          <span className="eyebrow text-signal">Specialty insurance · Managing general agent</span>
          <AxiomLine className="w-16 text-ink" />
        </div>

        <h1 className="max-w-4xl font-serif font-semibold tracking-tight leading-[1.02] text-5xl sm:text-6xl lg:text-7xl text-balance animate-rise" style={{ animationDelay: "0.12s" }}>
          Insuring industrial revolutions.
        </h1>

        <p className="mt-7 max-w-2xl text-lg md:text-xl text-ink/75 leading-relaxed text-pretty animate-rise" style={{ animationDelay: "0.2s" }}>
          Axiom Specialty underwrites the risks of frontier technology — the exposures that
          conventional insurers exclude, misprice, or don't yet understand. We start where standard
          coverage stops: with AI.
        </p>

        <div className="mt-9 flex flex-wrap gap-4 animate-rise" style={{ animationDelay: "0.28s" }}>
          <Button asChild variant="hero" size="lg">
            <Link to="/products/ai-liability">
              Explore AI Liability <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="heroOutline" size="lg" onClick={open}>
            Request Early Access
          </Button>
        </div>

        {/* Signature: the product axis */}
        <div className="mt-20 md:mt-28">
          <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink/45">
            The lines we're building — one revolution at a time
          </p>
          <ProductAxis />
        </div>
      </div>
    </section>
  );
}
