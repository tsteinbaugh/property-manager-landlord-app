const express = require("express");
const cors = require("cors");
const { createRequireAuth, createResolveCurrentUser } = require("./middleware/auth");
const createMeRoutes = require("./routes/me.routes");
const entitiesRoutes = require("./routes/entities.routes");
const propertiesRoutes = require("./routes/properties.routes");
const createTenantsRoutes = require("./routes/tenants.routes");
const createLeasesRoutes = require("./routes/leases.routes");
const createIncomeRoutes = require("./routes/income.routes");
const createExpensesRoutes = require("./routes/expenses.routes");
const depositsRoutes = require("./routes/deposits.routes");
const occupantsRoutes = require("./routes/occupants.routes");
const petsRoutes = require("./routes/pets.routes");
const vehiclesRoutes = require("./routes/vehicles.routes");
const vendorsRoutes = require("./routes/vendors.routes");
const maintenanceRequestsRoutes = require("./routes/maintenance-requests.routes");
const maintenanceSchedulesRoutes = require("./routes/maintenance-schedules.routes");
const searchRoutes = require("./routes/search.routes");
const rentStatusRoutes = require("./routes/rent-status.routes");
const paintSpecsRoutes = require("./routes/paint-specs.routes");
const flooringSpecsRoutes = require("./routes/flooring-specs.routes");
const countertopSpecsRoutes = require("./routes/countertop-specs.routes");
const fixturesRoutes = require("./routes/fixtures.routes");
const appliancesRoutes = require("./routes/appliances.routes");
const backsplashSpecsRoutes = require("./routes/backsplash-specs.routes");
const exteriorFeaturesRoutes = require("./routes/exterior-features.routes");
const clausesRoutes = require("./routes/clauses.routes");
const clauseTemplatesRoutes = require("./routes/clause-templates.routes");
const clauseGroupsRoutes = require("./routes/clause-groups.routes");

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
  app.use("/api/tenants", createTenantsRoutes({ r2: overrides.r2 }));
  app.use("/api/leases", createLeasesRoutes({ r2: overrides.r2 }));
  app.use("/api/income", createIncomeRoutes({ r2: overrides.r2 }));
  app.use("/api/expenses", createExpensesRoutes({ r2: overrides.r2 }));
  app.use("/api/deposits", depositsRoutes);
  app.use("/api/occupants", occupantsRoutes);
  app.use("/api/pets", petsRoutes);
  app.use("/api/vehicles", vehiclesRoutes);
  app.use("/api/vendors", vendorsRoutes);
  app.use("/api/maintenance-requests", maintenanceRequestsRoutes);
  app.use("/api/maintenance-schedules", maintenanceSchedulesRoutes);
  app.use("/api/search", searchRoutes);
  app.use("/api/rent-status", rentStatusRoutes);
  app.use("/api/paint-specs", paintSpecsRoutes);
  app.use("/api/flooring-specs", flooringSpecsRoutes);
  app.use("/api/countertop-specs", countertopSpecsRoutes);
  app.use("/api/fixtures", fixturesRoutes);
  app.use("/api/appliances", appliancesRoutes);
  app.use("/api/backsplash-specs", backsplashSpecsRoutes);
  app.use("/api/exterior-features", exteriorFeaturesRoutes);
  app.use("/api/clauses", clausesRoutes);
  app.use("/api/clause-templates", clauseTemplatesRoutes);
  app.use("/api/clause-groups", clauseGroupsRoutes);

  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
  });

  return app;
}

module.exports = createApp;
