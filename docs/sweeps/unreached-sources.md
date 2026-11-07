# Unreached-sources pass: GA, MT, TN, AR, MS, VI, AS

Run 2026-11-06 in the Claude desktop app's built-in browser. **Partial run:** Montana and American Samoa were read; every LexisNexis-hosted code (GA, TN, AR, MS, VI) stopped at a CAPTCHA before the first full section opened, so those 15 rows are NOT REACHED and nothing below changes them. Rows with HOLDS or NOT REACHED carry no edit blocks.

### `edu-nonresident-landlord-broker-ga`

Verdict: NOT REACHED
Reason: The Georgia Code search on advance.lexis.com (linked from legis.ga.gov as "Georgia Code") loaded, but opening O.C.G.A. § 14-11-711 redirected to a CAPTCHA page ("Captcha Validation"), which I can't pass. The results list showed a truncated snippet of § 14-11-711(a) barring an unauthorized foreign LLC from maintaining an action; that is a lead only, not a finding, because the whole section and its currency line were not read.

### `edu-local-regulation-mt`

Verdict: FIX
Reason: Nothing the row says is contradicted, but it leaves out two state filings that decide whether a landlord can sue: an out-of-state LLC or corporation must register before transacting business and cannot maintain a court case until it does, and a landlord renting under an assumed name must register the name and cannot sue under it until it does. Note for Claude Code: the foreign-corporation sections the prompt pointed to in Title 35, ch. 1, part 10 are all marked "Repealed" or renumbered; the current rules are in Title 35, ch. 14 (Montana Business Corporation Act). Montana's registered-agent act has no rule treating an unregistered company as having appointed a state official for service (Mont. Code Ann. § 35-7-113).

old_str:
```
Montana has no statewide landlord registration or rental licensing.
```
new_str:
```
Montana has no statewide landlord registration or rental licensing. Two state filings still matter if you ever need to evict. An out-of-state limited liability company or corporation may not transact business in Montana until it registers with the Secretary of State, and until it does it may not maintain an eviction or other court case, though its contracts stay valid and it may defend a case; an unregistered LLC also owes a civil penalty of $5 a day, up to $1,000 a year (Mont. Code Ann. §§ 35-8-1001, 35-8-1002, 35-14-1502). The lists of activities that are not doing business do not include owning rental property, so register before you need to file (Mont. Code Ann. §§ 35-8-1001(2), 35-14-1505(1)). And if you rent under any name other than your own full legal name, you must register that assumed business name with the Secretary of State, and you may not sue under that name until you do (Mont. Code Ann. §§ 30-13-201, 30-13-203, 30-13-215).
```

