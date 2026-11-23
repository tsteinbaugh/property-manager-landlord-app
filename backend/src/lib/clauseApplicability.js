// Provided clauses the law requires only in some situations, with the facts
// that decide whether this lease needs one (Taylor, 2026-11-21; extended
// 2026-11-22). Each rule reads facts the app already stores about the
// property and the lease. When a rule says a clause applies, "Add my default
// clauses" includes it: a Required clause always (the landlord can't untick
// it), a Legal duty clause unless the landlord unticked it, as for a Legal
// duty that always applies.
//
// A missing fact counts as "applies": leaving out a required disclosure is
// the worse mistake than including one that turns out unnecessary. The
// exception is a clause that would be wrong in a lease that doesn't need it
// (North Carolina's short-stay tax): that rule needs the fact.
//
// Each rule's test comes from the clause's research notes in
// lease-clauses.csv, which quote the statute.

const DAY_MS = 24 * 60 * 60 * 1000;

function date(value) {
  return value ? new Date(value) : null;
}

// Lead paint: housing built before 1978. Massachusetts (105 CMR 460.725(A))
// and Delaware (25 Del. C. § 5406(a)) use the same year; the federal rule's
// exceptions are below.
function builtBefore1978OrUnknown({ property }) {
  const year = property?.yearBuilt;
  return year === null || year === undefined || year < 1978;
}

// A security deposit is taken unless the lease's "Do you take a security
// deposit?" is answered No (Taylor, 2026-11-22). Not answered counts as taken,
// and the builder asks. An older lease with a $0 amount and no answer counts
// as No.
function depositTaken({ lease }) {
  if (lease?.securityDepositTaken === false) return false;
  if (lease?.securityDepositTaken === true) return true;
  const amount = lease?.securityDepositAmount;
  return amount === null || amount === undefined || Number(amount) > 0;
}

// A dog or cat recorded for a tenant on this lease (Maryland's "pet" is a
// domesticated dog or cat, Real Prop. § 14-801(d); the duty arises when the
// landlord knows of one, § 14-804).
function tenantHasDogOrCat({ lease }) {
  return (lease?.leaseTenants || []).some((lt) =>
    (lt.tenant?.pets || []).some((pet) => /\b(dog|cat|puppy|kitten)s?\b/i.test(pet.type || "")),
  );
}

// True once a law's start date has come: the lease starts on or after it, or
// it is being built on or after it (the law reaches leases entered into from
// that date, and the app doesn't record the signing date).
function onOrAfter(isoDate) {
  const from = new Date(`${isoDate}T00:00:00Z`);
  return ({ lease, today = new Date() }) => {
    const start = date(lease?.startDate);
    return today >= from || (start !== null && start >= from);
  };
}

// A fixed term of a year or more. No end date (month-to-month or not
// entered) counts as applies.
function termOneYearOrUnknown({ lease }) {
  const start = date(lease?.startDate);
  const end = date(lease?.endDate);
  if (!start || !end) return true;
  const yearLater = new Date(start);
  yearLater.setUTCFullYear(yearLater.getUTCFullYear() + 1);
  return end.getTime() >= yearLater.getTime() - DAY_MS;
}

// A fixed term of fewer than 90 continuous days. Needs both dates: the
// clause adds sales and occupancy tax, which would be wrong on a longer lease.
function termUnder90Days({ lease }) {
  const start = date(lease?.startDate);
  const end = date(lease?.endDate);
  if (!start || !end) return false;
  return (end.getTime() - start.getTime()) / DAY_MS + 1 < 90;
}

const both = (...tests) => (ctx) => tests.every((test) => test(ctx));
const always = () => true;

