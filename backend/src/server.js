// backend/src/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 4000;

// ---------- Middleware ----------
app.use(
  cors({
    origin: "http://localhost:5173", // Vite dev server
    credentials: true,
  })
);
app.use(express.json());

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

    // Frontend's useProperties maps raw rows, so just return the row
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
          name !== undefined
            ? (name || "").trim() || null
            : existing.name,
        address1:
          address1 !== undefined
            ? address1.trim()
            : existing.address1,
        city:
          city !== undefined
            ? city.trim()
            : existing.city,
        state:
          state !== undefined
            ? state.trim()
            : existing.state,
        postalCode:
          postalCode !== undefined
            ? postalCode.trim()
            : existing.postalCode,
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
          relation !== undefined
            ? relation.trim() || null
            : existing.relation,
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
