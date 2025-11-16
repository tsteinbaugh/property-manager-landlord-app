import React from "react";
import { createRoot } from "react-dom/client";
import { AppProviders } from "@app/providers.jsx";
import { AppRoutes } from "@app/routes.jsx";
import "@styles/global.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </React.StrictMode>,
);