// The federal lead disclosure (read on eCFR 2026-11-23). "Target housing" is
// housing built before 1978 "except housing for the elderly or persons with
// disabilities or any 0-bedroom dwelling (unless any child who is less than 6
// years of age resides or is expected to reside in such housing)" (40 C.F.R. §
// 745.103), and a lease of a unit "found to be lead-based paint free by an
// inspector certified" is exempt (§ 745.101(b)). Not modeled, so the clause
// stays: a lease of 100 days or less that can't be renewed or extended
// (§ 745.101(c)) and a renewal with nothing new to disclose (§ 745.101(d)).
// Returns true, false, or UNKNOWN while a fact that decides it is blank.
function federalLeadState(ctx) {
  const { property } = ctx;
  const year = property?.yearBuilt;
  if (year === null || year === undefined) return UNKNOWN_LEAD;
  if (year >= 1978) return false;
  if (property?.facts?.certifiedLeadFree === true) return false;
  if (!mayBeExemptHousing(property)) return true;
  const child = resolve("lease.childUnder6", ctx);
  if (child === null) return UNKNOWN_LEAD;
  return child;
}
function mayBeExemptHousing(property) {
  return property?.bedrooms === 0 || property?.facts?.elderlyOrDisabledHousing === true;
}
const UNKNOWN_LEAD = Symbol("unknown");

// Each note says when the rule applies, completing "This applies ..."; the
// Clause Library adds what the tag means.
const LEAD_NOTE = "when the property was built before 1978 or its year built isn't entered";
const DEPOSIT_NOTE = "when you take a security deposit (unless the lease answers No)";

// The facts each hand-written rule reads (the paths ruleConditions.js uses),
// so the builder can ask for the blank ones.
const LEAD_READS = ["property.yearBuilt"];
const DEPOSIT_READS = ["lease.depositTaken"];
const TERM_READS = ["lease.leaseType", "lease.endDate"];

const RULES = {
  // Lead paint (year built).
  "lead-based-paint": {
    applies: (ctx) => federalLeadState(ctx) !== false,
    state: (ctx) => {
      const r = federalLeadState(ctx);
      return r === UNKNOWN_LEAD ? UNKNOWN : r;
    },
    note: "when the property was built before 1978 or its year built isn't entered, unless it's certified lead-free, or it's a studio or housing for seniors or people with disabilities where no child under 6 lives",
    reads: (ctx) => (mayBeExemptHousing(ctx?.property) ? [...LEAD_READS, "lease.childUnder6"] : LEAD_READS),
  },
  "lead-based-paint-dc": { applies: builtBefore1978OrUnknown, note: LEAD_NOTE, reads: LEAD_READS },
  "lead-disclosure-ri": { applies: builtBefore1978OrUnknown, note: LEAD_NOTE, reads: LEAD_READS },
  "lead-law-certification-ma": { applies: builtBefore1978OrUnknown, note: LEAD_NOTE, reads: LEAD_READS },
  // 25 Del. C. § 5406(a), implemented by March 1, 2028 at the latest (85 Del.
  // Laws c. 98, § 5(2)); an earlier Housing Authority notice would bring the
  // date forward (legal watch).
  "lead-certification-de": {
    applies: both(builtBefore1978OrUnknown, onOrAfter("2028-03-01")),
    reads: LEAD_READS,
    note: "from March 1, 2028, when the property was built before 1978 or its year built isn't entered",
  },

  // Security deposit taken.
  "security-deposit-use-wa": { applies: depositTaken, note: DEPOSIT_NOTE, reads: DEPOSIT_READS },
  "security-deposit-use-md": { applies: depositTaken, note: DEPOSIT_NOTE, reads: DEPOSIT_READS },
  "security-deposit-use-ma": { applies: depositTaken, note: DEPOSIT_NOTE, reads: DEPOSIT_READS },
  "security-deposit-return-ma": { applies: depositTaken, note: DEPOSIT_NOTE, reads: DEPOSIT_READS },
  "security-deposit-use-or": { applies: depositTaken, note: DEPOSIT_NOTE, reads: DEPOSIT_READS },
  "security-deposit-use-ak": { applies: depositTaken, note: DEPOSIT_NOTE, reads: DEPOSIT_READS },
  "security-deposit-use-dc": { applies: depositTaken, note: DEPOSIT_NOTE, reads: DEPOSIT_READS },
  "nonrefundable-deposit-disclosure-wy": { applies: depositTaken, note: DEPOSIT_NOTE, reads: DEPOSIT_READS },
  "security-deposit-holding-wy": { applies: depositTaken, note: DEPOSIT_NOTE, reads: DEPOSIT_READS },
  "security-deposit-notice-mi": { applies: depositTaken, note: DEPOSIT_NOTE, reads: DEPOSIT_READS },
  "deposit-depository-wa": { applies: depositTaken, note: DEPOSIT_NOTE, reads: DEPOSIT_READS },
  // Fla. Stat. § 83.49(2) reaches a landlord with five or more units; the
  // notice is harmless for a smaller landlord (Taylor, 2026-11-22), so it
  // follows the deposit alone.
  "security-deposit-notice-fl": { applies: depositTaken, note: DEPOSIT_NOTE, reads: DEPOSIT_READS },

  // Colorado's statement is required unless the landlord has five or fewer
  // single-family rentals and five or fewer units (C.R.S. § 38-12-801(2.5));
  // it is harmless for an exempt landlord, so every Colorado lease gets it
  // (Taylor, 2026-11-22).
  "source-of-income-statement-co": {
    applies: always,
    note: "to every Colorado lease (it's required for most landlords and harmless for the rest)",
  },

  // Pets.
  "pet-eviction-fact-sheet-md": {
    applies: tenantHasDogOrCat,
    note: "when a tenant on the lease has a dog or cat recorded",
  },

  // Laws that start on a date.
  "flood-disclosure-wa": {
    applies: onOrAfter("2027-01-01"),
    note: "to leases entered into after December 31, 2026",
  },
  // 25 Del. C. § 5124(c), from June 10, 2027 at the latest (85 Del. Laws c.
  // 277, § 5); an earlier notice in the Register would bring it forward.
  "rights-guide-receipt-de": {
    applies: onOrAfter("2027-06-10"),
    note: "to leases from June 10, 2027",
  },

  // Lease length.
  "flood-disclosure-fl": {
    applies: termOneYearOrUnknown,
    reads: TERM_READS,
    note: "to a lease of a year or longer (or one without an end date)",
  },
  "rent-tax-nc": {
    applies: termUnder90Days,
    reads: TERM_READS,
    note: "when the lease's dates are fewer than 90 days apart",
  },
};

