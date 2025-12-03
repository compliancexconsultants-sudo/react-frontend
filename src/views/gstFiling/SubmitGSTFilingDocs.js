import React, { useState } from "react";
import Layout from "../../components/Layout";
import "./GSTFiling.css";
import { Upload, Button } from "antd";
import { useNavigate } from "react-router-dom";

const SubmitGSTFilingDocs = () => {
  const navigate = useNavigate();
  const [docs, setDocs] = useState({});

  const props = {
    beforeUpload: (file) => {
      setDocs({ ...docs, [file.name]: file });
      return false;
    },
  };

  const handleSubmit = () => {
    const price = Math.floor(Math.random() * (7999 - 2999) + 2999);
    navigate("/gst-filing/payment", { state: { amount: price } });
  };

  return (
    <Layout>
      <section className="docs-upload fade-up">
        <h1>Submit GST Filing Documents</h1>
        <p>Please upload the required documents for GST returns.</p>

        <div className="upload-grid">
          <Upload {...props}><Button className="upload-btn">Sales Invoices</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Purchase Invoices</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Bank Statement</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Expense Bills</Button></Upload>
          <Upload {...props}><Button className="upload-btn">ITC Summary</Button></Upload>
        </div>

        <button className="primary-btn big-btn" onClick={handleSubmit}>
          Submit & Continue
        </button>
      </section>
    </Layout>
  );
};

export default SubmitGSTFilingDocs;
