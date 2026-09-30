# Rebuilds lease-clause-scrub-verdicts.md from verdicts1-3.py (the 2026-09-29
# three-bucket scrub). Run from the repo root after applying a state: add it to
# APPLIED below, then run: python3 scripts/clause-library/scrub/make_verdicts_md.py
import csv,sys,collections
sys.path.insert(0,'scripts/clause-library/scrub')
V={}
for m in ['verdicts1','verdicts2','verdicts3']: V.update(__import__(m).V)
rows=[r for r in csv.DictReader(open('lease-clauses.csv',newline='',encoding='utf-8')) if r['id'] in V]
APPLIED={'CO':'2026-09-29','WY':'2026-09-29','KS':'2026-09-29','NE':'2026-09-29'}
order="CO WY KS NE MN ND SD OH CA NV TX NJ FL AZ GA NC SC TN VA AL PA".split()
NAME={'KEEP':'Keep','EDU':'Education','SPLIT':'Split','P3':'Optional + education','P2':'Notice-period rewrite','FLAG':'Needs Taylor'}
c=collections.Counter(v[0] for v in V.values())
out=["# Three-bucket scrub — verdicts (2026-09-29)","",
"Checklist instruction 66 applied to every active lease clause (513): does it belong in the lease at all? Classification only, from each row's own text, notes and log. No new legal research, so not a re-audit. **Verdicts are recorded here and in `lease-clauses.csv`'s `lease_clause_basis` column; the row changes are applied state by state in later commits.**","",
"## How to read this","",
"- **Keep:** passes; the basis is recorded.",
"- **Education:** moves to a landlord education row. The lease clause is switched off (`is_active: FALSE`), not deleted, so a future \"comprehensive lease\" option could restore it.",
"- **Split:** the part that belongs stays in the clause; the restated law moves to education.",
"- **Optional + education** (Taylor's pattern 3): a disclosure owed before signing or on request. The clause becomes optional, paired with an education row explaining it can go in the lease or be given on request. Where a statute requires it in the lease, the clause is REQUIRED instead.",
"- **Notice-period rewrite** (pattern 2): the statute sets a notice floor, so the clause states the landlord's chosen period and the builder checks it (Addendum M.13).",
"- **Needs Taylor:** a decision only Taylor can make.","",
"**Rule for restatements (Taylor, 2026-09-29):** restating a tenant duty or a landlord right serves the landlord and stays; restating a tenant right or a landlord duty is education unless a statute requires it in the lease or it carries a lease choice. Pattern 1: tenant-right restatements go to education only.","",
"**Basis values:** `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`, or `PENDING_SCRUB: …` until a row's change is applied. `check-clause-basis.py` enforces them.","",
"**Not applied yet:** cap removals depend on builder limit checks (Addendum M.13), which are on the pre-launch builder list.","",
"The 67 multi-state rows all stay (generic contract terms; `lead-based-paint` is `REQUIRED_DISCLOSURE: 40 CFR 745.113`).","",
"**Totals (446 single-state rows):** "+", ".join(f"{NAME[k]} {c[k]}" for k in ['KEEP','EDU','SPLIT','P3','P2','FLAG'])+".",""]
for s in order:
    rs=[r for r in rows if r['states']==s]
    out+= [f"## {s}","",(f"**Applied {APPLIED[s]}.**" if s in APPLIED else "**Not applied yet.**"),"","| Row | Verdict | Basis | Note |","|---|---|---|---|"]
    for r in sorted(rs,key=lambda r:['FLAG','EDU','SPLIT','P2','P3','KEEP'].index(V[r['id']][0])):
        v,b,n=V[r['id']]
        out.append(f"| `{r['id']}` | {NAME[v]} | {b or '—'} | {n} |")
    out.append("")
open('lease-clause-scrub-verdicts.md','w',encoding='utf-8').write('\n'.join(out))
print(c)
