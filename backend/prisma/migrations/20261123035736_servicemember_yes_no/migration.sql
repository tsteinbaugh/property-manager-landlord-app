-- AlterTable
ALTER TABLE "Occupant" ALTER COLUMN "isServicemember" DROP NOT NULL,
ALTER COLUMN "isServicemember" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Tenant" ALTER COLUMN "isServicemember" DROP NOT NULL,
ALTER COLUMN "isServicemember" DROP DEFAULT;
