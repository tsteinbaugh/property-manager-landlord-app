// backend/src/utils/occupantFields.js
const {
  isValidEmail,
  isValidPhone,
  optionalTrimToNull,
  normalizeEmail,
  normalizePhone,
  parseIntOrNullOpt,
  parseEnumOrNullOpt,
  requiredTrimmedString,
} = require("@utils/validation.js");

const { SEX, HAIR_COLOR, EYE_COLOR, BODY_BUILD } =
  require("@shared/residentPhysicalDescription.enums.js");

// POST: requires name. email/phone optional but if provided must validate.
function parseOccupantPost(body) {
  const src = body || {};

  const name = requiredTrimmedString(src.name);
  if (name === "__INVALID__") return { error: "name is required" };

  const email = normalizeEmail(src.email);
  if (email === "__INVALID__") return { error: "email must be a string" };
  if (email && !isValidEmail(email)) return { error: "email must be a valid email address" };

  const phone = normalizePhone(src.phone);
  if (phone === "__INVALID__") return { error: "phone must be a string" };
  if (phone && !isValidPhone(phone)) return { error: "phone must be a valid phone number" };

  const relation = optionalTrimToNull(src.relation);
  if (relation === "__INVALID__") return { error: "relation must be a string" };

  const markings = optionalTrimToNull(src.markings);
  if (markings === "__INVALID__") return { error: "markings must be a string" };

  const notes = optionalTrimToNull(src.notes);
  if (notes === "__INVALID__") return { error: "notes must be a string" };

  const violations = optionalTrimToNull(src.violations);
  if (violations === "__INVALID__") return { error: "violations must be a string" };

  // numbers
  const ageVal = parseIntOrNullOpt(src.age, { min: 0, max: 120 });
  if (ageVal === "__INVALID__") return { error: "age must be an integer between 0 and 120" };

  const heightFeetVal = parseIntOrNullOpt(src.heightFeet, { min: 0, max: 8 });
  if (heightFeetVal === "__INVALID__") return { error: "heightFeet must be an integer 0-8" };

  const heightInchesVal = parseIntOrNullOpt(src.heightInches, { min: 0, max: 11 });
  if (heightInchesVal === "__INVALID__") return { error: "heightInches must be an integer 0-11" };

  const weightVal = parseIntOrNullOpt(src.weight, { min: 0, max: 1500 });
  if (weightVal === "__INVALID__") return { error: "weight must be an integer" };

  // enums
  const sexVal = parseEnumOrNullOpt(src.sex, SEX);
  if (sexVal === "__INVALID__") return { error: "sex is invalid" };

  const hairVal = parseEnumOrNullOpt(src.hairColor, HAIR_COLOR);
  if (hairVal === "__INVALID__") return { error: "hairColor is invalid" };

  const eyeVal = parseEnumOrNullOpt(src.eyeColor, EYE_COLOR);
  if (eyeVal === "__INVALID__") return { error: "eyeColor is invalid" };

  const bodyVal = parseEnumOrNullOpt(src.bodyBuild, BODY_BUILD);
  if (bodyVal === "__INVALID__") return { error: "bodyBuild is invalid" };

  return {
    data: {
      name,
      phone: phone ?? null,
      email: email ?? null,
      relation: relation ?? null,

      age: ageVal ?? null,
      heightFeet: heightFeetVal ?? null,
      heightInches: heightInchesVal ?? null,
      weight: weightVal ?? null,

      sex: sexVal ?? null,
      hairColor: hairVal ?? null,
      eyeColor: eyeVal ?? null,
      bodyBuild: bodyVal ?? null,

      markings: markings ?? null,
      notes: notes ?? null,
      violations: violations ?? null,
    },
  };
}

// PATCH: optional fields; name if provided must be non-empty. email/phone optional but validate.
// allows clearing optional strings via null/""
function parseOccupantPatch(body) {
  const src = body || {};
  const data = {};

  if (src.name !== undefined) {
    const name = requiredTrimmedString(src.name);
    if (name === "__INVALID__") return { error: "name is required" };
    data.name = name;
  }

  if (src.relation !== undefined) {
    const v = optionalTrimToNull(src.relation);
    if (v === "__INVALID__") return { error: "relation must be a string" };
    data.relation = v;
  }

  if (src.email !== undefined) {
    const email = normalizeEmail(src.email);
    if (email === "__INVALID__") return { error: "email must be a string" };
    if (email && !isValidEmail(email)) return { error: "email must be a valid email address" };
    data.email = email; // may be null
  }

  if (src.phone !== undefined) {
    const phone = normalizePhone(src.phone);
    if (phone === "__INVALID__") return { error: "phone must be a string" };
    if (phone && !isValidPhone(phone)) return { error: "phone must be a valid phone number" };
    data.phone = phone; // may be null
  }

  // numbers
  if (src.age !== undefined) {
    const v = parseIntOrNullOpt(src.age, { min: 0, max: 120 });
    if (v === "__INVALID__") return { error: "age must be an integer between 0 and 120" };
    data.age = v;
  }
  if (src.heightFeet !== undefined) {
    const v = parseIntOrNullOpt(src.heightFeet, { min: 0, max: 8 });
    if (v === "__INVALID__") return { error: "heightFeet must be an integer 0-8" };
    data.heightFeet = v;
  }
  if (src.heightInches !== undefined) {
    const v = parseIntOrNullOpt(src.heightInches, { min: 0, max: 11 });
    if (v === "__INVALID__") return { error: "heightInches must be an integer 0-11" };
    data.heightInches = v;
  }
  if (src.weight !== undefined) {
    const v = parseIntOrNullOpt(src.weight, { min: 0, max: 1500 });
    if (v === "__INVALID__") return { error: "weight must be an integer" };
    data.weight = v;
  }

  // enums
  if (src.sex !== undefined) {
    const v = parseEnumOrNullOpt(src.sex, SEX);
    if (v === "__INVALID__") return { error: "sex is invalid" };
    data.sex = v;
  }
  if (src.hairColor !== undefined) {
    const v = parseEnumOrNullOpt(src.hairColor, HAIR_COLOR);
    if (v === "__INVALID__") return { error: "hairColor is invalid" };
    data.hairColor = v;
  }
  if (src.eyeColor !== undefined) {
    const v = parseEnumOrNullOpt(src.eyeColor, EYE_COLOR);
    if (v === "__INVALID__") return { error: "eyeColor is invalid" };
    data.eyeColor = v;
  }
  if (src.bodyBuild !== undefined) {
    const v = parseEnumOrNullOpt(src.bodyBuild, BODY_BUILD);
    if (v === "__INVALID__") return { error: "bodyBuild is invalid" };
    data.bodyBuild = v;
  }

  // strings
  if (src.markings !== undefined) {
    const v = optionalTrimToNull(src.markings);
    if (v === "__INVALID__") return { error: "markings must be a string" };
    data.markings = v;
  }
  if (src.notes !== undefined) {
    const v = optionalTrimToNull(src.notes);
    if (v === "__INVALID__") return { error: "notes must be a string" };
    data.notes = v;
  }
  if (src.violations !== undefined) {
    const v = optionalTrimToNull(src.violations);
    if (v === "__INVALID__") return { error: "violations must be a string" };
    data.violations = v;
  }

  return { data };
}

module.exports = {
  parseOccupantPost,
  parseOccupantPatch,
};
