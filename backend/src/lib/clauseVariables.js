const { PROPERTY_FIELDS, LEASE_FIELDS } = require("./clauseFields");
const { CLAUSE_TEMPLATES } = require("./clauseTemplates");
const { isVisible } = require("./factCatalog");

// A provided clause the law requires in the lease itself: its blanks must be
// filled before the PDF, since a line isn't the text the law asks for (Taylor,
// 2026-11-27). A copy the landlord customized has no template and only warns.
const REQUIRED_TEMPLATE_IDS = new Set(CLAUSE_TEMPLATES.filter((t) => t.tag === "REQUIRED").map((t) => t.id));
const isRequiredClause = (clause) => REQUIRED_TEMPLATE_IDS.has(clause.sourceTemplateId);

const VARIABLE_PATTERN = /\{\{\s*([a-z_]+)\s*\}\}/g;

function money(amount) {
  if (amount === null || amount === undefined) return null;
  return `$${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Lease dates are date-only (stored at midnight UTC), so read them in UTC; the
// server's own timezone would show them a day early west of UTC (2026-11-23).
function formatDate(date) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-US", { timeZone: "UTC" });
}

function formatAddress(property) {
  if (!property) return null;
  const line1 = [property.address1, property.address2].filter(Boolean).join(", ");
  const cityLine = [property.city, property.state, property.zip].filter(Boolean).join(", ");
  return [line1, cityLine].filter(Boolean).join(", ");
}

// Occupant.name is required, so a plain join is always safe here.
// Unlike security_deposit/pet_rent_amount, an empty result here is the normal case (most
// leases have no additional occupants), not a forgotten field — so this resolves to a plain
// phrase instead of null, avoiding a literal, always-visible "{{occupant_names}}" on every
// lease that doesn't have any.
function formatOccupantNames(occupants) {
  if (!occupants || occupants.length === 0) return "no additional occupants identified in this Lease";
  return occupants.map((o) => o.name).join(", ");
}

// Appliance has no dedicated "type" field (e.g. "Refrigerator") — location is
// the closest existing field landlords use for that (see Property Specs), so
// it's used as the primary label with make/model appended when present.
function formatApplianceList(appliances) {
  if (!appliances || appliances.length === 0) return null;
  return appliances
    .map((a) => {
      const detail = [a.make, a.model].filter(Boolean).join(" ");
      if (!a.location) return detail || null;
      return detail ? `${a.location} (${detail})` : a.location;
    })
    .filter(Boolean)
    .join("; ");
}

const UTILITY_LABELS = { electric: "electric", gas: "gas", water: "water", sewer: "sewer", trash: "trash" };
const METHOD_LABELS = { SUBMETER: "a separate meter for this unit (submeter)", SHARED_SPLIT: "a shared bill split by a formula", FLAT: "a flat monthly charge" };

// Utility lists come from the property's "who pays" answers. A list is filled
// only once every utility is answered, so a partial answer never reads as the
// whole list; a category nothing falls into reads "none".
function utilityLists(facts) {
  const u = facts?.utilities || {};
  const kinds = Object.keys(UTILITY_LABELS);
  if (kinds.some((k) => !u[k]?.whoPays)) return {};
  const pick = (who) => kinds.filter((k) => u[k].whoPays === who);
  const list = (ks) => (ks.length ? ks.map((k) => UTILITY_LABELS[k]).join(", ") : "none");
  const charged = pick("CHARGED_BACK");
  const methods = charged.map((k) => (u[k].method ? `${UTILITY_LABELS[k]}: ${METHOD_LABELS[u[k].method]}` : null));
  return {
    tenant_utilities: list(pick("TENANT_DIRECT")),
    included_utilities: list(pick("INCLUDED")),
    separately_charged_utilities: charged.length ? list(charged) : null,
    utility_billing_method: charged.length && methods.every(Boolean) ? methods.join("; ") : null,
  };
}

// Every clause that uses {{county}} but one writes "County" after it, so a
// stored "Fulton County" becomes "Fulton".
function countyName(facts) {
  const c = facts?.county?.trim();
  return c ? c.replace(/\s+(County|Parish|Borough)$/i, "") : null;
}

function joinOrNull(values) {
  return values.length > 0 && values.every(Boolean) ? values.join(", ") : null;
}

function formatField(q, value, variable) {
  if (value === undefined || value === null || value === "") return null;
  if (q.choice) {
    const option = q.options.find((o) => o.value === value);
    return option ? option.printIn?.[variable] ?? option.print : null;
  }
  if (q.type === "money") return money(value);
  if (q.type === "date") return formatDate(value);
  return String(value);
}

// Variables filled straight from a stored clause field (clauseFields.js).
function clauseFieldValues(propertyFacts, leaseFacts) {
  const out = {};
  for (const [fields, facts] of [[PROPERTY_FIELDS, propertyFacts], [LEASE_FIELDS, leaseFacts]]) {
    for (const q of fields) for (const v of q.vars) out[v] = formatField(q, facts[q.id], v);
  }
  return out;
}

// The picked value of each choice, by variable, for {{#name:value}} passages.
const PICKED = Symbol("picked");
// The raw answers and the state, so a blank whose question is hidden (its
// showIf not met) is neither listed nor held (2026-11-27).
const ANSWERS = Symbol("answers");

// Clause questions the app answers itself from data it already stores (Taylor,
// 2026-11-27). Each returns the question's answer, or null when the stored
// data is missing, in which case the question is asked as before. A stored
// value wins over an answer typed under the clause earlier.
const DERIVED = Symbol("derived");
const PAYER = { TENANT_DIRECT: "tenant", INCLUDED: "landlord", NOT_PROVIDED: "none" };
function unitsIn(property) {
  const pf = property?.facts || {};
  if (pf.unitsInBuilding != null && pf.unitsInBuilding !== "") return Number(pf.unitsInBuilding);
  return pf.propertyType === "SINGLE_FAMILY" ? 1 : null;
}
function petList(tenants) {
  const pets = tenants.filter((t) => t.role !== "GUARANTOR").flatMap((t) => t.pets || []);
  if (pets.length === 0) return null;
  return pets.map((p) => [`a ${p.type}`, p.name, p.breed].filter(Boolean).join(", ")).join("; ");
}
const DERIVE = {
  landlordPhone: { from: "the owner's page", get: ({ entity }) => entity?.contactPhone || null },
  // Only a number known to take texts (Taylor, 2026-11-27).
  landlordMobileNumber: { from: "the owner's page", get: ({ entity }) => (entity?.contactPhoneTexts === true ? entity.contactPhone || null : null) },
  tenantMobileNumber: {
    from: "the tenant's page",
    get: ({ tenants }) => {
      const t = tenants.find((x) => x.role === "PRIMARY") || tenants.find((x) => x.role !== "GUARANTOR");
      return t?.phoneTexts === true ? t.phone || null : null;
    },
  },
  heatPayer: {
    from: "the property's Utilities",
    get: ({ property }) => {
      const f = property?.facts || {};
      const kind = { gas: "gas", electric: "electric" }[f.heatingFuel];
      return kind ? ({ TENANT_DIRECT: "tenant", INCLUDED: "landlord" })[f.utilities?.[kind]?.whoPays] || null : null;
    },
  },
  ownerPhone: { from: "the owner's page", get: ({ entity }) => entity?.contactPhone || null },
  depositReceivedDate: {
    from: "this lease's Deposits",
    get: ({ deposits }) => {
      const d = deposits.find((x) => x.type === "SECURITY");
      return d?.dateReceived ? new Date(d.dateReceived).toISOString().slice(0, 10) : null;
    },
  },
  approvedPets: { from: "the tenants' pets", get: ({ tenants }) => petList(tenants) },
  // Each occupant's name and birth date, once every occupant has one (2026-11-28).
  occupantDetails: {
    from: "the tenants' occupants",
    get: ({ occupants = [] }) => {
      if (occupants.length === 0 || occupants.some((o) => !o.dateOfBirth)) return null;
      const born = (d) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
      return occupants.map((o) => `${o.name}, born ${born(o.dateOfBirth)}`).join("; ");
    },
  },
  approvedPetsList: { from: "the tenants' pets", get: ({ tenants }) => petList(tenants) },
  builtPreSeventyEight: {
    from: "the property's year built",
    get: ({ property }) => (property?.yearBuilt ? (property.yearBuilt < 1978 ? "yes" : "no") : null),
  },
  buildingSixPlusUnits: { from: "the property page", get: ({ property }) => (unitsIn(property) == null ? null : unitsIn(property) >= 6 ? "yes" : "no") },
  multiUnitDwelling: { from: "the property page", get: ({ property }) => (unitsIn(property) == null ? null : unitsIn(property) >= 2 ? "yes" : "no") },
  gasPayer: { from: "the property's Utilities", get: ({ property }) => PAYER[property?.facts?.utilities?.gas?.whoPays] || null },
  electricityPayer: {
    from: "the property's Utilities",
    get: ({ property }) => ({ TENANT_DIRECT: "tenant", INCLUDED: "landlord" })[property?.facts?.utilities?.electric?.whoPays] || null,
  },
  waterSewerPayer: {
    from: "the property's Utilities",
    get: ({ property }) => {
      const u = property?.facts?.utilities || {};
      const pick = { TENANT_DIRECT: "tenant", INCLUDED: "landlord" };
      return pick[u.water?.whoPays] && pick[u.water?.whoPays] === pick[u.sewer?.whoPays] ? pick[u.water.whoPays] : null;
    },
  },
  parkingProvided: {
    from: "this lease's Parking",
    get: ({ lease }) => (lease.facts?.parkingAssigned == null || lease.facts.parkingAssigned === "" ? null : Number(lease.facts.parkingAssigned) > 0 ? "yes" : "no"),
  },
  parkingFeeCharged: {
    from: "this lease's Parking",
    get: ({ lease }) => (typeof lease.facts?.parkingCharged === "boolean" ? (lease.facts.parkingCharged ? "yes" : "no") : null),
  },
  foreclosurePending: {
    from: "this lease's foreclosure question",
    get: ({ lease }) => (typeof lease.facts?.foreclosureUnderway === "boolean" ? (lease.facts.foreclosureUnderway ? "yes" : "no") : null),
  },
  foreclosureProceedings: {
    from: "this lease's foreclosure question",
    get: ({ lease }) => (typeof lease.facts?.foreclosureUnderway === "boolean" ? (lease.facts.foreclosureUnderway ? "yes" : "no") : null),
  },
  seasonalNonPrimary: {
    from: "this lease's seasonal question",
    get: ({ lease }) => (typeof lease.facts?.seasonal === "boolean" ? (lease.facts.seasonal ? "yes" : "no") : null),
  },
};
// New York's Good Cause Eviction Law (Real Prop. Law §§ 211, 213, 214, read
// 2026-11-27): the exemptions stored data settles, and "covered", worked out.
const NYC_COUNTIES = ["new york", "kings", "queens", "bronx", "richmond", "manhattan", "brooklyn", "staten island", "the bronx"];
const GOOD_CAUSE_EXEMPTIONS = [
  "goodCauseExemptSmallLandlord", "goodCauseExemptOwnerOccupied", "goodCauseExemptRegulated", "goodCauseExemptAffordable",
  "goodCauseExemptCondoCoop", "goodCauseExemptNewBuilding", "goodCauseExemptSeasonal", "goodCauseExemptCareFacility",
  "goodCauseExemptManufacturedHome", "goodCauseExemptHotel", "goodCauseExemptDormitory", "goodCauseExemptReligious",
  "goodCauseExemptHighRent",
];
const NY = (property) => property?.state === "NY";
Object.assign(DERIVE, {
  goodCauseExemptNotAdopted: {
    from: "the property's county",
    get: ({ property }) => {
      const c = String(property?.facts?.county || "").toLowerCase().replace(/\s+county$/, "").trim();
      return NY(property) && NYC_COUNTIES.includes(c) ? "nyc" : null;
    },
  },
  goodCauseExemptOwnerOccupied: {
    from: "the property page",
    get: ({ property }) => {
      if (!NY(property)) return null;
      const lives = property.facts?.ownerLivesInBuilding;
      if (lives === false) return "no";
      const units = unitsIn(property);
      if (units != null && units > 10) return "no";
      return lives === true && units != null ? "yes" : null;
    },
  },
  goodCauseExemptCondoCoop: {
    from: "the property type",
    get: ({ property }) => (NY(property) && ["CONDO", "COOP"].includes(property.facts?.propertyType) ? "yes" : null),
  },
  goodCauseExemptNewBuilding: {
    // A building built in 2009 or later got its certificate of occupancy then,
    // under 30 years ago; an older one may have a newer certificate, so it's asked.
    from: "the property's year built",
    get: ({ property }) => (NY(property) && property.yearBuilt >= 2009 ? "yes" : null),
  },
  goodCauseExemptManufacturedHome: {
    from: "the property type",
    get: ({ property }) => (NY(property) && property.facts?.propertyType && property.facts.propertyType !== "MANUFACTURED_HOME" ? "no" : null),
  },
  goodCauseExemptSeasonal: {
    from: "this lease's seasonal question",
    get: ({ property, lease }) => (NY(property) && lease.facts?.seasonal === false ? "no" : null),
  },
});
Object.assign(DERIVE, {
  // Colorado's exemption the exempt month-to-month clause names (2026-11-27).
  forCauseExemption: {
    from: "the property page and the lease dates",
    get: ({ property, lease }) => {
      if (property?.state !== "CO") return null;
      const e = require("./forCauseEvictionVariant").coForCauseExemption(property, lease);
      return { OWNER_OCCUPIED_OR_ADJACENT: "b", SHORT_TERM_RENTAL: "a" }[e] || null;
    },
  },
});
Object.assign(DERIVE, {
  // HRS § 515-4(a), read 2026-11-27: a two-unit building the owner or lessor
  // lives in, or rooms rented in the owner's own home. Anything else, or facts
  // not yet answered, means the promise prints.
  fairHousingExempt: {
    from: "the property page",
    get: ({ property }) => {
      if (property?.state !== "HI") return null;
      const f = property.facts || {};
      const exempt = f.propertyType === "ROOM_IN_OWNER_HOME" || (unitsIn(property) === 2 && f.ownerLivesInBuilding === true);
      return exempt ? null : "no";
    },
  },
});
Object.assign(DERIVE, {
  // Iowa Admin. Code r. 481-280.17(2), read 2026-11-27: a fuel-burning heater,
  // furnace, appliance or fireplace, or an attached garage. Only a Yes can be
  // worked out from stored facts (an electric heat answer says nothing about
  // a gas stove or a garage), so a No is still asked.
  coAlarmsRequired: {
    from: "the property page",
    get: ({ property }) => {
      if (property?.state !== "IA") return null;
      const f = property.facts || {};
      return ["gas", "oil", "propane", "wood"].includes(f.heatingFuel) || f.fireplace === true ? "yes" : null;
    },
  },
});
// Answers worked out from the others, stored and typed alike.
const COMPUTE = {
  goodCauseCovered: {
    from: "your answers under the clause",
    get: (a) => {
      const where = a.goodCauseExemptNotAdopted;
      if (where === "not_adopted") return "no";
      if (where !== "nyc" && where !== "adopted") return null;
      const values = GOOD_CAUSE_EXEMPTIONS.map((id) => a[id]);
      if (values.includes("yes")) return "no";
      return values.every((v) => v === "no") ? "yes" : null;
    },
  },
};
function derivedAnswers(sources) {
  const out = {};
  for (const [id, d] of Object.entries(DERIVE)) {
    const value = d.get(sources);
    if (value !== null && value !== undefined && value !== "") out[id] = { value, from: d.from };
  }
  const answers = { ...(sources.property?.facts || {}), ...(sources.lease.facts || {}), ...Object.fromEntries(Object.entries(out).map(([id, d]) => [id, d.value])) };
  for (const [id, d] of Object.entries(COMPUTE)) {
    const value = d.get(answers);
    if (value !== null && value !== undefined) out[id] = { value, from: d.from };
  }
  return out;
}
function pickedValues(propertyFacts, leaseFacts) {
  const out = {};
  for (const [fields, facts] of [[PROPERTY_FIELDS, propertyFacts], [LEASE_FIELDS, leaseFacts]]) {
    for (const q of fields) if (q.choice) for (const v of q.vars) out[v] = facts[q.id] ?? null;
  }
  return out;
}

const STATE_NAMES = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California", CO: "Colorado", CT: "Connecticut",
  DE: "Delaware", FL: "Florida", GA: "Georgia", HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland", MA: "Massachusetts", MI: "Michigan",
  MN: "Minnesota", MS: "Mississippi", MO: "Missouri", MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire",
  NJ: "New Jersey", NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio", OK: "Oklahoma",
  OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina", SD: "South Dakota", TN: "Tennessee",
  TX: "Texas", UT: "Utah", VT: "Vermont", VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin",
  WY: "Wyoming", DC: "District of Columbia", PR: "Puerto Rico", GU: "Guam", VI: "Virgin Islands",
  AS: "American Samoa", MP: "Northern Mariana Islands",
};

// Whether a typed address is in this state: it ends with the state's code or
// name, then an optional ZIP and country ("..., Reno, NV 89501"), so a street
// named for a state ("California St") doesn't count.
function addressInState(address, state) {
  if (!address || !STATE_NAMES[state]) return false;
  return new RegExp(`\\b(${state}|${STATE_NAMES[state]})\\.?,?\\s*(\\d{5}(-\\d{4})?)?\\s*(,?\\s*(USA|United States))?\\s*$`).test(address.trim());
}

// A business owner's registered agent accepts lawsuits ("service of process")
// for it, so it can fill the clauses that name the owner's agent for service
// (California Civ. Code § 1962, NRS 118A.260), but only when the agent's
// address is in the property's state: both laws want a person in the state, at
// an address where papers can be handed over. Not Virginia's agent, whose
// clause applies only to individual owners. The property's own agent field
// comes first.
function registeredAgentFor(entity, property) {
  if (!entity || entity.entityType === "PERSONAL") return null;
  if (!entity.registeredAgent || !addressInState(entity.registeredAgentAddress, property?.state)) return null;
  return { name: entity.registeredAgent, address: entity.registeredAgentAddress };
}

// Flat dict of {{variable}} values resolved from data the lease already has
// linked (Property/Entity/Tenant/Occupant/Appliance/Deposit), not new
// structured fields invented just to back a variable. Anything not already
// modeled (smoking policy, acceptable payment methods, etc.) simply has no
// variable and stays as plain clause text a landlord edits by hand.
function buildVariableContext({ lease, property, entity, tenants, occupants = [], appliances = [], petDepositAmount = null }) {
  // Guarantors sign the lease but aren't tenants.
  const renters = tenants.filter((t) => t.role !== "GUARANTOR");
  const guarantors = tenants.filter((t) => t.role === "GUARANTOR");
  const fullName = (t) => `${t.firstName} ${t.lastName}`;
  const primary = renters.find((t) => t.role === "PRIMARY") || renters[0];
  const derived = derivedAnswers({ lease, property, entity, tenants, occupants, deposits: lease.deposits || [] });
  const answered = Object.fromEntries(Object.entries(derived).map(([id, d]) => [id, d.value]));
  const pf = { ...(property?.facts || {}), ...answered };
  const managerName = pf.managerName || pf.managerCompany || null;
  const lf = { ...(lease.facts || {}), ...answered };
  const noticeAddress = lf.noticeAddress || entity?.mailingAddress || null;
  const agent = pf.serviceAgentName ? null : registeredAgentFor(entity, property);
  const fields = clauseFieldValues(pf, lf);
  return {
    ...fields,
    ...(agent
      ? {
          owner_agent_name: agent.name,
          owner_agent_address: fields.owner_agent_address || agent.address,
          owner_agent_street_address: fields.owner_agent_street_address || agent.address,
        }
      : {}),
    [PICKED]: pickedValues(pf, lf),
    [ANSWERS]: { answers: { ...pf, ...lf }, state: property?.state ?? null },
    [DERIVED]: derived,
    ...utilityLists(pf),
    // Cal OES's MyHazards tool, named in Cal. Gov. Code § 8589.45.
    myhazards_url: "https://myhazards.caloes.ca.gov",
    renters_liability_limit: money(lease.tenantInsuranceMinimumCoverage),
    monthly_rent: money(lease.monthlyRent),
    security_deposit: money(lease.securityDepositAmount),
    pet_deposit: money(petDepositAmount),
    late_fee_amount: money(lease.lateFeeAmount),
    late_fee_grace_days: lease.lateFeeGraceDays ?? null,
    pet_rent_amount: money(lease.petRentAmount),
    renewal_rent_increase_cap: lease.renewalRentIncreaseCap ?? null,
    tenant_insurance_minimum: money(lease.tenantInsuranceMinimumCoverage),
    start_date: formatDate(lease.startDate),
    end_date: formatDate(lease.endDate),
    tenant_names: renters.length > 0 ? renters.map(fullName).join(", ") : null,
    // Filled only when every tenant has one, so no tenant is silently left out.
    tenant_email: joinOrNull(renters.map((t) => t.email)),
    tenant_emergency_contact_name: primary?.emergencyContactName || null,
    tenant_emergency_contact_phone: primary?.emergencyContactName ? primary.emergencyContactPhone || null : null,
    guarantor_name: guarantors.length > 0 ? guarantors.map(fullName).join(" and ") : null,
    occupant_names: formatOccupantNames(occupants),
    appliance_list: formatApplianceList(appliances),
    property_address: formatAddress(property),
    // Address parts, for forms that ask them one by one (New York's Good Cause
    // notice, 2026-11-27). A unit-less property reads "None".
    property_street: property?.address1 || null,
    property_unit: property ? property.address2 || "None" : null,
    property_city: property?.city || null,
    property_zip: property?.zip || null,
    year_built: property?.yearBuilt ? String(property.yearBuilt) : null,
    landlord_name: entity?.legalName ?? null,
    // Where the tenant sends notices: the lease's own address, else the owning
    // entity's mailing address (Taylor, 2026-11-22).
    landlord_notice_address: noticeAddress,
    // The lease page's Rent payment section; a blank field falls back to the
    // entity and the notice address, as the section shows.
    rent_payee_name: lf.rentPayeeName || entity?.legalName || null,
    rent_payee_address: lf.rentPaymentAddress || noticeAddress,
    payment_address: lf.rentPaymentAddress || noticeAddress,
    rent_payee_phone: lf.rentPayeePhone || entity?.contactPhone || null,
    rent_payment_forms: lf.rentPaymentForms || null,
    rent_payment_days_hours: lf.rentPaymentDaysHours || null,
    // The tenants' emergency number: its own field, else the manager's phone,
    // else the entity's (the landlord must give one either way).
    emergency_phone: pf.emergencyPhone || (managerName ? pf.managerPhone : null) || entity?.contactPhone || null,
    // The clauses state the month's total for the lease's spaces.
    parking_fee_amount:
      lf.parkingCharged === true && lf.parkingFeePerSpace != null && Number(lf.parkingAssigned) > 0
        ? money(Number(lf.parkingFeePerSpace) * Number(lf.parkingAssigned))
        : null,
    parking_space_number: lf.parkingSpaceNumbers || null,
    landlord_notice_name: entity?.legalName ?? null,
    landlord_email: entity?.contactEmail || null,
    // The owner is the entity that holds the property.
    owner_name: entity?.legalName ?? null,
    owner_address: entity?.mailingAddress || null,
    county: countyName(pf),
    // The property manager, from the property page's Property manager section.
    manager_name: managerName,
    manager_phone: pf.managerPhone || null,
    manager_address: pf.managerAddress || null,
    manager_street_address: pf.managerAddress || null,
    management_company_name: pf.managerCompany || null,
    management_company_street_address: pf.managerCompany ? pf.managerAddress || null : null,
    // Wyoming's clause asks for the agent's Wyoming street address; filled only
    // when the stored address is in Wyoming.
    ...(pf.managerAddress && /\b(WY|Wyoming)\b/.test(pf.managerAddress)
      ? { wy_manager_name: managerName, wy_manager_address: pf.managerAddress, wy_manager_phone: pf.managerPhone || null }
      : {}),
    state: property?.state ?? null,
  };
}

const isBlank = (value) => value === null || value === undefined || value === "";

// What a blank prints as, to be filled in by hand (Taylor, 2026-11-23: a blank
// warns in the Lease Builder and never holds the PDF).
const BLANK_LINE = "____________";

// {{#name:value}}passage{{/name}} prints only when the choice `name` was answered
// `value`. Before it's answered, its passages are left out and one blank stands
// for the choice.
const PASSAGE = /\{\{#([a-z_]+):([^}]*)\}\}((?:(?!\{\{#\1:|\{\{\/\1\}\})[\s\S])*)\{\{\/\1\}\}/;
function choosePassages(bodyText, context) {
  const asked = new Set();
  let text = bodyText;
  for (let m; (m = text.match(PASSAGE)); ) {
    const [whole, name, value, inner] = m;
    const picked = context[PICKED]?.[name];
    let out = picked === value ? inner : "";
    if (isBlank(picked) && !asked.has(name) && !isHiddenBlank(name, context)) {
      asked.add(name);
      if (!bodyText.includes(`{{${name}}}`)) out = `{{${name}}}`;
    }
    text = text.replace(whole, () => out);
  }
  return text;
}

// The text with its passages decided and picked options' wording in place.
function expandChoices(bodyText, context) {
  return choosePassages(bodyText, context).replace(VARIABLE_PATTERN, (match, key) =>
    context[PICKED]?.[key] != null && !isBlank(context[key]) ? context[key] : match,
  );
}

// A blank variable prints as a line. On screen (`named`) the line also says what
// it's for, so a landlord notices an unset value or a typo'd variable.
function substituteVariables(bodyText, context, { named = false } = {}) {
  return expandChoices(bodyText, context).replace(VARIABLE_PATTERN, (match, key) => {
    if (!isBlank(context[key])) return String(context[key]);
    if (isHiddenBlank(key, context)) return "";
    return named ? `${BLANK_LINE} [${blankLabel(key)}]` : BLANK_LINE;
  });
}

// Where the variables that aren't clause fields come from, for the blank list.
const SOURCE = {
  monthly_rent: ["Monthly rent", "this lease"],
  security_deposit: ["Security deposit", "this lease"],
  pet_deposit: ["Pet deposit", "this lease's Deposits"],
  late_fee_amount: ["Late fee", "this lease"],
  late_fee_grace_days: ["Late fee grace days", "this lease"],
  pet_rent_amount: ["Pet rent", "this lease"],
  renewal_rent_increase_cap: ["Renewal rent increase cap", "this lease"],
  tenant_insurance_minimum: ["Renter's insurance minimum", "this lease"],
  renters_liability_limit: ["Renter's insurance minimum", "this lease"],
  start_date: ["Start date", "this lease"],
  end_date: ["End date", "this lease"],
  tenant_names: ["Tenant names", "this lease's Tenants"],
  tenant_email: ["Tenant email (every tenant)", "the tenant's page"],
  tenant_emergency_contact_name: ["Tenant's emergency contact", "the tenant's page"],
  tenant_emergency_contact_phone: ["Tenant's emergency contact phone", "the tenant's page"],
  guarantor_name: ["Guarantor", "this lease's Tenants"],
  appliance_list: ["Appliances", "Property Specs"],
  property_address: ["Property address", "the property page"],
  landlord_name: ["Landlord name", "the owner's page"],
  landlord_notice_name: ["Landlord name", "the owner's page"],
  landlord_notice_address: ["Notice address", "this lease's Notices"],
  landlord_email: ["Landlord email", "the owner's page"],
  owner_name: ["Owner name", "the owner's page"],
  owner_address: ["Owner address", "the owner's page"],
  rent_payee_name: ["Rent payee", "this lease's Rent payment"],
  rent_payee_address: ["Rent payment address", "this lease's Rent payment"],
  payment_address: ["Rent payment address", "this lease's Rent payment"],
  rent_payee_phone: ["Phone for rent", "this lease's Rent payment"],
  rent_payment_forms: ["Forms of payment", "this lease's Rent payment"],
  rent_payment_days_hours: ["In-person payment days and hours", "this lease's Rent payment"],
  emergency_phone: ["Emergency phone", "the property's Property manager section"],
  parking_fee_amount: ["Parking fee", "this lease"],
  parking_space_number: ["Parking spaces", "this lease"],
  county: ["County", "the property page"],
  manager_name: ["Property manager", "the property's Property manager section"],
  manager_phone: ["Property manager's phone", "the property's Property manager section"],
  manager_address: ["Property manager's address", "the property's Property manager section"],
  manager_street_address: ["Property manager's address", "the property's Property manager section"],
  management_company_name: ["Management company", "the property's Property manager section"],
  management_company_street_address: ["Management company's address", "the property's Property manager section"],
  wy_manager_name: ["Wyoming property manager", "the property's Property manager section"],
  wy_manager_address: ["Wyoming property manager's address", "the property's Property manager section"],
  wy_manager_phone: ["Wyoming property manager's phone", "the property's Property manager section"],
  tenant_utilities: ["Utilities the tenant pays", "the property's Utilities section"],
  included_utilities: ["Utilities included in rent", "the property's Utilities section"],
  separately_charged_utilities: ["Utilities charged back", "the property's Utilities section"],
  utility_billing_method: ["Utility billing method", "the property's Utilities section"],
  state: ["State", "the property page"],
  property_street: ["Street address", "the property page"],
  property_unit: ["Unit number", "the property page"],
  property_city: ["City", "the property page"],
  property_zip: ["ZIP code", "the property page"],
  year_built: ["Year built", "the property page"],
};

const FIELD_BY_VARIABLE = {};
for (const [target, fields] of [["property", PROPERTY_FIELDS], ["lease", LEASE_FIELDS]]) {
  for (const q of fields) for (const v of q.vars) FIELD_BY_VARIABLE[v] = { target, q };
}

// Lease columns a blank can be answered into from the blanks box (Taylor,
// 2026-11-23; rent, deposit and dates added 2026-11-27). Each answer is saved
// on the lease itself, so the lease page shows it too.
for (const [v, id, type] of [
  ["late_fee_amount", "lateFeeAmount", "money"],
  ["late_fee_grace_days", "lateFeeGraceDays", "number"],
  ["monthly_rent", "monthlyRent", "money"],
  ["security_deposit", "securityDepositAmount", "money"],
  ["start_date", "startDate", "date"],
  ["end_date", "endDate", "date"],
]) {
  FIELD_BY_VARIABLE[v] = { target: "leaseField", q: { id, type, label: SOURCE[v][0], short: SOURCE[v][0] } };
}
// Property questions a blank can be answered into (Taylor, 2026-11-27: the
// county asked under the arbitration clause couldn't be answered there). The
// answer is saved to the property, so the property page shows it too.
for (const [v, id] of [["county", "county"]]) {
  FIELD_BY_VARIABLE[v] = { target: "property", q: { id, type: "text", label: SOURCE[v][0], short: SOURCE[v][0] } };
}

function blankLabel(variable) {
  return FIELD_BY_VARIABLE[variable]?.q.short || SOURCE[variable]?.[0] || variable.replace(/_/g, " ");
}

const variablesIn = (bodyText) => [...new Set([...bodyText.matchAll(VARIABLE_PATTERN)].map((m) => m[1]))];

// The blanks in a lease's clauses, one entry per answer, each with the clauses
// it's in. A clause field comes with its question; any other blank says where
// its answer is kept.
// Whether a variable's question is hidden by its showIf on this lease: its
// blank is then neither listed, held nor printed as a line (2026-11-27).
function isHiddenBlank(v, context) {
  const field = FIELD_BY_VARIABLE[v];
  const seen = context[ANSWERS];
  return Boolean(field?.q.showIf && seen && !isVisible({ showIf: field.q.showIf }, [seen.state], seen.answers));
}

function clauseBlanks(clauses, context) {
  const byKey = new Map();
  for (const clause of clauses) {
    for (const v of variablesIn(expandChoices(clause.bodyText, context))) {
      if (!isBlank(context[v])) continue;
      const field = FIELD_BY_VARIABLE[v];
      if (isHiddenBlank(v, context)) continue;
      const key = field ? `${field.target}.${field.q.id}` : blankLabel(v);
      if (!byKey.has(key)) {
        byKey.set(key, {
          key,
          label: blankLabel(v),
          ...(field ? { target: field.target, question: field.q } : { where: SOURCE[v]?.[1] || null }),
          clauses: [],
        });
      }
      const entry = byKey.get(key);
      if (!entry.clauses.includes(clause.title)) entry.clauses.push(clause.title);
      if (field?.q.choice || isRequiredClause(clause)) entry.holds = true;
    }
  }
  return [...byKey.values()];
}

// The terms asked under this clause (place "lease.clause"), filled or not, each
// follow-up after its choice; the page shows a follow-up once it applies.
function clauseTerms(bodyText) {
  const named = new Set([...bodyText.matchAll(/\{\{\s*#?([a-z_]+)/g)].map((m) => m[1]));
  const direct = LEASE_FIELDS.filter((q) => q.place === "lease.clause" && q.vars.some((v) => named.has(v)));
  const ids = new Set(direct.map((q) => q.id));
  const order = [...named].flatMap((v) => direct.filter((q) => q.vars.includes(v)));
  const terms = [];
  const add = (q) => {
    if (terms.includes(q)) return;
    terms.push(q);
    for (const f of LEASE_FIELDS) if (f.showIf?.id === q.id && f.place === "lease.clause" && !ids.has(f.id)) add(f);
  };
  order.forEach(add);
  return terms;
}

// What the PDF waits for: a choice still to be picked (Taylor, 2026-11-24) and
// any blank in a Required clause (Taylor, 2026-11-27). Other blanks only warn.
function blanksHoldingPdf(clauses, context) {
  return clauseBlanks(clauses, context).filter((b) => b.holds);
}

// The questions this lease's stored data answers, for the builder to show as
// answered (with where the answer came from) instead of asking.
function derivedFacts(context) {
  return context[DERIVED] || {};
}

module.exports = { derivedFacts, DERIVE, buildVariableContext, substituteVariables, clauseBlanks, clauseTerms, blanksHoldingPdf, isRequiredClause, SOURCE, FIELD_BY_VARIABLE, BLANK_LINE };
