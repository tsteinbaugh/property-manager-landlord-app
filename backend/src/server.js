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

// ---------- Auth: very simple stub sign-in ----------
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

    // Later: JWTs, sessions, etc.
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
// PROPERTIES
// ===================================================================

// GET /api/properties - return raw Property rows from Prisma
app.get("/api/properties", async (req, res) => {
  try {
    const props = await prisma.property.findMany({
      orderBy: { createdAt: "desc" },
      // include: { leases: true }, // add this back later if you need leases here
    });
    res.json(props);
  } catch (err) {
    console.error("Error in GET /api/properties", err);
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

    // Return the raw row so frontend can keep using updated.isArchived
    res.json(updated);
  } catch (err) {
    console.error("Error in PATCH /api/properties/:id/archive", err);
    res.status(500).json({ error: "Server error" });
  }
});


// ===================================================================
// LEASES
// ===================================================================

function shapeLease(row) {
  return {
    id: row.id,
    propertyId: row.propertyId,
    landlordId: row.landlordId,
    tenantName: row.tenantName,
    rentAmount: row.rentAmount,
    status: row.status, // enum LeaseStatus
    startDate: row.startDate,
    endDate: row.endDate,
    archived: row.status === "ARCHIVED",
  };
}

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

// PATCH /api/leases/:id/archive - toggle archive based on status
app.patch("/api/leases/:id/archive", async (req, res) => {
  const { id } = req.params;

  try {
    const lease = await prisma.lease.findUnique({ where: { id } });
    if (!lease) {
      return res.status(404).json({ error: "Lease not found" });
    }

    const nextStatus = lease.status === "ARCHIVED" ? "ACTIVE" : "ARCHIVED";

    console.log(
      `Toggling lease ${id} from ${lease.status} -> ${nextStatus}`
    );

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

    res.json(
      tenants.map((t) => ({
        id: t.id,
        name: t.name,
        email: t.email,
        phone: t.phone,
        archived: t.isArchived,
        createdAt: t.createdAt,
        updatedAt: t.updatedAt,
      }))
    );
  } catch (err) {
    console.error("Error in GET /api/tenants", err);
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

    res.json({
      id: updated.id,
      name: updated.name,
      email: updated.email,
      phone: updated.phone,
      archived: updated.isArchived,
      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt,
    });
  } catch (err) {
    console.error("Error in PATCH /api/tenants/:id/archive", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ---------- Start server ----------
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
