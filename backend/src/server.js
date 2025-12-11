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
const { registerTenantRoutes } = require("./routes/residents/tenants.routes.js");
const { registerOccupantRoutes } = require("./routes/residents/occupants.routes.js");
const { registerPetRoutes } = require("./routes/residents/pets.routes.js");
const { registerEmergencyContactRoutes } = require("./routes/residents/emergencyContacts.routes.js");
const { registerVehicleRoutes } = require("./routes/residents/vehicles.routes.js");
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

// ===================================================================
// HELPERS (used by route modules)
// ===================================================================

function shapeLease(lease) {
  if (!lease) return null;

  const isArchived = lease.status === "ARCHIVED";

  return {
    id: lease.id,
    status: lease.status,
    rentAmount: lease.rentAmount,
    startDate: lease.startDate,
    endDate: lease.endDate,
    archived: lease.status === "ARCHIVED",

    // linkage info
    propertyId: lease.propertyId || null,
    tenantId: lease.tenantId || null,
    landlordId: lease.landlordId || null,

    property: lease.property
      ? {
          id: lease.property.id,
          name: lease.property.name,
          address1: lease.property.address1,
          city: lease.property.city,
          state: lease.property.state,
          postalCode: lease.property.postalCode,
        }
      : null,

    tenant: lease.tenant
      ? {
          id: lease.tenant.id,
          name: lease.tenant.name,
          email: lease.tenant.email,
          phone: lease.tenant.phone,
        }
      : null,

    leaseTenants: Array.isArray(lease.leaseTenants)
      ? lease.leaseTenants.map((lt) => ({
          id: lt.id,
          tenantId: lt.tenantId,
          tenantName: lt.tenantName,
          isPrimary: !!lt.isPrimary,
          startDate: lt.startDate,
          endDate: lt.endDate,
        }))
      : [],

    tenantName: lease.tenantName || null,
    propertyLabel: lease.propertyLabel || null,

    // file metadata
    fileUrl: lease.fileUrl || null,
    fileOriginalName: lease.fileOriginalName || null,
    fileMimeType: lease.fileMimeType || null,
    fileSize: lease.fileSize ?? null,

    createdAt: lease.createdAt,
    updatedAt: lease.updatedAt,
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
  // Primary tenant from the old 1:1 field
  const primaryTenant = o.tenant
    ? {
        id: o.tenant.id,
        name: o.tenant.name,
        email: o.tenant.email,
        phone: o.tenant.phone,
      }
    : null;

  // Additional tenants via join table
  const tenantsFromLinks = Array.isArray(o.tenantLinks)
    ? o.tenantLinks
        .map((link) => link.tenant)
        .filter(Boolean)
        .map((t) => ({
          id: t.id,
          name: t.name,
          email: t.email,
          phone: t.phone,
        }))
    : [];

  // We’ll let the frontend de-dupe if primaryTenant also appears in tenants[].
  return {
    id: o.id,
    tenantId: o.tenantId,
    name: o.name,
    relation: o.relation,
    archived: o.isArchived,
    createdAt: o.createdAt,
    updatedAt: o.updatedAt,

    primaryTenant,
    tenants: tenantsFromLinks,
  };
}

function shapePet(p) {
  // Primary tenant from the old 1:1 field
  const primaryTenant = p.tenant
    ? {
        id: p.tenant.id,
        name: p.tenant.name,
        email: p.tenant.email,
        phone: p.tenant.phone,
      }
    : null;

  // Additional tenants via join table
  const tenantsFromLinks = Array.isArray(p.tenantLinks)
    ? p.tenantLinks
        .map((link) => link.tenant)
        .filter(Boolean)
        .map((t) => ({
          id: t.id,
          name: t.name,
          email: t.email,
          phone: t.phone,
        }))
    : [];

  // We’ll let the frontend de-dupe if primaryTenant also appears in tenants[].
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

    primaryTenant,
    tenants: tenantsFromLinks,
  };
}

function shapeEmergencyContact(e) {
  // Primary tenant from the old 1:1 field
  const primaryTenant = e.tenant
    ? {
        id: e.tenant.id,
        name: e.tenant.name,
        email: e.tenant.email,
        phone: e.tenant.phone,
      }
    : null;

  // Additional tenants via join table
  const tenantsFromLinks = Array.isArray(e.tenantLinks)
    ? e.tenantLinks
        .map((link) => link.tenant)
        .filter(Boolean)
        .map((t) => ({
          id: t.id,
          name: t.name,
          email: t.email,
          phone: t.phone,
        }))
    : [];

  // We’ll let the frontend de-dupe if primaryTenant also appears in tenants[].
  return {
    id: e.id,
    tenantId: e.tenantId,
    name: e.name,
    phone: e.phone,
    relation: e.relation,
    email: e.email,
    archived: e.isArchived,
    createdAt: e.createdAt,
    updatedAt: e.updatedAt,

    primaryTenant,
    tenants: tenantsFromLinks,
  };
}

function shapeVehicle(v) {
  return {
    id: v.id,
    tenantId: v.tenantId,
    make: v.make || "",
    model: v.model || "",
    year: v.year ?? null,
    color: v.color || "",
    state: v.state || "",
    plate: v.plate || "",
    permit: v.permit || "",
    archived: v.isArchived,
    createdAt: v.createdAt,
    updatedAt: v.updatedAt,
  };
}

module.exports = {
  app,
  prisma,
};
