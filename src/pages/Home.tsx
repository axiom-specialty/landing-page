import { Activity, Compass, FileText, Gauge, Layers, Radar } from "lucide-react";
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
    body: "Every frontier, from AI to autonomous machines to hyperscale compute, creates exposure that has no policy yet. We build the policy.",
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

const activeInsurancePillars = [
  {
    icon: Gauge,
    title: "Free governance software",
    body: "Every policy includes our governance software at no cost. For AI Liability it puts documented authority, logging, and a kill switch in place at deployment, so the AI is governed from day one.",
  },
  {
    icon: Activity,
    title: "Continuous, not annual",
    body: "We watch exposure in real time and flag it as it drifts, so risk is managed between renewals, not just at them.",
  },
  {
    icon: FileText,
    title: "Reduce, then transfer",
    body: "The tools help the insured actively lower exposure, and a stronger posture earns a better price.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Broad specialty-insurance thesis */}
      <Section tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="The thesis"
            title="Mitigating emerging risks"
            subtitle="Every technological revolution creates exposure faster than the market can price it, and incumbent insurers respond by excluding what they don't yet understand. Axiom underwrites it instead."
          />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {thesisPoints.map((t) => (
            <FeatureCard key={t.title} icon={t.icon} title={t.title}>
              {t.body}
            </FeatureCard>
          ))}
        </Reveal>
      </Section>

      {/* Coverages */}
      <Section id="coverages" tone="canvas" className="scroll-mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Coverages"
            title="Underwriting emerging risks"
            subtitle="Applied data science and state-of-the-art actuarial modeling for frontier risk."
          />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <CoverageCard key={p.slug} product={p} index={i + 1} />
          ))}
        </Reveal>
      </Section>

      {/* Active insurance */}
      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Active insurance"
              title="Every policy comes with the tools to reduce the risk"
              subtitle="Axiom isn't just a policy. For each line we write, the insured gets the risk-mitigation and monitoring software to actively lower exposure, not only transfer it."
            />
          </Reveal>
          <Reveal stagger className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {activeInsurancePillars.map((p) => (
              <FeatureCard key={p.title} icon={p.icon} title={p.title} tone="dark">
                {p.body}
              </FeatureCard>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* General FAQ, at the very bottom */}
      <FaqSection
        items={generalFaq}
        eyebrow="FAQ"
        title="Questions, answered"
        subtitle="What Axiom is, how we work, and how to place or partner. Product-specific questions live on each coverage page."
        tone="cream"
      />
    </>
  );
}
