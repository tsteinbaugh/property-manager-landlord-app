/*
  Warnings:

  - Made the column `phone` on table `EmergencyContact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `EmergencyContact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "BodyBuild" ADD VALUE 'OTHER';

-- AlterEnum
ALTER TYPE "EyeColor" ADD VALUE 'OTHER';

-- AlterEnum
ALTER TYPE "HairColor" ADD VALUE 'OTHER';

-- AlterEnum
ALTER TYPE "Sex" ADD VALUE 'OTHER';

-- AlterTable
ALTER TABLE "EmergencyContact" ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "employer" TEXT;
