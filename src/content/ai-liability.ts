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

/** The opening paragraph and who the policy is for. */
export const opening: DetailSection[] = [
  {
    intro:
      "Your AI agents now issue refunds, approve claims, place orders and change code. When one gets it wrong, the loss is yours, and your existing policies may not answer. Since January 2026, standard liability forms (ISO CG 40 47, CG 40 48 and CG 35 08) and many E&O and umbrella forms exclude AI. The Autonomous Operations Policy pays your own loss when an agent errs, and fills the liability gaps those exclusions leave.",
  },
  {
    title: "Who it is for",
    intro:
      "Companies that deploy AI agents that act or speak for the business without a person approving each action. Agents can be built in-house, bought off the shelf, or built for you by a vendor. Typical insureds have up to $1bn in revenue.",
  },
];

/** Coverage through what is not covered. */
export const terms: DetailSection[] = [
  {
    title: "Coverage",
    blocks: [
      {
        kind: "coverage",
        columns: { limit: "Limit", retention: "Retention" },
        groups: [
          {
            label: "Section A. Agent Loss (your own loss)",
            rows: [
              {
                name: "A1 Execution Loss",
                covers:
                  "Your direct financial loss when an agent, acting within the access you gave it, pays the wrong party or amount or pays twice, makes a commitment you must honor, or corrupts or deletes records (including the cost to restore them)",
                limit: "$1m or $2.5m; never more than your declared exposure per event; you bear 20% of each loss",
                retention: "$25,000 ($50,000 for Elevated classes)",
                basis: ["First party"],
                basisNote: "On written notice of loss",
              },
              {
                name: "A2 Response & Restoration",
                covers:
                  "Shutting down and rolling back the agent, forensic investigation, legal advice, and notifying and remediating affected customers. First 72 hours of shutdown and rollback need no consent.",
                limit: "$250,000",
                retention: "$10,000",
                basis: ["First party"],
                basisNote: "On written notice of loss",
              },
              {
                name: "A3 Regulatory Investigation",
                covers: "Defense costs when a regulator investigates or brings a proceeding over an agent event",
                limit: "$250,000",
                retention: "$10,000",
                basis: ["Claims-made"],
              },
            ],
          },
          {
            label: "Section B. Liability Gap (claims against you)",
            rows: [
              {
                name: "B1 Financial Loss Liability",
                covers: "Claims by customers and third parties for financial loss caused by your agent",
                limit: "$2m",
                retention: "$25,000 where primary or dropping down; none where excess",
                basis: ["Claims-made"],
                basisNote:
                  "Sits excess of your E&O, drops down where your E&O excludes AI, and is primary to $1m if you have no E&O",
              },
              {
                name: "B2 General Liability Gap",
                covers:
                  "Bodily injury, property damage and personal and advertising injury caused by your agent, where your CGL or umbrella AI exclusion removes cover",
                limit: "$2m",
                retention: "Your CGL retention, minimum $25,000",
                basis: ["Claims-made"],
                basisNote: "Responds only where the AI exclusion applies",
              },
            ],
          },
        ],
        notes: [
          "Aggregates: $5m policy aggregate, $3m for Section A and $3m for Section B.",
          "One event: losses from the same agent, the same release or the same instruction are one event.",
          "Defense costs are within limits.",
        ],
      },
    ],
  },
  {
    title: "The limit follows what your agent can actually do",
    blocks: [
      { kind: "text", body: "For each agent type you tell us three things:" },
      {
        kind: "bullets",
        items: [
          "the largest single action it can take;",
          "how many actions it takes per hour;",
          "how long until a person can stop it.",
        ],
      },
      {
        kind: "text",
        body: "Multiply them, or use the hard cap in your payment or order system if lower. That is your declared exposure, and it is the most A1 pays per event. A tighter cap means a lower price. If you do not know a value, we use a published default, and you can replace it with evidence at any time.",
      },
      {
        kind: "table",
        heading: "If you don't know, we assume",
        columns: ["Unknown value", "We assume"],
        rows: [
          ["Hard cap", "none"],
          ["Actions per hour", "12 if a person triggers it; 60 if scheduled or event-driven"],
          ["Time to stop", "4 hours attended; 24 hours unattended"],
          ["Largest single action", "the highest the connected system allows, or $10,000"],
        ],
      },
    ],
  },
  {
    title: "Agent types",
    blocks: [
      {
        kind: "table",
        columns: ["Type", "What it does"],
        rows: [
          ["T1 Conversational", "Answers customers and makes statements; no system or payment authority"],
          ["T2 Payments and refunds", "Issues refunds, credits, payments or transfers"],
          ["T3 Operations", "Places orders, bookings and procurement; changes records"],
          ["T4 Code and systems", "Changes code, infrastructure, databases or permissions"],
          ["T5 Decisions", "Approves or denies claims, applications, credit or service"],
        ],
      },
    ],
  },
  {
    title: "Industry classes",
    blocks: [
      {
        kind: "bullets",
        items: [
          "Standard: most industries.",
          "Elevated (higher retention and rate): banking, payments and lending; insurance carriers, MGAs and TPAs; healthcare administration; legal.",
          "Not eligible: crypto assets, unregulated trading, payday lending, gambling, weapons, unlawful surveillance.",
        ],
      },
    ],
  },
  {
    title: "What is not covered",
    blocks: [
      {
        kind: "bullets",
        items: [
          "Loss above your declared exposure, or from an agent type you did not schedule (new agent types are covered for 30 days).",
          "An agent performing below expectations, or a business, pricing or investment decision.",
          "Lost profits and business interruption, including model provider or cloud outages.",
          "Contractual penalties, service credits and liquidated damages.",
          "Fines, penalties and punitive damages.",
          "Employment practices, D&O, securities and fiduciary claims.",
          "Intellectual property infringement (except personal and advertising injury under B2).",
          "Data breach costs, which belong to your cyber policy.",
          "War, pollution, and known prior events.",
        ],
      },
      {
        kind: "text",
        body: "Coming in 2028: endorsements for management liability gaps, insurable fines and penalties, and Section A limits up to $5m.",
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
  {
    title: "Worked examples",
    blocks: [
      {
        kind: "table",
        columns: ["Insured", "Agents", "Section A", "Section B", "Indicative total"],
        rows: [
          [
            "Mid-market SaaS, $80m revenue",
            "Off-the-shelf support agent plus an in-house refund agent; refunds capped at $250,000 a day",
            "$1m",
            "Both",
            "about $26,100",
          ],
          [
            "Claims TPA, $150m revenue (Elevated)",
            "Vendor-built claims agents from a certified vendor; auto-pay to $10,000, human approval above",
            "$2.5m",
            "Both",
            "about $60,100",
          ],
          [
            "Consultancy, $40m revenue",
            "Research and client-facing assistants; E&O excludes generative AI",
            "$1m",
            "Both",
            "about $17,300",
          ],
          [
            "E-commerce retailer, $200m revenue, no E&O",
            "In-house procurement and DevOps agents; no caps declared, so default values apply",
            "$1m",
            "Both",
            "about $42,600",
          ],
        ],
        footnote: "Indicative, before surplus lines taxes and fees. Your premium depends on your application.",
      },
    ],
  },
  {
    title: "Auxilium Control: free, optional, read-only",
    blocks: [
      {
        kind: "bullets",
        items: [
          "Not a condition of cover and never a warranty.",
          "If you connect it, it confirms which agents and model versions you run and replaces any re-test at renewal.",
          "Any governance tool you already use is accepted as evidence.",
        ],
      },
    ],
    cta: { label: "Learn about Auxilium Control", href: "/software/auxcontrol" },
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
