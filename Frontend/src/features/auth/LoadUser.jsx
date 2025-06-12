import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, setToken, setUser } from "./authSlice";
import { useLoadUserMutation } from "../api/authApi";
import { useEffect } from "react";
import { Loader } from "../../components/Loader.jsx";

export const LoadUser = ({ children }) => {
  const dispatch = useDispatch();
  const {
    isAuthenticated,
    user: auth0User,
    getAccessTokenSilently,
    isLoading,
  } = useAuth0();
  const stateUser = useSelector(selectUser);
  const [loadUser] = useLoadUserMutation();

  useEffect(() => {
    if (!isAuthenticated || !auth0User || stateUser) return;

    const callLoadUser = async () => {
      try {
        const token = await getAccessTokenSilently();
        dispatch(setToken(token));

        const { email, name, nickname, picture } = auth0User;
        const { data } = await loadUser({ email, name, nickname, picture });
        dispatch(setUser(data));
      } catch (error) {
        console.error("Error loading user:", error);
      }
    };

    callLoadUser();
  }, [isAuthenticated, auth0User, stateUser]);

  if (isLoading || (isAuthenticated && !stateUser))
    return <Loader message="Loading user..." />;

  return children;
};
