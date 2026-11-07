# General-statute sweep: Rhode Island, New Hampshire, Maine, Vermont

Scope: every active row in `lease-clauses.csv` with topic_key in {nonresident-owner-agent, landlord-registration, law-enforcement-cooperation, confirmed-absences-outside-title} and id ending -ri, -nh, -me or -vt. 19 rows:

| id | topic_key | verdict |
|---|---|---|
| edu-confirmed-absences-outside-title-ri | confirmed-absences-outside-title | FIX |
| edu-rental-registry-ri | landlord-registration | holds |
| edu-absentee-landlord-registration-ri | landlord-registration | holds |
| edu-nonresident-landlord-agent-ri | nonresident-owner-agent | FIX |
| edu-no-crime-free-lease-statute-ri | law-enforcement-cooperation | ERROR |
| edu-whole-code-checks-nh | confirmed-absences-outside-title | FIX |
| edu-agent-for-service-nh | nonresident-owner-agent | FIX |
| edu-no-law-enforcement-cooperation-rule-nh | law-enforcement-cooperation | ERROR |
| edu-no-landlord-registration-nh | landlord-registration | ERROR |
| edu-property-manager-licensing-nh | nonresident-owner-agent | holds |
| edu-whole-code-checks-me | confirmed-absences-outside-title | FIX |
| edu-no-landlord-registration-me | landlord-registration | FIX |
| edu-owner-agent-me | nonresident-owner-agent | ERROR |
| edu-no-crime-free-lease-rule-me | law-enforcement-cooperation | FIX |
| edu-property-manager-licensing-me | landlord-registration | holds |
| edu-whole-code-checks-vt | confirmed-absences-outside-title | FIX |
| edu-no-landlord-registration-vt | landlord-registration | FIX |
| edu-no-crime-free-lease-rule-vt | law-enforcement-cooperation | FIX |
| edu-no-nonresident-owner-agent-vt | nonresident-owner-agent | ERROR |

All sources below were read whole on 2026-11-06 from the official sites (curl, default headers). Quotes are exact. Case law was not searched. Open case-law question in all four states: whether renting out residential property (as opposed to merely owning it) is "transacting business" / "doing business" / "conducting activities" for a foreign entity. NH, ME and VT expressly exclude mere ownership; RI's lists say nothing about ownership either way.

---

### `edu-confirmed-absences-outside-title-ri`

FIX. Item (3) says registration is a precondition to "one kind of eviction" (the Department of Health registry) and lists nothing else. Rhode Island's trade-name statute (new suit bar effective 1 January 2025), its LLC fictitious-name statute, and its foreign LLC and foreign corporation statutes each bar maintaining any suit, an eviction included, until the filing is made. A landlord renting under a trade name or through an out-of-state entity needs this.

old_str:
```
The rule does not apply to holdover or lease-violation evictions.
```
new_str:
```
The rule does not apply to holdover or lease-violation evictions. General business filings can also hold up any eviction. If you rent under a trade name rather than your own full name, you must file a trade name certificate with the secretary of state, and until you do you may not maintain any suit in a Rhode Island court; a limited liability company renting under a name other than its registered name must file a fictitious business name statement before it can sue on leases made in that name (R.I. Gen. Laws §§ 6-1-1, 6-1-6 and 7-16-9(b)(5)). And an out-of-state limited liability company or corporation transacting business here may not maintain an eviction or any other suit until it has registered with the secretary of state or obtained a certificate of authority (R.I. Gen. Laws §§ 7-16-49, 7-16-54 and 7-1.2-1418); whether renting out property is transacting business is a case-law question, so register before you need to file. In each case the lease stays valid and you may still defend a suit.
```

Supporting quotes (all read 2026-11-06):
- R.I. Gen. Laws § 6-1-1(a), https://webserver.rilegislature.gov/Statutes/TITLE6/6-1/6-1-1.htm: "No person or persons shall carry on or conduct or transact business in this state under any trade name, or under any designation, name, or style, corporate or otherwise, other than the real name or names of the individual or individuals conducting or transacting business, unless the person or persons shall file, in person, by mail, or electronically with the office of the secretary of state an executed application for a trade name certificate stating: ..."
- R.I. Gen. Laws § 6-1-6, https://webserver.rilegislature.gov/Statutes/TITLE6/6-1/6-1-6.htm: "No person or persons carrying on, conducting, or transacting business under any trade name shall be entitled to maintain any suit in any of the courts of this state until such person or persons have properly completed the registration as provided for in §§ 6-1-1 and 6-1-2. Failure to complete this registration shall not impair the validity of any contract or act of such person or persons and shall not prevent such person or persons from defending any suit in any court of this state." (P.L. 2024, chs. 334, 335, effective January 1, 2025.)
- R.I. Gen. Laws § 6-1-4, https://webserver.rilegislature.gov/Statutes/TITLE6/6-1/6-1-4.htm: "Any person or persons carrying on, conducting, or transacting business as mentioned in this chapter who shall fail to comply with the provisions of this chapter shall be imprisoned not exceeding one year, or fined not exceeding five hundred dollars ($500)."
- R.I. Gen. Laws § 6-1-3, https://webserver.rilegislature.gov/Statutes/TITLE6/6-1/6-1-3.htm: "This chapter shall in no way affect or apply to a duly registered or qualified domestic or foreign corporation, nonprofit corporation, limited liability company, ..."
- R.I. Gen. Laws § 7-16-9(b)(5), https://webserver.rilegislature.gov/Statutes/TITLE7/7-16/7-16-9.htm: "No domestic or foreign limited liability company transacting business under a fictitious business name contrary to the provisions of this section, or its assignee, may maintain any action upon or on account of any contract made, or transaction had, in the fictitious business name in any court of the state until a fictitious business name statement has been filed in accordance with this section."
- R.I. Gen. Laws § 7-16-49(a), https://webserver.rilegislature.gov/Statutes/TITLE7/7-16/7-16-49.htm: "Before transacting business in this state, a foreign limited liability company shall register with the secretary of state." (b)(3) requires "The name and address of the resident agent required by § 7-16-11".
- R.I. Gen. Laws § 7-16-54(a)-(c), https://webserver.rilegislature.gov/Statutes/TITLE7/7-16/7-16-54.htm: "(a) A foreign limited liability company transacting business in this state may not maintain any action, suit, or proceeding in any court of this state until it has registered in this state. (b) The failure of a foreign limited liability company to register in this state does not impair the validity of any contract or act of the foreign limited liability company or prevent the foreign limited liability company from defending any action, suit or proceeding in any court of this state. (c) A foreign limited liability company, by transacting business in this state without registration, appoints the secretary of state as its agent for service of process as to claims for relief or causes of action arising out of the transaction of business in this state." Subsection (e) lists activities that are not transacting business; owning or leasing real property is not among them.
- R.I. Gen. Laws § 7-1.2-1418(a)-(b), https://webserver.rilegislature.gov/Statutes/TITLE7/7-1.2/7-1.2-1418.htm: "(a) No foreign corporation transacting business in this state without a certificate of authority is permitted to maintain any action, suit, or proceeding in any court of this state, until the corporation has obtained a certificate of authority. ... (b) The failure of a foreign corporation to obtain a certificate of authority to transact business in this state does not impair the validity of any contract or act of the corporation, and does not prevent the corporation from defending any action, suit, or proceeding in any court of this state."
- R.I. Gen. Laws § 7-1.2-1401(a), https://webserver.rilegislature.gov/Statutes/TITLE7/7-1.2/7-1.2-1401.htm: "No foreign corporation has the right to transact business in this state until it has procured a certificate of authority to do so from the secretary of state." (b) list of non-business activities does not mention owning real property.

