// backend/src/routes/emergencyContacts.routes.js
const { Role } = require("@prisma/client");

const {
  parseEmergencyContactPost,
  parseEmergencyContactPatch,
} = require("../../utils/emergencyContactFields.js");

const {
  getEmergencyContactDetails,
} = require("../../services/emergencyContactDetails.service.js");

function registerEmergencyContactRoutes(app, prisma, { shapeEmergencyContact }) {
  // ============================================================
  // GET /api/emergencyContacts?includeArchived=0|1
  // - LANDLORD: only their own
  // - SYSADMIN: all
  // - no user/other: allow all for now (dev parity with properties)
  // ============================================================
  app.get("/api/emergencyContacts", async (req, res) => {
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

      const emergencyContacts = await prisma.emergencyContact.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });

      return res.json(emergencyContacts.map(shapeEmergencyContact));
    } catch (err) {
      console.error("Error in GET /api/emergencyContacts", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET /api/emergencyContacts/:id
  // Single emergency contact + linked tenants
  // ============================================================
  app.get("/api/emergencyContacts/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    try {
      const payload = await getEmergencyContactDetails(prisma, {
        emergencyContactId: id,
        user,
        shapeEmergencyContact,
      });
      return res.json(payload);
    } catch (err) {
      if (err?.status) return res.status(err.status).json({ error: err.message });
      console.error("Error in GET /api/emergencyContacts/:id", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // POST /api/emergencyContacts
  // ============================================================
  app.post("/api/emergencyContacts", async (req, res) => {
    const user = req.user || null;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const { data, error } = parseEmergencyContactPost(req.body);
      if (error) return res.status(400).json({ error });

      const created = await prisma.emergencyContact.create({
        data: {
          ...data,
          landlordId: user.id,
          createdById: user.id,
        },
      });

      return res.status(201).json(shapeEmergencyContact(created));
    } catch (err) {
      console.error("Error in POST /api/emergencyContacts", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // PATCH /api/emergencyContacts/:id
  // ============================================================
  app.patch("/api/emergencyContacts/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const existing = await prisma.emergencyContact.findUnique({ where: { id } });
      if (!existing) return res.status(404).json({ error: "Emergency contact not found" });

      if (user.baseRole === Role.LANDLORD && existing.landlordId && existing.landlordId !== user.id) {
        return res.status(403).json({ error: "You are not allowed to update this emergencyContact." });
      }

      const parsed = parseEmergencyContactPatch(req.body, { existing });
      if (parsed.error) return res.status(400).json({ error: parsed.error });

      const updated = await prisma.emergencyContact.update({
        where: { id },
        data: parsed.data,
      });

      return res.json(shapeEmergencyContact(updated));
    } catch (err) {
      console.error("Error in PATCH /api/emergencyContacts/:id", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // PATCH /api/emergencyContacts/:id/archive
  // toggle archivedAt timestamp
  // - LANDLORD can archive their own
  // - only SYSADMIN can unarchive
  // ============================================================
  app.patch("/api/emergencyContacts/:id/archive", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const existing = await prisma.emergencyContact.findUnique({ where: { id } });
      if (!existing) return res.status(404).json({ error: "Emergency contact not found" });

      if (user.baseRole === Role.LANDLORD && existing.landlordId && existing.landlordId !== user.id) {
        return res.status(403).json({ error: "You are not allowed to archive this emergencyContact." });
      }

      const currentlyArchived = !!existing.archivedAt;
      const isSysAdmin = user.baseRole === Role.SYSADMIN;

      if (currentlyArchived && !isSysAdmin) {
        return res.status(403).json({
          error: "Only a system administrator can unarchive an emergencyContact.",
        });
      }

      const nextArchivedAt = currentlyArchived ? null : new Date();

      const updated = await prisma.emergencyContact.update({
        where: { id },
        data: { archivedAt: nextArchivedAt },
      });

      return res.json(shapeEmergencyContact(updated));
    } catch (err) {
      console.error("Error in PATCH /api/emergencyContacts/:id/archive", err);
      return res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = {
  registerEmergencyContactRoutes,
};
