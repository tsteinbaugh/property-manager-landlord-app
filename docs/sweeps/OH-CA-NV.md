# OH / CA / NV sweep: general (non-landlord) statutes missed by "no such rule" rows

Date read: 2026-11-06 for every source below. Repo files were not edited. Each proposed edit was checked against the current bodyText in `~/property-manager-landlord-app/lease-clauses.csv`: every `old_str` occurs exactly once, and the edits for a row apply in the order listed.

**Sources and reachability.** Ohio: codes.ohio.gov section pages, fetched with plain curl and read whole. Nevada: www.leg.state.nv.us/NRS chapter pages, plain curl; each cited section was read whole. California: leginfo.legislature.ca.gov returned HTTP 403 with a Cloudflare "Just a moment... Enable JavaScript and cookies" challenge, so it is **NOT REACHABLE** and was not worked around. California text instead comes from the Legislature's own official bulk-data server, https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL, file dated 2026-11-01). That is a separate official distribution, served without any challenge, and the existing CA rows' notes already rely on it. **Please decide whether it meets the "official site" rule.** If it does not, treat the CA quotes as unread official text and the CA verdicts as leads.

## OHIO

### edu-law-enforcement-cooperation-oh: **holds (optional addition)**

Item 4: R.C. 2921.22(A)(1) (any felony, which covers a witnessed rape), (C)/(D) (deaths) and the (J)/(K) penalties are stated correctly. Ohio's child-abuse (R.C. 2151.421) and elder-abuse (R.C. 5101.63) duties bind listed professions only, so the row's silence is not false. One optional gap: R.C. 5101.63(A)(2)(aa) puts licensed real estate brokers/salespersons, the people an Ohio landlord hires to manage, on the mandatory elder-abuse list. The optional edit below adds it.

Edit 1:

old_str:
```
None of the privilege exemptions in that section covers a landlord.
```
new_str:
```
None of the privilege exemptions in that section covers a landlord. Ohio's child-abuse and elder-abuse reporting duties bind listed professions only, so as a landlord you may report but need not (R.C. 2151.421(A)(1)(b), (B); 5101.63(A)(2), (B)); but a licensed real estate broker or salesperson, such as a manager you hire, is on the elder-abuse list and must report immediately to the county department of job and family services, a fourth-degree misdemeanour if knowingly not done (R.C. 5101.63(A)(1), (A)(2)(aa); 5101.99(B)).
```

### edu-landlord-registration-oh: **FIX**

Accurate about ch. 5323, and its "nothing you must do before you let the unit" is scoped to ch. 5323. But it lists the duties that "sit next to this one" and leaves out trade-name registration and foreign-entity licensing/registration, which a landlord reading a registration row needs. Items 1-2.

Edit 1:

old_str:
```
Finally, nothing here resolves city rental licensing:
```
new_str:
```
One more sits in the business-entity law: if you rent under a trade name or fictitious name, you must register it with the Secretary of State or report its use within thirty days of first use, and you cannot bring an eviction in that name until you do (R.C. 1329.01(D), 1329.10(B)); and an out-of-state corporation or LLC must be licensed or registered with the Secretary of State before it transacts business in Ohio (R.C. 1703.03, 1706.511(A)) - see `edu-confirmed-absences-outside-title-oh`. Finally, nothing here resolves city rental licensing:
```

### edu-nonresident-owner-agent-oh: **ERROR**

"no provision barring you from suing a tenant until an agent designation is on file" is true only of R.C. 5323.03. Read with the rest of the row, it tells an out-of-state entity owner it can sue freely. That is wrong for a foreign corporation that should be licensed (R.C. 1703.29(A): "shall not maintain any action in any court") and for an unregistered foreign LLC collecting rent (R.C. 1706.515(A)). The row also leaves out the Secretary of State backup-service rules and the long-arm hook for owning real property (item 3), and it leaves out trade names (item 2).

Edit 1:

old_str:
```
no provision barring you from suing a tenant until an agent designation is on file,
```
new_str:
```
no provision barring you from suing a tenant until a Chapter 5323 agent designation is on file (an out-of-state company is different - see below),
```

Edit 2:

old_str:
```
rather than reading this as tax advice.
```
new_str:
```
rather than reading this as tax advice.

Out-of-state companies and trade names. An out-of-state corporation must hold a Secretary of State licence before it transacts business in Ohio, must keep an Ohio designated agent for service of process, and may not maintain any action in any Ohio court - an eviction included - until it is licensed (R.C. 1703.03, 1703.041(A), 1703.29(A)). An out-of-state LLC must register with the Secretary of State, naming an Ohio statutory agent, before it transacts business here, and until it does it may not maintain a proceeding to collect its debts, such as unpaid rent, though the court may stay the case until it registers (R.C. 1706.511(A), (B)(3), 1706.515(A), (B)). Owning real property is not by itself transacting business for an LLC (R.C. 1706.512(A)(9)); whether leasing it out is, is a case-law question, so register before you file. A licensed or registered company whose agent cannot be found can be served through the Secretary of State (R.C. 1703.19, 1706.09(H)(2)). An individual owner makes no such appointment, but an Ohio court may exercise jurisdiction over you in a case arising from your interest in Ohio real property (R.C. 2307.382(A)(8)). And if you rent under a trade name or fictitious name, register or report it first: until you do, you cannot sue in that name (R.C. 1329.10(B)).
```

