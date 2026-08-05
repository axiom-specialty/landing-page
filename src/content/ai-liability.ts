/**
 * AI Liability product content. Kept as data so the page reads as composition.
 * Insuring agreements follow the Axiom AI Liability application (IA-1 to IA-9).
 */

export interface InsuringAgreement {
  code: string;
  name: string;
  party: "Third-party" | "First-party";
  description: string;
}

/** Standard-submission insuring agreements (selectable at application). */
export const insuringAgreements: InsuringAgreement[] = [
  {
    code: "IA-1",
    name: "Professional and Operational Error",
    party: "Third-party",
    description:
      "Third-party liability for errors and operational failures in AI-assisted professional work, written on a primary or difference-in-conditions basis.",
  },
  {
    code: "IA-2",
    name: "Algorithmic Discrimination and Employment Practices",
    party: "Third-party",
    description:
      "Claims of discriminatory or disparate-impact outcomes from AI-assisted decisions about individuals, including the screening and assessment of employees and job applicants.",
  },
  {
    code: "IA-3",
    name: "Wrongful Disclosure of Protected Information",
    party: "Third-party",
    description:
      "Liability for wrongful disclosure of protected personal, health, biometric, financial, or contractually confidential information that an AI system can reach.",
  },
  {
    code: "IA-4",
    name: "Content and Publication Liability",
    party: "Third-party",
    description:
      "Intellectual-property infringement and defamation arising from AI-generated content published under the insured's name.",
  },
  {
    code: "IA-5",
    name: "AI Regulatory Proceedings",
    party: "Third-party",
    description:
      "Defense and response costs for regulatory proceedings under AI and automated-decision laws, including the EU AI Act and US state regimes.",
  },
  {
    code: "IA-6",
    name: "Bodily Injury and Property Damage",
    party: "Third-party",
    description:
      "Bodily injury and property damage arising from AI output relied upon in clinical decision support or the control of physical equipment.",
  },
  {
    code: "IA-9",
    name: "Autonomous Execution Loss",
    party: "First-party",
    description:
      "First-party cover for the insured's own loss when an AI agent acts outside the authorization scope in force. Available where an AI agent is operated.",
  },
];

/** Available only on referral, not part of a standard submission. */
export const referralAgreements: InsuringAgreement[] = [
  {
    code: "IA-7",
    name: "Management and Fiduciary",
    party: "Third-party",
    description: "Management and fiduciary exposure connected to the deployment of AI. Offered on referral.",
  },
  {
    code: "IA-8",
    name: "Contingent AI Supply Failure",
    party: "First-party",
    description:
      "Contingent loss following the failure of a critical AI supplier or model provider. Offered on referral.",
  },
];

export const coverageItems = [
  "AI hallucinations in client-facing or internal work",
  "AI-driven professional negligence",
  "Algorithmic bias and discrimination claims",
  "AI-generated IP infringement and defamation",
  "Enterprise AI usage liability, not just AI vendors",
  "Shadow AI and ungoverned tool usage liability",
];

export const policySnapshot = [
  { label: "Coverage", value: "$1M to $10M", sub: "per occurrence" },
  { label: "Premiums", value: "$8K to $75K", sub: "per year" },
  { label: "Deductible", value: "$10K to $50K", sub: "per claim" },
  { label: "Term", value: "12 months", sub: "renewable" },
];

export const scenarios = [
  {
    tag: "Professional services",
    headline: "An AI-assisted report reaches a client with fabricated citations.",
    loss: "$290,000",
    standard: "Denied, AI exclusion",
    response:
      "Professional and Operational Error (IA-1) responds to the third-party claim from inadequate oversight of the AI output.",
  },
  {
    tag: "Customer operations",
    headline: "A support chatbot promises a policy the company doesn't honor.",
    loss: "Tribunal award",
    standard: "Contested coverage",
    response:
      "Misrepresentation by an AI system in the course of business is exactly the human-oversight gap Axiom is built to cover.",
  },
  {
    tag: "Regulated decisions",
    headline: "An AI-influenced eligibility model draws a discrimination complaint.",
    loss: "Regulatory action",
    standard: "Excluded",
    response:
      "Algorithmic Discrimination (IA-2) and AI Regulatory Proceedings (IA-5) fund defense and response where standard forms walk away.",
  },
];

