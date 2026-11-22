# Fails if an active row's title names a jurisdiction or says "Optional" in
# parentheses, e.g. "Late Fee (Guam)" or "Pet Agreement (Optional)". The app
# shows a clause's jurisdictions as tags and will show its required /
# recommended / optional status as a tag, so the title doesn't repeat them
# (Taylor, 2026-11-21). With --fix, rewrites those titles in place (byte-exact
# round trip; the CSV keeps its CRLF line endings).
#
# Usage (from the repo root):
#   python3 scripts/clause-library/check-clause-titles.py [--fix] [lease-clauses.csv]
import csv, io, re, sys

args = [a for a in sys.argv[1:] if a != "--fix"]
fix = "--fix" in sys.argv[1:]
path = args[0] if args else "lease-clause-library/lease-clauses.csv"

NAMES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "District of Columbia",
    "American Samoa", "Guam", "Northern Mariana Islands", "Puerto Rico", "Virgin Islands",
    "U.S. Virgin Islands",
]
WHOLE = re.compile(r"\s*\((?:Optional|" + "|".join(re.escape(n) for n in NAMES) + r")\)")
TRAILING_OPTIONAL = re.compile(r", Optional\)")


def clean(title):
    return TRAILING_OPTIONAL.sub(")", WHOLE.sub("", title)).strip() or title


raw = open(path, "rb").read()
rows = list(csv.reader(io.StringIO(raw.decode("utf-8"), newline="")))


def dump(x):
    o = io.StringIO()
    csv.writer(o, lineterminator="\r\n").writerows(x)
    return o.getvalue().encode("utf-8")


if dump(rows) != raw:
    sys.exit(f"FAIL - {path} does not round-trip byte-exactly; stop")
H = {h: i for i, h in enumerate(rows[0])}
bad = [r for r in rows[1:] if r[H["is_active"]].strip().upper() == "TRUE" and clean(r[H["title"]]) != r[H["title"]]]
if fix:
    for r in bad:
        r[H["title"]] = clean(r[H["title"]])
    open(path, "wb").write(dump(rows))
    print(f"ok - cleaned {len(bad)} titles")
    sys.exit(0)
if bad:
    print(f"FAIL {len(bad)} titles name a jurisdiction or say Optional (run with --fix):")
    for r in bad[:20]:
        print(f"  {r[0]}: {r[H['title']]}")
    sys.exit(1)
print("ok - no title names a jurisdiction or says Optional")
