-- Replaced by Lease questions on the property page (Taylor, 2026-11-22):
-- parking and storage by the parking and storage questions, the HOA name by the
-- association picker, accepts Section 8 by the program housing question.
ALTER TABLE "Property" DROP COLUMN "parking",
DROP COLUMN "storage",
DROP COLUMN "hoaOrMetroDistrict",
DROP COLUMN "acceptsSection8";
