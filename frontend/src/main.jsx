// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { PropertyProvider } from "./context/PropertyContext.jsx";

import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <PropertyProvider>
        <App />
      </PropertyProvider>
    </UserProvider>
  </StrictMode>
);
