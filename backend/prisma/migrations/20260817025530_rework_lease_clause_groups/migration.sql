/*
  Warnings:

  - You are about to drop the column `category` on the `Clause` table. All the data in the column will be lost.
  - You are about to drop the column `isEarlyTermination` on the `Clause` table. All the data in the column will be lost.
  - You are about to drop the column `sectionNumber` on the `Clause` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `LeaseClause` table. All the data in the column will be lost.
  - You are about to drop the column `isEarlyTermination` on the `LeaseClause` table. All the data in the column will be lost.
  - You are about to drop the column `sectionNumber` on the `LeaseClause` table. All the data in the column will be lost.
  - Added the required column `group` to the `Clause` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group` to the `LeaseClause` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clause" DROP COLUMN "category",
DROP COLUMN "isEarlyTermination",
DROP COLUMN "sectionNumber",
ADD COLUMN     "group" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "LeaseClause" DROP COLUMN "category",
DROP COLUMN "isEarlyTermination",
DROP COLUMN "sectionNumber",
ADD COLUMN     "group" TEXT NOT NULL,
ADD COLUMN     "sourceTemplateId" TEXT;