### edu-confirmed-absences-outside-title-oh: **FIX**

The registration limb is accurate for ch. 5323 county rental registration, but the row presents "Registration is not a precondition to a possession judgment" as a confirmed absence without saying that Ohio's trade-name statute (R.C. 1329.10(B)) and foreign-corporation / foreign-LLC statutes (R.C. 1703.29(A), 1706.515(A)) can bar the suit. Title 17 and ch. 1329 are not in the 37-chapter corpus listed in the row. Florida item 1 + 2 miss.

Edit 1:

old_str:
```
And Ohio has no biometric privacy statute.
```
new_str:
```
That is county rental registration only. Ohio's trade-name and company statutes, which were outside the search above, can stop you suing: if you rent under a trade name or fictitious name, you must register it with the Secretary of State or report its use within thirty days of first use, and you may not commence or maintain an action in that name until you do, though once you comply the action may go forward (R.C. 1329.01(D), 1329.10(B)); an out-of-state corporation that should hold a Secretary of State licence to transact business here may not maintain any action in any court until it obtains one and pays a two-hundred-fifty-dollar forfeiture (R.C. 1703.03, 1703.29(A)); and an out-of-state LLC transacting business here must register with the Secretary of State, and until it does it may not maintain a proceeding to collect its debts, such as unpaid rent, though the court may stay the case rather than dismiss it (R.C. 1706.511(A), 1706.515(A), (B)). Owning real property is not by itself transacting business for an LLC (R.C. 1706.512(A)(9)); whether letting it out is, is a case-law question (see `edu-nonresident-owner-agent-oh`). And Ohio has no biometric privacy statute.
```

### Supporting quotes (OHIO), all read whole on 2026-11-06

