const { PROPERTY_FIELDS, LEASE_FIELDS } = require("./clauseFields");

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
  const pf = property?.facts || {};
  const managerName = pf.managerName || pf.managerCompany || null;
  const lf = lease.facts || {};
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
    if (isBlank(picked) && !asked.has(name)) {
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
};

const FIELD_BY_VARIABLE = {};
for (const [target, fields] of [["property", PROPERTY_FIELDS], ["lease", LEASE_FIELDS]]) {
  for (const q of fields) for (const v of q.vars) FIELD_BY_VARIABLE[v] = { target, q };
}

// Lease columns a blank can be answered into from the blanks box (Taylor, 2026-11-23).
for (const [v, id, type] of [["late_fee_amount", "lateFeeAmount", "money"], ["late_fee_grace_days", "lateFeeGraceDays", "number"]]) {
  FIELD_BY_VARIABLE[v] = { target: "leaseField", q: { id, type, label: SOURCE[v][0], short: SOURCE[v][0] } };
}

function blankLabel(variable) {
  return FIELD_BY_VARIABLE[variable]?.q.short || SOURCE[variable]?.[0] || variable.replace(/_/g, " ");
}

const variablesIn = (bodyText) => [...new Set([...bodyText.matchAll(VARIABLE_PATTERN)].map((m) => m[1]))];

// The blanks in a lease's clauses, one entry per answer, each with the clauses
// it's in. A clause field comes with its question; any other blank says where
// its answer is kept.
function clauseBlanks(clauses, context) {
  const byKey = new Map();
  for (const clause of clauses) {
    for (const v of variablesIn(expandChoices(clause.bodyText, context))) {
      if (!isBlank(context[v])) continue;
      const field = FIELD_BY_VARIABLE[v];
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

// Choices still to be picked; the PDF waits for them (Taylor, 2026-11-24).
function unpickedChoices(clauses, context) {
  return clauseBlanks(clauses, context).filter((b) => b.question?.choice);
}

module.exports = { buildVariableContext, substituteVariables, clauseBlanks, clauseTerms, unpickedChoices, SOURCE, FIELD_BY_VARIABLE, BLANK_LINE };
