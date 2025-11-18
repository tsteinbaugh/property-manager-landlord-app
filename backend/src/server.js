// backend/src/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Vite dev server
    credentials: true,
  })
);
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// --- Auth: very simple stub sign-in ---
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

// --- Properties: simple list with leases included ---
app.get("/api/properties", async (req, res) => {
  try {
    const props = await prisma.property.findMany({
      include: { leases: true },
      orderBy: { createdAt: "desc" },
    });
    res.json(
      props.map((p) => ({
        id: p.id,
        name: p.name,
        address: `${p.address1}, ${p.city}, ${p.state} ${p.postalCode}`,
        archived: p.isArchived,
        leases: p.leases,
      }))
    );
  } catch (err) {
    console.error("Error in /api/properties", err);
    res.status(500).json({ error: "Server error" });
  }
});

// --- Tenants: list + archive toggle ---

// GET /api/tenants - list all tenants (for now, no filtering)
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
    console.error("Error in /api/tenants", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/tenants/:id/archive - toggle archive flag
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
    console.error("Error in /api/tenants/:id/archive", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
