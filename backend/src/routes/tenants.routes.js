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
  
      if (user.baseRole !== "TENANT") {
        return res.status(403).json({ error: "Only tenants can access this endpoint" });
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
  
      if (user.baseRole !== "TENANT") {
        return res.status(403).json({ error: "Only tenants can access this endpoint" });
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

    // POST /api/tenants – create tenant (and link/create TENANT user if email present)
    app.post("/api/tenants", async (req, res) => {
      const { name, email, phone } = req.body || {};
      if (!name || !name.trim()) {
        return res.status(400).json({ error: "name is required" });
      }

      const trimmedName = name.trim();
      const trimmedEmail = email ? email.trim().toLowerCase() : null;
      const trimmedPhone = phone ? phone.trim() : null;

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
          },
        });

        res.status(201).json(shapeTenant(created));
      } catch (err) {
        console.error("Error in POST /api/tenants", err);

        // Handle unique email/user conflicts more nicely if needed
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
    
      try {
        const existing = await prisma.tenant.findUnique({ where: { id } });
        if (!existing) {
          return res.status(404).json({ error: "Tenant not found" });
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
          
            // Only update email if it's not null; otherwise leave user.email alone
            if (nextEmail !== undefined) {
              if (nextEmail === null) {
                // Do NOT null out user.email; login still needs a value.
                // You can change this behavior later if you want.
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
              // Unique email violation on User
              return res.status(400).json({
                error:
                  "Cannot change tenant email because it is already used by another user.",
              });
            }
          
            // If user update failed for some other reason, you might still want
            // to surface an error. For now, we log and return the tenant update.
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
  
      try {
        const existing = await prisma.tenant.findUnique({ where: { id } });
        if (!existing) {
          return res.status(404).json({ error: "Tenant not found" });
        }
  
        const nextArchived = !existing.isArchived;
  
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
            // Not fatal for now
          }
        }
  
        res.json(shapeTenant(updated));
      } catch (err) {
        console.error("Error in PATCH /api/tenants/:id/archive", err);
        res.status(500).json({ error: "Server error" });
      }
    });
}

module.exports = {
  registerTenantRoutes,
};