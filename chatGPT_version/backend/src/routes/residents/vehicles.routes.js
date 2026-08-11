// backend/src/routes/vehicles.routes.js
const { Role } = require("@prisma/client");

const { parseVehiclePost, parseVehiclePatch } = require("@utils/vehicleFields.js");
const { getVehicleDetails } = require("@services/vehicleDetails.service.js");

const { requireAuth, requireLandlordOrSysadmin } = require("@src/middleware/auth.middleware.js");

function registerVehicleRoutes(app, prisma, { shapeVehicle }) {
  const auth = requireAuth(prisma);
  // ============================================================
  // GET /api/vehicles?includeArchived=0|1
  // ============================================================
  app.get(
    "/api/vehicles",
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

        const vehicles = await prisma.vehicle.findMany({
          where,
          orderBy: { createdAt: "desc" },
        });

        return res.json(vehicles.map(shapeVehicle));
      } catch (err) {
        console.error("Error in GET /api/vehicles", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // GET /api/vehicles/:id (detail + linked tenants)
  // ============================================================
  app.get(
    "/api/vehicles/:id",
    auth,
    requireLandlordOrSysadmin,    
    async (req, res) => {
      const { id } = req.params;
      const user = req.user || null;

      try {
        const payload = await getVehicleDetails(prisma, {
          vehicleId: id,
          user,
          shapeVehicle,
        });
        return res.json(payload);
      } catch (err) {
        if (err?.status) return res.status(err.status).json({ error: err.message });
        console.error("Error in GET /api/vehicles/:id", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // POST /api/vehicles
  // Body: { make, model, year?, color?, state?, plate?, permit?, parking?, notes? }
  // ============================================================
  app.post(
    "/api/vehicles", 
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const user = req.user || null;
      if (!user) return res.status(401).json({ error: "Unauthorized" });

      try {
        const { data, error } = parseVehiclePost(req.body);
        if (error) return res.status(400).json({ error });

        const created = await prisma.vehicle.create({
          data: {
            ...data,
            landlordId: user.id,
            createdById: user.id,
          },
        });

        return res.status(201).json(shapeVehicle(created));
      } catch (err) {
        console.error("Error in POST /api/vehicles", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // PATCH /api/vehicles/:id
  // Body: partial { make?, model?, year?, color?, state?, plate?, permit?, parking?, notes? }
  // ============================================================
  app.patch(
    "/api/vehicles/:id",
    auth,
    requireLandlordOrSysadmin,    
    async (req, res) => {
      const { id } = req.params;
      const user = req.user || null;

      if (!user) return res.status(401).json({ error: "Unauthorized" });

      try {
        const existing = await prisma.vehicle.findUnique({ where: { id } });
        if (!existing) return res.status(404).json({ error: "Vehicle not found" });

        if (existing.archivedAt) {
          return res.status(409).json({
            error:
              "Vehicle is archived and cannot be edited. Restore (unarchive) first, then edit, then re-archive.",
          });
        }

        if (user.baseRole === Role.LANDLORD && existing.landlordId && existing.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to update this vehicle." });
        }

        const { data, error } = parseVehiclePatch(req.body);
        if (error) return res.status(400).json({ error });

        const updated = await prisma.vehicle.update({
          where: { id },
          data,
        });

        return res.json(shapeVehicle(updated));
      } catch (err) {
        console.error("Error in PATCH /api/vehicles/:id", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // PATCH /api/vehicles/:id/archive - toggle archivedAt + archiveReason
  // ============================================================
  app.patch(
    "/api/vehicles/:id/archive",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { id } = req.params;
      const user = req.user;

      try {
        const vehicle = await prisma.vehicle.findUnique({ where: { id } });
        if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });

        // landlord scoping
        if (
          user.baseRole === Role.LANDLORD &&
          vehicle.landlordId &&
          vehicle.landlordId !== user.id
        ) {
          return res.status(403).json({
            error: "You are not allowed to archive this vehicle.",
          });
        }

        const isArchiving = !vehicle.archivedAt;

        // Frontend sends { archiveReason }
        const raw = req.body?.archiveReason;
        const reason = typeof raw === "string" ? raw.trim() : "";

        // Require reason ONLY when archiving
        if (isArchiving && !reason) {
          return res.status(400).json({ error: "archiveReason is required" });
        }

        const updated = await prisma.vehicle.update({
          where: { id },
          data: {
            archivedAt: isArchiving ? new Date() : null,
            archiveReason: isArchiving ? reason : null,
            archivedById: isArchiving ? user.id : null,
          },
        });

        return res.json(shapeVehicle(updated));
      } catch (err) {
        console.error("Error in PATCH /api/vehicles/:id/archive", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );
}

module.exports = {
  registerVehicleRoutes,
};
