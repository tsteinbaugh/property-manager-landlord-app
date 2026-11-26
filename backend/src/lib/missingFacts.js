// The lease builder's fill-in-the-gaps questions (agreed with Taylor
// 2026-11-22): for one lease, the blank answers that its state's Required and
// Legal duty rules still wait on. Each comes with the clauses it decides, and
// saves back to where it lives (the property's, the lease's, the owner's or the account's
// Lease questions, or a property or lease field). A question whose follow-up
// depends on another answer (units in the building, after the property type)
// shows once that answer is in.

const { CATALOG, isVisible, fitsOwner } = require("./factCatalog");
const { resolve, UNKNOWN } = require("./ruleConditions");
const { ruleState, ruleReads } = require("./clauseApplicability");
const { tagIn } = require("./stateScopedTags");

// Questions that save to a record's own field rather than its Lease questions.
const FIELD_QUESTIONS = {
  "property.yearBuilt": {
    target: "propertyField",
    id: "yearBuilt",
    type: "number",
    label: "What year was the property built?",
    help: "Leave it blank if you don't know; the lead paint disclosure is then included.",
  },
  "lease.depositTaken": { target: "leaseField", id: "securityDepositTaken", type: "deposit", label: "Do you take a security deposit?" },
  "lease.leaseType": {
    target: "leaseField",
    id: "leaseType",
    type: "pickOne",
    label: "Is this a fixed-term or a month-to-month lease?",
    options: [
      { value: "FIXED", label: "Fixed term" },
      { value: "MONTH_TO_MONTH", label: "Month-to-month" },
    ],
  },
  "lease.endDate": { target: "leaseField", id: "endDate", type: "date", label: "When does the lease end?" },
};

// Derived facts that a blank answer to another question leaves unknown.
const DERIVED_FROM = {
  "lease.termDays": ["lease.leaseType", "lease.endDate"],
  "lease.endsMidMonth": ["lease.leaseType", "lease.endDate"],
  // Each owner question fits only a person or only a business (questionFor).
  "landlord.livesInPropertyState": ["owner.homeState", "owner.officeState"],
  "landlord.sameIsland": ["owner.homeState", "owner.homeIsland", "owner.officeState", "owner.officeIsland", "property.island"],
  "property.anyUtilityChargedBack": ["property.utilities"],
  "property.chargeBackMethods": ["property.utilities"],
  "property.meterServesOutsideUnit": ["property.electricMeterOutsideUnit", "property.gasMeterOutsideUnit", "property.waterMeterOutsideUnit"],
  "property.electricOrGasMeterOutsideUnit": ["property.electricMeterOutsideUnit", "property.gasMeterOutsideUnit"],
  "lease.childUnder6": ["lease.childUnder6"],
  ...Object.fromEntries(
    ["electric", "gas", "water", "sewer", "trash"].flatMap((k) => [
      [`property.utility.${k}.whoPays`, ["property.utilities"]],
      [`property.utility.${k}.method`, ["property.utilities"]],
    ]),
  ),
};

function answersFor(target, ctx) {
  if (target === "account") return ctx.account || {};
  if (target === "owner") return ctx.property?.entity?.facts || {};
  return ctx[target]?.facts || {};
}

// The question behind a path, or null when nothing can be asked for it.
function questionFor(path, ctx, state) {
  if (FIELD_QUESTIONS[path]) {
    if (path === "lease.endDate" && ctx.lease?.leaseType === "MONTH_TO_MONTH") return null;
    return { key: path, ...FIELD_QUESTIONS[path] };
  }
  const [target, id] = path.split(".");
  const q = CATALOG[target]?.find((x) => x.id === id);
  if (!q) return null;
  // builderOnly questions are asked here; isVisible's other checks still apply.
  if (!isVisible(q, [state], answersFor(target, ctx))) return null;
  if (target === "owner") {
    const entity = ctx.property?.entity;
    if (!entity || !fitsOwner(q, entity)) return null;
    // Name the owner, since it may not be the landlord using the app (an LLC).
    const name = entity.legalName || "the owner";
    return { key: path, target, ...q, recordId: entity.id, label: q.label.replace(/this owner/g, name) };
  }
  return { key: path, target, ...q };
}

