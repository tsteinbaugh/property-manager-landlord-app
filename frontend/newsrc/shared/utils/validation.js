//frontend/newsrc/shared/utils/validation.js
import { US_STATE_CODES, US_STATE_NAME_TO_CODE } from "@shared/lib/state.enums.js";

export const INVALID = "__INVALID__";

// ============================================================
// Basic validators
// ============================================================
export const isValidEmail = (v) =>
  typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

// Your backend uses E.164-ish; keep same idea
export const isValidPhone = (v) =>
  typeof v === "string" && /^\+?[1-9]\d{7,14}$/.test(v.trim());

// ============================================================
// Tenant physical-description enums (from Prisma)
// ============================================================
export const SEX = new Set([
  "MALE", 
  "FEMALE", 
  "OTHER", 
  "UNKNOWN",
]);
export const HAIR_COLOR = new Set([
  "BLACK",
  "BROWN",
  "BLONDE",
  "RED",
  "GRAY",
  "WHITE",
  "DYED",
  "BALD",
  "OTHER",
  "UNKNOWN",
]);
export const EYE_COLOR = new Set([
  "BROWN",
  "BLUE",
  "GREEN",
  "HAZEL",
  "GRAY",
  "AMBER",
  "OTHER",
  "UNKNOWN",
]);
export const BODY_BUILD = new Set([
  "SLIM",
  "AVERAGE",
  "ATHLETIC",
  "HEAVYSET",
  "OTHER",
  "UNKNOWN",
]);


// ============================================================
// State enums (from Prisma)
// ============================================================

export const US_STATE_CODES = new Set([
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
  "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
  "DC",
]);

export const US_STATE_NAME_TO_CODE = new Map([
  ["ALABAMA","AL"],
  ["ALASKA","AK"],
  ["ARIZONA","AZ"],
  ["ARKANSAS","AR"],
  ["CALIFORNIA","CA"],
  ["COLORADO","CO"],
  ["CONNECTICUT","CT"],
  ["DELAWARE","DE"],
  ["FLORIDA","FL"],
  ["GEORGIA","GA"],
  ["HAWAII","HI"],
  ["IDAHO","ID"],
  ["ILLINOIS","IL"],
  ["INDIANA","IN"],
  ["IOWA","IA"],
  ["KANSAS","KS"],
  ["KENTUCKY","KY"],
  ["LOUISIANA","LA"],
  ["MAINE","ME"],
  ["MARYLAND","MD"],
  ["MASSACHUSETTS","MA"],
  ["MICHIGAN","MI"],
  ["MINNESOTA","MN"],
  ["MISSISSIPPI","MS"],
  ["MISSOURI","MO"],
  ["MONTANA","MT"],
  ["NEBRASKA","NE"],
  ["NEVADA","NV"],
  ["NEW HAMPSHIRE","NH"],
  ["NEW JERSEY","NJ"],
  ["NEW MEXICO","NM"],
  ["NEW YORK","NY"],
  ["NORTH CAROLINA","NC"],
  ["NORTH DAKOTA","ND"],
  ["OHIO","OH"],
  ["OKLAHOMA","OK"],
  ["OREGON","OR"],
  ["PENNSYLVANIA","PA"],
  ["RHODE ISLAND","RI"],
  ["SOUTH CAROLINA","SC"],
  ["SOUTH DAKOTA","SD"],
  ["TENNESSEE","TN"],
  ["TEXAS","TX"],
  ["UTAH","UT"],
  ["VERMONT","VT"],
  ["VIRGINIA","VA"],
  ["WASHINGTON","WA"],
  ["WEST VIRGINIA","WV"],
  ["WISCONSIN","WI"],
  ["WYOMING","WY"],
  ["DISTRICT OF COLUMBIA","DC"],
]);

// ============================================================
// Status enums (from Prisma)
// ============================================================

export const USER_STATUS = new Set ([
  "ACTIVE",
  "INVITED",
  "DISABLED",
]);


export const PROPERTY_STATUS = new Set ([
  "ACTIVE",
  "INACTIVE",
]);

export const LEASE_STATUS = new Set ([
  "DRAFT",
  "ACTIVE",
  "ENDED",
  "TERMINATED",
  "LEGAL_HOLD",
]);

export const TENANT_STATUS = new Set ([
  "DRAFT",
  "CANDIDATE",
  "ACTIVE",
  "INACTIVE",
]);

// ============================================================
// String helpers
// ============================================================
export function optionalTrimToNull(v) {
  if (v === null) return null;
  if (v === undefined) return undefined;
  if (typeof v !== "string") return INVALID;
  const t = v.trim();
  return t ? t : null;
}

