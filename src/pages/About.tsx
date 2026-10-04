import { Compass, LineChart, Radar } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FeatureCard } from "@/components/common/FeatureCard";
import { CtaBand } from "@/components/common/CtaBand";

const infrastructure = [
  {
    title: "Actuarial analytics",
    body: "We assemble AI liability incidents from litigation, regulatory action, enforcement records, and public reporting. No industry loss history exists for this class of risk yet, so our actuarial analytics set the loss-cost assumptions in our rating plan.",
  },
  {
    title: "The platform we operate on",
    body: "Brokers submit through it, our underwriters price and bind on it, and we administer products, appointments, and authorities with it. We run our own MGA on it today, and intend to license it to other MGAs over time. It is how we operate, not a product we sell today.",
  },
];

/** The articles of the manifesto, read in order. */
const articles = [
  {
    title: "Builders should not have to choose between moving fast and being covered.",
    body: "The companies building agents, robots and autonomous systems take on risks no standard policy was written for. We exist to insure them, and to let them insure the customers who adopt what they build.",
  },
  {
    title: "An exclusion is not an answer.",
    body: "When a risk is new, the easy move is to write it out. We do the harder work of learning how it actually fails, pricing it, and writing it back in.",
  },
  {
    title: "Risk you can see is risk you can reduce.",
    body: "Every policy comes with tools that show the insured where the exposure sits and help bring it down. We would rather prevent a loss than pay one.",
  },
  {
    title: "New risk deserves disciplined capacity.",
    body: "Carriers and reinsurers want a way into emerging markets without taking on risk they cannot measure. We give them one: underwriting grounded in data, accumulation held in check, and a book they can deploy capacity into safely.",
  },
  {
    title: "Insurance is how a revolution becomes ordinary.",
    body: "Electricity, the automobile and the internet each became safe to adopt once someone was willing to stand behind them. We intend to do that for autonomy, so innovation can be adopted with peace of mind.",
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
      <PageHero
        eyebrow="About"
        title="Insuring industrial revolutions."
        subtitle="Auxilium Specialty is a managing general agent building the insurance and underwriting infrastructure for frontier technology. Our goal is to mitigate and cover risks resulting from adopting innovation, so that companies can remain on the frontier with peace of mind."
      />

      {/* Manifesto */}
      <Section tone="cream" container="tight" first>
        <Reveal>
          <SectionHeading title="Manifesto" />
        </Reveal>

        <Reveal className="mt-10 space-y-8 font-manifesto text-2xl font-medium leading-snug tracking-[-0.01em] text-foreground md:text-[1.75rem] md:leading-[1.35]">
          <p>
            Every technological revolution outruns the institutions meant to absorb its risk. Steam, electricity,
            the automobile, the internet: each arrived with exposures the incumbent insurers excluded, mispriced,
            or simply didn't understand until losses forced the issue.
          </p>
          <p>
            AI is that revolution now. It's already inside the workflows of nearly every firm, and standard
            policies are responding by <span className="text-brand-mid">writing it out</span>. Auxilium exists to
            write it back in, with coverage designed for how the technology actually creates liability, and
            software that helps you govern it.
          </p>
        </Reveal>

        {/* The articles: numbered, each a declaration and the reason behind it. */}
        <Reveal stagger className="mt-16 border-t border-foreground/20">
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
              subtitle="Our team brings experience across reinsurance, primary insurance, operations, quantitative modeling, actuarial science, underwriting, and software engineering, the disciplines it takes to price frontier risk and build the tools that manage it."
            />
          </Reveal>
        </div>
      </Section>

      {/* Infrastructure: incident database + operating platform */}
      <Section tone="canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Behind the underwriting"
            title="The machinery behind the cover"
            subtitle="Frontier risk arrives with no loss history and no off-the-shelf system to run it on. We built both, and we run our own business on them."
          />
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {infrastructure.map((item) => (
            <div key={item.title} className="card-enterprise">
              <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      <CtaBand tone="cream" title="Building the market for frontier risk." />
    </>
  );
}