- **R.C. 1329.01(D) (eff. April 12, 2021; S.B. 276, 133rd G.A.)**: <https://codes.ohio.gov/ohio-revised-code/section-1329.01>. "Any person who does business under a fictitious name and who has not registered and does not wish to register the fictitious name as a trade name or who cannot do so because the name is not available for registration shall report the use of the fictitious name to the secretary of state, on a form prescribed by the secretary of state, ..." and "A report under this division shall be made within thirty days after the date of the first use of the fictitious name."
- **R.C. 1329.10(B) (eff. October 20, 1978; H.B. 297, 112th G.A.)**: <https://codes.ohio.gov/ohio-revised-code/section-1329.10>. "(B) No person doing business under a trade name or fictitious name shall commence or maintain an action in the trade name or fictitious name in any court in this state or on account of any contracts made or transactions had in the trade name or fictitious name until it has first complied with section 1329.01 of the Revised Code and, if the person is a partnership, it has complied with section 1777.02 of the Revised Code, but upon compliance, such an action may be commenced or maintained on any contracts and transactions entered into prior to compliance."
- **R.C. 1703.03 (eff. September 29, 1997; H.B. 215, 122nd G.A.)**: <https://codes.ohio.gov/ohio-revised-code/section-1703.03>. "No foreign corporation not excepted from sections 1703.01 to 1703.31 of the Revised Code, shall transact business in this state unless it holds an unexpired and uncanceled license to do so issued by the secretary of state."
- **R.C. 1703.02 (eff. May 21, 1997) - exceptions read whole**: <https://codes.ohio.gov/ohio-revised-code/section-1703.02>. Exceptions are interstate commerce, credit unions, title guarantee and trust, bond investment, insurance and interstate public utilities only; no real-property exception.
- **R.C. 1703.29(A) (eff. October 24, 2024; S.B. 98, 135th G.A.)**: <https://codes.ohio.gov/ohio-revised-code/section-1703.29>. "(A) The failure of any corporation to obtain a license under sections 1703.01 to 1703.31 of the Revised Code, does not affect the validity of any contract with such corporation, but no foreign corporation that should have obtained such license shall maintain any action in any court until it has obtained such license. Before any such corporation shall maintain such action on any cause of action arising at the time when it was not licensed to transact business in this state, it shall pay to the secretary of state a forfeiture of two hundred fifty dollars and file in the secretary of state's office the papers required by divisions (B) or (C) of this section, whichever is applicable."
- **R.C. 1703.041(A) (eff. September 30, 2025; H.B. 96, 136th G.A.)**: <https://codes.ohio.gov/ohio-revised-code/section-1703.041>. "(A) Every foreign corporation for profit that is licensed to transact business in this state, and every foreign nonprofit corporation that is licensed to exercise its privileges in this state, shall have and maintain an agent, sometimes referred to as the "designated agent," upon whom process against the corporation may be served within this state."
- **R.C. 1703.19 (eff. July 29, 1998)**: <https://codes.ohio.gov/ohio-revised-code/section-1703.19>. "The secretary of state shall be the agent of any foreign corporation licensed to do business in this state, upon whom process against it from any court in this state or from any public authorities may be served within this state if the designated agent cannot be found, if the corporation has failed to designate another agent when required to do so under sections 1703.01 to 1703.31 of the Revised Code, or if the license of a corporation to do business in this state has expired or has been canceled."
- **R.C. 1706.511(A), (B)(3) (eff. April 12, 2021; S.B. 276, 133rd G.A.)**: <https://codes.ohio.gov/ohio-revised-code/section-1706.511>. "(A) In order for a foreign limited liability company or any one or more of its series to transact business in this state, the foreign limited liability company shall register with the secretary of state. Neither a foreign limited liability company nor any one or more of its series may transact business in this state until the registration has been approved by the secretary of state and the foreign limited liability company or series is otherwise in compliance with sections 1706.51 to 1706.515 of the Revised Code." / "(3) The name and street address of the foreign limited liability company's statutory agent and a written acceptance of the appointment that is signed by the agent;"
- **R.C. 1706.512(A)(9), (10) (eff. April 12, 2021)**: <https://codes.ohio.gov/ohio-revised-code/section-1706.512>. "(A) A foreign limited liability company shall not be considered to be transacting business in this state within the meaning of sections 1706.51 to 1706.515 of the Revised Code by reason of its or any one or more of its series' carrying on in this state any of the following actions: ... (9) Owning real or personal property; (10) Conducting an isolated transaction that is not one in the course of repeated transactions of a like nature;"
- **R.C. 1706.515(A), (B), (E) (eff. April 12, 2021)**: <https://codes.ohio.gov/ohio-revised-code/section-1706.515>. "(A) No foreign limited liability company, or a series thereof, transacting business in this state, nor anyone on its behalf, shall be permitted to maintain a proceeding in any court in this state for the collection of its debts unless an effective registration as a limited liability company for the foreign limited liability company is on file in the records of the secretary of state." / "(B) A court may stay a proceeding commenced by a foreign limited liability company, or series thereof, until it determines whether the foreign limited liability company should have a registration as a limited liability company on file in the records of the secretary of state. ..." / "(E) ... does not impair the validity of the acts of the foreign limited liability company ... or prevent the foreign limited liability company ... from defending any proceeding in this state." NOTE: (A) is limited to "collection of its debts"; whether a possession-only forcible entry and detainer case falls within it is not settled by the text, and the proposed edits word it as rent collection.
- **R.C. 1706.09(A), (H)(2) (eff. October 24, 2024; S.B. 98, 135th G.A.)**: <https://codes.ohio.gov/ohio-revised-code/section-1706.09>. "(A) Each limited liability company and foreign limited liability company that has an effective registration as a foreign limited liability company under section 1706.511 of the Revised Code shall maintain continuously in this state an agent for service of process on the company." / "(2) If the agent ... cannot be found or no longer has the address that is stated in the records of the secretary of state or the limited liability company or foreign limited liability company has failed to maintain an agent as required by this section and if the party ... files with the secretary of state an affidavit ..., then the service of the process, notice, or demand upon the secretary of state as the agent of the company may be initiated by delivering to the secretary of state four copies of the process, notice, or demand accompanied by a fee of five dollars."
- **R.C. 2307.382(A)(8) (eff. December 16, 2020)**: <https://codes.ohio.gov/ohio-revised-code/section-2307.382>. "(A) A court may exercise personal jurisdiction over a person who acts directly or by an agent, as to a cause of action arising from the person's: ... (8) Having an interest in, using, or possessing real property in this state;"
- **R.C. 2921.22(A)(1), (C), (D), (J), (K) (eff. March 21, 2025; S.B. 109, 135th G.A.)**: <https://codes.ohio.gov/ohio-revised-code/section-2921.22>. "(A)(1) Except as provided in division (A)(2) of this section, no person, knowing that a felony has been or is being committed, shall knowingly fail to report such information to law enforcement authorities." / "(J) ... Violation of division (A)(1) or (F)(1) of this section is a misdemeanor of the fourth degree." / "(K) Whoever violates division (C) or (D) of this section is guilty of failure to report knowledge of a death, a misdemeanor of the fourth degree." (Matches the existing OH row.)
- **R.C. 2151.421(A)(1)(b), (B) (eff. September 30, 2025; H.B. 96, 136th G.A.)**: <https://codes.ohio.gov/ohio-revised-code/section-2151.421>. (A)(1)(b) list is professions/agencies only (attorney; health care professional; ... school teacher; ... peace officer; ... guardian ad litem); no landlord or real estate licensee. "(B) Anyone who knows, or has reasonable cause to suspect ... that a child under eighteen years of age ... has suffered or faces a threat of suffering any physical or mental wound ... may report or cause reports to be made ..."
- **R.C. 5101.63(A)(1), (A)(2)(aa), (B) (eff. April 4, 2023; S.B. 288, 134th G.A.); R.C. 5101.99(B) (eff. September 30, 2025); R.C. 5101.60(C)**: <https://codes.ohio.gov/ohio-revised-code/section-5101.63>. "(A)(1) No person listed in division (A)(2) of this section having reasonable cause to believe that an adult is being abused, neglected, or exploited, or is in a condition which is the result of abuse, neglect, or exploitation shall knowingly fail to immediately report such belief to the county department of job and family services." / "(aa) An individual licensed under Chapter 4735. of the Revised Code as a real estate broker or real estate salesperson;" / "(B) Any person having reasonable cause to believe that an adult has suffered abuse, neglect, or exploitation may report ..." / R.C. 5101.99(B): "Whoever violates division (A) of section 5101.63 or division (C)(2) of section 5101.631 of the Revised Code is guilty of a misdemeanor of the fourth degree." / R.C. 5101.60(C): ""Adult" means any person sixty years of age or older within this state who is disabled by the infirmities of aging or who has a physical or mental impairment which prevents the person from providing for the person's own care or protection, and who resides in an independent living arrangement."

## CALIFORNIA

### edu-law-enforcement-cooperation-ca: **ERROR**

