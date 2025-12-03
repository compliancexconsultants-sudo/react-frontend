import React from "react";
import Layout from "../../components/Layout";
import "./Orders.css";

const Orders = () => {
  const orders = JSON.parse(localStorage.getItem("legalhubOrders")) || [];

  return (
    <Layout>
      <div className="orders-container fade-up">

        <h1 className="orders-title">My Orders</h1>

        {orders.length === 0 ? (
          <p className="no-orders">No orders found.</p>
        ) : (
          <div className="orders-list">
            {orders.map((o, index) => (
              <div key={index} className="order-card pop">
                <h3>{o.service}</h3>
                <p>Amount: ₹{o.amount}</p>
                <p>Date: {o.date}</p>
                <p className="status">{o.status}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </Layout>
  );
};

export default Orders;
