# Unreached-sources pass, rerun: GA, MT, TN, AR, MS, VI, AS

Run 2026-11-06 in the Claude desktop app's built-in browser, after Taylor cleared the LexisNexis CAPTCHA. Lexis document URLs are per-session and carry a redacted config key, so each Lexis quote gives the public entry URL the state links to and the search used; every section was opened and read in full on its document page.

### `edu-nonresident-landlord-broker-ga`

Verdict: FIX
Reason: Nothing read contradicts the row, but it leaves out the rules that decide whether an owner can evict through an out-of-state company or under a trade name. The broker statute the row describes was not in this pass's section list and was not re-read.

old_str:
```
The usual license exemptions for owners managing their own property and for full-time community-association employees do not apply to these non-resident landlords.
```
new_str:
```
The usual license exemptions for owners managing their own property and for full-time community-association employees do not apply to these non-resident landlords. If you own through an out-of-state LLC or corporation, it must get a certificate of authority from the Secretary of State before transacting business in Georgia, and until it does it cannot bring an eviction or other court case (its contracts stay valid and it can still defend a case); it also owes back fees and a penalty (O.C.G.A. §§ 14-11-702, 14-11-711, 14-2-1501, 14-2-1502). Owning property, without more, is not transacting business, so whether renting it out is depends on the facts. If you rent under a name that does not show who owns the business, file a trade-name registration with the superior court clerk in the county where the business is mainly carried on and publish notice; failing to register is a misdemeanor and you will be charged court costs, but it does not defeat your lawsuit (O.C.G.A. §§ 10-1-490, 10-1-491, 10-1-493). Owning property in Georgia lets Georgia courts hear claims that arise from that ownership (O.C.G.A. § 9-10-91).
```

Quotes:
- O.C.G.A. § 14-11-702(a): 'A foreign limited liability company transacting business in this state shall procure a certificate of authority to do so from the Secretary of State.' — http://www.lexisnexis.com/hottopics/gacode (search "O.C.G.A. 14-11-702") — read 2026-11-06 — Current through the 2026 Special Session of the General Assembly.
- O.C.G.A. § 14-11-702(b)(9): 'Owning, without more, real or personal property;' — same — read 2026-11-06 — Current through the 2026 Special Session of the General Assembly.
- O.C.G.A. § 14-11-711(a): 'A foreign limited liability company transacting business in this state may not maintain an action, suit, or proceeding in a court of this state until it is authorized to transact business in this state.' — same (search "O.C.G.A. 14-11-711") — read 2026-11-06 — Current through the 2026 Special Session of the General Assembly.
- O.C.G.A. § 14-11-711(b): 'does not impair the validity of any contract or act of the foreign limited liability company or prevent the foreign limited liability company from defending any action, suit, or proceeding' — same — read 2026-11-06 — same currency line
- O.C.G.A. § 14-11-711(c)(2): 'If it has not been authorized to transact business in this state within 30 days after the first day on which it transacts business in this state, for a penalty of $500.00.' — same — read 2026-11-06 — same currency line
- O.C.G.A. § 14-11-703(h): 'Whenever a foreign limited liability company required to procure a certificate of authority to transact business in this state shall fail to appoint or maintain a registered agent in this state, ... then the Secretary of State shall be an agent of such foreign limited liability company upon whom any process, notice, or demand may be served.' — same (search "O.C.G.A. 14-11-703") — read 2026-11-06 — same currency line
- O.C.G.A. § 14-2-1501(a), (b)(9): 'A foreign corporation may not transact business in this state until it obtains a certificate of authority from the Secretary of State.' / 'Owning, without more, real or personal property;' — same (search "O.C.G.A. 14-2-1502", result 2) — read 2026-11-06 — same currency line
- O.C.G.A. § 14-2-1502(a): 'A foreign corporation transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority.' — same (search "O.C.G.A. 14-2-1502") — read 2026-11-06 — same currency line
- O.C.G.A. § 10-1-490(a): 'Every person, firm, or partnership carrying on in this state any trade or business under any trade name or partnership name or other name which does not disclose the individual ownership of the trade, business, or profession carried on under such name shall, ... before commencing to do business, file in the office of the clerk of the superior court of the county in which the business is chiefly carried on' — same (search "O.C.G.A. 10-1-490") — read 2026-11-06 — same currency line
- O.C.G.A. § 10-1-491: 'no action heretofore or hereafter instituted by any such person, firm, partnership, or corporation, whether sounding in contract or tort, shall be defeated because of any such failure to register. But the party who has failed to register his trade or partnership name at the time action is filed, as required by this part, shall be cast with court costs.' — same (search "O.C.G.A. 10-1-491") — read 2026-11-06 — same currency line
- O.C.G.A. § 10-1-493: 'shall be guilty of a misdemeanor but shall suffer no other or further penalty or forfeiture on account of any such failure to register, except costs' — same (search "O.C.G.A. 10-1-490", result 3) — read 2026-11-06 — same currency line
- O.C.G.A. § 9-10-91(4): 'Owns, uses, or possesses any real property situated within this state;' — same (search "O.C.G.A. 9-10-91") — read 2026-11-06 — same currency line

