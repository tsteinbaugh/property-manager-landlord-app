const prisma = require("../lib/prisma");
const { createPropertySpecRoutes } = require("../lib/createPropertySpecRoutes");
const { MAINTENANCE_INCLUDE } = require("../lib/propertySpecIncludes");

module.exports = createPropertySpecRoutes({
  model: prisma.exteriorFeature,
  assignableFields: [
    "location",
    "name",
    "approxAge",
    "size",
    "lastTrimmedDate",
    "lastTreatedDate",
    "lastFertilizedDate",
    "notes",
  ],
  dateFields: ["lastTrimmedDate", "lastTreatedDate", "lastFertilizedDate"],
  notFoundLabel: "Exterior feature",
  include: MAINTENANCE_INCLUDE,
});
