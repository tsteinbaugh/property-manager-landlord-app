// backend/src/routes/emergencyContacts.routes.js
const { Role } = require("@prisma/client");

function registerEmergencyContactRoutes(app, prisma, { shapeEmergencyContact }) {

// ============================================================
// Helpers (drop near top of emergencyContacts.routes.js)
// ============================================================
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

// Returns "" if invalid, otherwise "12345" or "12345-6789"
function normalizeZipUS(input) {
  if (typeof input !== "string") return "";
  const digits = input.replace(/\D/g, "");
  if (digits.length === 5) return digits;
  if (digits.length === 9) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  return "";
}

const normalizeEmail = (v) =>
  typeof v === "string" ? v.trim().toLowerCase() : "";
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const normalizePhone = (v) => {
  if (typeof v !== "string") return "";
  const raw = v.trim();
  // keep digits and leading +
  return raw.replace(/(?!^\+)[^\d]/g, "");
};
const isValidPhone = (v) => /^\+?[1-9]\d{7,14}$/.test(v); // E.164-ish

const optionalTrimToNull = (v) => {
  if (v === null) return null;
  if (v === undefined) return undefined;
  if (typeof v !== "string") return undefined;
  const t = v.trim();
  return t ? t : null;
};

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
  // CREATE EMERGENCY CONTACT
  // POST /api/emergencyContacts
  // Body: { name, phone, email, address1?, city?, state?, postalCode?/zip?, relation?, notes? }
  // ============================================================
  app.post("/api/emergencyContacts", async (req, res) => {
    const {
      name,
      phone,
      email,
      address1,
      city,
      state,
      postalCode,
      zip, // alias
      relation,
      notes,
    } = req.body || {};

    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const cleanName = typeof name === "string" ? name.trim() : "";
    if (!cleanName) {
      return res.status(400).json({ error: "name is required" });
    }

    // REQUIRED: email
    const cleanEmail = normalizeEmail(email);
    if (!cleanEmail) {
      return res.status(400).json({ error: "email is required" });
    }
    if (!isValidEmail(cleanEmail)) {
      return res.status(400).json({ error: "email must be a valid email address" });
    }

    // REQUIRED: phone
    const cleanPhoneRaw = typeof phone === "string" ? phone.trim() : "";
    if (!cleanPhoneRaw) {
      return res.status(400).json({ error: "phone is required" });
    }
    const cleanPhone = normalizePhone(phone);
    if (!isValidPhone(cleanPhone)) {
      return res.status(400).json({ error: "phone must be a valid phone number" });
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

    // Optional: zip/postalCode (ZIP5 or ZIP+4)
    let postal = null;
    const zipInput = postalCode ?? zip;
    const zipVal = optionalTrimToNull(zipInput);
    if (zipVal !== undefined) {
      if (zipVal === null) {
        postal = null;
      } else {
        const normalized = normalizeZipUS(zipVal);
        if (!normalized) {
          return res
            .status(400)
            .json({ error: "postalCode must be a valid US ZIP (12345 or 12345-6789)" });
        }
        postal = normalized;
      }
    }

    try {
      const data = {
        name: cleanName,

        // REQUIRED + normalized
        phone: cleanPhone,
        email: cleanEmail,

        // Optional fields
        address1: optionalTrimToNull(address1) ?? null,
        city: optionalTrimToNull(city) ?? null,
        state: stateCode,
        postalCode: postal,
        notes: optionalTrimToNull(notes) ?? null,
        relation: optionalTrimToNull(relation) ?? null,

        landlordId: user.id,
        createdById: user.id,
      };

      const created = await prisma.emergencyContact.create({ data });
      return res.status(201).json(shapeEmergencyContact(created));
    } catch (err) {
      console.error("Error in POST /api/emergencyContacts", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // UPDATE EMERGENCY CONTACT
  // PATCH /api/emergencyContacts/:id
  // Body: partial { name?, phone?, email?, relation?, address1?, city?, state?, postalCode?/zip?, notes? }
  // ============================================================
  app.patch("/api/emergencyContacts/:id", async (req, res) => {
    const { id } = req.params;
  
    const {
      name,
      phone,
      email,
      relation,
      address1,
      city,
      state,
      postalCode,
      zip, // alias
      notes,
    } = req.body || {};
  
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
    
      // relation: optional
      if (relation !== undefined) {
        data.relation = optionalTrimToNull(relation);
      }
    
      // address fields + notes: optional
      if (address1 !== undefined) data.address1 = optionalTrimToNull(address1);
      if (city !== undefined) data.city = optionalTrimToNull(city);
      if (notes !== undefined) data.notes = optionalTrimToNull(notes);
    
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
    
      // zip/postalCode: optional, but if provided must be ZIP5 or ZIP+4; store normalized
      const zipInput = postalCode ?? zip;
      if (zipInput !== undefined) {
        const zipVal = optionalTrimToNull(zipInput);
        if (zipVal === null) {
          data.postalCode = null;
        } else if (typeof zipVal === "string") {
          const normalized = normalizeZipUS(zipVal);
          if (!normalized) {
            return res
              .status(400)
              .json({ error: "postalCode must be a valid US ZIP (12345 or 12345-6789)" });
          }
          data.postalCode = normalized;
        }
      }
    
      // phone: REQUIRED overall; if provided in PATCH, must be valid + non-empty + non-null
      if (phone !== undefined) {
        if (phone === null) {
          return res.status(400).json({ error: "phone cannot be null" });
        }
        if (typeof phone !== "string" || !phone.trim()) {
          return res.status(400).json({ error: "phone is required" });
        }
        const cleaned = normalizePhone(phone);
        if (!isValidPhone(cleaned)) {
          return res.status(400).json({ error: "phone must be a valid phone number" });
        }
        data.phone = cleaned;
      }
    
      // email: REQUIRED overall; if provided in PATCH, must be valid + non-empty + non-null
      if (email !== undefined) {
        if (email === null) {
          return res.status(400).json({ error: "email cannot be null" });
        }
        if (typeof email !== "string" || !email.trim()) {
          return res.status(400).json({ error: "email is required" });
        }
        const cleaned = normalizeEmail(email);
        if (!isValidEmail(cleaned)) {
          return res.status(400).json({ error: "email must be a valid email address" });
        }
        data.email = cleaned;
      }
    
      // ---- final guard: phone/email must exist + be valid after patch ----
      const finalPhone =
        data.phone !== undefined ? data.phone : (existing.phone || "");
      const finalEmail =
        data.email !== undefined ? data.email : (existing.email || "");
    
      if (!finalPhone) {
        return res.status(400).json({ error: "phone is required" });
      }
      if (!isValidPhone(finalPhone)) {
        return res.status(400).json({ error: "phone must be a valid phone number" });
      }
    
      if (!finalEmail) {
        return res.status(400).json({ error: "email is required" });
      }
      if (!isValidEmail(finalEmail)) {
        return res.status(400).json({ error: "email must be a valid email address" });
      }
    
      const updated = await prisma.emergencyContact.update({
        where: { id },
        data,
      });
    
      return res.json(shapeEmergencyContact(updated));
    } catch (err) {
      console.error("Error in PATCH /api/emergencyContacts/:id", err);
      return res.status(500).json({ error: "Server error" });
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
        data: { isArchived: !currentlyArchived },
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
