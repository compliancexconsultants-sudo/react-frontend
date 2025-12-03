import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Upload, Button } from "antd";
import "./Trademark.css";
import { useNavigate } from "react-router-dom";

const SubmitTrademarkDocs = () => {
  const navigate = useNavigate();
  const [docs, setDocs] = useState({});

  const props = {
    beforeUpload: (file) => {
      setDocs({ ...docs, [file.name]: file });
      return false;
    }
  };

  const handleSubmit = () => {
    const price = Math.floor(Math.random() * (9999 - 4999) + 4999);
    navigate("/trademark/payment", { state: { amount: price } });
  };

  return (
    <Layout>
      <section className="docs-upload fade-up">
        <h1>Submit Trademark Documents</h1>
        <p>Upload the following documents to proceed with trademark filing.</p>

        <div className="upload-grid">
          <Upload {...props}><Button className="upload-btn">Logo / Brand Name File</Button></Upload>
          <Upload {...props}><Button className="upload-btn">ID Proof</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Address Proof</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Business Proof</Button></Upload>
          <Upload {...props}><Button className="upload-btn">TM-48 Form</Button></Upload>
          <Upload {...props}><Button className="upload-btn">MSME Certificate</Button></Upload>
        </div>

        <button className="primary-btn big-btn" onClick={handleSubmit}>
          Submit & Continue
        </button>
      </section>
    </Layout>
  );
};

export default SubmitTrademarkDocs;
