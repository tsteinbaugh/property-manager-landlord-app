# Sweep 2: general-statute check, MD / DE / DC / MA / CT

Read date for all sources: 2026-11-06. Rows checked: every active row at topic_key nonresident-owner-agent, landlord-registration, law-enforcement-cooperation or confirmed-absences-outside-title with id ending -md, -de, -dc, -ma or -ct (20 rows).

## Rows checked

- `edu-no-law-enforcement-cooperation-md` (law-enforcement-cooperation): No Crime-Free Lease Statute -> FIX
- `edu-no-nonresident-owner-agent-md` (nonresident-owner-agent): No Nonresident Owner Agent Rule -> ERROR
- `edu-property-manager-licensing-md` (nonresident-owner-agent): Property Managers and Licensing -> holds
- `edu-rental-license-in-eviction-md` (confirmed-absences-outside-title): Rental License Proof in Eviction -> FIX
- `edu-confirmed-absences-outside-title-de` (confirmed-absences-outside-title): Whole-code checks: squatters, cash receipts, landlord registration -> FIX
- `edu-law-enforcement-cooperation-de` (law-enforcement-cooperation): Criminal nuisance law: act on notice of a tenant's illegal activity; protect victims who call for help -> FIX
- `edu-no-landlord-registration-de` (landlord-registration): No statewide landlord registration or rental license; check local programs -> FIX
- `edu-no-nonresident-owner-agent-de` (nonresident-owner-agent): No nonresident-owner agent requirement or tenant withholding on rent -> ERROR
- `edu-confirmed-absences-outside-title-dc` (confirmed-absences-outside-title): Receipts and Registration Required; No Squatter Fast Track -> FIX
- `edu-landlord-registration-dc` (landlord-registration): Rental License and Rental Unit Registration -> FIX
- `edu-nonresident-owner-agent-dc` (nonresident-owner-agent): Registered Agent for Non-Resident Owners -> ERROR
- `edu-police-call-protection-dc` (law-enforcement-cooperation): No Cooperation Mandate; Lease May Not Bar or Penalize Police Calls by Violence Victims -> FIX
- `edu-absentee-owner-contact-ma` (nonresident-owner-agent): Absentee and Out-of-State Owners -> ERROR
- `edu-confirmed-absences-outside-title-ma` (confirmed-absences-outside-title): Checked Across the Whole Code -> FIX
- `edu-no-crime-free-lease-statute-ma` (law-enforcement-cooperation): No Crime-Free Lease Statute -> FIX
- `edu-rental-registration-licensing-ma` (landlord-registration): Registration and Licensing -> FIX
- `edu-confirmed-absences-outside-title-ct` (confirmed-absences-outside-title): Checked Across the Whole Code -> FIX
- `edu-landlord-registration-ct` (landlord-registration): Rental Registration and Local Filings -> FIX
- `edu-no-crime-free-lease-statute-ct` (law-enforcement-cooperation): No Crime-Free Lease Statute -> FIX
- `edu-nonresident-landlord-process-agent-ct` (nonresident-owner-agent): Out-of-State Landlords -> FIX

### `edu-no-law-enforcement-cooperation-md`

Verdict: FIX. Omits the any-person child-abuse notification duty (Fam. Law § 5-705(a)(1)); the criminal penalty applies only to professionals. Also useful to state that vulnerable-adult reporting is voluntary for others and the death-notification duty is on police/sheriff, so the row does not overstate.

old_str:
```
For dangerous behavior, Maryland allows a breach-of-lease case after 14 days' written notice if the lease provides for repossession on breach.
```
new_str:
```
For dangerous behavior, Maryland allows a breach-of-lease case after 14 days' written notice if the lease provides for repossession on breach. One general duty does reach you and your staff: anyone in Maryland, not only professionals, who has reason to believe that a child has been abused or neglected must notify the local department of social services or the police. The criminal penalty for knowingly failing to report applies only to health practitioners, police officers, educators and human service workers (Md. Code Ann., Fam. Law §§ 5-704 and 5-705(a)(1); Md. Code Ann., Crim. Law § 3-602.2). Reporting the abuse of a vulnerable adult is voluntary for everyone outside those professions, and the medical examiner law puts the duty to report a suspicious or violent death on the police or sheriff, not on others (Md. Code Ann., Fam. Law § 14-302(c); Md. Code Ann., Health-Gen. § 5-308(b)).
```

Supporting quotes (each section read whole; read 2026-11-06):

- Md. Code Ann., Fam. Law §§ 5-705, 5-704, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gfl&section=5-705&enactments=false, read 2026-11-06:
  - '(a) (1) Except as provided in paragraphs (2) and (3) of this subsection, notwithstanding any other provision of law, including a law on privileged communications, a person in this State other than a health practitioner, police officer, or educator or human service worker who has reason to believe that a child has been subjected to abuse or neglect shall notify the local department or the appropriate law enforcement agency.'
- Md. Code Ann., Crim. Law § 3-602.2, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gcr&section=3-602.2&enactments=false, read 2026-11-06:
  - '(a) A person who is required to provide notice of suspected abuse or neglect of a child or make a written report of suspected abuse or neglect of a child under § 5–704 of the Family Law Article may not knowingly fail to provide the required notice or make the required written report if the person has actual knowledge of the abuse or neglect.'
  - 'Also read whole: Fam. Law § 5-705.2 (interference penalty limited to reports 'required by § 5–704 or § 5–705.1(c)(2)', i.e. professional reports) and § 5-705.4 (complaints only against professionals).'
- Md. Code Ann., Fam. Law § 14-302, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gfl&section=14-302&enactments=false, read 2026-11-06:
  - '(c) Any individual other than a health practitioner, human service worker, or police officer who has reason to believe that an alleged vulnerable adult has been subjected to abuse, neglect, self–neglect, or exploitation may file with the local department an oral or written report of the suspected abuse, neglect, self–neglect, or exploitation.'
- Md. Code Ann., Health-Gen. § 5-308, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ghg&section=5-308&enactments=false, read 2026-11-06:
  - '(b) If a medical examiner’s case occurs, the police or sheriff immediately shall notify the medical examiner and State’s Attorney for the county where the body is found and give the known facts concerning the time, place, manner, and circumstances of the death.'

### `edu-no-nonresident-owner-agent-md`
NEW TITLE: Out-of-State Owners: Notice Agent and Foreign Companies

Verdict: ERROR. States that Maryland has no rule specific to out-of-state landlords such as a required in-state agent. A foreign LLC that owns income-producing real property is by statute doing business and must register naming a Maryland resident agent, cannot maintain suit (eviction included) until it registers and pays the penalty, and is deemed to appoint SDAT for service; foreign corporations face the same suit bar. The long-arm statute also reaches any owner of Maryland real property.

old_str:
```
Maryland has no rule specific to out-of-state landlords, such as a required in-state agent in each lease or tax withholding on rent.
```
new_str:
```
Maryland has no rule specific to out-of-state individual landlords, such as a required in-state agent in each lease or tax withholding on rent. An out-of-state company is different. A foreign limited liability company that owns income-producing real property in Maryland is considered to be doing business here, so it must first register with the State Department of Assessments and Taxation, naming a Maryland resident agent; until it registers and pays a $200 penalty it may not maintain an eviction or any other suit in a Maryland court, though its leases stay valid, and by doing business unregistered it appoints the Department as its agent for service of process (Md. Code Ann., Corps. & Ass'ns §§ 4A-1002, 4A-1007 and 4A-1009(b)). An out-of-state corporation doing business here without qualifying or registering faces the same bar on suing and the same $200 penalty; whether renting out property is doing intrastate business for a corporation is a case-law question (Md. Code Ann., Corps. & Ass'ns §§ 7-202, 7-203, 7-301 and 7-302). And whoever you are, having an interest in Maryland real property lets a Maryland court hear a claim arising from it (Md. Code Ann., Cts. & Jud. Proc. § 6-103(b)(5)).
```

Supporting quotes (each section read whole; read 2026-11-06):

- Md. Code Ann., Corps. & Ass'ns § 4A-1002, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=4A-1002&enactments=false, read 2026-11-06:
  - '(a) Before doing any interstate, intrastate, or foreign business in this State, a foreign limited liability company shall register with the Department.'
  - '(4) The name and address of its resident agent in this State;'
- Md. Code Ann., Corps. & Ass'ns § 4A-1007, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=4A-1007&enactments=false, read 2026-11-06:
  - '(a) If a foreign limited liability company is doing or has done any intrastate, interstate, or foreign business in this State without complying with the requirements of this subtitle, the foreign limited liability company and any person claiming under it may not maintain suit in any court of this State, unless the limited liability company shows to the satisfaction of the court that:'
  - '(b) The failure of a foreign limited liability company to register in this State does not impair the validity of a contract or act of the foreign limited liability company or prevent the foreign limited liability company from defending any action, suit, or proceeding in a court of this State.'
  - '(c) A foreign limited liability company, by doing business in this State without registration, appoints the Department as its agent for service of process with respect to causes of action arising out of doing business in this State.'
  - 'the Department shall impose a penalty of $200 on the limited liability company.'
- Md. Code Ann., Corps. & Ass'ns § 4A-1009, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=4A-1009&enactments=false, read 2026-11-06:
  - '(b) In addition to any other activities which may constitute doing business in this State, for the purposes of this title any foreign limited liability company which owns income producing real or tangible personal property in this State, other than property exempted by subsection (a) of this section, shall be considered to be doing business in this State.'
- Md. Code Ann., Corps. & Ass'ns §§ 7-202, 7-203, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=7-203&enactments=false, read 2026-11-06:
  - '(a) Before doing any intrastate business in this State, a foreign corporation shall qualify with the Department.'
  - '(a) Unless it is qualified to do business under § 7–203 of this subtitle, before doing any interstate or foreign business in this State, a foreign corporation shall register with the Department. (§ 7-202, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=7-202&enactments=false)'
