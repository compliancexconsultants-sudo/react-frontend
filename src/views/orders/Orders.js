import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import API from "../../utils/api";
import "./Orders.css";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("legalhubUser"));
  const [cases, setCases] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchCases = async () => {
      try {
        const res = await API.get(`/cases/user/${user.uid}`);
        setCases(res.data);
      } catch (error) {
        console.error("Error fetching user cases:", error);
      }
    };

    fetchCases();
  }, []);

  return (
    <Layout>
      <div className="orders-container fade-up">

        {/* Title */}
        <h1 className="orders-title">My Cases</h1>

        {/* No Orders */}
        {cases.length === 0 ? (
          <p className="no-orders">You have no active or completed cases.</p>
        ) : (
          <div className="orders-list">
            {cases.map((c, index) => (
              <div key={index} className="order-card scale-up">

                <div className="order-header">
                  <h3>{c.serviceName}</h3>

                  <span
                    className={`status-chip ${
                      c.status.toLowerCase().includes("completed")
                        ? "completed"
                        : c.status.toLowerCase().includes("progress")
                        ? "progress"
                        : "pending"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>

                <p className="order-field">
                  <strong>Assigned CA:</strong>{" "}
                  {c.assignedCAName || "Not Assigned Yet"}
                </p>

                <p className="order-field">
                  <strong>Date:</strong>{" "}
                  {new Date(c.createdAt).toLocaleString()}
                </p>

                {c.assignedCA && (
                  <button
                    className="case-btn chat-btn"
                    onClick={() => navigate(`/chat/${c.caseId}`)}
                  >
                    💬 Chat With CA
                  </button>
                )}

                {/* <button
                  className="case-btn view-btn"
                  onClick={() => navigate(`/case/${c.caseId}`)}
                >
                  View Case →
                </button> */}

              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Orders;
