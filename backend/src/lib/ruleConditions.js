// Evaluates an applicability condition written as data (factRules.js) against
// what the app knows about a lease. Answers can be missing, so a condition is
// true, false or unknown (three-valued logic): `all` is false if any part is
// false, `any` is true if any part is true, and otherwise either is unknown
// when a part is unknown. A rule applies unless its condition is false: a
// missing answer counts as "applies" (Taylor, 2026-11-21), except for a rule
// marked `unknownMeans: false`.
//
// A condition is one of:
//   { all: [ ...conditions ] }
//   { any: [ ...conditions ] }
//   { not: condition }
//   { fact: "<path>", op: "<op>", value: <value> }
// ops: eq, ne, in, nin (value is a list), lt, lte, gt, gte, includes (a
// pick-any answer contains the value), includesAny (contains one of a list),
// isSet, isBlank, matches (case-insensitive: text equals one of a list, ignoring a
// trailing "County"/"Parish"). Dates compare as YYYY-MM-DD strings.
//
// Fact paths (FACT_PATHS below lists every one; factRules.test.js checks rules
// use only these):
//   property.<question id>   an answer from the property's Lease questions (factCatalog.js)
//   lease.<question id>      an answer from the lease's Lease questions
//   account.<question id>    an answer on Your account (about the user personally)
//   owner.<question id>      an answer on the property's owner (its Entity)
//   plus the derived facts in DERIVED.

const { CATALOG, UTILITY_KINDS, ownerKindOf } = require("./factCatalog");

const UNKNOWN = "unknown";
const DAY_MS = 24 * 60 * 60 * 1000;

const isBlank = (v) => v === undefined || v === null || v === "" || (Array.isArray(v) && v.length === 0);
const iso = (d) => (d ? new Date(d).toISOString().slice(0, 10) : null);

function people(lease) {
  return (lease?.leaseTenants || []).filter((lt) => lt.role !== "GUARANTOR").map((lt) => lt.tenant).filter(Boolean);
}

function anyPerson(lease, field) {
  const ps = people(lease);
  if (ps.length === 0) return null;
  const all = [...ps, ...ps.flatMap((p) => p.occupants || [])];
  return all.some((p) => p[field] === true);
}

// For a Yes/No that starts blank, kept on each tenant and occupant.
function anyPersonYesNo(lease, field) {
  const ps = people(lease);
  if (ps.length === 0) return null;
  const all = [...ps, ...ps.flatMap((p) => p.occupants || [])];
  if (all.some((p) => p[field] === true)) return true;
  return all.every((p) => p[field] === false) ? false : null;
}

function carpetInSpecs(specs) {
  return (specs || []).some((f) => f.active !== false && /carpet/i.test(f.type || ""));
}

function utilityWhoPays(property, kind) {
  return property?.facts?.utilities?.[kind]?.whoPays ?? null;
}

// Derived facts: computed from stored records rather than asked.
// Where the property's owner is: a person's home, a business's principal office.
function ownerLocation(property) {
  const entity = property?.entity;
  const f = entity?.facts || {};
  const kind = ownerKindOf(entity);
  if (kind === "person") return { state: f.homeState || null, island: f.homeIsland || null };
  if (kind === "business") return { state: f.officeState || null, island: f.officeIsland || null };
  return { state: null, island: null };
}

