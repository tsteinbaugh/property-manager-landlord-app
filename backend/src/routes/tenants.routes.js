// backend/src/routes/residents/tenants.routes.js
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { Role, UserStatus } = require("@prisma/client");

const { requireAuth, requireLandlordOrSysadmin } = require("@src/middleware/auth.middleware.js");

const { parseTenantPost, parseTenantPatch } = require("@utils/tenantFields.js");
const { normalizeEmail } = require("@utils/validation.js");

const { getTenantDetails } = require("@services/tenantDetails.service.js");

function generateTempPassword() {
  return crypto.randomBytes(16).toString("hex");
}

function registerTenantRoutes(app, prisma, { shapeTenant, uploadTenantFile }) {
  const auth = requireAuth(prisma);

  // ============================================================
  // Upload wrapper (multer)
  // ============================================================
  const uploadMany = (field, max = 10) => (req, res, next) => {
    if (!uploadTenantFile) {
      return res.status(500).json({ error: "uploadTenantFile is not configured" });
    }

    uploadTenantFile.array(field, max)(req, res, (err) => {
      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res
            .status(400)
            .json({ error: "File too large. Maximum size is 25 MB." });
        }
        return res.status(400).json({ error: err.message || "Upload error" });
      }
      return next();
    });
  };

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
  // Supports ?includeArchivedAttachments=0|1
  // ============================================================
  app.get(
    "/api/tenants/:id",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { id } = req.params;
      const user = req.user || null;

      const includeArchivedAttachments =
        req.query.includeArchivedAttachments === "1" ||
        req.query.includeArchivedAttachments === "true";

      try {
        const payload = await getTenantDetails(prisma, {
          tenantId: id,
          user,
          includeArchivedAttachments,
        });
        return res.json(payload);
      } catch (err) {
        if (err?.status) return res.status(err.status).json({ error: err.message });
        console.error("Error in GET /api/tenants/:id", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // GET /api/tenants – list tenants (scoped by landlord)
  // Optional ?includeArchived=0|1 flag
  // ============================================================
  app.get("/api/tenants", 
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
    try {
      const user = req.user || null;
      const includeArchived =
        req.query.includeArchived === "1" || req.query.includeArchived === "true";

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
  app.post("/api/tenants", 
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {

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
  app.patch(
    "/api/tenants/:id",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { id } = req.params;

      const user = req.user || null;
      if (!user) return res.status(401).json({ error: "Unauthorized" });

      try {
        const existing = await prisma.tenant.findUnique({ where: { id } });
        if (!existing) return res.status(404).json({ error: "Tenant not found" });

        if (existing.archivedAt) {
          return res.status(409).json({
            error:
              "Tenant is archived and cannot be edited. Restore (unarchive) first, then edit, then re-archive.",
          });
        }

        if (
          user.baseRole === Role.LANDLORD &&
          existing.landlordId &&
          existing.landlordId !== user.id
        ) {
          return res
            .status(403)
            .json({ error: "You are not allowed to update this tenant." });
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
    }
  );

  // ============================================================
  // PATCH /api/tenants/:id/archive - toggle archivedAt + archiveReason
  // ============================================================
  app.patch(
    "/api/tenants/:id/archive",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { id } = req.params;
      const user = req.user;

      try {
        const tenant = await prisma.tenant.findUnique({ where: { id } });
        if (!tenant) return res.status(404).json({ error: "Tenant not found" });

        // landlord scoping
        if (
          user.baseRole === Role.LANDLORD &&
          tenant.landlordId &&
          tenant.landlordId !== user.id
        ) {
          return res.status(403).json({
            error: "You are not allowed to archive this tenant.",
          });
        }

        const isArchiving = !tenant.archivedAt;

        const raw = req.body?.archiveReason;
        const reason = typeof raw === "string" ? raw.trim() : "";

        if (isArchiving && !reason) {
          return res.status(400).json({ error: "archiveReason is required" });
        }

        const updated = await prisma.tenant.update({
          where: { id },
          data: {
            archivedAt: isArchiving ? new Date() : null,
            archiveReason: isArchiving ? reason : null,
            archivedById: isArchiving ? user.id : null,
          },
        });

        return res.json(shapeTenant(updated));
      } catch (err) {
        console.error("Error in PATCH /api/tenants/:id/archive", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // POST /api/tenants/:id/attachments - upload docs/images
  // field name: "files"
  // ============================================================
  app.post(
    "/api/tenants/:id/attachments",
    auth,
    requireLandlordOrSysadmin,
    uploadMany("files", 10),
    async (req, res) => {
      try {
        const { id } = req.params;
        const authUser = req.user || null;

        const tenant = await prisma.tenant.findUnique({ where: { id } });
        if (!tenant) return res.status(404).json({ error: "Tenant not found" });

        if (
          authUser &&
          authUser.baseRole === Role.LANDLORD &&
          tenant.landlordId &&
          tenant.landlordId !== authUser.id
        ) {
          return res.status(403).json({ error: "Forbidden" });
        }

        const files = Array.isArray(req.files) ? req.files : [];
        if (!files.length) {
          return res.status(400).json({ error: "At least one file is required" });
        }

        await prisma.tenantAttachment.createMany({
          data: files.map((f) => ({
            tenantId: id,
            url: `/uploads/tenants/${f.filename}`,
            originalName: f.originalname,
            mimeType: f.mimetype,
            size: f.size,
            createdById: authUser?.id ?? null,
          })),
        });

        const payload = await getTenantDetails(prisma, {
          tenantId: id,
          user: authUser,
          includeArchivedAttachments: true,
        });

        return res.json(payload);
      } catch (err) {
        console.error("Error in POST /api/tenants/:id/attachments", err);
        return res.status(500).json({ error: err.message || "Server error" });
      }
    }
  );

  // ============================================================
  // PATCH /api/tenants/:tenantId/attachments/:attachId/archive
  // Body: { archiveReason: string } (required when archiving)
  // ============================================================
  app.patch(
    "/api/tenants/:tenantId/attachments/:attachId/archive",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      try {
        const { tenantId, attachId } = req.params;
        const user = req.user;

        const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
        if (!tenant) return res.status(404).json({ error: "Tenant not found" });

        if (user.baseRole === Role.LANDLORD && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "Forbidden" });
        }

        const attach = await prisma.tenantAttachment.findUnique({ where: { id: attachId } });
        if (!attach || attach.tenantId !== tenantId) {
          return res.status(404).json({ error: "Attachment not found" });
        }

        const isArchiving = !attach.archivedAt;

        const raw = req.body?.archiveReason;
        const reason = typeof raw === "string" ? raw.trim() : "";

        if (isArchiving && !reason) {
          return res.status(400).json({ error: "archiveReason is required" });
        }

        await prisma.tenantAttachment.update({
          where: { id: attachId },
          data: {
            archivedAt: isArchiving ? new Date() : null,
            archiveReason: isArchiving ? reason : null,
            archivedById: isArchiving ? user.id : null,
          },
        });

        const payload = await getTenantDetails(prisma, {
          tenantId,
          user,
          includeArchivedAttachments: true,
        });

        return res.json(payload);
      } catch (err) {
        console.error("Error archiving tenant attachment", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // Linking endpoints (kept as-is from your file)
  // ============================================================

  // POST /api/tenants/:tenantId/occupants/:occupantId/link
  app.post(
    "/api/tenants/:tenantId/occupants/:occupantId/link",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { tenantId, occupantId } = req.params;
      const user = req.user || null;
      if (!user) return res.status(401).json({ error: "Unauthorized" });

      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const occupant = await prisma.occupant.findUnique({ where: { id: occupantId } });
      if (!occupant) return res.status(404).json({ error: "Pet not found" });

      if (tenant.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived tenant. Restore it first."
        });
      }

      if (occupant.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived occupant. Restore it first."
        });
      }

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
            return res
              .status(403)
              .json({ error: "You are not allowed to link this occupant." });
          }
        }

        await prisma.tenantOccupant.upsert({
          where: { tenantId_occupantId: { tenantId, occupantId } },
          update: {},
          create: { tenantId, occupantId },
        });

        return res.json({ ok: true });
      } catch (err) {
        console.error(
          "Error in POST /api/tenants/:tenantId/occupants/:occupantId/link",
          err
        );
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // DELETE /api/tenants/:tenantId/occupants/:occupantId/unlink
  app.delete(
    "/api/tenants/:tenantId/occupants/:occupantId/unlink",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { tenantId, occupantId } = req.params;
      const user = req.user || null;
      if (!user) return res.status(401).json({ error: "Unauthorized" });

      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const occupant = await prisma.occupant.findUnique({ where: { id: occupantId } });
      if (!occupant) return res.status(404).json({ error: "Pet not found" });

      if (tenant.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived tenant. Restore it first."
        });
      }

      if (occupant.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived occupant. Restore it first."
        });
      }

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
            return res
              .status(403)
              .json({ error: "You are not allowed to unlink this tenant." });
          }
          if (occupant.landlordId && occupant.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to unlink this occupant." });
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
        console.error(
          "Error in DELETE /api/tenants/:tenantId/occupants/:occupantId/unlink",
          err
        );
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // POST /api/tenants/:tenantId/pets/:petId/link
  app.post(
    "/api/tenants/:tenantId/pets/:petId/link",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { tenantId, petId } = req.params;
      const user = req.user || null;
      if (!user) return res.status(401).json({ error: "Unauthorized" });

      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const pet = await prisma.pet.findUnique({ where: { id: petId } });
      if (!pet) return res.status(404).json({ error: "Pet not found" });

      if (tenant.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived tenant. Restore it first."
        });
      }

      if (pet.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived pet. Restore it first."
        });
      }

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
    }
  );

  // DELETE /api/tenants/:tenantId/pets/:petId/unlink
  app.delete(
    "/api/tenants/:tenantId/pets/:petId/unlink",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { tenantId, petId } = req.params;
      const user = req.user || null;
      if (!user) return res.status(401).json({ error: "Unauthorized" });
     
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const pet = await prisma.pet.findUnique({ where: { id: petId } });
      if (!pet) return res.status(404).json({ error: "Pet not found" });

      if (tenant.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived tenant. Restore it first."
        });
      }

      if (pet.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived pet. Restore it first."
        });
      }

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
            return res
              .status(403)
              .json({ error: "You are not allowed to unlink this tenant." });
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
    }
  );

  // POST /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/link
  app.post(
    "/api/tenants/:tenantId/emergencyContacts/:emergencyContactId/link",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { tenantId, emergencyContactId } = req.params;
      const user = req.user || null;
      if (!user) return res.status(401).json({ error: "Unauthorized" });

      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const emergencyContact = await prisma.emergencyContact.findUnique({ where: { id: emergencyContactId } });
      if (!emergencyContact) return res.status(404).json({ error: "Pet not found" });

      if (tenant.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived tenant. Restore it first."
        });
      }

      if (emergencyContact.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived emergency contact. Restore it first."
        });
      }

      try {
        const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
        if (!tenant) return res.status(404).json({ error: "Tenant not found" });

        const emergencyContact = await prisma.emergencyContact.findUnique({
          where: { id: emergencyContactId },
        });
        if (!emergencyContact)
          return res.status(404).json({ error: "EmergencyContact not found" });

        const isSysAdmin = user.baseRole === Role.SYSADMIN;
        if (!isSysAdmin) {
          if (tenant.landlordId && tenant.landlordId !== user.id) {
            return res.status(403).json({ error: "You are not allowed to link this tenant." });
          }
          if (emergencyContact.landlordId && emergencyContact.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to link this emergency contact." });
          }
        }

        await prisma.tenantEmergencyContact.upsert({
          where: { tenantId_emergencyContactId: { tenantId, emergencyContactId } },
          update: {},
          create: { tenantId, emergencyContactId },
        });

        return res.json({ ok: true });
      } catch (err) {
        console.error(
          "Error in POST /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/link",
          err
        );
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // DELETE /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/unlink
  app.delete(
    "/api/tenants/:tenantId/emergencyContacts/:emergencyContactId/unlink",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { tenantId, emergencyContactId } = req.params;
      const user = req.user || null;
      if (!user) return res.status(401).json({ error: "Unauthorized" });

      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const emergencyContact = await prisma.emergencyContact.findUnique({ where: { id: emergencyContactId } });
      if (!emergencyContact) return res.status(404).json({ error: "Pet not found" });

      if (tenant.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived tenant. Restore it first."
        });
      }

      if (emergencyContact.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived emergency contact. Restore it first."
        });
      }

      try {
        const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
        if (!tenant) return res.status(404).json({ error: "Tenant not found" });

        const emergencyContact = await prisma.emergencyContact.findUnique({
          where: { id: emergencyContactId },
        });
        if (!emergencyContact)
          return res.status(404).json({ error: "Emergency Contact not found" });

        if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
          return res.status(403).json({ error: "Forbidden" });
        }

        const isSysAdmin = user.baseRole === Role.SYSADMIN;
        if (!isSysAdmin) {
          if (tenant.landlordId && tenant.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to unlink this tenant." });
          }
          if (emergencyContact.landlordId && emergencyContact.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to unlink this emergency contact." });
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
        console.error(
          "Error in DELETE /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/unlink",
          err
        );
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // POST /api/tenants/:tenantId/vehicles/:vehicleId/link
  app.post(
    "/api/tenants/:tenantId/vehicles/:vehicleId/link",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { tenantId, vehicleId } = req.params;
      const user = req.user || null;
      if (!user) return res.status(401).json({ error: "Unauthorized" });

      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicleId } });
      if (!vehicle) return res.status(404).json({ error: "Pet not found" });

      if (tenant.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived tenant. Restore it first."
        });
      }

      if (vehicle.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived vehicle. Restore it first."
        });
      }

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
    }
  );

  // DELETE /api/tenants/:tenantId/vehicles/:vehicleId/unlink
  app.delete(
    "/api/tenants/:tenantId/vehicles/:vehicleId/unlink",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { tenantId, vehicleId } = req.params;
      const user = req.user || null;
      if (!user) return res.status(401).json({ error: "Unauthorized" });

      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicleId } });
      if (!vehicle) return res.status(404).json({ error: "Pet not found" });

      if (tenant.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived tenant. Restore it first."
        });
      }

      if (vehicle.archivedAt) {
        return res.status(409).json({
          error: "Cannot modify links for an archived vehicle. Restore it first."
        });
      }

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
            return res
              .status(403)
              .json({ error: "You are not allowed to unlink this tenant." });
          }
          if (vehicle.landlordId && vehicle.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to unlink this vehicle." });
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
    }
  );
}

module.exports = { registerTenantRoutes };