function isBlankPath(path, ctx) {
  if (path === "property.utilities") {
    const u = ctx.property?.facts?.utilities;
    return !u || ["electric", "gas", "water", "sewer", "trash"].some((k) => !u[k]?.whoPays);
  }
  const v = resolve(path, ctx);
  return v === null || v === undefined || (Array.isArray(v) && v.length === 0);
}

// Facts about the people on the lease, asked once per tenant (and occupant),
// saved to their own record.
const PERSON_QUESTIONS = {
  "lease.anyStudent": { field: "isStudent", occupants: true, label: (name) => `Is ${name} a full-time student?` },
  "lease.anyServicemember": {
    field: "isServicemember",
    occupants: true,
    label: (name) => `Is ${name} an active-duty servicemember?`,
  },
  "lease.anyNonresidentAlien": {
    field: "nonresidentAlien",
    occupants: false,
    label: (name) => `Is ${name} a nonresident alien for U.S. tax purposes?`,
    help: "This is about the tenant's tax status, not immigration status; it doesn't affect who you can rent to.",
  },
};

function personQuestions(path, ctx) {
  const spec = PERSON_QUESTIONS[path];
  const tenants = (ctx.lease?.leaseTenants || []).filter((lt) => lt.role !== "GUARANTOR").map((lt) => lt.tenant);
  const out = [];
  for (const t of tenants) {
    const people = [{ target: "tenant", record: t, name: `${t.firstName} ${t.lastName}`.trim() }];
    if (spec.occupants) for (const o of t.occupants || []) people.push({ target: "occupant", record: o, name: o.name });
    for (const p of people) {
      if (p.record[spec.field] !== null && p.record[spec.field] !== undefined) continue;
      out.push({
        key: `${p.target}.${p.record.id}.${spec.field}`,
        target: p.target,
        recordId: p.record.id,
        id: spec.field,
        type: "yesno",
        label: spec.label(p.name),
        help: spec.help,
      });
    }
  }
  return out;
}

// templates: the provided clauses for this lease's state (already filtered).
function missingFacts(templates, ctx) {
  const state = ctx.property?.state;
  const byKey = new Map();
  // `blocks`: the question decides a Required clause, so the lease PDF waits
  // for it (Taylor, 2026-11-22); one that decides only Legal duty clauses doesn't.
  const add = (q, t) => {
    if (!byKey.has(q.key)) byKey.set(q.key, { ...q, clauses: [], blocks: false });
    const entry = byKey.get(q.key);
    entry.clauses.push(t.title);
    if (tagIn(t, state) === "REQUIRED") entry.blocks = true;
  };
  for (const t of templates) {
    if (!["REQUIRED", "LEGAL_DUTY"].includes(tagIn(t, state))) continue;
    if (ruleState(t.id, ctx) !== UNKNOWN) continue;
    const paths = ruleReads(t.id, ctx).flatMap((p) => DERIVED_FROM[p] || [p]);
    for (const path of new Set(paths)) {
      if (PERSON_QUESTIONS[path]) {
        for (const q of personQuestions(path, ctx)) add(q, t);
        continue;
      }
      if (!isBlankPath(path, ctx)) continue;
      const q = questionFor(path, ctx, state);
      if (!q) continue;
      add(q, t);
    }
  }
  const order = { leaseField: 0, lease: 1, tenant: 2, occupant: 2, propertyField: 3, property: 4, owner: 5, account: 6 };
  return [...byKey.values()].sort((a, b) => order[a.target] - order[b.target]);
}

module.exports = { missingFacts };
