# General-statute sweep: TX, NJ, AZ (checked 2026-11-06)

Scope: the 12 active rows named in the brief, checked for the four Florida miss types (1 foreign-entity registration and suit bar, 2 fictitious/assumed-name registration and suit bar, 3 service on nonresidents, 4 any-person reporting duties). No repo file was edited. Every `old_str` below was checked by script to occur exactly once in the current `bodyText` of its row (`~/property-manager-landlord-app/lease-clauses.csv`). Edits for one row apply in the order listed. Verdicts: holds = no gap; FIX = omits a general rule the reader needs; ERROR = states an absence a general statute contradicts.

## Verdicts at a glance

| Row | Verdict | Miss types |
|---|---|---|
| `edu-confirmed-absences-outside-title-tx` | FIX | 1, 2 |
| `edu-no-landlord-registration-tx` | FIX | 1 (suit bar), 2 |
| `edu-no-law-enforcement-cooperation-rule-tx` | ERROR | 4 |
| `edu-no-nonresident-owner-agent-tx` | FIX | 1, 3 (former residents) |
| `edu-confirmed-absences-outside-title-nj` | FIX | 1, 2 (corporate alternate name) |
| `edu-landlord-registration-nj` | FIX | 1, 2 |
| `edu-law-enforcement-cooperation-nj` | ERROR | 4 |
| `edu-nonresident-owner-agent-nj` | FIX | 1, 3 |
| `edu-rental-registration-az` | FIX | 1 |
| `edu-confirmed-absences-outside-title-az` | FIX | 1 |
| `edu-law-enforcement-cooperation-az` | ERROR | 4 |
| `edu-nonresident-owner-agent-az` | FIX | 1, 3 (entity) |

## `edu-confirmed-absences-outside-title-tx` — FIX

Item (3) labels registration before eviction 'absent'. Literally true for rental registration, but two general statutes stop a suit: an unregistered foreign entity transacting business may not maintain a suit (Bus. Orgs. Code § 9.051(b)), and an assumed-name user may not maintain a suit until it files (Bus. & Com. Code § 71.201(a)). Florida's item 1 and 2 misses repeat here. Nonresident service (item 3) and reporting duties (item 4) are outside this row's subject.

Edit 1

`old_str`:
```
(3) Registration before eviction: absent. Texas has no state rental registration or landlord licensing law, and nothing in the eviction statutes makes registration a condition of filing or winning an eviction.
```
`new_str`:
```
(3) Registration before eviction: absent for rentals, but two business-registration rules can stop a suit. Texas has no state rental registration or landlord licensing law, and nothing in the eviction statutes makes registration a condition of filing or winning an eviction. But an out-of-state LLC, corporation or limited partnership that is transacting business in Texas may not maintain a suit, including an eviction, on a claim arising from that business until it registers with the secretary of state (Tex. Bus. Orgs. Code §§ 9.001, 9.051(b)); owning Texas property, without more, is not transacting business (§ 9.251(15)), but whether renting it out is more is not settled by statute, so register before filing. And if you regularly rent under an assumed name (for an individual, a name without your surname; for an entity, a name other than the one in its formation papers), you may not maintain a suit arising from a lease made under that name until you file an assumed name certificate (Tex. Bus. & Com. Code §§ 71.002(2), 71.051, 71.101, 71.201(a); the library's landlord registration row). Neither failure voids the lease or stops you from defending a suit (Tex. Bus. Orgs. Code § 9.051(c); Tex. Bus. & Com. Code § 71.201(a)).
```

## `edu-no-landlord-registration-tx` — FIX

Already covers foreign-entity registration (§ 9.001) but omits (a) the bar on suing until registered and the registered-agent requirement, and (b) assumed-name filing, which can require a landlord to file with the county clerk or secretary of state, contradicting the row's opening 'no ... register with a state or county office'.

Edit 1

`old_str`:
```
No Texas statute makes a residential landlord register with a state or county office,
```
`new_str`:
```
No Texas statute makes a residential landlord, as a landlord, register with a state or county office,
```

Edit 2

`old_str`:
```
Two state laws can still reach you.
```
`new_str`:
```
Three state laws can still reach you.
```

Edit 3

`old_str`:
```
so the cautious course is to register.
```
`new_str`:
```
so the cautious course is to register. The registration must name a Texas registered agent and registered office (§§ 5.201(a), 9.004(b)(9)), and until the entity registers it may not maintain a suit in a Texas court, including an eviction, on a claim arising from business it transacts here (§ 9.051(b)). Third, assumed names: if you regularly rent under an assumed name (for an individual, a name without your surname; for an entity, a name other than the one in its formation papers), you must file an assumed name certificate, with the county clerk if you are an individual or with the secretary of state if you are an entity; until you do, you may not maintain a suit arising from a lease made under that name, and an intentional violation is a Class A misdemeanor (Tex. Bus. & Com. Code §§ 71.002(2), 71.051, 71.054, 71.101, 71.103(a), 71.201(a), 71.202).
```

## `edu-no-law-enforcement-cooperation-rule-tx` — ERROR

States that no statute requires you 'to give police information about tenants'. Any-person duties contradict that in part: a child-abuse report may go to a law enforcement agency (Fam. Code §§ 261.101(a), 261.103), and a witnessed felony causing serious injury or death must be reported to police (Penal Code § 38.171). Also omits the elder/disabled-adult duty (Hum. Res. Code § 48.051), the child-offense duty (Penal § 38.17) and the death report (CCP art. 49.25 § 7).

