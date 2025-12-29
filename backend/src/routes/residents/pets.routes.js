// backend/src/routes/pets.routes.js
const { Role } = require("@prisma/client");

const { parsePetPost, parsePetPatch } = require("@utils/petFields.js");
const { getPetDetails } = require("@services/petDetails.service.js");

const { requireAuth, requireLandlordOrSysadmin } = require("@src/middleware/auth.middleware.js");

function registerPetRoutes(app, prisma, { shapePet }) {
  const auth = requireAuth(prisma);
  // ============================================================
  // GET /api/pets?includeArchived=0|1
  // ============================================================
  app.get("/api/pets", async (req, res) => {
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

      const pets = await prisma.pet.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });

      return res.json(pets.map(shapePet));
    } catch (err) {
      console.error("Error in GET /api/pets", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET /api/pets/:id (detail + linked tenants)
  // ============================================================
  app.get(
    "/api/pets/:id",
    auth,
    requireLandlordOrSysadmin,    
    async (req, res) => {
      const { id } = req.params;
      const user = req.user || null;

      try {
        const payload = await getPetDetails(prisma, {
          petId: id,
          user,
          shapePet,
        });
        return res.json(payload);
      } catch (err) {
        if (err?.status) return res.status(err.status).json({ error: err.message });
        console.error("Error in GET /api/pets/:id", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // POST /api/pets
  // ============================================================
  app.post("/api/pets", async (req, res) => {
    const user = req.user || null;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const { data, error } = parsePetPost(req.body);
      if (error) return res.status(400).json({ error });

      const created = await prisma.pet.create({
        data: {
          ...data,
          landlordId: user.id,
          createdById: user.id,
        },
      });

      return res.status(201).json(shapePet(created));
    } catch (err) {
      console.error("Error in POST /api/pets", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // PATCH /api/pets/:id
  // ============================================================
  app.patch(
    "/api/pets/:id",
    auth,
    requireLandlordOrSysadmin,    
    async (req, res) => {
      const { id } = req.params;
      const user = req.user || null;

      if (!user) return res.status(401).json({ error: "Unauthorized" });

      try {
        const existing = await prisma.pet.findUnique({ where: { id } });
        if (!existing) return res.status(404).json({ error: "Pet not found" });

        if (user.baseRole === Role.LANDLORD && existing.landlordId && existing.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to update this pet." });
        }

        const { data, error } = parsePetPatch(req.body);
        if (error) return res.status(400).json({ error });

        const updated = await prisma.pet.update({
          where: { id },
          data,
        });

        return res.json(shapePet(updated));
      } catch (err) {
        console.error("Error in PATCH /api/pets/:id", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // PATCH /api/pets/:id/archive - toggle archivedAt + archiveReason
  // ============================================================
  app.patch(
    "/api/pets/:id/archive",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { id } = req.params;
      const user = req.user;

      try {
        const pet = await prisma.pet.findUnique({ where: { id } });
        if (!pet) return res.status(404).json({ error: "Pet not found" });

        // landlord scoping
        if (
          user.baseRole === Role.LANDLORD &&
          pet.landlordId &&
          pet.landlordId !== user.id
        ) {
          return res.status(403).json({
            error: "You are not allowed to archive this pet.",
          });
        }

        const isArchiving = !pet.archivedAt;

        // Frontend sends { archiveReason }
        const raw = req.body?.archiveReason;
        const reason = typeof raw === "string" ? raw.trim() : "";

        // Require reason ONLY when archiving
        if (isArchiving && !reason) {
          return res.status(400).json({ error: "archiveReason is required" });
        }

        const updated = await prisma.pet.update({
          where: { id },
          data: {
            archivedAt: isArchiving ? new Date() : null,
            archiveReason: isArchiving ? reason : null,
            archivedById: isArchiving ? user.id : null,
          },
        });

        return res.json(shapePet(updated));
      } catch (err) {
        console.error("Error in PATCH /api/pets/:id/archive", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );
}

module.exports = {
  registerPetRoutes,
};
