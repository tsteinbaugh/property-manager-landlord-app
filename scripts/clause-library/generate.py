# Compiles lease-clauses.csv into the shipped backend data: clauseTemplates.js,
# clauseResearchMetadata.js, clauseGuidance.js (each clause's "Use when" line and
# linked education, with clause-guidance.csv) and education/<ST>.json
# (shared.json holds rows tagged in more than one place).
# Committed 2026-09-26 after being lost twice with old scratchpads.
#
# Usage (from the repo root):
#   python3 scripts/clause-library/generate.py lease-clause-library/lease-clauses.csv backend/src/lib backend/src/lib
# Args: <csv> <output dir> <dir holding the current files, whose header comments are kept>.
# Each file's header comment (everything before the data) is carried over
# unchanged; add a dated refresh note to the headers by hand after a state sync.
# Proof it's faithful: run it into a temp dir against an unchanged CSV and cmp.
#
# Filters: is_active == TRUE, split by content_type. Research-only group names
# are remapped to the closed CLAUSE_GROUPS taxonomy (REMAP below) for lease
# clauses only; education rows keep the CSV's group as-is.
import csv,json,sys,re
csvp,outdir,libdir=sys.argv[1],sys.argv[2],sys.argv[3]
GROUPS=["Rent & Payment","Security Deposit","Tenant Responsibilities","Landlord Responsibilities","Access & Entry","Default & Termination","Notices & General","Pets","Parking & Storage","Rules & Regulations","Disclosures","Other / Miscellaneous"]
REMAP={"Compliance & Prohibited Terms":"Notices & General","Insurance & Liability":"Notices & General","Parking":"Parking & Storage","Storage":"Parking & Storage","Rent & Fees":"Rent & Payment"}
rows=list(csv.DictReader(open(csvp,newline='',encoding='utf-8')))
# A row with the wrong field count means a value slid into the wrong column
# (DictReader would silently drop the overflow); refuse to generate.
_bad=[r['id'] for r in rows if None in r or None in r.values()]
if _bad: sys.exit(f"Malformed rows (wrong field count): {', '.join(_bad)}")
def q(s): return json.dumps(s,ensure_ascii=False)
def states(r): return [s.strip() for s in re.split(r'[;,]',r['states']) if s.strip()]
def rt(r): return [x.strip() for x in re.split(r'[/;]',r['rule_type']) if x.strip()]
def arr(a): return "["+", ".join(q(x) for x in a)+"]"
# The tag a landlord sees on a provided clause, derived from rule_type (Taylor,
# 2026-11-21 and 2026-11-22; SOP rule 56):
#   REQUIRED     the law requires this text in the lease itself
#   LEGAL_DUTY   the law requires the landlord to give the tenant this
#                information, and this clause is one way to do it
#   RECOMMENDED  no law requires it, but it protects the landlord
#   OPTIONAL     a term the landlord may choose, within the law's limits
# A clause that applies only in some situations (CONDITIONAL) carries the tag
# it has when it applies (CONDITIONAL/RECOMMENDED and so on). Pure PROHIBITED
# rows are ordinary prohibited-acts terms.
def tag(r):
    t=set(rt(r))
    for k in ('REQUIRED','LEGAL_DUTY','RECOMMENDED'):
        if k in t: return k
    if t=={'PROHIBITED'}: return 'RECOMMENDED'
    if 'CONSTRAINED' in t: return 'OPTIONAL'
    return None
act=[r for r in rows if r['is_active']=='TRUE']
lc=[r for r in act if r['content_type']=='LEASE_CLAUSE']
# Topics kept in the CSV as a research record but never shown to the landlord
# (Taylor, 2026-11-27: the scope rows confused more than they helped).
BACKEND_ONLY_TOPICS={"scope"}
# Except these, about particular rental situations a landlord may be in
# (Taylor, 2026-11-27: "good info for a landlord to know, add them all back").
SHOWN_ANYWAY={"edu-shared-facility-rentals-nh","edu-rooming-houses-me","edu-recovery-residences-me","edu-farm-employee-housing-vt","edu-recovery-residences-vt"}
ed=[r for r in act if r['content_type']=='LANDLORD_EDUCATION' and (r['topic_key'] not in BACKEND_ONLY_TOPICS or r['id'] in SHOWN_ANYWAY)]
_H={}
for _f,_m in [("clauseTemplates.js","const CLAUSE_TEMPLATES = ["),("clauseResearchMetadata.js","const CLAUSE_RESEARCH_METADATA = {")]:
    _t=open(f"{libdir}/{_f}",encoding='utf-8').read(); _H[_f]=_t[:_t.index(_m)]
def header(f,marker): return _H[f]
# templates
out=[];prev=None
for r in lc:
    g=REMAP.get(r['group'],r['group']); assert g in GROUPS,(r['id'],g)
    if g!=prev: out.append(f"  // {g}"); prev=g
    e=["  {",f"    id: {q(r['id'])},",f"    title: {q(r['title'])},",f"    group: {q(g)},",f"    states: {arr(states(r))},"]
    if tag(r): e.append(f"    tag: {q(tag(r))},")
    # Always required (not conditional, not one of pick-one alternatives, and
    # verified for at least one state): the
    # app always includes it by default, and the landlord can't untick it.
    always=tag(r) in ('REQUIRED','LEGAL_DUTY') and 'CONDITIONAL' not in rt(r) and not r['choice_group'] and states(r)
    if always and tag(r)=='REQUIRED':
        e.append("    alwaysDefault: true,")
    # A legal duty that always applies: included by default, but the landlord
    # may untick it if they give the tenant this information another way.
    if always and tag(r)=='LEGAL_DUTY':
        e.append("    defaultOn: true,")
    if r['supersedes']: e.append(f"    supersedes: {q(r['supersedes'])},")
    if r['choice_group']:
        e.append(f"    choiceGroup: {q(r['choice_group'])},"); e.append(f"    choiceGroupDefault: {'true' if r['is_default']=='TRUE' else 'false'},")
    e+=["    bodyText:",f"      {q(r['bodyText'])},","  },"]; out+=e
