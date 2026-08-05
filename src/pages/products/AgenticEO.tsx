import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { CtaBand } from "@/components/common/CtaBand";
import { site } from "@/content/site";
import { gauntlet, insuringAgreements } from "@/content/agentic";
import { cn } from "@/lib/utils";

const thirdParty = insuringAgreements.filter((a) => a.party === "Third-party");
const firstParty = insuringAgreements.filter((a) => a.party === "First-party");

export default function AgenticEO() {
  return (
    <>
      <PageHero
        eyebrow="Agentic E&O · Certification in alpha"
        title={
          <>
            Errors &amp; omissions for
            <br className="hidden sm:block" /> deployed AI agents
          </>
        }
        subtitle="An AI agent takes real actions with real consequences. Before that risk can be insured, it has to be made legible. That's what GAUNTLET is for: certification first, coverage second."
      >
        <Button asChild variant="hero" size="lg">
          <a href={site.external.certify} target="_blank" rel="noopener noreferrer">
            Explore GAUNTLET <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <a href="#agreements">See the insuring agreements</a>
        </Button>
      </PageHero>

      {/* What GAUNTLET is */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow={`${gauntlet.name} · ${gauntlet.status}`}
              title="A SOC 2 for autonomous software"
              subtitle={gauntlet.what}
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{gauntlet.why}</p>
          </Reveal>
          <Reveal stagger className="space-y-4">
            {gauntlet.pillars.map((p) => (
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

      {/* Sequence */}
      <Section tone="canvas" container="tight">
        <Reveal className="text-center">
          <SectionHeading
            align="center"
            eyebrow="The sequence"
            title="Certify first, insure second"
            subtitle="Insurance needs a describable risk. GAUNTLET establishes the common language for what an agent is allowed to do and how that's enforced, the underwriting substrate Agentic E&O is built on."
          />
        </Reveal>
        <Reveal className="mt-10 flex items-center justify-center gap-4 text-center sm:gap-8">
          <div className="flex-1 rounded-lg border border-brand-mid/30 bg-card p-6">
            <p className="font-mono text-[0.6rem] uppercase tracking-wider text-brand-mid">Now · Alpha</p>
            <p className="mt-2 font-serif text-lg font-semibold text-foreground">GAUNTLET certification</p>
          </div>
          <span className="h-px w-8 shrink-0 bg-border sm:w-16" />
          <div className="flex-1 rounded-lg border border-dashed border-border bg-transparent p-6">
            <p className="font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">Next</p>
            <p className="mt-2 font-serif text-lg font-semibold text-muted-foreground">Agentic E&amp;O insurance</p>
          </div>
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

      <CtaBand
        title="Deploying agents? Get ahead of the risk."
        subtitle="GAUNTLET certification is live in alpha. Start there."
      >
        <Button asChild variant="hero" size="lg">
          <a href={site.external.certify} target="_blank" rel="noopener noreferrer">
            Go to GAUNTLET <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CtaBand>
    </>
  );
}
