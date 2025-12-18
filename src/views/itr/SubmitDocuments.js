import React, { useState } from "react";
import Layout from "../../components/Layout";
import "./ITR.css";
import { useNavigate } from "react-router-dom";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import API from "../../utils/api"

const SubmitDocuments = () => {
  const navigate = useNavigate();

  const [documents, setDocuments] = useState({
    form16: null,
    bank: null,
    pan: null,
    investment: null,
  });

  const handleChange = (info, name) => {
    let fileObj = null;



    if (info?.file?.originFileObj) {
      fileObj = info.file.originFileObj;
    } else if (info?.file) {
      fileObj = info.file;
    }

    setDocuments(prev => ({
      ...prev,
      [name]: fileObj,
    }));
  };


  const handleSubmit = async () => {
    try {
      const loggedUser = JSON.parse(localStorage.getItem("legalhubUser"));

      if (!loggedUser) {
        alert("Please login first!");
        return;
      }

      const formData = new FormData();

      // Service info
      formData.append("serviceName", "ITR Filing");
      formData.append("serviceSlug", "itr-filing");
      formData.append("userId", loggedUser.uid);

      // Example text field
      formData.append("notes", "ITR filing uploaded");

      // Upload documents
      if (documents.form16) formData.append("form16", documents.form16);
      if (documents.bank) formData.append("bank_statement", documents.bank);
      if (documents.pan) formData.append("pan_card", documents.pan);
      if (documents.investment) formData.append("investment_proofs", documents.investment);

      // API request
      const res = await API.post("/cases/submit", formData);

      console.log("CASE CREATED:", res.data);

      const randomPrice = Math.floor(Math.random() * (12999 - 4999 + 1)) + 4999;

      navigate("/itr/payment", {
        state: { amount: randomPrice, caseId: res.data.case.caseId },
      });

    } catch (error) {
      console.log(error);
      alert("Error while submitting documents");
    }
  };

  return (
    <Layout>
      <section className="docs-upload">
        <h1>Submit Your Documents</h1>
        <p>Please upload the required documents for ITR filing.</p>

        <div className="upload-grid">
          <div className="upload-card">
            <label>📄 Form 16</label>
            <Upload beforeUpload={() => false} onChange={(file) => handleChange(file, "form16")} showUploadList={true}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>

          <div className="upload-card">
            <label>🏦 Bank Statement</label>
            <Upload beforeUpload={() => false} onChange={(file) => handleChange(file, "bank")} showUploadList={true}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>

          <div className="upload-card">
            <label>🆔 PAN / Aadhaar</label>
            <Upload beforeUpload={() => false} onChange={(file) => handleChange(file, "pan")} showUploadList={true}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>

          <div className="upload-card">
            <label>📊 Investment Proofs</label>
            <Upload beforeUpload={() => false} onChange={(file) => handleChange(file, "investment")} showUploadList={true}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
        </div>

        <Button type="primary" className="big-btn" onClick={handleSubmit} style={{ marginTop: "30px" }}>
          Submit & Continue
        </Button>
      </section>
    </Layout>
  );
};

export default SubmitDocuments;