- Md. Code Ann., Corps. & Ass'ns §§ 7-301, 7-302, 7-104, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=7-301&enactments=false, read 2026-11-06:
  - 'If a foreign corporation is doing or has done any intrastate, interstate, or foreign business in this State without complying with the requirements of Subtitle 2 of this title, neither the corporation nor any person claiming under it may maintain a suit in any court of this State unless it shows to the satisfaction of the court that:'
  - '(a) (1) If a foreign corporation does any intrastate, interstate, or foreign business in this State without qualifying or registering as required by Subtitle 2 of this title, the Department shall impose a penalty of $200 on the corporation. (§ 7-302, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=7-302&enactments=false)'
  - 'Section 7-104 (read whole, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=7-104&enactments=false) excludes only '(3) Holding, protecting, renting, maintaining, and operating property in this State so acquired' (i.e. acquired by foreclosure); no corporate counterpart to § 4A-1009(b) was found, so renting by a foreign corporation is a case-law question.'
- Md. Code Ann., Cts. & Jud. Proc. § 6-103, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gcj&section=6-103&enactments=false, read 2026-11-06:
  - '(5) Has an interest in, uses, or possesses real property in the State; or'

### `edu-property-manager-licensing-md`

Verdict: holds. Row is about real estate and collection-agency licensing for managers; none of the four general-statute miss types bears on what it states (foreign-entity, trade-name and service rules are handled in `edu-no-nonresident-owner-agent-md`).

### `edu-rental-license-in-eviction-md`

Verdict: FIX. Covers only local rental-license pleading. Omits that an unregistered foreign LLC (owning income-producing property = doing business) or unqualified foreign corporation may not maintain any suit, an eviction included; and the trade-name certificate duty (no suit bar in the section).

old_str:
```
This does not apply to a 14-day clear-and-imminent-danger breach case.
```
new_str:
```
This does not apply to a 14-day clear-and-imminent-danger breach case. Two state registrations outside the landlord-tenant law can also stop an eviction. An out-of-state limited liability company that owns income-producing property here, or an out-of-state corporation doing business here, may not maintain any suit, an eviction included, until it registers or qualifies with the State Department of Assessments and Taxation and pays a $200 penalty (Md. Code Ann., Corps. & Ass'ns §§ 4A-1007, 4A-1009(b) and 7-301; see `edu-no-nonresident-owner-agent-md`). And if you rent under a name other than your own, file a trade name certificate with the Department before you start; the section itself sets no bar on suing for failing to file (Md. Code Ann., Corps. & Ass'ns § 1-406).
```

Supporting quotes (each section read whole; read 2026-11-06):

- Md. Code Ann., Corps. & Ass'ns § 4A-1007, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=4A-1007&enactments=false, read 2026-11-06:
  - '(a) If a foreign limited liability company is doing or has done any intrastate, interstate, or foreign business in this State without complying with the requirements of this subtitle, the foreign limited liability company and any person claiming under it may not maintain suit in any court of this State, unless the limited liability company shows to the satisfaction of the court that:'
  - '(b) The failure of a foreign limited liability company to register in this State does not impair the validity of a contract or act of the foreign limited liability company or prevent the foreign limited liability company from defending any action, suit, or proceeding in a court of this State.'
  - '(c) A foreign limited liability company, by doing business in this State without registration, appoints the Department as its agent for service of process with respect to causes of action arising out of doing business in this State.'
  - 'the Department shall impose a penalty of $200 on the limited liability company.'
- Md. Code Ann., Corps. & Ass'ns § 4A-1009, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=4A-1009&enactments=false, read 2026-11-06:
  - '(b) In addition to any other activities which may constitute doing business in this State, for the purposes of this title any foreign limited liability company which owns income producing real or tangible personal property in this State, other than property exempted by subsection (a) of this section, shall be considered to be doing business in this State.'
- Md. Code Ann., Corps. & Ass'ns §§ 7-301, 7-302, 7-104, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=7-301&enactments=false, read 2026-11-06:
  - 'If a foreign corporation is doing or has done any intrastate, interstate, or foreign business in this State without complying with the requirements of Subtitle 2 of this title, neither the corporation nor any person claiming under it may maintain a suit in any court of this State unless it shows to the satisfaction of the court that:'
  - '(a) (1) If a foreign corporation does any intrastate, interstate, or foreign business in this State without qualifying or registering as required by Subtitle 2 of this title, the Department shall impose a penalty of $200 on the corporation. (§ 7-302, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=7-302&enactments=false)'
  - 'Section 7-104 (read whole, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=7-104&enactments=false) excludes only '(3) Holding, protecting, renting, maintaining, and operating property in this State so acquired' (i.e. acquired by foreclosure); no corporate counterpart to § 4A-1009(b) was found, so renting by a foreign corporation is a case-law question.'
- Md. Code Ann., Corps. & Ass'ns § 1-406, https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gca&section=1-406&enactments=false, read 2026-11-06:
  - '(a) Any person engaged in any mercantile, trading, or manufacturing business as an agent or doing business or trading under any designation, title, or name other than the person’s own name, prior to commencing operation of the business, shall file with the Department a certificate:'
  - 'Read whole: the only penalty is for a false certificate ('(h) A person that willfully and knowingly executes and files a false certificate'); the section contains no bar on suing.'

### `edu-confirmed-absences-outside-title-de`

Verdict: FIX. Item (3) says no statute requires registration before winning possession; omits that a foreign LLC or corporation doing business may not maintain any action until registered/qualified, and the trade-name certificate duty with criminal penalty (no suit bar).

old_str:
```
(3) Landlord registration: no state statute requires you to register or license a residential rental, or to prove registration, before you can win a possession case.
```
new_str:
```
(3) Landlord registration: no state statute requires you to register or license a residential rental, or to prove registration, before you can win a possession case. Entity and trade-name laws can still reach you. An out-of-state limited liability company or corporation doing business in Delaware may not maintain any action, a possession case included, until it registers (an LLC) or qualifies (a corporation) with the Secretary of State and pays the fees and penalties owed; whether renting out property is doing business is a case-law question (6 Del. C. §§ 18-902 and 18-907; 8 Del. C. §§ 371 and 383). An individual or partnership renting under a trade name that does not disclose the legal name must first file a trade name certificate with the Division of Revenue; not doing so is punishable by a fine of up to $100 or up to 3 months in prison, though the trade-name law sets no bar on suing (6 Del. C. §§ 3101 and 3106).
```

Supporting quotes (each section read whole; read 2026-11-06):

- 6 Del. C. §§ 18-902, 18-904, https://delcode.delaware.gov/title6/c018/sc09/index.html, read 2026-11-06:
  - 'Before doing business in the State of Delaware, a foreign limited liability company shall register with the Secretary of State.'
  - 'd. The address of the registered office and the name and address of the registered agent for service of process required to be maintained by § 18-904(b) of this title;'
  - '(b) Each foreign limited liability company shall have and maintain in the State of Delaware: (§ 18-904)'
- 6 Del. C. § 18-907, https://delcode.delaware.gov/title6/c018/sc09/index.html, read 2026-11-06:
  - '(a) A foreign limited liability company doing business in the State of Delaware may not maintain any action, suit or proceeding in the State of Delaware until it has registered in the State of Delaware, and has paid to the State of Delaware all fees and penalties for the years or parts thereof, during which it did business in the State of Delaware without having registered.'
  - '(1) The validity of any contract or act of the foreign limited liability company;'
  - '(d) Any foreign limited liability company doing business in the State of Delaware without first having registered shall be fined and shall pay to the Secretary of State $200 for each year or part thereof during which the foreign limited liability company failed to register in the State of Delaware.'
- 8 Del. C. §§ 371, 373, 378, 382, 383, https://delcode.delaware.gov/title8/c001/sc16/index.html, read 2026-11-06:
  - '(b) No foreign corporation shall do any business in this State, through or by branch offices, agents or representatives located in this State, until it shall have paid to the Secretary of State of this State for the use of this State, $80, and shall have filed in the office of the Secretary of State: (§ 371)'
  - '(a) A foreign corporation which is required to comply with §§ 371 and 372 of this title and which has done business in this State without authority shall not maintain any action or special proceeding in this State unless and until such corporation has been authorized to do business in this State and has paid to the State all fees, penalties and franchise taxes for the years or parts thereof during which it did business in this State without authority. (§ 383)'
  - 'Any foreign corporation doing business of any kind in this State without first having complied with any section of this subchapter applicable to it, shall be fined not less than $200 nor more than $500 for each such offense. (§ 378)'
  - '(a) Any foreign corporation which shall transact business in this State without having qualified to do business under § 371 of this title shall be deemed to have thereby appointed and constituted the Secretary of State of this State its agent for the acceptance of legal process (§ 382)'
  - '§ 373 read whole: its exceptions do not mention owning or renting real property.'
- 6 Del. C. §§ 3101, 3106, 3107, https://delcode.delaware.gov/title6/c031/index.html, read 2026-11-06:
  - 'No person, firm or association shall engage in, prosecute or transact any business within the limits of this State, by using any trade name or title which does not disclose the legal name of such person, or in case of a firm or association, the legal name of each and every person comprising the firm or association without, in addition to what is otherwise required by the laws of this State, first filing a certificate under the hand of such person or, in case of a firm or association, under the hand of 1 of the members of the firm or association, with the Division of Revenue, designating the trade name or title and the legal name of such person, (§ 3101)'
  - 'If any person, firm or association violates any of the provisions of §§ 3101, 3102, and 3104 of this title, every such person, and each and every person comprising such firm or association, shall be fined not more than $100 or imprisoned not more than 3 months, or both. (§ 3106)'
  - 'Nothing in §§ 3101-3105 of this title shall affect or apply to joint stock associations, using a common name, not being ordinary partnerships, which have more than 50 stockholders or members nor to legally incorporated companies. (§ 3107; chapter read whole, §§ 3101-3108: no bar on suing)'

### `edu-law-enforcement-cooperation-de`

Verdict: FIX. Covers nuisance law and victim protection but omits the any-person duties: child abuse/neglect/trafficking report to DSCYF (civil penalty up to $10,000/$50,000), impaired-adult report to DHSS, and death notification to the Medical Examiner (up to 1 year/$1,000).

