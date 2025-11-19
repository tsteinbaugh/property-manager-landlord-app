// backend/src/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 4000;

// Ensure uploads directory exists
const uploadsRoot = path.join(__dirname, "..", "uploads");
const leasesUploadDir = path.join(uploadsRoot, "leases");
fs.mkdirSync(leasesUploadDir, { recursive: true });

// ---------- Middleware ----------
app.use(
  cors({
    origin: "http://localhost:5173", // Vite dev server
    credentials: true,
  })
);
app.use(express.json());

// Serve uploaded files (e.g. /uploads/leases/....)
app.use("/uploads", express.static(uploadsRoot));

// ---------- Health check ----------
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// ===================================================================
// AUTH (simple stub sign-in)
// ===================================================================
app.post("/api/auth/sign-in", async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.passwordHash !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    return res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        baseRole: user.baseRole,
      },
    });
  } catch (err) {
    console.error("Error in /api/auth/sign-in", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// ===================================================================
// HELPERS
// ===================================================================

function shapeLease(row) {
  return {
    id: row.id,
    propertyId: row.propertyId,
    landlordId: row.landlordId,
    tenantName: row.tenantName,
    rentAmount: row.rentAmount,
    status: row.status,
    startDate: row.startDate,
    endDate: row.endDate,
    fileUrl: row.fileUrl || null,
    fileOriginalName: row.fileOriginalName || null,
    fileMimeType: row.fileMimeType || null,
    fileSize: row.fileSize ?? null,
    archived: row.status === "ARCHIVED",
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

// ===================================================================
// FILE UPLOAD (LEASES)
// ===================================================================

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, leasesUploadDir);
  },
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-z0-9.\-_.]/gi, "_");
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
      return cb(
        new Error("Only PDF or Word documents are allowed for leases.")
      );
    }
    cb(null, true);
  },
  limits: {
    fileSize: 25 * 1024 * 1024, // 25 MB
  },
});

// ===================================================================
// PROPERTIES
// ===================================================================

