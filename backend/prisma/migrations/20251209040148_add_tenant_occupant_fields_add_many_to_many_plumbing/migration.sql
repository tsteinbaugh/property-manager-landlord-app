-- CreateEnum
CREATE TYPE "HairColor" AS ENUM ('BLACK', 'BROWN', 'BLONDE', 'RED', 'GRAY', 'WHITE', 'DYED', 'BALD', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "EyeColor" AS ENUM ('BROWN', 'BLUE', 'GREEN', 'HAZEL', 'GRAY', 'AMBER', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "BodyBuild" AS ENUM ('SLIM', 'AVERAGE', 'ATHLETIC', 'HEAVYSET', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE', 'UNKNOWN');

-- AlterTable
ALTER TABLE "Occupant" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "bodyBuild" "BodyBuild" DEFAULT 'UNKNOWN',
ADD COLUMN     "eyeColor" "EyeColor" NOT NULL DEFAULT 'UNKNOWN',
ADD COLUMN     "hairColor" "HairColor" DEFAULT 'UNKNOWN',
ADD COLUMN     "heightFeet" INTEGER,
ADD COLUMN     "heightInches" INTEGER,
ADD COLUMN     "markings" TEXT,
ADD COLUMN     "sex" "Sex" DEFAULT 'UNKNOWN',
ADD COLUMN     "weight" INTEGER;

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "bodyBuild" "BodyBuild" DEFAULT 'UNKNOWN',
ADD COLUMN     "eyeColor" "EyeColor" NOT NULL DEFAULT 'UNKNOWN',
ADD COLUMN     "hairColor" "HairColor" DEFAULT 'UNKNOWN',
ADD COLUMN     "heightFeet" INTEGER,
ADD COLUMN     "heightInches" INTEGER,
ADD COLUMN     "markings" TEXT,
ADD COLUMN     "sex" "Sex" DEFAULT 'UNKNOWN',
ADD COLUMN     "weight" INTEGER;

-- CreateTable
CREATE TABLE "TenantOccupant" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "occupantId" TEXT NOT NULL,

    CONSTRAINT "TenantOccupant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantPet" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "petId" TEXT NOT NULL,

    CONSTRAINT "TenantPet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantEmergencyContact" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "emergencyContactId" TEXT NOT NULL,

    CONSTRAINT "TenantEmergencyContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantVehicle" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,

    CONSTRAINT "TenantVehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TenantOccupant_tenantId_occupantId_key" ON "TenantOccupant"("tenantId", "occupantId");

-- CreateIndex
CREATE UNIQUE INDEX "TenantPet_tenantId_petId_key" ON "TenantPet"("tenantId", "petId");

-- CreateIndex
CREATE UNIQUE INDEX "TenantEmergencyContact_tenantId_emergencyContactId_key" ON "TenantEmergencyContact"("tenantId", "emergencyContactId");

-- CreateIndex
CREATE UNIQUE INDEX "TenantVehicle_tenantId_vehicleId_key" ON "TenantVehicle"("tenantId", "vehicleId");

-- AddForeignKey
ALTER TABLE "TenantOccupant" ADD CONSTRAINT "TenantOccupant_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantOccupant" ADD CONSTRAINT "TenantOccupant_occupantId_fkey" FOREIGN KEY ("occupantId") REFERENCES "Occupant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantPet" ADD CONSTRAINT "TenantPet_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantPet" ADD CONSTRAINT "TenantPet_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantEmergencyContact" ADD CONSTRAINT "TenantEmergencyContact_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantEmergencyContact" ADD CONSTRAINT "TenantEmergencyContact_emergencyContactId_fkey" FOREIGN KEY ("emergencyContactId") REFERENCES "EmergencyContact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantVehicle" ADD CONSTRAINT "TenantVehicle_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantVehicle" ADD CONSTRAINT "TenantVehicle_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
