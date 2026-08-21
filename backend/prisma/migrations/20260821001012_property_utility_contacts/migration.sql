/*
  Warnings:

  - You are about to drop the column `utilityProviders` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "utilityProviders",
ADD COLUMN     "electricityContact" TEXT,
ADD COLUMN     "electricityProvider" TEXT,
ADD COLUMN     "gasContact" TEXT,
ADD COLUMN     "gasProvider" TEXT,
ADD COLUMN     "internetContact" TEXT,
ADD COLUMN     "internetProvider" TEXT,
ADD COLUMN     "mortgageContact" TEXT,
ADD COLUMN     "sewerContact" TEXT,
ADD COLUMN     "sewerProvider" TEXT,
ADD COLUMN     "trashContact" TEXT,
ADD COLUMN     "waterContact" TEXT,
ADD COLUMN     "waterProvider" TEXT;
