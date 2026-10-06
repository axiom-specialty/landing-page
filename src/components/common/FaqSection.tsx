import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import type { FaqItem } from "@/content/faq";

interface FaqSectionProps {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  tone?: "cream" | "canvas";
  /** The title alone: no eyebrow above it and no rule. */
  bare?: boolean;
}

/**
 * FAQPage structured data for the same questions. The accordion mounts an
 * answer only when it is opened, so the prerendered HTML would otherwise carry
 * the questions without their answers.
 */
function faqJsonLd(items: FaqItem[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: Array.isArray(item.a) ? item.a.join(" ") : item.a },
    })),
  }).replace(/</g, "\\u003c");
}

/** Reusable FAQ accordion section, shared by the homepage and product pages. */
export function FaqSection({
  items,
  eyebrow,
  title = "Frequently asked questions",
  subtitle,
  id = "faq",
  tone = "canvas",
  bare = false,
}: FaqSectionProps) {
  const label = bare ? undefined : (eyebrow ?? "FAQ");
  return (
    <Section id={id} tone={tone} container="tight" className="scroll-mt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd(items) }} />
      <Reveal>
        <SectionHeading eyebrow={label} title={title} subtitle={subtitle} />
      </Reveal>
      <Reveal className="mt-10">
        <Accordion type="single" collapsible className="rounded-lg border border-border bg-card px-5">
          {items.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`} className="border-border last:border-0">
              <AccordionTrigger className="text-left font-serif text-base font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {Array.isArray(item.a) ? (
                  <ul className="space-y-1.5">
                    {item.a.map((line) => (
                      <li key={line} className="flex items-start gap-2.5">
                        <span className="auxilium-node mt-1.5 shrink-0" />
                        {line}
                      </li>
                    ))}
                  </ul>
                ) : (
                  item.a
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
