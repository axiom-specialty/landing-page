/**
 * AI Liability product content. Kept as data so the page reads as composition.
 * Structure follows Form AXM-AIL-001 and the Coverage Guide (AXM-CG-001): ten
 * insuring agreements in three sections under one aggregate. IA-11 is reserved
 * and carries no coverage, so it is never displayed.
 *
 * House style: no em dashes anywhere. Commas, colons and periods only.
 */
import {
  Scale,
  Users,
  Landmark,
  Stethoscope,
  Truck,
  Receipt,
  ShieldCheck,
  Building2,
  Megaphone,
  ShoppingCart,
  Calculator,
  PencilRuler,
  Banknote,
  Newspaper,
  Factory,
  type LucideIcon,
} from "lucide-react";

export interface Agreement {
  /** IA-1, or IA-10(a) for a head of IA-10. */
  code: string;
  name: string;
  /** One-line plain description of what it covers. */
  description: string;
  /** What has to happen before it answers. */
  trigger: string;
  /** Which policy the buyer already owns would otherwise respond, and why it does not. */
  otherwise: string;
}

export interface Section {
  key: "A" | "B" | "C";
  label: string;
  party: string;
  trigger: string;
  intro: string;
  agreements: Agreement[];
}

export const sections: Section[] = [
  {
    key: "A",
    label: "Section A",
    party: "First party",
    trigger: "Pays on discovery. No claim required.",
    intro:
      "Seven agreements that respond to your own loss the moment you find it. No claimant, no lawsuit, no duty to defend. The half of the exposure no policy you already own can reach.",
    agreements: [
      {
        code: "IA-1",
        name: "Autonomous Execution Loss",
        description: "Money your agent moved, committed, or lost, net of what you kept or recovered.",
        trigger: "A declared agent acts outside its authority, against its instruction, or through manipulation. Departure, not outcome.",
        otherwise: "Crime needs a dishonest person; cyber needs a breach. The agent is authorized and the instruction is yours.",
      },
      {
        code: "IA-2",
        name: "Model and Data Restoration",
        description: "Putting back data, code, weights, or configuration the agent deleted or corrupted.",
        trigger: "The same three-limb agent trigger as IA-1, discovered by you.",
        otherwise: "Cyber restoration needs a security failure. Data is not tangible property, and vendors cap at fees paid.",
      },
      {
        code: "IA-3",
        name: "Resource Overrun",
        description: "Compute and inference spend a declared agent ran past a limit you set.",
        trigger: "Consumption past your configured limit. No limit set, no cover.",
        otherwise: "Nothing answers. The bill is a real, metered charge from your own vendor.",
      },
      {
        code: "IA-4",
        name: "Event Response Costs",
        description: "Finding out what happened and correcting wrong output, before anyone claims.",
        trigger: "Your awareness of an event, with our prior consent. Carried on every policy.",
        otherwise: "A liability form defends a claim, and there is no claim yet. Cyber response needs a security incident.",
      },
      {
        code: "IA-5",
        name: "Contingent AI Supply Failure",
        description: "Lost profit and extra expense when a declared vendor fails you, plus migration.",
        trigger: "A provider event: a withdrawn or changed model, a ceased service, or a lost license.",
        otherwise: "Cyber contingent interruption needs a breach or outage; a model deprecated on notice is neither.",
      },
      {
        code: "IA-6",
        name: "Autonomous Operations Interruption",
        description: "Lost profit and extra expense while a declared agent is switched off.",
        trigger: "You suspend it after a covered act, or a regulator, court, or we require it.",
        otherwise: "Cyber and property interruption need an unplanned outage. A deliberate suspension is the opposite.",
      },
      {
        code: "IA-7",
        name: "Wrongful Decision Remediation",
        description: "The scheduled cost of re-determining a population of decisions you must redo.",
        trigger: "Discovery of the obligation to re-determine, from a statute, regulator, court, or your own policy.",
        otherwise: "Nothing does. Liability forms pay the individual, not the cost of redoing the population.",
      },
    ],
  },
  {
    key: "B",
    label: "Section B",
    party: "Third party",
    trigger: "Claims made and reported.",
    intro: "Two third-party agreements, with a duty to defend and defense costs inside the limit.",
    agreements: [
      {
        code: "IA-8",
        name: "Wrongful Disclosure through Output",
        description: "Damages and defense when your system discloses protected information through its output.",
        trigger: "A claim, whether or not any access was unauthorized or the system held valid credentials.",
        otherwise: "Cyber privacy needs unauthorized access or a security failure. An over-permissioned system breached nothing.",
      },
      {
        code: "IA-9",
        name: "AI Regulatory Proceedings",
        description: "Defense, insurable fines, and consumer-complaint response, under a listed AI statute.",
        trigger: "A formal investigation or enforcement action under a scheduled statute.",
        otherwise: "A regulatory proceeding is not a claim for damages. Employment practices reaches an employment charge, not this.",
      },
    ],
  },
  {
    key: "C",
    label: "Section C",
    party: "Difference in conditions",
    trigger: "Claims made, attached head by head.",
    intro:
      "IA-10 carries five heads, each separately purchased and attached. A head sits in front of your expiring policy as primary where that policy carries an AI exclusion, and behind it as difference in conditions where it does not. You pay for the gap you actually have.",
    agreements: [
      {
        code: "IA-10(a)",
        name: "Professional and Operational Error",
        description: "Third-party loss from wrong output or an autonomous act relied on in your business.",
        trigger: "A claim. No requirement that anyone failed to check, or that anything was breached.",
        otherwise: "Professional liability, but only with a client claimant, the insured activity, and no AI exclusion.",
      },
      {
        code: "IA-10(b)",
        name: "Automated Decision Liability",
        description: "Discrimination and employment or consumer wrongs from a system's part in a decision, ML or generative.",
        trigger: "Participation in the decision, not authorship. A model that narrows a shortlist has participated.",
        otherwise: "Employment practices reaches the employee only, never the consumer, tenant, or credit applicant.",
      },
      {
        code: "IA-10(c)",
        name: "Content and Publication",
        description: "IP infringement, defamation, and publicity or privacy, from your output or how you trained.",
        trigger: "A claim, from what you published or what you did to build the system.",
        otherwise: "GL advertising injury now carries the ISO exclusions. A vendor indemnity moves money, not the duty.",
      },
      {
        code: "IA-10(d)",
        name: "Bodily Injury and Property Damage",
        description: "Third-party injury or damage from reliance on output or an autonomous act. On the ordinary submission.",
        trigger: "A claim. A clinical claim needs a licensed person's review before the output is relied on.",
        otherwise: "General liability, now the widest US gap after the ISO exclusions took effect 1 January 2026.",
      },
      {
        code: "IA-10(e)",
        name: "Management and Fiduciary",
        description: "Claims against an insured person for AI oversight, disclosures, or benefit-plan administration.",
        trigger: "A claim against a person in that capacity, excess of your D&O and fiduciary policies.",
        otherwise: "D&O and fiduciary, where no AI exclusion is attached. Filed forms now exclude all three together.",
      },
    ],
  },
];

