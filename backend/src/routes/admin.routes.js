// backend/src/routes/admin.routes.js
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { Role, UserStatus, AuthTokenKind } = require("@prisma/client");

function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}

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

/**
 * Admin routes:
 * - /api/admin/users (CRUD + archive)
 * - /api/admin/invites
 * - /api/admin/overview
 */
function registerAdminRoutes(app, prisma, { FRONTEND_ORIGIN }) {
  // ===================================================================
  // ADMIN USERS
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

      const authUser = req.user || null;

      const created = await prisma.user.create({
        data: {
          email: email.trim(),
          name: name?.trim() || null,
          passwordHash: hashed,
          baseRole: normalizedRole,
          // NEW: who created this user
          createdById: authUser ? authUser.id : null,
        },
      });

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
          return res
            .status(400)
            .json({ error: `Invalid baseRole: ${baseRole}` });
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
          return res.status(400).json({
            error: "password cannot be empty when provided",
          });
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
  // ADMIN INVITES
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
      const authUser = req.user || null;

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
            // NEW: who created this invited user
            createdById: authUser ? authUser.id : null,
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
              // Do NOT touch createdById here; keep original creator
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
}

module.exports = {
  registerAdminRoutes,
};
