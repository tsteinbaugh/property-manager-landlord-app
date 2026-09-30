# Backlog

All open work in one place, moved here on 2026-09-29: the standing product backlog, the known issues, and Addendum M (the builder gaps the legal research found, formerly in `lease-clause-decision-log-architecture-review.md`; its section numbers M.1–M.14 are kept so references elsewhere still resolve). Add new items here. When an item is done, strike it through with the date, or delete it and note it in `docs/history.md`.

## Legal-watch catch-up, October 1–4, 2026 (time-critical)

LegiScan's September allowance is used up (30,019 of 30,000) by one-off seeding and test runs; it resets October 1. Normal weekly runs for all states cost about 6,600 queries a month. This week's checks failed or found nothing for NE, MN, ND, SD, OH, CA, NV, TX and NJ, and FL, AZ and GA will too. No state data was damaged.

Do this on or after October 1 and before the Monday October 5 scheduled runs, or their first check will email every historical bill:
1. **Colorado:** run `seed-baseline` before its 13:00 UTC run. The scrub added a citation to C.R.S. § 38-12-1004, a section its watch has never monitored.
2. **NC, SC, TN, VA, AL and PA** (never seeded; first runs 16:45, 17:00, 17:15, 17:30, 17:45 and 18:00 UTC): for each, one state at a time, run `dry-run`, then `seed-baseline`, then `dry-run` again, and confirm the state file reached `main` with `git pull`. Spread over more than one day if the allowance looks tight.
3. **Make-up check:** run `check` once for NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ and GA.

## Standing backlog

**Standing backlog, no active priority order right now — ask Taylor what's next:** Move-in/Move-out Inspections, Legal Tracker (Colorado-only first, per "Nationwide jurisdictional coverage plan" below), a maintenance-supplies inventory idea (memory `project_maintenance_supplies_inventory_idea`), the Addendum M product-backlog items surfaced by the legal research (see Known Issues) — most notably ND's `lease-notice-initial-requirement-nd` clause, which per Addendum M.1 "currently ships broken" without a lease-builder mechanism for an adjacent initialing field, plus the lease `formatting` field (Addendum M.12), and a county/local layer plus a units-owned attribute (property facts that pick the right Tennessee county variant and Virginia unit-count variant automatically; Taylor named Tennessee the pilot, TN log §13–14, and noted that in Colorado how many units a landlord owns also changes court procedure, so this is needed across states, VA log §14). Also open from Ohio's research: a real design gap in the legal-watch tripwire (Ohio moves landlord-tenant/fair-housing law through **budget/appropriations bills** across three separate general assemblies, which a watch filtering on bill title/subject/committee would miss — untested against the other seven states, not confirmed Ohio-specific).

## 🐛 Known issues / blockers

> Things that are broken, stuck, or need a decision before moving forward.
> Clear these out as they're resolved.

- **California's Prop 65 rental-warning companion lease clause is parked, waiting on Taylor's decision (2026-09-24).** The education row `edu-prop65-rental-warning-ca` is built and `VERIFIED`, the first row of its kind in any state. It covers the warning duty for CA landlords with 10+ employees, the annual repeat, separate parking and smoking-area warnings, and penalties of up to $2,500 per day. Its optional lease-clause companion `prop65-warning-ca` is in the CSV but `is_active: FALSE`, because three things aren't ready: (1) the regulation has five wording variants by chemical category, and the builder would have to pick among them; (2) the required §25603(a)(1) warning symbol hasn't been read or verified; (3) a lease warning covers only signers and named adults, for one year only, so a letter/email workflow and an annual repeat are still needed. Ship it only when Taylor asks and those are handled. Also noted: while wiring radon's citation, CA's section extractor was found truncating 6-digit H&S sections (§105430 read as 10543); fixed, and nothing earlier was affected.
- **Backfill decisions (2026-09-28).** Decided by Taylor ("yes" to the recommendations):
  - **Adopted:** method rules as checklist instructions 37–42, plus a new `check-checklist-reconciliation.py`.
  - **Shared text edits (uniform, propagated to every tagged log):** `no-alterations` gains "reasonable modification"; `pet-policy` becomes "without liability to Tenant to the extent applicable law permits"; `holdover` falls back to this Lease where the law sets no notice period (WY).
  - **ND tag moves:** ND moved to `tenants-property-insurance-ks-oh-ca`, `parking-ks-oh-ca` and `storage-space-ks-oh-ca`; the ND liability note is qualified on 38 rows.
  - **Ohio:** no Click & Lease purchase.

  Still open:
  - ~~Kansas statute text~~ **Done 2026-09-28:** Taylor supplied the text. 58-2571 and 12-808c were confirmed, with one word added and one quote completed. 58-2561 needed a real correction: per *Asbury v. Mauk*, a deposit claim is not a compulsory counterclaim. Both NEEDS_REVIEW rows are now VERIFIED.
  - **South Dakota:** two NEEDS_REVIEW rows remain.
  - **Wyoming:** the self-help absence needs an official full-text search.
  - **California:** no currency sweep yet.
  - **Product or cross-state questions not yet decided:** casualty consolidation (WY), tenant-improvement lien clause (FL), CA translation clause plus builder step, ~~`topic_key` normalisation (KS)~~ (done 2026-09-29), requiring lease URL/edition in the gap check, MN §GB.8 clause questions, leases on reservation or trust land (SD), a quiet-enjoyment clause (ND §43.7(D)).
