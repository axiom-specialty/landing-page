import { Link } from "react-router-dom";
import { Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { CtaBand } from "@/components/common/CtaBand";
import { FaqSection } from "@/components/common/FaqSection";
import { site } from "@/content/site";
import {
  aiLiabilityFaq,
  coverageItems,
  governanceDimensions,
  insuringAgreements,
  platformCapabilities,
  policySnapshot,
  referralAgreements,
  regulations,
  scenarios,
  underwritingSteps,
} from "@/content/ai-liability";

export default function AILiability() {
  return (
    <>
      <PageHero
        eyebrow="Coverage · Live"
        title="AI Liability"
        subtitle="Affirmative coverage for the human-oversight failures in AI-assisted work that standard professional liability policies now explicitly exclude. A standalone policy designed to sit alongside your existing program."
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/partners#brokerages">For brokers</Link>
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <a href="#platform">See the governance platform</a>
        </Button>
      </PageHero>

      {/* In-page nav */}
      <div className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur md:top-[72px]">
        <div className="container-narrow flex gap-6 px-6 py-3 text-sm font-medium md:px-12 lg:px-20">
          <a href="#coverage" className="text-muted-foreground transition-colors hover:text-foreground">
            Coverage &amp; underwriting
          </a>
          <a href="#platform" className="text-muted-foreground transition-colors hover:text-foreground">
            Governance software
          </a>
        </div>
      </div>

      {/* PART 1, Coverage & underwriting */}
      <Section id="coverage" tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="Part 01 · Coverage &amp; underwriting"
            title="The gap isn't in the AI. It's in the oversight."
            subtitle="We don't insure AI malfunctions. We insure the professional and regulatory liability that arises when people fail to supervise, verify, or govern AI outputs in their work, a human negligence exposure now explicitly excluded from most standard policies."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="stat-callout flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-lg leading-relaxed text-ink/90">
              Nearly every firm now runs on AI, whether or not it says so out loud. The exposure that creates is
              not a machine failure. It is the professional liability of the people who were supposed to govern it.
            </p>
            <div className="shrink-0">
              <span className="font-mono-num block font-serif text-6xl font-semibold text-ink">87%</span>
              <span className="mt-2 block max-w-[12rem] text-sm text-ink/70">
                of enterprises use AI, while standard policies increasingly exclude the liability it creates.
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="card-enterprise">
            <h3 className="font-serif text-xl font-semibold text-foreground">What we cover</h3>
            <ul className="mt-6 space-y-4">
              {coverageItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-mid/12 text-brand-mid">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-4 self-start">
            {policySnapshot.map((card) => (
              <div key={card.label} className="card-enterprise text-center">
                <p className="font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">{card.label}</p>
                <p className="mt-2 font-serif text-2xl font-semibold text-foreground">{card.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{card.sub}</p>
              </div>
            ))}
            <div className="col-span-2 rounded-lg border border-brand-mid/25 bg-brand-mid/8 px-5 py-4">
              <p className="text-sm font-medium text-brand-deep">
                A governance score of 85 or above qualifies for Super Preferred pricing, the lowest premium tier.
              </p>
            </div>
            <p className="col-span-2 text-xs italic text-muted-foreground">
              Figures are illustrative and subject to change as the product develops.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Insuring agreements */}
      <Section tone="canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Insuring agreements"
            title="The cover, named"
            subtitle="Select the agreements you need at application. Each responds to a distinct way AI-assisted work creates liability."
          />
        </Reveal>
        <Reveal stagger className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border">
          {insuringAgreements.map((ia) => (
            <div key={ia.code} className="grid gap-2 bg-card p-6 md:grid-cols-[1.4fr_2fr] md:items-baseline md:gap-8">
              <div>
                <span className="font-mono text-[0.7rem] font-medium text-brand-mid">{ia.code}</span>
                <h3 className="mt-1 flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
                  {ia.name}
                  <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-wider text-muted-foreground">
                    {ia.party}
                  </span>
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{ia.description}</p>
            </div>
          ))}
        </Reveal>
        <Reveal className="mt-6 rounded-lg border border-dashed border-border bg-muted/40 px-5 py-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Available on referral:</span>{" "}
            {referralAgreements.map((ia, i) => (
              <span key={ia.code}>
                {ia.code} {ia.name}
                {i < referralAgreements.length - 1 ? ", " : ". "}
              </span>
            ))}
            Ask your broker to contact the underwriter before submitting.
          </p>
        </Reveal>
      </Section>

      {/* Scenarios */}
      <Section tone="dark">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Hypothetical scenarios"
            title="What a covered claim looks like"
            subtitle="Illustrative situations modeled on incidents already reaching the market, and where standard policies leave firms exposed."
          />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {scenarios.map((s) => (
            <div key={s.headline} className="card-dark flex flex-col">
              <span className="font-mono text-[0.6rem] uppercase tracking-wider text-signal">{s.tag}</span>
              <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-ink">{s.headline}</h3>
              <div className="mt-5 flex items-center gap-4 text-sm">
                <div>
                  <p className="font-mono-num font-serif text-xl font-semibold text-ink">{s.loss}</p>
                  <p className="text-xs text-ink/50">est. exposure</p>
                </div>
                <div className="border-l border-ink/15 pl-4">
                  <p className="text-sm font-medium text-ink/80">{s.standard}</p>
                  <p className="text-xs text-ink/50">standard policy</p>
                </div>
              </div>
              <p className="mt-5 border-t border-ink/10 pt-4 text-sm leading-relaxed text-ink/70">{s.response}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* Underwriting */}
      <Section tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="Underwriting"
            title="Telemetric, not a questionnaire"
            subtitle="We underwrite how a firm actually deploys AI: governance, oversight, and usage, mapped to the NIST AI Risk Management Framework."
          />
        </Reveal>
        <Reveal className="mt-12">
          <ol className="relative space-y-2">
            {underwritingSteps.map((step, i) => (
              <li key={step.title} className="flex gap-5 rounded-lg p-4 transition-colors hover:bg-card">
                <span className="font-mono-num flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-mid/30 text-sm font-medium text-brand-mid">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <h3 className="font-serif text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* Regulations */}
      <Section tone="canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Regulatory backdrop"
            title="The rules are catching up fast"
            subtitle="Traditional insurance wasn't written with any of these in mind. Axiom coverage is."
          />
        </Reveal>
        <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {regulations.map((r) => (
            <div key={r.name} className="card-enterprise">
              <h3 className="font-serif text-base font-semibold text-foreground">{r.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* PART 2, Governance software */}
      <Section id="platform" tone="dark">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Part 02 · Governance software · free at bind"
            title="The platform you get for free when you bind"
            subtitle="Every policyholder receives Axiom's governance platform at no additional cost. It scores your posture in real time, maps gaps to the NIST AI RMF, and helps you climb toward better pricing."
          />
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {platformCapabilities.map((c) => (
            <div key={c.title} className="card-dark">
              <h3 className="font-serif text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{c.body}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-10 rounded-lg border border-ink/10 bg-ink/[0.04] p-6 md:p-8">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink/45">
            The six governance dimensions
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {governanceDimensions.map((d) => (
              <span key={d} className="flex items-center gap-2 rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink/85">
                <span className="h-1.5 w-1.5 rotate-45 bg-signal" />
                {d}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="hero">
              <a href={site.external.bind} target="_blank" rel="noopener noreferrer">
                Go to the platform <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Product FAQ */}
      <FaqSection
        items={aiLiabilityFaq}
        eyebrow="AI Liability FAQ"
        title="Questions about the coverage"
        tone="cream"
      />

      <CtaBand
        title="Get covered where standard policies now exclude you."
        subtitle="Axiom distributes through brokers. Talk to yours, or ask us to connect you."
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
