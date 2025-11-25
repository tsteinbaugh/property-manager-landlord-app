require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const crypto = require("crypto");
const { PrismaClient } = require("@prisma/client");
const { attachUser, requireAuth } = require("./middleware/auth.middleware.js");
// ^ requireAuth is imported but not used anywhere in this file (not wrong, just unused)

// Route modules
const { registerPropertyRoutes } = require("./routes/properties.routes.js");
const { registerTenantRoutes } = require("./routes/tenants.routes.js");
const { registerOccupantRoutes } = require("./routes/occupants.routes.js");
const { registerTenantDependenciesRoutes } = require("./routes/tenantDependencies.routes.js");
const { registerLeaseRoutes } = require("./routes/leases.routes.js");
const { registerAuthRoutes } = require("./routes/auth.routes.js");
const { registerAdminRoutes } = require("./routes/admin.routes.js");

// Initialize
const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 4000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

// Ensure uploads directory exists BEFORE storage is configured
const uploadsRoot = path.join(__dirname, "..", "uploads");
const leasesUploadDir = path.join(uploadsRoot, "leases");
fs.mkdirSync(leasesUploadDir, { recursive: true });

// ---------- Lease File Upload Middleware ----------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, leasesUploadDir);
  },
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-z0-9.\-_]/gi, "_");
    cb(null, `${Date.now()}_${safeName}`);
  },
});

const uploadLeaseFile = multer({
  storage,
  fileFilter(req, file, cb) {
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.mimetype)) {
      return cb(new Error("Only PDF or Word documents are allowed for leases."));
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

// Serve uploaded files (e.g. /uploads/leases/...)
app.use("/uploads", express.static(uploadsRoot));

// ---------- Health Check ----------
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// ---------- Routes ----------
registerPropertyRoutes(app, prisma);

registerTenantRoutes(app, prisma, {
  shapeTenant,
});

registerOccupantRoutes(app, prisma, {
  shapeOccupant,
});

registerTenantDependenciesRoutes(app, prisma, {
  shapePet,
  shapeEmergencyContact,
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

// ===================================================================
// HELPERS (used by route modules)
// ===================================================================

function shapeLease(lease) {
  if (!lease) return null;

  const isArchived = lease.status === "ARCHIVED";

  return {
    id: lease.id,
    propertyId: lease.propertyId,
    propertyLabel: lease.propertyLabel ?? null,
    landlordId: lease.landlordId,

    tenantId: lease.tenantId ?? null,
    tenantName: lease.tenantName ?? null,

    rentAmount: lease.rentAmount ?? null,
    status: lease.status,
    startDate: lease.startDate ?? null,
    endDate: lease.endDate ?? null,

    archived: isArchived,
    isArchived: isArchived,

    startDateISO: lease.startDate ? lease.startDate.toISOString() : null,
    endDateISO: lease.endDate ? lease.endDate.toISOString() : null,
    createdAtISO: lease.createdAt ? lease.createdAt.toISOString() : null,
    updatedAtISO: lease.updatedAt ? lease.updatedAt.toISOString() : null,

    fileUrl: lease.fileUrl ?? null,
    fileOriginalName: lease.fileOriginalName ?? null,
    fileMimeType: lease.fileMimeType ?? null,
    fileSize: lease.fileSize ?? null,

    property: lease.property || null,
    landlord: lease.landlord || null,
    tenant: lease.tenant || null,
  };
}

function shapeTenant(t) {
  return {
    id: t.id,
    name: t.name,
    email: t.email,
    phone: t.phone,
    archived: t.isArchived,
    createdAt: t.createdAt,
    updatedAt: t.updatedAt,
  };
}

function shapeOccupant(o) {
  return {
    id: o.id,
    tenantId: o.tenantId,
    name: o.name,
    relation: o.relation,
    archived: o.isArchived,
    createdAt: o.createdAt,
    updatedAt: o.updatedAt,
  };
}

function shapePet(p) {
  return {
    id: p.id,
    tenantId: p.tenantId,
    name: p.name,
    type: p.type || "",
    breed: p.breed || "",
    weightLb: p.weightLb ?? null,
    archived: p.isArchived,
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
  };
}

function shapeEmergencyContact(c) {
  return {
    id: c.id,
    tenantId: c.tenantId,
    name: c.name,
    phone: c.phone || "",
    relation: c.relation || "",
    email: c.email || "",
    archived: c.isArchived,
    createdAt: c.createdAt,
    updatedAt: c.updatedAt,
  };
}

module.exports = {
  app,
  prisma,
};
