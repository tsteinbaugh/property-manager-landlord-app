const prisma = require("../lib/prisma");
const { createPropertySpecRoutes } = require("../lib/createPropertySpecRoutes");

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
    "serviceContractor",
    "serviceContractType",
    "serviceCost",
    "notes",
  ],
  dateFields: ["lastTrimmedDate", "lastTreatedDate", "lastFertilizedDate"],
  notFoundLabel: "Exterior feature",
});
