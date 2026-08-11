// backend/src/utils/vehicleFields.js
const {
  INVALID,
  optionalTrimToNull,
  parseIntOrNullOpt,
  normalizeState,
  requiredTrimmedString,
} = require("@utils/validation.js");

const { VEHICLE_TYPE } =
  require("@shared/vehicleType.enum.js");
const { parseEnumOrNullOpt } = require("./validation");

function parseVehiclePost(body) {
  const src = body || {};

  const make = requiredTrimmedString(src.make);
  if (make === INVALID) return { error: "make is required" };

  const model = requiredTrimmedString(src.model);
  if (model === INVALID) return { error: "model is required" };

  // year is optional, but if provided must be 4-digit
  const yearVal = parseIntOrNullOpt(src.year, { min: 1000, max: 9999 });
  if (yearVal === INVALID) return { error: "year must be a valid 4-digit integer" };

  // optional state -> USPS code, allow null/"" clearing
  const stateNorm = normalizeState(src.state);
  if (stateNorm === INVALID) {
    return { error: "state must be a valid US state (2-letter) or full name, or DC" };
  }

  // enum
  const vehicleTypeVal = parseEnumOrNullOpt(src.vehicleType, VEHICLE_TYPE);
  if (vehicleTypeVal === INVALID) return { error: "vehicle type is invalid" };

  // optional strings
  const color = optionalTrimToNull(src.color);
  if (color === INVALID) return { error: "color must be a string" };

  const plate = optionalTrimToNull(src.plate);
  if (plate === INVALID) return { error: "plate must be a string" };

  const permit = optionalTrimToNull(src.permit);
  if (permit === INVALID) return { error: "permit must be a string" };

  const parking = optionalTrimToNull(src.parking);
  if (parking === INVALID) return { error: "parking must be a string" };

  const vehicleSubType = optionalTrimToNull(src.vehicleSubType);
  if (vehicleSubType === INVALID) return { error: "vehicle sub-type must be a string" };

  const notes = optionalTrimToNull(src.notes);
  if (notes === INVALID) return { error: "notes must be a string" };

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
      vehicleType: vehicleTypeVal ?? null,
      vehicleSubType: vehicleSubType ?? null,
      notes: notes ?? null,
    },
  };
}

function parseVehiclePatch(body) {
  const src = body || {};
  const data = {};

  if (src.make !== undefined) {
    const make = requiredTrimmedString(src.make);
    if (make === INVALID) return { error: "make is required" };
    data.make = make;
  }

  if (src.model !== undefined) {
    const model = requiredTrimmedString(src.model);
    if (model === INVALID) return { error: "model is required" };
    data.model = model;
  }

  if (src.year !== undefined) {
    // allow clearing via null/""
    const yearVal = parseIntOrNullOpt(src.year, { min: 1000, max: 9999 });
    if (yearVal === INVALID) return { error: "year must be a valid 4-digit integer" };
    data.year = yearVal;
  }

  if (src.state !== undefined) {
    const stateNorm = normalizeState(src.state);
    if (stateNorm === INVALID) {
      return { error: "state must be a valid US state (2-letter) or full name, or DC" };
    }
    data.state = stateNorm; // may be null
  }

  if (src.color !== undefined) {
    const v = optionalTrimToNull(src.color);
    if (v === INVALID) return { error: "color must be a string" };
    data.color = v;
  }

  if (src.plate !== undefined) {
    const v = optionalTrimToNull(src.plate);
    if (v === INVALID) return { error: "plate must be a string" };
    data.plate = v;
  }

  if (src.permit !== undefined) {
    const v = optionalTrimToNull(src.permit);
    if (v === INVALID) return { error: "permit must be a string" };
    data.permit = v;
  }

  if (src.parking !== undefined) {
    const v = optionalTrimToNull(src.parking);
    if (v === INVALID) return { error: "parking must be a string" };
    data.parking = v;
  }

  if (src.vehicleType !== undefined) {
    const v = parseEnumOrNullOpt(src.vehicleType, VEHICLE_TYPE);
    if (v === INVALID) return { error: "vehicle type is invalid" };
    data.vehicleType = v;
  }

  if (src.vehicleSubType !== undefined) {
    const v = optionalTrimToNull(src.vehicleSubType);
    if (v === INVALID) return { error: "vehicle sub-type must be a string" };
    data.vehicleSubType = v;
  }

  if (src.notes !== undefined) {
    const v = optionalTrimToNull(src.notes);
    if (v === INVALID) return { error: "notes must be a string" };
    data.notes = v;
  }

  return { data };
}

module.exports = {
  parseVehiclePost,
  parseVehiclePatch,
};
