import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { selectUserRole } from "../features/auth/authSlice";
import { AdminNav } from "./nav/AdminNav";
import { UserNav } from "./nav/UserNav";
import { GuestNav } from "./nav/GuestNav";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const role = useSelector(selectUserRole);

  return (
    <nav className="navbar fixed top-0 z-50 shadow-md bg-white/10 backdrop-blur">
      {isAuthenticated ? (
        role === "admin" ? (
          <AdminNav />
        ) : (
          <UserNav />
        )
      ) : (
        <GuestNav />
      )}
    </nav>
  );
};

export default Header;
