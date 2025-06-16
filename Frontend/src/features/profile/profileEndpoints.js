import { myApi } from "../api/myApi";

export const profileEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    updatePicture: builder.mutation({
      query: ({ newPicture }) => ({
        url: "/user/picture",
        method: "POST",
        body: { newPicture },
      }),
    }),

    updateProfile: builder.mutation({
      query: ({ newName }) => ({
        url: "/user/profile",
        method: "POST",
        body: { newName },
      }),
    }),
  }),
});

export const { useUpdatePictureMutation, useUpdateProfileMutation } =
  profileEndpoints;
