import { useRef } from "react";
import { Target, Activity, Eye, FileText, ShieldCheck, TrendingUp } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Target,
    title: "Demand-Side Coverage",
    description: "Traditional AI insurance covers model developers for product liability. Axiom covers the enterprises deploying AI — specifically, the human oversight failures that occur when employees use AI tools without adequate verification, governance, or controls.",
  },
  {
    icon: Activity,
    title: "Score-Linked Premiums",
    description: "The only insurance where your governance posture directly determines your price. Improve your score, reduce your premium. The incentive is built in.",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "Passive telemetry via your existing workspace integrations. No agents to install, no manual reporting. Risk visibility that updates as your firm evolves.",
  },
  {
    icon: FileText,
    title: "NIST RMF Alignment",
    description: "Every recommendation maps to the NIST AI Risk Management Framework. Build a defensible governance program — and document it — as a byproduct of using the platform.",
  },
  {
    icon: ShieldCheck,
    title: "Affirmative Coverage",
    description: "No silent exclusions, no ambiguous endorsements. Axiom policies explicitly and affirmatively cover AI hallucinations, professional negligence, algorithmic bias, and IP infringement.",
  },
  {
    icon: TrendingUp,
    title: "Built on Real Reinsurance Data",
    description: "Founded by a Munich Re data scientist with deep experience in reinsurance risk modeling. Our underwriting is built on actuarial foundations, not guesswork.",
  },
];

const WhyAxiomSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersection(ref);
  return (
    <section ref={ref} id="about" className={cn("section-padding bg-background", "fade-in-section", isVisible && "is-visible")}>
      <div className="container-narrow">
        <div className="text-left mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
            Why Axiom
          </h2>
          <p className="text-muted-foreground text-lg">
            We&apos;re building the insurance infrastructure for the AI-powered enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-cream/30 backdrop-blur-md border border-cream/40 rounded-xl p-6 hover:bg-cream/40 hover:border-cream/50 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            >
              <div className="w-14 h-14 rounded-xl bg-navy-deep flex items-center justify-center mb-5 group-hover:bg-teal-dark transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-cream" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAxiomSection;
