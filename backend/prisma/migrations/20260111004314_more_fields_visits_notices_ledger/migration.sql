/*
  Warnings:

  - You are about to drop the column `rentAmount` on the `Lease` table. All the data in the column will be lost.
  - You are about to drop the column `weightLb` on the `Pet` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ParkingType" AS ENUM ('GARAGE_ATTACHED', 'GARAGE_DETACHED', 'CARPORT', 'DRIVEWAY', 'ASSIGNED_SPACE', 'UNASSIGNED_LOT', 'STREET', 'NONE');

-- CreateEnum
CREATE TYPE "LeaseStatusReason" AS ENUM ('EXPIRED', 'NON_RENEWED', 'NONPAYMENT', 'LEASE_VIOLATION', 'MUTUAL_AGREEMENT', 'UNINHABITABLE', 'PROPERTY_SOLD', 'TENANT_REQUEST', 'LANDLORD_REQUEST', 'EVICTION', 'OTHER');

-- CreateEnum
CREATE TYPE "AllocationOrder" AS ENUM ('FEES_FIRST', 'RENT_FIRST', 'UTILITIES_FIRST', 'CUSTOM');

-- CreateEnum
CREATE TYPE "LedgerChargeType" AS ENUM ('RENT', 'LATE_FEE', 'UTILITY', 'DAMAGE', 'PET_RENT', 'HOA_DUES', 'HOA_ASSESSMENT', 'MAINTENANCE', 'TURNOVER', 'CREDIT', 'OTHER');

-- CreateEnum
CREATE TYPE "LedgerPaymentMethod" AS ENUM ('ACH', 'CARD', 'CHECK', 'CASH', 'ZELLE', 'VENMO', 'PAYPAL', 'CRYPTO', 'OTHER');

-- CreateEnum
CREATE TYPE "LegalServiceMethod" AS ENUM ('PERSONAL_SERVICE', 'POSTING', 'FIRST_CLASS_MAIL', 'CERTIFIED_MAIL', 'EMAIL', 'OTHER');

-- CreateEnum
CREATE TYPE "LegalNoticeType" AS ENUM ('DEMAND_COMPLIANCE_OR_RIGHT_TO_CURE', 'DEMAND_FOR_PAYMENT', 'NOTICE_TO_QUIT', 'NOTICE_OF_NON_RENEWAL', 'ENTRY_NOTICE', 'OTHER');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('APARTMENT', 'CONDO', 'TOWNHOME', 'HOUSE', 'MULTI_FAMILY', 'OTHER');

-- CreateEnum
CREATE TYPE "PropertyStatusReason" AS ENUM ('SOLD', 'OFFLINE_RENOVATION', 'OFFLINE_REPAIR', 'OFFLINE_CITY_ORDER', 'OFFLINE_OWNER_USE', 'LEGAL_HOLD', 'OTHER');

-- CreateEnum
CREATE TYPE "EntryNoticeMethod" AS ENUM ('NONE', 'EMAIL', 'TEXT', 'PHONE', 'POSTED_NOTICE', 'IN_PERSON', 'OTHER');

-- CreateEnum
CREATE TYPE "VisitReasonType" AS ENUM ('INSPECTION', 'MAINTENANCE', 'REPAIR', 'EMERGENCY', 'NOTICE_DELIVERY', 'RENT_COLLECTION', 'SHOWING', 'MOVE_IN', 'MOVE_OUT', 'OTHER');

-- CreateEnum
CREATE TYPE "VisitStatus" AS ENUM ('SCHEDULED', 'COMPLETED', 'CANCELLED', 'NO_SHOW');

-- CreateEnum
CREATE TYPE "TenantStatusReason" AS ENUM ('MOVED_OUT', 'EVICTED', 'NON_RENEWED', 'TRANSFERRED', 'MERGED_DUPLICATE', 'DATA_CLEANUP', 'OTHER');

-- AlterTable
ALTER TABLE "EmergencyContact" ADD COLUMN     "address2" TEXT;

-- AlterTable
ALTER TABLE "Lease" DROP COLUMN "rentAmount",
ADD COLUMN     "allocationOrder" "AllocationOrder",
ADD COLUMN     "depositHeldSince" TIMESTAMP(3),
ADD COLUMN     "gracePeriodDays" INTEGER,
ADD COLUMN     "lateFeePolicyId" TEXT,
ADD COLUMN     "noticePeriodDays" INTEGER,
ADD COLUMN     "rentAmountCents" INTEGER,
ADD COLUMN     "rentDueDay" INTEGER,
ADD COLUMN     "requiresAutoPay" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "securityDepositAmountCents" INTEGER,
ADD COLUMN     "statusNotes" TEXT,
ADD COLUMN     "statusReason" "LeaseStatusReason";

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "weightLb",
ADD COLUMN     "weight" INTEGER;

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "address2" TEXT,
ADD COLUMN     "hoaContact" TEXT,
ADD COLUMN     "hoaName" TEXT,
ADD COLUMN     "hoaNotes" TEXT,
ADD COLUMN     "parkingNotes" TEXT,
ADD COLUMN     "parkingSpaces" INTEGER,
ADD COLUMN     "parkingType" "ParkingType",
ADD COLUMN     "statusNotes" TEXT,
ADD COLUMN     "statusReason" "PropertyStatusReason",
ADD COLUMN     "type" "PropertyType";

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "moveInDate" TIMESTAMP(3),
ADD COLUMN     "moveOutDate" TIMESTAMP(3),
ADD COLUMN     "statusNotes" TEXT,
ADD COLUMN     "statusReason" "TenantStatusReason";

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "parkingType" "ParkingType";

-- CreateTable
CREATE TABLE "LateFeePolicy" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "flatFeeCents" INTEGER,
    "dailyFeeCents" INTEGER,
    "percentOfRentBps" INTEGER,
    "maxFeeCents" INTEGER,
    "gracePeriodDaysOverride" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LateFeePolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LedgerCharge" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "leaseId" TEXT,
    "type" "LedgerChargeType" NOT NULL,
    "amountCents" INTEGER NOT NULL,
    "incurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TIMESTAMP(3),
    "memo" TEXT,
    "voidedAt" TIMESTAMP(3),
    "voidReason" TEXT,
    "voidedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,

    CONSTRAINT "LedgerCharge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LedgerPayment" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "leaseId" TEXT,
    "amountCents" INTEGER NOT NULL,
    "receivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "method" "LedgerPaymentMethod",
    "source" TEXT,
    "memo" TEXT,
    "reversedAt" TIMESTAMP(3),
    "reverseReason" TEXT,
    "reversedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,

    CONSTRAINT "LedgerPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegalNoticeDelivery" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "leaseId" TEXT,
    "visitId" TEXT,
    "noticeType" "LegalNoticeType" NOT NULL,
    "jurisdiction" TEXT,
    "formRef" TEXT,
    "servedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "serviceMethod" "LegalServiceMethod" NOT NULL,
    "servedById" TEXT,
    "servedToName" TEXT,
    "proofUrl" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,

    CONSTRAINT "LegalNoticeDelivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegalNoticeTenant" (
    "id" TEXT NOT NULL,
    "legalNoticeId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "LegalNoticeTenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyVisit" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "leaseId" TEXT,
    "enteredById" TEXT,
    "vendorName" TEXT,
    "reasonType" "VisitReasonType" NOT NULL,
    "reasonDetails" TEXT,
    "scheduledStart" TIMESTAMP(3),
    "scheduledEnd" TIMESTAMP(3),
    "occurredAt" TIMESTAMP(3),
    "status" "VisitStatus" NOT NULL DEFAULT 'SCHEDULED',
    "entryNoticeRequired" BOOLEAN NOT NULL DEFAULT false,
    "entryNoticeGivenAt" TIMESTAMP(3),
    "entryNoticeMethod" "EntryNoticeMethod",
    "entryNoticeNotes" TEXT,
    "tenantPresent" BOOLEAN,
    "outcomeNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT,

    CONSTRAINT "PropertyVisit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitTenantPresent" (
    "id" TEXT NOT NULL,
    "visitId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "VisitTenantPresent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LedgerCharge_propertyId_idx" ON "LedgerCharge"("propertyId");

-- CreateIndex
CREATE INDEX "LedgerCharge_leaseId_idx" ON "LedgerCharge"("leaseId");

-- CreateIndex
CREATE INDEX "LedgerCharge_type_idx" ON "LedgerCharge"("type");

-- CreateIndex
CREATE INDEX "LedgerCharge_dueDate_idx" ON "LedgerCharge"("dueDate");

-- CreateIndex
CREATE INDEX "LedgerCharge_incurredAt_idx" ON "LedgerCharge"("incurredAt");

-- CreateIndex
CREATE INDEX "LedgerPayment_propertyId_idx" ON "LedgerPayment"("propertyId");

-- CreateIndex
CREATE INDEX "LedgerPayment_leaseId_idx" ON "LedgerPayment"("leaseId");

-- CreateIndex
CREATE INDEX "LedgerPayment_receivedAt_idx" ON "LedgerPayment"("receivedAt");

-- CreateIndex
CREATE INDEX "LegalNoticeDelivery_propertyId_idx" ON "LegalNoticeDelivery"("propertyId");

-- CreateIndex
CREATE INDEX "LegalNoticeDelivery_leaseId_idx" ON "LegalNoticeDelivery"("leaseId");

-- CreateIndex
CREATE INDEX "LegalNoticeDelivery_visitId_idx" ON "LegalNoticeDelivery"("visitId");

-- CreateIndex
CREATE INDEX "LegalNoticeDelivery_servedAt_idx" ON "LegalNoticeDelivery"("servedAt");

-- CreateIndex
CREATE INDEX "LegalNoticeDelivery_noticeType_idx" ON "LegalNoticeDelivery"("noticeType");

-- CreateIndex
CREATE INDEX "LegalNoticeTenant_tenantId_idx" ON "LegalNoticeTenant"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "LegalNoticeTenant_legalNoticeId_tenantId_key" ON "LegalNoticeTenant"("legalNoticeId", "tenantId");

-- CreateIndex
CREATE INDEX "PropertyVisit_propertyId_idx" ON "PropertyVisit"("propertyId");

-- CreateIndex
CREATE INDEX "PropertyVisit_leaseId_idx" ON "PropertyVisit"("leaseId");

-- CreateIndex
CREATE INDEX "PropertyVisit_occurredAt_idx" ON "PropertyVisit"("occurredAt");

-- CreateIndex
CREATE INDEX "PropertyVisit_reasonType_idx" ON "PropertyVisit"("reasonType");

-- CreateIndex
CREATE INDEX "PropertyVisit_status_idx" ON "PropertyVisit"("status");

-- CreateIndex
CREATE INDEX "VisitTenantPresent_tenantId_idx" ON "VisitTenantPresent"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "VisitTenantPresent_visitId_tenantId_key" ON "VisitTenantPresent"("visitId", "tenantId");

-- CreateIndex
CREATE INDEX "Lease_propertyId_idx" ON "Lease"("propertyId");

-- CreateIndex
CREATE INDEX "Lease_landlordId_idx" ON "Lease"("landlordId");

-- CreateIndex
CREATE INDEX "Lease_status_idx" ON "Lease"("status");

-- CreateIndex
CREATE INDEX "Lease_startDate_idx" ON "Lease"("startDate");

-- CreateIndex
CREATE INDEX "Lease_endDate_idx" ON "Lease"("endDate");

-- CreateIndex
CREATE INDEX "TenantAttachment_archivedAt_idx" ON "TenantAttachment"("archivedAt");

-- AddForeignKey
ALTER TABLE "Lease" ADD CONSTRAINT "Lease_lateFeePolicyId_fkey" FOREIGN KEY ("lateFeePolicyId") REFERENCES "LateFeePolicy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerCharge" ADD CONSTRAINT "LedgerCharge_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerCharge" ADD CONSTRAINT "LedgerCharge_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerCharge" ADD CONSTRAINT "LedgerCharge_voidedById_fkey" FOREIGN KEY ("voidedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerCharge" ADD CONSTRAINT "LedgerCharge_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerPayment" ADD CONSTRAINT "LedgerPayment_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerPayment" ADD CONSTRAINT "LedgerPayment_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerPayment" ADD CONSTRAINT "LedgerPayment_reversedById_fkey" FOREIGN KEY ("reversedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerPayment" ADD CONSTRAINT "LedgerPayment_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalNoticeDelivery" ADD CONSTRAINT "LegalNoticeDelivery_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalNoticeDelivery" ADD CONSTRAINT "LegalNoticeDelivery_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalNoticeDelivery" ADD CONSTRAINT "LegalNoticeDelivery_visitId_fkey" FOREIGN KEY ("visitId") REFERENCES "PropertyVisit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalNoticeDelivery" ADD CONSTRAINT "LegalNoticeDelivery_servedById_fkey" FOREIGN KEY ("servedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalNoticeDelivery" ADD CONSTRAINT "LegalNoticeDelivery_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalNoticeTenant" ADD CONSTRAINT "LegalNoticeTenant_legalNoticeId_fkey" FOREIGN KEY ("legalNoticeId") REFERENCES "LegalNoticeDelivery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalNoticeTenant" ADD CONSTRAINT "LegalNoticeTenant_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyVisit" ADD CONSTRAINT "PropertyVisit_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyVisit" ADD CONSTRAINT "PropertyVisit_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyVisit" ADD CONSTRAINT "PropertyVisit_enteredById_fkey" FOREIGN KEY ("enteredById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyVisit" ADD CONSTRAINT "PropertyVisit_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitTenantPresent" ADD CONSTRAINT "VisitTenantPresent_visitId_fkey" FOREIGN KEY ("visitId") REFERENCES "PropertyVisit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitTenantPresent" ADD CONSTRAINT "VisitTenantPresent_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