"No California statute requires you ... to report a crime on your property" is contradicted by Cal. Penal Code § 152.3 (any person who reasonably believes they observed murder, rape, or a § 288(b)(1) lewd act on a child under 14 must notify a peace officer; misdemeanor). The row also leaves out the any-person duty to notify the coroner of an unattended, accidental, suicide or suspicious death (Cal. Health & Safety Code § 102850, operative 2026-07-01; misdemeanor). Child/elder abuse reporting is mandatory only for listed persons (Pen. Code § 11166(a), (g); Welf. & Inst. Code §§ 15630, 15631), so that part needs no fix.

Edit 1:

old_str:
```
No California statute requires you to cooperate with law enforcement, to report a crime on your property, to hand over tenant records, or to let officers into a unit or the common areas.
```
new_str:
```
No California statute requires you, as a landlord, to cooperate with law enforcement, to report a crime on your property, to hand over tenant records, or to let officers into a unit or the common areas. But two reporting duties bind you as any person. If you reasonably believe you have seen the murder or rape of a child under 14, or a forcible lewd act on one, you must notify a peace officer; failing to is a misdemeanor punishable by up to six months in jail and a $1,500 fine, and relatives of the victim or offender and anyone who reasonably fears for their own or their family's safety are exempt (Cal. Penal Code § 152.3). And if you know of a death that occurred without medical attendance, after an injury or accident, by suspected suicide, or where a crime is reasonably suspected, as when a tenant is found dead in a unit, you must notify the coroner immediately; not doing so is a misdemeanor (Cal. Health & Safety Code § 102850). Actively concealing an accidental death is a separate crime (Cal. Penal Code § 152). Child-abuse and elder-abuse reporting is mandatory only for listed professions and caretakers; anyone else may report (Cal. Penal Code § 11166(g); Cal. Welf. & Inst. Code §§ 15630(a), 15631(a)).
```

### edu-landlord-registration-ca: **FIX**

"The obligations are local" leaves out the state-law fictitious business name statement (Bus. & Prof. Code §§ 17910, 17918) and foreign-entity qualification (Corp. Code §§ 2105, 17708.07). Nothing in the row is false. Items 1-2.

Edit 1:

old_str:
```
California has no statewide landlord register and no state rental licence.
```
new_str:
```
California has no statewide landlord register and no state rental licence. Two general state filings can still apply. If you regularly rent for profit under a fictitious business name (for an individual, a name without your surname; for a company, a name other than its registered one), you must file a fictitious business name statement with the county clerk within 40 days of starting, publish it, and until then you cannot maintain a lawsuit, an eviction included, on business done under that name (Cal. Bus. & Prof. Code §§ 17900(b), 17910(a), 17915, 17917(a), 17918). And an out-of-state company transacting intrastate business here must qualify with the Secretary of State before it can sue (Cal. Corp. Code §§ 2105(a), 17708.07(a); see `edu-confirmed-absences-outside-title-ca`).
```

### edu-nonresident-owner-agent-ca: **ERROR**

"California does not require an out-of-state owner to appoint an in-state agent ... or to file anything before suing a tenant" is false for an out-of-state LLC or corporation transacting intrastate business: it must register or qualify naming a California agent (Corp. Code §§ 17708.02(a)(4), 2105(a)(6)) and cannot maintain the action until it does (§§ 17708.07(a), 2203(c)). The repo's own edu-confirmed-absences-outside-title-ca already says so, so the two rows contradict each other. The row also leaves out the deemed Secretary of State appointment and deemed consent for unregistered entities (item 3) and fictitious business names (item 2).

Edit 1:

old_str:
```
California does not require an out-of-state owner to appoint an in-state agent, to employ a California broker, or to file anything before suing a tenant; a nonresident may hold a California broker licence on the same terms as a resident.
```
new_str:
```
California does not require an out-of-state individual owner to appoint an in-state agent, to employ a California broker, or to file anything before suing a tenant; a nonresident may hold a California broker licence on the same terms as a resident. An out-of-state company is different. A foreign LLC or corporation transacting intrastate business here must register or qualify with the Secretary of State, naming a California agent for service of process, and until it does it may not maintain an action, an unlawful detainer included, though it may defend one (Cal. Corp. Code §§ 17708.02(a)(4), 17708.07(a), (b), 2105(a), 2203(c)). Transacting intrastate business means repeated and successive transactions here (Cal. Corp. Code §§ 191(a), 17708.03(a)); whether letting a property qualifies is a case-law question, so qualify before you file (see `edu-confirmed-absences-outside-title-ca`). An unregistered foreign LLC is deemed to have appointed the Secretary of State as its agent for service of process, and an unqualified foreign corporation is deemed to consent to California jurisdiction, for claims arising from that business (Cal. Corp. Code §§ 17708.07(d), 2203(a)). And anyone renting under a fictitious business name cannot sue on that business until the statement is filed and published (Cal. Bus. & Prof. Code §§ 17910, 17918).
```

### edu-confirmed-absences-outside-title-ca: **FIX**

Item 1 is already covered accurately (foreign corp § 2203(c), foreign LLC § 17708.07, FTB suspension). Item 2 is missing: the fictitious-business-name bar on maintaining an action (Bus. & Prof. Code § 17918) reaches individual landlords too, and no CA row in the library mentions it.

Edit 1:

