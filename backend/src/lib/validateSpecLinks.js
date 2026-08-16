const prisma = require("./prisma");

// The 7 optional Property Specs links MaintenanceRequest/MaintenanceSchedule
// can carry — real typed FKs (see schema.prisma comment on MaintenanceRequest
// for why), shared here since both route files validate them identically.
const SPEC_LINK_FIELDS = [
  { field: "paintSpecId", model: "paintSpec", label: "Paint spec" },
  { field: "flooringSpecId", model: "flooringSpec", label: "Flooring spec" },
  { field: "countertopSpecId", model: "countertopSpec", label: "Countertop spec" },
  { field: "fixtureId", model: "fixture", label: "Fixture" },
  { field: "applianceId", model: "appliance", label: "Appliance" },
  { field: "backsplashSpecId", model: "backsplashSpec", label: "Backsplash spec" },
  { field: "exteriorFeatureId", model: "exteriorFeature", label: "Exterior feature" },
];

// Validates whichever of the 7 fields are present in `body` belong to the
// current user and to the same property as the maintenance record itself.
async function validateSpecLinks(body, userId, propertyId) {
  for (const { field, model, label } of SPEC_LINK_FIELDS) {
    const id = body[field];
    if (!id) continue;
    const item = await prisma[model].findUnique({ where: { id } });
    if (!item || item.userId !== userId || item.propertyId !== propertyId) {
      return `${label} ${id} not found`;
    }
  }
  return null;
}

module.exports = { SPEC_LINK_FIELDS, validateSpecLinks };
