import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import "./ITR.css";
import { useNavigate } from "react-router-dom";
import { Upload, Button, Spin } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Lottie from "lottie-react";
import uploadAnim from "../../../animations/uploading.json";
import successAnim from "../../../animations/Success.json";
import { useService } from "../../../states/ServiceContext";

const SubmitDocuments = () => {
  const navigate = useNavigate();
  const { serviceData } = useService(); //  ⬅️ GLOBAL DATA

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  console.log(documents);

  useEffect(() => {
    if (!serviceData) {
      alert("Service not selected. Redirecting...");
      return navigate("/");
    }

    setService(serviceData);

    const formattedDocs = serviceData.documents.map((doc, index) => ({
      key: `doc_${index + 1}`,
      label: doc,
    }));
    setDocuments(formattedDocs);
    setLoading(false);
  }, []);

  const handleChange = (info, key) => {
    const fileObj = info?.file?.originFileObj || info.file;
    setDocuments((prev) => ({
      ...prev,
      [key]: fileObj,
    }));
  };

  const isAllDocumentsUploaded = () =>
    Object.values(documents).every((file) => file !== null);

  const handleSubmit = async () => {
    try {
      const loggedUser = JSON.parse(localStorage.getItem("legalhubUser"));
      if (!loggedUser) return navigate("/login");

      setIsUploading(true);

      const formData = new FormData();
      formData.append("serviceId", service._id);
      formData.append("serviceName", service.name);
      formData.append("serviceSlug", service.name);
      formData.append("userId", loggedUser.uid);
      formData.append("amount", service.price);
      formData.append("tagId", service.tagId?._id);

      Object.keys(documents).forEach((key) => {
        if (documents[key]) formData.append(key, documents[key]);
      });

      // ⭐ your API here if needed
      // const res = await API.post("/cases/submit", formData);

      setIsUploading(false);
      setIsSuccess(true);

      setTimeout(() => {
        navigate(`/service/${service._id}/payment`, {
          state: {
            amount: service.price,
            caseId: "CASEID_FROM_API",
            serviceName: service.name,
          },
        });
      }, 4000);
    } catch (e) {
      setIsUploading(false);
      alert("Error submitting!");
    }
  };

  if (loading) {
    return (
      <Layout>
        <div style={{ textAlign: "center", padding: 80 }}>
          <Spin size="large" />
        </div>
      </Layout>
    );
  }

  if (isUploading) {
    return (
      <div className="upload-overlay">
        <Lottie animationData={uploadAnim} loop />
        <p>Uploading documents, please wait...</p>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="upload-overlay">
        <Lottie animationData={successAnim} loop={false} />
        <p>Documents submitted successfully 🎉</p>
      </div>
    );
  }

  return (
    <Layout>
      <div className="itr-wrapper fade-up">
        <div className="itr-left">
          <h1>{service.name}</h1>

          {/* <p className="itr-price">
            Price: <span>₹NA</span>
          </p> */}

          <p className="itr-small-desc">
            Please upload the required documents below. Our experts will start
            processing your case instantly.
          </p>

          <div className="itr-benefits">
            <div>✔ Expert CA Processing</div>
            <div>✔ Fast Turnaround</div>
            <div>✔ Document Privacy Protected</div>
          </div>
          <section className="data-security-section">
            <h2> Your Data Is Safe With ComplianceX Consultants</h2>

            <p className="intro-text">
              At <strong>ComplianceX Consultants</strong>, we understand that
              submitting documents online requires trust. Your privacy and data
              security are our <strong>top priorities</strong>.
            </p>

            <div className="security-points">
              <div className="security-item">
                <h4>🛡️ 100% Secure Document Handling</h4>
                <p>
                  All documents uploaded through this page are protected using
                  secure encryption protocols, ensuring complete confidentiality
                  during upload, storage, and processing.
                </p>
              </div>

              <div className="security-item">
                <h4>👤 Strict Confidentiality Policy</h4>
                <p>
                  Access limited to authorized ComplianceX professionals No
                  sharing, selling, or misuse of your data Used only for
                  providing requested services
                </p>
              </div>

              <div className="security-item">
                <h4>🗄️ Safe Servers & Controlled Access</h4>
                <p>
                  Documents are stored on secure servers with restricted and
                  monitored access. Files can be safely deleted after service
                  completion upon request.
                </p>
              </div>

              <div className="security-item">
                <h4>⚖️ Compliance With Indian Data Protection Standards</h4>
                <p>
                  We follow best practices aligned with Indian IT and data
                  protection regulations, ensuring lawful and ethical handling
                  of your information.
                </p>
              </div>

              <div className="security-item">
                <h4>🤝 Trusted by Businesses & Professionals</h4>
                <p>
                  Trusted for licences, registrations, tax filings, legal, and
                  government documentation. Your trust matters — and we protect
                  it.
                </p>
              </div>
            </div>

            {/* <div className="submit-confidence">
              ✅ <strong>Submit With Confidence:</strong> Your data is secure,
              private, and handled responsibly by ComplianceX Consultants.
            </div> */}
          </section>
        </div>

        <div className="itr-right">
          <h2>Required Documents</h2>

          <div className="upload-grid">
            {documents.map((doc) => (
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
          <div>
            <p>Referred By</p>
            <input
              name="reffered by"
              placeholder="Name"
              className="reffred-by"
            />
          </div>
          {/* ===== Data Security Section ===== */}

          <Button
            type="primary"
            className="submit-doc-btn"
            disabled={!isAllDocumentsUploaded() || isUploading}
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
