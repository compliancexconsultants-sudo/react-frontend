import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import API from "../../utils/api";

const Services = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await API.get("/services/list");
      setServices(res.data || []);
    } catch (err) {
      console.log("Error fetching services:", err);
    }
  };

  return (
    <Layout>
      <div className="services-main fade-up">

        <h1 className="services-title">Our Professional Services</h1>
        <p className="services-subtitle">
          Choose from a wide range of legal & CA services designed to help your business grow.
        </p>

        <div className="services-list">
          {services.map((service) => (
            <div key={service._id} className="service-box pop">

              <div className="service-icon">
                {service.icon || "📄"}
              </div>

              <h3>{service.name}</h3>

              <p>{service.description}</p>

              <div className="service-price">
                {service.price ? `Starts at ₹${service.price}` : "Contact for pricing"}
              </div>

              <button
                className="service-btn"
                onClick={() => navigate(`/service/${service._id}`)}
              >
                Explore Service →
              </button>

            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Services;
