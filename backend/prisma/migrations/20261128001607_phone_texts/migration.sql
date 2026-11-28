-- AlterTable
ALTER TABLE "Entity" ADD COLUMN     "contactPhoneTexts" BOOLEAN;

-- AlterTable
ALTER TABLE "Occupant" ADD COLUMN     "phoneTexts" BOOLEAN;

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "emergencyContactPhoneTexts" BOOLEAN,
ADD COLUMN     "phoneTexts" BOOLEAN;

-- AlterTable
ALTER TABLE "Vendor" ADD COLUMN     "phoneTexts" BOOLEAN;