old_str:
```
so do not treat calls for police or emergency help by a victim as a lease violation.
```
new_str:
```
so do not treat calls for police or emergency help by a victim as a lease violation. Delaware's reporting laws also bind you and your staff as they bind anyone. Any person who knows or in good faith suspects child abuse, neglect or human trafficking must report it to the Department of Services for Children, Youth and Their Families (calling the police alone is not enough), on pain of a civil penalty of up to $10,000 for a first violation and $50,000 after that (16 Del. C. §§ 903 and 914). A person with reasonable cause to believe that an impaired or incapacitated adult is in need of protective services must report it to the Department of Health and Social Services (31 Del. C. § 3910(a)). And a person who knows of a death from violence, suicide, accident, poison or overdose, or one that is sudden, unattended by a physician or suspicious, as when a tenant is found dead in a unit, must immediately notify the Medical Examiner, and must not touch or move the clothing or articles on or near the body without the Division of Forensic Science's order; a wilful violation can bring up to 1 year in prison or a $1,000 fine, or both (29 Del. C. § 4706(a)).
```

Supporting quotes (each section read whole; read 2026-11-06):

- 16 Del. C. §§ 903, 914, https://delcode.delaware.gov/title16/c009/sc01/index.html, read 2026-11-06:
  - '(a) Any person, agency, organization or entity who knows or in good faith suspects child abuse, neglect, or human trafficking shall make a report to the Department in accordance with § 904 of this title. While a person may also notify law enforcement for the purpose of rendering assistance to the child in question or investigating the cause of the child’s injuries or condition, the person is still required to report the suspected abuse to the Department.'
  - '(a) Whoever violates § 903 of this title shall be liable for a civil penalty not to exceed $10,000 for the first violation, and not to exceed $50,000 for any subsequent violation. (§ 914)'
  - '“Department” means the Department of Services for Children, Youth and Their Families (§ 902)'
- 31 Del. C. § 3910, https://delcode.delaware.gov/title31/c039/index.html, read 2026-11-06:
  - '(a) (1) A person, including a health-care professional as defined under § 701 of Title 16, having reasonable cause to believe that an adult who is impaired or an adult who is incapacitated and is in need of protective services shall report the information supporting reasonable cause to the Department in the manner and format that the Department requires.'
  - '“Department” means the Department of Health and Social Services (§ 3902). § 3913 read whole: no penalty for failing to report.'
- 29 Del. C. § 4706, https://delcode.delaware.gov/title29/c047/index.html, read 2026-11-06:
  - 'it is the duty of the person having knowledge of the death or of the person issuing a permit for cremation or natural organic reduction under § 3159 of Title 16 immediately to notify the Chief Medical Examiner, an Assistant Medical Examiner, or a Deputy Medical Examiner,'
  - 'A person who wilfully neglects or refuses to report the death or who refuses to make available prior medical or other information pertinent to the death investigation or who, without an order from the Division of Forensic Science, wilfully touches, removes, or disturbs the clothing or any article on or near the body shall on conviction be subject to imprisonment for not more than 1 year or pay a fine of not more than $1,000, or both.'

### `edu-no-landlord-registration-de`

Verdict: FIX. Says no statute requires registration before an eviction or an in-state broker for out-of-state owners; omits foreign-entity registration with registered agent and the suit bar, and the trade-name filing duty.

old_str:
```
Delaware's statutes do not require residential landlords to register with the State or a county, hold a state rental license, use an in-state broker if they live out of state, or prove registration before an eviction.
```
new_str:
```
Delaware's statutes do not require residential landlords to register with the State or a county, hold a state rental license, use an in-state broker if they live out of state, or prove a rental registration before an eviction. Two general filing rules can still apply. An out-of-state limited liability company or corporation doing business in Delaware must register or qualify with the Secretary of State, naming a Delaware registered agent, and cannot maintain an eviction until it does; whether renting out property is doing business is a case-law question (6 Del. C. §§ 18-902, 18-904(b) and 18-907; 8 Del. C. §§ 371 and 383; see `edu-no-nonresident-owner-agent-de`). And an individual or partnership renting under a trade name that does not disclose the legal name must first file a trade name certificate with the Division of Revenue (6 Del. C. §§ 3101 and 3106).
```

Supporting quotes (each section read whole; read 2026-11-06):

- 6 Del. C. §§ 18-902, 18-904, https://delcode.delaware.gov/title6/c018/sc09/index.html, read 2026-11-06:
  - 'Before doing business in the State of Delaware, a foreign limited liability company shall register with the Secretary of State.'
  - 'd. The address of the registered office and the name and address of the registered agent for service of process required to be maintained by § 18-904(b) of this title;'
  - '(b) Each foreign limited liability company shall have and maintain in the State of Delaware: (§ 18-904)'
- 6 Del. C. § 18-907, https://delcode.delaware.gov/title6/c018/sc09/index.html, read 2026-11-06:
  - '(a) A foreign limited liability company doing business in the State of Delaware may not maintain any action, suit or proceeding in the State of Delaware until it has registered in the State of Delaware, and has paid to the State of Delaware all fees and penalties for the years or parts thereof, during which it did business in the State of Delaware without having registered.'
  - '(1) The validity of any contract or act of the foreign limited liability company;'
  - '(d) Any foreign limited liability company doing business in the State of Delaware without first having registered shall be fined and shall pay to the Secretary of State $200 for each year or part thereof during which the foreign limited liability company failed to register in the State of Delaware.'
- 8 Del. C. §§ 371, 373, 378, 382, 383, https://delcode.delaware.gov/title8/c001/sc16/index.html, read 2026-11-06:
  - '(b) No foreign corporation shall do any business in this State, through or by branch offices, agents or representatives located in this State, until it shall have paid to the Secretary of State of this State for the use of this State, $80, and shall have filed in the office of the Secretary of State: (§ 371)'
  - '(a) A foreign corporation which is required to comply with §§ 371 and 372 of this title and which has done business in this State without authority shall not maintain any action or special proceeding in this State unless and until such corporation has been authorized to do business in this State and has paid to the State all fees, penalties and franchise taxes for the years or parts thereof during which it did business in this State without authority. (§ 383)'
  - 'Any foreign corporation doing business of any kind in this State without first having complied with any section of this subchapter applicable to it, shall be fined not less than $200 nor more than $500 for each such offense. (§ 378)'
  - '(a) Any foreign corporation which shall transact business in this State without having qualified to do business under § 371 of this title shall be deemed to have thereby appointed and constituted the Secretary of State of this State its agent for the acceptance of legal process (§ 382)'
  - '§ 373 read whole: its exceptions do not mention owning or renting real property.'
- 6 Del. C. §§ 3101, 3106, 3107, https://delcode.delaware.gov/title6/c031/index.html, read 2026-11-06:
  - 'No person, firm or association shall engage in, prosecute or transact any business within the limits of this State, by using any trade name or title which does not disclose the legal name of such person, or in case of a firm or association, the legal name of each and every person comprising the firm or association without, in addition to what is otherwise required by the laws of this State, first filing a certificate under the hand of such person or, in case of a firm or association, under the hand of 1 of the members of the firm or association, with the Division of Revenue, designating the trade name or title and the legal name of such person, (§ 3101)'
  - 'If any person, firm or association violates any of the provisions of §§ 3101, 3102, and 3104 of this title, every such person, and each and every person comprising such firm or association, shall be fined not more than $100 or imprisoned not more than 3 months, or both. (§ 3106)'
  - 'Nothing in §§ 3101-3105 of this title shall affect or apply to joint stock associations, using a common name, not being ordinary partnerships, which have more than 50 stockholders or members nor to legally incorporated companies. (§ 3107; chapter read whole, §§ 3101-3108: no bar on suing)'

### `edu-no-nonresident-owner-agent-de`
NEW TITLE: Nonresident owners: no agent rule for individuals, registration for out-of-state companies, no tenant withholding

Verdict: ERROR. States Delaware does not require an out-of-state owner to name an in-state agent before renting or suing. A foreign LLC must register (naming a registered agent) before doing business and a foreign corporation must qualify; unregistered ones may not maintain any action and are deemed to appoint the Secretary of State for service.

old_str:
```
Delaware's statutes do not require a nonresident or out-of-state owner to name an in-state agent before renting or suing, do not require an in-state broker or manager, and do not require tenants to withhold income tax from rent paid to a nonresident owner.
```
new_str:
```
Delaware's statutes do not require a nonresident individual owner to name an in-state agent before renting or suing, do not require an in-state broker or manager, and do not require tenants to withhold income tax from rent paid to a nonresident owner. An out-of-state company is different. A foreign limited liability company must register with the Secretary of State before doing business in Delaware, and a foreign corporation must qualify, each naming a Delaware registered agent. One doing business here unregistered may not maintain any action, an eviction included, until it registers and pays the fees and penalties owed (for an LLC, $200 for each year; for a corporation, a fine of $200 to $500), and is deemed to have appointed the Secretary of State as its agent for service of process in suits arising from that business; its leases remain valid. Whether renting out property is doing business for these rules is a case-law question; the statutes' lists of activities that are not doing business do not mention it (6 Del. C. §§ 18-902, 18-904(b), 18-907, 18-911 and 18-912; 8 Del. C. §§ 371, 373, 378, 382 and 383).
```

Supporting quotes (each section read whole; read 2026-11-06):

- 6 Del. C. §§ 18-902, 18-904, https://delcode.delaware.gov/title6/c018/sc09/index.html, read 2026-11-06:
  - 'Before doing business in the State of Delaware, a foreign limited liability company shall register with the Secretary of State.'
  - 'd. The address of the registered office and the name and address of the registered agent for service of process required to be maintained by § 18-904(b) of this title;'
  - '(b) Each foreign limited liability company shall have and maintain in the State of Delaware: (§ 18-904)'
- 6 Del. C. § 18-907, https://delcode.delaware.gov/title6/c018/sc09/index.html, read 2026-11-06:
  - '(a) A foreign limited liability company doing business in the State of Delaware may not maintain any action, suit or proceeding in the State of Delaware until it has registered in the State of Delaware, and has paid to the State of Delaware all fees and penalties for the years or parts thereof, during which it did business in the State of Delaware without having registered.'
  - '(1) The validity of any contract or act of the foreign limited liability company;'
  - '(d) Any foreign limited liability company doing business in the State of Delaware without first having registered shall be fined and shall pay to the Secretary of State $200 for each year or part thereof during which the foreign limited liability company failed to register in the State of Delaware.'
