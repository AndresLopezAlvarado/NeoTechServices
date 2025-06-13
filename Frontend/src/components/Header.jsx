import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { selectUserRole, selectUser } from "../features/auth/authSlice";
import { AdminNav } from "./nav/AdminNav";
import { UserNav } from "./nav/UserNav";
import { GuestNav } from "./nav/GuestNav";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const role = useSelector(selectUserRole);
  const stateUser = useSelector(selectUser);

  return (
    <nav className="navbar fixed top-0 z-50 shadow-md bg-white/10 backdrop-blur">
      {isAuthenticated && stateUser ? (
        role === "admin" ? (
          <AdminNav picture={stateUser.picture.secure_url} />
        ) : (
          <UserNav picture={stateUser.picture.secure_url} />
        )
      ) : (
        <GuestNav />
      )}
    </nav>
  );
};

export default Header;
