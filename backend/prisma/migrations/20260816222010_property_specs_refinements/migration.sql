/*
  Warnings:

  - You are about to drop the column `cost` on the `CountertopSpec` table. All the data in the column will be lost.
  - You are about to drop the column `serviceContractType` on the `ExteriorFeature` table. All the data in the column will be lost.
  - You are about to drop the column `serviceContractor` on the `ExteriorFeature` table. All the data in the column will be lost.
  - You are about to drop the column `serviceCost` on the `ExteriorFeature` table. All the data in the column will be lost.
  - You are about to drop the column `cost` on the `FlooringSpec` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "ExpenseCategory" ADD VALUE 'IMPROVEMENT';

-- AlterTable
ALTER TABLE "Appliance" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "retiredAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "BacksplashSpec" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "expenseId" TEXT,
ADD COLUMN     "retiredAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "CountertopSpec" DROP COLUMN "cost",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "expenseId" TEXT,
ADD COLUMN     "retiredAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "ExteriorFeature" DROP COLUMN "serviceContractType",
DROP COLUMN "serviceContractor",
DROP COLUMN "serviceCost",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "retiredAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Fixture" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "retiredAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "FlooringSpec" DROP COLUMN "cost",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "expenseId" TEXT,
ADD COLUMN     "retiredAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "MaintenanceRequest" ADD COLUMN     "applianceId" TEXT,
ADD COLUMN     "backsplashSpecId" TEXT,
ADD COLUMN     "countertopSpecId" TEXT,
ADD COLUMN     "exteriorFeatureId" TEXT,
ADD COLUMN     "fixtureId" TEXT,
ADD COLUMN     "flooringSpecId" TEXT,
ADD COLUMN     "paintSpecId" TEXT;

-- AlterTable
ALTER TABLE "MaintenanceSchedule" ADD COLUMN     "applianceId" TEXT,
ADD COLUMN     "backsplashSpecId" TEXT,
ADD COLUMN     "countertopSpecId" TEXT,
ADD COLUMN     "exteriorFeatureId" TEXT,
ADD COLUMN     "fixtureId" TEXT,
ADD COLUMN     "flooringSpecId" TEXT,
ADD COLUMN     "paintSpecId" TEXT;

-- AlterTable
ALTER TABLE "PaintSpec" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "retiredAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "BacksplashSpec_expenseId_idx" ON "BacksplashSpec"("expenseId");

-- CreateIndex
CREATE INDEX "CountertopSpec_expenseId_idx" ON "CountertopSpec"("expenseId");

-- CreateIndex
CREATE INDEX "FlooringSpec_expenseId_idx" ON "FlooringSpec"("expenseId");

-- CreateIndex
CREATE INDEX "MaintenanceRequest_paintSpecId_idx" ON "MaintenanceRequest"("paintSpecId");

-- CreateIndex
CREATE INDEX "MaintenanceRequest_flooringSpecId_idx" ON "MaintenanceRequest"("flooringSpecId");

-- CreateIndex
CREATE INDEX "MaintenanceRequest_countertopSpecId_idx" ON "MaintenanceRequest"("countertopSpecId");

-- CreateIndex
CREATE INDEX "MaintenanceRequest_fixtureId_idx" ON "MaintenanceRequest"("fixtureId");

-- CreateIndex
CREATE INDEX "MaintenanceRequest_applianceId_idx" ON "MaintenanceRequest"("applianceId");

-- CreateIndex
CREATE INDEX "MaintenanceRequest_backsplashSpecId_idx" ON "MaintenanceRequest"("backsplashSpecId");

-- CreateIndex
CREATE INDEX "MaintenanceRequest_exteriorFeatureId_idx" ON "MaintenanceRequest"("exteriorFeatureId");

-- CreateIndex
CREATE INDEX "MaintenanceSchedule_paintSpecId_idx" ON "MaintenanceSchedule"("paintSpecId");

-- CreateIndex
CREATE INDEX "MaintenanceSchedule_flooringSpecId_idx" ON "MaintenanceSchedule"("flooringSpecId");

-- CreateIndex
CREATE INDEX "MaintenanceSchedule_countertopSpecId_idx" ON "MaintenanceSchedule"("countertopSpecId");

-- CreateIndex
CREATE INDEX "MaintenanceSchedule_fixtureId_idx" ON "MaintenanceSchedule"("fixtureId");

-- CreateIndex
CREATE INDEX "MaintenanceSchedule_applianceId_idx" ON "MaintenanceSchedule"("applianceId");

-- CreateIndex
CREATE INDEX "MaintenanceSchedule_backsplashSpecId_idx" ON "MaintenanceSchedule"("backsplashSpecId");

-- CreateIndex
CREATE INDEX "MaintenanceSchedule_exteriorFeatureId_idx" ON "MaintenanceSchedule"("exteriorFeatureId");

-- AddForeignKey
ALTER TABLE "MaintenanceRequest" ADD CONSTRAINT "MaintenanceRequest_paintSpecId_fkey" FOREIGN KEY ("paintSpecId") REFERENCES "PaintSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceRequest" ADD CONSTRAINT "MaintenanceRequest_flooringSpecId_fkey" FOREIGN KEY ("flooringSpecId") REFERENCES "FlooringSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceRequest" ADD CONSTRAINT "MaintenanceRequest_countertopSpecId_fkey" FOREIGN KEY ("countertopSpecId") REFERENCES "CountertopSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceRequest" ADD CONSTRAINT "MaintenanceRequest_fixtureId_fkey" FOREIGN KEY ("fixtureId") REFERENCES "Fixture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceRequest" ADD CONSTRAINT "MaintenanceRequest_applianceId_fkey" FOREIGN KEY ("applianceId") REFERENCES "Appliance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceRequest" ADD CONSTRAINT "MaintenanceRequest_backsplashSpecId_fkey" FOREIGN KEY ("backsplashSpecId") REFERENCES "BacksplashSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceRequest" ADD CONSTRAINT "MaintenanceRequest_exteriorFeatureId_fkey" FOREIGN KEY ("exteriorFeatureId") REFERENCES "ExteriorFeature"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceSchedule" ADD CONSTRAINT "MaintenanceSchedule_paintSpecId_fkey" FOREIGN KEY ("paintSpecId") REFERENCES "PaintSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceSchedule" ADD CONSTRAINT "MaintenanceSchedule_flooringSpecId_fkey" FOREIGN KEY ("flooringSpecId") REFERENCES "FlooringSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceSchedule" ADD CONSTRAINT "MaintenanceSchedule_countertopSpecId_fkey" FOREIGN KEY ("countertopSpecId") REFERENCES "CountertopSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceSchedule" ADD CONSTRAINT "MaintenanceSchedule_fixtureId_fkey" FOREIGN KEY ("fixtureId") REFERENCES "Fixture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceSchedule" ADD CONSTRAINT "MaintenanceSchedule_applianceId_fkey" FOREIGN KEY ("applianceId") REFERENCES "Appliance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceSchedule" ADD CONSTRAINT "MaintenanceSchedule_backsplashSpecId_fkey" FOREIGN KEY ("backsplashSpecId") REFERENCES "BacksplashSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceSchedule" ADD CONSTRAINT "MaintenanceSchedule_exteriorFeatureId_fkey" FOREIGN KEY ("exteriorFeatureId") REFERENCES "ExteriorFeature"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlooringSpec" ADD CONSTRAINT "FlooringSpec_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "Expense"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CountertopSpec" ADD CONSTRAINT "CountertopSpec_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "Expense"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BacksplashSpec" ADD CONSTRAINT "BacksplashSpec_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "Expense"("id") ON DELETE SET NULL ON UPDATE CASCADE;
