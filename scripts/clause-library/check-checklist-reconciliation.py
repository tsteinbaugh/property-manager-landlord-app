# Fails if the named-topic checklist names a clause id that doesn't exist in
# lease-clauses.csv (checklist instruction 38). A cell that says "covered by
# `some-row`" must point at a real row, or the claim silently stops being true
# (ND's backfill found two such cases after the checklist grew). Retired rows
# may be named on purpose (history), so they're listed but don't fail.
# Choice-group names (the `choice_group` column, e.g. `tn-urlta-late-fee`)
# are also valid names: Tennessee's checklist cells cite its county pairs by
# group (added 2026-09-28).
#
# Usage (from the repo root):
#   python3 scripts/clause-library/check-checklist-reconciliation.py
import csv, re, sys

CHECKLIST = "lease-clause-decision-log-named-topic-checklist.md"
rows = {r["id"]: r for r in csv.DictReader(open("lease-clauses.csv", encoding="utf-8"))}
groups = {r["choice_group"] for r in rows.values() if r["choice_group"]}
named = set(re.findall(r"`([a-z0-9]+(?:-[a-z0-9]+)+)`", open(CHECKLIST, encoding="utf-8").read()))
missing = sorted(i for i in named if i not in rows and i not in groups)
retired = sorted(i for i in named if i in rows and rows[i]["is_active"] != "TRUE")
print(f"{len(named)} clause ids named in the checklist")
if retired:
    print("retired (named, allowed):", ", ".join(retired))
if missing:
    print("FAIL - named but not in lease-clauses.csv:", ", ".join(missing))
    sys.exit(1)
print("ok - every named id exists")
