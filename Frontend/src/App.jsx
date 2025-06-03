import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/Home.jsx";
import { Layout } from "./components/Layout.jsx";
import { WebApps } from "./pages/WebApps.jsx";
import { TechnicalService } from "./pages/TechnicalService.jsx";
import { EquipmentSale } from "./pages/EquipmentSale.jsx";
import { Consultancies } from "./pages/Consultancies.jsx";
import { Portfolio } from "./pages/Portfolio.jsx";
import { Contact } from "./pages/Contact.jsx";

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="consultancies" element={<Consultancies />} />
        <Route path="technicalService" element={<TechnicalService />} />
        <Route path="webApps" element={<WebApps />} />
        <Route path="equipmentSale" element={<EquipmentSale />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