- **96 `{{variables}}` in shipped clauses have no resolver in `clauseVariables.js` (2026-09-29): full grouped list in Addendum M.14** of the architecture-review log. The two near-miss names were fixed the same day (`{{late_fee}}` → `late_fee_amount` in CA, `{{tenant_name}}` → `tenant_names` in FL); four pairs are duplicate names, and the rest need an Entity, Property or Lease field or the `[bracket]` convention. Arizona adds 9 (`nonrefundable_fees_and_purposes`, `authorized_person_name_address_phone`, `separately_charged_utilities`, `utility_billing_method`, `utility_admin_fee`, `foreclosure_contact`, `foreclosure_sale_time_date_place`, `tenant_maintained_items`, `maintenance_consideration`). This matters more in Arizona: under A.R.S. §33-1322(E), a written lease with a blank left in it is a landlord's material noncompliance, so an AZ lease must not generate while any placeholder is unfilled (AZ log §7). Florida adds about 20, mostly from its statutory forms (`fee_in_lieu_*`, `early_termination_fee`/`_notice_days`, `end_of_term_notice_days`/`_liquidated_damages`, `flotation_insurance_amount`, `landlord_notice_name`/`_address`, `tenant_maintained_items`, deposit-notice statements). New Jersey adds `municipality`/`county`/`block`/`lot` (the DCA flood form), `rent_control_exemption_end_date` and `returned_payment_fee`. They will always print as raw `{{...}}` text in a generated PDF. Related (found 2026-09-29): 14 FL, AZ, VA and TX clauses put a `[bracket]` instruction right after one of these unresolved variables (e.g. `{{deposit_holding_method}} [choose one: ...]`), which only works because the landlord must edit the clause anyway; once a variable gets a resolver, its adjacent bracket must go, or the bracket will print. The scrub had added two such brackets next to variables that do resolve (NV and TX late fees); they were removed. CA and NV added most of them (owner/manager identity, rent payee, utility provider); Texas adds 12 (`late_fee_daily_amount`, `nsf_fee`, `utility_avg/high/low_bill`, `surrender_notice_days`, `emergency_phone`, `owner_name`/`owner_address`, `management_company_*`, `reconnection_fee`, `tenant_email`, `notice_to_vacate_days`, `electric_late_penalty`). This supersedes the small WY/OH-only version of the issue below. Decide per variable: a real field (e.g. Entity or Lease data), or a switch to the `[bracketed prompt]` convention.
- **No per-state applicability condition on a shared clause (AZ log §13, flag A).** `landscaping-irrigation` and `snow-removal` are tagged AZ for a single family residence only (A.R.S. §33-1324(C)). An apartment needs the separate signed `maintenance-allocation-az` (§33-1324(D)). Until the builder can hide a shared clause per state on a property fact, both show on every AZ lease. A property-type field would also serve `bedbug-obligations-az` and `foreclosure-notice-az`. It is the same shape as CA's TPA-exemption question and the CO for-cause attribute.
- ~~**Gap-discovery backfill pending for 12 states**~~ **Merged 2026-09-28; all 14 states pass.** Original scope (checklist instruction 36): scenario screen for WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL; real-lease comparison for MN, OH, CA, NV, TX, NJ, FL, WY, ND; statute-wide absence searches for NE, MN, OH, CA, NV. Prompts are at `~/Desktop/gap-discovery-backfill/`, and each state's delta CSV comes back to Claude Code to merge.
- **New Jersey adds 10 more layout rules to the M.12 case (NJ log §4)**, including two kinds Texas didn't need: "first clause of the lease" (`conversion-statement-nj`, also in capitals) and "attached exhibit" (`lead-safe-certification-nj`). Also from NJ: the builder's deposit-cap warning must add the pet deposit to the security deposit (1.5x cap, *Reilly v. Weiss*).
- **Texas lease formatting rules can't be enforced (TX log §5, proposed Addendum M.12).** Seventeen Texas rules make a clause void or ineffective unless it is bold or underlined (one is underline-only), under a prescribed heading, or in a separate document; two terms must *not* appear in the lease at all. Today the builder renders bracketed instructions to a human. `habitability-timeline-tx` (REQUIRED) is one of them. The same class as ND's initialing field (M.1) and NV's first-page/font rule; Claude Desktop recommends one `formatting` field over per-state special cases.
- **LegiScan `getSearch` returns at most 50 hits per query (one page), and `checkCitations.js` never pages.** Five CA sections hit the cap on the first run (CCP §1161, Civ. Code §§1950.5, 1940, 54.1, 1632). For a heavily amended section, a new bill that ranks below the top 50 would be missed. This probably affects other states' busiest sections too (MN seeded 960 bill IDs), but that's untested. Fix when needed: request further pages whenever a query returns exactly 50.
- **California surfaced product/schema gaps the lease builder can't express yet (CA log §9):** minimum type size for several notices (five floors); §1632 full-lease translation duty; §1953(b) document-timing (statutory-right modifications void unless the lease was presented before possession); a certificate-of-occupancy date (needed for §1940.5 waterbeds and the §1947.12(d) 15-year exemption); property type/unit count (§1940.4 sign locations, §2079.10a); deposit photo capture (§1950.5(g)); screening-process choice (§1950.6/§1950.1). Also: `tpa-notice-ca` vs `tpa-exemption-notice-ca` is now mutually exclusive, but which one applies is a property fact (is the property TPA-exempt?) the app doesn't store — the landlord picks by hand today, defaulting to the TPA notice. Same shape as the for-cause-eviction attribute; a candidate for a real `Property` field.
- **`parking-vehicle-rules` is deliberately not tagged CA** — its towing authorization has no "as permitted by law" hedge and the Vehicle Code towing rules (believed §22658) were never read. Also noted by CA, not applied: `landlord-disclosure-ks`/`-ne` differ only by the hardcoded state name and could become one `{{state}}` row.

