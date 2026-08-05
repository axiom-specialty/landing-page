import { Building2, Handshake, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { PortalForm } from "@/features/contact/PortalForm";
import { site } from "@/content/site";

const portals = [
  {
    id: "brokerages",
    icon: Building2,
    eyebrow: "For brokers",
    title: "Brokerage appointments",
    intro:
      "We work with wholesale and retail brokerages placing frontier-technology risk. Tell us about your book and we'll follow up about an appointment.",
    toEmail: site.email.submissions,
    orgLabel: "Brokerage name",
    cta: "Request appointment",
  },
  {
    id: "carriers",
    icon: Handshake,
    eyebrow: "For carriers & reinsurers",
    title: "Carrier partnerships",
    intro:
      "We're building capacity relationships with carriers and reinsurers who want structured, well-underwritten access to emerging technology risk.",
    toEmail: site.email.submissions,
    orgLabel: "Organization",
    cta: "Start a conversation",
  },
  {
    id: "contact",
    icon: MessageSquare,
    eyebrow: "Everything else",
    title: "Contact us",
    intro: "General questions about Axiom, our products, or our platform. We read everything.",
    toEmail: site.email.contact,
    orgLabel: "Company (optional)",
    cta: "Send message",
  },
];

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partners & contact"
        title="Let's build the market for frontier risk"
        subtitle="Three ways to reach us — for brokers seeking appointments, carriers and reinsurers exploring capacity, and everyone else."
      />

      {/* Quick portal index */}
      <Section tone="cream" className="!pb-0">
        <Reveal stagger className="grid gap-5 md:grid-cols-3">
          {portals.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="card-enterprise group transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-mid/30"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-deep/8 text-brand-deep">
                <p.icon className="h-5 w-5" />
              </div>
              <p className="font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">{p.eyebrow}</p>
              <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">{p.title}</h3>
            </a>
          ))}
        </Reveal>
      </Section>

      {/* Portals */}
      {portals.map((p, i) => (
        <Section key={p.id} id={p.id} tone={i % 2 === 0 ? "cream" : "canvas"} className="scroll-mt-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <Reveal>
              <SectionHeading eyebrow={p.eyebrow} title={p.title} subtitle={p.intro} />
            </Reveal>
            <Reveal>
              <PortalForm portal={p.title} toEmail={p.toEmail} orgLabel={p.orgLabel} cta={p.cta} />
            </Reveal>
          </div>
        </Section>
      ))}
    </>
  );
}