const DERIVED = {
  "property.state": ({ property }) => property?.state ?? null,
  "property.yearBuilt": ({ property }) => property?.yearBuilt ?? null,
  "property.bedrooms": ({ property }) => property?.bedrooms ?? null,
  // A manager is "used" when the property names one (the manager fields are
  // optional, so blank means none).
  // No manager named reads as "no manager", except when deciding whether to
  // hide a clause: blank fields aren't an answer.
  // Answered on the property, or Yes when Property Specs lists carpet flooring
  // (no carpet in the specs isn't a No: the specs may be incomplete).
  // Any of the unit's meters (electric, gas, water) also serves areas outside
  // the unit; a utility not provided counts as No.
  "property.meterServesOutsideUnit": ({ property }) => {
    const f = property?.facts || {};
    const vals = [["electric", "electricMeterOutsideUnit"], ["gas", "gasMeterOutsideUnit"], ["water", "waterMeterOutsideUnit"]].map(([k, id]) =>
      f.utilities?.[k]?.whoPays === "NOT_PROVIDED" ? false : f[id] ?? null,
    );
    if (vals.includes(true)) return true;
    return vals.includes(null) ? null : false;
  },
  // A child under 6 on the lease (an occupant's age, or a tenant's birth date
  // at the lease start), else the lease's own answer.
  "lease.childUnder6": ({ lease }) => {
    const start = lease?.startDate ? new Date(lease.startDate) : new Date();
    const sixYearsBefore = new Date(start);
    sixYearsBefore.setUTCFullYear(sixYearsBefore.getUTCFullYear() - 6);
    for (const lt of lease?.leaseTenants || []) {
      const t = lt.tenant || {};
      if (t.dateOfBirth && new Date(t.dateOfBirth) > sixYearsBefore) return true;
      if ((t.occupants || []).some((o) => o.age !== null && o.age !== undefined && o.age < 6)) return true;
    }
    const v = lease?.facts?.childUnder6;
    return v === true || v === false ? v : null;
  },
  "property.electricOrGasMeterOutsideUnit": ({ property }) => {
    const f = property?.facts || {};
    const vals = [f.electricMeterOutsideUnit ?? null, f.utilities?.gas?.whoPays === "NOT_PROVIDED" ? false : f.gasMeterOutsideUnit ?? null];
    if (vals.includes(true)) return true;
    return vals.includes(null) ? null : false;
  },
  "property.hasCarpet": ({ property }) => {
    const v = property?.facts?.hasCarpet;
    if (v === true || v === false) return v;
    return carpetInSpecs(property?.flooringSpecs) ? true : null;
  },
  // A late fee: Yes needs an amount over $0; an amount alone counts as Yes.
  "lease.lateFeeCharged": ({ lease }) => {
    if (lease?.lateFeeCharged === true || lease?.lateFeeCharged === false) return lease.lateFeeCharged;
    if (lease?.lateFeeAmount !== undefined && lease?.lateFeeAmount !== null && Number(lease.lateFeeAmount) > 0) return true;
    return null;
  },
  "property.hasManager": ({ property, strictCheckboxes }) =>
    property?.facts?.managerCompany || property?.facts?.managerName ? true : strictCheckboxes ? null : false,
  "property.anyUtilityChargedBack": ({ property }) => {
    const u = property?.facts?.utilities;
    if (!u) return null;
    if (UTILITY_KINDS.some((k) => u[k.value]?.whoPays === "CHARGED_BACK")) return true;
    return UTILITY_KINDS.every((k) => u[k.value]?.whoPays) ? false : null;
  },
  // The charge-back methods used for any utility (a list, for `includes`).
  "property.chargeBackMethods": ({ property }) => {
    const u = property?.facts?.utilities;
    if (!u) return null;
    const methods = UTILITY_KINDS.filter((k) => u[k.value]?.whoPays === "CHARGED_BACK").map((k) => u[k.value]?.method);
    if (methods.some((m) => !m)) return null;
    if (methods.length === 0 && !UTILITY_KINDS.every((k) => u[k.value]?.whoPays)) return null;
    return methods;
  },
  ...Object.fromEntries(
    UTILITY_KINDS.flatMap((k) => [
      [`property.utility.${k.value}.whoPays`, ({ property }) => utilityWhoPays(property, k.value)],
      // "NONE" when the utility isn't charged back; unknown until who pays is answered.
      [`property.utility.${k.value}.method`, ({ property }) => {
        const who = utilityWhoPays(property, k.value);
        if (!who) return null;
        return who === "CHARGED_BACK" ? property?.facts?.utilities?.[k.value]?.method ?? null : "NONE";
      }],
    ]),
  ),
  "landlord.isEntity": ({ property }) => (property?.entity ? property.entity.entityType !== "PERSONAL" : null),
  // How many properties the landlord has in Steinoak (each unit is a property).
  "landlord.propertyCount": ({ landlord }) => landlord?.propertyCount ?? null,
  // How many of them are in this property's state.
  "landlord.propertyCountInState": ({ landlord, property }) => landlord?.propertyCountByState?.[property?.state] ?? null,
  // Whether the property's owner is in the property's state: where a person
  // owner lives, or a business owner's principal office (Taylor, 2026-11-26:
  // only a person lives somewhere). Read by Virginia's rule, which covers only
  // individual owners.
  "landlord.livesInPropertyState": ({ property }) => {
    const { state } = ownerLocation(property);
    return state ? state === property?.state : null;
  },
  // Hawaii (HRS § 521-43(f)): an owner who "resides" on the property's island.
  // For a business, "resides" is undefined; its principal office is used, and
  // a blank one counts as not answered (the clause is then included).
  "landlord.sameIsland": ({ property }) => {
    const { state, island } = ownerLocation(property);
    if (!state) return null;
    if (state !== "HI" || property?.state !== "HI") return false;
    const propertyIsland = property?.facts?.island;
    if (!island || !propertyIsland) return null;
    return island === propertyIsland;
  },
  "lease.depositTaken": ({ lease }) => {
    if (lease?.securityDepositTaken === true || lease?.securityDepositTaken === false) return lease.securityDepositTaken;
    const a = lease?.securityDepositAmount;
    if (a === null || a === undefined) return null;
    return Number(a) > 0;
  },
  "lease.leaseType": ({ lease }) => lease?.leaseType ?? null,
  "lease.startDate": ({ lease }) => iso(lease?.startDate),
  "lease.endDate": ({ lease }) => iso(lease?.endDate),
  // Whole days from start to end; null without both dates.
  "lease.termDays": ({ lease }) =>
    lease?.startDate && lease?.endDate ? Math.round((new Date(lease.endDate) - new Date(lease.startDate)) / DAY_MS) : null,
  // A start date after the 1st, or an end date before the month's last day.
  "lease.startsMidMonth": ({ lease }) => (lease?.startDate ? new Date(lease.startDate).getUTCDate() !== 1 : null),
  "lease.endsMidMonth": ({ lease }) => {
    if (!lease?.endDate) return null;
    const d = new Date(lease.endDate);
    return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1)).getUTCDate() !== 1;
  },
  "lease.petPolicy": ({ lease }) => (typeof lease?.petPolicy === "boolean" ? lease.petPolicy : null),
  // Unknown until someone is on the lease: the guarantor is often added with the tenants.
  "lease.hasGuarantor": ({ lease }) => {
    const lts = lease?.leaseTenants;
    if (!lts || lts.length === 0) return null;
    return lts.some((lt) => lt.role === "GUARANTOR");
  },
  // People on the lease: non-guarantor tenants plus their occupants.
  "lease.peopleCount": ({ lease }) => {
    const ps = people(lease);
    return ps.length ? ps.length + ps.reduce((n, p) => n + (p.occupants?.length || 0), 0) : null;
  },
  // True if anyone on the lease is; false only when everyone answered No.
  "lease.anyStudent": ({ lease }) => anyPersonYesNo(lease, "isStudent"),
  "lease.anyServicemember": ({ lease }) => anyPersonYesNo(lease, "isServicemember"),
  // True if any tenant is; false only when every tenant answered No.
  "lease.anyNonresidentAlien": ({ lease }) => {
    const ps = people(lease);
    if (ps.some((p) => p.nonresidentAlien === true)) return true;
    return ps.length && ps.every((p) => p.nonresidentAlien === false) ? false : null;
  },
  today: ({ today }) => iso(today || new Date()),
};

