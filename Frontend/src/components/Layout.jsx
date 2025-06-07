import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useInitUserMutation } from "../features/api/authApi";
import { useEffect } from "react";
import { setToken, setUser } from "../features/auth/authSlice";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

export const Layout = () => {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
  const dispatch = useDispatch();
  const [initUser] = useInitUserMutation();

  useEffect(() => {
    const getRole = async () => {
      if (!isAuthenticated) return;

      try {
        const token = await getAccessTokenSilently();
        dispatch(setToken(token));

        const { data } = await initUser({
          auth0Id: user.sub,
          email: user.email,
          name: user.name,
          picture: user.picture,
        });
        dispatch(setUser(data.user));
      } catch (err) {
        console.error("Error al inicializar usuario:", err);
      }
    };

    getRole();
  }, [isAuthenticated]);

  return (
    <div>
      <Header />

      <main className="mt-16 min-h-[calc(100dvh-3rem)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
