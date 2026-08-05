/**
 * AI Liability product content. Kept as data so the page reads as composition.
 * Sourced from the firm's existing copy, reorganized into named insuring
 * agreements, illustrative scenarios, and the underwriting flow.
 */

export const insuringAgreements = [
  {
    name: "AI-Assisted Professional Negligence",
    description:
      "Third-party claims arising from inadequate human oversight of AI-assisted professional work — including AI-generated errors that reach a client.",
  },
  {
    name: "Algorithmic Bias & Discrimination",
    description:
      "Claims alleging discriminatory outcomes from AI-influenced decisions in hiring, lending, servicing, or similar processes.",
  },
  {
    name: "AI-Generated IP Infringement",
    description:
      "Liability for intellectual-property infringement introduced through AI-generated content or code.",
  },
  {
    name: "Unauthorized Disclosure (Shadow AI)",
    description:
      "Exposure from sensitive data entered into unsanctioned or ungoverned AI tools by employees.",
  },
  {
    name: "Regulatory Proceedings",
    description:
      "Defense and response costs for regulatory violations stemming from AI-influenced decisions.",
  },
];

export const coverageItems = [
  "AI hallucinations in client-facing or internal work",
  "AI-driven professional negligence",
  "Algorithmic bias & discrimination claims",
  "AI-generated IP infringement",
  "Enterprise AI usage liability (not just AI vendors)",
  "Shadow AI and ungoverned tool usage liability",
];

export const policySnapshot = [
  { label: "Coverage", value: "$1M – $10M", sub: "per occurrence" },
  { label: "Premiums", value: "$8K – $75K", sub: "per year" },
  { label: "Deductible", value: "$10K – $50K", sub: "per claim" },
  { label: "Term", value: "12 months", sub: "renewable" },
];

export const scenarios = [
  {
    tag: "Professional services",
    headline: "An AI-assisted report reaches a client with fabricated citations.",
    loss: "$290,000",
    standard: "Denied — AI exclusion",
    response:
      "Axiom's AI-Assisted Professional Negligence agreement responds to the third-party claim from inadequate oversight of the AI output.",
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
      "The Algorithmic Bias and Regulatory Proceedings agreements fund defense and response where standard forms walk away.",
  },
];

export const underwritingSteps = [
  { title: "Risk assessment", body: "A focused questionnaire — around 50 questions, under 25 minutes — establishes your governance baseline." },
  { title: "Telemetry", body: "With permission, read-only connections to Microsoft 365 or Google Workspace turn real usage into signal." },
  { title: "Documents", body: "Submit existing E&O, D&O, cyber, and EPL policies so coverage is positioned to sit alongside them." },
  { title: "Risk score", body: "Six behavioral dimensions, mapped to the NIST AI RMF, produce a governance score." },
  { title: "Coverage", body: "Pricing and terms follow the score. A score of 85+ unlocks Super Preferred — the lowest tier." },
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
    body: "A real-time score across six dimensions, with the specific actions that move it. A score of 85+ unlocks Super Preferred pricing.",
  },
  {
    title: "Connect once, monitor continuously",
    body: "Read-only telemetry surfaces AI events as they happen — shadow tools, ungoverned usage, oversight gaps — instead of an annual snapshot.",
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
