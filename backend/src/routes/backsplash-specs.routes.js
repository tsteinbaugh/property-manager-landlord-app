const prisma = require("../lib/prisma");
const { createPropertySpecRoutes } = require("../lib/createPropertySpecRoutes");

module.exports = createPropertySpecRoutes({
  model: prisma.backsplashSpec,
  assignableFields: [
    "location",
    "brand",
    "productName",
    "material",
    "tileSize",
    "groutColor",
    "groutBrand",
    "spareTilesOnHand",
    "notes",
  ],
  notFoundLabel: "Backsplash spec",
});
