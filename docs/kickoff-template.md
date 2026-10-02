# Kickoff: {STATE_NAME} (state #{STATE_NUMBER})

**Staged {STAGED_AT}; the attached `lease-clauses.csv` has {ROW_COUNT} rows.** Check that row count first (Step A below).

You're researching {STATE_NAME} for the Steinoak lease clause library. **Follow `lease-clause-sop.md` (attached) from start to finish. It is the whole procedure.** This prompt only adds what is specific to {STATE_NAME}. Where the two disagree, the SOP wins; say so if you notice a conflict.

## Settings
Opus, high effort. Turn on research mode only for the three triggers in SOP rule 9 (proof of absence, ambiguous or conflicting statute language, cross-chapter gap search), and say when and why.

## Attached files
- `lease-clause-sop.md`: the procedure.
- `lease-clause-topics.md`: every topic the library covers, with questions earlier states found worth checking (SOP rules 27 and 36).
- `lease-clauses.csv`: the current library, the only source of truth for rows.
- `lease-clause-decision-log-{REF1}.md` and `lease-clause-decision-log-{REF2}.md`: the two most recent state logs, as examples of the log format (SOP rule 71). They are examples, not templates for {STATE_NAME}'s law.

## Step A check (SOP rule 23)
The attached CSV has **{ROW_COUNT} rows ({ACTIVE_COUNT} active: {CLAUSE_COUNT} lease clauses, {EDU_COUNT} education rows)**. Active rows per state:
{STATE_COUNTS}

Confirm these before starting. If they don't match, stop and tell Taylor.

## Rows already in the library for {STATE_NAME} (SOP rule 25)
{EXISTING_ROWS}

## Citation format
{CITATION_FORMAT}

## Leads (questions to research, not findings)
{LEADS}

## Fill-in variables (SOP rule 60)
The builder already fills in these `{{variable}}` names: {VARIABLES}. Reuse one of them when it fits, rather than inventing a near-duplicate. You're free to create a new `{{variable}}` when a clause needs a value the landlord supplies. List each new one in the log's §10 so Claude Code can add it to the builder.

## Groups
Every row's `group` must be one the app already uses: Rent & Payment, Security Deposit, Tenant Responsibilities, Landlord Responsibilities, Access & Entry, Default & Termination, Notices & General, Pets, Parking & Storage, Rules & Regulations, Disclosures, Other / Miscellaneous. Education rows may also use Compliance & Prohibited Terms or Building & Safety. Don't create new group names; pick the closest existing one.

## Reminders
- **Scope:** state law only. Flag municipal ordinances without resolving them (rule 3).
- **Asking Taylor:** work it out yourself first. If you're unsure, ask Taylor in the chat right then, with a recommendation; never park a question in the log (rule 76). Never ask him for landlord experience outside Colorado, or to buy a lease (rules 2, 33).
- **This chat is {STATE_NAME}'s only Desktop chat** and will be reused for any follow-up (rule 8).

## Deliver (SOP rules 70–75)
- `lease-clauses-{ST}-delta.csv`: only new or changed rows, all 17 columns.
- `lease-clause-decision-log-{ST}.md`: the section order in rule 71, ending with "Proposed SOP changes" and "Proposed topic questions" (write "None" if empty).

Your pass is complete when both are delivered and checked. Claude Code does the sync.
