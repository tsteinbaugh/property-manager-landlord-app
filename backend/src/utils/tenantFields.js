// backend/src/utils/tenantFields.js
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

function parseTenantPost(body) {
  const src = body || {};

  const name = requiredTrimmedString(src.name);
  if (name === "__INVALID__") return { error: "name is required" };

  const email = normalizeEmail(src.email);
  if (email === "__INVALID__") return { error: "email must be a string" };
  if (email && !isValidEmail(email)) return { error: "email must be a valid email address" };

  const phone = normalizePhone(src.phone);
  if (phone === "__INVALID__") return { error: "phone must be a string" };
  if (phone && !isValidPhone(phone)) return { error: "phone must be a valid phone number" };

  const age = parseIntOrNullOpt(src.age, { min: 0, max: 120 });
  if (age === "__INVALID__") return { error: "age must be an integer between 0 and 120" };

  const heightFeet = parseIntOrNullOpt(src.heightFeet, { min: 0, max: 8 });
  if (heightFeet === "__INVALID__") return { error: "heightFeet must be an integer 0-8" };

  const heightInches = parseIntOrNullOpt(src.heightInches, { min: 0, max: 11 });
  if (heightInches === "__INVALID__") return { error: "heightInches must be an integer 0-11" };

  const weight = parseIntOrNullOpt(src.weight, { min: 0, max: 1500 });
  if (weight === "__INVALID__") return { error: "weight must be an integer" };

  const income = parseIntOrNullOpt(src.income, { min: 0, max: 1000000000 });
  if (income === "__INVALID__") return { error: "income must be an integer" };

  const creditScore = parseIntOrNullOpt(src.creditScore, { min: 0, max: 850 });
  if (creditScore === "__INVALID__") return { error: "creditScore must be an integer 0-850" };

  const sex = parseEnumOrNullOpt(src.sex, SEX);
  if (sex === "__INVALID__") return { error: "sex is invalid" };

  const hairColor = parseEnumOrNullOpt(src.hairColor, HAIR_COLOR);
  if (hairColor === "__INVALID__") return { error: "hairColor is invalid" };

  const eyeColor = parseEnumOrNullOpt(src.eyeColor, EYE_COLOR);
  if (eyeColor === "__INVALID__") return { error: "eyeColor is invalid" };

  const bodyBuild = parseEnumOrNullOpt(src.bodyBuild, BODY_BUILD);
  if (bodyBuild === "__INVALID__") return { error: "bodyBuild is invalid" };

  const markings = optionalTrimToNull(src.markings);
  if (markings === "__INVALID__") return { error: "markings must be a string" };

  const occupation = optionalTrimToNull(src.occupation);
  if (occupation === "__INVALID__") return { error: "occupation must be a string" };

  const employer = optionalTrimToNull(src.employer);
  if (employer === "__INVALID__") return { error: "employer must be a string" };

  const notes = optionalTrimToNull(src.notes);
  if (notes === "__INVALID__") return { error: "notes must be a string" };

  return {
    data: {
      name,
      email: email ?? null,
      phone: phone ?? null,

      age: age ?? null,
      heightFeet: heightFeet ?? null,
      heightInches: heightInches ?? null,
      weight: weight ?? null,

      sex: sex ?? null,
      hairColor: hairColor ?? null,
      eyeColor: eyeColor ?? null,
      bodyBuild: bodyBuild ?? null,

      markings: markings ?? null,
      occupation: occupation ?? null,
      employer: employer ?? null,
      income: income ?? null,
      creditScore: creditScore ?? null,
      notes: notes ?? null,
    },
  };
}

function parseTenantPatch(body) {
  const src = body || {};
  const data = {};

  if (src.name !== undefined) {
    const name = requiredTrimmedString(src.name);
    if (name === "__INVALID__") return { error: "name is required" };
    data.name = name;
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

  const intFields = [
    ["age", 0, 120],
    ["heightFeet", 0, 8],
    ["heightInches", 0, 11],
    ["weight", 0, 1500],
    ["income", 0, 1000000000],
    ["creditScore", 0, 850],
  ];

  for (const [k, min, max] of intFields) {
    if (src[k] !== undefined) {
      const v = parseIntOrNullOpt(src[k], { min, max });
      if (v === "__INVALID__") return { error: `${k} must be an integer` };
      data[k] = v;
    }
  }

  const enumFields = [
    ["sex", SEX],
    ["hairColor", HAIR_COLOR],
    ["eyeColor", EYE_COLOR],
    ["bodyBuild", BODY_BUILD],
  ];

  for (const [k, set] of enumFields) {
    if (src[k] !== undefined) {
      const v = parseEnumOrNullOpt(src[k], set);
      if (v === "__INVALID__") return { error: `${k} is invalid` };
      data[k] = v;
    }
  }

  const stringFields = ["markings", "occupation", "employer", "notes"];
  for (const k of stringFields) {
    if (src[k] !== undefined) {
      const v = optionalTrimToNull(src[k]);
      if (v === "__INVALID__") return { error: `${k} must be a string` };
      data[k] = v;
    }
  }

  return { data };
}

module.exports = {
  parseTenantPost,
  parseTenantPatch,
};
