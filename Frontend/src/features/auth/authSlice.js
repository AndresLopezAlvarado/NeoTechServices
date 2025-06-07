import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    //Es necesario?, creo que no lo estoy usando
    clearUser: (state, action) => {
      state.user = null;
    },

    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setToken, setUser, clearUser, logout } = authSlice.actions;

export const selectToken = (state) => state.auth.token;
export const selectUser = (state) => state.auth.user;
export const selectUserRole = (state) => state.auth.user?.role;

export default authSlice.reducer;
