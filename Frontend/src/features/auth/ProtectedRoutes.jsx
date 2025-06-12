import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, Outlet } from "react-router";
import { Loader } from "../../components/Loader";

export const ProtectedRoutes = () => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();
  const location = useLocation();

  if (isLoading) return <Loader message="Verifying authentication..." />;

  if (!isAuthenticated) {
    loginWithRedirect({ appState: { returnTo: location.pathname } });
    return null;
  }

  return <Outlet />;
};