- ~~**The rows shared across multiple states still have their `verification_status`/`effective_from`/`last_checked`/research `notes` living only in `lease-clauses.csv`, not split out into any per-state citations file.**~~ **CLOSED 2026-09-25 — the CSV is now deliberately the canonical copy (see the decisions log); the CO-only rows were restored into it too, and the "trim" follow-up below is dropped.** Deliberate, not an oversight — see the decisions log entry on why a mechanical trim isn't safe for a shared row yet. As of 2026-09-17 every one of the seven verified states (CO, WY, KS, NE, MN, ND, SD) has its own citations file, so this is no longer blocked on any state's citation-extraction pass being incomplete — the trim itself (removing the now-redundant metadata from `lease-clauses.csv`'s shared rows) is a real follow-up task, not yet done. The generator-script blocker this used to depend on (below) is now fixed.
- **None of WY's, KS's, NE's, MN's, ND's, or SD's citation-extraction passes have had a Claude Browser follow-up round the way CO's did — Taylor's explicit call, each time (2026-09-14 for WY, 2026-09-15 for KS, 2026-09-17 for NE, MN, ND, and SD), that this is fine as-is, not queued as follow-up work.** CO's pass surfaced 15 genuine open items (gaps/partials/content issues) needing a domain-expert round to close; WY's pass surfaced none of that kind — its 14 `CONFIRMED_ABSENT` rows are legitimate research conclusions, not unresolved gaps, and the 3 findings this pass turned up (an old citation-history detail in `assistance-animal-accommodation-wy`, a self-corrected mis-citation in `edu-holdover-wy`, a retracted false-positive flag on `default-by-tenant`) were all already resolved in the shipped clause library before this session touched anything. There IS a real evidentiary spread within the 14 `CONFIRMED_ABSENT` rows worth naming honestly rather than calling uniformly clean: most rest on several independent secondary sources agreeing, but `edu-no-right-to-call-police-statute-wy` and `edu-no-statutory-termination-notice-wy` explicitly self-flag as weaker ("practice-level confidence, not primary-source confidence"), and `edu-no-tenant-screening-fairness-act-wy`/`edu-no-ev-charging-right-wy` rest on effectively one source each. None of these read as wrong, and Taylor's call is that this is good enough for now — revisit opportunistically if something surfaces during ordinary use, not as a scheduled primary-source-verification pass the way CO's gaps got. KS's pass surfaced even less: only 2 `PARTIAL` rows (an enacted-but-not-yet-codified 2026 bill, and a deliberately deprioritized pre-1975 farm-tenancy statute block), both accepted as-is — no evidentiary-spread concern like WY's `CONFIRMED_ABSENT` rows, since KS's absence findings weren't the ones left open. NE's pass also surfaced 2 `PARTIAL` rows, both accepted as-is: one sub-finding inside a bundled four-finding absence row that rests on an unread statutory chapter, and a servicemember-termination statute whose scope-defining subsection is referenced in the source text but not actually present in it. MN's pass surfaced only 1 `CONFIRMED_ABSENT` row (EV-charging access — carried forward from the decision log's own finding rather than a fresh statute-by-statute read this session) and 2 `PARTIAL` rows (a confession-of-judgment scope conclusion resting on definitional sections only; a notice-counting rule whose claimed 1891 case authority was never located after two searches) — all accepted as-is. ND's pass surfaced 3 `PARTIAL` rows and, notably, zero `CONFIRMED_ABSENT` rows — every absence finding in ND's own research rests on a full-chapter primary-text read, a meaningfully stronger evidentiary floor than the other five states; the 3 open items (an unread enacted-bill text for a 2025 amendment, an unconfirmed emergency-entry-exception detail, and one row ND's own research explicitly self-flagged as its weakest-sourced claim) were reviewed with Taylor and accepted as-is. SD's pass surfaced zero `PARTIAL` rows too, plus just 2 `CONFIRMED_ABSENT` and a new one-off `NOT_STATUTE` row (an optional clause sourced from a real lease product, not any statute) — despite SD's own underlying research containing the single most self-corrective saga of any state in this project (a criminal-penalty finding that was asserted, withdrawn, re-asserted as an absence, and then that absence also withdrawn, before landing back on the original substance with the right citation this time).
- ~~The CSV→backend generator script needs a fix before its next run~~ **FIXED 2026-09-18/19, during the Ohio sync.** The one-off generator script now backfills `verificationStatus`/`effectiveFrom`/`lastChecked` from `lease-clause-citations-CO.csv` for the 64 CO-only rows, only when the main CSV's own field is blank — confirmed necessary the hard way: this Ohio regeneration was the first run to actually exercise the previously-latent gap, and without the backfill it would have shipped those 64 rows with blank metadata (a real regression from what was previously shipped, since `clauseTemplates.js`/`clauseResearchMetadata.js` hadn't been regenerated since the Sep 13 CO citation trim). Caught and fixed before finalizing, not after. The fix lives in the (uncommitted, one-off) generator script, same as every other one-off generation rule in this project — whoever regenerates next should keep this backfill, and should extend it if any other state's citations file ever performs the same kind of trim CO's did.
- **A property outside the verified states (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ) has a mostly-empty Provided Clauses pool.** Direct consequence of the 2026-08-20/21 `states` semantics change (see decisions log) — a clause only displays for a state once verified for it. All eight currently-covered states have not just been verified once but (for CO, WY, KS, NE) re-audited at higher rigor (see the architecture-review log's Addendum C/H) — every single re-audit found at least one real error that had shipped `VERIFIED`, so treat "verified" as "verified to the process's current standard," not as a closed question. Not currently affecting anyone (real properties in the dev DB are CO), but the first time Taylor adds a property in a ninth state, that property's Lease Builder will look sparse until that state gets its own pass — state #9 not yet chosen.
- ~~`security-deposit-return` (a `REQUIRED` parent clause) ships with deliberately blank `states` — correct today, but a latent trap for state #8.~~ **CLOSED 2026-09-18/19 — fixed at the root, not just for Ohio.** Ohio's own research independently re-derived this exact finding mid-canvass and, working directly with this Claude Code session, the two traced the real mechanism by executing the filter code rather than re-reading it: the original framing here ("blank correctly means displays nowhere") was itself wrong — blank `states` was actually a wildcard matching every specific-state view, the more dangerous direction, since it meant a never-verified generic clause could silently stand in looking exactly as legitimate as a genuinely-verified one. Ohio wrote its own `security-deposit-return-oh` override, closing its own instance the same way all 7 priors did — but Taylor also had the underlying filter code itself fixed (`ClauseLibraryPage.jsx`, `LeaseBuilderSection.jsx`, `leases.routes.js`), so blank `states` on a provided template now only matches "All states" browsing, never a specific-state filter. This permanently closes the M.11 gap for every future state, not just Ohio — a state onboarded without its own override for some `REQUIRED` topic now correctly shows nothing for that topic, rather than a silently-substituted unverified generic. See "What's been built" and the decisions log (the `treatBlankAsUniversal` scoping choice) for the full mechanism.
- ~~All eight states' legal-watch crons stay weekly for now... Ohio has no workflow yet~~ **Ohio's workflow shipped 2026-09-19 — all 8 states now live.** Combined across all 8, weekly runs make roughly 1,330 LegiScan queries/month (332 distinct monitored sections × 4 weeks, Ohio contributing 33), about 4.4% of the 30,000/month free-tier limit — comfortably safe. The original concern (recorded when only Colorado was live) was about scaling toward all 50 states + territories, where weekly cadence would eventually burn through the quota much faster; monthly would still fit legislative reality (most state legislatures meet once or twice a year) if that becomes necessary. Revisit only if jurisdiction coverage grows substantially beyond these 8 states, not before.
- ~~Two live, unresolved compliance conflicts shipped in the clause library~~ **RESOLVED 2026-09-19.** `pet-policy`/`pet-insurance-requirement`'s assistance-animal fee conflict is closed by the new `assistance-animal-accommodation-oh` clause (see "What's been built") — Taylor confirmed the right fix was a carve-out, matching the existing CO/WY/NE/MN/ND/SD pattern (the carve-out lives in a separate companion clause, not baked into `pet-policy`'s own `bodyText`), not a rewrite of the shared pet clauses. **Standing caveat that applies to every state, not just Ohio, and isn't itself a bug**: `assistance-animal-accommodation-<state>` and `pet-policy` are two independent clauses with no system-level link between them — a landlord who attaches `pet-policy` to an Ohio (or any state's) lease without also attaching the accommodation clause still gets no carve-out, since nothing currently enforces "these two travel together." This is the same shape as Known Issue M.9 (a `REQUIRED` clause can be silently left off a lease) — worth remembering if that gap is ever actually built, since `assistance-animal-accommodation` is exactly the kind of `REQUIRED` clause that finding would need to catch. `application-of-payments`'s inert "statutory right to cure nonpayment" sentence (also flagged here originally) is fixed too — see the 2026-09-19 entries in What's been built/Decisions log.
- ~~Two small delivered-content gaps in `lease-clauses.csv` itself~~ **FIXED 2026-09-19.** `landlords-access` and `default-by-tenant-ks-ne` both now carry a delimited "OH:" note in `lease-clauses.csv`'s `notes` column, matching the other 8 extended rows — appended the same citations already verified in `lease-clause-citations-OH.csv` (§5321.04(A)(8)/(B)/§5321.05(B) for the first; §5321.13(C) for the second), not new research. `clauseResearchMetadata.js` regenerated to pick up the updated notes; 436 backend tests still passing.
- **The legal-watch tripwire can only detect changes to statutes it already cites — it has no mechanism to discover a genuinely new statute on a topic the clause library doesn't cover at all.** `checkCitations.js` extracts section numbers already sitting in a state's own `lease-clause-citations-<STATE>.csv` and asks LegiScan whether *those specific sections* have been touched by an enacted bill — it never asks "what new landlord-tenant legislation exists that we don't have a citation for." Two concrete consequences, present since Colorado's original Phase 1 POC and not new to the 6-state Phase 2 rollout: (1) a brand-new law on a topic not currently in the library (e.g. a state adding a bed-bug-disclosure statute where none existed) would ship silently unnoticed, since there's no existing citation to check for a change to; (2) every `CONFIRMED_ABSENT` row is invisible to the tripwire for the identical reason — if a state later enacts something this project already researched and confirmed absent (e.g. WY finally passing an entry-notice statute), nothing will flag it, because a confirmed-absence row has no section number to monitor. What the tripwire DOES catch: an amendment to an already-cited section, even a substantial one adding a whole new subsection — incremental growth of a tracked statute is covered; a wholly new statute or chapter is not. The only way to close this gap would be a genuinely different mechanism — a keyword/topic-based LegiScan search across a session's bills (e.g. "landlord tenant," "security deposit") rather than a section-number search — which would need real relevance-filtering and per-state topic curation to avoid drowning in noise, and isn't built. Taylor's explicit call (2026-09-18): continue expanding state coverage (state #8 and beyond) rather than build this now, and circle back to it later — reasoned that this gap is orthogonal to which states are covered (it affects all live states equally, and doesn't get worse as more states are added), so there's no scale-driven urgency to fix it before adding more states. **New, sharper evidence from Ohio's own research (2026-09-18):** Ohio moves landlord-tenant and fair-housing law through **budget/appropriations bills** — three separate general assemblies' HB 96/HB 33/HB 49 each amended landlord-tenant-relevant sections through an operating budget act, not a dedicated landlord-tenant bill — which a watch filtering on bill title, subject, or committee would structurally miss (the current mechanism doesn't filter that way, so it isn't actually broken by this yet, but Claude Desktop's own flag is worth taking seriously): untested whether the same pattern already exists undetected in the other seven states' legislative history. Worth checking before Ohio's own workflow is built, not just filed away.
- **Real application-level gaps surfaced by the legal research, not yet scoped into work — see `lease-clause-decision-log-architecture-review.md`'s Addendum M for the full list.** Most concrete: `lease-notice-initial-requirement-nd` (a North Dakota clause requiring the tenant to physically initial next to certain notice-period language, or the term reverts to one calendar month) has no lease-builder mechanism to render an initialing field adjacent to specific clause text — per M.1, "a generated ND lease currently ships broken" on this point, with no signal to the landlord that the term silently failed. Related: M.2 (conditional clause inclusion keyed to another clause's own field value — the same ND requirement only applies above a one-month notice period), M.3 (security-deposit interest calculation/disclosure, ND + MN), M.4 (deposit-return deadlines that are a computed trigger, not a fixed offset, for ND's domestic-violence termination case), and M.6 (North Dakota's unclaimed-deposit escheat filing calendar — an annual, date-driven compliance obligation with real per-day penalties, nothing like it exists in the product). M.9 also restates a standing worry (first raised alongside the CO pass): the user-selectable "default clauses" feature may need to stop being able to default away a `REQUIRED` clause once/if enforcement is automated — not urgent, but the ND findings (a `REQUIRED` clause found missing entirely from two states' leases) are cited as the strongest evidence yet that this matters.
- ~~CO and WY "accretion debt" in the named-topic checklist~~ **CLOSED 2026-09-26, Taylor's call: not a task.** Filling those cells would be a re-audit of completed states, and none is planned (see the decisions log).
- **Whether Wyoming and Nebraska's total absence of a fire/casualty clause is a verified absence or an unbuilt row can't be told from the CSV alone.** Ohio's research found that 5 of 7 prior states (CO, KS, MN, ND, SD) carry a fire/casualty clause of some kind, but WY and NE carry none — and flagged that this pattern (a topic asserted covered somewhere that turns out to have no actual CSV row, e.g. Minnesota's and North Dakota's own domestic-violence-clause gaps) has already happened twice in this project. Not scheduled: no completed state is being revisited. Look at it only if it comes up in the course of other work.
- **A pre-existing 12-row "`REQUIRED` + blank `verification_status`" family predates every state pass in this project and is dormant, known-bad inventory, not an unknown.** All `is_active: FALSE`, tagged to non-project states nobody has run a real pass on: `security-deposit-interest-ct`, `-md`, `-ma`, `-nj` (four more copies of the exact clause type `security-deposit-interest-oh` turned out to have 5 real defects in before its 2026-09-18 rewrite — same provenance, same likely failure shape: wrong trigger, wrong base, unstated rate, missing cadence), plus `bed-bug-disclosure-ca`/`-me`, `mold-disclosure-wa`, `flood-disclosure-ca`/`-tx`/`-fl`, `sex-offender-registry-notice-ca`. Nothing has shipped from this set, so there's no live bug — but treat it as suspect inventory, not neutral, whenever any of CT/MD/MA/NJ/CA/ME/WA/TX/FL is ever picked up as a future state.
- **Two `VERIFIED`, `is_active: FALSE` rows are switched off with no recorded reason found yet — `late-fee-limit-mn` and `dv-safe-homes-proactive-wy`.** Surfaced by Ohio's own library-integrity pass while investigating the `security-deposit-return` finding. The WY one is a known, deliberate case (the unselected "proactive termination right" posture variant — see the Aug 2026 decisions log entry on shipping one curated answer per topic). `late-fee-limit-mn`'s reason for being switched off hasn't been tracked down. Not scheduled; no completed state is being revisited.
- **`holdover-oh`'s `{{holdover_daily_rate}}` (and the pre-existing `nonrefundable-deposit-notice-wy`'s `{{nonrefundable_deposit_amount}}`) are `{{variable}}`-styled placeholders with no backing field in `clauseVariables.js`** — they'll always render as the raw, unresolved placeholder text in a generated lease PDF, same as any genuinely unset variable, but unlike every other `{{variable}}` in the library they can never resolve because nothing populates them. Minor, low-severity, and not new to Ohio (the WY case already existed) — but worth deciding at some point whether these should become real `Lease` fields, or be rewritten to the established `[bracketed prompt]` convention used elsewhere for "no structured field, landlord fills this in by hand" content, since mixing the two conventions makes `{{}}` no longer reliably mean "this auto-resolves from real data."

