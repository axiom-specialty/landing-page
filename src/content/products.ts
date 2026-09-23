/**
 * Product taxonomy, the single source of truth for the Solutions mega-menu,
 * the coming-soon router, and any product listing on the site.
 *
 * status drives the status pill label; routing is by `href`, not status.
 *   "available"      → "Live"
 *   "alpha"          → "Alpha"
 *   "in-development" → "In development"
 *   "development"    → "Soon" (placeholder line, routed to /coming-soon/:slug)
 */

export type ProductStatus = "available" | "alpha" | "in-development" | "development";

/**
 * A content section on a product's own page. `steps` renders as a numbered
 * flow for a how-it-works sequence; `points` renders as plain cards.
 */
export interface DetailSection {
  title: string;
  intro?: string;
  steps?: { title: string; body: string }[];
  points?: { title: string; body: string }[];
  /** Two columns of plain statements, for a this-not-that contrast. */
  contrast?: { title: string; items: string[] }[];
  /**
   * A coverage schedule, rendered as a table. `basis` uses the same vocabulary
   * as the AI Liability form: First party, Third party, Regulatory, DIC.
   */
  coverage?: { name: string; covers: string; basis: string[] }[];
  cta?: { label: string; href: string };
  /** Small print under the section. */
  note?: string;
}

export interface Product {
  slug: string;
  name: string;
  /** One-line menu description. */
  blurb: string;
  /**
   * Label for the Solutions menu, where the group heading already supplies the
   * context. Defaults to `name`, which is what coverage cards and page titles
   * always use.
   */
  menuName?: string;
  status: ProductStatus;
  /** Route or absolute URL. */
  href: string;
  external?: boolean;
  /** Longer copy for the coming-soon page. */
  summary?: string;
  /** What the future underwriting will focus on (coming-soon bullets). */
  focus?: string[];
  /** Full sections for products that have a real page rather than a placeholder. */
  detail?: DetailSection[];
}

/**
 * AI Liability, split by the side of the duty the insured sits on. Deployers are
 * the live appetite today and route to the published form; developer-side risk
 * is a separate build, so it routes to its own placeholder rather than implying
 * the current form responds to it.
 */
export const aiLiability: Product[] = [
  {
    slug: "ai-liability",
    name: "AI Liability",
    blurb:
      "Standalone AI liability for the organization that runs the AI and owes the duty. Eight insuring agreements under one aggregate, five of them first-party on discovery.",
    status: "alpha",
    href: "/products/ai-liability",
  },
  {
    slug: "ai-liability-developers",
    name: "Embedded Agentic Coverage",
    menuName: "Embedded Agentic Risk",
    blurb: "Liability for the organizations that build and supply AI systems to others.",
    status: "development",
    href: "/coming-soon/ai-liability-developers",
    summary:
      "Model and application developers carry a different duty than the businesses that deploy them: what was represented, what was tested, and what the system was released to do. Auxilium is building a developer-side form for that exposure, separate from the deployer policy written today.",
    focus: [
      "Representations, documentation, and release gating",
      "Evaluation and red-team evidence at ship time",
      "Downstream misuse and foreseeable-deployment exposure",
      "Indemnity obligations owed to enterprise customers",
    ],
    detail: [
      {
        title: "How it works",
        intro:
          "Agent developers embed our API once. From then on every deployment they ship is a placement: we read how that specific deployment is actually configured, watch it run for thirty days, and offer cover priced on what it turned out to be rather than on what the category is assumed to be.",
        steps: [
          {
            title: "Embed the API",
            body: "One integration into your platform. It registers each new customer deployment with us and opens a telemetry channel. Nothing is installed in your customer's environment beyond what your own product already runs.",
          },
          {
            title: "We read the deployment",
            body: "At registration we take the structure rather than the marketing: what the agent is permitted to do, what it can reach, what caps and approvals sit around it, and where a human stays in the loop. The same facts our own underwriters ask for, arriving as data instead of a questionnaire.",
          },
          {
            title: "Thirty days of telemetry",
            body: "We watch how the deployment actually behaves: what it really touches, how often it acts on its own, and how far its authority is exercised in practice. Configured authority and exercised authority are rarely the same number, and the gap is most of the risk.",
          },
          {
            title: "Cover is offered on that deployment",
            body: "At the end of the window we price that specific deployment and the offer surfaces inside your product. No application, no broker submission, no waiting: the underwriting already happened while the agent was working.",
          },
          {
            title: "It reprices as the deployment changes",
            body: "Authority granted later, a new system connected, a control removed: the telemetry shows it and the terms follow. Cover tracks what the agent is doing now rather than what it was doing at bind.",
          },
        ],
        note:
          "In development. The developer-side form is separate from the deployer policy written today, and nothing here is an offer of insurance or a commitment to quote.",
      },
    ],
  },
];

