/* eslint-disable unused-imports/no-unused-imports */

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { PropertyProvider } from "./context/PropertyContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { ModalProvider } from "./features/ui/modal/ModalProvider.jsx";

import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <UserProvider>
        <PropertyProvider>
          <App />
        </PropertyProvider>
      </UserProvider>
    </ModalProvider>
  </StrictMode>,
);
