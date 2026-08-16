/**
 * AI Liability product content. Kept as data so the page reads as composition.
 * Structure follows Form AXM-AIL-001 and the Coverage Guide (AXM-CG-001): ten
 * insuring agreements in three sections under one aggregate. IA-11 is reserved
 * and carries no coverage, so it is never displayed.
 *
 * House style: no em dashes anywhere. Commas, colons and periods only.
 */

export const lead = {
  subtitle:
    "Standalone cover for the AI your organization actually uses: a person working with a model, an automated decision system, and an agent that acts on its own. Ten insuring agreements in three sections under one aggregate. Seven are first-party and pay your own loss on discovery, with no claim required, for the exposure no policy you own can reach. Three are third-party, and IA-10 attaches to the tower you already carry head by head.",
  pullQuote:
    "Cyber pays when the system stops working. This pays when the system works perfectly and does the wrong thing.",
};

export interface Agreement {
  /** IA-1, or IA-10(a) for a head of IA-10. */
  code: string;
  name: string;
  /** One-sentence plain description of what it covers. */
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
      "Seven agreements that respond to your own loss the moment you find it. No claimant, no lawsuit, no duty to defend. This is the half of the exposure no policy you already own can reach, because a policy triggered by a claim has nothing to answer when there is no claimant.",
    agreements: [
      {
        code: "IA-1",
        name: "Autonomous Execution Loss",
        description:
          "Money your agent moved, committed, or lost, net of anything you kept or recovered, and the contractual charges that follow.",
        trigger:
          "A declared agent acted outside its authorization, or inside it but against the instruction or parameters it was given, or through a manipulation event. The test is departure, not outcome, discovered by you.",
        otherwise:
          "Commercial crime comes closest and all three limbs fail: the agent is not a dishonest employee, its instruction is genuinely yours, and its access is authorized. Cyber needs a breach or an outage, and nothing broke.",
      },
      {
        code: "IA-2",
        name: "Model and Data Restoration",
        description:
          "The cost of putting back data, code, model weights, or configuration the agent deleted, overwrote, or corrupted, to the state it stood in just before.",
        trigger: "The same three-limb agent trigger as IA-1, discovered by you.",
        otherwise:
          "Cyber restoration is keyed to a security failure; your own authorized system did this. Electronic data is not tangible property, so property does not reach it, and most vendor contracts cap at fees paid.",
      },
      {
        code: "IA-3",
        name: "Resource Overrun",
        description:
          "Compute, inference, and interface spend a declared agent ran past a limit you had configured.",
        trigger:
          "Consumption past your configured limit, or the result of a manipulation event. If you configured no limit, this does not respond, and that is the first question an adjuster asks.",
        otherwise:
          "Nothing in the market answers it. The invoice is a real, metered bill from your own vendor for services genuinely consumed, so there is no breach to claim and no dishonest person to name.",
      },
      {
        code: "IA-4",
        name: "Event Response Costs",
        description:
          "Before anyone claims, the cost of finding out what happened, advice on whether you must notify, giving notice, and correcting or withdrawing output that was wrong.",
        trigger:
          "Your awareness of a wrongful AI act or other covered-system event, with our prior consent. It is carried on every policy rather than sold separately.",
        otherwise:
          "A liability form pays to defend a claim, and by definition there is no claim yet. Cyber incident response is keyed to a security incident, and an over-permissioned system or a stale configuration is not one.",
      },
      {
        code: "IA-5",
        name: "Contingent AI Supply Failure",
        description:
          "Your lost net profit and extra expense when a declared vendor fails you, including migration and re-validation onto an alternative.",
        trigger:
          "A provider event affecting a declared vendor, such as a withdrawn or changed model, a ceased service, or a lost licence, to the extent your contract does not make you whole. No wrongful act is required.",
        otherwise:
          "Cyber contingent business interruption needs a security failure or an outage, and a model deprecated on notice is neither. Property needs physical damage, and vendor contracts mostly cap at fees paid.",
      },
      {
        code: "IA-6",
        name: "Autonomous Operations Interruption",
        description:
          "Your lost net profit and extra expense while a declared agent is suspended, halted, or restricted.",
        trigger:
          "You suspended the agent in reasonable mitigation after a covered act, a regulator or court required it, or we directed it in writing.",
        otherwise:
          "Cyber and property business interruption require an unplanned outage or physical damage. A deliberate suspension is the opposite of an unplanned outage: the system could have kept running and the safe course was to stop it.",
      },
      {
        code: "IA-7",
        name: "Wrongful Decision Remediation",
        description:
          "The scheduled cost of re-determining a population of decisions a covered system produced that you are required to redo, withdraw, correct, or notify.",
        trigger:
          "Discovery of the obligation to re-determine, from a statute, a regulator, a court, or your own prior written policy. Measured as a scheduled cost times the number of affected decisions.",
        otherwise:
          "Nothing does, and it is the clearest gap on the form. Liability forms pay the individual who sues; the cost of redoing the population sits outside Damages on every form in the market.",
      },
    ],
  },
  {
    key: "B",
    label: "Section B",
    party: "Third party",
    trigger: "Claims made and reported.",
    intro:
      "Two third-party agreements, with a duty to defend and defence costs inside the limit.",
    agreements: [
      {
        code: "IA-8",
        name: "Wrongful Disclosure through Output",
        description:
          "Damages and defence on a claim that your system disclosed protected information through its output, plus a separately sublimited grant for per-record statutory damages.",
        trigger:
          "A claim first made against you, whether or not there was any unauthorized access or failure of security, and whether or not the system held valid credentials.",
        otherwise:
          "Cyber privacy is keyed to unauthorized access or a security failure. A retrieval system with over-broad permissions surfacing a document breached nothing and used every credential it was issued.",
      },
      {
        code: "IA-9",
        name: "AI Regulatory Proceedings",
        description:
          "Defence, insurable fines and penalties, and consumer-complaint response costs, on a proceeding alleging your AI use violated a listed AI statute.",
        trigger:
          "A formal investigation, civil investigative demand, subpoena, or enforcement action under a statute on the AI Statute Schedule attached to your policy.",
        otherwise:
          "A regulatory proceeding is not a claim for damages, and most forms reach it only by a bought extension. Employment practices reaches an employment charge, not a lending, tenancy, or insurance proceeding about a tool.",
      },
    ],
  },
  {
    key: "C",
    label: "Section C",
    party: "Difference in conditions",
    trigger: "Claims made and reported, attached head by head.",
    intro:
      "IA-10 carries five heads, each separately purchased and separately attached. A head sits in front of your expiring policy as primary where that policy carries an AI exclusion, and behind it as difference in conditions where it does not. You pay for the gap you actually have, line by line.",
    agreements: [
      {
        code: "IA-10(a)",
        name: "Professional and Operational Error",
        description:
          "Third-party financial loss caused by output that was wrong, or by an autonomous act outside the authority you granted, relied on in your business.",
        trigger:
          "A claim. There is no requirement that anyone failed to check the output, and none that anything was breached.",
        otherwise:
          "Professional liability, but only where you buy it, the claimant is a client, the activity is the insured one, and no AI exclusion is attached. Those four conditions hold less often than a buyer assumes.",
      },
      {
        code: "IA-10(b)",
        name: "Automated Decision Liability",
        description:
          "Claims that a covered system's participation in an employment or consequential decision produced discrimination, disparate impact, or another employment or consumer wrong, whether the system is generative or conventional machine learning.",
        trigger:
          "Participation in the decision, not authorship of it. A scoring or ranking model that narrows a shortlist has participated, and so has a generative system that drafts the assessment a person signs.",
        otherwise:
          "Employment practices reaches the employee and applicant only. It does not reach the consumer, the credit applicant, or the tenant at all, and about half the exposure here has one of those as the claimant.",
      },
      {
        code: "IA-10(c)",
        name: "Content and Publication",
        description:
          "Copyright, trademark, and moral-right infringement, defamation, and violation of publicity or privacy, arising from your published output or from how the system was trained or indexed.",
        trigger: "A claim, by either route: what you published, or what you did to build the system.",
        otherwise:
          "General liability advertising injury, already narrow for generated content and now carrying the ISO exclusions. Media liability, which most non-media firms do not buy. A vendor indemnity moves money and does not move the duty.",
      },
      {
        code: "IA-10(d)",
        name: "Bodily Injury and Property Damage",
        description:
          "Third-party bodily injury or property damage caused by reliance on output or by an autonomous act, such as clinical decision support, dosing, engineering specification, or systems that instruct physical equipment. On the ordinary submission, not gated to referral.",
        trigger:
          "A claim. A clinical claim requires that a person holding the relevant professional licence reviewed and approved the output before it was relied on.",
        otherwise:
          "General liability, now the widest gap in the US market. The ISO exclusions CG 40 47, CG 40 48, and CG 35 08 took effect on 1 January 2026, on the line every commercial buyer holds.",
      },
      {
        code: "IA-10(e)",
        name: "Management and Fiduciary",
        description:
          "Claims against an insured person for a wrongful act in the oversight of AI, in disclosures about the organization's use of it, or in administering a benefit plan a covered system participates in.",
        trigger:
          "A claim against a person in that capacity. It sits excess of and difference in conditions to the organization's directors and officers and fiduciary policies.",
        otherwise:
          "Directors and officers and fiduciary cover, where no AI exclusion is attached. Filed forms now reach directors and officers, errors and omissions, and fiduciary together with a single absolute exclusion.",
      },
    ],
  },
];