/**
 * Robotics lines. Every entry is in development and routed to /coming-soon/:slug;
 * they also render as coverage cards, so each needs art at
 * `public/covers/<slug>.jpg`.
 */
export const robotics: Product[] = [
  {
    slug: "warehouse-robotics",
    name: "Warehouse Robotics",
    blurb: "Liability for autonomous mobile robots and picking systems inside fulfillment operations.",
    status: "development",
    href: "/coming-soon/warehouse-robotics",
    summary:
      "Fulfillment floors now mix people, autonomous mobile robots, and picking arms at speed and density no prior general liability form was rated for. Auxilium is building coverage for what happens when that mix goes wrong.",
    focus: [
      "Human and robot shared-floor bodily injury",
      "Inventory and third-party goods damage",
      "Fleet coordination and traffic-management failure",
      "Telemetry-based rating across the fleet",
    ],
  },
  {
    slug: "manufacturing-autonomous-machinery",
    name: "Manufacturing Machinery",
    blurb: "Coverage for self-directed machinery on the production line.",
    status: "development",
    href: "/coming-soon/manufacturing-autonomous-machinery",
    summary:
      "When machinery makes its own decisions, failure is no longer just mechanical, it is a question of software, sensing, and judgment. Auxilium is developing coverage for the consequences of autonomous production machinery getting it wrong.",
    focus: [
      "Sensor, control, and decision-logic failure",
      "Resulting property and operational loss",
      "Human-in-the-loop and override design",
      "Continuous-monitoring underwriting",
    ],
  },
  {
    slug: "delivery-robotics",
    name: "Delivery Robotics",
    blurb: "Liability for sidewalk, curbside, and aerial delivery fleets in public space.",
    status: "development",
    href: "/coming-soon/delivery-robotics",
    summary:
      "Delivery robots operate where the public is, on sidewalks, at curbs, and overhead. The exposure is third-party from the first mile. Auxilium is building coverage for the operators putting those fleets into public space.",
    focus: [
      "Pedestrian and third-party bodily injury",
      "Municipal permitting and public-right-of-way conditions",
      "Cargo, custody, and last-mile loss",
      "Route, density, and operational-domain rating",
    ],
  },
  {
    slug: "humanoids",
    name: "Humanoids",
    blurb: "Liability for humanoid robots in commercial and industrial settings.",
    status: "development",
    href: "/coming-soon/humanoids",
    summary:
      "Humanoid robots are moving from demos into warehouses, plants, and storefronts. Auxilium is building the liability framework for machines that share physical space with people and property.",
    focus: [
      "Bodily injury and third-party property damage",
      "Autonomy-level and operator-oversight rating",
      "Product and operational liability blend",
      "Fleet telemetry-based underwriting",
    ],
  },
  {
    slug: "autonomous-vehicles",
    name: "Autonomous Vehicles",
    blurb: "Liability for self-driving fleets, from robotaxis to autonomous trucking.",
    status: "development",
    href: "/coming-soon/autonomous-vehicles",
    summary:
      "As vehicles take the wheel, liability shifts from the driver to the system that drives. Auxilium is building coverage for the operators and fleets deploying autonomous vehicles on real roads.",
    focus: [
      "Bodily injury and third-party property damage",
      "Autonomy-level and operational-domain rating",
      "Sensor, software, and decision-logic failure",
      "Fleet telemetry-based underwriting",
    ],
  },
];

/**
 * Software (not an insurance line): the platforms Auxilium builds. Kept separate
 * from `products` so it never appears in coverage listings, the footer, or the
 * /coverages schedule.
 */