/** Agreements available at launch: IA-10 and its five heads, plus four more. */
export const launchAgreements = ["IA-1", "IA-4", "IA-8", "IA-9", "IA-10(a)", "IA-10(b)", "IA-10(c)", "IA-10(d)", "IA-10(e)"];

export interface Buyer {
  role: string;
  icon: LucideIcon;
  use: string;
  takes: string[];
  /** True where the buyer typically takes the whole policy as a standalone. */
  standalone?: boolean;
  /** Illustrative annual premium, within the worked-scenario range on the form. */
  premium: string;
  /** Illustrative estimated exposure the cover is bought against. */
  exposure: string;
}

/**
 * Illustrative buyer profiles. Hypothetical, not customers. Each shows how a
 * different use of AI maps to the agreements a buyer tends to select. Premiums
 * and exposures are illustrative only.
 */
export const buyers: Buyer[] = [
  { role: "Law firm", icon: Scale, use: "Associates draft and research with models.", takes: ["IA-10(a)", "IA-8", "IA-4"], premium: "USD 14,200", exposure: "USD 1.2M" },
  { role: "Staffing platform", icon: Users, use: "A model screens and ranks applicants.", takes: ["IA-10(b)", "IA-7", "IA-9"], premium: "USD 28,500", exposure: "USD 2.5M" },
  { role: "Consumer lender", icon: Landmark, use: "Automated models decide credit.", takes: [], standalone: true, premium: "USD 34,800", exposure: "USD 3.5M" },
  { role: "Health system", icon: Stethoscope, use: "Clinical decision support triages and doses.", takes: [], standalone: true, premium: "USD 41,200", exposure: "USD 4M" },
  { role: "Logistics operator", icon: Truck, use: "An agent books carriers and commits rates.", takes: [], standalone: true, premium: "USD 22,600", exposure: "USD 1.8M" },
  { role: "Finance team", icon: Receipt, use: "An agent reconciles and pays invoices.", takes: ["IA-1", "IA-2", "IA-4"], premium: "USD 18,400", exposure: "USD 1.5M" },
  { role: "Insurance MGA", icon: ShieldCheck, use: "An agent triages and adjudicates claims.", takes: [], standalone: true, premium: "USD 24,900", exposure: "USD 2M" },
  { role: "Property manager", icon: Building2, use: "A model screens prospective tenants.", takes: ["IA-10(b)", "IA-9"], premium: "USD 12,700", exposure: "USD 900K" },
  { role: "Marketing agency", icon: Megaphone, use: "Generative tools produce campaigns.", takes: ["IA-10(c)", "IA-4"], premium: "USD 11,300", exposure: "USD 750K" },
  { role: "Retailer", icon: ShoppingCart, use: "A pricing agent sets prices in real time.", takes: ["IA-1", "IA-10(b)", "IA-3"], premium: "USD 16,800", exposure: "USD 1.1M" },
  { role: "Accounting firm", icon: Calculator, use: "AI drafts filings and reconciles books.", takes: ["IA-10(a)", "IA-8"], premium: "USD 13,500", exposure: "USD 1M" },
  { role: "Engineering firm", icon: PencilRuler, use: "AI generates specifications and drawings.", takes: ["IA-10(d)", "IA-10(a)"], premium: "USD 26,300", exposure: "USD 2.2M" },
  { role: "Wealth advisor", icon: Banknote, use: "AI drafts advice and plan allocations.", takes: ["IA-10(a)", "IA-10(e)", "IA-9"], premium: "USD 19,700", exposure: "USD 1.6M" },
  { role: "Publisher", icon: Newspaper, use: "AI writes and edits published articles.", takes: ["IA-10(c)", "IA-8"], premium: "USD 15,400", exposure: "USD 1M" },
  { role: "Manufacturer", icon: Factory, use: "A vendor model runs quality inspection on the line.", takes: ["IA-10(d)", "IA-5", "IA-6"], premium: "USD 29,600", exposure: "USD 2.8M" },
];