export const underwritingSteps = [
  { title: "Risk assessment", body: "A focused questionnaire of around 50 questions, under 25 minutes, establishes your governance baseline." },
  { title: "Telemetry", body: "With permission, read-only connections to Microsoft 365 or Google Workspace turn real usage into signal." },
  { title: "Documents", body: "Submit existing E&O, D&O, cyber, and EPL policies so coverage is positioned to sit alongside them." },
  { title: "Risk score", body: "Six behavioral dimensions, mapped to the NIST AI RMF, produce a governance score." },
  { title: "Coverage", body: "Pricing and terms follow the score. A score of 85 or above unlocks Super Preferred, the lowest tier." },
];

export const governanceDimensions = [
  "Compliance",
  "Human Oversight",
  "Operational Risk",
  "AI Governance",
  "Data Privacy",
  "Incident Response",
];

export const platformCapabilities = [
  {
    title: "Governance score, live",
    body: "A real-time score across six dimensions, with the specific actions that move it. A score of 85 or above unlocks Super Preferred pricing.",
  },
  {
    title: "Connect once, monitor continuously",
    body: "Read-only telemetry surfaces AI events as they happen: shadow tools, ungoverned usage, and oversight gaps, instead of an annual snapshot.",
  },
  {
    title: "Automated NIST AI RMF gap analysis",
    body: "Upload your documents and get a structured gap analysis across Govern, Map, Measure, and Manage, with prioritized remediation.",
  },
];

export const regulations = [
  { name: "EU AI Act", note: "Fines up to €35M or 7% of global turnover." },
  { name: "SEC AI disclosure guidance", note: "Scrutiny of AI claims and governance in filings." },
  { name: "FTC Operation AI Comply", note: "Enforcement against deceptive or harmful AI practices." },
  { name: "ABA Formal Opinion 512", note: "Professional-responsibility duties for AI use by lawyers." },
];

/** AI-liability-specific FAQ (product-level). */
export const aiLiabilityFaq = [
  {
    q: "What does AI Liability actually cover?",
    a: "Affirmative coverage for third-party claims arising from inadequate human oversight of AI-assisted work, across professional and operational error, algorithmic discrimination, wrongful disclosure, content and publication, regulatory proceedings, and, where relevant, bodily injury and autonomous execution loss.",
  },
  {
    q: "How is this different from my existing E&O or professional liability policy?",
    a: "Standard policies increasingly carry explicit AI exclusions. Axiom is a standalone policy designed to sit alongside your existing program and fill the gap those exclusions create. It covers the human-oversight exposure around AI, not AI product defects.",
  },
  {
    q: "How do the insuring agreements work?",
    a: "You select the agreements you need at application, from Professional and Operational Error (IA-1) through Autonomous Execution Loss (IA-9). Two further agreements, Management and Fiduciary (IA-7) and Contingent AI Supply Failure (IA-8), are available on referral.",
  },
  {
    q: "Who is eligible?",
    a: "Firms that maintain a documented AI governance framework, human-review protocols, and auditable tool-usage tracking. The stronger your governance posture, the better your pricing.",
  },
  {
    q: "How does Axiom underwrite AI risk?",
    a: "Through continuous, telemetric assessment of how a firm deploys AI, mapped to the NIST AI Risk Management Framework, rather than a static annual questionnaire. A governance score of 85 or above unlocks Super Preferred pricing.",
  },
  {
    q: "Do I pay for the governance software?",
    a: "No. Policyholders receive Axiom's governance platform free at bind. It scores your posture in real time, maps gaps to the NIST AI RMF, and helps you improve toward better pricing.",
  },
];
