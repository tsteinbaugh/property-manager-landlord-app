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
    "expenseId",
    "warranty",
    "notes",
  ],
  dateFields: ["installDate"],
  notFoundLabel: "Flooring spec",
  validateExtra: validateExpense,
  include: { ...MAINTENANCE_INCLUDE, ...EXPENSE_INCLUDE },
  // Taylor's lesson: keep 2-3 spare boxes on hand, flag when stock hits zero.
  computeExtra: (item) => ({ lowStock: item.boxesLeftover !== null && item.boxesLeftover <= 0 }),
});
