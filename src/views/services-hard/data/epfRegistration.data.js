const epfRegistrationData = {
  id: "epf-registration",

  /* ================= META ================= */
  meta: {
    title: "EPF Registration — Employee Provident Fund for Employers | Vauditors",
    description:
      "Get EPF Registration with Vauditors. Complete support for employer PF registration, UAN generation, monthly filing, contribution management, compliance & advisory.",
  },

  /* ================= HERO ================= */
  hero: {
    title: "EPF Registration — Secure Employee Retirement & Stay Compliant",
    subtitle: "End-to-end PF Registration & Compliance Support",
    description:
      "Vauditors helps employers register under EPFO, manage PF contributions, generate UANs, and handle monthly returns — ensuring legal compliance and employee financial security.",
  },

  /* ================= ABOUT ================= */
  about: {
    title: "What is EPF Registration?",
    content:
      "EPF (Employees' Provident Fund) is a government-backed retirement savings scheme governed by the EPF & MP Act, 1952 and managed by EPFO. Both employer and employee contribute a percentage of salary each month which grows with interest. Once registered, establishments receive a PF code and employees get a Universal Account Number (UAN) linked throughout their career.",
  },

  /* ================= ELIGIBILITY ================= */
  eligibility: [
    "Mandatory for establishments with 20 or more employees",
    "Applicable to factories and notified establishments",
    "Voluntary registration available even below 20 employees",
    "Employees earning up to ₹15,000/month are mandatorily covered",
    "Employees above ₹15,000/month can join with employer consent",
  ],

  /* ================= PROCESS ================= */
  process: [
    "Eligibility check & consultation",
    "Document preparation & verification",
    "EPF registration through Unified Shram Suvidha Portal",
    "Issuance of Establishment PF Code",
    "UAN generation & employee onboarding",
    "Monthly PF filing & ongoing compliance support",
  ],

  timeline:
    "Generally completed within a few working days depending on document clarity & EPFO verification.",

  /* ================= DOCUMENTS ================= */
  documents: [
    "Certificate of Incorporation / Partnership Deed / Shop & Establishment License",
    "PAN of entity & employer",
    "GST certificate (if applicable)",
    "Business address proof",
    "Bank proof (Cancelled Cheque / Bank Statement)",
    "Digital Signature (DSC)",
    "Employer ID & Address Proof",
    "Employee details — Aadhaar, Salary, Joining Date, Nominee details",
  ],

  /* ================= POST REGISTRATION ================= */
  postCompliance: [
    { compliance: "Monthly PF Contribution & ECR Filing", form: "-", frequency: "Monthly (Before 15th)" },
    { compliance: "UAN Generation & Employee Updates", form: "-", frequency: "As Required" },
    { compliance: "Annual PF Return", form: "-", frequency: "Yearly" },
    { compliance: "Compliance with inspections & notices", form: "-", frequency: "As Required" },
  ],

  /* ================= BENEFITS ================= */
  benefits: [
    "Retirement savings & financial security for employees",
    "Tax-free interest & Section 80C benefits",
    "Risk coverage, pension & insurance (EPS + EDLI)",
    "Improves employee trust & retention",
    "Ensures labour law compliance & avoids penalties",
  ],

  /* ================= CONTRIBUTION / IMPORTANT INFO ================= */
  gst: {
    title: "EPF Contribution & Interest",
    content:
      "Employee contributes 12% of basic + DA. Employer contributes 12% (8.33% to EPS & 3.67% to EPF) plus EDLI & admin charges. Current PF interest rate: 8.25% p.a. (subject to EPFO notifications).",
  },

  /* ================= COMPARISON ================= */
  comparison: {
    headers: ["Particular", "Rate / Requirement", "Notes"],
    rows: [
      ["Employee Contribution", "12%", "On basic salary + DA"],
      ["Employer Contribution", "12%", "8.33% EPS + 3.67% EPF"],
      ["Admin & EDLI Charges", "Approx 1.61%", "As per EPFO rules"],
      ["Mandatory Employee Limit", "₹15,000/month", "Above limit voluntary"],
    ],
  },

  /* ================= WHY CHOOSE ================= */
  whyChoose: [
    "Complete EPF registration support",
    "Expert guidance & compliance assurance",
    "UAN creation & employee onboarding support",
    "Timely monthly filing & advisory",
    "Affordable plans for startups, SMEs & large enterprises",
  ],

  /* ================= PRICING ================= */
  pricingPlans: [
    { plan: "Basic", bestFor: "Small organizations needing registration only" },
    { plan: "Standard", bestFor: "Businesses needing registration + filings" },
    { plan: "Premium", bestFor: "Enterprises requiring ongoing compliance & advisory" },
  ],

  /* ================= FAQ ================= */
  faqs: [
    { q: "Is PF registration mandatory?", a: "Yes, for establishments with 20+ employees. Voluntary registration is also allowed." },
    { q: "What is the due date for PF payment?", a: "PF contribution must be paid on or before the 15th of every month." },
    { q: "Can an employee have multiple PF accounts?", a: "No. Multiple accounts can exist only due to job changes but are linked via UAN." },
    { q: "Is PF tax-free?", a: "Yes, contributions and interest are generally tax-exempt subject to rules." },
    { q: "Can PF be transferred when changing jobs?", a: "Yes, PF is easily transferred through UAN linked to Aadhaar." },
  ],

  /* ================= CTA ================= */
  cta: {
    title: "Need EPF Registration or Compliance Help?",
    subtitle:
      "Vauditors handles EPF registration, UAN generation, monthly filings & full compliance — so you stay worry-free.",
  },
};

export default epfRegistrationData;
