// backend/src/routes/residents/tenants.routes.js
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { Role, UserStatus } = require("@prisma/client");

const { requireAuth, requireLandlordOrSysadmin } = require("../middleware/auth.middleware.js");

const { parseTenantPost, parseTenantPatch } = require("../utils/tenantFields.js");
const { normalizeEmail } = require("../utils/validation.js");

const { getTenantDetails } = require("../services/tenantDetails.service.js");

function generateTempPassword() {
  return crypto.randomBytes(16).toString("hex");
}

function registerTenantRoutes(app, prisma, { shapeTenant }) {
  // ============================================================
  // GET /api/tenants/me – current logged-in tenant's profile
  // ============================================================
  app.get("/api/tenants/me", async (req, res) => {
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });
    if (user.baseRole !== Role.TENANT) {
      return res.status(403).json({ error: "Only tenants can access this endpoint" });
    }

    try {
      const tenant = await prisma.tenant.findFirst({
        where: { userId: user.id },
      });

      if (!tenant) return res.status(404).json({ error: "Tenant profile not found" });

      return res.json(shapeTenant(tenant));
    } catch (err) {
      console.error("Error in GET /api/tenants/me", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // PATCH /api/tenants/me – update current tenant (and sync to linked User)
  // ============================================================
  app.patch("/api/tenants/me", async (req, res) => {
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });
    if (user.baseRole !== Role.TENANT) {
      return res.status(403).json({ error: "Only tenants can access this endpoint" });
    }

    try {
      const existing = await prisma.tenant.findFirst({
        where: { userId: user.id, archivedAt: null },
      });

      if (!existing) return res.status(404).json({ error: "Tenant profile not found" });

      const parsed = parseTenantPatch(req.body);
      if (parsed.error) return res.status(400).json({ error: parsed.error });

      const data = parsed.data;

      const updated = await prisma.tenant.update({
        where: { id: existing.id },
        data,
      });

      // Sync to linked User (keep your intent: don't null out user.email)
      if (updated.userId) {
        try {
          const userUpdateData = {};

          if (data.name !== undefined) userUpdateData.name = data.name;

          if (data.email !== undefined) {
            if (data.email === null) {
              // do not null out user.email
            } else {
              userUpdateData.email = data.email;
            }
          }

          if (Object.keys(userUpdateData).length) {
            await prisma.user.update({
              where: { id: updated.userId },
              data: userUpdateData,
            });
          }
        } catch (userErr) {
          console.error("Error syncing PATCH /api/tenants/me to User:", userErr);
          if (userErr.code === "P2002") {
            return res.status(400).json({
              error: "Cannot change tenant email because it is already used by another user.",
            });
          }
        }
      }

      return res.json(shapeTenant(updated));
    } catch (err) {
      console.error("Error in PATCH /api/tenants/me", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET /api/tenants/:id – detail, including leases + properties + linked residents
  // ============================================================
  app.get("/api/tenants/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    try {
      const payload = await getTenantDetails(prisma, { tenantId: id, user });
      return res.json(payload);
    } catch (err) {
      if (err?.status) return res.status(err.status).json({ error: err.message });
      console.error("Error in GET /api/tenants/:id", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET /api/tenants – list tenants (scoped by landlord)
  // Optional ?includeArchived=0/1 flag
  // ============================================================
  app.get("/api/tenants", async (req, res) => {
    try {
      const user = req.user || null;
      const includeArchived = req.query.includeArchived === "1" || req.query.includeArchived === "true";

      const where = {
        ...(includeArchived ? {} : { archivedAt: null }),
      };

      if (user && user.baseRole === Role.LANDLORD) where.landlordId = user.id;

      const tenants = await prisma.tenant.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });

      return res.json(tenants.map(shapeTenant));
    } catch (err) {
      console.error("Error in GET /api/tenants", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // POST /api/tenants – create tenant (and link/create TENANT user if email present)
  // ============================================================
  app.post("/api/tenants", async (req, res) => {
    const authUser = req.user || null;
    if (!authUser) return res.status(401).json({ error: "Unauthorized" });

    try {
      const parsed = parseTenantPost(req.body);
      if (parsed.error) return res.status(400).json({ error: parsed.error });

      const tenantData = parsed.data;

      let linkedUser = null;

      // If we got an email, try to link/create a User with baseRole = TENANT
      if (tenantData.email) {
        const existingUser = await prisma.user.findUnique({
          where: { email: tenantData.email },
        });

        if (existingUser) {
          if (existingUser.baseRole !== Role.TENANT) {
            return res.status(400).json({
              error: "A user with this email already exists but is not a tenant.",
            });
          }

          const existingTenantForUser = await prisma.tenant.findFirst({
            where: { userId: existingUser.id },
          });

          if (existingTenantForUser) {
            return res.status(400).json({
              error: "A tenant profile already exists for this email.",
            });
          }

          linkedUser = existingUser;
        } else {
          const tempPassword = generateTempPassword();
          const passwordHash = await bcrypt.hash(tempPassword, 10);

          linkedUser = await prisma.user.create({
            data: {
              email: tenantData.email,
              name: tenantData.name,
              passwordHash,
              baseRole: Role.TENANT,
              status: UserStatus.INVITED,
              createdById: authUser.id,
            },
          });

          console.log(`Created TENANT user ${tenantData.email} with temp password (hidden)`);
        }
      }

      const created = await prisma.tenant.create({
        data: {
          ...tenantData,

          userId: linkedUser ? linkedUser.id : null,

          landlordId: authUser.id,
          createdById: authUser.id,
        },
      });

      return res.status(201).json(shapeTenant(created));
    } catch (err) {
      console.error("Error in POST /api/tenants", err);

      if (err.code === "P2002") {
        return res.status(400).json({ error: "Email is already in use by another user." });
      }

      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // PATCH /api/tenants/:id – update tenant (and sync to linked User)
  // ============================================================
  app.patch("/api/tenants/:id", async (req, res) => {
    const { id } = req.params;

    const user = req.user || null;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const existing = await prisma.tenant.findUnique({ where: { id } });
      if (!existing) return res.status(404).json({ error: "Tenant not found" });

      if (user.baseRole === Role.LANDLORD && existing.landlordId && existing.landlordId !== user.id) {
        return res.status(403).json({ error: "You are not allowed to update this tenant." });
      }

      const parsed = parseTenantPatch(req.body);
      if (parsed.error) return res.status(400).json({ error: parsed.error });

      const data = parsed.data;

      const updated = await prisma.tenant.update({
        where: { id },
        data,
      });

      // Sync linked User
      if (updated.userId) {
        try {
          const userUpdateData = {};

          if (data.name !== undefined) userUpdateData.name = data.name;

          if (data.email !== undefined) {
            if (data.email === null) {
              // Do NOT null out user.email
            } else {
              userUpdateData.email = data.email;
            }
          }

          if (Object.keys(userUpdateData).length > 0) {
            await prisma.user.update({
              where: { id: updated.userId },
              data: userUpdateData,
            });
          }
        } catch (userErr) {
          console.error("Error syncing Tenant update to User:", userErr);

          if (userErr.code === "P2002") {
            return res.status(400).json({
              error: "Cannot change tenant email because it is already used by another user.",
            });
          }
        }
      }

      return res.json(shapeTenant(updated));
    } catch (err) {
      console.error("Error in PATCH /api/tenants/:id", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // PATCH /api/tenants/:id/archive – toggle archivedAt timestamp (and archive linked User)
  // - LANDLORD can archive
  // - Only SYSADMIN can unarchive
  // ============================================================
  app.patch("/api/tenants/:id/archive", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const existing = await prisma.tenant.findUnique({ where: { id } });
      if (!existing) return res.status(404).json({ error: "Tenant not found" });

      if (user.baseRole === Role.LANDLORD && existing.landlordId && existing.landlordId !== user.id) {
        return res.status(403).json({ error: "You are not allowed to archive this tenant." });
      }

      const currentlyArchived = !!existing.archivedAt;
      const isSysAdmin = user.baseRole === Role.SYSADMIN;

      if (currentlyArchived && !isSysAdmin) {
        return res.status(403).json({ error: "Only a system administrator can unarchive a tenant." });
      }

      const nextArchivedAt = currentlyArchived ? null : new Date();

      const updated = await prisma.tenant.update({
        where: { id },
        data: { archivedAt: nextArchivedAt },
      });

      if (updated.userId) {
        try {
          await prisma.user.update({
            where: { id: updated.userId },
            data: { archivedAt: nextArchivedAt },
          });
        } catch (userErr) {
          console.error("Error syncing Tenant archive state to User:", userErr);
        }
      }

      return res.json(shapeTenant(updated));
    } catch (err) {
      console.error("Error in PATCH /api/tenants/:id/archive", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // Linking endpoints (kept as-is from your file)
  // ============================================================

  // POST /api/tenants/:tenantId/occupants/:occupantId/link
  app.post("/api/tenants/:tenantId/occupants/:occupantId/link", async (req, res) => {
    const { tenantId, occupantId } = req.params;
    const user = req.user || null;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const occupant = await prisma.occupant.findUnique({ where: { id: occupantId } });
      if (!occupant) return res.status(404).json({ error: "Occupant not found" });

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this tenant." });
        }
        if (occupant.landlordId && occupant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this occupant." });
        }
      }

      await prisma.tenantOccupant.upsert({
        where: { tenantId_occupantId: { tenantId, occupantId } },
        update: {},
        create: { tenantId, occupantId },
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in POST /api/tenants/:tenantId/occupants/:occupantId/link", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // DELETE /api/tenants/:tenantId/occupants/:occupantId/unlink
  app.delete("/api/tenants/:tenantId/occupants/:occupantId/unlink", async (req, res) => {
    const { tenantId, occupantId } = req.params;
    const user = req.user || null;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const occupant = await prisma.occupant.findUnique({ where: { id: occupantId } });
      if (!occupant) return res.status(404).json({ error: "Occupant not found" });

      if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
        return res.status(403).json({ error: "Forbidden" });
      }

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this tenant." });
        }
        if (occupant.landlordId && occupant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this occupant." });
        }
      }

      try {
        await prisma.tenantOccupant.delete({
          where: { tenantId_occupantId: { tenantId, occupantId } },
        });
      } catch (deleteErr) {
        console.error("No TenantOccupant link to delete", deleteErr);
        return res.status(404).json({ error: "Tenant/occupant link not found" });
      }

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in DELETE /api/tenants/:tenantId/occupants/:occupantId/unlink", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // POST /api/tenants/:tenantId/pets/:petId/link
  app.post("/api/tenants/:tenantId/pets/:petId/link", async (req, res) => {
    const { tenantId, petId } = req.params;
    const user = req.user || null;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const pet = await prisma.pet.findUnique({ where: { id: petId } });
      if (!pet) return res.status(404).json({ error: "Pet not found" });

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this tenant." });
        }
        if (pet.landlordId && pet.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this pet." });
        }
      }

      await prisma.tenantPet.upsert({
        where: { tenantId_petId: { tenantId, petId } },
        update: {},
        create: { tenantId, petId },
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in POST /api/tenants/:tenantId/pets/:petId/link", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // DELETE /api/tenants/:tenantId/pets/:petId/unlink
  app.delete("/api/tenants/:tenantId/pets/:petId/unlink", async (req, res) => {
    const { tenantId, petId } = req.params;
    const user = req.user || null;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const pet = await prisma.pet.findUnique({ where: { id: petId } });
      if (!pet) return res.status(404).json({ error: "Pet not found" });

      if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
        return res.status(403).json({ error: "Forbidden" });
      }

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this tenant." });
        }
        if (pet.landlordId && pet.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this pet." });
        }
      }

      try {
        await prisma.tenantPet.delete({
          where: { tenantId_petId: { tenantId, petId } },
        });
      } catch (deleteErr) {
        console.error("No TenantPet link to delete", deleteErr);
        return res.status(404).json({ error: "Tenant/pet link not found" });
      }

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in DELETE /api/tenants/:tenantId/pets/:petId/unlink", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // POST /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/link
  app.post("/api/tenants/:tenantId/emergencyContacts/:emergencyContactId/link", async (req, res) => {
    const { tenantId, emergencyContactId } = req.params;
    const user = req.user || null;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const emergencyContact = await prisma.emergencyContact.findUnique({ where: { id: emergencyContactId } });
      if (!emergencyContact) return res.status(404).json({ error: "EmergencyContact not found" });

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this tenant." });
        }
        if (emergencyContact.landlordId && emergencyContact.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this emergency contact." });
        }
      }

      await prisma.tenantEmergencyContact.upsert({
        where: { tenantId_emergencyContactId: { tenantId, emergencyContactId } },
        update: {},
        create: { tenantId, emergencyContactId },
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in POST /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/link", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // DELETE /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/unlink
  app.delete("/api/tenants/:tenantId/emergencyContacts/:emergencyContactId/unlink", async (req, res) => {
    const { tenantId, emergencyContactId } = req.params;
    const user = req.user || null;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const emergencyContact = await prisma.emergencyContact.findUnique({ where: { id: emergencyContactId } });
      if (!emergencyContact) return res.status(404).json({ error: "Emergency Contact not found" });

      if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
        return res.status(403).json({ error: "Forbidden" });
      }

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this tenant." });
        }
        if (emergencyContact.landlordId && emergencyContact.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this emergency contact." });
        }
      }

      try {
        await prisma.tenantEmergencyContact.delete({
          where: { tenantId_emergencyContactId: { tenantId, emergencyContactId } },
        });
      } catch (deleteErr) {
        console.error("No TenantEmergencyContact link to delete", deleteErr);
        return res.status(404).json({ error: "Tenant/emergency contact link not found" });
      }

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in DELETE /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/unlink", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // POST /api/tenants/:tenantId/vehicles/:vehicleId/link
  app.post("/api/tenants/:tenantId/vehicles/:vehicleId/link", async (req, res) => {
    const { tenantId, vehicleId } = req.params;
    const user = req.user || null;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicleId } });
      if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this tenant." });
        }
        if (vehicle.landlordId && vehicle.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this vehicle." });
        }
      }

      await prisma.tenantVehicle.upsert({
        where: { tenantId_vehicleId: { tenantId, vehicleId } },
        update: {},
        create: { tenantId, vehicleId },
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in POST /api/tenants/:tenantId/vehicles/:vehicleId/link", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // DELETE /api/tenants/:tenantId/vehicles/:vehicleId/unlink
  app.delete("/api/tenants/:tenantId/vehicles/:vehicleId/unlink", async (req, res) => {
    const { tenantId, vehicleId } = req.params;
    const user = req.user || null;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicleId } });
      if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });

      if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
        return res.status(403).json({ error: "Forbidden" });
      }

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this tenant." });
        }
        if (vehicle.landlordId && vehicle.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this vehicle." });
        }
      }

      try {
        await prisma.tenantVehicle.delete({
          where: { tenantId_vehicleId: { tenantId, vehicleId } },
        });
      } catch (deleteErr) {
        console.error("No TenantVehicle link to delete", deleteErr);
        return res.status(404).json({ error: "Tenant/vehicle link not found" });
      }

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in DELETE /api/tenants/:tenantId/vehicles/:vehicleId/unlink", err);
      return res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = { registerTenantRoutes };
