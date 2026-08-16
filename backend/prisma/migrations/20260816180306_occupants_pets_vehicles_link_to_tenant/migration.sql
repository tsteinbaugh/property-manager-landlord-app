-- Re-scopes Occupant/Pet/Vehicle from Lease to Tenant. A Lease is per-term
-- paperwork that ends when a tenant moves; a Tenant persists across that
-- move, so pointing these at Tenant means they follow the tenant onto a new
-- lease instead of needing to be recreated. Hand-written (not a plain
-- generated diff) to backfill via LeaseTenant rather than drop the data,
-- same reasoning as the split_tenant_name migration.

-- Occupant
ALTER TABLE "Occupant" ADD COLUMN "tenantId" TEXT;
UPDATE "Occupant" o SET "tenantId" = (
  SELECT lt."tenantId" FROM "LeaseTenant" lt
  WHERE lt."leaseId" = o."leaseId"
  ORDER BY (lt.role = 'PRIMARY') DESC
  LIMIT 1
);
ALTER TABLE "Occupant" DROP CONSTRAINT "Occupant_leaseId_fkey";
DROP INDEX "Occupant_leaseId_idx";
ALTER TABLE "Occupant" ALTER COLUMN "tenantId" SET NOT NULL;
ALTER TABLE "Occupant" DROP COLUMN "leaseId";
ALTER TABLE "Occupant" ADD CONSTRAINT "Occupant_tenantId_fkey"
  FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
CREATE INDEX "Occupant_tenantId_idx" ON "Occupant"("tenantId");

-- Pet
ALTER TABLE "Pet" ADD COLUMN "tenantId" TEXT;
UPDATE "Pet" p SET "tenantId" = (
  SELECT lt."tenantId" FROM "LeaseTenant" lt
  WHERE lt."leaseId" = p."leaseId"
  ORDER BY (lt.role = 'PRIMARY') DESC
  LIMIT 1
);
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_leaseId_fkey";
DROP INDEX "Pet_leaseId_idx";
ALTER TABLE "Pet" ALTER COLUMN "tenantId" SET NOT NULL;
ALTER TABLE "Pet" DROP COLUMN "leaseId";
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_tenantId_fkey"
  FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
CREATE INDEX "Pet_tenantId_idx" ON "Pet"("tenantId");

-- Vehicle
ALTER TABLE "Vehicle" ADD COLUMN "tenantId" TEXT;
UPDATE "Vehicle" v SET "tenantId" = (
  SELECT lt."tenantId" FROM "LeaseTenant" lt
  WHERE lt."leaseId" = v."leaseId"
  ORDER BY (lt.role = 'PRIMARY') DESC
  LIMIT 1
);
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_leaseId_fkey";
DROP INDEX "Vehicle_leaseId_idx";
ALTER TABLE "Vehicle" ALTER COLUMN "tenantId" SET NOT NULL;
ALTER TABLE "Vehicle" DROP COLUMN "leaseId";
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_tenantId_fkey"
  FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
CREATE INDEX "Vehicle_tenantId_idx" ON "Vehicle"("tenantId");
