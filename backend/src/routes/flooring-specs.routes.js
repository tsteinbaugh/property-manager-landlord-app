const prisma = require("../lib/prisma");
const { createPropertySpecRoutes } = require("../lib/createPropertySpecRoutes");

module.exports = createPropertySpecRoutes({
  model: prisma.flooringSpec,
  assignableFields: [
    "location",
    "brand",
    "productName",
    "type",
    "sqFtCovered",
    "boxesInstalled",
    "boxesLeftover",
    "leftoverStorageLocation",
    "installedBy",
    "installDate",
    "cost",
    "warranty",
    "notes",
  ],
  dateFields: ["installDate"],
  notFoundLabel: "Flooring spec",
  // Taylor's lesson: keep 2-3 spare boxes on hand, flag when stock hits zero.
  computeExtra: (item) => ({ lowStock: item.boxesLeftover !== null && item.boxesLeftover <= 0 }),
});
