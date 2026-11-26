-- AlterTable
ALTER TABLE "Entity" ADD COLUMN     "facts" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "registeredAgentAddress" TEXT;

-- Where the owner lives was asked on the user's account; it is about the
-- property's owner, so move it to the default Self / Personal owner (the user
-- personally), with the two unit-count answers (Taylor, 2026-11-26).
UPDATE "Entity" e SET "facts" = jsonb_strip_nulls(jsonb_build_object(
  'homeAddress', u."facts"->'residenceAddress',
  'homeState', u."facts"->'residenceState',
  'homeIsland', u."facts"->'residenceIsland',
  'moreThanTenRentalUnits', u."facts"->'moreThanTenRentalUnits',
  'ownsSixPlusUnitsMD', u."facts"->'ownsSixPlusUnitsMD'))
FROM "User" u WHERE e."userId" = u."id" AND e."isDefault" = true;

UPDATE "User" SET "facts" = "facts" - 'residenceAddress' - 'residenceState' - 'residenceIsland' - 'moreThanTenRentalUnits' - 'ownsSixPlusUnitsMD';
