// backend/src/utils/validation.js

const INVALID = "__INVALID__";


const { US_STATE_CODES, US_STATE_NAME_TO_CODE } = require("@shared/state.enums.js");

// ------------------------------
// basic validators
// ------------------------------
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isValidPhone = (v) => /^\+?[1-9]\d{7,14}$/.test(v); // E.164-ish

// ------------------------------
// string helpers
// ------------------------------
const optionalTrimToNull = (v) => {
  if (v === null) return null;
  if (v === undefined) return undefined;
  if (typeof v !== "string") return INVALID;
  const t = v.trim();
  return t ? t : null;
};

function requiredTrimmedString(v) {
  if (typeof v !== "string") return INVALID;
  const t = v.trim();
  return t ? t : INVALID;
}

const normalizeEmail = (v) => {
  if (v === undefined) return undefined; // PATCH omit
  if (v === null) return null;
  if (typeof v !== "string") return INVALID;
  const t = v.trim().toLowerCase();
  return t ? t : null;
};

const normalizePhone = (v) => {
  if (v === undefined) return undefined; // PATCH omit
  if (v === null) return null;
  if (typeof v !== "string") return INVALID;
  const raw = v.trim();
  if (!raw) return null;
  return raw.replace(/(?!^\+)[^\d]/g, "");
};

function normalizeState(input) {
  if (input === undefined) return undefined;
  if (input === null) return null;

  if (typeof input !== "string") return INVALID;
  const raw = input.trim();
  if (!raw) return null; // allow "" to clear

  const upper = raw.toUpperCase().replace(/\./g, "");

  // 2-letter code
  if (upper.length === 2 && US_STATE_CODES.has(upper)) return upper;

  // Full name -> code
  const code = US_STATE_NAME_TO_CODE.get(upper);
  return code ? code : INVALID;
}

function normalizeZipUS(input) {
  if (input === undefined) return undefined; // PATCH omit
  if (input === null) return null;

  if (typeof input !== "string") return INVALID;
  const raw = input.trim();
  if (!raw) return null;

  const digits = raw.replace(/\D/g, "");
  if (digits.length === 5) return digits;
  if (digits.length === 9) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  return INVALID;
}

function normalizeIdOrNull(v) {
  if (v === undefined) return undefined; // PATCH omit
  if (v === null) return null;
  const s = String(v).trim();
  return s ? s : null; // NOTE: for PATCH, "" clears -> null
}

// ------------------------------
// parse helpers
// ------------------------------
function parseIntOrNullOpt(v, { min = null, max = null } = {}) {
  if (v === undefined) return undefined; // PATCH omit
  if (v === null) return null;

  if (typeof v === "number") {
    if (!Number.isInteger(v)) return INVALID;
    if (min !== null && v < min) return INVALID;
    if (max !== null && v > max) return INVALID;
    return v;
  }

  if (typeof v === "string") {
    const s = v.trim();
    if (!s) return null; // allow "" to clear optional ints
    if (!/^-?\d+$/.test(s)) return INVALID;
    const n = Number(s);
    if (!Number.isInteger(n)) return INVALID;
    if (min !== null && n < min) return INVALID;
    if (max !== null && n > max) return INVALID;
    return n;
  }

  return INVALID;
}

function parseEnumOrNullOpt(v, allowed) {
  if (v === undefined) return undefined; // PATCH omit
  if (v === null) return null;
  if (typeof v !== "string") return INVALID;
  const s = v.trim();
  if (!s) return null;
  const upper = s.toUpperCase();
  return allowed.has(upper) ? upper : INVALID;
}

function parseMoneyOrNullOpt(v, { min = 0, max = 1_000_000_000 } = {}) {
  if (v === undefined) return undefined; // PATCH omit
  if (v === null) return null;
  if (v === "") return null;

  const n = typeof v === "number" ? v : Number(String(v).trim());
  if (!Number.isFinite(n)) return INVALID;
  if (min !== null && n < min) return INVALID;
  if (max !== null && n > max) return INVALID;
  return n;
}
function parseDateOrNullOpt(v) {
  if (v === undefined) return undefined; // PATCH omit
  if (v === null) return null;
  if (v === "") return null;

  // allow Date input too
  const d = v instanceof Date ? v : new Date(v);
  if (Number.isNaN(d.getTime())) return INVALID;
  return d;
}

module.exports = {
  isValidEmail,
  isValidPhone,
  optionalTrimToNull,
  requiredTrimmedString,
  normalizeEmail,
  normalizePhone,
  normalizeState,
  normalizeZipUS,
  normalizeIdOrNull,
  parseIntOrNullOpt,
  parseEnumOrNullOpt,
  parseMoneyOrNullOpt,
  parseDateOrNullOpt,
};