### `edu-local-regulation-mt`

Applied in commit 8ff5e99 from the first run (`unreached-sources.md`); the rerun repeated the same finding word for word and is not re-applied.

### `edu-landlord-registration-davidson-tn`

Verdict: FIX
Reason: The Metro registration rule itself was not in this pass's list and was not re-read; nothing read contradicts it. The row leaves out that an out-of-state LLC or corporation must register before transacting business and cannot sue until it does, and Tennessee's lists treat renting property as outside "transacting business" only for foreclosed property being sold off.

old_str:
```
Failure is fined $50 per week after a hearing on at least 15 days' mailed notice.
```
new_str:
```
Failure is fined $50 per week after a hearing on at least 15 days' mailed notice. If you own through an out-of-state LLC or corporation, it must get a certificate of authority from the Secretary of State before transacting business in Tennessee, and until it does it may not maintain an eviction or other court case (its contracts stay valid and it may defend a case); it also owes a fine or back fees for the years it went without (Tenn. Code Ann. §§ 48-249-904(a), 48-249-913, 48-25-101, 48-25-102). Owning property, without more, is not transacting business, but the law treats managing and renting real property as outside that rule only when the property came through a foreclosure and is being sold off, so register before you rent (Tenn. Code Ann. §§ 48-249-902(a)(9), 48-25-101(b)(9)). An unregistered LLC that transacts business here can be served through the Secretary of State (Tenn. Code Ann. § 48-249-112(b)). A corporation must file an assumed-name application before doing business under any other name (Tenn. Code Ann. § 48-14-101(d)(3)).
```

Quotes:
- Tenn. Code Ann. § 48-249-904(a): 'Before transacting business in this state, a foreign LLC shall obtain a certificate of authority.' — https://www.lexisnexis.com/hottopics/tncode (linked from capitol.tn.gov Legislative Links; search "48-249-904") — read 2026-11-06 — Current through the 2026 Regular Session and the 2026 2nd Extraordinary Session.
- Tenn. Code Ann. § 48-249-902(a)(9): 'Owning, without more, real or personal property; provided, that, for a reasonable time, the management and rental of real property acquired in connection with enforcing a mortgage or deed of trust shall also not be considered transacting business, if the owner is attempting to liquidate the investment' — same (search "48-249-902") — read 2026-11-06 — same currency line
- Tenn. Code Ann. § 48-249-913(a): 'A foreign LLC transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority.' — same (search for foreign LLC terms, result "48-249-913") — read 2026-11-06 — same currency line
- Tenn. Code Ann. § 48-249-913(d): 'shall be fined and shall pay to the secretary of state three (3) times the otherwise required filing fee for each year or part of each year during which the foreign LLC failed to have such certificate of authority.' — same — read 2026-11-06 — same currency line
- Tenn. Code Ann. § 48-249-112(b): 'whenever a foreign LLC transacts business or conducts affairs in this state without first obtaining a certificate of authority from the secretary of state, ... then the secretary of state shall be an agent of such LLC upon whom any process, notice or demand may be served.' — same — read 2026-11-06 — same currency line
- Tenn. Code Ann. § 48-25-101(a): 'A foreign corporation, except a foreign insurance corporation subject to title 56, may not transact business in this state until it obtains a certificate of authority from the secretary of state.' — same (search "48-25-101") — read 2026-11-06 — same currency line
- Tenn. Code Ann. § 48-25-102(a): 'A foreign corporation transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority.' — same (search "48-25-102") — read 2026-11-06 — same currency line
- Tenn. Code Ann. § 48-14-101(d)(3): 'Before transacting any business in this state under an assumed corporate name or names, the corporation shall, for each assumed corporate name, ... execute and file ... an application' — same (search "48-14-101") — read 2026-11-06 — same currency line

### `edu-child-abuse-investigation-cooperation-tn`

Verdict: FIX
Reason: The row's own rule (a landlord giving DCS a child's location) comes from a section not on this pass's list and was not re-read. The row leaves out that Tennessee puts the duty to report child abuse and child sexual abuse on every person, with criminal penalties.

old_str:
```
and is not liable for cooperating.
```
new_str:
```
and is not liable for cooperating. Separately, Tennessee makes every person a reporter: anyone who knows of harm to a child that reasonably appears to come from brutality, abuse or neglect must report it immediately to the juvenile judge, the Department of Children's Services, the sheriff or the city's chief law enforcement officer, and anyone who knows or reasonably suspects that a child has been sexually abused must report it to the Department (Tenn. Code Ann. §§ 37-1-403(a), 37-1-605(a)). Knowingly failing to report is a Class A misdemeanor, a second failure is a Class E felony, and an intentional failure is a Class E felony (Tenn. Code Ann. §§ 37-1-412(a), 37-1-615(a)).
```

