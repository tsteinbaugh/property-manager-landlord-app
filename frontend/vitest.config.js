import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setupTests.ts"],
    include: ["src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    css: false,
  },
});
