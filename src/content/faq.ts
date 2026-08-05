/**
 * FAQ content, grouped by theme. Rendered with an accordion on /faq and
 * reused in condensed form elsewhere if needed.
 */

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  category: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    category: "Company",
    items: [
      {
        q: "What is Axiom Specialty?",
        a: "Axiom Specialty is a managing general agent (MGA) building specialty insurance for the risks of frontier technology. Our first product is AI liability; energy infrastructure, data centers, agentic E&O, and other lines are in development.",
      },
      {
        q: "What does 'managing general agent' mean?",
        a: "As an MGA, Axiom designs the product, underwrites the risk, and services policies on behalf of the carriers that provide the capacity. It lets us build coverage and underwriting tuned to emerging technology risk, backed by established balance sheets.",
      },
      {
        q: "Is Axiom an insurance carrier?",
        a: "No. Axiom is the underwriting and technology layer. Policies are issued on paper provided by our carrier partners, subject to their approval and the policy terms.",
      },
    ],
  },
  {
    category: "AI Liability coverage",
    items: [
      {
        q: "What does AI Liability actually cover?",
        a: "It provides affirmative coverage for third-party claims arising from inadequate human oversight of AI-assisted professional work — including AI-generated errors, unauthorized disclosure through unsanctioned tools, and regulatory violations stemming from AI-influenced decisions.",
      },
      {
        q: "How is this different from my existing E&O or professional liability policy?",
        a: "Standard policies increasingly carry explicit AI exclusions. Axiom is a standalone policy designed to sit alongside your existing program and fill the gap those exclusions create — it covers the human negligence exposure around AI, not AI product defects.",
      },
      {
        q: "Who is eligible?",
        a: "Firms that maintain a documented AI governance framework, human-review protocols, and auditable tool-usage tracking. The stronger your governance posture, the better your pricing.",
      },
    ],
  },
  {
    category: "Underwriting & governance software",
    items: [
      {
        q: "How does Axiom underwrite AI risk?",
        a: "Through continuous, telemetric assessment of how a firm deploys AI — governance practices, oversight controls, and tool usage — rather than a static, once-a-year questionnaire. Behavioral signal, mapped to the NIST AI Risk Management Framework, drives the score.",
      },
      {
        q: "Do I have to pay for the governance software?",
        a: "No. Firms receive Axiom's governance platform free at bind. It scores your governance posture in real time, maps gaps to the NIST AI RMF, and helps you improve toward better pricing tiers.",
      },
      {
        q: "What data do you connect to?",
        a: "With your permission, read-only telemetry from tools like Microsoft 365 and Google Workspace, plus documents you submit. The goal is an accurate, current picture of AI usage — not surveillance of individuals.",
      },
    ],
  },
  {
    category: "Agentic E&O & GAUNTLET",
    items: [
      {
        q: "What is GAUNTLET?",
        a: "GAUNTLET is Axiom's certification for AI agents — an evidence-based attestation of an agent's authority boundaries, controls, and oversight, in the spirit of a SOC 2 for autonomous software. It is currently in alpha.",
      },
      {
        q: "Is Agentic E&O insurance available yet?",
        a: "Not yet. GAUNTLET certification comes first, establishing the underwriting substrate; Agentic E&O insurance follows. You can explore the certification program at certify.axiomspecialty.com.",
      },
    ],
  },
  {
    category: "Brokers & carriers",
    items: [
      {
        q: "I'm a broker. How do I get appointed?",
        a: "We work with wholesale and retail brokerages placing frontier-technology risk. Reach out through the brokerage portal on our Partners page and our team will follow up.",
      },
      {
        q: "I'm a carrier or reinsurer. How do we partner?",
        a: "We're actively building capacity relationships with carriers and reinsurers who want structured access to emerging technology risk. Start a conversation through the carrier portal on our Partners page.",
      },
    ],
  },
];
