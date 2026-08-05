import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { CoverageRow } from "@/components/common/CoverageRow";
import { CtaBand } from "@/components/common/CtaBand";
import { products } from "@/content/products";

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
        <Reveal>
          <div className="mb-1 flex items-baseline justify-between border-b-2 border-brand-deep/15 pb-2">
            <span className="data-label text-brand-mid">Schedule of lines</span>
            <span className="font-mono text-[0.6rem] tabular-nums text-muted-foreground">
              {String(products.length).padStart(2, "0")} lines
            </span>
          </div>
          <div className="border-b border-border">
            {products.map((p, i) => (
              <CoverageRow key={p.slug} product={p} index={i + 1} />
            ))}
          </div>
        </Reveal>
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