### `edu-rental-registry-ri`

Holds. The row describes the Department of Health registry and does not claim it is the only filing. The trade-name and foreign-entity rules are added to `edu-confirmed-absences-outside-title-ri` and `edu-nonresident-landlord-agent-ri`.

### `edu-absentee-landlord-registration-ri`

Holds. Limited to the Providence/Warwick statute; it makes no claim of absence the general statutes contradict.

### `edu-nonresident-landlord-agent-ri`

FIX. The row covers the individual nonresident agent duty only. It omits that an out-of-state LLC or corporation must register with the secretary of state (naming a resident agent), cannot maintain an eviction until it does, and (for an LLC) appoints the secretary of state for service by transacting business unregistered; and it omits the long-arm statute.

old_str:
```
Rhode Island does not require tenants to withhold tax from rent paid to you.
```
new_str:
```
Rhode Island does not require tenants to withhold tax from rent paid to you. If you own through an out-of-state limited liability company or corporation, it must also register with the secretary of state, naming a Rhode Island resident or registered agent, before transacting business here, and until it does it may not maintain an eviction or any other suit in a Rhode Island court; an LLC that transacts business here unregistered appoints the secretary of state as its agent for service of process on claims arising from that business (R.I. Gen. Laws §§ 7-16-49, 7-16-54 and 7-1.2-1418). Whether renting out property is transacting business is a case-law question, so register before you need to file. And a nonresident with the minimum contacts the Constitution requires can be sued in a Rhode Island court and served inside or outside the state (R.I. Gen. Laws § 9-5-33); owning and renting out property here is likely to supply those contacts for claims about it.
```

Supporting quotes (read 2026-11-06): § 7-16-49(a), (b)(3)-(4); § 7-16-54(a)-(c); § 7-1.2-1418(a) (quoted under the first RI row). Also:
- R.I. Gen. Laws § 7-16-49(b)(4), https://webserver.rilegislature.gov/Statutes/TITLE7/7-16/7-16-49.htm: "A statement that the secretary of state is appointed the agent of the foreign limited liability company for service of process if at any time there is no resident agent or if the resident agent cannot be found or served following the exercise of reasonable diligence;"
- R.I. Gen. Laws § 7-1.2-1410(b)-(c), https://webserver.rilegislature.gov/Statutes/TITLE7/7-1.2/7-1.2-1410.htm: "(c) Every foreign corporation as a condition precedent to carrying on business in this state must, and by so carrying on business in this state does, consent that any process, including the process of garnishment, may be served upon the secretary of state in the manner provided by this section, ..."
- R.I. Gen. Laws § 9-5-33(a)-(b), https://webserver.rilegislature.gov/Statutes/TITLE9/9-5/9-5-33.htm: "(a) Every foreign corporation, every individual not a resident of this state or his or her executor or administrator, and every partnership or association, composed of any person or persons not such residents, that shall have the necessary minimum contacts with the state of Rhode Island, shall be subject to the jurisdiction of the state of Rhode Island, and the courts of this state shall hold such foreign corporations and such nonresident individuals or their executors or administrators, and such partnerships or associations amenable to suit in Rhode Island in every case not contrary to the provisions of the constitution or laws of the United States. (b) Service of process may be made on any such foreign corporation, nonresident individual or his or her executor or administrator, and such partnership or association within or without the state in the manner provided by any applicable procedural rule or in the manner prescribed by order of the court in which the action is brought."
- Open question: whether owning rental property supplies "minimum contacts" is constitutional case law (not searched); the edit says "likely".

### `edu-no-crime-free-lease-statute-ri`

ERROR. "no law requiring you to give police or child-protection investigators information about tenants" is contradicted for reports Rhode Island requires of ANY person: suspected child abuse or neglect (to DCYF within 24 hours), abuse of a person 60 or older, deaths suggesting crime or violence (to police or the medical examiners), and a first-degree sexual assault taking place in one's presence. Each carries a penalty.

old_str:
```
Rhode Island has no statute requiring or regulating crime-free lease addenda, and no law requiring you to give police or child-protection investigators information about tenants or access to a unit.
```
new_str:
```
Rhode Island has no statute requiring or regulating crime-free lease addenda, and no law requiring you, as a landlord, to answer police or child-protection investigators' requests for information about tenants or to give them access to a unit. But the reporting duties Rhode Island puts on every person bind you and your staff. Anyone who has reasonable cause to know or suspect that a child has been abused or neglected must pass that information to the Department of Children, Youth and Families within 24 hours, and a knowing failure is a misdemeanor punishable by a fine of up to $500, up to a year in jail, or both (R.I. Gen. Laws §§ 40-11-3 and 40-11-6.1). Anyone who has reasonable cause to believe that a person 60 or older has been abused, neglected or exploited, or is self-neglecting, must report immediately to the Office of Healthy Aging, and failing to report abuse, neglect or exploitation carries a fine of up to $1,000 (R.I. Gen. Laws § 42-66-8). Anyone who knows of a death that suggests a crime, violence, apparent suicide or a suspicious or unusual manner, as when a tenant is found dead in a unit, must immediately notify the local police or the office of state medical examiners, and willfully failing to report it, or touching or moving the body or nearby items without the medical examiners' order, is a misdemeanor (R.I. Gen. Laws § 23-4-7). And anyone other than the victim who knows that a first-degree sexual assault is taking place in their presence must immediately notify the police, and knowingly failing to is a misdemeanor (R.I. Gen. Laws §§ 11-37-3.1 and 11-37-3.3).
```

Supporting quotes (read 2026-11-06):
- R.I. Gen. Laws § 40-11-3(a), https://webserver.rilegislature.gov/Statutes/TITLE40/40-11/40-11-3.htm: "Any person who has reasonable cause to know or suspect that any child has been abused or neglected as defined in § 40-11-2, or has been a victim of sexual abuse by another child, shall, within twenty-four (24) hours, transfer that information to the department of children, youth and families, or its agent, which shall cause the report to be investigated immediately."
- R.I. Gen. Laws § 40-11-6.1, https://webserver.rilegislature.gov/Statutes/TITLE40/40-11/40-11-6.1.htm: "Any person, official, physician, or institution required by this chapter to report known or suspected child abuse or neglect or to perform any other act who knowingly fails to do so or who knowingly prevents any person acting reasonably from doing so shall be guilty of a misdemeanor, and upon conviction thereof, shall be subject to a fine of not more than five hundred dollars ($500) or imprisonment for not more than one year or both. ..."
- R.I. Gen. Laws § 42-66-8(a), (d), https://webserver.rilegislature.gov/Statutes/TITLE42/42-66/42-66-8.htm: "(a) Any person who has reasonable cause to believe that any person sixty (60) years of age or older has been abused, neglected, or exploited, or is self-neglecting, shall make an immediate report to the director of the office of healthy aging, or the director's designee. ..." "(d) In cases of abuse, neglect, or exploitation, any person who fails to make the report shall be punished by a fine of not more than one thousand dollars ($1,000). ..."
- R.I. Gen. Laws § 23-4-7(a), https://webserver.rilegislature.gov/Statutes/TITLE23/23-4/23-4-7.htm: "(1) Where any person shall die in any manner to suggest the possibility of a criminal act or as the result of violence or apparent suicide, or from a criminal abortion or in any suspicious or unusual manner, it shall be the duty of any person having knowledge of those deaths to immediately notify the police of the city or town where the body of the deceased person lies or to notify the office of state medical examiners. ... (2) Any person who willfully neglects or refuses to report that death or who without an order from an agent of the office of medical examiners willfully touches, removes, or disturbs the body of that dead person, or willfully touches, removes, or disturbs the clothing or any article upon or near that body, shall be guilty of a misdemeanor." (f): felony if done "with the intention of concealing a crime".
- R.I. Gen. Laws § 11-37-3.1, https://webserver.rilegislature.gov/Statutes/TITLE11/11-37/11-37-3.1.htm: "Any person, other than the victim, who knows or has reason to know that a first degree sexual assault or attempted first degree sexual assault is taking place in his or her presence shall immediately notify the state police or the police department of the city or town in which the assault or attempted assault is taking place of the crime."
- R.I. Gen. Laws § 11-37-3.3, https://webserver.rilegislature.gov/Statutes/TITLE11/11-37/11-37-3.3.htm: "Any person who knowingly fails to report a sexual assault or attempted sexual assault as required under § 11-37-3.1 shall be guilty of a misdemeanor and, upon conviction, shall be punished by imprisonment for not more than one year, or fined not more than five hundred dollars ($500), or both." (§ 11-37-3.2: no charge without the victim's signed complaint.)
- Checked, not relied on: R.I. Gen. Laws § 40.1-27-2 (developmental-disability program participants) binds persons acting within employment at a program or in a professional capacity; "any other person may make a report" (§ 40.1-27-2(b)). Misprision of felony is not codified in Title 11 as far as checked; whether it survives as a common-law crime (R.I. Gen. Laws § 11-1-1) is a case-law question, not searched.