old_str:
```
Check your entity's standing with the Secretary of State and the tax authority before you file, not after.
```
new_str:
```
Check your entity's standing with the Secretary of State and the tax authority before you file, not after. A third reaches any landlord, company or not: if you rent under a fictitious business name, you cannot maintain an action on business done under that name until the fictitious business name statement has been filed and published (Cal. Bus. & Prof. Code §§ 17910, 17918).
```

### Supporting quotes (CALIFORNIA), all read whole on 2026-11-06

- **Cal. Corp. Code § 17708.07 (Stats. 2015, Ch. 775)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. "(a)A foreign limited liability company transacting intrastate business in this state shall not maintain an action or proceeding in this state unless it has a certificate of registration to transact intrastate business in this state. (b)The failure of a foreign limited liability company to have a certificate of registration to transact intrastate business in this state does not prevent the foreign limited liability company from defending an action or proceeding in this state. ... (d)If a foreign limited liability company transacts intrastate business in this state without a certificate of registration or cancels its certificate of registration, it shall be deemed to have appointed the Secretary of State as its agent for service of process for rights of action arising out of the transaction of intrastate business in this state."
- **Cal. Corp. Code § 17708.02(a)(4)(A) (Stats. 2022, Ch. 617)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. "(4)(A)The name and street address of the foreign limited liability company's initial agent for service of process in this state who consents to service of process and meets the qualifications specified in subdivision (c) of Section 17701.13."
- **Cal. Corp. Code § 17708.03(a), (b)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. "(a)A foreign limited liability company that enters into repeated and successive transactions of business in this state, other than in interstate or foreign commerce, is considered to be transacting intrastate business in this state within the meaning of this article." (b) list includes "(9)Conducting an isolated transaction that is completed within 180 days ..."; it has no "owning property" exclusion.
- **Cal. Corp. Code § 2105(a), (a)(6) (Stats. 2022, Ch. 617)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. "(a)A foreign corporation shall not transact intrastate business without having first obtained from the Secretary of State a certificate of qualification." / "(6)The name of an agent upon whom process directed to the corporation may be served within this state."
- **Cal. Corp. Code § 2203(a), (c) (Stats. 1990, Ch. 926)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. "(a)... the foreign corporation, by transacting unauthorized intrastate business, shall be deemed to consent to the jurisdiction of the courts of California in any civil action arising in this state in which the corporation is named a party defendant." / "(c)A foreign corporation subject to the provisions of Chapter 21 (commencing with Section 2100) which transacts intrastate business without complying with Section 2105 shall not maintain any action or proceeding upon any intrastate business so transacted in any court of this state, commenced prior to compliance with Section 2105, until it has complied with the provisions thereof and has paid to the Secretary of State a penalty of two hundred fifty dollars ($250) ..."
- **Cal. Corp. Code § 191(a) (Stats. 2019, Ch. 143)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. "(a)For the purposes of Chapter 21 (commencing with Section 2100), “transact intrastate business” means entering into repeated and successive transactions of its business in this state, other than interstate or foreign commerce."
- **Cal. Bus. & Prof. Code § 17900(b)(1), (3), (5)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. "(1)In the case of an individual, a name that does not include the surname of the individual or a name that suggests the existence of additional owners ... (3)In the case of a domestic or foreign corporation, any name other than the corporate name stated in its articles of incorporation ... (5)In the case of a limited liability company, any name other than the name stated in its articles of organization ..."
- **Cal. Bus. & Prof. Code § 17910 (Stats. 2007, Ch. 716)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. "Every person who regularly transacts business in this state for profit under a fictitious business name shall do all of the following: (a)File a fictitious business name statement in accordance with this chapter not later than 40 days from the time the registrant commences to transact such business."
- **Cal. Bus. & Prof. Code § 17915; § 17917(a)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. § 17915: "A fictitious business name statement shall be filed with the clerk of the county in which the registrant has his or her principal place of business in this state or, if the registrant has no place of business in this state, with the Clerk of Sacramento County." § 17917(a): "Within 45 days after a fictitious business name statement has been filed pursuant to this chapter, the registrant shall cause a statement ... to be published ..."
- **Cal. Bus. & Prof. Code § 17918 (Stats. 1970, Ch. 618)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. "No person transacting business under a fictitious business name contrary to the provisions of this chapter, or his assignee, may maintain any action upon or on account of any contract made, or transaction had, in the fictitious business name in any court of this state until the fictitious business name statement has been executed, filed, and published as required by this chapter."
- **Cal. Penal Code § 152.3 (Stats. 2016, Ch. 50)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. "(a)Any person who reasonably believes that he or she has observed the commission of any of the following offenses where the victim is a child under 14 years of age shall notify a peace officer ...: (1)Murder. (2)Rape. (3)A violation of paragraph (1) of subdivision (b) of Section 288 of the Penal Code." / "(d)Failure to notify as required pursuant to subdivision (a) is a misdemeanor and is punishable by a fine of not more than one thousand five hundred dollars ($1,500), by imprisonment in a county jail for not more than six months, or by both that fine and imprisonment." / "(e)... (1)A person who is related to either the victim or the offender ... (2)A person who fails to report based on a reasonable mistake of fact. (3)A person who fails to report based on a reasonable fear for his or her own safety or for the safety of his or her family." Pen. Code § 288(b)(1) (read): lewd act on a child under 14 "by use of force, violence, duress, menace, or fear of immediate and unlawful bodily injury".
- **Cal. Health & Safety Code § 102850 (added Stats. 2025, Ch. 271, Sec. 8; operative July 1, 2026)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. "(a)A physician and surgeon, nurse practitioner, physician assistant, funeral director, or other person shall immediately notify the coroner if they have knowledge of a death that occurred or have charge of a body in which death occurred under any of the following circumstances: (1)Without medical attendance. (2)During the continued absence of the attending physician and surgeon. (3)If the attending physician and surgeon, nurse practitioner, or the physician assistant is unable to state the cause of death. (4)If suicide is suspected. (5)Following an injury or an accident. (6)Under circumstances as to afford a reasonable ground to suspect that the death was caused by the criminal act of another. (b)A person who does not notify the coroner as required by this section is guilty of a misdemeanor." (The bulk table also carries the earlier version, inoperative July 1, 2026.)
- **Cal. Penal Code § 152(a) (Stats. 1999, Ch. 396)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. "(a)Every person who, having knowledge of an accidental death, actively conceals or attempts to conceal that death, shall be guilty of a misdemeanor ..."
- **Cal. Penal Code § 11166(g); Cal. Welf. & Inst. Code §§ 15630(a), 15631(a)**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. § 11166(g): "Any other person who has knowledge of or observes a child whom the person knows or reasonably suspects has been a victim of child abuse or neglect may report ..." § 15631(a): "Any person who is not a mandated reporter under Section 15630, who knows, or reasonably suspects, that an elder or a dependent adult has been the victim of abuse may report ..." § 15630(a) defines mandated reporters as caretakers, facility staff, health practitioners, clergy, APS and law enforcement employees.
- **Cal. Code Civ. Proc. § 410.10**: <https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (LAW_SECTION_TBL; file dated 2026-11-01)>. "A court of this state may exercise jurisdiction on any basis not inconsistent with the Constitution of this state or of the United States." (No deemed-Secretary-of-State appointment for nonresident individuals was found; not searched exhaustively.)

