import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    tag: "Professional Services",
    year: "2025",
    headline:
      "Deloitte — AI Hallucinations in a $440,000 Government Consulting Report",
    body: "Deloitte Australia was commissioned by the Department of Employment and Workplace Relations to conduct an independent review of the country's welfare compliance framework. The 237-page report, valued at AU$440,000, was published in July 2025. A Sydney University researcher discovered the report was riddled with fabricated academic citations, non-existent research papers, and a hallucinated quote attributed to a federal court judge. The judge's name was wrong. The speech didn't exist. The court case was misrepresented. Deloitte later admitted it had used Azure OpenAI GPT-4o in preparing the report without disclosing this to the client. A revised version was quietly uploaded. Deloitte refunded the final payment installment — approximately $97,000 AUD. Weeks later, a second incident emerged: a $1.6M CAD Canadian government healthcare report containing the same pattern of AI-fabricated citations.",
    bullets: [
      "Employees used generative AI to draft citations and research summaries in a client-facing government report",
      "The AI hallucinated academic papers, invented court quotes, and cited real researchers on papers they never wrote",
      "Deloitte issued a partial refund of ~$97,000 AUD and faced public professional liability scrutiny across two countries",
    ],
    loss: "~$97,000 AUD refund + reputational damage across two countries",
    coverage: "$0 — E&O policies exclude AI-generated content errors",
    whyAxiom:
      "Axiom monitors whether employees submitting AI-generated content in client deliverables have documented verification steps in place. Firms without human-in-the-loop review protocols for external reports score lower on the Human Oversight dimension — and are exactly the exposure Axiom's policy is designed to cover.",
  },
  {
    tag: "Legal",
    year: "2025",
    headline:
      "ByoPlanet v. Johansson — $86,000 Sanctions for AI-Hallucinated Legal Filings",
    body: "A law firm used ChatGPT to draft complaints, motions, and appellate briefs across at least eight related federal cases. The AI generated confident, well-formatted citations to cases that did not exist in any legal database. Despite receiving multiple warnings from opposing counsel and the court, the attorney continued submitting filings containing fabricated authorities. The Southern District of Florida conducted a full evidentiary hearing and found the conduct was not a mistake — it was repeated, systemic, and in bad faith. In August 2025, the court imposed $86,000 in sanctions — the largest AI hallucination sanction in US legal history. The cases were dismissed. The attorney faced professional disciplinary referral.",
    bullets: [
      "Attorney used ChatGPT to draft legal filings across eight federal cases without verifying any citations",
      "The AI fabricated case citations that appeared real but did not exist — the court found this constituted bad faith after multiple warnings",
      "$86,000 in fee-shifting sanctions imposed, cases dismissed, professional disciplinary referral initiated",
    ],
    loss: "$86,000 in court-imposed sanctions + dismissed cases + disciplinary exposure",
    coverage:
      "$0 — Professional liability policies exclude AI misconduct findings",
    whyAxiom:
      "Axiom's telemetry flags unsanctioned use of consumer AI tools like ChatGPT in professional workflows. Law firms where attorneys use ungoverned AI tools without verification protocols accumulate Shadow AI Exposure risk — a scored dimension that directly affects coverage eligibility and premium.",
  },
  {
    tag: "Customer Service",
    year: "2024",
    headline:
      "Air Canada — Chatbot Liability Ruling Establishes AI Agent Accountability",
    body: "Air Canada deployed a customer-facing chatbot to handle bereavement fare inquiries. The chatbot told a grieving passenger that he could apply for a bereavement discount retroactively after travel — directly contradicting Air Canada's actual policy, which required advance approval. The passenger relied on the chatbot's instructions, traveled, applied for the discount, and was denied. He took Air Canada to the British Columbia Civil Resolution Tribunal. Air Canada argued its chatbot was a 'separate legal entity' responsible for its own statements. The tribunal rejected this argument entirely. It ruled that Air Canada was bound by what its chatbot told customers under standard agency law — the chatbot had apparent authority to speak for the company. Air Canada was ordered to pay the passenger's fare difference plus interest.",
    bullets: [
      "AI chatbot provided a passenger with incorrect bereavement policy information, contradicting the company's actual terms",
      "Air Canada attempted to disclaim liability by arguing the chatbot was a separate entity — the tribunal rejected this argument",
      "The ruling established that companies are legally bound by their AI agents' statements under standard agency law",
    ],
    loss: "Fare difference + legal costs + precedent-setting liability ruling",
    coverage:
      "$0 — Customer service AI errors excluded from standard liability policies",
    whyAxiom:
      "Customer-facing AI agents that can make representations binding on the company are a high-risk use case in Axiom's scoring model. Firms deploying AI in client-communication roles without documented escalation and override procedures receive elevated Use Case Risk scores — and affirmative coverage for the resulting liability.",
  },
  {
    tag: "Healthcare / Insurance",
    year: "2024–2025",
    headline:
      "UnitedHealth nH Predict — Federal Lawsuit Over AI Claim Denials",
    body: "UnitedHealth Group deployed its 'nH Predict' algorithm to automate post-acute care claim reviews. Internal data revealed the algorithm reviewed and denied claims at a rate of approximately 1.2 seconds per claim — a pace that made meaningful human review impossible. Lawsuits filed in federal court allege the AI systematically denied medically necessary care to elderly patients covered under Medicare Advantage plans, resulting in premature hospital discharges and, in some cases, patient deaths. A related case against Cigna alleged its algorithm rejected over 300,000 claims in two months. The cases argue that deploying AI to replace — rather than assist — human clinical judgment constitutes negligent and wrongful denial of benefits. The UnitedHealth case is actively proceeding in federal court as of 2026.",
    bullets: [
      "AI algorithm used to deny medical claims at 1.2 seconds per review — effectively replacing required human clinical judgment",
      "Federal lawsuits allege the system systematically denied medically necessary care, causing patient harm and wrongful deaths",
      "Active federal litigation; UnitedHealth faces potential liability across hundreds of thousands of denied claims",
    ],
    loss: "Active federal litigation — potential liability across hundreds of thousands of claims",
    coverage:
      "$0 — AI-driven decisioning excluded from standard D&O and E&O policies",
    whyAxiom:
      "Algorithmic decision-making that bypasses required human review is the defining Human Oversight failure in Axiom's model. Axiom monitors whether AI-assisted decisions — in claims, hiring, credit, or clinical workflows — have documented human checkpoints. Firms that don't score critically low and are uninsurable under traditional D&O.",
  },
  {
    tag: "Technology / Regulatory",
    year: "2024",
    headline:
      "Texas v. Pieces Health — First State AI Deceptive Practices Enforcement",
    body: "Pieces Technologies, a healthcare AI company, marketed its clinical documentation product with a hallucination error rate of less than 1 in 100,000. The Texas Attorney General's office investigated and alleged these metrics were false and misleading — constituting deceptive trade practices under the Texas DTPA. The case marked the first state-level enforcement action targeting AI performance claims. In August 2024, Pieces settled with the state, agreeing to mandatory disclosure requirements, clear and conspicuous accuracy metric reporting, and ongoing compliance obligations. The settlement set a precedent: AI vendors and the enterprises that deploy their tools can face regulatory enforcement for overstating AI reliability — even without a specific AI regulation in effect.",
    bullets: [
      "Healthcare AI company marketed accuracy metrics the Texas AG alleged were materially false and misleading",
      "First state-level enforcement action under consumer protection law targeting AI performance claims",
      "Settlement required mandatory disclosures, compliance program, and ongoing monitoring — with broader precedent for enterprise AI deployers",
    ],
    loss: "Settlement costs + mandatory compliance program + reputational damage",
    coverage:
      "$0 — Regulatory defense costs excluded from standard Tech E&O policies",
    whyAxiom:
      "Axiom's governance assessment includes a Use Case Risk dimension that evaluates how firms represent AI capabilities to clients and regulators. Overstating AI accuracy without documented validation is a measurable governance gap — and regulatory defense costs from enforcement actions are a covered loss under Axiom's policy.",
  },
];

