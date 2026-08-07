import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FaqSection } from "@/components/common/FaqSection";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import {
  aiLiabilityFaq,
  governanceDimensions,
  insuringAgreements,
  platformCapabilities,
  regulations,
  riskThesis,
  scenarios,
  underwritingSteps,
} from "@/content/ai-liability";

export default function AILiability() {
  return (
    <>
      <PageHero
        eyebrow="Gen-AI Risks Coverage"
        title="AI Liability"
        subtitle="Affirmative liability coverage for any organization that deploys AI. Cover reaches the party that owes the duty when harm follows, which may be the deploying organization or the developer depending on the facts. It spans professional and operational error, discrimination and employment, wrongful disclosure, content, regulatory proceedings, bodily injury, and autonomous execution, a standalone policy that responds where the forms you already own now exclude."
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/partners#brokerages">For brokers</Link>
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <a href={site.external.govern} target="_blank" rel="noopener noreferrer">
            Governance Solutions
          </a>
        </Button>
      </PageHero>

      {/* AI Risk Thesis */}
      <Section id="coverage" tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="AI Risk Thesis"
            title="The duty didn't move. Only the mechanism did."
            subtitle="Most AI insurance argues from a number. We argue from a mechanism: what changed in the legal position of an organization that uses AI, and why the forms it already owns do not respond."
          />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {riskThesis.propositions.map((p) => (
            <div key={p.n} className="card-enterprise">
              <span className="font-mono-num font-serif text-3xl font-semibold text-brand-mid/40">{p.n}</span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </Reveal>
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
        <Reveal className="mt-10 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="bg-muted/60">
                <th className="px-6 py-3.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Insuring agreement
                </th>
                <th className="px-6 py-3.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Type
                </th>
                <th className="px-6 py-3.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  What it responds to
                </th>
              </tr>
            </thead>
            <tbody>
              {insuringAgreements.map((ia) => (
                <tr key={ia.name} className="border-t border-border bg-card align-top">
                  <td className="px-6 py-4 font-serif text-base font-semibold text-foreground">{ia.name}</td>
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        "inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 font-mono text-[0.55rem] uppercase tracking-wider",
                        ia.party === "First-party"
                          ? "bg-signal/15 text-brand-deep"
                          : ia.party === "Regulatory"
                            ? "bg-muted text-muted-foreground"
                            : "bg-brand-mid/12 text-brand-mid",
                      )}
                    >
                      {ia.party}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm leading-relaxed text-muted-foreground">{ia.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      {/* Scenarios: 4-column grid with aligned separators */}
      <Section tone="dark">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Hypothetical scenarios"
            title="What a covered claim looks like"
            subtitle="Illustrative situations modeled on incidents already reaching the market, and where standard policies leave firms exposed."
          />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((s) => (
            <article key={s.headline} className="card-dark flex flex-col">
              <span className="font-mono text-[0.58rem] uppercase tracking-wider text-signal">{s.tag}</span>
              <h3 className="mt-3 font-serif text-base font-semibold leading-snug text-ink">{s.headline}</h3>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-ink/60">
                <span className="font-medium text-signal">{s.agreement}</span> {s.response}
              </p>
              <div className="mt-5 flex items-end justify-between gap-3 border-t border-ink/10 pt-3">
                <div>
                  <span className="block font-mono text-[0.5rem] uppercase tracking-[0.12em] text-ink/40">Standard policy</span>
                  <span className="text-xs font-medium text-ink/75">{s.standard}</span>
                </div>
                <div className="text-right">
                  <span className="block font-mono text-[0.5rem] uppercase tracking-[0.12em] text-ink/40">Est. exposure</span>
                  <span className="font-mono-num text-xs font-semibold text-ink/90">{s.loss}</span>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </Section>

      {/* Underwriting */}
      <Section tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="Underwriting"
            title="Audit-free underwriting"
            subtitle="No pre-bind audit and no agent to install. Axiom is placed through brokers, and we price risk from a broad range of live AI risk signals across your organization, not a single questionnaire mapped to one framework."
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
        <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regulations.map((r) => (
            <div key={r.name} className="card-enterprise">
              <h3 className="font-serif text-base font-semibold text-foreground">{r.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* Governance software */}
      <Section id="platform" tone="dark">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Governance software · free at bind"
            title="Active Governance"
            subtitle="The fire alarm for generative-AI risk. Every policyholder gets Axiom's governance platform free at bind: it watches your AI use in real time, raises alerts the moment risk drifts, and turns exposure into signal before it becomes a claim."
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
            The nine risk dimensions we score
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
              <a href={site.external.govern} target="_blank" rel="noopener noreferrer">
                Go to the platform <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Product FAQ */}
      <FaqSection items={aiLiabilityFaq} eyebrow="AI Liability FAQ" title="Questions about the coverage" tone="cream" />
    </>
  );
}
