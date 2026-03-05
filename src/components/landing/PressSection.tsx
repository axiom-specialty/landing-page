import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

const smallCards = [
  {
    badge: "Legal",
    publication: "VinciWorks",
    headline: "When AI hallucinates and lawyers pay: The $86K legal wake-up call",
    url: "https://vinciworks.com/blog/when-ai-hallucinates-and-lawyers-pay-the-86k-legal-wake-up-call/",
    date: "January 2026",
    pullout:
      "The largest AI hallucination sanction to date — a law firm submitted fabricated AI citations across eight federal cases. The court called it bad faith, not negligence.",
  },
  {
    badge: "Customer Service",
    publication: "Data, Tech & Tools",
    headline:
      "Air Canada held liable for its chatbot's false promises — establishing AI agents as legal agents of the company",
    url: "https://www.datatechandtools.com/p/when-your-chatbot-lies-the-liability",
    date: "November 2025",
    pullout:
      "A civil tribunal ruled that companies cannot disclaim responsibility for what their AI tells customers. Apparent authority applies to chatbots.",
  },
  {
    badge: "Insurance & D&O",
    publication: "Risk & Insurance",
    headline:
      "AI-related class action filings more than doubled in 2024 — and D&O policies are adding exclusions",
    url: "https://riskandinsurance.com/ai-litigation-and-its-impact-on-do-insurance/",
    date: "October 2025",
    pullout:
      "53 securities class actions with AI allegations filed since 2020. Traditional D&O policies are quietly narrowing coverage as litigation accelerates.",
  },
  {
    badge: "Market Outlook",
    publication: "Deloitte Insights",
    headline:
      "AI insurance premiums projected to reach $4.7 billion globally by 2032 — growing at 80% CAGR",
    url: "https://www.deloitte.com/us/en/insights/industry/financial-services/risk-insurance-for-ai.html",
    date: "2025",
    pullout:
      "Deloitte's own research confirms the market is real and growing fast — driven by rising litigation, regulatory pressure, and coverage gaps in existing policies.",
  },
];

const PressSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersection(ref);

  return (
    <section
      ref={ref}
      id="press"
      className={cn(
        "section-padding bg-background",
        "fade-in-section",
        isVisible && "is-visible"
      )}
    >
      <div className="container-narrow">
        <div className="text-left mb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
            In The News
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
            The AI Liability Gap Is Making Headlines
          </h2>
          <p className="text-muted-foreground text-lg">
            The risks Axiom covers are already happening — at law firms,
            consulting giants, airlines, and insurers.
          </p>
        </div>

        {/* Featured card */}
        <div className="bg-navy-deep text-cream rounded-xl p-8 md:p-12 mb-8">
          <div className="flex items-start justify-between mb-6">
            <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">
              Featured · Professional Services
            </span>
            <span className="text-cream/40 text-sm uppercase tracking-widest">
              Fortune
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-cream mb-4 leading-tight">
            Deloitte refunded a government client $97,000 after AI hallucinated
            citations in a $440,000 consulting report — then it happened again in
            Canada for $1.6M CAD
          </h3>
          <p className="text-cream/70 text-sm max-w-2xl mb-8 leading-relaxed">
            Two incidents. Two governments. The same failure: employees using AI
            to produce client deliverables with no human verification, no
            disclosure, and no insurance coverage for the resulting professional
            liability. The firm's E&O policy covered neither.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-cream/20">
            <span className="text-cream/50 text-sm">
              October–November 2025
            </span>
            <a
              href="https://fortune.com/2025/10/07/deloitte-ai-australia-government-report-hallucinations-technology-290000-refund/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-sm font-medium hover:text-gold-dark transition-colors"
            >
              Read on Fortune →
            </a>
          </div>
        </div>

        {/* Smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {smallCards.map((card, index) => (
            <div
              key={index}
              className="card-enterprise border-t-2 border-gold hover:-translate-y-1 transition-transform duration-200 flex flex-col justify-between relative"
            >
              <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-muted-foreground" />
              <div>
                <span className="inline-block px-2 py-0.5 rounded-full bg-gold/10 text-gold text-xs font-medium mb-2">
                  {card.badge}
                </span>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  {card.publication}
                </p>
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-semibold text-sm leading-snug hover:text-primary transition-colors"
                >
                  {card.headline}
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  {card.date}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  {card.pullout}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