Quotes:
- Mont. Code Ann. § 35-8-1001(1): 'A foreign limited liability company may not transact business in this state until it obtains a certificate of authority from the secretary of state.' — https://mca.legmt.gov/bills/mca/title_0350/chapter_0080/part_0100/section_0010/0350-0080-0100-0010.html — read 2026-11-06 — Montana Code Annotated 2025
- Mont. Code Ann. § 35-8-1001(2)(i): 'owning real or personal property that is acquired incident to activities described in subsection (2)(h) if the property is disposed of within 5 years after the date of acquisition, does not produce income, or is not used in the performance of a function of the limited liability company;' — same URL — read 2026-11-06 — Montana Code Annotated 2025
- Mont. Code Ann. § 35-8-1002(1): 'A foreign limited liability company transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority.' — https://mca.legmt.gov/bills/mca/title_0350/chapter_0080/part_0100/section_0020/0350-0080-0100-0020.html — read 2026-11-06 — Montana Code Annotated 2025
- Mont. Code Ann. § 35-8-1002(4): 'A foreign limited liability company is liable for a civil penalty of $5 for each day, but not to exceed a total of $1,000 for each year, that it transacts business in this state without a certificate of authority.' — same URL — read 2026-11-06 — Montana Code Annotated 2025
- Mont. Code Ann. § 35-8-1002(5): 'the failure of a foreign limited liability company to obtain a certificate of authority does not impair the validity of its acts or prevent it from defending any proceeding in this state.' — same URL — read 2026-11-06 — Montana Code Annotated 2025
- Mont. Code Ann. § 35-14-1502(1)-(3): 'A foreign corporation may not do business in this state until it registers with the secretary of state under this part.' / 'A foreign corporation doing business in this state may not maintain a proceeding in any court of this state until it is registered to do business in this state.' / 'the failure of a foreign corporation to register to do business in this state does not impair the validity of a contract or act of the foreign corporation or preclude it from defending a proceeding in this state.' — https://mca.legmt.gov/bills/mca/title_0350/chapter_0140/part_0150/section_0020/0350-0140-0150-0020.html — read 2026-11-06 — Montana Code Annotated 2025
- Mont. Code Ann. § 35-14-1505(1)(i): 'owning real or personal property that is acquired incident to activities described in subsection (1)(h) if the property is disposed of within 5 years after the date of acquisition, does not produce income, or is not used in the performance of a corporate function;' — https://mca.legmt.gov/bills/mca/title_0350/chapter_0140/part_0150/section_0050/0350-0140-0150-0050.html — read 2026-11-06 — Montana Code Annotated 2025
- Mont. Code Ann. § 30-13-201(1): '"Assumed business name" means any business name other than the full, true, and correct name of a person.' — https://mca.legmt.gov/bills/mca/title_0300/chapter_0130/part_0020/section_0010/0300-0130-0020-0010.html — read 2026-11-06 — Montana Code Annotated 2025
- Mont. Code Ann. § 30-13-203: 'A person transacting business in this state under an assumed business name shall register with the secretary of state' — https://mca.legmt.gov/bills/mca/title_0300/chapter_0130/part_0020/section_0030/0300-0130-0020-0030.html — read 2026-11-06 — Montana Code Annotated 2025
- Mont. Code Ann. § 30-13-215: 'No person or persons conducting or transacting business in this state without an effective certificate of registration of an assumed business name or having any interest therein may maintain any suit or action in any of the courts of this state under such name.' — https://mca.legmt.gov/bills/mca/title_0300/chapter_0130/part_0020/section_0150/0300-0130-0020-0150.html — read 2026-11-06 — Montana Code Annotated 2025
- Mont. Code Ann. § 35-7-113(2): 'If an entity that previously filed a registered agent filing with the secretary of state no longer has a registered agent or if its registered agent cannot with reasonable diligence be served, the entity may be served in accordance with any applicable judicial rules and procedures.' — https://mca.legmt.gov/bills/mca/title_0350/chapter_0070/part_0010/section_0130/0350-0070-0010-0130.html — read 2026-11-06 — Montana Code Annotated 2025

### `edu-landlord-registration-davidson-tn`

Verdict: NOT REACHED
Reason: Tennessee Code is on advance.lexis.com, which put up a CAPTCHA before opening any full section this session; not attempted further.

### `edu-child-abuse-investigation-cooperation-tn`

Verdict: NOT REACHED
Reason: Same LexisNexis CAPTCHA; Tenn. Code Ann. §§ 37-1-403, 37-1-605 and 37-1-412 were not read, so the universal-reporter question for this row is still open.

### `edu-law-enforcement-cooperation-ar`

Verdict: NOT REACHED
Reason: Arkansas Code is on advance.lexis.com behind the same CAPTCHA; §§ 12-12-315 and 12-18-402 not read.

### `edu-no-nonresident-owner-agent-ar`

Verdict: NOT REACHED
Reason: Same LexisNexis CAPTCHA; § 4-27-1502, Title 4 ch. 38 foreign-LLC sections and § 4-70-201 and following not read.

### `edu-no-landlord-registration-ar`

Verdict: NOT REACHED
Reason: Same LexisNexis CAPTCHA.

### `edu-confirmed-absences-outside-title-ar`

Verdict: NOT REACHED
Reason: Same LexisNexis CAPTCHA.

### `edu-no-nonresident-owner-agent-ms`

Verdict: NOT REACHED
Reason: Mississippi Code is on advance.lexis.com behind the same CAPTCHA; § 79-4-15.02 and § 79-29-1001 and following not read, and no assumed-name search was run.

### `edu-no-landlord-registration-ms`

Verdict: NOT REACHED
Reason: Same LexisNexis CAPTCHA.

### `edu-confirmed-absences-outside-title-ms`

Verdict: NOT REACHED
Reason: Same LexisNexis CAPTCHA.

### `edu-confirmed-absences-outside-title-vi`

