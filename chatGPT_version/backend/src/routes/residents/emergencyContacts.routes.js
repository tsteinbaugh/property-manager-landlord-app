// backend/src/routes/emergencyContacts.routes.js
const { Role } = require("@prisma/client");

const {
  parseEmergencyContactPost,
  parseEmergencyContactPatch,
} = require("@utils/emergencyContactFields.js");

const {
  getEmergencyContactDetails,
} = require("@services/emergencyContactDetails.service.js");

const { requireAuth, requireLandlordOrSysadmin } = require("@src/middleware/auth.middleware.js");

function registerEmergencyContactRoutes(app, prisma, { shapeEmergencyContact }) {
  const auth = requireAuth(prisma);
  // ============================================================
  // GET /api/emergencyContacts?includeArchived=0|1
  // - LANDLORD: only their own
  // - SYSADMIN: all
  // - no user/other: allow all for now (dev parity with properties)
  // ============================================================
  app.get(
    "/api/emergencyContacts",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
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
    }
  );

  // ============================================================
  // GET /api/emergencyContacts/:id
  // Single emergency contact + linked tenants
  // ============================================================
  app.get(
    "/api/emergencyContacts/:id",
    auth,
    requireLandlordOrSysadmin,    
    async (req, res) => {
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
    }
  );

  // ============================================================
  // POST /api/emergencyContacts
  // ============================================================
  app.post(
    "/api/emergencyContacts",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
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
    }
  );

  // ============================================================
  // PATCH /api/emergencyContacts/:id
  // ============================================================
  app.patch(
    "/api/emergencyContacts/:id",
    auth,
    requireLandlordOrSysadmin,    
    async (req, res) => {
      const { id } = req.params;
      const user = req.user || null;

      if (!user) return res.status(401).json({ error: "Unauthorized" });

      try {
        const existing = await prisma.emergencyContact.findUnique({ where: { id } });
        if (!existing) return res.status(404).json({ error: "Emergency contact not found" });

        if (existing.archivedAt) {
          return res.status(409).json({
            error:
              "Emergency contact is archived and cannot be edited. Restore (unarchive) first, then edit, then re-archive.",
          });
        }

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
    }
  );

  // ============================================================
  // PATCH /api/emergencyContacts/:id/archive - toggle archivedAt + archiveReason
  // ============================================================
  app.patch(
    "/api/emergencyContacts/:id/archive",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { id } = req.params;
      const user = req.user;

      try {
        const emergencyContact = await prisma.emergencyContact.findUnique({ where: { id } });
        if (!emergencyContact) return res.status(404).json({ error: "Emergency contact not found" });

        // landlord scoping
        if (
          user.baseRole === Role.LANDLORD &&
          emergencyContact.landlordId &&
          emergencyContact.landlordId !== user.id
        ) {
          return res.status(403).json({
            error: "You are not allowed to archive this emergency contact.",
          });
        }

        const isArchiving = !emergencyContact.archivedAt;

        // Frontend sends { archiveReason }
        const raw = req.body?.archiveReason;
        const reason = typeof raw === "string" ? raw.trim() : "";

        // Require reason ONLY when archiving
        if (isArchiving && !reason) {
          return res.status(400).json({ error: "archiveReason is required" });
        }

        const updated = await prisma.emergencyContact.update({
          where: { id },
          data: {
            archivedAt: isArchiving ? new Date() : null,
            archiveReason: isArchiving ? reason : null,
            archivedById: isArchiving ? user.id : null,
          },
        });

        return res.json(shapeEmergencyContact(updated));
      } catch (err) {
        console.error("Error in PATCH /api/emergencyContacts/:id/archive", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );
}

module.exports = {
  registerEmergencyContactRoutes,
};
