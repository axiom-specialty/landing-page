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
    menuName: "For Deployers",
    blurb:
      "Standalone AI liability for the organization that runs the AI and owes the duty. Eight insuring agreements under one aggregate, five of them first-party on discovery.",
    status: "alpha",
    href: "/products/ai-liability",
  },
  {
    slug: "ai-liability-developers",
    name: "AI Liability for Developers",
    menuName: "For Developers",
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
    slug: "yard-site-autonomy",
    name: "Yard & Site Autonomy",
    blurb: "Liability for autonomous equipment operating in yards, ports, mines, and construction sites.",
    status: "development",
    href: "/coming-soon/yard-site-autonomy",
    summary:
      "Yards, terminals, quarries, and construction sites are becoming the first fully autonomous work environments: heavy equipment moving under its own control, on private ground, around crews. Auxilium is building coverage for that operating envelope.",
    focus: [
      "Heavy-equipment bodily injury and property damage",
      "Geofencing, operational-domain, and site-control limits",
      "Mixed manned and unmanned operation",
      "Remote supervision and teleoperation exposure",
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
  },
];

/**
 * The coverage schedule: insurance lines only, in the order they render on
 * /coverages and the home grid. Software is excluded by construction.
 */
export const products: Product[] = [aiLiability[0], ...robotics];

/* Temporarily hidden lines. Kept in place (not deleted) so nothing is lost;
   restore an entry here and its /coming-soon/:slug entry in seo.json to relist it.

   - agentic-eo             → /agentic-eo
   - energy-infrastructure  → /coming-soon/energy-infrastructure
   - data-centers-pc        → /coming-soon/data-centers-pc
   - tech-enterprise-do     → /coming-soon/tech-enterprise-do

   Their full definitions are in git history at 03932a1:src/content/products.ts. */

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
    label: "AI Liability",
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
