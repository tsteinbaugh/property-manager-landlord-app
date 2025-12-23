// backend/src/routes/properties.routes.js
const { Role } = require("@prisma/client");

const {
  optionalTrimToNull,
  requiredTrimmedString,
  parseIntOrNullOpt,
  normalizeState,
  normalizeZipUS,
} = require("../utils/validation.js");

function registerPropertyRoutes(app, prisma) {
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
      zip,
      bedrooms,
      bathrooms,
      sqft,
      yearBuilt,
      notes,
      landlordId: bodyLandlordId,
      createdById: bodyCreatedById,
    } = req.body || {};

    // Optional: state (US only) -> store USPS code
    let stateCode = null;
    const stateNorm = normalizeState(state); // returns null/undefined/__INVALID__/CODE
    if (stateNorm === "__INVALID__") {
      return res.status(400).json({ error: "state must be a valid US state (2-letter) or full name, or DC" });
    }
    if (stateNorm !== undefined) {
      stateCode = stateNorm; // may be null or "CO"
    }

    // Optional: zip/postalCode (ZIP5 or ZIP+4)
    const zipInput = postalCode ?? zip;
    let postal = null;

    const zipNorm = normalizeZipUS(zipInput);
    if (zipNorm === "__INVALID__") {
      return res
        .status(400)
        .json({ error: "postalCode must be a valid US ZIP (12345 or 12345-6789)" });
    }
    if (zipNorm !== undefined) {
      postal = zipNorm; // may be null or "80530" or "80530-1234"
    }

    const cleanAddress1 = requiredTrimmedString(address1);
    const cleanCity = requiredTrimmedString(city);

    if (cleanAddress1 === "__INVALID__" || cleanCity === "__INVALID__") {
      return res.status(400).json({
        error: "street address and city are required",
      });
    }

    if (!stateCode) {
      return res.status(400).json({
        error: "state must be a valid US state (2-letter) or full name, or DC",
      });
    }

    if (!postal) {
      return res.status(400).json({
        error: "postalCode must be a valid US ZIP (12345 or 12345-6789)",
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

      const nameVal = optionalTrimToNull(name);
      if (nameVal === "__INVALID__") return res.status(400).json({ error: "name must be a string" });
          
      const notesVal = optionalTrimToNull(notes);
      if (notesVal === "__INVALID__") return res.status(400).json({ error: "notes must be a string" });

      const created = await prisma.property.create({
        data: {
          name: nameVal ?? null,
          address1: cleanAddress1,
          city: cleanCity,
          state: stateCode,
          postalCode: postal,

          bedrooms: bedroomsVal ?? null,
          bathrooms: bathroomsVal ?? null,
          sqft: sqftVal ?? null,
          yearBuilt: yearBuiltVal ?? null,
          notes: notesVal ?? null,

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
      zip,
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
      if (name !== undefined) {
        const v = optionalTrimToNull(name);
        if (v === "__INVALID__") return res.status(400).json({ error: "name must be a string" });
        data.name = v;
      }
      if (notes !== undefined) {
        const v = optionalTrimToNull(notes);
        if (v === "__INVALID__") return res.status(400).json({ error: "notes must be a string" });
        data.notes = v;
      }

      // required-ish address fields: if provided in PATCH, must be non-empty strings
      if (address1 !== undefined) {
        const t = requiredTrimmedString(address1);
        if (t === "__INVALID__") return res.status(400).json({ error: "address1 is required" });
        data.address1 = t;
      }
      if (city !== undefined) {
        const t = requiredTrimmedString(city);
        if (t === "__INVALID__") return res.status(400).json({ error: "city is required" });
        data.city = t;
      }
      // state: optional, if provided must be valid; allow clearing with null/""
      if (state !== undefined) {
        const stateNorm = normalizeState(state);
        if (stateNorm === "__INVALID__" || stateNorm === null) {
          return res.status(400).json({ error: "state is required and must be a valid US state or DC" });
        }
        data.state = stateNorm;
      }

      // zip/postalCode: optional, but if provided must be ZIP5 or ZIP+4; store normalized
      const zipInput = postalCode ?? zip;
      if (zipInput !== undefined) {
        const zipNorm = normalizeZipUS(zipInput);
        if (zipNorm === "__INVALID__" || zipNorm === null) {
          return res.status(400).json({ error: "postalCode is required and must be a valid US ZIP" });
        }
        data.postalCode = zipNorm;
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
