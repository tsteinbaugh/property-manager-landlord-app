# Stages a Claude Desktop topic-gaps folder for an already-researched state
# (end-of-run consistency pass, Taylor 2026-10-24): the topics the state has no
# row for, with their questions and example rows, plus the files the chat
# needs. The citation format and the state's own items are left as
# placeholders for Claude Code to fill in by hand before handing it to Taylor.
#
# Usage (from the repo root):
#   python3 scripts/clause-library/stage-gaps.py CO "Colorado" [outdir]
# Default outdir: ~/Desktop/<state-name>-topic-gaps/
import csv, os, re, shutil, sys, collections, datetime

if len(sys.argv) < 3:
    sys.exit("usage: stage-gaps.py ST 'State Name' [outdir]")
st, name = sys.argv[1].upper(), sys.argv[2]
out = sys.argv[3] if len(sys.argv) > 3 else os.path.expanduser(f"~/Desktop/{name.lower().replace(' ', '-')}-topic-gaps")
if os.path.exists(out):
    sys.exit(f"{out} exists; never restage a folder Taylor may be using")

rows = list(csv.DictReader(open("lease-clauses.csv", newline="", encoding="utf-8")))
states_of = lambda r: [s.strip() for s in re.split("[;,]", r["states"]) if s.strip()]
active = [r for r in rows if r["is_active"] == "TRUE"]
topics = sorted({r["topic_key"] for r in active if r["topic_key"]})
have = {r["topic_key"] for r in active if st in states_of(r)}
missing = [t for t in topics if t not in have]
if not have:
    sys.exit(f"{st} has no rows; this is for states already researched")

# Example rows per topic: newest states first (SCHEDULE_ORDER, then the territories).
cfg = open("scripts/legal-watch/stateConfig.js", encoding="utf-8").read()
order = re.findall(r'"([A-Z]{2})"', re.search(r"SCHEDULE_ORDER = \[(.*?)\]", cfg, re.S).group(1))
rank = {s: i for i, s in enumerate(order + ["PR", "GU", "VI", "AS", "MP"])}
by_topic = collections.defaultdict(list)
for r in active:
    by_topic[r["topic_key"]].append(r)

# Topic sections from the generated reference (heading, coverage line, questions).
ref = open("lease-clause-topics.md", encoding="utf-8").read()
sections = {}
for m in re.finditer(r"^### [^\n]*\(`([^`]+)`\)\n(.*?)(?=^### |^## |\Z)", ref, re.S | re.M):
    sections[m.group(1)] = m.group(0).strip()

lines = [f"# Missing topics: {name} ({len(missing)})", "",
         f"Topics with no {st} row in the attached `lease-clauses.csv`, as of the staging time in the prompt. "
         "Each lists the questions earlier states found worth checking, then up to four example rows from the "
         "newest states that cover it. The examples show the shape of an answer; they say nothing about "
         f"{name}'s law.", ""]
for t in missing:
    lines.append(sections.get(t, f"### {t} (`{t}`)"))
    ex = sorted(by_topic[t], key=lambda r: -max([rank.get(s, -1) for s in states_of(r)] or [-1]))[:4]
    lines.append("Examples: " + "; ".join(f"`{r['id']}` ({r['content_type']}, {','.join(states_of(r)[-3:])})" for r in ex))
    lines.append("")

fill = {
    "STATE_NAME": name, "ST": st,
    "STAGED_AT": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
    "ROW_COUNT": f"{len(rows):,}", "ACTIVE_COUNT": f"{len(active):,}",
    "ST_ACTIVE": str(sum(st in states_of(r) for r in active)),
    "TOPIC_COUNT": str(len(topics)), "HAVE_COUNT": str(len(have)), "MISSING_COUNT": str(len(missing)),
    "CORPUS_LINE": f"`corpus-{st}-*.tar.xz`, when present: official text Claude Code downloaded; its `README.txt` says what it holds and how to verify it. If your own tools reach the official site, the corpus is an optional cross-check; otherwise use it.",
    "CITATION_FORMAT": "[FILL IN]",
    "STATE_ITEMS": "[FILL IN: the state's open items, or 'None']",
}
text = open("docs/gaps-template.md", encoding="utf-8").read()
for k, v in fill.items():
    text = text.replace("{" + k + "}", v)
left = re.findall(r"\{[A-Z_0-9]+\}", text)
if left:
    sys.exit(f"unfilled placeholders: {left}")

os.makedirs(out)
for f in ["lease-clause-sop.md", "lease-clause-topics.md", "lease-clauses.csv"]:
    shutil.copy(f, out)
open(os.path.join(out, f"missing-topics-{st}.md"), "w", encoding="utf-8").write("\n".join(lines) + "\n")
open(os.path.join(out, "GAPS-PROMPT.md"), "w", encoding="utf-8").write(text)
print(f"ok - staged {out}: {len(missing)} missing topics, {len(have)} covered. "
      "Fill in the citation format and state items in GAPS-PROMPT.md before handing it over.")