Quotes:
- Tenn. Code Ann. § 37-1-403(a)(1): 'Any person who has knowledge of or is called upon to render aid to any child who is suffering from or has sustained any wound, injury, disability, or physical or mental condition shall report such harm immediately if the harm is of such a nature as to reasonably indicate that it has been caused by brutality, abuse or neglect' — https://www.lexisnexis.com/hottopics/tncode (search "37-1-403") — read 2026-11-06 — Current through the 2026 Regular Session and the 2026 2nd Extraordinary Session.
- Tenn. Code Ann. § 37-1-605(a)(9): 'Neighbor, relative, friend or any other person; who knows or has reasonable cause to suspect that a child has been sexually abused shall report such knowledge or suspicion to the department' — same (search "37-1-605") — read 2026-11-06 — same currency line
- Tenn. Code Ann. § 37-1-412(a): 'Any person who knowingly fails to make a report required by § 37-1-403 commits an offense.' / 'A violation of subdivision (a)(1) is a Class A misdemeanor.' / 'A second or subsequent violation of subdivision (a)(1) is a Class E felony.' / 'Any person who intentionally fails to make a report required by § 37-1-403 commits a Class E felony.' — same (search "37-1-412") — read 2026-11-06 — same currency line
- Tenn. Code Ann. § 37-1-615(a)(1): 'Any person required to report known or suspected child sexual abuse who knowingly fails to do so, or who knowingly prevents another person from doing so, commits an offense.' — same (search "37-1-615") — read 2026-11-06 — same currency line

### `edu-law-enforcement-cooperation-ar`

Verdict: FIX
Reason: Nothing read contradicts the row, but it leaves out two reporting duties that reach any landlord: notifying the coroner and police of certain deaths (including any death in a home), and reporting child abuse an adult observes.

old_str:
```
The rules are the same for every type of tenancy.
```
new_str:
```
Two reporting duties apply to everyone, landlords included. Anyone present at or with knowledge of a death must promptly notify the county coroner, the prosecuting attorney and the sheriff or police chief if, among other things, the death occurs in the home, appears violent, accidental, a suicide or drug-related, or is sudden and unexplained; failing to do so is a Class A misdemeanor (Ark. Code Ann. § 12-12-315). And any person 18 or older who observes abuse, sexual abuse or sexual exploitation of a child is a mandated reporter who must immediately notify the Child Abuse Hotline; knowingly failing to is a Class A misdemeanor (Ark. Code Ann. §§ 12-18-402(a), (b)(43), 12-18-201). The rules are the same for every type of tenancy.
```

Quotes:
- Ark. Code Ann. § 12-12-315(a)(1): 'The county coroner, prosecuting attorney, and either the county sheriff or the chief of police of the municipality in which the death of a human being occurs shall be promptly notified by any physician, law enforcement officer, undertaker or embalmer, jailer, or coroner or by any other person present or with knowledge of the death if:' — http://www.lexisnexis.com/hottopics/arcode/ (from the arkleg.state.ar.us "Arkansas Code" link; search "12-12-315") — read 2026-11-06 — Current through the First Extraordinary Session, 2026, including revisions made by the Bureau of Legislative Research under the direction of the Arkansas Code Revision Commission.
- Ark. Code Ann. § 12-12-315(a)(1)(R): 'The death occurs in the home;' — same — read 2026-11-06 — same currency line
- Ark. Code Ann. § 12-12-315(c): 'A violation of the provisions of this section is a Class A misdemeanor.' — same — read 2026-11-06 — same currency line
- Ark. Code Ann. § 12-18-402(b)(43): 'A person who is eighteen (18) years of age or older and observes abuse, sexual abuse, or sexual exploitation of a child.' — same (search "12-18-402") — read 2026-11-06 — same currency line
- Ark. Code Ann. § 12-18-201(b): 'Failure to notify by a mandated reporter in the first degree is a Class A misdemeanor.' — same (search "12-18-201") — read 2026-11-06 — same currency line

### `edu-no-nonresident-owner-agent-ar`

Verdict: FIX
Reason: Every LLC statement checked holds as written (§§ 4-38-902, 4-38-905(a)(10), 4-38-913). The row leaves out out-of-state corporations, which face the same suit bar and a $5,000-a-year penalty, and the county assumed-name filing.

old_str:
```
(Ark. Code Ann. § 4-38-905(a)(10)), so whether renting it out is depends on the facts; register before you need to file.
```
new_str:
```
(Ark. Code Ann. § 4-38-905(a)(10)), so whether renting it out is depends on the facts; register before you need to file. An out-of-state corporation is under the same rule: it needs a certificate of authority before transacting business, may not maintain a court case until it gets one (its acts stay valid), and owes back fees plus a civil penalty of up to $5,000 for each year or part of a year; owning property without more is not transacting business (Ark. Code Ann. §§ 4-27-1501, 4-27-1502). An individual owner who rents under a name other than his or her real name must file a certificate with the county clerk of each county where the business is done; failing to is punished by a fine of $25 to $100 a day, but the statute does not bar a lawsuit (Ark. Code Ann. §§ 4-70-202, 4-70-203).
```

