// backend/src/routes/pets.routes.js
const { Role } = require("@prisma/client");

function registerPetRoutes(app, prisma, { shapePet }) {
  // ============================================================
  // LIST PETS (decoupled from tenants, scoped by landlord when known)
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
        // no user or other roles: allow all
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
  // GET SINGLE pet
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

      res.json(shapePet(pet));
    } catch (err) {
      console.error("Error in GET /api/pets/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // CREATE pet
  // POST /api/pets
  // Body: { name, type?, breed?, weightLb? tenantId? }  (tenantId is OPTIONAL now)
  // ============================================================
  app.post("/api/pets", async (req, res) => {
    const { name, type, breed, weightLb, tenantId } = req.body || {};
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

      // Optional linkage to a tenant
      if (tenantId && String(tenantId).trim()) {
        data.tenant = {
          connect: { id: String(tenantId).trim() },
        };
      }

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
  // Body: partial { name?, type?, breed?, weightLb? tenantId? }
  // ============================================================
  app.patch("/api/pets/:id", async (req, res) => {
    const { id } = req.params;
    const { name, type, breed, weightLb, tenantId } = req.body || {};
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

      // tenantId: optional linkage, if your schema allows it
      if (tenantId !== undefined) {
        const trimmed = String(tenantId).trim();
        data.tenantId = trimmed || null;
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
        data: { isArchived: !existing.isArchived },
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