Edit 1

`old_str`:
```
or requires you to give police information about tenants or access to a unit (all Texas codes searched;
```
`new_str`:
```
or requires you, as a landlord, to give police information about tenants or access to a unit (all Texas codes searched;
```

Edit 2

`old_str`:
```
The cautious course: report crime at the property,
```
`new_str`:
```
Separately, reporting duties that bind every person bind you and your staff. Anyone with reasonable cause to believe a child's physical or mental health or welfare has been adversely affected by abuse or neglect must report it immediately to a law enforcement agency or the Department of Family and Protective Services, and a knowing failure is a Class A misdemeanor (Tex. Fam. Code §§ 261.101(a), 261.103(a), 261.109(a), (b)). Anyone with cause to believe an elderly person or a person with a disability is being abused, neglected or exploited must report it immediately to the department, and a knowing failure is a Class A misdemeanor (Tex. Hum. Res. Code §§ 48.051(a), 48.052(a)). A person who sees a felony in which serious bodily injury or death may have resulted must report it immediately to the police if a reasonable person would believe it has not been reported and reporting is safe (Class A misdemeanor; Tex. Penal Code § 38.171), and a person who sees a sexual or assaultive offense against a child and could safely help the child or report it must do one or the other (third-degree felony; § 38.17). In a county with a medical examiner, a private citizen who becomes aware of a violent, unnatural, suspicious or unwitnessed death or a suicide, as when a tenant is found dead in a unit, must report it immediately to the medical examiner or the police, and a knowing violation is a Class B misdemeanor (Tex. Code Crim. Proc. art. 49.25, §§ 6(a), 7(a), 14); that article is repealed effective April 1, 2027 by the Code of Criminal Procedure recodification, so recheck it then. The cautious course: report crime at the property,
```

## `edu-no-nonresident-owner-agent-tx` — FIX

Service on nonresidents through the secretary of state is already covered (§§ 17.042, 17.044(a)(1), (b)); holds on that. Gaps: former-resident rule (§ 17.044(a)(3)), and for an out-of-state entity the registered-agent requirement and the suit bar (§ 9.051(b)), which matter because the row's first sentence says nothing need be filed 'before suing a tenant'. Assumed-name suit bar also added by cross-reference.

Edit 1

`old_str`:
```
a lease of Texas property to a Texas tenant appears to qualify.
```
`new_str`:
```
a lease of Texas property to a Texas tenant appears to qualify. The secretary of state is also your agent for service if you move out of Texas after a tenant's claim arises but before the tenant sues (§ 17.044(a)(3)).
```

Edit 2

`old_str`:
```
and an out-of-state LLC or other entity that transacts business in Texas must register (the library's landlord registration row).
```
`new_str`:
```
and an out-of-state LLC or other entity that transacts business in Texas must register (the library's landlord registration row); its registration names a Texas registered agent for service, and until it registers it may not maintain a suit, including an eviction, on a claim arising from that business (Tex. Bus. Orgs. Code §§ 5.201(a), 9.004(b)(9), 9.051(b)). If you rent under an assumed name, the same bar on suing applies until you file an assumed name certificate (Tex. Bus. & Com. Code § 71.201(a)).
```

## `edu-confirmed-absences-outside-title-nj` — FIX

Item (3) covers only the landlord-registration bar. Omits the foreign-LLC bar, which NJ makes squarely applicable because owning income-producing real property is transacting business (N.J.S.A. 42:2C-59(b), 42:2C-65(a)), the foreign-corporation bar (14A:13-11) and the corporate alternate-name bar (14A:2-2.1(6)). New Jersey's general trade-name law (56:1-2) has no suit bar, only a misdemeanor, so it is placed in the registration row instead.

Edit 1

`old_str`:
```
The registration law does not apply to owner-occupied two-unit premises (landlord-registration-disclosure-nj).
```
`new_str`:
```
The registration law does not apply to owner-occupied two-unit premises (landlord-registration-disclosure-nj). Business-registration rules can also stop an eviction. An out-of-state limited liability company that owns income-producing real property in New Jersey is transacting business here, and until it obtains a certificate of authority it may not maintain any action, including an eviction (N.J.S.A. 42:2C-59(b), 42:2C-65(a)); an out-of-state corporation transacting business here without a certificate of authority faces the same bar (N.J.S.A. 14A:13-11(1)), though whether renting out property is transacting business for a corporation is a case-law question. A corporation that rents under an alternate name it has not registered may not maintain an action arising from a lease made under that name until it files the registration (N.J.S.A. 14A:2-2.1(6)). None of these failures voids the lease or stops you from defending a suit (see edu-nonresident-owner-agent-nj).
```

## `edu-landlord-registration-nj` — FIX

Complete on landlord registration. Omits the foreign-LLC certificate of authority (with NJ agent) and suit bar, the foreign-corporation certificate, the trade-name certificate filed with the county clerk (56:1-2, misdemeanor), and the corporate alternate-name suit bar.

Edit 1

