/**
 * General FAQ, about the company and how to work with Axiom. Product-specific
 * questions live with each product (e.g. aiLiabilityFaq in ai-liability.ts).
 */

export interface FaqItem {
  q: string;
  a: string;
}

export const generalFaq: FaqItem[] = [
  {
    q: "What is Axiom Specialty?",
    a: "Axiom Specialty is a managing general agent building specialty insurance for the risks of frontier technology. Our first product is AI liability; energy infrastructure, data centers, agentic E&O, and other lines are in development.",
  },
  {
    q: "What does 'managing general agent' mean?",
    a: "As an MGA, Axiom designs the product, underwrites the risk, and services policies on behalf of the carriers that provide the capacity. It lets us build coverage and underwriting tuned to emerging technology risk, backed by established balance sheets.",
  },
  {
    q: "Is Axiom an insurance carrier?",
    a: "No. Axiom is the underwriting and technology layer. Policies are issued on paper provided by our carrier partners, subject to their approval and the policy terms.",
  },
  {
    q: "How do I buy a policy?",
    a: "Axiom distributes exclusively through brokers. Speak to your broker about Axiom, or ask us to point you to an appointed brokerage through our Partners page.",
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
    q: "Who does Axiom cover?",
    a: "Any organization whose AI use touches third parties, roughly $5M to $500M in revenue. Liability attaches to whoever owed a duty to the affected person or business: usually the organization that deployed the AI and put its name on the output, sometimes the organization that built it, and often both. Our appetite is not limited to deployers. The exposure is most concentrated today in professional services, healthcare administration, financial advisory, and technology enterprises, though it is not restricted to those. What we decline is pure model-supply risk, where an insured supplies software to a third party who then deploys it and owes the duty in the insured's place.",
  },
  {
    q: "What makes AI liability insurable rather than just real?",
    a: "The exposure is idiosyncratic at the level of each insured and correlated only through the shared model layer. Monitored at that layer, with the supplier side declined, it diversifies across a book like any other liability line.",
  },
];
