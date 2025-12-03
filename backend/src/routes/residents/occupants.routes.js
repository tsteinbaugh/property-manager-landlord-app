// backend/src/routes/occupants.routes.js
const { Role } = require("@prisma/client");

function registerOccupantRoutes(app, prisma, { shapeOccupant }) {
  // ============================================================
  // LIST OCCUPANTS (decoupled from tenants, scoped by landlord when known)
  // GET /api/occupants?includeArchived=0|1
  // ============================================================
  app.get("/api/occupants", async (req, res) => {
    const includeArchived =
      req.query.includeArchived === "1" ||
      req.query.includeArchived === "true";

    try {
      const user = req.user || null;

      const where = {
        ...(includeArchived ? {} : { isArchived: false }),
      };

      if (user && user.baseRole === Role.LANDLORD) {
        // landlord only sees their own occupants
        where.landlordId = user.id;
      } else if (user && user.baseRole === Role.SYSADMIN) {
        // sysadmin sees all
      } else {
        // no user or other roles: allow all (dev parity with properties)
        // tighten later if needed.
      }

      const occupants = await prisma.occupant.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });

      res.json(occupants.map(shapeOccupant));
    } catch (err) {
      console.error("Error in GET /api/occupants", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET SINGLE OCCUPANT
  // GET /api/occupants/:id
  // ============================================================
  app.get("/api/occupants/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const occupant = await prisma.occupant.findUnique({ where: { id } });
      if (!occupant) {
        return res.status(404).json({ error: "Occupant not found" });
      }

      // Landlord can only view their own occupant; sysadmin can view any
      if (
        user.baseRole === Role.LANDLORD &&
        occupant.landlordId &&
        occupant.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to view this occupant." });
      }

      res.json(shapeOccupant(occupant));
    } catch (err) {
      console.error("Error in GET /api/occupants/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // CREATE OCCUPANT
  // POST /api/occupants
  // Body: { name, relation?, tenantId? }  (tenantId is OPTIONAL now)
  // ============================================================
  app.post("/api/occupants", async (req, res) => {
    const { name, relation, tenantId } = req.body || {};
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!name || !String(name).trim()) {
      return res.status(400).json({ error: "name is required" });
    }

    try {
      const data = {
        name: String(name).trim(),
        relation:
          typeof relation === "string" && relation.trim()
            ? relation.trim()
            : null,

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

      const created = await prisma.occupant.create({ data });
      res.status(201).json(shapeOccupant(created));
    } catch (err) {
      console.error("Error in POST /api/occupants", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // UPDATE OCCUPANT
  // PATCH /api/occupants/:id
  // Body: partial { name?, relation?, tenantId? }
  // ============================================================
  app.patch("/api/occupants/:id", async (req, res) => {
    const { id } = req.params;
    const { name, relation, tenantId } = req.body || {};
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const existing = await prisma.occupant.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Occupant not found" });
      }

      // Landlord can only update their own occupants; sysadmin can update any
      if (
        user.baseRole === Role.LANDLORD &&
        existing.landlordId &&
        existing.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to update this occupant." });
      }

      const data = {};

      // name: allow empty → keep existing, or override with trimmed
      if (name !== undefined) {
        const trimmed = String(name).trim();
        data.name = trimmed || existing.name;
      }

      // relation: handle string, empty string, null, or omit
      if (relation !== undefined) {
        if (relation === null) {
          data.relation = null;
        } else if (typeof relation === "string") {
          data.relation = relation.trim() || null;
        }
      }

      // tenantId: optional linkage, if your schema allows it
      if (tenantId !== undefined) {
        const trimmed = String(tenantId).trim();
        data.tenantId = trimmed || null;
      }

      const updated = await prisma.occupant.update({
        where: { id },
        data,
      });

      res.json(shapeOccupant(updated));
    } catch (err) {
      console.error("Error in PATCH /api/occupants/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // TOGGLE ARCHIVE
  // PATCH /api/occupants/:id/archive
  // ============================================================
  app.patch("/api/occupants/:id/archive", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const existing = await prisma.occupant.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Occupant not found" });
      }

      // Landlord can only archive their own occupants
      if (
        user.baseRole === Role.LANDLORD &&
        existing.landlordId &&
        existing.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to archive this occupant." });
      }

      const currentlyArchived = !!existing.isArchived;
      const isSysAdmin = user.baseRole === Role.SYSADMIN;

      // If currently archived and someone tries to unarchive who is not sysadmin → block
      if (currentlyArchived && !isSysAdmin) {
        return res.status(403).json({
          error: "Only a system administrator can unarchive an occupant.",
        });
      }

      const updated = await prisma.occupant.update({
        where: { id },
        data: { isArchived: !existing.isArchived },
      });

      res.json(shapeOccupant(updated));
    } catch (err) {
      console.error("Error in PATCH /api/occupants/:id/archive", err);
      res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = {
  registerOccupantRoutes,
};
