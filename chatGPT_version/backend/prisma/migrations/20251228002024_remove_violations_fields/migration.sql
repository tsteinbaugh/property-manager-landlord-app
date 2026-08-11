/*
  Warnings:

  - You are about to drop the column `violations` on the `Occupant` table. All the data in the column will be lost.
  - You are about to drop the column `violations` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `violations` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `violations` on the `Vehicle` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Occupant" DROP COLUMN "violations";

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "violations";

-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "violations";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "violations";
