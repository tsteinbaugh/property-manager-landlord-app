# Fails unless every jurisdiction tagged on an active row answers every topic
# in the library: for each jurisdiction, the active rows tagged with it must
# cover every topic_key used by any active row.
#
# Usage (from the repo root):
#   python3 scripts/clause-library/check-topic-coverage.py [lease-clauses.csv]
#
# Added 2026-11-21 after a check found 17 later-researched jurisdictions
# (MD to VI) missing 288 state-topic pairs: topics that later states added had
# been back-filled only in the 37 early states, and no guard counted topics
# per jurisdiction.
import csv, sys
from collections import defaultdict

path = sys.argv[1] if len(sys.argv) > 1 else "lease-clauses.csv"
rows = [r for r in csv.DictReader(open(path, newline="", encoding="utf-8"))
        if r["is_active"].strip().upper() == "TRUE"]
keys = {r["topic_key"] for r in rows if r["topic_key"].strip()}
blank = [r["id"] for r in rows if not r["topic_key"].strip()]
covered = defaultdict(set)
for r in rows:
    for st in r["states"].split(";"):
        st = st.strip()
        if st:
            covered[st].add(r["topic_key"])

failed = 0
if blank:
    failed += 1
    print(f"FAIL {len(blank)} active rows have no topic_key: {', '.join(blank[:10])}")
for st in sorted(covered):
    missing = sorted(keys - covered[st])
    if missing:
        failed += 1
        print(f"FAIL {st}: {len(missing)} of {len(keys)} topics have no row: {', '.join(missing)}")
    else:
        print(f"ok   {st}: all {len(keys)} topics")
sys.exit(1 if failed else 0)
