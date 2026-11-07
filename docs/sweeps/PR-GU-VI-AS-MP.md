# Sweep 2: general-statute misses in PR, GU, VI, AS, MP

Checked 2026-11-06. Library file: ~/property-manager-landlord-app/lease-clauses.csv (not edited). Rows checked: every active row with topic_key nonresident-owner-agent, landlord-registration, law-enforcement-cooperation or confirmed-absences-outside-title whose id ends -pr, -gu, -vi, -as or -mp (20 rows):

- `edu-confirmed-absences-outside-title-pr` (confirmed-absences-outside-title): Checked Across All of Puerto Rico Law
- `edu-landlord-registration-pr` (landlord-registration): Registration and Licenses for Puerto Rico Landlords
- `edu-nonresident-owner-pr` (nonresident-owner-agent): Owners Who Live Outside Puerto Rico
- `edu-law-enforcement-cooperation-pr` (law-enforcement-cooperation): Police Cooperation and Crime-Free Leases in Puerto Rico
- `edu-landlord-registration-gu` (landlord-registration): Business Licenses for Rentals in Guam
- `edu-confirmed-absences-outside-title-gu` (confirmed-absences-outside-title): Checked Across All of Guam Law
- `edu-no-nonresident-owner-agent-gu` (nonresident-owner-agent): No Nonresident-Owner Agent Rule
- `edu-no-law-enforcement-cooperation-rule-gu` (law-enforcement-cooperation): No Crime-Free Lease or Police-Cooperation Statute
- `edu-confirmed-absences-outside-title-vi` (confirmed-absences-outside-title): Checked Across All of Virgin Islands Law
- `edu-no-nonresident-owner-agent-vi` (nonresident-owner-agent): Owners Living Off-Island: No Local-Agent Rule in the Virgin Islands
- `edu-law-enforcement-cooperation-vi` (law-enforcement-cooperation): Police Calls, Crime-Free Leases and Cooperation in the Virgin Islands
- `edu-landlord-registration-vi` (landlord-registration): Business Licenses for Rentals in the Virgin Islands
- `edu-confirmed-absences-outside-title-as` (confirmed-absences-outside-title): Checked Across All of American Samoa Law
- `edu-landlord-registration-as` (landlord-registration): Business Licences and Guest-Worker Hosts in American Samoa
- `edu-nonresident-owner-agent-as` (nonresident-owner-agent): Owners Living Off-Island (American Samoa)
- `edu-law-enforcement-cooperation-as` (law-enforcement-cooperation): Police Calls, Crime-Free Leases and Cooperation in American Samoa
- `edu-confirmed-absences-outside-title-mp` (confirmed-absences-outside-title): Checked Across All of Northern Mariana Islands Law
- `edu-landlord-registration-mp` (landlord-registration): Landlord Registration and Licences in the Northern Mariana Islands
- `edu-nonresident-owner-agent-mp` (nonresident-owner-agent): Off-Island Owners in the Northern Mariana Islands
- `edu-law-enforcement-cooperation-mp` (law-enforcement-cooperation): Police Cooperation and Crime-Free Terms in the Northern Mariana Islands

Sources fetched with curl, default headers, on 2026-11-06. Whole sections were read from text extracted with pdftotext (Guam, CNMI, PR) or from the asbar.org HTML pages (AS). Quotes are copied from that text; line-break hyphens are joined.

### `edu-confirmed-absences-outside-title-pr`

Verdict: ERROR. Item (3) says no registration is required before you can win an eviction except the student-housing licence. Ley 164-2009 bars a foreign corporation or foreign LLC that did business without the Department of State's authorization from bringing any proceeding until it is authorized and has paid what it owes (arts. 13.03(A), 20.05(A)). Trade-name registration is optional (Ley 75-1992, art. 4), so there is no fictitious-name gap. Notes to update: item (3) is no longer 'Confirmed absent'.

old_str:
```
and no general registration or licence is required before you can win an eviction, except that a student-housing business needs a DACO licence before it may lease at all.
```
new_str:
```
and no general registration or licence is required before you can win an eviction, except that a student-housing business needs a DACO licence before it may lease at all, and a corporation or limited liability company formed outside Puerto Rico that does business here must first obtain the Department of State's authorization (naming a resident agent) and may not bring any court case, an eviction included, until it is authorized and has paid the fees, penalties and franchise taxes owed for the time it did business without authorization. The missing authorization does not void its leases, and merely owning property is not doing business, so whether renting it out is depends on the facts (Ley 164-2009, arts. 13.01, 13.03, 13.05, 20.02, 20.05 (14 L.P.R.A. §§ 3801, 3803, 3805, 4022, 4025)). Registering a trade name with the Department of State is optional and does not affect your right to sue (Ley 75-1992, art. 4 (10 L.P.R.A. § 225b)).
```

Supporting quotes (all read 2026-11-06):

- Ley 164-2009, art. 13.01(B) (14 L.P.R.A. § 3801): 'Una corporación foránea no podrá hacer negocios en Puerto Rico directamente, o por medio de un agente o representante localizado en Puerto Rico, hasta tanto no pague al Secretario de Estado los derechos pagaderos establecidos en el Capítulo XVII de esta Ley y presente ante el Secretario de Estado los siguientes documentos:' [translation: 'A foreign corporation may not do business in Puerto Rico directly, or through an agent or representative located in Puerto Rico, until it pays the Secretary of State the fees set in Chapter XVII of this Act and files the following documents with the Secretary of State:'] (the list in (B)(2)(e) includes 'la dirección de su oficina designada en el Estado Libre Asociado y el nombre del agente residente en dicha oficina'). URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/Corporaciones%20Privadas/164-2009/164-2009.pdf
- Ley 164-2009, art. 13.03(A)-(B) (14 L.P.R.A. § 3803): 'Una corporación foránea a la cual se le exija cumplir con las disposiciones de los Artículos 13.01 y 13.07 de este Capítulo, y que haya realizado negocios en el Estado Libre Asociado sin autorización, no podrá incoar procedimiento alguno en los Tribunales del Estado Libre Asociado, hasta que dicha corporación haya sido autorizada a hacer negocios en esta jurisdicción y haya pagado al Estado Libre Asociado todos los derechos, penalidades e impuestos de franquicia por los años o fracciones de éstos durante los cuales la corporación hizo negocios en esta jurisdicción sin autorización.' [translation: 'A foreign corporation required to comply with Articles 13.01 and 13.07 that has done business in Puerto Rico without authorization may not bring any proceeding in the courts of Puerto Rico until it has been authorized to do business here and has paid all fees, penalties and franchise taxes for the years or parts of years in which it did business here without authorization.']; (B): the failure 'no menoscabará la validez de ningún contrato o acto de la corporación foránea, y no impedirá que la corporación foránea se defienda' [translation: 'shall not impair the validity of any contract or act of the foreign corporation, and shall not prevent it from defending']. URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/Corporaciones%20Privadas/164-2009/164-2009.pdf
- Ley 164-2009, art. 13.05(A)(9) (14 L.P.R.A. § 3805): not doing business: '9. ser titular, sin más, de bienes muebles o inmuebles;' [translation: 'owning, without more, movable or immovable property']. URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/Corporaciones%20Privadas/164-2009/164-2009.pdf
- Ley 164-2009, art. 20.02 (14 L.P.R.A. § 4022): 'Una compañía de responsabilidad limitada foránea no podrá hacer negocios en Puerto Rico hasta tanto no reciba autorización para hacerlo a tenor con los procedimientos dispuestos en el Capítulo XIII de esta Ley para las corporaciones foráneas.' [translation: 'A foreign limited liability company may not do business in Puerto Rico until it receives authorization under the Chapter XIII procedures for foreign corporations.']. URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/Corporaciones%20Privadas/164-2009/164-2009.pdf
- Ley 164-2009, art. 20.05(A)-(B) (14 L.P.R.A. § 4025): 'Una CRLF haciendo negocios en Puerto Rico no podrá comenzar acciones, demandas o procedimientos en Puerto Rico, hasta que se haya autorizado a hacer negocios y haya pagado a Puerto Rico todos los derechos, impuestos y penalidades por el período durante el cual realizó negocios en Puerto Rico sin haber estado autorizada.' [translation: 'A foreign LLC doing business in Puerto Rico may not commence actions, suits or proceedings in Puerto Rico until it has been authorized to do business and has paid all fees, taxes and penalties for the period it did business without authorization.']; (B)(1): no effect on 'La validez de cualquier contrato o acto de la CRLF'. URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/Corporaciones%20Privadas/164-2009/164-2009.pdf
- Ley 75-1992, art. 4 (10 L.P.R.A. § 225b): 'El registro del nombre comercial en el Departamento de Estado de Puerto Rico es potestativo y confiere a su titular el derecho exclusivo al uso en el tráfico económico en Puerto Rico.' [translation: 'Registration of a trade name with the Department of State is optional and gives the holder the exclusive right to use it in commerce in Puerto Rico.'] (OGP Rev. 15 de abril de 2024). URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/75-1992.pdf

