// backend/src/routes/vehicles.routes.js
const { Role } = require("@prisma/client");

function registerVehicleRoutes(app, prisma, { shapeVehicle }) {

  const optionalTrimToNull = (v) => { 
    if (v === null) return null; 
    if (v === undefined) return undefined; 
    if (typeof v !== "string") return undefined; 
    const t = v.trim(); 
    return t ? t : null; 
  };

  function parseIntOrNull(v, { min = null, max = null } = {}) {
    if (v === undefined) return undefined; // PATCH omit
    if (v === null) return null;
    if (typeof v === "number") {
      if (!Number.isInteger(v)) return "__INVALID__";
      if (min !== null && v < min) return "__INVALID__";
      if (max !== null && v > max) return "__INVALID__";
      return v;
    }
    if (typeof v === "string") {
      const s = v.trim();
      if (!s) return null;
      if (!/^-?\d+$/.test(s)) return "__INVALID__";
      const n = Number(s);
      if (!Number.isInteger(n)) return "__INVALID__";
      if (min !== null && n < min) return "__INVALID__";
      if (max !== null && n > max) return "__INVALID__";
      return n;
    }
    return "__INVALID__";
  }

  const US_STATES = new Map([
    ["ALABAMA", "AL"],
    ["ALASKA", "AK"],
    ["ARIZONA", "AZ"],
    ["ARKANSAS", "AR"],
    ["CALIFORNIA", "CA"],
    ["COLORADO", "CO"],
    ["CONNECTICUT", "CT"],
    ["DELAWARE", "DE"],
    ["FLORIDA", "FL"],
    ["GEORGIA", "GA"],
    ["HAWAII", "HI"],
    ["IDAHO", "ID"],
    ["ILLINOIS", "IL"],
    ["INDIANA", "IN"],
    ["IOWA", "IA"],
    ["KANSAS", "KS"],
    ["KENTUCKY", "KY"],
    ["LOUISIANA", "LA"],
    ["MAINE", "ME"],
    ["MARYLAND", "MD"],
    ["MASSACHUSETTS", "MA"],
    ["MICHIGAN", "MI"],
    ["MINNESOTA", "MN"],
    ["MISSISSIPPI", "MS"],
    ["MISSOURI", "MO"],
    ["MONTANA", "MT"],
    ["NEBRASKA", "NE"],
    ["NEVADA", "NV"],
    ["NEW HAMPSHIRE", "NH"],
    ["NEW JERSEY", "NJ"],
    ["NEW MEXICO", "NM"],
    ["NEW YORK", "NY"],
    ["NORTH CAROLINA", "NC"],
    ["NORTH DAKOTA", "ND"],
    ["OHIO", "OH"],
    ["OKLAHOMA", "OK"],
    ["OREGON", "OR"],
    ["PENNSYLVANIA", "PA"],
    ["RHODE ISLAND", "RI"],
    ["SOUTH CAROLINA", "SC"],
    ["SOUTH DAKOTA", "SD"],
    ["TENNESSEE", "TN"],
    ["TEXAS", "TX"],
    ["UTAH", "UT"],
    ["VERMONT", "VT"],
    ["VIRGINIA", "VA"],
    ["WASHINGTON", "WA"],
    ["WEST VIRGINIA", "WV"],
    ["WISCONSIN", "WI"],
    ["WYOMING", "WY"],
    ["DISTRICT OF COLUMBIA", "DC"],
  ]);

  const US_STATE_CODES = new Set(Array.from(US_STATES.values()));

  function normalizeState(input) {
    if (typeof input !== "string") return "";
    const raw = input.trim();
    if (!raw) return "";

    const upper = raw.toUpperCase().replace(/\./g, "");

    // 2-letter code
    if (upper.length === 2 && US_STATE_CODES.has(upper)) return upper;

    // Full name
    return US_STATES.get(upper) || "";
  }

  // ============================================================
  // LIST VEHICLES (decoupled from tenants, scoped by landlord when known)
  // GET /api/vehicles?includeArchived=0|1
  // ============================================================
  app.get("/api/vehicles", async (req, res) => {
    const includeArchived =
      req.query.includeArchived === "1" ||
      req.query.includeArchived === "true";

    try {
      const user = req.user || null;

      const where = {
        ...(includeArchived ? {} : { isArchived: false }),
      };

      if (user && user.baseRole === Role.LANDLORD) {
        // landlord only sees their own vehicles
        where.landlordId = user.id;
      } else if (user && user.baseRole === Role.SYSADMIN) {
        // sysadmin sees all
      } else {
        // no user or other roles: allow all (dev parity with properties)
        // tighten later if needed.
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
  // GET SINGLE VEHICLE + linked tenants (via join table)
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
    
      // Look up join-table links: which tenants are linked to this vehicle?
      const links = await prisma.tenantVehicle.findMany({
        where: { vehicleId: id },
        include: { tenant: true },
      });
    
      const tenants = links
        .map((link) => link.tenant)
        .filter(Boolean)
        .map((t) => ({
          id: t.id,
          name: t.name,
          email: t.email,
          phone: t.phone,
          archived: t.isArchived,
          createdAt: t.createdAt,
          updatedAt: t.updatedAt,
        }));
      
      const shaped = shapeVehicle(vehicle);
      
      return res.json({
        ...shaped,
        tenants,
      });
    } catch (err) {
      console.error("Error in GET /api/vehicles/:id", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // CREATE VEHICLE
  // POST /api/vehicles
  // Body: { make?, model?, year?, color?, state?, plate?, permit?)
  // ============================================================
  app.post("/api/vehicles", async (req, res) => {
    const { make, model, year, color, state, plate, permit, parking, notes, violations } = req.body || {};
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const cleanMake = typeof name === "string" ? make.trim() : "";
    if (!cleanMake) {
      return res.status(400).json({ error: "make is required" });
    }

    const cleanModel = typeof model === "string" ? model.trim() : "";
    if (!cleanName) {
      return res.status(400).json({ error: "model is required" });
    }

    // year: if provided in PATCH, it MUST be a valid 4-digit year
    if (year !== undefined) {
      if (year === null) {
        return res.status(400).json({ error: "year cannot be null" });
      }
    
      const yearVal = parseIntOrNull(year, { min: 1000, max: 9999 });
      if (yearVal === "__INVALID__") {
        return res.status(400).json({
          error: "year must be a valid 4-digit integer",
        });
      }
    }


    // Optional: state (US only) -> store USPS code
    let stateCode = null;
    const stateVal = optionalTrimToNull(state);
    if (stateVal !== undefined) {
      if (stateVal === null) {
        stateCode = null;
      } else {
        const code = normalizeState(stateVal);
        if (!code) {
          return res.status(400).json({ error: "state must be a valid US state or DC" });
        }
        stateCode = code;
      }
    }

    try {
      const data = {
        make: cleanMake,
        model: cleanModel,
        year: yearVal,
        color: optionalTrimToNull(color) ?? null,
        state: stateCode,
        plate: optionalTrimToNull(plate) ?? null,
        permit: optionalTrimToNull(permit) ?? null,
        parking: optionalTrimToNull(parking) ?? null,
        notes: optionalTrimToNull(notes) ?? null,
        violations: optionalTrimToNull(violations) ?? null,

        landlordId: user.id,
        createdById: user.id,
      };

      const created = await prisma.vehicle.create({ data });
      res.status(201).json(shapeVehicle(created));
    } catch (err) {
      console.error("Error in POST /api/vehicles", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // UPDATE VEHICLE
  // PATCH /api/vehicles/:id
  // Body: partial { make?, model?, year?, color?, state?, plate?, permit?}
  // ============================================================
  app.patch("/api/vehicles/:id", async (req, res) => {
    const { id } = req.params;
    const { make, model, year, color, state, plate, permit, parking, notes, violations } = req.body || {};
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

      // make: if provided in PATCH, it MUST be a non-empty string
      if (make !== undefined) {
        if (make === null) {
          return res.status(400).json({ error: "make cannot be null" });
        }
        if (typeof make !== "string") {
          return res.status(400).json({ error: "make must be a string" });
        }
        const trimmed = make.trim();
        if (!trimmed) {
          return res.status(400).json({ error: "make is required" });
        }
        data.make = trimmed;
      }

      // model: if provided in PATCH, it MUST be a non-empty string
      if (model !== undefined) {
        if (model === null) {
          return res.status(400).json({ error: "model cannot be null" });
        }
        if (typeof model !== "string") {
          return res.status(400).json({ error: "model must be a string" });
        }
        const trimmed = namodelme.trim();
        if (!trimmed) {
          return res.status(400).json({ error: "model is required" });
        }
        data.model = trimmed;
      }

      // year: if provided in PATCH, it MUST be a valid 4-digit year
      if (year !== undefined) {
        if (year === null) {
          return res.status(400).json({ error: "year cannot be null" });
        }
      
        const yearVal = parseIntOrNull(year, { min: 1000, max: 9999 });
        if (yearVal === "__INVALID__") {
          return res.status(400).json({
            error: "year must be a valid 4-digit integer",
          });
        }
        data.year = yearVal;
      }

      // state: optional, but if provided must be valid US state/DC; store USPS code
      if (state !== undefined) {
        const stateVal = optionalTrimToNull(state);
        if (stateVal === null) {
          data.state = null;
        } else if (typeof stateVal === "string") {
          const code = normalizeState(stateVal);
          if (!code) {
            return res.status(400).json({ error: "state must be a valid US state or DC" });
          }
          data.state = code;
        }
      }

      if (color !== undefined) data.color = optionalTrimToNull(color);
      if (plate !== undefined) data.plate = optionalTrimToNull(plate);
      if (permit !== undefined) data.permit = optionalTrimToNull(permit);
      if (parking !== undefined) data.parking = optionalTrimToNull(parking);
      if (notes !== undefined) data.notes = optionalTrimToNull(notes);
      if (violations !== undefined) data.violations = optionalTrimToNull(violations);

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
        data: { isArchived: !currentlyArchived },
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
