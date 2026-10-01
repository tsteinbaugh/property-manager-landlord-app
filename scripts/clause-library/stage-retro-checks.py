# Stages the targeted [Retro] checks from the SOP's conformance table: one
# folder per finished state with a scoped Claude Desktop prompt and the files
# the chat needs. A check is due wherever the table shows "·" (the "54 e.g."
# rows are examples, not checks, and are skipped).
#
# For each due rule the prompt lists the state's own active lease clauses whose
# text carries the wording that rule screens for, found by a regex over
# bodyText. It is a starting point for the chat, not a verdict: it misses
# clauses and flags some that are fine.
#
# Usage (from the repo root):
#   python3 scripts/clause-library/stage-retro-checks.py [ST ...] [--out DIR]
# Default: every state with a due check, into ~/Desktop/retro-checks/.
import csv, os, re, shutil, sys, collections

args = sys.argv[1:]
out = os.path.expanduser("~/Desktop/retro-checks")
if "--out" in args:
    i = args.index("--out")
    out = args[i + 1]
    del args[i:i + 2]
only = {a.upper() for a in args}

# What each rule asks of a finished state. The SOP holds the full rule; this is
# the scoped question.
ASK = {
    "37": "Tenancy type. Wherever a notice period, damages measure, right or cap in your rows differs for week-to-week, month-to-month, fixed-term or at-will tenancies, the row says so. That includes a cap or limit counted by 'lease year', 'renewal', 'lease period' or 'term' (a periodic tenancy renews every period). Where a statute counts a window from 'the expiration of the rental agreement', say how it works for a periodic tenancy. Check shared clauses whose figures only make sense in a fixed Term. A flat figure that hides an assumption gets fixed.",
    "39": "Eviction duties. Screen the eviction procedure, including court rules read whole, for landlord duties, prohibitions and immunities (post-writ property and animal duties, lockout bans, record sealing). Each one found has a row. Read the courts' public-access rules too (record sealing can live there).",
    "40": "Formatting and placement. Search for 'underlined', 'boldface', 'conspicuous', 'separate document', 'substantially equivalent' and type-size rules, and for omission sanctions that forfeit money. Record every hit in a layout table.",
    "41": "Just cause. If the state has a just-cause or good-cause rule, find any wording in your clauses that says the end of the term ends possession. Record the verdict in a row keyed `for-cause-eviction` (rule 41b).",
    "41b": "A `for-cause-eviction` row. Your state has no row with this topic_key. Add one that records the verdict: the just-cause rule if there is one (if an existing row already states it under another key, such as `eviction-process` or `termination-notice`, write a short `for-cause-eviction` row pointing to it rather than moving it), or a confirmed absence naming any situational for-cause limits (conversion notice year, rent-escrow bars, tenants' association protection).",
    "42": "Required text inside a shared clause. Does a statute force a sentence into a fee, deposit or other clause your state is tagged on?",
    "43": "Cure promises. Does a clause promise a cure period for 'any other' breach, giving away a no-cure termination right the statute provides? A no-cure carve-out should be its own sentence covering every limb (rent and non-rent). If the rent limb ties its cure to 'written notice from Landlord', check whether the state requires any pre-suit notice for nonpayment.",
    "44": "Terms the statute turns into landlord duties. Does 'as agreed in the rental agreement' wording make a generous lease term mandatory (for example extra notice methods)?",
    "45": "Electronic notices. Read the state's electronic-transactions act itself, not only the landlord-tenant section that refers to it, for exclusions (eviction, default, cure notices) and unwaivable conditions (a record the recipient can't print or store), and check whether any clause relies on electronic delivery of those.",
    "46": "The lease as the required notice. Where the statute lets a lease paragraph serve as a notice, offer that clause and reconcile shared clauses that promise a separate notice.",
    "47": "Penalties for knowingly using a prohibited term. If they exist, a 'nothing in this lease limits your rights' sentence doesn't make a void term safe.",
    "48": "Separate-document requirements. No lease clause can supply a notice or agreement the statute requires to be separate.",
    "49": "Collection-cost bans. Read 'costs and expenses' language as well as fee sentences.",
    "50": "'The lease controls' wording. Find every place the statute lets the lease choose ('if the lease so provides', 'unless otherwise agreed in writing') and make each choice on purpose.",
    "51": "Plain-language and consumer-contract statutes. Does one reach residential leases, and what does it require? Include the consumer protection act's list of unfair practices (for example blank spaces filled after signing, or no copy at signing).",
    "52": "Exculpation. Does the state void 'Landlord is not liable' terms? If so, use the variants without the disclaimer (tenants-property-insurance-ks-oh-ca, parking-ks-oh-ca, storage-space-ks-oh-ca, services-utilities-provided-ks-oh).",
    "53": "A figure that contradicts a shared clause. Where the state's number differs from a number in a shared clause, or the clause states only a ceiling or self-limiting wording ('as permitted by law') that could hide a real conflict, fix it with an override. Check when each figure applies (its trigger), not only its size; a floor ('at least 30 days') is not a conflict.",
    "54": "Optional clauses (general screen). Find every optional clause the state's law allows, for the landlord's benefit, and offer each one; record every candidate with its verdict.",
    "54t": "Tenant-caused damage (rule 54). If a tenant, occupant or guest causes damage that makes the home uninhabitable (a fire, frozen pipes), what does this state's law give the landlord: repair costs, rent during repairs, and lost rent if the lease ends? Can the tenant end the lease under a casualty statute anyway? Check each abatement or exit provision separately for its own tenant-fault exception (casualty, essential services, landlord-breach termination, rent into court). Check your casualty rows first. Then: if the law covers it, add or extend an education row saying so; if there's a gap the lease can lawfully fill, offer a state version of `tenant-caused-damage-tn` (read it; don't tag the TN row); if the law bars it, record why.",
    "35c": "Constitution screen (rule 35). Load the state constitution into your full-text search and look for anything that reaches residential leases or protects conduct a shared clause restricts: cannabis use (Missouri's Article XIV voided the shared smoking-policy's ban on vaping marijuana), firearms, signs and speech, privacy. Record what you searched; fix or override any clause the constitution reaches.",
    "27": "The seven topics no state had a row for when the SOP was written (each now has its own entry in lease-clause-topics.md; PA's rows are examples): algorithmic-rent-setting, fees-as-rent, landlord-self-cure, lease-completeness, quiet-possession, statutory-forms, tenant-security-cameras. Each ends Present (with a row), Confirmed absent (with a row) or Not located (search boundary stated).",
}
# Wording in a clause's bodyText worth a look for that rule.
LOOK = {
    "41": r"end of the term|expiration of (the )?(term|Lease)|Lease (ends|expires)|at the end of th(is|e) Lease",
    "43": r"\bcure\b|within \d+ days after (written )?notice|fails to (correct|remedy)",
    "44": r"any other (method|means)|may also be (given|delivered|served)|or by (e-?mail|text)",
    "45": r"notice[^.]*(electronic|e-?mail|text message)|(electronic|e-?mail|text message)[^.]*notice",
    "46": r"will (give|provide|send|serve) (Tenant )?(a )?(separate |written )?notice",
    "47": r"Nothing in this (Lease|Section)|does not waive|except as (prohibited|limited) by law",
    "49": r"collection|costs and expenses|attorney",
    "52": r"not (be )?(liable|responsible)|releases? Landlord|hold(s)? Landlord harmless|indemnif",
    "53": r"maximum (amount )?permitted|as permitted by (applicable )?law|allowed by law|to the extent (permitted|allowed)|\bnot (to )?exceed",
}