const TARGET_SOURCE = { property: "property", lease: "lease", account: "account", owner: "owner" };

function resolve(path, ctx) {
  if (DERIVED[path]) return DERIVED[path](ctx);
  const [target, id] = path.split(".");
  if (!TARGET_SOURCE[target] || !CATALOG[target].some((q) => q.id === id)) throw new Error(`Unknown fact: ${path}`);
  if (target === "account") return ctx.account?.[id] ?? null;
  const facts = (target === "owner" ? ctx.property?.entity?.facts : ctx[target]?.facts) || {};
  const v = facts[id];
  const q = CATALOG[target].find((x) => x.id === id);
  // An unticked checkbox reads as its default, except when deciding whether to
  // hide a clause (ctx.strictCheckboxes), where nobody-ticked counts as unanswered.
  if (isBlank(v) && q.type === "checkbox") return ctx.strictCheckboxes ? null : q.default ?? false;
  return isBlank(v) ? null : v;
}

const normName = (s) => String(s).trim().toLowerCase().replace(/\s+(county|parish)$/, "");

function leaf({ fact, op, value }, ctx) {
  const v = resolve(fact, ctx);
  if (op === "isSet") return !isBlank(v);
  if (op === "isBlank") return isBlank(v);
  if (isBlank(v)) return UNKNOWN;
  switch (op) {
    case "eq": return v === value;
    case "ne": return v !== value;
    case "in": return value.includes(v);
    case "nin": return !value.includes(v);
    case "lt": return v < value;
    case "lte": return v <= value;
    case "gt": return v > value;
    case "gte": return v >= value;
    case "includes": return Array.isArray(v) && v.includes(value);
    case "includesAny": return Array.isArray(v) && value.some((x) => v.includes(x));
    case "matches": return value.map(normName).includes(normName(v));
    default: throw new Error(`Unknown op: ${op}`);
  }
}

function evaluate(cond, ctx) {
  if (cond.all) {
    const r = cond.all.map((c) => evaluate(c, ctx));
    if (r.includes(false)) return false;
    return r.includes(UNKNOWN) ? UNKNOWN : true;
  }
  if (cond.any) {
    const r = cond.any.map((c) => evaluate(c, ctx));
    if (r.includes(true)) return true;
    return r.includes(UNKNOWN) ? UNKNOWN : false;
  }
  if (cond.not) {
    const r = evaluate(cond.not, ctx);
    return r === UNKNOWN ? UNKNOWN : !r;
  }
  return leaf(cond, ctx);
}

// Every fact a condition reads.
function factsIn(cond) {
  if (cond.all) return cond.all.flatMap(factsIn);
  if (cond.any) return cond.any.flatMap(factsIn);
  if (cond.not) return factsIn(cond.not);
  return [cond.fact];
}

const FACT_PATHS = [
  ...Object.keys(DERIVED),
  ...["property", "lease", "account", "owner"].flatMap((t) => CATALOG[t].map((q) => `${t}.${q.id}`)),
];

module.exports = {
  carpetInSpecs, evaluate, factsIn, resolve, UNKNOWN, FACT_PATHS, DERIVED };