## Addendum M — Product & build backlog arising from the clause library (2026-09-06)

Findings that surfaced during legal verification but require **application** changes rather than clause changes. Previously scattered across individual row `notes` fields where engineering work would never encounter them. This addendum is the standing home for them — new items get appended here, not to a new file.

### M.1 Initialling-field mechanism — **a clause currently ships broken**

**Driver:** N.D.C.C. § 47-16-15(4). Any agreement requiring a residential tenant to give termination notice **exceeding one month from the end of a month** must state the requirement **and provide space for the lessee to initial next to it**. Not initialled at signing → the extended period is unenforceable and reverts to one calendar month.

**What breaks:** a generated ND lease stating a 60-day tenant notice requirement, without an adjacent initial box, **silently loses that term**. The landlord believes they have 60 days; they have 30. Nothing in the document or the app signals the failure.

**Needed:** a field type that renders an initialling space, plus placement control so it sits *adjacent to* specific clause text rather than at the end of the document.

**Status:** `lease-notice-initial-requirement-nd` is committed as `CONDITIONAL` and is the library's first **layout/placement** requirement. It cannot function as intended without this. **Urgency: high.**

### M.2 Conditional clause inclusion keyed to another clause's field value

Same section. The initialling requirement applies **only when** the tenant-side notice period exceeds one month — an applicability condition turning on a value entered in a *different* clause. The builder has no mechanism for this; today it is a manual judgment the landlord must make correctly and unprompted. **Urgency: high** — the other half of M.1.