sop = open("lease-clause-sop.md", encoding="utf-8").read()
version = re.search(r"\*\*Version ([\d.]+)", sop).group(1)
lines = sop.split("\n")
start = next((i for i, l in enumerate(lines) if l.startswith("| Rule |")), None)
if start is None:
    sys.exit("conformance table not found")
table = []
for l in lines[start:]:
    if not l.startswith("|"):
        break
    table.append(l)
hdr = [c.strip() for c in table[0].split("|")[1:-1]]
due = collections.defaultdict(list)
for line in table[2:]:
    cells = [c.strip() for c in line.split("|")[1:-1]]
    if len(cells) != len(hdr) or cells[0].startswith("54 e.g."):
        continue
    rule = cells[0].split()[0]
    for st, mark in zip(hdr[1:], cells[1:]):
        if mark == "·":
            due[st].append(rule)
unknown = {r for rs in due.values() for r in rs} - set(ASK)
if unknown:
    sys.exit(f"conformance table has rules with no prompt text: {sorted(unknown)}")

# Targeted items outside the conformance table (for example a row a later
# scrub rewrote), one per line in retro-extras.csv; remove a line once synced.
extras = collections.defaultdict(list)
for e in csv.DictReader(open("scripts/clause-library/retro-extras.csv", newline="", encoding="utf-8")):
    extras[e["state"]].append(e["item"])

rows = list(csv.DictReader(open("lease-clauses.csv", newline="", encoding="utf-8")))
import datetime
staged_at = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
clauses = [r for r in rows if r["is_active"] == "TRUE" and r["content_type"] == "LEASE_CLAUSE"]

