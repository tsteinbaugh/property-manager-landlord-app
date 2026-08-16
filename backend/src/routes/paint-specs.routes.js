const prisma = require("../lib/prisma");
const { createPropertySpecRoutes } = require("../lib/createPropertySpecRoutes");

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
});
