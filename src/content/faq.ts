/**
 * General FAQ, about the company and how to work with Auxilium. Product-specific
 * questions live with each product (e.g. aiLiabilityFaq in ai-liability.ts).
 */

export interface FaqItem {
  q: string;
  a: string;
}

export const generalFaq: FaqItem[] = [
  {
    q: "What is Auxilium Specialty?",
    a: "Auxilium Specialty is a managing general agent building specialty insurance for the risks of frontier technology. Our first product is AI liability, with more lines in development.",
  },
  {
    q: "What does 'managing general agent' mean?",
    a: "As an MGA, Auxilium designs the product, underwrites the risk, and services policies on behalf of the carriers that provide the capacity. It lets us build coverage and underwriting tuned to emerging technology risk, backed by established balance sheets.",
  },
  {
    q: "Is Auxilium an insurance carrier?",
    a: "No. Auxilium is the underwriting and technology layer. Policies are issued on paper provided by our carrier partners, subject to their approval and the policy terms.",
  },
  {
    q: "How do I buy a policy?",
    a: "How you buy depends on the line. AI Liability and our robotics lines are placed through licensed brokers: speak to your broker about Auxilium, or ask us to point you to an appointed brokerage through our Partners page. Embedded Agentic Risk is offered inside the software your AI vendor already provides, and sold by Auxilium's licensed agency.",
  },
  {
    q: "I'm a broker. How do I get appointed?",
    a: "We work with wholesale and retail brokerages placing frontier-technology risk. Reach out through the brokerage portal on our Partners page and our team will follow up.",
  },
  {
    q: "I'm a carrier or reinsurer. How do we partner?",
    a: "We're actively building capacity relationships with carriers and reinsurers who want structured access to emerging technology risk. Start a conversation through the carrier portal on our Partners page.",
  },
  {
    q: "Who does Auxilium cover?",
    a: "AI Liability is written for organizations with $5M to $100M in annual revenue whose AI use touches third parties. It insures organizations for the AI they use in their own operations. If you build AI products for others, your own product liability is not covered here: Embedded Agentic Risk lets you offer cover to your customers when they deploy your agents. The exposure is most concentrated today in professional services, healthcare administration, financial advisory, and technology enterprises, though it is not restricted to those.",
  },
  {
    q: "What makes AI liability insurable rather than just real?",
    a: "The exposure is idiosyncratic at the level of each insured and correlated only through the shared model layer. Monitored at that layer, with the supplier side declined, it diversifies across a book like any other liability line.",
  },
];
