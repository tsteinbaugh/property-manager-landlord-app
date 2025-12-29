// backend/src/routes/occupants.routes.js
const { Role } = require("@prisma/client");

const {
  parseOccupantPost,
  parseOccupantPatch,
} = require("@utils/occupantFields.js");

const { getOccupantDetails } = require("@services/occupantDetails.service.js");

const { requireAuth, requireLandlordOrSysadmin } = require("@src/middleware/auth.middleware.js");

function registerOccupantRoutes(app, prisma, { shapeOccupant }) {
  const auth = requireAuth(prisma);
  // ============================================================
  // GET /api/occupants?includeArchived=0|1
  // ============================================================
  app.get("/api/occupants", async (req, res) => {
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

      const occupants = await prisma.occupant.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });

      return res.json(occupants.map(shapeOccupant));
    } catch (err) {
      console.error("Error in GET /api/occupants", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET /api/occupants/:id  (detail + linked tenants)
  // ============================================================
  app.get(
    "/api/occupants/:id",
    auth,
    requireLandlordOrSysadmin,    
    async (req, res) => {
      const { id } = req.params;
      const user = req.user || null;
      
      try {
        const payload = await getOccupantDetails(prisma, {
          occupantId: id,
          user,
          shapeOccupant,
        });
        return res.json(payload);
      } catch (err) {
        if (err?.status) return res.status(err.status).json({ error: err.message });
        console.error("Error in GET /api/occupants/:id", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // POST /api/occupants
  // ============================================================
  app.post("/api/occupants", async (req, res) => {
    const user = req.user || null;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const { data, error } = parseOccupantPost(req.body);
      if (error) return res.status(400).json({ error });

      const created = await prisma.occupant.create({
        data: {
          ...data,
          landlordId: user.id,
          createdById: user.id,
        },
      });

      return res.status(201).json(shapeOccupant(created));
    } catch (err) {
      console.error("Error in POST /api/occupants", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // PATCH /api/occupants/:id
  // ============================================================
  app.patch(
    "/api/occupants/:id",
    auth,
    requireLandlordOrSysadmin,    
    async (req, res) => {
      const { id } = req.params;
      const user = req.user || null;

      if (!user) return res.status(401).json({ error: "Unauthorized" });

      try {
        const existing = await prisma.occupant.findUnique({ where: { id } });
        if (!existing) return res.status(404).json({ error: "Occupant not found" });

        if (user.baseRole === Role.LANDLORD && existing.landlordId && existing.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to update this occupant." });
        }

        const { data, error } = parseOccupantPatch(req.body);
        if (error) return res.status(400).json({ error });

        const updated = await prisma.occupant.update({
          where: { id },
          data,
        });

        return res.json(shapeOccupant(updated));
      } catch (err) {
        console.error("Error in PATCH /api/occupants/:id", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // PATCH /api/occupants/:id/archive - toggle archivedAt + archiveReason
  // ============================================================
  app.patch(
    "/api/occupants/:id/archive",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { id } = req.params;
      const user = req.user;

      try {
        const occupant = await prisma.occupant.findUnique({ where: { id } });
        if (!occupant) return res.status(404).json({ error: "Occupant not found" });

        // landlord scoping
        if (
          user.baseRole === Role.LANDLORD &&
          occupant.landlordId &&
          occupant.landlordId !== user.id
        ) {
          return res.status(403).json({
            error: "You are not allowed to archive this occupant.",
          });
        }

        const isArchiving = !occupant.archivedAt;

        // Frontend sends { archiveReason }
        const raw = req.body?.archiveReason;
        const reason = typeof raw === "string" ? raw.trim() : "";

        // Require reason ONLY when archiving
        if (isArchiving && !reason) {
          return res.status(400).json({ error: "archiveReason is required" });
        }

        const updated = await prisma.occupant.update({
          where: { id },
          data: {
            archivedAt: isArchiving ? new Date() : null,
            archiveReason: isArchiving ? reason : null,
            archivedById: isArchiving ? user.id : null,
          },
        });

        return res.json(shapeOccupant(updated));
      } catch (err) {
        console.error("Error in PATCH /api/occupants/:id/archive", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );
}

module.exports = {
  registerOccupantRoutes,
};
