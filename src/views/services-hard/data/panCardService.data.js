const panCardServiceData = {
  id: "pan-card-services",

  /* ================= META ================= */
  meta: {
    title: "PAN Card Services — Quick & Hassle-Free PAN Application | Vauditors",
    description:
      "Apply for PAN Card easily with Vauditors. Fast online filing, document verification, Form 49A/49AA support, status tracking, reissue, correction and e-PAN assistance.",
  },

  /* ================= HERO ================= */
  hero: {
    title: "PAN Card — Permanent Account Number (PAN) Services",
    subtitle: "Get your PAN Card quickly and securely",
    description:
      "Vauditors helps you apply for a new PAN, correction, reissue or update with easy documentation, expert guidance and fast processing through NSDL/UTI.",
  },

  /* ================= ABOUT ================= */
  about: {
    title: "What is PAN?",
    content:
      "Permanent Account Number (PAN) is a unique 10-character alphanumeric identifier issued by the Income Tax Department under the supervision of CBDT. PAN links financial transactions with taxpayers and is mandatory for banking, taxation, investments and high-value transactions in India. It is issued by NSDL/UTI on behalf of the government.",
  },

  /* ================= ELIGIBILITY ================= */
  eligibility: [
    "Indian citizens (Residents)",
    "Non-Resident Indians (NRIs)",
    "Foreign citizens requiring financial/ITR compliance (Form 49AA)",
    "Individuals, HUFs, Firms, LLPs, Trusts & Companies",
    "Anyone earning taxable income or required to file ITR",
  ],

  /* ================= PROCESS ================= */
  process: [
    "Consultation & eligibility check",
    "Document collection & verification",
    "Form 49A / 49AA preparation",
    "Submission via NSDL/UTI portal",
    "Acknowledgement number issued",
    "Processing & verification by authority",
    "e-PAN / Physical PAN dispatch",
  ],

  timeline:
    "Processing time depends on authority, generally a few working days for e-PAN and longer for physical PAN dispatch.",

  /* ================= DOCUMENTS ================= */
  documents: [
    "Recent passport-size photograph",
    "Aadhaar Card (preferred) / Passport / Voter ID / Driving License",
    "Proof of Address (Aadhaar / Passport / Utility Bill / Bank Statement)",
    "Proof of Date of Birth (Birth Certificate / Passport / School Certificate)",
    "For Entities: Certificate of Incorporation / Partnership Deed / Trust Deed",
  ],

  /* ================= POST PROCESS / COMPLIANCE ================= */
  postCompliance: [
    { compliance: "Track PAN Status", form: "Acknowledgement Number", frequency: "As Required" },
    { compliance: "PAN Correction / Update if needed", form: "Correction Form", frequency: "As Required" },
    { compliance: "Link PAN with Aadhaar", form: "-", frequency: "Mandatory as per law" },
  ],

  /* ================= BENEFITS ================= */
  benefits: [
    "Mandatory for filing Income Tax Returns",
    "Required for opening bank accounts",
    "Essential for property & high-value transactions",
    "Helps claim TDS refunds and credits",
    "Needed for investments and demat accounts",
    "Accepted identity proof for financial services",
  ],

  /* ================= CONTRIBUTION / IMPORTANT INFO ================= */
  gst: {
    title: "Validity & Governance",
    content:
      "PAN is valid for life. Issued under CBDT, processed by NSDL/UTI. No renewal required, only updates when details change.",
  },

  /* ================= COMPARISON ================= */
  comparison: {
    headers: ["Form Type", "Applicable Users", "Notes"],
    rows: [
      ["Form 49A", "Indian Citizens & Entities", "Most commonly used"],
      ["Form 49AA", "Foreign Citizens / NRIs", "For international applicants"],
      ["e-PAN", "Digital PAN", "Faster & email delivered"],
    ],
  },

  /* ================= WHY CHOOSE ================= */
  whyChoose: [
    "Quick & hassle-free online process",
    "Expert assistance & document verification",
    "Support for new, correction, reissue and updates",
    "Status tracking & acknowledgment assistance",
    "Secure process with guided support",
  ],

  /* ================= PRICING ================= */
  pricingPlans: [
    { plan: "Basic", bestFor: "Individuals applying for new PAN / e-PAN" },
    { plan: "Standard", bestFor: "PAN correction / updates / reissue" },
    { plan: "Premium", bestFor: "Businesses, NRIs & foreign applicants" },
  ],

  /* ================= FAQ ================= */
  faqs: [
    { q: "How long does PAN issuance take?", a: "Processing timelines depend on NSDL/UTI. e-PAN is usually quicker." },
    { q: "Can I apply without Aadhaar?", a: "Yes, alternate identity & address proofs can be used as per rules." },
    { q: "What if I lose my PAN card?", a: "You can apply for reissue or download e-PAN if available." },
    { q: "Can one PAN be used for multiple businesses?", a: "Individuals get one PAN for life. Separate PAN exists for companies/entities." },
    { q: "Is PAN mandatory for minors?", a: "Not mandatory unless required for specific transactions or bank/investment purposes." },
  ],

  /* ================= CTA ================= */
  cta: {
    title: "Need PAN Card Assistance?",
    subtitle:
      "Apply for new PAN, correction, reissue or update with expert support, secure filing & complete guidance.",
  },
};

export default panCardServiceData;
