// backend/src/routes/properties.routes.js

/**
 * Property routes
 *
 * Assumes:
 * - `requireAuth` middleware attaches `req.user = { id, baseRole, ... }`
 *   with baseRole like "LANDLORD", "TENANT", "SYSADMIN", etc.
 * - Property model has landlordId and createdById fields.
 */
function registerPropertyRoutes(app, prisma, requireAuth) {
  // ===================================================================
  // PROPERTIES
  // ===================================================================

  // GET /api/properties
  // - LANDLORD: only their properties (landlordId = req.user.id)
  // - SYSADMIN: all properties
  // - no user: all properties (for now, so nothing breaks)
  app.get("/api/properties", async (req, res) => {
    try {
      const user = req.user || null;

      const where = {};

      if (user && user.baseRole === "LANDLORD") {
        where.landlordId = user.id;
      }

      // For SYSADMIN or unauthenticated, where stays {} (all properties)
      const props = await prisma.property.findMany({
        where,
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
    const {
      name,
      address1,
      city,
      state,
      postalCode,
      landlordId: bodyLandlordId,
      createdById: bodyCreatedById,
    } = req.body || {};

    if (!address1 || !city || !state || !postalCode) {
      return res.status(400).json({
        error: "address1, city, state, and postalCode are required",
      });
    }

    try {
      const user = req.user || null;

      // Prefer landlordId from body (sent by frontend),
      // otherwise fall back to req.user.id if present.
      let landlordId = bodyLandlordId || null;
      if (!landlordId && user && user.id) {
        landlordId = user.id;
      }

      // createdById priority:
      // 1) explicit in body
      // 2) req.user.id if we have a user
      // 3) landlordId as a last resort
      let createdById = bodyCreatedById || null;
      if (!createdById) {
        if (user && user.id) {
          createdById = user.id;
        } else if (landlordId) {
          createdById = landlordId;
        }
      }

      const created = await prisma.property.create({
        data: {
          name: name?.trim() || null,
          address1: address1.trim(),
          city: city.trim(),
          state: state.trim(),
          postalCode: postalCode.trim(),

          landlordId,
          createdById,
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

      const user = req.user || null;

      // If a landlord is logged in, they can only edit their own properties.
      if (user && user.baseRole === "LANDLORD") {
        if (existing.landlordId && existing.landlordId !== user.id) {
          return res.status(403).json({ error: "Forbidden" });
        }
      }
      // SYSADMIN can edit anything; unauthenticated falls through for now.

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

      const user = req.user || null;

      // Landlords can only archive/unarchive their own properties
      if (user && user.baseRole === "LANDLORD") {
        if (existing.landlordId && existing.landlordId !== user.id) {
          return res.status(403).json({ error: "Forbidden" });
        }
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

  // GET /api/properties/:id – detail, including leases, tenants, occupants, and emergency contacts
  app.get("/api/properties/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const property = await prisma.property.findUnique({
        where: { id },
        include: {
          leases: {
            include: {
              // direct 1:1 tenant on the lease
              tenant: {
                include: {
                  occupants: {
                    where: { isArchived: false },
                  },
                  occupantLinks: {
                    include: {
                      occupant: true,
                    },
                  },
                  pets: {
                    where: { isArchived: false },
                  },
                  petLinks: {
                    include: {
                      pet: true,
                    },
                  },
                  emergencyContacts: {
                    where: { isArchived: false },
                  },
                  emergencyContactLinks: {
                    include: {
                      emergencyContact: true,
                    },
                  },           
                },
              },
              // multi-tenant join table
              leaseTenants: {
                include: {
                  tenant: {
                    include: {
                      occupants: {
                        where: { isArchived: false },
                      },
                      occupantLinks: {
                        include: {
                          occupant: true,
                        },
                      },
                      pets: {
                        where: { isArchived: false },
                      },
                      petLinks: {
                        include: {
                          pet: true,
                        },
                      },
                      emergencyContacts: {
                        where: { isArchived: false },
                      },
                      emergencyContactLinks: {
                        include: {
                          emergencyContact: true,
                        },
                      },    
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!property) {
        return res.status(404).json({ error: "Property not found" });
      }

      // Landlord scoping: only see your own properties
      if (user && user.baseRole === "LANDLORD") {
        if (property.landlordId && property.landlordId !== user.id) {
          return res.status(404).json({ error: "Property not found" });
        }
      }

      // --- Aggregate tenants + occupants + pets + emergency contacts across all leases ---

      const tenantMap = new Map();
      const occupantMap = new Map();
      const petMap = new Map();
      const emergencyContactMap = new Map();

      function collectTenant(t) {
        if (!t || !t.id) return;

        if (!tenantMap.has(t.id)) {
          tenantMap.set(t.id, {
            id: t.id,
            name: t.name,
            email: t.email,
            phone: t.phone,
            archived: t.isArchived,
          });
        }

        // legacy direct occupants
        for (const o of t.occupants || []) {
          if (!o || !o.id || o.isArchived) continue;
          if (!occupantMap.has(o.id)) {
            occupantMap.set(o.id, {
              id: o.id,
              name: o.name,
              relation: o.relation,
              archived: o.isArchived,
            });
          }
        }

        // many-to-many occupants via TenantOccupant
        for (const link of t.occupantLinks || []) {
          const o = link.occupant;
          if (!o || !o.id || o.isArchived) continue;
          if (!occupantMap.has(o.id)) {
            occupantMap.set(o.id, {
              id: o.id,
              name: o.name,
              relation: o.relation,
              archived: o.isArchived,
            });
          }
        }
        // legacy direct pets
        for (const p of t.pets || []) {
          if (!p || !p.id || p.isArchived) continue;
          if (!petMap.has(p.id)) {
            petMap.set(p.id, {
              id: p.id,
              name: p.name,
              type: p.type,
              breed: p.breed,
              weightLb: p.weightLb,
              archived: p.isArchived,
            });
          }
        }

        // many-to-many pets via TenantPet
        for (const link of t.petLinks || []) {
          const p = link.pet;
          if (!p || !p.id || p.isArchived) continue;
          if (!petMap.has(p.id)) {
            petMap.set(p.id, {
              id: p.id,
              name: p.name,
              type: p.type,
              breed: p.breed,
              weightLb: p.weightLb,
              archived: p.isArchived,
            });
          }
        }        

        // legacy direct emergency contacts
        for (const e of t.emergencyContacts || []) {
          if (!e || !e.id || e.isArchived) continue;
          if (!emergencyContactMap.has(e.id)) {
            emergencyContactMap.set(e.id, {
              id: e.id,
              name: e.name,
              phone: e.phone,
              relation: e.relation,
              email: e.email,
              archived: e.isArchived,
            });
          }
        }

        // many-to-many emergency contacts via TenantEmergencyContact
        for (const link of t.emergencyContactLinks || []) {
          const e = link.emergencyContact;
          if (!e || !e.id || e.isArchived) continue;
          if (!emergencyContactMap.has(e.id)) {
            emergencyContactMap.set(e.id, {
              id: e.id,
              name: e.name,
              phone: e.phone,
              relation: e.relation,
              email: e.email,
              archived: e.isArchived,
            });
          }
        }        
      }

      for (const lease of property.leases || []) {
        // direct lease.tenant
        if (lease.tenant) {
          collectTenant(lease.tenant);
        }

        // join-table leaseTenants[].tenant
        for (const lt of lease.leaseTenants || []) {
          if (lt.tenant) {
            collectTenant(lt.tenant);
          }
        }
      }

      const tenants = Array.from(tenantMap.values());
      const occupants = Array.from(occupantMap.values());
      const pets = Array.from(petMap.values());
      const emergencyContacts = Array.from(emergencyContactMap.values());

      // Send raw property + extra arrays; frontend mapper will pick what it needs.
      return res.json({
        ...property,
        tenants,
        occupants,
        pets,
        emergencyContacts,
      });
    } catch (err) {
      console.error("Error in GET /api/properties/:id", err);
      return res.status(500).json({ error: "Server error" });
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

      const user = req.user || null;

      // If a landlord is logged in, they should only see their own property.
      if (user && user.baseRole === "LANDLORD") {
        if (property.landlordId && property.landlordId !== user.id) {
          return res.status(404).json({ error: "Property not found" });
        }
      }
      // SYSADMIN or unauthenticated can still fetch any property for now.

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
}

module.exports = {
  registerPropertyRoutes,
};
