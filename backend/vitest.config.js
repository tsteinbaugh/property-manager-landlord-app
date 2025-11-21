// <reference types="vitest" />

const { defineConfig } = require("vitest/config");
const path = require("path");

module.exports = defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["src/**/*.test.{js,jsx,ts,tsx}"],
    setupFiles: ["./src/test/setupTests.js"],
  },
  resolve: {
    alias: {
      // if you have backend aliases, add them here
      "@src": path.resolve(__dirname, "src"),
    },
  },
});
