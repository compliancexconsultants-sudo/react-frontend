import React, { useMemo, useState } from "react";
import Layout from "../../components/Layout";
import "./TaxCalculator.css";
import { parseNum, calcOldSlabTax, calcNewSlabTax } from "./taxUtils";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import TaxReportPDF from "./TaxReportPDF";

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
  ].map(parseNum).join("|");


  /* ================= TAX CALCULATION ================= */
  const result = useMemo(() => {

    const sal = parseNum(salary);
    const ex = parseNum(exempt);
    const int = parseNum(interest);
    const oth = parseNum(other);
    const cry = parseNum(crypto);



    const grossOld = Math.max(0, sal - ex) + int + oth;
    const stdOld = grossOld > 0 ? 50000 : 0;

    const dedOld =
      Math.min(parseNum(c80), 150000) +
      Math.min(parseNum(d80), age === "Below 60" ? 25000 : 50000) +
      Math.min(parseNum(npsEmp), 50000) +
      parseNum(npsOrg) +
      parseNum(otherDed);

    // ===== OLD REGIME =====
    const taxableOld = Math.max(0, grossOld - stdOld - dedOld);

    // slab tax
    let slabOld = calcOldSlabTax(taxableOld, age);

    // 87A rebate (ONLY on slab tax)
    let rebateOld = 0;
    if (taxableOld <= 500000) {
      rebateOld = Math.min(12500, slabOld);
    }
    slabOld -= rebateOld;
    if (slabOld < 0) slabOld = 0;

    // crypto tax (NO rebate)
    const cryptoTaxOld = cry * 0.3;

    // cess
    const cessOld = (slabOld + cryptoTaxOld) * 0.04;

    const totalOldTax = slabOld + cryptoTaxOld + cessOld;

    // ===== NEW REGIME =====
    const grossNew = sal + int + oth;
    const stdNew = grossNew > 0 ? 75000 : 0;
    const taxableNew = Math.max(0, grossNew - stdNew - parseNum(npsOrg));

    // slab tax
    let slabNew = calcNewSlabTax(taxableNew);

    // 87A rebate (ONLY on slab tax)
    let rebateNew = 0;
    if (taxableNew <= 1200000) {
      rebateNew = Math.min(60000, slabNew);
    }
    slabNew -= rebateNew;
    if (slabNew < 0) slabNew = 0;

    // crypto tax
    const cryptoTaxNew = cry * 0.3;

    // cess
    const cessNew = (slabNew + cryptoTaxNew) * 0.04;

    let totalNewTax = slabNew + cryptoTaxNew + cessNew;
    // ===== MARGINAL RELIEF (NEW REGIME) =====
    if (taxableNew > 1200000 && taxableNew <= 1275000) {
      const excessIncome = taxableNew - 1200000;
      const maxTaxAllowed = excessIncome * 1.04; // incl. cess

      if (totalNewTax > maxTaxAllowed) {
        totalNewTax = maxTaxAllowed;
      }
    }

    // ===== FINAL RESULT =====
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

  /* ================= UI ================= */
  return (
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
                  <Field label="Salary Income" value={salary} set={setSalary} />
                  <Field label="Exempt Allowances" value={exempt} set={setExempt} />
                  <Field label="Interest Income" value={interest} set={setInterest} />
                  <Field label="Other Income" value={other} set={setOther} />
                  <Field label="Crypto Income" value={crypto} set={setCrypto} />
                </div>

                <Actions>
                  <Secondary onClick={() => setTab("basic")}>Back</Secondary>
                  <Primary onClick={() => setTab("deduction")}>Continue</Primary>
                </Actions>
              </>
            )}

            {tab === "deduction" && (
              <>
                <div className="ct-grid">
                  <Field label="80C" value={c80} set={setC80} />
                  <Field label="80D" value={d80} set={setD80} />
                  <Field label="NPS Employee" value={npsEmp} set={setNpsEmp} />
                  <Field label="NPS Employer" value={npsOrg} set={setNpsOrg} />
                  <Field label="Other Deduction" value={otherDed} set={setOtherDed} />
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

        {/* ===== HIDDEN PDF RENDER ===== */}
        <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
          <TaxReportPDF data={pdfData} />
        </div>

      </div>
    </Layout>
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