Quotes:
- Ark. Code Ann. § 4-38-902(a)-(c): 'A foreign limited liability company may not do business in this state until it registers with the Secretary of State under this subchapter.' / 'A foreign limited liability company doing business in this state may not maintain an action or proceeding in this state unless it is registered to do business in this state.' — http://www.lexisnexis.com/hottopics/arcode/ (search "4-38-902") — read 2026-11-06 — Current through the First Extraordinary Session, 2026, including revisions made by the Bureau of Legislative Research under the direction of the Arkansas Code Revision Commission.
- Ark. Code Ann. § 4-38-905(a)(10): 'owning, without more, property; and' — same (search "4-38-905") — read 2026-11-06 — same currency line
- Ark. Code Ann. § 4-38-913(e): 'shall be subject to a civil penalty, payable to the state, not to exceed five thousand dollars for each twelve-month period or part thereof' — same (search "4-38-913") — read 2026-11-06 — same currency line
- Ark. Code Ann. § 4-27-1501(a), (b)(9): 'A foreign corporation may not transact business in this state until it obtains a certificate of authority from the Secretary of State.' / 'Owning, without more, real or personal property;' — same (search "4-27-1501") — read 2026-11-06 — same currency line
- Ark. Code Ann. § 4-27-1502(a), (d)(2): 'A foreign corporation transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority.' / 'shall pay a civil penalty to the state not to exceed five thousand dollars ($5,000) for each year and partial year' — same (search "4-27-1502") — read 2026-11-06 — same currency line
- Ark. Code Ann. § 4-70-203(a): 'No person shall conduct or transact business in this state under an assumed name ... other than the real name of the individual conducting or transacting such business, unless the person files a certificate in the office of the county clerk of the counties in which the person conducts or transacts or intends to conduct the business.' — same (search "4-70-201", then Next) — read 2026-11-06 — same currency line
- Ark. Code Ann. § 4-70-202(a): 'shall be guilty of a violation and fined not less than twenty-five dollars ($25.00) nor more than one hundred dollars ($100).' — same — read 2026-11-06 — same currency line

### `edu-no-landlord-registration-ar`

