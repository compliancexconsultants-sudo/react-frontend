import { BrowserRouter } from "react-router-dom";
import Approutes from "./AppRoutes";
import { ServiceProvider } from "./states/ServiceContext";

export default function App() {
  return (
    <BrowserRouter>
      <ServiceProvider>
        <Approutes />
      </ServiceProvider>
    </BrowserRouter>
  );
}
