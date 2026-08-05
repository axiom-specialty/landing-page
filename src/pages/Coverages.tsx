import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { CtaBand } from "@/components/common/CtaBand";
import { productMenuGroups } from "@/content/products";
import { cn } from "@/lib/utils";

export default function Coverages() {
  return (
    <>
      <PageHero
        eyebrow="Coverages"
        title="Specialty coverage for frontier technology"
        subtitle="One live line today, with more in development across the physical, financial, and autonomous risks the technology frontier is creating. Every line is underwritten the same way: behavior first, mapped to a recognized standard."
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/products/ai-liability">See AI Liability</Link>
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <Link to="/partners#brokerages">For brokers</Link>
        </Button>
      </PageHero>

      {productMenuGroups.map((group, gi) => (
        <Section key={group.label} tone={gi % 2 === 0 ? "cream" : "canvas"}>
          <Reveal className="mb-8 flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-2xl font-semibold text-foreground">{group.label}</h2>
            {group.note && (
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                {group.note}
              </span>
            )}
          </Reveal>
          <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((p) => (
              <Link
                key={p.slug}
                to={p.href}
                className="card-enterprise group flex flex-col transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-mid/30"
              >
                <div className="flex items-center justify-between">
                  <span className="axiom-node" />
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider",
                      p.status === "available"
                        ? "bg-brand-mid/15 text-brand-mid"
                        : p.status === "alpha"
                          ? "bg-signal/20 text-brand-deep"
                          : "bg-muted text-muted-foreground",
                    )}
                  >
                    {p.status === "available" ? "Live" : p.status === "alpha" ? "Alpha" : "In development"}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-mid">
                  {p.status === "available" ? "Explore" : p.status === "alpha" ? "Learn more" : "Coming soon"}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </Reveal>
        </Section>
      ))}

      <CtaBand
        title="Placing frontier-technology risk?"
        subtitle="Axiom distributes through brokers. Get appointed, or talk to us about a submission."
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/partners#brokerages">For brokers</Link>
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <Link to="/partners#contact">Contact us</Link>
        </Button>
      </CtaBand>
    </>
  );
}
