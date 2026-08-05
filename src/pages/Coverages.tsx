import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { CoverageRow } from "@/components/common/CoverageRow";
import { CtaBand } from "@/components/common/CtaBand";
import { productMenuGroups, products } from "@/content/products";

const indexOf = (slug: string) => products.findIndex((p) => p.slug === slug) + 1;

export default function Coverages() {
  return (
    <>
      <PageHero
        eyebrow="Coverages"
        title="Specialty coverage for frontier technology"
        subtitle="One live line today, with more in development across the physical, financial, and autonomous risks the technology frontier is creating. Every line is underwritten the same way: from the signals that actually move the risk."
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/products/ai-liability">See AI Liability</Link>
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <Link to="/partners#brokerages">For brokers</Link>
        </Button>
      </PageHero>

      {/* The schedule of lines */}
      <Section tone="cream">
        {productMenuGroups.map((group) => (
          <Reveal key={group.label} className="mb-14 last:mb-0">
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b-2 border-brand-deep/15 pb-2">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-brand-mid">{group.label}</span>
              {group.note && (
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                  {group.note}
                </span>
              )}
            </div>
            <div className="border-b border-border">
              {group.items.map((p) => (
                <CoverageRow key={p.slug} product={p} index={indexOf(p.slug)} />
              ))}
            </div>
          </Reveal>
        ))}
      </Section>

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
