// backend/src/routes/tenants.routes.js
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { Role, UserStatus } = require("@prisma/client");

function generateTempPassword() {
  return crypto.randomBytes(16).toString("hex");
}

function registerTenantRoutes(app, prisma, { shapeTenant }) {
  // ============================================================
  // Helpers
  // ============================================================
  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isValidPhone = (v) => /^\+?[1-9]\d{7,14}$/.test(v); // E.164-ish

  const optionalTrimToNull = (v) => {
    if (v === null) return null;
    if (v === undefined) return undefined;
    if (typeof v !== "string") return "__INVALID__";
    const t = v.trim();
    return t ? t : null;
  };

  const normalizeEmail = (v) => {
    if (v === undefined) return undefined; // PATCH omit
    if (v === null) return null;
    if (typeof v !== "string") return "__INVALID__";
    const t = v.trim().toLowerCase();
    return t ? t : null;
  };

  const normalizePhone = (v) => {
    if (v === undefined) return undefined; // PATCH omit
    if (v === null) return null;
    if (typeof v !== "string") return "__INVALID__";
    const raw = v.trim();
    if (!raw) return null;
    return raw.replace(/(?!^\+)[^\d]/g, "");
  };

  function parseIntOrNullOpt(v, { min = null, max = null } = {}) {
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
      if (!s) return null; // allow "" to clear optional ints
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
  const HAIR = new Set([
    "BLACK",
    "BROWN",
    "BLONDE",
    "RED",
    "GRAY",
    "WHITE",
    "DYED",
    "BALD",
    "OTHER",
    "UNKNOWN",
  ]);
  const EYE = new Set(["BROWN", "BLUE", "GREEN", "HAZEL", "GRAY", "AMBER", "OTHER", "UNKNOWN"]);
  const BODY = new Set(["SLIM", "AVERAGE", "ATHLETIC", "HEAVYSET", "OTHER", "UNKNOWN"]);

  // ============================================================
  // GET /api/tenants/me – current logged-in tenant's profile
  // ============================================================
  app.get("/api/tenants/me", async (req, res) => {
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });
    if (user.baseRole !== Role.TENANT) {
      return res.status(403).json({ error: "Only tenants can access this endpoint" });
    }

    try {
      const tenant = await prisma.tenant.findFirst({
        where: { userId: user.id, isArchived: false },
      });

      if (!tenant) return res.status(404).json({ error: "Tenant profile not found" });

      res.json(shapeTenant(tenant));
    } catch (err) {
      console.error("Error in GET /api/tenants/me", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // PATCH /api/tenants/me – update current tenant (and sync to linked User)
  // Allows updating the expanded fields too (same as landlord PATCH).
  // ============================================================
  app.patch("/api/tenants/me", async (req, res) => {
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });
    if (user.baseRole !== Role.TENANT) {
      return res.status(403).json({ error: "Only tenants can access this endpoint" });
    }

    const {
      name,
      email,
      phone,
      age,
      heightFeet,
      heightInches,
      weight,
      sex,
      hairColor,
      eyeColor,
      bodyBuild,
      markings,
      occupation,
      employer,
      income,
      creditScore,
      violations,
      notes,
    } = req.body || {};

    try {
      const existing = await prisma.tenant.findFirst({
        where: { userId: user.id, isArchived: false },
      });

      if (!existing) return res.status(404).json({ error: "Tenant profile not found" });

      const data = {};

      // name: if provided, must be non-empty string
      if (name !== undefined) {
        if (name === null) return res.status(400).json({ error: "name cannot be null" });
        if (typeof name !== "string") return res.status(400).json({ error: "name must be a string" });
        const trimmed = name.trim();
        if (!trimmed) return res.status(400).json({ error: "name is required" });
        data.name = trimmed;
      }

      // email: optional, but if provided must be valid; allow clearing with null/""
      if (email !== undefined) {
        const emailNorm = normalizeEmail(email);
        if (emailNorm === "__INVALID__") return res.status(400).json({ error: "email must be a string" });
        if (emailNorm && !isValidEmail(emailNorm)) {
          return res.status(400).json({ error: "email must be a valid email address" });
        }
        data.email = emailNorm; // may be null
      }

      // phone: optional, but if provided must be valid; allow clearing with null/""
      if (phone !== undefined) {
        const phoneNorm = normalizePhone(phone);
        if (phoneNorm === "__INVALID__") return res.status(400).json({ error: "phone must be a string" });
        if (phoneNorm && !isValidPhone(phoneNorm)) {
          return res.status(400).json({ error: "phone must be a valid phone number" });
        }
        data.phone = phoneNorm; // may be null
      }

      // numbers (optional)
      if (age !== undefined) {
        const v = parseIntOrNullOpt(age, { min: 0, max: 120 });
        if (v === "__INVALID__") return res.status(400).json({ error: "age must be an integer between 0 and 120" });
        data.age = v;
      }
      if (heightFeet !== undefined) {
        const v = parseIntOrNullOpt(heightFeet, { min: 0, max: 8 });
        if (v === "__INVALID__") return res.status(400).json({ error: "heightFeet must be an integer 0-8" });
        data.heightFeet = v;
      }
      if (heightInches !== undefined) {
        const v = parseIntOrNullOpt(heightInches, { min: 0, max: 11 });
        if (v === "__INVALID__") return res.status(400).json({ error: "heightInches must be an integer 0-11" });
        data.heightInches = v;
      }
      if (weight !== undefined) {
        const v = parseIntOrNullOpt(weight, { min: 0, max: 1500 });
        if (v === "__INVALID__") return res.status(400).json({ error: "weight must be an integer" });
        data.weight = v;
      }
      if (income !== undefined) {
        const v = parseIntOrNullOpt(income, { min: 0, max: 1000000000 });
        if (v === "__INVALID__") return res.status(400).json({ error: "income must be an integer" });
        data.income = v;
      }
      if (creditScore !== undefined) {
        const v = parseIntOrNullOpt(creditScore, { min: 0, max: 850 });
        if (v === "__INVALID__") return res.status(400).json({ error: "creditScore must be an integer 0-850" });
        data.creditScore = v;
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
      if (markings !== undefined) {
        const v = optionalTrimToNull(markings);
        if (v === "__INVALID__") return res.status(400).json({ error: "markings must be a string" });
        data.markings = v;
      }
      if (occupation !== undefined) {
        const v = optionalTrimToNull(occupation);
        if (v === "__INVALID__") return res.status(400).json({ error: "occupation must be a string" });
        data.occupation = v;
      }
      if (employer !== undefined) {
        const v = optionalTrimToNull(employer);
        if (v === "__INVALID__") return res.status(400).json({ error: "employer must be a string" });
        data.employer = v;
      }
      if (violations !== undefined) {
        const v = optionalTrimToNull(violations);
        if (v === "__INVALID__") return res.status(400).json({ error: "violations must be a string" });
        data.violations = v;
      }
      if (notes !== undefined) {
        const v = optionalTrimToNull(notes);
        if (v === "__INVALID__") return res.status(400).json({ error: "notes must be a string" });
        data.notes = v;
      }

      const updated = await prisma.tenant.update({
        where: { id: existing.id },
        data,
      });

      // Sync to linked User (keep your original intent: don't null out user.email)
      if (updated.userId) {
        try {
          const userUpdateData = {};

          if (data.name !== undefined) userUpdateData.name = data.name;

          if (data.email !== undefined) {
            if (data.email === null) {
              // do not null out user.email
            } else {
              userUpdateData.email = data.email;
            }
          }

          if (Object.keys(userUpdateData).length) {
            await prisma.user.update({
              where: { id: updated.userId },
              data: userUpdateData,
            });
          }
        } catch (userErr) {
          console.error("Error syncing PATCH /api/tenants/me to User:", userErr);
          if (userErr.code === "P2002") {
            return res.status(400).json({
              error: "Cannot change tenant email because it is already used by another user.",
            });
          }
        }
      }

      res.json(shapeTenant(updated));
    } catch (err) {
      console.error("Error in PATCH /api/tenants/me", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET /api/tenants/:id – detail, including leases + properties + linked residents
  // ============================================================
  app.get("/api/tenants/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });
    if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
      return res.status(403).json({ error: "You are not allowed to view tenant details." });
    }

    try {
      const tenant = await prisma.tenant.findUnique({
        where: { id },
        include: {
          leaseTenants: {
            orderBy: { startDate: "desc" },
            include: { lease: { include: { property: true } } },
          },
          occupantLinks: { where: { occupant: { isArchived: false } }, include: { occupant: true } },
          petLinks: { where: { pet: { isArchived: false } }, include: { pet: true } },
          emergencyContactLinks: { where: { emergencyContact: { isArchived: false } }, include: { emergencyContact: true } },
          vehicleLinks: { where: { vehicle: { isArchived: false } }, include: { vehicle: true } },
        },
      });

      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      if (user.baseRole === Role.LANDLORD) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to view this tenant." });
        }
      }

      const occupants = (tenant.occupantLinks || []).map((l) => l.occupant).filter(Boolean);
      const pets = (tenant.petLinks || []).map((l) => l.pet).filter(Boolean);
      const emergencyContacts = (tenant.emergencyContactLinks || []).map((l) => l.emergencyContact).filter(Boolean);
      const vehicles = (tenant.vehicleLinks || []).map((l) => l.vehicle).filter(Boolean);

      res.json({ ...tenant, occupants, pets, emergencyContacts, vehicles });
    } catch (err) {
      console.error("Error in GET /api/tenants/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET /api/tenants – list tenants (scoped by landlord)
  // ============================================================
  app.get("/api/tenants", async (req, res) => {
    try {
      const user = req.user || null;
      const where = {};

      if (user && user.baseRole === Role.LANDLORD) where.landlordId = user.id;

      const tenants = await prisma.tenant.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });

      res.json(tenants.map(shapeTenant));
    } catch (err) {
      console.error("Error in GET /api/tenants", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // POST /api/tenants – create tenant (and link/create TENANT user if email present)
  // Supports expanded fields from schema.prisma too.
  // ============================================================
  app.post("/api/tenants", async (req, res) => {
    const {
      name,
      email,
      phone,
      age,
      heightFeet,
      heightInches,
      weight,
      sex,
      hairColor,
      eyeColor,
      bodyBuild,
      markings,
      occupation,
      enployer,
      income,
      creditScore,
      violations,
      notes,
    } = req.body || {};

    if (name === null) return res.status(400).json({ error: "name cannot be null" });
    if (typeof name !== "string" || !name.trim()) {
      return res.status(400).json({ error: "name is required" });
    }
    const trimmedName = name.trim();

    // auth required
    const authUser = req.user || null;
    if (!authUser) return res.status(401).json({ error: "Unauthorized" });

    // optional email/phone, but valid if present
    const emailNorm = normalizeEmail(email);
    if (emailNorm === "__INVALID__") return res.status(400).json({ error: "email must be a string" });
    if (emailNorm && !isValidEmail(emailNorm)) {
      return res.status(400).json({ error: "email must be a valid email address" });
    }

    const phoneNorm = normalizePhone(phone);
    if (phoneNorm === "__INVALID__") return res.status(400).json({ error: "phone must be a string" });
    if (phoneNorm && !isValidPhone(phoneNorm)) {
      return res.status(400).json({ error: "phone must be a valid phone number" });
    }

    // numbers
    const ageVal = parseIntOrNullOpt(age, { min: 0, max: 120 });
    if (ageVal === "__INVALID__") return res.status(400).json({ error: "age must be an integer between 0 and 120" });

    const heightFeetVal = parseIntOrNullOpt(heightFeet, { min: 0, max: 8 });
    if (heightFeetVal === "__INVALID__") return res.status(400).json({ error: "heightFeet must be an integer 0-8" });

    const heightInchesVal = parseIntOrNullOpt(heightInches, { min: 0, max: 11 });
    if (heightInchesVal === "__INVALID__") return res.status(400).json({ error: "heightInches must be an integer 0-11" });

    const weightVal = parseIntOrNullOpt(weight, { min: 0, max: 1500 });
    if (weightVal === "__INVALID__") return res.status(400).json({ error: "weight must be an integer" });

    const incomeVal = parseIntOrNullOpt(income, { min: 0, max: 1000000000 });
    if (incomeVal === "__INVALID__") return res.status(400).json({ error: "income must be an integer" });

    const creditScoreVal = parseIntOrNullOpt(creditScore, { min: 0, max: 850 });
    if (creditScoreVal === "__INVALID__") return res.status(400).json({ error: "creditScore must be an integer 0-850" });

    // enums
    const sexVal = parseEnumOrNullOpt(sex, SEX);
    if (sexVal === "__INVALID__") return res.status(400).json({ error: "sex is invalid" });

    const hairVal = parseEnumOrNullOpt(hairColor, HAIR);
    if (hairVal === "__INVALID__") return res.status(400).json({ error: "hairColor is invalid" });

    const eyeVal = parseEnumOrNullOpt(eyeColor, EYE);
    if (eyeVal === "__INVALID__") return res.status(400).json({ error: "eyeColor is invalid" });

    const bodyVal = parseEnumOrNullOpt(bodyBuild, BODY);
    if (bodyVal === "__INVALID__") return res.status(400).json({ error: "bodyBuild is invalid" });

    // strings
    const markingsVal = optionalTrimToNull(markings);
    if (markingsVal === "__INVALID__") return res.status(400).json({ error: "markings must be a string" });

    const occupationVal = optionalTrimToNull(occupation);
    if (occupationVal === "__INVALID__") return res.status(400).json({ error: "occupation must be a string" });

    const employerVal = optionalTrimToNull(employer);
    if (employerVal === "__INVALID__") return res.status(400).json({ error: "employer must be a string" });

    const violationsVal = optionalTrimToNull(violations);
    if (violationsVal === "__INVALID__") return res.status(400).json({ error: "violations must be a string" });

    const notesVal = optionalTrimToNull(notes);
    if (notesVal === "__INVALID__") return res.status(400).json({ error: "notes must be a string" });

    try {
      let linkedUser = null;

      // If we got an email, try to link/create a User with baseRole = TENANT
      if (emailNorm) {
        const existingUser = await prisma.user.findUnique({
          where: { email: emailNorm },
        });

        if (existingUser) {
          if (existingUser.baseRole !== Role.TENANT) {
            return res.status(400).json({
              error: "A user with this email already exists but is not a tenant.",
            });
          }

          const existingTenantForUser = await prisma.tenant.findFirst({
            where: { userId: existingUser.id },
          });

          if (existingTenantForUser) {
            return res.status(400).json({
              error: "A tenant profile already exists for this email.",
            });
          }

          linkedUser = existingUser;
        } else {
          const tempPassword = generateTempPassword();
          const passwordHash = await bcrypt.hash(tempPassword, 10);

          linkedUser = await prisma.user.create({
            data: {
              email: emailNorm,
              name: trimmedName,
              passwordHash,
              baseRole: Role.TENANT,
              status: UserStatus.INVITED,
              isArchived: false,
              createdById: authUser.id,
            },
          });

          console.log(`Created TENANT user ${emailNorm} with temp password (hidden)`);
        }
      }

      const created = await prisma.tenant.create({
        data: {
          name: trimmedName,
          email: emailNorm ?? null,
          phone: phoneNorm ?? null,

          age: ageVal ?? null,
          heightFeet: heightFeetVal ?? null,
          heightInches: heightInchesVal ?? null,
          weight: weightVal ?? null,

          sex: sexVal ?? null,
          hairColor: hairVal ?? null,
          eyeColor: eyeVal ?? null,
          bodyBuild: bodyVal ?? null,

          markings: markingsVal ?? null,
          occupation: occupationVal ?? null,
          employer: employerVal ?? null,
          income: incomeVal ?? null,
          creditScore: creditScoreVal ?? null,
          violations: violationsVal ?? null,
          notes: notesVal ?? null,

          userId: linkedUser ? linkedUser.id : null,

          landlordId: authUser.id,
          createdById: authUser.id,
        },
      });

      res.status(201).json(shapeTenant(created));
    } catch (err) {
      console.error("Error in POST /api/tenants", err);

      if (err.code === "P2002") {
        return res.status(400).json({ error: "Email is already in use by another user." });
      }

      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // PATCH /api/tenants/:id – update tenant (and sync to linked User)
  // Supports expanded fields from schema.prisma
  // ============================================================
  app.patch("/api/tenants/:id", async (req, res) => {
    const { id } = req.params;

    const {
      name,
      email,
      phone,
      age,
      heightFeet,
      heightInches,
      weight,
      sex,
      hairColor,
      eyeColor,
      bodyBuild,
      markings,
      occupation,
      employer,
      income,
      creditScore,
      violations,
      notes,
    } = req.body || {};

    const user = req.user || null;
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const existing = await prisma.tenant.findUnique({ where: { id } });
      if (!existing) return res.status(404).json({ error: "Tenant not found" });

      if (
        user.baseRole === Role.LANDLORD &&
        existing.landlordId &&
        existing.landlordId !== user.id
      ) {
        return res.status(403).json({ error: "You are not allowed to update this tenant." });
      }

      const data = {};

      // name: if provided, MUST be non-empty string
      if (name !== undefined) {
        if (name === null) return res.status(400).json({ error: "name cannot be null" });
        if (typeof name !== "string") return res.status(400).json({ error: "name must be a string" });
        const trimmed = name.trim();
        if (!trimmed) return res.status(400).json({ error: "name is required" });
        data.name = trimmed;
      }

      // email: optional but valid if present; allow clearing with null/""
      if (email !== undefined) {
        const emailNorm = normalizeEmail(email);
        if (emailNorm === "__INVALID__") return res.status(400).json({ error: "email must be a string" });
        if (emailNorm && !isValidEmail(emailNorm)) {
          return res.status(400).json({ error: "email must be a valid email address" });
        }
        data.email = emailNorm; // may be null
      }

      // phone: optional but valid if present; allow clearing with null/""
      if (phone !== undefined) {
        const phoneNorm = normalizePhone(phone);
        if (phoneNorm === "__INVALID__") return res.status(400).json({ error: "phone must be a string" });
        if (phoneNorm && !isValidPhone(phoneNorm)) {
          return res.status(400).json({ error: "phone must be a valid phone number" });
        }
        data.phone = phoneNorm; // may be null
      }

      // numbers (optional)
      if (age !== undefined) {
        const v = parseIntOrNullOpt(age, { min: 0, max: 120 });
        if (v === "__INVALID__") return res.status(400).json({ error: "age must be an integer between 0 and 120" });
        data.age = v;
      }
      if (heightFeet !== undefined) {
        const v = parseIntOrNullOpt(heightFeet, { min: 0, max: 8 });
        if (v === "__INVALID__") return res.status(400).json({ error: "heightFeet must be an integer 0-8" });
        data.heightFeet = v;
      }
      if (heightInches !== undefined) {
        const v = parseIntOrNullOpt(heightInches, { min: 0, max: 11 });
        if (v === "__INVALID__") return res.status(400).json({ error: "heightInches must be an integer 0-11" });
        data.heightInches = v;
      }
      if (weight !== undefined) {
        const v = parseIntOrNullOpt(weight, { min: 0, max: 1500 });
        if (v === "__INVALID__") return res.status(400).json({ error: "weight must be an integer" });
        data.weight = v;
      }
      if (income !== undefined) {
        const v = parseIntOrNullOpt(income, { min: 0, max: 1000000000 });
        if (v === "__INVALID__") return res.status(400).json({ error: "income must be an integer" });
        data.income = v;
      }
      if (creditScore !== undefined) {
        const v = parseIntOrNullOpt(creditScore, { min: 0, max: 850 });
        if (v === "__INVALID__") return res.status(400).json({ error: "creditScore must be an integer 0-850" });
        data.creditScore = v;
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
      if (markings !== undefined) {
        const v = optionalTrimToNull(markings);
        if (v === "__INVALID__") return res.status(400).json({ error: "markings must be a string" });
        data.markings = v;
      }
      if (occupation !== undefined) {
        const v = optionalTrimToNull(occupation);
        if (v === "__INVALID__") return res.status(400).json({ error: "occupation must be a string" });
        data.occupation = v;
      }
      if (employer !== undefined) {
        const v = optionalTrimToNull(employer);
        if (v === "__INVALID__") return res.status(400).json({ error: "employer must be a string" });
        data.employer = v;
      }
      if (violations !== undefined) {
        const v = optionalTrimToNull(violations);
        if (v === "__INVALID__") return res.status(400).json({ error: "violations must be a string" });
        data.violations = v;
      }
      if (notes !== undefined) {
        const v = optionalTrimToNull(notes);
        if (v === "__INVALID__") return res.status(400).json({ error: "notes must be a string" });
        data.notes = v;
      }

      const updated = await prisma.tenant.update({
        where: { id },
        data,
      });

      // Sync linked User
      if (updated.userId) {
        try {
          const userUpdateData = {};

          if (data.name !== undefined) userUpdateData.name = data.name;

          if (data.email !== undefined) {
            if (data.email === null) {
              // Do NOT null out user.email
            } else {
              userUpdateData.email = data.email;
            }
          }

          if (Object.keys(userUpdateData).length > 0) {
            await prisma.user.update({
              where: { id: updated.userId },
              data: userUpdateData,
            });
          }
        } catch (userErr) {
          console.error("Error syncing Tenant update to User:", userErr);

          if (userErr.code === "P2002") {
            return res.status(400).json({
              error: "Cannot change tenant email because it is already used by another user.",
            });
          }
        }
      }

      res.json(shapeTenant(updated));
    } catch (err) {
      console.error("Error in PATCH /api/tenants/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // PATCH /api/tenants/:id/archive – toggle archive flag (and archive linked User)
  // ============================================================
  app.patch("/api/tenants/:id/archive", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const existing = await prisma.tenant.findUnique({ where: { id } });
      if (!existing) return res.status(404).json({ error: "Tenant not found" });

      if (
        user.baseRole === Role.LANDLORD &&
        existing.landlordId &&
        existing.landlordId !== user.id
      ) {
        return res.status(403).json({ error: "You are not allowed to archive this tenant." });
      }

      const currentlyArchived = !!existing.isArchived;
      const isSysAdmin = user.baseRole === Role.SYSADMIN;

      if (currentlyArchived && !isSysAdmin) {
        return res.status(403).json({
          error: "Only a system administrator can unarchive a tenant.",
        });
      }

      const nextArchived = !currentlyArchived;

      const updated = await prisma.tenant.update({
        where: { id },
        data: { isArchived: nextArchived },
      });

      if (updated.userId) {
        try {
          await prisma.user.update({
            where: { id: updated.userId },
            data: { isArchived: nextArchived },
          });
        } catch (userErr) {
          console.error("Error syncing Tenant archive state to User:", userErr);
        }
      }

      res.json(shapeTenant(updated));
    } catch (err) {
      console.error("Error in PATCH /api/tenants/:id/archive", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // Linking endpoints (unchanged from your file)
  // ============================================================

  // POST /api/tenants/:tenantId/occupants/:occupantId/link
  app.post("/api/tenants/:tenantId/occupants/:occupantId/link", async (req, res) => {
    const { tenantId, occupantId } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const occupant = await prisma.occupant.findUnique({ where: { id: occupantId } });
      if (!occupant) return res.status(404).json({ error: "Occupant not found" });

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this tenant." });
        }
        if (occupant.landlordId && occupant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this occupant." });
        }
      }

      await prisma.tenantOccupant.upsert({
        where: { tenantId_occupantId: { tenantId, occupantId } },
        update: {},
        create: { tenantId, occupantId },
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in POST /api/tenants/:tenantId/occupants/:occupantId/link", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // DELETE /api/tenants/:tenantId/occupants/:occupantId/unlink
  app.delete("/api/tenants/:tenantId/occupants/:occupantId/unlink", async (req, res) => {
    const { tenantId, occupantId } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const occupant = await prisma.occupant.findUnique({ where: { id: occupantId } });
      if (!occupant) return res.status(404).json({ error: "Occupant not found" });

      if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
        return res.status(403).json({ error: "Forbidden" });
      }

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this tenant." });
        }
        if (occupant.landlordId && occupant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this occupant." });
        }
      }

      try {
        await prisma.tenantOccupant.delete({
          where: { tenantId_occupantId: { tenantId, occupantId } },
        });
      } catch (deleteErr) {
        console.error("No TenantOccupant link to delete", deleteErr);
        return res.status(404).json({ error: "Tenant/occupant link not found" });
      }

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in DELETE /api/tenants/:tenantId/occupants/:occupantId/unlink", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // POST /api/tenants/:tenantId/pets/:petId/link
  app.post("/api/tenants/:tenantId/pets/:petId/link", async (req, res) => {
    const { tenantId, petId } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const pet = await prisma.pet.findUnique({ where: { id: petId } });
      if (!pet) return res.status(404).json({ error: "Pet not found" });

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this tenant." });
        }
        if (pet.landlordId && pet.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this pet." });
        }
      }

      await prisma.tenantPet.upsert({
        where: { tenantId_petId: { tenantId, petId } },
        update: {},
        create: { tenantId, petId },
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in POST /api/tenants/:tenantId/pets/:petId/link", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // DELETE /api/tenants/:tenantId/pets/:petId/unlink
  app.delete("/api/tenants/:tenantId/pets/:petId/unlink", async (req, res) => {
    const { tenantId, petId } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const pet = await prisma.pet.findUnique({ where: { id: petId } });
      if (!pet) return res.status(404).json({ error: "Pet not found" });

      if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
        return res.status(403).json({ error: "Forbidden" });
      }

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this tenant." });
        }
        if (pet.landlordId && pet.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this pet." });
        }
      }

      try {
        await prisma.tenantPet.delete({
          where: { tenantId_petId: { tenantId, petId } },
        });
      } catch (deleteErr) {
        console.error("No TenantPet link to delete", deleteErr);
        return res.status(404).json({ error: "Tenant/pet link not found" });
      }

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in DELETE /api/tenants/:tenantId/pets/:petId/unlink", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // POST /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/link
  app.post("/api/tenants/:tenantId/emergencyContacts/:emergencyContactId/link", async (req, res) => {
    const { tenantId, emergencyContactId } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const emergencyContact = await prisma.emergencyContact.findUnique({ where: { id: emergencyContactId } });
      if (!emergencyContact) return res.status(404).json({ error: "EmergencyContact not found" });

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this tenant." });
        }
        if (emergencyContact.landlordId && emergencyContact.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this emergency contact." });
        }
      }

      await prisma.tenantEmergencyContact.upsert({
        where: { tenantId_emergencyContactId: { tenantId, emergencyContactId } },
        update: {},
        create: { tenantId, emergencyContactId },
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in POST /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/link", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // DELETE /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/unlink
  app.delete("/api/tenants/:tenantId/emergencyContacts/:emergencyContactId/unlink", async (req, res) => {
    const { tenantId, emergencyContactId } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const emergencyContact = await prisma.emergencyContact.findUnique({ where: { id: emergencyContactId } });
      if (!emergencyContact) return res.status(404).json({ error: "Emergency Contact not found" });

      if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
        return res.status(403).json({ error: "Forbidden" });
      }

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this tenant." });
        }
        if (emergencyContact.landlordId && emergencyContact.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this emergency contact." });
        }
      }

      try {
        await prisma.tenantEmergencyContact.delete({
          where: { tenantId_emergencyContactId: { tenantId, emergencyContactId } },
        });
      } catch (deleteErr) {
        console.error("No TenantEmergencyContact link to delete", deleteErr);
        return res.status(404).json({ error: "Tenant/emergency contact link not found" });
      }

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in DELETE /api/tenants/:tenantId/emergencyContacts/:emergencyContactId/unlink", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // POST /api/tenants/:tenantId/vehicles/:vehicleId/link
  app.post("/api/tenants/:tenantId/vehicles/:vehicleId/link", async (req, res) => {
    const { tenantId, vehicleId } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicleId } });
      if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this tenant." });
        }
        if (vehicle.landlordId && vehicle.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this vehicle." });
        }
      }

      await prisma.tenantVehicle.upsert({
        where: { tenantId_vehicleId: { tenantId, vehicleId } },
        update: {},
        create: { tenantId, vehicleId },
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in POST /api/tenants/:tenantId/vehicles/:vehicleId/link", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // DELETE /api/tenants/:tenantId/vehicles/:vehicleId/unlink
  app.delete("/api/tenants/:tenantId/vehicles/:vehicleId/unlink", async (req, res) => {
    const { tenantId, vehicleId } = req.params;
    const user = req.user || null;

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicleId } });
      if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });

      if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
        return res.status(403).json({ error: "Forbidden" });
      }

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this tenant." });
        }
        if (vehicle.landlordId && vehicle.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this vehicle." });
        }
      }

      try {
        await prisma.tenantVehicle.delete({
          where: { tenantId_vehicleId: { tenantId, vehicleId } },
        });
      } catch (deleteErr) {
        console.error("No TenantVehicle link to delete", deleteErr);
        return res.status(404).json({ error: "Tenant/vehicle link not found" });
      }

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in DELETE /api/tenants/:tenantId/vehicles/:vehicleId/unlink", err);
      return res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = {
  registerTenantRoutes,
};
