import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { site } from "@/content/site";
import { certification, insuringAgreements, measuredTrigger, modelSequence } from "@/content/agentic";
import { cn } from "@/lib/utils";

const thirdParty = insuringAgreements.filter((a) => a.party === "Third-party");
const firstParty = insuringAgreements.filter((a) => a.party === "First-party");

export default function AgenticEO() {
  return (
    <>
      <PageHero
        eyebrow="Agentic E&O · Certification live, insurance in development"
        title={
          <>
            Errors &amp; omissions for
            <br className="hidden sm:block" /> deployed AI agents
          </>
        }
        subtitle="An AI agent takes real actions with real consequences. Before that risk can be insured, it has to be made legible. That's what our certification is for: validate first, cover second."
      >
        <Button asChild variant="hero" size="lg">
          <a href={site.external.certify} target="_blank" rel="noopener noreferrer">
            Explore certification <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <a href="#agreements">See the insuring agreements</a>
        </Button>
      </PageHero>

      {/* What the certification is */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow={`${certification.name} · ${certification.status}`}
              title="A SOC 2 for autonomous software"
              subtitle={certification.what}
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{certification.why}</p>
          </Reveal>
          <Reveal stagger className="space-y-4">
            {certification.pillars.map((p) => (
              <div key={p.title} className="card-enterprise flex gap-4">
                <span className="axiom-node mt-1.5" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* The measured trigger: the parametric core */}
      <Section tone="canvas">
        <Reveal>
          <SectionHeading
            eyebrow={measuredTrigger.eyebrow}
            title={measuredTrigger.title}
            subtitle={measuredTrigger.lead}
          />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {measuredTrigger.points.map((p) => (
            <div key={p.title} className="card-enterprise">
              <h3 className="font-serif text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </Reveal>
        <Reveal className="mt-10">
          <Button asChild variant="hero">
            <a href={site.external.certify} target="_blank" rel="noopener noreferrer">
              See the certification range <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </Reveal>
      </Section>

      {/* Insuring agreements */}
      <Section id="agreements" tone="dark">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Insuring agreements · in development"
            title="What Agentic E&O will cover"
            subtitle="A form for autonomous agents has to answer three questions for every incident: did the agent act outside its authority, did it act wrongly within it, and what did that cost, to others, and to you."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {[
            { label: "Third-party", items: thirdParty },
            { label: "First-party", items: firstParty },
          ].map((group) => (
            <Reveal key={group.label} stagger>
              <p className="mb-5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-signal">{group.label}</p>
              <div className="space-y-3">
                {group.items.map((a) => (
                  <div key={a.name} className="card-dark">
                    <h3 className="flex items-center gap-3 font-serif text-lg font-semibold text-ink">
                      <span className="h-2 w-2 rotate-45 bg-signal" />
                      {a.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{a.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <p className={cn("mt-8 text-center text-xs italic text-ink/45")}>
          Coverage is in development and illustrative; agreements shown are indicative of the intended form.
        </p>
      </Section>

      {/* How it fits together: software first, then the cover */}
      <Section tone="canvas">
        <Reveal className="text-center">
          <SectionHeading
            align="center"
            eyebrow={modelSequence.eyebrow}
            title={modelSequence.title}
            subtitle={modelSequence.lead}
          />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {modelSequence.steps.map((s) => (
            <div key={s.k} className="card-enterprise">
              <span className="font-mono-num font-serif text-3xl font-semibold text-brand-mid/40">{s.k}</span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </Reveal>
        <p className="mt-8 text-center text-xs italic text-muted-foreground">
          The certification is live today at certify.axiomspecialty.com. The insurance component is in development and not yet available.
        </p>
      </Section>
    </>
  );
}
