// backend/src/routes/pets.routes.js
const { Role } = require("@prisma/client");

function registerPetRoutes(app, prisma, { shapePet }) {
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
    const { name, type, breed, weightLb } = req.body || {};
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!name || !String(name).trim()) {
      return res.status(400).json({ error: "name is required" });
    }

    let normalizedWeight = null;
    if (weightLb !== undefined && weightLb !== null && String(weightLb).trim() !== "") {
      const parsed = Number(weightLb);
      if (!Number.isNaN(parsed) && parsed >= 0) {
        normalizedWeight = parsed;
      }
    }

    try {
      const data = {
        name: String(name).trim(),
        type:
          typeof type === "string" && type.trim()
            ? type.trim()
            : null,
        breed:
          typeof breed === "string" && breed.trim()
            ? breed.trim()
            : null,

        weightLb: normalizedWeight,

        // OWNER landlord
        landlordId: user.id,

        // CREATOR
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
    const { name, type, breed, weightLb } = req.body || {};
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

      // name: allow empty → keep existing, or override with trimmed
      if (name !== undefined) {
        const trimmed = String(name).trim();
        data.name = trimmed || existing.name;
      }

      // type: handle string, empty string, null, or omit
      if (type !== undefined) {
        if (type === null) {
          data.type = null;
        } else if (typeof type === "string") {
          data.type = type.trim() || null;
        }
      }

      // breed: handle string, empty string, null, or omit
      if (breed !== undefined) {
        if (breed === null) {
          data.breed = null;
        } else if (typeof breed === "string") {
          data.breed = breed.trim() || null;
        }
      }

      // weightLb: handle string, number, empty string, null, or omit
      if (weightLb !== undefined) {
        if (weightLb === null || String(weightLb).trim() === "") {
          data.weightLb = null;
        } else {
          const parsed = Number(weightLb);
          if (!Number.isNaN(parsed) && parsed >= 0) {
            data.weightLb = parsed;
          }
        }
      }

      const updated = await prisma.pet.update({
        where: { id },
        data,
      });

      res.json(shapePet(updated));
    } catch (err) {
      console.error("Error in PATCH /api/pets/:id", err);
      res.status(500).json({ error: "Server error" });
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