## NEVADA

### edu-confirmed-absences-outside-title-nv: **FIX**

Limb (3), "no Nevada statute ... requires a landlord to show a rental registration or license to get a possession order", is true of rental registration. But NRS 602.070 (fictitious name: certificate must be filed "before the commencement of the action") and NRS 86.548(2) / 80.055(2) (unregistered foreign LLC/corporation "may not commence or maintain any action") bar the case itself. Items 1-2.

Edit 1:

old_str:
```
A state business license may be required for the business itself (see the row on landlord registration and business licenses).
```
new_str:
```
A state business license may be required for the business itself (see the row on landlord registration and business licenses). But two general business statutes can stop you bringing the case. If you rent under an assumed or fictitious name different from the legal name of each owner, no action on that business may be commenced or maintained unless the certificate was filed with the county clerk before the action began (NRS 602.010(1), 602.070). And an out-of-state LLC or corporation doing business here without registering with the Secretary of State may not commence or maintain any action until it registers, though the lease stays valid and it may defend a suit (NRS 86.544(1), 86.548(2), (3); NRS 80.010(1), 80.055(2), (6)). Owning property without more is not doing business under those chapters (NRS 86.5483(1)(i); NRS 80.015(1)(i)); whether renting it out is, is a case-law question.
```

### edu-landlord-registration-nv: **FIX**

The NRS ch. 76 business-licence material is accurate. It leaves out the fictitious-name certificate (NRS 602.010, 602.070, 602.090) and foreign-entity registration (NRS 86.544, 80.010). Items 1-2.

Edit 1:

old_str:
```
The state license is in addition to any local business license.
```
new_str:
```
The state license is in addition to any local business license. Two other state filings can apply. Anyone doing business under an assumed or fictitious name different from each owner's legal name must file a certificate with the county clerk of each county where the business is conducted, and cannot bring an eviction on that business unless it was filed first; doing business without it is a misdemeanor (NRS 602.010(1), 602.070, 602.090). And an out-of-state LLC or corporation must register with the Secretary of State before doing business here, and cannot commence or maintain a suit until it does (NRS 86.544(1), 86.548(2); NRS 80.010(1), 80.055(2)).
```

### edu-law-enforcement-cooperation-nv: **FIX**

Nothing in the row is false ("no general duty for landlords to cooperate"). It leaves out the one Nevada any-person reporting duty: NRS 202.882 (violent or sexual offense against a child 12 or younger; report within 24 hours; misdemeanor; exemptions in NRS 202.888; prosecution limited by NRS 202.885). Child and elder abuse reporting (NRS 432B.220, 200.5093) is mandatory only for listed persons. No any-person death-reporting duty was found in NRS ch. 259 or 440 (bounded search of those two chapters only).

Edit 1:

old_str:
```
Your right to enter is limited to the purposes,
```
new_str:
```
One reporting duty binds you as any person: if you know or have reasonable cause to believe that someone has committed a violent or sexual offense against a child 12 or younger, you must report it to a law enforcement agency as soon as reasonably practicable and within 24 hours, and a knowing and willful failure is a misdemeanor; close relatives of the child or offender, and anyone whom reporting would put in imminent danger, are exempt (NRS 202.876, 202.882, 202.888). Nevada's child-abuse and elder-abuse reporting duties otherwise bind listed professions only; anyone else may report (NRS 432B.220(4), (5); NRS 200.5093(4), (5)). Your right to enter is limited to the purposes,
```

