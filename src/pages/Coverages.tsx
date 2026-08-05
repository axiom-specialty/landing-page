import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { CoverageCard } from "@/components/common/CoverageCard";
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

      {/* Coverage cards */}
      <Section tone="cream">
        <Reveal stagger className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <CoverageCard key={p.slug} product={p} index={i + 1} />
          ))}
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
