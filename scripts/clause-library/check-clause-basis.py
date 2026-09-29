# Fails unless every active LEASE_CLAUSE row in lease-clauses.csv records why
# it belongs in the lease (checklist instruction 66, the three-bucket test).
# Added 2026-09-29, after the test turned out to live only in the CO log and
# every state from Ohio on classified rows without it.
#
# Usage (from the repo root):
#   python3 scripts/clause-library/check-clause-basis.py [lease-clauses.csv]
#
# Valid `lease_clause_basis` values, one or more separated by " | ":
#   REQUIRED_DISCLOSURE: <statute>   a statute requires the text (citation required)
#   CONSTRAINED_TERM                 the landlord's own term, limited by law
#   SERVES_LANDLORD                  a term the landlord benefits from having agreed
# Every other row (education, inactive) must leave the column blank.
#
# PENDING_SCRUB: <verdict> marks a row the 2026-09-29 scrub has classified but
# not yet applied (see lease-clause-scrub-verdicts.md). It passes with a
# warning so the scrub can land in batches. Remove the allowance once the
# scrub is finished.
import csv, sys

path = sys.argv[1] if len(sys.argv) > 1 else "lease-clauses.csv"
rows = list(csv.DictReader(open(path, newline="", encoding="utf-8")))
if rows and "lease_clause_basis" not in rows[0]:
    sys.exit("FAIL - lease-clauses.csv has no lease_clause_basis column")

KINDS = {"REQUIRED_DISCLOSURE", "CONSTRAINED_TERM", "SERVES_LANDLORD"}
bad, stray, pending = [], [], []
for r in rows:
    basis = (r["lease_clause_basis"] or "").strip()
    is_clause = r["is_active"] == "TRUE" and r["content_type"] == "LEASE_CLAUSE"
    if not is_clause:
        if basis:
            stray.append(r["id"])
        continue
    if basis.startswith("PENDING_SCRUB:"):
        pending.append(r["id"])
        continue
    parts = [p.strip() for p in basis.split(" | ")] if basis else []
    ok = bool(parts)
    for p in parts:
        kind, _, cite = p.partition(":")
        if kind.strip() not in KINDS:
            ok = False
        elif kind.strip() == "REQUIRED_DISCLOSURE" and not cite.strip():
            ok = False
        elif kind.strip() != "REQUIRED_DISCLOSURE" and cite.strip():
            ok = False
    if not ok:
        bad.append(f"{r['id']} [{basis or 'blank'}]")

if pending:
    print(f"warn - {len(pending)} rows still PENDING_SCRUB (see lease-clause-scrub-verdicts.md)")
if stray:
    print("FAIL - basis set on a row that is not an active lease clause:", ", ".join(stray))
if bad:
    print("FAIL - active lease clause with a missing or invalid basis:")
    for b in bad:
        print("  ", b)
if stray or bad:
    sys.exit(1)
active = sum(1 for r in rows if r["is_active"] == "TRUE" and r["content_type"] == "LEASE_CLAUSE")
print(f"ok - {active} active lease clauses carry a basis")
