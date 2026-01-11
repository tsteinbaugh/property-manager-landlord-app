// backend/src/utils/emergencyContactFields.js
const {
  INVALID,
  isValidEmail,
  isValidPhone,
  optionalTrimToNull,
  normalizeEmail,
  normalizePhone,
  normalizeState,
  normalizeZipUS,
  requiredTrimmedString,
} = require("@utils/validation.js");

// POST: requires name, email, phone
function parseEmergencyContactPost(body) {
  const src = body || {};

  const name = requiredTrimmedString(src.name);
  if (name === INVALID) return { error: "name is required" };

  const email = normalizeEmail(src.email);
  if (email === INVALID) return { error: "email must be a string" };
  if (!email) return { error: "email is required" };
  if (!isValidEmail(email)) return { error: "email must be a valid email address" };

  const phone = normalizePhone(src.phone);
  if (phone === INVALID) return { error: "phone must be a string" };
  if (!phone) return { error: "phone is required" };
  if (!isValidPhone(phone)) return { error: "phone must be a valid phone number" };

  const relation = optionalTrimToNull(src.relation);
  if (relation === INVALID) return { error: "relation must be a string" };

  const notes = optionalTrimToNull(src.notes);
  if (notes === INVALID) return { error: "notes must be a string" };

  const address1 = optionalTrimToNull(src.address1);
  if (address1 === INVALID) return { error: "address1 must be a string" };

  const address2 = optionalTrimToNull(src.address2);
  if (address2 === INVALID) return { error: "address2 must be a string" };  

  const city = optionalTrimToNull(src.city);
  if (city === INVALID) return { error: "city must be a string" };

  // Optional: state (valid US state) - allow null/"" => null
  const stateNorm = normalizeState(src.state);
  if (stateNorm === INVALID) {
    return { error: "state must be a valid US state (2-letter) or full name, or DC" };
  }

  // Optional: postalCode/zip (ZIP5 or ZIP+4) - allow null/"" => null
  const zipInput = src.postalCode ?? src.zip;
  const zipNorm = normalizeZipUS(zipInput);
  if (zipNorm === INVALID) {
    return { error: "postalCode must be a valid US ZIP (12345 or 12345-6789)" };
  }

  return {
    data: {
      name,
      email,
      phone,

      relation: relation ?? null,
      notes: notes ?? null,
      address1: address1 ?? null,
      address2: address2 ?? null,
      city: city ?? null,
      state: stateNorm ?? null,
      postalCode: zipNorm ?? null,
    },
  };
}

// PATCH: optional fields; BUT email/phone are REQUIRED overall (cannot end up blank)
// - if email/phone provided, must be non-empty+valid (no clearing)
function parseEmergencyContactPatch(body, { existing } = {}) {
  const src = body || {};
  const data = {};

  if (src.name !== undefined) {
    const name = requiredTrimmedString(src.name);
    if (name === INVALID) return { error: "name is required" };
    data.name = name;
  }

  if (src.relation !== undefined) {
    const v = optionalTrimToNull(src.relation);
    if (v === INVALID) return { error: "relation must be a string" };
    data.relation = v;
  }

  if (src.address1 !== undefined) {
    const v = optionalTrimToNull(src.address1);
    if (v === INVALID) return { error: "address1 must be a string" };
    data.address1 = v;
  }

  if (src.address2 !== undefined) {
    const v = optionalTrimToNull(src.address2);
    if (v === INVALID) return { error: "address2 must be a string" };
    data.address2 = v;
  }  

  if (src.city !== undefined) {
    const v = optionalTrimToNull(src.city);
    if (v === INVALID) return { error: "city must be a string" };
    data.city = v;
  }

  if (src.notes !== undefined) {
    const v = optionalTrimToNull(src.notes);
    if (v === INVALID) return { error: "notes must be a string" };
    data.notes = v;
  }

  if (src.state !== undefined) {
    const stateNorm = normalizeState(src.state);
    if (stateNorm === INVALID) {
      return { error: "state must be a valid US state (2-letter) or full name, or DC" };
    }
    data.state = stateNorm; // may be null
  }

  const zipInput = src.postalCode ?? src.zip;
  if (zipInput !== undefined) {
    const zipNorm = normalizeZipUS(zipInput);
    if (zipNorm === INVALID) {
      return { error: "postalCode must be a valid US ZIP (12345 or 12345-6789)" };
    }
    data.postalCode = zipNorm; // may be null
  }

  // phone: required overall; if provided in PATCH must be non-empty and valid
  if (src.phone !== undefined) {
    const phone = normalizePhone(src.phone);
    if (phone === INVALID) return { error: "phone must be a string" };
    if (!phone) return { error: "phone is required" };
    if (!isValidPhone(phone)) return { error: "phone must be a valid phone number" };
    data.phone = phone;
  }

  // email: required overall; if provided in PATCH must be non-empty and valid
  if (src.email !== undefined) {
    const email = normalizeEmail(src.email);
    if (email === INVALID) return { error: "email must be a string" };
    if (!email) return { error: "email is required" };
    if (!isValidEmail(email)) return { error: "email must be a valid email address" };
    data.email = email;
  }

  // Final guard: after patch, email+phone must be present+valid
  const finalPhone =
    data.phone !== undefined ? data.phone : existing?.phone;
  const finalEmail =
    data.email !== undefined ? data.email : existing?.email;

  if (!finalPhone) return { error: "phone is required" };
  if (!isValidPhone(finalPhone)) return { error: "phone must be a valid phone number" };

  if (!finalEmail) return { error: "email is required" };
  if (!isValidEmail(finalEmail)) return { error: "email must be a valid email address" };

  return { data };
}

module.exports = {
  parseEmergencyContactPost,
  parseEmergencyContactPatch,
};