### edu-nonresident-owner-agent-nv: **FIX**

The individual-owner material is accurate (NRS 118A.260, ch. 645). It leaves out foreign-entity registration, the registered-agent duty, the bar on suing (NRS 14.020, 86.544, 86.548, 80.010, 80.055) and the NRS 86.548(6) deemed Secretary of State appointment for an unregistered foreign LLC (items 1, 3). Nevada has no general deemed-SOS-agent statute for nonresident individuals: ch. 14 has only motorist/vehicle-lessor/product-supplier provisions (NRS 14.070, 14.075, 14.080) and the long-arm NRS 14.065.

Edit 1:

old_str:
```
but two rules matter most to an owner who lives elsewhere.
```
new_str:
```
but three rules matter most to an owner who lives elsewhere.
```

Edit 2:

old_str:
```
Nevada's constitution bars an income tax
```
new_str:
```
Third, if you own through an out-of-state LLC or corporation, it must register with the Secretary of State before doing business here and keep a registered agent in Nevada, and until it registers it may not commence or maintain any action, an eviction included; an unregistered LLC doing business here is also deemed to have appointed the Secretary of State as its agent for service of process for claims arising from that business (NRS 14.020(1); NRS 86.544(1), 86.548(2), (6); NRS 80.010(1), 80.055(2)). Owning property without more is not doing business (NRS 86.5483(1)(i); NRS 80.015(1)(i)); whether renting it out is, is a case-law question, so register before you file. Nevada's constitution bars an income tax
```

### Supporting quotes (NEVADA), all read whole on 2026-11-06

- **NRS 86.544(1) (A 2025, 809)**: <https://www.leg.state.nv.us/NRS/NRS-086.html>. "1. Before transacting business in this State, a foreign limited-liability company must register with the Secretary of State."
- **NRS 86.548(1)-(3), (6)**: <https://www.leg.state.nv.us/NRS/NRS-086.html>. "2. Every foreign limited-liability company transacting business in this State which fails or neglects to register with the Secretary of State in accordance with the provisions of NRS 86.544 may not commence or maintain any action, suit or proceeding in any court of this State until it has registered with the Secretary of State. 3. The failure of a foreign limited-liability company to register with the Secretary of State does not impair the validity of any contract or act of the foreign limited-liability company, or prevent the foreign limited-liability company from defending any action, suit or proceeding in any court of this State." / "6. A foreign limited-liability company, by transacting business in this State without registering with the Secretary of State, appoints the Secretary of State as its agent for service of process with respect to causes of action arising out of the transaction of business in this State by the foreign limited-liability company." (1): willful failure "is subject to a fine of not less than $1,000 but not more than $10,000".
- **NRS 86.5483(1)(i), (j), (2)**: <https://www.leg.state.nv.us/NRS/NRS-086.html>. "(i) Owning, without more, real or personal property; (j) Isolated transactions completed within 30 days and not a part of a series of similar transactions;" / "2. The list of activities in subsection 1 is not exhaustive."
- **NRS 80.010(1)**: <https://www.leg.state.nv.us/NRS/NRS-080.html>. "1. Before commencing or doing any business in this State, each corporation organized pursuant to the laws of another state, territory, the District of Columbia, a possession of the United States or a foreign country that enters this State to do business must: (a) File in the Office of the Secretary of State: ..."
- **NRS 80.015(1)(i)**: <https://www.leg.state.nv.us/NRS/NRS-080.html>. "(i) Owning, without more, real or personal property;"
- **NRS 80.055(2), (3), (6)**: <https://www.leg.state.nv.us/NRS/NRS-080.html>. "2. Except as otherwise provided in subsection 3, every corporation which fails or neglects to comply with the provisions of NRS 80.010 to 80.040, inclusive, may not commence or maintain any action or proceeding in any court of this State until it has fully complied with the provisions of NRS 80.010 to 80.040, inclusive." / "3. An action or proceeding may be commenced by such a corporation if an extraordinary remedy available pursuant to chapter 31 of NRS is all or part of the relief sought. ..." / "6. The failure of a corporation to comply ... does not impair the validity of any contract or act of the corporation, or prevent the corporation from defending any action, suit or proceeding in any court of this State."
- **NRS 602.010(1)**: <https://www.leg.state.nv.us/NRS/NRS-602.html>. "1. Every person doing business in this State under an assumed or fictitious name that is in any way different from the legal name of each person who owns an interest in the business must file with the county clerk of each county in which the business is being conducted a certificate containing the information required by NRS 602.020."
- **NRS 602.070**: <https://www.leg.state.nv.us/NRS/NRS-602.html>. "No action may be commenced or maintained by any person, mentioned in NRS 602.010, or by an assignee of such a person, upon or on account of any contract made or transaction had under the assumed or fictitious name, or upon or on account of any cause of action arising or growing out of the business conducted under that name, unless before the commencement of the action the certificate required by NRS 602.010 has been filed."
- **NRS 602.090**: <https://www.leg.state.nv.us/NRS/NRS-602.html>. "A person doing business in this state without complying with the requirements of this chapter or having falsely filed a certificate of termination, is guilty of a misdemeanor."
- **NRS 14.020(1)**: <https://www.leg.state.nv.us/NRS/NRS-014.html>. "1. Every corporation, miscellaneous organization described in chapter 81 of NRS, limited-liability company, limited-liability partnership, limited partnership, limited-liability limited partnership, business trust and municipal corporation created and existing under the laws of this State, any other state, territory or foreign government, or the Government of the United States, doing business in this State shall appoint and keep in this State a registered agent who resides or is located in this State, upon whom all legal process and any demand or notice authorized by law to be served upon it may be served in the manner provided in subsection 2."
- **NRS 14.030(1); 14.065(1)**: <https://www.leg.state.nv.us/NRS/NRS-014.html>. 14.030(1): if an artificial person "fails to appoint a registered agent ... the artificial person may be served with any and all legal process ... by delivering a copy to the Secretary of State". 14.065(1): "A court of this state may exercise jurisdiction over a party to a civil action on any basis not inconsistent with the Constitution of this state or the Constitution of the United States." Ch. 14 leadlines checked: no general nonresident-individual SOS appointment (14.070 motorists; 14.075 vehicle lessors; 14.080 product suppliers).
- **NRS 202.882 (added 1999)**: <https://www.leg.state.nv.us/NRS/NRS-202.html>. "1. Except as otherwise provided in NRS 202.885 and 202.888, a person who knows or has reasonable cause to believe that another person has committed a violent or sexual offense against a child who is 12 years of age or younger shall: (a) Report the commission of the violent or sexual offense against the child to a law enforcement agency; and (b) Make such a report as soon as reasonably practicable but not later than 24 hours after the person knows or has reasonable cause to believe that the other person has committed the violent or sexual offense against the child. 2. A person who knowingly and willfully violates the provisions of subsection 1 is guilty of a misdemeanor."
- **NRS 202.876 (A 2025, 756); 202.885(1); 202.888**: <https://www.leg.state.nv.us/NRS/NRS-202.html>. 202.876 lists murder, kidnapping, "4. Sexual assault pursuant to NRS 200.366.", robbery, battery with a deadly weapon or substantial bodily harm, lewdness with a child, etc. 202.885(1): "A person may not be prosecuted or convicted pursuant to NRS 202.882 unless a court ... has entered a judgment of conviction against a culpable actor ..." 202.888: exempts persons under 16, the spouse/sibling/parent/grandparent/child/grandchild "of: (a) The child who is the victim ... or (b) The person who committed the violent or sexual offense", a person reasonably fearing "imminent danger of suffering substantial bodily harm", privileged communications, and professional mandated reporters under NRS 392.303/432B.220.
- **NRS 432B.220(1), (4), (5); NRS 200.5093(1), (4), (5), (9)**: <https://www.leg.state.nv.us/NRS/NRS-432B.html ; https://www.leg.state.nv.us/NRS/NRS-200.html>. 432B.220(1): "Any person who is described in subsection 4 and who, in his or her professional or occupational capacity, knows or has reasonable cause to believe that a child has been abused or neglected shall ..." (5): "A report may be made by any other person." 200.5093(1) same structure for older/vulnerable persons; subsection 4 lists medical, care, social-work, law-enforcement and funeral-home persons, with no landlord or real estate licensee; "5. A report may be made by any other person."

