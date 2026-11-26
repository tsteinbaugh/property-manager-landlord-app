#!/usr/bin/env python3
"""Guard for lease-clause-library/local/ (see docs/local-law.md, Verification)."""
import csv, re, sys
from pathlib import Path
D = Path(__file__).resolve().parents[2] / 'lease-clause-library' / 'local'
ST = {'NOT_STARTED', 'CHECKING', 'NO_RULES_FOUND', 'HAS_RULES', 'RESEARCHED', 'COULD_NOT_CHECK'}
rd = lambda p: list(csv.DictReader(open(p, newline='', encoding='utf-8')))
err = []
for pf in sorted(D.glob('places-*.csv')):
    s = pf.stem.split('-')[1]
    places, cl, cites = rd(pf), rd(D / f'local-clauses-{s}.csv'), rd(D / f'citations-local-{s}.csv')
    cited, geo = {c['jurisdiction'] for c in cites}, {p['geoid'] for p in places if p['geoid']}
    topics = {t['topic_key'] for t in rd(D / f'topics-{s}.csv')}
    seen = set()
    for p in places:
        n = p['place']
        if p['geoid'] and p['geoid'] in seen: err.append(f'{n}: duplicate GEOID')
        seen.add(p['geoid'])
        if p['status'] not in ST: err.append(f'{n}: bad status {p["status"]!r}')
        if p['status'] in ('HAS_RULES', 'RESEARCHED') and p['geoid'] not in cited: err.append(f'{n}: {p["status"]} with no citations')
        if p['status'] == 'NO_RULES_FOUND':
            for f in ('code_source', 'checked_date', 'searched'):
                if not p[f]: err.append(f'{n}: NO_RULES_FOUND without {f}')
            if 'known-positives pass' not in p['searched']: err.append(f'{n}: known-positives not recorded as passing')
    for c in cl:
        if c['jurisdiction'] not in geo: err.append(f'{c["id"]}: unknown jurisdiction')
        if c['topic_key'] not in topics: err.append(f'{c["id"]}: unknown topic_key {c["topic_key"]}')
        if c['relation'] not in ('ADDS', 'REPLACES'): err.append(f'{c["id"]}: relation must be ADDS or REPLACES')
    for t in rd(D / f'subjects-{s}.csv'):
        if not re.search(t['search_terms'], t['known_positive'], re.I): err.append(f'{t["subject"]}: known-positive does not match its terms')
print('\n'.join(err) or 'check-local: OK'); sys.exit(bool(err))
