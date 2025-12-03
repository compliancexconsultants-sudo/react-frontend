import React, { useState } from "react";
import Layout from "../../components/Layout";
import "./GST.css";
import { useNavigate } from "react-router-dom";
import { Upload, Button } from "antd";

const SubmitGSTDocs = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState({});

  const props = {
    beforeUpload: (file) => {
      setFiles({ ...files, [file.name]: file });
      return false;
    }
  };

  const handleSubmit = () => {
    const price = Math.floor(Math.random() * (10999 - 6999) + 6999);
    navigate("/gst/payment", { state: { amount: price } });
  };

  return (
    <Layout>
      <section className="docs-upload fade-up">
        <h1>Submit GST Registration Documents</h1>
        <p>Upload the required documents to proceed.</p>

        <div className="upload-grid">
          <Upload {...props}><Button className="upload-btn">PAN Card</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Aadhaar Card</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Business Proof</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Address Proof</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Bank Statement</Button></Upload>
          <Upload {...props}><Button className="upload-btn">Photograph</Button></Upload>
        </div>

        <button className="primary-btn big-btn" onClick={handleSubmit}>
          Submit & Continue
        </button>
      </section>
    </Layout>
  );
};

export default SubmitGSTDocs;
