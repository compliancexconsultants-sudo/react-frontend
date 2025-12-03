import React, { useState } from "react";
import Layout from "../../components/Layout";
import "./Consultation.css";
import { Upload, Button, Select, Input } from "antd";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const SubmitConsultation = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    type: "",
    description: "",
  });

  const [docs, setDocs] = useState({});

  const props = {
    beforeUpload: (file) => {
      setDocs({ ...docs, [file.name]: file });
      return false;
    }
  };

  const handleSubmit = () => {
    const price = Math.floor(Math.random() * (2499 - 999) + 999);
    navigate("/consultation/payment", { state: { amount: price } });
  };

  return (
    <Layout>
      <section className="consult-upload fade-up">
        <h1>Book Legal Consultation</h1>
        <p>Provide details so our experts can assist you better.</p>

        <div className="consult-form">
          <label>Type of Consultation</label>
          <Select
            placeholder="Select Consultation Type"
            onChange={(value) => setData({ ...data, type: value })}
            className="select-box"
            options={[
              { value: "Contract Review", label: "Contract Review" },
              { value: "Civil / Criminal", label: "Civil / Criminal Matters" },
              { value: "Business Compliance", label: "Business Compliance" },
              { value: "Company Law", label: "Company Law" },
              { value: "Property", label: "Property & Land Disputes" },
              { value: "Other", label: "Other" },
            ]}
          />

          <label>Explain Your Issue</label>
          <TextArea
            rows={4}
            placeholder="Describe your legal issue..."
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />

          <label>Upload Supporting Documents (Optional)</label>
          <Upload {...props}>
            <Button className="upload-btn">Upload Documents</Button>
          </Upload>

          <button className="primary-btn big-btn" onClick={handleSubmit}>
            Confirm & Continue
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default SubmitConsultation;
