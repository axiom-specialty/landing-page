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
  launchAgreements,
  regulations,
  sections,
  underwriting,
  type Agreement,
  type Section as PolicySection,
} from "@/content/ai-liability";

const sectionTitle: Record<PolicySection["key"], string> = {
  A: "Your own loss",
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
  const planned = !launchAgreements.includes(agreement.code);
  return (
    <article
      className={
        "card-enterprise relative grid row-span-3 [grid-template-rows:subgrid] " +
        (planned ? "border-dashed border-brand-mid/45 bg-card/60" : "")
      }
    >
      {planned && (
        <span className="absolute right-0 top-0 rounded-bl-sm border-b border-l border-dashed border-brand-mid/45 bg-brand-mid/[0.07] px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-brand-mid">
          Planned
        </span>
      )}
      {/* Row 1: code, name, description */}
      <div>
        <div className={"flex items-baseline gap-3 " + (planned ? "pr-20" : "")}>
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
      <PageHero eyebrow="AI Liability · Standalone · Ten insuring agreements" title="AI Liability">
        <Button asChild variant="hero" size="lg">
          <Link to="/insights/underwriting-ai-liability">
            Underwriting philosophy <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <Link to="/insights/no-policy-you-own-responds">
            Why your tower does not respond <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </PageHero>

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
            subtitle="Hypothetical profiles, not customers. Every agreement is optional, and many buyers take the whole policy. Premiums and estimated exposures are illustrative, within the worked-scenario range on the form."
          />
        </Reveal>
        <Reveal className="mt-10 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[880px] border-collapse text-left">
            <thead>
              <tr className="bg-muted/60">
                {["Buyer", "Uses AI to", "Agreements", "Premium", "Est. exposure"].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {buyers.map((b) => (
                <tr key={b.role} className="border-t border-border bg-card align-top">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2.5">
                      <b.icon className="h-4 w-4 shrink-0 text-brand-mid" aria-hidden />
                      <span className="whitespace-nowrap font-serif text-base font-semibold text-foreground">{b.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm leading-relaxed text-muted-foreground">{b.use}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap items-center gap-1">
                      {b.standalone && (
                        <span className="whitespace-nowrap rounded-full bg-brand-deep px-1.5 py-0.5 font-mono text-[0.58rem] font-medium text-ink">
                          Whole policy
                        </span>
                      )}
                      {b.takes.map((code) => (
                        <span
                          key={code}
                          className={
                            "whitespace-nowrap rounded-full px-1.5 py-0.5 font-mono text-[0.58rem] " +
                            (launchAgreements.includes(code)
                              ? "bg-brand-mid/15 text-brand-deep ring-1 ring-brand-mid/40"
                              : "border border-border text-muted-foreground")
                          }
                        >
                          {code}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono-num whitespace-nowrap text-sm text-foreground">{b.premium}</td>
                  <td className="px-6 py-4 font-mono-num whitespace-nowrap text-sm text-foreground">{b.exposure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="mt-3 text-xs text-muted-foreground">
          Shaded agreements are available at launch. "Whole policy" marks buyers who take the form as a standalone.
        </p>
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
