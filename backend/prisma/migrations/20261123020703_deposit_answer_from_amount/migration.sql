-- Existing leases: a deposit amount over $0 answers the new Yes/No as Yes and
-- $0 as No; a blank amount stays unanswered (2026-11-22).
UPDATE "Lease" SET "securityDepositTaken" = true WHERE "securityDepositAmount" > 0;
UPDATE "Lease" SET "securityDepositTaken" = false WHERE "securityDepositAmount" = 0;