This is the first concrete instance of the conditional/applicability rules §3 of this review anticipated but found no evidence for. See M.10.

### M.3 Security deposit interest calculation and disclosure

**Driver:** N.D.C.C. § 47-16-07.1(1) — deposit must be held in a federally insured **interest-bearing** account, interest paid at termination where occupancy was nine months or longer. Minnesota carries an equivalent requirement.

**What breaks:** Steinoak cannot calculate, track or disclose a deposit-interest figure anywhere. The clause promises interest the product cannot compute. **Urgency: medium-high.** Two states, `REQUIRED` in both — build once, not per state.

### M.4 Deposit return timing is a computed trigger, not a fixed offset

**Driver:** N.D.C.C. § 47-16-17.1(8) **replaces the triggering event** for the 30-day return in a DV termination — sole victim tenant: first day of the month following vacatur; co-tenants still bound: **expiration of the lease**, potentially many months later.

**What breaks:** any deposit-deadline reminder keyed to "termination + 30 days" fires wrong in these cases. The *document* was corrected at v121 to a neutral formulation; the *automation* is still wrong. **Urgency: medium.**

### M.5 ACH network compliance on fee collection

**Driver:** N.D.C.C. § 6-08-16(2)(a) — a holder using the **automated clearinghouse network** to collect returned-instrument fees "shall comply with the network's rules and requirements." Forward-looking: if Steinoak ever auto-collects NSF fees via ACH, the feature inherits Nacha obligations. **Urgency: low now, blocking later** — record before the feature is scoped.

