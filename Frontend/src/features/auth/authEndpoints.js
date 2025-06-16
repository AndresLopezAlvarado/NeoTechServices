import { myApi } from "../api/myApi";

export const authEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    loadUser: builder.mutation({
      query: ({ email, name, nickname, picture }) => ({
        url: "/auth/load",
        method: "POST",
        body: { email, name, nickname, picture },
      }),
    }),
  }),
});

export const { useLoadUserMutation } = authEndpoints;