### `edu-landlord-registration-pr`

Verdict: FIX. The row says there is no rule that an owner outside Puerto Rico must hire a local agent; that is right for individuals, but a foreign corporation or LLC must obtain Department of State authorization with a resident agent and cannot sue until authorized. Title stays true.

old_str:
```
and no rule that an owner living outside Puerto Rico must hire a local broker or agent.
```
new_str:
```
and no rule that an individual owner living outside Puerto Rico must hire a local broker or agent. An owner that is a corporation or limited liability company formed outside Puerto Rico is different: before doing business here it must obtain the Department of State's authorization and keep a resident agent in Puerto Rico, and until it is authorized it may not bring an eviction or any other court case (Ley 164-2009, arts. 13.01, 13.03, 20.02, 20.03, 20.05 (14 L.P.R.A. §§ 3801, 3803, 4022, 4023, 4025); see Owners Who Live Outside Puerto Rico).
```

Supporting quotes (all read 2026-11-06):

- Ley 164-2009, arts. 13.01(B), 13.03(A), 20.02, 20.05(A): as quoted under `edu-confirmed-absences-outside-title-pr`. URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/Corporaciones%20Privadas/164-2009/164-2009.pdf
- Ley 164-2009, art. 20.03(B) (14 L.P.R.A. § 4023): 'Toda corporación admitida a hacer negocios en el Estado Libre Asociado mantendrá de manera continua una oficina designada y un agente residente en el Estado Libre Asociado cumpliendo con lo dispuesto en el Artículo 13.10 de esta Ley, en relación a las corporaciones foráneas.' [translation: 'Every corporation admitted to do business in Puerto Rico shall continuously maintain a designated office and a resident agent in Puerto Rico in compliance with Article 13.10 on foreign corporations.'] (printed in the foreign-LLC chapter; says 'corporación' as printed). URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/Corporaciones%20Privadas/164-2009/164-2009.pdf

### `edu-nonresident-owner-pr`

Verdict: FIX. The row says Puerto Rico does not require a nonresident owner to register an agent; for a foreign corporation or LLC owner that is wrong (authorization, resident agent, bar on suits, deemed appointment of the Secretary of State for service). Title stays true.

old_str:
```
Puerto Rico does not require an owner who lives outside Puerto Rico to name a local agent in the lease, to register an agent, or to hire a Puerto Rico broker;
```
new_str:
```
Puerto Rico does not require an individual owner who lives outside Puerto Rico to name a local agent in the lease, to register an agent, or to hire a Puerto Rico broker. An owner that is a corporation or limited liability company formed outside Puerto Rico must, before doing business here, obtain the Department of State's authorization and keep a resident agent here; until it is authorized and has paid the fees, penalties and taxes owed for the unauthorized period it may not bring an eviction or other court case, though its leases stay valid; and while it does business here without authorization it is treated as having appointed the Secretary of State to receive service of process in suits arising from that business. Merely owning property is not doing business, so whether renting it out is depends on the facts (Ley 164-2009, arts. 13.01, 13.03, 13.05, 13.13, 20.02, 20.03, 20.05, 20.08 (14 L.P.R.A. §§ 3801, 3803, 3805, 3813, 4022, 4023, 4025, 4028)). Either way,
```

Supporting quotes (all read 2026-11-06):

- Ley 164-2009, arts. 13.01(B), 13.03, 13.05(A)(9), 20.02, 20.03(B), 20.05: as quoted under the two rows above. URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/Corporaciones%20Privadas/164-2009/164-2009.pdf
- Ley 164-2009, art. 13.13(A) (14 L.P.R.A. § 3813): 'Se entenderá que toda corporación foránea que haga negocios en el Estado Libre Asociado sin obtener autorización conforme al Artículo 13.01 de esta Ley, habrá designado y constituido al Secretario de Estado como su agente para recibir emplazamientos en caso de cualquier acción, demanda o procedimiento en su contra ante cualquier Tribunal del Estado Libre Asociado que surgiere o se desarrollare de cualquier negocio que llevare a cabo en el Estado Libre Asociado.' [translation: 'Every foreign corporation doing business in Puerto Rico without authorization under Article 13.01 shall be deemed to have designated the Secretary of State as its agent to receive service of process in any action against it in a Puerto Rico court arising from business it carried on in Puerto Rico.'] (13.13(B): art. 13.05 does not apply to this service rule). URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/Corporaciones%20Privadas/164-2009/164-2009.pdf
- Ley 164-2009, art. 20.08 (14 L.P.R.A. § 4028): 'El emplazamiento de una CRLF que haga negocios en Puerto Rico sin obtener autorización, conforme a lo dispuesto en esta Ley, será emplazada conforme a lo dispuesto en el Artículo 13.13 de esta Ley para las corporaciones foráneas.' [translation: 'A foreign LLC doing business in Puerto Rico without authorization shall be served under Article 13.13.']. URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/Corporaciones%20Privadas/164-2009/164-2009.pdf

### `edu-law-enforcement-cooperation-pr`

Verdict: ERROR. The row says no law requires you to give child-protection investigators information about your tenants. Ley 57-2023 art. 6 requires every person to report suspected child maltreatment to the Department of the Family or the Police, with criminal penalties (arts. 51, 51-A). The row also misses the any-person duties to report elder maltreatment (Ley 121-2019 art. 18; no penalty found) and violent or unexplained deaths (Ley 135-2020 art. 16, a misdemeanour). Notes to update: the 'Confirmed absent' list.

old_str:
```
No law requires you to join a crime-free housing programme, to give police or child-protection investigators information about your tenants or access to their homes, or to evict after police calls, and none limits a lease penalty for a tenant who calls the police or emergency services. Two rules touch the subject.
```
new_str:
```
No law requires you, as a landlord, to join a crime-free housing programme, to give police or child-protection investigators access to your tenants' homes, or to evict after police calls, and none limits a lease penalty for a tenant who calls the police or emergency services. But the reporting duties Puerto Rico puts on every person bind you and your staff. Anyone who knows or suspects that a child is being maltreated or neglected, or is at risk of it, must report it immediately to the Department of the Family's maltreatment hotline, to the Police or at a Department office, and a wilful and knowing failure to report is a misdemeanour, or a felony with a fixed two-year prison term where sexual abuse of the child is known or suspected (Ley 57-2023, arts. 6, 51, 51-A (8 L.P.R.A. §§ 1653, 1732, 1732a)). Anyone who knows or suspects that an older adult is being maltreated must report it to the Department of the Family's Special Investigations Unit, the Office of the Ombudsman for the Elderly, the Police and the Bureau of Special Investigations (Ley 121-2019, art. 18 (8 L.P.R.A. § 1528)). And anyone who learns of a death from a crime, an accident, violence, poisoning, suicide or drug intoxication, or of a sudden and unexpected death, as when a tenant is found dead in a unit, must report it immediately to the Police or to a judge or prosecutor, and may not touch or move the body, its clothing or objects near it without written permission; a wilful failure to report, or disturbing the scene, is a misdemeanour (Ley 135-2020, arts. 9, 16 (34 L.P.R.A. §§ 3051, 3058)). Two other rules touch the subject.
```

