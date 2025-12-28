const gstRegistrationData = {
  id: "gst-registration",

  /* ================= META ================= */
  meta: {
    title: "GST Registration & GST 2.0 Guide for Businesses | ComplianceX Consultants",
    description:
      "Complete GST registration guide for Indian businesses including GST 2.0 updates. Learn eligibility, documents, process, penalties, benefits & ComplianceX Consultants assistance.",
  },

  /* ================= HERO ================= */
  hero: {
    title: "GST Registration & GST 2.0 — Complete Guide for Businesses",
    subtitle: "Stay compliant. Save taxes. Grow confidently.",
    description:
      "Everything your business needs to know about GST registration in India — including the GST 2.0 (Sept 2025) update — explained simply by ComplianceX Consultants.",
  },

  /* ================= ABOUT ================= */
  about: {
    title: "What is GST Registration?",
    content:
      "GST registration provides a GSTIN (15-digit Goods and Services Tax Identification Number) allowing businesses to legally collect GST, claim Input Tax Credit (ITC), and conduct interstate trade under India’s GST framework.",
  },

  /* ================= ELIGIBILITY ================= */
  eligibility: [
    "Businesses exceeding ₹40 lakh turnover (goods – normal states)",
    "Businesses exceeding ₹20 lakh turnover (services – normal states)",
    "Lower thresholds for special category states (₹10–20 lakh)",
    "Inter-state suppliers (mandatory regardless of turnover)",
    "E-commerce sellers (mandatory)",
    "Casual taxable persons & non-resident taxpayers",
    "Input Service Distributors, TDS/TCS deductors, OIDAR suppliers",
    "Any category notified by government",
  ],

  /* ================= PROCESS ================= */
  process: [
    "Consultation & document preparation",
    "GST portal registration – Part A to generate TRN",
    "Login with TRN & complete Part B",
    "Upload business & identity documents",
    "OTP / DSC verification",
    "Application submission & ARN generation",
    "Department verification",
    "Issuance of GSTIN & Certificate",
  ],

  timeline: "2 – 10 working days (subject to verification)",

  /* ================= DOCUMENTS ================= */
  documents: [
    "PAN & Aadhaar of Applicant / Entity",
    "Passport size photograph",
    "Business Address Proof",
    "Rent Agreement / Utility Bill / Ownership Proof",
    "Bank Account Proof (Cheque / Passbook)",
    "Partnership Deed / COI / LLP Agreement (if applicable)",
    "Board Resolution (if required)",
  ],

  /* ================= POST REGISTRATION ================= */
  postCompliance: [
    { compliance: "GSTR-1", form: "Outward Supplies", frequency: "Monthly / Quarterly" },
    { compliance: "GSTR-3B", form: "Summary Return & Tax Payment", frequency: "Monthly" },
    { compliance: "CMP-08", form: "Composition Dealers", frequency: "Quarterly" },
    { compliance: "GSTR-9", form: "Annual Return", frequency: "Annual" },
  ],

  /* ================= GST 2.0 UPDATE ================= */
  gst: {
    title: "GST 2.0 – What Changed?",
    content:
      "Effective 22 September 2025, GST 2.0 introduced a simplified three-tier tax system with slabs at 5%, 18% and 40%. Essentials largely moved to 5%, many consumer durables shifted to 18%, luxury & sin goods taxed at 40%. Insurance premiums for Health & Life are exempt. GST Appellate Tribunal reintroduced & E-Way Bill 2.0 launched.",
  },

  /* ================= BENEFITS ================= */
  benefits: [
    "Legal recognition as GST-compliant business",
    "Eligibility to claim Input Tax Credit (ITC)",
    "Ability to sell across India without restrictions",
    "Mandatory for e-commerce & interstate trade",
    "Required for government tenders",
    "Enhances business credibility",
    "Option for Composition Scheme (if eligible)",
  ],

  /* ================= COMPARISON TABLE ================= */
  comparison: {
    headers: ["Category", "Requirement", "Threshold"],
    rows: [
      ["Goods – Normal States", "Mandatory Above", "₹40 Lakh"],
      ["Services – Normal States", "Mandatory Above", "₹20 Lakh"],
      ["Special Category States", "Mandatory Above", "₹10–20 Lakh"],
      ["E-commerce Sellers", "Mandatory", "No Threshold"],
    ],
  },

  /* ================= WHY CHOOSE ================= */
  whyChoose: [
    "CA-verified filing & expert guidance",
    "Fast processing & ARN tracking",
    "Complete document support",
    "GSTIN activation & compliance setup",
    "Return filing & reconciliation support",
    "Penalty avoidance & compliance reminders",
    "Transparent pricing",
    "Pan-India GST expertise",
  ],

  /* ================= PRICING ================= */
  pricingPlans: [
    { plan: "Basic", bestFor: "Small Traders & Startups" },
    { plan: "Standard", bestFor: "Growing Businesses" },
    { plan: "Premium", bestFor: "Enterprises & E-Commerce" },
  ],

  /* ================= FAQ ================= */
  faqs: [
    { q: "How long does GST registration take?", a: "Usually 2–10 working days depending on verification." },
    { q: "Is GST registration free?", a: "Government portal fee is ₹0. Only professional support charges apply." },
    { q: "Can I register voluntarily?", a: "Yes, businesses can voluntarily register to avail ITC & credibility benefits." },
    { q: "What is a GSTIN used for?", a: "It legally enables GST collection, ITC claims & interstate business." },
    { q: "What if my application is rejected?", a: "You can reapply after rectifying the deficiencies." },
  ],

  /* ================= CTA ================= */
  cta: {
    title: "Need GST Registration or Compliance Support?",
    subtitle:
      "ComplianceX Consultants helps you register, file returns, reconcile ITC & stay 100% compliant without penalties.",
  },
};

export default gstRegistrationData;
