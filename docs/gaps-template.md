# Topic gaps: {STATE_NAME} (end-of-run consistency pass)

**Staged {STAGED_AT}; the attached `lease-clauses.csv` has {ROW_COUNT} rows.** Check that row count first (Step A below).

## Start clean (read this first)
This chat may hold {STATE_NAME}'s earlier research. That history is background, not instructions.
1. Delete any CSV, log or checklist copies left in `/mnt/user-data/outputs/` by earlier sessions.
2. The files attached with this prompt are the only source of truth. Where the earlier conversation disagrees with them, they win.
3. Run the Step A check below before anything else.

If this chat is too long to continue (it says it's full, or it slows down or loses track), Taylor starts a new chat named "{ST} – topic gaps" and pastes this same prompt with the same files. Everything you need is here.

## What this pass is
{STATE_NAME} was researched early (its decision log is `lease-clause-decision-log-{ST}.md`, not attached). Since then the library has grown to {TOPIC_COUNT} topics, and every state researched since Maryland answers all of them. {STATE_NAME} has rows for {HAVE_COUNT} topics. **This pass answers the {MISSING_COUNT} topics it has no row for**, listed in `missing-topics-{ST}.md`, plus the few named items under "{STATE_NAME} items" below. Nothing else.

**One visit (Taylor, 2026-10-24).** This is the state's only visit for this pass. Finish every listed topic and item. Leave nothing "to check later": a point you can't settle gets the cautious course stated in the row (SOP Part 5's NEEDS_REVIEW policy), or a question to Taylor in the chat right then, with a recommendation.

## Scope fence
- **Add rows; don't change existing ones.** Don't edit, re-verify or re-audit any existing {ST} row or any shared row's text. Two things are allowed on existing rows:
  - Tagging an existing shared clause or education row with {ST}, when it answers a missing topic. Add `{ST}` to `states` and a `{ST}: …` segment to `notes`, as in a full pass (SOP rule 26).
  - Nothing else. If your research shows an existing row is wrong, don't fix it. Quote the statute and the row's words under "Findings on existing rows" in your log; Claude Code fixes it at sync.
- **Only {STATE_NAME}.** Don't touch other states' rows. Problems you notice elsewhere go under "Findings for other states".
- **Every answer is a row.** A topic {STATE_NAME} has law on gets a clause or an education row; a topic it has no law on gets a confirmed-absence education row backed by a battery (SOP rules 19 and 27). One subject per row, keyed by the topic's `topic_key` (rule 57).

## Procedure
`lease-clause-sop.md` (SOP {SOP_VERSION}, attached) governs, and it may be much newer than the version this chat used before. Use these parts of it, scaled to a topic list:
- **Sources and currency:** rules 12, 16, 19, 21, 24 (read the section whole; currency from history lines and the session laws; batteries with controls and positives for every absence).
- **Answering topics:** rules 26-28 (tag first: an existing shared row that already states {STATE_NAME}'s law is tagged, not duplicated), 36, 54 (a lawful option the library declines still gets an education row), 55 (three-bucket test and `lease_clause_basis` for every new clause), 57, 59, 60, 79.
- **Check:** rule 80, scaled down: **at most 2 rounds**, one agent at a time; the second round re-checks only rows edited after the first. Stop early on a clean round. List rows edited after the last round in the log.
- **Skip:** the statute walk, real-lease comparison, scenario screen and outside-title search (rules 29-35, already done for {STATE_NAME}), and the Step D screens (rules 40-53) except for the rows you add.

## Settings
Opus, high effort. Research mode only for SOP rule 9's three triggers.

## Usage budget
- Read big files with scripts, never into the chat: `lease-clauses.csv`, the corpus and saved section files.
- **Canvass at most two agents at a time,** each saving its answer to a file after every topic. If a usage limit stops the work, wait for the reset and resume from the saved files; never redo a saved topic.
- Expect this to take several sessions for a long list. Resume from the saved files each time.

## Attached files
- `missing-topics-{ST}.md`: the {MISSING_COUNT} topics, each with the questions earlier states found worth checking and a few example rows from other states (examples of shape, never of {STATE_NAME}'s law).
- `lease-clause-sop.md`, `lease-clause-topics.md`.
- `lease-clauses.csv.xz`: the library, compressed because it is over the 30 MB attachment limit. Decompress it (`xz -dk lease-clauses.csv.xz`, or Python's `lzma`); the result, `lease-clauses.csv`, is the only source of truth for rows.
- {CORPUS_LINE}

## Step A check
The attached CSV has **{ROW_COUNT} rows ({ACTIVE_COUNT} active)**, and **{ST_ACTIVE} active rows carry {ST}**. First confirm the decompressed `lease-clauses.csv` is {CSV_BYTES} bytes with SHA-256 `{CSV_SHA}`. Then confirm both counts, and that `missing-topics-{ST}.md` lists {MISSING_COUNT} topics, before starting. If they don't match, stop and tell Taylor.

## Citation format
{CITATION_FORMAT}

## {STATE_NAME} items
{STATE_ITEMS}

## Reminders
- **Asking Taylor:** work it out yourself first. If you're unsure, ask Taylor in the chat right then, with a recommendation (rule 76). Never ask Taylor for landlord experience outside Colorado, or to buy a lease.
- **Groups:** a lease clause uses one of the twelve clause groups only: Rent & Payment, Security Deposit, Tenant Responsibilities, Landlord Responsibilities, Access & Entry, Default & Termination, Notices & General, Pets, Parking & Storage, Rules & Regulations, Disclosures, Other / Miscellaneous. Education rows use group names already in the CSV ("Building & Safety" is an education group, never a clause group).
- **Variables:** reuse existing `{{variables}}`; list any new one in the log.

## Deliver
- `lease-clauses-{ST}-gaps-delta.csv`: only new rows and the existing rows you tagged, all 17 columns.
- `gaps-log-{ST}.md`, short, in this order: §1 sources, channel and currency; §2 topics answered (one line each: topic, row id, Present / Absent / tagged, citation); §3 batteries for every absence; §4 decisions and questions asked of Taylor; §5 the independent check, with rows edited after the last round; §6 findings on existing rows; §7 findings for other states; Proposed SOP changes; Proposed topic questions (write "None" if empty).

Your pass is complete when both are delivered and checked. Claude Code does the sync and appends your log to `lease-clause-decision-log-{ST}.md`.