export const software: Product[] = [
  {
    slug: "mgbox",
    name: "MGBox",
    blurb: "The AI-native operating platform that runs our MGA, from submission to bind.",
    status: "development",
    href: "/coming-soon/mgbox",
    summary:
      "MGBox is the AI-native platform Auxilium runs its own MGA on, from broker submission to underwriter pricing, authority, and bind. We are tenant zero: over the next few years we are hardening it into a platform other MGAs can license to become AI-native.",
    focus: [
      "Broker submissions, quotes, and bind in one place",
      "Authority-gated underwriting decisions and referrals",
      "A product registry: new lines as a workflow, not a rebuild",
      "Appointments, authorities, bordereau, and compliance",
    ],
    detail: [
      {
        title: "From submission to bind",
        intro:
          "One path through the MGA, with the authority check built into the path rather than bolted onto it. Every step leaves a record, so what was decided and who was allowed to decide it is answerable later without reconstructing it from email.",
        steps: [
          {
            title: "The submission arrives",
            body: "An appointed broker submits once. The application and exposure schedule land as structured data, not as an attachment somebody has to retype, and the file opens with the public-record check already run.",
          },
          {
            title: "It is priced against the ratebook",
            body: "The rating plan is a versioned artifact rather than a spreadsheet on somebody's desktop. Every quote records which ratebook version produced it, so a number can be explained months later.",
          },
          {
            title: "Authority decides who answers",
            body: "Limits, appetite and referral triggers are configuration. Inside authority an underwriter quotes; outside it the file routes to whoever does hold that authority, with the reason attached. Nobody has to remember where the line is.",
          },
          {
            title: "Bind, and the record closes",
            body: "Binding writes the policy, the schedule and the elections together. Bordereau and regulatory reporting are produced from that record rather than assembled afterwards from three systems.",
          },
        ],
        note: "MGBox is not offered publicly. We run our own MGA on it.",
      },
      {
        title: "Why we built it",
        intro:
          "The plan is not to sell software. It is to find out whether an MGA can be run this way at all, on our own book, before anyone else has to trust it.",
        points: [
          {
            title: "Tenant zero",
            body: "We are the first and hardest user. Every gap in the platform is a gap in our own underwriting day, which is a considerably faster feedback loop than a customer filing a ticket.",
          },
          {
            title: "A new line is a workflow, not a rebuild",
            body: "Products live in a registry: agreements, elections, rating inputs and authority rules as data. Launching a line is configuring one, which is what makes a small team able to carry several.",
          },
          {
            title: "The record is the point",
            body: "An AI-native MGA only works if every automated step is attributable and reversible. The platform is built so that a decision, a price and an authority can each be traced back to their inputs.",
          },
        ],
      },
    ],
  },
  {
    slug: "auxcontrol",
    name: "AuxControl",
    blurb: "The risk-mitigation suite every insured gets: adversarial agent testing, accreditation, and continuous governance.",
    status: "in-development",
    href: "/coming-soon/auxcontrol",
    summary:
      "AuxControl is the active side of an Auxilium policy. Rather than transferring the risk and waiting for a claim, the insured gets the tooling to find and close exposure while the policy is in force: adversarial testing of deployed agents, accreditation of the systems that pass, and continuous governance over how they run.",
    focus: [
      "Adversarial testing and red-teaming of deployed agents",
      "Accreditation for the systems that pass evaluation",
      "Continuous governance: authority, logging, and kill switch",
      "Findings that feed pricing and renewal terms",
    ],
    detail: [
      {
        title: "See the AI running through your organization",
        intro:
          "AuxControl connects to your workspace read-only, discovers every AI model, agent and shadow tool in use, scores the exposure the way an underwriter would, and keeps watching so nothing drifts unseen. It is the loss-control half of the policy: the part that lowers the risk rather than transferring it.",
        points: [
          {
            title: "Discovery, including the shadow",
            body: "It inventories the AI actually in use, sanctioned or not, maps each tool to the people using it, and surfaces the ones nobody told you about. Most organizations are surprised by this list.",
          },
          {
            title: "Scored like an underwriter",
            body: "A versioned scoring engine turns that surface into a single risk index, on the same basis your policy is underwritten. The number your broker sees and the number you see are the same number.",
          },
          {
            title: "Watched continuously",
            body: "Live telemetry and scheduled syncs re-check posture, raise alerts when an agent drifts or goes silent, and produce reports a board can read. Risk is managed between renewals, not only at them.",
          },
        ],
      },
      {
        title: "How it works",
        steps: [
          {
            title: "Connect your workspace",
            body: "Your admin grants read-only access to Google Workspace or Microsoft 365. No software to deploy, no code changes, no agent to install.",
          },
          {
            title: "We assess the surface",
            body: "It inventories the AI models, agents and copilots in use, maps them to your people, and flags shadow AI.",
          },
          {
            title: "Risk is scored",
            body: "The scoring engine turns that surface into a collective risk index, versioned so a score can be explained later.",
          },
          {
            title: "Monitored continuously",
            body: "Detection rules run around the clock against live telemetry, raising alerts on drift and producing board-ready reports.",
          },
        ],
        note: "Live in an afternoon rather than a quarter. The first sync reads your directory and AI activity within minutes.",
      },
      {
        title: "What it reads, and what it never touches",
        intro:
          "AuxControl reads through the providers' own admin APIs. It never writes to your tenant, never opens file contents, and can be disconnected at any time.",
        contrast: [
          {
            title: "What it reads",
            items: [
              "Directory headcount, which sizes the monitored population",
              "AI application and model usage, which finds sanctioned and shadow AI",
              "Admin audit events, which detect drift and silent agents",
            ],
          },
          {
            title: "What it never touches",
            items: [
              "File and message contents, which are never accessed",
              "Anything written back to your tenant, because access is strictly read-only",
              "Your environment, because there is nothing to install in it",
            ],
          },
        ],
      },
      {
        title: "Adversarial testing and accreditation",
        intro:
          "Monitoring tells you what an agent is doing. Testing tells you what it would do under pressure. AuxControl runs deployed agents through a certification range: live tool calls, adversarial users and poisoned documents, producing a risk profile across the dimensions of agentic liability rather than a pass or fail.",
        points: [
          {
            title: "A range, not a checklist",
            body: "Agents face simulated adversaries and hostile inputs in a live environment. What comes out is a measured profile of how the agent behaves when someone is actively trying to make it fail.",
          },
          {
            title: "Bound to the deployment",
            body: "An accreditation is hash-bound to the configuration that earned it: model, scaffold, tools, guardrails and prompt. Change the thing materially and the accreditation is void, because it no longer describes what is running.",
          },
          {
            title: "Evidence, never a condition",
            body: "Results inform underwriting and renewal terms. They are never a condition of cover, and accreditation is not insurance: it is evidence about a system, not a promise to pay.",
          },
        ],
        cta: { label: "Go to the certification range", href: "https://certify.auxiliums.com" },
      },
      {
        title: "How you get it",
        intro:
          "AuxControl is loss control attached to an Auxilium policy, not software sold on its own. Binding a policy provisions it.",
        points: [
          {
            title: "Included at bind",
            body: "Every AI Liability policyholder is provisioned AuxControl free when the policy binds. No separate purchase, and everything needed to monitor your covered exposure is in it.",
          },
          {
            title: "Upgrade for the whole organization",
            body: "Policyholders who want to govern beyond the exposure their policy covers can upgrade: full workspace discovery, compliance frameworks, governance policies, scheduled reports and the audit trail.",
          },
          {
            title: "Priced on the population",
            body: "The upgrade is priced on the population pulled from your directory rather than on seats, because the risk spans the whole workforce and not just the people who log in. Annual, all features included.",
          },
        ],
        cta: { label: "Go to AuxControl", href: "https://govern.auxiliums.com" },
        note: "In development under this name. Findings feed underwriting and renewal, and enrollment is never a condition of coverage.",
      },
    ],
  },
];

