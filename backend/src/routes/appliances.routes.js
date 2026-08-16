const prisma = require("../lib/prisma");
const { createPropertySpecRoutes } = require("../lib/createPropertySpecRoutes");
const { MAINTENANCE_INCLUDE } = require("../lib/propertySpecIncludes");

const WARRANTY_ALERT_WINDOW_DAYS = 90;

module.exports = createPropertySpecRoutes({
  model: prisma.appliance,
  assignableFields: [
    "location",
    "make",
    "model",
    "year",
    "serialNumber",
    "warrantyExpiration",
    "maintenanceIntervalDays",
    "lastServiceDate",
    "filterSize",
    "preferredVendorId",
    "notes",
  ],
  dateFields: ["warrantyExpiration", "lastServiceDate"],
  notFoundLabel: "Appliance",
  include: MAINTENANCE_INCLUDE,
  validateExtra: async (body, userId) => {
    if (!body.preferredVendorId) return null;
    const vendor = await prisma.vendor.findUnique({ where: { id: body.preferredVendorId } });
    if (!vendor || vendor.userId !== userId) return `Vendor ${body.preferredVendorId} not found`;
    return null;
  },
  // CLAUDE.md: "alert 60-90 days before" warranty expiration.
  computeExtra: (item) => {
    if (!item.warrantyExpiration) return { warrantyExpiringSoon: false };
    const daysUntilExpiration = (new Date(item.warrantyExpiration) - new Date()) / (1000 * 60 * 60 * 24);
    return { warrantyExpiringSoon: daysUntilExpiration >= 0 && daysUntilExpiration <= WARRANTY_ALERT_WINDOW_DAYS };
  },
});
