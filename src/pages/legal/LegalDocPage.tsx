import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import type { LegalDoc } from "@/content/legal/types";

/** Renders a structured legal document (Privacy Policy, Terms of Service). */
export function LegalDocPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHero eyebrow={`Legal · Updated ${doc.updated}`} title={doc.title} />
      <Section tone="cream" container="tight">
        <div className="space-y-4 text-base leading-relaxed text-foreground/80">
          {doc.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-12 space-y-10">
          {doc.sections.map((section) => (
            <section key={section.heading} className="scroll-mt-28">
              <h2 className="font-serif text-xl font-semibold text-foreground">{section.heading}</h2>
              {section.body?.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-mid/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
