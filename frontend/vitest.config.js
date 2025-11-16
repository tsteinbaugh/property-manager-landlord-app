import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./newsrc/test/setupTests.js"],
    include: ["newsrc/**/*.{test,spec}.{js,jsx}"],
  },
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
