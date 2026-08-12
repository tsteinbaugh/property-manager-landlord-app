const express = require("express");
const createPropertiesRouter = require("./routes/properties.routes");

function createApp(overrides = {}) {
  const clerk = require("@clerk/express");
  const clerkMiddleware = overrides.clerkMiddleware || clerk.clerkMiddleware;
  const getAuth = overrides.getAuth || clerk.getAuth;
  const clerkClient = overrides.clerkClient || clerk.clerkClient;

  const app = express();

  app.use(express.json());
  app.use(clerkMiddleware());

  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.use("/api/properties", createPropertiesRouter({ getAuth, clerkClient }));

  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
  });

  return app;
}

module.exports = createApp;
