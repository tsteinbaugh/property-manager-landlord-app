// backend/src/utils/petFields.js
const {
  optionalTrimToNull,
  parseIntOrNullOpt,
  requiredTrimmedString,
} = require("@utils/validation.js");

// POST: requires name
function parsePetPost(body) {
  const src = body || {};

  const name = requiredTrimmedString(src.name);
  if (name === "__INVALID__") return { error: "name is required" };

  const type = optionalTrimToNull(src.type);
  if (type === "__INVALID__") return { error: "type must be a string" };

  const breed = optionalTrimToNull(src.breed);
  if (breed === "__INVALID__") return { error: "breed must be a string" };

  const license = optionalTrimToNull(src.license);
  if (license === "__INVALID__") return { error: "license must be a string" };

  const notes = optionalTrimToNull(src.notes);
  if (notes === "__INVALID__") return { error: "notes must be a string" };

  const weightVal = parseIntOrNullOpt(src.weight, { min: 0, max: 1500 });
  if (weightVal === "__INVALID__") return { error: "weight must be an integer" };

  const ageVal = parseIntOrNullOpt(src.age, { min: 0, max: 120 });
  if (ageVal === "__INVALID__") return { error: "age must be an integer between 0 and 120" };

  return {
    data: {
      name,
      type: type ?? null,
      breed: breed ?? null,
      weight: weightVal ?? null,
      age: ageVal ?? null,
      license: license ?? null,
      notes: notes ?? null,
    },
  };
}

// PATCH: optional; name if provided must be non-empty; supports clearing optional strings via null/""
function parsePetPatch(body) {
  const src = body || {};
  const data = {};

  if (src.name !== undefined) {
    const name = requiredTrimmedString(src.name);
    if (name === "__INVALID__") return { error: "name is required" };
    data.name = name;
  }

  if (src.type !== undefined) {
    const v = optionalTrimToNull(src.type);
    if (v === "__INVALID__") return { error: "type must be a string" };
    data.type = v;
  }

  if (src.breed !== undefined) {
    const v = optionalTrimToNull(src.breed);
    if (v === "__INVALID__") return { error: "breed must be a string" };
    data.breed = v;
  }

  if (src.license !== undefined) {
    const v = optionalTrimToNull(src.license);
    if (v === "__INVALID__") return { error: "license must be a string" };
    data.license = v;
  }

  if (src.notes !== undefined) {
    const v = optionalTrimToNull(src.notes);
    if (v === "__INVALID__") return { error: "notes must be a string" };
    data.notes = v;
  }

  if (src.weight !== undefined) {
    const v = parseIntOrNullOpt(src.weight, { min: 0, max: 1500 });
    if (v === "__INVALID__") return { error: "weight must be an integer" };
    data.weight = v;
  }

  if (src.age !== undefined) {
    const v = parseIntOrNullOpt(src.age, { min: 0, max: 120 });
    if (v === "__INVALID__") return { error: "age must be an integer between 0 and 120" };
    data.age = v;
  }

  return { data };
}

module.exports = {
  parsePetPost,
  parsePetPatch,
};