Verdict: FIX
Reason: The LLC statements hold (the penalty is "for each twelve-month period or part thereof", which the row's "each year or part of a year" fairly states). The row leaves out out-of-state corporations and the assumed-name filing.

old_str:
```
so whether renting it out is depends on the facts. The same applies to every tenancy type.
```
new_str:
```
so whether renting it out is depends on the facts. An out-of-state corporation faces the same rules: it must get a certificate of authority before transacting business, may not maintain an eviction or other court case until it does, and owes back fees plus a civil penalty of up to $5,000 for each year or part of a year (Ark. Code Ann. §§ 4-27-1501, 4-27-1502). An individual who rents under a name other than his or her real name must file an assumed-name certificate with the county clerk; failing to is fined $25 to $100 a day but does not bar an eviction (Ark. Code Ann. §§ 4-70-202, 4-70-203). The same applies to every tenancy type.
```

Quotes:
- Ark. Code Ann. § 4-38-913(a): 'A foreign limited liability company transacting business in this state shall not maintain an action, suit, or proceeding in a court of this state until it has registered in this state.' — http://www.lexisnexis.com/hottopics/arcode/ (search "4-38-913") — read 2026-11-06 — Current through the First Extraordinary Session, 2026, including revisions made by the Bureau of Legislative Research under the direction of the Arkansas Code Revision Commission.
- Ark. Code Ann. § 4-27-1502(a): 'A foreign corporation transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority.' — same (search "4-27-1502") — read 2026-11-06 — same currency line
- Ark. Code Ann. § 4-70-201(b): 'This subchapter shall not apply to any domestic or foreign corporation or to any domestic or foreign limited partnership or limited liability company lawfully doing business in this state.' — same (search "4-70-201") — read 2026-11-06 — same currency line

### `edu-confirmed-absences-outside-title-ar`

Verdict: ERROR
Reason: The row says the only registration that conditions winning an eviction is the out-of-state LLC rule, but an unregistered out-of-state corporation is barred from maintaining a court case too (Ark. Code Ann. § 4-27-1502(a)).

old_str:
```
an out-of-state limited liability company doing business here must register with the Secretary of State and may not maintain an eviction or other court action until it does (Ark. Code Ann. §§ 4-38-902, 4-38-913)
```
new_str:
```
an out-of-state limited liability company or corporation doing business here must register with the Secretary of State and may not maintain an eviction or other court action until it does (Ark. Code Ann. §§ 4-38-902, 4-38-913, 4-27-1501, 4-27-1502)
```

Quotes:
- Ark. Code Ann. § 4-27-1502(a): 'A foreign corporation transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority.' — http://www.lexisnexis.com/hottopics/arcode/ (search "4-27-1502") — read 2026-11-06 — Current through the First Extraordinary Session, 2026, including revisions made by the Bureau of Legislative Research under the direction of the Arkansas Code Revision Commission.
- Ark. Code Ann. § 4-38-902(b): 'A foreign limited liability company doing business in this state may not maintain an action or proceeding in this state unless it is registered to do business in this state.' — same (search "4-38-902") — read 2026-11-06 — same currency line

### `edu-no-nonresident-owner-agent-ms`

Verdict: FIX
Reason: Every LLC statement checked holds as written (§§ 79-29-1003(1), 79-29-1013, 79-29-1015(1)(i)). The row leaves out out-of-state corporations; Mississippi's business-name registration is voluntary, so it adds no suit bar.

old_str:
```
(Miss. Code Ann. § 79-29-1015(1)(i)), so whether renting it out is depends on the facts; register before you need to file.
```
new_str:
```
(Miss. Code Ann. § 79-29-1015(1)(i)), so whether renting it out is depends on the facts; register before you need to file. An out-of-state corporation is under the same rule: it needs a certificate of authority before transacting business, may not maintain a court case until it has one (its contracts, deeds and liens stay valid), and owes a civil penalty of $10 a day, up to $1,000 a year; owning real property without more is not transacting business (Miss. Code Ann. §§ 79-4-15.01, 79-4-15.02). Registering a name you rent under is voluntary in Mississippi and is for public notice only (Miss. Code Ann. §§ 75-93-3, 75-93-13).
```

Quotes:
- Miss. Code Ann. § 79-29-1003(1): 'Before transacting business in this state, a foreign limited liability company, including a foreign limited liability company formed to render professional services, shall register with the Secretary of State.' — http://www.lexisnexis.com/hottopics/mscode/ (from legislature.ms.gov "Mississippi Code"; search "79-29-1003") — read 2026-11-06 — Current with legislation from the 2026 Regular and First Extraordinary Sessions.
- Miss. Code Ann. § 79-29-1013(1), (4): 'A foreign limited liability company transacting business in this state may not maintain any action, suit, or proceeding in any court of this state until it has registered in this state.' / 'By transacting business in this state without registration, a foreign limited liability company appoints the Secretary of State as its registered agent for service of process with respect to causes of action arising out of the transaction of business in this state.' — same (search "79-29-1013") — read 2026-11-06 — same currency line
- Miss. Code Ann. § 79-29-1015(1)(i): 'Owning, without more, real or personal property;' — same (search "79-29-1015") — read 2026-11-06 — same currency line
- Miss. Code Ann. § 79-4-15.01(a), (b)(9): 'A foreign corporation may not transact business in this state until it obtains a certificate of authority from the Secretary of State.' / 'Owning, without more, real or personal property;' — same (search "79-4-15.02", then Previous) — read 2026-11-06 — same currency line
- Miss. Code Ann. § 79-4-15.02(a), (d): 'A foreign corporation transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority.' / 'A foreign corporation is liable for a civil penalty of Ten Dollars ($10.00) for each day, but not to exceed a total of One Thousand Dollars ($1,000.00) for each year' — same (search "79-4-15.02") — read 2026-11-06 — same currency line
- Miss. Code Ann. § 75-93-3: 'The purpose of this chapter is to establish a centralized, statewide system of voluntary registration of fictitious business names' — same (search "fictitious business name") — read 2026-11-06 — same currency line
- Miss. Code Ann. § 75-93-13: 'registration of a fictitious business name under this chapter is for public notice only' — same — read 2026-11-06 — same currency line

### `edu-no-landlord-registration-ms`

Verdict: FIX
Reason: The LLC statements hold. The row's third rule covers only LLCs; an out-of-state corporation must also register and cannot sue until it does.

old_str:
```
so whether renting it out is depends on the facts. Cities and counties
```
new_str:
```
so whether renting it out is depends on the facts. An out-of-state corporation must likewise get a certificate of authority before transacting business and may not maintain an eviction or other court case until it does (Miss. Code Ann. §§ 79-4-15.01, 79-4-15.02). Cities and counties
```

Quotes:
- Miss. Code Ann. § 79-4-15.02(a): 'A foreign corporation transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority.' — http://www.lexisnexis.com/hottopics/mscode/ (search "79-4-15.02") — read 2026-11-06 — Current with legislation from the 2026 Regular and First Extraordinary Sessions.

### `edu-confirmed-absences-outside-title-ms`

Verdict: ERROR
Reason: The row says the only registration that conditions winning an eviction is the out-of-state LLC rule, but an unregistered out-of-state corporation is barred from maintaining a court case too (Miss. Code Ann. § 79-4-15.02(a)).

old_str:
```
an out-of-state limited liability company transacting business here must register with the Secretary of State and may not maintain an eviction or other court action until it has registered (Miss. Code Ann. §§ 79-29-1003, 79-29-1013)
```
new_str:
```
an out-of-state limited liability company or corporation transacting business here must register with the Secretary of State and may not maintain an eviction or other court action until it has registered (Miss. Code Ann. §§ 79-29-1003, 79-29-1013, 79-4-15.01, 79-4-15.02)
```

Quotes:
- Miss. Code Ann. § 79-4-15.02(a): 'A foreign corporation transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority.' — http://www.lexisnexis.com/hottopics/mscode/ (search "79-4-15.02") — read 2026-11-06 — Current with legislation from the 2026 Regular and First Extraordinary Sessions.

### `edu-confirmed-absences-outside-title-vi`

Verdict: FIX
Reason: The row is right that no statute was found making the business license a condition of an eviction, but as a whole-code check it leaves out three filings that do bar a landlord's suit: the trade-name certificate, the corporate franchise tax, and an out-of-state LLC's certificate of authority.

old_str:
```
Get the license anyway: willfully operating without it is a misdemeanor and can draw administrative fines (`edu-landlord-registration-vi`).
```
new_str:
```
Get the license anyway: willfully operating without it is a misdemeanor and can draw administrative fines (`edu-landlord-registration-vi`). Three other filings do bar a suit, though: a landlord renting under a name other than its own must file a trade-name certificate with the Lieutenant Governor before starting business and, until it does, may not bring any court action on that business (11 V.I.C. §§ 1201, 1203, 1212); a corporation may not bring or keep any court action while its annual franchise tax is unpaid (13 V.I.C. § 533(a)); and an out-of-state LLC must have a certificate of authority before it can sue, and owning income-producing real property in the Virgin Islands counts as transacting business (13 V.I.C. §§ 2003(b), 2008(a)).
```

Quotes:
- 11 V.I.C. § 1212: 'A person, copartnership, association or corporation required by the provisions of this chapter, to file a certificate and pay a registration fee, and failing to do so may not commence or maintain any action in any court of the United States Virgin Islands for the enforcement of any right or obligation arising out of the doing of business in the United States Virgin Islands' — https://advance.lexis.com/container?config=024453JABiMWFjOTk0OS1hNTVlLTQ1MDctYmZkOS1mNGRkY2I0ZTg2YzQKAFBvZENhdGFsb2fNaUTUAugmXPqNctTcuqLy (the legvi.org "iVI CODE" link; search "trade name registration", § 1201 then Next) — read 2026-11-06 — Statutes current through Act 9046 of the 2025 session of the 36th Legislature, including all code changes through October 25, 2025
- 13 V.I.C. § 533(a): 'No corporation may commence or maintain any action in any court if it has not paid its annual franchise tax last due.' — same (search "franchise tax", § 531 then Next) — read 2026-11-06 — same currency line
- 13 V.I.C. § 2003(b): 'the ownership in the Virgin Islands of income-producing real property or tangible personal property, other than property excluded under subsection (a) of this section, constitutes transacting business in the Virgin Islands.' — same (§ 2008 then Previous) — read 2026-11-06 — same currency line
- 13 V.I.C. § 2008(a): 'A foreign limited liability company transacting business in the Virgin Islands may not maintain an action or proceeding in the Virgin Islands unless it has a certificate of authority to transact business in the Virgin Islands.' — same (search for foreign LLC terms) — read 2026-11-06 — same currency line

### `edu-no-nonresident-owner-agent-vi`

Verdict: ERROR
NEW TITLE: Owners Living Off-Island: Process Agent and Company Rules in the Virgin Islands
Reason: The row and its title say there is no local-agent rule, but 11 V.I.C. § 1210 requires each nonresident doing business in the territory in his or her own name to appoint a resident process agent (the Lieutenant Governor is the default), and § 1212 bars a business license to a nonresident individual who has not complied. This applies to a landlord if renting counts as doing business, which the licensing law treats it as. The edit also fills in the company rules the row marked "not covered here"; that phrase in the row's last sentence can be dropped in a follow-up edit.

old_str:
```
No Virgin Islands statute requires an owner who lives off-island to name a local agent in the lease, to file an agent designation before suing a tenant, or to have rent withheld for tax.
```
new_str:
```
A nonresident doing business in the Virgin Islands in his or her own name must appoint, in a writing filed with the Lieutenant Governor, a person who lives and has an office in the judicial division where the business is located to receive court papers; if no one is appointed, the Lieutenant Governor is the process agent, and the territory may not grant a nonresident individual a business license until the appointment is filed (11 V.I.C. §§ 1210, 1212). We found no statute requiring the agent to be named in the lease or rent to be withheld for tax. If you own through a company formed elsewhere: an out-of-state LLC must get a certificate of authority from the Lieutenant Governor, owning income-producing real property here counts as transacting business, and until it has the certificate it may not sue (its leases stay valid), while by transacting business without one it appoints the Lieutenant Governor to receive court papers (13 V.I.C. §§ 2003(b), 2008). An out-of-state corporation doing business through agents or representatives here must first file its charter and name a local process agent with the Lieutenant Governor, and is fined up to $500 per offense if it does not; no corporation may sue while its annual franchise tax is unpaid (13 V.I.C. §§ 401, 406, 533(a)).
```

Quotes:
- 11 V.I.C. § 1210: 'Each nonresident doing business in the United States Virgin Islands in his individual capacity, ... shall appoint in writing a person having an office or place of business and residing in the judicial division wherein the principal office of such nonresident ... is located upon whom process against such nonresident may be served in an action founded upon a liability incurred in the United States Virgin Islands.' / 'In the event a nonresident has not appointed a process agent, and has not filed such appointment as above set forth, the Lieutenant Governor shall be such process agent.' — https://advance.lexis.com/container?config=024453JABiMWFjOTk0OS1hNTVlLTQ1MDctYmZkOS1mNGRkY2I0ZTg2YzQKAFBvZENhdGFsb2fNaUTUAugmXPqNctTcuqLy (search "trade name registration", § 1201 then Next) — read 2026-11-06 — Statutes current through Act 9046 of the 2025 session of the 36th Legislature, including all code changes through October 25, 2025
- 11 V.I.C. § 1212: 'nor shall a license or certificate be granted to a nonresident individual, copartnership or unincorporated association to transact any business in the United States Virgin Islands unless such individual, copartnership or association has complied with the provisions of section 1210 of this title.' — same — read 2026-11-06 — same currency line
- 13 V.I.C. § 2008(d): 'If a foreign limited liability company transacts business in the Virgin Islands without a certificate of authority, it appoints the Lieutenant Governor as its agent for service of process for claims for relief arising out of the transaction of business in the Virgin Islands.' — same (search for foreign LLC terms) — read 2026-11-06 — same currency line
- 13 V.I.C. § 401(a): 'No corporation created by the laws of any foreign country or any state of the United States, or the laws of the United States, shall do any business in the United States Virgin Islands through or by branch offices, agents or representatives located in the United States Virgin Islands until it shall have filed in the office of the Lieutenant Governor a certified copy of its charter' — same (search "foreign corporation") — read 2026-11-06 — same currency line
- 13 V.I.C. § 406: 'shall be fined not more than $500 for each such offense.' — same (§ 401 then Next) — read 2026-11-06 — same currency line

### `edu-law-enforcement-cooperation-vi`

Verdict: FIX
Reason: Nothing read contradicts the row, but one reporting duty reaches any person: criminal abuse of an older or dependent adult must be reported to law enforcement. Child-abuse reporting binds only listed professionals, and death reporting falls on officials. Note: the Lexis currency line reads "through Act 9046", but § 453's history lists a Nov. 10, 2025 amendment by Act 9051.

old_str:
```
entering a tenant's home without consent is a crime unless the law provides for it.
```
new_str:
```
entering a tenant's home without consent is a crime unless the law provides for it. One reporting duty does reach everyone: if abuse of an older or dependent adult involves criminal activity, any person must report it immediately to the appropriate law enforcement agency (34 V.I.C. § 453(b)(2)); the statute's penalties are written for mandated reporters, administrators and supervisors (34 V.I.C. § 453(f)). Reporting child abuse is mandatory only for listed professionals, though anyone may report (5 V.I.C. § 2533), and the duty to report an unnatural death to the Medical Examiner falls on the Commissioner of Health and the Police Commissioner (3 V.I.C. § 115(b)).
```

Quotes:
- 34 V.I.C. § 453(b)(2): 'If the conduct involves criminal activity, the mandated reporter or any person shall report it immediately to the appropriate law enforcement agency.' — https://advance.lexis.com/container?config=024453JABiMWFjOTk0OS1hNTVlLTQ1MDctYmZkOS1mNGRkY2I0ZTg2YzQKAFBvZENhdGFsb2fNaUTUAugmXPqNctTcuqLy (search "mandated reporter older or dependent adult", § 452 then Next) — read 2026-11-06 — Statutes current through Act 9046 of the 2025 session of the 36th Legislature, including all code changes through October 25, 2025
- 34 V.I.C. § 453(f)(1): 'Any mandated reporter, administrator or supervisor who: (1) fails to report abuse or neglect of an older or dependent adult, in violation of this section, is guilty of a misdemeanor, punishable by a fine of not more than $1,000 or not more than six months' imprisonment, or both' — same — read 2026-11-06 — same currency line
- 34 V.I.C. § 454: 'Any person who is not a mandated reporter under this chapter, who knows, or reasonably suspects, that an older or dependent adult has been the victim of abuse may report the abuse to a local law enforcement agency.' — same — read 2026-11-06 — same currency line
- 5 V.I.C. § 2533(c): 'any other person may make a report if such person has reasonable cause to suspect that a child has been abused or neglected' — same (search "persons and officials required to report") — read 2026-11-06 — same currency line
- 5 V.I.C. § 2539(a): 'Any person, official or institution required by this subchapter to report a case of alleged child abuse, sexual abuse or neglect, or to perform any other act, who knowingly fails to do so, shall be guilty of a misdemeanor and shall be fined not more than $1,000 or imprisoned not more than one year, or both.' — same — read 2026-11-06 — same currency line
- 3 V.I.C. § 115(b): 'the Commissioner of Health or the Police Commissioner or their duly authorized representatives shall report the case to the Medical Examiner in the Judicial Division in which the death occurred.' — same (search "medical examiner death report") — read 2026-11-06 — same currency line

### `edu-landlord-registration-vi`

Verdict: FIX
Reason: The row is right that no statute was found making the business license a condition of an eviction, but it leaves out three other filings that do bar a landlord's suit.

old_str:
```
No statute was found that makes the license a condition of bringing an eviction case.
```
new_str:
```
No statute was found that makes the license a condition of bringing an eviction case. Other filings can block an eviction case, though: a landlord renting under a name other than its own must file a trade-name certificate with the Lieutenant Governor and cannot sue on that business until it does, and must renew the name every two, six or ten years (11 V.I.C. §§ 1201, 1203, 1212, 1213); a corporation cannot sue while its annual franchise tax is unpaid (13 V.I.C. § 533(a)); and an out-of-state LLC needs a certificate of authority before it can sue, because owning income-producing real property here counts as transacting business (13 V.I.C. §§ 2003(b), 2008(a)).
```

Quotes:
- 11 V.I.C. § 1201: 'A person doing business in the United States Virgin Islands under any name other than his own, and every copartnership or association of individuals, except corporations, doing business in the United States Virgin Islands, resident or nonresident, shall file in the office of the Lieutenant Governor a certificate' — https://advance.lexis.com/container?config=024453JABiMWFjOTk0OS1hNTVlLTQ1MDctYmZkOS1mNGRkY2I0ZTg2YzQKAFBvZENhdGFsb2fNaUTUAugmXPqNctTcuqLy (search "trade name registration") — read 2026-11-06 — Statutes current through Act 9046 of the 2025 session of the 36th Legislature, including all code changes through October 25, 2025
- 11 V.I.C. § 1203(b): 'For the purposes of this chapter, the term "corporation" shall include a limited liability company.' — same — read 2026-11-06 — same currency line
- 11 V.I.C. § 1213: 'shall file an application to renew its tradename every two, six, or ten years' — same (search "renewal registrations of tradenames") — read 2026-11-06 — same currency line
- 13 V.I.C. § 533(a): 'No corporation may commence or maintain any action in any court if it has not paid its annual franchise tax last due.' — same (search "franchise tax") — read 2026-11-06 — same currency line

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
- A.S.C.A. ch. 30.06 (LLC Act): llc.as.gov failed to load on https and http (not tried a third time); asbar.org's Code Annotated by Title and Chapter does not carry ch. 30.06, and its "Updated Annotated Code by Title (as of August 2021)" page shows only raw iframe markup.
- Tenn. Code Ann. § 48-249-106 (LLC assumed names): not read; § 48-249-903(c) says a foreign LLC "may elect" an assumed name under it.
- Ark. Code Ann. § 4-20-113 (service on an unregistered LLC, cross-referenced by § 4-38-913(c)): not read.
- Miss. Code Ann. ch. 75-93: §§ 75-93-3, -7 and -13 read; the other sections of the chapter were not opened, so a suit bar elsewhere in it is not ruled out (the stated purpose is voluntary registration).
- 13 V.I.C. § 405(c) and § 407(d): read only in part (extract cut off); 34 V.I.C. § 452 (who is a mandated reporter) not read.
- Sections behind the rows' own rules that were not on this pass's list (the Georgia broker statute, the Davidson County registration statute, the Tennessee landlord-to-DCS cooperation statute) were not re-read.

**Summary:**
- 15 rows read on official sites; 2 American Samoa rows NOT REACHED (ch. 30.06 not online at either listed source).
- 2 ERROR (AR and MS confirmed-absences rows omit the corporate suit bar) and 1 ERROR with a new title (VI nonresident owners: 11 V.I.C. § 1210 requires a resident process agent).
- 11 FIX: GA, MT, both TN rows (TN makes every person a child-abuse reporter), 3 AR, 2 MS, 3 VI.
- Notable: VI treats owning income-producing real property as transacting business for an out-of-state LLC (13 V.I.C. § 2003(b)); TN excludes rental only for foreclosed property being sold.
- Montana's foreign-corporation rules moved from Title 35 ch. 1 (repealed) to ch. 14.
