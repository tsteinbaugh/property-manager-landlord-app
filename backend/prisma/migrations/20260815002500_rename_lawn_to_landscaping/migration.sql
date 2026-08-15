-- Rename enum value in place (preserves any existing rows using it) rather
-- than dropping and recreating the type.
ALTER TYPE "ExpenseCategory" RENAME VALUE 'LAWN' TO 'LANDSCAPING';
