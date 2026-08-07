/**
 * AI Liability product content. Kept as data so the page reads as composition.
 * Insuring agreements follow the Axiom AI Liability application (IA-1 to IA-9).
 */

export interface InsuringAgreement {
  code: string;
  name: string;
  party: "Third-party" | "First-party" | "Regulatory";
  description: string;
  /** Available only on referral, not part of a standard submission. */
  referral?: boolean;
}

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
    party: "Regulatory",
    description:
      "Defense, response costs, and insurable fines for regulatory proceedings under AI and automated-decision laws, including the EU AI Act and US state regimes. It responds to a proceeding, not to a claim by a third party.",
  },
  {
    code: "IA-6",
    name: "Bodily Injury and Property Damage",
    party: "Third-party",
    description:
      "Bodily injury and property damage arising from AI output relied upon in clinical decision support or the control of physical equipment.",
  },
  {
    code: "IA-7",
    name: "Management and Fiduciary",
    party: "Third-party",
    description: "Management and fiduciary exposure connected to the deployment of AI.",
    referral: true,
  },
  {
    code: "IA-8",
    name: "Contingent AI Supply Failure",
    party: "Third-party",
    description:
      "Third-party liability arising from a declared AI vendor's failure to perform, to the extent the insured is not made whole under its contract with that vendor. Third-party cover only: it does not respond to business interruption, lost revenue, or other first-party loss.",
    referral: true,
  },
  {
    code: "IA-9",
    name: "Autonomous Execution Loss",
    party: "First-party",
    description:
      "First-party cover for the insured's own loss when an AI agent acts outside the authorization scope in force. Available where an AI agent is operated.",
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

// The AI Risk Thesis (from AXM-RT-001). Argues from mechanism, not market size.
export const riskThesis = {
  propositions: [
    {
      n: "01",
      title: "Liability follows the duty, not the code",
      body: "Liability for AI attaches to whoever owed a duty to the person harmed. That is usually the organization that deployed the system and put its name on the output, but it can reach the organization that built it, and often reaches both. It is the existing law of agency and professional duty applied to a new instrument, and California has removed even the defense that the system acted on its own.",
    },
    {
      n: "02",
      title: "The forms you own don't respond",
      body: "A firm is still liable for a brief with invented citations; a lender for a wrongful decline. The cause of action already exists. What didn't exist was a policy that responds when the error came out of a model, and the forms you own are being drafted to respond less.",
    },
    {
      n: "03",
      title: "Idiosyncratic, therefore insurable",
      body: "The exposure is idiosyncratic at the level of each insured and correlated only through the model layer. Monitor that layer, decline the supplier side, and it diversifies across a book. That is what makes it insurable, not merely real.",
    },
  ],
  lemma:
    "We built a structured database of 1,365 AI liability incidents. Nearly a third turned out not to be liability at all: fraud that used AI against the victim, where no liability insurer is on risk. We underwrite the addressable book, the matters where an organization in the chain between the AI and the harmed party owes the duty, not the market-size headline.",
};

export const scenarios = [
  {
    tag: "Professional services",
    headline: "An AI report reaches a client with fabricated citations.",
    loss: "$290K",
    standard: "Denied",
    agreement: "Professional and Operational Error",
    response: "responds to the third-party claim from inadequate oversight of AI output.",
  },
  {
    tag: "Customer operations",
    headline: "A chatbot promises a policy the firm won't honor.",
    loss: "Tribunal",
    standard: "Contested",
    agreement: "Professional and Operational Error",
    response: "covers misrepresentation by an AI system in the course of business.",
  },
  {
    tag: "Regulated decisions",
    headline: "An AI eligibility model draws a discrimination complaint.",
    loss: "Regulatory",
    standard: "Excluded",
    agreement: "Algorithmic Discrimination & AI Regulatory Proceedings",
    response: "fund defense and response where standard forms walk away.",
  },
  {
    tag: "Talent",
    headline: "An AI resume screener filters out older applicants.",
    loss: "$365K",
    standard: "Excluded",
    agreement: "Algorithmic Discrimination and Employment Practices",
    response: "responds to the disparate-impact claim.",
  },
  {
    tag: "Data security",
    headline: "An employee pastes client records into an unsanctioned tool.",
    loss: "Data loss",
    standard: "Denied",
    agreement: "Wrongful Disclosure of Protected Information",
    response: "covers exposure through ungoverned tools.",
  },
  {
    tag: "Marketing",
    headline: "An AI campaign reproduces a copyrighted photograph.",
    loss: "IP claim",
    standard: "Contested",
    agreement: "Content and Publication Liability",
    response: "responds to infringement in AI-generated content.",
  },
  {
    tag: "Healthcare",
    headline: "A clinical support model contributes to a delayed diagnosis.",
    loss: "Injury",
    standard: "Excluded",
    agreement: "Bodily Injury and Property Damage",
    response: "responds where AI output is relied upon in care.",
  },
  {
    tag: "Legal",
    headline: "An AI-drafted filing cites cases that don't exist.",
    loss: "Sanctions",
    standard: "Denied",
    agreement: "Professional and Operational Error",
    response: "responds to the resulting third-party claim.",
  },
  {
    tag: "Financial services",
    headline: "An AI credit model produces unlawful disparate impact.",
    loss: "Regulatory",
    standard: "Excluded",
    agreement: "Algorithmic Discrimination & AI Regulatory Proceedings",
    response: "fund the defense and regulatory response.",
  },
  {
    tag: "Security",
    headline: "Prompt injection makes an AI assistant leak files.",
    loss: "Breach",
    standard: "Contested",
    agreement: "Wrongful Disclosure of Protected Information",
    response: "responds to disclosure the assistant was manipulated into.",
  },
  {
    tag: "Communications",
    headline: "A customer AI chatbot defames a named person.",
    loss: "Defamation",
    standard: "Contested",
    agreement: "Content and Publication Liability",
    response: "responds to defamation in AI output.",
  },
];

export const underwritingSteps = [
  { title: "Through your broker", body: "Axiom is placed through brokers. Your broker brings the submission; there is no self-serve gate and no pre-bind audit." },
  { title: "Read-only connection", body: "Connect Google Workspace or Microsoft 365 read-only. Nothing to install, no agent, no access to your code." },
  { title: "Surface discovery", body: "We discover every AI model, agent, and shadow tool actually in use across your organization." },
  { title: "Risk scored", body: "Exposure is scored across nine behavioral risk dimensions, blending live telemetry with your application." },
  { title: "Continuous oversight", body: "Posture is re-checked continuously, with alerts on drift, so pricing reflects how you operate, not a one-time snapshot." },
];

// The nine behavioral risk dimensions of the Raptor Score (govern.axiomspecialty.com).
export const governanceDimensions = [
  "Shadow AI",
  "Data Exposure",
  "After-Hours Activity",
  "Privileged User AI",
  "Adoption Rate",
  "Use Case Risk",
  "Human Oversight",
  "Governance",
  "Vendor Compliance",
];

export const platformCapabilities = [
  {
    title: "See your AI surface",
    body: "Discover every AI model, agent, and shadow tool running through your organization, scored the way an underwriter would.",
  },
  {
    title: "Continuous oversight",
    body: "Live telemetry and scheduled syncs re-check your posture and raise alerts the moment risk drifts, not once a year.",
  },
  {
    title: "Multi-framework gap analysis",
    body: "Map your controls and gaps across the NIST AI RMF, ISO 42001, and the EU AI Act, with board-ready reports.",
  },
];

export const regulations = [
  { name: "NIST AI RMF", note: "The authoritative US framework for trustworthy AI, including the Generative AI Profile. Every Axiom governance signal maps to it." },
  { name: "NIST RFI", note: "NIST's Request for Information under the AI Executive Order, shaping the evaluation, red-teaming, and consensus standards firms will be measured against." },
  { name: "EU AI Act", note: "Fines up to €35M or 7% of global turnover." },
  { name: "SEC AI disclosure guidance", note: "Scrutiny of AI claims and governance in filings." },
  { name: "FTC Operation AI Comply", note: "Enforcement against deceptive or harmful AI practices." },
  { name: "ABA Formal Opinion 512", note: "Professional-responsibility duties for AI use by lawyers." },
];

/** AI-liability-specific FAQ (product-level). */
export const aiLiabilityFaq = [
  {
    q: "What does AI Liability actually cover?",
    a: "Affirmative coverage for the liability an organization carries for the AI it uses, whether that use is assistive or autonomous. It spans third-party claims across professional and operational error, algorithmic discrimination, wrongful disclosure, content and publication, and bodily injury; regulatory proceedings under AI and automated-decision laws; and, where an agent is operated, first-party autonomous execution loss.",
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
    a: "Any organization whose AI use touches third parties, roughly $5M to $500M in revenue, that maintains a documented AI governance framework, human-review protocols, and auditable tool-usage tracking. The exposure is most concentrated today in professional services, healthcare administration, financial advisory, and technology enterprises, though it is not restricted to those. The stronger your governance posture, the better your pricing.",
  },
  {
    q: "How does Axiom underwrite AI risk?",
    a: "Axiom is placed through brokers, with no pre-bind audit. We connect to your workspace read-only, discover the AI actually in use, and score exposure across nine behavioral risk dimensions, blended with your application and monitored continuously. Stronger posture earns a better risk class.",
  },
  {
    q: "Do I pay for the governance software?",
    a: "No. Policyholders receive Axiom's governance platform free at bind. It watches your AI use in real time, raises alerts when risk drifts, and maps your gaps across the NIST AI RMF, ISO 42001, and the EU AI Act.",
  },
];
