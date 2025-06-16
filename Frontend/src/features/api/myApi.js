import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../../config.js";

export const myApi = createApi({
  reducerPath: "myApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${BACKEND_URL}/api`,

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) headers.set("Authorization", `Bearer ${token}`);

      return headers;
    },
  }),

  endpoints: (builder) => ({}),
});