- 6 Del. C. §§ 18-911, 18-912, https://delcode.delaware.gov/title6/c018/sc09/index.html, read 2026-11-06:
  - '(a) Any foreign limited liability company which shall do business in the State of Delaware without having registered under § 18-902 of this title shall be deemed to have thereby appointed and constituted the Secretary of State of the State of Delaware its agent for the acceptance of legal process in any civil action, suit or proceeding against it in any state or federal court in the State of Delaware arising or growing out of any business done by it within the State of Delaware.'
  - '§ 18-912 read whole: its list of activities not constituting doing business does not mention owning or renting real property (closest: '(9) Collecting debts or foreclosing mortgages or other security interests in property securing the debts, and holding, protecting and maintaining property so acquired;').'
- 8 Del. C. §§ 371, 373, 378, 382, 383, https://delcode.delaware.gov/title8/c001/sc16/index.html, read 2026-11-06:
  - '(b) No foreign corporation shall do any business in this State, through or by branch offices, agents or representatives located in this State, until it shall have paid to the Secretary of State of this State for the use of this State, $80, and shall have filed in the office of the Secretary of State: (§ 371)'
  - '(a) A foreign corporation which is required to comply with §§ 371 and 372 of this title and which has done business in this State without authority shall not maintain any action or special proceeding in this State unless and until such corporation has been authorized to do business in this State and has paid to the State all fees, penalties and franchise taxes for the years or parts thereof during which it did business in this State without authority. (§ 383)'
  - 'Any foreign corporation doing business of any kind in this State without first having complied with any section of this subchapter applicable to it, shall be fined not less than $200 nor more than $500 for each such offense. (§ 378)'
  - '(a) Any foreign corporation which shall transact business in this State without having qualified to do business under § 371 of this title shall be deemed to have thereby appointed and constituted the Secretary of State of this State its agent for the acceptance of legal process (§ 382)'
  - '§ 373 read whole: its exceptions do not mention owning or renting real property.'

### `edu-confirmed-absences-outside-title-dc`

Verdict: FIX. Item (2) lists rental registration and license preconditions but omits the general foreign-entity suit bar (D.C. Code § 29-105.02(b)) and the trade-name suit bar (§ 47-2855.03(d)).

old_str:
```
and no writ of restitution issues without proof of a current license.
```
new_str:
```
and no writ of restitution issues without proof of a current license. Two business-registration laws can also block the case: an out-of-state corporation or limited liability company doing business in the District may not maintain an action until it registers with the Mayor (whether renting out property is doing business is a case-law question), and anyone doing business under a trade name may not maintain any suit in a District court until the trade name is properly registered (D.C. Code §§ 29-105.02(b) and 47-2855.03(d)).
```

Supporting quotes (each section read whole; read 2026-11-06):

- D.C. Code §§ 29-105.02, 29-105.03, 29-105.05, https://code.dccouncil.gov/us/dc/council/code/sections/29-105.02, read 2026-11-06:
  - '(a) A foreign filing entity or foreign limited liability partnership shall not do business in the District until it registers with the Mayor under this chapter.'
  - '(b) A foreign filing entity or foreign limited liability partnership doing business in the District may not maintain an action or proceeding in the District unless it is registered to do business in the District.'
  - '(c) The failure of a foreign filing entity or foreign limited liability partnership to register to do business in the District shall not impair the validity of a contract or act'
  - '(5) The information required by § 29-104.04(a); (§ 29-105.03, https://code.dccouncil.gov/us/dc/council/code/sections/29-105.03; § 29-104.04(a) requires the registered agent's name, https://code.dccouncil.gov/us/dc/council/code/sections/29-104.04)'
  - '§ 29-105.05 read whole (https://code.dccouncil.gov/us/dc/council/code/sections/29-105.05): its list of activities that are not doing business does not mention owning or renting real property.'
- D.C. Code §§ 47-2855.02, 47-2855.03, https://code.dccouncil.gov/us/dc/council/code/sections/47-2855.03, read 2026-11-06:
  - '(a) A person who carries on, conducts, or transacts business in the District of Columbia under any trade name shall register that trade name with the Department as follows: (§ 47-2855.02, https://code.dccouncil.gov/us/dc/council/code/sections/47-2855.02)'
  - '(d) No person carrying on, conducting, or transacting business under any trade name shall be entitled to maintain any suit in any of the courts of the District of Columbia until the person has properly completed the registration as provided for in this section.'
  - '“Department” means the Department of Licensing and Consumer Protection. (§ 47-2855.01(2))'

### `edu-landlord-registration-dc`

Verdict: FIX. Lists the rental-specific registrations but omits foreign-entity registration (suit bar) and trade-name registration (suit bar), each of which a landlord renting through an out-of-state company or under a business name needs.

old_str:
```
Non-resident owners must also keep a District registered agent (see the non-resident owner row).
```
new_str:
```
Non-resident owners must also keep a District registered agent (see the non-resident owner row). Two general business filings can matter too: an out-of-state company doing business here must register with the Mayor and cannot maintain an action until it does, and if you rent under a trade name you must register it with the Department of Licensing and Consumer Protection and cannot maintain a suit until you do (D.C. Code §§ 29-105.02, 47-2855.02 and 47-2855.03(d)).
```

Supporting quotes (each section read whole; read 2026-11-06):

- D.C. Code §§ 29-105.02, 29-105.03, 29-105.05, https://code.dccouncil.gov/us/dc/council/code/sections/29-105.02, read 2026-11-06:
  - '(a) A foreign filing entity or foreign limited liability partnership shall not do business in the District until it registers with the Mayor under this chapter.'
  - '(b) A foreign filing entity or foreign limited liability partnership doing business in the District may not maintain an action or proceeding in the District unless it is registered to do business in the District.'
  - '(c) The failure of a foreign filing entity or foreign limited liability partnership to register to do business in the District shall not impair the validity of a contract or act'
  - '(5) The information required by § 29-104.04(a); (§ 29-105.03, https://code.dccouncil.gov/us/dc/council/code/sections/29-105.03; § 29-104.04(a) requires the registered agent's name, https://code.dccouncil.gov/us/dc/council/code/sections/29-104.04)'
  - '§ 29-105.05 read whole (https://code.dccouncil.gov/us/dc/council/code/sections/29-105.05): its list of activities that are not doing business does not mention owning or renting real property.'
- D.C. Code §§ 47-2855.02, 47-2855.03, https://code.dccouncil.gov/us/dc/council/code/sections/47-2855.03, read 2026-11-06:
  - '(a) A person who carries on, conducts, or transacts business in the District of Columbia under any trade name shall register that trade name with the Department as follows: (§ 47-2855.02, https://code.dccouncil.gov/us/dc/council/code/sections/47-2855.02)'
  - '(d) No person carrying on, conducting, or transacting business under any trade name shall be entitled to maintain any suit in any of the courts of the District of Columbia until the person has properly completed the registration as provided for in this section.'
  - '“Department” means the Department of Licensing and Consumer Protection. (§ 47-2855.01(2))'

### `edu-nonresident-owner-agent-dc`

Verdict: ERROR. States no District statute bars a nonresident owner from suing until the agent is filed. A foreign filing entity doing business may not maintain an action until registered (registration names a registered agent), and a trade-name user may not maintain a suit until registered. Also omits long-arm jurisdiction over owners of District real property.

old_str:
```
No District statute or regulation in the searched corpus requires the lease itself to name the agent, bars a nonresident owner from suing until the agent is filed, or requires tenants to withhold income tax from rent paid to a nonresident owner.
```
new_str:
```
No District statute or regulation in the searched corpus requires the lease itself to name the agent, bars a nonresident individual owner from suing until the agent is filed, or requires tenants to withhold income tax from rent paid to a nonresident owner. An out-of-state company is different: a foreign corporation or limited liability company must register with the Mayor, naming a registered agent, before doing business in the District, and while it is doing business unregistered it may not maintain an action, an eviction included; its leases stay valid, and if it has no registered agent who can be found, the Mayor may be served for it. Whether renting out property is doing business for this rule is a case-law question; the statute's list of activities that are not doing business does not mention it (D.C. Code §§ 29-105.02, 29-105.03, 29-105.05 and 29-104.12(d)). Renting under a trade name carries a similar bar: no suit until the trade name is registered (D.C. Code § 47-2855.03(d)). And whoever you are, having an interest in District real property lets a District court hear a claim arising from it (D.C. Code § 13-423(a)(5)).
```

Supporting quotes (each section read whole; read 2026-11-06):

- D.C. Code §§ 29-105.02, 29-105.03, 29-105.05, https://code.dccouncil.gov/us/dc/council/code/sections/29-105.02, read 2026-11-06:
  - '(a) A foreign filing entity or foreign limited liability partnership shall not do business in the District until it registers with the Mayor under this chapter.'
  - '(b) A foreign filing entity or foreign limited liability partnership doing business in the District may not maintain an action or proceeding in the District unless it is registered to do business in the District.'
  - '(c) The failure of a foreign filing entity or foreign limited liability partnership to register to do business in the District shall not impair the validity of a contract or act'
  - '(5) The information required by § 29-104.04(a); (§ 29-105.03, https://code.dccouncil.gov/us/dc/council/code/sections/29-105.03; § 29-104.04(a) requires the registered agent's name, https://code.dccouncil.gov/us/dc/council/code/sections/29-104.04)'
  - '§ 29-105.05 read whole (https://code.dccouncil.gov/us/dc/council/code/sections/29-105.05): its list of activities that are not doing business does not mention owning or renting real property.'
- D.C. Code § 29-104.12, https://code.dccouncil.gov/us/dc/council/code/sections/29-104.12, read 2026-11-06:
  - '(d) If an entity fails to designate or maintain a registered agent in the District as required by law, or if an entity’s registered agent in the District cannot with reasonable diligence be found, and if the person seeking service submits a declaration under penalty of making false statements showing that a registered agent for the entity cannot be found, the Mayor shall be an agent of the entity upon whom any process against the entity may be served'
