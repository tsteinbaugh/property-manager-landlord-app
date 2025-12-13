// backend/src/routes/tenants.routes.js
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { Role, UserStatus } = require("@prisma/client");

function generateTempPassword() {
  return crypto.randomBytes(16).toString("hex");
}

function registerTenantRoutes(app, prisma, { shapeTenant }) {
  // ===================================================================
  // TENANTS
  // ===================================================================

  // GET /api/tenants/me – current logged-in tenant's profile
  app.get("/api/tenants/me", async (req, res) => {
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (user.baseRole !== Role.TENANT) {
      return res
        .status(403)
        .json({ error: "Only tenants can access this endpoint" });
    }

    try {
      const tenant = await prisma.tenant.findFirst({
        where: {
          userId: user.id,
          isArchived: false,
        },
      });

      if (!tenant) {
        return res.status(404).json({ error: "Tenant profile not found" });
      }

      res.json(shapeTenant(tenant));
    } catch (err) {
      console.error("Error in GET /api/tenants/me", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // PATCH /api/tenants/me – update current tenant (and sync to linked User)
  app.patch("/api/tenants/me", async (req, res) => {
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (user.baseRole !== Role.TENANT) {
      return res
        .status(403)
        .json({ error: "Only tenants can access this endpoint" });
    }

    const { name, email, phone } = req.body || {};

    try {
      const existing = await prisma.tenant.findFirst({
        where: {
          userId: user.id,
          isArchived: false,
        },
      });

      if (!existing) {
        return res.status(404).json({ error: "Tenant profile not found" });
      }

      const nextName =
        name !== undefined ? name.trim() || existing.name : existing.name;
      const nextEmail =
        email !== undefined ? email.trim().toLowerCase() || null : existing.email;
      const nextPhone =
        phone !== undefined ? phone.trim() || null : existing.phone;

      const updated = await prisma.tenant.update({
        where: { id: existing.id },
        data: {
          name: nextName,
          email: nextEmail,
          phone: nextPhone,
        },
      });

      // Sync to linked User
      if (updated.userId) {
        try {
          const userUpdateData = {
            name: nextName,
          };

          if (nextEmail !== undefined) {
            if (nextEmail === null) {
              // Don't null out user.email for now
            } else {
              userUpdateData.email = nextEmail;
            }
          }

          if (Object.keys(userUpdateData).length > 0) {
            await prisma.user.update({
              where: { id: updated.userId },
              data: userUpdateData,
            });
          }
        } catch (userErr) {
          console.error("Error syncing PATCH /api/tenants/me to User:", userErr);

          if (userErr.code === "P2002") {
            return res.status(400).json({
              error:
                "Cannot change tenant email because it is already used by another user.",
            });
          }
        }
      }

      res.json(shapeTenant(updated));
    } catch (err) {
      console.error("Error in PATCH /api/tenants/me", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // GET /api/tenants/:id – detail, including leases + properties
  app.get("/api/tenants/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
      return res.status(403).json({
        error: "You are not allowed to view tenant details.",
      });
    }

    try {
      const tenant = await prisma.tenant.findUnique({
        where: { id },
        include: {
          // ALL leases (past + current) this tenant is/was on
          leaseTenants: {
            orderBy: { startDate: "desc" },
            include: {
              lease: {
                include: {
                  property: true,
                },
              },
            },
          },

          // NEW: join-table links for occupants, pets, emergency contacts and vehicles (multi-tenant plumbing)
          occupantLinks: {
            where: { occupant: { isArchived: false } },
            include: { occupant: true },
          },
          petLinks: {
            where: { pet: { isArchived: false } },
            include: { pet: true },
          },
          emergencyContactLinks: {
            where: { emergencyContact: { isArchived: false } },
            include: { emergencyContact: true },
          },
          vehicleLinks: {
            where: { vehicle: { isArchived: false } },
            include: { vehicle: true },
          },
        },
      });

      if (!tenant) {
        return res.status(404).json({ error: "Tenant not found" });
      }

      // Landlord can only see their own tenants
      if (user.baseRole === Role.LANDLORD) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res
            .status(403)
            .json({ error: "You are not allowed to view this tenant." });
        }
      }

      // flatten links into arrays that your UI already expects
      const occupants = (tenant.occupantLinks || []).map((l) => l.occupant).filter(Boolean);
      const pets = (tenant.petLinks || []).map((l) => l.pet).filter(Boolean);
      const emergencyContacts = (tenant.emergencyContactLinks || [])
        .map((l) => l.emergencyContact)
        .filter(Boolean);
      const vehicles = (tenant.vehicleLinks || []).map((l) => l.vehicle).filter(Boolean);

      res.json({
        ...tenant,
        occupants,
        pets,
        emergencyContacts,
        vehicles,
      });
    } catch (err) {
      console.error("Error in GET /api/tenants/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // GET /api/tenants – list tenants, scoped by landlord when user is known
  app.get("/api/tenants", async (req, res) => {
    try {
      const user = req.user || null;

      const where = {};

      if (user && user.baseRole === Role.LANDLORD) {
        // landlord only sees their own tenants
        where.landlordId = user.id;
      } else if (user && user.baseRole === Role.SYSADMIN) {
        // sysadmin sees everything (no landlord filter)
        // where stays {}
      } else {
        // no user or some other role:
        // in dev we allow listing all tenants (like properties does)
        // tighten this later once auth is fully wired.
      }

      const tenants = await prisma.tenant.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });

      res.json(tenants.map(shapeTenant));
    } catch (err) {
      console.error("Error in GET /api/tenants", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // POST /api/tenants – create tenant (and link/create TENANT user if email present)
  app.post("/api/tenants", async (req, res) => {
    const { name, email, phone } = req.body || {};
    if (!name || !name.trim()) {
      return res.status(400).json({ error: "name is required" });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email ? email.trim().toLowerCase() : null;
    const trimmedPhone = phone ? phone.trim() : null;

    // who is creating this tenant (and possibly the tenant user)
    const authUser = req.user || null;
    if (!authUser) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      let user = null;

      // If we got an email, try to link/create a User with baseRole = TENANT
      if (trimmedEmail) {
        const existingUser = await prisma.user.findUnique({
          where: { email: trimmedEmail },
        });

        if (existingUser) {
          if (existingUser.baseRole !== Role.TENANT) {
            // For now, we don't support sharing the same email between landlord/tenant, etc.
            return res.status(400).json({
              error:
                "A user with this email already exists but is not a tenant.",
            });
          }

          // Make sure we don't already have a Tenant linked to this user
          const existingTenantForUser = await prisma.tenant.findFirst({
            where: { userId: existingUser.id },
          });

          if (existingTenantForUser) {
            return res.status(400).json({
              error: "A tenant profile already exists for this email.",
            });
          }

          user = existingUser;
        } else {
          // Create a new TENANT user with a random temp password, INVITED status
          const tempPassword = generateTempPassword();
          const passwordHash = await bcrypt.hash(tempPassword, 10);

          user = await prisma.user.create({
            data: {
              email: trimmedEmail,
              name: trimmedName,
              passwordHash,
              baseRole: Role.TENANT,
              status: UserStatus.INVITED,
              isArchived: false,
              // who created this user (could be landlord or sysadmin)
              createdById: authUser.id,
            },
          });

          console.log(
            `Created TENANT user ${trimmedEmail} with temp password (hidden)`
          );
        }
      }

      const created = await prisma.tenant.create({
        data: {
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          userId: user ? user.id : null,

          // OWNER landlord – for now, whoever is creating
          landlordId: authUser.id,

          // CREATOR (also authUser)
          createdById: authUser.id,
        },
      });

      res.status(201).json(shapeTenant(created));
    } catch (err) {
      console.error("Error in POST /api/tenants", err);

      if (err.code === "P2002") {
        // Prisma unique constraint violation
        return res
          .status(400)
          .json({ error: "Email is already in use by another user." });
      }

      res.status(500).json({ error: "Server error" });
    }
  });

  // PATCH /api/tenants/:id – update tenant (and sync to linked User)
  app.patch("/api/tenants/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body || {};
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const existing = await prisma.tenant.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Tenant not found" });
      }

      // Landlord can only update their own tenant; sysadmin can update any
      if (
        user.baseRole === Role.LANDLORD &&
        existing.landlordId &&
        existing.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to update this tenant." });
      }

      const nextName =
        name !== undefined ? name.trim() || existing.name : existing.name;
      const nextEmail =
        email !== undefined ? email.trim().toLowerCase() || null : existing.email;
      const nextPhone =
        phone !== undefined ? phone.trim() || null : existing.phone;

      const updated = await prisma.tenant.update({
        where: { id },
        data: {
          name: nextName,
          email: nextEmail,
          phone: nextPhone,
        },
      });

      // If this tenant is linked to a User, keep User name/email in sync
      if (updated.userId) {
        try {
          const userUpdateData = {
            name: nextName,
          };

          if (nextEmail !== undefined) {
            if (nextEmail === null) {
              // Do NOT null out user.email; login still needs a value.
            } else {
              userUpdateData.email = nextEmail;
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
              error:
                "Cannot change tenant email because it is already used by another user.",
            });
          }
        }
      }

      res.json(shapeTenant(updated));
    } catch (err) {
      console.error("Error in PATCH /api/tenants/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // PATCH /api/tenants/:id/archive – toggle archive flag (and archive linked User)
  app.patch("/api/tenants/:id/archive", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const existing = await prisma.tenant.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Tenant not found" });
      }

      // Landlord can only archive their own tenant
      if (
        user.baseRole === Role.LANDLORD &&
        existing.landlordId &&
        existing.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to archive this tenant." });
      }

      const currentlyArchived = !!existing.isArchived;
      const isSysAdmin = user.baseRole === Role.SYSADMIN;

      // If currently archived and someone tries to unarchive who is not sysadmin → block
      if (currentlyArchived && !isSysAdmin) {
        return res.status(403).json({
          error: "Only a system administrator can unarchive a tenant.",
        });
      }

      const nextArchived = !currentlyArchived;

      const updated = await prisma.tenant.update({
        where: { id },
        data: { isArchived: nextArchived },
      });

      // If there's a linked User, mirror the archived state
      if (updated.userId) {
        try {
          await prisma.user.update({
            where: { id: updated.userId },
            data: { isArchived: nextArchived },
          });
        } catch (userErr) {
          console.error(
            "Error syncing Tenant archive state to User:",
            userErr
          );
        }
      }

      res.json(shapeTenant(updated));
    } catch (err) {
      console.error("Error in PATCH /api/tenants/:id/archive", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // POST /api/tenants/:tenantId/occupants/:occupantId/link
  // Creates a TenantOccupant row (many-to-many link) without touching leases/properties.
  app.post(
    "/api/tenants/:tenantId/occupants/:occupantId/link",
    async (req, res) => {
      const { tenantId, occupantId } = req.params;
      const user = req.user || null;

      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      try {
        // Make sure tenant exists
        const tenant = await prisma.tenant.findUnique({
          where: { id: tenantId },
        });
        if (!tenant) {
          return res.status(404).json({ error: "Tenant not found" });
        }

        // Make sure occupant exists
        const occupant = await prisma.occupant.findUnique({
          where: { id: occupantId },
        });
        if (!occupant) {
          return res.status(404).json({ error: "Occupant not found" });
        }

        // Landlord scoping: landlord can only link within their own portfolio
        const isSysAdmin = user.baseRole === Role.SYSADMIN;
        if (!isSysAdmin) {
          // Tenant must belong to this landlord (or be unowned but created by them, depending on your rules)
          if (tenant.landlordId && tenant.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to link this tenant." });
          }

          // Occupant must belong to this landlord as well
          if (occupant.landlordId && occupant.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to link this occupant." });
          }
        }

        // Create or no-op TenantOccupant link
        await prisma.tenantOccupant.upsert({
          where: {
            // compound unique from @@unique([tenantId, occupantId])
            tenantId_occupantId: {
              tenantId,
              occupantId,
            },
          },
          update: {}, // no-op if it already exists
          create: {
            tenantId,
            occupantId,
          },
        });

        return res.json({ ok: true });
      } catch (err) {
        console.error("Error in POST /api/tenants/:tenantId/occupants/:occupantId/link", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );
    // DELETE /api/tenants/:tenantId/occupants/:occupantId/unlink
  // Removes a TenantOccupant row (many-to-many link) without touching leases/properties.
  app.delete(
    "/api/tenants/:tenantId/occupants/:occupantId/unlink",
    async (req, res) => {
      const { tenantId, occupantId } = req.params;
      const user = req.user || null;

      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      try {
        // Make sure tenant exists
        const tenant = await prisma.tenant.findUnique({
          where: { id: tenantId },
        });
        if (!tenant) {
          return res.status(404).json({ error: "Tenant not found" });
        }

        // Make sure occupant exists
        const occupant = await prisma.occupant.findUnique({
          where: { id: occupantId },
        });
        if (!occupant) {
          return res.status(404).json({ error: "Occupant not found" });
        }

        if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
          return res.status(403).json({ error: "Forbidden" });
        }
        
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

        // If the link doesn't exist, this will throw; we can catch and return 404.
        try {
          await prisma.tenantOccupant.delete({
            where: {
              tenantId_occupantId: {
                tenantId,
                occupantId,
              },
            },
          });
        } catch (deleteErr) {
          // Prisma throws if no row; treat as 404 for this link
          console.error("No TenantOccupant link to delete", deleteErr);
          return res
            .status(404)
            .json({ error: "Tenant/occupant link not found" });
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
  // Creates a TenantPet row (many-to-many link) without touching leases/properties.
  app.post(
    "/api/tenants/:tenantId/pets/:petId/link",
    async (req, res) => {
      const { tenantId, petId } = req.params;
      const user = req.user || null;

      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      try {
        // Make sure tenant exists
        const tenant = await prisma.tenant.findUnique({
          where: { id: tenantId },
        });
        if (!tenant) {
          return res.status(404).json({ error: "Tenant not found" });
        }

        // Make sure pet exists
        const pet = await prisma.pet.findUnique({
          where: { id: petId },
        });
        if (!pet) {
          return res.status(404).json({ error: "Pet not found" });
        }

        // Landlord scoping: landlord can only link within their own portfolio
        const isSysAdmin = user.baseRole === Role.SYSADMIN;
        if (!isSysAdmin) {
          // Tenant must belong to this landlord (or be unowned but created by them, depending on your rules)
          if (tenant.landlordId && tenant.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to link this tenant." });
          }

          // Pet must belong to this landlord as well
          if (pet.landlordId && pet.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to link this pet." });
          }
        }

        // Create or no-op TenantPet link
        await prisma.tenantPet.upsert({
          where: {
            // compound unique from @@unique([tenantId, petId])
            tenantId_petId: {
              tenantId,
              petId,
            },
          },
          update: {}, // no-op if it already exists
          create: {
            tenantId,
            petId,
          },
        });

        return res.json({ ok: true });
      } catch (err) {
        console.error("Error in POST /api/tenants/:tenantId/pets/:petId/link", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );
    // DELETE /api/tenants/:tenantId/pets/:petId/unlink
  // Removes a TenantPet row (many-to-many link) without touching leases/properties.
  app.delete(
    "/api/tenants/:tenantId/pets/:petId/unlink",
    async (req, res) => {
      const { tenantId, petId } = req.params;
      const user = req.user || null;

      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      try {
        // Make sure tenant exists
        const tenant = await prisma.tenant.findUnique({
          where: { id: tenantId },
        });
        if (!tenant) {
          return res.status(404).json({ error: "Tenant not found" });
        }

        // Make sure pet exists
        const pet = await prisma.pet.findUnique({
          where: { id: petId },
        });
        if (!pet) {
          return res.status(404).json({ error: "Pet not found" });
        }

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
            return res
              .status(403)
              .json({ error: "You are not allowed to unlink this pet." });
          }
        }

        // If the link doesn't exist, this will throw; we can catch and return 404.
        try {
          await prisma.tenantPet.delete({
            where: {
              tenantId_petId: {
                tenantId,
                petId,
              },
            },
          });
        } catch (deleteErr) {
          // Prisma throws if no row; treat as 404 for this link
          console.error("No TenantPet link to delete", deleteErr);
          return res
            .status(404)
            .json({ error: "Tenant/pet link not found" });
        }

        return res.json({ ok: true });
      } catch (err) {
        console.error(
          "Error in DELETE /api/tenants/:tenantId/pets/:petId/unlink",
          err
        );
        return res.status(500).json({ error: "Server error" });
      }
    }
  );
  // POST /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/link
  // Creates a TenantEmergencyContact row (many-to-many link) without touching leases/properties.
  app.post(
    "/api/tenants/:tenantId/emergencyContacts/:emergencyContactId/link",
    async (req, res) => {
      const { tenantId, emergencyContactId } = req.params;
      const user = req.user || null;

      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      try {
        // Make sure tenant exists
        const tenant = await prisma.tenant.findUnique({
          where: { id: tenantId },
        });
        if (!tenant) {
          return res.status(404).json({ error: "Tenant not found" });
        }

        // Make sure emergency contact exists
        const emergencyContact = await prisma.emergencyContact.findUnique({
          where: { id: emergencyContactId },
        });
        if (!emergencyContact) {
          return res.status(404).json({ error: "EmergencyContact not found" });
        }

        // Landlord scoping: landlord can only link within their own portfolio
        const isSysAdmin = user.baseRole === Role.SYSADMIN;
        if (!isSysAdmin) {
          // Tenant must belong to this landlord (or be unowned but created by them, depending on your rules)
          if (tenant.landlordId && tenant.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to link this tenant." });
          }

          // EmergencyContact must belong to this landlord as well
          if (emergencyContact.landlordId && emergencyContact.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to link this emergency contact." });
          }
        }

        // Create or no-op TenantEmergencyContact link
        await prisma.tenantEmergencyContact.upsert({
          where: {
            // compound unique from @@unique([tenantId, emergencyContactId])
            tenantId_emergencyContactId: {
              tenantId,
              emergencyContactId,
            },
          },
          update: {}, // no-op if it already exists
          create: {
            tenantId,
            emergencyContactId,
          },
        });

        return res.json({ ok: true });
      } catch (err) {
        console.error("Error in POST /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/link", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );
    // DELETE /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/unlink
  // Removes a TenantEmergencyContact row (many-to-many link) without touching leases/properties.
  app.delete(
    "/api/tenants/:tenantId/emergencyContacts/:emergencyContactId/unlink",
    async (req, res) => {
      const { tenantId, emergencyContactId } = req.params;
      const user = req.user || null;

      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      try {
        // Make sure tenant exists
        const tenant = await prisma.tenant.findUnique({
          where: { id: tenantId },
        });
        if (!tenant) {
          return res.status(404).json({ error: "Tenant not found" });
        }

        // Make sure emergency contact exists
        const emergencyContact = await prisma.emergencyContact.findUnique({
          where: { id: emergencyContactId },
        });
        if (!emergencyContact) {
          return res.status(404).json({ error: "Emergency Contact not found" });
        }

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

        // If the link doesn't exist, this will throw; we can catch and return 404.
        try {
          await prisma.tenantEmergencyContact.delete({
            where: {
              tenantId_emergencyContactId: {
                tenantId,
                emergencyContactId,
              },
            },
          });
        } catch (deleteErr) {
          // Prisma throws if no row; treat as 404 for this link
          console.error("No TenantEmergencyContact link to delete", deleteErr);
          return res
            .status(404)
            .json({ error: "Tenant/emergency contact link not found" });
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
  // Creates a TenantVehicle row (many-to-many link) without touching leases/properties.
  app.post(
    "/api/tenants/:tenantId/vehicles/:vehicleId/link",
    async (req, res) => {
      const { tenantId, vehicleId } = req.params;
      const user = req.user || null;

      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      try {
        // Make sure tenant exists
        const tenant = await prisma.tenant.findUnique({
          where: { id: tenantId },
        });
        if (!tenant) {
          return res.status(404).json({ error: "Tenant not found" });
        }

        // Make sure vehicle exists
        const vehicle = await prisma.vehicle.findUnique({
          where: { id: vehicleId },
        });
        if (!vehicle) {
          return res.status(404).json({ error: "Vehicle not found" });
        }

        // Landlord scoping: landlord can only link within their own portfolio
        const isSysAdmin = user.baseRole === Role.SYSADMIN;
        if (!isSysAdmin) {
          // Tenant must belong to this landlord (or be unowned but created by them, depending on your rules)
          if (tenant.landlordId && tenant.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to link this tenant." });
          }

          // Vehicle must belong to this landlord as well
          if (vehicle.landlordId && vehicle.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to link this vehicle." });
          }
        }

        // Create or no-op TenantVehicle link
        await prisma.tenantVehicle.upsert({
          where: {
            // compound unique from @@unique([tenantId, vehicleId])
            tenantId_vehicleId: {
              tenantId,
              vehicleId,
            },
          },
          update: {}, // no-op if it already exists
          create: {
            tenantId,
            vehicleId,
          },
        });

        return res.json({ ok: true });
      } catch (err) {
        console.error("Error in POST /api/tenants/:tenantId/vehicles/:vehicleId/link", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );
    // DELETE /api/tenants/:tenantId/vehicles/:vehicleId/unlink
  // Removes a TenantVehicle row (many-to-many link) without touching leases/properties.
  app.delete(
    "/api/tenants/:tenantId/vehicles/:vehicleId/unlink",
    async (req, res) => {
      const { tenantId, vehicleId } = req.params;
      const user = req.user || null;

      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      try {
        // Make sure tenant exists
        const tenant = await prisma.tenant.findUnique({
          where: { id: tenantId },
        });
        if (!tenant) {
          return res.status(404).json({ error: "Tenant not found" });
        }

        // Make sure vehicle exists
        const vehicle = await prisma.vehicle.findUnique({
          where: { id: vehicleId },
        });
        if (!vehicle) {
          return res.status(404).json({ error: "Vehicle not found" });
        }

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

        // If the link doesn't exist, this will throw; we can catch and return 404.
        try {
          await prisma.tenantVehicle.delete({
            where: {
              tenantId_vehicleId: {
                tenantId,
                vehicleId,
              },
            },
          });
        } catch (deleteErr) {
          // Prisma throws if no row; treat as 404 for this link
          console.error("No TenantVehicle link to delete", deleteErr);
          return res
            .status(404)
            .json({ error: "Tenant/vehicle link not found" });
        }

        return res.json({ ok: true });
      } catch (err) {
        console.error(
          "Error in DELETE /api/tenants/:tenantId/vehicles/:vehicleId/unlink",
          err
        );
        return res.status(500).json({ error: "Server error" });
      }
    }
  );
}

module.exports = {
  registerTenantRoutes,
};
