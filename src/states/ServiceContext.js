import { createContext, useContext, useState, useEffect } from "react";

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {

  // ---------- Load service safely ----------
  const [serviceData, setServiceData] = useState(() => {
    try {
      const saved = localStorage.getItem("selectedService");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // ---------- Persist when updated ----------
  useEffect(() => {
    if (serviceData)
      localStorage.setItem("selectedService", JSON.stringify(serviceData));
    else
      localStorage.removeItem("selectedService");
  }, [serviceData]);


  // ---------- OPTIONAL: Global Documents (helpful for Submit Page) ----------
  const [uploadedDocs, setUploadedDocs] = useState({});

  // ---------- Clear Everything ----------
  const clearService = () => {
    setServiceData(null);
    setUploadedDocs({});
    localStorage.removeItem("selectedService");
  };

  return (
    <ServiceContext.Provider
      value={{
        serviceData,
        setServiceData,

        uploadedDocs,
        setUploadedDocs,

        clearService
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);