// GET /api/properties - list all properties (raw Prisma rows)
app.get("/api/properties", async (req, res) => {
  try {
    const props = await prisma.property.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(props);
  } catch (err) {
    console.error("Error in GET /api/properties", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/properties - create a property
app.post("/api/properties", async (req, res) => {
  const { name, address1, city, state, postalCode } = req.body || {};

  if (!address1 || !city || !state || !postalCode) {
    return res.status(400).json({
      error: "address1, city, state, and postalCode are required",
    });
  }

  try {
    const created = await prisma.property.create({
      data: {
        name: name?.trim() || null,
        address1: address1.trim(),
        city: city.trim(),
        state: state.trim(),
        postalCode: postalCode.trim(),
      },
    });

    res.status(201).json(created);
  } catch (err) {
    console.error("Error in POST /api/properties", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/properties/:id - update property fields
app.patch("/api/properties/:id", async (req, res) => {
  const { id } = req.params;
  const { name, address1, city, state, postalCode } = req.body || {};

  try {
    const existing = await prisma.property.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Property not found" });
    }

    const updated = await prisma.property.update({
      where: { id },
      data: {
        name:
          name !== undefined ? (name || "").trim() || null : existing.name,
        address1:
          address1 !== undefined ? address1.trim() : existing.address1,
        city: city !== undefined ? city.trim() : existing.city,
        state: state !== undefined ? state.trim() : existing.state,
        postalCode:
          postalCode !== undefined ? postalCode.trim() : existing.postalCode,
      },
    });

    res.json(updated);
  } catch (err) {
    console.error("Error in PATCH /api/properties/:id", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/properties/:id/archive - toggle isArchived flag
app.patch("/api/properties/:id/archive", async (req, res) => {
  const { id } = req.params;
  try {
    const existing = await prisma.property.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Property not found" });
    }

    const updated = await prisma.property.update({
      where: { id },
      data: { isArchived: !existing.isArchived },
    });

    res.json(updated);
  } catch (err) {
    console.error("Error in PATCH /api/properties/:id/archive", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ===================================================================
// LEASES
// ===================================================================

// POST /api/leases - create a lease + upload file
// If no propertyId is provided, attach to the most recently created property.
// If no landlordId is provided, attach to the first user (landlord).
app.post(
  "/api/leases",
  (req, res, next) => {
    uploadLeaseFile.single("file")(req, res, (err) => {
      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res
            .status(400)
            .json({ error: "File too large. Maximum size is 25 MB." });
        }
        return res
          .status(400)
          .json({ error: err.message || "Upload error" });
      }
      next();
    });
  },
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Lease file is required" });
      }

      const {
        propertyId: rawPropertyId = "",
        landlordId: rawLandlordId = "",
        tenantName,
        rentAmount,
        startDate,
        endDate,
      } = req.body || {};

      if (!tenantName || !tenantName.trim()) {
        return res.status(400).json({ error: "tenantName is required" });
      }

      // Rent parsing
      const numericRent =
        rentAmount !== undefined && rentAmount !== ""
          ? Number(rentAmount)
          : null;

      // ---------- Resolve property ----------
      // 1) If client sent a propertyId, use it.
      // 2) Otherwise, attach to most recently created property.
      let effectivePropertyId = rawPropertyId && String(rawPropertyId).trim();
      if (!effectivePropertyId) {
        const latestProperty = await prisma.property.findFirst({
          orderBy: { createdAt: "desc" },
        });

        if (!latestProperty) {
          return res.status(400).json({
            error:
              "No properties exist to attach this lease to. Create a property first.",
          });
        }

        effectivePropertyId = latestProperty.id;
      }

      // ---------- Resolve landlord ----------
      // 1) If client sent a landlordId, use it.
      // 2) Otherwise, use the first user in the system.
      let effectiveLandlordId =
        rawLandlordId && String(rawLandlordId).trim();
      if (!effectiveLandlordId) {
        const firstUser = await prisma.user.findFirst({
          orderBy: { createdAt: "asc" },
        });

        if (!firstUser) {
          return res.status(400).json({
            error:
              "No landlord user exists to attach this lease to. Create a user first.",
          });
        }

        effectiveLandlordId = firstUser.id;
      }

      const created = await prisma.lease.create({
        data: {
          // Satisfy required relations explicitly
          property: { connect: { id: effectivePropertyId } },
          landlord: { connect: { id: effectiveLandlordId } },

          tenantName: tenantName.trim(),
          rentAmount: numericRent,
          status: "ACTIVE",
          startDate: startDate ? new Date(startDate) : null,
          endDate: endDate ? new Date(endDate) : null,
          fileUrl: `/uploads/leases/${req.file.filename}`,
          fileOriginalName: req.file.originalname,
          fileMimeType: req.file.mimetype,
          fileSize: req.file.size,
        },
      });

      res.status(201).json(shapeLease(created));
    } catch (err) {
      console.error("Error in POST /api/leases", err);
      res.status(500).json({ error: err.message || "Server error" });
    }
  }
);

// GET /api/leases - list all leases
app.get("/api/leases", async (req, res) => {
  try {
    const leases = await prisma.lease.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        property: true,
        landlord: true,
      },
    });

    res.json(leases.map(shapeLease));
  } catch (err) {
    console.error("Error in GET /api/leases", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/leases/:id - update lease fields
app.patch("/api/leases/:id", async (req, res) => {
  const { id } = req.params;
  const { tenantName, rentAmount, startDate, endDate } = req.body || {};

  try {
    const existing = await prisma.lease.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Lease not found" });
    }

    let numericRent = existing.rentAmount;
    if (rentAmount !== undefined) {
      if (rentAmount === null || rentAmount === "") {
        numericRent = null;
      } else {
        const parsed = Number(rentAmount);
        if (!Number.isFinite(parsed)) {
          return res.status(400).json({ error: "rentAmount must be a number" });
        }
        numericRent = parsed;
      }
    }

    const updated = await prisma.lease.update({
      where: { id },
      data: {
        tenantName:
          tenantName !== undefined
            ? tenantName.trim() || existing.tenantName
            : existing.tenantName,
        rentAmount: numericRent,
        startDate:
          startDate !== undefined
            ? startDate
              ? new Date(startDate)
              : null
            : existing.startDate,
        endDate:
          endDate !== undefined
            ? endDate
              ? new Date(endDate)
              : null
            : existing.endDate,
      },
    });

    res.json(shapeLease(updated));
  } catch (err) {
    console.error("Error in PATCH /api/leases/:id", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/leases/:id/archive - toggle status ARCHIVED/ACTIVE
app.patch("/api/leases/:id/archive", async (req, res) => {
  const { id } = req.params;

  try {
    const lease = await prisma.lease.findUnique({ where: { id } });
    if (!lease) {
      return res.status(404).json({ error: "Lease not found" });
    }

    const nextStatus = lease.status === "ARCHIVED" ? "ACTIVE" : "ARCHIVED";
    console.log(`Toggling lease ${id} from ${lease.status} -> ${nextStatus}`);

    const updated = await prisma.lease.update({
      where: { id },
      data: { status: nextStatus },
    });

    res.json(shapeLease(updated));
  } catch (err) {
    console.error("Error in PATCH /api/leases/:id/archive", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ===================================================================
// TENANTS
// ===================================================================

// GET /api/tenants – list all tenants
app.get("/api/tenants", async (req, res) => {
  try {
    const tenants = await prisma.tenant.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.json(tenants.map(shapeTenant));
  } catch (err) {
    console.error("Error in GET /api/tenants", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/tenants – create tenant
app.post("/api/tenants", async (req, res) => {
  const { name, email, phone } = req.body || {};
  if (!name || !name.trim()) {
    return res.status(400).json({ error: "name is required" });
  }

  try {
    const created = await prisma.tenant.create({
      data: {
        name: name.trim(),
        email: email?.trim() || null,
        phone: phone?.trim() || null,
      },
    });

    res.status(201).json(shapeTenant(created));
  } catch (err) {
    console.error("Error in POST /api/tenants", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/tenants/:id – update tenant
app.patch("/api/tenants/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body || {};

  try {
    const existing = await prisma.tenant.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    const updated = await prisma.tenant.update({
      where: { id },
      data: {
        name: name?.trim() ?? existing.name,
        email: email !== undefined ? email.trim() || null : existing.email,
        phone: phone !== undefined ? phone.trim() || null : existing.phone,
      },
    });

    res.json(shapeTenant(updated));
  } catch (err) {
    console.error("Error in PATCH /api/tenants/:id", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/tenants/:id/archive – toggle archive flag
app.patch("/api/tenants/:id/archive", async (req, res) => {
  const { id } = req.params;

  try {
    const existing = await prisma.tenant.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    const updated = await prisma.tenant.update({
      where: { id },
      data: { isArchived: !existing.isArchived },
    });

    res.json(shapeTenant(updated));
  } catch (err) {
    console.error("Error in PATCH /api/tenants/:id/archive", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ===================================================================
// OCCUPANTS (per-tenant)
// ===================================================================

// GET /api/tenants/:tenantId/occupants
app.get("/api/tenants/:tenantId/occupants", async (req, res) => {
  const { tenantId } = req.params;
  const includeArchived =
    req.query.includeArchived === "1" ||
    req.query.includeArchived === "true";

  try {
    const where = {
      tenantId,
      ...(includeArchived ? {} : { isArchived: false }),
    };

    const occupants = await prisma.occupant.findMany({
      where,
      orderBy: { createdAt: "asc" },
    });

    res.json(occupants.map(shapeOccupant));
  } catch (err) {
    console.error("Error in GET /api/tenants/:tenantId/occupants", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/tenants/:tenantId/occupants – create occupant
app.post("/api/tenants/:tenantId/occupants", async (req, res) => {
  const { tenantId } = req.params;
  const { name, relation } = req.body || {};

  if (!name || !name.trim()) {
    return res.status(400).json({ error: "name is required" });
  }

  try {
    const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
    if (!tenant) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    const created = await prisma.occupant.create({
      data: {
        tenantId,
        name: name.trim(),
        relation: relation?.trim() || null,
      },
    });

    res.status(201).json(shapeOccupant(created));
  } catch (err) {
    console.error("Error in POST /api/tenants/:tenantId/occupants", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/tenants/:tenantId/occupants/:id – update occupant
app.patch("/api/tenants/:tenantId/occupants/:id", async (req, res) => {
  const { tenantId, id } = req.params;
  const { name, relation } = req.body || {};

  try {
    const existing = await prisma.occupant.findUnique({ where: { id } });
    if (!existing || existing.tenantId !== tenantId) {
      return res.status(404).json({ error: "Occupant not found" });
    }

    const updated = await prisma.occupant.update({
      where: { id },
      data: {
        name: name?.trim() ?? existing.name,
        relation:
          relation !== undefined ? relation.trim() || null : existing.relation,
      },
    });

    res.json(shapeOccupant(updated));
  } catch (err) {
    console.error(
      "Error in PATCH /api/tenants/:tenantId/occupants/:id",
      err
    );
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/tenants/:tenantId/occupants/:id/archive – toggle isArchived
app.patch(
  "/api/tenants/:tenantId/occupants/:id/archive",
  async (req, res) => {
    const { tenantId, id } = req.params;

    try {
      const existing = await prisma.occupant.findUnique({ where: { id } });
      if (!existing || existing.tenantId !== tenantId) {
        return res.status(404).json({ error: "Occupant not found" });
      }

      const updated = await prisma.occupant.update({
        where: { id },
        data: { isArchived: !existing.isArchived },
      });

      res.json(shapeOccupant(updated));
    } catch (err) {
      console.error(
        "Error in PATCH /api/tenants/:tenantId/occupants/:id/archive",
        err
      );
      res.status(500).json({ error: "Server error" });
    }
  }
);

// ===================================================================
// START SERVER
// ===================================================================
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
