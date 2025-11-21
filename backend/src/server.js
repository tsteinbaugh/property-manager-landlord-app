// backend/src/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const crypto = require("crypto");
const { PrismaClient, Role, UserStatus, AuthTokenKind } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 4000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}

const bcrypt = require("bcryptjs");

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
// AUTH (bcrypt-backed sign-in)
// ===================================================================
app.post("/api/auth/sign-in", async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const stored = user.passwordHash || "";
    let ok = false;

    // If it looks like a bcrypt hash, use bcrypt.compare
    if (
      stored.startsWith("$2a$") ||
      stored.startsWith("$2b$") ||
      stored.startsWith("$2y$")
    ) {
      ok = await bcrypt.compare(password, stored);
    } else {
      // Backwards-compat: allow old plain-text passwords to keep working
      ok = stored === password;
    }

    if (!ok) {
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
// AUTH – change password for current user
// ===================================================================
app.post("/api/auth/change-password", async (req, res) => {
  const { email, currentPassword, newPassword } = req.body || {};

  if (!email || !currentPassword || !newPassword) {
    return res.status(400).json({
      error: "email, currentPassword, and newPassword are required",
    });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    // Don't leak which part is wrong – generic invalid creds
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const stored = user.passwordHash || "";
    let ok = false;

    // Same logic as sign-in: bcrypt first, fallback to legacy plain text
    if (
      stored.startsWith("$2a$") ||
      stored.startsWith("$2b$") ||
      stored.startsWith("$2y$")
    ) {
      ok = await bcrypt.compare(currentPassword, stored);
    } else {
      ok = stored === currentPassword;
    }

    if (!ok) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const trimmedNew = newPassword.trim();
    if (trimmedNew.length < 8) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 characters long" });
    }

    const hashed = await bcrypt.hash(trimmedNew, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: { passwordHash: hashed },
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Error in /api/auth/change-password", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET /api/auth/invite/:token - validate invite token and return basic info
app.get("/api/auth/invite/:token", async (req, res) => {
  const { token } = req.params;
  try {
    const authToken = await prisma.authToken.findUnique({
      where: { token },
      include: { user: true },
    });

    if (
      !authToken ||
      authToken.kind !== AuthTokenKind.INVITE ||
      authToken.usedAt ||
      authToken.expiresAt < new Date()
    ) {
      return res.status(400).json({ error: "Invalid or expired invite link" });
    }

    if (!authToken.user) {
      return res.status(400).json({ error: "Invite is not attached to a user" });
    }

    return res.json({
      email: authToken.email || authToken.user.email,
      baseRole: authToken.user.baseRole,
      status: authToken.user.status,
    });
  } catch (err) {
    console.error("Error in GET /api/auth/invite/:token", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// POST /api/auth/accept-invite
// Body: { token, name?, password }
app.post("/api/auth/accept-invite", async (req, res) => {
  const { token, name, password } = req.body || {};

  if (!token || !password || !password.trim()) {
    return res
      .status(400)
      .json({ error: "token and password are required" });
  }

  try {
    const authToken = await prisma.authToken.findUnique({
      where: { token },
      include: { user: true },
    });

    if (
      !authToken ||
      authToken.kind !== AuthTokenKind.INVITE ||
      authToken.usedAt ||
      authToken.expiresAt < new Date()
    ) {
      return res.status(400).json({ error: "Invalid or expired invite link" });
    }

    if (!authToken.user) {
      return res.status(400).json({ error: "Invite is not attached to a user" });
    }

    const trimmedPassword = password.trim();
    if (trimmedPassword.length < 8) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 characters long" });
    }

    const hash = await bcrypt.hash(trimmedPassword, 10);

    const updatedUser = await prisma.user.update({
      where: { id: authToken.userId },
      data: {
        name: name && name.trim() ? name.trim() : authToken.user.name,
        passwordHash: hash,
        status: UserStatus.ACTIVE,
        isArchived: false,
      },
    });

    await prisma.authToken.update({
      where: { id: authToken.id },
      data: { usedAt: new Date() },
    });

    return res.json({
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
        baseRole: updatedUser.baseRole,
      },
    });
  } catch (err) {
    console.error("Error in POST /api/auth/accept-invite", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// POST /api/auth/request-password-reset
// Body: { email }
app.post("/api/auth/request-password-reset", async (req, res) => {
  const { email } = req.body || {};
  if (!email || !email.trim()) {
    return res.status(400).json({ error: "email is required" });
  }

  const emailTrimmed = email.trim().toLowerCase();

  try {
    const user = await prisma.user.findUnique({
      where: { email: emailTrimmed },
    });

    // Always respond with generic success to avoid leaking which emails exist
    if (!user || user.isArchived || user.status === UserStatus.DISABLED) {
      return res.json({ ok: true });
    }

    const token = generateToken();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    const resetToken = await prisma.authToken.create({
      data: {
        token,
        kind: AuthTokenKind.RESET_PASSWORD,
        userId: user.id,
        email: emailTrimmed,
        expiresAt,
      },
    });

    const resetUrl = `${FRONTEND_ORIGIN}/reset-password?token=${encodeURIComponent(
      resetToken.token
    )}`;

    console.log(
      `Password reset requested for ${emailTrimmed}: ${resetUrl}`
    );

    // For now we also return the URL so you can click it in dev
    return res.json({ ok: true, resetUrl });
  } catch (err) {
    console.error("Error in POST /api/auth/request-password-reset", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// POST /api/auth/reset-password
// Body: { token, newPassword }
app.post("/api/auth/reset-password", async (req, res) => {
  const { token, newPassword } = req.body || {};

  if (!token || !newPassword || !newPassword.trim()) {
    return res
      .status(400)
      .json({ error: "token and newPassword are required" });
  }

  try {
    const authToken = await prisma.authToken.findUnique({
      where: { token },
      include: { user: true },
    });

    if (
      !authToken ||
      authToken.kind !== AuthTokenKind.RESET_PASSWORD ||
      authToken.usedAt ||
      authToken.expiresAt < new Date()
    ) {
      return res
        .status(400)
        .json({ error: "Invalid or expired reset link" });
    }

    if (!authToken.user) {
      return res
        .status(400)
        .json({ error: "Reset token not attached to a user" });
    }

    const trimmed = newPassword.trim();
    if (trimmed.length < 8) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 characters long" });
    }

    const hash = await bcrypt.hash(trimmed, 10);

    await prisma.user.update({
      where: { id: authToken.userId },
      data: {
        passwordHash: hash,
        status:
          authToken.user.status === UserStatus.INVITED
            ? UserStatus.ACTIVE
            : authToken.user.status,
      },
    });

    await prisma.authToken.update({
      where: { id: authToken.id },
      data: { usedAt: new Date() },
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Error in POST /api/auth/reset-password", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// ===================================================================
// HELPERS
// ===================================================================

function normalizeBaseRole(raw) {
  if (!raw) return null;
  const s = String(raw).trim().toUpperCase();

  if (s === "SYSTEM_ADMIN") return Role.SYSADMIN;

  // If s matches one of the enum keys, use it
  if (Role[s]) {
    return Role[s];
  }

  return null;
}

function shapeUser(u) {
  if (!u) return null;
  return {
    id: u.id,
    email: u.email,
    name: u.name || "",
    baseRole: u.baseRole,
    status: u.status,
    archived: !!u.isArchived,
    createdAt: u.createdAt,
    updatedAt: u.updatedAt,
  };
}

function shapeLease(lease) {
  if (!lease) return null;

  const isArchived = lease.status === "ARCHIVED";

  return {
    id: lease.id,
    propertyId: lease.propertyId,
    landlordId: lease.landlordId,

    tenantId: lease.tenantId ?? null,
    tenantName: lease.tenantName ?? null,

    rentAmount: lease.rentAmount ?? null,
    status: lease.status,
    startDate: lease.startDate ?? null,
    endDate: lease.endDate ?? null,

    archived: isArchived,
    isArchived: isArchived,

    // optional ISO helpers if you ever need them
    startDateISO: lease.startDate ? lease.startDate.toISOString() : null,
    endDateISO: lease.endDate ? lease.endDate.toISOString() : null,
    createdAtISO: lease.createdAt ? lease.createdAt.toISOString() : null,
    updatedAtISO: lease.updatedAt ? lease.updatedAt.toISOString() : null,

    fileUrl: lease.fileUrl ?? null,
    fileOriginalName: lease.fileOriginalName ?? null,
    fileMimeType: lease.fileMimeType ?? null,
    fileSize: lease.fileSize ?? null,

    // included relations when present
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
// ADMIN USERS (sysadmin only in UI; backend currently trusts caller)
// ===================================================================

// GET /api/admin/users?includeArchived=0|1
app.get("/api/admin/users", async (req, res) => {
  const includeArchived =
    req.query.includeArchived === "1" ||
    req.query.includeArchived === "true";

  try {
    const users = await prisma.user.findMany({
      where: includeArchived ? {} : { isArchived: false },
      orderBy: { createdAt: "desc" },
    });

    res.json(users.map(shapeUser));
  } catch (err) {
    console.error("Error in GET /api/admin/users", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/admin/users
// Body: { email, name?, baseRole, password?, status? }
app.post("/api/admin/users", async (req, res) => {
  try {
    const { email, name, baseRole, password } = req.body || {};

    if (!email || !email.trim()) {
      return res.status(400).json({ error: "email is required" });
    }

    const normalizedRole = normalizeBaseRole(baseRole);
    if (!normalizedRole) {
      return res
        .status(400)
        .json({ error: `Invalid baseRole: ${baseRole}` });
    }

    // If no password provided, give them a temporary one.
    const plainPassword =
      (password && password.trim()) || "changeme123";
    const hashed = await bcrypt.hash(plainPassword, 10);

    const created = await prisma.user.create({
      data: {
        email: email.trim(),
        name: name?.trim() || null,
        passwordHash: hashed,
        baseRole: normalizedRole,
      },
    });

    // For now we don't expose the hash or temp password in the API response.
    // If you want the temp password in dev, you can log it here:
    console.log(
      `Admin created user ${created.email} with temp password: ${plainPassword}`
    );

    res.status(201).json({
      id: created.id,
      email: created.email,
      name: created.name,
      baseRole: created.baseRole,
      createdAt: created.createdAt,
    });
  } catch (err) {
    console.error("Error in POST /api/admin/users", err);
    res.status(500).json({ error: "Server error" });
  }
});


// PATCH /api/admin/users/:id
// Body: partial { email?, name?, baseRole?, status?, password? }
app.patch("/api/admin/users/:id", async (req, res) => {
  const { id } = req.params;
  const { email, name, baseRole, status, password } = req.body || {};

  try {
    const existing = await prisma.user.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "User not found" });
    }

    const data = {};

    if (email !== undefined) {
      if (!email.trim()) {
        return res.status(400).json({ error: "email cannot be empty" });
      }
      data.email = email.trim().toLowerCase();
    }

    if (name !== undefined) {
      data.name = name.trim() || null;
    }

    if (baseRole !== undefined) {
      if (!Object.values(Role).includes(baseRole)) {
        return res.status(400).json({ error: `Invalid baseRole: ${baseRole}` });
      }
      data.baseRole = baseRole;
    }

    if (status !== undefined) {
      if (!Object.values(UserStatus).includes(status)) {
        return res.status(400).json({ error: `Invalid status: ${status}` });
      }
      data.status = status;
    }

    if (password !== undefined) {
      const trimmed = password.trim();
      if (!trimmed) {
        return res
          .status(400)
          .json({ error: "password cannot be empty when provided" });
      }
      data.passwordHash = await bcrypt.hash(trimmed, 10);
    }

    const updated = await prisma.user.update({
      where: { id },
      data,
    });

    res.json(shapeUser(updated));
  } catch (err) {
    console.error("Error in PATCH /api/admin/users/:id", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/admin/users/:id/archive - toggle isArchived
app.patch("/api/admin/users/:id/archive", async (req, res) => {
  const { id } = req.params;

  try {
    const existing = await prisma.user.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "User not found" });
    }

    const nextArchived = !existing.isArchived;

    // If we're about to archive a SYSADMIN, ensure it's not the last active one
    if (nextArchived && existing.baseRole === Role.SYSADMIN) {
      const otherActiveSysadmins = await prisma.user.count({
        where: {
          id: { not: id },
          baseRole: Role.SYSADMIN,
          isArchived: false,
          // optionally: status: "ACTIVE"
        },
      });

      if (otherActiveSysadmins === 0) {
        return res.status(400).json({
          error: "Cannot archive the last active system administrator.",
        });
      }
    }

    const updated = await prisma.user.update({
      where: { id },
      data: { isArchived: nextArchived },
    });

    res.json(shapeUser(updated));
  } catch (err) {
    console.error("Error in PATCH /api/admin/users/:id/archive", err);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /api/admin/users/:id
app.delete("/api/admin/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const existing = await prisma.user.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "User not found" });
    }

    // Prevent deleting the last active SYSADMIN
    if (existing.baseRole === Role.SYSADMIN) {
      const otherActiveSysadmins = await prisma.user.count({
        where: {
          id: { not: id },
          baseRole: Role.SYSADMIN,
          isArchived: false,
          // optionally add: status: "ACTIVE"
        },
      });

      if (otherActiveSysadmins === 0) {
        return res.status(400).json({
          error: "Cannot delete the last active system administrator.",
        });
      }
    }

    await prisma.user.delete({ where: { id } });
    res.json({ ok: true });
  } catch (err) {
    console.error("Error in DELETE /api/admin/users/:id", err);
    if (err.code === "P2025") {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(500).json({ error: "Server error" });
  }
});

// ===================================================================
// ADMIN INVITES (sysadmin in UI; backend currently trusts caller)
// ===================================================================

// POST /api/admin/invites
// Body: { email, baseRole }
// Creates/updates a user in INVITED status and generates an invite token.
app.post("/api/admin/invites", async (req, res) => {
  try {
    const { email, baseRole } = req.body || {};

    if (!email || !email.trim()) {
      return res.status(400).json({ error: "email is required" });
    }

    const normalizedRole = normalizeBaseRole(baseRole);
    if (!normalizedRole) {
      return res
        .status(400)
        .json({ error: `Invalid baseRole: ${baseRole}` });
    }

    const emailTrimmed = email.trim().toLowerCase();

    // Either find existing user or create a new INVITED one
    let user = await prisma.user.findUnique({ where: { email: emailTrimmed } });

    if (!user) {
      const tempPasswordHash = await bcrypt.hash(generateToken(), 10);
      user = await prisma.user.create({
        data: {
          email: emailTrimmed,
          name: null,
          passwordHash: tempPasswordHash,
          baseRole: normalizedRole,
          status: UserStatus.INVITED,
          isArchived: false,
        },
      });
    } else {
      // If user exists and isn't disabled, mark them invited / active again
      if (user.status !== UserStatus.DISABLED) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: {
            baseRole: normalizedRole,
            status: UserStatus.INVITED,
            isArchived: false,
          },
        });
      }
    }

    const token = generateToken();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    const authToken = await prisma.authToken.create({
      data: {
        token,
        kind: AuthTokenKind.INVITE,
        userId: user.id,
        email: emailTrimmed,
        expiresAt,
      },
    });

    const inviteUrl = `${FRONTEND_ORIGIN}/accept-invite?token=${encodeURIComponent(
      authToken.token
    )}`;

    console.log(`Invite created for ${emailTrimmed}: ${inviteUrl}`);

    return res.status(201).json({
      userId: user.id,
      email: user.email,
      baseRole: user.baseRole,
      status: user.status,
      inviteUrl,
    });
  } catch (err) {
    console.error("Error in POST /api/admin/invites", err);
    return res.status(500).json({ error: "Server error" });
  }
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

// GET /api/properties/:id/summary
// Returns: property + active lease (if any) + tenant + occupants + pets + emergency contacts
app.get("/api/properties/:id/summary", async (req, res) => {
  const { id } = req.params;

  try {
    const property = await prisma.property.findUnique({
      where: { id },
      include: {
        leases: {
          where: { status: "ACTIVE" },
          orderBy: { startDate: "desc" },
          include: {
            tenant: true,
          },
        },
      },
    });

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    const activeLease = property.leases[0] || null;
    const tenant = activeLease?.tenant || null;

    let occupants = [];
    let pets = [];
    let emergencyContacts = [];

    if (tenant) {
      occupants = await prisma.occupant.findMany({
        where: { tenantId: tenant.id, isArchived: false },
        orderBy: { createdAt: "asc" },
      });

      pets = await prisma.pet.findMany({
        where: { tenantId: tenant.id, isArchived: false },
        orderBy: { createdAt: "asc" },
      });

      emergencyContacts = await prisma.emergencyContact.findMany({
        where: { tenantId: tenant.id, isArchived: false },
        orderBy: { createdAt: "asc" },
      });
    }

    res.json({
      property,
      lease: activeLease,
      tenant,
      occupants,
      pets,
      emergencyContacts,
    });
  } catch (err) {
    console.error("Error in GET /api/properties/:id/summary", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ===================================================================
// LEASES
// ===================================================================

// POST /api/leases - create a lease + upload file
// If no propertyId is provided, attach to the most recently created property.
// If no landlordId is provided, attach to the first user (landlord).
// POST /api/leases - create a lease + upload file
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
        tenantId: rawTenantId = "",
        tenantName,
        rentAmount,
        startDate,
        endDate,
      } = req.body || {};

      // ---------- Resolve property ----------
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

      // ---------- Resolve tenant (REQUIRED now) ----------
      let effectiveTenantId =
        rawTenantId && String(rawTenantId).trim()
          ? String(rawTenantId).trim()
          : null;

      if (!effectiveTenantId) {
        return res.status(400).json({ error: "tenantId is required" });
      }

      const tenant = await prisma.tenant.findUnique({
        where: { id: effectiveTenantId },
      });
      if (!tenant) {
        return res.status(400).json({ error: "Invalid tenantId" });
      }

      // Rent parsing
      const numericRent =
        rentAmount !== undefined && rentAmount !== ""
          ? Number(rentAmount)
          : null;

      const created = await prisma.lease.create({
        data: {
          property: { connect: { id: effectivePropertyId } },
          landlord: { connect: { id: effectiveLandlordId } },
        
          tenant: { connect: { id: effectiveTenantId } },
        
          tenantName:
            tenantName && tenantName.trim() ? tenantName.trim() : null,
        
          rentAmount: numericRent,
          status: "ACTIVE",
          startDate: startDate ? new Date(startDate) : null,
          endDate: endDate ? new Date(endDate) : null,
          fileUrl: `/uploads/leases/${req.file.filename}`,
          fileOriginalName: req.file.originalname,
          fileMimeType: req.file.mimetype,
          fileSize: req.file.size,
        },
        include: {
          tenant: true,
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
        tenant: true,   // NEW
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
  const { tenantName, tenantId, rentAmount, startDate, endDate } = req.body || {};

  try {
    const existing = await prisma.lease.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Lease not found" });
    }

    // ---------- Resolve tenantId ----------
    let nextTenantId = existing.tenantId;
    if (tenantId !== undefined) {
      const trimmed = String(tenantId || "").trim();
      nextTenantId = trimmed || null;

      if (nextTenantId) {
        const t = await prisma.tenant.findUnique({
          where: { id: nextTenantId },
        });
        if (!t) {
          return res.status(400).json({ error: "Invalid tenantId" });
        }
      }
    }

    // ---------- Rent handling ----------
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

    const dataToUpdate = {
      tenantName:
        tenantName !== undefined
          ? tenantName.trim() || existing.tenantName
          : existing.tenantName,
      rentAmount: numericRent,
      startDate:
        startDate !== undefined
          ? startDate ? new Date(startDate) : null
          : existing.startDate,
      endDate:
        endDate !== undefined
          ? endDate ? new Date(endDate) : null
          : existing.endDate,
    };

    // only reconnect tenant if a new tenantId was provided
    if (tenantId !== undefined) {
      dataToUpdate.tenant = { connect: { id: nextTenantId } };
    }

    const updated = await prisma.lease.update({
      where: { id },
      data: dataToUpdate,
      include: { tenant: true },
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
// PETS (per-tenant)
// ===================================================================

// GET /api/tenants/:tenantId/pets
app.get("/api/tenants/:tenantId/pets", async (req, res) => {
  const { tenantId } = req.params;
  const includeArchived =
    req.query.includeArchived === "1" ||
    req.query.includeArchived === "true";

  try {
    const where = {
      tenantId,
      ...(includeArchived ? {} : { isArchived: false }),
    };

    const pets = await prisma.pet.findMany({
      where,
      orderBy: { createdAt: "asc" },
    });

    res.json(pets.map(shapePet));
  } catch (err) {
    console.error("Error in GET /api/tenants/:tenantId/pets", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/tenants/:tenantId/pets – create pet
app.post("/api/tenants/:tenantId/pets", async (req, res) => {
  const { tenantId } = req.params;
  const { name, type, breed, weightLb } = req.body || {};

  if (!name || !name.trim()) {
    return res.status(400).json({ error: "name is required" });
  }

  try {
    const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
    if (!tenant) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    const parsedWeight =
      weightLb !== undefined && weightLb !== null && weightLb !== ""
        ? Number(weightLb)
        : null;

    const created = await prisma.pet.create({
      data: {
        tenantId,
        name: name.trim(),
        type: type?.trim() || null,
        breed: breed?.trim() || null,
        weightLb: parsedWeight,
      },
    });

    res.status(201).json(shapePet(created));
  } catch (err) {
    console.error("Error in POST /api/tenants/:tenantId/pets", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/tenants/:tenantId/pets/:id – update pet
app.patch("/api/tenants/:tenantId/pets/:id", async (req, res) => {
  const { tenantId, id } = req.params;
  const { name, type, breed, weightLb } = req.body || {};

  try {
    const existing = await prisma.pet.findUnique({ where: { id } });
    if (!existing || existing.tenantId !== tenantId) {
      return res.status(404).json({ error: "Pet not found" });
    }

    const parsedWeight =
      weightLb !== undefined && weightLb !== null && weightLb !== ""
        ? Number(weightLb)
        : null;

    const updated = await prisma.pet.update({
      where: { id },
      data: {
        name: name !== undefined ? name.trim() || existing.name : existing.name,
        type: type !== undefined ? type.trim() || null : existing.type,
        breed: breed !== undefined ? breed.trim() || null : existing.breed,
        weightLb:
          weightLb !== undefined ? parsedWeight : existing.weightLb,
      },
    });

    res.json(shapePet(updated));
  } catch (err) {
    console.error("Error in PATCH /api/tenants/:tenantId/pets/:id", err);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/tenants/:tenantId/pets/:id/archive – toggle isArchived
app.patch("/api/tenants/:tenantId/pets/:id/archive", async (req, res) => {
  const { tenantId, id } = req.params;

  try {
    const existing = await prisma.pet.findUnique({ where: { id } });
    if (!existing || existing.tenantId !== tenantId) {
      return res.status(404).json({ error: "Pet not found" });
    }

    const updated = await prisma.pet.update({
      where: { id },
      data: { isArchived: !existing.isArchived },
    });

    res.json(shapePet(updated));
  } catch (err) {
    console.error(
      "Error in PATCH /api/tenants/:tenantId/pets/:id/archive",
      err
    );
    res.status(500).json({ error: "Server error" });
  }
});

// ===================================================================
// EMERGENCY CONTACTS (per-tenant)
// ===================================================================

// GET /api/tenants/:tenantId/emergency-contacts
app.get(
  "/api/tenants/:tenantId/emergency-contacts",
  async (req, res) => {
    const { tenantId } = req.params;
    const includeArchived =
      req.query.includeArchived === "1" ||
      req.query.includeArchived === "true";

    try {
      const where = {
        tenantId,
        ...(includeArchived ? {} : { isArchived: false }),
      };

      const contacts = await prisma.emergencyContact.findMany({
        where,
        orderBy: { createdAt: "asc" },
      });

      res.json(contacts.map(shapeEmergencyContact));
    } catch (err) {
      console.error(
        "Error in GET /api/tenants/:tenantId/emergency-contacts",
        err
      );
      res.status(500).json({ error: "Server error" });
    }
  }
);

// POST /api/tenants/:tenantId/emergency-contacts – create contact
app.post(
  "/api/tenants/:tenantId/emergency-contacts",
  async (req, res) => {
    const { tenantId } = req.params;
    const { name, phone, relation, email } = req.body || {};

    if (!name || !name.trim()) {
      return res.status(400).json({ error: "name is required" });
    }

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) {
        return res.status(404).json({ error: "Tenant not found" });
      }

      const created = await prisma.emergencyContact.create({
        data: {
          tenantId,
          name: name.trim(),
          phone: phone?.trim() || null,
          relation: relation?.trim() || null,
          email: email?.trim() || null,
        },
      });

      res.status(201).json(shapeEmergencyContact(created));
    } catch (err) {
      console.error(
        "Error in POST /api/tenants/:tenantId/emergency-contacts",
        err
      );
      res.status(500).json({ error: "Server error" });
    }
  }
);

// PATCH /api/tenants/:tenantId/emergency-contacts/:id – update contact
app.patch(
  "/api/tenants/:tenantId/emergency-contacts/:id",
  async (req, res) => {
    const { tenantId, id } = req.params;
    const { name, phone, relation, email } = req.body || {};

    try {
      const existing = await prisma.emergencyContact.findUnique({
        where: { id },
      });
      if (!existing || existing.tenantId !== tenantId) {
        return res.status(404).json({ error: "Emergency contact not found" });
      }

      const updated = await prisma.emergencyContact.update({
        where: { id },
        data: {
          name:
            name !== undefined
              ? name.trim() || existing.name
              : existing.name,
          phone:
            phone !== undefined ? phone.trim() || null : existing.phone,
          relation:
            relation !== undefined
              ? relation.trim() || null
              : existing.relation,
          email:
            email !== undefined ? email.trim() || null : existing.email,
        },
      });

      res.json(shapeEmergencyContact(updated));
    } catch (err) {
      console.error(
        "Error in PATCH /api/tenants/:tenantId/emergency-contacts/:id",
        err
      );
      res.status(500).json({ error: "Server error" });
    }
  }
);

// PATCH /api/tenants/:tenantId/emergency-contacts/:id/archive – toggle isArchived
app.patch(
  "/api/tenants/:tenantId/emergency-contacts/:id/archive",
  async (req, res) => {
    const { tenantId, id } = req.params;

    try {
      const existing = await prisma.emergencyContact.findUnique({
        where: { id },
      });
      if (!existing || existing.tenantId !== tenantId) {
        return res.status(404).json({ error: "Emergency contact not found" });
      }

      const updated = await prisma.emergencyContact.update({
        where: { id },
        data: { isArchived: !existing.isArchived },
      });

      res.json(shapeEmergencyContact(updated));
    } catch (err) {
      console.error(
        "Error in PATCH /api/tenants/:tenantId/emergency-contacts/:id/archive",
        err
      );
      res.status(500).json({ error: "Server error" });
    }
  }
);

// ===================================================================
// ADMIN OVERVIEW
// ===================================================================

app.get("/api/admin/overview", async (req, res) => {
  try {
    const totalUsers = await prisma.user.count();
    const landlords = await prisma.user.count({
      where: { baseRole: "LANDLORD" },
    });
    const tenants = await prisma.user.count({
      where: { baseRole: "TENANT" },
    });
    const propertyManagers = await prisma.user.count({
      where: { baseRole: "PROPERTY_MANAGER" },
    });

    // We don't have a real Invite model yet → treat as 0 for now
    const pendingInvites = 0;

    res.json({
      totalUsers,
      landlords,
      tenants,
      propertyManagers,
      pendingInvites,
    });
  } catch (err) {
    console.error("Error in GET /api/admin/overview", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ===================================================================
// START SERVER
// ===================================================================
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
