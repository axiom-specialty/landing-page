import type { LegalDoc } from "./types";
import { site } from "../site";

export const terms: LegalDoc = {
  title: "Terms of Service",
  updated: "August 2026",
  intro: [
    `These Terms of Service ("Terms") govern your access to and use of the website, software, and services offered by ${site.legalName} ("Axiom," "we," "us"), including Axiom Governance and Axiom Accreditation (together, the "Services"). By accessing or using the Services, you agree to these Terms.`,
  ],
  sections: [
    {
      heading: "1. Who we are",
      body: [
        "Axiom is a managing general agent (MGA). We design, underwrite, and service specialty insurance products on behalf of licensed carrier partners who provide the underwriting capacity. Axiom is not an insurance carrier and does not itself provide insurance.",
      ],
    },
    {
      heading: "2. No offer, binding, or coverage through this website",
      body: [
        "Content on this website, including product descriptions, illustrative coverage limits, premiums, deductibles, and scenarios, is for general information only. It is not an offer to insure, a binder, or a guarantee of coverage, and it does not create any insurance contract.",
        "Insurance is available only through a completed application, underwriting review, and a policy issued by a carrier partner. The terms, conditions, exclusions, and limits of any actual policy control, and they may differ from information shown here.",
      ],
    },
    {
      heading: "3. Illustrative figures",
      body: [
        "Any pricing, limits, or scoring thresholds shown are illustrative and subject to change as our products develop. Nothing here should be relied upon as the actual terms of a policy or a promise of a particular price or outcome.",
      ],
    },
    {
      heading: "4. Axiom Governance license",
      body: [
        "Axiom Governance is included with every policy at no additional cost. We grant a limited, non-exclusive, non-transferable, revocable license to use it for internal risk-management purposes, subject to these Terms and any order or platform terms. For agent matters, qualifying governance (a documented authorization scope, logging, and the ability to halt the agent) is a condition of coverage; you may satisfy it using Axiom Governance or your own records.",
      ],
      bullets: [
        "You will provide accurate information and maintain the security of your account credentials.",
        "You will not misuse the platform, reverse engineer it, or use it to build a competing product.",
        "You authorize the read-only telemetry connections you enable, and you represent that you have the right to connect them.",
        "The platform supports your governance decisions; it does not make them for you and is not a substitute for professional judgment.",
      ],
    },
    {
      heading: "5. Axiom Accreditation",
      body: [
        "Axiom Accreditation is an optional evaluation. An accreditation reflects an assessment against defined criteria at a point in time based on information provided to us. It is not a warranty or guarantee of a system's safety, performance, or fitness, and it is not a substitute for your own testing, controls, and oversight. It may earn a rating credit, and it does not by itself create or confer insurance coverage.",
      ],
    },
    {
      heading: "6. Intellectual property",
      body: [
        "The Services, including all software, rating methodologies, accreditation frameworks, text, and design, are owned by Axiom or its licensors and are protected by intellectual property laws. Except for the limited license granted above, no rights are transferred to you. Feedback you provide may be used by us without obligation.",
      ],
    },
    {
      heading: "7. Third-party links and services",
      body: [
        `The Services may link to third-party sites and tools, including Axiom Accreditation (${site.external.certify}) and Axiom Governance (${site.external.govern}). We are not responsible for third-party content or practices, and your use of them is governed by their own terms.`,
      ],
    },
    {
      heading: "8. Disclaimers",
      body: [
        'The Services are provided "as is" and "as available" without warranties of any kind, whether express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Services will be uninterrupted, error-free, or that outputs will be accurate or complete.',
      ],
    },
    {
      heading: "9. Limitation of liability",
      body: [
        "To the maximum extent permitted by law, Axiom and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenues, data, or goodwill, arising out of or relating to the Services. Axiom's total liability for any claim relating to the Services will not exceed the greater of the amounts you paid to Axiom for the Services in the twelve months before the claim or US $100. Nothing in these Terms limits liability that cannot be limited under applicable law. These limitations do not apply to the terms of any issued insurance policy, which are governed by that policy.",
      ],
    },
    {
      heading: "10. Indemnification",
      body: [
        "You will indemnify and hold harmless Axiom and its affiliates from claims, losses, and expenses arising out of your misuse of the Services or your breach of these Terms.",
      ],
    },
    {
      heading: "11. Governing law",
      body: [
        "These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-laws rules. The state and federal courts located in Delaware will have exclusive jurisdiction, and you consent to venue there.",
      ],
    },
    {
      heading: "12. Changes to these Terms",
      body: [
        "We may update these Terms from time to time. Changes are effective when posted, indicated by the updated date above. Your continued use of the Services after changes take effect constitutes acceptance.",
      ],
    },
    {
      heading: "13. Contact us",
      body: [`Questions about these Terms can be sent to ${site.email.contact}.`],
    },
  ],
};
