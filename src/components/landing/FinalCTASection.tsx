import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

const FinalCTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersection(ref);

  const handleRequestEarlyAccess = () => {
    window.dispatchEvent(new CustomEvent("openWaitlist"));
  };

  const handleSeeCoverageDetails = () => {
    const coverageSection = document.getElementById("coverage");
    if (coverageSection) {
      coverageSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section ref={ref} id="final-cta" className={cn("section-padding gradient-navy", "fade-in-section", isVisible && "is-visible")}>
      <div className="container-narrow">
        <div className="text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-cream mb-6 leading-tight">
            Your Firm Is Already Using AI. Is It Covered?
          </h2>
          <p className="text-cream/70 text-lg mb-10 max-w-xl">
            Get your AI governance score, see your estimated premium, and request coverage — all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group" onClick={handleRequestEarlyAccess}>
              Request Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={handleSeeCoverageDetails}>
              See Coverage Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
