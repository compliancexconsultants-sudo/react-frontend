import { createContext, useContext, useState, useEffect } from "react";

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [serviceData, setServiceData] = useState(() => {
    const saved = localStorage.getItem("selectedService");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (serviceData)
      localStorage.setItem("selectedService", JSON.stringify(serviceData));
  }, [serviceData]);

  return (
    <ServiceContext.Provider value={{ serviceData, setServiceData }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);
