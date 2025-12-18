import React, { useMemo, useState } from "react";
import Layout from "../../components/Layout";
import "./GSTCalculator.css";

const GSTCalculator = () => {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(18);
  const [type, setType] = useState("exclusive"); // inclusive | exclusive

  const result = useMemo(() => {
    let gst = 0, total = 0, base = amount;

    if (type === "exclusive") {
      gst = (amount * rate) / 100;
      total = amount + gst;
    } else {
      base = amount / (1 + rate / 100);
      gst = amount - base;
      total = amount;
    }

    return {
      base: Math.round(base),
      gst: Math.round(gst),
      total: Math.round(total),
    };
  }, [amount, rate, type]);

  return (
    <Layout>
      <div className="calc-wrap">
        <h1>GST Calculator</h1>

        <div className="calc-card">
          <label>Amount</label>
          <input type="number" value={amount} onChange={e => setAmount(+e.target.value)} />

          <label>GST Rate (%)</label>
          <select value={rate} onChange={e => setRate(+e.target.value)}>
            {[5, 12, 18, 28].map(r => (
              <option key={r}>{r}</option>
            ))}
          </select>

          <div className="radio-row">
            <label>
              <input type="radio" checked={type === "exclusive"} onChange={() => setType("exclusive")} />
              GST Exclusive
            </label>
            <label>
              <input type="radio" checked={type === "inclusive"} onChange={() => setType("inclusive")} />
              GST Inclusive
            </label>
          </div>
        </div>

        <div className="calc-result">
          <div><span>Base Amount</span><b>₹ {result.base.toLocaleString()}</b></div>
          <div><span>GST</span><b>₹ {result.gst.toLocaleString()}</b></div>
          <div className="highlight"><span>Total</span><b>₹ {result.total.toLocaleString()}</b></div>
        </div>
      </div>
    </Layout>
  );
};

export default GSTCalculator;
