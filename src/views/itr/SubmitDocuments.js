import React, { useState } from "react";
import Layout from "../../components/Layout";
import "./ITR.css";
import { useNavigate } from "react-router-dom";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const SubmitDocuments = () => {
  const navigate = useNavigate();

  const [documents, setDocuments] = useState({
    form16: null,
    bank: null,
    pan: null,
    investment: null,
  });

  const handleChange = (file, name) => {
    setDocuments({
      ...documents,
      [name]: file.file,
    });
  };

  const handleSubmit = () => {
    const randomPrice = Math.floor(Math.random() * (12999 - 4999 + 1)) + 4999;

    navigate("/itr/payment", {
      state: { amount: randomPrice },
    });
  };

  return (
    <Layout>
      <section className="docs-upload">
        <h1>Submit Your Documents</h1>
        <p>Please upload the required documents for ITR filing.</p>

        <div className="upload-grid">

          {/* Form 16 */}
          <div className="upload-card">
            <label>📄 Form 16</label>
            <Upload
              beforeUpload={() => false}
              onChange={(file) => handleChange(file, "form16")}
              showUploadList={true}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>

          {/* Bank Statement */}
          <div className="upload-card">
            <label>🏦 Bank Statement</label>
            <Upload
              beforeUpload={() => false}
              onChange={(file) => handleChange(file, "bank")}
              showUploadList={true}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>

          {/* PAN/Aadhaar */}
          <div className="upload-card">
            <label>🆔 PAN / Aadhaar</label>
            <Upload
              beforeUpload={() => false}
              onChange={(file) => handleChange(file, "pan")}
              showUploadList={true}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>

          {/* Investment Proofs */}
          <div className="upload-card">
            <label>📊 Investment Proofs</label>
            <Upload
              beforeUpload={() => false}
              onChange={(file) => handleChange(file, "investment")}
              showUploadList={true}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>

        </div>

        <Button 
          type="primary" 
          className="big-btn" 
          onClick={handleSubmit}
          style={{ marginTop: "30px" }}
        >
          Submit & Continue
        </Button>
      </section>
    </Layout>
  );
};

export default SubmitDocuments;
