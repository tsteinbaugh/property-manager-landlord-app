// backend/src/routes/occupants.routes.js
const { Role } = require("@prisma/client");

function registerOccupantRoutes(app, prisma, { shapeOccupant }) {

  const optionalTrimToNull = (v) => { 
    if (v === null) return null; 
    if (v === undefined) return undefined; 
    if (typeof v !== "string") return undefined; 
    const t = v.trim(); 
    return t ? t : null; 
  };

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const normalizeEmail = (v) => {
    if (v === undefined) return undefined; // PATCH omit
    if (v === null) return null;
    if (typeof v !== "string") return "__INVALID__";
    const t = v.trim().toLowerCase();
    return t ? t : null;
  };

  const isValidPhone = (v) => /^\+?[1-9]\d{7,14}$/.test(v); // E.164-ish

  const normalizePhone = (v) => {
    if (v === undefined) return undefined; // PATCH omit
    if (v === null) return null;
    if (typeof v !== "string") return "__INVALID__";
    const raw = v.trim();
    if (!raw) return null;
    return raw.replace(/(?!^\+)[^\d]/g, "");
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

  function parseEnumOrNullOpt(v, allowed) {
    if (v === undefined) return undefined; // PATCH omit
    if (v === null) return null;
    if (typeof v !== "string") return "__INVALID__";
    const s = v.trim();
    if (!s) return null;
    const upper = s.toUpperCase();
    return allowed.has(upper) ? upper : "__INVALID__";
  }

  const SEX = new Set(["MALE", "FEMALE", "OTHER", "UNKNOWN"]);
  const HAIR = new Set(["BLACK", "BROWN", "BLONDE", "RED", "GRAY", "WHITE", "DYED", "BALD", "OTHER", "UNKNOWN"]);
  const EYE = new Set(["BROWN", "BLUE", "GREEN", "HAZEL", "GRAY", "AMBER", "OTHER", "UNKNOWN"]);
  const BODY = new Set(["SLIM", "AVERAGE", "ATHLETIC", "HEAVYSET", "OTHER", "UNKNOWN"]);

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
        ...(includeArchived ? {} : { archivedAt: null }),
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
  // GET SINGLE OCCUPANT + linked tenants (via join table)
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
    
      // Look up join-table links: which tenants are linked to this occupant?
      const links = await prisma.tenantOccupant.findMany({
        where: { occupantId: id },
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
          archived: t.archivedAt,
          createdAt: t.createdAt,
          updatedAt: t.updatedAt,
        }));
      
      const shaped = shapeOccupant(occupant);
      
      return res.json({
        ...shaped,
        tenants,
      });
    } catch (err) {
      console.error("Error in GET /api/occupants/:id", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // CREATE OCCUPANT
  // POST /api/occupants
  // Body: { name, relation? )
  // ============================================================
  app.post("/api/occupants", async (req, res) => {
    const { name, phone, email, relation, age, heightFeet, heightInches, weight, sex, hairColor, eyeColor, bodyBuild, markings, notes, violations } = req.body || {};
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const cleanName = typeof name === "string" ? name.trim() : "";
    if (!cleanName) {
      return res.status(400).json({ error: "name is required" });
    }

    // phone/email OPTIONAL, but if provided must be valid
    const emailNorm = normalizeEmail(email);
    if (emailNorm === "__INVALID__") {
      return res.status(400).json({ error: "email must be a string" });
    }
    if (emailNorm && !isValidEmail(emailNorm)) {
      return res.status(400).json({ error: "email must be a valid email address" });
    }

    const phoneNorm = normalizePhone(phone);
    if (phoneNorm === "__INVALID__") {
      return res.status(400).json({ error: "phone must be a string" });
    }
    if (phoneNorm && !isValidPhone(phoneNorm)) {
      return res.status(400).json({ error: "phone must be a valid phone number" });
    }

    // numbers
    const ageVal = parseIntOrNull(age, { min: 0, max: 120 });
    if (ageVal === "__INVALID__") return res.status(400).json({ error: "age must be an integer between 0 and 120" });

    const heightFeetVal = parseIntOrNull(heightFeet, { min: 0, max: 8 });
    if (heightFeetVal === "__INVALID__") return res.status(400).json({ error: "heightFeet must be an integer 0-8" });

    const heightInchesVal = parseIntOrNull(heightInches, { min: 0, max: 11 });
    if (heightInchesVal === "__INVALID__") return res.status(400).json({ error: "heightInches must be an integer 0-11" });

    const weightVal = parseIntOrNull(weight, { min: 0, max: 1500 });
    if (weightVal === "__INVALID__") return res.status(400).json({ error: "weight must be an integer" });

    // enums
    const sexVal = parseEnumOrNullOpt(sex, SEX);
    if (sexVal === "__INVALID__") return res.status(400).json({ error: "sex is invalid" });

    const hairVal = parseEnumOrNullOpt(hairColor, HAIR);
    if (hairVal === "__INVALID__") return res.status(400).json({ error: "hair color is invalid" });

    const eyeVal = parseEnumOrNullOpt(eyeColor, EYE);
    if (eyeVal === "__INVALID__") return res.status(400).json({ error: "eye color is invalid" });

    const bodyVal = parseEnumOrNullOpt(bodyBuild, BODY);
    if (bodyVal === "__INVALID__") return res.status(400).json({ error: "body build is invalid" });

    try {
      const data = {
        name: cleanName,
        phone: phoneNorm ?? null,
        email: emailNorm ?? null,
        relation: optionalTrimToNull(relation) ?? null,
      
        age: ageVal ?? null,
        heightFeet: heightFeetVal ?? null,
        heightInches: heightInchesVal ?? null,
        weight: weightVal ?? null,
      
        sex: sexVal ?? null,
        hairColor: hairVal ?? null,
        eyeColor: eyeVal ?? null,
        bodyBuild: bodyVal ?? null,
      
        markings: optionalTrimToNull(markings) ?? null,
        notes: optionalTrimToNull(notes) ?? null,
        violations: optionalTrimToNull(violations) ?? null,
      
        landlordId: user.id,
        createdById: user.id,
      };

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
  // Body: partial { name?, relation?}
  // ============================================================
  app.patch("/api/occupants/:id", async (req, res) => {
    const { id } = req.params;

    const { name, phone, email, relation, age, heightFeet, heightInches, weight, sex, hairColor, eyeColor, bodyBuild, markings, notes, violations } = req.body || {};

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

      // phone: optional; if provided must be valid; allow clearing via null/"".
      if (phone !== undefined) {
        const phoneNorm = normalizePhone(phone);
        if (phoneNorm === "__INVALID__") return res.status(400).json({ error: "phone must be a string" });
        if (phoneNorm && !isValidPhone(phoneNorm)) return res.status(400).json({ error: "phone must be a valid phone number" });
        data.phone = phoneNorm; // may be null
      }

      // email: optional; if provided must be valid; allow clearing via null/"".
      if (email !== undefined) {
        const emailNorm = normalizeEmail(email);
        if (emailNorm === "__INVALID__") return res.status(400).json({ error: "email must be a string" });
        if (emailNorm && !isValidEmail(emailNorm)) return res.status(400).json({ error: "email must be a valid email address" });
        data.email = emailNorm; // may be null
      }

      // numbers (optional)
      if (age !== undefined) {
        const v = parseIntOrNull(age, { min: 0, max: 120 });
        if (v === "__INVALID__") return res.status(400).json({ error: "age must be an integer between 0 and 120" });
        data.age = v;
      }
      if (heightFeet !== undefined) {
        const v = parseIntOrNull(heightFeet, { min: 0, max: 8 });
        if (v === "__INVALID__") return res.status(400).json({ error: "heightFeet must be an integer 0-8" });
        data.heightFeet = v;
      }
      if (heightInches !== undefined) {
        const v = parseIntOrNull(heightInches, { min: 0, max: 11 });
        if (v === "__INVALID__") return res.status(400).json({ error: "heightInches must be an integer 0-11" });
        data.heightInches = v;
      }
      if (weight !== undefined) {
        const v = parseIntOrNull(weight, { min: 0, max: 1500 });
        if (v === "__INVALID__") return res.status(400).json({ error: "weight must be an integer" });
        data.weight = v;
      }

      // enums (optional)
      if (sex !== undefined) {
        const v = parseEnumOrNullOpt(sex, SEX);
        if (v === "__INVALID__") return res.status(400).json({ error: "sex is invalid" });
        data.sex = v;
      }
      if (hairColor !== undefined) {
        const v = parseEnumOrNullOpt(hairColor, HAIR);
        if (v === "__INVALID__") return res.status(400).json({ error: "hairColor is invalid" });
        data.hairColor = v;
      }
      if (eyeColor !== undefined) {
        const v = parseEnumOrNullOpt(eyeColor, EYE);
        if (v === "__INVALID__") return res.status(400).json({ error: "eyeColor is invalid" });
        data.eyeColor = v;
      }
      if (bodyBuild !== undefined) {
        const v = parseEnumOrNullOpt(bodyBuild, BODY);
        if (v === "__INVALID__") return res.status(400).json({ error: "bodyBuild is invalid" });
        data.bodyBuild = v;
      }

      // strings (optional)
      if (markings !== undefined) data.markings = optionalTrimToNull(markings);
      if (notes !== undefined) data.notes = optionalTrimToNull(notes);
      if (violations !== undefined) data.violations = optionalTrimToNull(violations);


      // name: if provided in PATCH, it MUST be a non-empty string
      if (name !== undefined) {
        if (name === null) {
          return res.status(400).json({ error: "name cannot be null" });
        }
        if (typeof name !== "string") {
          return res.status(400).json({ error: "name must be a string" });
        }
        const trimmed = name.trim();
        if (!trimmed) {
          return res.status(400).json({ error: "name is required" });
        }
        data.name = trimmed;
      }

      // relation: optional
      if (relation !== undefined) {
        data.relation = optionalTrimToNull(relation);
      }

      const updated = await prisma.occupant.update({
        where: { id },
        data,
      });

      return res.json(shapeOccupant(updated));
    } catch (err) {
      console.error("Error in PATCH /api/occupants/:id", err);
      return res.status(500).json({ error: "Server error" });
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

      const currentlyArchived = !!existing.archivedAt;
      const isSysAdmin = user.baseRole === Role.SYSADMIN;

      // If currently archived and someone tries to unarchive who is not sysadmin → block
      if (currentlyArchived && !isSysAdmin) {
        return res.status(403).json({
          error: "Only a system administrator can unarchive an occupant.",
        });
      }

      const updated = await prisma.occupant.update({
        where: { id },
        data: { archivedAt: !currentlyArchived },
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
