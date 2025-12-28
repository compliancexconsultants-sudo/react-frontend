const esiRegistrationData = {
  id: "esi-registration",

  /* ================= META ================= */
  meta: {
    title: "ESI Registration — Employee Health & Social Security | ComplianceX Consultants",
    description:
      "Get ESIC registration quickly and compliantly with ComplianceX Consultants. Complete guidance on eligibility, documents, process, contribution rates, penalties & compliance support.",
  },

  /* ================= HERO ================= */
  hero: {
    title: "ESI Registration — Secure Employee Health & Social Security",
    subtitle: "Get ESI Registration quickly and compliantly",
    description:
      "ComplianceX Consultants helps employers register under the ESIC scheme, comply with labour laws, and manage contributions & returns — protecting your workforce while avoiding penalties.",
  },

  /* ================= ABOUT ================= */
  about: {
    title: "What is ESI Registration?",
    content:
      "ESI Registration is the formal enrolment of eligible establishments under the Employees' State Insurance Act, 1948. Managed by the Employees' State Insurance Corporation (ESIC), the scheme provides medical, cash and social security benefits to employees and their dependents. Employers contribute a fixed percentage of wages and employees receive an ESIC number to avail benefits.",
  },

  /* ================= ELIGIBILITY ================= */
  eligibility: [
    "Applicable to non-seasonal factories and notified establishments",
    "Covers shops, hotels, restaurants, cinemas, transport, education & medical institutions, etc.",
    "Mandatory when employee count exceeds 10 in most states (20 in some states)",
    "Employees earning up to ₹21,000/month eligible (₹25,000 for persons with disabilities)",
    "Employer must register within prescribed time (generally within 15 days of applicability)",
  ],

  /* ================= PROCESS ================= */
  process: [
    "Initial consultation & eligibility check",
    "Document preparation & collection",
    "Submission of employer registration on ESIC portal",
    "Verification & approval by ESIC",
    "Issuance of 17-digit ESIC Employer Code",
    "Employee enrolment & ESI number generation",
    "Ongoing contribution filing & compliance support",
  ],

  timeline: "A few working days depending on portal processing & document clarity",

  /* ================= DOCUMENTS ================= */
  documents: [
    "Certificate of Incorporation / Registration / Shop & Establishment certificate",
    "PAN of business",
    "Business address proof (rent agreement, electricity bill, tax receipt)",
    "Bank proof (cancelled cheque / statement)",
    "Authorized signatory ID proof",
    "List of employees with Aadhaar, DOB, wages & contact details",
    "Salary / wage register",
    "DSC (where required)",
    "Any state-specific compliance documents",
  ],

  /* ================= POST REGISTRATION ================= */
  postCompliance: [
    { compliance: "Monthly Contribution Payment", form: "-", frequency: "Monthly" },
    { compliance: "Employee Enrollment & Updates", form: "-", frequency: "As Required" },
    { compliance: "Return Filing & Registers", form: "Form 1A, Form 5 etc.", frequency: "Half-yearly / As prescribed" },
    { compliance: "Maintain statutory registers & inspection records", form: "-", frequency: "Ongoing" },
  ],

  /* ================= BENEFITS ================= */
  benefits: [
    "Comprehensive medical care for employees & dependents",
    "Sickness & maternity benefits",
    "Disablement & dependants' benefits",
    "Funeral benefits & other social security advantages",
    "Helps attract & retain employees",
    "Ensures compliance & avoids labour penalties",
  ],

  /* ================= CONTRIBUTION INFO ================= */
  gst: {
    title: "ESI Contribution Rates",
    content:
      "Employer contributes 3.25% of employee wages and employees contribute 0.75%, totaling 4.00% of wages. Contributions are deposited monthly. Rates are government-controlled and subject to revision.",
  },

  /* ================= COMPARISON (Simplified Reference Table) ================= */
  comparison: {
    headers: ["Aspect", "Requirement", "Notes"],
    rows: [
      ["Applicability Employee Count", "10 (20 in some states)", "Non-seasonal establishments"],
      ["Eligible Salary Limit", "₹21,000 / month", "₹25,000 for PwD"],
      ["Contribution", "4% total", "Employer 3.25% + Employee 0.75%"],
      ["Government Fee", "₹0", "Only statutory contribution cost"],
    ],
  },

  /* ================= WHY CHOOSE ================= */
  whyChoose: [
    "End-to-end ESI registration assistance",
    "Employee uploads & enrollment support",
    "Accurate contribution calculation",
    "Timely filing reminders & compliance tracking",
    "State-wise expertise",
    "Dedicated support team & documentation help",
  ],

  /* ================= PRICING ================= */
  pricingPlans: [
    { plan: "Basic", bestFor: "Small Businesses & Startups" },
    { plan: "Standard", bestFor: "Growing Companies" },
    { plan: "Premium", bestFor: "Enterprises needing ongoing compliance" },
  ],

  /* ================= FAQ ================= */
  faqs: [
    { q: "When does ESI become mandatory?", a: "When employee strength crosses threshold & eligible wages fall under notified limits." },
    { q: "Who is eligible as an insured person?", a: "Employees earning up to ₹21,000/month or ₹25,000 for PwD." },
    { q: "How soon do employees get benefits?", a: "Benefits start after registration & contribution compliance." },
    { q: "How often must contributions be paid?", a: "Generally monthly as per ESIC schedule." },
    { q: "Can contractors or gig workers be covered?", a: "Depends on employment structure & applicability rules." },
  ],

  /* ================= CTA ================= */
  cta: {
    title: "Need ESI Registration or Compliance Support?",
    subtitle:
      "ComplianceX Consultants helps you register your establishment, onboard employees, file contributions & stay labour law compliant.",
  },
};

export default esiRegistrationData;
