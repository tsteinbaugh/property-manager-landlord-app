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

// Flat dict of {{variable}} values resolved from data the lease already has
// linked (Property/Entity/Tenant), not new structured fields. Anything not
// already modeled (smoking policy, per-utility responsibility, etc.) simply
// has no variable and stays as plain clause text a landlord edits by hand.
function buildVariableContext({ lease, property, entity, tenants }) {
  return {
    monthly_rent: money(lease.monthlyRent),
    security_deposit: money(lease.securityDepositAmount),
    late_fee_amount: money(lease.lateFeeAmount),
    late_fee_grace_days: lease.lateFeeGraceDays ?? null,
    pet_rent_amount: money(lease.petRentAmount),
    renewal_rent_increase_cap: lease.renewalRentIncreaseCap ?? null,
    start_date: formatDate(lease.startDate),
    end_date: formatDate(lease.endDate),
    tenant_names: tenants.length > 0 ? tenants.map((t) => `${t.firstName} ${t.lastName}`).join(", ") : null,
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
