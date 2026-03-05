import { useRef } from "react";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    tag: "Professional Services",
    title: "Deloitte — $440,000 AI Report Refund",
    body: "Deloitte used AI to draft a government consulting report. The AI hallucinated citations and fabricated sources. Deloitte refunded a portion of the $440,000 fee and faced public professional liability scrutiny. Their E&O policy excluded AI-generated content errors.",
    loss: "$440,000",
    coverage: "$0 — Excluded",
    whyAxiom: "Axiom monitors whether employees submitting AI-generated content in client deliverables have documented verification steps in place. Firms without human-in-the-loop review protocols for external reports score lower on the Human Oversight dimension — and are exactly the exposure Axiom's policy is designed to cover.",
  },
  {
    tag: "Legal",
    title: "ByoPlanet v. Johansson — $86,000 Sanctions",
    body: "A law firm used ChatGPT to draft complaints and appellate briefs across eight related cases. The court found repeated, systemic submission of fabricated AI-generated citations — citing bad faith. The Southern District of Florida imposed $86,000 in sanctions in August 2025, the largest AI hallucination sanction to date.",
    loss: "$86,000 sanctions",
    coverage: "$0 — Excluded",
    whyAxiom: "Axiom's telemetry flags unsanctioned use of consumer AI tools like ChatGPT in professional workflows. Law firms where attorneys use ungoverned AI tools without verification protocols accumulate Shadow AI Exposure risk — a scored dimension that directly affects coverage eligibility and premium.",
  },
  {
    tag: "Customer Service",
    title: "Air Canada Chatbot — Binding Misinformation",
    body: "Air Canada's customer service chatbot told a passenger he could apply for a bereavement discount retroactively. When the airline denied the discount, the passenger sued. The British Columbia Civil Resolution Tribunal ruled Air Canada was liable for its chatbot's statement — establishing that companies are bound by what their AI agents tell customers.",
    loss: "Legal fees + reputational damage",
    coverage: "$0 — Excluded",
    whyAxiom: "Customer-facing AI agents that can make representations binding on the company are a high-risk use case in Axiom's scoring model. Firms deploying AI in client-communication roles without documented escalation and override procedures receive elevated Use Case Risk scores — and affirmative coverage for the resulting liability.",
  },
  {
    tag: "Healthcare",
    title: "UnitedHealth AI Claim Denials — Federal Lawsuit",
    body: "UnitedHealth's nH Predict algorithm was used to deny medical claims at scale — averaging 1.2 seconds per claim review across hundreds of thousands of decisions. Federal lawsuits allege the AI replaced required human judgment, resulting in wrongful denials and patient harm. The case is actively proceeding in federal court.",
    loss: "Active federal litigation",
    coverage: "$0 — Excluded",
    whyAxiom: "Algorithmic decision-making that bypasses required human review is the defining Human Oversight failure in Axiom's model. Axiom monitors whether AI-assisted decisions — in claims, hiring, credit, or clinical workflows — have documented human checkpoints. Firms that don't score critically low and are uninsurable under traditional D&O.",
  },
  {
    tag: "Technology",
    title: "Texas v. Pieces Health — AG Settlement",
    body: "The Texas Attorney General settled with Pieces Technologies, a healthcare AI company, after it marketed hallucination rates of less than 1 in 100,000 — rates the state alleged were false and misleading. The settlement required mandatory disclosures and compliance obligations. The first state-level AI deceptive practices enforcement action.",
    loss: "Settlement + compliance costs",
    coverage: "$0 — Excluded",
    whyAxiom: "Axiom's governance assessment includes a Use Case Risk dimension that evaluates how firms represent AI capabilities to clients and regulators. Overstating AI accuracy without documented validation is a measurable governance gap — and regulatory defense costs from enforcement actions are a covered loss under Axiom's policy.",
  },
];

const CaseStudiesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersection(ref);
  return (
    <section ref={ref} className={cn("section-padding bg-background", "fade-in-section", isVisible && "is-visible")}>
      <div className="container-narrow">
        <div className="text-left mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
            AI Liability Incidents Are Already Happening
          </h2>
          <p className="text-muted-foreground text-lg">
            These are real incidents. In every case, traditional insurance provided zero coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.slice(0, 4).map((study, index) => (
            <div
              key={index}
              className="card-enterprise border-l-4 border-l-gold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="inline-block px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded mb-3">
                {study.tag}
              </span>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                {study.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {study.body}
              </p>
              <div className="flex flex-wrap gap-4 text-sm mb-3">
                <span className="text-destructive font-semibold">{study.loss}</span>
                <span className="text-muted-foreground">
                  Coverage:{" "}
                  <span className="text-destructive font-medium">{study.coverage}</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground italic">{study.whyAxiom}</p>
            </div>
          ))}
          {/* Fifth card full width / centered */}
          <div className="md:col-span-2">
            <div className="card-enterprise border-l-4 border-l-gold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 max-w-4xl mx-auto">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded mb-3">
                {caseStudies[4].tag}
              </span>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                {caseStudies[4].title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {caseStudies[4].body}
              </p>
              <div className="flex flex-wrap gap-4 text-sm mb-3">
                <span className="text-destructive font-semibold">{caseStudies[4].loss}</span>
                <span className="text-muted-foreground">
                  Coverage:{" "}
                  <span className="text-destructive font-medium">{caseStudies[4].coverage}</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground italic">{caseStudies[4].whyAxiom}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
