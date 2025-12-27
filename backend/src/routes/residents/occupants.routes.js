// backend/src/routes/occupants.routes.js
const { Role } = require("@prisma/client");

const {
  parseOccupantPost,
  parseOccupantPatch,
} = require("@utils/occupantFields.js");

const { getOccupantDetails } = require("@services/occupantDetails.service.js");

function registerOccupantRoutes(app, prisma, { shapeOccupant }) {
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
  app.get("/api/occupants/:id", async (req, res) => {
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
  });

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
  app.patch("/api/occupants/:id", async (req, res) => {
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
  });

  // ============================================================
  // PATCH /api/occupants/:id/archive
  // toggle archivedAt timestamp
  // - LANDLORD can archive their own
  // - only SYSADMIN can unarchive
  // ============================================================
  app.patch("/api/occupants/:id/archive", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const existing = await prisma.occupant.findUnique({ where: { id } });
      if (!existing) return res.status(404).json({ error: "Occupant not found" });

      if (user.baseRole === Role.LANDLORD && existing.landlordId && existing.landlordId !== user.id) {
        return res.status(403).json({ error: "You are not allowed to archive this occupant." });
      }

      const currentlyArchived = !!existing.archivedAt;
      const isSysAdmin = user.baseRole === Role.SYSADMIN;

      if (currentlyArchived && !isSysAdmin) {
        return res.status(403).json({
          error: "Only a system administrator can unarchive an occupant.",
        });
      }

      const nextArchivedAt = currentlyArchived ? null : new Date();

      const updated = await prisma.occupant.update({
        where: { id },
        data: { archivedAt: nextArchivedAt },
      });

      return res.json(shapeOccupant(updated));
    } catch (err) {
      console.error("Error in PATCH /api/occupants/:id/archive", err);
      return res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = {
  registerOccupantRoutes,
};
