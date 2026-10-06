/**
 * General FAQ, about the company and how to work with Auxilium. Product-specific
 * questions live with each product (e.g. aiLiabilityFaq in ai-liability.ts).
 */

export interface FaqItem {
  q: string;
  /** Several sentences render as a short list. */
  a: string | string[];
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
    a: "Every line is placed through licensed brokers in the E&S market: speak to your broker about Auxilium, or ask us to point you to an appointed brokerage through our Partners page. Robotic Protection can also be included when you buy or lease a robot from your vendor.",
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
    a: "AI Liability insures companies with up to $1bn in revenue, in any industry, for the AI agents they run in their own operations. It does not cover liability for AI products you build and sell to others. Robotic Protection is for every company running robots, and Robot Maker Coverage is for the companies that make, lease, integrate or service them.",
  },
  {
    q: "What makes AI liability insurable rather than just real?",
    a: "The exposure is idiosyncratic at the level of each insured and correlated only through the shared model layer. Monitored at that layer, with the supplier side declined, it diversifies across a book like any other liability line.",
  },
];
