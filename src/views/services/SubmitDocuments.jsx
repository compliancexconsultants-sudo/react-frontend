import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./ITR.css";
import { useNavigate, useParams } from "react-router-dom";
import { Upload, Button, Spin } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import API from "../../utils/api";

const SubmitDocuments = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState({});

  useEffect(() => {
    loadService();
  }, []);

  const loadService = async () => {
    try {
      const res = await API.get(`/services/${id}`);
      setService(res.data);

      const initialDocs = {};
      res.data.documents.forEach((doc) => (initialDocs[doc.key] = null));

      setDocuments(initialDocs);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleChange = (info, key) => {
    const fileObj = info?.file?.originFileObj || info.file;
    setDocuments((prev) => ({
      ...prev,
      [key]: fileObj,
    }));
  };

  const handleSubmit = async () => {
    try {
      const loggedUser = JSON.parse(localStorage.getItem("legalhubUser"));
      if (!loggedUser) return alert("Please login first!");

      const formData = new FormData();

      formData.append("serviceId", service._id);
      formData.append("serviceName", service.name);
      formData.append("serviceSlug", service.name);
      formData.append("userId", loggedUser.uid);
      formData.append("amount", service.price);
      formData.append("tagId", service.tagId._id);

      Object.keys(documents).forEach((key) => {
        if (documents[key]) {
          formData.append(key, documents[key]);
        }
      });

      const res = await API.post("/cases/submit", formData);

      navigate(`/service/${service._id}/payment`, {
        state: {
          amount: service.price,
          caseId: res.data.case.caseId,
          serviceName: service.name,
        }
      });

    } catch (error) {
      console.log(error);
      alert("Error while submitting documents");
    }
  };

  if (loading) {
    return (
      <Layout>
        <div style={{ textAlign: "center", padding: "80px" }}>
          <Spin size="large" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="itr-wrapper fade-up">

        {/* LEFT SIDE — SERVICE INFO */}
        <div className="itr-left">
          <h1>{service.name}</h1>

          <p className="itr-price">
            Price: <span>₹{service.price}</span>
          </p>

          <p className="itr-small-desc">
            Please upload the required documents below. Our experts will start processing your case instantly.
          </p>

          <div className="itr-benefits">
            <div>✔ Expert CA Processing</div>
            <div>✔ Fast Turnaround</div>
            <div>✔ Document Privacy Protected</div>
          </div>
        </div>

        {/* RIGHT SIDE — UPLOAD DOCUMENTS */}
        <div className="itr-right">
          <h2>Required Documents</h2>

          <div className="upload-grid">
            {service.documents.map((doc) => (
              <div key={doc.key} className="upload-card light-card fade-up">
                <label>{doc.label}</label>

                <Upload
                  beforeUpload={() => false}
                  onChange={(file) => handleChange(file, doc.key)}
                  showUploadList={true}
                >
                  <Button icon={<UploadOutlined />}>Upload File</Button>
                </Upload>
              </div>
            ))}
          </div>

          <Button
            type="primary"
            className="submit-doc-btn"
            onClick={handleSubmit}
          >
            Submit & Continue
          </Button>
        </div>

      </div>
    </Layout>
  );
};

export default SubmitDocuments;
