/**
 * Global site constants, company identity, contact channels, and links.
 * Single source of truth so pages/footer never hard-code these.
 */

export const site = {
  name: "Axiom Specialty",
  legalName: "Axiom Specialty Inc.",
  tagline: "Insuring industrial revolutions.",
  description:
    "A managing general agent underwriting the risks of frontier technology, starting with AI liability.",
  domain: "axiomspecialty.com",
  url: "https://axiomspecialty.com",

  email: {
    contact: "contact@axiomspecialty.com",
    submissions: "submissions@axiomspecialty.com",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/axiom-specialty/",
  },

  external: {
    // The GAUNTLET certification portal (agent SOC-2-style attestation).
    certify: "https://certify.axiomspecialty.com",
    // The governance platform firms receive free at bind.
    bind: "https://bind.axiomspecialty.com",
  },
} as const;

export type Site = typeof site;