open(f"{outdir}/clauseTemplates.js","w",encoding='utf-8').write(header("clauseTemplates.js","const CLAUSE_TEMPLATES = [")+"const CLAUSE_TEMPLATES = [\n"+"\n".join(out)+"\n];\n\nmodule.exports = { CLAUSE_TEMPLATES };\n")
out=[]
for r in lc:
    out+=[f"  {q(r['id'])}: {{",f"    ruleTypes: {arr(rt(r))},",'    contentType: "LEASE_CLAUSE",',f"    verificationStatus: {q(r['verification_status'])},",f"    effectiveFrom: {q(r['effective_from'])},",f"    lastChecked: {q(r['last_checked'])},",f"    topicKey: {q(r['topic_key'])},",f"    notes: {q(r['notes'])},","  },"]
open(f"{outdir}/clauseResearchMetadata.js","w",encoding='utf-8').write(header("clauseResearchMetadata.js","const CLAUSE_RESEARCH_METADATA = {")+"const CLAUSE_RESEARCH_METADATA = {\n"+"\n".join(out)+"\n};\n\nmodule.exports = { CLAUSE_RESEARCH_METADATA };\n")
# Landlord education, one JSON file per place, so the app loads only the
# lease's own state. The research notes stay in the CSV.
import os
edir=f"{outdir}/education"; os.makedirs(edir,exist_ok=True)
files={}
for r in ed:
    st=states(r)
    files.setdefault(st[0] if len(st)==1 else "shared",[]).append({"id":r['id'],"title":r['title'],"group":r['group'],"topicKey":r['topic_key'],**({"states":st} if len(st)!=1 else {}),"bodyText":r['bodyText']})
for f in os.listdir(edir):
    if f.endswith(".json") and f[:-5] not in files: os.remove(f"{edir}/{f}")
for k,v in files.items():
    open(f"{edir}/{k}.json","w",encoding='utf-8').write("[\n"+",\n".join(json.dumps(x,ensure_ascii=False) for x in v)+"\n]\n")
# The "About this clause" panel. Education links by state and topic, corrected
# by clause-guidance.csv (education_add / education_hide), only for states whose
# links have been reviewed; a Use when line shows wherever the clause does.
REVIEWED=["CO","ME","NM","FL","OK","WV","MT","IN","DC","NY","TX","PR","KY","OH","LA","VT","MO","ND","VA","AL","AR","NE","NC","KS","RI","ID","AS","CA","IA","VI","DE","NV","MI","AZ","HI","UT","SC","NH","GU","WI","AK","MS","MA","MD","MP","OR","CT","MN","WA","PA","WY","TN","SD","IL","GA","NJ"]
gpath=os.path.join(os.path.dirname(csvp),"clause-guidance.csv")
guide=list(csv.DictReader(open(gpath,newline='',encoding='utf-8')))
lcid={r['id']:r for r in lc}; edid={r['id']:r for r in ed}
use={};add={};hide={}
ids=lambda v:[x.strip() for x in v.split(';') if x.strip()]
for g in guide:
    if g['id'] not in lcid: sys.exit(f"clause-guidance.csv: {g['id']} is not an active lease clause")
    if g['use_when']:
        if g['state']: sys.exit(f"clause-guidance.csv: {g['id']}: use_when rows have no state")
        use[g['id']]=g['use_when']
    for col,d in (('education_add',add),('education_hide',hide)):
        for e in ids(g[col]):
            if g['state'] not in states(lcid[g['id']]) or e not in edid or g['state'] not in states(edid[e]):
                sys.exit(f"clause-guidance.csv: {g['id']}: {e} is not active in {g['state']}")
            d.setdefault((g['id'],g['state']),[]).append(e)
bytopic={}
for r in ed:
    for st in states(r):
        if st in REVIEWED: bytopic.setdefault((st,r['topic_key']),[]).append(r['id'])
out=[]
for r in lc:
    links={}
    for st in REVIEWED:
        if st not in states(r): continue
        k=(r['id'],st)
        l=[e for e in bytopic.get((st,r['topic_key']),[]) if e not in hide.get(k,[])]
        l+=[e for e in add.get(k,[]) if e not in l]
        if l: links[st]=l
    if use.get(r['id']) or links:
        out.append(f"  {q(r['id'])}: "+json.dumps({**({"useWhen":use[r['id']]} if r['id'] in use else {}),"education":links},ensure_ascii=False)+",")
open(f"{outdir}/clauseGuidance.js","w",encoding='utf-8').write("// Generated by scripts/clause-library/generate.py from lease-clauses.csv and\n// clause-guidance.csv; never hand-edit. What \"About this clause\" shows: when to\n// use the clause, and the landlord education linked to it, by state.\nconst CLAUSE_GUIDANCE = {\n"+"\n".join(out)+"\n};\n\nmodule.exports = { CLAUSE_GUIDANCE };\n")
print(len(lc),len(ed))
