-- AlterTable
ALTER TABLE "Clause" ADD COLUMN     "state" TEXT;

-- AlterTable
ALTER TABLE "Lease" ADD COLUMN     "tenantInsuranceMinimumCoverage" DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "yearBuilt" INTEGER;

-- CreateTable
CREATE TABLE "LeaseAttachment" (
    "id" TEXT NOT NULL,
    "leaseId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "documentKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeaseAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LeaseAttachment_leaseId_idx" ON "LeaseAttachment"("leaseId");

-- AddForeignKey
ALTER TABLE "LeaseAttachment" ADD CONSTRAINT "LeaseAttachment_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE CASCADE ON UPDATE CASCADE;