- D.C. Code §§ 47-2855.02, 47-2855.03, https://code.dccouncil.gov/us/dc/council/code/sections/47-2855.03, read 2026-11-06:
  - '(a) A person who carries on, conducts, or transacts business in the District of Columbia under any trade name shall register that trade name with the Department as follows: (§ 47-2855.02, https://code.dccouncil.gov/us/dc/council/code/sections/47-2855.02)'
  - '(d) No person carrying on, conducting, or transacting business under any trade name shall be entitled to maintain any suit in any of the courts of the District of Columbia until the person has properly completed the registration as provided for in this section.'
  - '“Department” means the Department of Licensing and Consumer Protection. (§ 47-2855.01(2))'
- D.C. Code § 13-423, https://code.dccouncil.gov/us/dc/council/code/sections/13-423, read 2026-11-06:
  - '(5) having an interest in, using, or possessing real property in the District of Columbia;'

### `edu-police-call-protection-dc`

Verdict: FIX. Omits the any-person duties: report child sexual abuse to police ($300 civil fine) and notify OCME of violent/sudden/suspicious deaths (misdemeanor, $100-$1,000). Vulnerable-adult reporting is voluntary for non-listed persons.

old_str:
```
A lease clause on tenant cooperation is therefore of limited practical use; describe prohibited conduct instead (see criminal-activity-dc).
```
new_str:
```
A lease clause on tenant cooperation is therefore of limited practical use; describe prohibited conduct instead (see criminal-activity-dc). Two reporting duties do bind you and your staff as they bind anyone. Any person who knows or has reasonable cause to believe that a child is a victim of sexual abuse must report it to the police immediately (a 911 call or a report to the Child and Family Services Agency counts), and a willful failure carries a $300 civil fine (D.C. Code §§ 22-3020.52(a) and 22-3020.54(a)). And anyone who learns of a violent, sudden and unexpected, or suspicious death, as when a tenant is found dead in a unit, must promptly notify the Office of the Chief Medical Examiner, and the body may not be disturbed without the medical examiner's permission; a willful failure to notify is a misdemeanor with a fine of $100 to $1,000 (D.C. Code §§ 5-1405(b) and 5-1406). Reporting the abuse of a vulnerable adult is voluntary unless you are in a listed profession (D.C. Code § 7-1903(a)).
```

Supporting quotes (each section read whole; read 2026-11-06):

- D.C. Code §§ 22-3020.52, 22-3020.54, https://code.dccouncil.gov/us/dc/council/code/sections/22-3020.52, read 2026-11-06:
  - '(a) Any person who knows, or has reasonable cause to believe, that a child is a victim of sexual abuse shall immediately report such knowledge or belief to the police. For the purposes of this subchapter, a call to 911, or a report to the Child and Family Services Agency, shall be deemed a report to the police.'
  - '(a) Any person required to make a report under this subchapter who willfully fails to make such a report shall be subject to a civil fine of $300. (§ 22-3020.54, https://code.dccouncil.gov/us/dc/council/code/sections/22-3020.54)'
- D.C. Code §§ 5-1405, 5-1406, https://code.dccouncil.gov/us/dc/council/code/sections/5-1406, read 2026-11-06:
  - '(b) All law enforcement officers, emergency medical service personnel, physicians, nurses, health care institutions, nursing homes, community residential facilities, prisons and jails, funeral directors, embalmers and other persons shall promptly notify the OCME of the occurrence of all deaths coming to their attention which are subject to investigation under § 5-1405(b)'
  - 'The body of the decedent shall not be disturbed unless the CME, or the CME’s designee, grants permission to do so.'
  - '(c) Any person subject to the reporting requirements in subsection (b) of this section who willfully fails to comply with this section shall be guilty of a misdemeanor and upon conviction shall be fined not less than $100 nor more than $1,000.'
  - '(1) Violent deaths, whether apparently homicidal, suicidal, or accidental, (§ 5-1405(b), https://code.dccouncil.gov/us/dc/council/code/sections/5-1405)'
- D.C. Code §§ 7-1903, 7-1912, https://code.dccouncil.gov/us/dc/council/code/sections/7-1903, read 2026-11-06:
  - '(2) Any person may voluntarily report an alleged case of abuse, neglect, self-neglect, or exploitation when he or she has reason to believe that an adult is in need of protective services.'
  - '(a)(1) Any person required to report under § 7-1903(a)(1) who willfully fails to do so shall be guilty of a misdemeanor (§ 7-1912)'

### `edu-absentee-owner-contact-ma`

Verdict: ERROR. States no rule requires an out-of-state owner to appoint an in-state agent. Ownership or leasing of MA real estate is transacting business; a foreign corporation must file a certificate naming a registered agent and a foreign LLC must register naming a resident agent, and neither may maintain an action until it does; unregistered ones are deemed to appoint the Secretary for service.

old_str:
```
We searched Massachusetts statutes and regulations and found no rule requiring an out-of-state owner to appoint an in-state agent or broker, and none requiring tenants to withhold tax from rent paid to a nonresident.
```
new_str:
```
We searched Massachusetts statutes and regulations and found no rule requiring an out-of-state individual owner to appoint an in-state agent or broker, and none requiring tenants to withhold tax from rent paid to a nonresident. An out-of-state company is different. Owning or leasing real estate in Massachusetts counts as transacting business, so within 10 days an out-of-state corporation must file a certificate with the Secretary of the Commonwealth naming a registered agent in Massachusetts, and an out-of-state LLC must register naming a resident agent. Until it does, it cannot maintain an eviction or any other court case, it owes fees and penalties (for an LLC, a fine of up to $500 a year), and it is treated as having appointed the Secretary as its agent for service of process, though its leases stay valid (Mass. Gen. Laws ch. 156D, §§ 15.01(b)(1), 15.02, 15.03 and 15.10(b); ch. 156C, §§ 48 and 54). Whoever you are, having an interest in Massachusetts real property lets a Massachusetts court hear a claim arising from it (Mass. Gen. Laws ch. 223A, § 3(e)).
```

Supporting quotes (each section read whole; read 2026-11-06):

- Mass. Gen. Laws ch. 156D, §§ 15.01, 15.03, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156D/Section15.01, read 2026-11-06:
  - '(a) A foreign corporation that transacts business or has a usual place of business in the commonwealth shall deliver the certificate required by section 15.03 to the secretary of state for filing.'
  - '(b) The following activities, among others, do constitute transacting business within the meaning of subsection (a): (1) the ownership or leasing of real estate in the commonwealth;'
  - '(a) A foreign corporation shall, not later than 10 days after it commences transacting business in the commonwealth, deliver to the secretary of state for filing a certificate setting forth: ... (5) the address of its registered office in the commonwealth, the name of its registered agent at that office (§ 15.03, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156D/Section15.03)'
- Mass. Gen. Laws ch. 156D, §§ 15.02, 15.10, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156D/Section15.02, read 2026-11-06:
  - '(a) A foreign corporation transacting business in the commonwealth without delivering to the secretary of state for filing the certificate required by section 15.03 shall not maintain a proceeding in any court in the commonwealth until the certificate is delivered and filed.'
  - '(e) Notwithstanding subsections (a) and (b), the failure of a foreign corporation to deliver to the secretary of state for filing the certificate required by section 15.03 shall not impair the validity of its corporate acts or prevent it from defending any proceeding in the commonwealth, or affect the validity of any contract entered into by the foreign corporation.'
  - '(b) Every foreign corporation doing business in the commonwealth which has not complied with section 15.03 ... shall be deemed to have appointed the secretary of state and his successor in office to be its true and lawful attorney upon whom all lawful process in any action or proceeding may be served (§ 15.10, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156D/Section15.10)'
- Mass. Gen. Laws ch. 156C, §§ 48, 54, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156C/Section54, read 2026-11-06:
  - 'A foreign limited liability company shall be considered to be doing business in the commonwealth for the purpose of this section if it would be considered to be doing business in the commonwealth for the purpose of Part 15 of subdivision A of chapter 156D if it were a foreign corporation. Every foreign limited liability company doing business in the commonwealth shall submit to the state secretary, within ten days after it commences doing business in the commonwealth, an application for registration as a foreign limited liability company, (§ 48, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156C/Section48)'
  - '(7) the name and address of its resident agent and the agent's written consent, either on the certificate or attached to it, to his appointment as agent; (§ 48)'
  - 'Section 54. (a) A foreign limited liability company doing business in the commonwealth which fails to register with the state secretary shall, for each year that such failure shall continue, be fined not more than five hundred dollars. No such failure shall affect the validity of any contract involving the foreign limited liability company, nor is a member or a manager of a foreign limited liability company liable for the obligations of the foreign limited liability company solely by reason of such failure, but no action shall be maintained or recovery had by the foreign limited liability company in any of the courts of the commonwealth as long as such failure continues.'
  - 'Every foreign limited liability company doing business in the commonwealth without having registered as prescribed in this chapter, ... shall be deemed to have appointed the state secretary to be its true and lawful attorney upon whom all process in any action or proceeding may be served (§ 54(b))'
- Mass. Gen. Laws ch. 223A, § 3, https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleII/Chapter223A/Section3, read 2026-11-06:
  - '(e) having an interest in, using or possessing real property in this commonwealth;'

### `edu-confirmed-absences-outside-title-ma`

Verdict: FIX. Item (3) omits that a foreign corporation owning or leasing MA real estate (and a foreign LLC by the same test) cannot maintain a proceeding, an eviction included, until it files with the Secretary of the Commonwealth; and the business-certificate duty (ch. 110, § 5; fine, no suit bar).

old_str:
```
(3) No statewide rule that a rental registration or license is a precondition to winning possession.
```
new_str:
```
(3) No statewide rule that a rental registration or license is a precondition to winning possession. But an out-of-state corporation that owns or leases real estate here is transacting business, as is an out-of-state LLC by the same test, and until it files its certificate or registration with the Secretary of the Commonwealth it may not maintain a court case, an eviction included (Mass. Gen. Laws ch. 156D, §§ 15.01(b)(1) and 15.02(a); ch. 156C, §§ 48 and 54(a)). Renting under a name other than your own also requires a business certificate filed with the city or town clerk, with a fine of up to $300 for each month of violation, though that statute sets no bar on suing (Mass. Gen. Laws ch. 110, § 5).
```

