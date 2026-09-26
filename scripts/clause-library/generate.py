# Compiles lease-clauses.csv into the three shipped backend data files:
# clauseTemplates.js, clauseResearchMetadata.js, landlordEducation.js.
# Committed 2026-09-26 after being lost twice with old scratchpads.
#
# Usage (from the repo root):
#   python3 scripts/clause-library/generate.py lease-clauses.csv backend/src/lib backend/src/lib
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
def q(s): return json.dumps(s,ensure_ascii=False)
def states(r): return [s.strip() for s in re.split(r'[;,]',r['states']) if s.strip()]
def rt(r): return [x.strip() for x in re.split(r'[/;]',r['rule_type']) if x.strip()]
def arr(a): return "["+", ".join(q(x) for x in a)+"]"
act=[r for r in rows if r['is_active']=='TRUE']
lc=[r for r in act if r['content_type']=='LEASE_CLAUSE']
ed=[r for r in act if r['content_type']=='LANDLORD_EDUCATION']
_H={}
for _f,_m in [("clauseTemplates.js","const CLAUSE_TEMPLATES = ["),("clauseResearchMetadata.js","const CLAUSE_RESEARCH_METADATA = {"),("landlordEducation.js","const LANDLORD_EDUCATION = [")]:
    _t=open(f"{libdir}/{_f}",encoding='utf-8').read(); _H[_f]=_t[:_t.index(_m)]
def header(f,marker): return _H[f]
# templates
out=[];prev=None
for r in lc:
    g=REMAP.get(r['group'],r['group']); assert g in GROUPS,(r['id'],g)
    if g!=prev: out.append(f"  // {g}"); prev=g
    e=["  {",f"    id: {q(r['id'])},",f"    title: {q(r['title'])},",f"    group: {q(g)},",f"    states: {arr(states(r))},"]
    if r['supersedes']: e.append(f"    supersedes: {q(r['supersedes'])},")
    if r['choice_group']:
        e.append(f"    choiceGroup: {q(r['choice_group'])},"); e.append(f"    choiceGroupDefault: {'true' if r['is_default']=='TRUE' else 'false'},")
    e+=["    bodyText:",f"      {q(r['bodyText'])},","  },"]; out+=e
open(f"{outdir}/clauseTemplates.js","w",encoding='utf-8').write(header("clauseTemplates.js","const CLAUSE_TEMPLATES = [")+"const CLAUSE_TEMPLATES = [\n"+"\n".join(out)+"\n];\n\nmodule.exports = { CLAUSE_TEMPLATES };\n")
out=[]
for r in lc:
    out+=[f"  {q(r['id'])}: {{",f"    ruleTypes: {arr(rt(r))},",'    contentType: "LEASE_CLAUSE",',f"    verificationStatus: {q(r['verification_status'])},",f"    effectiveFrom: {q(r['effective_from'])},",f"    lastChecked: {q(r['last_checked'])},",f"    topicKey: {q(r['topic_key'])},",f"    notes: {q(r['notes'])},","  },"]
open(f"{outdir}/clauseResearchMetadata.js","w",encoding='utf-8').write(header("clauseResearchMetadata.js","const CLAUSE_RESEARCH_METADATA = {")+"const CLAUSE_RESEARCH_METADATA = {\n"+"\n".join(out)+"\n};\n\nmodule.exports = { CLAUSE_RESEARCH_METADATA };\n")
out=[];prev=None
for r in ed:
    g=r['group']
    if g!=prev: out.append(f"  // {g}"); prev=g
    out+=["  {",f"    id: {q(r['id'])},",f"    title: {q(r['title'])},",f"    group: {q(g)},",f"    states: {arr(states(r))},",f"    ruleTypes: {arr(rt(r))},",f"    verificationStatus: {q(r['verification_status'])},",f"    topicKey: {q(r['topic_key'])},","    bodyText:",f"      {q(r['bodyText'])},",f"    notes: {q(r['notes'])},","  },"]
open(f"{outdir}/landlordEducation.js","w",encoding='utf-8').write(header("landlordEducation.js","const LANDLORD_EDUCATION = [")+"const LANDLORD_EDUCATION = [\n"+"\n".join(out)+"\n];\n\nmodule.exports = { LANDLORD_EDUCATION };\n")
print(len(lc),len(ed))