`old_str`:
```
Many towns also have their own rental registration,
```
`new_str`:
```
Two business filings can also apply. If you own through an out-of-state limited liability company, owning income-producing real property here is transacting business, so the company must obtain a certificate of authority, which names a New Jersey agent for service of process, and until it does it may not maintain any action, including an eviction (N.J.S.A. 42:2C-58, 42:2C-59(b), 42:2C-65(a)); an out-of-state corporation transacting business here needs a certificate of authority too (N.J.S.A. 14A:13-3(1), 14A:13-11(1)). And if you rent under a name other than your own real name, you must first file a trade-name certificate with the county clerk, with a duplicate for the Secretary of State, and doing business without one is a misdemeanor (N.J.S.A. 56:1-2, 56:1-4); a corporation registers an alternate name with the Secretary of State instead, and until it does it may not maintain an action arising from a lease made under that name (N.J.S.A. 14A:2-2.1(1), (6)). Many towns also have their own rental registration,
```

## `edu-law-enforcement-cooperation-nj` — ERROR

Already states the any-person child-abuse duty (9:6-8.10) but omits its penalty (9:6-8.14). Its statement that no statute requires you to give police tenant information is contradicted by the any-person duty to tell local police the known facts of a reportable death, a fourth-degree crime if willfully not reported (26:6B-10(b)). The vulnerable-adult report is voluntary for a landlord (52:27D-409(a)(2)), so it is added only with its non-retaliation rule. No NJ any-person duty to report a witnessed sexual assault was found.

Edit 1

`old_str`:
```
or requires you to give police tenant information or access to a unit.
```
`new_str`:
```
or requires you, as a landlord, to give police tenant information or access to a unit; the general reporting duties below are the exception.
```

Edit 2

`old_str`:
```
must report it immediately to the Division of Child Protection and Permanency (N.J.S.A. 9:6-8.10).
```
`new_str`:
```
must report it immediately to the Division of Child Protection and Permanency (N.J.S.A. 9:6-8.10); knowingly failing to report is a disorderly persons offense, or a fourth-degree crime if the abuse is sexual abuse (N.J.S.A. 9:6-8.14). Any member of the public who knows of a death from criminal violence, accident, suicide, or suspicious, unusual or unexplained circumstances, as when a tenant is found dead in a unit, must immediately tell the local police the known facts, and willfully failing to report the death, or disturbing the body without the medical examiner's order, is a fourth-degree crime (N.J.S.A. 26:6B-10(a), (b)). Reporting suspected abuse of a vulnerable adult to county adult protective services is voluntary for a landlord, but no one may retaliate against a person who reports (N.J.S.A. 52:27D-409(a)(2), (d)).
```

## `edu-nonresident-owner-agent-nj` — FIX

Correct on the registration-certificate agent. Omits that an out-of-state LLC owning income-producing property must get a certificate of authority naming an NJ agent, cannot sue until it does, and is deemed to appoint the filing office for service (42:2C-58, -59(b), -65(a), (d)); the foreign-corporation suit bar (14A:13-11); and the nonresident trade-name user's appointment of the county clerk for service (56:1-2).

Edit 1

`old_str`:
```
Owner-occupied two-unit premises are not covered.
```
`new_str`:
```
Owner-occupied two-unit premises are not covered. If you own through an out-of-state limited liability company, owning income-producing real property here is transacting business, so the company must obtain a certificate of authority naming a New Jersey agent for service of process; until it does, it may not maintain any action, including an eviction, and it is treated as having appointed the State filing office as its agent for service in suits arising from its New Jersey business (N.J.S.A. 42:2C-58, 42:2C-59(b), 42:2C-65(a), (d)). An out-of-state corporation transacting business here faces the same bar on suing until it obtains a certificate of authority (N.J.S.A. 14A:13-11(1)). If you rent under a trade name and live outside New Jersey, the trade-name certificate you file with the county clerk must appoint the county clerk as your attorney to accept service of process in suits arising from that business (N.J.S.A. 56:1-2).
```

## `edu-rental-registration-az` — FIX

Correct on assessor registration. Omits the out-of-state LLC/corporation registration with the Corporation Commission (naming an Arizona statutory agent) and the suit bar. Trade-name registration is optional in Arizona (§ 44-1460), so no trade-name duty is missing; a short clause says so.

Edit 1

`old_str`:
```
The assessor may charge up to $10 per registration or change.
```
`new_str`:
```
The assessor may charge up to $10 per registration or change. If you own through an out-of-state limited liability company or corporation, it must also register with the Arizona Corporation Commission, naming an Arizona statutory agent, before doing business here, and until it does it may not maintain a lawsuit, including an eviction, in Arizona (A.R.S. §§ 10-1501(A), 10-1502(A), 29-3902(A), (B), 29-3903(A)(5)). Owning property, without more, is not doing business (A.R.S. §§ 10-1501(B)(9), 29-3905(A)(10)); whether renting it out is more is a case-law question, so register before filing (see edu-nonresident-owner-agent-az). Registering a trade name with the Secretary of State is optional in Arizona (A.R.S. § 44-1460(A)).
```

## `edu-confirmed-absences-outside-title-az` — FIX

Item (3) is scoped to assessor registration and holds as written, but it omits the foreign-entity suit bar (§§ 10-1502(A), 29-3902(B)), which is what a landlord asking 'can registration stop my eviction?' needs. Squatter and receipt items hold.

Edit 1

