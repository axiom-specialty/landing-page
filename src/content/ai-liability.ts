/**
 * AI Liability page content: the Autonomous Operations Policy. Kept as data so
 * the page reads as composition, in the same section and block shapes as every
 * other product page (see DetailSection in products.ts).
 *
 * Every figure here is indicative and subject to the issued policy. House
 * style: no em or en dashes anywhere. Commas, colons and periods only.
 */
import type { DetailSection } from "./products";
import type { FaqItem } from "./faq";

/** Coverage and underwriting. */
export const terms: DetailSection[] = [
  {
    title: "Coverage",
    blocks: [
      {
        kind: "coverage",
        columns: { covers: "Description", limit: "Limit", retention: "Retention" },
        groups: [
          {
            rows: [
              {
                name: "Execution Loss",
                covers:
                  "Your own loss when an agent, acting within the access you gave it, sends a wrong payment or refund, makes a commitment you must honor, runs up usage charges, or corrupts your records",
                limit: "$1m or $2.5m, up to the declared exposure; insured bears 20%",
                retention: "$25,000 ($50,000 Elevated)",
              },
              {
                name: "Response & Restoration",
                covers:
                  "Shutting down and rolling back the agent, investigating, and notifying and making good with affected customers",
                limit: "$250,000",
                retention: "$10,000",
              },
              {
                name: "Regulatory Proceedings",
                covers: "Defense costs when a regulator investigates AI usage or actions",
                limit: "$250,000",
                retention: "$10,000",
              },
              {
                name: "Financial Loss Liability",
                covers: "Claims for financial loss your agent caused, where your E&O doesn't respond",
                limit: "$2m (IP $500,000)",
                retention: "$25,000 when primary",
              },
              {
                name: "General Liability Gap",
                covers:
                  "Injury, property damage or advertising injury your agent caused, where your CGL or umbrella excludes AI",
                limit: "$2m",
                retention: "Your CGL retention, min. $25,000",
              },
              {
                name: "Algorithmic Discrimination",
                covers: "Claims that your AI discriminated against a customer or applicant",
                limit: "$1m",
                retention: "$50,000",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Underwriting",
    underwriting: {
      rated: [
        "Section A by agent type, declared exposure, controls and evidence.",
        "Section B by revenue, industry class and whether you carry E&O.",
        "Minimum premium $7,500; policy fee $1,500.",
      ],
      reads: [
        "Nothing before bind.",
        "After bind, only for in-house agents that move money, change systems or make decisions: a short behavior assessment within 60 days.",
        "Agent action logs only at claim time.",
      ],
      asksNote: "A 15-question application through your broker. It covers:",
      asks: [
        "Company, industry and revenue",
        "Which agent types you run",
        "For each type: the largest action, actions per hour and time to stop",
        "Any hard cap outside the agent",
        "Human approval thresholds",
        "Whether each agent is in-house, a listed product or vendor-built",
        "Your E&O, CGL and umbrella, and whether they exclude AI",
        "Agent incidents in the last three years",
        "Whether you keep 12 months of agent action records",
      ],
      drivers: [
        "Agent types and how many you run",
        "Declared exposure",
        "A hard cap enforced outside the model",
        "Human approval above a threshold",
        "A tested stop mechanism",
        "Evidence: a library-listed product or certified vendor prices best; deemed values price highest",
        "Industry class",
        "Whether you carry E&O",
      ],
      standards: ["NIST AI RMF", "ISO/IEC 42001", "EU AI Act deployer obligations"],
      review:
        "No software to install and no test before you are quoted. Your broker gets a quote from the application, and the underwriter approves every quote.",
    },
  },
];

/** Regulatory notices. Unchanged from the previous product. */
export const regulations = [
  { name: "ISO GenAI exclusions", note: "CG 40 47, CG 40 48 and CG 35 08, effective 1 January 2026, on the general liability line every commercial buyer holds." },
  { name: "EU AI Act", note: "High-risk obligations phasing in, with fines up to EUR 35M or 7% of global turnover." },
  { name: "US state AI statutes", note: "Automated-decision and AI-transparency laws, tracked on the AI Statute Schedule attached to each policy and maintained quarterly." },
  { name: "NAIC AI model bulletin", note: "Adopted by roughly half of US states, classifying automated underwriting, rating and claim decisions in its highest risk bracket." },
  { name: "SEC AI disclosure scrutiny", note: "AI-disclosure securities actions were pleaded in the first half of 2026, reaching directors and officers cover." },
  { name: "ABA Formal Opinion 512", note: "Professional-responsibility duties for AI use by lawyers." },
];

export const aiLiabilityFaq: FaqItem[] = [
  {
    q: "What does it cover?",
    a: [
      "Your own loss when an agent errs (Section A).",
      "The liability your other policies now exclude for AI (Section B).",
    ],
  },
  {
    q: "Why doesn't my existing insurance respond?",
    a: [
      "Since January 2026, ISO forms CG 40 47, CG 40 48 and CG 35 08, and many E&O and umbrella forms, exclude AI.",
      "Crime and cyber policies generally require fraud or a security failure. An agent that makes an honest mistake triggers neither.",
    ],
  },
  {
    q: "How does Section B work with my E&O and CGL?",
    a: [
      "B1 sits above your E&O, and drops down where your E&O excludes AI.",
      "B2 responds only where your CGL or umbrella AI exclusion removes cover.",
      "Send us your policies and we will tell you which applies.",
    ],
  },
  {
    q: "Do I need to install software or pass a test?",
    a: [
      "No.",
      "In-house agents that move money, change systems or make decisions get a short assessment within 60 days after bind.",
    ],
  },
  {
    q: "What if my agent's model changes?",
    a: [
      "Your terms stay in force.",
      "We price on controls outside the model (caps, approvals, stop) that do not change when the model does.",
      "Listed products are re-tested on every release.",
    ],
  },
  { q: "Who is eligible?", a: "Companies in Standard and Elevated classes up to $1bn revenue." },
  { q: "How is it placed?", a: "Through your broker, in the E&S market." },
];
