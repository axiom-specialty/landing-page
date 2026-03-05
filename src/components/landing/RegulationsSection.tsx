import { useRef } from "react";
import { Scale } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

const regulations = [
  {
    name: "EU AI Act",
    badge: "European Union",
    date: "In force August 2024 — full enforcement 2026",
    body: "The world's first comprehensive AI law. Classifies AI systems by risk level and imposes strict governance, transparency, and human oversight requirements on high-risk deployments. Fines up to €35M or 7% of global annual revenue.",
  },
  {
    name: "SEC AI Disclosure Guidance",
    badge: "United States — Federal",
    date: "Enforcement actions began March 2024",
    body: "The SEC charged two investment advisers in March 2024 for making false statements about their AI capabilities — the first AI-washing enforcement actions. Public companies must now disclose material AI risks in filings. D&O exposure is rising.",
  },
  {
    name: "FTC Operation AI Comply",
    badge: "United States — Federal",
    date: "Launched September 2024",
    body: "The FTC launched five simultaneous enforcement actions targeting deceptive AI marketing claims. The agency made clear: there is no AI exemption from consumer protection law. Enterprises using AI in customer-facing contexts face direct regulatory exposure.",
  },
  {
    name: "ABA Formal Opinion 512",
    badge: "Legal Profession",
    date: "Issued June 2024",
    body: "The American Bar Association formally ruled that attorneys using AI tools must understand their limitations, verify outputs, and maintain client confidentiality. AI hallucinations in legal filings now constitute potential professional negligence — and 244 court opinions have cited AI-generated fabrications as of late 2025.",
  },
];

const RegulationsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersection(ref);
  return (
    <section ref={ref} className={cn("section-padding gradient-cream", "fade-in-section", isVisible && "is-visible")}>
      <div className="container-narrow">
        <div className="text-left mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
            The Regulatory Environment Is Catching Up Fast
          </h2>
          <p className="text-muted-foreground text-lg">
            AI governance is no longer optional. Regulators across the US and EU are creating legal obligations — and personal liability — for how enterprises deploy AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {regulations.map((reg, index) => (
            <div
              key={index}
              className="card-enterprise hover:border-teal-dark/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-navy-deep/10 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-navy-deep" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground">{reg.name}</h3>
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-navy-deep/10 text-navy-deep rounded">
                    {reg.badge}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-xs font-medium mb-2">{reg.date}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{reg.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-navy-deep text-cream px-6 py-4 rounded-lg text-center">
          <p className="font-semibold">
            Traditional insurance was not written with any of these regulations in mind. Axiom coverage is.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegulationsSection;
