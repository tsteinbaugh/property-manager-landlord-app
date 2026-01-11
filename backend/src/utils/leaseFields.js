// backend/src/utils/leaseFields.js
const {
  INVALID,
  optionalTrimToNull,
  normalizeIdOrNull,
  parseMoneyOrNullOpt,
  parseDateOrNullOpt,
} = require("@utils/validation.js");

const { LEASE_STATUS } = require("@shared/status.enums.js");

// For arrays posted as JSON, form-data strings, comma strings, etc.
function parseTenantIds(rawTenantIds) {
  if (rawTenantIds === undefined || rawTenantIds === null) return [];

  // Already an array?
  if (Array.isArray(rawTenantIds)) {
    return rawTenantIds.map((x) => String(x).trim()).filter(Boolean);
  }

  // Sometimes comes in as JSON string: '["id1","id2"]'
  if (typeof rawTenantIds === "string") {
    const s = rawTenantIds.trim();
    if (!s) return [];
    try {
      const parsed = JSON.parse(s);
      if (Array.isArray(parsed)) {
        return parsed.map((x) => String(x).trim()).filter(Boolean);
      }
    } catch {
      // fall through
    }

    // Fallback: comma-separated: "id1, id2"
    return s
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
  }

  // Unknown type
  return [];
}

function computeInitialStatus({ status, hasProperty, hasPrimaryTenant }) {
  const statusTrim = typeof status === "string" ? status.trim().toUpperCase() : "";
  if (statusTrim) {
    if (!LEASE_STATUS.has(statusTrim)) return { error: "Invalid status" };
    return { value: statusTrim };
  }
  return { value: hasProperty && hasPrimaryTenant ? "ACTIVE" : "DRAFT" };
}

function parseLeasePost(body) {
  const src = body || {};

  const propertyId = normalizeIdOrNull(src.propertyId);
  const landlordId = normalizeIdOrNull(src.landlordId);

  const propertyLabel = optionalTrimToNull(src.propertyLabel);
  if (propertyLabel === INVALID) return { error: "propertyLabel must be a string" };

  const rentAmountCents = parseMoneyOrNullOpt(src.rentAmountCents);
  if (rentAmountCents === INVALID) return { error: "rent amount must be a non-negative number" };

  const startDate = parseDateOrNullOpt(src.startDate);
  if (startDate === INVALID) return { error: "startDate must be a valid date" };

  const endDate = parseDateOrNullOpt(src.endDate);
  if (endDate === INVALID) return { error: "endDate must be a valid date" };

  if (startDate && endDate && endDate < startDate) {
    return { error: "endDate cannot be before startDate" };
  }

  const tenantIds = parseTenantIds(src.tenantIds);

  const statusRes = computeInitialStatus({
    status: src.status,
    hasProperty: !!propertyId,
    hasPrimaryTenant: tenantIds.length > 0,
  });
  if (statusRes.error) return { error: statusRes.error };

  return {
    data: {
      propertyId: propertyId ?? null,
      landlordId: landlordId ?? null,
      tenantIds,
      propertyLabel: propertyLabel ?? null,
      rentAmountCents: rentAmountCents ?? null,
      startDate: startDate ?? null,
      endDate: endDate ?? null,
      status: statusRes.value,
    },
  };
}

function parseLeasePatch(body) {
  const src = body || {};
  const data = {};
  let nextStartDate;
  let nextEndDate;

  // propertyLabel
  if (src.propertyLabel !== undefined) {
    const v = optionalTrimToNull(src.propertyLabel);
    if (v === INVALID) return { error: "propertyLabel must be a string" };
    data.propertyLabel = v;
  }

  // rentAmount
  if (src.rentAmountCents !== undefined) {
    const v = parseMoneyOrNullOpt(src.rentAmounCentst);
    if (v === INVALID) return { error: "rent amount must be a non-negative number" };
    data.rentAmountCents = v;
  }

  // dates (validate ordering if either provided)
  if (src.startDate !== undefined) {
    const v = parseDateOrNullOpt(src.startDate);
    if (v === INVALID) return { error: "startDate must be a valid date" };
    nextStartDate = v;
    data.startDate = v;
  }
  if (src.endDate !== undefined) {
    const v = parseDateOrNullOpt(src.endDate);
    if (v === INVALID) return { error: "endDate must be a valid date" };
    nextEndDate = v;
    data.endDate = v;
  }

  // status
  if (src.status !== undefined) {
    const next = typeof src.status === "string" ? src.status.trim().toUpperCase() : "";
    if (next) {
      if (!LEASE_STATUS.has(next)) return { error: "Invalid status" };
      data.status = next;
    }
  }

  // property connect/disconnect intent
  // (we keep raw value so routes/service can apply connect/disconnect cleanly)
  let propertyIdIntent;
  if (src.propertyId !== undefined) {
    const pid = normalizeIdOrNull(src.propertyId);
    propertyIdIntent = pid || null; // null means disconnect
  }

  return { data, meta: { propertyIdIntent, nextStartDate, nextEndDate } };
}

module.exports = {
  parseLeasePost,
  parseLeasePatch,
  parseTenantIds,
};
