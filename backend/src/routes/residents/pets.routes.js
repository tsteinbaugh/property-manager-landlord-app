// backend/src/routes/pets.routes.js
const { Role } = require("@prisma/client");

function registerPetRoutes(app, prisma, { shapePet }) {

  const optionalTrimToNull = (v) => { 
    if (v === null) return null; 
    if (v === undefined) return undefined; 
    if (typeof v !== "string") return undefined; 
    const t = v.trim(); 
    return t ? t : null; 
  };

  function parseIntOrNull(v, { min = null, max = null } = {}) {
    if (v === undefined) return undefined; // PATCH omit
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

  // ============================================================
  // LIST OCCUPANTS (decoupled from tenants, scoped by landlord when known)
  // GET /api/pets?includeArchived=0|1
  // ============================================================
  app.get("/api/pets", async (req, res) => {
    const includeArchived =
      req.query.includeArchived === "1" ||
      req.query.includeArchived === "true";

    try {
      const user = req.user || null;

      const where = {
        ...(includeArchived ? {} : { isArchived: false }),
      };

      if (user && user.baseRole === Role.LANDLORD) {
        // landlord only sees their own pets
        where.landlordId = user.id;
      } else if (user && user.baseRole === Role.SYSADMIN) {
        // sysadmin sees all
      } else {
        // no user or other roles: allow all (dev parity with properties)
        // tighten later if needed.
      }

      const pets = await prisma.pet.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });

      res.json(pets.map(shapePet));
    } catch (err) {
      console.error("Error in GET /api/pets", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET SINGLE OCCUPANT + linked tenants (via join table)
  // GET /api/pets/:id
  // ============================================================
  app.get("/api/pets/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;
  
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  
    try {
      const pet = await prisma.pet.findUnique({ where: { id } });
      if (!pet) {
        return res.status(404).json({ error: "Pet not found" });
      }
    
      // Landlord can only view their own pet; sysadmin can view any
      if (
        user.baseRole === Role.LANDLORD &&
        pet.landlordId &&
        pet.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to view this pet." });
      }
    
      // Look up join-table links: which tenants are linked to this pet?
      const links = await prisma.tenantPet.findMany({
        where: { petId: id },
        include: { tenant: true },
      });
    
      const tenants = links
        .map((link) => link.tenant)
        .filter(Boolean)
        .map((t) => ({
          id: t.id,
          name: t.name,
          email: t.email,
          phone: t.phone,
          archived: t.isArchived,
          createdAt: t.createdAt,
          updatedAt: t.updatedAt,
        }));
      
      const shaped = shapePet(pet);
      
      return res.json({
        ...shaped,
        tenants,
      });
    } catch (err) {
      console.error("Error in GET /api/pets/:id", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // CREATE PET
  // POST /api/pets
  // Body: { name, type?, breed?, weightLb? )
  // ============================================================
  app.post("/api/pets", async (req, res) => {
    const { name, type, breed, weightLb, age, license, notes, violations } = req.body || {};
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const cleanName = typeof name === "string" ? name.trim() : "";
    if (!cleanName) {
      return res.status(400).json({ error: "name is required" });
    }

    const weightLbVal = parseIntOrNull(weightLb, { min: 0, max: 1500 });
    if (weightLbVal === "__INVALID__") return res.status(400).json({ error: "weight must be an integer" });

    const ageVal = parseIntOrNull(age, { min: 0, max: 120 });
    if (ageVal === "__INVALID__") return res.status(400).json({ error: "age must be an integer between 0 and 120" });

    try {
      const data = {
        name: cleanName,
        type: optionalTrimToNull(type) ?? null,
        breed: optionalTrimToNull(breed) ?? null,

        weightLb: weightLbVal ?? null,

        license: optionalTrimToNull(license) ?? null,
        notes: optionalTrimToNull(notes) ?? null,
        violations: optionalTrimToNull(violations) ?? null,

        landlordId: user.id,
        createdById: user.id,
      };

      const created = await prisma.pet.create({ data });
      res.status(201).json(shapePet(created));
    } catch (err) {
      console.error("Error in POST /api/pets", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // UPDATE pet
  // PATCH /api/pets/:id
  // Body: partial { name?, type?, breed?, weightLb? }
  // ============================================================
  app.patch("/api/pets/:id", async (req, res) => {
    const { id } = req.params;
    const { name, type, breed, weightLb, age, license, notes, violations } = req.body || {};
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const existing = await prisma.pet.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Pet not found" });
      }

      // Landlord can only update their own pets; sysadmin can update any
      if (
        user.baseRole === Role.LANDLORD &&
        existing.landlordId &&
        existing.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to update this pet." });
      }

      const data = {};

      // name: if provided in PATCH, it MUST be a non-empty string
      if (name !== undefined) {
        if (name === null) {
          return res.status(400).json({ error: "name cannot be null" });
        }
        if (typeof name !== "string") {
          return res.status(400).json({ error: "name must be a string" });
        }
        const trimmed = name.trim();
        if (!trimmed) {
          return res.status(400).json({ error: "name is required" });
        }
        data.name = trimmed;
      }

      if (type !== undefined) data.type = optionalTrimToNull(type);
      if (breed !== undefined) data.breed = optionalTrimToNull(breed);
      if (weightLb !== undefined) {
        const v = parseIntOrNull(weightLb, { min: 0, max: 1500 });
        if (v === "__INVALID__") return res.status(400).json({ error: "weight must be an integer" });
        data.weightLb = v;
      }
      if (age !== undefined) {
        const v = parseIntOrNull(age, { min: 0, max: 120 });
        if (v === "__INVALID__") return res.status(400).json({ error: "age must be an integer between 0 and 120" });
        data.age = v;
      }
      if (license !== undefined) data.license = optionalTrimToNull(license);
      if (notes !== undefined) data.notes = optionalTrimToNull(notes);
      if (violations !== undefined) data.violations = optionalTrimToNull(violations);

      const updated = await prisma.pet.update({
        where: { id },
        data,
      });

      return res.json(shapePet(updated));
    } catch (err) {
      console.error("Error in PATCH /api/pets/:id", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // TOGGLE ARCHIVE
  // PATCH /api/pets/:id/archive
  // ============================================================
  app.patch("/api/pets/:id/archive", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const existing = await prisma.pet.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Pet not found" });
      }

      // Landlord can only archive their own pets
      if (
        user.baseRole === Role.LANDLORD &&
        existing.landlordId &&
        existing.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to archive this pet." });
      }

      const currentlyArchived = !!existing.isArchived;
      const isSysAdmin = user.baseRole === Role.SYSADMIN;

      // If currently archived and someone tries to unarchive who is not sysadmin → block
      if (currentlyArchived && !isSysAdmin) {
        return res.status(403).json({
          error: "Only a system administrator can unarchive an pet.",
        });
      }

      const updated = await prisma.pet.update({
        where: { id },
        data: { isArchived: !currentlyArchived },
      });

      res.json(shapePet(updated));
    } catch (err) {
      console.error("Error in PATCH /api/pets/:id/archive", err);
      res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = {
  registerPetRoutes,
};
