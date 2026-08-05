import { Link } from "react-router-dom";
import { ArrowUpRight, Activity, Compass, FileText, Gauge, Layers, Radar } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FeatureCard } from "@/components/common/FeatureCard";
import { FaqSection } from "@/components/common/FaqSection";
import { Hero } from "@/components/home/Hero";
import { products } from "@/content/products";
import { generalFaq } from "@/content/faq";
import { cn } from "@/lib/utils";

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
    title: "Software with every line",
    body: "Each coverage ships with tooling built for its risk, starting with AI governance and the monitoring every future line will need.",
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
            title="Standard insurance wasn't built for what's coming."
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
        <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
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
                {p.status === "development" ? "Coming soon" : "Explore"}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
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
          <Reveal stagger className="grid gap-4">
            {activeInsurancePillars.map((p) => (
              <div key={p.title} className="card-dark flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink/10 text-signal">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">{p.body}</p>
                </div>
              </div>
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
