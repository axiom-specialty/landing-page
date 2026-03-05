import { useRef } from "react";
import { Cpu, BookOpen, Scale } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

const trustItems = [
  {
    icon: Cpu,
    title: "Telemetric Underwriting",
    description: "Axiom was built by technologists who understand that AI risk is a behavioral problem, not a product defect. Our scoring engine analyzes how employees interact with AI tools — the oversight failures, the ungoverned usage, the verification gaps — and translates that behavioral data into underwriting signal.",
  },
  {
    icon: BookOpen,
    title: "Risk Management Framework",
    description: "Every governance recommendation and document analysis maps directly to the NIST AI Risk Management Framework — the US government's authoritative standard for enterprise AI governance.",
  },
  {
    icon: Scale,
    title: "Actuarial Advisory",
    description: "Axiom's risk models are reviewed by credentialed actuaries and underwriters. Our goal is to create the most sophisticated underwriting manual for AI risk in the workspace by reviewing having experienced insurance professional review our underwriting engine.",
  },
];

const TrustSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersection(ref);
  return (
    <section ref={ref} className={cn("section-padding gradient-cream", "fade-in-section", isVisible && "is-visible")}>
      <div className="container-narrow">
        <div className="text-left mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
            Trust & Credibility
          </h2>
          <p className="text-muted-foreground text-lg">
            Building the future of AI liability insurance with industry expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="card-enterprise text-center group hover:border-teal-dark/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-navy-deep flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-dark transition-colors duration-300">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
