/**
 * Global site constants, company identity, contact channels, and links.
 * Single source of truth so pages/footer never hard-code these.
 */

export const site = {
  name: "Auxilium Specialty",
  legalName: "Auxilium Specialty Inc.",
  /** The name the company traded under before the rebrand, and still does business as. */
  formerName: "Axiom Specialty",
  dba: "Also doing business as Axiom Specialty.",
  tagline: "Insuring industrial revolutions.",
  /** The line under the logo in the footer. */
  description: "Creative underwriting for complex risks, so innovation can be adopted with peace of mind.",
  domain: "auxiliums.com",
  url: "https://auxiliums.com",

  email: {
    contact: "contact@auxiliums.com",
    submissions: "submissions@auxiliums.com",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/auxilium-specialty/",
  },

  external: {
    // Auxilium Accreditation: the optional evaluation range. Never a condition of cover.
    certify: "https://certify.auxiliums.com",
    // Auxilium Governance: the voluntary monitoring platform, operated by the MGA.
    govern: "https://govern.auxiliums.com",
  },
} as const;

export type Site = typeof site;
