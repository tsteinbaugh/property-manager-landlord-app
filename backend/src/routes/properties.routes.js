// backend/src/routes/properties.routes.js

function registerPropertyRoutes(app, prisma ) {
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

  // GET /api/properties/:id – detail, including leases, tenants, occupants, emergency contacts, and vehicles
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
              leaseTenants: {
                include: {
                  tenant: {
                    include: {
                      occupantLinks: {
                        where: { occupant: { isArchived: false } },
                        include: { occupant: true },
                      },
                      petLinks: {
                        where: { pet: {isArchived: false } },
                        include: { pet: true },
                      },
                      emergencyContactLinks: {
                        where: { emergencyContact: {isArchived: false } },
                        include: { emergencyContact: true },
                      },
                      vehicleLinks: {
                        where: { vehicle: { isArchived: false } },
                        include: { vehicle: true },
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

      // --- Aggregate tenants + occupants + pets + emergency contacts + vehicle across all leases ---

      const tenantMap = new Map();
      const occupantMap = new Map();
      const petMap = new Map();
      const emergencyContactMap = new Map();
      const vehicleMap = new Map();

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

        // many-to-many vehicles via TenantVehicle
        for (const link of t.vehicleLinks || []) {
          const v = link.vehicle;
          if (!v || !v.id || v.isArchived) continue;
          if (!vehicleMap.has(v.id)) {
            vehicleMap.set(v.id, {
              id: v.id,
              make: v.make || "",
              model: v.model || "",
              year: v.year ?? null,
              color: v.color || "",
              state: v.state || "",
              plate: v.plate || "",
              permit: v.permit || "",
              archived: v.isArchived,
            });
          }
        }
      }

      for (const lease of property.leases || []) {
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
      const vehicles = Array.from(vehicleMap.values());

      // Send raw property + extra arrays; frontend mapper will pick what it needs.
      return res.json({
        ...property,
        tenants,
        occupants,
        pets,
        emergencyContacts,
        vehicles,
      });
    } catch (err) {
      console.error("Error in GET /api/properties/:id", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // GET /api/properties/:id/summary
  // Returns: property + active lease (if any) + tenants + occupants + pets + emergency contacts + vehicles
  app.get("/api/properties/:id/summary", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;
  
    try {
      const property = await prisma.property.findUnique({
        where: { id },
        include: {
          leases: {
            //where: { status: "ACTIVE" },
            orderBy: { startDate: "desc" },
            //take: 1,
            include: {
              leaseTenants: {
                include: {
                  tenant: {
                    include: {
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
    
      // Landlord scoping
      if (user && user.baseRole === "LANDLORD") {
        if (property.landlordId && property.landlordId !== user.id) {
          return res.status(404).json({ error: "Property not found" });
        }
      }
    
      const activeLease = property.leases?.[0] || null;
    
      const tenantMap = new Map();
      const occupantMap = new Map();
      const petMap = new Map();
      const emergencyContactMap = new Map();
      const vehicleMap = new Map();
    
      function collectTenant(t) {
        if (!t?.id) return;
      
        if (!tenantMap.has(t.id)) {
          tenantMap.set(t.id, {
            id: t.id,
            name: t.name,
            email: t.email,
            phone: t.phone,
            archived: t.isArchived,
          });
        }
      
        for (const link of t.occupantLinks || []) {
          const o = link.occupant;
          if (!o?.id || o.isArchived) continue;
          if (!occupantMap.has(o.id)) occupantMap.set(o.id, o);
        }
      
        for (const link of t.petLinks || []) {
          const p = link.pet;
          if (!p?.id || p.isArchived) continue;
          if (!petMap.has(p.id)) petMap.set(p.id, p);
        }
      
        for (const link of t.emergencyContactLinks || []) {
          const e = link.emergencyContact;
          if (!e?.id || e.isArchived) continue;
          if (!emergencyContactMap.has(e.id)) emergencyContactMap.set(e.id, e);
        }
      
        for (const link of t.vehicleLinks || []) {
          const v = link.vehicle;
          if (!v?.id || v.isArchived) continue;
          if (!vehicleMap.has(v.id)) vehicleMap.set(v.id, v);
        }
      }
    
      if (activeLease?.leaseTenants?.length) {
        for (const lt of activeLease.leaseTenants) {
          if (lt?.tenant) collectTenant(lt.tenant);
        }
      }
    
      return res.json({
        property,
        lease: activeLease,
        tenants: Array.from(tenantMap.values()),
        occupants: Array.from(occupantMap.values()),
        pets: Array.from(petMap.values()),
        emergencyContacts: Array.from(emergencyContactMap.values()),
        vehicles: Array.from(vehicleMap.values()),
      });
    } catch (err) {
      console.error("Error in GET /api/properties/:id/summary", err);
      return res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = {
  registerPropertyRoutes,
};