Supporting quotes (each section read whole; read 2026-11-06):

- Mass. Gen. Laws ch. 156D, §§ 15.01, 15.03, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156D/Section15.01, read 2026-11-06:
  - '(a) A foreign corporation that transacts business or has a usual place of business in the commonwealth shall deliver the certificate required by section 15.03 to the secretary of state for filing.'
  - '(b) The following activities, among others, do constitute transacting business within the meaning of subsection (a): (1) the ownership or leasing of real estate in the commonwealth;'
  - '(a) A foreign corporation shall, not later than 10 days after it commences transacting business in the commonwealth, deliver to the secretary of state for filing a certificate setting forth: ... (5) the address of its registered office in the commonwealth, the name of its registered agent at that office (§ 15.03, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156D/Section15.03)'
- Mass. Gen. Laws ch. 156D, §§ 15.02, 15.10, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156D/Section15.02, read 2026-11-06:
  - '(a) A foreign corporation transacting business in the commonwealth without delivering to the secretary of state for filing the certificate required by section 15.03 shall not maintain a proceeding in any court in the commonwealth until the certificate is delivered and filed.'
  - '(e) Notwithstanding subsections (a) and (b), the failure of a foreign corporation to deliver to the secretary of state for filing the certificate required by section 15.03 shall not impair the validity of its corporate acts or prevent it from defending any proceeding in the commonwealth, or affect the validity of any contract entered into by the foreign corporation.'
  - '(b) Every foreign corporation doing business in the commonwealth which has not complied with section 15.03 ... shall be deemed to have appointed the secretary of state and his successor in office to be its true and lawful attorney upon whom all lawful process in any action or proceeding may be served (§ 15.10, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156D/Section15.10)'
- Mass. Gen. Laws ch. 156C, §§ 48, 54, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156C/Section54, read 2026-11-06:
  - 'A foreign limited liability company shall be considered to be doing business in the commonwealth for the purpose of this section if it would be considered to be doing business in the commonwealth for the purpose of Part 15 of subdivision A of chapter 156D if it were a foreign corporation. Every foreign limited liability company doing business in the commonwealth shall submit to the state secretary, within ten days after it commences doing business in the commonwealth, an application for registration as a foreign limited liability company, (§ 48, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156C/Section48)'
  - '(7) the name and address of its resident agent and the agent's written consent, either on the certificate or attached to it, to his appointment as agent; (§ 48)'
  - 'Section 54. (a) A foreign limited liability company doing business in the commonwealth which fails to register with the state secretary shall, for each year that such failure shall continue, be fined not more than five hundred dollars. No such failure shall affect the validity of any contract involving the foreign limited liability company, nor is a member or a manager of a foreign limited liability company liable for the obligations of the foreign limited liability company solely by reason of such failure, but no action shall be maintained or recovery had by the foreign limited liability company in any of the courts of the commonwealth as long as such failure continues.'
  - 'Every foreign limited liability company doing business in the commonwealth without having registered as prescribed in this chapter, ... shall be deemed to have appointed the state secretary to be its true and lawful attorney upon whom all process in any action or proceeding may be served (§ 54(b))'
- Mass. Gen. Laws ch. 110, § 5, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter110/Section5, read 2026-11-06:
  - 'Section 5. Any person conducting business in the commonwealth under any title other than the real name of the person conducting the business, whether individually or as a partnership, shall file in the office of the clerk of every city or town where an office of any such person or partnership may be situated a certificate'
  - 'A certificate issued in accordance with this section shall be in force and effect for four years from the date of issue and shall be renewed each four years thereafter'
  - 'Violations of this section shall be punished by a fine of not more than three hundred dollars for each month during which such violation continues.'
  - 'Read whole: no bar on suing.'

### `edu-no-crime-free-lease-statute-ma`

Verdict: FIX. Omits the any-person duties to report witnessed listed violent crimes (ch. 268, § 40; fine $500-$2,500) and deaths to the chief medical examiner (ch. 38, § 3; fine only for professionals).

old_str:
```
Eviction still requires a court case.
```
new_str:
```
Eviction still requires a court case. Two general reporting duties do reach you and your staff. Whoever knows that another person is a victim of aggravated rape, rape, murder, manslaughter or armed robbery and is at the scene must report it to law enforcement as soon as reasonably practicable, if it can be done without danger, or face a fine of $500 to $2,500 (Mass. Gen. Laws ch. 268, § 40). And any person who knows of a death from violence, accident, suicide or another listed circumstance, including any person found dead, as when a tenant is found dead in a unit, must immediately notify the office of the chief medical examiner; the statute's fine for failing applies only to listed professionals (Mass. Gen. Laws ch. 38, § 3). Child-abuse and elder-abuse reporting is mandatory only for listed professionals, though anyone may report an older adult's abuse (Mass. Gen. Laws ch. 119, § 51A(a); ch. 19A, § 15).
```

Supporting quotes (each section read whole; read 2026-11-06):

- Mass. Gen. Laws ch. 268, § 40, https://malegislature.gov/Laws/GeneralLaws/PartIV/TitleI/Chapter268/Section40, read 2026-11-06:
  - 'Section 40. Whoever knows that another person is a victim of aggravated rape, rape, murder, manslaughter or armed robbery and is at the scene of said crime shall, to the extent that said person can do so without danger or peril to himself or others, report said crime to an appropriate law enforcement official as soon as reasonably practicable. Any person who violates this section shall be punished by a fine of not less than five hundred nor more than two thousand and five hundred dollars.'
- Mass. Gen. Laws ch. 38, § 3, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleVI/Chapter38/Section3, read 2026-11-06:
  - 'Section 3. It shall be the duty of any person having knowledge of a death which occurs under the circumstances enumerated in this paragraph immediately to notify the office of the chief medical examiner, or the medical examiner designated to the location where the death has occurred,'
  - '(16) any person found dead;'
  - 'A physician, police officer, hospital administrator, licensed nurse, department of children and families social worker, or licensed funeral director, within the commonwealth, who, having knowledge of such an unreported death, fails to notify the office of the chief medical examiner of such death shall be punished by a fine of not more than five hundred dollars.'
- Mass. Gen. Laws ch. 119, § 51A; ch. 19A, § 15, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXVII/Chapter119/Section51A, read 2026-11-06:
  - '(a) A mandated reporter shall immediately communicate with the department orally (ch. 119, § 51A(a); only subsection (a) relied on)'
  - '(c) In addition to a person required to report under the provisions of subsection (a) of this section, any other person may make such a report (ch. 19A, § 15(c), https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter19A/Section15)'

### `edu-rental-registration-licensing-ma`

Verdict: FIX. Omits foreign-entity registration (ownership or leasing of MA real estate is transacting business; suit bar) and the business-certificate (d/b/a) duty.

old_str:
```
and no rule making registration a condition of eviction.
```
new_str:
```
and no rule making a rental registration a condition of eviction.
```

old_str:
```
Many cities add their own rules.
```
new_str:
```
Many cities add their own rules. Two general business filings also apply. An out-of-state corporation or LLC that owns or leases real estate here must, within 10 days, file with the Secretary of the Commonwealth, naming an agent in Massachusetts, and cannot maintain an eviction or other court case until it does (Mass. Gen. Laws ch. 156D, §§ 15.01(b)(1), 15.02(a) and 15.03; ch. 156C, §§ 48 and 54(a); see `edu-absentee-owner-contact-ma`). And anyone renting under a name other than their own must file a business certificate with the city or town clerk, renewed every four years, or face a fine of up to $300 a month (Mass. Gen. Laws ch. 110, § 5).
```

Supporting quotes (each section read whole; read 2026-11-06):

- Mass. Gen. Laws ch. 156D, §§ 15.01, 15.03, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156D/Section15.01, read 2026-11-06:
  - '(a) A foreign corporation that transacts business or has a usual place of business in the commonwealth shall deliver the certificate required by section 15.03 to the secretary of state for filing.'
  - '(b) The following activities, among others, do constitute transacting business within the meaning of subsection (a): (1) the ownership or leasing of real estate in the commonwealth;'
  - '(a) A foreign corporation shall, not later than 10 days after it commences transacting business in the commonwealth, deliver to the secretary of state for filing a certificate setting forth: ... (5) the address of its registered office in the commonwealth, the name of its registered agent at that office (§ 15.03, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156D/Section15.03)'
- Mass. Gen. Laws ch. 156D, §§ 15.02, 15.10, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156D/Section15.02, read 2026-11-06:
  - '(a) A foreign corporation transacting business in the commonwealth without delivering to the secretary of state for filing the certificate required by section 15.03 shall not maintain a proceeding in any court in the commonwealth until the certificate is delivered and filed.'
  - '(e) Notwithstanding subsections (a) and (b), the failure of a foreign corporation to deliver to the secretary of state for filing the certificate required by section 15.03 shall not impair the validity of its corporate acts or prevent it from defending any proceeding in the commonwealth, or affect the validity of any contract entered into by the foreign corporation.'
  - '(b) Every foreign corporation doing business in the commonwealth which has not complied with section 15.03 ... shall be deemed to have appointed the secretary of state and his successor in office to be its true and lawful attorney upon whom all lawful process in any action or proceeding may be served (§ 15.10, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156D/Section15.10)'
