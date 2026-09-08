/**
 * AI Liability product content. Kept as data so the page reads as composition.
 * Structure follows Form AXM-AILL (Coverage Wording v1.04) and the Underwriting
 * Manual AXM-UW-001 v1.05: eight insuring agreements under one aggregate, with
 * Agreement 8 carrying five separately elected liability heads, 8A to 8E.
 *
 * Indicative premiums and rating drivers come from Buyer Scenarios & Coverage
 * Examples v1.04. They are demonstration outputs of the Rating Plan, not
 * quotations, and every figure is subject to wording, elections, verified
 * exposure and an approved ratebook.
 *
 * House style: no em dashes anywhere. Commas, colons and periods only.
 */
import {
  Package,
  Banknote,
  Truck,
  Briefcase,
  Megaphone,
  Users,
  Factory,
  ShoppingCart,
  Building2,
  Boxes,
  Landmark,
  Receipt,
  type LucideIcon,
} from "lucide-react";

export const lead = {
  subtitle:
    "Standalone cover for the AI your organization actually uses: a person working with a model, an automated decision system, and an agent that acts on its own.",
};

export interface Agreement {
  /** IA 1, or Head 8A for an elected head of Agreement 8. */
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
    label: "Agreements 1 to 5",
    party: "First party",
    trigger: "Pays on discovery. No claim required.",
    intro:
      "Five agreements that respond to your own loss the moment a responsible officer discovers it. No claimant, no lawsuit, no duty to defend. Each measures a different consequence of the same act: money moved, data destroyed, resources burned, the response you had to run, and the decisions you had to redo.",
    agreements: [
      {
        code: "IA 1",
        name: "Autonomous Execution Loss",
        description:
          "Direct financial loss when an agent executes a transaction or a binding commitment incorrectly. It reaches both acting beyond delegated authority and performing an authorized task wrongly.",
        trigger:
          "You discover the loss during the policy period, from an AI event on or after the retroactive date. Recoveries, avoided costs and retained value are deducted.",
        otherwise:
          "Crime needs a dishonest person and cyber needs a security failure. The agent was authorized and the instruction was yours.",
      },
      {
        code: "IA 2",
        name: "Model and Data Restoration",
        description:
          "Reasonable cost to restore or reconstruct data and system configurations the AI damaged, deleted or corrupted, back to substantially their prior state.",
        trigger:
          "Discovery, as for IA 1. Customer data is included only within the scheduled restoration scope, and retraining, replacement and betterment sit outside the grant unless endorsed.",
        otherwise:
          "Cyber restoration needs a security failure. Data is not tangible property, and vendors cap at fees paid.",
      },
      {
        code: "IA 3",
        name: "Resource Overrun",
        description:
          "Unintended excess compute, API and other scheduled metered charges, including accidental loops and repeated tool calls.",
        trigger:
          "Charges above the reasonable charge for the intended task, net of supplier credits and refunds. Sublimited by default.",
        otherwise:
          "Nothing answers. The bill is a real metered charge from your own vendor, and planned consumption was never the exposure.",
      },
      {
        code: "IA 4",
        name: "Event Response Costs",
        description:
          "External cost to investigate and contain a specific AI event, take legal advice on notification duties, and give the notifications required.",
        trigger:
          "An event affecting your own deployment. No third-party claim is required. Prior consent applies, with an emergency containment allowance.",
        otherwise:
          "A liability form defends a claim, and there is no claim yet. Cyber response needs a security incident.",
      },
      {
        code: "IA 5",
        name: "Wrongful Decision Remediation",
        description:
          "Cost to identify, review and correct affected decisions when a scheduled automated decision process produces materially erroneous or unlawfully discriminatory outcomes.",
        trigger:
          "Discovery of the obligation, for an identified affected population. Corrective work only, not compensation owed to claimants.",
        otherwise:
          "Nothing does. Liability forms pay the individual claimant, never the cost of redoing the population.",
      },
    ],
  },
  {
    key: "B",
    label: "Agreements 6 and 7",
    party: "Third party and regulatory",
    trigger: "Claims made and reported.",
    intro:
      "Two agreements that answer to someone outside the business: a claim for wrongful disclosure through output, and the cost of defending a regulatory proceeding within your elected scope. Defense costs erode the applicable sublimit and the aggregate unless an endorsement says otherwise.",
    agreements: [
      {
        code: "IA 6",
        name: "Wrongful Output Disclosure",
        description:
          "Damages and defense costs for a claim alleging wrongful disclosure of protected information caused by an AI event in covered use.",
        trigger:
          "A claim first made during the policy period. A network intrusion or security failure is expressly not required.",
        otherwise:
          "Cyber privacy needs unauthorized access or a security failure. An over-permissioned system breached nothing.",
      },
      {
        code: "IA 7",
        name: "AI Regulatory Proceedings",
        description:
          "Reasonable defense and investigation costs in a regulatory proceeding within the scope elected in your schedule.",
        trigger:
          "A formal investigation or proceeding first commenced during the period. Fines, penalties, taxes and mandated customer redress are not included.",
        otherwise:
          "A regulatory proceeding is not a claim for damages, and a general market inquiry is not a proceeding.",
      },
    ],
  },
  {
    key: "C",
    label: "Agreement 8",
    party: "Elected head by head",
    trigger: "Claims made, each head separately elected.",
    intro:
      "Agreement 8 carries five liability heads. Each is separately elected, separately scoped and separately attached: primary where you schedule and price it for the exposure, or difference in conditions against an identified gap in a named underlying policy. No head is included because another was purchased, and an absent, denied or exhausted underlying policy does not by itself create attachment.",
    agreements: [
      {
        code: "Head 8A",
        name: "Professional and Operational Error",
        description:
          "Third-party financial harm from erroneous AI output or execution in your scheduled business activities, including customer negligence claims.",
        trigger:
          "A claim where covered AI use materially contributed to the alleged wrong. Elected on a primary or difference in conditions basis.",
        otherwise:
          "Professional liability, but only with a client claimant, the insured activity, and no AI exclusion.",
      },
      {
        code: "Head 8B",
        name: "Automated Decision Liability",
        description:
          "Discrimination and other elected employment or consequential decision claims affecting employees, applicants or customers.",
        trigger:
          "A claim. Claimant damages here are separate from the IA 5 cost of correcting the decisions themselves.",
        otherwise:
          "Employment practices reaches the employee only, never the consumer, tenant or credit applicant.",
      },
      {
        code: "Head 8C",
        name: "Content and Publication",
        description:
          "Defamation and expressly elected intellectual property infringement arising from AI assisted content.",
        trigger:
          "A claim from what you published. Patent and trade secret claims are not automatically included, and require explicit election.",
        otherwise:
          "General liability advertising injury now carries the ISO exclusions. A vendor indemnity moves money, not the duty.",
      },
      {
        code: "Head 8D",
        name: "Bodily Injury and Property Damage",
        description:
          "Physical harm from expressly endorsed activities only, with a scheduled operating envelope and its own sublimit.",
        trigger:
          "A claim under the endorsed activity. This is not automatic safety critical, clinical or autonomous vehicle cover, and it requires specialist review.",
        otherwise:
          "General liability, now the widest US gap after the ISO exclusions took effect 1 January 2026.",
      },
      {
        code: "Head 8E",
        name: "Management and Fiduciary",
        description:
          "Claims concerning scheduled AI governance duties or representations, in specified insured capacities.",
        trigger:
          "A claim against a person in that capacity, with D&O and fiduciary coordination and securities treatment named in the endorsement.",
        otherwise:
          "D&O and fiduciary, where no AI exclusion is attached. Filed forms now exclude all three together.",
      },
    ],
  },
];

