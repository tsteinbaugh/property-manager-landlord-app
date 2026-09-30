# Stages a Claude Desktop kickoff folder for a new state: copies the files the
# chat needs and fills docs/kickoff-template.md with the current counts and any
# rows the library already has for the state. Citation format and leads are
# left as placeholders for Claude Code to fill in by hand before handing the
# folder to Taylor.
#
# Usage (from the repo root):
#   python3 scripts/clause-library/stage-kickoff.py NY "New York" [outdir]
# Default outdir: ~/Desktop/<state-name>-kickoff/
import csv, os, re, shutil, sys, collections

if len(sys.argv) < 3:
    sys.exit(__doc__ or "usage: stage-kickoff.py ST 'State Name' [outdir]")
st, name = sys.argv[1].upper(), sys.argv[2]
out = sys.argv[3] if len(sys.argv) > 3 else os.path.expanduser(f"~/Desktop/{name.lower().replace(' ', '-')}-kickoff")

rows = list(csv.DictReader(open("lease-clauses.csv", newline="", encoding="utf-8")))
states_of = lambda r: [s.strip() for s in re.split("[;,]", r["states"]) if s.strip()]
active = [r for r in rows if r["is_active"] == "TRUE"]
per_state = collections.Counter(s for r in active for s in states_of(r))

# Finished states, in the order they were added (the legal-watch SCHEDULE_ORDER);
# the two newest supply the reference logs.
cfg = open("scripts/legal-watch/stateConfig.js", encoding="utf-8").read()
done = re.findall(r'"([A-Z]{2})"', re.search(r"SCHEDULE_ORDER = \[(.*?)\]", cfg, re.S).group(1))
if st in done:
    sys.exit(f"{st} already has a decision log; this is for new states")
ref2, ref1 = done[-2], done[-1]

existing = [r for r in rows if st in states_of(r)]
if existing:
    ex = "\n".join(
        f"- `{r['id']}` ({'active' if r['is_active'] == 'TRUE' else 'dormant'}, {r['content_type']}, "
        f"{r['verification_status'] or 'no status'}): {r['title']}" for r in existing)
    ex = ("These rows came from an early nationwide pass and were never verified. Treat each as a lead, "
          "not a draft: verify it, rewrite it or leave it switched off, and say which in the log.\n" + ex)
else:
    ex = "None."

# Variable names the builder fills in (SOP rule 60), read from the resolver so
# the list can't drift. A name used by some other row but missing here prints raw.
resolver = open("backend/src/lib/clauseVariables.js", encoding="utf-8").read()
variables = ", ".join(f"`{{{{{v}}}}}`" for v in sorted(set(re.findall(r"^\s{4}([a-z_]+): ", resolver, re.M))))

counts = "\n".join(f"- {s}: {per_state[s]}" for s in sorted(per_state))
fill = {
    "STATE_NAME": name, "ST": st, "STATE_NUMBER": str(len(done) + 1),
    "REF1": ref1, "REF2": ref2,
    "ROW_COUNT": f"{len(rows):,}", "ACTIVE_COUNT": f"{len(active):,}",
    "CLAUSE_COUNT": f"{sum(r['content_type'] == 'LEASE_CLAUSE' for r in active):,}",
    "EDU_COUNT": f"{sum(r['content_type'] == 'LANDLORD_EDUCATION' for r in active):,}",
    "STATE_COUNTS": counts, "VARIABLES": variables, "EXISTING_ROWS": ex,
    "CITATION_FORMAT": "[FILL IN: how this state's code is cited, e.g. the code names and section format]",
    "LEADS": "[FILL IN: state-specific research questions, or 'None']",
}
text = open("docs/kickoff-template.md", encoding="utf-8").read()
for k, v in fill.items():
    text = text.replace("{" + k + "}", v)
left = re.findall(r"\{[A-Z_0-9]+\}", text)
if left:
    sys.exit(f"unfilled placeholders: {left}")

os.makedirs(out, exist_ok=True)
for f in ["lease-clause-sop.md", "lease-clause-topics.md", "lease-clauses.csv",
          f"lease-clause-decision-log-{ref1}.md", f"lease-clause-decision-log-{ref2}.md"]:
    shutil.copy(f, out)
open(os.path.join(out, "KICKOFF-PROMPT.md"), "w", encoding="utf-8").write(text)
print(f"ok - staged {out} (state #{fill['STATE_NUMBER']}, {len(existing)} existing rows). "
      "Fill in the citation format and leads in KICKOFF-PROMPT.md before handing it over.")
