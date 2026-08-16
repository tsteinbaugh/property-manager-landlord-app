-- CreateEnum
CREATE TYPE "TenantDocumentCategory" AS ENUM ('CREDIT_REPORT', 'BACKGROUND_CHECK', 'INCOME_VERIFICATION', 'ID');

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "backgroundCheckDate" TIMESTAMP(3),
ADD COLUMN     "backgroundCheckStatus" TEXT,
ADD COLUMN     "monthlyIncome" DECIMAL(10,2);

-- CreateTable
CREATE TABLE "TenantDocument" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "category" "TenantDocumentCategory" NOT NULL,
    "fileName" TEXT NOT NULL,
    "documentKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TenantDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TenantDocument_tenantId_idx" ON "TenantDocument"("tenantId");

-- AddForeignKey
ALTER TABLE "TenantDocument" ADD CONSTRAINT "TenantDocument_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
