import React, { useMemo, useState } from "react";
import Layout from "../../components/Layout";
import "./HRACalculator.css";

const HRACalculator = () => {
  const [basic, setBasic] = useState(30000);
  const [hra, setHra] = useState(15000);
  const [rent, setRent] = useState(18000);
  const [metro, setMetro] = useState(true);

  const exempt = useMemo(() => {
    const a = hra;
    const b = rent - 0.1 * basic;
    const c = (metro ? 0.5 : 0.4) * basic;
    return Math.max(0, Math.min(a, b, c));
  }, [basic, hra, rent, metro]);

  return (
    <Layout>
      <div className="calc-wrap">
        <h1>HRA Calculator</h1>

        <div className="calc-card">
          <label>Basic Salary (Monthly)</label>
          <input type="number" value={basic} onChange={e => setBasic(+e.target.value)} />

          <label>HRA Received (Monthly)</label>
          <input type="number" value={hra} onChange={e => setHra(+e.target.value)} />

          <label>Rent Paid (Monthly)</label>
          <input type="number" value={rent} onChange={e => setRent(+e.target.value)} />

          <label>
            <input type="checkbox" checked={metro} onChange={() => setMetro(!metro)} /> Living in Metro City
          </label>
        </div>

        <div className="calc-result highlight">
          HRA Exempted: ₹ {exempt.toLocaleString()}
        </div>
      </div>
    </Layout>
  );
};

export default HRACalculator;
