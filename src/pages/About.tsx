import { Compass, LineChart, Radar } from "lucide-react";
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
    title: "Precision underwriting",
    body: "We apply sophisticated data science and statistical machine learning over unique risk signals to underwrite precisely, choosing the right method for each line rather than forcing one model onto every risk.",
  },
  {
    icon: Compass,
    title: "Software and coverage together",
    body: "Policyholders get more than a policy. We build a broad suite of risk-mitigation and monitoring software that helps the insured actively reduce risk, not just transfer it.",
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
          <SectionHeading eyebrow="How we think" title="Innovation with peace of mind" />
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
              eyebrow="Industry expertise"
              title="Reinsurance rigor, actuarial discipline, quantitative precision."
              subtitle="Our team brings experience across reinsurance, primary insurance, investment banking, quantitative modeling, actuarial science, underwriting, and software engineering, the disciplines it takes to price frontier risk and build the tools that manage it."
            />
          </Reveal>
        </div>
        <Reveal className="mt-12">
          <CredentialStrip tone="dark" />
        </Reveal>
      </Section>

      <CtaBand tone="cream" title="Building the market for frontier risk." />
    </>
  );
}