### M.6 Unclaimed deposit escheat — a compliance calendar, not a clause

**Driver:** N.D.C.C. ch. 47-30.2. A deposit unclaimed more than one year makes the landlord a statutory **holder**: notice by first-class mail **no more than 120 days before filing** where value is $25+; **electronic filing before November 1** covering the twelve months to July 1; payment on filing; **ten-year** retention. Penalties: 1% interest per 30-day period, $200/day to a $5,000 cap; willful evasion $1,000/day to $25,000 **plus 25%**.

**What breaks:** an annual, date-driven obligation with day-rate penalties and no prompt anywhere in the product. **Urgency: medium.**

### M.7 Dormancy charge — decision needed, not a build task

**Driver:** N.D.C.C. § 47-30.2-31 permits deducting a **dormancy charge** before remitting an unclaimed deposit, but only where (a) an enforceable **written contract** authorises it **and** (b) the holder **regularly imposes it and regularly does not reverse it**.

Limb (a) is a drafting hook. **Limb (b) cannot be satisfied by any document** — a landlord who is occasionally lenient destroys their own clause. Same shape as M.8. **Two instances now make this a category**, not a one-off: does Steinoak want to offer clauses whose validity it cannot protect, and if so does the legal tracker need a "consistency of practice" concept?

### M.8 After-the-fact reservation of rights (pre-existing, reinforced)

Nebraska § 76-1433 — waiver-avoidance on accepting late rent requires a **post-breach** agreement; no standing lease clause satisfies it. Already on the backlog for the legal tracker. M.7 is a second instance of the same category, strengthening the case for the general mechanism over a one-off.

### M.9 "Default clauses" feature — prior flag, now stronger

§4 of this review flagged that the user-selectable "default clauses" feature may become obsolete once `REQUIRED`/`PROHIBITED` enforcement is automated, since a landlord should not be able to default away something legally required.

**The ND re-audit strengthens this.** ND alone carries multiple `REQUIRED` `LEASE_CLAUSE` rows — including `lead-based-paint`, found **missing entirely** from ND and SD leases with $22,263-per-violation exposure. A landlord able to omit `REQUIRED` clauses *by preference* is the same failure mode as the library omitting them *by defect*.

### M.10 Cross-cutting — the deferred rules engine now has evidence

M.1, M.2 and M.4 are the same underlying gap: **the builder treats clauses as independent text blocks, while several legal requirements are relational** — applicability turning on another clause's value, on a computed date, or on physical placement within the document.

§3 of this review recommended deferring the compositional rules engine, on the reasoning that "no evidence yet exists that the library needs this, since findings so far have mostly been flat state-level rules." **That reasoning is now superseded.** There are four concrete instances, one of which ships a broken clause today. The deferral was correct when made and should be revisited.

