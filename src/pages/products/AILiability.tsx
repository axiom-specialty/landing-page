import { PageHero } from "@/components/common/PageHero";
import { FaqSection } from "@/components/common/FaqSection";
import {
  ProductSections,
  ReferenceSection,
} from "@/components/common/ProductSections";
import { aiLiability as digitalRisk } from "@/content/products";
import { UnderwritingJourney } from "@/components/products/UnderwritingJourney";
import {
  aiLiabilityFaq,
  journey,
  regulations,
  terms,
} from "@/content/ai-liability";

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

      <UnderwritingJourney steps={journey} />

      <ReferenceSection
        title="Regulatory notices"
        items={regulations.map((r) => ({ name: r.name, note: r.note }))}
        tone={noticesTone}
      />

      <FaqSection
        items={aiLiabilityFaq}
        bare
        title="Frequently asked questions"
        tone={faqTone}
      />
    </>
  );
}