def pointers(st, rule):
    if rule not in LOOK:
        return ""
    hits = []
    for r in clauses:
        sts = [s for s in r["states"].split(";") if s]
        if st in sts and re.search(LOOK[rule], r["bodyText"], re.I):
            hits.append(f"`{r['id']}`" + (" (shared)" if len(sts) > 1 else ""))
    return (" Start with: " + ", ".join(hits) + ".") if hits else " No clause matched the wording screen; check anyway."

states = [s for s in hdr[1:] if (due[s] or extras[s]) and (not only or s in only)]
os.makedirs(out, exist_ok=True)
index = []
for st in states:
    d = os.path.join(out, st)
    os.makedirs(d, exist_ok=True)
    files = ["lease-clause-sop.md", "lease-clause-topics.md", "lease-clauses.csv",
             f"lease-clause-decision-log-{st}.md", f"lease-clause-citations-{st}.csv"]
    for f in files:
        shutil.copy(f, d)
    checks = "\n".join(f"{n}. **Rule {r}.** {ASK[r]}{pointers(st, r)}" for n, r in enumerate(due[st], 1))
    if extras[st]:
        checks += "\n\n**Targeted fixes (not tied to one rule):**\n" + "\n".join(
            f"{n}. {item}" for n, item in enumerate(extras[st], len(due[st]) + 1))
    prompt = f"""# Targeted retro checks: {st} (SOP {version})

**Staged {staged_at}; the attached `lease-clauses.csv` has {len(rows):,} rows.** Check that row count first. If it differs, stop and tell Taylor: these files were restaged after he uploaded them, and he should upload this folder's files again.

This is a circle-back in {st}'s existing chat (SOP rule 8). Delete any old output files first and say what you deleted. The files attached now are the only source of truth; say so wherever something earlier in this chat conflicts with them.

The SOP has [Retro] rules that were written after {st} was finished. Check {st} against **these {len(due[st])} rules only**{f" and the {len(extras[st])} targeted fix" + ("es" if len(extras[st]) > 1 else "") + " listed after them" if extras[st] else ""}. This is a scalpel, not a re-audit (rule 1): don't reopen anything else. Settings as usual: Opus, high effort, research mode only for the rule 9 triggers.

## Attached
- `lease-clause-sop.md` (version {version}): the full text of each rule below.
- `lease-clauses.csv`: the current library. `lease-clause-decision-log-{st}.md` and `lease-clause-citations-{st}.csv`: {st}'s record.
- `lease-clause-topics.md`: the topic reference (rule 27).

## The checks
For each one, **first look in {st}'s log**: if it already records this screen under another name, cite the section and mark it done. Otherwise run it with the statute open (rules 11, 12, 15). The clause lists come from a wording screen of {st}'s clauses; they're a starting point, not a verdict.

{checks}

## Fixing what you find
- **Your state's own rows:** edit, add or switch off as the rule requires, with the usual `notes`, `verification_status` and `last_checked`.
- **A shared row that fails in {st}:** don't change its text. Remove {st} from its `states` and tag an existing variant, or write a {st} row that supersedes it. On any shared row, change only the {st} tag, your own `{st}:` note segment and `last_checked`. If you think a shared text edit would be right for every tagged state, propose it in your section instead of making it (rule 62).
- **Unsure about a legal call?** Ask Taylor in the chat right then, with a recommendation (rule 76).

## Deliver
1. `lease-clauses-{st}-retro-delta.csv`: only new or changed rows, all 17 columns, same header and line endings (CRLF) as the master. If nothing changed, say so and skip the file.
2. `lease-clause-decision-log-{st}-retro.md`: **one new section only**, which Claude Code appends to {st}'s log. Title it "Retro checks (SOP {version})". One line per rule: the rule, the verdict (already covered in §X / checked, no issue / fixed), what was read and the rows changed. Then "Proposed SOP changes" (or "None").

Your part is done when both are delivered and checked. Claude Code does the sync.
"""
    open(os.path.join(d, "PROMPT.md"), "w", encoding="utf-8").write(prompt)
    index.append(f"| {st} | {len(due[st]) + len(extras[st])} | {', '.join(due[st] + ['fix'] * len(extras[st]))} |")

open(os.path.join(out, "INDEX.md"), "w", encoding="utf-8").write(
    f"# Retro checks (SOP {version})\n\nOne folder per state. In that state's existing Claude Desktop chat, upload the folder's files and paste `PROMPT.md`. Drop the two outputs back in the folder.\n\n| State | Checks | Rules |\n|---|---|---|\n" + "\n".join(index) + "\n")
print(f"ok - staged {len(states)} states, {sum(len(due[s]) for s in states)} checks, in {out}")
