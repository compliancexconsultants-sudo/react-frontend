import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/dashboard/index";
import ITR from "./views/itr";
import SubmitDocuments from "./views/itr/SubmitDocuments";
import Payment from "./views/itr/Payment";
import TaxCalculator from "./views/taxCalculator";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup";
import MyProfile from "./views/profile/MyProfile";
import GSTRegistration from "./views/gst/GSTRegistration";
import SubmitGSTDocs from "./views/gst/SubmitGSTDocs";
import GSTPayment from "./views/gst/GSTPayment";
import GSTFiling from "./views/gstFiling/GSTFiling";
import SubmitGSTFilingDocs from "./views/gstFiling/SubmitGSTFilingDocs";
import GSTFilingPayment from "./views/gstFiling/GSTFilingPayment";
import CompanyRegistration from "./views/company/CompanyRegistration";
import SubmitCompanyDocs from "./views/company/SubmitCompanyDocs";
import CompanyPayment from "./views/company/CompanyPayment";
import Trademark from "./views/trademark/Trademark";
import SubmitTrademarkDocs from "./views/trademark/SubmitTrademarkDocs";
import TrademarkPayment from "./views/trademark/TrademarkPayment";
import Consultation from "./views/consultation/Consultation";
import SubmitConsultation from "./views/consultation/SubmitConsultation";
import ConsultationPayment from "./views/consultation/ConsultationPayment";
import Services from "./views/services/Services";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";
import Orders from "./views/orders/Orders";



function App() {
  return (
    <BrowserRouter basename="/react-frontend">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ITR" element={<ITR />} />
        <Route path="/itr/submit-documents" element={<SubmitDocuments />} />
        <Route path="/itr/payment" element={<Payment />} />
        <Route path="/tax-calculator" element={<TaxCalculator />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/gst-registration" element={<GSTRegistration />} />
        <Route path="/gst/submit-documents" element={<SubmitGSTDocs />} />
        <Route path="/gst/payment" element={<GSTPayment />} />
        <Route path="/gst-filing" element={<GSTFiling />} />
        <Route path="/gst-filing/submit-documents" element={<SubmitGSTFilingDocs />} />
        <Route path="/gst-filing/payment" element={<GSTFilingPayment />} />
        <Route path="/company-registration" element={<CompanyRegistration />} />
        <Route path="/company/submit-documents" element={<SubmitCompanyDocs />} />
        <Route path="/company/payment" element={<CompanyPayment />} />
        <Route path="/trademark" element={<Trademark />} />
        <Route path="/trademark/submit-documents" element={<SubmitTrademarkDocs />} />
        <Route path="/trademark/payment" element={<TrademarkPayment />} />
        <Route path="/legal-consultation" element={<Consultation />} />
        <Route path="/consultation/submit-details" element={<SubmitConsultation />} />
        <Route path="/consultation/payment" element={<ConsultationPayment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Orders />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