export function requiredTrimmedString(v) {
  if (typeof v !== "string") return INVALID;
  const t = v.trim();
  return t ? t : INVALID;
}

export function normalizeEmail(v) {
  if (v === undefined) return undefined;
  if (v === null) return null;
  if (typeof v !== "string") return INVALID;
  const t = v.trim().toLowerCase();
  return t ? t : null;
}

export function normalizePhone(v) {
  if (v === undefined) return undefined;
  if (v === null) return null;
  if (typeof v !== "string") return INVALID;
  const raw = v.trim();
  if (!raw) return null;

  // keep leading + if present, strip other non-digits
  const keepPlus = raw.startsWith("+");
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  return keepPlus ? `+${digits}` : digits;
}

export function normalizeState(input) {
  if (input === undefined) return undefined;
  if (input === null) return null;

  if (typeof input !== "string") return INVALID;
  const raw = input.trim();
  if (!raw) return null;

  const upper = raw.toUpperCase().replace(/\./g, "");

  if (upper.length === 2 && US_STATE_CODES.has(upper)) return upper;

  const code = US_STATE_NAME_TO_CODE.get(upper);
  return code ? code : INVALID;
}

export function normalizeZipUS(input) {
  if (input === undefined) return undefined;
  if (input === null) return null;

  if (typeof input !== "string") return INVALID;
  const raw = input.trim();
  if (!raw) return null;

  const digits = raw.replace(/\D/g, "");
  if (digits.length === 5) return digits;
  if (digits.length === 9) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  return INVALID;
}

export function normalizeIdOrNull(v) {
  if (v === undefined) return undefined;
  if (v === null) return null;
  const s = String(v).trim();
  return s ? s : null;
}

// ============================================================
// Parse helpers (canonical values for API)
// ============================================================
export function parseIntOrNullOpt(v, { min = null, max = null } = {}) {
  if (v === undefined) return undefined; // PATCH omit
  if (v === null) return null;

  // form fields often come through as "" or strings
  if (typeof v === "string") {
    const s = v.trim();
    if (!s) return null; // "" clears optional int
    if (!/^-?\d+$/.test(s)) return INVALID;
    const n = Number(s);
    if (!Number.isInteger(n)) return INVALID;
    if (min !== null && n < min) return INVALID;
    if (max !== null && n > max) return INVALID;
    return n;
  }

  if (typeof v === "number") {
    if (!Number.isInteger(v)) return INVALID;
    if (min !== null && v < min) return INVALID;
    if (max !== null && v > max) return INVALID;
    return v;
  }

  return INVALID;
}

export function parseEnumOrNullOpt(v, allowedSet) {
  if (v === undefined) return undefined;
  if (v === null) return null;

  const s = String(v).trim();
  if (!s) return null;

  const upper = s.toUpperCase();
  return allowedSet.has(upper) ? upper : INVALID;
}

export function parseMoneyOrNullOpt(v, { min = 0, max = 1_000_000_000 } = {}) {
  if (v === undefined) return undefined;
  if (v === null) return null;
  if (v === "") return null;

  const n =
    typeof v === "number"
      ? v
      : Number(String(v).replace(/[$, ]/g, "").trim());

  if (!Number.isFinite(n)) return INVALID;
  if (min !== null && n < min) return INVALID;
  if (max !== null && n > max) return INVALID;
  return n;
}

