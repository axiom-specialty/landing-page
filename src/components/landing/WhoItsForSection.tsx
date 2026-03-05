import { useRef } from "react";
import { Briefcase, Building2, Scale, Users, ShieldCheck, FileSearch } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

const audiences = [
  {
    icon: Briefcase,
    title: "Consulting & Professional Services",
    description: "Firms using AI for research, analysis, and client deliverables",
  },
  {
    icon: Building2,
    title: "Enterprises Using AI Internally",
    description: "Companies deploying AI across operations without being AI vendors",
  },
  {
    icon: Scale,
    title: "Legal Departments",
    description: "Teams using AI for document review, research, and analysis",
  },
  {
    icon: Users,
    title: "Finance & HR Operations",
    description: "AI-assisted decisioning in hiring, lending, and compliance",
  },
  {
    icon: FileSearch,
    title: "Regulatory-Scrutinized Industries",
    description: "Companies in healthcare, finance, and government contracting",
  },
  {
    icon: ShieldCheck,
    title: "Board-Mandated Risk Management",
    description: "Organizations with AI governance requirements from leadership",
  },
];

const WhoItsForSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersection(ref);
  return (
    <section ref={ref} className={cn("section-padding bg-background", "fade-in-section", isVisible && "is-visible")}>
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
            Who It's For
          </h2>
          <p className="text-muted-foreground text-lg">
            AI liability coverage for organizations that take risk seriously.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="card-enterprise hover:border-teal-dark/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-dark/10 flex items-center justify-center mb-4">
                <audience.icon className="w-6 h-6 text-teal-dark" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{audience.title}</h3>
              <p className="text-muted-foreground text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
