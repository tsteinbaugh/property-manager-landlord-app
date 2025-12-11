// backend/src/routes/emergencyContacts.routes.js
const { Role } = require("@prisma/client");

function registerEmergencyContactRoutes(app, prisma, { shapeEmergencyContact }) {
  // ============================================================
  // LIST OCCUPANTS (decoupled from tenants, scoped by landlord when known)
  // GET /api/emergencyContacts?includeArchived=0|1
  // ============================================================
  app.get("/api/emergencyContacts", async (req, res) => {
    const includeArchived =
      req.query.includeArchived === "1" ||
      req.query.includeArchived === "true";

    try {
      const user = req.user || null;

      const where = {
        ...(includeArchived ? {} : { isArchived: false }),
      };

      if (user && user.baseRole === Role.LANDLORD) {
        // landlord only sees their own emergencyContacts
        where.landlordId = user.id;
      } else if (user && user.baseRole === Role.SYSADMIN) {
        // sysadmin sees all
      } else {
        // no user or other roles: allow all (dev parity with properties)
        // tighten later if needed.
      }

      const emergencyContacts = await prisma.emergencyContact.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });

      res.json(emergencyContacts.map(shapeEmergencyContact));
    } catch (err) {
      console.error("Error in GET /api/emergencyContacts", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET SINGLE OCCUPANT + linked tenants (via join table)
  // GET /api/emergencyContacts/:id
  // ============================================================
  app.get("/api/emergencyContacts/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;
  
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  
    try {
      const emergencyContact = await prisma.emergencyContact.findUnique({ where: { id } });
      if (!emergencyContact) {
        return res.status(404).json({ error: "Emergency contact not found" });
      }
    
      // Landlord can only view their own emergencyContact; sysadmin can view any
      if (
        user.baseRole === Role.LANDLORD &&
        emergencyContact.landlordId &&
        emergencyContact.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to view this emergencyContact." });
      }
    
      // Look up join-table links: which tenants are linked to this emergencyContact?
      const links = await prisma.tenantEmergencyContact.findMany({
        where: { emergencyContactId: id },
        include: {
          tenant: true,
        },
      });
    
      const tenants = links
        .map((link) => link.tenant)
        .filter((t) => !!t)
        .map((t) => ({
          id: t.id,
          name: t.name,
          email: t.email,
          phone: t.phone,
          archived: t.isArchived,
          createdAt: t.createdAt,
          updatedAt: t.updatedAt,
        }));
      
      const shaped = shapeEmergencyContact(emergencyContact);
      
      return res.json({
        ...shaped,
        tenants,
      });
    } catch (err) {
      console.error("Error in GET /api/emergencyContacts/:id", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // CREATE OCCUPANT
  // POST /api/emergencyContacts
  // Body: { name, relation?, tenantId? }  (tenantId is OPTIONAL now)
  // ============================================================
  app.post("/api/emergencyContacts", async (req, res) => {
    const { name, phone, relation, email, tenantId } = req.body || {};
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
        phone:
          typeof phone === "string" && phone.trim()
            ? phone.trim()
            : null,
        relation:
          typeof relation === "string" && relation.trim()
            ? relation.trim()
            : null,
        email:
          typeof email === "string" && email.trim()
            ? email.trim()
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

      const created = await prisma.emergencyContact.create({ data });
      res.status(201).json(shapeEmergencyContact(created));
    } catch (err) {
      console.error("Error in POST /api/emergencyContacts", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // UPDATE OCCUPANT
  // PATCH /api/emergencyContacts/:id
  // Body: partial { name?, relation?, tenantId? }
  // ============================================================
  app.patch("/api/emergencyContacts/:id", async (req, res) => {
    const { id } = req.params;
    const { name, phone, relation, email, tenantId } = req.body || {};
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const existing = await prisma.emergencyContact.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Emergency contact not found" });
      }

      // Landlord can only update their own emergencyContacts; sysadmin can update any
      if (
        user.baseRole === Role.LANDLORD &&
        existing.landlordId &&
        existing.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to update this emergencyContact." });
      }

      const data = {};

      // name: allow empty → keep existing, or override with trimmed
      if (name !== undefined) {
        const trimmed = String(name).trim();
        data.name = trimmed || existing.name;
      }

      // phone: handle string, empty string, null, or omit
      if (phone !== undefined) {
        if (phone === null) {
          data.phone = null;
        } else if (typeof phone === "string") {
          data.phone = phone.trim() || null;
        }
      }

      // relation: handle string, empty string, null, or omit
      if (relation !== undefined) {
        if (relation === null) {
          data.relation = null;
        } else if (typeof relation === "string") {
          data.relation = relation.trim() || null;
        }
      }

      // email: handle string, empty string, null, or omit
      if (email !== undefined) {
        if (email === null) {
          data.email = null;
        } else if (typeof email === "string") {
          data.email = email.trim() || null;
        }
      }

      // tenantId: optional linkage, if your schema allows it
      if (tenantId !== undefined) {
        const trimmed = String(tenantId).trim();
        data.tenantId = trimmed || null;
      }

      const updated = await prisma.emergencyContact.update({
        where: { id },
        data,
      });

      res.json(shapeEmergencyContact(updated));
    } catch (err) {
      console.error("Error in PATCH /api/emergencyContacts/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // TOGGLE ARCHIVE
  // PATCH /api/emergencyContacts/:id/archive
  // ============================================================
  app.patch("/api/emergencyContacts/:id/archive", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const existing = await prisma.emergencyContact.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Emergency contact not found" });
      }

      // Landlord can only archive their own emergencyContacts
      if (
        user.baseRole === Role.LANDLORD &&
        existing.landlordId &&
        existing.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to archive this emergencyContact." });
      }

      const currentlyArchived = !!existing.isArchived;
      const isSysAdmin = user.baseRole === Role.SYSADMIN;

      // If currently archived and someone tries to unarchive who is not sysadmin → block
      if (currentlyArchived && !isSysAdmin) {
        return res.status(403).json({
          error: "Only a system administrator can unarchive an emergencyContact.",
        });
      }

      const updated = await prisma.emergencyContact.update({
        where: { id },
        data: { isArchived: !existing.isArchived },
      });

      res.json(shapeEmergencyContact(updated));
    } catch (err) {
      console.error("Error in PATCH /api/emergencyContacts/:id/archive", err);
      res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = {
  registerEmergencyContactRoutes,
};