/**
 * Available at launch. Heads 8D and 8E are not automatic launch cover: both
 * need an express endorsement and specialist review.
 */
export const launchAgreements = [
  "IA 1",
  "IA 2",
  "IA 3",
  "IA 4",
  "IA 5",
  "IA 6",
  "IA 7",
  "Head 8A",
  "Head 8B",
  "Head 8C",
];

export interface Buyer {
  role: string;
  icon: LucideIcon;
  use: string;
  takes: string[];
  /** True where the buyer takes Agreements 1 to 7 as a standalone package. */
  standalone?: boolean;
  /** Indicative annual premium band from the Rating Plan. Not a quotation. */
  premium: string;
  /** The measured quantity that drives the price for this placement. */
  driver: string;
}

/**
 * The twelve representative placements from Buyer Scenarios & Coverage Examples
 * v1.04. Hypothetical, not customers. Premiums exclude the policy fee.
 */
export const buyers: Buyer[] = [
  { role: "Wholesale distributor", icon: Package, use: "Purchasing agents, ERP copilots and customer service tools.", takes: ["Head 8A", "Head 8B", "Head 8C"], standalone: true, premium: "USD 62,000 to 78,000", driver: "USD 40M authorized purchasing" },
  { role: "Payments business", icon: Banknote, use: "A treasury agent and internal reconciliation automation.", takes: ["IA 1", "IA 2", "IA 4"], premium: "USD 15,000 to 19,000", driver: "USD 20M authorized payments" },
  { role: "Freight brokerage", icon: Truck, use: "Booking agents and dispatch automation.", takes: ["IA 1", "IA 4", "Head 8A"], premium: "USD 24,000 to 30,000", driver: "USD 12M booking commitments" },
  { role: "Professional services group", icon: Briefcase, use: "Research, billing, client support and recruitment workflows.", takes: ["Head 8A", "Head 8B", "Head 8C"], standalone: true, premium: "USD 78,000 to 96,000", driver: "300,000 sensitive client records" },
  { role: "Marketing agency", icon: Megaphone, use: "Creative copilots and an external campaign agent.", takes: ["IA 2", "IA 3", "IA 4"], premium: "USD 10,000 minimum", driver: "USD 600,000 metered spend" },
  { role: "Employer", icon: Users, use: "A licensed screening tool and an internal scheduling agent.", takes: ["IA 4", "IA 5", "IA 7", "Head 8B"], premium: "USD 55,000 to 70,000", driver: "25,000 consequential decisions" },
  { role: "Manufacturer", icon: Factory, use: "Engineering assistants and a records scheduling agent.", takes: ["IA 2", "IA 4"], premium: "USD 10,000 to 13,000", driver: "180,000 writable planning records" },
  { role: "Retail group", icon: ShoppingCart, use: "Refund, stock, service and HR workflows.", takes: ["Head 8A", "Head 8B", "Head 8C"], standalone: true, premium: "USD 68,000 to 84,000", driver: "USD 30M refund authority" },
  { role: "Property manager", icon: Building2, use: "Leasing assistants, maintenance automation and a public chatbot.", takes: ["IA 4", "IA 6", "Head 8C"], premium: "USD 26,000 to 33,000", driver: "120,000 tenant records" },
  { role: "Logistics operator", icon: Boxes, use: "Scheduling agents and an AI controlled handling system.", takes: ["IA 1", "IA 4", "Head 8D"], premium: "USD 90,000 to 120,000", driver: "Endorsed handling activity" },
  { role: "Listed company", icon: Landmark, use: "Internal AI tools, with governance representations to investors.", takes: ["IA 4", "Head 8E"], premium: "USD 60,000 to 85,000", driver: "Scheduled insured capacities" },
  { role: "Outsourced services firm", icon: Receipt, use: "Document agents and billing automation in its own service delivery.", takes: ["IA 1", "IA 2", "IA 3", "IA 4", "IA 5", "IA 6", "Head 8A"], premium: "USD 52,000 to 66,000", driver: "350,000 client records" },
];

