const prisma = require("../lib/prisma");
const { createPropertySpecRoutes } = require("../lib/createPropertySpecRoutes");

module.exports = createPropertySpecRoutes({
  model: prisma.fixture,
  // fixtureType is the category discriminator within this one model (it collapses
  // CLAUDE.md's 5 fixture sub-types) — required for structural reasons, not just
  // data-completeness, unlike every other field here.
  requiredFields: ["propertyId", "fixtureType"],
  assignableFields: ["location", "fixtureType", "brand", "model", "finish", "warranty", "notes"],
  notFoundLabel: "Fixture",
});
