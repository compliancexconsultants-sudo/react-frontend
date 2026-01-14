import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./views/dashboard/index";
import ITR from "./views/itr";
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
import UserChat from "./views/chat/UserChat";
import ServiceDetails from "./views/services/ServiceDetails"
import SubmitDocuments from "./views/services/SubmitDocuments";
import Payment from "./views/services/payment";
import GSTCalculator from "./views/calculators/GSTCalculator";
import HRACalculator from "./views/calculators/HRACalculator";
import EMICalculator from "./views/calculators/EMICalculator";
import PrivateLimited from "./views/services-hard/privatelimited/ServiceDetail";
import SoleProprietorship from "./views/services-hard/soleProprietorship/SoleProprietorship";
import PartnershipFirm from "./views/services-hard/partnershipFirm/PartnershipFirm";
import LLPRegistration from "./views/services-hard/llpRegistration/LLPRegistration";
import HUFRegistration from "./views/services-hard/hufRegistration/HUFRegistration";
import OPCRegistration from "./views/services-hard/opcRegistration/OPCRegistration";
import TrustSocietyRegistration from "./views/services-hard/trustSocietyRegistration/TrustSocietyRegistration";
import SubmitDocumentsCommon from "./views/services-hard/common/submitDocuments";
import GoldCalculator from "./views/calculators/GoldCalculators";
import GSTregistrations from "./views/services-hard/gstRegistration/ServiceDetail";
import ServiceCommonDetails from "./views/services-hard/common/ServiceDetail";
import Terms from "./views/terms";
import Privacy from "./views/privacy";
import ReferEarn from "./views/Refer/ReferEarn";
import AllServices from "./views/AllServices";
function Approutes() {
  const location = useLocation();
  return (
      <Routes>
        <Route path="/" element={<Home />} key={location.pathname}/>
        <Route path="ITR" element={<ITR />} />
        <Route path="/PrivateLimited" element={<PrivateLimited />} />
        <Route path="/PartnershipFirm" element={<PartnershipFirm />} />
        <Route path="/SoleProprietorship" element={<SoleProprietorship />} />
        <Route path="/ReferEarn" element={<ReferEarn />} />
        <Route path="/LLPRegistration" element={<LLPRegistration />} />
        <Route path="/HUFRegistration" element={<HUFRegistration />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/OPCRegistration" element={<OPCRegistration />} />
        <Route path="/TrustSocietyRegistration" element={<TrustSocietyRegistration />} />
        <Route path="/GSTregistrations" element={<GSTregistrations />} />
        <Route path="/SubmitDocuments" element={<SubmitDocumentsCommon />} />
        <Route path="/CXServices" element={<ServiceCommonDetails />} />
        <Route path="/service/:id/submit-documents" element={<SubmitDocuments />} />
        <Route path="/service/:id/payment" element={<Payment />} />
        <Route path="/tax-calculator" element={<TaxCalculator />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/compliservices" element={<AllServices />} />
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
        <Route path="/chat/:caseId" element={<UserChat />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/gst-calculator" element={<GSTCalculator />} />
        <Route path="/hra-calculator" element={<HRACalculator />} />
        <Route path="/emi-calculator" element={<EMICalculator />} />
        <Route path="/gold-calculator" element={<GoldCalculator />} />
      </Routes>

  );
}

export default Approutes;
