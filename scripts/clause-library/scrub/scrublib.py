# Helpers for applying the 2026-09-29 three-bucket scrub verdicts
# (lease-clause-scrub-verdicts.md) to lease-clauses.csv and a state's
# citations file. Each state's batch is a small script that calls these,
# e.g. scripts/clause-library/scrub/apply_WY_KS_NE.py. Run from the repo root.
#
# off()   switch a lease clause off (never delete) and point it at its education row
# edu()   add a new LANDLORD_EDUCATION row built from the clause it replaces
# merge() fold a switched-off clause's content into an existing education row
# edit()  trim or rewrite a kept clause and set its basis
# The CSV round-trips byte for byte (CRLF, minimal quoting), so unchanged
# rows stay identical.
import csv, io

D = "2026-09-29"
SCRUB = "SCRUB 2026-09-29 (checklist instruction 66, three-bucket test)"
CT, SL, RD = "CONSTRAINED_TERM", "SERVES_LANDLORD", "REQUIRED_DISCLOSURE"


class Library:
    def __init__(self, path="lease-clauses.csv"):
        self.path = path
        raw = open(path, newline="", encoding="utf-8").read()
        self.rows = list(csv.reader(io.StringIO(raw)))
        self.H = self.rows[0]
        self.ix = {k: i for i, k in enumerate(self.H)}
        self.R = {r[0]: r for r in self.rows[1:]}

    def g(self, r, k):
        return r[self.ix[k]]

    def s(self, r, k, v):
        r[self.ix[k]] = v

    def note(self, r, text):
        n = self.g(r, "notes")
        self.s(r, "notes", (n + " | " if n else "") + text)

    def off(self, st, cid, eid):
        r = self.R[cid]
        assert self.g(r, "is_active") == "TRUE", cid
        self.s(r, "is_active", "FALSE")
        self.s(r, "lease_clause_basis", "")
        self.s(r, "last_checked", D)
        self.note(r, f"{st}: {SCRUB}: switched off, not deleted. It restates a tenant right or landlord "
                     f"duty that applies whatever the lease says, so the content moved to education ({eid}). "
                     "Kept for a possible comprehensive-lease option.")

    def edu(self, st, eid, src, title, rule, body, notes, group=None, topic=None):
        assert eid not in self.R, eid
        r = [""] * len(self.H)
        vals = dict(id=eid, group=group or self.g(self.R[src], "group"), title=title, states=st,
                    is_active="TRUE", supersedes="", bodyText=body, rule_type=rule,
                    content_type="LANDLORD_EDUCATION", verification_status="VERIFIED", notes=notes,
                    effective_from=self.g(self.R[src], "effective_from"), last_checked=D,
                    choice_group="", is_default="", topic_key=topic or self.g(self.R[src], "topic_key"),
                    lease_clause_basis="")
        for k, v in vals.items():
            r[self.ix[k]] = v
        self.rows.append(r)
        self.R[eid] = r

    def merge(self, st, cid, eid, prepend, why, append=""):
        self.off(st, cid, eid)
        e = self.R[eid]
        if prepend:
            self.s(e, "bodyText", prepend + " " + self.g(e, "bodyText"))
        if append:
            self.s(e, "bodyText", self.g(e, "bodyText") + " " + append)
        self.s(e, "last_checked", D)
        self.note(e, f"{st}: {why}")

    def edit(self, st, cid, body=None, basis=None, rule=None, why=""):
        r = self.R[cid]
        if body is not None:
            self.s(r, "bodyText", body)
        if basis is not None:
            self.s(r, "lease_clause_basis", basis)
        if rule is not None:
            self.s(r, "rule_type", rule)
        self.s(r, "last_checked", D)
        self.note(r, f"{st}: {SCRUB}: {why}")

    def save(self):
        out = io.StringIO()
        csv.writer(out, lineterminator="\r\n").writerows(self.rows)
        open(self.path, "w", newline="", encoding="utf-8").write(out.getvalue())


class Citations:
    """A state's lease-clause-citations-<ST>.csv."""

    def __init__(self, st):
        self.path = f"lease-clause-citations-{st}.csv"
        self.st = st
        raw = open(self.path, newline="", encoding="utf-8").read()
        self.nl = "\r\n" if "\r\n" in raw else "\n"
        self.rows = list(csv.reader(io.StringIO(raw)))
        self.R = {r[0]: r for r in self.rows[1:]}

    def _app(self, r, text):
        r[9] = (r[9] + " | " if r[9] else "") + text
        r[7] = D

    def move(self, cid, eid):
        """The clause's content moved unchanged to a new education row."""
        r = self.R.pop(cid)
        r[0], r[1] = eid, "LANDLORD_EDUCATION"
        self._app(r, f"Three-bucket scrub {D}: renamed from {cid} (lease clause switched off, content moved to education unchanged).")
        self.R[eid] = r

    def fold(self, cid, eid):
        """The clause was merged into an existing education row."""
        src = self.R.pop(cid)
        self.rows = [r for r in self.rows if r[0] != cid]
        e = self.R[eid]
        if src[3] and src[3] not in e[3]:
            e[3] = (e[3] + "; " if e[3] else "") + src[3]
            e[4] = "CITED"
        self._app(e, f"Three-bucket scrub {D}: content from {cid} (switched off) folded in.")

    def add(self, eid, citation, status, eff, notes):
        self.rows.append([eid, "LANDLORD_EDUCATION", self.st, citation, status, "VERIFIED", eff, D, "", notes])
        self.R[eid] = self.rows[-1]

    def touch(self, cid, text):
        self._app(self.R[cid], f"Three-bucket scrub {D}: {text}")

    def save(self, lib):
        out = io.StringIO()
        csv.writer(out, lineterminator=self.nl).writerows(self.rows)
        open(self.path, "w", newline="", encoding="utf-8").write(out.getvalue())
        active = {r[0] for r in lib.rows[1:] if lib.g(r, "is_active") == "TRUE"
                  and self.st in lib.g(r, "states").split(";")}
        have = {r[0] for r in self.rows[1:]}
        return sorted(active - have), sorted(have - active)


def annotate_checklist(moves, path="lease-clause-decision-log-named-topic-checklist.md"):
    """Instruction 38: a checklist cell naming a switched-off clause must stay
    true, so each mention gains a pointer to the education row that now holds
    the content. Idempotent."""
    text = open(path, encoding="utf-8").read()
    n = 0
    for cid, eid in moves.items():
        tag = f"`{cid}`"
        note = f" (moved to `{eid}` by the {D} scrub)"
        parts = text.split(tag)
        if len(parts) == 1:
            continue
        out = parts[0]
        for p in parts[1:]:
            out += tag + ("" if p.startswith(note) else note) + p
            n += 0 if p.startswith(note) else 1
        text = out
    open(path, "w", encoding="utf-8").write(text)
    return n
