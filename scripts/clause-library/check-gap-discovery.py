# Fails unless a state's decision log shows all four gap-discovery sources
# done (checklist instruction 36). Run it on every state log before calling a
# state sync done; it is item 1 of the sync completion list in CLAUDE.md.
#
# Usage (from the repo root):
#   python3 scripts/clause-library/check-gap-discovery.py lease-clause-decision-log-AZ.md [more logs...]
#   python3 scripts/clause-library/check-gap-discovery.py --all
#
# What it looks for: a markdown table row per source, e.g.
#   | Gap-discovery source 2 — real-lease comparison | Done (§16) | ...
# The row must name "gap-discovery source N", say "Done", and cite a log
# section (§...). "Not applicable", "partial" or "not started" fail.
# Added 2026-09-27 after an audit found the real-lease comparison and the
# scenario screen had silently dropped out of 12 states' passes.
import glob, re, sys

SOURCES = {
    1: "statute walk",
    2: "real-lease comparison",
    3: "landlord-scenario screen",
    4: "outside-title search",
}
BAD = re.compile(r"not applicable|n/a|partial|not started|not done|pending|skipped", re.I)


def check(path):
    rows = [l for l in open(path, encoding="utf-8") if l.lstrip().startswith("|")]
    problems = []
    for n, name in SOURCES.items():
        hits = [r for r in rows if re.search(rf"gap-discovery source\s*#?{n}\b", r, re.I)]
        # Judge the status cell only up to its first "(": the parenthetical
        # describes the work and may use words like "partial" innocently
        # ("a partial second lead"), which must not fail the row.
        def status(r):
            cells = [c.strip() for c in r.strip().strip("|").split("|")]
            return cells[1].split("(")[0] if len(cells) > 1 else ""
        ok = [r for r in hits if re.search(r"\bdone\b", status(r), re.I) and "§" in r and not BAD.search(status(r))]
        if not ok:
            problems.append(f"source {n} ({name}): " + ("no table row" if not hits else "row not marked Done with a § reference"))
    return problems


paths = sorted(glob.glob("lease-clause-decision-log-[A-Z][A-Z].md")) if sys.argv[1:] == ["--all"] else sys.argv[1:]
if not paths:
    sys.exit(__doc__ or "usage: check-gap-discovery.py <log>... | --all")
failed = 0
for p in paths:
    probs = check(p)
    if probs:
        failed += 1
        print(f"FAIL {p}")
        for x in probs:
            print(f"     {x}")
    else:
        print(f"ok   {p}")
sys.exit(1 if failed else 0)
