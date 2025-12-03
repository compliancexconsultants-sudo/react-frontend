import React from "react";
import Layout from "../../components/Layout";
import "./Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const allServices = [
    {
      icon: "📄",
      title: "ITR Filing",
      text: "Expert income tax filing with CA assistance.",
      price: "Starts at ₹8,999",
      link: "/itr"
    },
    {
      icon: "📊",
      title: "GST Registration",
      text: "Quick and accurate GST registration.",
      price: "Starts at ₹6,999",
      link: "/gst-registration"
    },
    {
      icon: "📈",
      title: "GST Filing",
      text: "Monthly & quarterly GST filing done by experts.",
      price: "Starts at ₹4,999",
      link: "/gst-filing"
    },
    {
      icon: "🏢",
      title: "Company Registration",
      text: "Register your Pvt Ltd company with complete MCA support.",
      price: "Starts at ₹8,999",
      link: "/company-registration"
    },
    {
      icon: "™️",
      title: "Trademark Registration",
      text: "Legally protect your brand with trademark filing.",
      price: "Starts at ₹6,999",
      link: "/trademark"
    },
    {
      icon: "🤝",
      title: "Legal Consultation",
      text: "Consult with experienced advocates & legal experts.",
      price: "Starts at ₹1,499",
      link: "/legal-consultation"
    },
    {
      icon: "🧮",
      title: "Tax Calculator",
      text: "Smart automated tax tool to estimate your tax amount.",
      price: "Free Tool",
      link: "/tax-calculator"
    }
  ];

  return (
    <Layout>
      <div className="services-main fade-up">

        {/* HEADER */}
        <h1 className="services-title">Our Professional Services</h1>
        <p className="services-subtitle">
          Choose from a wide range of legal & CA services designed to help your business grow.
        </p>

        {/* GRID */}
        <div className="services-list">
          {allServices.map((service, index) => (
            <div key={index} className="service-box pop">
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <div className="service-price">{service.price}</div>

              <button
                className="service-btn"
                onClick={() => navigate(service.link)}
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
