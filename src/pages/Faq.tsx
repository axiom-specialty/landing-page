import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { CtaBand } from "@/components/common/CtaBand";
import { faqGroups } from "@/content/faq";

export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        subtitle="What Axiom is, how the coverage works, and how to partner with us. If something's missing, our team is one message away."
      />

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
          {/* Category index */}
          <Reveal className="lg:sticky lg:top-28">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-brand-mid">Categories</p>
            <ul className="mt-4 space-y-2">
              {faqGroups.map((g) => (
                <li key={g.category}>
                  <a
                    href={`#${g.category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {g.category}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Questions */}
          <div className="space-y-12">
            {faqGroups.map((group) => (
              <Reveal
                key={group.category}
                id={group.category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}
                className="scroll-mt-28"
              >
                <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">{group.category}</h2>
                <Accordion type="single" collapsible className="rounded-lg border border-border bg-card px-5">
                  {group.items.map((item, i) => (
                    <AccordionItem
                      key={item.q}
                      value={`${group.category}-${i}`}
                      className="border-border last:border-0"
                    >
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
            ))}
          </div>
        </div>
      </Section>

      <CtaBand title="Still have a question?" subtitle="Our team is happy to get into the details.">
        <Button asChild variant="hero" size="lg">
          <Link to="/partners#contact">Contact us</Link>
        </Button>
      </CtaBand>
    </>
  );
}
