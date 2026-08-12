const { defineConfig } = require("vitest/config");
require("dotenv").config({ path: ".env.test" });

module.exports = defineConfig({
  test: {
    environment: "node",
    globals: true,
  },
});
