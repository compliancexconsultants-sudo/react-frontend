const gstAnnualReturnData = {
  id: "gst-annual-return",

  /* ================= META ================= */
  meta: {
    title: "GST Annual Return Filing (GSTR-9 & GSTR-9C) – Complete Guide | Vauditors",
    description:
      "File GST Annual Returns (GSTR-9 & GSTR-9C) with Vauditors. Expert reconciliation, ITC verification, audit preparation & accurate filings for startups, SMEs & enterprises.",
  },

  /* ================= HERO ================= */
  hero: {
    title: "GST Annual Return Filing – Complete Guide for Businesses & Taxpayers",
    subtitle: "Accurate • Compliant • Hassle-Free",
    description:
      "GST Annual Return (GSTR-9 & GSTR-9C) captures your entire year's GST activity — outward supply, inward supply, ITC, adjustments, refunds & tax liability. Vauditors ensures accurate filing, reconciliations & audit-ready compliance.",
  },

  /* ================= ABOUT ================= */
  about: {
    title: "What is GST Annual Return Filing?",
    content:
      "GST Annual Return Filing is a year-end compliance required under Sections 44 & 35(5) of the CGST Act. It summarises all outward supplies, inward supplies, ITC claims, tax payments, demands & adjustments for the entire financial year to give the government a consolidated GST compliance report.",
  },

  /* ================= WHO MUST FILE ================= */
  whoMustFile: {
    gstr9: "Mandatory for all GST-registered taxpayers including companies, LLPs, firms, proprietors & e-commerce operators.",
    gstr9c:
      "Mandatory where aggregate turnover exceeds ₹5 crore — includes reconciliation between books, GSTR-1 and GSTR-3B.",
    exempt: [
      "Input Service Distributors (ISD)",
      "TDS/TCS deductors",
      "Casual taxable persons",
      "Non-resident taxable persons",
    ],
  },

  /* ================= TYPES ================= */
  types: {
    gstr9: [
      "Annual summary filing",
      "Outward & inward supply reporting",
      "ITC claimed & reversed",
      "Tax paid & adjustments",
      "HSN summary reporting",
    ],
    gstr9c: [
      "Turnover reconciliation",
      "Tax & ITC verification",
      "Upload audited financials",
      "Self / CA certification",
    ],
    gstr9b: "Filed by e-commerce operators collecting TCS under GST.",
  },

  /* ================= DOCUMENTS ================= */
  documents: {
    salesPurchase: [
      "Monthly GSTR-1 & GSTR-3B",
      "Sales & purchase registers",
      "Credit & debit notes",
      "Stock register",
    ],
    itc: [
      "GSTR-2A / 2B reconciliation",
      "ITC reversals & ineligible ITC details",
      "E-way bill summary",
    ],
    financials: [
      "Trial balance",
      "Profit & Loss statement",
      "Balance sheet",
      "GST payment challans",
    ],
  },

  /* ================= DUE DATE ================= */
  dueDates: [
    "GSTR-9 — 31st December following the financial year",
    "GSTR-9C — 31st December following the financial year",
  ],

  /* ================= PENALTIES ================= */
  penalties: [
    "₹200 per day late fee (₹100 CGST + ₹100 SGST)",
    "Capped at 0.5% of turnover",
    "Interest on outstanding GST",
    "Higher GST audit scrutiny & notices",
    "Risk of ITC reversal & reassessments",
  ],

  /* ================= HOW TO FILE ================= */
  filingProcessGSTR9: [
    "Login to gst.gov.in & open Annual Returns",
    "Review auto-populated details",
    "Enter sales, purchase, ITC & HSN summary",
    "Reconcile with books of accounts",
    "Pay additional liability if any",
    "File using DSC / EVC & download acknowledgement",
  ],

  filingProcessGSTR9C: [
    "Reconcile turnover, tax & ITC",
    "Upload audited financial statements",
    "Prepare reconciliation statement",
    "Self certify / CA certify",
    "File on GST portal",
    "Maintain records for audit reference",
  ],

  /* ================= WHY IMPORTANT ================= */
  importance: [
    "Avoid heavy late fees & interest",
    "Maintain perfect GST compliance score",
    "Prevent audits & GST scrutiny",
    "Support loans, tenders & investor due diligence",
    "Ensure accurate compliance records",
  ],

  /* ================= WHY CHOOSE ================= */
  whyChoose: [
    "End-to-end GSTR-9 & GSTR-9C filing",
    "Full year GST reconciliation & variance reports",
    "ITC verification & cross-check with 2A/2B",
    "Error correction & GST audit support",
    "Post-filing advisory & reminders",
  ],

  /* ================= OUR PROCESS ================= */
  ourProcess: [
    "Share sales, purchase & financial data",
    "We reconcile GSTR-1, GSTR-3B, 2A/2B & books",
    "Draft prepared for your review",
    "Discuss adjustments & liabilities",
    "We file GSTR-9 / GSTR-9C",
    "Acknowledgements & compliance notes shared",
  ],

  /* ================= FAQ ================= */
  faqs: [
    { q: "Is GST annual return mandatory for everyone?", a: "Yes, except ISD, NRTP, TDS/TCS deductors & casual taxpayers." },
    { q: "Do composition dealers file an annual return?", a: "Yes, through GSTR-4 Annual Return." },
    { q: "Can GSTR-9 be revised?", a: "No, revision is currently not allowed." },
    { q: "Who must file GSTR-9C?", a: "Businesses with turnover above ₹5 crore." },
    { q: "What if ITC mismatches are found?", a: "They must be reconciled & differences may require payment." },
  ],

  /* ================= CTA ================= */
  cta: {
    title: "Need Expert Help Filing GST Annual Return?",
    subtitle:
      "Let Vauditors handle your GSTR-9 & GSTR-9C with accurate reconciliations, timely filing & audit-ready compliance.",
  },
};

export default gstAnnualReturnData;
