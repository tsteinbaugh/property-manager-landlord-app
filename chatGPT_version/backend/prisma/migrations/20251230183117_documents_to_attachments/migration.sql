/*
  Warnings:

  - You are about to drop the `LeaseDocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TenantDocument` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LeaseDocument" DROP CONSTRAINT "LeaseDocument_archivedById_fkey";

-- DropForeignKey
ALTER TABLE "LeaseDocument" DROP CONSTRAINT "LeaseDocument_createdById_fkey";

-- DropForeignKey
ALTER TABLE "LeaseDocument" DROP CONSTRAINT "LeaseDocument_leaseId_fkey";

-- DropForeignKey
ALTER TABLE "TenantDocument" DROP CONSTRAINT "TenantDocument_archivedById_fkey";

-- DropForeignKey
ALTER TABLE "TenantDocument" DROP CONSTRAINT "TenantDocument_createdById_fkey";

-- DropForeignKey
ALTER TABLE "TenantDocument" DROP CONSTRAINT "TenantDocument_tenantId_fkey";

-- DropTable
DROP TABLE "LeaseDocument";

-- DropTable
DROP TABLE "TenantDocument";

-- CreateTable
CREATE TABLE "LeaseAttachment" (
    "id" TEXT NOT NULL,
    "leaseId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "mimeType" TEXT,
    "size" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,
    "archivedAt" TIMESTAMP(3),
    "archiveReason" TEXT,
    "archivedById" TEXT,

    CONSTRAINT "LeaseAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantAttachment" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "mimeType" TEXT,
    "size" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,
    "archivedAt" TIMESTAMP(3),
    "archiveReason" TEXT,
    "archivedById" TEXT,

    CONSTRAINT "TenantAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LeaseAttachment_leaseId_idx" ON "LeaseAttachment"("leaseId");

-- CreateIndex
CREATE INDEX "LeaseAttachment_createdById_idx" ON "LeaseAttachment"("createdById");

-- CreateIndex
CREATE INDEX "LeaseAttachment_archivedById_idx" ON "LeaseAttachment"("archivedById");

-- CreateIndex
CREATE INDEX "LeaseAttachment_archivedAt_idx" ON "LeaseAttachment"("archivedAt");

-- CreateIndex
CREATE INDEX "TenantAttachment_tenantId_idx" ON "TenantAttachment"("tenantId");

-- CreateIndex
CREATE INDEX "TenantAttachment_createdById_idx" ON "TenantAttachment"("createdById");

-- CreateIndex
CREATE INDEX "TenantAttachment_archivedById_idx" ON "TenantAttachment"("archivedById");

-- AddForeignKey
ALTER TABLE "LeaseAttachment" ADD CONSTRAINT "LeaseAttachment_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaseAttachment" ADD CONSTRAINT "LeaseAttachment_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaseAttachment" ADD CONSTRAINT "LeaseAttachment_archivedById_fkey" FOREIGN KEY ("archivedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantAttachment" ADD CONSTRAINT "TenantAttachment_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantAttachment" ADD CONSTRAINT "TenantAttachment_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantAttachment" ADD CONSTRAINT "TenantAttachment_archivedById_fkey" FOREIGN KEY ("archivedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
