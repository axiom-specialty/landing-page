import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FaqSection } from "@/components/common/FaqSection";
import { site } from "@/content/site";
import {
  aiLiabilityFaq,
  buyers,
  governance,
  lead,
  policySnapshot,
  regulations,
  sections,
  underwriting,
  type Agreement,
  type Section as PolicySection,
} from "@/content/ai-liability";

const sectionTitle: Record<PolicySection["key"], string> = {
  A: "Your own loss, paid on discovery",
  B: "Third-party claims",
  C: "AI Liability, attached head by head",
};

/**
 * Per-agreement card: name, plain description, trigger, and the policy that
 * would otherwise respond and why it does not. Rendered as a subgrid spanning
 * three parent rows, so the divider and the two field blocks line up across
 * every card in the same row.
 */
function AgreementCard({ agreement }: { agreement: Agreement }) {
  return (
    <article className="card-enterprise grid row-span-3 [grid-template-rows:subgrid]">
      {/* Row 1: code, name, description */}
      <div>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[0.7rem] font-medium text-brand-mid">{agreement.code}</span>
          <h3 className="font-serif text-lg font-semibold text-foreground">{agreement.name}</h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{agreement.description}</p>
      </div>
      {/* Row 2: trigger */}
      <div className="border-t border-border pt-4">
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-brand-mid">Triggers when</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{agreement.trigger}</p>
      </div>
      {/* Row 3: what would otherwise respond */}
      <div>
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">Where your tower stops</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{agreement.otherwise}</p>
      </div>
    </article>
  );
}

export default function AILiability() {
  return (
    <>
      <PageHero
        eyebrow="AI Liability · Standalone · Ten insuring agreements"
        title="AI Liability"
        subtitle={lead.subtitle}
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/partners#brokerages">For brokers</Link>
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <Link to="/insights/no-policy-you-own-responds">
            Why your tower does not respond <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </PageHero>

      {/* Policy terms, right below the hero */}
      <Section tone="canvas">
        <Reveal>
          <SectionHeading eyebrow="Terms" title="One aggregate, defense inside it" />
        </Reveal>
        <Reveal stagger className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {policySnapshot.map((s) => (
            <div key={s.label} className="card-enterprise">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">{s.label}</p>
              <p className="mt-2 font-serif text-xl font-semibold text-foreground">{s.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* The three sections. Section A first and given the most space. */}
      {sections.map((section, i) => (
        <Section key={section.key} id={section.key === "A" ? "coverage" : undefined} tone={i % 2 === 0 ? "cream" : "canvas"}>
          <Reveal>
            <SectionHeading
              eyebrow={`${section.label} · ${section.party} · ${section.trigger}`}
              title={sectionTitle[section.key]}
              subtitle={section.intro}
            />
          </Reveal>
          <Reveal
            stagger
            className={
              section.key === "B"
                ? "mt-12 grid gap-5 lg:grid-cols-2"
                : "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            }
          >
            {section.agreements.map((a) => (
              <AgreementCard key={a.code} agreement={a} />
            ))}
          </Reveal>
        </Section>
      ))}

      {/* Who buys this */}
      <Section tone="canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Who buys this"
            title="Illustrative buyers, and what they take"
            subtitle="Every agreement is optional and selected at application. These are hypothetical profiles, not customers, showing how different uses of AI map to the form. Many buyers take the whole policy."
          />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {buyers.map((b) => (
            <div key={b.role} className="card-enterprise flex flex-col">
              <b.icon className="h-5 w-5 text-brand-mid" aria-hidden />
              <h3 className="mt-3 font-serif text-base font-semibold text-foreground">{b.role}</h3>
              <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground">{b.use}</p>
              <div className="mt-3 flex flex-wrap gap-1 border-t border-border pt-3">
                {b.takes.map((code) => (
                  <span
                    key={code}
                    className="rounded-full bg-brand-mid/10 px-1.5 py-0.5 font-mono text-[0.58rem] text-brand-mid"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* Underwriting */}
      <Section tone="cream">
        <Reveal>
          <SectionHeading eyebrow="Underwriting" title="Application and a public-record check" subtitle={underwriting.intro} />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {underwriting.points.map((p) => (
            <div key={p.title} className="card-enterprise">
              <h3 className="font-serif text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* Axiom Governance */}
      <Section tone="dark">
        <Reveal>
          <SectionHeading tone="light" eyebrow={governance.eyebrow} title={governance.title} subtitle={governance.subtitle} />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {governance.points.map((c) => (
            <div key={c.title} className="card-dark">
              <h3 className="font-serif text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{c.body}</p>
            </div>
          ))}
        </Reveal>
        <Reveal className="mt-10">
          <Button asChild variant="hero">
            <a href={site.external.govern} target="_blank" rel="noopener noreferrer">
              Go to Axiom Governance <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </Reveal>
      </Section>

      {/* Regulatory backdrop */}
      <Section tone="canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Regulatory backdrop"
            title="The rules are catching up fast"
            subtitle="Traditional insurance was not written with any of these in mind. This form is."
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

      {/* Product FAQ */}
      <FaqSection items={aiLiabilityFaq} eyebrow="AI Liability FAQ" title="Questions about the coverage" tone="cream" />
    </>
  );
}
