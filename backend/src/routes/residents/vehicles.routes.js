// backend/src/routes/vehicles.routes.js
const { Role } = require("@prisma/client");

const { parseVehiclePost, parseVehiclePatch } = require("../../utils/vehicleFields.js");
const { getVehicleDetails } = require("../../services/vehicleDetails.service.js");

function registerVehicleRoutes(app, prisma, { shapeVehicle }) {
  // ============================================================
  // GET /api/vehicles?includeArchived=0|1
  // ============================================================
  app.get("/api/vehicles", async (req, res) => {
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
  });

  // ============================================================
  // GET /api/vehicles/:id (detail + linked tenants)
  // ============================================================
  app.get("/api/vehicles/:id", async (req, res) => {
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
  });

  // ============================================================
  // POST /api/vehicles
  // Body: { make, model, year?, color?, state?, plate?, permit?, parking?, notes?, violations? }
  // ============================================================
  app.post("/api/vehicles", async (req, res) => {
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
  });

  // ============================================================
  // PATCH /api/vehicles/:id
  // Body: partial { make?, model?, year?, color?, state?, plate?, permit?, parking?, notes?, violations? }
  // ============================================================
  app.patch("/api/vehicles/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const existing = await prisma.vehicle.findUnique({ where: { id } });
      if (!existing) return res.status(404).json({ error: "Vehicle not found" });

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
  });

  // ============================================================
  // PATCH /api/vehicles/:id/archive
  // toggle archivedAt timestamp
  // - LANDLORD can archive their own
  // - only SYSADMIN can unarchive
  // ============================================================
  app.patch("/api/vehicles/:id/archive", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const existing = await prisma.vehicle.findUnique({ where: { id } });
      if (!existing) return res.status(404).json({ error: "Vehicle not found" });

      if (user.baseRole === Role.LANDLORD && existing.landlordId && existing.landlordId !== user.id) {
        return res.status(403).json({ error: "You are not allowed to archive this vehicle." });
      }

      const currentlyArchived = !!existing.archivedAt;
      const isSysAdmin = user.baseRole === Role.SYSADMIN;

      if (currentlyArchived && !isSysAdmin) {
        return res.status(403).json({
          error: "Only a system administrator can unarchive a vehicle.",
        });
      }

      const nextArchivedAt = currentlyArchived ? null : new Date();

      const updated = await prisma.vehicle.update({
        where: { id },
        data: { archivedAt: nextArchivedAt },
      });

      return res.json(shapeVehicle(updated));
    } catch (err) {
      console.error("Error in PATCH /api/vehicles/:id/archive", err);
      return res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = {
  registerVehicleRoutes,
};
