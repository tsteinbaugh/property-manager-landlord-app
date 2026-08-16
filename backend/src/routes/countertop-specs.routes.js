const prisma = require("../lib/prisma");
const { createPropertySpecRoutes } = require("../lib/createPropertySpecRoutes");

module.exports = createPropertySpecRoutes({
  model: prisma.countertopSpec,
  assignableFields: ["location", "brand", "productName", "material", "sqFt", "installedBy", "installDate", "cost", "warranty", "notes"],
  dateFields: ["installDate"],
  notFoundLabel: "Countertop spec",
});
