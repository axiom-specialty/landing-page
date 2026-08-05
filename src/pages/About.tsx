import { Link } from "react-router-dom";
import { Compass, LineChart, Radar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FeatureCard } from "@/components/common/FeatureCard";
import { CredentialStrip } from "@/components/common/CredentialStrip";
import { CtaBand } from "@/components/common/CtaBand";

const values = [
  {
    icon: Radar,
    title: "We underwrite what's next",
    body: "New technology creates new liability faster than the market can price it. We build coverage for the exposure that doesn't have a policy yet.",
  },
  {
    icon: LineChart,
    title: "Behavior is the risk",
    body: "We measure how organizations actually operate, from governance to oversight to controls, and turn that behavior into underwriting signal.",
  },
  {
    icon: Compass,
    title: "Software and coverage together",
    body: "The tools that help you manage risk and the policy that backs it are one system, not two vendors.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Insuring industrial revolutions."
        subtitle="Axiom Specialty is a managing general agent building the insurance infrastructure for frontier technology, starting with AI, and expanding into the physical and financial risks the AI era is creating."
      />

      {/* Mission */}
      <Section tone="cream" container="tight">
        <Reveal className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Every technological revolution outruns the institutions meant to absorb its risk. Steam, electricity,
            the automobile, the internet: each arrived with exposures the incumbent insurers excluded, mispriced,
            or simply didn't understand until losses forced the issue.
          </p>
          <p>
            AI is that revolution now. It's already inside the workflows of nearly every firm, and standard
            policies are responding by <span className="font-medium text-foreground">writing it out</span>. Axiom
            exists to write it back in, with coverage designed for how the technology actually creates liability,
            and software that helps you govern it.
          </p>
        </Reveal>
      </Section>

      {/* Values */}
      <Section tone="canvas">
        <Reveal>
          <SectionHeading eyebrow="How we think" title="What we believe about risk" />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <FeatureCard key={v.title} icon={v.icon} title={v.title}>
              {v.body}
            </FeatureCard>
          ))}
        </Reveal>
      </Section>

      {/* Experience / pedigree */}
      <Section tone="dark" container="none">
        <div className="container-narrow px-6 md:px-12 lg:px-20">
          <Reveal className="text-center">
            <SectionHeading
              align="center"
              tone="light"
              eyebrow="Our experience"
              title="Built by people who've priced risk at scale"
              subtitle="Our team brings underwriting, actuarial, and research experience from the institutions that set the standard for how risk is measured, informing an underwriting engine reviewed by credentialed professionals."
            />
          </Reveal>
        </div>
        <Reveal className="mt-12">
          <CredentialStrip tone="dark" />
        </Reveal>
      </Section>

      {/* MGA model */}
      <Section tone="cream" container="tight">
        <Reveal>
          <SectionHeading
            eyebrow="How we operate"
            title="A managing general agent"
            subtitle="Axiom designs the product, underwrites the risk, and services policies on behalf of the carriers that provide the capacity."
          />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            That structure lets us move at the speed of the technology, building coverage and underwriting tuned to
            emerging risk, while standing on the balance sheets of established carriers and reinsurers. Axiom is not
            a carrier and does not itself provide insurance; policies are issued on carrier paper, subject to
            underwriting approval and policy terms.
          </p>
        </Reveal>
      </Section>

      <CtaBand title="Building the market for frontier risk." subtitle="Work with us as a firm, a broker, or a carrier.">
        <Button asChild variant="hero" size="lg">
          <Link to="/coverages">Explore coverages</Link>
        </Button>
        <Button asChild variant="heroOutline" size="lg">
          <Link to="/partners">Partner with Axiom</Link>
        </Button>
      </CtaBand>
    </>
  );
}
