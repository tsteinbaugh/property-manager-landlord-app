// newsrc/app/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@app/routes.jsx";
import { AppProviders } from "@app/providers.jsx";
import "@styles/global.css";

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);

root.render(
  <React.StrictMode>
    <AppProviders>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProviders>
  </React.StrictMode>
);
