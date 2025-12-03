import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Collapse, Select, InputNumber, Button, Switch } from "antd";
import "./TaxCalculator.css";

const { Panel } = Collapse;
const { Option } = Select;

const TaxCalculator = () => {
    // ------------------------------ STATES ------------------------------
    const [assessmentYear, setAssessmentYear] = useState("2025-26");
    const [ageCategory, setAgeCategory] = useState("below60");

    const [income, setIncome] = useState({
        salary: 0,
        other: 0,
        interest: 0,
    });

    const [deductions, setDeductions] = useState({
        section80C: 0,
        section80D: 0,
        nps: 0,
    });

    const [hra, setHra] = useState({
        rentPaid: 0,
        basicSalary: 0,
        da: 0,
        metro: false,
    });

    const [result, setResult] = useState(null);

    // ------------------------------ HELPERS ------------------------------

    const getAgeSlabLimit = () => {
        if (ageCategory === "below60") return 250000;
        if (ageCategory === "60-80") return 300000;
        if (ageCategory === "above80") return 500000;
    };

    // HRA Exemption
    const calculateHRA = () => {
        const { rentPaid, basicSalary, da, metro } = hra;
        const basicDA = Number(basicSalary) + Number(da);

        const rule1 = rentPaid - (0.10 * basicDA);
        const rule2 = metro ? 0.50 * basicDA : 0.40 * basicDA;
        const rule3 = basicDA * 0.4;

        return Math.max(0, Math.min(rule1, rule2, rule3));
    };

    // Old Regime Slabs
    const calculateOldRegime = (taxable) => {
        const slabs = [
            { upto: getAgeSlabLimit(), rate: 0 },
            { upto: 500000, rate: 0.05 },
            { upto: 1000000, rate: 0.20 },
            { upto: Infinity, rate: 0.30 },
        ];

        let prev = 0;
        let tax = 0;

        slabs.forEach((slab) => {
            if (taxable > prev) {
                const amount = Math.min(taxable, slab.upto) - prev;
                tax += amount * slab.rate;
                prev = slab.upto;
            }
        });

        // Section 87A rebate (Up to 5 lakhs)
        if (taxable <= 500000) tax = 0;

        return Math.round(tax);
    };

    // New Regime Slabs (2024–25 onwards)
    const calculateNewRegime = (taxable) => {
        const slabs = [
            { upto: 300000, rate: 0 },
            { upto: 600000, rate: 0.05 },
            { upto: 900000, rate: 0.10 },
            { upto: 1200000, rate: 0.15 },
            { upto: 1500000, rate: 0.20 },
            { upto: Infinity, rate: 0.30 },
        ];

        let prev = 0;
        let tax = 0;

        slabs.forEach((slab) => {
            if (taxable > prev) {
                const amount = Math.min(taxable, slab.upto) - prev;
                tax += amount * slab.rate;
                prev = slab.upto;
            }
        });

        // New regime rebate (Up to 7 lakh)
        if (taxable <= 700000) tax = 0;

        return Math.round(tax);
    };

    // ------------------------------ MAIN CALC ------------------------------

    const calculateTax = () => {
        const grossIncome =
            Number(income.salary) + Number(income.other) + Number(income.interest);

        const hraExemption = calculateHRA();

        // Deductions capped by law
        const totalDeductions =
            Math.min(150000, deductions.section80C) +
            Math.min(25000, deductions.section80D) +
            Math.min(50000, deductions.nps) +
            hraExemption;

        const taxableOld = Math.max(0, grossIncome - totalDeductions);
        const taxableNew = grossIncome; // New regime = no deductions except employer NPS

        const oldTax = calculateOldRegime(taxableOld);
        const newTax = calculateNewRegime(taxableNew);

        setResult({
            grossIncome,
            totalDeductions,
            hraExemption,
            taxableOld,
            taxableNew,
            oldTax,
            newTax,
        });
    };

    // ------------------------------ UI ------------------------------

    return (
        <Layout>
            <section className="groww-container">
                <h1 className="title">Income Tax Calculator</h1>

                <div className="groww-card">
                    <Collapse ghost expandIconPosition="end">

                        {/* Assessment Year */}
                        <Panel header={<span className="label">Assessment year</span>} key="1">
                            <Select
                                value={assessmentYear}
                                onChange={setAssessmentYear}
                                style={{ width: "100%" }}
                            >
                                <Option value="2025-26">2025 – 2026</Option>
                                <Option value="2024-25">2024 – 2025</Option>
                            </Select>
                        </Panel>

                        {/* Age Category */}
                        <Panel header={<span className="label">Age category</span>} key="2">
                            <Select
                                value={ageCategory}
                                onChange={setAgeCategory}
                                style={{ width: "100%" }}
                            >
                                <Option value="below60">Below 60</Option>
                                <Option value="60-80">60 – 80</Option>
                                <Option value="above80">Above 80</Option>
                            </Select>
                        </Panel>

                        {/* Income */}
                        <Panel header={<span className="label">Income</span>} key="3">
                            {[
                                { label: "Salary Income", key: "salary" },
                                { label: "Other Income", key: "other" },
                                { label: "Interest Income", key: "interest" },
                            ].map((row) => (
                                <div className="row" key={row.key}>
                                    <span>{row.label}</span>
                                    <InputNumber
                                        min={0}
                                        style={{ width: "50%" }}
                                        value={income[row.key]}
                                        onChange={(v) => setIncome({ ...income, [row.key]: v })}
                                    />
                                </div>
                            ))}
                        </Panel>

                        {/* Deductions */}
                        <Panel header={<span className="label">Deductions</span>} key="4">
                            {[
                                { label: "80C Investment", key: "section80C" },
                                { label: "80D Medical", key: "section80D" },
                                { label: "NPS (80CCD1B)", key: "nps" },
                            ].map((row) => (
                                <div className="row" key={row.key}>
                                    <span>{row.label}</span>
                                    <InputNumber
                                        min={0}
                                        style={{ width: "50%" }}
                                        value={deductions[row.key]}
                                        onChange={(v) =>
                                            setDeductions({ ...deductions, [row.key]: v })
                                        }
                                    />
                                </div>
                            ))}
                        </Panel>

                        {/* HRA */}
                        <Panel header={<span className="label">HRA Exemption</span>} key="5">
                            <div className="row">
                                <span>Rent Paid</span>
                                <InputNumber
                                    min={0}
                                    style={{ width: "50%" }}
                                    value={hra.rentPaid}
                                    onChange={(v) => setHra({ ...hra, rentPaid: v })}
                                />
                            </div>

                            <div className="row">
                                <span>Basic Salary</span>
                                <InputNumber
                                    min={0}
                                    style={{ width: "50%" }}
                                    value={hra.basicSalary}
                                    onChange={(v) => setHra({ ...hra, basicSalary: v })}
                                />
                            </div>

                            <div className="row">
                                <span>DA</span>
                                <InputNumber
                                    min={0}
                                    style={{ width: "50%" }}
                                    value={hra.da}
                                    onChange={(v) => setHra({ ...hra, da: v })}
                                />
                            </div>

                            <div className="row">
                                <span>Metro City?</span>
                                <Switch
                                    checked={hra.metro}
                                    onChange={(val) => setHra({ ...hra, metro: val })}
                                />
                            </div>
                        </Panel>
                    </Collapse>

                    <Button
                        type="primary"
                        className="calculate-btn"
                        onClick={calculateTax}
                    >
                        CALCULATE
                    </Button>
                </div>

                {/* -------- RESULTS -------- */}
                {result && (
                    <div className="groww-card result">
                        <h2>Tax Summary</h2>

                        <p>
                            <span>Gross Income</span>
                            <span>₹{result.grossIncome.toLocaleString()}</span>
                        </p>

                        <p>
                            <span>Total Deductions</span>
                            <span>₹{result.totalDeductions.toLocaleString()}</span>
                        </p>

                        <p>
                            <span>Taxable Income (Old Regime)</span>
                            <span>₹{result.taxableOld.toLocaleString()}</span>
                        </p>

                        <p>
                            <span>Taxable Income (New Regime)</span>
                            <span>₹{result.taxableNew.toLocaleString()}</span>
                        </p>

                        {/* Determine better regime */}
                        <h3
                            className={
                                result.oldTax < result.newTax ? "best-regime" : "worse-regime"
                            }
                        >
                            Old Regime Tax: ₹{result.oldTax.toLocaleString()}
                        </h3>

                        <h3
                            className={
                                result.newTax < result.oldTax ? "best-regime" : "worse-regime"
                            }
                        >
                            New Regime Tax: ₹{result.newTax.toLocaleString()}
                        </h3>
                    </div>
                )}

            </section>
        </Layout>
    );
};

export default TaxCalculator;