export function parseDateOrNullOpt(v) {
  // Returns "YYYY-MM-DD" (date-only) for safety
  if (v === undefined) return undefined;
  if (v === null) return null;
  if (v === "") return null;

  const d = v instanceof Date ? v : new Date(v);
  if (Number.isNaN(d.getTime())) return INVALID;

  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

// ============================================================
// UI Formatters (for cards / detail pages)
// ============================================================
export function formatDateLong(dateLike, { locale = "en-US", fallback = "—" } = {}) {
  if (!dateLike) return fallback;
  const d = dateLike instanceof Date ? dateLike : new Date(dateLike);
  if (Number.isNaN(d.getTime())) return fallback;

  return new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

export function formatMoney(amount, { currency = "USD", locale = "en-US", fallback = "—" } = {}) {
  if (amount === null || amount === undefined || amount === "") return fallback;
  const n = typeof amount === "number" ? amount : Number(String(amount));
  if (!Number.isFinite(n)) return fallback;

  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(n);
}

// "HEAVYSET" -> "Heavyset", "LIGHT_BROWN" -> "Light Brown"
// hides UNKNOWN by default
export function formatEnumLabel(
  value,
  { fallback = null, hideUnknown = true } = {}
) {
  if (!value) return fallback;

  const s = String(value).trim();
  if (!s) return fallback;

  if (hideUnknown && s.toUpperCase() === "UNKNOWN") {
    return fallback;
  }

  return s
    .toLowerCase()
    .split("_")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export function formatHeightFeetInches(heightFeet, heightInches, { fallback = null } = {}) {
  const f =
    heightFeet === null || heightFeet === undefined || heightFeet === ""
      ? null
      : Number(heightFeet);
  const i =
    heightInches === null || heightInches === undefined || heightInches === ""
      ? null
      : Number(heightInches);

  if (!Number.isFinite(f) && !Number.isFinite(i)) return fallback;

  const ft = Number.isFinite(f) ? Math.max(0, Math.floor(f)) : 0;
  const inch = Number.isFinite(i) ? Math.max(0, Math.floor(i)) : 0;

  // If both were empty-ish, we'd have returned fallback above
  return `${ft}' ${inch}"`;
}

export function formatWeight(weight, { fallback = null } = {}) {
  if (weight === null || weight === undefined || weight === "") return fallback;
  const n = typeof weight === "number" ? weight : Number(String(weight));
  if (!Number.isFinite(n)) return fallback;
  return `${Math.round(n)} lb`;
}

export function formatPhoneRaw(phone, { fallback = null } = {}) {
  // You currently store phone as string; don’t guess formatting here.
  // Just show a nice fallback instead of empty string.
  if (phone === null || phone === undefined) return fallback;
  const s = String(phone).trim();
  return s ? s : fallback;
}

export function formatPhonePretty(phone, { fallback = null } = {}) {
  if (phone === null || phone === undefined) return fallback;

  const raw = String(phone).trim();
  if (!raw) return fallback;

  // Preserve leading +
  const hasPlus = raw.startsWith("+");

  // Digits only
  const digits = raw.replace(/\D/g, "");
  if (!digits) return fallback;

  // ===============================
  // US / NANP numbers
  // ===============================
  // 10-digit: 3035551212
  if (digits.length === 10) {
    const [a, b, c] = [
      digits.slice(0, 3),
      digits.slice(3, 6),
      digits.slice(6),
    ];
    return `(${a}) ${b}-${c}`;
  }

  // 11-digit with country code 1
  // 13035551212 or +13035551212
  if (digits.length === 11 && digits.startsWith("1")) {
    const cc = digits[0];
    const [a, b, c] = [
      digits.slice(1, 4),
      digits.slice(4, 7),
      digits.slice(7),
    ];
    return hasPlus
      ? `+${cc} (${a}) ${b}-${c}`
      : `(${a}) ${b}-${c}`;
  }

  // ===============================
  // International (best-effort)
  // ===============================
  // Group as: +CC rest-of-number
  if (hasPlus && digits.length > 11) {
    // naive split: country code = first 1–3 digits
    const cc = digits.slice(0, digits.length - 10);
    const rest = digits.slice(-10);

    const parts = rest.match(/.{1,3}/g)?.join(" ") ?? rest;
    return `+${cc} ${parts}`;
  }

  // ===============================
  // Fallback — don’t guess
  // ===============================
  return raw;
}

export function formatEmail(email, { fallback = null } = {}) {
  if (email === null || email === undefined) return fallback;
  const s = String(email).trim();
  return s ? s : fallback;
}

export function formatText(v, { fallback = null } = {}) {
  if (v === null || v === undefined) return fallback;
  const s = String(v).trim();
  return s ? s : fallback;
}

export function formatInt(v, { fallback = null } = {}) {
  if (v === null || v === undefined || v === "") return fallback;
  const n = typeof v === "number" ? v : Number(String(v));
  if (!Number.isFinite(n) || !Number.isInteger(n)) return fallback;
  return String(n);
}

// ============================================================
// Validate an object into an API payload (no magic; just normalization)
// ============================================================
export function validateObject(input, schema, { errorMessages = {} } = {}) {
  const value = {};
  const errors = {};

  for (const [key, fn] of Object.entries(schema)) {
    const out = fn(input?.[key]);

    if (out === INVALID) {
      errors[key] = errorMessages[key] || "Invalid value";
      continue;
    }

    // PATCH: undefined means "don’t send this field"
    if (out !== undefined) value[key] = out;
  }

  return { value, errors, ok: Object.keys(errors).length === 0 };
}