/**
 * The coverage schedule: insurance lines only, in the order they render on
 * /coverages and the home grid. Software is excluded by construction.
 */
export const products: Product[] = [...aiLiability, ...robotics];

/* Temporarily hidden lines. Kept in place (not deleted) so nothing is lost;
   restore an entry here and its /coming-soon/:slug entry in seo.json to relist it.

   - agentic-eo             → /agentic-eo
   - energy-infrastructure  → /coming-soon/energy-infrastructure
   - data-centers-pc        → /coming-soon/data-centers-pc
   - tech-enterprise-do     → /coming-soon/tech-enterprise-do

   Their full definitions are in git history at 03932a1:src/content/products.ts.

   Yard & Site Autonomy was withdrawn later; its definition, SEO entry and
   image prompt are at 1315c81. */

export const bySlug = (slug: string) =>
  [...aiLiability, ...robotics, ...software].find((p) => p.slug === slug);

/**
 * Grouping used to render the Solutions mega-menu: AI Liability by side of the
 * duty, then the robotics lines, then the software. Groups with no items are
 * dropped, so a withdrawn group leaves no empty heading behind.
 */
export const productMenuGroups: {
  label: string;
  /** One line under the group heading, so the rows below can stay just names. */
  description: string;
  items: Product[];
  /** Where the group heading itself links, when it has a page of its own. */
  href?: string;
}[] = [
  {
    label: "Digital Risk",
    description: "Cover for the duty owed when AI acts.",
    items: aiLiability,
    href: "/products/ai-liability",
  },
  {
    label: "Robotics",
    description: "Liability for machines that act physically.",
    items: robotics,
  },
  {
    label: "Software",
    description: "Risk tools for the insured, and our own platform.",
    items: software,
  },
].filter((group) => group.items.length > 0);
