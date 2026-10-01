# Merges a state's delta CSV (from a Claude Desktop pass) into lease-clauses.csv,
# field by field, against the library version the pass started from.
#
# Why: a Desktop pass can start from an older library than the one Claude Code
# holds at sync (other states' merges land in between). Replacing whole rows
# would silently undo those merges on shared rows. So, for each delta row:
#   - a new id is appended;
#   - a row tagged only to this state is replaced whole, but only if the
#     current library still matches the base (otherwise it's a conflict);
#   - a shared row may change only this state's tag in `states`, this state's
#     own "XX:" segment(s) in `notes`, and `last_checked`. Those changes are
#     applied on top of the current row, so other states' work is kept.
# Anything else (a shared bodyText edit, a changed other-state segment, a
# conflict) is refused and listed; Claude Code handles it by hand (SOP rule 62).
#
# Usage (from the repo root):
#   python3 scripts/clause-library/merge-delta.py DELTA.csv ST --base <git-rev>
#   (add --dry-run to report without writing)
# The base is the commit whose lease-clauses.csv the pass was given (match the
# row count the pass reports against `git log`).
import csv, io, re, subprocess, sys

args = sys.argv[1:]
dry = "--dry-run" in args
if dry:
    args.remove("--dry-run")
if len(args) != 4 or args[2] != "--base":
    sys.exit("usage: merge-delta.py DELTA.csv ST --base <git-rev> [--dry-run]")
delta_path, st, _, base_rev = args
st = st.upper()
MASTER = "lease-clauses.csv"


def read(data):
    return list(csv.reader(io.StringIO(data.decode("utf-8"), newline="")))


def write(rows):
    out = io.StringIO(newline="")
    csv.writer(out, lineterminator="\r\n").writerows(rows)
    return out.getvalue().encode("utf-8")


master_bytes = open(MASTER, "rb").read()
master = read(master_bytes)
if write(master) != master_bytes:
    sys.exit("FAIL - lease-clauses.csv does not round-trip byte-exactly; stop")
base = read(subprocess.run(["git", "show", f"{base_rev}:{MASTER}"], capture_output=True, check=True).stdout)
delta_bytes = open(delta_path, "rb").read()
delta = read(delta_bytes)
header = master[0]
if delta[0] != header or base[0] != header:
    sys.exit("FAIL - header differs from the master's")
if b"\r\n" not in delta_bytes:
    print("note: delta has no CRLF line endings (the master is CRLF); fields are merged, so this is harmless")
H = {h: i for i, h in enumerate(header)}
B = {r[0]: r for r in base[1:]}
M = {r[0]: r for r in master[1:]}
D = {}
for r in delta[1:]:
    if r[0] in D:
        sys.exit(f"FAIL - duplicate id in delta: {r[0]}")
    D[r[0]] = r


def states(r):
    return [s for s in r[H["states"]].split(";") if s]


def segments(notes):
    return notes.split(" | ") if notes else []


def is_own(seg):
    # "XX:", "XX (retro …):", "XX —" all mark this state's segment.
    return re.match(rf"{st}\b(?![.-])", seg) is not None


problems, report, updates, new_rows = [], [], {}, []
for i, d in D.items():
    if i not in B:
        if i in M:
            problems.append(f"{i}: not in the base but already in the master")
        elif states(d) != [st]:
            problems.append(f"{i}: new row not tagged {st} only ({d[H['states']]})")
        else:
            new_rows.append(d)
            report.append(f"NEW    {i}")
        continue
    if i not in M:
        problems.append(f"{i}: in the base but missing from the master")
        continue
    b, m = B[i], M[i]
    changed = [h for h in header if b[H[h]] != d[H[h]]]
    shared = len(states(b)) > 1 or len(states(d)) > 1 or states(b) != [st]
    if not shared:
        if m != b:
            problems.append(f"{i}: {st}-only row changed in the master since the base; merge by hand")
        else:
            updates[i] = d
            report.append(f"OWN    {i}: {', '.join(changed) or 'no change'}")
        continue
    bad = [h for h in changed if h not in ("states", "notes", "last_checked")]
    if bad:
        problems.append(f"{i}: shared row with {', '.join(bad)} changed; needs rule-62 review")
        continue
    added = [s for s in states(d) if s not in states(b)]
    removed = [s for s in states(b) if s not in states(d)]
    if any(s != st for s in added + removed):
        problems.append(f"{i}: changes other states' tags ({added} / {removed})")
        continue
    other_b = [s for s in segments(b[H["notes"]]) if not is_own(s)]
    other_d = [s for s in segments(d[H["notes"]]) if not is_own(s)]
    if other_b != other_d:
        problems.append(f"{i}: changes a note segment that isn't {st}'s; merge by hand")
        continue
    new = list(m)
    cur = states(m)
    if st in added and st not in cur:
        cur.append(st)
    if st in removed and st in cur:
        cur.remove(st)
    new[H["states"]] = ";".join(cur)
    own_d = [s for s in segments(d[H["notes"]]) if is_own(s)]
    new[H["notes"]] = " | ".join([s for s in segments(m[H["notes"]]) if not is_own(s)] + own_d)
    if "last_checked" in changed:
        new[H["last_checked"]] = d[H["last_checked"]]
    updates[i] = new
    report.append(f"SHARED {i}: {'+' + st if added else ''}{'-' + st if removed else ''} notes {'changed' if 'notes' in changed else 'same'}{' (master moved since base; merged onto current)' if m != b else ''}")

for line in report:
    print(line)
if problems:
    print(f"\nFAIL - {len(problems)} row(s) need a hand merge; nothing written:")
    for p in problems:
        print("  " + p)
    sys.exit(1)
out = [header] + [updates.get(r[0], r) for r in master[1:]] + new_rows
if dry:
    print(f"\nok (dry run) - would write {len(out) - 1} rows")
else:
    open(MASTER, "wb").write(write(out))
    print(f"\nok - wrote {len(out) - 1} rows ({len(new_rows)} new, {len(updates)} updated)")
