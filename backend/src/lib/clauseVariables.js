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
  return {
    ...utilityLists(pf),
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

// Unresolved or unknown placeholders are left visible as-is rather than
// silently blanked — a landlord should notice a typo'd variable or an unset
// value (e.g. no security deposit on this lease), not lose text from the
// generated document.
function substituteVariables(bodyText, context) {
  return bodyText.replace(VARIABLE_PATTERN, (match, key) => {
    const value = context[key];
    return value === null || value === undefined || value === "" ? match : String(value);
  });
}

module.exports = { buildVariableContext, substituteVariables };
