/*
  Warnings:

  - You are about to drop the column `tenantId` on the `EmergencyContact` table. All the data in the column will be lost.
  - You are about to drop the column `tenantId` on the `Lease` table. All the data in the column will be lost.
  - You are about to drop the column `tenantName` on the `Lease` table. All the data in the column will be lost.
  - You are about to drop the column `tenantId` on the `Occupant` table. All the data in the column will be lost.
  - You are about to drop the column `tenantId` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `tenantId` on the `Vehicle` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "EmergencyContact" DROP CONSTRAINT "EmergencyContact_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "Lease" DROP CONSTRAINT "Lease_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "Occupant" DROP CONSTRAINT "Occupant_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_tenantId_fkey";

-- AlterTable
ALTER TABLE "EmergencyContact" DROP COLUMN "tenantId";

-- AlterTable
ALTER TABLE "Lease" DROP COLUMN "tenantId",
DROP COLUMN "tenantName";

-- AlterTable
ALTER TABLE "Occupant" DROP COLUMN "tenantId";

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "tenantId";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "tenantId";
