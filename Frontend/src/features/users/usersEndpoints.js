import { myApi } from "../api/myApi";

export const usersEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
});

export const { useGetUsersQuery, useUpdateRoleMutation } = usersEndpoints;
