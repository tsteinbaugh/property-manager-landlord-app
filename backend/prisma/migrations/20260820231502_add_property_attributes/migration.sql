-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "amenities" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "bathrooms" DECIMAL(3,1),
ADD COLUMN     "bedrooms" INTEGER,
ADD COLUMN     "sqFt" INTEGER;
