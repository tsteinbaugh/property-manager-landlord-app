/*
  Warnings:

  - You are about to drop the column `propertyType` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lease" ADD COLUMN     "facts" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "leaseType" TEXT,
ADD COLUMN     "securityDepositTaken" BOOLEAN;

-- AlterTable
ALTER TABLE "Occupant" ADD COLUMN     "isServicemember" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isStudent" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "propertyType",
ADD COLUMN     "facts" JSONB NOT NULL DEFAULT '{}';

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "isServicemember" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isStudent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "nonresidentAlien" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "facts" JSONB NOT NULL DEFAULT '{}';
