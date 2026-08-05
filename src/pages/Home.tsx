import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Compass,
  Cpu,
  Eye,
  FileText,
  Gauge,
  Layers,
  Radar,
  Scale,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FeatureCard } from "@/components/common/FeatureCard";
import { CtaBand } from "@/components/common/CtaBand";
import { FaqSection } from "@/components/common/FaqSection";
import { Hero } from "@/components/home/Hero";
import { products } from "@/content/products";
import { posts } from "@/content/insights/loader";
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
    title: "Behavior is the risk",
    body: "We underwrite how organizations actually operate, turning governance and controls into signal instead of a static annual questionnaire.",
  },
  {
    icon: Compass,
    title: "Coverage and software together",
    body: "Policyholders get the tools to manage the risk and the coverage that backs it as one system, not two vendors.",
  },
];

const differentiators = [
  { icon: Eye, title: "Affirmative coverage", body: "Explicit cover for the exposures standard policies now exclude, not a silent maybe." },
  { icon: Gauge, title: "Score-linked premiums", body: "Your governance posture is the rating variable. Better controls, better price." },
  { icon: Activity, title: "Continuous underwriting", body: "Telemetric assessment of how you actually operate, not a once-a-year questionnaire." },
  { icon: Scale, title: "Standards-aligned", body: "Our AI line maps to the NIST AI Risk Management Framework, the authoritative governance standard." },
  { icon: ShieldCheck, title: "Standalone by design", body: "Coverage that sits alongside your existing program and fills the gaps new exclusions create." },
  { icon: TrendingUp, title: "Built on real data", body: "Underwriting reviewed by credentialed actuaries and reinsurance-grade risk models." },
];

const platformPillars = [
  { icon: Gauge, title: "Governance score, live", body: "See your posture across compliance, human oversight, operational risk, AI governance, data privacy, and incident response." },
  { icon: Activity, title: "Connect once, monitor continuously", body: "Read-only telemetry from the tools your teams already use turns AI usage into underwriting signal." },
  { icon: FileText, title: "Automated gap analysis", body: "Submit your documents; get a NIST AI RMF gap analysis across Govern, Map, Measure, and Manage." },
];

export default function Home() {
  const latest = posts.slice(0, 2);

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

      {/* What we underwrite */}
      <Section tone="canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Coverages"
            title="What we underwrite"
            subtitle="One live line today, more in development. Each is a specialty market built for a risk the incumbents haven't caught up to."
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
                {p.status === "available" ? "Explore" : p.status === "alpha" ? "Learn about GAUNTLET" : "Coming soon"}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </Reveal>
        <Reveal className="mt-10">
          <Button asChild variant="enterpriseOutline">
            <Link to="/coverages">
              View all coverages <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      {/* Why Axiom */}
      <Section tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="Why Axiom"
            title="Insurance infrastructure for frontier technology"
            subtitle="We rebuilt underwriting around behavior, not products, because emerging-technology risk is a governance problem, not a defect."
          />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d) => (
            <FeatureCard key={d.title} icon={d.icon} title={d.title}>
              {d.body}
            </FeatureCard>
          ))}
        </Reveal>
      </Section>

      {/* Platform teaser */}
      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Governance software, free at bind"
              title="For our live AI line, the software comes included"
              subtitle="Every AI Liability policyholder gets Axiom's governance platform at no cost. It scores your posture in real time, maps gaps to the NIST AI RMF, and helps you improve toward better pricing."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/products/ai-liability#platform">
                  See the platform <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal stagger className="grid gap-4">
            {platformPillars.map((p) => (
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

      {/* Insights teaser */}
      {latest.length > 0 && (
        <Section tone="canvas">
          <Reveal className="flex items-end justify-between gap-6">
            <SectionHeading eyebrow="Insights" title="Thinking on frontier risk" />
            <Link
              to="/insights"
              className="hidden shrink-0 items-center gap-1 text-sm font-medium text-brand-mid hover:text-brand-deep sm:inline-flex"
            >
              All insights <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-5 md:grid-cols-2">
            {latest.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="card-enterprise group flex flex-col transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-mid/30"
              >
                <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                  <Cpu className="h-3.5 w-3.5" />
                  {post.tags[0] ?? "Insight"} · {post.readingTime}
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-foreground group-hover:text-brand-deep">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-mid">
                  Read <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </Reveal>
        </Section>
      )}

      <CtaBand
        title="Coverage for the risks the market hasn't caught up to."
        subtitle="Explore our lines, or talk to us about placing and partnering."
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/coverages">Explore coverages</Link>
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <Link to="/partners">Partner with Axiom</Link>
        </Button>
      </CtaBand>

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
