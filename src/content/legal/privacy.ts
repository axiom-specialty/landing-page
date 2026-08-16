import type { LegalDoc } from "./types";
import { site } from "../site";

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  updated: "August 2026",
  intro: [
    `This Privacy Policy explains how ${site.legalName} ("Axiom," "we," "us") collects, uses, discloses, and protects information in connection with our website, our insurance products and services, and our software offerings, including Axiom Governance and Axiom Accreditation (together, the "Services").`,
    `Axiom is a managing general agent. Some processing described here supports insurance underwriting and servicing on behalf of our carrier partners. By using the Services, you agree to the practices described in this Policy.`,
  ],
  sections: [
    {
      heading: "1. Information we collect",
      body: [
        "We collect information you provide directly, information generated through your use of the Services, and information from third parties that support underwriting and servicing.",
      ],
      bullets: [
        "Contact and interest data, name, work email, company, and role submitted through waitlist, contact, brokerage, or carrier forms.",
        "Underwriting data, information a firm provides or authorizes for risk assessment, including governance documentation, existing policy documents, and questionnaire responses.",
        "Platform telemetry, with your authorization, read-only signals about how your organization deploys AI tools (for example, connected Microsoft 365 or Google Workspace metadata) used to report factual observations about your AI use through Axiom Governance. This is organizational telemetry, not surveillance of individual employees.",
        "Accreditation data, information about a system's authority, controls, and logs submitted for Axiom Accreditation.",
        "Technical data, IP address, device and browser type, and usage analytics collected automatically when you visit the website.",
      ],
    },
    {
      heading: "2. How we use information",
      bullets: [
        "To provide, operate, and improve the Services, including reporting factual observations about your AI use.",
        "To assess, price, underwrite, bind, and service insurance on behalf of our carrier partners.",
        "To evaluate Axiom Accreditation submissions.",
        "To respond to inquiries and communicate about products, appointments, and partnerships you request.",
        "To maintain security, prevent fraud and abuse, and meet legal and regulatory obligations.",
      ],
    },
    {
      heading: "3. Legal bases for processing",
      body: [
        "Where the GDPR or similar laws apply, we process personal data on the bases of performance of a contract, our legitimate interests in operating and securing the Services, your consent (which you may withdraw), and compliance with legal obligations. Insurance-related processing may also rely on the establishment, exercise, or defense of legal claims.",
      ],
    },
    {
      heading: "4. How we share information",
      body: [
        "We do not sell your personal information. We share information only as needed to operate the Services and as described below.",
      ],
      bullets: [
        "Carrier and reinsurance partners, to underwrite, bind, and service insurance you or your broker apply for.",
        "Service providers (subprocessors), vendors that host and run the Services on our behalf, including form processing (Formspree), application and data infrastructure (Supabase), and website hosting. They may process data only on our instructions.",
        "Professional advisors and regulators, where required by law, regulation, legal process, or to protect rights and safety.",
        "Corporate transactions, in connection with a merger, acquisition, or financing, subject to this Policy.",
      ],
    },
    {
      heading: "5. Data retention",
      body: [
        "We retain personal data for as long as needed to provide the Services and for legitimate business and legal purposes, including the longer retention periods that insurance recordkeeping and regulatory requirements can demand. When data is no longer required, we delete or de-identify it.",
      ],
    },
    {
      heading: "6. Security",
      body: [
        "We use administrative, technical, and organizational safeguards designed to protect information, including encryption in transit, access controls, and least-privilege practices. No method of transmission or storage is perfectly secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      heading: "7. Your rights and choices",
      body: [
        "Depending on your location, you may have rights to access, correct, delete, port, or restrict processing of your personal data, and to object to certain processing or withdraw consent. Residents of California and other U.S. states may have rights under applicable state privacy laws, including the right not to be discriminated against for exercising them.",
        `To exercise any right, contact us at ${site.email.contact}. We may need to verify your identity before acting on a request.`,
      ],
    },
    {
      heading: "8. Cookies and analytics",
      body: [
        "The website may use cookies and similar technologies for essential functionality and to understand usage. You can control cookies through your browser settings; disabling some cookies may affect functionality.",
      ],
    },
    {
      heading: "9. International transfers",
      body: [
        "We are based in the United States and may process data in the U.S. and other countries. Where required, we use appropriate safeguards for cross-border transfers of personal data.",
      ],
    },
    {
      heading: "10. Children's privacy",
      body: [
        "The Services are intended for businesses and are not directed to children under 16. We do not knowingly collect personal data from children.",
      ],
    },
    {
      heading: "11. Changes to this Policy",
      body: [
        "We may update this Policy from time to time. Material changes will be reflected by the updated date above and, where appropriate, by additional notice.",
      ],
    },
    {
      heading: "12. Contact us",
      body: [
        `Questions about this Policy or our data practices can be sent to ${site.email.contact}.`,
      ],
    },
  ],
};
