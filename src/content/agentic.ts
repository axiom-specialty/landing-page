/**
 * Agentic E&O + GAUNTLET content.
 *
 * GAUNTLET is Axiom's certification for AI agents, a SOC-2-style attestation
 * of an agent's controls, currently in alpha. Agentic E&O insurance follows.
 *
 * The insuring agreements below are synthesized from the two closest markets
 * (Mount's action-based third-party agreements and Redberry Labs' first-/third-
 * party split), which are NOT identical. Using first principles, an agentic E&O
 * form has to answer three questions for every incident: did the agent act
 * outside its authority, did it act wrongly within its authority, and what did
 * that cost, first-party to the insured and third-party to others.
 */

export const gauntlet = {
  name: "GAUNTLET",
  status: "Alpha",
  what:
    "GAUNTLET is a certification for AI agents, a structured, evidence-based attestation of an agent's authority boundaries, controls, and oversight, in the spirit of a SOC 2 for autonomous software.",
  why:
    "Before an agent can be insured, its risk has to be legible. GAUNTLET establishes a common language for what an agent is allowed to do, how that is enforced, and how failures are caught, the underwriting substrate for Agentic E&O.",
  pillars: [
    {
      title: "Authority mapping",
      body: "Document what the agent may do, the systems it can touch, and the boundaries it must never cross.",
    },
    {
      title: "Control attestation",
      body: "Verify guardrails, approvals, and kill-switches against the declared authority, not marketing claims.",
    },
    {
      title: "Continuous evidence",
      body: "Telemetry and incident logs keep the certification live, so a passing grade reflects the agent in production.",
    },
  ],
} as const;

export interface InsuringAgreement {
  name: string;
  party: "Third-party" | "First-party";
  description: string;
}

export const insuringAgreements: InsuringAgreement[] = [
  {
    name: "Unauthorized Actions",
    party: "Third-party",
    description:
      "The agent takes an action outside its intended authority and creates measurable loss for a third party.",
  },
  {
    name: "Erroneous Actions",
    party: "Third-party",
    description:
      "The agent performs a declared task incorrectly and causes operational or financial damage.",
  },
  {
    name: "Data & Tool Misuse",
    party: "Third-party",
    description:
      "The agent exposes sensitive data or misuses a connected tool inside a covered workflow.",
  },
  {
    name: "Prompt & Tool Manipulation",
    party: "Third-party",
    description:
      "A verified prompt-injection or tool-manipulation event causes a covered harmful action.",
  },
  {
    name: "Harmful or Infringing Outputs",
    party: "Third-party",
    description:
      "Third-party claims arising from misrepresentation, misselling, or IP-infringing agent outputs.",
  },
  {
    name: "Business Interruption",
    party: "First-party",
    description:
      "Revenue loss to the insured from agent-driven failures that disrupt operations.",
  },
  {
    name: "Runaway Usage & Infrastructure Overage",
    party: "First-party",
    description:
      "Unexpected spikes in API, compute, and infrastructure cost during a covered incident.",
  },
  {
    name: "Incident Response & Regulatory Costs",
    party: "First-party",
    description:
      "Forensic investigation, legal counsel, and regulatory notification following an agent incident.",
  },
];
