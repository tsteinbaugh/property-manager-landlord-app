// backend/src/routes/occupants.routes.js

const { Role } = require("@prisma/client");

function registerOccupantRoutes(app, prisma, { shapeOccupant }) {
  // ============================================================
  // LIST ALL OCCUPANTS (decoupled from tenants)
  // GET /api/occupants?includeArchived=0|1
  // ============================================================
  app.get("/api/occupants", async (req, res) => {
    const includeArchived =
      req.query.includeArchived === "1" ||
      req.query.includeArchived === "true";

    try {
      const occupants = await prisma.occupant.findMany({
        where: includeArchived ? {} : { isArchived: false },
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

    try {
      const occupant = await prisma.occupant.findUnique({ where: { id } });
      if (!occupant) {
        return res.status(404).json({ error: "Occupant not found" });
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
      };

      // Optional linkage to a tenant, but not required
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

    try {
      const existing = await prisma.occupant.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Occupant not found" });
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
        data.tenantId = trimmed || null; // requires tenantId to be optional in schema
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

    try {
      const existing = await prisma.occupant.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Occupant not found" });
      }

      const user = req.user || null;
      const isSysAdmin = user && user.baseRole === Role.SYSADMIN;

      // If currently archived and someone tries to unarchive who is not sysadmin → block
      if (existing.isArchived && !isSysAdmin) {
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
