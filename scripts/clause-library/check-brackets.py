#!/usr/bin/env python3
"""Sync guard: no [bracketed prompt] or note to the landlord in lease clause text.

The bracket sweep (2026-11-27) took every [bracketed prompt] out of the
provided clauses: a note to the landlord goes to "About this clause", education
or a field's help; a blank or choice becomes a {{variable}} (CLAUDE.md, Lease
builder, Bracketed prompts). A delta from a research chat can bring new ones
back, so this runs at every sync. Allowed: a checkbox ("[ ]" or "[x]"), a
one-letter change inside a quotation ("[t]he") and "[sic]".

Also fails on clause text that opens a sentence the way a note to the landlord
does ("Optional.", "Use this clause when", "Landlord should", "Delete this ..."),
which is advice without the brackets.

Usage (from the repo root): python3 scripts/clause-library/check-brackets.py
"""
import csv
import re
import sys

CSV = "lease-clause-library/lease-clauses.csv"
ALLOWED = re.compile(r"\[(?: |x|X|[A-Za-z]|sic)\]")
BRACKET = re.compile(r"\[[^\[\]]*\]")
ADVICE = re.compile(
    r"(?:^|\n|[.:;] )("
    r"Optional[.:]|Note to (?:the )?landlord|Drafting note|Landlord should|Landlords should|"
    r"Use (?:this clause|this section|only (?:if|when|for)|if |when )|"
    r"(?:Delete|Omit|Remove) (?:this|if|the following)|Include (?:this|only if)|Choose one\b|Select one\b|Fill in\b"
    r")",
    re.I,
)


def main():
    csv.field_size_limit(10**9)
    problems = []
    with open(CSV, newline="", encoding="utf-8") as f:
        for r in csv.DictReader(f):
            if r["is_active"] != "TRUE" or r["content_type"] != "LEASE_CLAUSE":
                continue
            for col in ("title", "bodyText"):
                text = r[col]
                for m in BRACKET.finditer(text):
                    if not ALLOWED.fullmatch(m.group(0)):
                        problems.append((r["id"], col, "bracket", m.group(0)[:100]))
            for m in ADVICE.finditer(r["bodyText"]):
                s = r["bodyText"][m.start(1): m.start(1) + 100].replace("\n", " ")
                problems.append((r["id"], "bodyText", "note to the landlord", s))
    for p in problems:
        print("FAIL %s (%s, %s): %s" % p)
    if problems:
        print(f"{len(problems)} problem(s): move notes to clause-guidance.csv, education or a field's help; "
              "turn blanks and choices into {{variables}} with a field in clauseFields.js.")
        sys.exit(1)
    print("ok - no bracketed prompts or notes to the landlord in lease clause text")


if __name__ == "__main__":
    main()
