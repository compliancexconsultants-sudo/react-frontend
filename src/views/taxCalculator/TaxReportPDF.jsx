import React from "react";
import "./TaxReportPDF.css";
import logo from "../../assets/logo.png";

export default function TaxReportPDF({ data }) {
  const {
    financialYear,
    age,
    salary,
    interest,
    other,
    crypto,
    result,
  } = data;

  const totalIncome = salary + interest + other + crypto;

  return (
    <div id="pdf-root">

      {/* ================= PAGE 1 ================= */}
      <div className="pdf-page">

        {/* WATERMARK */}
        <div className="pdf-watermark-text">ComplianceXConsultants</div>

        {/* HEADER */}
        <div className="pdf-header">
          <div className="company-header">
            <img src={logo} alt="Company Logo" className="company-logo" />
            <div className="company-name">ComplianceXConsultants</div>


          </div>

          <h1>Income Tax Calculation Report</h1>
          <p>Financial Year {financialYear} | Assessment Year 2026-27</p>

          <div className="pdf-header-meta">
            <span className="pill">Below 60 Years</span>
            <div style={{ fontSize: 13, color: '#d1fae5', textDecoration: 'underline' }}>
              https://compliancexconsultants.in/
            </div>
            <span>Total Income: ₹{totalIncome.toLocaleString()}</span>
          </div>
        </div>

        {/* EXECUTIVE SUMMARY */}
        <h2 className="section-title">Executive Summary</h2>
        <div className="summary-box">
          This report provides a comprehensive analysis and comparison of tax
          liability under the <b>Old Tax Regime</b> and the <b>New Tax Regime</b>.
          Based on your current income structure, the <b>New Regime</b> is
          significantly more tax-efficient and delivers substantial tax savings.
          We recommend switching to the New Regime for optimal financial planning.
        </div>

        {/* INCOME DETAILS */}
        <h2 className="section-title">Income Details</h2>
        <table className="pdf-table">
          <thead>
            <tr>
              <th>Income Source</th>
              <th>Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salary Income</td>
              <td>{salary.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Other Income</td>
              <td>{other.toLocaleString()}</td>
            </tr>
            <tr className="total-row">
              <td>Total Income</td>
              <td>{totalIncome.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>

        {/* TAX COMPARISON */}
        <h2 className="section-title">Tax Comparison Analysis</h2>

        <div className="tax-cards">
          <div className="tax-card old">
            <p>OLD REGIME TAX</p>
            <h3>₹{result.oldTax.toLocaleString()}</h3>
            <span>Traditional deductions applicable</span>
          </div>

          <div className="tax-card new">
            <p>NEW REGIME TAX</p>
            <h3>₹{result.newTax.toLocaleString()}</h3>
            <span className="recommended">✓ Recommended</span>
          </div>

          <div className="tax-card save">
            <p>ANNUAL TAX SAVINGS</p>
            <h3>₹{result.save.toLocaleString()}</h3>
            <span className="pill-green">
              {((result.save / result.oldTax) * 100).toFixed(2)}% Reduction
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-box">
          <button>Explore ComplianceXConsultants App</button>
        </div>

        <div style={{ marginTop: 30 }} className="page-number">Page 1 of 1</div>
      </div>

      {/* ================= PAGE 2 ================= */}
      {/* <div className="pdf-page">

        <div className="pdf-watermark-text">ComplianceXConsultants</div>

        <div className="pdf-header slim">
          <div className="company-header">
            <img src={logo} alt="Company Logo" className="company-logo" />
            <div className="company-name">ComplianceXConsultants</div>
          </div>
        </div>

        <h2 className="section-title">Income Tax Slabs Comparison</h2>
        <p className="slab-desc">
          Below are the applicable income tax slab rates for FY 2025-26
          (AY 2026-27) for individuals below 60 years. Compare the Old Regime
          and New Regime to determine which is more beneficial for your income level.
        </p>

        <div className="slab-box">
          <h3>OLD TAX REGIME (Traditional Deductions)</h3>
          <table className="pdf-table">
            <thead>
              <tr>
                <th>Income Slab</th>
                <th>Tax Rate</th>
                <th>Tax Calculation</th>
                <th>Surcharge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to ₹2,50,000</td>
                <td>Nil</td>
                <td>Nil</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>₹2,50,001 – ₹5,00,000</td>
                <td>5%</td>
                <td>5% above ₹2,50,000</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>₹5,00,001 – ₹10,00,000</td>
                <td>20%</td>
                <td>₹12,500 + 20% above ₹5,00,000</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Above ₹10,00,000</td>
                <td>30%</td>
                <td>₹1,12,500 + 30% above ₹10,00,000</td>
                <td>As applicable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="slab-box">
          <h3>NEW TAX REGIME (No Deductions)</h3>
          <table className="pdf-table">
            <thead>
              <tr>
                <th>Income Slab</th>
                <th>Tax Rate</th>
                <th>Tax Calculation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to ₹3,00,000</td>
                <td>Nil</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>₹3,00,001 – ₹6,00,000</td>
                <td>5%</td>
                <td>5% above ₹3,00,000</td>
              </tr>
              <tr>
                <td>₹6,00,001 – ₹9,00,000</td>
                <td>10%</td>
                <td>₹15,000 + 10% above ₹6,00,000</td>
              </tr>
              <tr>
                <td>₹9,00,001 – ₹12,00,000</td>
                <td>15%</td>
                <td>₹45,000 + 15% above ₹9,00,000</td>
              </tr>
              <tr>
                <td>Above ₹12,00,000</td>
                <td>30%</td>
                <td>₹90,000 + 30% above ₹12,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="disclaimer">
          Disclaimer: This report is for estimation purposes only.
        </div>

        <div style={{ marginTop: 30 }} className="page-number">Page 2 of 2</div>
      </div> */}
    </div>
  );
}
