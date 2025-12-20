//backend/src/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");


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
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });
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
// SHAPES
// ===================================================================

function shapeLease(lease) {
  if (!lease) return null;

  return {
    id: lease.id,
    status: lease.status,
    rentAmount: lease.rentAmount,
    startDate: lease.startDate,
    endDate: lease.endDate,
    notes: lease.notes,
    archived: lease.status === "ARCHIVED",

    landlordId: lease.landlordId || null,
    propertyId: lease.propertyId || null,

    property: lease.property
      ? {
          id: lease.property.id,
          name: lease.property.name,
          address1: lease.property.address1,
          city: lease.property.city,
          state: lease.property.state,
          postalCode: lease.property.postalCode,
          bedrooms: lease.property.bedrooms,
          bathrooms: lease.property.bathrooms,
          sqft: lease.property.sqft,
          yearBuilt: lease.property.yearBuilt,
        }
      : null,

    // ✅ ONLY source of tenants for a lease now
    leaseTenants: Array.isArray(lease.leaseTenants)
      ? lease.leaseTenants.map((lt) => ({
          id: lt.id,
          tenantId: lt.tenantId,
          tenantName:
            lt.tenantName ||
            lt.tenant?.name ||
            null,
          isPrimary: !!lt.isPrimary,
          startDate: lt.startDate,
          endDate: lt.endDate,

          // include a minimal tenant object if your include pulled it
          tenant: lt.tenant
            ? {
                id: lt.tenant.id,
                name: lt.tenant.name,
                email: lt.tenant.email,
                phone: lt.tenant.phone,
                archived: lt.tenant.isArchived,
              }
            : null,
        }))
      : [],

    propertyLabel: lease.propertyLabel || null,

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
    age: t.age,
    heightFeet: t.heightFeet,
    heightInches: t.heightInches,
    weight: t.weight,
    sex: t.sex,
    hairColor: t.hairColor,
    eyeColor: t.eyeColor,
    bodyBuild: t.bodyBuild,
    markings: t.markings,
    occupation: t.occupation,
    employer: t.employer,
    income: t.income,
    creditScore: t.creditScore,
    violations: t.violations,
    notes: t.notes,
    archived: t.isArchived,
    createdAt: t.createdAt,
    updatedAt: t.updatedAt,
  };
}

function shapeOccupant(o) {
  return {
    id: o.id,
    name: o.name,
    email: o.email,
    phone: o.phone,
    relation: o.relation,
    age: o.age,
    heightFeet: o.heightFeet,
    heightInches: o.heightInches,
    weight: o.weight,
    sex: o.sex,
    hairColor: o.hairColor,
    eyeColor: o.eyeColor,
    bodyBuild: o.bodyBuild,
    markings: o.markings,
    violations: o.violations,
    notes: o.notes,
    archived: o.isArchived,
    createdAt: o.createdAt,
    updatedAt: o.updatedAt,
  };
}

function shapePet(p) {
  return {
    id: p.id,
    name: p.name,
    type: p.type,
    breed: p.breed,
    weightLb: p.weightLb,
    age: p.age,
    license: p.license,
    notes: p.notes,
    violations: p.violations,
    archived: p.isArchived,
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
  };
}

function shapeEmergencyContact(e) {
  return {
    id: e.id,
    name: e.name,
    phone: e.phone,
    email: e.email,
    address1: e.address1,
    city: e.city,
    state: e.state,
    postalCode: e.postalCode,
    relation: e.relation,
    notes: e.notes,
    archived: e.isArchived,
    createdAt: e.createdAt,
    updatedAt: e.updatedAt,
  };
}

function shapeVehicle(v) {
  return {
    id: v.id,
    make: v.make,
    model: v.model,
    year: v.year,
    color: v.color,
    state: v.state,
    plate: v.plate,
    permit: v.permit,
    parking: v.parking,
    notes: v.notes,
    violations: v.violations,
    archived: v.isArchived,
    createdAt: v.createdAt,
    updatedAt: v.updatedAt,
  };
}

module.exports = {
  app,
  prisma,
};
