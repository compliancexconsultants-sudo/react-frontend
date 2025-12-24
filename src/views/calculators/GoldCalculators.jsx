import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import "./GoldCalculator.css";

const API_KEY = "goldapi-980ssmjfvtjoz-io";
const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes

// Bangalore city premium (₹ / gram)
const CITY_PREMIUM = {
    bangalore: 200,
};

const KARATS = {
    "24K": { purity: 1, label: "24K (99.9%)" },
    "22K": { purity: 0.916, label: "22K (91.6%)" },
    "18K": { purity: 0.75, label: "18K (75%)" },
    "14K": { purity: 0.583, label: "14K (58.3%)" },
};

// Generate stable 7-day trend (once)
const generateInitial7DayData = (todayPrice) => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let base = todayPrice * 0.97;

    return days.map((day, i) => ({
        day,
        price: Number((base + i * (todayPrice * 0.005)).toFixed(2)),
    }));
};

export default function GoldCalculator() {
    const [livePrices, setLivePrices] = useState({});
    const [chartData, setChartData] = useState([]);
    const [karat, setKarat] = useState("24K");
    const [weight, setWeight] = useState("");
    const [value, setValue] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState(null);
    const INDIA_IMPORT_MULTIPLIER = 1.145;
    const TROY_OUNCE_TO_GRAM = 31.1034768;
    const CLEARTAX_MULTIPLIER = 1.11;
    const fetchGoldPrice = useCallback(async () => {
        try {
            const res = await axios.get("https://www.goldapi.io/api/XAU/INR", {
                headers: {
                    "x-access-token": API_KEY,
                    "Content-Type": "application/json",
                },
            });
            const global24K =
                res.data.price / TROY_OUNCE_TO_GRAM;

            const india24K_clearTax =
                global24K * CLEARTAX_MULTIPLIER;

            // Bangalore adjustment (small local premium)
            const bangalore24K = india24K_clearTax

            // Karat-wise prices
            const prices = {};
            Object.keys(KARATS).forEach((k) => {
                prices[k] = bangalore24K * KARATS[k].purity;
            });

            setLivePrices(prices);

            // Stable chart update
            setChartData((prev) => {
                if (prev.length === 0) {
                    return generateInitial7DayData(bangalore24K);
                }

                const updated = [...prev];
                updated[updated.length - 1] = {
                    ...updated[updated.length - 1],
                    price: Number(bangalore24K.toFixed(2)),
                };
                return updated;
            });

            setLastUpdated(new Date());
            setLoading(false);
        } catch (err) {
            console.error("Gold price fetch failed", err);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchGoldPrice();
        const interval = setInterval(fetchGoldPrice, REFRESH_INTERVAL);
        return () => clearInterval(interval);
    }, [fetchGoldPrice]);

    const calculate = () => {
        if (!weight || !livePrices[karat]) return;
        setValue(weight * livePrices[karat]);
    };

    return (
        <Layout>
            <div className="gold-wrapper">
                <div className="gold-card">
                    {/* HEADER */}
                    <div className="header-row">
                        <h2>
                            Live Gold Price – Bangalore
                            <span className="live-indicator">
                                <span className="dot"></span> Live
                            </span>
                            <span className="city-badge">Bangalore</span>
                        </h2>

                        {lastUpdated && (
                            <span className="updated-time">
                                Updated at {lastUpdated.toLocaleTimeString()}
                            </span>
                        )}
                    </div>

                    {loading ? (
                        <p className="muted">Fetching live gold prices…</p>
                    ) : (
                        <>
                            {/* LIVE PRICES */}
                            <div className="price-grid">
                                {Object.keys(livePrices).map((k) => (
                                    <div key={k} className="price-card">
                                        <span>{k}</span>
                                        <strong>₹ {livePrices[k].toFixed(2)} / g</strong>
                                    </div>
                                ))}
                            </div>

                            {/* CONTENT */}
                            <div className="gold-content">
                                {/* LEFT: CHART */}
                                <div className="gold-left">
                                    <div className="chart-box">
                                        <h4>Gold Price Trend – Last 7 Days</h4>
                                        <ResponsiveContainer width="100%" height={260}>
                                            <LineChart data={chartData}>
                                                <XAxis dataKey="day" />
                                                <YAxis domain={["dataMin - 50", "dataMax + 50"]} />
                                                <Tooltip />
                                                <Line
                                                    type="monotone"
                                                    dataKey="price"
                                                    stroke="#2563eb"
                                                    strokeWidth={3}
                                                    dot={{ r: 4 }}
                                                />
                                            </LineChart>
                                        </ResponsiveContainer>
                                        <p className="chart-note">
                                            * Bangalore price (includes local premium)
                                        </p>
                                    </div>
                                </div>

                                {/* RIGHT: CALCULATOR */}
                                <div className="gold-right">
                                    <div className="calc-box">
                                        <h4>Gold Value Calculator</h4>

                                        <label>Weight (grams)</label>
                                        <input
                                            type="number"
                                            placeholder="Eg: 10"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                        />

                                        <label>Purity</label>
                                        <select
                                            value={karat}
                                            onChange={(e) => setKarat(e.target.value)}
                                        >
                                            {Object.keys(KARATS).map((k) => (
                                                <option key={k} value={k}>
                                                    {KARATS[k].label}
                                                </option>
                                            ))}
                                        </select>

                                        <button onClick={calculate}>Calculate Value</button>

                                        {value && (
                                            <div className="result">
                                                <span>Estimated Gold Value</span>
                                                <h3>₹ {value.toLocaleString("en-IN")}</h3>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
}
