// backend/src/utils/propertyFields.js
const {
  optionalTrimToNull,
  requiredTrimmedString,
  parseIntOrNullOpt,
  normalizeState,
  normalizeZipUS,
} = require("@utils/validation.js");

// POST: requires address1/city/state/postalCode
function parsePropertyPost(body) {
  const src = body || {};
  const {
    name,
    address1,
    city,
    state,
    postalCode,
    zip,
    bedrooms,
    bathrooms,
    sqft,
    yearBuilt,
    notes,
  } = src;

  // state (required on POST)
  const stateNorm = normalizeState(state);
  if (stateNorm === "__INVALID__" || !stateNorm) {
    return { error: "state must be a valid US state (2-letter) or full name, or DC" };
  }

  // postalCode (required on POST)
  const zipInput = postalCode ?? zip;
  const zipNorm = normalizeZipUS(zipInput);
  if (zipNorm === "__INVALID__" || !zipNorm) {
    return { error: "postalCode must be a valid US ZIP (12345 or 12345-6789)" };
  }

  // required strings
  const cleanAddress1 = requiredTrimmedString(address1);
  const cleanCity = requiredTrimmedString(city);
  if (cleanAddress1 === "__INVALID__" || cleanCity === "__INVALID__") {
    return { error: "street address and city are required" };
  }

  // optional strings
  const nameVal = optionalTrimToNull(name);
  if (nameVal === "__INVALID__") return { error: "name must be a string" };

  const notesVal = optionalTrimToNull(notes);
  if (notesVal === "__INVALID__") return { error: "notes must be a string" };

  // numbers (optional)
  const bedroomsVal = parseIntOrNullOpt(bedrooms, { min: 0, max: 50 });
  if (bedroomsVal === "__INVALID__") return { error: "bedrooms must be an integer" };

  const bathroomsVal = parseIntOrNullOpt(bathrooms, { min: 0, max: 50 });
  if (bathroomsVal === "__INVALID__") return { error: "bathrooms must be an integer" };

  const sqftVal = parseIntOrNullOpt(sqft, { min: 0, max: 1000000 });
  if (sqftVal === "__INVALID__") return { error: "sqft must be an integer" };

  const yearBuiltVal = parseIntOrNullOpt(yearBuilt, { min: 1000, max: 9999 });
  if (yearBuiltVal === "__INVALID__") return { error: "yearBuilt must be a 4-digit integer" };

  return {
    data: {
      name: nameVal ?? null,
      address1: cleanAddress1,
      city: cleanCity,
      state: stateNorm,
      postalCode: zipNorm,

      bedrooms: bedroomsVal ?? null,
      bathrooms: bathroomsVal ?? null,
      sqft: sqftVal ?? null,
      yearBuilt: yearBuiltVal ?? null,
      notes: notesVal ?? null,
    },
  };
}

// PATCH: optional, but if provided must be valid (and you currently require state/postalCode if provided)
function parsePropertyPatch(body) {
  const src = body || {};
  const {
    name,
    address1,
    city,
    state,
    postalCode,
    zip,
    bedrooms,
    bathrooms,
    sqft,
    yearBuilt,
    notes,
  } = src;

  const data = {};

  // strings
  if (name !== undefined) {
    const v = optionalTrimToNull(name);
    if (v === "__INVALID__") return { error: "name must be a string" };
    data.name = v;
  }

  if (notes !== undefined) {
    const v = optionalTrimToNull(notes);
    if (v === "__INVALID__") return { error: "notes must be a string" };
    data.notes = v;
  }

  // address fields (if provided, must be non-empty)
  if (address1 !== undefined) {
    const t = requiredTrimmedString(address1);
    if (t === "__INVALID__") return { error: "address1 is required" };
    data.address1 = t;
  }

  if (city !== undefined) {
    const t = requiredTrimmedString(city);
    if (t === "__INVALID__") return { error: "city is required" };
    data.city = t;
  }

  // state (if provided, must be valid + non-empty)
  if (state !== undefined) {
    const stateNorm = normalizeState(state);
    if (stateNorm === "__INVALID__" || stateNorm === null) {
      return { error: "state is required and must be a valid US state or DC" };
    }
    data.state = stateNorm;
  }

  // postalCode (if provided, must be valid + non-empty)
  const zipInput = postalCode ?? zip;
  if (zipInput !== undefined) {
    const zipNorm = normalizeZipUS(zipInput);
    if (zipNorm === "__INVALID__" || zipNorm === null) {
      return { error: "postalCode is required and must be a valid US ZIP" };
    }
    data.postalCode = zipNorm;
  }

  // numbers (optional)
  if (bedrooms !== undefined) {
    const v = parseIntOrNullOpt(bedrooms, { min: 0, max: 50 });
    if (v === "__INVALID__") return { error: "bedrooms must be an integer" };
    data.bedrooms = v;
  }

  if (bathrooms !== undefined) {
    const v = parseIntOrNullOpt(bathrooms, { min: 0, max: 50 });
    if (v === "__INVALID__") return { error: "bathrooms must be an integer" };
    data.bathrooms = v;
  }

  if (sqft !== undefined) {
    const v = parseIntOrNullOpt(sqft, { min: 0, max: 1000000 });
    if (v === "__INVALID__") return { error: "sqft must be an integer" };
    data.sqft = v;
  }

  if (yearBuilt !== undefined) {
    const v = parseIntOrNullOpt(yearBuilt, { min: 1000, max: 9999 });
    if (v === "__INVALID__") return { error: "yearBuilt must be a 4-digit integer" };
    data.yearBuilt = v;
  }

  return { data };
}

module.exports = {
  parsePropertyPost,
  parsePropertyPatch,
};
