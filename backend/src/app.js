const express = require("express");
const cors = require("cors");
const { createRequireAuth, createResolveCurrentUser } = require("./middleware/auth");
const createMeRoutes = require("./routes/me.routes");
const entitiesRoutes = require("./routes/entities.routes");
const propertiesRoutes = require("./routes/properties.routes");
const tenantsRoutes = require("./routes/tenants.routes");
const createLeasesRoutes = require("./routes/leases.routes");
const incomeRoutes = require("./routes/income.routes");
const expensesRoutes = require("./routes/expenses.routes");
const depositsRoutes = require("./routes/deposits.routes");
const vendorsRoutes = require("./routes/vendors.routes");
const maintenanceRequestsRoutes = require("./routes/maintenance-requests.routes");
const maintenanceSchedulesRoutes = require("./routes/maintenance-schedules.routes");

function createApp(overrides = {}) {
  const clerk = require("@clerk/express");
  const clerkMiddleware = overrides.clerkMiddleware || clerk.clerkMiddleware;
  const getAuth = overrides.getAuth || clerk.getAuth;
  const clerkClient = overrides.clerkClient || clerk.clerkClient;

  const app = express();

  app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
  app.use(express.json());
  app.use(clerkMiddleware());

  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Every /api/* route requires a logged-in user, resolved to a local User row.
  app.use("/api", createRequireAuth({ getAuth }), createResolveCurrentUser({ getAuth, clerkClient }));

  app.use("/api/me", createMeRoutes({ clerkClient }));
  app.use("/api/entities", entitiesRoutes);
  app.use("/api/properties", propertiesRoutes);
  app.use("/api/tenants", tenantsRoutes);
  app.use("/api/leases", createLeasesRoutes({ r2: overrides.r2 }));
  app.use("/api/income", incomeRoutes);
  app.use("/api/expenses", expensesRoutes);
  app.use("/api/deposits", depositsRoutes);
  app.use("/api/vendors", vendorsRoutes);
  app.use("/api/maintenance-requests", maintenanceRequestsRoutes);
  app.use("/api/maintenance-schedules", maintenanceSchedulesRoutes);

  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
  });

  return app;
}

module.exports = createApp;
