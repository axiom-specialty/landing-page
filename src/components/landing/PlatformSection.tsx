import { useRef, useState, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import platformDashboard from "@/assets/platform/platform-01.png";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";
import platformIntegrations from "@/assets/platform/platform-02.png";
import platformDocuments from "@/assets/platform/platform-03.png";

const tabs = [
  {
    id: "dashboard",
    label: "Risk Dashboard",
    image: platformDashboard,
    headline: "Your Governance Score, Live",
    body: "See your organization's AI risk score across six dimensions — Compliance, Human Oversight, Operational Risk, AI Governance, Data Privacy, and Incident Response. Track how your score changes over time and see your estimated insurance premium update in real time.",
    stat: "Score 85+ unlocks Super Preferred pricing",
  },
  {
    id: "telemetry",
    label: "Telemetry",
    image: platformIntegrations,
    headline: "Connect Once. Monitor Continuously.",
    body: "Connect Google Workspace or Microsoft 365 in one click. Axiom passively monitors AI tool usage across your organization — detecting shadow AI, measuring governance compliance, and flagging risk events as they happen.",
    stat: "89 AI events detected in one monitoring period",
  },
  {
    id: "documents",
    label: "Document Analysis",
    image: platformDocuments,
    headline: "NIST AI RMF Gap Analysis, Automated",
    body: "Upload your AI governance policy documents. Axiom analyzes them against the NIST AI Risk Management Framework and returns a structured gap report — identifying exactly what's missing and drafting suggested language to fill each gap.",
    stat: "Mapped to GOVERN, MAP, MEASURE, and MANAGE functions",
  },
];

const PlatformSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersection(ref);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = useCallback((newTab: string) => {
    if (newTab === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(newTab);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 200);
  }, [activeTab]);

  return (
    <section
      ref={ref}
      id="platform"
      className={cn(
        "section-padding gradient-navy",
        "fade-in-section",
        isVisible && "is-visible"
      )}
      style={{ minHeight: 'auto' }}
    >
      <div className="container-narrow">
        <div className="text-left mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
            Live Product
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-cream mb-4 leading-tight">
            A Platform Built Around How Firms Actually Use AI
          </h2>
          <p className="text-cream/70 text-lg max-w-3xl">
            Connect your workspace in minutes. Get a real-time governance score, a prioritized action plan, and an insurance premium that reflects your actual risk posture.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="w-full flex flex-col sm:flex-row h-auto p-1 gap-1 bg-cream/10 border border-cream/20 rounded-full mb-8 md:mb-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex-1 rounded-full px-6 py-3 text-sm font-medium data-[state=active]:bg-gold data-[state=active]:text-navy-deep data-[state=inactive]:text-cream/80 data-[state=inactive]:hover:text-cream data-[state=inactive]:hover:bg-cream/10 transition-colors"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <div className="order-2 lg:order-1">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-cream mb-4">
                    {tab.headline}
                  </h3>
                  <p className="text-cream/80 leading-relaxed mb-6">
                    {tab.body}
                  </p>
                  <div className="inline-block px-4 py-3 rounded-lg bg-gold/20 border border-gold/40">
                    <p className="text-gold text-sm font-semibold">{tab.stat}</p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="rounded-xl border border-cream/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-cream/5">
                    <img
                      src={tab.image}
                      alt={tab.label}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PlatformSection;
