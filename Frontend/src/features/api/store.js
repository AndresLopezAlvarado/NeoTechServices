import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import authReducer from "../auth/authSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
