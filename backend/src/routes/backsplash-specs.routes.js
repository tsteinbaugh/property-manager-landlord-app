const prisma = require("../lib/prisma");
const { createPropertySpecRoutes } = require("../lib/createPropertySpecRoutes");
const { MAINTENANCE_INCLUDE, EXPENSE_INCLUDE } = require("../lib/propertySpecIncludes");

async function validateExpense(body, userId, propertyId) {
  if (!body.expenseId) return null;
  const expense = await prisma.expense.findUnique({ where: { id: body.expenseId } });
  if (!expense || expense.userId !== userId || expense.propertyId !== propertyId) {
    return `Expense ${body.expenseId} not found`;
  }
  return null;
}

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
    "expenseId",
    "notes",
  ],
  notFoundLabel: "Backsplash spec",
  validateExtra: validateExpense,
  include: { ...MAINTENANCE_INCLUDE, ...EXPENSE_INCLUDE },
});
