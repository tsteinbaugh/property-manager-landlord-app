-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "method" TEXT,
ADD COLUMN     "paid" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "IncomeDocument" (
    "id" TEXT NOT NULL,
    "incomeId" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "documentKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IncomeDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExpenseDocument" (
    "id" TEXT NOT NULL,
    "expenseId" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "documentKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExpenseDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "IncomeDocument_incomeId_idx" ON "IncomeDocument"("incomeId");

-- CreateIndex
CREATE INDEX "ExpenseDocument_expenseId_idx" ON "ExpenseDocument"("expenseId");

-- AddForeignKey
ALTER TABLE "IncomeDocument" ADD CONSTRAINT "IncomeDocument_incomeId_fkey" FOREIGN KEY ("incomeId") REFERENCES "Income"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpenseDocument" ADD CONSTRAINT "ExpenseDocument_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "Expense"("id") ON DELETE CASCADE ON UPDATE CASCADE;
