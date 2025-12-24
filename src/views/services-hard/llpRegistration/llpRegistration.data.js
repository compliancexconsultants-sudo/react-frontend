const llpRegistrationData = {
  hero: {
    title: "Limited Liability Partnership (LLP) Registration",
    subtitle: "Simplified Guide by ComplianceX Consultants",
    description:
      "Launch your LLP easily and professionally with ComplianceX Consultants. From Digital Signatures to LLP Agreement drafting, PAN/TAN, and bank account setup — we manage the entire process online so you can focus on your business, not paperwork.",
  },

  about: {
    title: "What is a Limited Liability Partnership (LLP)?",
    content:
      "A Limited Liability Partnership (LLP) is a modern business structure that combines the flexibility of a partnership with the limited liability of a company. Governed by the LLP Act, 2008, it protects partners’ personal assets while offering tax efficiency and management flexibility. LLPs are ideal for startups, consultants, and professional service firms such as legal, accounting, architecture, and IT.",
  },

  keyFeatures: [
    "Separate legal entity — can own property and sue/be sued",
    "Limited liability — partners liable only to contribution",
    "No minimum capital requirement",
    "Flexible management — partners manage directly",
    "Perpetual succession",
    "Tax efficiency — no double taxation",
    "Easy ownership transfer as per LLP Agreement",
  ],

  whyChooseIntro:
    "ComplianceX Consultants offers a hassle-free, 100% online LLP registration service, ensuring every legal requirement is handled accurately and efficiently.",

  packageIncludes: [
    "DPIN for up to 2 partners",
    "Digital Signature Certificates (DSCs)",
    "LLP name approval via RUN-LLP",
    "Customized LLP Agreement drafting",
    "Filing of incorporation forms with ROC",
    "PAN & TAN application",
    "Current account setup assistance",
    "Certificate of Incorporation",
    "Post-registration compliance guidance (GST, MSME, ITR, etc.)",
  ],

  benefits: [
    "Limited liability protection — personal assets secure",
    "Separate legal entity — independent contracting ability",
    "No audit requirement for small LLPs",
    "Tax efficiency with pass-through taxation",
    "No minimum capital to start",
    "Global credibility and acceptance",
    "Business continuity through perpetual succession",
  ],

  documents: {
    partners: [
      "PAN Card (Indian Nationals) / Passport (Foreign Nationals)",
      "Aadhaar / Voter ID / Driving License",
      "Passport-size photographs",
      "Proof of residence (utility bill / bank statement ≤ 2 months)",
    ],
    registeredOffice: [
      "Rent agreement or ownership deed",
      "Latest utility bill",
      "NOC from owner (if premises is rented)",
    ],
    additional: [
      "Digital Signature Certificates (DSC) for all designated partners",
      "Consent to act as partners (Form 9)",
      "Signed & notarized LLP Agreement",
      "Translated & apostilled documents (if not in English)",
    ],
  },

  eligibilityTable: {
    headers: ["Criteria", "Requirement"],
    rows: [
      ["Minimum Partners", "2 (at least 1 resident Indian)"],
      ["Maximum Partners", "No limit"],
      ["Registered Office", "Valid physical address in India"],
      ["Digital Signature (DSC)", "Mandatory for all partners"],
      ["DPIN", "Required for designated partners"],
    ],
  },

  process: [
    "Consultation & planning — structure and checklist",
    "Name reservation via RUN-LLP",
    "Obtain DSC & DPIN for partners",
    "Draft LLP Agreement",
    "File incorporation with ROC (FiLLiP)",
    "Receive Certificate of Incorporation",
    "Apply for PAN, TAN & open bank account",
    "File LLP Agreement with ROC (Form 3) within 30 days",
  ],

  incorporationChecklist: [
    { task: "PAN & TAN Application", desc: "Tax identification", timeline: "Immediate" },
    { task: "LLP Agreement Filing", desc: "Form 3 with ROC", timeline: "Within 30 days" },
    { task: "GST Registration", desc: "Threshold-based", timeline: "As applicable" },
    { task: "Bank Account Opening", desc: "In LLP name", timeline: "Immediate" },
    { task: "MSME/Udyam Registration", desc: "Optional benefits", timeline: "Anytime" },
    { task: "Annual Filings", desc: "Form 8 & Form 11", timeline: "Every year" },
  ],

  annualCompliance: {
    headers: ["Compliance", "Form", "Due Date", "Applicability"],
    rows: [
      ["Annual Return", "Form 11", "30 May", "Every year"],
      ["Statement of Accounts & Solvency", "Form 8", "30 October", "Every year"],
      ["Designated Partner KYC", "DIR-3 KYC", "30 October", "Annual"],
      ["LLP Agreement Modification", "Form 3", "Within 30 days", "Event-based"],
      ["Change in Registered Office", "Form 15", "Within 30 days", "Event-based"],
    ],
  },

  taxation: [
    "LLP taxed as a partnership firm",
    "Flat tax rate: 30% + cess & surcharge",
    "Income Tax Return: ITR-5",
    "Tax audit mandatory if turnover exceeds ₹1 crore",
    "No Dividend Distribution Tax (DDT)",
  ],

  comparison: {
    headers: ["Feature", "LLP", "Private Limited Company", "Partnership Firm"],
    rows: [
      ["Legal Entity", "Separate", "Separate", "Not separate"],
      ["Liability", "Limited", "Limited", "Unlimited"],
      ["Minimum Members", "2", "2", "2"],
      ["Compliance", "Low", "High", "Low"],
      ["Taxation", "Pass-through", "Corporate tax", "Personal income"],
      ["Ownership Transfer", "Easy", "Easy", "Difficult"],
      ["Suitable For", "Professionals & SMEs", "Funded startups", "Small traders"],
    ],
  },

  whyChoose: [
    "100% online process — no physical visits",
    "End-to-end legal & compliance support",
    "Expert team of CAs, CSs & legal consultants",
    "Transparent pricing with no hidden charges",
    "Fast turnaround — usually 7–10 working days",
    "Ongoing support for GST, accounting, ROC filings, ITR & audits",
  ],
};

export default llpRegistrationData;
