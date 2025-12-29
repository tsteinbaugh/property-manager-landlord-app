/*
  Warnings:

  - Added the required column `vehicleType` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Made the column `make` on table `Vehicle` required. This step will fail if there are existing NULL values in that column.
  - Made the column `model` on table `Vehicle` required. This step will fail if there are existing NULL values in that column.
  - Made the column `year` on table `Vehicle` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "VehicleType" AS ENUM ('CAR', 'MOTORCYCLE', 'TRUCK', 'SUV', 'VAN', 'RV', 'BOAT', 'TRAILER', 'ATV', 'UTV', 'GOLF_CART', 'OTHER');

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "vehicleSubType" TEXT,
ADD COLUMN     "vehicleType" "VehicleType" NOT NULL,
ALTER COLUMN "make" SET NOT NULL,
ALTER COLUMN "model" SET NOT NULL,
ALTER COLUMN "year" SET NOT NULL;
