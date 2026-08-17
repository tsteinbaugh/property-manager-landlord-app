-- CreateTable
CREATE TABLE "Clause" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "bodyText" TEXT NOT NULL,
    "sectionNumber" TEXT,
    "category" TEXT,
    "isEarlyTermination" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Clause_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaseClause" (
    "id" TEXT NOT NULL,
    "leaseId" TEXT NOT NULL,
    "sourceClauseId" TEXT,
    "title" TEXT NOT NULL,
    "bodyText" TEXT NOT NULL,
    "sectionNumber" TEXT,
    "category" TEXT,
    "isEarlyTermination" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LeaseClause_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Clause_userId_idx" ON "Clause"("userId");

-- CreateIndex
CREATE INDEX "LeaseClause_leaseId_idx" ON "LeaseClause"("leaseId");

-- CreateIndex
CREATE INDEX "LeaseClause_sourceClauseId_idx" ON "LeaseClause"("sourceClauseId");

-- AddForeignKey
ALTER TABLE "Clause" ADD CONSTRAINT "Clause_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaseClause" ADD CONSTRAINT "LeaseClause_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaseClause" ADD CONSTRAINT "LeaseClause_sourceClauseId_fkey" FOREIGN KEY ("sourceClauseId") REFERENCES "Clause"("id") ON DELETE SET NULL ON UPDATE CASCADE;
