/*
  Warnings:

  - The values [ARCHIVED] on the enum `LeaseStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `isArchived` on the `EmergencyContact` table. All the data in the column will be lost.
  - The `state` column on the `EmergencyContact` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `isArchived` on the `Occupant` table. All the data in the column will be lost.
  - You are about to drop the column `isArchived` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `isArchived` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `isArchived` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `isArchived` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isArchived` on the `Vehicle` table. All the data in the column will be lost.
  - Changed the type of `state` on the `Property` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `state` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PropertyStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "LeaseType" AS ENUM ('FIXED_TERM', 'MONTH_TO_MONTH');

-- CreateEnum
CREATE TYPE "TenantStatus" AS ENUM ('DRAFT', 'CANDIDATE', 'ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "StateCode" AS ENUM ('AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC');

-- AlterEnum
BEGIN;
CREATE TYPE "LeaseStatus_new" AS ENUM ('DRAFT', 'ACTIVE', 'ENDED', 'TERMINATED', 'LEGAL_HOLD');
ALTER TABLE "public"."Lease" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Lease" ALTER COLUMN "status" TYPE "LeaseStatus_new" USING ("status"::text::"LeaseStatus_new");
ALTER TYPE "LeaseStatus" RENAME TO "LeaseStatus_old";
ALTER TYPE "LeaseStatus_new" RENAME TO "LeaseStatus";
DROP TYPE "public"."LeaseStatus_old";
ALTER TABLE "Lease" ALTER COLUMN "status" SET DEFAULT 'DRAFT';
COMMIT;

-- AlterTable
ALTER TABLE "EmergencyContact" DROP COLUMN "isArchived",
ADD COLUMN     "archiveReason" TEXT,
ADD COLUMN     "archivedAt" TIMESTAMP(3),
DROP COLUMN "state",
ADD COLUMN     "state" "StateCode";

-- AlterTable
ALTER TABLE "Lease" ADD COLUMN     "archiveReason" TEXT,
ADD COLUMN     "archivedAt" TIMESTAMP(3),
ADD COLUMN     "leaseType" "LeaseType" NOT NULL DEFAULT 'FIXED_TERM';

-- AlterTable
ALTER TABLE "Occupant" DROP COLUMN "isArchived",
ADD COLUMN     "archiveReason" TEXT,
ADD COLUMN     "archivedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "isArchived",
ADD COLUMN     "archiveReason" TEXT,
ADD COLUMN     "archivedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "isArchived",
ADD COLUMN     "archiveReason" TEXT,
ADD COLUMN     "archivedAt" TIMESTAMP(3),
ADD COLUMN     "status" "PropertyStatus" NOT NULL DEFAULT 'ACTIVE',
DROP COLUMN "state",
ADD COLUMN     "state" "StateCode" NOT NULL;

-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "isArchived",
ADD COLUMN     "archiveReason" TEXT,
ADD COLUMN     "archivedAt" TIMESTAMP(3),
ADD COLUMN     "status" "TenantStatus" NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isArchived";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "isArchived",
ADD COLUMN     "archiveReason" TEXT,
ADD COLUMN     "archivedAt" TIMESTAMP(3),
DROP COLUMN "state",
ADD COLUMN     "state" "StateCode" NOT NULL;
