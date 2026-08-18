const VARIABLE_PATTERN = /\{\{\s*([a-z_]+)\s*\}\}/g;

function money(amount) {
  if (amount === null || amount === undefined) return null;
  return `$${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatDate(date) {
  if (!date) return null;
  return new Date(date).toLocaleDateString();
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

// Flat dict of {{variable}} values resolved from data the lease already has
// linked (Property/Entity/Tenant/Occupant/Appliance/Deposit), not new
// structured fields invented just to back a variable. Anything not already
// modeled (smoking policy, acceptable payment methods, etc.) simply has no
// variable and stays as plain clause text a landlord edits by hand.
function buildVariableContext({ lease, property, entity, tenants, occupants = [], appliances = [], petDepositAmount = null }) {
  return {
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
    tenant_names: tenants.length > 0 ? tenants.map((t) => `${t.firstName} ${t.lastName}`).join(", ") : null,
    occupant_names: formatOccupantNames(occupants),
    appliance_list: formatApplianceList(appliances),
    property_address: formatAddress(property),
    landlord_name: entity?.legalName ?? null,
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
