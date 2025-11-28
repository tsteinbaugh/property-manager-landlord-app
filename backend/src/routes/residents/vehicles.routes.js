// backend/src/routes/vehicles.routes.js
const { Role } = require("@prisma/client");

function registerVehicleRoutes(app, prisma, { shapeVehicle }) {
  // ============================================================
  // LIST vehicleS (decoupled from tenants, scoped by landlord)
  // GET /api/vehicles?includeArchived=0|1
  // ============================================================
  app.get("/api/vehicles", async (req, res) => {
    const includeArchived =
      req.query.includeArchived === "1" ||
      req.query.includeArchived === "true";

    const user = req.user || null;
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const where = {
        ...(includeArchived ? {} : { isArchived: false }),
      };

      if (user.baseRole === Role.LANDLORD) {
        // landlord only sees their own vehicles
        where.landlordId = user.id;
      } else if (user.baseRole === Role.SYSADMIN) {
        // sysadmin sees all
      } else {
        // for now, block others; we can relax later if needed
        return res
          .status(403)
          .json({ error: "You are not allowed to list vehicles." });
      }

      const vehicles = await prisma.vehicle.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });

      res.json(vehicles.map(shapeVehicle));
    } catch (err) {
      console.error("Error in GET /api/vehicles", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET SINGLE vehicle
  // GET /api/vehicles/:id
  // ============================================================
  app.get("/api/vehicles/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const vehicle = await prisma.vehicle.findUnique({ where: { id } });
      if (!vehicle) {
        return res.status(404).json({ error: "Vehicle not found" });
      }

      // Landlord can only view their own vehicle; sysadmin can view any
      if (
        user.baseRole === Role.LANDLORD &&
        vehicle.landlordId &&
        vehicle.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to view this vehicle." });
      }

      res.json(shapeVehicle(vehicle));
    } catch (err) {
      console.error("Error in GET /api/vehicles/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // CREATE vehicle
  // POST /api/vehicles
  // Body: { make?, model?, year?, color?, state?, plate?, permit? tenantId?}  (tenantId is OPTIONAL now)
  // ============================================================
  app.post("/api/vehicles", async (req, res) => {
    const { make, model, year, color, state, plate, permit, tenantId } = req.body || {};
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    let normalizedYear = null;
    if (year !== undefined && year !== null && String(year).trim() !== "") {
      const parsed = Number(year);
      if (!Number.isNaN(parsed) && parsed >= 0) {
        normalizedYear = parsed;
      }
    }

    try {
      const data = {
        make:
          typeof make === "string" && make.trim()
            ? make.trim()
            : null,
        model:
          typeof model === "string" && model.trim()
            ? model.trim()
            : null,
        year: normalizedYear,
        color:
          typeof color === "string" && color.trim()
            ? color.trim()
            : null,
        state:
          typeof state === "string" && state.trim()
            ? state.trim()
            : null,
        plate:
          typeof plate === "string" && plate.trim()
            ? plate.trim()
            : null,
        permit:
          typeof permit === "string" && permit.trim()
            ? permit.trim()
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

      const created = await prisma.vehicle.create({ data });
      res.status(201).json(shapeVehicle(created));
    } catch (err) {
      console.error("Error in POST /api/vehicles", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // UPDATE vehicle
  // PATCH /api/vehicles/:id
  // Body: partial { make?, model?, year?, color?, state?, plate?, permit? tenantId? }
  // ============================================================
  app.patch("/api/vehicles/:id", async (req, res) => {
    const { id } = req.params;
    const { make, model, year, color, state, plate, permit, tenantId } = req.body || {};
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const existing = await prisma.vehicle.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Vehicle not found" });
      }

      // Landlord can only update their own vehicles; sysadmin can update any
      if (
        user.baseRole === Role.LANDLORD &&
        existing.landlordId &&
        existing.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to update this vehicle." });
      }

      const data = {};

      // make: handle string, empty string, null, or omit
      if (make !== undefined) {
        if (make === null) {
          data.make = null;
        } else if (typeof make === "string") {
          data.make = make.trim() || null;
        }
      }

      // model: handle string, empty string, null, or omit
      if (model !== undefined) {
        if (model === null) {
          data.model = null;
        } else if (typeof model === "string") {
          data.model = model.trim() || null;
        }
      }

      // year: handle string, number, empty string, null, or omit
      if (year !== undefined) {
        if (year === null || String(year).trim() === "") {
          data.year = null;
        } else {
          const parsed = Number(year);
          if (!Number.isNaN(parsed) && parsed >= 0) {
            data.year = parsed;
          }
        }
      }

      // color: handle string, empty string, null, or omit
      if (color !== undefined) {
        if (color === null) {
          data.color = null;
        } else if (typeof color === "string") {
          data.color = color.trim() || null;
        }
      }

      // state: handle string, empty string, null, or omit
      if (state !== undefined) {
        if (state === null) {
          data.state = null;
        } else if (typeof state === "string") {
          data.state = state.trim() || null;
        }
      }

      // plate: handle string, empty string, null, or omit
      if (plate !== undefined) {
        if (plate === null) {
          data.plate = null;
        } else if (typeof plate === "string") {
          data.plate = plate.trim() || null;
        }
      }

      // permit: handle string, empty string, null, or omit
      if (permit !== undefined) {
        if (permit === null) {
          data.permit = null;
        } else if (typeof permit === "string") {
          data.permit = permit.trim() || null;
        }
      }

      // tenantId: optional linkage, if your schema allows it
      if (tenantId !== undefined) {
        const trimmed = String(tenantId).trim();
        data.tenantId = trimmed || null;
      }

      const updated = await prisma.vehicle.update({
        where: { id },
        data,
      });

      res.json(shapeVehicle(updated));
    } catch (err) {
      console.error("Error in PATCH /api/vehicles/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // TOGGLE ARCHIVE
  // PATCH /api/vehicles/:id/archive
  // ============================================================
  app.patch("/api/vehicles/:id/archive", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const existing = await prisma.vehicle.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Vehicle not found" });
      }

      // Landlord can only archive their own vehicles
      if (
        user.baseRole === Role.LANDLORD &&
        existing.landlordId &&
        existing.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to archive this vehicle." });
      }

      const currentlyArchived = !!existing.isArchived;
      const isSysAdmin = user.baseRole === Role.SYSADMIN;

      // If currently archived and someone tries to unarchive who is not sysadmin → block
      if (currentlyArchived && !isSysAdmin) {
        return res.status(403).json({
          error: "Only a system administrator can unarchive an vehicle.",
        });
      }

      const updated = await prisma.vehicle.update({
        where: { id },
        data: { isArchived: !existing.isArchived },
      });

      res.json(shapeVehicle(updated));
    } catch (err) {
      console.error("Error in PATCH /api/vehicles/:id/archive", err);
      res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = {
  registerVehicleRoutes,
};
