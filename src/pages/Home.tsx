import { ArrowRight, Compass, Layers, Radar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FeatureCard } from "@/components/common/FeatureCard";
import { CoverageCard } from "@/components/common/CoverageCard";
import { FaqSection } from "@/components/common/FaqSection";
import { Hero } from "@/components/home/Hero";
import { products } from "@/content/products";
import { generalFaq } from "@/content/faq";

const thesisPoints = [
  {
    icon: Radar,
    title: "New technology, new liability",
    body: "Every frontier, from the AI a business deploys to the machines that act on its behalf, creates exposure that has no policy yet. We build the policy.",
  },
  {
    icon: Layers,
    title: "Precision underwriting",
    body: "We apply sophisticated data science and state-of-the-art actuarial modeling over unique signals to price frontier risk precisely.",
  },
  {
    icon: Compass,
    title: "Coverage and software together",
    body: "Policyholders get the tools to manage the risk and the coverage that backs it as one system, not two vendors.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* The thesis, then the lines that act on it */}
      <Section tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="The thesis"
            title="Mitigating emerging risks"
            subtitle="Every technological revolution creates exposure faster than the market can price it, and incumbent insurers respond by excluding what they don't yet understand. Auxilium underwrites it instead."
          />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {thesisPoints.map((t) => (
            <FeatureCard key={t.title} icon={t.icon} title={t.title}>
              {t.body}
            </FeatureCard>
          ))}
        </Reveal>
        <Reveal stagger className="mt-16 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <CoverageCard key={p.slug} product={p} index={i + 1} />
          ))}
        </Reveal>
        {/* The grid shows the insurance lines; the index also carries the
            software, so the way through is worth stating. */}
        <Reveal className="mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/coverages">
              View all solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      {/* General FAQ, at the very bottom */}
      <FaqSection
        items={generalFaq}
        eyebrow="FAQ"
        title="Questions, answered"
        subtitle="What Auxilium is, how we work, and how to place or partner. Product-specific questions live on each coverage page."
        tone="canvas"
      />
    </>
  );
}
