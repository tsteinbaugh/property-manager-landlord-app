# Sweep 2: general-statute misses, AK / HI / LA / AR / MS

Rows checked (active; topic_key in nonresident-owner-agent, landlord-registration, law-enforcement-cooperation, confirmed-absences-outside-title; id ends -ak/-hi/-la/-ar/-ms): 20.

| row | topic_key | verdict |
|---|---|---|
| edu-confirmed-absences-outside-title-ak | confirmed-absences-outside-title | ERROR |
| edu-no-landlord-registration-ak | landlord-registration | FIX |
| edu-nonresident-landlord-agent-ak | nonresident-owner-agent | FIX |
| edu-no-crime-free-lease-statute-ak | law-enforcement-cooperation | FIX |
| nonresident-owner-agent-hi | nonresident-owner-agent | holds |
| edu-no-crime-free-lease-statute-hi | law-enforcement-cooperation | FIX |
| edu-confirmed-absences-outside-title-hi | confirmed-absences-outside-title | ERROR |
| edu-landlord-registration-hi | landlord-registration | FIX |
| edu-no-landlord-registration-la | landlord-registration | ERROR |
| edu-no-nonresident-agent-rule-la | nonresident-owner-agent | ERROR |
| edu-law-enforcement-cooperation-la | law-enforcement-cooperation | FIX |
| edu-confirmed-absences-outside-title-la | confirmed-absences-outside-title | ERROR |
| edu-confirmed-absences-outside-title-ar | confirmed-absences-outside-title | ERROR |
| edu-no-landlord-registration-ar | landlord-registration | FIX |
| edu-no-nonresident-owner-agent-ar | nonresident-owner-agent | ERROR |
| edu-law-enforcement-cooperation-ar | law-enforcement-cooperation | holds pending: official text not reachable |
| edu-confirmed-absences-outside-title-ms | confirmed-absences-outside-title | ERROR |
| edu-no-landlord-registration-ms | landlord-registration | FIX |
| edu-no-nonresident-owner-agent-ms | nonresident-owner-agent | ERROR |
| edu-law-enforcement-cooperation-ms | law-enforcement-cooperation | FIX |

Sources read 2026-11-06. Alaska: akleg.gov print view (`https://www.akleg.gov/basis/statutes.asp?media=print&secStart=X&secEnd=Y`). Hawaii: data.capitol.hawaii.gov/hrscurrent. It is an official Hawaii Legislature host and serves plain HTML with no Cloudflare block. capitol.hawaii.gov itself returned 403 and was not retried. Louisiana: legis.la.gov (`Law.aspx?d=N`). Mississippi: billstatus.ls.state.ms.us, enrolled acts that print each whole section as amended. The server omits its intermediate certificate, so the GlobalSign intermediate was fetched from the URL in the certificate's own AIA field and checked against the system roots. No verification was skipped. Arkansas: arkleg.state.ar.us, Act 1041 of 2021 (SB601, the Uniform LLC Act as enacted). Each relied-on section was read whole.

---

### `edu-confirmed-absences-outside-title-ak`
ERROR. Item (3) says registration is never a condition of winning possession. But an out-of-state LLC cannot maintain any court action until it registers, and an out-of-state corporation cannot until it has a certificate of authority.

old_str:
```
(3) There is no statewide landlord registration or rental license, so registration is not a condition of winning possession. Check local rules.
```
new_str:
```
(3) There is no statewide landlord registration or rental license, so registration is not a condition of winning possession for an individual owner. An out-of-state entity is different: a foreign limited liability company must register with the state before conducting affairs here and may not maintain an eviction or other court action until it has registered, and a foreign corporation transacting business here without a certificate of authority may not maintain an action until it obtains one; the lease stays valid either way (AS 10.50.605, 10.50.675, 10.06.705, 10.06.713 and 10.06.715). Those statutes do not say whether renting out property is conducting affairs or transacting business (case law not searched), so register before you file. Check local rules.
```
Quotes:
- AS 10.50.605: "Before conducting affairs in this state, a foreign limited liability company shall register with the department." (akleg.gov, secStart=10.50.600&secEnd=10.50.690, read 2026-11-06)
- AS 10.50.675(a): "A foreign limited liability company conducting affairs in this state may not maintain an action or other proceeding in a court of this state until it has registered in this state." (b)(1): the failure to register does not "impair the validity of a contract or act of the company" (same URL)
- AS 10.06.705: "A foreign corporation may not transact business in this state until it has been issued a certificate of authority by the commissioner." (akleg.gov, secStart=10.06.705&secEnd=10.06.733, read 2026-11-06)
- AS 10.06.713: "A foreign corporation transacting business in this state without a certificate of authority may not maintain an action, suit, or proceeding in a court of this state until it obtains a certificate of authority." (same URL)
- AS 10.06.715: "The failure of a foreign corporation to obtain a certificate of authority to transact business in this state does not impair the validity of a contract or act of the corporation, and does not prevent the corporation from defending an action, suit, or proceeding in a court of this state." (same URL)
- Trade names: AS 10.35.040(a) says a person "may register its name", and AS 10.35.080 says "This chapter does not abrogate any rights between persons who have not registered a business name under those sections." Registration is voluntary and there is no bar on suing, so no edit is needed for trade names. (akleg.gov, secStart=10.35.010&secEnd=10.35.100)

### `edu-no-landlord-registration-ak`
FIX. The row's only note on out-of-state owners is the optional agent designation. It leaves out the mandatory foreign-entity registration and the bar on suing.

old_str:
```
An out-of-state landlord may file a designation of an Alaska agent for service of process.
```
new_str:
```
An out-of-state landlord may file a designation of an Alaska agent for service of process. An out-of-state limited liability company or corporation must also register with the state (a foreign LLC before conducting affairs here, a foreign corporation by obtaining a certificate of authority before transacting business) and may not maintain an eviction or other court action until it does (AS 10.50.605, 10.50.675, 10.06.705 and 10.06.713); see `edu-nonresident-landlord-agent-ak`.
```
Quotes: same as the AK row above (AS 10.50.605, 10.50.675(a), 10.06.705, 10.06.713), read 2026-11-06.

