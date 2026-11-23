-- AlterTable
ALTER TABLE "Lease" ADD COLUMN     "lateFeeCharged" BOOLEAN;

-- A lease that already has a late fee amount charges one.
UPDATE "Lease" SET "lateFeeCharged" = true WHERE "lateFeeAmount" > 0;