// Rules written as data over the Lease questions' answers (factRules.js,
// evaluated by ruleConditions.js), added 2026-11-22. A hand-written rule above
// wins if a clause has both.
const { FACT_RULES } = require("./factRules");
const { evaluate, factsIn, resolve, UNKNOWN } = require("./ruleConditions");

for (const [id, rule] of Object.entries(FACT_RULES)) {
  if (RULES[id]) continue;
  RULES[id] = {
    applies: (ctx) => {
      const r = evaluate(rule.condition, ctx);
      return r === UNKNOWN ? rule.unknownMeans !== false : r;
    },
    state: (ctx) => evaluate(rule.condition, ctx),
    note: rule.note,
    reads: [...new Set(factsIn(rule.condition))],
  };
}

// True if templateId has an applicability rule and it applies to this lease.
// ctx: { property, lease, account?, landlord?, today? }; lease.leaseTenants[].tenant
// (with pets and occupants) for facts about the people on the lease; account is
// the user's Your account answers; landlord.propertyCount the number of their
// properties.
function ruleApplies(templateId, ctx) {
  const rule = RULES[templateId];
  return Boolean(rule && rule.applies(ctx || {}));
}

function applicabilityNote(templateId) {
  return RULES[templateId]?.note || null;
}

// Whether a rule's answer is settled for this lease: true, false, or UNKNOWN
// while a fact it reads is blank (even if blank currently counts as applies).
function ruleState(templateId, ctx) {
  const rule = RULES[templateId];
  if (!rule) return false;
  if (rule.state) return rule.state(ctx);
  const blank = ruleReads(templateId, ctx).some((path) => {
    const v = resolve(path, ctx);
    return v === null || v === undefined;
  });
  return blank ? UNKNOWN : rule.applies(ctx);
}

// The facts a rule reads; a hand-written rule may read more in some cases
// (the federal lead rule asks about a child under 6 only when an exemption is possible).
function ruleReads(templateId, ctx) {
  const reads = RULES[templateId]?.reads || [];
  return typeof reads === "function" ? reads(ctx || {}) : reads;
}

module.exports = {
  ruleApplies,
  ruleState,
  ruleReads,
  applicabilityNote,
  APPLICABILITY_RULE_IDS: Object.keys(RULES),
};
