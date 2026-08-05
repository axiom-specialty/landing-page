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
}

/** Reusable FAQ accordion section, shared by the homepage and product pages. */
export function FaqSection({
  items,
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  subtitle,
  id = "faq",
  tone = "canvas",
}: FaqSectionProps) {
  return (
    <Section id={id} tone={tone} container="tight" className="scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      </Reveal>
      <Reveal className="mt-10">
        <Accordion type="single" collapsible className="rounded-lg border border-border bg-card px-5">
          {items.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`} className="border-border last:border-0">
              <AccordionTrigger className="text-left font-serif text-base font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
