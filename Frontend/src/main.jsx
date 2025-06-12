import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import Auth0ProviderWithNavigate from "./features/auth/Auth0ProviderWithNavigate.jsx";
import { Provider } from "react-redux";
import { store } from "./features/api/store.js";
import { LoadUser } from "./features/auth/LoadUser.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <Provider store={store}>
          <LoadUser>
            <App />
          </LoadUser>
        </Provider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </StrictMode>
);
