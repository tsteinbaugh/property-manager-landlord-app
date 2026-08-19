-- AlterTable
ALTER TABLE "Income" ADD COLUMN     "appliesToPeriod" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "LateFeeWaiver" (
    "id" TEXT NOT NULL,
    "leaseId" TEXT NOT NULL,
    "period" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LateFeeWaiver_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LateFeeWaiver_leaseId_idx" ON "LateFeeWaiver"("leaseId");

-- CreateIndex
CREATE UNIQUE INDEX "LateFeeWaiver_leaseId_period_key" ON "LateFeeWaiver"("leaseId", "period");

-- AddForeignKey
ALTER TABLE "LateFeeWaiver" ADD CONSTRAINT "LateFeeWaiver_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE CASCADE ON UPDATE CASCADE;
