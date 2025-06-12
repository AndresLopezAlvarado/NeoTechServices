import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../../config.js";

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${BACKEND_URL}/api`,

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) headers.set("Authorization", `Bearer ${token}`);

      return headers;
    },
  }),

  endpoints: (builder) => ({
    loadUser: builder.mutation({
      query: ({ email, name, nickname, picture }) => ({
        url: "/auth/load",
        method: "POST",
        body: { email, name, nickname, picture },
      }),
    }),

    getUsers: builder.query({
      query: () => "/admin/users",
      providesTags: ["Users"],
    }),

    updateRole: builder.mutation({
      query: ({ userId, role }) => ({
        url: `/admin/users/:${userId}`,
        method: "POST",
        body: { userId, role },
      }),
      invalidatesTags: ["Users"],
    }),

    updateProfile: builder.mutation({
      query: ({ newName, newPicture }) => ({
        url: "/user/profile",
        method: "POST",
        body: { newName, newPicture },
      }),
    }),
  }),
});

export const {
  useLoadUserMutation,
  useGetUsersQuery,
  useUpdateRoleMutation,
  useUpdateProfileMutation,
} = authApi;
