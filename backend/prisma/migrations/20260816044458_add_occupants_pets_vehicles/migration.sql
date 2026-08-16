-- Occupants, pets, and vehicles become individual records per lease,
-- replacing the old bare Lease.nonLeaseOccupantCount integer. Hand-written
-- (not prisma-generated) since dropping that column is data-losing and
-- `prisma migrate dev` refuses to run non-interactively on it -- there's no
-- way to reconstruct individual occupant records from a bare count anyway.
ALTER TABLE "Lease" DROP COLUMN "nonLeaseOccupantCount";

-- CreateTable
CREATE TABLE "Occupant" (
    "id" TEXT NOT NULL,
    "leaseId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "phone" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Occupant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "leaseId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "breed" TEXT,
    "name" TEXT,
    "license" TEXT,
    "age" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "leaseId" TEXT NOT NULL,
    "make" TEXT,
    "model" TEXT,
    "year" INTEGER,
    "color" TEXT,
    "licensePlate" TEXT,
    "state" TEXT,
    "vin" TEXT,
    "parkingSpot" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Occupant_leaseId_idx" ON "Occupant"("leaseId");

-- CreateIndex
CREATE INDEX "Pet_leaseId_idx" ON "Pet"("leaseId");

-- CreateIndex
CREATE INDEX "Vehicle_leaseId_idx" ON "Vehicle"("leaseId");

-- AddForeignKey
ALTER TABLE "Occupant" ADD CONSTRAINT "Occupant_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE CASCADE ON UPDATE CASCADE;
