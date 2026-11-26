# Local law: weekly track, Colorado pilot first

*Approved plan (Taylor, 2026-11-24). Started 2026-11-24.*

## Usage log
| Session | Weekly usage at start | at end | Done |
|---|---|---|---|
| 2026-11-24 | 53% (54% at 9:15 AM Nov 25; 56% Nov 25 afternoon, mid-session) | 56% at about 9 PM Nov 25 (last reading); the weekly reset at 10 PM came before an end reading, so Phase 4's evening work (four counties, six rows, five checks) isn't measured | Phase 1 files; state step drafted, open; Boulder and Boulder County have rules (city/county sources); Denver and Weld held on site terms; Frederick could not check |; Phase 3 report done (spot-check, pilot report), but the pilot places are still open (see the pilot report's list); Phase 4 begun early, before the pilot finished: Jefferson, Arapahoe, Douglas, Mesa Counties saved and searched (6 rows drafted, 5 checked); Taylor's download list for the next 21 places |

## Context
The library covers federal and state law only (SOP rule 3 flags local law without resolving it). Taylor wants cities and counties covered the same way, everything everywhere. It is low priority and token-heavy, so it runs Tuesday evening through Wednesday on usage that would otherwise go unused; the bracketed prompts stay the focus on other days.

## Decisions (Taylor, 2026-11-24)
- **When:** Tuesday evening, overnight, then Wednesday until the weekly limit or the 10 PM reset. Never Wednesday night after the reset, and not Thursday through Monday. Taylor opens the session and says "local day"; nothing starts by itself. First session: Tuesday 2026-11-24, about 9:30-10 PM.
- **Coverage:** every local government in every state that can make rental rules has its whole code searched. Full research only where rules are found.
- **Start:** Colorado, piloted on Denver, Boulder, Frederick. Finish all of Colorado first, to learn from every size, type and overlap; then the rest of the country, largest first regardless of state.
- **Who:** Claude Code (Taylor had no preference). Desktop is the fallback for a place Claude Code can't handle.

## Phase 1: Set up (first local day; small)
1. `docs/local-law.md`: the procedure. It reuses the SOP's standing and source rules (official text only, quotes checked, verification statuses, three-bucket test, rule 56 tags) and adds only what differs. Rule 3 is amended to point to it: local text still never enters state rows.
2. `lease-clause-library/local/`, separate from `lease-clauses.csv` so state files and guards are untouched:
   - `places-CO.csv`: the queue. Place, Census GEOID, type, counties (every one it sits in, since more than one can apply), home rule or statutory, renter-occupied homes, code source and URL, status, checked date, what was searched, next step.
   - `local-clauses-CO.csv`: the 17 library columns plus `jurisdiction` (GEOID) and parent-state row.
   - `citations-local-CO.csv`, and one decision log for the state with a section per place.
   - `topics-CO.csv`: subjects from the state step, with search terms and a known-positive for each.
3. Queue built from the Census place and county lists, ordered by renter-occupied housing units (Census ACS; order only, never whether a place is checked), and checked against Colorado's official local-government list. Statuses: `NOT_STARTED`, `CHECKING`, `NO_RULES_FOUND`, `HAS_RULES`, `RESEARCHED`, `COULD_NOT_CHECK`.
4. Corpora in `~/local-corpus-build/CO/<place>/` (resumable; one worker, pauses, back-off; never work around a block; read blocked sites through Taylor's Chrome one page at a time).

## Phase 2: Colorado state step
Use the `topic_key`s and Colorado's verified rows to sort every topic: local rules barred, limited, or allowed. Read the controlling statutes and the home-rule provision (Colo. Const. art. XX) from official text. List which kinds of body can make rental rules (cities, towns, counties, Denver and Broomfield as city-counties, health departments, others found). A subject stays in the search unless it is clearly barred.

## Phase 3: Pilot, both ways
For Denver, Boulder and Frederick, with Boulder and Weld Counties:
1. **Check:** search the whole code and recent uncodified ordinances; read hits; record the result.
2. **Blind full pass:** a fresh agent answers every topic for the place without seeing the check's findings.
3. Compare. Every rule only the full pass found is a miss: fix the search terms and rerun. Drop the check for full research if misses can't be fixed.
4. Draft rows for real rules, marked as adding to or replacing the state row. Independent check by a fresh agent (at most 3 rounds, rule 80), then a spot-check of about five high-stakes rules per place.
5. Report to Taylor: misses, usage and time per place, a projected length for Colorado and the country. **Stop for Taylor's go-ahead.**

## Phase 4: Rest of Colorado
Most renter-occupied homes first, in resumable units of one place. A place with rules moves to full research; overlapping city and county results are both kept. Every place ends in a final status.

## Phase 5: Rest of the country
After Colorado, report lessons, pace and a projection to Taylor, and update `docs/local-law.md`. Then one national queue, most renter-occupied homes first, regardless of state.
- The first place reached in a state triggers that state's step (Phase 2), reused for its later places.
- A city's counties and other overlapping bodies are checked with it, so a finished city is a complete answer for its properties.
- Search terms learned from a place are added to the topic list. When a new term could have missed something, finished places are re-searched from their saved corpora for that term only.
- The same `local/` files are created per state.

## Local-day routine
Taylor may work in another terminal: local work uses its own git worktree and branch; ask Taylor before merging to main; run backend tests only at merge, after checking (shared test database). Pilot estimate: 1-2 weeks from 2026-11-24, with a third if usage is short (low confidence). Ask Taylor for the weekly usage percentage at the start and end of each session and record it here, to measure the cost per place. If usage runs short, do Boulder's and Frederick's full passes first.

Pull; read `docs/local-law.md` and the queue; resume the first unfinished unit; save after each topic or place; at most two agents at a time; commit after each finished unit. If the limit hits, unfinished work restarts from saved files next session. Bugs or product ideas go to `docs/backlog.md`, not worked that day.

### Evening and overnight
- **Taylor is present from "local day" until "stepping away", and again from "I'm here":** ask questions and raise blockers right away; don't skip them. Do the work most likely to need Taylor first. The overnight rules apply only after "stepping away". "wrap up" means save, commit to the branch, record usage, summarize and ask about merging; "wrap up only" means do that without finishing the current piece.
- **Evening, Taylor present:** auto mode all day and night (Taylor, 2026-11-24). Try a sample of each kind of overnight action to surface blocks early. Finish the Colorado state step if possible, since place searches depend on it. Untested: whether repeated blocks pause the session; record what happens.
- **Overnight, skip whatever needs Taylor:** log it in `lease-clause-library/local/needs-taylor.md` (what is stuck, the recommendation, what depends on it) and work on something independent. Never open a question box. A blocked site, CAPTCHA or sign-in is logged, never worked around. A refused permission is logged, never retried another way. A step that fails two or three times is logged. A legal doubt marks the row NEEDS_REVIEW.
- **Never overnight:** merge, push, delete, app or schema changes.
- If everything left needs Taylor, stop. A session limit, a sleeping computer or a permission prompt can stop the work; whether it resumes by itself after a session limit is untested (record what happens the first night). Taylor turns off sleep on the VM and host.
- **Wednesday morning:** go through `needs-taylor.md` first.

## Not in this plan (decide after the pilot, with Taylor)
- **App:** how a property gets its local governments (mailing city often isn't the legal city, so this needs address lookup or a confirmation question), how local clauses layer on state ones, and showing "checked / none found / couldn't check". Likely a `jurisdictions` field beside `states` in `generate.py` and a picker filter. No schema or app change now.
- **Watching local law for changes.** LegiScan doesn't cover it; until then `checked date` shows age. Nothing local ships to landlords before this is settled.

## Files
New: `docs/local-law.md`, `lease-clause-library/local/*`, `scripts/clause-library/check-local.py`. Edited: `lease-clause-sop.md` (rule 3), `CLAUDE.md` (Current focus: the Tuesday-Wednesday track), `docs/backlog.md` (the local-law item), `docs/history.md` (decisions).

## Verification
- `check-local.py`: every queue row has a valid status; `HAS_RULES`/`RESEARCHED` rows have citations; `NO_RULES_FOUND` rows record code version, date and searches with known-positives passing; topic keys and groups are valid.
- All existing sync guards still pass, `generate.py` output is unchanged, backend tests pass.
- Pilot comparison shows zero unexplained misses before Phase 4.

## Procedure (Phase 1; applies with the SOP)
Reuses the SOP: official text only (rule 11), no summaries as VERIFIED (12), saved sources and quote checks (14), search as proof with limits stated (19), three-bucket test, rule 56 tags, independent check (80). Differences:
1. **Sources:** the place's own website first, then its publisher. Site terms of use are not looked up and don't stop the work; Taylor accepts that risk (Taylor, 2026-11-24). Where a publisher blocks Claude Code, Taylor downloads the code and it is read from the file. Rows are written in our own words with citations. A block, CAPTCHA or bot refusal is logged and not worked around (no changed user agent, no API or data endpoint, no mirror). Keep "refuses the shell" and "refuses Chrome" separate in the log.
2. **Corpus:** every file is checked for extractable text. A file under 20 words is scanned: OCR it, mark the hits as OCR, and read the page image before quoting it. A file that can't be read makes the place `COULD_NOT_CHECK`, never `NO_RULES_FOUND`. A link that 404s is recorded the same way. (Boulder County, 2026-11-24: six scanned ordinances, including short-term rental licensing, would have shown as no hits.)
3. **Search:** every subject in `subjects-CO.csv` over the whole corpus, with the nonsense control ("zzqqxx" = 0). A place also needs a known positive found in its own text, since the CSV's positive only tests the pattern. Read every hit in a rental context.
4. **Scope per place:** codes, charter, uncodified ordinances since the code's date, building and housing code adoptions (with local amendments), land use code, and health-department rules. Record the code's currency date.
5. **Rows:** `jurisdiction` is the GEOID; `relation` is ADDS or REPLACES; `parent_row` is the state row. A place row never edits a state row (SOP rule 3).
6. **Overlap:** county rules usually cover unincorporated land only; record each rule's territory. A city's record lists every county and district it overlaps.

- **A code download is never enough by itself (2026-11-25, Denver):** check its "current through" date, then list the council's later ordinances and the earlier ones with delayed effective dates (compare bill numbers with the code's ordinance notes). Denver's newest landlord rule (§ 27-50.5) was in neither the download nor the blind pass.
- Read amending bills on the page image: text extraction loses strikeouts. A matching quote doesn't show a reading is right; read the whole section before calling a YES row a rule.
