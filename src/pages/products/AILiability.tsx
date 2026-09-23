import { ExternalLink } from "lucide-react";
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
} from "@/content/ai-liability";
import { cn } from "@/lib/utils";

/** Square tag. The house uses these for status and classification alike, so
 * they share one shape and differ only in tone. */
function Tag({ children, tone = "muted" }: { children: React.ReactNode; tone?: "muted" | "brand" | "solid" | "outline" }) {
  return (
    <span
      className={cn(
        "inline-block whitespace-nowrap px-1.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-wider",
        tone === "solid" && "bg-brand-deep text-ink",
        tone === "brand" && "bg-brand-mid/15 text-brand-deep ring-1 ring-brand-mid/40",
        tone === "outline" && "border border-border text-muted-foreground",
        tone === "muted" && "bg-muted text-muted-foreground",
      )}
    >
      {children}
    </span>
  );
}

/** Every agreement in form order, flattened out of the three groups. */
const allAgreements = sections.flatMap((section) =>
  section.agreements.map((agreement) => ({ ...agreement, group: section.label })),
);

export default function AILiability() {
  return (
    <>
      <PageHero title="AI Liability" mediaSlug="ai-liability" />

      {/* Coverage */}
      <Section id="coverage" tone="cream">
        <Reveal>
          <SectionHeading rule title="Coverage" />
        </Reveal>

        <Reveal className="mt-10 overflow-x-auto border border-border">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <thead>
              <tr className="bg-muted/60">
                {["Insuring agreement", "What it covers", "Basis"].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allAgreements.map((a) => (
                <tr key={a.code} className="border-t border-border bg-card align-top">
                  <td className="px-5 py-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-[0.7rem] font-medium text-brand-mid">{a.code}</span>
                      {!launchAgreements.includes(a.code) && <Tag tone="outline">Planned</Tag>}
                    </div>
                    <div className="mt-1 font-serif text-base font-semibold leading-snug text-foreground">
                      {a.name}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm leading-relaxed text-muted-foreground">{a.description}</td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1">
                      {a.basis.map((b) => (
                        <Tag key={b} tone="brand">
                          {b}
                        </Tag>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Agreements 1 to 5 pay your own loss on discovery, with no claim required. DIC means the head can be written as
          difference in conditions against an identified gap in a named underlying policy, rather than as primary cover.
          An absent, denied or exhausted underlying policy does not by itself create attachment. Agreements marked
          Planned need an express endorsement and specialist review. The policy wording governs in every respect.
        </p>
      </Section>

      {/* Hypothetical scenarios */}
      <Section tone="canvas">
        <Reveal>
          <SectionHeading rule title="Hypothetical scenarios" />
        </Reveal>
        <Reveal className="mt-10 overflow-x-auto border border-border">
          <table className="w-full min-w-[64rem] border-collapse text-left">
            <thead>
              <tr className="bg-muted/60">
                {["Buyer", "Uses AI to", "Agreements", "Indicative premium", "Rating driver"].map((h) => (
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
                      <span className="whitespace-nowrap font-serif text-base font-semibold text-foreground">
                        {b.role}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm leading-relaxed text-muted-foreground">{b.use}</td>
                  <td className="px-6 py-4">
                    {/* A whole-policy placement is one decision, so it reads as
                        one tag rather than a list of its parts. */}
                    <div className="flex flex-wrap items-center gap-1">
                      {b.standalone ? (
                        <Tag tone="solid">Whole policy</Tag>
                      ) : (
                        b.takes.map((code) => (
                          <Tag key={code} tone={launchAgreements.includes(code) ? "brand" : "outline"}>
                            {code}
                          </Tag>
                        ))
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono-num whitespace-nowrap text-sm text-foreground">{b.premium}</td>
                  <td className="px-6 py-4 font-mono-num whitespace-nowrap text-sm text-foreground">{b.driver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Twelve representative placements, hypothetical rather than customers. Every agreement is optional, and "Whole
          policy" marks buyers who take the policy as a package rather than electing agreement by agreement. Shaded
          agreements are available at launch. Indicative premiums are demonstration outputs of the Rating Plan, not
          quotations, and exclude the policy fee. Every figure is subject to wording, elections, verified exposure and
          an approved ratebook.
        </p>
      </Section>

      {/* Regulatory notices */}
      <Section tone="cream">
        <Reveal>
          <SectionHeading rule title="Regulatory notices" />
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

      {/* Risk mitigation */}
      <Section tone="dark">
        <Reveal>
          <SectionHeading rule tone="light" title="Risk mitigation" />
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
              Go to Auxilium Governance <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </Reveal>
      </Section>

      <FaqSection items={aiLiabilityFaq} rule title="Frequently asked questions" tone="cream" />
    </>
  );
}