export const underwriting = {
  intro:
    "An application and exposure schedule, plus a check of public sources. No audit, no penetration test, no model evaluation, and nothing installed in your environment. Evidence is requested only where a material fact is unresolved and resolving it would change the decision.",
  points: [
    {
      title: "Through your broker",
      body: "Placed through appointed surplus lines brokers. Your broker brings the application; there is no self serve gate and no pre bind audit.",
    },
    {
      title: "Declare, then schedule what matters",
      body: "You declare your AI use, then schedule the workflows that can move money, change records, disclose or publish, make consequential decisions, spend metered resources or control equipment. Low consequence use is declared by category, not scheduled one tool at a time.",
    },
    {
      title: "Evidence only where it changes the answer",
      body: "Where a permission, cap, approval or stopping control is unclear and the answer would change the decision, you get one consolidated request naming the workflow, the fact needed and the decision being held. We do not ask for every available log.",
    },
    {
      title: "A fast, plain answer",
      body: "An indication within five business days of a complete submission, with the reason and what is still outstanding. A hard decline comes within one business day, with the reason.",
    },
  ],
};

export const governance = {
  eyebrow: "Axiom Governance · included free",
  title: "Included with every policy. Never a condition of coverage.",
  subtitle:
    "We ask which governance tooling you use, and we do not require any particular one. Connecting Axiom Governance is not a condition of cover and never determines whether a claim is paid. What it does is make facts about your AI use cheap to establish, which is what shortens underwriting.",
  points: [
    {
      title: "Not a condition, and not a warranty",
      body: "Software enrollment is never an automatic condition of coverage, and an application answer does not by itself become a warranty. Any control that is a condition must be specific, measurable and expressly endorsed.",
    },
    {
      title: "Any tooling qualifies",
      body: "What matters is the capability rather than the vendor: an inventory of AI use, visible permissions, attribution to an actor, and a retained window of activity. Ours, another provider's, or one you built, all count the same.",
    },
    {
      title: "It buys a better decision, not a discount",
      body: "Continuous telemetry narrows the uncertainty around what your agents can do and how fast they can do it. Narrower uncertainty means fewer referrals and a faster answer, and that benefit is real from the first submission.",
    },
  ],
};

