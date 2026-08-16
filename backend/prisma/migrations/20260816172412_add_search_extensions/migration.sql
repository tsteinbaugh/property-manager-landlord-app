-- Enables fuzzy ("close enough") and phonetic ("sounds alike") matching for
-- the global search feature (see backend/src/lib/search.js). Not modeled in
-- schema.prisma — these are database-level capabilities $queryRaw uses
-- directly, same reasoning as the hand-written rename_lawn_to_landscaping
-- migration for changes outside what the schema tracks.
--
-- No trigram indexes here: search.js matches against concat_ws(...) of
-- several columns per table, and concat_ws is Postgres-STABLE rather than
-- IMMUTABLE, so it can't back a functional GIN index without a custom
-- IMMUTABLE wrapper function. At this app's actual scale (one landlord,
-- dozens of records per table) a sequential similarity/soundex scan is
-- already sub-millisecond — revisit indexing if/when this is real
-- multi-tenant SaaS traffic.
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS fuzzystrmatch;