### `edu-nonresident-landlord-agent-ak`
FIX. The row treats an agent as optional, even for "a corporation not authorized to do business here". General entity law requires registration with a registered agent, bars suits until the entity registers, and makes the commissioner the agent for service of an LLC that has no registered agent.

old_str:
```
No Alaska statute requires an in-state broker or tax withholding from rent paid to you.
```
new_str:
```
An out-of-state entity has a further duty. A foreign limited liability company must register with the state, naming an Alaska registered agent, before conducting affairs here; until it does it may not maintain an eviction or other court action, and while it has no registered agent the commissioner is its agent for service, so a tenant may sue it by serving the commissioner (AS 10.50.605, 10.50.615, 10.50.645 and 10.50.675). A foreign corporation may not transact business here until it has a certificate of authority, may not maintain an action until it gets one, and is liable for back fees and taxes plus a penalty of up to $10,000 a year; its leases stay valid (AS 10.06.705, 10.06.710, 10.06.713 and 10.06.715). These statutes do not say whether renting out property counts as conducting affairs or transacting business (case law not searched), so register before you need to file. No Alaska statute requires an in-state broker or tax withholding from rent paid to you.
```
Quotes:
- AS 10.50.615(a)(3)-(4): the application must state "the name and address of the company's registered agent" and "that the department is appointed the agent of the company for service of process if the foreign limited liability company fails to appoint or maintain a registered agent under AS 10.50.635" (akleg.gov, secStart=10.50.600&secEnd=10.50.690, read 2026-11-06)
- AS 10.50.645: "When a foreign limited liability company that is registered under this chapter, or that conducts affairs in this state without being registered under this chapter, fails to appoint or maintain a registered agent in this state, when a registered agent cannot with reasonable diligence be found at the registered office, or when the registration of a foreign company is suspended or revoked, the commissioner is an agent upon whom process, notice, or demand may be served." (same URL)
- AS 10.06.710: the corporation is liable for fees and taxes "plus a penalty of up to $10,000 per calendar year or portion of a calendar year for each year it transacts business in this state without a certificate of authority." (akleg.gov, secStart=10.06.705&secEnd=10.06.733, read 2026-11-06)
- AS 10.50.605, 10.50.675(a), 10.06.705, 10.06.713, 10.06.715: quoted under the first AK row.

### `edu-no-crime-free-lease-statute-ak`
FIX. The row leaves out reporting duties that bind any person: witnessed violent crimes, and deaths reported to the medical examiner.

old_str:
```
Don't penalize tenants, especially victims, for calling for help.
```
new_str:
```
Don't penalize tenants, especially victims, for calling for help. Some reporting duties bind you as they bind anyone. If you or your staff witness the murder, kidnapping or sexual assault of a child under 16, or an assault causing a child serious physical injury, you must report it to the police in a timely manner (failing to is a class A misdemeanor); witnessing the murder, kidnapping or sexual assault of an adult brings a duty to report as soon as reasonably practicable (failing to is a violation). Both duties have defenses for danger and for stopping the crime (AS 11.56.765 and 11.56.767). Anyone who has knowledge of a death that appears to have been caused by unknown or criminal means, suicide, accident or poisoning, that occurred suddenly in apparent good health or unattended by a physician, or in other listed circumstances, must notify a peace officer and immediately notify the state medical examiner, and the body may not be moved without the medical examiner's permission, as when a tenant is found dead in a unit (AS 12.65.005). The child-abuse and vulnerable-adult reporting duties bind listed professionals and caregivers, not landlords as such, though anyone may report (AS 47.17.020 and 47.24.010).
```
Quotes:
- AS 11.56.765(a): "A person, other than the victim, commits the crime of failure to report a violent crime committed against a child if the person (1) witnesses what the person knows or reasonably should know is (A) the murder or attempted murder of a child by another; (B) the kidnapping or attempted kidnapping of a child by another; (C) the sexual penetration or attempted sexual penetration by another ... or (D) the assault of a child by another causing serious physical injury to the child; (2) knows or reasonably should know that the child is under 16 years of age; and (3) does not in a timely manner report that crime to a peace officer or law enforcement agency." (d): "Failure to report a violent crime committed against a child is a class A misdemeanor." (akleg.gov, secStart=11.56.760&secEnd=11.56.770, read 2026-11-06)
- AS 11.56.767(a)(2): "does not, as soon as reasonably practicable, report that crime to a peace officer or law enforcement agency." (d): "Failure to report a violent crime committed against an adult is a violation." (same URL)
- AS 12.65.005(a): "Unless the person has reasonable grounds to believe that notice has already been given, a person who attends a death or has knowledge of a death, in addition to notifying a peace officer, shall immediately notify the state medical examiner when the death appears to have (1) been caused by unknown or criminal means, during the commission of a crime, or by suicide, accident, or poisoning; (2) occurred under suspicious or unusual circumstances or occurred suddenly when the decedent was in apparent good health; (3) been unattended by a practicing physician ..." (c): "The body of a person whose death has been or should be reported to the state medical examiner under this section may not be moved or otherwise disturbed without the permission of the state medical examiner." (akleg.gov, secStart=12.65.005&secEnd=12.65.140, read 2026-11-06; AS 12.65 states no penalty)
- AS 47.17.020(a) lists the persons required to report child abuse "in the performance of their occupational duties"; (b) does not "prohibit any other person from reporting". AS 47.24.010(a) lists professionals and "a caregiver of the vulnerable adult"; (d) "This section does not prohibit any other person from reporting a harm under this section." (akleg.gov, secStart=47.17.020&secEnd=47.17.068 and secStart=47.24.010&secEnd=47.24.013, read 2026-11-06)

### `nonresident-owner-agent-hi`
holds. This row is lease-clause text implementing HRS § 521-43(f), not an education row that states an absence. The foreign-entity rules belong in the education rows and are added to `edu-landlord-registration-hi` below.

### `edu-no-crime-free-lease-statute-hi`
FIX. The row leaves out two duties that bind any person: reporting a death to the coroner, and the duty to get aid for a crime victim.