export const underwriting = {
  intro:
    "An Application and a public-record check. No audit, no penetration test, no model evaluation, and nothing installed in your environment to price the risk. Four conditions precedent and no others, and failing one affects only the claim it relates to.",
  points: [
    {
      title: "Through your broker",
      body: "Placed through appointed surplus lines brokers. Your broker brings the Application; there is no self-serve gate and no pre-bind audit.",
    },
    {
      title: "Declare, do not inventory",
      body: "You select the categories of use you want covered and schedule only the systems that can do real damage: agents, high-severity systems, and automated decision systems. A spreadsheet in the same columns is accepted.",
    },
    {
      title: "A fast, plain answer",
      body: "An indication within five business days of a complete submission. A hard decline within one business day, with the reason.",
    },
  ],
};

export const governance = {
  eyebrow: "Axiom Governance · included free",
  title: "Free governance software, in place at deployment",
  subtitle:
    "Every policy includes Axiom Governance, our governance software, at no cost. For any agent you run, qualifying governance is a condition of coverage: a documented authorization scope, timestamped logging, and a person who can halt it. The software puts all three in place at deployment, so both sides can trust the AI is governed and its risk mitigated.",
  points: [
    {
      title: "Free with every policy",
      body: "You do not pay for it, and it is included the moment you bind. It reports factual observations only, and never scores or certifies your systems.",
    },
    {
      title: "In place before an agent runs",
      body: "Qualifying governance is required at deployment for any agent: documented authority, logging, and a kill switch. The software puts them in place and evidences them for a claim.",
    },
    {
      title: "Earns a retention credit",
      body: "Staying connected through a policy year earns the retention credit stated in your Declarations at renewal. Axiom Accreditation, a separate optional evaluation, may earn a further rating credit.",
    },
  ],
};

