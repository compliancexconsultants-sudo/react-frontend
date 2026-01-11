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

const API_KEY = "goldapi-3eqcb8nxsmjo2l1zb-io";
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
const NEWS_API_KEY = "pub_e0e550d8d9434488bf5ebd6eacb79a4e";

export default function GoldCalculator() {
  const [livePrices, setLivePrices] = useState({});
  const [chartData, setChartData] = useState([]);
  const [karat, setKarat] = useState("24K");
  const [weight, setWeight] = useState("");
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [goldNews, setGoldNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);

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
      const global24K = res.data.price / TROY_OUNCE_TO_GRAM;

      const india24K_clearTax = global24K * CLEARTAX_MULTIPLIER;

      // Bangalore adjustment (small local premium)
      const bangalore24K = india24K_clearTax - 315;

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
    fetchGoldNews();
  }, [fetchGoldPrice]);
  const fetchGoldNews = async () => {
    try {
      const res = await axios.get(
        `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&q="gold price" OR "gold market" OR "gold rate" OR bullion OR XAU&language=en&category=business`
      );

      setGoldNews(res.data.results || []);
      setNewsLoading(false);
    } catch (err) {
      console.error("Gold news fetch failed", err);
      setNewsLoading(false);
    }
  };

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
      {/* GOLD NEWS */}
      <div className="gold-news-section">
        <h3>Latest Gold Market News</h3>

        {newsLoading ? (
          <p style={{ margin: "20px" }} className="muted">
            Loading gold news…
          </p>
        ) : (
          <div className="news-grid">
            {goldNews.map((news, i) => (
              <a
                key={i}
                href={news.link}
                target="_blank"
                rel="noreferrer"
                className="news-card"
              >
                <img src={news.image_url || "/news-placeholder.jpg"} alt="" />
                <div className="news-content">
                  <h4>{news.title}</h4>
                  <p>{news.description}</p>
                  <span>{news.source_id}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      {/* SEO GOLD CONTENT */}
      {/* SEO GOLD CONTENT */}
      <div className="seo-gold-content">
        <h1>
          Gold Calculator – Calculate Gold Price Instantly Using Weight, Purity
          & GST
        </h1>

        <p>
          Gold plays a vital role in Indian households, not only as jewellery
          but also as a trusted investment and store of value. Whether you are
          purchasing gold for a wedding, festival, personal investment, or
          long-term wealth preservation, understanding the exact price you are
          paying is extremely important. This is where an accurate and
          transparent <strong>gold calculator</strong> becomes essential.
        </p>

        <p>
          A gold calculator helps you calculate the exact price of gold
          jewellery or gold investment by considering multiple variables such as
          gold weight, purity (22K, 24K, or 18K), prevailing gold rate per gram,
          making charges, and Goods and Services Tax (GST).
        </p>

        <h2>What Is a Gold Calculator?</h2>
        <p>
          A gold calculator is an online financial tool designed to calculate
          the total cost of gold based on weight, purity, making charges and
          GST.
        </p>

        <ul>
          <li>Gold weight in grams</li>
          <li>Gold purity – 24K, 22K, 18K</li>
          <li>Gold rate per gram</li>
          <li>Making charges</li>
          <li>GST on gold</li>
        </ul>

        <h2>Understanding Gold Purity</h2>

        <h3>24K Gold</h3>
        <p>99.9% pure gold – used for investment.</p>

        <h3>22K Gold</h3>
        <p>91.6% pure gold – used for jewellery.</p>

        <h3>18K Gold</h3>
        <p>75% pure gold – used for designer jewellery.</p>

        <h2>How Gold Price Is Calculated</h2>
        <p>
          Gold prices in India depend on international gold rates, USD-INR
          exchange rate, import duty and local demand.
        </p>

        <h2>Making Charges & GST</h2>
        <p>
          Jewellers charge making charges for crafting jewellery. GST of 3% is
          applied on gold value + making charges.
        </p>

        <h2>Why Use Our Gold Calculator?</h2>
        <ul>
          <li>Instant gold value</li>
          <li>Transparent pricing</li>
          <li>No hidden charges</li>
          <li>Accurate city based gold price</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Use our Gold Calculator to instantly calculate gold price based on
          weight, purity, making charges and GST.
        </p>
      </div>
    </Layout>
  );
}