- Mass. Gen. Laws ch. 156C, §§ 48, 54, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156C/Section54, read 2026-11-06:
  - 'A foreign limited liability company shall be considered to be doing business in the commonwealth for the purpose of this section if it would be considered to be doing business in the commonwealth for the purpose of Part 15 of subdivision A of chapter 156D if it were a foreign corporation. Every foreign limited liability company doing business in the commonwealth shall submit to the state secretary, within ten days after it commences doing business in the commonwealth, an application for registration as a foreign limited liability company, (§ 48, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter156C/Section48)'
  - '(7) the name and address of its resident agent and the agent's written consent, either on the certificate or attached to it, to his appointment as agent; (§ 48)'
  - 'Section 54. (a) A foreign limited liability company doing business in the commonwealth which fails to register with the state secretary shall, for each year that such failure shall continue, be fined not more than five hundred dollars. No such failure shall affect the validity of any contract involving the foreign limited liability company, nor is a member or a manager of a foreign limited liability company liable for the obligations of the foreign limited liability company solely by reason of such failure, but no action shall be maintained or recovery had by the foreign limited liability company in any of the courts of the commonwealth as long as such failure continues.'
  - 'Every foreign limited liability company doing business in the commonwealth without having registered as prescribed in this chapter, ... shall be deemed to have appointed the state secretary to be its true and lawful attorney upon whom all process in any action or proceeding may be served (§ 54(b))'
- Mass. Gen. Laws ch. 110, § 5, https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter110/Section5, read 2026-11-06:
  - 'Section 5. Any person conducting business in the commonwealth under any title other than the real name of the person conducting the business, whether individually or as a partnership, shall file in the office of the clerk of every city or town where an office of any such person or partnership may be situated a certificate'
  - 'A certificate issued in accordance with this section shall be in force and effect for four years from the date of issue and shall be renewed each four years thereafter'
  - 'Violations of this section shall be punished by a fine of not more than three hundred dollars for each month during which such violation continues.'
  - 'Read whole: no bar on suing.'

### `edu-confirmed-absences-outside-title-ct`

Verdict: FIX. Item (2) omits that a foreign LLC or corporation transacting business may not maintain a proceeding until registered/authorized (owning property without more is not transacting business, so renting is a case-law question), and the trade-name certificate duty (fine/jail; no suit bar).

old_str:
```
and failing to file is an infraction, not a bar to eviction.
```
new_str:
```
and failing to file is an infraction, not a bar to eviction. Business filings are different: an out-of-state limited liability company or corporation transacting business in Connecticut may not maintain a court case, an eviction included, until it registers with, or obtains a certificate of authority from, the Secretary of the State; owning property, without more, is not transacting business, so whether renting it out is depends on the facts and case law (Conn. Gen. Stat. §§ 34-275a(b), 34-275d(a)(10), 33-920(b)(9) and 33-921(a)). And renting under a name other than your own requires a trade name certificate from the town clerk, on pain of a fine of up to $500 or up to 1 year in prison, though the statute sets no bar on suing (Conn. Gen. Stat. §§ 35-1a(a) and 35-1d(d)).
```

Supporting quotes (each section read whole; read 2026-11-06):

- Conn. Gen. Stat. §§ 34-275a, 34-275d, https://www.cga.ct.gov/current/pub/chap_613a.htm, read 2026-11-06:
  - '(a) A foreign limited liability company may not transact business in this state until it registers with the Secretary of the State under sections 34-275 to 34-275i, inclusive.'
  - '(b) A foreign limited liability company transacting business in this state may not maintain an action or proceeding in this state unless it is registered to transact business in this state.'
  - '(c) The failure of a foreign limited liability company to register to transact business in this state does not impair the validity of a contract or act of the company, or preclude it from defending an action or proceeding in this state.'
  - '(f) A foreign limited liability company, by transacting business in this state without a foreign registration certificate, appoints the Secretary of the State as its agent for service of process with respect to a cause of action arising out of the transaction of business in this state.'
  - 'A foreign limited liability company is further liable to this state, for each month or part thereof during which it transacted business in this state without a valid foreign registration certificate, in an amount equal to three hundred dollars, except that a foreign limited liability company which has registered with the Secretary of the State not later than ninety days after it has commenced transacting business in this state shall not be liable for such monthly penalty.'
  - '(10) Owning, without more, property; (§ 34-275d(a))'
- Conn. Gen. Stat. §§ 33-920, 33-921, 33-922, https://www.cga.ct.gov/current/pub/chap_601.htm, read 2026-11-06:
  - '(a) A foreign corporation, other than an insurance, surety or indemnity company, may not transact business in this state until it obtains a certificate of authority from the Secretary of the State.'
  - '(9) owning, without more, real or personal property; (§ 33-920(b))'
  - '(a) A foreign corporation transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority. (§ 33-921)'
  - 'A foreign corporation is further liable to this state, for each month or part thereof during which it transacted business without a certificate of authority, in an amount equal to three hundred dollars, except that a foreign corporation which has obtained a certificate of authority not later than ninety days after it has commenced transacting business in this state shall not be liable for such monthly penalty. (§ 33-921(d))'
  - '(5) the address of its registered office in this state and the name of its registered agent at that office; (§ 33-922(a))'
- Conn. Gen. Stat. §§ 35-1a, 35-1d, https://www.cga.ct.gov/current/pub/chap_620.htm, read 2026-11-06:
  - '(a) No person shall transact business in this state under any assumed or fictitious name, or under any designation, name or style, corporate or otherwise, other than the real name or names of the person or persons transacting such business, unless a trade name certificate has been issued in accordance with this section or section 35-1b.'
  - '(b) An application for a trade name certificate shall be filed on a form prescribed by the Secretary of the State in the office of the town clerk in the town in which such business is, or will be, principally transacted.'
  - '(d) Any person transacting business in violation of the provisions of sections 35-1a to 35-1e, inclusive, shall be fined not more than five hundred dollars, imprisoned not more than one year, or both. (§ 35-1d; §§ 35-1a to 35-1e read whole: no bar on suing; old § 35-1 repealed effective January 1, 2025)'

### `edu-landlord-registration-ct`

Verdict: FIX. Omits the trade-name certificate (§ 35-1a, fine/jail) and foreign-entity registration with its suit bar.

old_str:
```
so check local ordinances.
```
new_str:
```
so check local ordinances. Two general business filings can also apply. If you rent under a name other than your own legal name, you need a trade name certificate from the town clerk where the business is principally transacted, or face a fine of up to $500 or up to 1 year in prison (Conn. Gen. Stat. §§ 35-1a and 35-1d(d)). And an out-of-state LLC or corporation transacting business here must register with, or get a certificate of authority from, the Secretary of the State, or it cannot maintain an eviction (Conn. Gen. Stat. §§ 34-275a and 33-921; see `edu-nonresident-landlord-process-agent-ct`).
```

Supporting quotes (each section read whole; read 2026-11-06):

- Conn. Gen. Stat. §§ 35-1a, 35-1d, https://www.cga.ct.gov/current/pub/chap_620.htm, read 2026-11-06:
  - '(a) No person shall transact business in this state under any assumed or fictitious name, or under any designation, name or style, corporate or otherwise, other than the real name or names of the person or persons transacting such business, unless a trade name certificate has been issued in accordance with this section or section 35-1b.'
  - '(b) An application for a trade name certificate shall be filed on a form prescribed by the Secretary of the State in the office of the town clerk in the town in which such business is, or will be, principally transacted.'
  - '(d) Any person transacting business in violation of the provisions of sections 35-1a to 35-1e, inclusive, shall be fined not more than five hundred dollars, imprisoned not more than one year, or both. (§ 35-1d; §§ 35-1a to 35-1e read whole: no bar on suing; old § 35-1 repealed effective January 1, 2025)'
- Conn. Gen. Stat. §§ 34-275a, 34-275d, https://www.cga.ct.gov/current/pub/chap_613a.htm, read 2026-11-06:
  - '(a) A foreign limited liability company may not transact business in this state until it registers with the Secretary of the State under sections 34-275 to 34-275i, inclusive.'
  - '(b) A foreign limited liability company transacting business in this state may not maintain an action or proceeding in this state unless it is registered to transact business in this state.'
  - '(c) The failure of a foreign limited liability company to register to transact business in this state does not impair the validity of a contract or act of the company, or preclude it from defending an action or proceeding in this state.'
  - '(f) A foreign limited liability company, by transacting business in this state without a foreign registration certificate, appoints the Secretary of the State as its agent for service of process with respect to a cause of action arising out of the transaction of business in this state.'
  - 'A foreign limited liability company is further liable to this state, for each month or part thereof during which it transacted business in this state without a valid foreign registration certificate, in an amount equal to three hundred dollars, except that a foreign limited liability company which has registered with the Secretary of the State not later than ninety days after it has commenced transacting business in this state shall not be liable for such monthly penalty.'
  - '(10) Owning, without more, property; (§ 34-275d(a))'
- Conn. Gen. Stat. §§ 33-920, 33-921, 33-922, https://www.cga.ct.gov/current/pub/chap_601.htm, read 2026-11-06:
  - '(a) A foreign corporation, other than an insurance, surety or indemnity company, may not transact business in this state until it obtains a certificate of authority from the Secretary of the State.'
  - '(9) owning, without more, real or personal property; (§ 33-920(b))'
  - '(a) A foreign corporation transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority. (§ 33-921)'
  - 'A foreign corporation is further liable to this state, for each month or part thereof during which it transacted business without a certificate of authority, in an amount equal to three hundred dollars, except that a foreign corporation which has obtained a certificate of authority not later than ninety days after it has commenced transacting business in this state shall not be liable for such monthly penalty. (§ 33-921(d))'
  - '(5) the address of its registered office in this state and the name of its registered agent at that office; (§ 33-922(a))'

### `edu-no-crime-free-lease-statute-ct`

Verdict: FIX. Omits the any-person duty to notify the Chief Medical Examiner of violent/sudden/suspicious deaths and not disturb the scene (§ 19a-407; fine up to $500 or up to 1 year). Child and elder abuse reporting confirmed mandated-only.

old_str:
```
Use this library's optional serious-nuisance clause rather than a separate crime-free addendum.
```
new_str:
```
Use this library's optional serious-nuisance clause rather than a separate crime-free addendum. One general reporting duty does bind you as it binds anyone: law enforcement officers, physicians and other persons must promptly notify the Office of the Chief Medical Examiner of any violent, sudden and unexpected, or suspicious death that comes to their attention, as when a tenant is found dead in a unit, and in an apparent homicide or suicide, or an accidental death of obscure cause, the scene must be left undisturbed until the medical examiner authorizes otherwise; a wilful failure carries a fine of up to $500, up to 1 year in prison, or both (Conn. Gen. Stat. §§ 19a-406(a) and 19a-407). Reporting child or elder abuse is mandatory only for listed professionals, though anyone may report suspected child abuse (Conn. Gen. Stat. §§ 17a-101a, 17a-103(a) and 17b-451).
```

