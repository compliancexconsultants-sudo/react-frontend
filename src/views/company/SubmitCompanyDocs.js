import React, { useState } from "react";
import Layout from "../../components/Layout";
import "./Company.css";
import { Upload, Button } from "antd";
import { useNavigate } from "react-router-dom";

const SubmitCompanyDocs = () => {
  const navigate = useNavigate();
  const [docs, setDocs] = useState({});

  const props = {
    beforeUpload: (file) => {
      setDocs({ ...docs, [file.name]: file });
      return false;
    }
  };

  const handleSubmit = () => {
    const price = Math.floor(Math.random() * (15999 - 8999) + 8999);
    navigate("/company/payment", { state: { amount: price } });
  };

  return (
    <Layout>
      <section className="docs-upload fade-up">
        <h1>Submit Company Registration Documents</h1>
        <p>Please upload all required documents for Pvt Ltd registration.</p>

        <div className="upload-grid">
          <Upload {...props}><Button className="upload-btn">PAN Card (Directors)</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Aadhaar / Passport</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Address Proof</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Bank Statement</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Passport Photos</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Rental Agreement</Button></Upload>
          <Upload {...props}><Button className="upload-btn">NOC Document</Button></Upload>
        </div>

        <button className="primary-btn big-btn" onClick={handleSubmit}>
          Submit & Continue
        </button>
      </section>
    </Layout>
  );
};

export default SubmitCompanyDocs;
