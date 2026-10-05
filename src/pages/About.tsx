import { Compass, LineChart, Radar } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FeatureCard } from "@/components/common/FeatureCard";
import { CtaBand } from "@/components/common/CtaBand";
import { ManifestoHero } from "@/components/about/ManifestoHero";

/** Off while trying the manifesto as a single paragraph over its illustration. */
const SHOW_ARTICLES = false;

/** The three commitments that follow the manifesto paragraph. */
const articles = [
  {
    title: "Builders should not have to choose between moving fast and being covered.",
    body: "We insure the companies building autonomous systems, in software and in the physical world, and the customers who adopt what they build.",
  },
  {
    title: "An exclusion is not an answer.",
    body: "When a risk is new, we learn how it actually fails, price it, and give the insured the tools to bring it down.",
  },
  {
    title: "New risk deserves disciplined capacity.",
    body: "We give carriers a measured way into emerging markets, with underwriting grounded in data and accumulation held in check.",
  },
];

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
      <ManifestoHero title="Manifesto">
        <p>
          Autonomy is outpacing insurance. At Auxilium{" "}
          <i className="text-brand-mid">[Latin for help, aid, assistance, or support]</i> we believe that insurance is
          the enabler of adoption. By providing coverage for the risks innovation brings with it and defining the
          adoption frameworks, tools can be used with confidence, and fear of costly mistakes is removed.
        </p>
        <p>
          Over the past few years, we have witnessed a new industrial revolution unfolding in front of our eyes. Yet
          businesses remain skeptical of the new tools and present hesitancy of using them due to the potential danger.
          This is no different than when steam, electricity, and the automobile each arrived with new exposures.
        </p>
        <p>
          We're here to make sure emerging risks are mitigated, protect inventors and builders, and to{" "}
          <b className="font-semibold">insure industrial revolutions</b>.
        </p>
      </ManifestoHero>

      {/* The articles: numbered, each a declaration and the reason behind it. */}
      {SHOW_ARTICLES && (
        <Section tone="cream" container="tight">
          <Reveal stagger className="border-t border-foreground/20">
            {articles.map((article, i) => (
              <article key={article.title} className="grid gap-3 border-b border-foreground/15 py-8 sm:grid-cols-[3.5rem_1fr]">
                <span className="font-mono text-[0.72rem] tabular-nums text-brand-mid sm:pt-2.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-manifesto text-2xl font-semibold leading-snug text-foreground text-balance">
                    {article.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{article.body}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </Section>
      )}

      {/* Team */}
      <Section tone="canvas">
        <Reveal>
          <SectionHeading
            title="The Team"
            subtitle="Our team brings expertise from reinsurance, credit rating and casualty actuarial science."
          />
        </Reveal>
      </Section>

      {/* Values */}
      <Section tone="dark">
        <Reveal>
          <SectionHeading tone="light" eyebrow="How we think" title="Innovation with peace of mind" />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <FeatureCard key={v.title} tone="dark" icon={v.icon} title={v.title}>
              {v.body}
            </FeatureCard>
          ))}
        </Reveal>
      </Section>

      <CtaBand tone="cream" title="Building the market for frontier risk." />
    </>
  );
}