Supporting quotes (each section read whole; read 2026-11-06):

- Conn. Gen. Stat. §§ 19a-406, 19a-407, https://www.cga.ct.gov/current/pub/chap_368q.htm, read 2026-11-06:
  - '(a) All law enforcement officers, state's attorneys, prosecuting attorneys, employees of the Department of Correction, other officials, physicians, funeral directors, embalmers and other persons shall promptly notify the Office of the Chief Medical Examiner of any death coming to their attention which is subject to investigation by the Chief Medical Examiner under this chapter,'
  - '(b) In cases of apparent homicide or suicide, or of accidental death, the cause of which is obscure, or any other death, not clearly the result of natural causes, that occurs while the deceased person is in the custody of a peace officer or a law enforcement agency or the Commissioner of Correction, the scene of the event shall not be disturbed until authorized by the Chief Medical Examiner or his or her authorized representative.'
  - '(d) Any person who wilfully fails to comply with any provision of this section shall be fined not more than five hundred dollars or imprisoned not more than one year, or both.'
  - '(1) Violent deaths, whether apparently homicidal, suicidal or accidental, ... (2) sudden or unexpected deaths not caused by readily recognizable disease; (3) deaths under suspicious circumstances; (§ 19a-406(a))'
- Conn. Gen. Stat. §§ 17a-101a, 17a-103, 17b-451, https://www.cga.ct.gov/current/pub/chap_319a.htm, read 2026-11-06:
  - '(a)(1) Any mandated reporter, as described in section 17a-101, who in the ordinary course of such person's employment or profession has reasonable cause to suspect or believe (§ 17a-101a)'
  - '(a) Any mandated reporter acting outside his or her professional capacity and any other person having reasonable cause to suspect or believe that any child under the age of eighteen is in danger of being abused, or has been abused or neglected, as defined in section 46b-120, may cause a written, oral or electronic report to be made (§ 17a-103)'
  - '(a) A mandatory reporter who has reasonable cause to suspect or believe that any elderly person has been abused, (§ 17b-451, https://www.cga.ct.gov/current/pub/chap_319dd.htm)'

### `edu-nonresident-landlord-process-agent-ct`

Verdict: FIX. Correct as far as it goes, but omits that a nonresident individual owning CT real property is deemed to appoint the Secretary of the State for service (§ 52-59b(a)(4), (c)), and that an out-of-state LLC/corporation transacting business must register and cannot maintain an action until it does.

old_str:
```
You do not have to name an in-state agent in the lease, and tenants do not withhold tax from rent paid to you.
```
new_str:
```
You do not have to name an in-state agent in the lease, and tenants do not withhold tax from rent paid to you. Even without that written appointment, a nonresident individual who owns Connecticut real property is deemed to have appointed the Secretary of the State as agent for service of process in suits arising from it, so a tenant can sue you by serving the Secretary and mailing you a copy (Conn. Gen. Stat. § 52-59b(a)(4) and (c)). If you own through an out-of-state LLC or corporation that transacts business here, it must register with, or get a certificate of authority from, the Secretary of the State; until it does it cannot maintain an eviction or any other court case and owes $300 for each month unregistered after a 90-day grace period, and an unregistered LLC is treated as having appointed the Secretary as its agent for service. Owning property, without more, is not transacting business, so whether renting it out is depends on the facts and case law (Conn. Gen. Stat. §§ 34-275a, 34-275d(a)(10), 33-920(b)(9) and 33-921).
```

Supporting quotes (each section read whole; read 2026-11-06):

- Conn. Gen. Stat. § 52-59b, https://www.cga.ct.gov/current/pub/chap_896.htm, read 2026-11-06:
  - '(4) owns, uses or possesses any real property situated within the state;'
  - '(c) Any nonresident individual, foreign partnership or foreign voluntary association, or the executor or administrator of such nonresident individual, foreign partnership or foreign voluntary association, over whom a court may exercise personal jurisdiction, as provided in subsection (a) of this section, shall be deemed to have appointed the Secretary of the State as its attorney and to have agreed that any process in any civil action brought against the nonresident individual, foreign partnership or foreign voluntary association, or the executor or administrator of such nonresident individual, foreign partnership or foreign voluntary association, may be served upon the Secretary of the State'
  - 'and by sending to the defendant at the defendant's last-known address, by registered or certified mail, postage prepaid, return receipt requested, a like true and attested copy'
- Conn. Gen. Stat. §§ 34-275a, 34-275d, https://www.cga.ct.gov/current/pub/chap_613a.htm, read 2026-11-06:
  - '(a) A foreign limited liability company may not transact business in this state until it registers with the Secretary of the State under sections 34-275 to 34-275i, inclusive.'
  - '(b) A foreign limited liability company transacting business in this state may not maintain an action or proceeding in this state unless it is registered to transact business in this state.'
  - '(c) The failure of a foreign limited liability company to register to transact business in this state does not impair the validity of a contract or act of the company, or preclude it from defending an action or proceeding in this state.'
  - '(f) A foreign limited liability company, by transacting business in this state without a foreign registration certificate, appoints the Secretary of the State as its agent for service of process with respect to a cause of action arising out of the transaction of business in this state.'
  - 'A foreign limited liability company is further liable to this state, for each month or part thereof during which it transacted business in this state without a valid foreign registration certificate, in an amount equal to three hundred dollars, except that a foreign limited liability company which has registered with the Secretary of the State not later than ninety days after it has commenced transacting business in this state shall not be liable for such monthly penalty.'
  - '(10) Owning, without more, property; (§ 34-275d(a))'
- Conn. Gen. Stat. §§ 33-920, 33-921, 33-922, https://www.cga.ct.gov/current/pub/chap_601.htm, read 2026-11-06:
  - '(a) A foreign corporation, other than an insurance, surety or indemnity company, may not transact business in this state until it obtains a certificate of authority from the Secretary of the State.'
  - '(9) owning, without more, real or personal property; (§ 33-920(b))'
  - '(a) A foreign corporation transacting business in this state without a certificate of authority may not maintain a proceeding in any court in this state until it obtains a certificate of authority. (§ 33-921)'
  - 'A foreign corporation is further liable to this state, for each month or part thereof during which it transacted business without a certificate of authority, in an amount equal to three hundred dollars, except that a foreign corporation which has obtained a certificate of authority not later than ninety days after it has commenced transacting business in this state shall not be liable for such monthly penalty. (§ 33-921(d))'
  - '(5) the address of its registered office in this state and the name of its registered agent at that office; (§ 33-922(a))'

## Open case-law questions (not researched)

- MD: whether renting out property is "doing intrastate business" for a foreign corporation (Corps. & Ass'ns § 7-301); for LLCs § 4A-1009(b) settles it for income-producing property. Maryland has no misprision statute (common-law status not checked).
- DE, DC: whether renting out property is "doing business" for the foreign-LLC and foreign-corporation suit bars (6 Del. C. § 18-907, 8 Del. C. § 383, D.C. Code § 29-105.02(b)); neither statute's exclusion list mentions it.
- CT: whether renting is more than "owning, without more" (Conn. Gen. Stat. §§ 33-920(b)(9), 34-275d(a)(10)); the § 52-59b annotations (303 C. 737, a paid lodging host transacts business) suggest it can be, for long-arm purposes.
- MA: none for entities (ch. 156D, § 15.01(b)(1) names "the ownership or leasing of real estate"). Whether ch. 110, § 5 reaches an individual renting under a name is not tested in case law here.
- MD trade name: no suit bar in Corps. & Ass'ns § 1-406; whether any other Maryland statute bars an unregistered trade-name user from suing was not searched beyond §§ 1-406 and 1-406.1 (the latter does not exist).

## Sources not reached

- None of the official sites refused. cga.ct.gov was fetched with verification on, adding the GoDaddy Secure Certificate Authority - G2 intermediate named in the site's certificate (AIA http://certificates.godaddy.com/repository/gdig2.crt; SHA-256 97:3A:41:27:6F:FD:01:E0:27:A2:AA:D4:9E:34:C3:78:46:D3:E9:76:FF:6A:62:0B:67:12:E3:38:32:04:1A:A6).
- Not read (not needed for these edits): Mass. Gen. Laws ch. 119, § 51A beyond subsection (a); Conn. Gen. Stat. § 34-275b (contents of the LLC registration certificate, so the CT edits do not claim it names a registered agent); D.C. Code § 4-1321.02 beyond the mandatory-reporter list (it includes "A public housing resident manager", relevant only to public housing).
- Not checked: tax withholding on rent, local ordinances, federal law, regulations.

## Summary

1. 20 active rows checked; 1 holds (`edu-property-manager-licensing-md`), 15 FIX, 4 ERROR (`edu-no-nonresident-owner-agent-md`, `edu-no-nonresident-owner-agent-de`, `edu-nonresident-owner-agent-dc`, `edu-absentee-owner-contact-ma`); 2 new titles (MD, DE nonresident rows).
2. Foreign-entity registration and suit bars exist in all five jurisdictions; MD (LLCs owning income-producing property) and MA (corporations and LLCs owning or leasing real estate) say by statute that renting landlords are covered; DE, DC and CT leave renting to case law (CT says owning alone is not enough).
3. Trade-name suit bar exists only in DC (§ 47-2855.03(d)); MD, DE, MA and CT require filing (DE, MA, CT with fines or jail) but bar no suit.
4. Deemed service on a state official: unregistered foreign entities everywhere (MD, DE, DC via the Mayor, MA, CT LLCs), plus CT nonresident individuals owning real property (§ 52-59b(c)).
5. Any-person reporting: MD child abuse (no penalty for non-professionals); DE child abuse (civil penalty), impaired adults, deaths (criminal); DC child sexual abuse ($300) and deaths (misdemeanor); MA witnessed violent crimes (fine) and deaths (fine only for professionals); CT deaths (fine or jail).
