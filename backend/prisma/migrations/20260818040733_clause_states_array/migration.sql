/*
  Warnings:

  - You are about to drop the column `state` on the `Clause` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Clause" DROP COLUMN "state",
ADD COLUMN     "states" TEXT[] DEFAULT ARRAY[]::TEXT[];
