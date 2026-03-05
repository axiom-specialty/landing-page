import { useRef } from "react";
import { ClipboardList, Plug, FileUp, TrendingUp, ShieldCheck } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "1.",
    icon: ClipboardList,
    title: "Risk Assessment",
    description: "Answer 50 targeted questions covering your firm's AI tool inventory, oversight protocols, data handling practices, and governance structure. Takes under 25 minutes. No IT involvement required.",
  },
  {
    number: "2.",
    icon: Plug,
    title: "Telemetry",
    description: "Authorize read-only access to Microsoft 365 or Google Workspace. Axiom passively monitors AI tool usage across your organization — which tools employees are using, how often, and whether human verification is occurring.",
  },
  {
    number: "3.",
    icon: FileUp,
    title: "Documents",
    description: "Submit your existing E&O, D&O, Cyber, and EPL policies. Axiom maps your current coverage against known AI exclusion language from Berkley, Hamilton, and others — and identifies exactly where your firm is exposed.",
  },
  {
    number: "4.",
    icon: TrendingUp,
    title: "Risk Score",
    description: "Your organization receives a score across six behavioral dimensions: AI governance, human oversight, shadow AI exposure, data sensitivity, use case risk, and incident history. Each dimension maps to NIST AI RMF controls. Prioritized remediation steps are provided immediately.",
  },
  {
    number: "5.",
    icon: ShieldCheck,
    title: "Coverage",
    description: "Your governance score is your underwriting file. Firms that demonstrate documented oversight and low behavioral risk qualify for coverage that affirmatively addresses the AI exclusions in your existing policies — at premiums priced to your actual risk posture, not a generic rate card.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersection(ref);
  return (
    <section ref={ref} id="how-it-works" className={cn("section-padding gradient-navy", "fade-in-section", isVisible && "is-visible")}>
      <div className="container-narrow">
        <div className="text-left mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-cream mb-4 leading-tight">
            How It Works
          </h2>
          <p className="text-cream/70 text-lg">
            From risk assessment to active coverage in five straightforward steps.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-full h-0.5 bg-cream/30 z-0"
                    style={{ width: "1rem" }}
                  />
                )}
                <div className="bg-cream/5 border border-cream/10 rounded-xl p-6 lg:p-6 hover:bg-cream/10 hover:border-cream/20 transition-all duration-300 h-full relative z-10">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-teal-dark/30 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-cream" />
                      </div>
                      <span className="text-gold font-serif font-bold text-3xl leading-none">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-cream mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-cream/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