export const regulations = [
  { name: "ISO GenAI exclusions", note: "CG 40 47, CG 40 48 and CG 35 08, effective 1 January 2026, on the general liability line every commercial buyer holds." },
  { name: "EU AI Act", note: "High-risk obligations phasing in, with fines up to EUR 35M or 7% of global turnover." },
  { name: "US state AI statutes", note: "Automated-decision and AI-transparency laws, tracked on the AI Statute Schedule attached to each policy and maintained quarterly." },
  { name: "NAIC AI model bulletin", note: "Adopted by roughly half of US states, classifying automated underwriting, rating and claim decisions in its highest risk bracket." },
  { name: "SEC AI disclosure scrutiny", note: "AI-disclosure securities actions were pleaded in the first half of 2026, reaching directors and officers cover." },
  { name: "ABA Formal Opinion 512", note: "Professional-responsibility duties for AI use by lawyers." },
];

/** AI-liability-specific FAQ (product-level). No em dashes. */
export const aiLiabilityFaq = [
  {
    q: "What does AI Liability actually cover?",
    a: "It covers the AI your organization uses in its work and operations, whether that is a person working with a model, an automated decision system, or an autonomous agent. Eight insuring agreements under one aggregate. Agreements 1 to 5 pay your own loss on discovery, with no claim required: money an agent moved, data it destroyed or corrupted, metered resources it burned, the cost of investigating and containing the event, and the cost of reviewing and correcting decisions it got wrong. Agreement 6 covers claims for wrongful disclosure through output and Agreement 7 covers the cost of defending a regulatory proceeding. Agreement 8 adds third-party AI liability across five separately elected heads: professional and operational error, automated decisions, content and publication, bodily injury and property damage, and management and fiduciary.",
  },
  {
    q: "What is deliberately not covered?",
    a: "Two things, and both are a stated underwriting position rather than an oversight. First, loss arising solely from an external AI supplier being unavailable, out or degraded. Second, lost revenue, business interruption, lost opportunity, reputation and failure to achieve promised business results. Those are exposures where many insureds lose at the same moment from the same cause, and we do not write correlated provider failure until it can be modeled against an adequate aggregate. Neither exclusion removes cover for an otherwise covered erroneous action or damaged data merely because an external model contributed to it. We also do not cover liability from developing or supplying AI products for someone else to deploy: we insure the deployer.",
  },
  {
    q: "Why does my existing tower not respond?",
    a: "The policies you own were built for a particular claimant, class, trigger and limit, and a large part of the AI exposure misses on all four. Cyber needs a security failure or an outage. Crime needs a dishonest person. Property needs physical damage. E&O needs a third-party claim from a client. An agent that works exactly as built and does the wrong thing triggers none of them, and five of our eight agreements are not claims at all.",
  },
  {
    q: "How does Agreement 8 attach to what I already carry?",
    a: "Head by head. Where your expiring policy for that line carries an AI exclusion, the head is elected as primary and scheduled for that exposure. Where it does not, the head attaches as difference in conditions against an identified restriction in a named underlying policy, and the schedule must state the underlying class, insurer, form, period, limit and the exact exclusion addressed. The election is made line by line, because a client can hold an exclusion on general liability, none on employment practices and a sublimit on professional liability, all in the same tower. An underlying denial, lapse, insolvency or exhausted limit does not by itself establish attachment.",
  },
  {
    q: "Who is eligible?",
    a: "The organization that deploys AI in what it owes to someone else or in running its own operations. Insured revenue up to USD 250M sits within standard authority and up to USD 1bn on senior referral. Industry is a rating input rather than an eligibility test, though some activities are restricted: clinical decision-making, safety-critical machinery and autonomous vehicles need an activity-specific endorsement and specialist review, and unregulated financial trading sits outside appetite. We insure the business that deploys AI, not the business that supplies a system a third party deploys for itself.",
  },
  {
    q: "How does Axiom underwrite AI risk?",
    a: "By measuring a loss boundary rather than scoring you. For each material workflow we establish what one action can do, how many actions can happen per unit of time, and how long it would take to detect and actually stop it. Those three give the exposure inside the containment window, which the coverage modules then value into a gross loss scenario and a net figure after supported recoveries. A cap that resets faster than your stopping time does not bound the event, and a kill switch is not containment unless someone can detect the problem and operate it in time. Where a number cannot be established we ask one targeted question rather than assuming zero or adding an arbitrary loading.",
  },
  {
    q: "Is the governance software included, and is it required?",
    a: "Axiom Governance is included free with every policy, and it is never a condition of coverage. We ask which governance tooling you use and we accept any of them, because what matters is the capability rather than the vendor: an inventory of your AI use, visible permissions, attribution to an actor and a retained window of activity. You can evidence those from your own configuration and logs, from a written attestation by the supplier of the agent, or from an accreditation. Tooling that gives us those facts narrows the uncertainty in your file, which means fewer referrals and a faster answer.",
  },
];
