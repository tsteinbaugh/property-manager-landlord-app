/*
  Warnings:

  - You are about to drop the column `documentUrl` on the `Lease` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lease" DROP COLUMN "documentUrl",
ADD COLUMN     "documentKey" TEXT;
