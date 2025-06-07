import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../../config.js";
export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${BACKEND_URL}/api`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("Content-Type", "application/json");
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    initUser: builder.mutation({
      query: ({ auth0Id, email, name, picture }) => ({
        url: "/auth/init",
        method: "POST",
        body: { auth0Id, email, name, picture },
      }),
    }),
  }),
});

export const { useInitUserMutation } = authApi;