## Not reached / not read

- leginfo.legislature.ca.gov: not reachable (Cloudflare JS challenge, HTTP 403). The bulk-data substitute is described above.
- Ohio Civ.R. 4.3 (out-of-state service, including former residents) is a court rule and is not on codes.ohio.gov, so it was not read. R.C. 2703.20 (nonresident motorists) was not read. No Ohio statute appointing the Secretary of State for nonresident *individuals* doing business was found among the sections read; this is a lead, not a confirmed absence.
- Nevada: no any-person death-report duty was found, but the search covered only NRS ch. 259 and 440. Other chapters were not searched.
- California: Corp. Code § 2258 (misdemeanor for unqualified intrastate business) was not re-read here and is not used in the edits.
- Not reviewed in any state: case law on whether leasing out property is "transacting (intrastate) business", on whether a possession-only case is a proceeding "for the collection of its debts" (R.C. 1706.515(A)), and on stay versus dismissal under Cal. Corp. Code § 17708.07. Local ordinances were not reviewed either.

## Summary

1. 12 rows checked: 3 ERROR (OH nonresident-owner-agent, CA nonresident-owner-agent, CA law-enforcement-cooperation), 8 FIX, and 1 holds with an optional addition (OH law-enforcement-cooperation).
2. Item 1 (foreign entity registration and the bar on suing) is missing from the OH and NV registration, nonresident and confirmed-absences rows and from CA nonresident/registration. CA nonresident-owner-agent contradicts CA confirmed-absences, which already has it right.
3. Item 2 (trade/fictitious names: R.C. 1329.10(B), Cal. Bus. & Prof. Code § 17918, NRS 602.070) appears in no OH, CA or NV row. In NV the certificate must be filed before the suit is commenced.
4. Item 3: there is a deemed Secretary of State appointment only for unregistered foreign LLCs (Cal. Corp. Code § 17708.07(d), NRS 86.548(6)) and backup service on Ohio entities (R.C. 1703.19, 1706.09(H)(2)). No state read here has a Florida-style deemed appointment for nonresident individuals; Ohio has the long-arm R.C. 2307.382(A)(8).
5. Item 4: CA has any-person duties (Pen. Code § 152.3 witnessed child murder/rape; H&S § 102850 coroner) and NV has NRS 202.882 (offenses against a child 12 or younger). Ohio's row already carries R.C. 2921.22. California text came from the official bulk download because leginfo blocks automated access.
