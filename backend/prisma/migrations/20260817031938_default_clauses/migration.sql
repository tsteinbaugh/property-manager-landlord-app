-- AlterTable
ALTER TABLE "Clause" ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "DefaultClauseTemplate" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DefaultClauseTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DefaultClauseTemplate_userId_idx" ON "DefaultClauseTemplate"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "DefaultClauseTemplate_userId_templateId_key" ON "DefaultClauseTemplate"("userId", "templateId");

-- AddForeignKey
ALTER TABLE "DefaultClauseTemplate" ADD CONSTRAINT "DefaultClauseTemplate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