Supporting quotes (all read 2026-11-06):

- Ley 57-2023, art. 6(a) (8 L.P.R.A. § 1653): 'Toda persona estará obligada a informar inmediatamente al Departamento, a través de la Línea Directa de Maltrato del Departamento, a la Policía de Puerto Rico o en una oficina del Departamento, aquellos casos donde exista o se sospeche que existe una situación de maltrato, maltrato institucional, negligencia o negligencia institucional hacia un menor o que existe el riesgo de que un menor sea víctima de dicha situación.' [translation: 'Every person shall be obliged to report immediately to the Department, through its Maltreatment Hotline, to the Puerto Rico Police or at a Department office, cases where maltreatment, institutional maltreatment, neglect or institutional neglect of a minor exists or is suspected, or where there is a risk that a minor will be a victim of it.'] (OGP Rev. 25 de agosto de 2026, includes Ley 164-2026). URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/57-2023.pdf
- Ley 57-2023, art. 51 (8 L.P.R.A. § 1732): 'Cualquier persona, funcionario o institución pública o privada obligada a suministrar información y que voluntariamente y a sabiendas deje de cumplir dicha obligación ... incurrirá en delito menos grave' [translation: 'Any person, official or public or private institution obliged to provide information who wilfully and knowingly fails to do so ... commits a misdemeanour']. URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/57-2023.pdf
- Ley 57-2023, art. 51-A (8 L.P.R.A. § 1732a): 'En aquellos casos donde exista conocimiento o sospecha de abuso sexual contra un menor, cualquier persona o funcionario de institución pública o privada obligada a suministrar información conforme al Artículo 6 de esta Ley, y que voluntariamente y a sabiendas deje de cumplir dicha obligación ... incurrirá en delito grave. De ser convicta será sancionada con una pena fija de dos (2) años de reclusión.' [translation: 'Where sexual abuse of a minor is known or suspected, any person ... obliged to report under Article 6 who wilfully and knowingly fails to do so ... commits a felony and on conviction shall be sentenced to a fixed term of two (2) years.'] ([Enmiendas: Añadido por la Ley 164-2026]). URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/57-2023.pdf
- Ley 121-2019, art. 18 (8 L.P.R.A. § 1528): 'Cualquier persona que tuviere conocimiento o sospecha de que una persona adulta mayor es víctima de maltrato, maltrato institucional, maltrato por negligencia o maltrato por negligencia institucional informará tal hecho a través de la Unidad de Investigaciones Especiales (UIE) del Departamento de la Familia, a la Oficina del Procurador de las Persona de Edad Avanzada, a la Policía de Puerto Rico y al Negociado de Investigaciones Especiales del Departamento de Seguridad Pública en la forma que se dispone en esta Ley.' [translation: 'Any person who knows or suspects that an older adult is a victim of maltreatment ... shall report it through the Department of the Family's Special Investigations Unit, the Office of the Ombudsman for the Elderly, the Puerto Rico Police and the Bureau of Special Investigations of the Department of Public Safety.'] (OGP Rev. 20 de octubre de 2026; no penalty for this article was found in the law). URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/121-2019.pdf
- Ley 135-2020, art. 16(a)-(b) (34 L.P.R.A. § 3058): '(a) Toda persona que tuviere conocimiento de una muerte acaecida en cualesquiera de las circunstancias que se especifican en el Artículo 11 de esta Ley deberá informarlo inmediatamente al Negociado de la Policía de Puerto Rico o cualquier juez o fiscal, quien procederá a notificar al Instituto. La persona que descuidare, voluntariamente, notificar la muerte ocurrida en las circunstancias mencionadas incurrirá en delito menos grave. (b) Cualquier persona que, sin permiso escrito de las autoridades competentes, tocare, moviere o levantare el cuerpo de una persona muerta en tales circunstancias o tocare o moviere su ropa o cualquier objeto que estuviere en las cercanías del cuerpo, incurrirá en delito menos grave.' [translation: '(a) Any person who learns of a death in any of the circumstances in Article 11 shall report it immediately to the Police or any judge or prosecutor, who shall notify the Institute. A person who wilfully fails to report it commits a misdemeanour. (b) Any person who, without written permission of the competent authorities, touches, moves or lifts the body of a person who died in those circumstances, or touches or moves the clothing or any object near the body, commits a misdemeanour.'] (OGP Rev. 21 de julio de 2026. FLAG: the consolidation prints the same text twice, as art. 14 and art. 16 (both 34 L.P.R.A. § 3057/§ 3058); after Ley 43-2025 renumbered the articles, the circumstances list is art. 9 (34 L.P.R.A. § 3051), while arts. 14/16 still say 'Artículo 11'. The edit cites arts. 9 and 16; a sync should check the numbering.). URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/135-2020.pdf
- Ley 135-2020, art. 9(a) (34 L.P.R.A. § 3051): circumstances include '1. Como resultado de actos delictivos o que levanten sospecha de haberse cometido un delito.' ... '2. Como resultado de cualquier accidente o acto de violencia' ... '3. Como resultado de envenenamiento o sospecha de tal.' ... '6. Como resultado de intoxicación aguda con alcohol, narcóticos, o cualquier otra droga' ... '7. Cuando fuese por suicidio o sospecha de tal.' ... '9. Cuando ocurriere repentina o inesperadamente, mientras la persona gozaba de relativa o aparente buena salud.' [translation: deaths from criminal acts or suspected crime; any accident or act of violence; poisoning; acute alcohol or drug intoxication; suicide; sudden or unexpected death of a person in relative or apparent good health]. URL: https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/135-2020.pdf

### `edu-landlord-registration-gu`

Verdict: FIX. The row covers the business licence and its court-access bar but not Guam's fictitious-name statute, which requires a certificate within one month and bars suits on contracts made under the name until it is filed (18 GCA § 26103), and does not point to the foreign-entity rules.

old_str:
```
and anyone collecting rent for others for compensation generally needs a real estate broker's license.
```
new_str:
```
and anyone collecting rent for others for compensation generally needs a real estate broker's license. If you rent under a name other than your own, you must file a fictitious-name certificate with the Department of Revenue and Taxation within one month of starting, and until it is filed you can't sue on any lease or other contract made under that name (18 GCA §§ 26101, 26103). An owner that is a corporation or limited liability company formed outside Guam must also register or obtain a certificate of authority before doing business here, and can't maintain a case until it does (`edu-no-nonresident-owner-agent-gu`).
```

Supporting quotes (all read 2026-11-06):

- 18 GCA § 26101: 'Except as provided in the next section every person transacting business in Guam under a fictitious name and every partnership transacting business in Guam under a fictitious name, or a designation not showing the names of the persons interested as partners in such business, must file with the Director of Revenue and Taxation of Guam a certificate, stating the name in full and place of residence of such person and stating the names in full of all the members of such partnership and their places of residence.'. URL: https://col.guamcourts.gov/sites/default/files/18gc026.pdf
- 18 GCA § 26103: 'Where a business in hereafter commenced by a person under a fictitious name or a partnership is hereafter formed, the certificate must be filed within one month after the commencement of such business' ... 'No person doing business under a fictitious name, or his assignee or assignees, nor any persons doing business as partners contrary to the provisions of this Chapter, or their assignee or assignees, shall maintain any action upon or on account of any contracts made, or transactions had, under such fictitious name, or in their partnership name, in any court of Guam until the certificate has been filed and the publication has been made as herein required.' (the Compiler's COMMENT: 'Requirement for publication was repealed from § 26101.'). URL: https://col.guamcourts.gov/sites/default/files/18gc026.pdf

### `edu-confirmed-absences-outside-title-gu`

Verdict: FIX. Item (3) names only the business-license bar. Guam has two more bars on suing until a filing is made: the fictitious-name certificate (18 GCA § 26103) and foreign-entity registration (18 GCA §§ 7103, 7308, 7313).

old_str:
```
a person doing business without a required business license may not maintain a proceeding in any Guam court until it gets one (`edu-landlord-registration-gu`).
```
new_str:
```
a person doing business without a required business license may not maintain a proceeding in any Guam court until it gets one (`edu-landlord-registration-gu`). Two other filings work the same way: a landlord renting under a fictitious name can't sue on contracts made under that name until its fictitious-name certificate is filed, and a foreign limited liability company or corporation transacting business in Guam can't maintain a case until it has registered or obtained its certificate of authority (18 GCA §§ 26103, 7103, 7308, 7313; `edu-no-nonresident-owner-agent-gu`).
```

Supporting quotes (all read 2026-11-06):

- 18 GCA §§ 26103, 7103(a), 7308(a), 7313(a): as quoted under `edu-landlord-registration-gu` and `edu-no-nonresident-owner-agent-gu`. URL: https://col.guamcourts.gov/sites/default/files/18gc026.pdf and https://col.guamcourts.gov/sites/default/files/18gc007.pdf

### `edu-no-nonresident-owner-agent-gu`

Verdict: FIX. The row mentions only the registered-agent duty of an entity already authorized. It omits that a foreign LLC owning income-producing real property is transacting business (18 GCA § 7306(b)), must register before doing so, cannot maintain any case until registered, faces a daily penalty and is deemed to appoint the Department for service; and that a foreign corporation needs a business license and certificate of authority and cannot maintain a case without them. Title ('No Nonresident-Owner Agent Rule') stays accurate for residence-keyed rules, as in the MN row, so no new title.

old_str:
```
First, if you own through a corporation or limited liability company formed outside Guam and authorized to do business here, the entity must keep a registered office and a registered agent on Guam under the corporations law; that is company law, not a lease term.
```
new_str:
```
First, if you own through a corporation or limited liability company formed outside Guam, company law reaches you. A foreign limited liability company that owns income-producing real property in Guam is transacting business here, so it must obtain a certificate of registration from the Department of Revenue and Taxation, naming an agent for service of process, before it starts; until it is registered it may not maintain an eviction or any other case in a Guam court, it faces a penalty of $20 a day (up to $10,000), and it is treated as having appointed the Department as its agent for service of process on claims arising from its Guam business, though its leases stay valid (18 GCA §§ 7306(b), 7308, 7312, 7313). A foreign corporation needs both a business license and a certificate of authority before transacting business in Guam, must keep a registered office and registered agent here, and can't maintain a case until it has both; an unauthorized one is treated as having appointed the Director of Revenue and Taxation as its agent for service of process. Merely owning real property is not transacting business for a corporation, so whether renting it out is depends on the facts (18 GCA §§ 7102, 7103, 7108, 7113(e)). That is company law, not a lease term.
```

Supporting quotes (all read 2026-11-06):

- 18 GCA § 7306(b): 'For purposes of this Article, the ownership in this Guam of income-producing real property or tangible personal property, other than property excluded under Subsection (a), constitutes transacting business in Guam.' (printed 'in this Guam'). URL: https://col.guamcourts.gov/sites/default/files/18gc007.pdf
- 18 GCA § 7308(a), (b), (d): '(a) A foreign limited liability company transacting business in Guam shall not maintain any action, suit, or proceeding in any court of Guam until it has registered in Guam. (b) Any foreign limited liability company that transacts business in Guam without registration is subject to a penalty of Twenty Dollars ($20.00) for each day that unauthorized business is transacted, up to a maximum of Ten Thousand Dollars ($10,000.00).' ... '(d) A foreign limited liability company, transacting business in Guam without registration, appoints the Department of Revenue and Taxation as its agent for service of process with respect to causes of action arising out of the transaction of business in Guam.'. URL: https://col.guamcourts.gov/sites/default/files/18gc007.pdf
- 18 GCA § 7312: 'Before transacting business in Guam, a foreign limited liability company shall obtain a certificate of registration.' (the application states '(4) The name and address of the proposed agent for service of process on the foreign limited liability company.'). URL: https://col.guamcourts.gov/sites/default/files/18gc007.pdf
- 18 GCA § 7313(a)-(b): '(a) A foreign limited liability company transacting business in Guam may not maintain an action, or proceeding in Guam, unless it has a certificate of authority to transact business in Guam. (b) The failure of a foreign limited liability company to have a certificate of authority to transact business in Guam does not impair the validity of a contract, or act of the company, or prevent the foreign limited liability company from defending an action; or proceeding in Guam.'. URL: https://col.guamcourts.gov/sites/default/files/18gc007.pdf
- 18 GCA § 7102(a), (c)(9): '(a) A foreign corporation shall not transact business in Guam until it obtains both a business license and a certificate of authority to do so from the Director of the Department of Revenue and Taxation.' Not transacting business: '(9) owning, without more, real or personal property;'. URL: https://col.guamcourts.gov/sites/default/files/18gc007.pdf
- 18 GCA § 7103(a), (e): '(a) No foreign corporation transacting business on Guam without a business license and a certificate of authority shall be permitted to maintain any action, suit or proceeding in any court on Guam until it obtains both a business license and a certificate of authority to transact business on Guam.' '(e) ... the failure of a foreign corporation to obtain both a business license and a certificate of authority does not impair the validity of any contract, mortgage, deed or act of such corporation, and shall not prevent such corporation from defending any action, suit or proceeding in any courts of Guam.'. URL: https://col.guamcourts.gov/sites/default/files/18gc007.pdf
- 18 GCA § 7113(e): 'Every foreign corporation which transacts business on Guam without having been authorized to transact business on Guam thereby submits itself to the jurisdiction of the courts of Guam, and also thereby designates the Director of Revenue and Taxation as its agent upon whom any process, notice or demand upon it may be served in any action or proceeding arising out of or in connection with the transaction of business on Guam.'. URL: https://col.guamcourts.gov/sites/default/files/18gc007.pdf
- 18 GCA § 281501: 'The provisions of 18 Guam Code Annotated, Chapter 7, Part 3, Division 1, of the General Corporation Law of Guam shall apply to a foreign corporation governed by this Act.' (confirms ch. 7 governs foreign corporations under the Business Corporation Act). URL: https://col.guamcourts.gov/sites/default/files/18gc028.pdf

### `edu-no-law-enforcement-cooperation-rule-gu`

Verdict: FIX. The row is right that no crime-free or police-cooperation statute binds landlords, and Guam's child-abuse and elder-abuse reporting duties are tied to occupation (any person 'may' report). But the post-mortem statute requires 'other persons' to notify deaths the Office investigates and bars disturbing the scene, which a landlord who finds a tenant dead needs to know. Its penalty (§ 81107(b)) reaches only physicians, undertakers and embalmers, so the edit states no penalty.

old_str:
```
or bars a lease penalty for calling the police or emergency services.
```
new_str:
```
or bars a lease penalty for calling the police or emergency services. One general duty can reach you: physicians, undertakers, embalmers "and other persons" must promptly notify the Office of Post-Mortem Examinations of deaths that come to their attention and that the Office investigates (violent, sudden or suspicious deaths, among others), and in an apparent homicide or suicide, or an accidental death of unclear cause, the scene may not be disturbed until law enforcement authorizes it. So if a tenant is found dead in a unit, call the police at once and leave the unit as it is (10 GCA §§ 81104, 81107(a)). Guam's child-abuse and elder-abuse reporting duties fall on people who deal with children or elderly adults in their work, though anyone may report (19 GCA §§ 13201, 13202; 10 GCA § 21003).
```

Supporting quotes (all read 2026-11-06):

- 10 GCA § 81107(a)-(b): '(a) All law enforcement officers, prosecuting attorneys, and other officials shall cooperate fully with the Office of Post-Mortem Examinations in making the investigations and conducting the autopsies herein provided for. Such officials and all physicians, undertakers, embalmers and other persons shall promptly notify the Office of the occurrence of all deaths coming to their attention which under this Chapter are subject to investigation by the Office, and shall assist in making dead bodies and related evidence available to the Office for investigations and autopsies. In cases of apparent homicide or suicide, or of accidental death the cause of which is obscure, the scene of the event shall not be disturbed until authorization by the appropriate law enforcement officials. (b) Any physician, undertaker or embalmer who wilfully fails to comply with this Section shall be guilty of a violation.' (COL 2025-04-22). URL: https://col.guamcourts.gov/sites/default/files/10gc081.pdf
- 10 GCA § 81104: deaths investigated include '(a) Violent deaths, whether apparently homicidal, suicidal or accidental' ... '(b) Sudden deaths not caused by readily recognizable disease; (c) Deaths under suspicious circumstances;'. URL: https://col.guamcourts.gov/sites/default/files/10gc081.pdf
- 19 GCA §§ 13201(a), 13202: '(a) Any person who, in the course of his or her employment, occupation or practice of his or her profession, comes into contact with children shall report when he or she has reason to suspect on the basis of his medical, professional or other training and experience that a child is an abused or neglected child.' § 13202: 'In addition to those persons and officials required to report suspected child abuse or neglect, any person may make such report if that person has reasonable cause to suspect that a child is an abused or neglected child.'. URL: https://col.guamcourts.gov/sites/default/files/19gc013.pdf
- 10 GCA § 21003(a), (c): '(a) Any person who, in the course of his or her employment, occupation or professional practice comes into contact with elderly or adults with disabilities, has actual knowledge or reasonable cause to believe that an elderly or adult with a disability is suffering from or has died as a result of abuse ... shall immediately make a verbal report' ... '(c) In addition to persons required to report under Subsections (a) and (b), any other person may make such report to the Bureau of Adult Protective Services' (COL 2025-12-23). URL: https://col.guamcourts.gov/sites/default/files/10gc002.pdf

### `edu-confirmed-absences-outside-title-vi`

Verdict: HOLDS, NOT VERIFIED. Official text not reachable. The Virgin Islands Code is published only on LexisNexis (a JavaScript site, not used under the rules). The Legislature's act PDFs on billtracking.legvi.org are image scans with no text layer, and no OCR tool is installed here, so no whole section could be read. No edit. UNVERIFIED LEADS, official text unread; they could make item (3) false for entity landlords: (i) 13 V.I.C. § 2008 (as reproduced on law.justia.com, 2019 code), a foreign LLC transacting business may not maintain an action without a certificate of authority; (ii) 13 V.I.C. § 533 (Justia 2019), a corporation that has not paid its annual franchise tax may not commence or maintain an action; (iii) 13 V.I.C. ch. 1, subch. XIV (§§ 401 ff.), the foreign-corporation licence and its consequences. Also not checked: the trade-name chapter, 11 V.I.C. ch. 21 (§§ 1201-1213, per the bill titles for Bills 33-0030, 33-0192, 35-0084 on billtracking.legvi.org), for any bar on suits. Recommend the Lexis channel (Taylor's browser) for 13 V.I.C. §§ 401-411, 533, 2008 and 11 V.I.C. §§ 1201-1213.

### `edu-no-nonresident-owner-agent-vi`

Verdict: HOLDS, NOT VERIFIED. Official text not reachable. The Virgin Islands Code is published only on LexisNexis (a JavaScript site, not used under the rules). The Legislature's act PDFs on billtracking.legvi.org are image scans with no text layer, and no OCR tool is installed here, so no whole section could be read. No edit. The row already says company-law rules for an entity formed elsewhere apply 'not covered here'. Leads as for `edu-confirmed-absences-outside-title-vi` (13 V.I.C. §§ 401 ff., 2008; Justia, unofficial).

### `edu-law-enforcement-cooperation-vi`

Verdict: HOLDS, NOT VERIFIED. Official text not reachable. The Virgin Islands Code is published only on LexisNexis (a JavaScript site, not used under the rules). The Legislature's act PDFs on billtracking.legvi.org are image scans with no text layer, and no OCR tool is installed here, so no whole section could be read. No edit. The any-person reporting duties (child abuse, which from memory is around 5 V.I.C. § 2533, unverified; elder abuse; deaths reported to the medical examiner; witnessed crimes) were not checked against official text. Bill 36-0024 (Act No. 36-434 per billtracking) concerns a VIPD policy on mandatory reporting of suspected sexual assault and was not read.

### `edu-landlord-registration-vi`

Verdict: HOLDS, NOT VERIFIED. Official text not reachable. The Virgin Islands Code is published only on LexisNexis (a JavaScript site, not used under the rules). The Legislature's act PDFs on billtracking.legvi.org are image scans with no text layer, and no OCR tool is installed here, so no whole section could be read. No edit. Leads: the trade-name registration chapter (11 V.I.C. ch. 21) and foreign-entity licensing (13 V.I.C. §§ 401 ff., 2008), not read.

### `edu-confirmed-absences-outside-title-as`

Verdict: HOLDS. Item (3) concerns landlord registration as a precondition to a possession judgment. The foreign-corporation permit law (A.S.C.A. §§ 30.0305, 30.0314) imposes a daily forfeiture and a misdemeanor but no bar on suing that I found. The trade-name certificate is optional (A.S.C.A. § 27.0301, 'may obtain'). The row already flags the business-licence case note. No edit. Source caveat: American Samoa publishes no official code; the Bar Association's per-section pages on asbar.org were used, as the library does. Those pages are the Bar's 'Code Annotated by Title and Chapter', not the 'Updated August 2021' title files: that page's index iframe is broken (iframe1.html returns 404), so the LLC Act (A.S.C.A. ch. 30.06) could not be read.

Supporting quotes (all read 2026-11-06):

- A.S.C.A. § 27.0301: 'Any person desiring to secure the exclusive use of any print, label or trademark ... or a trade name, may obtain a certificate of the registration of the print, label, trademark, or trade name in the manner provided in this chapter.'. URL: https://asbar.org/code-annotated/27-0301-certificate-to-be-obtained/

### `edu-landlord-registration-as`

Verdict: FIX (minor). The row covers the business licence. A foreign corporation landlord also needs the Governor's permit before transacting any business; a cross-reference is added. Title stays true.

old_str:
```
is referred to the Commission for a hearing before a licence issues.
```
new_str:
```
is referred to the Commission for a hearing before a licence issues. A corporation formed outside American Samoa also needs a permit from the Governor before it transacts any business here (A.S.C.A. § 30.0305; `edu-nonresident-owner-agent-as`).
```

Supporting quotes (all read 2026-11-06):

- A.S.C.A. § 30.0305: 'No foreign corporation may transact any business in American Samoa without first procuring a permit from the Governor to do so.' (case note: 'Foreign corporation must procure a permit before transacting any business. ASG v. Salvage Pacific, Ltd. 1 A.S.R. 2d 98 (1983).', not read). URL: https://asbar.org/code-annotated/30-0305-permit-required/

### `edu-nonresident-owner-agent-as`

Verdict: FIX. The row mentions the foreign corporation's resident agent but not that it needs the Governor's permit before transacting any business, or the daily forfeiture and misdemeanor for doing business without one. No bar on suits was found. The LLC registered-agent statement already in the row (A.S.C.A. § 30.0615) could not be re-read (see sources not reached), so the LLC text is unchanged and its foreign-LLC suit rules, if any, are unverified.

old_str:
```
and a foreign corporation must name a resident agent for service of process.
```
new_str:
```
and a foreign corporation may not transact any business in American Samoa without first getting a permit from the Governor; its application must name a resident agent for service of process, and if that agent can't be found, process may be served through the Treasurer. A foreign corporation doing business without a permit forfeits $100 for each day, and an agent, officer or employee who knowingly transacts business for it commits a class C misdemeanor. We found no rule barring an unpermitted corporation from suing, and whether renting out property is transacting business is not settled (case law not searched) (A.S.C.A. §§ 30.0302(6), 30.0305, 30.0310, 30.0314).
```

Supporting quotes (all read 2026-11-06):

- A.S.C.A. § 30.0305: as quoted under `edu-landlord-registration-as`. URL: https://asbar.org/code-annotated/30-0305-permit-required/
- A.S.C.A. § 30.0302(6): the application statement includes '(6) a certified copy of the resolution of the Board of Directors of the corporation giving the name and address in American Samoa of a resident agent on whom process directed to such corporation may be served.'. URL: https://asbar.org/code-annotated/30-0302-application-contents/
- A.S.C.A. § 30.0310: 'If the agent required by paragraph (6) of 30.0302 cannot be found within American Samoa, service of process may be made upon the corporation through the Treasurer of American Samoa by sending the original and 2 copies to him, and on the original of which he shall accept service on behalf of the corporation.'. URL: https://asbar.org/code-annotated/30-0310-service-of-process/
- A.S.C.A. § 30.0314: '(a) Any foreign corporation that carries on its business in violation of the provisions of the sections enumerated on its permit to do business in American Samoa by its officers, agents, or otherwise, without having complied with the provisions of this chapter and having taken out and having a valid permit, shall forfeit and pay to the territory, for each and every day in which such business is transacted and carried on, the sum of $100 to be recovered by suit in any court having jurisdiction. (b) Any agent, officer, or employee who transacts any business for such foreign corporation knowing that it has no valid permit, as required by this section, shall be guilty of a class C misdemeanor, and for such offense shall be sentenced accordingly, and pay all costs of prosecution.'. URL: https://asbar.org/code-annotated/30-0314-violation-of-chapter-penalty/

### `edu-law-enforcement-cooperation-as`

Verdict: FIX. The row is right that no crime-free or cooperation statute exists, and the general child-abuse duty is limited to listed professionals (A.S.C.A. § 45.2002(b)). But two child-death reporting duties bind 'anyone', the dead-body rule bars moving a body, and lodging-house operators must report contagious disease. None states a penalty for the any-person limbs; § 45.2002(d) penalizes only subsection (a). The elder-abuse chapter (A.S.C.A. ch. 46.51) has no reporting duty.

old_str:
```
If your property is in a federally assisted program, VAWA bars evicting a victim because of violence committed against them.
```
new_str:
```
If your property is in a federally assisted program, VAWA bars evicting a victim because of violence committed against them. A few reporting duties bind anyone, landlords included: anyone with reasonable cause to suspect that a child died as a result of abuse or neglect must report it immediately to the Department, and anyone with reasonable cause to suspect that a child died as a result of human trafficking must report it immediately to the Department of Public Safety (A.S.C.A. §§ 45.2003, 46.5009). When a dead body is found, the village mayor (pulenuu) reports it to the Attorney General, and the body may not be moved until the Attorney General or the investigating officer arrives unless that is needed to prevent its loss or mutilation, so if a tenant is found dead, call the police and leave the body where it is (A.S.C.A. § 13.0520). If you run a boardinghouse or lodginghouse, you must immediately report to the Director of Health anyone in it you believe is sick with, or has died from, a contagious or other disease dangerous to public health (A.S.C.A. § 25.0403). Other child-abuse reporting duties fall on listed professionals, though anyone is urged to report (A.S.C.A. § 45.2002).
```

Supporting quotes (all read 2026-11-06):

- A.S.C.A. § 45.2003: 'Any person who is required by 45.2002 to report known or suspected child abuse or neglect and anyone who has reasonable cause to suspect that a child died as a result of child abuse or neglect shall report that fact immediately to the department. The department accepts the report for investigation and reports its findings to the Attorney General and the agency.'. URL: https://asbar.org/code-annotated/45-2003-mandatory-report-to-medical-examiner-post-mortem-investigations/
- A.S.C.A. § 46.5009: 'Any person who is required by 46.5008 A.S.C.A. to report known or suspected trafficking of a minor and anyone who has reasonable cause to suspect that a child died as a result of human trafficking shall report that fact immediately to the Department of Public Safety.'. URL: https://asbar.org/code-annotated/46-5009-mandatory-reporting-of-a-minors-death/
- A.S.C.A. § 13.0520: '(a) In case any dead body is found, and in case of any accidental death or death allegedly caused by unlawful means, the pulenuu shall report it without delay to the Attorney General for investigation.' ... '(b) The body shall not be removed until the arrival of the Attorney General or investigating officer unless necessary to prevent probable loss or mutilation of the body.'. URL: https://asbar.org/code-annotated/13-0520-procedure-upon-discovery-of-dead-body-report-required/
- A.S.C.A. § 25.0403: 'Any owner, keeper or other person in charge of the operation of a hotel, boardinghouse, lodginghouse or dormitory shall immediately report to the Director the presence therein of any person he has reason to believe to be sick from or to have died from any contagious, infectious, communicable, or other disease dangerous to the public health.'. URL: https://asbar.org/code-annotated/25-0403-report-of-contagious-or-infectious-diseases-duty-of-lodging-places/
- A.S.C.A. § 45.2002(c)-(d): '(c) In addition to those persons specifically required by this section to report ... any other persons are urged and authorized to report' ... '(d) Any person who willfully violates the provisions of subsection (a): (1) commits a Class A misdemeanor'. URL: https://asbar.org/code-annotated/45-2002-mandated-reports-of-abuse-or-neglect/

### `edu-confirmed-absences-outside-title-mp`

Verdict: FIX. Item (3) correctly states the foreign-entity bars but says 'Whether owning and renting out property counts as transacting business is unsettled'. For a foreign LLC the statute settles it (4 CMC § 4933(b)); it stays unsettled only for corporations (4 CMC § 4641(b)(9)).

old_str:
```
Whether owning and renting out property counts as transacting business is unsettled, so a foreign entity landlord should register before filing.
```
new_str:
```
For a foreign limited liability company the statute settles the question: owning income-producing real property in the Commonwealth is transacting business, and while it lacks a certificate of authority it is treated as having appointed the Registrar of Corporations as its agent for service of process (4 CMC §§ 4933(b), 4938). For a corporation, merely owning property is not transacting business, so whether renting it out is remains unsettled (4 CMC §§ 4641(b)(9), 4642). Either way, a foreign entity landlord should register before filing.
```

Supporting quotes (all read 2026-11-06):

- 4 CMC § 4933(b): 'For purposes of this Article, the ownership in the Commonwealth of income-producing real property or tangible personal property, other than property excluded under subsection (a), constitutes transacting business in the Commonwealth.'. URL: https://cnmilaw.gov/docs/cmc_section/T4/4933.pdf
- 4 CMC § 4938(a), (d): '(a) A foreign limited liability company transacting business in the Commonwealth may not maintain an action or proceeding in the Commonwealth unless it has a certificate of authority to transact business in the Commonwealth.' '(d) If a foreign limited liability company transacts business in the Commonwealth without a certificate of authority, it appoints the Registrar of Corporations as its agent for service of process for claims for relief arising out of the transaction of business in the Commonwealth.'. URL: https://cnmilaw.gov/docs/cmc_section/T4/4938.pdf
- 4 CMC § 4641(a), (b)(9): '(a) A foreign corporation may not transact business in the Commonwealth until it obtains a certificate of authority from the Registrar of Corporations.' Not transacting business: '(9) Owning, without more, real or personal property;'. URL: https://cnmilaw.gov/docs/cmc_section/T4/4641.pdf
- 4 CMC § 4642(a), (d): '(a) A foreign corporation transacting business in the Commonwealth without a certificate of authority may not maintain a proceeding in any court in the Commonwealth until it obtains a certificate of authority.' '(d) A foreign corporation is liable for a civil penalty of $100 for each day, but not to exceed a total of $5,000 for each year it transacts business in the Commonwealth without a certificate of authority.'. URL: https://cnmilaw.gov/docs/cmc_section/T4/4642.pdf

### `edu-landlord-registration-mp`

Verdict: FIX. The row lists the Commonwealth permits but not the certificate of authority a foreign corporation or LLC landlord needs, without which it cannot bring a possession case. Title stays true.

old_str:
```
What to do: get the business licence if you rent as a business,
```
new_str:
```
If you own through a corporation or limited liability company formed outside the Commonwealth, it also needs a certificate of authority from the Registrar of Corporations, and until it has one it can't bring a possession case (4 CMC §§ 4642, 4933(b), 4938; see "edu-nonresident-owner-agent-mp"). What to do: get the business licence if you rent as a business,
```

Supporting quotes (all read 2026-11-06):

- 4 CMC §§ 4642(a), 4933(b), 4938(a): as quoted under `edu-confirmed-absences-outside-title-mp`. URL: https://cnmilaw.gov/docs/cmc_section/T4/4642.pdf, https://cnmilaw.gov/docs/cmc_section/T4/4933.pdf, https://cnmilaw.gov/docs/cmc_section/T4/4938.pdf

### `edu-nonresident-owner-agent-mp`

Verdict: FIX. The row finds no agent rule for an off-island owner but omits the foreign-entity certificate of authority (which names a Commonwealth agent), the deemed appointment of the Registrar for service, and the long-arm statute that lets a tenant sue an owner of Commonwealth real property by serving the Attorney General. Title stays true.

old_str:
```
In practice an off-island owner still needs someone local:
```
new_str:
```
Two general rules do reach an off-island owner. First, if you own through a corporation or limited liability company formed outside the Commonwealth, it needs a certificate of authority from the Registrar of Corporations naming an agent in the Commonwealth. A foreign limited liability company that owns income-producing real property here is transacting business; without the certificate it can't bring a possession case and is treated as having appointed the Registrar as its agent for service of process. A foreign corporation transacting business without one can't maintain a case and is liable for a civil penalty of $100 a day, up to $5,000 a year (4 CMC §§ 4641, 4642, 4647, 4932, 4933(b), 4938). Second, whoever you are, holding or owning real property in the Commonwealth submits you to its courts on claims arising from it, and if you can't be found here a tenant can serve you by leaving the papers with the Attorney General and delivering them to you personally or by certified or registered mail (7 CMC §§ 1102, 1104(a)). In practice an off-island owner still needs someone local:
```

Supporting quotes (all read 2026-11-06):

- 4 CMC §§ 4641(a), 4642, 4933(b), 4938: as quoted under `edu-confirmed-absences-outside-title-mp`. URL: https://cnmilaw.gov/docs/cmc_section/T4/4641.pdf, 4642.pdf, 4933.pdf, 4938.pdf
- 4 CMC § 4647: 'Each foreign corporation authorized to transact business in the Commonwealth must continuously maintain in the Commonwealth: (a) A registered office that may be the same as any of its places of business; and (b) A registered agent'. URL: https://cnmilaw.gov/docs/cmc_section/T4/4647.pdf
- 4 CMC § 4932(a)(5): the foreign LLC application must set forth '(5) The name and street address of its initial agent for service of process in the Commonwealth;'. URL: https://cnmilaw.gov/docs/cmc_section/T4/4932.pdf
- 7 CMC § 1102(a)(6), (b): '(a) Any person, whether or not a citizen or resident of the Commonwealth, who in person or through an agent does any of the acts enumerated in this section, thereby submits such person ... to the jurisdiction of the courts of the Commonwealth as to any cause of action arising from the doing of any of the following acts:' ... '(6) Holding or having interest in real property, including security or leasehold interests, within the Commonwealth, or using, possessing or owning real property within the Commonwealth;' '(b) Service of process upon any person who is subject to the jurisdiction of the courts of the Commonwealth, as provided in this section, may be made as provided by 7 CMC § 1104, if the person cannot be found in the Commonwealth, with the same force and effect as if process had been personally served within the Commonwealth.'. URL: https://cnmilaw.gov/docs/cmc_section/T7/1102.pdf
- 7 CMC § 1104(a): 'When service of process is provided by 7 CMC §§ 1102 and 1103, service shall be made by leaving a certified copy with the Attorney General, who shall keep a record of each such process and the day and hour of service; provided, that notice of the service and a copy of the summons and of the complaint are served upon the defendant personally by any person authorized to serve process in the place in which he or she may be found or appointed by the court for the purpose; or sent by certified or registered mail, postage prepaid, with return receipt requested, by the plaintiff or the plaintiff's attorney to the defendant.'. URL: https://cnmilaw.gov/docs/cmc_section/T7/1104.pdf

### `edu-law-enforcement-cooperation-mp`

Verdict: ERROR. The row says no statute 'requires you or your tenants to cooperate with police investigations' or 'requires you to give the Department of Public Safety information about tenants'. 6 CMC § 3105 requires every person who learns of a rape, aggravated assault or suspicious wound or death to report it within five days, and every person who learns of any Title 6 offense to notify the police with a description of known participants, on pain of up to six months and $500. The row's statement that child-abuse reporting falls only on listed roles is correct (6 CMC § 5313(a), (e)). No CNMI elder-abuse duty binds any person: 6 CMC § 1454 lists professionals. No fictitious-name statute was found (site search 'fictitious name', 'assumed name', 'trade name'). Notes to update: 'Confirmed absent'.

old_str:
```
requires you or your tenants to cooperate with police investigations, requires you to give the Department of Public Safety information about tenants or access to a unit, or bars a lease from penalizing a tenant who calls the police or emergency help. The child-abuse reporting duty falls on health workers, teachers, day care providers, counselors, social workers and police, not on landlords as such.
```
new_str:
```
requires you to give the Department of Public Safety access to a unit, or bars a lease from penalizing a tenant who calls the police or emergency help. But a general reporting duty binds you, your staff and your tenants, as it binds every person. Anyone who gains knowledge of a rape, an aggravated assault, or a death or injury from a knife or bullet wound, powder burn or other cause suffered in a suspicious or unusual way or suggesting poisoning or violence must report it immediately, and in any case within five days, to the police or the Director of Public Safety, giving the victim's name and location, the date, the cause and manner, and the name of whoever caused it if known. And anyone who gains knowledge of an offense under the Commonwealth criminal code must promptly notify the police, giving their own name and address, the nature, date, time and place of the offense, and a description of any known participants, even if that is a tenant. A violation can be punished by up to six months in jail, a $500 fine, or both (6 CMC § 3105). So if a tenant is found dead in suspicious circumstances, or you learn of a crime at the property, report it. The child-abuse reporting duty falls on health workers, teachers, day care providers, counselors, social workers and police, not on landlords as such, though anyone may report (6 CMC § 5313(a), (e)).
```

Supporting quotes (all read 2026-11-06):

- 6 CMC § 3105(a), (c), (e): '(a) Every person who gains knowledge of a rape, aggravated assault, or death or injury resulting from a knife wound, bullet wound, powder burn, or other cause sustained in a suspicious or unusual manner or under conditions suggesting poisoning or violence, shall make a report of it immediately, and in any case within five days of obtaining such knowledge, to the nearest law enforcement official or to any police officer or to the Director of Public Safety. The report shall state: (1) The name and location of the injured or deceased person; (2) The date of injury or death, or date of gaining knowledge of it by the informant, if the date of injury or death is unknown; (3) The cause and manner of injury or death; and (4) The name of the person causing injury or death, if known.' '(c) Every person who gains knowledge of an offense defined under this title shall promptly notify the nearest law enforcement official, any police officer, or the Director of Public Safety and shall: (1) Provide his or her own name and address; (2) The nature of the offense; (3) The approximate date, time, and location of the offense; and (4) Identification or description of any known participants in the offense.' '(e) A person convicted of violating this section may be punished by imprisonment for not more than six months, or by a fine of not more than $500, or both.' (Source: PL 3-71, § 1 (§ 465)). URL: https://cnmilaw.gov/docs/cmc_section/T6/3105.pdf
- 6 CMC § 5313(a), (e): '(a) Any health care worker, school teacher or other school official, day care provider, counselor, social worker, peace officer or other law enforcement official who comes into contact in a professional capacity with a child who the person knows or has reasonable cause to suspect is, or will become, a victim of child abuse shall report this knowledge or suspicion directly to the Department of Public Safety.' '(e) Any person not obligated to do so by this chapter, may, at any time, voluntarily report known or suspected instances of child abuse to the Department of Public Safety.'. URL: https://cnmilaw.gov/docs/cmc_section/T6/5313.pdf
- 6 CMC § 1454(a): the man'amko (elder) abuse duty is limited to 'Any physician or other hospital personnel ... or any medical examiner or coroner, dentist, physical therapist, religious healer, social worker, peace officer or law enforcement official who comes into contact in his or her professional capacity with a member of the "man-amko"' (no edit needed). URL: https://cnmilaw.gov/docs/cmc_section/T6/1454.pdf

## Sources not reached

- **Virgin Islands Code (all four VI rows).** The official text is on LexisNexis, a JavaScript site, so it was not used. The Legislature's act PDFs on billtracking.legvi.org are reachable, but Acts 8184 and 8792 (trade names) are image scans with no text, and no OCR tool is installed. No VI section was read. Leads, official text unread, from law.justia.com's 2019 VI code via search snippets: 13 V.I.C. § 2008 (a foreign LLC without a certificate of authority may not maintain an action), 13 V.I.C. § 533 (no action by a corporation that has not paid its franchise tax), and 13 V.I.C. §§ 401 ff. (foreign corporations). Also unread: 11 V.I.C. §§ 1201-1213 (trade names) and the VI child-abuse, elder-abuse and death-reporting sections. These could turn three VI rows into FIX or ERROR, so the next Lexis session should read them.
- **American Samoa LLC Act (A.S.C.A. ch. 30.06, e.g. § 30.0615, which `edu-nonresident-owner-agent-as` already cites).** It is not on asbar.org's per-section pages, and the "Updated Annotated Code by Title (as of August 2021)" index is broken (its iframe1.html returns 404). The Legislature's copy of P.L. 35-20 is at llc.as.gov, a lead from a web search, but its DNS did not resolve. So any foreign-LLC suit bar or deemed-agent rule in American Samoa is unverified.
- **American Samoa source caveat.** The territory publishes no code. The Bar Association's per-section pages ("Code Annotated by Title and Chapter") were used, as the library does. Their currency against the August 2021 compilation was not checked.
- **Puerto Rico.** Everything relied on was read in the OGP consolidations: Ley 164-2009 (Rev. 31 de julio de 2025, which incorporates Ley 65-2025), Ley 57-2023 (Rev. 25 de agosto de 2026), Ley 121-2019 (Rev. 20 de octubre de 2026), Ley 135-2020 (Rev. 21 de julio de 2026) and Ley 75-1992 (Rev. 15 de abril de 2024). No 2026 session law was screened for amendments to Ley 164-2009 after its July 2025 revision. The Department of State registry (app.estado.pr.gov) was not needed. Not searched: Rule 4 of the Rules of Civil Procedure on service on nonresident individuals; a general duty to report crimes in the Penal Code.
- **Guam.** The chapter PDFs read were 18 GCA chs. 7 and 26 (footer COL070307), ch. 28 (COL372014), 10 GCA ch. 81 (COL 2025-04-22), ch. 2 (COL 2025-12-23), 19 GCA ch. 13 and 7 GCA ch. 14 (COL372014). No later public laws were screened against them. Article 2 of ch. 7 (foreign limited liability partnerships) was not read. 7 GCA § 14109 is a general long-arm clause with no deemed agent for individuals, so no edit rests on it.
- **CNMI.** The sections relied on were read from cnmilaw.gov section PDFs. The site search found no fictitious- or assumed-name statute and no any-person elder-abuse or general death-reporting duty apart from 6 CMC § 3105. 4 CMC § 40187 (foreign LLPs, cited in the existing MP note) was not re-read.
- Case law: not searched anywhere.

## Summary

1. 20 rows checked: 3 ERROR (the PR law-enforcement row, the MP law-enforcement row, and item (3) of the PR cross-title row), 12 FIX, 1 HOLDS (AS cross-title), and 4 VI rows that hold as far as can be told but are NOT VERIFIED because no official text could be reached. That makes 15 edits in 15 rows, and every old_str was checked by script to occur exactly once in its row's current bodyText.
2. Miss type 1 (foreign entities): PR, Guam and CNMI all bar unauthorized foreign corporations and LLCs from suing. In Guam and CNMI, owning income-producing real property is transacting business for an LLC by statute. American Samoa requires a Governor's permit, with penalties but no suit bar found.
3. Miss type 2 (fictitious names): Guam requires a fictitious-name certificate and bars suits on contracts until it is filed (18 GCA § 26103). Registration is optional in PR (Ley 75-1992 art. 4) and AS (A.S.C.A. § 27.0301). No CNMI statute was found. VI is unread.
4. Miss type 3 (service): unauthorized foreign entities are deemed to appoint an official for service in PR (Secretary of State), Guam (DRT) and CNMI (Registrar, LLCs). The CNMI long-arm statute reaches any owner of Commonwealth real property, with service through the Attorney General.
5. Miss type 4 (any-person reporting): PR (child maltreatment, a crime to fail to report; elder abuse; deaths, a misdemeanour) and CNMI (6 CMC § 3105: crimes, suspicious deaths and wounds, up to 6 months or $500) contradict their rows. Guam (death notification, scene preservation) and AS (child deaths, body not to be moved, lodging-house disease reports) add narrower duties. Notes columns for the ERROR rows still say "Confirmed absent" and need updating.
