import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./myApi.js";
import authReducer from "../auth/authSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [myApi.reducerPath]: myApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});
