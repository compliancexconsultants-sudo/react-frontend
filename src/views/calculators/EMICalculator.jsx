import React, { useMemo, useState } from "react";
import Layout from "../../components/Layout";
import "./EMICalculator.css";

const EMICalculator = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(5);

  const result = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  }, [amount, rate, years]);

  return (
    <Layout>
      <div className="calc-wrap">
        <h1>EMI Calculator</h1>

        <div className="calc-card">
          <label>Loan Amount</label>
          <input type="number" value={amount} onChange={e => setAmount(+e.target.value)} />

          <label>Interest Rate (%)</label>
          <input type="number" value={rate} onChange={e => setRate(+e.target.value)} />

          <label>Tenure (Years)</label>
          <input type="number" value={years} onChange={e => setYears(+e.target.value)} />
        </div>

        <div className="calc-result highlight">
          Monthly EMI: ₹ {result.toLocaleString()}
        </div>
      </div>
    </Layout>
  );
};

export default EMICalculator;
