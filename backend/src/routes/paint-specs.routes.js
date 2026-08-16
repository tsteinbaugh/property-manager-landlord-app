const prisma = require("../lib/prisma");
const { createPropertySpecRoutes } = require("../lib/createPropertySpecRoutes");
const { MAINTENANCE_INCLUDE } = require("../lib/propertySpecIncludes");

module.exports = createPropertySpecRoutes({
  model: prisma.paintSpec,
  assignableFields: [
    "location",
    "brand",
    "colorName",
    "colorCode",
    "sheen",
    "base",
    "formula",
    "gallonsUsed",
    "datePainted",
    "paintedBy",
    "touchUpStorageLocation",
    "notes",
  ],
  dateFields: ["datePainted"],
  notFoundLabel: "Paint spec",
  include: MAINTENANCE_INCLUDE,
});
