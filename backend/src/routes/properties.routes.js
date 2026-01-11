// backend/src/routes/properties.routes.js
const { Role } = require("@prisma/client");

const {
  getPropertyDetails,
  getPropertySummary,
} = require("@services/propertyDetails.service.js");

const { 
  parsePropertyPost, 
  parsePropertyPatch,
} = require("@utils/propertyFields.js");

const {
  shapeProperty,
} = require("@shapes/property.shape.js")

const { requireAuth, requireLandlordOrSysadmin } = require("@src/middleware/auth.middleware.js");

function registerPropertyRoutes(app, prisma) {
  const auth = requireAuth(prisma);
  // ============================================================
  // GET /api/properties?includeArchived=0|1
  // - LANDLORD: only their properties
  // - SYSADMIN: all properties
  // - no user: all properties (for now)
  // ============================================================
  app.get("/api/properties", async (req, res) => {
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

      const props = await prisma.property.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });

      res.json(props.map(shapeProperty));
    } catch (err) {
      console.error("Error in GET /api/properties", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // POST /api/properties - create a property
  // ============================================================
  app.post(
    "/api/properties",
    auth,
    requireLandlordOrSysadmin,    
    async (req, res) => {
      try {
        const { data, error } = parsePropertyPost(req.body);
        if (error) return res.status(400).json({ error });

        const user = req.user || null;
        const bodyLandlordId = req.body?.landlordId || null;
        const bodyCreatedById = req.body?.createdById || null;

        let landlordId = bodyLandlordId || null;
        if (!landlordId && user?.id) landlordId = user.id;

        let createdById = bodyCreatedById || null;
        if (!createdById) {
          if (user?.id) createdById = user.id;
          else if (landlordId) createdById = landlordId;
        }

        const created = await prisma.property.create({
          data: { ...data, landlordId, createdById },
        });

        return res.status(201).json(created);
      } catch (err) {
        console.error("Error in POST /api/properties", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // PATCH /api/properties/:id - update property fields
  // Optional fields may be cleared via null/""
  // ============================================================
  app.patch(
    "/api/properties/:id",
    auth,
    requireLandlordOrSysadmin,    
    async (req, res) => {
      const { id } = req.params;

      try {
        const existing = await prisma.property.findUnique({ where: { id } });
        if (!existing) return res.status(404).json({ error: "Property not found" });

        const user = req.user || null;
        if (user && user.baseRole === Role.LANDLORD) {
          if (existing.landlordId && existing.landlordId !== user.id) {
            return res.status(403).json({ error: "Forbidden" });
          }
        }

        const { data, error } = parsePropertyPatch(req.body);
        if (error) return res.status(400).json({ error });

        const updated = await prisma.property.update({ where: { id }, data });
        return res.json(updated);
      } catch (err) {
        console.error("Error in PATCH /api/properties/:id", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // PATCH /api/properties/:id/archive - toggle archivedAt + archiveReason
  // ============================================================
  app.patch(
    "/api/properties/:id/archive",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { id } = req.params;
      const user = req.user;

      try {
        const property = await prisma.property.findUnique({ where: { id } });
        if (!property) return res.status(404).json({ error: "Property not found" });

        // landlord scoping
        if (
          user.baseRole === Role.LANDLORD &&
          property.landlordId &&
          property.landlordId !== user.id
        ) {
          return res.status(403).json({
            error: "You are not allowed to archive this property.",
          });
        }

        const isArchiving = !property.archivedAt;

        // Frontend sends { archiveReason }
        const raw = req.body?.archiveReason;
        const reason = typeof raw === "string" ? raw.trim() : "";

        // Require reason ONLY when archiving
        if (isArchiving && !reason) {
          return res.status(400).json({ error: "archiveReason is required" });
        }

        const updated = await prisma.property.update({
          where: { id },
          data: {
            archivedAt: isArchiving ? new Date() : null,
            archiveReason: isArchiving ? reason : null,
            archivedById: isArchiving ? user.id : null,
          },
        });

        return res.json(shapeProperty(updated));
      } catch (err) {
        console.error("Error in PATCH /api/properties/:id/archive", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // GET /api/properties/:id – detail, including leases, tenants, occupants, emergency contacts, and vehicles
  // ============================================================
  app.get(
    "/api/properties/:id",
    auth,
    requireLandlordOrSysadmin,    
    async (req, res) => {
      const { id } = req.params;
      const user = req.user || null;

      try {
        const payload = await getPropertyDetails(prisma, {
          propertyId: id,
          user,
        });
        return res.json(payload);
      } catch (err) {
        if (err?.status) return res.status(err.status).json({ error: err.message });
        console.error("Error in GET /api/properties/:id", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // GET /api/properties/:id/summary
  // Returns: property + latest lease + tenants + occupants + pets + emergency contacts + vehicles
  // ============================================================
  app.get("/api/properties/:id/summary", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    try {
      const payload = await getPropertySummary(prisma, {
        propertyId: id,
        user,
      });
      return res.json(payload);
    } catch (err) {
      if (err?.status) return res.status(err.status).json({ error: err.message });
      console.error("Error in GET /api/properties/:id/summary", err);
      return res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = {
  registerPropertyRoutes,
};
