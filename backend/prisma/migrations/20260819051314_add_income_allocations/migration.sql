-- CreateTable
CREATE TABLE "IncomeAllocation" (
    "id" TEXT NOT NULL,
    "incomeId" TEXT NOT NULL,
    "period" TIMESTAMP(3) NOT NULL,
    "category" "IncomeCategory" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "IncomeAllocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "IncomeAllocation_incomeId_idx" ON "IncomeAllocation"("incomeId");

-- AddForeignKey
ALTER TABLE "IncomeAllocation" ADD CONSTRAINT "IncomeAllocation_incomeId_fkey" FOREIGN KEY ("incomeId") REFERENCES "Income"("id") ON DELETE CASCADE ON UPDATE CASCADE;
