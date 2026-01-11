import React, { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import "./TaxCalculator.css";
import { parseNum, calcOldSlabTax, calcNewSlabTax } from "./taxUtils";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import TaxReportPDF from "./TaxReportPDF";
import axios from "axios";

const FY_OPTIONS = ["2025-26"];
const AGE_OPTIONS = ["Below 60", "60 - 80", "80 and above"];

export default function TaxCalculator() {
  const [tab, setTab] = useState("basic");

  // BASIC
  const [financialYear, setFinancialYear] = useState("2025-26");
  const [age, setAge] = useState("Below 60");

  // INCOME
  const [salary, setSalary] = useState("");
  const [exempt, setExempt] = useState("");
  const [interest, setInterest] = useState("");
  const [other, setOther] = useState("");
  const [crypto, setCrypto] = useState("");

  // DEDUCTIONS
  const [c80, setC80] = useState("");
  const [d80, setD80] = useState("");
  const [npsEmp, setNpsEmp] = useState("");
  const [npsOrg, setNpsOrg] = useState("");
  const [otherDed, setOtherDed] = useState("");
  const [taxNews, setTaxNews] = useState([]);
  const [taxNewsLoading, setTaxNewsLoading] = useState(true);
  const NEWS_API_KEY = "pub_e0e550d8d9434488bf5ebd6eacb79a4e";

  useEffect(() => {
    fetchTaxNews();
  }, []);

  const normalizedInputs = [
    salary,
    exempt,
    interest,
    other,
    crypto,
    c80,
    d80,
    npsEmp,
    npsOrg,
    otherDed,
  ]
    .map(parseNum)
    .join("|");

  /* ================= TAX CALCULATION ================= */
  const result = useMemo(() => {
    const sal = parseNum(salary);
    const ex = parseNum(exempt);
    const int = parseNum(interest);
    const oth = parseNum(other);
    const cry = parseNum(crypto);

    /* ================= OLD REGIME ================= */

    const grossOld = Math.max(0, sal - ex) + int + oth;
    const stdOld = grossOld > 0 ? 50000 : 0;

    const dedOld =
      Math.min(parseNum(c80), 150000) +
      Math.min(parseNum(d80), age === "Below 60" ? 25000 : 50000) +
      Math.min(parseNum(npsEmp), 50000) +
      parseNum(npsOrg) +
      parseNum(otherDed);

    const taxableOld = Math.max(0, grossOld - stdOld - dedOld);

    let slabOld = calcOldSlabTax(taxableOld, age);

    let rebateOld = 0;
    if (taxableOld <= 500000) {
      rebateOld = Math.min(12500, slabOld);
    }
    slabOld = Math.max(0, slabOld - rebateOld);

    const cryptoTaxOld = cry * 0.3;

    // ---- SURCHARGE (OLD REGIME) ----
    let surchargeOld = 0;
    const baseOld = slabOld + cryptoTaxOld;

    if (taxableOld > 5000000 && taxableOld <= 10000000) {
      surchargeOld = baseOld * 0.1;
    } else if (taxableOld > 10000000 && taxableOld <= 20000000) {
      surchargeOld = baseOld * 0.15;
    } else if (taxableOld > 20000000 && taxableOld <= 50000000) {
      surchargeOld = baseOld * 0.25;
    } else if (taxableOld > 50000000) {
      surchargeOld = baseOld * 0.37;
    }

    // ---- CESS ----
    const cessOld = (baseOld + surchargeOld) * 0.04;

    const totalOldTax = baseOld + surchargeOld + cessOld;

    /* ================= NEW REGIME ================= */

    const grossNew = sal + int + oth;
    const stdNew = grossNew > 0 ? 75000 : 0;
    // ONLY employer NPS allowed in New Regime
    const allowedNewDeduction = parseNum(npsOrg);

    const taxableNew = Math.max(0, grossNew - stdNew - allowedNewDeduction);

    let slabNew = calcNewSlabTax(taxableNew);

    let rebateNew = 0;
    if (taxableNew <= 1200000) {
      rebateNew = Math.min(60000, slabNew);
    }
    slabNew = Math.max(0, slabNew - rebateNew);

    const cryptoTaxNew = cry * 0.3;

    // ---- SURCHARGE (NEW REGIME) ----
    let surchargeNew = 0;
    const baseForSurcharge = slabNew + cryptoTaxNew;

    if (taxableNew > 5000000 && taxableNew <= 10000000) {
      surchargeNew = baseForSurcharge * 0.1;
    } else if (taxableNew > 10000000 && taxableNew <= 20000000) {
      surchargeNew = baseForSurcharge * 0.15;
    } else if (taxableNew > 20000000 && taxableNew <= 50000000) {
      surchargeNew = baseForSurcharge * 0.25;
    } else if (taxableNew > 50000000) {
      surchargeNew = baseForSurcharge * 0.37;
    }

    // ---- CESS ----
    const cessNew = (baseForSurcharge + surchargeNew) * 0.04;

    let totalNewTax = baseForSurcharge + surchargeNew + cessNew;

    // ---- MARGINAL RELIEF (NEW REGIME) ----
    if (taxableNew > 1200000 && taxableNew <= 1275000) {
      const excessIncome = taxableNew - 1200000;
      const maxTaxAllowed = excessIncome * 1.04; // incl. cess

      if (totalNewTax > maxTaxAllowed) {
        totalNewTax = maxTaxAllowed;
      }
    }

    /* ================= FINAL RESULT ================= */

    return {
      oldTax: Math.round(totalOldTax),
      newTax: Math.round(totalNewTax),
      save: Math.round(Math.abs(totalOldTax - totalNewTax)),
    };
  }, [normalizedInputs, age]);

  /* ================= PDF DATA ================= */
  const pdfData = {
    financialYear,
    age,
    salary: parseNum(salary),
    interest: parseNum(interest),
    other: parseNum(other),
    crypto: parseNum(crypto),
    result,
  };

  /* ================= DOWNLOAD PDF ================= */
  const downloadReport = async () => {
    const pdf = new jsPDF("p", "px", "a4");
    const pages = document.querySelectorAll(".pdf-page");

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], {
        scale: 2,
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      if (i !== 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save(`Complix_Income_Tax_Report_${financialYear}.pdf`);
  };
  const fetchTaxNews = async () => {
    try {
      const res = await axios.get(
        `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&q="income tax" OR ITR OR "tax filing" OR CBDT OR "income tax return"&language=en&country=in`
      );

      setTaxNews(res.data.results || []);
      setTaxNewsLoading(false);
    } catch (err) {
      console.error("Income tax news fetch failed", err);
      setTaxNewsLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is this income tax calculator accurate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. This calculator follows the latest Indian income tax slabs, rebates, cess and surcharge rules for FY 2025–26.",
                },
              },
              {
                "@type": "Question",
                name: "Does it include health and education cess?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. A 4% Health and Education Cess is added automatically.",
                },
              },
              {
                "@type": "Question",
                name: "Does it compare old and new tax regimes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The calculator computes tax under both regimes and shows which is more beneficial.",
                },
              },
              {
                "@type": "Question",
                name: "Can freelancers use this calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Freelancers and professionals can calculate tax based on their total income.",
                },
              },
              {
                "@type": "Question",
                name: "Is this income tax calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The ComplianceX Income Tax Calculator is completely free.",
                },
              },
            ],
          }),
        }}
      />

      <Layout>
        <div className="ct-page">
          {/* ===== TABS ===== */}
          <div className="ct-tabs">
            {["basic", "income", "deduction"].map((t) => (
              <button
                key={t}
                className={tab === t ? "active" : ""}
                onClick={() => setTab(t)}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="ct-layout">
            {/* ===== LEFT FORM ===== */}
            <div className="ct-form">
              {tab === "basic" && (
                <>
                  <div className="ct-top">
                    <Select
                      label="Financial Year"
                      value={financialYear}
                      onChange={setFinancialYear}
                      options={FY_OPTIONS}
                    />
                    <Select
                      label="Age Category"
                      value={age}
                      onChange={setAge}
                      options={AGE_OPTIONS}
                    />
                  </div>

                  <Actions>
                    <Primary onClick={() => setTab("income")}>Continue</Primary>
                  </Actions>
                </>
              )}

              {tab === "income" && (
                <>
                  <div className="ct-grid">
                    <Field
                      label="Salary Income"
                      value={salary}
                      set={setSalary}
                    />
                    <Field
                      label="Exempt Allowances"
                      value={exempt}
                      set={setExempt}
                    />
                    <Field
                      label="Interest Income"
                      value={interest}
                      set={setInterest}
                    />
                    <Field label="Other Income" value={other} set={setOther} />
                    <Field
                      label="Crypto Income"
                      value={crypto}
                      set={setCrypto}
                    />
                  </div>

                  <Actions>
                    <Secondary onClick={() => setTab("basic")}>Back</Secondary>
                    <Primary onClick={() => setTab("deduction")}>
                      Continue
                    </Primary>
                  </Actions>
                </>
              )}

              {tab === "deduction" && (
                <>
                  <div className="ct-grid">
                    <Field label="80C" value={c80} set={setC80} />
                    <Field label="80D" value={d80} set={setD80} />
                    <Field
                      label="NPS Employee"
                      value={npsEmp}
                      set={setNpsEmp}
                    />
                    <Field
                      label="NPS Employer"
                      value={npsOrg}
                      set={setNpsOrg}
                    />
                    <Field
                      label="Other Deduction"
                      value={otherDed}
                      set={setOtherDed}
                    />
                  </div>

                  <Actions>
                    <Secondary onClick={() => setTab("income")}>Back</Secondary>
                    <Primary onClick={downloadReport}>Download Report</Primary>
                  </Actions>
                </>
              )}
            </div>

            {/* ===== SUMMARY ===== */}
            <div className="ct-summary">
              <h3>Tax Summary</h3>

              <div className="ct-row">
                <span>Old Regime</span>
                <strong>₹ {result.oldTax.toLocaleString()}</strong>
              </div>

              <div className="ct-row highlight">
                <span>New Regime (Best)</span>
                <strong>₹ {result.newTax.toLocaleString()}</strong>
              </div>

              <div className="ct-save">
                You Save ₹ {result.save.toLocaleString()}
              </div>
            </div>
          </div>

          {/* ===== INCOME TAX NEWS ===== */}
          <div className="tax-news">
            <h3>Latest Income Tax Updates</h3>

            {taxNewsLoading ? (
              <p>Loading income tax news…</p>
            ) : (
              <div className="tax-news-grid">
                {taxNews.map((news, i) => (
                  <a
                    key={i}
                    href={news.link}
                    target="_blank"
                    rel="noreferrer"
                    className="tax-news-card"
                  >
                    <img
                      src={news.image_url || "/news-placeholder.jpg"}
                      alt=""
                    />
                    <div className="tax-news-content">
                      <h4>{news.title}</h4>
                      <p>{news.description}</p>
                      <span>{news.source_id}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
          {/* ================= SEO TAX CONTENT ================= */}
          <section className="seo-tax-content">
            <nav className="seo-tax-nav">
              <a href="#tax-overview">Overview</a>
              <a href="#tax-salary">Salary</a>
              <a href="#tax-deductions">Deductions</a>
              <a href="#tax-regimes">Old vs New</a>
              <a href="#tax-faq">FAQs</a>
            </nav>

            {/* ===== OVERVIEW ===== */}
            <section id="tax-overview">
              <h2>Income Tax Calculator India – Complete Guide</h2>
              <p>
                This income tax calculator helps individuals calculate tax
                payable accurately for FY 2025–26. It supports old and new tax
                regimes and includes deductions, rebates, surcharge and cess
                automatically.
              </p>
            </section>

            {/* ===== SALARY ===== */}
            <section id="tax-salary">
              <h2>Income from Salary – How Tax Is Calculated</h2>
              <p>
                Salary income includes basic salary, HRA, allowances, bonus,
                perquisites, leave encashment and other benefits. Certain
                components are exempt or partially taxable under the Income Tax
                Act.
              </p>
              <p>
                Our calculator considers standard deduction, HRA exemption,
                professional tax and taxable allowances automatically.
              </p>
            </section>

            {/* ===== DEDUCTIONS ===== */}
            <section id="tax-deductions">
              <h2>Deductions Under Chapter VI-A</h2>
              <p>
                Deductions under Section 80C, 80D, NPS, education loan interest
                and other provisions help reduce taxable income under the old
                tax regime.
              </p>
              <ul>
                <li>80C – Investments up to ₹1.5 lakh</li>
                <li>80D – Health insurance</li>
                <li>80CCD(1B) – Additional NPS ₹50,000</li>
                <li>80E – Education loan interest</li>
              </ul>
            </section>

            {/* ===== REGIMES ===== */}
            <section id="tax-regimes">
              <h2>Old Tax Regime vs New Tax Regime</h2>
              <p>
                The old tax regime allows deductions but has higher slab rates.
                The new tax regime offers lower rates but removes most
                deductions.
              </p>
              <p>
                This calculator compares both regimes and shows which one
                results in lower tax for you.
              </p>
            </section>

            {/* ===== FAQ ===== */}
            {/* ===== FAQ ACCORDION ===== */}
            <section id="tax-faq" className="tax-faq">
              <h2>Frequently Asked Questions</h2>

              <FaqItem
                q="Is this income tax calculator accurate?"
                a="Yes. This calculator follows the latest Indian income tax slabs, rebate, cess, surcharge and regime rules for FY 2025–26."
              />

              <FaqItem
                q="Does it include health and education cess?"
                a="Yes. A 4% Health & Education Cess is added automatically on tax plus surcharge."
              />

              <FaqItem
                q="Does this calculator compare old and new tax regimes?"
                a="Yes. It calculates tax under both regimes and shows which one is cheaper for you."
              />

              <FaqItem
                q="Can freelancers and professionals use this calculator?"
                a="Yes. Freelancers, consultants and business owners can calculate tax based on their total taxable income."
              />

              <FaqItem
                q="Is this income tax calculator free?"
                a="Yes. It is completely free to use for tax estimation and planning."
              />
            </section>

            {/* ===== CTA ===== */}
            <div className="seo-tax-cta">
              <h3>Need Help With Tax Filing?</h3>
              <p>Talk to ComplianceX tax experts for planning & ITR filing.</p>
              <a href="https://wa.me/91XXXXXXXXXX">Chat on WhatsApp</a>
            </div>
          </section>

          {/* ===== HIDDEN PDF RENDER ===== */}
          <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
            <TaxReportPDF data={pdfData} />
          </div>
        </div>
      </Layout>
    </>
  );
}
function FaqItem({ q, a }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button onClick={() => setOpen(!open)}>
        <span style={{marginLeft : '20px'}}>{q}</span>
        <span className="icon">{open ? "−" : "+"}</span>
      </button>

      {open && <p>{a}</p>}
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

const Field = ({ label, value, set }) => (
  <div className="ct-field">
    <label>{label}</label>
    <input
      type="text"
      inputMode="numeric"
      placeholder="0"
      value={value}
      onChange={(e) => {
        const v = e.target.value.replace(/[^0-9]/g, "");
        set(v);
      }}
    />
  </div>
);

const Select = ({ label, value, onChange, options }) => (
  <div className="ct-select">
    <label>{label}</label>
    <select
      style={{ marginLeft: 30 }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);

const Actions = ({ children }) => <div className="ct-actions">{children}</div>;

const Primary = ({ children, onClick }) => (
  <button className="ct-primary" onClick={onClick}>
    {children}
  </button>
);

const Secondary = ({ children, onClick }) => (
  <button className="ct-secondary" onClick={onClick}>
    {children}
  </button>
);
