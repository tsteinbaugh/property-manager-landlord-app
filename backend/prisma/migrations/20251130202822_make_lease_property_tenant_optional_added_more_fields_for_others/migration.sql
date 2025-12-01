-- DropForeignKey
ALTER TABLE "Lease" DROP CONSTRAINT "Lease_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "Lease" DROP CONSTRAINT "Lease_tenantId_fkey";

-- AlterTable
ALTER TABLE "EmergencyContact" ADD COLUMN     "address1" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "postalCode" TEXT,
ADD COLUMN     "state" TEXT;

-- AlterTable
ALTER TABLE "Lease" ADD COLUMN     "notes" TEXT,
ALTER COLUMN "propertyId" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'DRAFT',
ALTER COLUMN "tenantId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Occupant" ADD COLUMN     "email" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "violations" TEXT;

-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "license" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "violations" TEXT;

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "bathrooms" INTEGER,
ADD COLUMN     "bedrooms" INTEGER,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "sqft" INTEGER,
ADD COLUMN     "yearBuilt" INTEGER;

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "creditScore" INTEGER,
ADD COLUMN     "income" INTEGER,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "occupation" TEXT,
ADD COLUMN     "violations" TEXT;

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "notes" TEXT,
ADD COLUMN     "parking" TEXT,
ADD COLUMN     "violations" TEXT;

-- AddForeignKey
ALTER TABLE "Lease" ADD CONSTRAINT "Lease_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lease" ADD CONSTRAINT "Lease_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
