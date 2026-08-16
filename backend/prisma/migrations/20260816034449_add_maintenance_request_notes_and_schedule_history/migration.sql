-- AlterTable
ALTER TABLE "MaintenanceRequest" ADD COLUMN     "notes" TEXT;

-- CreateTable
CREATE TABLE "MaintenanceScheduleCompletion" (
    "id" TEXT NOT NULL,
    "maintenanceScheduleId" TEXT NOT NULL,
    "completedDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MaintenanceScheduleCompletion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MaintenanceScheduleCompletion_maintenanceScheduleId_idx" ON "MaintenanceScheduleCompletion"("maintenanceScheduleId");

-- AddForeignKey
ALTER TABLE "MaintenanceScheduleCompletion" ADD CONSTRAINT "MaintenanceScheduleCompletion_maintenanceScheduleId_fkey" FOREIGN KEY ("maintenanceScheduleId") REFERENCES "MaintenanceSchedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
