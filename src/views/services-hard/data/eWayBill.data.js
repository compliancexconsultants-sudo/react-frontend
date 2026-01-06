const eWayBillData = {
  id: "eway-bill",

  /* ================= META ================= */
  meta: {
    title: "E-Way Bill – Generate & Manage GST Transport Compliance | Vauditors",
    description:
      "E-Way Bill filing & compliance support with Vauditors — generate EBNs, consolidated E-way bills, multi-vehicle movements, corrections & logistics compliance.",
  },

  /* ================= HERO ================= */
  hero: {
    title: "E-Way Bill – Complete Guide for Businesses & Taxpayers",
    subtitle: "Seamless Goods Movement • Zero Penalties • 100% GST Compliance",
    description:
      "The E-Way Bill system tracks movement of goods under GST. Vauditors ensures error-free E-Way Bill generation, corrections, consolidated filing, logistics compliance & audit support.",
  },

  /* ================= ABOUT ================= */
  about: {
    title: "What is an E-Way Bill?",
    content:
      "An E-Way Bill is an online document mandated under Rule 138 of the CGST Rules, 2017 for movement of goods. It records supplier & recipient details, invoice value, transport mode, distance and vehicle details. It must be generated before dispatch for compliant transit.",
  },

  /* ================= WHEN REQUIRED ================= */
  mandatory: {
    title: "When is an E-Way Bill Mandatory?",
    threshold: "Required when consignment value exceeds ₹50,000.",
    movements: [
      "Sales & branch transfers",
      "Returns & job work",
      "E-commerce deliveries",
      "Interstate movement (always)",
      "Intra-state where state has notified",
      "Imports & exports",
    ],
  },

  /* ================= WHO GENERATES ================= */
  whoGenerates: [
    "Registered supplier or recipient",
    "Transporter (if consignor fails to generate)",
    "E-commerce operator in applicable cases",
  ],

  /* ================= DETAILS NEEDED ================= */
  detailsNeeded: [
    "Supplier GSTIN & address",
    "Recipient GSTIN",
    "Invoice/Challan number & date",
    "HSN, description, quantity & value",
    "Transport mode & vehicle number",
    "Distance & route details",
  ],

  /* ================= VALIDITY ================= */
  validity: [
    "Up to 200 KM – 1 Day",
    "Every additional 200 KM – +1 Day",
    "Validity can be extended before expiry",
  ],

  /* ================= PROCESS ================= */
  process: [
    "Login to ewaybillgst.gov.in",
    "Select Generate E-Way Bill",
    "Enter invoice details & document type",
    "Enter transporter mode, vehicle & distance",
    "Submit & download EBN with QR",
  ],

  /* ================= TYPES ================= */
  types: [
    "Normal E-Way Bill",
    "Bill-to Ship-to",
    "Consolidated E-Way Bill",
    "Multi-Vehicle Movement",
    "Part A (invoice data)",
    "Part B (vehicle data)",
  ],

  /* ================= DOCUMENTS ================= */
  documents: [
    "GST Invoice / Delivery Challan",
    "Transporter ID / Vehicle Number",
    "Transport Mode Details",
    "HSN, description & value details",
  ],

  /* ================= PENALTY ================= */
  penalties: [
    "₹10,000 penalty or tax amount (higher of the two)",
    "Detention & seizure of goods",
    "Confiscation risk",
    "Adverse GST compliance impact",
  ],

  /* ================= WHY IMPORTANT ================= */
  importance: [
    "Avoid penalties & detention",
    "Ensure uninterrupted logistics",
    "Maintain GST audit compliance",
    "Smooth ITC reconciliation",
  ],

  /* ================= WHY CHOOSE ================= */
  whyChoose: [
    "Same-day E-Way Bill generation",
    "High-volume & multi-state support",
    "Branch transfer & complex case handling",
    "24/7 urgent shipment assistance",
    "Corrections, cancellations & audit help",
  ],

  /* ================= PROCESS WITH US ================= */
  ourProcess: [
    "Share invoice & transport details",
    "We verify HSN, value & compliance",
    "E-Way Bill generated instantly",
    "EBN shared with logistics team",
    "Live support for amendments",
    "Records archived for GST audits",
  ],

  /* ================= FAQ ================= */
  faqs: [
    { q: "Is an E-Way Bill compulsory for all goods?", a: "Required when value exceeds ₹50,000 or as notified by state/interstate rules." },
    { q: "Can I cancel an E-Way Bill?", a: "Yes, within 24 hours if goods not transported." },
    { q: "Is it needed for intra-state movement?", a: "Yes where state has notified; interstate always required." },
    { q: "What if vehicle number changes?", a: "Update Part B immediately." },
    { q: "Can validity be extended?", a: "Yes, before expiry if goods still in transit." },
  ],

  /* ================= CTA ================= */
  cta: {
    title: "Need Help with E-Way Bill Filing?",
    subtitle:
      "Let Vauditors manage your E-Way Bills with accuracy, speed, and complete GST compliance.",
  },
};

export default eWayBillData;
