-- Splits Tenant.name into required firstName/lastName. Hand-written (not
-- prisma-generated) so existing rows aren't dropped -- `prisma migrate dev`
-- refuses to run non-interactively on a change it flags as data-losing.
-- Existing rows get their whole "name" value copied into firstName with an
-- empty lastName as a placeholder to satisfy the new NOT NULL constraint;
-- go back and fill in the real last name for any tenant added before this.
ALTER TABLE "Tenant" ADD COLUMN "firstName" TEXT;
ALTER TABLE "Tenant" ADD COLUMN "lastName" TEXT;

UPDATE "Tenant" SET "firstName" = "name", "lastName" = '';

ALTER TABLE "Tenant" ALTER COLUMN "firstName" SET NOT NULL;
ALTER TABLE "Tenant" ALTER COLUMN "lastName" SET NOT NULL;

ALTER TABLE "Tenant" DROP COLUMN "name";
