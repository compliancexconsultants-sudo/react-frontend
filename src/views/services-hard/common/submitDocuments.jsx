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
import API from "../../../utils/api";

const SubmitDocuments = () => {
  const navigate = useNavigate();
  const { serviceData } = useService();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ SEPARATE STATES
  const [requiredDocs, setRequiredDocs] = useState([]);
  const [uploadedDocs, setUploadedDocs] = useState({});

  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
  const ALLOWED_TYPES = ["image/jpeg", "image/png", "application/pdf"];

  useEffect(() => {
    if (!serviceData) {
      alert("Service not selected. Redirecting...");
      navigate("/");
      return;
    }

    setService(serviceData);

    const docs = serviceData.documents.map((doc, index) => ({
      key: `doc_${index + 1}`,
      label: doc,
    }));

    setRequiredDocs(docs);
    setLoading(false);
  }, []);
  const compressImage = (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target.result;
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");

        const MAX_WIDTH = 1200;
        const scale = MAX_WIDTH / img.width;

        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          (blob) => {
            resolve(new File([blob], file.name, { type: "image/jpeg" }));
          },
          "image/jpeg",
          0.7 // compression quality
        );
      };

      reader.readAsDataURL(file);
    });
  };

  // ✅ FILE UPLOAD
  const handleChange = async (info, key) => {
    let file = info?.file?.originFileObj || info.file;

    if (!ALLOWED_TYPES.includes(file.type)) {
      alert("Only JPG, PNG or PDF files allowed");
      return;
    }

    // PDF too large?
    if (file.type === "application/pdf" && file.size > MAX_FILE_SIZE) {
      alert("PDF must be less than 2MB. Please compress before uploading.");
      return;
    }

    // If image, compress
    if (file.type.startsWith("image/")) {
      file = await compressImage(file);
    }

    if (file.size > MAX_FILE_SIZE) {
      alert("File is too large even after compression. Max 2MB allowed.");
      return;
    }

    setUploadedDocs((prev) => ({
      ...prev,
      [key]: file,
    }));
  };

  // ✅ CHECK ALL FILES UPLOADED
  const isAllDocumentsUploaded = () =>
    requiredDocs.every((doc) => uploadedDocs[doc.key]);

  // ✅ SUBMIT TO API
  const handleSubmit = async () => {
    try {
      const loggedUser = JSON.parse(localStorage.getItem("legalhubUser"));
      if (!loggedUser) return navigate("/login");

      setIsUploading(true);

      const formData = new FormData();
      formData.append("serviceName", service.hero?.title || "Service");
      formData.append("serviceSlug", service.id); // <-- THIS IS REQUIRED
      formData.append("userId", loggedUser.uid);
      formData.append("amount", service.price || 0);

      // append files
      Object.keys(uploadedDocs).forEach((key) => {
        formData.append(key, uploadedDocs[key]);
      });

      console.log("FILES BEING SENT:", uploadedDocs);

      await API.post("/cases/submit", formData);

      setIsUploading(false);
      setIsSuccess(true);
    } catch (e) {
      console.error(e);
      setIsUploading(false);
      alert("Error submitting documents");
    }
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <Layout>
        <div style={{ textAlign: "center", padding: 80 }}>
          <Spin size="large" />
        </div>
      </Layout>
    );
  }

  /* ================= UPLOADING ================= */
  if (isUploading) {
    return (
      <Layout>
        <div className="upload-overlay">
          <Lottie animationData={uploadAnim} loop />
          <p>Uploading documents, please wait...</p>
        </div>
      </Layout>
    );
  }

  /* ================= SUCCESS ================= */
  if (isSuccess) {
    return (
      <Layout>
        <div className="upload-overlay">
          <Lottie animationData={successAnim} loop={false} />
          <p>Documents submitted successfully 🎉</p>
          <Button type="primary" onClick={() => navigate("/orders")}>
            View My Orders
          </Button>
        </div>
      </Layout>
    );
  }

  /* ================= UI ================= */
  return (
    <Layout>
      <div className="itr-wrapper fade-up">
        <div className="itr-left">
          <h1>{service.hero?.title || service.name}</h1>

          <p className="itr-small-desc">
            Please upload the required documents below. Our experts will start
            processing your case instantly.
          </p>

          <div className="itr-benefits">
            <div>✔ Expert CA Processing</div>
            <div>✔ Fast Turnaround</div>
            <div>✔ Data Secure</div>
          </div>
        </div>

        <div className="itr-right">
          <h2>Required Documents</h2>

          <div className="upload-grid">
            {requiredDocs.map((doc) => (
              <div key={doc.key} className="upload-card light-card">
                <label>{doc.label}</label>

                <Upload
                  beforeUpload={() => false}
                  onChange={(file) => handleChange(file, doc.key)}
                  showUploadList
                >
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>

                {uploadedDocs[doc.key] && (
                  <p className="file-name">{uploadedDocs[doc.key].name}</p>
                )}
              </div>
            ))}
          </div>

          <Button
            type="primary"
            className="submit-doc-btn"
            disabled={!isAllDocumentsUploaded()}
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
