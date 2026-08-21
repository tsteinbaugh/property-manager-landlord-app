-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "archived" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "archivedAt" TIMESTAMP(3),
ADD COLUMN     "archivedReason" TEXT;
