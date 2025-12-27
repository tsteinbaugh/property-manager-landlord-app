//property-manager-landlord-app/frontend/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "newsrc/app"),
      "@layout": path.resolve(__dirname, "newsrc/layout"),
      "@styles": path.resolve(__dirname, "newsrc/styles"),
      "@shared": path.resolve(__dirname, "newsrc/shared"),
      "@features": path.resolve(__dirname, "newsrc/features"),
      "@lib": path.resolve(__dirname, "newsrc/lib"),
    },
  },
});
