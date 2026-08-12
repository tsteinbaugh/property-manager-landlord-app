-- DropForeignKey
ALTER TABLE "LeaseTenant" DROP CONSTRAINT "LeaseTenant_leaseId_fkey";

-- DropForeignKey
ALTER TABLE "LeaseTenant" DROP CONSTRAINT "LeaseTenant_tenantId_fkey";

-- AddForeignKey
ALTER TABLE "LeaseTenant" ADD CONSTRAINT "LeaseTenant_leaseId_fkey" FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaseTenant" ADD CONSTRAINT "LeaseTenant_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
