import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FaqSection } from "@/components/common/FaqSection";
import { ProductSections } from "@/components/common/ProductSections";
import { aiLiability as digitalRisk } from "@/content/products";
import { aiLiabilityFaq, regulations, terms } from "@/content/ai-liability";

const product = digitalRisk[0];
const sections = terms;

/**
 * AI Liability, the Autonomous Operations Policy. Built from the same product
 * sections as every other line, plus the regulatory notices that only this
 * line carries.
 */
export default function AILiability() {
  // The notices and the FAQ continue the cream and canvas alternation.
  const noticesTone = sections.length % 2 === 0 ? "cream" : "canvas";
  const faqTone = noticesTone === "cream" ? "canvas" : "cream";
  return (
    <>
      <PageHero
        title={product.name}
        subname={product.subname}
        subtitle={product.subhead}
        mediaSlug="ai-liability"
        note={product.channel}
      />

      <ProductSections sections={sections} />

      {/* Regulatory notices */}
      <Section tone={noticesTone}>
        <Reveal>
          <SectionHeading title="Regulatory notices" />
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

      <FaqSection items={aiLiabilityFaq} bare title="Frequently asked questions" tone={faqTone} />
    </>
  );
}
