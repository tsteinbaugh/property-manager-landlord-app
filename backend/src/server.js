// backend/src/server.js
require("module-alias/register");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");

const { attachUser } = require("@src/middleware/auth.middleware.js");

// Route modules
const { registerPropertyRoutes } = require("@routes/properties.routes.js");
const { registerTenantRoutes } = require("@routes/tenants.routes.js");
const { registerOccupantRoutes } = require("@routes/residents/occupants.routes.js");
const { registerPetRoutes } = require("@routes/residents/pets.routes.js");
const { registerEmergencyContactRoutes } = require("@routes/residents/emergencyContacts.routes.js");
const { registerVehicleRoutes } = require("@routes/residents/vehicles.routes.js");
const { registerLeaseRoutes } = require("@routes/leases.routes.js");
const { registerAuthRoutes } = require("@routes/auth.routes.js");
const { registerAdminRoutes } = require("@routes/admin.routes.js");

const {
  shapeProperty,
  shapeLease,
  shapeTenant,
  shapeOccupant,
  shapePet,
  shapeEmergencyContact,
  shapeVehicle,
} = require("@shapes");

// Initialize
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });
const app = express();

const PORT = process.env.PORT || 4000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

// Ensure uploads directory exists BEFORE storage is configured
const uploadsRoot = path.join(__dirname, "..", "uploads");
const leasesUploadDir = path.join(uploadsRoot, "leases");
const tenantsUploadDir = path.join(uploadsRoot, "tenants"); // ✅ ADD
fs.mkdirSync(leasesUploadDir, { recursive: true });
fs.mkdirSync(tenantsUploadDir, { recursive: true }); // ✅ ADD

// ---------- Lease File Upload Middleware ----------
const leaseStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, leasesUploadDir);
  },
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-z0-9.\-_]/gi, "_");
    cb(null, `${Date.now()}_${safeName}`);
  },
});

const uploadLeaseFile = multer({
  storage: leaseStorage,
  fileFilter(req, file, cb) {
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      // If you truly want JPEG here, add:
      // "image/jpeg",
    ];
    if (!allowed.includes(file.mimetype)) {
      return cb(new Error("Only PDF, Word or JPEG attachments are allowed."));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 25 * 1024 * 1024, // 25 MB
  },
});

// ---------- Tenant File Upload Middleware ----------
const tenantStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tenantsUploadDir);
  },
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-z0-9.\-_]/gi, "_");
    cb(null, `${Date.now()}_${safeName}`);
  },
});

const uploadTenantFile = multer({
  storage: tenantStorage,
  fileFilter(req, file, cb) {
    // Tenants routes comment says "docs/images"
    // Keep it similar to leases but allow images too.
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/webp",
    ];
    if (!allowed.includes(file.mimetype)) {
      return cb(new Error("Only PDF, Word, or image attachments are allowed."));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 25 * 1024 * 1024, // 25 MB
  },
});

// ---------- Middleware ----------
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());

app.use(attachUser(prisma));

// Serve uploaded files (e.g. /uploads/leases/... and /uploads/tenants/...)
app.use("/uploads", express.static(uploadsRoot));

// ---------- Health Check ----------
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// ---------- Routes ----------
registerPropertyRoutes(app, prisma, {
  shapeProperty,
});

registerTenantRoutes(app, prisma, {
  shapeTenant,
  uploadTenantFile, // ✅ THIS IS THE FIX
});

registerOccupantRoutes(app, prisma, {
  shapeOccupant,
});

registerPetRoutes(app, prisma, {
  shapePet,
});

registerEmergencyContactRoutes(app, prisma, {
  shapeEmergencyContact,
});

registerVehicleRoutes(app, prisma, {
  shapeVehicle,
});

registerLeaseRoutes(app, prisma, {
  uploadLeaseFile,
  shapeLease,
});

registerAuthRoutes(app, prisma, {
  FRONTEND_ORIGIN,
});

registerAdminRoutes(app, prisma, {
  FRONTEND_ORIGIN,
});

// ---------- Start Server ----------
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

module.exports = {
  app,
  prisma,
};
