import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Eye,
  FileText,
  Gauge,
  Scale,
  ShieldCheck,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FeatureCard } from "@/components/common/FeatureCard";
import { CtaBand } from "@/components/common/CtaBand";
import { Hero } from "@/components/home/Hero";
import { products } from "@/content/products";
import { posts } from "@/content/insights/loader";
import { useWaitlist } from "@/features/waitlist/WaitlistProvider";
import { cn } from "@/lib/utils";

const differentiators = [
  { icon: Eye, title: "Affirmative coverage", body: "Explicit cover for the human-oversight failures that standard policies now exclude — not a silent maybe." },
  { icon: Gauge, title: "Score-linked premiums", body: "Your governance posture is the rating variable. Better controls, better price." },
  { icon: Activity, title: "Continuous underwriting", body: "Telemetric assessment of how you actually deploy AI, not a once-a-year questionnaire." },
  { icon: Scale, title: "NIST AI RMF aligned", body: "Every recommendation maps to the U.S. government's authoritative AI governance standard." },
  { icon: ShieldCheck, title: "Standalone by design", body: "Sits alongside your existing professional liability program and fills the AI exclusion gap." },
  { icon: TrendingUp, title: "Built on real data", body: "Underwriting reviewed by credentialed actuaries and reinsurance-grade risk models." },
];

const platformPillars = [
  { icon: Gauge, title: "Governance score, live", body: "See your posture across compliance, human oversight, operational risk, AI governance, data privacy, and incident response." },
  { icon: Activity, title: "Connect once, monitor continuously", body: "Read-only telemetry from the tools your teams already use turns AI usage into underwriting signal." },
  { icon: FileText, title: "Automated gap analysis", body: "Submit your documents; get a NIST AI RMF gap analysis across Govern, Map, Measure, and Manage." },
];

export default function Home() {
  const { open } = useWaitlist();
  const latest = posts.slice(0, 2);

  return (
    <>
      <Hero />

      {/* The gap */}
      <Section tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="The thesis"
            title="The gap isn't in the AI. It's in the oversight."
            subtitle="Standard professional liability policies are quietly adding AI exclusions. What they leave behind isn't a machine failure — it's a human one: someone failed to supervise, verify, or govern an AI output in the course of professional work."
          />
        </Reveal>
        <Reveal className="mt-12">
          <div className="stat-callout flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-lg leading-relaxed text-ink/90">
              We don't insure AI malfunctions. We insure the professional and regulatory liability that
              arises when people fail to govern AI in their work — a negligence exposure now explicitly
              excluded from most standard policies.
            </p>
            <div className="shrink-0">
              <span className="font-mono-num block font-serif text-6xl font-semibold text-ink">87%</span>
              <span className="mt-2 block max-w-[12rem] text-sm text-ink/70">
                of enterprises use AI, while standard policies increasingly exclude the liability it creates.
              </span>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* What we underwrite */}
      <Section tone="canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Product lines"
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
      </Section>

      {/* Why Axiom */}
      <Section tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="Why Axiom"
            title="Insurance infrastructure for the AI-powered enterprise"
            subtitle="We rebuilt underwriting around behavior, not products — because AI risk is a governance problem, not a defect."
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
              eyebrow="Governance software · free at bind"
              title="A platform built around how firms actually use AI"
              subtitle="Every policyholder gets Axiom's governance platform at no cost. It scores your posture in real time, maps gaps to the NIST AI RMF, and helps you improve toward better pricing."
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
            <Link to="/insights" className="hidden shrink-0 items-center gap-1 text-sm font-medium text-brand-mid hover:text-brand-deep sm:inline-flex">
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
        title="Your firm is already using AI. Is it covered?"
        subtitle="See where standard policies leave you exposed — and how Axiom closes the gap."
      >
        <Button variant="hero" size="lg" onClick={open}>
          Request Early Access
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <Link to="/products/ai-liability">Explore AI Liability</Link>
        </Button>
      </CtaBand>
    </>
  );
}
