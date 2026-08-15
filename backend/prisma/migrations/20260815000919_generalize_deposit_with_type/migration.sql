/*
  Warnings:

  - You are about to drop the `SecurityDeposit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SecurityDepositDeduction` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "DepositType" AS ENUM ('SECURITY', 'PET');

-- CreateEnum
CREATE TYPE "DepositStatus" AS ENUM ('HELD', 'PARTIALLY_RETURNED', 'FULLY_RETURNED', 'FORFEITED');

-- DropForeignKey
ALTER TABLE "SecurityDeposit" DROP CONSTRAINT "SecurityDeposit_entityId_fkey";

-- DropForeignKey
ALTER TABLE "SecurityDeposit" DROP CONSTRAINT "SecurityDeposit_leaseId_fkey";

-- DropForeignKey
ALTER TABLE "SecurityDeposit" DROP CONSTRAINT "SecurityDeposit_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "SecurityDepositDeduction" DROP CONSTRAINT "SecurityDepositDeduction_securityDepositId_fkey";

-- DropTable
DROP TABLE "SecurityDeposit";

-- DropTable
DROP TABLE "SecurityDepositDeduction";

-- DropEnum
DROP TYPE "SecurityDepositStatus";

-- CreateTable
CREATE TABLE "Deposit" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "leaseId" TEXT NOT NULL,
    "type" "DepositType" NOT NULL,
    "amountHeld" DECIMAL(10,2) NOT NULL,
    "dateReceived" TIMESTAMP(3) NOT NULL,
    "storageMethod" TEXT,
    "status" "DepositStatus" NOT NULL DEFAULT 'HELD',
    "returnedAmount" DECIMAL(10,2),
    "returnedDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deposit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DepositDeduction" (
    "id" TEXT NOT NULL,
    "depositId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DepositDeduction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Deposit_userId_idx" ON "Deposit"("userId");

-- CreateIndex
CREATE INDEX "Deposit_entityId_idx" ON "Deposit"("entityId");

-- CreateIndex
CREATE INDEX "Deposit_propertyId_idx" ON "Deposit"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Deposit_leaseId_type_key" ON "Deposit"("leaseId", "type");

-- CreateIndex
CREATE INDEX "DepositDeduction_depositId_idx" ON "DepositDeduction"("depositId");

-- AddForeignKey
ALTER TABLE "Deposit" ADD CONSTRAINT "Deposit_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposit" ADD CONSTRAINT "Deposit_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposit" ADD CONSTRAINT "Deposit_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepositDeduction" ADD CONSTRAINT "DepositDeduction_depositId_fkey" FOREIGN KEY ("depositId") REFERENCES "Deposit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
