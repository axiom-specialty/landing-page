/**
 * Agentic E&O certification content.
 *
 * Axiom certifies AI agents, a SOC-2-style attestation of an agent's controls,
 * currently in alpha. Agentic E&O insurance follows.
 *
 * The insuring agreements below are synthesized from the two closest markets
 * (Mount's action-based third-party agreements and Redberry Labs' first-/third-
 * party split), which are NOT identical. Using first principles, an agentic E&O
 * form has to answer three questions for every incident: did the agent act
 * outside its authority, did it act wrongly within it, and what did that cost,
 * first-party to the insured and third-party to others.
 */

export const certification = {
  name: "Agent certification",
  status: "Live",
  what:
    "Our certification is a structured, evidence-based accreditation of an AI agent's authority boundaries, controls, and oversight, in the spirit of a SOC 2 for autonomous software.",
  why:
    "Before an agent can be insured, its risk has to be legible. Certification establishes a common language for what an agent is allowed to do, how that is enforced, and how failures are caught, the underwriting substrate for Agentic E&O.",
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
      body: "Telemetry and incident logs keep the accreditation live, so a passing grade reflects the agent in production.",
    },
  ],
} as const;

/**
 * The measured trigger, the parametric core of the product. What distinguishes
 * Agentic E&O is not that we certify an agent and then write a conventional
 * policy. The certification range produces a continuous, measured signal, and
 * the cover is designed to respond on that measurement rather than on proof of
 * fault. The certification is live; the insurance is in development.
 */
export const measuredTrigger = {
  eyebrow: "The measured trigger",
  title: "The measurement is the trigger, not the verdict",
  lead:
    "The certification range and the continuous telemetry it produces are not only underwriting evidence. They are the trigger the cover is built on.",
  points: [
    {
      title: "Cover responds to a measurement",
      body: "Where an agent's behavior crosses a threshold that was measured and declared at bind, the cover is designed to respond on that measurement, rather than on proof of fault and a full liability determination.",
    },
    {
      title: "A narrower question",
      body: "Conventional agent errors and omissions asks you to prove the agent did something wrong and that the wrong caused the loss. A measured trigger asks a narrower question: did the declared boundary hold.",
    },
    {
      title: "Why the software is included",
      body: "The measurement is what makes the response fast, and it is why the software is included with the cover rather than sold beside it. Without the signal, there is nothing to trigger on.",
    },
  ],
} as const;

/**
 * The order of adoption, stated as a sequence: software first, then
 * certification, then a policy that attaches to both.
 */
export const modelSequence = {
  eyebrow: "How it fits together",
  title: "Software first, then the cover",
  lead:
    "The software is the product a customer adopts first. The certification is what makes the agent legible. The policy attaches to both.",
  steps: [
    {
      k: "01",
      title: "Adopt the software",
      body: "The software is the product a customer adopts first. It runs the certification range and produces the continuous signal an agent's behavior can be measured against.",
    },
    {
      k: "02",
      title: "Certify the agent",
      body: "Certification makes the agent legible: what it is allowed to do, how that is enforced, and how a breach of the declared boundary is measured.",
    },
    {
      k: "03",
      title: "Attach the policy",
      body: "The policy attaches to both the software and the certification, and responds on the declared measurement. The certification is live today. The insurance is in development.",
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
