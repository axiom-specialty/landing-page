/**
 * Product taxonomy, the single source of truth for the Solutions mega-menu,
 * the coming-soon router, and any product listing on the site.
 *
 * status drives the status pill label; routing is by `href`, not status.
 *   "available"      → "Live"
 *   "in-development" → "In Development"
 *   "development"    → "Soon" (placeholder line, routed to /coming-soon/:slug)
 */

export type ProductStatus = "available" | "in-development" | "development";

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
  /**
   * Underwriting disclosure, rendered as four blocks. Shared by every robotics
   * line so a broker reads the same shape on each.
   */
  underwriting?: {
    asks: string[];
    reads: string[];
    drivers: string[];
    standards: string[];
    /** Exposure base, shown under the blocks. */
    rated: string;
  };
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
  /** How this line is bought, stated near the top of its page. */
  channel?: string;
  /** Full sections for products that have a real page rather than a placeholder. */
  detail?: DetailSection[];
}

/**
 * Digital risk. Both lines insure the business that RUNS the AI, never the
 * business that builds it: AI Liability where that business buys its own cover
 * through a broker, Embedded Agentic Risk where it is offered cover inside the
 * vendor's product at the moment it turns an agent on.
 */
export const aiLiability: Product[] = [
  {
    slug: "ai-liability",
    name: "AI Liability",
    blurb:
      "Standalone AI liability for the organization that runs the AI and owes the duty. Eight insuring agreements under one aggregate, five of them first-party on discovery.",
    status: "in-development",
    href: "/products/ai-liability",
    channel: "Available through: your broker",
  },
  {
    slug: "embedded-agentic-risk",
    name: "Embedded Agentic Risk",
    blurb:
      "Cover your customers can bind on an agent deployment, offered inside your product and underwritten by Auxilium.",
    status: "in-development",
    href: "/products/embedded-agentic-risk",
    channel:
      "Available through: your AI vendor's product, sold by Auxilium's licensed agency",
    summary:
      "Let your customers insure their agent deployments at the moment they go live. One API, offered inside your product, underwritten by Auxilium.",
    detail: [
      {
        title: "Who it is for",
        points: [
          {
            title: "For developers",
            body: "Companies that build agentic software: support agents, finance and operations agents, coding and IT agents, sales agents. You offer cover as part of deployment rather than leaving your customer to find it.",
          },
          {
            title: "Who is insured",
            body: "Your customer, the business deploying the agent inside its own operations. The policy is issued in the customer's name and they are the policyholder.",
          },
          {
            title: "What is insured",
            body: "The losses the agent's actions cause the deploying business and the people it owes duties to. Not the agent, and not you.",
          },
        ],
      },
      {
        title: "How it works",
        steps: [
          {
            title: "Integrate",
            body: "Add the Auxilium API: a quote endpoint, a bind endpoint and a webhook for policy events.",
          },
          {
            title: "Deploy",
            body: "When a customer deploys an agent, your product passes the deployment configuration with the customer's consent: what the agent can do, which systems it can reach, spending and action limits, and where a human approves.",
          },
          {
            title: "Offer and bind",
            body: "The customer sees a quote inside the deployment flow and can bind it in a few clicks. Cover is sold by Auxilium's licensed agency, and the customer is the policyholder.",
          },
          {
            title: "Covered from day one",
            body: "The policy is bound on the configuration at deployment, so there is no uncovered waiting period.",
          },
          {
            title: "Adjust on real activity",
            body: "After the first 30 days, read-only activity logs from your platform feed a rate adjustment. After that, rates are reviewed at set intervals, for example quarterly, rather than changed continuously.",
          },
          {
            title: "Claims",
            body: "Customers report claims directly to Auxilium.",
          },
        ],
      },
      {
        title: "What it covers",
        intro:
          "Cover answers to the deployer, the business that turned the agent on inside its own operations.",
        coverage: [
          {
            name: "Third-party liability",
            covers:
              "A claim arising from an agent's action: wrong or harmful communications to customers, unauthorized commitments, mishandled personal data, or erroneous transactions affecting a third party.",
            basis: ["Third party"],
          },
          {
            name: "First-party loss",
            covers:
              "The deployer's own loss from an agent's unauthorized or erroneous action, including funds sent in error and the cost to reverse or remediate the action.",
            basis: ["First party"],
          },
          {
            name: "Incident response",
            covers:
              "Investigation, notification and remediation costs after an agent-caused incident.",
            basis: ["First party"],
          },
          {
            name: "Regulatory defense",
            covers: "Defense costs in a regulatory proceeding arising from an agent's action.",
            basis: ["Regulatory"],
          },
        ],
      },
      {
        title: "What it does not cover",
        intro:
          "We do not insure the agent. Three exclusions follow from that and they are the ones worth stating plainly.",
        points: [
          {
            title: "The agent itself",
            body: "Its performance, accuracy or uptime, and the cost to fix or replace it. If the agent is simply bad at its job, that is a product question between you and your customer.",
          },
          {
            title: "The developer's own liability",
            body: "Your product liability and your errors and omissions are not covered here. This policy belongs to your customer, not to you.",
          },
          {
            title: "Approved actions outside permissions",
            body: "Loss from an action a human approved outside the agent's configured permissions. The configuration is what was underwritten.",
          },
        ],
      },
      {
        title: "For developers: what you get",
        points: [
          {
            title: "A differentiator in the sale",
            body: "Cover offered at deployment is a reason to choose you, and a faster path through your customer's security and risk review.",
          },
          {
            title: "No insurance operations",
            body: "Auxilium handles licensing, underwriting, policy issuance and claims. You ship an integration, not a carrier relationship.",
          },
          {
            title: "Compensation",
            body: "A marketing fee that is not tied to whether a customer buys, unless you hold a producer license.",
          },
        ],
        // TODO(legal): confirm the marketing-fee description and the
        // producer-license carve-out against the agency agreement and the
        // anti-rebating and licensing rules in each state we write in.
        note:
          "In development. Nothing here is an offer of insurance or a commitment to quote, and the policy wording governs in every respect.",
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
    channel: "Available through: your broker",
    summary:
      "Fulfillment floors now mix people, autonomous mobile robots, and picking arms at speed and density no prior general liability form was rated for. Auxilium is building coverage for what happens when that mix goes wrong.",
    focus: [
      "Human and robot shared-floor bodily injury",
      "Inventory and third-party goods damage",
      "Fleet coordination and traffic-management failure",
      "Telemetry-based rating across the fleet",
    ],
    detail: [
      {
        title: "Coverage",
        intro:
          "Fulfillment floors run autonomous mobile robots and picking systems in the same aisles as people, at densities ISO 3691-4 and ANSI/RIA R15.08 were written to govern and that no general liability form was rated for. The cover follows the ways that mix actually fails.",
        coverage: [
          {
            name: "Third-party bodily injury",
            covers:
              "Injury to third parties, including visitors, drivers, contractors and temporary workers supplied by a staffing agency, struck, trapped or crushed by a mobile robot or a picking system. Your own employees are covered by workers' compensation.",
            basis: ["Third party"],
          },
          {
            name: "Goods in your care",
            covers:
              "Damage to inventory and to third-party goods held for a customer when a robot drops, collides with or mishandles a load, including the pod or rack it was carrying.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Fleet coordination failure",
            covers:
              "Loss when the traffic-management layer, not an individual robot, is at fault: deadlock, mis-sequencing, or two machines routed into the same space.",
            basis: ["First party"],
          },
          {
            name: "Operational interruption",
            covers:
              "Lost throughput while a fleet is stood down after an event, including the cost of reverting to manual picking and the re-commissioning needed to restart.",
            basis: ["First party"],
          },
          {
            name: "Unauthorized control",
            covers:
              "Physical loss following unauthorized access to the fleet management system, where a cyber policy answers the intrusion but not the damage the machines then do.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Robot physical loss and breakdown",
            covers:
              "Damage to, or breakdown of, the robots, chargers and fleet infrastructure from collision, fire, electrical fault or mechanical failure. Includes leased and financed robots, and the cost of meeting the lease's replacement obligation.",
            basis: ["First party"],
          },
          {
            name: "Vendor failure and stranded fleet",
            covers:
              "If your robot vendor becomes insolvent, exits the business or ends software support, the cost to keep the fleet running, migrate to a new fleet management system, or replace robots that can no longer operate.",
            basis: ["First party"],
          },
          {
            name: "Regulatory proceedings",
            covers:
              "Defense and investigation costs in a workplace safety proceeding arising from an event involving the fleet, within the elected scope.",
            basis: ["Regulatory"],
          },
        ],
        note: "Indicative cover for a line in development, not a schedule of insurance and not an offer to quote. Agreement names, triggers, sublimits and exclusions are subject to the filed wording, and the wording governs in every respect.",
      },
      {
        title: "Underwriting",
        underwriting: {
          asks: [
            "Fleet list: make, model, count, age",
            "Robot type: goods-to-person, AMR pickers, autonomous forklifts",
            "Site layout, including whether robots share aisles with people and forklifts",
            "Your mobile robot risk assessment",
            "Maintenance and software support contracts",
            "Charging area setup",
            "Three years of incidents",
          ],
          reads: [
            "A read-only export from your fleet management system: operating hours, emergency stops, contact and near-miss events, speed and safety-field settings, uptime",
          ],
          drivers: [
            "Mixed traffic versus segregated zones",
            "People density",
            "Robot mass and speed",
            "Safety-field configuration",
            "Incident and emergency-stop rate per 1,000 operating hours",
            "Vendor concentration and financial strength",
            "Fire controls in charging areas",
          ],
          standards: [
            "ANSI/A3 R15.08-1, -2 and -3, including the 2026 user requirements",
            "ISO 3691-4",
            "UL 3100",
          ],
          rated: "Per robot per year, by robot class.",
        },
      },
    ],
  },
  {
    slug: "manufacturing-autonomous-machinery",
    name: "Manufacturing Machinery",
    blurb: "Coverage for self-directed machinery on the production line.",
    status: "development",
    href: "/coming-soon/manufacturing-autonomous-machinery",
    channel: "Available through: your broker",
    summary:
      "When machinery makes its own decisions, failure is no longer just mechanical, it is a question of software, sensing, and judgment. Auxilium is developing coverage for the consequences of autonomous production machinery getting it wrong.",
    focus: [
      "Sensor, control, and decision-logic failure",
      "Resulting property and operational loss",
      "Human-in-the-loop and override design",
      "Continuous-monitoring underwriting",
    ],
    detail: [
      {
        title: "Coverage",
        intro:
          "When a machine chooses its own next action, failure stops being purely mechanical. The cover is written around sensing, control and judgment, and around collaborative operation, where ISO 10218 and ISO/TS 15066 put a person inside the working envelope by design.",
        coverage: [
          {
            name: "Decision-logic failure",
            covers:
              "Loss where the machine did what it decided to do and the decision was wrong: mis-sensed material, a misread setpoint, or an action taken outside the intended envelope.",
            basis: ["First party"],
          },
          {
            name: "Resulting product loss",
            covers:
              "Scrap, rework and the cost of quarantining and re-inspecting output produced between the failure and its discovery, which is usually the larger number.",
            basis: ["First party"],
          },
          {
            name: "Collaborative operation injury",
            covers:
              "Injury to a visitor, contractor, vendor technician or temporary worker inside the machine's envelope, where power and force limiting, speed and separation monitoring, or the safeguarding around them did not hold. Your own employees are covered by workers' compensation.",
            basis: ["Third party"],
          },
          {
            name: "Override and stop failure",
            covers:
              "Loss where a human-in-the-loop control existed but did not arrest the process: an override ignored, a stop that did not stop, or an approval gate bypassed.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Operational interruption",
            covers:
              "Downtime while the line is stopped, the cell is re-validated and the control configuration is re-qualified before production restarts.",
            basis: ["First party"],
          },
          {
            name: "Regulatory proceedings",
            covers:
              "Defense and investigation costs in a workplace safety or machinery-directive proceeding arising from a covered event, within the elected scope.",
            basis: ["Regulatory"],
          },
        ],
        note: "Indicative cover for a line in development, not a schedule of insurance and not an offer to quote. Agreement names, triggers, sublimits and exclusions are subject to the filed wording, and the wording governs in every respect.",
      },
      {
        title: "Underwriting",
        underwriting: {
          asks: [
            "Inventory of robot cells and cobots",
            "Application: welding, palletizing, machine tending, assembly",
            "Guarding method: fenced, safety scanners, or power and force limited cobots",
            "Your robot cell risk assessment",
            "Integrator",
            "Lockout and access procedures",
            "Who else enters the cells: visitors, vendor technicians, contractors",
          ],
          reads: [
            "Read-only exports of robot controller and safety controller alarm and fault history",
          ],
          drivers: [
            "Fenced versus collaborative operation",
            "Payload and speed",
            "Third-party access",
            "How dependent output is on each cell",
            "The consequence of a robot error on the product you ship",
          ],
          standards: [
            "ISO 10218-1 and -2 (2025)",
            "ISO/TS 15066",
            "ANSI/A3 R15.06-2025",
          ],
          rated: "Per robot cell per year.",
        },
      },
    ],
  },
  {
    slug: "delivery-robotics",
    name: "Delivery Robotics",
    blurb: "Liability for sidewalk, curbside, and aerial delivery fleets in public space.",
    status: "development",
    href: "/coming-soon/delivery-robotics",
    channel: "Available through: your broker",
    summary:
      "Delivery robots operate where the public is, on sidewalks, at curbs, and overhead. The exposure is third-party from the first mile. Auxilium is building coverage for the operators putting those fleets into public space.",
    focus: [
      "Pedestrian and third-party bodily injury",
      "Municipal permitting and public-right-of-way conditions",
      "Cargo, custody, and last-mile loss",
      "Route, density, and operational-domain rating",
    ],
    detail: [
      {
        title: "Coverage",
        intro:
          "A delivery fleet works where the public is. Sidewalk and curbside robots generally sit outside auto liability and fall to general and product liability, which means the exposure is third-party from the first mile and the permit conditions are part of the risk.",
        coverage: [
          {
            name: "Public bodily injury",
            covers:
              "Injury to a pedestrian, cyclist or bystander struck by, tripped over or obstructed by a robot operating in public space, including at crossings and curb transitions.",
            basis: ["Third party"],
          },
          {
            name: "Third-party property damage",
            covers:
              "Damage to vehicles, storefronts, street furniture and private property caused by a unit in transit or at rest.",
            basis: ["Third party"],
          },
          {
            name: "Cargo and custody",
            covers:
              "Loss of or damage to the goods carried, including spoilage on a stalled unit and loss following theft or tampering while the robot is unattended.",
            basis: ["First party"],
          },
          {
            name: "Right-of-way and permit conditions",
            covers:
              "Defense costs and claims arising from operation in the public right of way, including alleged breach of a municipal permit condition or operating-area restriction.",
            basis: ["Third party", "Regulatory"],
          },
          {
            name: "Fleet grounding",
            covers:
              "Operational loss where a regulator, a municipality or your own protocol grounds the fleet in a jurisdiction after an event.",
            basis: ["First party"],
          },
          {
            name: "Unauthorized control",
            covers:
              "Physical and third-party loss following unauthorized access to a unit or to the fleet control plane, where a cyber policy answers the intrusion and not its consequences.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Theft and vandalism",
            covers:
              "Loss of or damage to a unit taken, tipped, stripped or destroyed while working unattended in public space.",
            basis: ["First party"],
          },
        ],
        note:
          "Aerial delivery is not automatic cover and requires an express endorsement and specialist review. " + "Indicative cover for a line in development, not a schedule of insurance and not an offer to quote. Agreement names, triggers, sublimits and exclusions are subject to the filed wording, and the wording governs in every respect.",
      },
      {
        title: "Underwriting",
        underwriting: {
          asks: [
            "Cities and states of operation, and compliance with each state's personal delivery device law",
            "Fleet size, weight class and speed caps",
            "Route profile: sidewalks, crosswalks, campuses",
            "Remote supervision ratio",
            "Municipal permit terms and insurance minimums",
          ],
          reads: [
            "Miles traveled",
            "Interventions per 1,000 miles",
            "Contact events",
            "Route exposure by area",
          ],
          drivers: [
            "Pedestrian density",
            "Street crossings per mile",
            "Supervision ratio",
            "Device weight and speed",
            "Weather",
          ],
          standards: [
            "State personal delivery device statutes, several of which set a minimum liability limit, for example Virginia at $100,000",
            "Municipal permit conditions",
          ],
          rated: "Per device per year, plus a per-mile component.",
        },
      },
    ],
  },
  {
    slug: "humanoids",
    name: "Humanoids",
    blurb: "Liability for humanoid robots in commercial and industrial settings.",
    status: "development",
    href: "/coming-soon/humanoids",
    channel: "Available through: your broker",
    summary:
      "Humanoid robots are moving from demos into warehouses, plants, and storefronts. Auxilium is building the liability framework for machines that share physical space with people and property.",
    focus: [
      "Bodily injury and third-party property damage",
      "Autonomy-level and operator-oversight rating",
      "Product and operational liability blend",
      "Fleet telemetry-based underwriting",
    ],
    detail: [
      {
        title: "Coverage",
        intro:
          "A humanoid is bought to work where a person works, which means it inherits a person's proximity to people and property without inheriting a person's judgment. The cover is written for general-purpose machines operating in spaces built for humans.",
        coverage: [
          {
            name: "Shared-space bodily injury",
            covers:
              "Injury to customers, visitors, contractors and temporary workers from contact, a dropped load or a loss of balance, in premises laid out for people rather than for machines. Your own employees are covered by workers' compensation.",
            basis: ["Third party"],
          },
          {
            name: "Third-party property damage",
            covers:
              "Damage to premises, fittings, stock and customer property caused by the machine moving through and handling a human environment.",
            basis: ["Third party"],
          },
          {
            name: "Task execution failure",
            covers:
              "Your own loss where the machine completed the wrong task correctly: goods mishandled, a process step missed, or a general-purpose instruction carried out beyond its intent.",
            basis: ["First party"],
          },
          {
            name: "Supervision and autonomy level",
            covers:
              "Loss arising where the machine operated at a higher autonomy level than scheduled, or where remote supervision was absent, delayed or ineffective.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Unauthorized control",
            covers:
              "Physical and third-party loss following unauthorized access to the unit or its control plane, including instruction injection through its own sensing.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Regulatory proceedings",
            covers:
              "Defense and investigation costs in a workplace safety or consumer protection proceeding arising from a covered event, within the elected scope.",
            basis: ["Regulatory"],
          },
        ],
        note: "Indicative cover for a line in development, not a schedule of insurance and not an offer to quote. Agreement names, triggers, sublimits and exclusions are subject to the filed wording, and the wording governs in every respect.",
      },
      {
        title: "Underwriting",
        underwriting: {
          asks: [
            "Model and count",
            "Tasks",
            "Environment: enclosed cell, shared with workers, or public-facing",
            "Share of time under teleoperation",
            "The vendor's safety case, including fall behavior and contact force limits",
            "Pilot or production deployment",
          ],
          reads: [
            "Falls and stumbles",
            "Emergency stops",
            "Teleoperation interventions per operating hour",
            "Contact events",
          ],
          drivers: [
            "Public-facing versus industrial",
            "Robot mass and height",
            "Teleoperation share",
            "Payload",
            "Maturity of the deployment",
          ],
          standards: [
            "ISO 25785-1, draft safety requirements for dynamically stable mobile robots including legged robots",
            "ISO 10218 (2025)",
            "ISO/TS 15066",
          ],
          rated: "Per unit per year. Pilots can be bound on short terms.",
        },
      },
    ],
  },
  {
    slug: "autonomous-fleet-operations",
    name: "Autonomous Fleet Operations",
    blurb: "Excess and surplus cover for operators of driverless fleets, sitting over primary auto.",
    status: "development",
    href: "/coming-soon/autonomous-fleet-operations",
    channel: "Available through: your broker, on a non-admitted basis",
    summary:
      "Specialty cover for operators of driverless fleets. Written on a non-admitted, excess and surplus basis, it sits over your primary auto policy or self-insured retention and covers the exposures standard auto forms were not built for.",
    detail: [
      {
        title: "Who buys it",
        intro:
          "Operators of 10 to 500 autonomous vehicles. This is fleet cover for the business running the vehicles, not cover for the vehicles themselves and not cover for the technology that drives them.",
        contrast: [
          {
            title: "Written for",
            items: [
              "Robotaxi fleet operators and their fleet partners",
              "Autonomous delivery van operators",
              "Hub-to-hub autonomous trucking carriers",
              "Campus, airport and industrial shuttle operators",
            ],
          },
          {
            title: "Not written for",
            items: [
              "Individual car owners, and personal auto of any kind",
              "AV developers' own product liability",
              "Primary auto, which this sits above rather than replaces",
            ],
          },
        ],
      },
      {
        title: "Coverage",
        coverage: [
          {
            name: "Excess auto liability",
            covers:
              "Third-party bodily injury and property damage from autonomous operation, above your primary auto limit or self-insured retention.",
            basis: ["Third party"],
          },
          {
            name: "Software recall and fleet grounding",
            covers:
              "Lost revenue and extra expense when a software defect, a manufacturer stand-down or a regulator grounds your fleet.",
            basis: ["First party"],
          },
          {
            name: "Remote assistance error",
            covers:
              "Liability arising from instructions given by remote assistance or teleoperation staff.",
            basis: ["Third party"],
          },
          {
            name: "Operational design domain",
            covers:
              "Incidents that happen while the vehicle is outside its approved operating domain are covered, not excluded.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Cyber-physical",
            covers:
              "Bodily injury and property damage caused by a cyberattack on the vehicle or on fleet systems.",
            basis: ["First party", "Third party"],
          },
          {
            name: "Sensor and compute damage",
            covers:
              "Physical damage to lidar, radar, cameras and onboard compute, including calibration after repair.",
            basis: ["First party"],
          },
          {
            name: "Regulatory proceedings",
            covers:
              "Defense costs in federal crash-reporting and defect investigations, and in state permit suspension actions.",
            basis: ["Regulatory"],
          },
          {
            name: "Incident response",
            covers:
              "Crash reconstruction, data preservation and crisis communications after a serious incident.",
            basis: ["First party"],
          },
        ],
        note:
          "One fleet policy, rated per vehicle with a per-autonomous-mile component. Indicative cover for a line in development, not a schedule of insurance and not an offer to quote, and the policy wording governs in every respect.",
      },
      {
        title: "Underwriting",
        underwriting: {
          asks: [
            "Fleet size and vehicle types",
            "SAE automation level",
            "Operational design domain: cities, roads, speeds, weather, time of day",
            "AV technology provider",
            "Remote assistance model and staffing ratio",
            "Primary auto program and retention",
            "Permits held",
            "Crash and incident history",
          ],
          reads: [
            "Autonomous miles",
            "Interventions and remote assistance events per 1,000 miles",
            "Reportable crashes",
            "Software release history",
          ],
          drivers: [
            "Operational design domain complexity",
            "Miles and exposure per vehicle",
            "Intervention rate trends",
            "Safety driver present or not",
            "The primary limit or retention we sit over",
            "Technology provider concentration",
          ],
          standards: [
            "SAE J3016 automation levels",
            "NHTSA's Standing General Order on crash reporting",
            "State AV permits, including California DMV requirements and its $5M insurance or bonding requirement for AV manufacturers",
          ],
          rated: "Per vehicle per year, plus a per-autonomous-mile component.",
        },
      },
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
