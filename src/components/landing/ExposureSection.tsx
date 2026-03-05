import { useRef } from "react";
import { Link } from "react-router-dom";
import { Quote, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

const ExposureSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersection(ref);
  return (
    <section ref={ref} className={cn("section-padding bg-background", "fade-in-section", isVisible && "is-visible")}>
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
            AI Mistakes Are Already Costing Companies
          </h2>
          <p className="text-muted-foreground text-lg">
            The liabilities are real, current, and growing. Companies are learning the hard way that AI errors have consequences.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative card-enterprise bg-navy-deep text-cream overflow-hidden">
            {/* Quote decoration */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-cream/10" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-gold/20 text-gold text-sm font-medium rounded-full">
                  Case Study
                </span>
                <span className="text-cream/60 text-sm">2024</span>
              </div>

              <p className="text-xl md:text-2xl font-serif text-cream/95 leading-relaxed mb-8">
                "A major professional services firm used AI to draft a government report. The AI hallucinated citations and fabricated sources. The firm refunded $290,000 and suffered public reputational damage."
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-cream/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-cream/60 text-sm">Direct Financial Loss</p>
                    <p className="text-cream font-semibold text-lg">$290,000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-cream/60 text-sm">Insurance Coverage</p>
                    <p className="text-cream font-semibold text-lg">$0 — Excluded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Read More Button */}
          <div className="mt-12 text-center">
            <Link to="/case-studies">
              <Button 
                variant="outline" 
                size="xl" 
                className="group px-10 py-6 text-base font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-navy-deep/20 via-navy-deep/30 to-navy-deep/20 backdrop-blur-md !border-0 text-navy-deep hover:from-navy-deep/30 hover:via-navy-deep/40 hover:to-navy-deep/30"
              >
                Read More Case Studies in Detail
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExposureSection;