old_str:
```
Rooming houses must allow police access for inspection at all times.
```
new_str:
```
Rooming houses must allow police access for inspection at all times. Two duties bind you as they bind anyone. Anyone who becomes aware of a death from violence, accident or suicide, a sudden death of someone in apparent health, a death unattended by a physician, or one in a suspicious or unusual manner, as when a tenant is found dead in a unit, must immediately notify the coroner or deputy coroner, and failing to report is subject to a fine of up to $100 (HRS § 841-3). And anyone at the scene of a crime who knows a victim is suffering serious physical harm must obtain or try to obtain aid from police or medical personnel if that can be done without danger to anyone; failing to is a petty misdemeanor (HRS § 663-1.6). The child-abuse and vulnerable-adult reporting duties bind listed professionals, not landlords as such (HRS §§ 350-1.1(a) and 346-224(a)), though anyone may report suspected abuse of a vulnerable adult (HRS § 346-224(d)).
```
Quotes:
- HRS § 841-3: "[(b)] Any person who becomes aware of the death of any person under any of the circumstances set forth above shall immediately notify the coroner or deputy coroner of the known facts concerning the time, place, manner, and circumstances of the death. [(c)] Any person who fails to report the death of a person under circumstances covered herein shall be subject to a fine of not more than $100." Circumstances in (a): "as the result of violence, or as the result of any accident, or by suicide, or suddenly when in apparent health, or when unattended by a physician, or in prison, or in a suspicious or unusual manner, or within twenty-four hours after admission to a hospital or institution". (https://data.capitol.hawaii.gov/hrscurrent/Vol14_Ch0701-0853/HRS0841/HRS_0841-0003.htm, read 2026-11-06)
- HRS § 663-1.6(a): "Any person at the scene of a crime who knows that a victim of the crime is suffering from serious physical harm shall obtain or attempt to obtain aid from law enforcement or medical personnel if the person can do so without danger or peril to any person. Any person who violates this subsection is guilty of a petty misdemeanor." (https://data.capitol.hawaii.gov/hrscurrent/Vol13_Ch0601-0676/HRS0663/HRS_0663-0001_0006.htm, read 2026-11-06)
- HRS § 350-1.1(a): "the following persons who, in their professional or official capacity, have reason to believe that child abuse or neglect has occurred ... shall immediately report" (list (1)-(10) has no landlord). (…/Vol07_Ch0346-0398/HRS0350/HRS_0350-0001_0001.htm, read 2026-11-06)
- HRS § 346-224(a): "The following persons who, in the performance of their professional or official duties, know or have reason to believe that a vulnerable adult has incurred abuse ..."; (d): "Any person not enumerated in subsection (a) who has reason to believe that a vulnerable adult has incurred abuse or is in danger of abuse if immediate action is not taken may report the matter orally to the department." (…/Vol07_Ch0346-0398/HRS0346/HRS_0346-0224.htm, read 2026-11-06)

### `edu-confirmed-absences-outside-title-hi`
ERROR. Item (3) says no statute requires registration before you can win possession. HRS § 428-1003(b) makes owning income-producing real property in Hawaii transacting business for a foreign LLC, and § 428-1008(a) bars such an LLC from maintaining an action until it has a certificate of authority.

old_str:
```
(3) Registration: no state statute requires you to register or license a long-term residential rental, or to prove registration before you can win possession.
```
new_str:
```
(3) Registration: no state statute requires you to register or license a long-term residential rental, or to prove registration before you can win possession, but an out-of-state limited liability company that owns income-producing real property in Hawaii is transacting business here, and it may not maintain an action or proceeding, an eviction included, until it has a certificate of authority; the lease stays valid (HRS §§ 428-1003(b) and 428-1008). An out-of-state corporation that transacts business here faces the same bar until it obtains a certificate of authority, though owning property without more is not transacting business for a corporation (HRS §§ 414-431 and 414-432).
```
Quotes:
- HRS § 428-1003(b): "For purposes of this part, the ownership in this State of income-producing real property or tangible personal property, other than property excluded under subsection (a), constitutes transacting business in this State." (https://data.capitol.hawaii.gov/hrscurrent/Vol08_Ch0401-0429/HRS0428/HRS_0428-1003.htm, read 2026-11-06)
- HRS § 428-1008(a): "A foreign limited liability company transacting business in this State may not maintain an action or proceeding in this State unless it has a certificate of authority to transact business in this State." (b): failure "does not impair the validity of a contract or act of the company or prevent the foreign limited liability company from defending an action or proceeding in this State." (…/HRS0428/HRS_0428-1008.htm, read 2026-11-06)
- HRS § 414-431(a): "A foreign corporation may not transact business in this State until it obtains a certificate of authority from the department director." (b)(9): "Owning, without more, real or personal property" is not transacting business. (…/HRS0414/HRS_0414-0431.htm, read 2026-11-06)
- HRS § 414-432(a): "A foreign corporation transacting business in this State without a certificate of authority may not maintain a proceeding in any court in this State until it obtains a certificate of authority." (…/HRS0414/HRS_0414-0432.htm, read 2026-11-06)
- Trade names: HRS § 482-2(a): "Any person desiring to register any trade name may obtain a certificate of registration". Registration is voluntary and the section has no bar on suing, so no edit. (…/Vol11_Ch0476-0490/HRS0482/HRS_0482-0002.htm)

### `edu-landlord-registration-hi`
FIX. The list of state requirements leaves out the foreign-entity certificate of authority.

old_str:
```
(4) Off-island owners: if you or the owner live outside Hawaii or on a different island from the unit, you must name an on-island agent in the written rental agreement (see that clause).
```
new_str:
```
(4) Off-island owners: if you or the owner live outside Hawaii or on a different island from the unit, you must name an on-island agent in the written rental agreement (see that clause). (5) Out-of-state entities: an out-of-state limited liability company that owns income-producing real property in Hawaii is transacting business here and must obtain a certificate of authority; until it does it may not maintain an eviction or other court action, it is liable for the fees and penalties it would have paid, and it may be served by registered or certified mail at any address it uses for its business (HRS §§ 428-1002, 428-1003(b), 428-1008 and 428-110(b)). An out-of-state corporation that transacts business here needs a certificate of authority too, with the same bar on suing, though owning property without more is not transacting business for a corporation (HRS §§ 414-431 and 414-432).
```
Quotes:
- HRS § 428-1002(a): "A foreign limited liability company may apply for a certificate of authority to transact business in this State by delivering an application to the director for filing." (…/HRS0428/HRS_0428-1002.htm, read 2026-11-06)
- HRS § 428-1008(d): "If a foreign limited liability company transacts business in this State without a certificate of authority, service of process may be made upon the company as set forth in section 428-110(b) at any address used by the company as its address for purposes of its business transactions." (e): it "shall be liable to the State in an amount equal to all fees and penalties which would have been imposed by this chapter". (…/HRS_0428-1008.htm, read 2026-11-06)
- HRS § 428-110(b): "service may be made upon the limited liability company by registered or certified mail, return receipt requested, addressed to the limited liability company at its principal office." (…/HRS_0428-0110.htm, read 2026-11-06)
- HRS §§ 428-1003(b), 414-431, 414-432: quoted under the row above.

### `edu-no-landlord-registration-la`
ERROR. The row says "No statute requires you to register with the state ... makes registration a condition of evicting". But an out-of-state corporation or LLC transacting business here cannot present any judicial demand until authorized (La. R.S. 12:314, 12:1354), and an individual renting under an assumed name must file a certificate (La. R.S. 51:281).

old_str:
```
No statute requires you to register with the state, the parish or the assessor, makes registration a condition of evicting, gives tenants a right to leave if you are unregistered, or requires an out-of-state owner to hire a Louisiana broker.
```
new_str:
```
No landlord-tenant statute requires you to register with the state, the parish or the assessor, makes registration a condition of evicting, gives tenants a right to leave if you are unregistered, or requires an out-of-state owner to hire a Louisiana broker. Two general business rules can still apply. An out-of-state limited liability company or corporation transacting business here must first get a certificate of authority from the secretary of state, and until it is authorized it may not present any judicial demand, an eviction included, in a Louisiana court; its leases stay valid (La. R.S. 12:301, 12:314, 12:1342, 12:1354). Acquiring property not as part of a regular business activity is not transacting business, so whether renting out property counts depends on the facts (La. R.S. 12:302(J), 12:1343(10)); case law was not searched. And if you, as an individual, rent under a name other than your own real name, you must first file an assumed-name certificate with the clerk of court of each parish where you do business (in New Orleans, the register of conveyances); a violation is a misdemeanor, and each day is a separate offense (La. R.S. 51:281, 51:284).
```
Quotes:
- La. R.S. 12:301: "No foreign corporation or association ... shall have the right to transact business in this state until it shall have procured a certificate of authority to do so from the secretary of state." (https://legis.la.gov/Legis/Law.aspx?d=76472, read 2026-11-06)
- La. R.S. 12:302(J): "Acquiring and disposing of property or a property interest, not as a part of any regular business activity." (https://legis.la.gov/Legis/Law.aspx?d=76473, read 2026-11-06)
- La. R.S. 12:314(A): "No foreign corporation transacting business in this state shall be permitted to present any judicial demand before any court of this state unless it has been authorized to transact such business, if required by, and as provided in, this Chapter." (B): failure "shall not impair the validity of any contract or act of such corporation". (https://legis.la.gov/Legis/Law.aspx?d=76488, read 2026-11-06; History: Acts 1968, No. 105, §1. Amended by Acts 1976, No. 599, §1)
- La. R.S. 12:1342: "No foreign limited liability company shall have the right to transact business in this state until it shall have procured a certificate of authority to do so from the secretary of state." (https://legis.la.gov/Legis/Law.aspx?d=76297, read 2026-11-06)
- La. R.S. 12:1343(10): "Acquiring or disposing of property or a property interest, not as a part of any regular business activity." (https://legis.la.gov/Legis/Law.aspx?d=76298, read 2026-11-06)
- La. R.S. 12:1354(A): "No foreign limited liability company transacting business in this state shall be permitted to present any judicial demand before any court of this state unless it has been authorized to transact such business, if required by and as provided in, this Chapter." (https://legis.la.gov/Legis/Law.aspx?d=76311, read 2026-11-06)
- La. R.S. 51:281: "No person shall transact any business under an assumed name or under any designation, name or style, corporate or otherwise, other than the real name of the individual conducting the business, unless such person files in the office of the register of conveyances in the city of New Orleans, or the clerk of court, as the case may be, of the parish or parishes in which the person conducts or intends to conduct the business, a certificate setting forth the name under which the business is to be conducted and the real full name of the person owning, conducting or transacting the business, with the post office address of such person." (https://legis.la.gov/Legis/Law.aspx?d=104449, read 2026-11-06)
- La. R.S. 51:284: "Whoever violates the provisions of this Subpart shall be fined not less than twenty-five dollars nor more than one hundred dollars, or imprisoned for not less than ten days nor more than sixty days, or both. Each day any person continues to conduct any business in violation of this Subpart, shall constitute a separate offense." (https://legis.la.gov/Legis/Law.aspx?d=104454, read 2026-11-06). La. R.S. 51:283 excludes corporations and partnership names that include a partner's real name (d=104453). None of these sections bars a suit for an assumed-name violation.

### `edu-no-nonresident-agent-rule-la`
ERROR. The row says no owner must name an agent "with any state office before renting or suing". That is false for an out-of-state entity, which needs a certificate of authority (an authorized foreign corporation must keep a registered agent) and cannot sue until authorized.
NEW TITLE: No Agent Rule for Out-of-State Individual Owners

old_str:
```
Louisiana does not require an owner who lives out of state to name a Louisiana agent
```
new_str:
```
Louisiana does not require an individual owner who lives out of state to name a Louisiana agent
```

old_str:
```
so it is in your interest to give tenants a reliable address and the name of your local manager.
```
new_str:
```
so it is in your interest to give tenants a reliable address and the name of your local manager. An out-of-state limited liability company or corporation is different: one transacting business in Louisiana must first get a certificate of authority from the secretary of state, an authorized foreign corporation must keep a registered agent here, and until it is authorized it may not present any judicial demand, an eviction included, in a Louisiana court, though its leases stay valid (La. R.S. 12:301, 12:308(A), 12:314, 12:1342, 12:1354). Acquiring property not as part of a regular business activity does not count as transacting business (La. R.S. 12:302(J), 12:1343(10)), so whether renting out property does depends on the facts; get the certificate before you need to file.
```
Quotes:
- La. R.S. 12:308(A): "Each foreign corporation authorized to transact business in this state shall have and continuously maintain in this state: (1) At least one registered agent ..." (https://legis.la.gov/Legis/Law.aspx?d=76480, read 2026-11-06; History ends Acts 2019, No. 19, §2)
- La. R.S. 12:301, 12:302(J), 12:314(A), 12:1342, 12:1343(10), 12:1354(A): quoted under `edu-no-landlord-registration-la`.

### `edu-law-enforcement-cooperation-la`
FIX. The row leaves out reporting duties that bind any person: adult abuse, a witnessed sexual abuse of a child, and deaths reported to the coroner.

old_str:
```
The rules are the same for fixed-term and month-to-month leases.
```
new_str:
```
Three reporting duties bind you as they bind anyone. Any person who has cause to believe that an adult (as the statute defines it: someone who, because of a physical, mental or developmental disability or the infirmities of aging, cannot manage his own resources, carry out daily activities or protect himself) has been or may be further harmed by abuse, neglect or exploitation must report it to an adult protection agency or to police, and knowingly and willfully failing to is a misdemeanor punishable by a fine of up to $500, up to six months in jail, or both (La. R.S. 15:1503, 15:1504(A), 15:1505(A), 14:403.2(A)). Any person 18 or older who witnesses the sexual abuse of a child and knowingly and willfully fails to report it to law enforcement or the Department of Children and Family Services faces a fine of up to $10,000, up to five years in prison, or both (La. R.S. 14:403(A)(4)); the general child-abuse reporting duty binds the mandatory reporters the Children's Code lists, and anyone else may report (La. Ch.C. art. 609). And any person having knowledge of a death under sudden, accidental, violent or suspicious circumstances, or without medical attendance in the 24 hours before death, as when a tenant is found dead in a unit, must immediately notify the coroner, and no one may move the body without first notifying the coroner and receiving permission; failing to comply is a misdemeanor with a fine of up to $5,000 (La. R.S. 13:5712). The rules are the same for fixed-term and month-to-month leases.
```
Quotes:
- La. R.S. 15:1504(A): "Any person, including but not limited to a health, mental health, and social service practitioner, having cause to believe that an adult's physical or mental health or welfare has been or may be further adversely affected by abuse, neglect, or exploitation shall report in accordance with R.S. 15:1505." (https://legis.la.gov/Legis/Law.aspx?d=508940, read 2026-11-06)
- La. R.S. 15:1503(3): "'Adult' means any individual eighteen years of age or older, or an emancipated minor who, due to a physical, mental, or developmental disability or the infirmities of aging, is unable to manage his own resources, carry out the activities of daily living, or protect himself from abuse, neglect, or exploitation." (https://legis.la.gov/Legis/Law.aspx?d=508939, read 2026-11-06). The body follows the statute's own reading: the duty is about vulnerable adults.
- La. R.S. 15:1505(A): "Reports reflecting the reporter's belief that an adult has been abused or neglected shall be made to any adult protection agency or to any local or state law enforcement agency." (d=508943, read 2026-11-06)
- La. R.S. 14:403.2(A): "Any person, who under R.S. 15:1504(A), is required to report the abuse or neglect of an adult and knowingly and willfully fails to so report shall be guilty of a misdemeanor and upon conviction shall be fined not more than five hundred dollars or imprisoned for not more than six months, or both." (https://legis.la.gov/Legis/Law.aspx?d=78522, read 2026-11-06)
- La. R.S. 14:403(A)(4)(a): "Notwithstanding the provisions of Paragraph (1) of this Subsection, any person who is eighteen years of age or older who witnesses the sexual abuse of a child and knowingly and willfully fails to report the sexual abuse to law enforcement or to the Department of Children and Family Services as required by Children's Code Article 610, shall be fined not more than ten thousand dollars, imprisoned with or without hard labor for not more than five years, or both." (https://legis.la.gov/Legis/Law.aspx?d=78520, read 2026-11-06; History ends Acts 2019, No. 2, §3). Note: Ch.C. art. 610 as printed (d=73202, History ends Acts 2026, No. 960, eff. Jan. 1, 2027, which repealed its Paragraph I) no longer visibly states a witness duty. The penalty section still stands as printed, so the body relies on 14:403(A)(4) alone. Flag for re-check after January 1, 2027.
- La. Ch.C. art. 609(A)(1)(a): "any mandatory reporter who has cause to believe that a child's physical or mental health or welfare is endangered as a result of abuse or neglect ... shall report in accordance with Article 610." (B): "With respect to permitted reporters, any other person having cause to believe ... may report in accordance with Article 610." (https://legis.la.gov/Legis/Law.aspx?d=73201, read 2026-11-06)
- La. R.S. 13:5712: "A. A physician or other person having knowledge of a death under sudden, accidental, violent, or suspicious circumstances or without medical attendance within twenty-four hours prior to death shall immediately notify the coroner of the death. B. Before removing any such body from the place where death occurred ... an undertaker, embalmer, or other person shall first notify the coroner and receive permission from the coroner. ... D. Any person who fails to comply with the provisions of this Section shall be guilty of a misdemeanor and upon conviction thereof shall be fined not more than five thousand dollars." (https://legis.la.gov/Legis/Law.aspx?d=763361, read 2026-11-06; History ends Acts 2015, No. 302, §2)

### `edu-confirmed-absences-outside-title-la`
ERROR. Item (2) says no registration is required "to win an eviction". The foreign-entity bar (La. R.S. 12:314, 12:1354) contradicts that, and the assumed-name certificate (La. R.S. 51:281) is left out.

old_str:
```
(2) No statewide rental license or registration is required to rent a home or to win an eviction; parishes and cities may have their own programs (`edu-no-landlord-registration-la`).
```
new_str:
```
(2) No statewide rental license or registration is required to rent a home or to win an eviction, but an out-of-state limited liability company or corporation transacting business here may not present any judicial demand, an eviction included, until it has a certificate of authority, and an individual renting under a name other than his own must file an assumed-name certificate (La. R.S. 12:314, 12:1354, 51:281); parishes and cities may have their own programs (`edu-no-landlord-registration-la`).
```
Quotes: La. R.S. 12:314(A), 12:1354(A), 51:281, quoted under `edu-no-landlord-registration-la` (read 2026-11-06).

### `edu-confirmed-absences-outside-title-ar`
ERROR. Item (3) says no registration is a condition of winning an eviction. Ark. Code Ann. §§ 4-38-902(b) and 4-38-913(a) bar an unregistered foreign LLC from maintaining an action.

old_str:
```
(3) Landlord registration: Arkansas has no statewide rental license or registration as a condition of renting or of winning an eviction;
```
new_str:
```
(3) Landlord registration: Arkansas has no statewide rental license or registration as a condition of renting or of winning an eviction, except that an out-of-state limited liability company doing business here must register with the Secretary of State and may not maintain an eviction or other court action until it does (Ark. Code Ann. §§ 4-38-902, 4-38-913);
```
Quotes (Act 1041 of 2021, SB601 as engrossed 4/21/21, enacting Ark. Code Ann. §§ 4-38-101 et seq., effective September 1, 2021; https://arkleg.state.ar.us/Home/FTPDocument?path=%2FACTS%2F2021R%2FPublic%2FACT1041.pdf, read 2026-11-06; later amendments not checked because the official Code is on Lexis):
- § 4-38-902: "(a) A foreign limited liability company may not do business in this state until it registers with the Secretary of State under this subchapter. (b) A foreign limited liability company doing business in this state may not maintain an action or proceeding in this state unless it is registered to do business in this state. (c) The failure of a foreign limited liability company to register to do business in this state does not impair the validity of a contract or act of the company or preclude it from defending an action or proceeding in this state."
- § 4-38-913(a): "A foreign limited liability company transacting business in this state shall not maintain an action, suit, or proceeding in a court of this state until it has registered in this state."

### `edu-no-landlord-registration-ar`
FIX. The row leaves out the foreign-LLC registration duty and the bar on suing.

old_str:
```
Two state rules touch the subject.
```
new_str:
```
Three state rules touch the subject.
```

old_str:
```
The same applies to every tenancy type. This finding covers the Arkansas Code and Constitution; city and county ordinances were not searched.
```
new_str:
```
Third, an out-of-state limited liability company may not do business in Arkansas until it registers with the Secretary of State, naming a registered agent here; until it registers it may not maintain an eviction or other court action, though its leases stay valid, and it faces back fees and a civil penalty of up to $5,000 for each year or part of a year (Ark. Code Ann. §§ 4-38-902, 4-38-903, 4-38-913). Owning property, without more, is not doing business (Ark. Code Ann. § 4-38-905(a)(10)), so whether renting it out is depends on the facts. The same applies to every tenancy type. This finding covers the Arkansas Code and Constitution; city and county ordinances were not searched.
```
Quotes (Act 1041 of 2021, URL above, read 2026-11-06):
- § 4-38-903: the statement must state "(5) the name and street and mailing addresses of the company's registered agent in this state."
- § 4-38-905(a)(10): "owning, without more, property".
- § 4-38-913(e): "A foreign limited liability company which transacts business in this state without registration shall be subject to a civil penalty, payable to the state, not to exceed five thousand dollars ($5,000) for each twelve-month period or part thereof, beginning with the date it began transacting business in this state and ending on the date it becomes registered."; (d)(1): liability for "all fees which would have been imposed by this chapter".
- § 4-38-902(a)-(c), § 4-38-913(a): quoted under the AR row above.

### `edu-no-nonresident-owner-agent-ar`
ERROR. The row says no statute "bars suit until an agent is filed". That is false for an out-of-state LLC, which must file a registration statement naming a registered agent and cannot maintain an action until it is registered. The title "City Agent Rules Only" becomes false.
NEW TITLE: Out-of-State Owners: City Agent Rules and LLC Registration

old_str:
```
No Arkansas statute requires an owner who lives outside Arkansas to name an in-state agent in the lease, bars suit until an agent is filed, requires an in-state broker, or requires tenants to withhold state income tax from rent paid to a nonresident owner.
```
new_str:
```
No Arkansas statute requires an individual owner who lives outside Arkansas to name an in-state agent in the lease, bars suit until an agent is filed, requires an in-state broker, or requires tenants to withhold state income tax from rent paid to a nonresident owner. An out-of-state limited liability company is different: it may not do business in Arkansas until it files a foreign registration statement with the Secretary of State naming a registered agent here, and until it registers it may not maintain an eviction or other court action, though its leases stay valid (Ark. Code Ann. §§ 4-38-902, 4-38-903, 4-38-913). Owning property, without more, is not doing business (Ark. Code Ann. § 4-38-905(a)(10)), so whether renting it out is depends on the facts; register before you need to file.
```
Quotes: §§ 4-38-902(a)-(c), 4-38-903(5), 4-38-905(a)(10), 4-38-913(a), quoted above (Act 1041 of 2021, read 2026-11-06). Foreign corporations: Ark. Code Ann. § 4-27-1502 (lead, official text unread: findlaw/justia report a bar on maintaining a proceeding without a certificate of authority). Not added to the body.

### `edu-law-enforcement-cooperation-ar`
holds pending: official text not reachable. Leads, official text unread: Ark. Code Ann. § 12-12-315 (notifying the coroner of certain deaths, with a Class A misdemeanor penalty per a Justia 2017 copy, which suggests "any person" language may be present) and § 12-18-402 (child-abuse reporting, apparently mandated reporters only). The only official text found was Act 553 of 2023 (HB1617, https://www.arkleg.state.ar.us/assembly/2023/2023R/Bills/HB1617.pdf, read 2026-11-06). It adds one subdivision to § 12-12-315(a)(1) and does not print the whole section. Re-check when an official source for § 12-12-315 can be read.

### `edu-confirmed-absences-outside-title-ms`
ERROR. Item (3) says no registration is a condition of winning an eviction. Miss. Code Ann. § 79-29-1013(1) bars an unregistered foreign LLC from maintaining any action.

old_str:
```
(3) Landlord registration: Mississippi has no statewide rental registration, license or inspection program as a condition of renting or of winning an eviction;
```
new_str:
```
(3) Landlord registration: Mississippi has no statewide rental registration, license or inspection program as a condition of renting or of winning an eviction, except that an out-of-state limited liability company transacting business here must register with the Secretary of State and may not maintain an eviction or other court action until it has registered (Miss. Code Ann. §§ 79-29-1003, 79-29-1013);
```
Quotes:
- Miss. Code Ann. § 79-29-1003(1), as amended by 2012 HB 1162, § 119 (effective January 1, 2013): "Before transacting business in this state, a foreign limited liability company, including a foreign limited liability company formed to render professional services, shall register with the Secretary of State." (https://billstatus.ls.state.ms.us/documents/2012/pdf/HB/1100-1199/HB1162SG.pdf, read 2026-11-06)
- Miss. Code Ann. § 79-29-1013, enacted by 2010 HB 683 (effective January 1, 2011). The code-section lookup for 2011-2026 shows no later enacted amendment. "(1) A foreign limited liability company transacting business in this state may not maintain any action, suit, or proceeding in any court of this state until it has registered in this state. (2) The failure of a foreign limited liability company to register in this state does not: (a) Impair the validity of any contract or act of the foreign limited liability company ... (4) By transacting business in this state without registration, a foreign limited liability company appoints the Secretary of State as its registered agent for service of process with respect to causes of action arising out of the transaction of business in this state." (https://billstatus.ls.state.ms.us/documents/2010/pdf/HB/0600-0699/HB0683SG.pdf, read 2026-11-06)

### `edu-no-landlord-registration-ms`
FIX. The row leaves out the foreign-LLC registration duty and the bar on suing.

old_str:
```
Two state rules touch the subject.
```
new_str:
```
Three state rules touch the subject.
```

old_str:
```
Cities and counties may have their own registration or inspection ordinances, which this review did not search.
```
new_str:
```
Third, an out-of-state limited liability company must register with the Secretary of State before transacting business here; until it registers it may not maintain an eviction or other court action, though its leases stay valid, and by transacting business unregistered it appoints the Secretary of State as its agent for service of process on claims arising from that business (Miss. Code Ann. §§ 79-29-1003(1), 79-29-1013). Owning real property, without more, is not transacting business (Miss. Code Ann. § 79-29-1015(1)(i)), so whether renting it out is depends on the facts. Cities and counties may have their own registration or inspection ordinances, which this review did not search.
```
Quotes:
- Miss. Code Ann. § 79-29-1015(1): "The following activities of a foreign limited liability company, among others, do not constitute transacting business in this state within the meaning of this article: ... (i) Owning, without more, real or personal property;" (2010 HB 683, URL above, read 2026-11-06)
- §§ 79-29-1003(1), 79-29-1013: quoted under the MS row above.

### `edu-no-nonresident-owner-agent-ms`
ERROR. The row says no statute requires an agent "for service of process" or "bars a suit until an agent is named". For an out-of-state LLC, an unregistered company is deemed to appoint the Secretary of State and cannot sue until it registers (Miss. Code Ann. § 79-29-1013). The title's "No Mississippi Agent Rule" becomes false for entities.
NEW TITLE: Out-of-State Owners: LLC Registration and a Licensed Manager

old_str:
```
No Mississippi statute requires an owner who lives outside Mississippi to name an in-state agent in the lease or for service of process, bars a suit until an agent is named, or requires tenants to withhold income tax from rent paid to a nonresident owner; a search of the Mississippi Code found none.
```
new_str:
```
No Mississippi statute requires an individual owner who lives outside Mississippi to name an in-state agent in the lease or for service of process, bars a suit until an agent is named, or requires tenants to withhold income tax from rent paid to a nonresident owner; a search of the Mississippi Code found none. An out-of-state limited liability company is different: it must register with the Secretary of State before transacting business here, it may not maintain an eviction or other court action until it has registered (its leases stay valid), and by transacting business here unregistered it appoints the Secretary of State as its agent for service of process on claims arising from that business (Miss. Code Ann. §§ 79-29-1003(1), 79-29-1013). Owning real property, without more, is not transacting business (Miss. Code Ann. § 79-29-1015(1)(i)), so whether renting it out is depends on the facts; register before you need to file.
```
Quotes: §§ 79-29-1003(1), 79-29-1013, 79-29-1015(1)(i), quoted above (read 2026-11-06). Foreign corporations: Miss. Code Ann. § 79-4-15.02 (lead, official text unread). No act printing it was found, so it was not added.

### `edu-law-enforcement-cooperation-ms`
FIX. Mississippi's child-abuse, vulnerable-person and death-reporting duties bind "any other person" / "any person". The row leaves them out.

old_str:
```
The rules are the same for every tenancy type.
```
new_str:
```
Three reporting duties bind you as they bind anyone. Any person having reasonable cause to suspect that a child is neglected or abused, or a victim of commercial sexual exploitation or human trafficking, must immediately make an oral report, by telephone or otherwise, to the Department of Child Protection Services, followed as soon as possible by a written report, and anyone who willfully violates that section faces a fine of up to $5,000, up to one year in jail, or both (Miss. Code Ann. § 43-21-353(1), (7)). Any person who knows or suspects that a vulnerable person has been or is being abused, neglected or exploited must immediately report it to the Department of Human Services or the county department of human services, and failing to report as required is a misdemeanor punishable by a fine of up to $5,000, up to six months in jail, or both (Miss. Code Ann. § 43-47-7(1)). And a death affecting the public interest, which includes a violent, accidental or suicidal death, an unexpected or unexplained death, a suspected drug overdose, a death with no physician in attendance in the prior 36 hours, and the death of anyone under 18, must be reported promptly to the medical examiner by any person present or any person who knows or suspects it, as when a tenant is found dead in a unit; no one may disturb the body until the medical examiner authorizes it, and willfully moving or concealing a body in violation is a misdemeanor (Miss. Code Ann. §§ 41-61-59(1), (2), 41-61-61(1), (3)). The rules are the same for every tenancy type.
```
Quotes:
- Miss. Code Ann. § 43-21-353(1), as last amended by 2019 SB 2840, § 3, which amends the section "as amended by Section 5 of House Bill 571, Section 1 of House Bill 1117, and Section 4 of Senate Bill 2576, 2019 Regular Session". The code-section lookup for 2020-2026 shows no later enacted amendment. "Any attorney, physician, dentist, intern, resident, nurse, psychologist, social worker, family protection worker, family protection specialist, child caregiver, minister, law enforcement officer, public or private school employee or any other person having reasonable cause to suspect that a child is a neglected child * * *, an abused child, or a victim of commercial sexual exploitation or human trafficking, shall cause an oral report to be made immediately by telephone or otherwise and followed as soon thereafter as possible by a report in writing to the Department of * * * Child Protection Services". (7): "Anyone who willfully violates any provision of this section shall be, upon being found guilty, punished by a fine not to exceed Five Thousand Dollars ($5,000.00), or by imprisonment in jail not to exceed one (1) year, or both." (https://billstatus.ls.state.ms.us/documents/2019/pdf/SB/2800-2899/SB2840SG.pdf, read 2026-11-06; "* * *" marks deleted text in the enrolled act)
- Miss. Code Ann. § 43-47-7(1)(a), as amended by 2023 SB 2652, § 2 (no later enacted amendment in the lookup): "any person including, but not limited to, the following, who knows or suspects that a vulnerable person has been or is being abused, neglected or exploited shall immediately report such knowledge or suspicion to the Department of Human Services or to the county department of human services where the vulnerable person is located." (1)(c): "A person who fails to make a report as required under this subsection or who, because of the circumstances, should have known or suspected beyond a reasonable doubt that a vulnerable person suffers from exploitation, abuse, neglect or self-neglect but who knowingly fails to comply with this section shall, upon conviction, be guilty of a misdemeanor and shall be punished by a fine not exceeding Five Thousand Dollars ($5,000.00), or by imprisonment in the county jail for not more than six (6) months, or both such fine and imprisonment." (https://billstatus.ls.state.ms.us/documents/2023/pdf/SB/2600-2699/SB2652SG.pdf, read 2026-11-06)
- Miss. Code Ann. § 41-61-59(1), as amended by 2026 HB 377, § 3 (effective July 1, 2026): "A person's death that affects the public interest as specified in subsection (2) of this section shall be promptly reported to the medical examiner by the physician in attendance, any hospital employee, any law enforcement officer having knowledge of the death, the embalmer or other funeral home employee, any emergency medical technician, any relative or any other person present." (2) includes "(a) Violent death, including homicidal, suicidal or accidental death", "(e) Death that has occurred unexpectedly or from an unexplained cause", "(g) Death of a person where a physician was not in attendance within thirty-six (36) hours preceding death", "(m) Death that is caused by drug overdose or which is believed to be caused by drug overdose", "(o) Death of any person under the age of eighteen (18)." (https://billstatus.ls.state.ms.us/documents/2026/pdf/HB/0300-0399/HB0377SG.pdf, read 2026-11-06)
- Miss. Code Ann. § 41-61-61(1), same act § 4: the medical examiner "shall be notified promptly by any person having knowledge or suspicion of such a death, as provided in subsection (1) of Section 41-61-59. ... No person shall disturb the body at the scene of such a death until authorized by the medical examiner". (3)(a): "A person who willfully moves, distributes or conceals a body or body part in violation of this section is guilty of a misdemeanor". (same URL)

---

## Sources not reached
- capitol.hawaii.gov (403 / Cloudflare); not retried. data.capitol.hawaii.gov was used instead.
- Arkansas official Code (LexisNexis, JavaScript; not used). Not reached: Ark. Code Ann. §§ 4-27-1501/1502 (foreign corporations), 4-70-201 et seq. (assumed names), 12-12-315 (death notification), 12-18-402 (child-abuse reporters), 12-12-1708 (adult maltreatment). Act 1041 of 2021 is the enacted text; any later amendment to §§ 4-38-902/903/905/913 is unchecked.
- Mississippi official Code (LexisNexis). Not reached: Miss. Code Ann. § 79-4-15.01/15.02 (foreign corporations; no act printing them was found) and any Mississippi assumed-name statute.
- Louisiana: the legis.la.gov text search is intermittent. Ch.C. art. 610's current witness-reporting paragraph is unclear after Acts 2026, No. 960 (effective January 1, 2027). The service-on-unregistered-entity provisions (La. R.S. 13:3471, 12:1350) were not read.
- Alaska: nothing unreached for these four topics. AS 09.05.015 (long-arm) was fetched but not relied on.

## Summary
1. 20 rows checked: 9 ERROR, 9 FIX, 1 holds, 1 holds pending (official text not reachable). 21 old_str/new_str edits, plus 3 NEW TITLE lines.
2. Foreign entities: in all five states, out-of-state LLCs and corporations must register before doing business, and an unregistered one cannot maintain an eviction. Hawaii says outright that owning income-producing real property is transacting business (HRS § 428-1003(b)). AR and MS give LLC text only.
3. Any-person reporting duties were missing in AK (witnessed violent crimes, deaths), HI (deaths, duty to assist), LA (vulnerable adults, witnessed child sexual abuse, deaths) and MS (child abuse, vulnerable persons, deaths).
4. Assumed names: only Louisiana makes filing mandatory (La. R.S. 51:281, a criminal penalty, no bar on suing). Alaska and Hawaii registration is voluntary. AR and MS are not reached.
5. Arkansas reporting duties and foreign-corporation and assumed-name rules stay open until an official text source can be read.
