-- AlterTable
ALTER TABLE "Lease" ADD COLUMN     "fileMimeType" TEXT,
ADD COLUMN     "fileOriginalName" TEXT,
ADD COLUMN     "fileSize" INTEGER,
ADD COLUMN     "fileUrl" TEXT;
