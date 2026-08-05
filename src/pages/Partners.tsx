import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { PortalForm } from "@/features/contact/PortalForm";
import { site } from "@/content/site";

const portals = [
  {
    id: "brokerages",
    eyebrow: "For brokers",
    title: "Brokerage appointments",
    intro:
      "We work with wholesale and retail brokerages placing frontier-technology risk. Tell us about your book and we'll follow up about an appointment.",
    toEmail: site.email.submissions,
    orgLabel: "Entity name",
    cta: "Request appointment",
    select: {
      name: "brokerageType",
      label: "Brokerage type",
      options: ["Wholesale", "Retail", "Independent MGA"],
    },
  },
  {
    id: "carriers",
    eyebrow: "For carriers & reinsurers",
    title: "Carrier partnerships",
    intro:
      "We're building capacity relationships with carriers and reinsurers who want structured, well-underwritten access to emerging technology risk.",
    toEmail: site.email.submissions,
    orgLabel: "Entity name",
    cta: "Start a conversation",
  },
  {
    id: "contact",
    eyebrow: "Everything else",
    title: "Contact us",
    intro: "General questions about Axiom, our products, or our platform. We read everything.",
    toEmail: site.email.contact,
    orgLabel: "Entity name (optional)",
    cta: "Send message",
  },
];

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partners & contact"
        title="Let's build the market for frontier risk"
        subtitle="Three ways to reach us: for brokers seeking appointments, carriers and reinsurers exploring capacity, and everyone else."
      />

      {portals.map((p, i) => (
        <Section key={p.id} id={p.id} tone={i % 2 === 0 ? "cream" : "canvas"} className="scroll-mt-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <Reveal>
              <SectionHeading eyebrow={p.eyebrow} title={p.title} subtitle={p.intro} />
            </Reveal>
            <Reveal>
              <PortalForm portal={p.title} toEmail={p.toEmail} orgLabel={p.orgLabel} cta={p.cta} select={p.select} />
            </Reveal>
          </div>
        </Section>
      ))}
    </>
  );
}
