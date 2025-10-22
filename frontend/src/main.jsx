import { createRoot } from "react-dom/client";

import { UserProvider } from "./context/UserContext.jsx";
import { PropertyProvider } from "./context/PropertyContext.jsx";
import AppShell from "./app/AppShell.jsx";

import "./global.css";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <PropertyProvider>
      <AppShell />
    </PropertyProvider>
  </UserProvider>
);