`old_str`:
```
Keep your registration current.
```
`new_str`:
```
Keep your registration current. One other registration can stop an eviction: an out-of-state limited liability company or corporation doing business in Arizona may not maintain a lawsuit, including an eviction, in an Arizona court until it registers with the Arizona Corporation Commission (A.R.S. §§ 10-1502(A), 29-3902(B)); owning property, without more, is not doing business, but whether renting it out is more is a case-law question (A.R.S. §§ 10-1501(B)(9), 29-3905(A)(10); see edu-nonresident-owner-agent-az). The missing registration doesn't void the lease or stop the company from defending a suit (A.R.S. §§ 10-1502(E), 29-3902(C)). Trade-name registration is optional in Arizona, and we found no rule barring a suit by an unregistered trade-name user (A.R.S. § 44-1460).
```

## `edu-law-enforcement-cooperation-az` — ERROR

The 'we found no Arizona statute that otherwise requires you ... to give police tenant information' statement is contradicted by § 11-593 (Title 11, which the row says was searched whole): anyone who knows of a reportable death must give the nearest peace officer all their information; knowing failure is a class 2 misdemeanor. Arizona's child-abuse and vulnerable-adult duties do not bind a landlord as such (§§ 13-3620(A), 46-454(A)), so the edit says that, rather than adding a duty. No any-person witnessed-crime duty found.

Edit 1

`old_str`:
```
We found no Arizona statute that otherwise requires you
```
`new_str`:
```
Apart from the death-reporting duty below, we found no Arizona statute that otherwise requires you
```

Edit 2

`old_str`:
```
local codes were not searched). Entry without the tenant's consent still follows the access rules.
```
`new_str`:
```
local codes were not searched). One general duty does reach you: anyone who knows of a death that must be reported, including a death of someone not under a health care provider's current care, a violent, unexpected or unexplained death, or a death in a suspicious, unusual or nonnatural manner, as when a tenant is found dead in a unit, must promptly give the nearest peace officer all the information the person has about it, and a person who knows of the body and knowingly fails to notify police as soon as possible, without good reason to believe they have already been told, is guilty of a class 2 misdemeanor (A.R.S. § 11-593(A), (B), (D)). Arizona's child-abuse and vulnerable-adult reporting duties bind listed professionals and people responsible for the child's or adult's care, not a landlord as such; anyone else may report to a peace officer, the Department of Child Safety or adult protective services, and retaliating against a person who reports vulnerable-adult abuse in good faith is prohibited (A.R.S. §§ 13-3620(A), (H), 46-454(A), (E), (L)). Entry without the tenant's consent still follows the access rules.
```

## `edu-nonresident-owner-agent-az` — FIX

Correct for individual owners (assessor statutory agent). Omits the out-of-state LLC/corporation Commission registration with an Arizona statutory agent and the suit bar, and the Commission-as-agent fallback for foreign corporations (§ 10-1510(B)). No Arizona statute deems a state officer agent for nonresident individuals generally (service rules are court rules, not reviewed).

Edit 1

`old_str`:
```
The statutes do not make you name the assessor-recorded agent in every lease beyond that disclosure.
```
`new_str`:
```
The statutes do not make you name the assessor-recorded agent in every lease beyond that disclosure. If you own through an out-of-state limited liability company or corporation, the company must also register with the Arizona Corporation Commission before doing business here, naming an Arizona statutory agent, and until it does it may not maintain a lawsuit, including an eviction, in an Arizona court; owning property, without more, is not doing business, but whether renting it out is more is a case-law question, so register before filing (A.R.S. §§ 10-1501, 10-1502(A), 29-3902(A), (B), 29-3903(A)(5), 29-3905(A)(10)). If a foreign corporation fails to appoint or keep a statutory agent, the Commission becomes its agent for service (A.R.S. § 10-1510(B)).
```

## Supporting quotes (each section read whole; quoted exactly)

### Texas
Source: Texas Legislative Council, Texas Constitution and Statutes, static chapter files at `https://tcss.legis.texas.gov/resources/<CODE>/htm/<CODE>.<CH>.htm`, read 2026-11-06. (`statutes.capitol.texas.gov/Docs/...` returned only the site's JavaScript application shell, HTTP 200, no statute text; the tcss.legis.texas.gov files are the same official system's static text files, fetched with default curl headers. No bot check encountered.)

