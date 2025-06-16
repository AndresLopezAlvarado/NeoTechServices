import "./App.css";
import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { ProtectedRoutes } from "./features/auth/ProtectedRoutes.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Profile } from "./features/profile/Profile.jsx";
import { Users } from "./features/users/Users.jsx";
import { WebApps } from "./pages/WebApps.jsx";
import { TechnicalService } from "./pages/TechnicalService.jsx";
import { EquipmentSale } from "./pages/EquipmentSale.jsx";
import { Consultancies } from "./pages/Consultancies.jsx";
import { Portfolio } from "./pages/Portfolio.jsx";
import { Contact } from "./pages/Contact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="consultancies" element={<Consultancies />} />
          <Route path="technicalService" element={<TechnicalService />} />
          <Route path="webApps" element={<WebApps />} />
          <Route path="equipmentSale" element={<EquipmentSale />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
