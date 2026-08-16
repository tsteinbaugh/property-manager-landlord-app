-- CreateEnum
CREATE TYPE "FixtureType" AS ENUM ('SINK', 'FAUCET', 'SHOWER_TUB', 'TOILET', 'HARDWARE');

-- CreateTable
CREATE TABLE "PaintSpec" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "location" TEXT,
    "brand" TEXT,
    "colorName" TEXT,
    "colorCode" TEXT,
    "sheen" TEXT,
    "base" TEXT,
    "formula" TEXT,
    "gallonsUsed" DECIMAL(6,2),
    "datePainted" TIMESTAMP(3),
    "paintedBy" TEXT,
    "touchUpStorageLocation" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaintSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlooringSpec" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "location" TEXT,
    "brand" TEXT,
    "productName" TEXT,
    "type" TEXT,
    "sqFtCovered" DECIMAL(8,2),
    "boxesInstalled" INTEGER,
    "boxesLeftover" INTEGER,
    "leftoverStorageLocation" TEXT,
    "installedBy" TEXT,
    "installDate" TIMESTAMP(3),
    "cost" DECIMAL(10,2),
    "warranty" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FlooringSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountertopSpec" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "location" TEXT,
    "brand" TEXT,
    "productName" TEXT,
    "material" TEXT,
    "sqFt" DECIMAL(8,2),
    "installedBy" TEXT,
    "installDate" TIMESTAMP(3),
    "cost" DECIMAL(10,2),
    "warranty" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CountertopSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fixture" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "location" TEXT,
    "fixtureType" "FixtureType" NOT NULL,
    "brand" TEXT,
    "model" TEXT,
    "finish" TEXT,
    "warranty" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fixture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appliance" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "location" TEXT,
    "make" TEXT,
    "model" TEXT,
    "year" INTEGER,
    "serialNumber" TEXT,
    "warrantyExpiration" TIMESTAMP(3),
    "maintenanceIntervalDays" INTEGER,
    "lastServiceDate" TIMESTAMP(3),
    "filterSize" TEXT,
    "preferredVendorId" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appliance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BacksplashSpec" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "location" TEXT,
    "brand" TEXT,
    "productName" TEXT,
    "material" TEXT,
    "tileSize" TEXT,
    "groutColor" TEXT,
    "groutBrand" TEXT,
    "spareTilesOnHand" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BacksplashSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExteriorFeature" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "location" TEXT,
    "name" TEXT,
    "approxAge" INTEGER,
    "size" TEXT,
    "lastTrimmedDate" TIMESTAMP(3),
    "lastTreatedDate" TIMESTAMP(3),
    "lastFertilizedDate" TIMESTAMP(3),
    "serviceContractor" TEXT,
    "serviceContractType" TEXT,
    "serviceCost" DECIMAL(10,2),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExteriorFeature_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PaintSpec_userId_idx" ON "PaintSpec"("userId");

-- CreateIndex
CREATE INDEX "PaintSpec_entityId_idx" ON "PaintSpec"("entityId");

-- CreateIndex
CREATE INDEX "PaintSpec_propertyId_idx" ON "PaintSpec"("propertyId");

-- CreateIndex
CREATE INDEX "FlooringSpec_userId_idx" ON "FlooringSpec"("userId");

-- CreateIndex
CREATE INDEX "FlooringSpec_entityId_idx" ON "FlooringSpec"("entityId");

-- CreateIndex
CREATE INDEX "FlooringSpec_propertyId_idx" ON "FlooringSpec"("propertyId");

-- CreateIndex
CREATE INDEX "CountertopSpec_userId_idx" ON "CountertopSpec"("userId");

-- CreateIndex
CREATE INDEX "CountertopSpec_entityId_idx" ON "CountertopSpec"("entityId");

-- CreateIndex
CREATE INDEX "CountertopSpec_propertyId_idx" ON "CountertopSpec"("propertyId");

-- CreateIndex
CREATE INDEX "Fixture_userId_idx" ON "Fixture"("userId");

-- CreateIndex
CREATE INDEX "Fixture_entityId_idx" ON "Fixture"("entityId");

-- CreateIndex
CREATE INDEX "Fixture_propertyId_idx" ON "Fixture"("propertyId");

-- CreateIndex
CREATE INDEX "Appliance_userId_idx" ON "Appliance"("userId");

-- CreateIndex
CREATE INDEX "Appliance_entityId_idx" ON "Appliance"("entityId");

-- CreateIndex
CREATE INDEX "Appliance_propertyId_idx" ON "Appliance"("propertyId");

-- CreateIndex
CREATE INDEX "Appliance_preferredVendorId_idx" ON "Appliance"("preferredVendorId");

-- CreateIndex
CREATE INDEX "BacksplashSpec_userId_idx" ON "BacksplashSpec"("userId");

-- CreateIndex
CREATE INDEX "BacksplashSpec_entityId_idx" ON "BacksplashSpec"("entityId");

-- CreateIndex
CREATE INDEX "BacksplashSpec_propertyId_idx" ON "BacksplashSpec"("propertyId");

-- CreateIndex
CREATE INDEX "ExteriorFeature_userId_idx" ON "ExteriorFeature"("userId");

-- CreateIndex
CREATE INDEX "ExteriorFeature_entityId_idx" ON "ExteriorFeature"("entityId");

-- CreateIndex
CREATE INDEX "ExteriorFeature_propertyId_idx" ON "ExteriorFeature"("propertyId");

-- AddForeignKey
ALTER TABLE "PaintSpec" ADD CONSTRAINT "PaintSpec_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaintSpec" ADD CONSTRAINT "PaintSpec_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlooringSpec" ADD CONSTRAINT "FlooringSpec_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlooringSpec" ADD CONSTRAINT "FlooringSpec_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CountertopSpec" ADD CONSTRAINT "CountertopSpec_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CountertopSpec" ADD CONSTRAINT "CountertopSpec_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fixture" ADD CONSTRAINT "Fixture_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fixture" ADD CONSTRAINT "Fixture_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appliance" ADD CONSTRAINT "Appliance_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appliance" ADD CONSTRAINT "Appliance_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appliance" ADD CONSTRAINT "Appliance_preferredVendorId_fkey" FOREIGN KEY ("preferredVendorId") REFERENCES "Vendor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BacksplashSpec" ADD CONSTRAINT "BacksplashSpec_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BacksplashSpec" ADD CONSTRAINT "BacksplashSpec_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExteriorFeature" ADD CONSTRAINT "ExteriorFeature_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExteriorFeature" ADD CONSTRAINT "ExteriorFeature_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