Verdict: NOT REACHED
Reason: Virgin Islands Code is on advance.lexis.com behind the same CAPTCHA; 13 V.I.C., 11 V.I.C. and 5 V.I.C. sections not read.

### `edu-no-nonresident-owner-agent-vi`

Verdict: NOT REACHED
Reason: Same LexisNexis CAPTCHA.

### `edu-law-enforcement-cooperation-vi`

Verdict: NOT REACHED
Reason: Same LexisNexis CAPTCHA; the any-person reporting duties (child abuse, elder abuse, deaths) are still open.

### `edu-landlord-registration-vi`

Verdict: NOT REACHED
Reason: Same LexisNexis CAPTCHA.

### `edu-nonresident-owner-agent-as`

Verdict: NOT REACHED
Reason: The LLC Act (A.S.C.A. ch. 30.06) could not be read: llc.as.gov failed to load on two tries, and asbar.org's "Code Annotated by Title and Chapter" lists only chapters 30.01, 30.02, 30.03 and 30.05 under Title 30 and its site search found no ch. 30.06 section. The row's foreign-corporation statements were checked against the whole of ch. 30.03 on asbar.org and hold as written, including that no section in ch. 30.03 bars an unpermitted corporation from suing.

Quotes:
- A.S.C.A. § 30.0302(6): 'a certified copy of the resolution of the Board of Directors of the corporation giving the name and address in American Samoa of a resident agent on whom process directed to such corporation may be served.' — https://asbar.org/code-annotated/30-0302-application-contents/ — read 2026-11-06 — no currency line printed; History: 1962, PL 7-20: 1968, PL 10-64
- A.S.C.A. § 30.0305: 'No foreign corporation may transact any business in American Samoa without first procuring a permit from the Governor to do so.' — https://asbar.org/code-annotated/30-0305-permit-required/ — read 2026-11-06 — no currency line printed; History: 1962, PL 7-20; 1968, PL 10-64
- A.S.C.A. § 30.0310: 'If the agent required by paragraph (6) of 30.0302 cannot be found within American Samoa, service of process may be made upon the corporation through the Treasurer of American Samoa' — https://asbar.org/code-annotated/30-0310-service-of-process/ — read 2026-11-06 — no currency line printed; History: 1962, PL 7-20
- A.S.C.A. § 30.0314(a)-(b): 'the sum of $100 to be recovered by suit in any court having jurisdiction.' / 'Any agent, officer, or employee who transacts any business for such foreign corporation knowing that it has no valid permit, as required by this section, shall be guilty of a class C misdemeanor' — https://asbar.org/code-annotated/30-0314-violation-of-chapter-penalty/ — read 2026-11-06 — no currency line printed; History: 1962, PL 7-20, amd 1980, PL 16-90 § 40

### `edu-confirmed-absences-outside-title-as`

Verdict: NOT REACHED
Reason: The row's open question (whether an unregistered or foreign LLC can win a possession case) turns on A.S.C.A. ch. 30.06, which could not be read (see the row above). Nothing read in ch. 30.03 contradicts this row.

**Not reached:**
- LexisNexis (advance.lexis.com), all five codes: opening the first full section (O.C.G.A. § 14-11-711) redirected to a "Captcha Validation" page; I don't solve CAPTCHAs. Taylor was asked to complete it in the browser pane; it was still showing at the end of the run. Every section listed for GA, TN, AR, MS and VI is unread.
- llc.as.gov: navigation failed on https and http; not tried a third time.
- A.S.C.A. ch. 30.06 (LLC Act): not on asbar.org's Code Annotated by Title and Chapter; asbar.org's "Updated Annotated Code by Title (as of August 2021)" page shows only raw iframe markup, no code.

**Summary:**
- 2 of 17 rows reached in part or whole; 15 are blocked by one LexisNexis CAPTCHA.
- `edu-local-regulation-mt`: FIX, adding foreign-entity registration, the suit bar and the assumed-name suit bar.
- Montana's foreign-corporation rules moved from Title 35 ch. 1 (repealed) to ch. 14; future cites should use §§ 35-14-1502, 35-14-1505.
- American Samoa ch. 30.03 citations in `edu-nonresident-owner-agent-as` hold; ch. 30.06 (LLC) is still unread.
- Once the CAPTCHA is passed in the desktop browser, the remaining 15 rows can be read in one run.
