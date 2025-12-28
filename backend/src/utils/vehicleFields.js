// backend/src/utils/vehicleFields.js
const {
  optionalTrimToNull,
  parseIntOrNullOpt,
  normalizeState,
  requiredTrimmedString,
} = require("@utils/validation.js");

function parseVehiclePost(body) {
  const src = body || {};

  const make = requiredTrimmedString(src.make);
  if (make === "__INVALID__") return { error: "make is required" };

  const model = requiredTrimmedString(src.model);
  if (model === "__INVALID__") return { error: "model is required" };

  // year is optional, but if provided must be 4-digit
  const yearVal = parseIntOrNullOpt(src.year, { min: 1000, max: 9999 });
  if (yearVal === "__INVALID__") return { error: "year must be a valid 4-digit integer" };

  // optional state -> USPS code, allow null/"" clearing
  const stateNorm = normalizeState(src.state);
  if (stateNorm === "__INVALID__") {
    return { error: "state must be a valid US state (2-letter) or full name, or DC" };
  }

  // optional strings
  const color = optionalTrimToNull(src.color);
  if (color === "__INVALID__") return { error: "color must be a string" };

  const plate = optionalTrimToNull(src.plate);
  if (plate === "__INVALID__") return { error: "plate must be a string" };

  const permit = optionalTrimToNull(src.permit);
  if (permit === "__INVALID__") return { error: "permit must be a string" };

  const parking = optionalTrimToNull(src.parking);
  if (parking === "__INVALID__") return { error: "parking must be a string" };

  const notes = optionalTrimToNull(src.notes);
  if (notes === "__INVALID__") return { error: "notes must be a string" };

  return {
    data: {
      make,
      model,
      year: yearVal ?? null,
      color: color ?? null,
      state: stateNorm ?? null,
      plate: plate ?? null,
      permit: permit ?? null,
      parking: parking ?? null,
      notes: notes ?? null,
    },
  };
}

function parseVehiclePatch(body) {
  const src = body || {};
  const data = {};

  if (src.make !== undefined) {
    const make = requiredTrimmedString(src.make);
    if (make === "__INVALID__") return { error: "make is required" };
    data.make = make;
  }

  if (src.model !== undefined) {
    const model = requiredTrimmedString(src.model);
    if (model === "__INVALID__") return { error: "model is required" };
    data.model = model;
  }

  if (src.year !== undefined) {
    // allow clearing via null/""
    const yearVal = parseIntOrNullOpt(src.year, { min: 1000, max: 9999 });
    if (yearVal === "__INVALID__") return { error: "year must be a valid 4-digit integer" };
    data.year = yearVal;
  }

  if (src.state !== undefined) {
    const stateNorm = normalizeState(src.state);
    if (stateNorm === "__INVALID__") {
      return { error: "state must be a valid US state (2-letter) or full name, or DC" };
    }
    data.state = stateNorm; // may be null
  }

  if (src.color !== undefined) {
    const v = optionalTrimToNull(src.color);
    if (v === "__INVALID__") return { error: "color must be a string" };
    data.color = v;
  }

  if (src.plate !== undefined) {
    const v = optionalTrimToNull(src.plate);
    if (v === "__INVALID__") return { error: "plate must be a string" };
    data.plate = v;
  }

  if (src.permit !== undefined) {
    const v = optionalTrimToNull(src.permit);
    if (v === "__INVALID__") return { error: "permit must be a string" };
    data.permit = v;
  }

  if (src.parking !== undefined) {
    const v = optionalTrimToNull(src.parking);
    if (v === "__INVALID__") return { error: "parking must be a string" };
    data.parking = v;
  }

  if (src.notes !== undefined) {
    const v = optionalTrimToNull(src.notes);
    if (v === "__INVALID__") return { error: "notes must be a string" };
    data.notes = v;
  }

  return { data };
}

module.exports = {
  parseVehiclePost,
  parseVehiclePatch,
};
