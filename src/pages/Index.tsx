import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ExposureSection from "@/components/landing/ExposureSection";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import CoverageSection from "@/components/landing/CoverageSection";
import RegulationsSection from "@/components/landing/RegulationsSection";
import WhyAxiomSection from "@/components/landing/WhyAxiomSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PlatformSection from "@/components/landing/PlatformSection";
import WhoItsForSection from "@/components/landing/WhoItsForSection";
import TrustSection from "@/components/landing/TrustSection";
import PressSection from "@/components/landing/PressSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <ExposureSection />
        <CaseStudiesSection />
        <CoverageSection />
        <RegulationsSection />
        <WhyAxiomSection />
        <HowItWorksSection />
        <PlatformSection />
        <WhoItsForSection />
        <TrustSection />
        <PressSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