- Tex. Bus. Orgs. Code § 9.001(a) (BO.9.htm; Acts 2003, 78th Leg., ch. 182, Sec. 1, eff. Jan. 1, 2006): "To transact business in this state, a foreign entity must register under this chapter if the entity: (1) is a foreign corporation, foreign limited partnership, foreign limited liability company, ..."
- § 9.051(b), (c) (same history): "(b) A foreign filing entity or the entity's legal representative may not maintain an action, suit, or proceeding in a court of this state, brought either directly by the entity or in the form of a derivative action in the entity's name, on a cause of action that arises out of the transaction of business in this state unless the foreign filing entity is registered in accordance with this chapter. ... (c) The failure of a foreign filing entity to register does not: (1) affect the validity of any contract or act of the foreign filing entity; (2) prevent the entity from defending an action, suit, or proceeding in a court in this state; ..."
- § 9.251(15) (Amended by Acts 2021, 87th Leg., R.S., Ch. 39 (S.B. 1203), Sec. 16): "activities that do not constitute transaction of business in this state include: ... (15) owning, without more, real or personal property in this state; ..."
- § 9.004(b)(9) (BO.9.htm; Acts 2003): "The application must state: ... (9) the address of the initial registered office and the name and the address of the initial registered agent for service of process that Chapter 5 requires to be maintained;"
- § 5.201(a) (BO.5.htm; last amended Acts 2011, 82nd Leg., R.S., Ch. 1151): "Each filing entity and each foreign filing entity shall designate and continuously maintain in this state: (1) a registered agent; and (2) a registered office."
- Tex. Bus. & Com. Code § 71.002(2)(A), (H) (BC.71.htm; last amended Acts 2023, 88th Leg., R.S., Ch. 27): "'Assumed name' means: (A) for an individual, a name that does not include the surname of the individual; ... (H) for a limited liability company, a name other than the name stated in its certificate of formation or a comparable document, ..."
- § 71.051: "A person must file a certificate under this subchapter if the person regularly conducts business or renders a professional service in this state under an assumed name other than as a corporation, limited partnership, limited liability partnership, limited liability company, protected series or registered series of a limited liability company, or foreign filing entity."
- § 71.054: "A person shall file the certificate in the office of the county clerk in each county in which the person: (1) has or will maintain business or professional premises; or (2) conducts business or renders a professional service, if the person does not or will not maintain business or professional premises in any county."
- § 71.101: "A corporation, limited partnership, limited liability partnership, limited liability company, registered series of a limited liability company, or foreign filing entity must file a certificate under this subchapter if the registered series or entity: (1) regularly conducts business or renders professional services in this state under an assumed name; ..."
- § 71.103(a): "... required to file a certificate under Section 71.101 shall file the certificate in the office of the secretary of state."
- § 71.201(a) (Added by Acts 2007, 80th Leg., R.S., Ch. 885, eff. April 1, 2009): "A person's failure to comply with this chapter does not impair the validity of any contract or act by the person or prevent the person from defending any action or proceeding in any court of this state, but the person may not maintain in a court of this state an action or proceeding arising out of a contract or act in which an assumed name was used until an original, new, or renewed certificate has been filed as required by this chapter."
- § 71.202: "(a) A person commits an offense if the person: (1) conducts business or renders a professional service in this state under an assumed name; and (2) intentionally violates this chapter. (b) An offense under this section is a Class A misdemeanor."
- Tex. Civ. Prac. & Rem. Code § 17.044(a)(3) (CP.17.htm; Amended by Acts 1987, 70th Leg., ch. 158): "The secretary of state is an agent for service of process or complaint on a nonresident who: ... (3) is not required to designate an agent for service in this state, but becomes a nonresident after a cause of action arises in this state but before the cause is matured by suit in a court of competent jurisdiction."
- Tex. Fam. Code § 261.101(a) (FA.261.htm; last amended Acts 2025, 89th Leg., R.S., Ch. 1138 (S.B. 571), eff. June 20, 2025): "A person having reasonable cause to believe that a child's physical or mental health or welfare has been adversely affected by abuse or neglect by any person shall immediately make a report as provided by this subchapter."
- § 261.103(a): "a report shall be made to: (1) a law enforcement agency; (2) the department; or (3) the state agency that operates, licenses, certifies, or registers the facility in which the alleged abuse or neglect occurred." (subsection (c): a report involving a person responsible for the child's care "must be made to the department").
- § 261.109(a), (b): "(a) A person commits an offense if the person is required to make a report under Section 261.101(a) and knowingly fails to make a report as provided in this chapter. ... (b) An offense under Subsection (a) is a Class A misdemeanor, except that the offense is a state jail felony if ..."
- Tex. Hum. Res. Code § 48.051(a) (HR.48.htm; last amended Acts 2023, 88th Leg., R.S., Ch. 887): "Except as prescribed by Subsection (b), a person having cause to believe that an elderly person, a person with a disability, or an individual receiving services from a provider as described by Subchapter F is in the state of abuse, neglect, or exploitation shall report the information required by Subsection (d) immediately to the department."
- § 48.052(a): "A person commits an offense if the person has cause to believe that an elderly person or person with a disability has been abused, neglected, or exploited or is in the state of abuse, neglect, or exploitation and knowingly fails to report in accordance with this chapter. An offense under this subsection is a Class A misdemeanor, except that ..."
- Tex. Penal Code § 38.171 (PE.38.htm; Added by Acts 2003, 78th Leg., ch. 1009): "(a) A person commits an offense if the person: (1) observes the commission of a felony under circumstances in which a reasonable person would believe that an offense had been committed in which serious bodily injury or death may have resulted; and (2) fails to immediately report the commission of the offense to a peace officer or law enforcement agency under circumstances in which: (A) a reasonable person would believe that the commission of the offense had not been reported; and (B) the person could immediately report the commission of the offense without placing himself or herself in danger of suffering serious bodily injury or death. (b) An offense under this section is a Class A misdemeanor."
- § 38.17 (Amended by Acts 2025, 89th Leg., R.S., Ch. 250 (H.B. 1778), eff. September 1, 2025): "(a) A person commits an offense if: (1) the actor observes the commission or attempted commission of an offense under circumstances in which a reasonable person would believe that an offense of a sexual or assaultive nature was being committed or was about to be committed against a child; (2) the actor fails to assist the child or immediately report the commission of the offense to a peace officer or law enforcement agency; and (3) the actor could assist the child or immediately report the commission of the offense without placing the actor in danger of suffering serious bodily injury or death. (b) An offense under this section is a felony of the third degree."
- Tex. Code Crim. Proc. art. 49.25, § 7(a) (CR.49.htm): "Any police officer, superintendent or general manager of an institution, physician, or private citizen who shall become aware of a death under any of the circumstances set out in Section 6(a) of this Article, shall immediately report such death to the office of the medical examiner or to the city or county police departments; ..." § 6(a)2: "When any person is killed; or from any cause dies an unnatural death, except under sentence of the law; or dies in the absence of one or more good witnesses;" (other § 6(a) cases: body found with unknown cause, suspicion of unlawful means, suicide, death unattended by a physician where the registrar does not know the cause, child under six, uncertain physician). § 14: "(a) A person commits an offense if the person knowingly violates this article. (b) An offense under this section is a Class B misdemeanor." The chapter page prints: "this chapter was repealed by Acts 2025, 89th Leg., R.S., Ch. 202 (H.B. 1610), Sec. 3.01, eff. April 1, 2027." (Art. 49.25 applies in counties with a medical examiner; in other counties art. 49.07(a) puts the notice duty on "A physician or other person who has possession of a body or body part", Class C misdemeanor under (d), which does not clearly reach a landlord who finds a body, so it was left out of the edit.)

### New Jersey
Source: official N.J.S.A. text, `https://pub.njleg.gov/statutes/STATUTES-TEXT.zip` member STATUTES.TXT ("UPDATED THROUGH P.L.2026, c.50, and J.R.1"). Read from the local copy downloaded 2026-10-30 (`scratchpad/njc/statutes/STATUTES.TXT`) and re-checked 2026-11-06 against a fresh download of the same zip (Last-Modified Fri, 06 Nov 2026 11:00:46 GMT; sha256 bbf828a9d26aeb7f187b5fb05f2bd0a03caf92ae2295773b0fe1698c46d55e58): every section below is byte-identical in both. P.L.2026, c.51 and later are not in that file; not checked for these sections.

- N.J.S.A. 42:2C-58 (L.2012, c.50, s.58): "Before doing business in this State, a foreign limited liability company shall obtain a certificate of authority to transact business in this State. a. ... The application shall state: ... (4) the name and street and mailing addresses of the company's initial agent for service of process in this State."
- 42:2C-59(b) (L.2012, c.50, s.59): "For purposes of this section, the ownership in this State of income-producing real property or tangible personal property, other than property excluded under subsection a. of this section, constitutes transacting business in this State."
- 42:2C-65 (L.2012, c.50, s.65): "a. A foreign limited liability company transacting business in this State may not maintain an action or proceeding in this State unless it has a certificate of authority to transact business in this State. b. The failure of a foreign limited liability company to have a certificate of authority to transact business in this State does not impair the validity of a contract or act of the company or prevent the company from defending an action or proceeding in this State. ... d. If a foreign limited liability company transacts business in this State without a certificate of authority or cancels its certificate of authority, it appoints the filing office as its agent for service of process for rights of action arising out of the transaction of business in this State."
- 42:2C-61(a): "A foreign limited liability company that adopts an alternate name under this subsection and obtains a certificate of authority with the alternate name need not comply with R.S.56:1-1 et seq."
- 14A:13-3(1) (L.1968, c.350): "No foreign corporation shall have the right to transact business in this State until it shall have procured a certificate of authority so to do from the Secretary of State." (Subsection (2)'s list of non-business activities does not mention owning or leasing property.)
- 14A:13-11(1), (2) (L.1968, c.350): "(1) No foreign corporation transacting business in this State without a certificate of authority shall maintain any action or proceeding in any court of this State, until such corporation shall have obtained a certificate of authority. ... (2) The failure of a foreign corporation to obtain a certificate of authority to transact business in this State shall not impair the validity of any contract or act of such corporation, and shall not prevent such corporation from defending any action or proceeding in any court of this State."
- 14A:2-2.1(1), (6) (1973, c.366, s.3; amended 1988, c.94, s.8): "(1) No domestic corporation, or foreign corporation which transacts business in this State within the meaning of section 14A:13-3, shall transact any business in this State using a name other than its actual name unless (a) It also uses its actual name ... ; or (b) ... ; or (c) It has first registered the alternate name as provided in this section." "(6) The failure of a corporation to file a certificate of registration or renewal of alternate name shall not impair the validity of any contract or act of such corporation and shall not prevent such corporation from defending any action or proceeding in any court of this State, but no such corporation shall maintain any action or proceeding in any court of this State arising out of a contract or act in which it used such alternate name until it has filed such a certificate."
- 56:1-2 (Amended by L.1951, c.255): "No person shall conduct or transact business under any assumed name, or under any designation, name or style, corporate or otherwise, other than the real name or names of the individual or individuals conducting or transacting such business, unless such person shall file a certificate in the office of the clerk of the county or counties in which such person conducts or transacts, or intends to conduct or transact, such business, together with a duplicate thereof for filing in the office of the Secretary of State, ... and if any person or persons conducting or transacting business as aforesaid is or are not resident in this State, such statement shall contain a power of attorney constituting the county clerk of the county, his successors in office, the true and lawful attorney of said nonresident person or persons, upon whom all original process in an action or legal proceeding against said person or persons for any debt, damages or liability, contracted or incurred by them in, or growing out of, the conduct or transaction of said business, may be served ..."
- 56:1-4: "Any person conducting or transacting business contrary to the provisions of either section 56:1-1 or 56:1-2 of this title shall be guilty of a misdemeanor." (No suit bar in 56:1-1 to 56:1-7.) 56:1-5: the sections do not "apply to any corporation duly organized under the laws of this state, or any corporation organized under the laws of any other state and lawfully doing business in this state".
- 9:6-8.10 (L.1971, c.437, s.3; amended ... 2019, c.40, s.1): "Any person having reasonable cause to believe that a child has been subjected to child abuse, including sexual abuse, or acts of child abuse shall report the same immediately to the Division of Child Protection and Permanency by telephone or otherwise."
- 9:6-8.14 (L.1971, c.437, s.7; amended 2019, c.40, s.2): "a. Except as provided in subsection b. of this section any person knowingly violating the provisions of this act including the failure to report an act of child abuse having reasonable cause to believe that an act of child abuse has been committed, is a disorderly person. b. Any person who knowingly fails to report an act of sexual abuse against a child and who has reasonable cause to believe that an act of sexual abuse has been committed is guilty of a crime of the fourth degree."
- 26:6B-10 (L.2018, c.62, s.10): subsection a. lists, among others, "(1) death where criminal violence appears to have taken place, ... (2) death by accident or unintentional injury, ... (3) death under suspicious or unusual circumstances; ... (6) sudden death when the decedent was in apparent good health; (7) suicide; ... (16) known or suspected non-natural death; (17) any person found dead under unexplained circumstances;". Subsection b.: "(1) It shall be the duty of any member of the general public having knowledge of the death to notify immediately the local law enforcement agency of the known facts concerning the time, place, manner, and circumstances of that death; ... (3) A person who willfully neglects or refuses to report the death, or who, without an order from the office of the county or intercounty medical examiner or the Office of the Chief State Medical Examiner, willfully touches, removes, or disturbs the decedent's body or touches, removes, or disturbs the clothing upon or near the body, is guilty of a crime of the fourth degree."
- 52:27D-409 (L.1993, c.249, s.4; amended 2009, c.276, s.2): "a. (1) A health care professional, law enforcement officer, firefighter, paramedic or emergency medical technician who has reasonable cause to believe that a vulnerable adult is the subject of abuse, neglect or exploitation shall report the information to the county adult protective services provider. (2) Any other person who has reasonable cause to believe that a vulnerable adult is the subject of abuse, neglect or exploitation may report the information to the county adult protective services provider. ... d. An employer or any other person shall not take any discriminatory or retaliatory action against an individual who reports abuse, neglect or exploitation pursuant to this act. ... A person who violates this subsection is liable for a fine of up to $1,000."
- Searched, not found: a New Jersey any-person duty to report a witnessed sexual assault or other crime (grep of STATUTES.TXT for "any/every person ... shall/must report/notify" found only unrelated trade duties); a New Jersey statute deeming the Secretary of State agent for service on nonresident individuals generally (service on nonresidents is governed by the Rules of Court, not reviewed here).

### Arizona
Held titles read from the local azleg.gov corpus (`scratchpad/corpus-AZ-20261102/statutes/STATUTES.TXT`, page dates shown); titles 10 and 29 read live from azleg.gov section pages on 2026-11-06 (the pages carry no history line or date).

- A.R.S. § 10-1501 (https://www.azleg.gov/ars/10/01501.htm): "A. A foreign corporation shall not transact business in this state until it is granted authority to transact business in this state as provided in this chapter from the commission. B. The following activities, among others, do not constitute transacting business within the meaning of subsection A: ... 9. Owning, without more, real or personal property. ... C. The list of activities in subsection B is not exhaustive."
- § 10-1502 (https://www.azleg.gov/ars/10/01502.htm): "A. A foreign corporation transacting business in this state without a grant of authority shall not be permitted to maintain a proceeding in any court in this state until it is authorized to transact business. ... C. A court may stay a proceeding commenced by a foreign corporation ... until it determines whether the foreign corporation ... requires authority ... E. Notwithstanding subsections A and B, the failure of a foreign corporation to obtain authority to transact business in this state does not impair the validity of its corporate acts or prevent it from defending any proceedings in this state."
- § 10-1510(B) (https://www.azleg.gov/ars/10/01510.htm): "If a foreign corporation fails to appoint or maintain a statutory agent at the address shown on the records of the commission, the commission is an agent of the foreign corporation on whom any process, notice or demand may be served."
- § 29-3902 (https://www.azleg.gov/ars/29/03902.htm): "A. A foreign limited liability company or a foreign series may not do business in this state until the foreign limited liability company or foreign series registers with the commission under this article. B. A foreign limited liability company or a foreign series doing business in this state may not maintain an action or proceeding in this state unless the foreign limited liability company or foreign series is registered to do business in this state. C. The failure of a foreign limited liability company or a foreign series to register to do business in this state does not impair the validity of a contract or act of the foreign company or foreign series or preclude it from defending an action or proceeding in this state."
- § 29-3903(A)(5) (https://www.azleg.gov/ars/29/03903.htm): "To register to do business in this state, a foreign limited liability company must deliver a foreign registration statement to the commission for filing. The statement must state all of the following: ... 5. The name and street address of the statutory agent in this state."
- § 29-3905(A)(10) (https://www.azleg.gov/ars/29/03905.htm): "Activities of a foreign limited liability company or foreign series that do not constitute doing business in this state under this article include any of the following: ... 10. Owning, without more, property."
- § 44-1460(A) (corpus, page dated 09/10/26): "Any person, partnership, corporation, firm, association, society, foundation, federation or organization doing business in this state or any foreign corporation licensed to exercise its corporate powers in this state, may register with the secretary of state ... the name, title or designation under which the applicant is operating". The article (§§ 44-1460 to 44-1460.07, all read) contains no duty to register and no bar on suing.
- § 11-593 (corpus, page dated 09/08/26): "A. Any person having knowledge of the occurrence of the death of a human being including a fetal death that is required to be reported pursuant to subsection B, of this section shall promptly notify the nearest peace officer of all information in the person's possession regarding the death and the circumstances surrounding it. B. Reporting is required in the following circumstances: 1. Death when not under the current care of a health care provider as defined pursuant to section 36-301. 2. Death resulting from violence. 3. Unexpected or unexplained death. ... 6. Death occurring in a suspicious, unusual or nonnatural manner, ... D. Every person who knows of the existence of a body where death occurred as specified in subsection A of this section and who knowingly fails to notify the nearest peace officer as soon as possible unless the person has good reason to believe that notice has already been given is guilty of a class 2 misdemeanor."
- § 13-3620(A), (H) (corpus, page dated 09/08/26): the duty in (A) applies to "person" as defined there: listed professionals, peace officers and clergy, "3. The parent, stepparent or guardian of the minor.", school personnel, "5. Any other person who has responsibility for the care or treatment of the minor.", supervisors and school board members. "H. Any person other than one required to report or cause reports to be made under subsection A of this section who reasonably believes that a minor is or has been a victim of abuse, child abuse, physical injury, a reportable offense or neglect may report the information to a peace officer or to the department of child safety, ..."
- § 46-454(A), (E), (L), (M) (corpus, page dated 09/10/26): (A) binds listed professionals "or other person who has responsibility for the care of a vulnerable adult"; "E. Any person other than one required to report ... may report the information to a peace officer or to the adult protective services central intake unit." "L. Retaliation against a person who in good faith reports abuse, neglect or exploitation is prohibited. ... Any adverse action taken against a person who reports abuse, neglect or exploitation or a vulnerable adult who is the subject of the report within ninety days after the report is filed is presumed to be retaliation." "M. A person who violates this section is guilty of a class 1 misdemeanor, ..."
- Searched, not found (corpus titles held): an Arizona any-person duty to report a witnessed crime or sexual assault (only § 13-2514(B), secure-care contraband, which does not reach landlords); an Arizona statute appointing a state officer as agent for service on nonresident individuals generally (only licensee-specific ones, e.g. § 32-2125.02); service is otherwise under the court rules, not reviewed.


## Sources not reached / not read
- statutes.capitol.texas.gov `/Docs/<CODE>/htm/...` URLs: returned only the site's JavaScript application shell (no statute text); not worked around. Same official text read from tcss.legis.texas.gov/resources (Texas Legislative Council static files).
- lis.njleg.state.nj.us section pages: not needed; the Legislature's own full-text download (pub.njleg.gov STATUTES-TEXT.zip) was reachable and used. `https://www.njleg.state.nj.us/api/downloads/statutes` returned 404 (route not found) on 2026-11-06.
- Not reviewed anywhere: case law (notably whether leasing property is "transacting/doing business" for Texas entities and NJ/AZ corporations), court rules on service (NJ R. 4:4-4, Ariz. R. Civ. P. 4.2), local ordinances, federal law; NJ P.L.2026 c.51 and later (not in the statutes file); Arizona titles not in the corpus other than the title 10 and 29 pages listed; Texas foreign limited partnership specifics beyond ch. 9; NJ foreign limited partnerships (N.J.S.A. 42:2A).

## Summary
1. All 12 rows have a real gap; none holds outright: 9 FIX and 3 ERROR (the three law-enforcement rows, whose "no statute requires you to give police information" wording is contradicted by any-person reporting duties).
2. Foreign-entity suit bar (miss type 1) is missing from all 9 non-police rows (two TX rows mention entity registration but not the bar); NJ is the Florida pattern exactly: owning income-producing real property is transacting business (N.J.S.A. 42:2C-59(b)); TX and AZ exclude bare ownership, so leasing is left as a case-law question.
3. Assumed-name bar (type 2): TX has one (Tex. Bus. & Com. Code § 71.201(a)); NJ only for corporations (N.J.S.A. 14A:2-2.1(6)), with a misdemeanor for others (56:1-4); AZ trade-name registration is optional with no bar (A.R.S. § 44-1460).
4. Nonresident service (type 3): TX row already covers § 17.044 (former-resident clause added); NJ adds the LLC deemed-appointment and trade-name county-clerk appointment; AZ has no general nonresident-individual rule (only the existing assessor agent).
5. Any-person reporting (type 4): TX has child, elder/disabled, witnessed-felony, child-offense and death duties; NJ child (with penalty) and death duties; AZ only the death duty (§ 11-593), since its child and vulnerable-adult duties don't bind landlords as such.
