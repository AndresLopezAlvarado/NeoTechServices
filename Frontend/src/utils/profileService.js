import { useApi } from "./api";

export const useUserRole = () => {
  const { apiFetch } = useApi();
  const getRole = async () => {
    const res = await apiFetch("/me");

    return res.role;
  };

  return { getRole };
};