### `edu-whole-code-checks-nh`

FIX. Item (3) concludes registration is not a condition of filing an eviction. An out-of-state LLC doing business in New Hampshire cannot maintain any action until it registers and pays back fees; an out-of-state corporation without a certificate of authority cannot maintain a proceeding. (New Hampshire's trade-name chapter has no suit bar; RSA 349:12 is repealed.)

old_str:
```
(3) There is no statewide landlord registration or rental license, so registration is not a condition of filing an eviction.
```
new_str:
```
(3) There is no statewide landlord registration or rental license, so registration is not a condition of filing an eviction. One general business rule can still stop you if you own through an out-of-state entity: an out-of-state limited liability company doing business in New Hampshire must register with the Secretary of State, and until it has registered and paid the fees for the period it was unregistered it may not maintain any action, an eviction included; an out-of-state corporation transacting business here without a certificate of authority may not maintain a proceeding until it gets one (N.H. Rev. Stat. Ann. §§ 304-C:175, 304-C:180 and 293-A:15.02). Owning property without more is not doing business, but renting it out may be; that is a case-law question (§§ 304-C:174, I(i) and 293-A:15.01(b)(9)).
```

Supporting quotes (read 2026-11-06):
- N.H. Rev. Stat. Ann. § 304-C:175, https://gc.nh.gov/rsa/html/XXVIII/304-C/304-C-175.htm: "Before doing business in New Hampshire, a foreign limited liability company shall register with the secretary of state. ... IV. The address of the registered office and name and address of the registered agent for service of process required to be maintained under RSA 304-C:177, IV;"
- § 304-C:180, https://gc.nh.gov/rsa/html/XXVIII/304-C/304-C-180.htm: "I. A foreign limited liability company doing business in New Hampshire may not maintain any action, suit or proceeding in New Hampshire until it has registered in New Hampshire and has paid all fees for the period during which it did business in New Hampshire while unregistered. II. The failure of a foreign limited liability company to register in New Hampshire does not: (a) Impair the validity of any contract or act of the foreign limited liability company. (b) Impair the right of any other party to the contract to maintain any action, suit, or proceeding on the contract. (c) Prevent the foreign limited liability company from defending any action, suit, or proceeding in any court of New Hampshire. ..."
- § 304-C:174, I(i), https://gc.nh.gov/rsa/html/XXVIII/304-C/304-C-174.htm: "The following activities of a foreign limited liability company, among others, do not constitute doing business within the meaning of RSA 304-C:175: ... (i) Owning, without more, real or personal property;"
- § 293-A:15.01(a), (b)(9), https://gc.nh.gov/rsa/html/XXVII/293-A/293-A-1501.htm: "(a) A foreign corporation may not transact business in this state until it obtains a certificate of authority from the secretary of state. (b) The following activities, among others, do not constitute transacting business ...: ... (9) owning, without more, real or personal property;"
- § 293-A:15.02(a), (e), https://gc.nh.gov/rsa/html/XXVII/293-A/293-A-1502.htm: "(a) A foreign corporation transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority. ... (e) Notwithstanding RSA 293-A:15.02(a) and (b), the failure of a foreign corporation to obtain a certificate of authority does not impair the validity of its corporate acts or prevent it from defending any proceeding in this state."
- Trade names, https://gc.nh.gov/rsa/html/XXXI/349/349-mrg.htm (whole chapter read): registration duty in § 349:1, I and § 349:5; penalty § 349:9 ("guilty of a violation if a natural person, or guilty of a misdemeanor if any other person"); no bar on suits ("349:12 Repealed by 1998, 106:3").

### `edu-agent-for-service-nh`

FIX. "New Hampshire doesn't bar you from suing a tenant if you haven't filed" is accurate for the RSA 540:1-b statement, but the row omits that an out-of-state LLC or corporation does face a bar on suing until it registers, and that RSA 510:4 subjects every nonresident property owner (restricted property or not) to suit with service on the Secretary of State.

old_str:
```
The filing is with the clerk, not in the lease, and New Hampshire doesn't bar you from suing a tenant if you haven't filed.
```
new_str:
```
The filing is with the clerk, not in the lease, and New Hampshire doesn't bar you from suing a tenant if you haven't filed it. Two general rules reach out-of-state owners whatever kind of property they own. Any nonresident who owns real property in New Hampshire can be sued here on claims arising from it, with the papers left with the Secretary of State and a copy sent to you by registered mail (N.H. Rev. Stat. Ann. § 510:4, I-II). And if you own through an out-of-state limited liability company doing business here, it must register with the Secretary of State, naming a registered agent, and until it has registered and paid the fees for the unregistered period it may not maintain any action, an eviction included; while unregistered it is deemed to have appointed the Secretary of State as its agent for legal papers. An out-of-state corporation transacting business here without a certificate of authority likewise may not maintain a proceeding (N.H. Rev. Stat. Ann. §§ 304-C:175, 304-C:180, 304-C:182 and 293-A:15.02). Owning property without more is not doing business; whether renting it out is, is a case-law question.
```

Supporting quotes (read 2026-11-06): §§ 304-C:175, 304-C:180, 293-A:15.02 as quoted under `edu-whole-code-checks-nh`. Also:
- N.H. Rev. Stat. Ann. § 510:4, I-II, https://gc.nh.gov/rsa/html/LII/510/510-4.htm: "I. Jurisdiction. Any person who is not an inhabitant of this state and who, in person or through an agent, transacts any business within this state, commits a tortious act within this state, or has the ownership, use, or possession of any real or personal property situated in this state submits himself, or his personal representative, to the jurisdiction of the courts of this state as to any cause of action arising from or growing out of the acts enumerated above. II. Service of Process on Secretary of State. Service of process upon any person who is subject to the jurisdiction of this state, as provided in this section, may be made by leaving a copy thereof, with a fee of $10, in the hands or office of the secretary of state. ... provided that notice thereof and a copy of the process is forthwith sent by registered mail, postage prepaid, by the plaintiff or his attorney to the defendant at his last known abode or place of business ..."
- § 304-C:182, I, https://gc.nh.gov/rsa/html/XXVIII/304-C/304-C-182.htm: "Any foreign limited liability company not registered under RSA 304-C:175, doing business in New Hampshire shall be deemed to have appointed and constituted the secretary of state of New Hampshire its agent for the acceptance of legal process in any action, suit, or proceeding, whether criminal or civil, against it in any state or federal court in New Hampshire arising or growing out of any business done by it within New Hampshire." IV: service "in accordance with the provisions of RSA 510:4, II."

### `edu-no-law-enforcement-cooperation-rule-nh`

ERROR. "no statute requiring you ... to give police or child-protection investigators information about tenants" is contradicted by New Hampshire's ANY-PERSON reporting duties: suspected child abuse or neglect (RSA 169-C:29, "or any other person having reason to suspect"), vulnerable-adult abuse (RSA 161-F:46, "Any person"), both misdemeanors if knowingly not made; and the duty of anyone who finds a body in a medico-legal death to notify the medical examiner and county attorney (RSA 611-B:12; no penalty section found in ch. 611-B).

old_str:
```
New Hampshire has no statute requiring you to join a crime-free housing program, to give police or child-protection investigators information about tenants or access to units, or to refrain from acting on a tenant's calls for police or emergency help.
```
new_str:
```
New Hampshire has no statute requiring you, as a landlord, to join a crime-free housing program, to answer police or child-protection investigators' requests for information about tenants or give them access to units, or to refrain from acting on a tenant's calls for police or emergency help. But New Hampshire's reporting duties bind every person, you and your staff included. Anyone having reason to suspect that a child has been abused or neglected must report it immediately, by telephone or otherwise, to the Department of Health and Human Services (N.H. Rev. Stat. Ann. §§ 169-C:29 and 169-C:30). Anyone suspecting or believing in good faith that a vulnerable adult has been abused, neglected or exploited, or is living in hazardous conditions, must report it immediately to the department, or after hours to the local police or the county sheriff (§ 161-F:46). Knowingly failing to make either report is a misdemeanor (§§ 169-C:39 and 161-F:50). And anyone who finds the body of a person whose death may have resulted from a crime, suicide, an accident, an overdose or another circumstance the medical examiner law lists, as when a tenant is found dead in a unit, must immediately notify the medical examiner and the county attorney (§§ 611-B:11, II and 611-B:12).
```

Supporting quotes (read 2026-11-06):
- N.H. Rev. Stat. Ann. § 169-C:29, https://gc.nh.gov/rsa/html/XII/169-C/169-C-29.htm: "Any physician, surgeon, county medical examiner, ... law enforcement official, priest, minister, or rabbi or any other person having reason to suspect that a child has been abused or neglected shall report the same in accordance with this chapter."
- § 169-C:30, https://gc.nh.gov/rsa/html/XII/169-C/169-C-30.htm: "An oral report shall be made immediately by telephone or otherwise, and followed within 48 hours by a report in writing, if so requested, to the department. ..."
- § 169-C:39, https://gc.nh.gov/rsa/html/XII/169-C/169-C-39.htm: "Anyone who knowingly violates any provision of this subdivision shall be guilty of a misdemeanor."
- § 161-F:46, https://gc.nh.gov/rsa/html/XII/161-F/161-F-46.htm: "Any person, including, but not limited to, physicians, other health care professionals, social workers, clergy, and law enforcement officials, suspecting or believing in good faith that any adult who is or who is suspected to be vulnerable, at the time of the incident, has been subjected to abuse, neglect, self-neglect, or exploitation or is, or was living in hazardous conditions shall report or cause a report to be made as follows: I. An oral report, by telephone or otherwise, shall be made immediately, followed by a written report, if so requested, to the commissioner or his authorized representative. When oral reports are made after working hours of the department, or on weekends or holidays, such reports shall be made to the police department of the appropriate political subdivision, or to the sheriff of the county, in which the alleged abuse, neglect or exploitation occurred. ..." (source note includes 2026, 278:3, eff. Aug. 31, 2026).
- § 161-F:50, https://gc.nh.gov/rsa/html/XII/161-F/161-F-50.htm: "Any person who knowingly fails to make any report required by RSA 161-F:46 shall be guilty of a misdemeanor."
- § 611-B:12, https://gc.nh.gov/rsa/html/LIX/611-B/611-B-12.htm: "It shall be the duty of anyone who finds the body of any person whose death is suspected to have been caused or to have occurred in any manner described in RSA 611-B:11, or who finds remains which are thought to be human to immediately notify the medical examiner and the county attorney for the county where the body or remains are found."
- § 611-B:11, II, https://gc.nh.gov/rsa/html/LIX/611-B/611-B-11.htm: "A medico-legal case exists when death is pronounced or remains are found indicating that a human has died and that death is known or suspected to have resulted from: (a) Any death known or suspected to have occurred during or as a result of any criminal act ... (b) Any death by suicide ... (c) Any death due to accidental or unintentional injury ... (h) Poison, illicit drug use, or an overdose of any drug or medication. ... (k) Sudden unexpected death when in apparent good health of a person under the age of 60 years. (l) Death of a person whose medical care has not been regularly followed by a physician. ... (x) Suspicious or unusual circumstances surrounding a presumed natural death."
- Not found: a penalty for § 611-B:12 (searched the merged chapter text for "penalt", "misdemeanor", "violation": no hits); any NH witnessed-crime or misprision statute was not searched exhaustively.

### `edu-no-landlord-registration-nh`

ERROR. "The only statewide filing is for owners of restricted property" is contradicted by two general filings: trade-name registration with the Secretary of State for a sole proprietor renting under a name other than their own (and for every partnership), and registration of an out-of-state LLC or certificate of authority for an out-of-state corporation doing business here.

old_str:
```
The only statewide filing is for owners of restricted property
```
new_str:
```
The only statewide filing aimed at landlords is for owners of restricted property
```

old_str:
```
The town may charge a reasonable filing fee and may fine you up to $100 for not filing.
```
new_str:
```
The town may charge a reasonable filing fee and may fine you up to $100 for not filing. General business filings can apply too. If you rent as a sole proprietor under a name other than your own, or as a partnership, you must register the trade name with the Secretary of State and renew it every 5 years; failing to is a violation for an individual and a misdemeanor for anyone else (N.H. Rev. Stat. Ann. §§ 349:1, I, 349:5, 349:8 and 349:9). And an out-of-state limited liability company or corporation doing business here must register with the Secretary of State or obtain a certificate of authority, and cannot maintain an eviction until it does (see "In-State Agent for Legal Papers").
```

Supporting quotes (read 2026-11-06), https://gc.nh.gov/rsa/html/XXXI/349/349-mrg.htm:
- § 349:1, I: "Every sole proprietor doing business in this state under any name other than the sole proprietor's own name, and every partnership, trust or association doing business in this state shall register the trade name of such business, trust or association in the manner provided in RSA 349:5 and 349:6."
- § 349:5: "Every person, proprietorship, partnership, or association, as defined in RSA 349:1, engaged in the conduct of any business, enterprise, venture, or activity within the state of New Hampshire under a trade name, firm, or style shall, subject to the limitations hereinafter set forth, file in the office of the secretary of state a certificate ..."
- § 349:8: "Every person, proprietorship, partnership or association registered in accordance with the requirements of this subdivision shall be required to reregister at the time of the expiration of the 5-year period set forth in RSA 349:6. ..."
- § 349:9: "Any person who fails to comply with the provisions of the preceding sections of this chapter shall be guilty of a violation if a natural person, or guilty of a misdemeanor if any other person."
- Foreign LLC / corporation: §§ 304-C:175, 304-C:180, 293-A:15.01, 293-A:15.02 as quoted under `edu-whole-code-checks-nh`.

### `edu-property-manager-licensing-nh`

Holds. Real estate licensing row; no general-statute miss of the four types.

### `edu-whole-code-checks-me`

FIX. Item (3) says nothing makes registration a precondition. Maine's foreign-corporation statute bars any proceeding until the corporation files for authority, and its foreign-LLC statute bars a proceeding "for the collection of its debts" (e.g., unpaid rent) until a statement of foreign qualification is filed.

old_str:
```
(3) No state statute makes landlord registration or a rental license a condition of getting a possession judgment; some municipalities run registration or licensing programs, so check local rules.
```
new_str:
```
(3) No state statute makes landlord registration or a rental license a condition of getting a possession judgment; some municipalities run registration or licensing programs, so check local rules. General business law can still hold up your case if you own through an out-of-state entity: an out-of-state corporation transacting business in Maine without authority may not maintain any court proceeding until it files an application for authority, and an out-of-state limited liability company conducting activities here without a statement of foreign qualification on file may not maintain a proceeding to collect its debts, such as unpaid rent; each also owes a $500 civil penalty for each year (Me. Rev. Stat. tit. 13-C, §§ 1501-1502; tit. 31, §§ 1622, 1629). Owning property without more is not transacting business; whether renting it out is, and whether an eviction seeking only possession is a proceeding to collect debts, are case-law questions.
```

Supporting quotes (read 2026-11-06):
- Me. Rev. Stat. tit. 13-C, § 1501(1), (2)(I), https://legislature.maine.gov/statutes/13-C/title13-Csec1501.html: "A foreign corporation may not transact business in this State until the foreign corporation files an application for authority to transact business with the Secretary of State." "Activities that do not constitute transacting business within the meaning of subsection 1 include but are not limited to: ... I. Owning, without more, real or personal property other than agricultural real estate;"
- tit. 13-C, § 1502(1), (4), (5), https://legislature.maine.gov/statutes/13-C/title13-Csec1502.html: "1. No court proceeding. A foreign corporation transacting business in this State without authority may not maintain a proceeding in any court in this State until it files an application for authority and pays the applicable filing fee." "4. Civil penalty. A foreign corporation is liable for a civil penalty of $500 for each year, or portion thereof, it transacts business in this State without authority. ..." "5. ... the failure of a foreign corporation to file an application for authority does not impair the validity of its corporate acts, including contracts, or prevent it from defending any proceeding in this State."
- tit. 31, § 1622(1), https://legislature.maine.gov/statutes/31/title31sec1622.html: "A foreign limited liability company may not conduct activities in this State except in compliance with this subchapter and not until its statement of foreign qualification is filed in the records of the Secretary of State." (2)(D): the statement must include "The information required by Title 5, section 105, subsection 1;"
- tit. 31, § 1623(1)(I), https://legislature.maine.gov/statutes/31/title31sec1623.html: "Owning, without more, real or personal property;"
- tit. 31, § 1629(1), (3), (5), https://legislature.maine.gov/statutes/31/title31sec1629.html: "1. ... A foreign limited liability company conducting activities in this State, or anyone on its behalf, may not maintain a proceeding in any court in this State for the collection of its debts unless an effective statement of foreign qualification for the foreign limited liability company is in the records of the office of the Secretary of State." "3. Civil penalty. A foreign limited liability company is liable for a civil penalty of $500 for each year, or portion thereof, it transacts business in this State without first complying with the requirements of section 1622." "5. ... does not impair the validity of the acts of the foreign limited liability company or prevent the foreign limited liability company from defending any proceeding in this State."
- Assumed names (not a suit bar): tit. 31, §§ 1, 2, 5, 7 (quoted under `edu-no-landlord-registration-me`); tit. 31, § 1510(5) (LLC assumed name: remedy is an injunction, not a suit bar).

### `edu-no-landlord-registration-me`

FIX. "no rule that an out-of-state owner must ... keep an in-state contact" is true of individuals, but an out-of-state corporation or LLC must file with the Secretary of State, naming a clerk or registered agent, before transacting business; and a sole proprietor or partnership in a "mercantile enterprise" under an assumed name must file with the municipal clerk (whether renting is "mercantile" is doubtful, so stated as unclear).

old_str:
```
Maine has no statewide landlord registration or rental licensing requirement, no county or assessor registration, and no rule that an out-of-state owner must hire an in-state broker or keep an in-state contact for tenants.
```
new_str:
```
Maine has no statewide landlord registration or rental licensing requirement, no county or assessor registration, and no rule that an out-of-state owner must hire an in-state broker or keep an in-state contact for tenants. If you own through an out-of-state corporation or limited liability company, though, it must file with the Secretary of State, naming a registered agent or clerk, before it transacts business or conducts activities here (an application for authority or a statement of foreign qualification); owning property without more does not count, but renting it out may, and until the entity files it may be unable to sue (Me. Rev. Stat. tit. 5, § 105; tit. 13-C, §§ 1501-1502; tit. 31, §§ 1622-1623, 1629; see `edu-owner-agent-me`). And a sole proprietor or partnership engaged in a mercantile enterprise under a name other than the owner's own must file a certificate with the town or city clerk before starting, on pain of a $5-a-day fine; whether renting out property is a mercantile enterprise is unclear (Me. Rev. Stat. tit. 31, §§ 1, 2, 5).
```

Supporting quotes (read 2026-11-06): tit. 13-C, §§ 1501-1502; tit. 31, §§ 1622, 1623, 1629 as quoted under `edu-whole-code-checks-me`. Also:
- Me. Rev. Stat. tit. 5, § 105(1), https://legislature.maine.gov/statutes/5/title5sec105.html: "A clerk or registered agent filing must state: A. The name of the represented entity's commercial clerk or commercial registered agent; or B. If the entity does not have a commercial clerk or commercial registered agent: (1) The name and address of the entity's noncommercial clerk or noncommercial registered agent; or (2) The title of an office or other position with the entity if service of process is to be sent to the person holding that office or position, and the address of the business office of that person."
- tit. 31, § 1, https://legislature.maine.gov/statutes/31/title31sec1.html: "Whenever 2 or more persons become associated as partners or otherwise for the purpose of engaging in any mercantile enterprise, they shall, before commencing business, deposit in the office of the clerk of the city or town in which the same is to be carried on a certificate signed and sworn to by them, ..."
- tit. 31, § 2, https://legislature.maine.gov/statutes/31/title31sec2.html: "Whenever any person intends to engage in such business as sole proprietor thereof, and to adopt any business name, style or designation other than his own name exclusively, he shall, before commencing business, deposit in the office of the clerk of the city or town in which such business is to be carried on a certificate signed and sworn to by him, ..."
- tit. 31, § 5, https://legislature.maine.gov/statutes/31/title31sec5.html: "Whoever fails to deposit seasonably the certificate required by sections 1 and 2 shall be punished by a fine of $5 for each day he is in default."
- tit. 31, § 7, https://legislature.maine.gov/statutes/31/title31sec7.html: "Sections 1 and 2 do not apply to corporations, limited partnerships or limited liability companies. ..."
- Not read: tit. 13-C, § 1503 (contents of a corporation's application for authority); the edit's "naming a registered agent or clerk" rests on tit. 31, § 1622(2)(D) and tit. 5, § 105 for LLCs. If the applier wants to be strict, the corporation half of that clause is a lead, official text unread.

### `edu-owner-agent-me`

ERROR. "Maine does not make a nonresident owner appoint an in-state agent or file anything before suing" is contradicted for out-of-state entities (tit. 13-C, § 1502; tit. 31, § 1629). The row also omits the long-arm statute, which reaches any owner of Maine real estate.

old_str:
```
Maine does not make a nonresident owner appoint an in-state agent or file anything before suing, and it does not require tenants to withhold income tax from rent paid to a nonresident owner.
```
new_str:
```
Maine does not make a nonresident individual owner appoint an in-state agent or file anything before suing, and it does not require tenants to withhold income tax from rent paid to a nonresident owner. An out-of-state entity is different. An out-of-state corporation transacting business in Maine must file an application for authority with the Secretary of State and may not maintain any court proceeding until it does; an out-of-state limited liability company conducting activities here must file a statement of foreign qualification, naming a registered agent or clerk, and may not maintain a proceeding to collect its debts, such as unpaid rent, until it does; and each owes a $500 civil penalty for every year it operates without filing (Me. Rev. Stat. tit. 13-C, §§ 1501-1502; tit. 31, §§ 1622, 1629). Owning property without more is not transacting business; whether renting it out is, is a case-law question. And whoever you are, owning real estate in Maine lets a Maine court hear a claim arising from it, with the summons served on you personally outside the state (Me. Rev. Stat. tit. 14, § 704-A(2)(C), (3)).
```

Supporting quotes (read 2026-11-06): tit. 13-C, §§ 1501-1502; tit. 31, §§ 1622-1623, 1629; tit. 5, § 105 as quoted above. Also:
- Me. Rev. Stat. tit. 14, § 704-A(2), (3), https://legislature.maine.gov/statutes/14/title14sec704-A.html: "2. Causes of action. Any person, whether or not a citizen or resident of this State, who in person or through an agent does any of the acts hereinafter enumerated in this section, thereby submits such person, and, if an individual, his personal representative, to the jurisdiction of the courts of this State as to any cause of action arising from the doing of any of such acts: A. The transaction of any business within this State; ... C. The ownership, use or possession of any real estate situated in this State; ..." "3. Personal service. Service of process upon any person who is subject to the jurisdiction of the courts of this State, as provided in this section, may be made by personally serving the summons upon the defendant outside this State, with the same force and effect as though summons had been personally served within this State."

### `edu-no-crime-free-lease-rule-me`

FIX. The row does not claim there are no reporting duties, but it omits Maine's one ANY-PERSON duty that a landlord will meet: reporting a suspected medical examiner case (e.g., a tenant found dead from injury, overdose or unexplained causes) and not moving the body or objects. No penalty provision was found in tit. 22, ch. 711 for § 3026. Child and adult abuse reporting duties bind listed professionals (a "municipal code enforcement official" is listed for children, not landlords); anyone may report.

old_str:
```
Criminal activity by the tenant or guests can support a 7-day notice when it is a violation of law regarding the tenancy, a nuisance, or violence or threats.
```
new_str:
```
Criminal activity by the tenant or guests can support a 7-day notice when it is a violation of law regarding the tenancy, a nuisance, or violence or threats. One reporting duty binds every person, landlords and their staff included: anyone who becomes aware of a suspected medical examiner case, as when a tenant is found dead from an injury, poisoning or overdose, dies suddenly while in apparent good health, or has no physician able to certify a natural death, must immediately notify a law enforcement officer or the Office of Chief Medical Examiner, and no one may move or alter the body or objects at the scene before the medical examiner arrives or authorizes it (Me. Rev. Stat. tit. 22, §§ 3025(1), 3026(1), 3027(1)). Maine's child and adult abuse reporting duties bind listed professionals, not landlords as such, though anyone may report (Me. Rev. Stat. tit. 22, §§ 4011-A(1), (3), 3477, 3479).
```

Supporting quotes (read 2026-11-06):
- Me. Rev. Stat. tit. 22, § 3026(1), https://legislature.maine.gov/statutes/22/title22sec3026.html: "Any person who becomes aware of a suspected medical examiner case shall immediately notify a law enforcement officer or the Office of Chief Medical Examiner. As used in this subsection, "person" means a natural person, including a public servant, and a corporation, partnership, unincorporated association or any other nonhuman legal entity, including any governmental unit."
- tit. 22, § 3025(1), https://legislature.maine.gov/statutes/22/title22sec3025.html: "A medical examiner case may exist and must be reported as provided in section 3026 when remains are found that may be human and raise suspicion that death has occurred under any of the following circumstances: A. Death is suspected of having been caused by any type of physical injury, including poisoning, regardless of whether the suspected manner of death is homicide, suicide or accident. ... B. Suddenly when the person is in apparent good health and has no specific natural disease sufficient to explain death; ... K. Any cause when there is no attending physician capable of certifying the death as due to natural causes. ..." "In any case in which the necessity of a report is questionable, a report must be made."
- tit. 22, § 3027(1)(A), https://legislature.maine.gov/statutes/22/title22sec3027.html: "In any medical examiner case a person may not move or alter the body or any objects at the scene of death prior to the arrival, or without the express authorization, of the medical examiner or Office of Chief Medical Examiner;"
- tit. 22, § 4011-A(1), (3), https://legislature.maine.gov/statutes/22/title22sec4011-A.html: "The following adult persons shall immediately, within no more than 24 hours, report ... A-1. When acting in a professional capacity: (1) School personnel; ... (12) A municipal code enforcement official; ..." "3. Optional report. Any person may make a report if that person knows or has reasonable cause to suspect that a child has been or is likely to be abused or neglected or that there has been a suspicious child death."
- tit. 22, § 3477(1), https://legislature.maine.gov/statutes/22/title22sec3477.html: "The following persons immediately shall report to the department when the person knows or has reasonable cause to suspect that an incapacitated or dependent adult has been or is likely to be abused, neglected or exploited: A. While acting in a professional capacity: (1) An allopathic or osteopathic physician; ..." (list of professionals).
- tit. 22, § 3479, https://legislature.maine.gov/statutes/22/title22sec3479.html: "Any person may make a report to the department when that person has reasonable cause to suspect an incapacitated or dependent adult has been or is at substantial risk of abuse, neglect or exploitation."
- Chapter 711 section list read (https://legislature.maine.gov/statutes/22/title22ch711sec0.html): no penalty section for § 3026.

### `edu-property-manager-licensing-me`

Holds. Licensing row; no general-statute miss of the four types.

### `edu-whole-code-checks-vt`

FIX. Item (3) misses three general registration rules that bar suits (and in Vermont even counterclaims and affirmative defenses): assumed-business-name/partnership registration (rewritten by 2025 Act No. 10, effective July 1, 2025), the foreign LLC certificate of authority, and the foreign corporation certificate of authority.

old_str:
```
(3) No state statute makes landlord registration or a rental license a condition of a possession judgment.
```
new_str:
```
(3) No state statute makes landlord registration or a rental license a condition of a possession judgment, but general business registration can be. If you rent as an individual under an assumed business name, or as a partnership, you must register with the Secretary of State within 10 days after starting, and an out-of-state limited liability company or corporation transacting business here needs a certificate of authority. Until it registers, the business may not maintain an action or proceeding, or even raise a counterclaim or affirmative defense, in a Vermont court, and the State may collect $50 a day, up to $10,000 a year (11 V.S.A. §§ 1621, 1626 and 4119; 11A V.S.A. § 15.02). Owning property is not by itself transacting business for an entity, but renting it out may be; that is a case-law question (11 V.S.A. § 4113(c)(9); 11A V.S.A. § 15.01(c)(10)).
```

Supporting quotes (read 2026-11-06):
- 11 V.S.A. § 1621(a)-(b), https://legislature.vermont.gov/statutes/section/11/015/01621: "(a) An individual doing business under an assumed business name, or a partnership or unincorporated nonprofit association of individuals doing business in this State, resident or nonresident, shall submit to the Secretary of State for filing a registration that provides: ... (5) for each individual, partner, or member who is not a resident of this State, or for whom the registrant does not provide an address in this State for service of process, the name, email, and address information of an agent for service of process pursuant to section 1655 of this title. (b) A registration shall be subscribed and sworn to by a person with authority to act on behalf of the registrant and filed with the Secretary of State not later than 10 days after commencement of business."
- 11 V.S.A. § 1626(a), (b), (d), (e), https://legislature.vermont.gov/statutes/section/11/015/01626: "(a) A person transacting business in this State who is not registered with the Secretary of State as required under this subchapter and any successor to the person or assignee of a cause of action arising out of the business of the person, may not maintain an action or proceeding or raise a counterclaim, crossclaim, or affirmative defense in this State until the person, successor, or assignee registers with the Secretary. (b) The failure of a person to register as required under this subchapter does not impair the validity of a contract or act of the person or preclude it from defending an action or proceeding in this State. ... (d) If a person transacts business in this State without registering with the Secretary of State as required under this subchapter, the Secretary is its agent for service of process with respect to a right of action arising out of the transaction of business in this State. (e) A person that transacts business in this State without registering with the Secretary of State as required under this subchapter shall be liable to the State for: (1) a civil penalty of $50.00 for each day, not to exceed a total of $10,000.00 for each year, it transacts business in this State without a registration; ..."
- 11 V.S.A. § 4113(a), (c)(9), https://legislature.vermont.gov/statutes/section/11/025/04113: "(a) A foreign limited liability company may not transact business in this State until it obtains a certificate of authority from the Secretary of State. ... (c) Among others, the following activities without more do not constitute transacting business for the purpose of determining whether a foreign limited liability company is required to obtain a certificate of authority under subsection (a) of this section: ... (9) owning real or personal property;"
- 11 V.S.A. § 4119(a)(1), (b), (d), (e)(1), https://legislature.vermont.gov/statutes/section/11/025/04119: "(a)(1) A foreign limited liability company transacting business in this State may not maintain a proceeding or raise a counterclaim, crossclaim, or affirmative defense in any court in this State until it obtains a certificate of authority to transact business in this State. ... (b) The failure of a foreign limited liability company to have a certificate of authority to transact business in this State does not impair the validity of a contract or act of the company or prevent the foreign limited liability company from defending an action or proceeding in this State. ... (d) If a foreign limited liability company transacts business in this State without a certificate of authority, it appoints the Secretary of State as its agent for service of process for claims arising out of the transaction of business in this State. (e) ... (1) a civil penalty of $50.00 for each day, not to exceed a total of $10,000.00 for each year, ..."
- 11A V.S.A. § 15.01(a), (c)(10), https://legislature.vermont.gov/statutes/section/11A/015/00015.01: "(a) A foreign corporation may not transact business in this State until it obtains a certificate of authority from the Secretary of State. ... (c) Among others, the following activities without more do not constitute transacting business ...: ... (10) owning real or personal property;"
- 11A V.S.A. § 15.02(a), (d)(1), (f), https://legislature.vermont.gov/statutes/section/11A/015/00015.02: "(a) A foreign corporation transacting business in this State without a certificate of authority may not maintain a proceeding or raise a counterclaim, crossclaim, or affirmative defense in any court in this State until it obtains a certificate of authority. ... (d) ... (1) a civil penalty of $50.00 for each day, not to exceed a total of $10,000.00 for each year, ... (f) Notwithstanding subsections (a) and (b) of this section, the failure of a foreign corporation to obtain a certificate of authority does not impair the validity of its corporate acts, to the extent they are otherwise in compliance with law, or prevent it from defending any proceeding in this State."

### `edu-no-landlord-registration-vt`

FIX. The row says there is no rule that an out-of-state owner must keep an in-state contact; it omits Vermont's general registration rules (assumed-name/partnership registration with a Vermont agent for nonresidents; foreign LLC/corporation certificate of authority, which names a Vermont agent; suit bar).

old_str:
```
Vermont has no statewide landlord registration or rental licensing requirement for long-term rentals, no county or assessor registration, and no rule that an out-of-state owner must hire an in-state broker or keep an in-state contact for tenants.
```
new_str:
```
Vermont has no statewide landlord registration or rental licensing requirement for long-term rentals, no county or assessor registration, and no rule that an out-of-state owner must hire an in-state broker or keep an in-state contact for tenants. General business registration can still reach you: an individual renting under an assumed business name, and any partnership, must register with the Secretary of State within 10 days after starting, and a nonresident registrant must name a Vermont agent for service of process; an out-of-state limited liability company or corporation transacting business here needs a certificate of authority, and an LLC's application names a Vermont agent; and until the registration is made the business may not sue (11 V.S.A. §§ 1621, 1626, 4112 and 4119; 11A V.S.A. §§ 15.01-15.02; see `edu-no-nonresident-owner-agent-vt`).
```

Supporting quotes (read 2026-11-06): §§ 1621, 1626, 4119; 11A §§ 15.01-15.02 as quoted under `edu-whole-code-checks-vt`. Also:
- 11 V.S.A. § 4112(a)(4), https://legislature.vermont.gov/statutes/section/11/025/04112: "the name, email, and address information of its agent for service of process in this State pursuant to section 1655 of this title."
- 11 V.S.A. § 1655(a), https://legislature.vermont.gov/statutes/section/11/015/01655: "A person doing business in this State that is required to designate and maintain an agent for service of process shall provide the name, email, and address information of an individual resident of this State or of a business organization that has a place of business in, and is authorized to conduct business in, this State."

### `edu-no-crime-free-lease-rule-vt`

FIX. The row omits two Vermont duties binding any person that a landlord or staff can meet at a rental: the person discovering a body in a violent, sudden, unattended, suicide/injury or suspicious death must immediately notify the medical examiner; and the general duty to give reasonable assistance to a person exposed to grave physical harm ($100 fine for willful violation). Child and vulnerable-adult reporting are mandated only for listed reporters.

old_str:
```
Clauses aimed at the tenant's own criminal conduct that threatens other residents are consistent with Vermont's termination statute.
```
new_str:
```
Clauses aimed at the tenant's own criminal conduct that threatens other residents are consistent with Vermont's termination statute. Two duties bind every person, you and your staff included. Whoever discovers the body of a person who died from violence, suddenly while in apparent good health, unattended by a physician, by casualty, suicide or injury, or in any unusual, unnatural or suspicious manner, as when a tenant is found dead in a unit, must immediately notify the nearest medical examiner (18 V.S.A. § 5205(a)). And a person who knows that another is exposed to grave physical harm must give reasonable assistance if it can be done without danger to themselves and no one else is already helping; a willful failure carries a fine of up to $100 (12 V.S.A. § 519). Vermont's child and vulnerable-adult abuse reporting duties bind listed professionals and care providers, not landlords as such, though anyone may report (33 V.S.A. §§ 4913(a), (c), (e) and 6903(a)-(b)).
```

Supporting quotes (read 2026-11-06):
- 18 V.S.A. § 5205(a), https://legislature.vermont.gov/statutes/section/18/107/05205: "When a person dies from violence, or suddenly when in apparent good health or when unattended by a physician or a recognized practitioner of a well-established church, or by casualty, or by suicide or as a result of injury or when in jail or prison, or any psychiatric hospital, or in any unusual, unnatural, or suspicious manner, or in circumstances involving a hazard to public health, welfare, or safety, the head of the household, the jailer, or the superintendent of a psychiatric hospital where such death occurred, or the next of kin, or the person discovering the body or any doctor notified of the death, shall immediately notify the medical examiner who resides nearest the town where the death occurred ..."
- 18 V.S.A. § 5206, https://legislature.vermont.gov/statutes/section/18/107/05206: penalty applies only to "A licensed health care professional who fails to cause the medical portion of a report of death to be submitted ..." (so no penalty stated for the discoverer; the edit states none).
- 12 V.S.A. § 519(a), (c), https://legislature.vermont.gov/statutes/section/12/023/00519: "(a) A person who knows that another is exposed to grave physical harm shall, to the extent that the same can be rendered without danger or peril to himself or herself or without interference with important duties owed to others, give reasonable assistance to the exposed person unless that assistance or care is being provided by others. ... (c) A person who willfully violates subsection (a) of this section shall be fined not more than $100.00."
- 33 V.S.A. § 4913(a), (c), (e), https://legislature.vermont.gov/statutes/section/33/049/04913: "(a) A mandated reporter is any: (1) health care provider, ... (13) employee of the Office of the Child, Youth, and Family Advocate ..." "(c) Any mandated reporter who reasonably suspects abuse or neglect of a child shall report in accordance with the provisions of section 4914 of this title within 24 hours ..." "(e) Any other concerned person not listed in subsection (a) of this section who has reasonable cause to believe that any child has been abused or neglected may report or cause a report to be made ..."
- 33 V.S.A. § 6903(a)-(b), https://legislature.vermont.gov/statutes/section/33/069/06903: "(a) All employees, contractors, volunteers, or grantees who directly provide health care, law enforcement, caregiving, counseling, education, or social services to adults who know of information of abuse, neglect, or exploitation of a vulnerable adult ... shall report ... (b) Any other concerned person not listed in subsection (a) of this section who knows of or has received a complaint of abuse, neglect, or exploitation of a vulnerable adult ... may report or cause a report to be made ..."

### `edu-no-nonresident-owner-agent-vt`

NEW TITLE: Out-of-State Owners: Agents, Business Names and Entities

ERROR. "Vermont's statutes do not require an out-of-state individual landlord to name a Vermont agent ... or to file an agent designation before suing a tenant" is contradicted where the individual rents under an assumed business name: since July 1, 2025 the registration must name a Vermont agent for a nonresident, and an unregistered business cannot maintain an action (or raise an affirmative defense). The row's entity sentence is vague; it omits the certificate of authority, the suit bar and the deemed appointment of the Secretary of State. The title ("No Nonresident Owner Agent Rule") becomes misleading.

old_str:
```
Vermont's statutes do not require an out-of-state individual landlord to name a Vermont agent in the lease or to file an agent designation before suing a tenant, and they do not require tenants to withhold income tax from rent paid to a nonresident owner.
```
new_str:
```
Vermont's statutes do not require an out-of-state individual landlord who rents under their own name to name a Vermont agent in the lease or to file an agent designation before suing a tenant, and they do not require tenants to withhold income tax from rent paid to a nonresident owner. If you rent under an assumed business name, though, you must register it with the Secretary of State within 10 days after starting and, as a nonresident, name an agent for service of process in Vermont; until you register you may not maintain an action, or raise a counterclaim or affirmative defense, in a Vermont court, the Secretary of State is your agent for service on claims arising from the business, and the State may collect $50 a day, up to $10,000 a year (11 V.S.A. §§ 1621(a)-(b) and 1626). An out-of-state limited liability company or corporation transacting business here must obtain a certificate of authority, faces the same bar on suing and the same penalty, and an LLC that transacts business without one appoints the Secretary of State as its agent for service of process (11 V.S.A. §§ 4112, 4113 and 4119; 11A V.S.A. §§ 15.01-15.02). Owning property is not by itself transacting business, but renting it out may be; that is a case-law question. And a court may enter a personal judgment against an owner served outside Vermont whose contacts with the State support one (12 V.S.A. § 913(b)).
```

Supporting quotes (read 2026-11-06): §§ 1621, 1626, 4112, 4113, 4119, 1655; 11A §§ 15.01-15.02 as quoted above. Also:
- 12 V.S.A. § 913(b), https://legislature.vermont.gov/statutes/section/12/025/00913: "Upon the service, and if it appears that the contact with the State by the party or the activity in the State by the party or the contact or activity imputable to him or her is sufficient to support a personal judgment against him or her, the same proceedings may be had for a personal judgment against him or her as if the process or pleading had been served on him or her in the State."
- 12 V.S.A. § 855, https://legislature.vermont.gov/statutes/section/12/025/00855 (as amended 2025, No. 10, § 25): "If the contact with the State or the activity in the State of a foreign business organization, or the contact or activity imputable to it, is sufficient to support a Vermont personal judgment against it, the contact or activity shall be deemed to be doing business in Vermont by that foreign organization and shall be equivalent to the appointment by it of the Secretary of the State of Vermont and the Secretary's successors to be its true and lawful attorney upon whom may be served all lawful process in any action or proceedings against it arising or growing out of that contact or activity, ..." (limited to foreign business organizations; not used in the edit for individuals).

---

## Sources not reached

None blocked. All four official sites answered plain curl requests with HTTP 200. Not read (outside scope or not needed for the edits):
- Me. Rev. Stat. tit. 13-C, § 1503 (contents of a corporation's application for authority): lead, official text unread. See the note under `edu-no-landlord-registration-me`.
- New Hampshire: no exhaustive search for a witnessed-crime or misprision statute; none relied on.
- Rhode Island: common-law misprision under R.I. Gen. Laws § 11-1-1 not examined (case law).
- Case law in all four states on whether renting out property is transacting or doing business, on Maine's "collection of its debts" limit as applied to possession-only evictions, and on Maine's "mercantile enterprise" for rentals.

## Summary

1. 19 active rows checked: 4 hold, 10 FIX (omitted general rules added), 5 ERROR (RI crime-free, NH police cooperation, NH registration, ME owner-agent, VT nonresident agent).
2. Foreign-entity registration and suit bars were missing everywhere: RI §§ 7-16-54 and 7-1.2-1418; NH RSA 304-C:180 and 293-A:15.02; ME tit. 13-C § 1502 and tit. 31 § 1629 (debts only); VT 11 V.S.A. § 4119 and 11A § 15.02 (these also bar counterclaims and affirmative defenses).
3. Trade-name suit bars: RI § 6-1-6 (new, effective 2025) and VT 11 V.S.A. § 1626 (rewritten 2025, and a nonresident must name a VT agent under § 1621(a)(5)); NH and ME have registration duties with fines but no suit bar.
4. Any-person reporting duties were missing: RI child abuse, elder abuse, deaths and witnessed sexual assault; NH child abuse, vulnerable-adult abuse and finding a body; ME suspected medical-examiner deaths; VT the person who discovers a body, plus the duty to aid (12 V.S.A. § 519).
5. One title change (`edu-no-nonresident-owner-agent-vt`). Every old_str was checked by script to occur exactly once in its row's current bodyText.