const CaseStudies = () => {
  const handleRequestEarlyAccess = () => {
    window.dispatchEvent(new CustomEvent("openWaitlist"));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      
      <Header />
      <main className="flex-1">
        {/* Page header */}
        <div className="gradient-navy section-padding pt-32">
          <div className="container-narrow">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Case Studies
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-4 leading-tight">
              AI Liability Incidents Are Already Happening
            </h1>
            <p className="text-cream/70 text-lg max-w-3xl">
              These are real incidents at real organizations. In every case,
              traditional insurance provided zero coverage. This is the gap Axiom
              was built to close.
            </p>
          </div>
        </div>

        {/* Case study cards */}
        <div className="bg-background section-padding">
          <div className="container-narrow">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="card-enterprise border-l-4 border-gold mb-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-gold/10 text-gold text-xs font-medium">
                    {study.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {study.year}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">
                  {study.headline}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {study.body}
                </p>

                <div className="bg-muted rounded-lg p-4 mb-6">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                    What Happened
                  </p>
                  <ul className="space-y-2">
                    {study.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="text-gold mt-1.5 flex-shrink-0">
                          •
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">
                      Estimated Loss:
                    </span>
                    <span className="text-destructive font-semibold">
                      {study.loss}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">
                      Insurance Coverage:
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded bg-destructive/10 text-destructive text-xs font-medium">
                      {study.coverage}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground italic">
                  {study.whyAxiom}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="gradient-navy section-padding text-center">
          <div className="container-narrow">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-cream mb-4 leading-tight">
              Your Firm Has the Same Exposure
            </h2>
            <p className="text-cream/70 text-lg mb-10 max-w-2xl mx-auto">
              Every one of these incidents involved employees using AI in normal
              business operations. None were covered by existing insurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="xl"
                onClick={handleRequestEarlyAccess}
              >
                Request Early Access
              </Button>
              <Link to="/#coverage">
                <Button variant="heroOutline" size="xl">
                  See Our Coverage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
