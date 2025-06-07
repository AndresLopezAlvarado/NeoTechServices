import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, Navigate, Outlet } from "react-router";

export const ProtectedRoutes = () => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();
  const location = useLocation();

  if (isLoading) return <div>Loading protected route...</div>;

  if (!isAuthenticated) {
    loginWithRedirect({ appState: { returnTo: location.pathname } });

    return null;
  }

  return <Outlet />;
};