### M.11 `REQUIRED` parent clauses with blank `states` silently omit on new-state onboarding

**Found:** `security-deposit-return` is `REQUIRED`, `is_active TRUE`, and carries a **blank `states` field**. This is correct today — all nine jurisdictions using it (NY;HI, WV, CO, WY, KS, NE, MN, ND, SD) have their own override superseding it, and `states` was progressively emptied as each override was written, to clear display collisions. Blank correctly means "displays nowhere."

**The latent defect:** because `states` is the single source of truth for display, **any state added to the library in future without its own deposit-return override receives no deposit-return clause at all.** The parent cannot act as a fallback — it has no tags. The omission is silent: no collision, no dangling reference, no failed assertion. Nothing surfaces it.

**This is the project's recurring failure shape, pre-positioned.** It is the same class as ND's 43 untagged generics and SD's 46: an *omission* rather than a misstatement, invisible to every integrity check the library currently runs. Here it is latent rather than live, which is the only reason it hasn't caused harm yet.

**Needed, in order of cost:** (1) an onboarding assertion — for each `REQUIRED` parent, every tagged state in the library must resolve to either the parent or exactly one override; (2) a decision on whether fully-overridden parents should remain `REQUIRED`/active or be marked as templates with a distinct status, so "blank because superseded everywhere" is distinguishable in the data from "blank by mistake."

**Note on why this took until now to surface:** the standing blank-`states` assertion is written to catch *newly written* rows (the L.3 lesson, after five ND rows were written with blank tags). A pre-existing blank parent passes that check by construction. **Urgency: medium — latent, but it fires the moment state #8 is onboarded.**

### M.13 Statutory limit validation in the builder — needed before the three-bucket scrub's cap removals are safe (2026-09-29)

**Found:** the three-bucket scrub (checklist instruction 66) moves clauses that state a statutory limit to the tenant (deposit caps in CA, NV, AZ, GA, NC and AL; `late-fee-limit-co`; similar fee and notice limits) into education rows. Those clauses quietly worked as a safety net: if a landlord typed an amount over the limit, the lease's own "will not exceed" sentence arguably capped it. Without the clause, nothing stops the builder from generating a lease with an unlawful figure.

**Needed:** when a landlord enters a figure a state limits, the builder checks it against that state's limit and warns before the lease is generated. First set: security deposit amount (including pet deposits where the state counts them toward the cap), late fee amount and grace period, returned-payment fee, and notice periods the landlord chooses where the statute sets a floor. The limits already live in the education rows (`edu-security-deposit-cap-*` and the rows the scrub creates), so they need structured values the builder can read, not new research.

**Related flag:** Colorado's source-of-income statement (C.R.S. § 38-12-801(2.5)) is required unless the landlord owns five or fewer single-family homes and five or fewer total units. Once the app stores units owned (the attribute Tennessee and Virginia also need), warn a non-exempt Colorado landlord whose lease leaves `source-of-income-statement-co` off.

**Urgency:** required before the lease feature goes live, and before the scrub's cap removals ship to real users.


### M.14 Unresolved `{{variables}}` — 98 in shipped lease clauses (2026-09-29)

**Found:** 98 `{{variable}}` placeholders in active lease clauses have no resolver in `backend/src/lib/clauseVariables.js`, which resolves only 16 (rent, deposit, pet deposit and rent, late fee and grace days, renewal cap, insurance minimum, start and end dates, tenant and occupant names, appliance list, property address, landlord name, state). An unresolved placeholder prints as raw `{{...}}` text in a generated lease. This matters more in Arizona, where a written lease with a blank left in it is the landlord's material noncompliance (A.R.S. § 33-1322(E)). The list is generated from `lease-clauses.csv`; regenerate it rather than editing by hand.

**Needed, per variable:** a resolver backed by real data (an Entity, Property or Lease field), or a switch to the `[bracketed prompt]` convention for true one-off fill-ins. Before building, rename the near-miss and duplicate names below; that alone connects two to existing data.

**Related trap:** 14 FL, AZ, VA and TX clauses put a `[bracket]` instruction right after one of these variables (e.g. `{{deposit_holding_method}} [choose one: ...]`). That works only because the landlord must edit the clause anyway. When a variable gets a resolver, remove its adjacent bracket in the same change, or the bracket will print.

**Near-miss names — probably bugs: data already exists under the resolver's name** (2):

| Variable | States | Note |
|---|---|---|
| `{{late_fee}}` | CA | use `late_fee_amount` — **fixed 2026-09-29** |
| `{{tenant_name}}` | FL | use `tenant_names` — **fixed 2026-09-29** (with co-tenants it lists every name) |

**Duplicate names for the same value — pick one** (8):

| Variable | States | Note |
|---|---|---|
| `{{manager_address}}` | NV | same as `manager_street_address` |
| `{{manager_street_address}}` | CA | same as `manager_address` |
| `{{nsf_fee}}` | CA, TX, VA | same as `returned_payment_fee` |
| `{{owner_agent_address}}` | NV | same as `owner_agent_street_address` |
| `{{owner_agent_street_address}}` | CA | same as `owner_agent_address` |
| `{{returned_payment_fee}}` | NJ | same as `nsf_fee` |
| `{{utility_admin_fee}}` | AZ, NC | same as `utility_admin_fees` |
| `{{utility_admin_fees}}` | VA | same as `utility_admin_fee` |

**Owner, manager, agent and payee identity — candidates for Entity (or a manager/agent record)** (26):