export const regulations = [
  { name: "ISO GenAI exclusions", note: "CG 40 47, CG 40 48 and CG 35 08, effective 1 January 2026, on the general liability line every commercial buyer holds." },
  { name: "EU AI Act", note: "High-risk obligations phasing in, with fines up to EUR 35M or 7% of global turnover." },
  { name: "US state AI statutes", note: "Automated-decision and AI-transparency laws, tracked on the AI Statute Schedule attached to each policy and maintained quarterly." },
  { name: "SEC AI disclosure scrutiny", note: "AI-disclosure securities actions were pleaded in the first half of 2026, reaching directors and officers cover." },
  { name: "FTC enforcement", note: "Action against deceptive or harmful AI practices under existing consumer-protection authority." },
  { name: "ABA Formal Opinion 512", note: "Professional-responsibility duties for AI use by lawyers." },
];

/** AI-liability-specific FAQ (product-level). No em dashes. */
export const aiLiabilityFaq = [
  {
    q: "What does AI Liability actually cover?",
    a: "It covers the AI your organization uses in its work and operations, whether that is a person working with a model, an automated decision system, or an autonomous agent. Ten insuring agreements in three sections under one aggregate. Seven first-party agreements pay your own loss on discovery, with no claim required: money an agent moved, data it destroyed, compute it burned, profit lost while it is off, and the cost of re-determining decisions. Two third-party agreements cover wrongful disclosure through output and AI regulatory proceedings. IA-10 adds third-party AI liability across five separately elected heads, reaching wrong output relied on in your business, automated decisions, published content, bodily injury, and management liability.",
  },
  {
    q: "Why does my existing tower not respond?",
    a: "The policies you own were built for a particular claimant, class, trigger, and limit, and a large part of the AI exposure misses on all four. Cyber needs a security failure or an outage. Crime needs a dishonest person. Property needs physical damage. E&O needs a third-party claim from a client. An agent that works exactly as built and does the wrong thing triggers none of them, and seven of our agreements are not claims at all.",
  },
  {
    q: "How does IA-10 attach to what I already carry?",
    a: "Head by head. Where your expiring policy for that line carries an AI exclusion, the head sits in front of it as primary. Where it does not, the head sits behind it as difference in conditions. The election is made line by line, because a client can hold an exclusion on general liability, none on employment practices, and a sublimit on professional liability, all in the same tower.",
  },
  {
    q: "Who is eligible?",
    a: "The organization that uses AI in what it owes to someone else or in running its own operations. Any industry: the rated table spans sixteen sectors down to wholesale and agriculture, and industry is a rating input, never an eligibility test. Eligible revenue runs USD 5M to 250M, with the sweet spot USD 10M to 100M. We insure the business that uses AI, not the business that supplies a system a third party deploys for itself.",
  },
  {
    q: "How does Axiom underwrite AI risk?",
    a: "From an Application and a public-record check. No audit, no penetration test, no model evaluation, and no software installed. You declare categories of use and schedule the systems that can do real damage. An indication follows within five business days of a complete submission.",
  },
  {
    q: "Is the governance software included, and is it required?",
    a: "Axiom Governance is included free with every policy. For any agent you run, qualifying governance is a condition of coverage: a documented authorization scope, logging, and a person who can halt it. The free software puts those in place at deployment and evidences them for a claim, and staying connected earns a retention credit at renewal. Axiom Accreditation, a separate optional evaluation, may earn a further rating credit.",
  },
];
