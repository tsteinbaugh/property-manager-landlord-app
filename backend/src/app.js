const express = require("express");
const { createRequireAuth, createResolveCurrentUser } = require("./middleware/auth");
const propertiesRoutes = require("./routes/properties.routes");
const tenantsRoutes = require("./routes/tenants.routes");
const leasesRoutes = require("./routes/leases.routes");
const incomeRoutes = require("./routes/income.routes");
const expensesRoutes = require("./routes/expenses.routes");
const depositsRoutes = require("./routes/deposits.routes");

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

  // Every /api/* route requires a logged-in user, resolved to a local User row.
  app.use("/api", createRequireAuth({ getAuth }), createResolveCurrentUser({ getAuth, clerkClient }));

  app.use("/api/properties", propertiesRoutes);
  app.use("/api/tenants", tenantsRoutes);
  app.use("/api/leases", leasesRoutes);
  app.use("/api/income", incomeRoutes);
  app.use("/api/expenses", expensesRoutes);
  app.use("/api/deposits", depositsRoutes);

  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
  });

  return app;
}

module.exports = createApp;
