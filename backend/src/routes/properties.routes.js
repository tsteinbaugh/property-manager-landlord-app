// backend/src/routes/properties.routes.js
const { Role } = require("@prisma/client");

function registerPropertyRoutes(app, prisma) {
  // ============================================================
  // Helpers
  // ============================================================
  const optionalTrimToNull = (v) => {
    if (v === null) return null;
    if (v === undefined) return undefined;
    if (typeof v !== "string") return undefined;
    const t = v.trim();
    return t ? t : null;
  };

  function parseIntOrNullOpt(v, { min = null, max = null } = {}) {
    // PATCH semantics:
    // - undefined => omit (no change)
    // - null => clear
    // - "" => clear
    if (v === undefined) return undefined;
    if (v === null) return null;

    if (typeof v === "number") {
      if (!Number.isInteger(v)) return "__INVALID__";
      if (min !== null && v < min) return "__INVALID__";
      if (max !== null && v > max) return "__INVALID__";
      return v;
    }

    if (typeof v === "string") {
      const s = v.trim();
      if (!s) return null;
      if (!/^-?\d+$/.test(s)) return "__INVALID__";
      const n = Number(s);
      if (!Number.isInteger(n)) return "__INVALID__";
      if (min !== null && n < min) return "__INVALID__";
      if (max !== null && n > max) return "__INVALID__";
      return n;
    }

    return "__INVALID__";
  }

  function trimRequiredString(v) {
    if (v === null || v === undefined) return "";
    if (typeof v !== "string") return "";
    return v.trim();
  }

  // ============================================================
  // GET /api/properties?includeArchived=0|1
  // - LANDLORD: only their properties
  // - SYSADMIN: all properties
  // - no user: all properties (for now)
  // ============================================================
  app.get("/api/properties", async (req, res) => {
    const includeArchived =
      req.query.includeArchived === "1" || req.query.includeArchived === "true";

    try {
      const user = req.user || null;

      const where = {
        ...(includeArchived ? {} : { archivedAt: null }),
      };

      if (user && user.baseRole === Role.LANDLORD) {
        where.landlordId = user.id;
      }

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

  // ============================================================
  // POST /api/properties - create a property
  // Required: address1, city, state, postalCode
  // Optional: name, bedrooms, bathrooms, sqft, yearBuilt, notes
  // ============================================================
  app.post("/api/properties", async (req, res) => {
    const {
      name,
      address1,
      city,
      state,
      postalCode,
      bedrooms,
      bathrooms,
      sqft,
      yearBuilt,
      notes,
      landlordId: bodyLandlordId,
      createdById: bodyCreatedById,
    } = req.body || {};

    const cleanAddress1 = trimRequiredString(address1);
    const cleanCity = trimRequiredString(city);
    const cleanState = trimRequiredString(state);
    const cleanPostalCode = trimRequiredString(postalCode);

    if (!cleanAddress1 || !cleanCity || !cleanState || !cleanPostalCode) {
      return res.status(400).json({
        error: "address1, city, state, and postalCode are required",
      });
    }

    // numbers (optional)
    const bedroomsVal = parseIntOrNullOpt(bedrooms, { min: 0, max: 50 });
    if (bedroomsVal === "__INVALID__")
      return res.status(400).json({ error: "bedrooms must be an integer" });

    const bathroomsVal = parseIntOrNullOpt(bathrooms, { min: 0, max: 50 });
    if (bathroomsVal === "__INVALID__")
      return res.status(400).json({ error: "bathrooms must be an integer" });

    const sqftVal = parseIntOrNullOpt(sqft, { min: 0, max: 1000000 });
    if (sqftVal === "__INVALID__")
      return res.status(400).json({ error: "sqft must be an integer" });

    const yearBuiltVal = parseIntOrNullOpt(yearBuilt, { min: 1000, max: 9999 });
    if (yearBuiltVal === "__INVALID__")
      return res.status(400).json({ error: "yearBuilt must be a 4-digit integer" });

    try {
      const user = req.user || null;

      // Prefer landlordId from body, otherwise fallback to req.user.id
      let landlordId = bodyLandlordId || null;
      if (!landlordId && user && user.id) {
        landlordId = user.id;
      }

      // createdById priority:
      // 1) explicit in body
      // 2) req.user.id
      // 3) landlordId (last resort)
      let createdById = bodyCreatedById || null;
      if (!createdById) {
        if (user && user.id) createdById = user.id;
        else if (landlordId) createdById = landlordId;
      }

      const created = await prisma.property.create({
        data: {
          name: optionalTrimToNull(name) ?? null,
          address1: cleanAddress1,
          city: cleanCity,
          state: cleanState,
          postalCode: cleanPostalCode,

          bedrooms: bedroomsVal ?? null,
          bathrooms: bathroomsVal ?? null,
          sqft: sqftVal ?? null,
          yearBuilt: yearBuiltVal ?? null,
          notes: optionalTrimToNull(notes) ?? null,

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

  // ============================================================
  // PATCH /api/properties/:id - update property fields
  // Optional fields may be cleared via null/""
  // ============================================================
  app.patch("/api/properties/:id", async (req, res) => {
    const { id } = req.params;

    const {
      name,
      address1,
      city,
      state,
      postalCode,
      bedrooms,
      bathrooms,
      sqft,
      yearBuilt,
      notes,
    } = req.body || {};

    try {
      const existing = await prisma.property.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Property not found" });
      }

      const user = req.user || null;

      // Landlord can only edit their own properties
      if (user && user.baseRole === Role.LANDLORD) {
        if (existing.landlordId && existing.landlordId !== user.id) {
          return res.status(403).json({ error: "Forbidden" });
        }
      }

      const data = {};

      // strings
      if (name !== undefined) data.name = optionalTrimToNull(name);

      // required-ish address fields: if provided in PATCH, must be non-empty strings
      if (address1 !== undefined) {
        const t = trimRequiredString(address1);
        if (!t) return res.status(400).json({ error: "address1 is required" });
        data.address1 = t;
      }
      if (city !== undefined) {
        const t = trimRequiredString(city);
        if (!t) return res.status(400).json({ error: "city is required" });
        data.city = t;
      }
      if (state !== undefined) {
        const t = trimRequiredString(state);
        if (!t) return res.status(400).json({ error: "state is required" });
        data.state = t;
      }
      if (postalCode !== undefined) {
        const t = trimRequiredString(postalCode);
        if (!t) return res.status(400).json({ error: "postalCode is required" });
        data.postalCode = t;
      }

      // numbers (optional)
      if (bedrooms !== undefined) {
        const v = parseIntOrNullOpt(bedrooms, { min: 0, max: 50 });
        if (v === "__INVALID__")
          return res.status(400).json({ error: "bedrooms must be an integer" });
        data.bedrooms = v;
      }
      if (bathrooms !== undefined) {
        const v = parseIntOrNullOpt(bathrooms, { min: 0, max: 50 });
        if (v === "__INVALID__")
          return res.status(400).json({ error: "bathrooms must be an integer" });
        data.bathrooms = v;
      }
      if (sqft !== undefined) {
        const v = parseIntOrNullOpt(sqft, { min: 0, max: 1000000 });
        if (v === "__INVALID__")
          return res.status(400).json({ error: "sqft must be an integer" });
        data.sqft = v;
      }
      if (yearBuilt !== undefined) {
        const v = parseIntOrNullOpt(yearBuilt, { min: 1000, max: 9999 });
        if (v === "__INVALID__")
          return res.status(400).json({ error: "yearBuilt must be a 4-digit integer" });
        data.yearBuilt = v;
      }

      // notes
      if (notes !== undefined) data.notes = optionalTrimToNull(notes);

      const updated = await prisma.property.update({
        where: { id },
        data,
      });

      res.json(updated);
    } catch (err) {
      console.error("Error in PATCH /api/properties/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // PATCH /api/properties/:id/archive - toggle archivedAt flag
  // ============================================================
  app.patch("/api/properties/:id/archive", async (req, res) => {
    const { id } = req.params;

    try {
      const existing = await prisma.property.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Property not found" });
      }

      const user = req.user || null;

      if (user && user.baseRole === Role.LANDLORD) {
        if (existing.landlordId && existing.landlordId !== user.id) {
          return res.status(403).json({ error: "Forbidden" });
        }
      }

      const updated = await prisma.property.update({
        where: { id },
        data: { archivedAt: !existing.archivedAt },
      });

      res.json(updated);
    } catch (err) {
      console.error("Error in PATCH /api/properties/:id/archive", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET /api/properties/:id – detail, including leases, tenants, occupants, emergency contacts, and vehicles
  // ============================================================
  app.get("/api/properties/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

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
                        where: { occupant: { archivedAt: null } },
                        include: { occupant: true },
                      },
                      petLinks: {
                        where: { pet: { archivedAt: null } },
                        include: { pet: true },
                      },
                      emergencyContactLinks: {
                        where: { emergencyContact: { archivedAt: null } },
                        include: { emergencyContact: true },
                      },
                      vehicleLinks: {
                        where: { vehicle: { archivedAt: null } },
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

      if (!property) return res.status(404).json({ error: "Property not found" });

      if (user.baseRole === Role.LANDLORD) {
        if (property.landlordId && property.landlordId !== user.id) {
          return res.status(404).json({ error: "Property not found" });
        }
      }

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
            archived: t.archivedAt,
          });
        }

        for (const link of t.occupantLinks || []) {
          const o = link.occupant;
          if (!o?.id || o.archivedAt) continue;
          if (!occupantMap.has(o.id)) {
            occupantMap.set(o.id, {
              id: o.id,
              name: o.name,
              phone: o.phone,
              email: o.email,
              relation: o.relation,
              age: o.age,
              heightFeet: o.heightFeet,
              heightInches: o.heightInches,
              weight: o.weight,
              sex: o.sex,
              hairColor: o.hairColor,
              eyeColor: o.eyeColor,
              bodyBuild: o.bodyBuild,
              markings: o.markings,
              notes: o.notes,
              violations: o.violations,
              archived: o.archivedAt,
            });
          }
        }

        for (const link of t.petLinks || []) {
          const p = link.pet;
          if (!p?.id || p.archivedAt) continue;
          if (!petMap.has(p.id)) {
            petMap.set(p.id, {
              id: p.id,
              name: p.name,
              type: p.type,
              breed: p.breed,
              weightLb: p.weightLb,
              age: p.age,
              license: p.license,
              notes: p.notes,
              violations: p.violations,
              archived: p.archivedAt,
            });
          }
        }

        for (const link of t.emergencyContactLinks || []) {
          const e = link.emergencyContact;
          if (!e?.id || e.archivedAt) continue;
          if (!emergencyContactMap.has(e.id)) {
            emergencyContactMap.set(e.id, {
              id: e.id,
              name: e.name,
              phone: e.phone,
              email: e.email,
              address1: e.address1,
              city: e.city,
              state: e.state,
              postalCode: e.postalCode,
              relation: e.relation,
              notes: e.notes,
              archived: e.archivedAt,
            });
          }
        }

        for (const link of t.vehicleLinks || []) {
          const v = link.vehicle;
          if (!v?.id || v.archivedAt) continue;
          if (!vehicleMap.has(v.id)) {
            vehicleMap.set(v.id, {
              id: v.id,
              make: v.make,
              model: v.model,
              year: v.year,
              color: v.color,
              state: v.state,
              plate: v.plate,
              permit: v.permit,
              parking: v.parking,
              notes: v.notes, // <-- fixed
              violations: v.violations,
              archived: v.archivedAt,
            });
          }
        }
      }

      for (const lease of property.leases || []) {
        for (const lt of lease.leaseTenants || []) {
          if (lt?.tenant) collectTenant(lt.tenant);
        }
      }

      return res.json({
        ...property,
        tenants: Array.from(tenantMap.values()),
        occupants: Array.from(occupantMap.values()),
        pets: Array.from(petMap.values()),
        emergencyContacts: Array.from(emergencyContactMap.values()),
        vehicles: Array.from(vehicleMap.values()),
      });
    } catch (err) {
      console.error("Error in GET /api/properties/:id", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET /api/properties/:id/summary
  // Returns: property + latest lease + tenants + occupants + pets + emergency contacts + vehicles
  // ============================================================
  app.get("/api/properties/:id/summary", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    try {
      const property = await prisma.property.findUnique({
        where: { id },
        include: {
          leases: {
            orderBy: { startDate: "desc" },
            include: {
              leaseTenants: {
                include: {
                  tenant: {
                    include: {
                      occupantLinks: {
                        where: { occupant: { archivedAt: null } },
                        include: { occupant: true },
                      },
                      petLinks: {
                        where: { pet: { archivedAt: null } },
                        include: { pet: true },
                      },
                      emergencyContactLinks: {
                        where: { emergencyContact: { archivedAt: null } },
                        include: { emergencyContact: true },
                      },
                      vehicleLinks: {
                        where: { vehicle: { archivedAt: null } },
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

      if (!property) return res.status(404).json({ error: "Property not found" });

      if (user && user.baseRole === Role.LANDLORD) {
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

        if (!tenantMap.has(t.id)) tenantMap.set(t.id, t);

        for (const link of t.occupantLinks || []) {
          const o = link.occupant;
          if (!o?.id || o.archivedAt) continue;
          if (!occupantMap.has(o.id)) occupantMap.set(o.id, o);
        }

        for (const link of t.petLinks || []) {
          const p = link.pet;
          if (!p?.id || p.archivedAt) continue;
          if (!petMap.has(p.id)) petMap.set(p.id, p);
        }

        for (const link of t.emergencyContactLinks || []) {
          const e = link.emergencyContact;
          if (!e?.id || e.archivedAt) continue;
          if (!emergencyContactMap.has(e.id)) emergencyContactMap.set(e.id, e);
        }

        for (const link of t.vehicleLinks || []) {
          const v = link.vehicle;
          if (!v?.id || v.archivedAt) continue;
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
