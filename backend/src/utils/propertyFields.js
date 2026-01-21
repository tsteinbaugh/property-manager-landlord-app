// backend/src/utils/propertyFields.js
const {
  INVALID,
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
    address2,
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
  if (stateNorm === INVALID || !stateNorm) {
    return { error: "state must be a valid US state (2-letter) or full name, or DC" };
  }

  // postalCode (required on POST)
  const zipInput = postalCode ?? zip;
  const zipNorm = normalizeZipUS(zipInput);
  if (zipNorm === INVALID || !zipNorm) {
    return { error: "postalCode must be a valid US ZIP (12345 or 12345-6789)" };
  }

  // required strings
  const cleanAddress1 = requiredTrimmedString(address1);
  const cleanCity = requiredTrimmedString(city);
  if (cleanAddress1 === INVALID || cleanCity === INVALID) {
    return { error: "street address and city are required" };
  }

  // optional 
  const cleanAddress2 = optionalTrimToNull(address2);
  if (cleanAddress2 === INVALID) return { error: "address unit must be a string" };

  const nameVal = optionalTrimToNull(name);
  if (nameVal === INVALID) return { error: "name must be a string" };

  const notesVal = optionalTrimToNull(notes);
  if (notesVal === INVALID) return { error: "notes must be a string" };

  // numbers (optional)
  const bedroomsVal = parseIntOrNullOpt(bedrooms, { min: 0, max: 50 });
  if (bedroomsVal === INVALID) return { error: "bedrooms must be an integer" };

  const bathroomsVal = parseIntOrNullOpt(bathrooms, { min: 0, max: 50 });
  if (bathroomsVal === INVALID) return { error: "bathrooms must be an integer" };

  const sqftVal = parseIntOrNullOpt(sqft, { min: 0, max: 1000000 });
  if (sqftVal === INVALID) return { error: "sqft must be an integer" };

  const yearBuiltVal = parseIntOrNullOpt(yearBuilt, { min: 1000, max: 9999 });
  if (yearBuiltVal === INVALID) return { error: "yearBuilt must be a 4-digit integer" };

  return {
    data: {
      name: nameVal ?? null,
      address1: cleanAddress1,
      address2: cleanAddress2,
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
    address2,
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
    if (v === INVALID) return { error: "name must be a string" };
    data.name = v;
  }

  if (notes !== undefined) {
    const v = optionalTrimToNull(notes);
    if (v === INVALID) return { error: "notes must be a string" };
    data.notes = v;
  }

  if (address2 !== undefined) {
    const v = optionalTrimToNull(address2);
    if (v === INVALID) return { error: "address2 must be a string" };
    data.address2 = v;
  }

  // address fields (if provided, must be non-empty)
  if (address1 !== undefined) {
    const t = requiredTrimmedString(address1);
    if (t === INVALID) return { error: "address1 is required" };
    data.address1 = t;
  }

  if (city !== undefined) {
    const t = requiredTrimmedString(city);
    if (t === INVALID) return { error: "city is required" };
    data.city = t;
  }

  // state (if provided, must be valid + non-empty)
  if (state !== undefined) {
    const stateNorm = normalizeState(state);
    if (stateNorm === INVALID || stateNorm === null) {
      return { error: "state is required and must be a valid US state or DC" };
    }
    data.state = stateNorm;
  }

  // postalCode (if provided, must be valid + non-empty)
  const zipInput = postalCode ?? zip;
  if (zipInput !== undefined) {
    const zipNorm = normalizeZipUS(zipInput);
    if (zipNorm === INVALID || zipNorm === null) {
      return { error: "postalCode is required and must be a valid US ZIP" };
    }
    data.postalCode = zipNorm;
  }

  // numbers (optional)
  if (bedrooms !== undefined) {
    const v = parseIntOrNullOpt(bedrooms, { min: 0, max: 50 });
    if (v === INVALID) return { error: "bedrooms must be an integer" };
    data.bedrooms = v;
  }

  if (bathrooms !== undefined) {
    const v = parseIntOrNullOpt(bathrooms, { min: 0, max: 50 });
    if (v === INVALID) return { error: "bathrooms must be an integer" };
    data.bathrooms = v;
  }

  if (sqft !== undefined) {
    const v = parseIntOrNullOpt(sqft, { min: 0, max: 1000000 });
    if (v === INVALID) return { error: "sqft must be an integer" };
    data.sqft = v;
  }

  if (yearBuilt !== undefined) {
    const v = parseIntOrNullOpt(yearBuilt, { min: 1000, max: 9999 });
    if (v === INVALID) return { error: "yearBuilt must be a 4-digit integer" };
    data.yearBuilt = v;
  }

  return { data };
}

module.exports = {
  parsePropertyPost,
  parsePropertyPatch,
};
