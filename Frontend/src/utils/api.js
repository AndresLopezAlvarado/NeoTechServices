import { useAuth0 } from "@auth0/auth0-react";

export const useApi = () => {
  const { getAccessTokenSilently } = useAuth0();

  const apiFetch = async (endpoint, options = {}) => {
    const token = await getAccessTokenSilently();
    const res = await fetch(`http://localhost:3000${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });

    return res.json();
  };

  return { apiFetch };
};
