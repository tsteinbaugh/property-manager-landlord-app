// The 7 Property Specs categories a MaintenanceRequest/MaintenanceSchedule
// can optionally link to (see backend/src/lib/validateSpecLinks.js — same
// list, kept in sync by hand since it's plain data on both sides). Used to
// build one combined "Linked item" dropdown instead of 7 separate pickers.
export const SPEC_LINK_CATEGORIES = [
  {
    field: "paintSpecId",
    path: "/api/paint-specs",
    label: "Paint",
    summarize: (i) => [i.location, i.brand, i.colorName].filter(Boolean).join(" ") || "Paint",
  },
  {
    field: "flooringSpecId",
    path: "/api/flooring-specs",
    label: "Flooring",
    summarize: (i) => [i.location, i.brand, i.type].filter(Boolean).join(" ") || "Flooring",
  },
  {
    field: "countertopSpecId",
    path: "/api/countertop-specs",
    label: "Countertop",
    summarize: (i) => [i.location, i.brand, i.material].filter(Boolean).join(" ") || "Countertop",
  },
  {
    field: "fixtureId",
    path: "/api/fixtures",
    label: "Fixture",
    summarize: (i) => [i.location, i.fixtureType, i.brand].filter(Boolean).join(" ") || "Fixture",
  },
  {
    field: "applianceId",
    path: "/api/appliances",
    label: "Appliance",
    summarize: (i) => [i.location, i.make, i.model].filter(Boolean).join(" ") || "Appliance",
  },
  {
    field: "backsplashSpecId",
    path: "/api/backsplash-specs",
    label: "Backsplash",
    summarize: (i) => [i.location, i.brand].filter(Boolean).join(" ") || "Backsplash",
  },
  {
    field: "exteriorFeatureId",
    path: "/api/exterior-features",
    label: "Exterior",
    summarize: (i) => i.name || "Exterior feature",
  },
];

export const SPEC_LINK_FIELD_NAMES = SPEC_LINK_CATEGORIES.map((c) => c.field);

// Fetches all 7 categories for one property in parallel and flattens them
// into one dropdown-ready options list, each value encoded as "field:id" so
// a single <select> can represent "which of the 7 FKs this is."
export async function fetchSpecLinkOptions(api, propertyId) {
  if (!propertyId) return [];
  const results = await Promise.all(
    SPEC_LINK_CATEGORIES.map((cat) => api.get(`${cat.path}?propertyId=${propertyId}`).catch(() => [])),
  );
  const options = [];
  SPEC_LINK_CATEGORIES.forEach((cat, idx) => {
    for (const item of results[idx]) {
      options.push({ value: `${cat.field}:${item.id}`, label: `${cat.label}: ${cat.summarize(item)}` });
    }
  });
  return options;
}

// Given a maintenance record, finds whichever of the 7 fields is set and
// encodes it back into the same "field:id" shape the dropdown uses.
export function encodeSpecLink(record) {
  for (const field of SPEC_LINK_FIELD_NAMES) {
    if (record[field]) return `${field}:${record[field]}`;
  }
  return "";
}

// Reverses fetchSpecLinkOptions' encoding into a { [field]: id } body patch.
export function decodeSpecLink(value) {
  if (!value) return {};
  const [field, id] = value.split(":");
  return { [field]: id };
}