| Variable | States | Note |
|---|---|---|
| `{{authorized_person_name_address_phone}}` | AZ, NC, VA |  |
| `{{deposit_bank_address}}` | GA, NC, PA |  |
| `{{deposit_bank_name}}` | GA, NC, PA |  |
| `{{deposit_bond_insurer}}` | NC |  |
| `{{deposit_holding_method}}` | FL |  |
| `{{deposit_interest_statement}}` | FL |  |
| `{{deposit_location_statement}}` | FL |  |
| `{{emergency_phone}}` | NV, TX |  |
| `{{landlord_email}}` | FL |  |
| `{{landlord_notice_address}}` | FL |  |
| `{{landlord_notice_name}}` | FL |  |
| `{{management_company_name}}` | TX |  |
| `{{management_company_street_address}}` | TX |  |
| `{{manager_name}}` | CA, NV |  |
| `{{manager_phone}}` | CA |  |
| `{{owner_address}}` | NV, TX |  |
| `{{owner_agent_name}}` | CA, NV |  |
| `{{owner_agent_phone}}` | CA |  |
| `{{owner_name}}` | NV, TX |  |
| `{{rent_payee_address}}` | CA |  |
| `{{rent_payee_name}}` | CA |  |
| `{{rent_payee_phone}}` | CA |  |
| `{{rent_payment_days_hours}}` | CA |  |
| `{{rent_payment_forms}}` | CA |  |
| `{{va_resident_agent_name}}` | VA |  |
| `{{va_resident_agent_office_address}}` | VA |  |

**Property facts — candidates for Property** (9):

| Variable | States | Note |
|---|---|---|
| `{{block}}` | NJ |  |
| `{{county}}` | GA, NJ |  |
| `{{locality}}` | VA |  |
| `{{lot}}` | NJ |  |
| `{{municipality}}` | NJ |  |
| `{{myhazards_url}}` | CA |  |
| `{{rent_control_exemption_end_date}}` | NJ |  |
| `{{utility_provider_name}}` | NV |  |
| `{{utility_provider_phone}}` | NV |  |

**Lease terms the landlord chooses — candidates for Lease fields (several recur across states)** (31):

| Variable | States | Note |
|---|---|---|
| `{{advance_rent}}` | FL |  |
| `{{association_approval_deadline}}` | FL |  |
| `{{association_fee_payer}}` | FL |  |
| `{{bed_bug_reporting_procedure}}` | CA |  |
| `{{damage_insurance_admin_fee}}` | VA |  |
| `{{early_termination_fee}}` | FL |  |
| `{{early_termination_notice_days}}` | FL |  |
| `{{electric_late_penalty}}` | TX |  |
| `{{end_of_term_liquidated_damages}}` | FL |  |
| `{{end_of_term_notice_days}}` | FL |  |
| `{{escalation_notice_days}}` | GA |  |
| `{{expedited_deposit_fee}}` | VA |  |
| `{{flotation_insurance_amount}}` | FL |  |
| `{{holdover_daily_rate}}` | AL, GA, NC, OH, PA, SC, TN, VA |  |
| `{{judgment_interest_rate}}` | CA |  |
| `{{late_fee_daily_amount}}` | TX |  |
| `{{m2m_notice_days}}` | PA |  |
| `{{maintenance_consideration}}` | AZ |  |
| `{{meter_conservation_charge_details}}` | SC |  |
| `{{nonrefundable_deposit_amount}}` | WY |  |
| `{{nonrefundable_fees_and_purposes}}` | AZ |  |
| `{{nonrefundable_pet_fee}}` | NC |  |
| `{{notice_to_quit_days}}` | PA |  |
| `{{notice_to_vacate_days}}` | NC, TX |  |
| `{{reconnection_fee}}` | TX |  |
| `{{renewal_notice_days}}` | VA |  |
| `{{separately_charged_utilities}}` | AZ, NC, VA |  |
| `{{surrender_notice_days}}` | TX |  |
| `{{tenant_email}}` | FL, TX |  |
| `{{tenant_maintained_items}}` | AZ, FL |  |
| `{{utility_billing_method}}` | AZ, NC, VA |  |

**One-off form fields — fee in lieu of deposit (FL), water submetering (CA, TX), foreclosure notice (AZ): candidates for the [bracket] convention or a form step** (22):

| Variable | States | Note |
|---|---|---|
| `{{deposit_installment_amount}}` | FL |  |
| `{{fee_in_lieu_amount}}` | FL |  |
| `{{fee_in_lieu_default_days}}` | FL |  |
| `{{fee_in_lieu_method}}` | FL |  |
| `{{fee_in_lieu_option_charges}}` | FL |  |
| `{{fee_in_lieu_refundable}}` | FL |  |
| `{{fee_in_lieu_schedule}}` | FL |  |
| `{{foreclosure_contact}}` | AZ |  |
| `{{foreclosure_sale_time_date_place}}` | AZ |  |
| `{{utility_avg_bill}}` | TX |  |
| `{{utility_high_bill}}` | TX |  |
| `{{utility_low_bill}}` | TX |  |
| `{{water_bill_due_dates}}` | CA |  |
| `{{water_bill_estimate}}` | CA |  |
| `{{water_bill_estimate_basis}}` | CA |  |
| `{{water_bill_payment_procedure}}` | CA |  |
| `{{water_billing_address}}` | CA |  |
| `{{water_billing_email}}` | CA |  |
| `{{water_billing_phone}}` | CA |  |
| `{{water_repair_address}}` | CA |  |
| `{{water_repair_email}}` | CA |  |
| `{{water_repair_phone}}` | CA |  |

**Urgency:** required before the lease feature goes live.