export const policySnapshot = [
  { label: "Aggregate limit", value: "USD 2M / 3M / 5M", sub: "shared, one aggregate" },
  { label: "Retentions", value: "USD 50K / 100K / 250K", sub: "defence inside the limit" },
  { label: "Minimum premium", value: "USD 9,500", sub: "worked scenarios 10,400 to 45,900" },
  { label: "Paper", value: "Surplus lines", sub: "non-admitted" },
];

export const underwriting = {
  intro:
    "An Application and a public-record check. No audit, no penetration test, no model evaluation, and no software installed in your environment. Four conditions precedent and no others, and failing one affects only the claim it relates to.",
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
  eyebrow: "Axiom Governance",
  title: "Voluntary monitoring, never a condition of cover",
  subtitle:
    "You may connect your environment to Axiom Governance, a monitoring platform operated by the managing general agent. It reports factual observations only. It does not score, certify, or opine on any system, and nothing it observes is ever used to deny a claim.",
  points: [
    {
      title: "Optional, and switchable off",
      body: "It does not affect your rate, premium, or retention at inception, and it can be switched off at any time. Coverage is never conditioned on connecting it.",
    },
    {
      title: "Earns a retention credit",
      body: "Staying connected through a policy year earns the retention credit stated in your Declarations at the following renewal.",
    },
    {
      title: "Observation, not opinion",
      body: "It records what is happening, not a judgment about safety. Axiom Accreditation, a separate and optional evaluation, may earn a rating credit and is likewise never required.",
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
    q: "Do I have to connect any software or get certified?",
    a: "No. Axiom Governance, our monitoring platform, is voluntary and can be switched off at any time; connecting it earns a retention credit at renewal and is never a condition of cover. Axiom Accreditation, a separate optional evaluation, may earn a rating credit. Neither is required, and holding one does not vary what is covered.",
  },
];
