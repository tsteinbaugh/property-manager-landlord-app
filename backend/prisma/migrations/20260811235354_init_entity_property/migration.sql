-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('LLC', 'S_CORP', 'PERSONAL', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'landlord',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "legalName" TEXT NOT NULL,
    "entityType" "EntityType" NOT NULL,
    "stateOfFormation" TEXT,
    "ein" TEXT,
    "registeredAgent" TEXT,
    "formationDate" TIMESTAMP(3),
    "annualReportDueDate" TIMESTAMP(3),
    "bankAccount" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "name" TEXT,
    "address1" TEXT NOT NULL,
    "address2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Entity_userId_idx" ON "Entity"("userId");

-- CreateIndex
CREATE INDEX "Property_userId_idx" ON "Property"("userId");

-- CreateIndex
CREATE INDEX "Property_entityId_idx" ON "Property"("entityId");

-- AddForeignKey
ALTER TABLE "Entity" ADD CONSTRAINT "Entity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
