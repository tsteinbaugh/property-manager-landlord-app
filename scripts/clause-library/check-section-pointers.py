#!/usr/bin/env python3
"""Fail if an active lease clause points at another section by title
("this Lease's Maintenance & Repairs Section") that some state it is tagged
in has no active clause for.

Rule 78 asks for this sweep whenever a pass switches off or renames a
clause; done by hand it missed six of seven states (WY retro, 2026-10-01),
so it runs as a guard at every sync.

Usage: python3 scripts/clause-library/check-section-pointers.py [lease-clauses.csv]
"""
import csv
import sys
from collections import defaultdict

path = sys.argv[1] if len(sys.argv) > 1 else "lease-clauses.csv"
rows = list(csv.DictReader(open(path, newline="", encoding="utf-8")))
clauses = [r for r in rows if r["content_type"] == "LEASE_CLAUSE"]
active = [r for r in clauses if r["is_active"] == "TRUE"]
all_titles = {r["title"] for r in clauses}

titles_by_state = defaultdict(set)
for r in active:
    for st in filter(None, r["states"].split(";")):
        titles_by_state[st].add(r["title"])
all_states = sorted(titles_by_state)

longer_prefixes = {t: [u[: -len(t)] for u in all_titles if u.endswith(" " + t)] for t in all_titles}


def points_to(text, title):
    # A pointer to "Handling of Property Left Behind Section" also contains
    # "Property Left Behind Section"; a match only counts where no longer
    # title ending in this one sits at the same spot (RI sync, 2026-10-09).
    if f'"{title}"' in text:
        return True
    prefixes = longer_prefixes[title]
    for p in (f"{title} Section", f"{title} section"):
        start = text.find(p)
        while start >= 0:
            if not any(text[:start].endswith(pre) for pre in prefixes):
                return True
            start = text.find(p, start + 1)
    return False


problems = []
for r in active:
    text = r["bodyText"]
    for title in all_titles:
        if title == r["title"]:
            continue
        if not points_to(text, title):
            continue
        states = [s for s in r["states"].split(";") if s] or all_states
        missing = [s for s in states if title not in titles_by_state[s]]
        if missing:
            problems.append(f"{r['id']}: points to '{title}', which has no active clause in {', '.join(missing)}")

if problems:
    print("Dangling section pointers:")
    for p in problems:
        print("  " + p)
    sys.exit(1)
print(f"ok - {len(active)} active clauses, no dangling section pointers")
