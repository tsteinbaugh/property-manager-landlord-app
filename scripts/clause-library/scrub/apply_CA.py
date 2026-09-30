# Three-bucket scrub, batch 4: California (2026-09-29).
# Verdicts: lease-clause-scrub-verdicts.md. Run from the repo root.
import sys
sys.path.insert(0, "scripts/clause-library/scrub")
from scrublib import Library, Citations, annotate_checklist, SL, CT, RD, D

L = Library()
c = Citations("CA")
ST = "CA"
MOVED = "Moved from {} by the three-bucket scrub (2026-09-29); content and citations unchanged: {}."
MOVES = {}


def cite(cid):
    return c.R[cid][3]


def move(cid, eid, title, rule, body, topic=None, group=None):
    L.off(ST, cid, eid)
    L.edu(ST, eid, cid, title, rule, body, f"CA: " + MOVED.format(cid, cite(cid)), topic=topic, group=group)
    c.move(cid, eid)
    MOVES[cid] = eid


def fold(cid, eid, append, prepend=""):
    L.merge(ST, cid, eid, prepend, f"Content from {cid} (switched off) added by the three-bucket scrub (2026-09-29); unchanged: {cite(cid)}.", append=append)
    c.fold(cid, eid)
    MOVES[cid] = eid


def new_edu(eid, src, title, rule, body, citation, topic=None):
    L.edu(ST, eid, src, title, rule, body, f"CA: Created by the three-bucket scrub (2026-09-29) from {src}; content unchanged: {citation}.", topic=topic)
    c.add(eid, citation, "CITED", L.g(L.R[src], "effective_from"), f"Three-bucket scrub {D}: created from {src}.")


# ---- tenant rights and landlord duties: moved to education ----
fold("notice-service-fee-ban-ca", "edu-three-day-notice-ca",
     "You also may not charge the tenant any fee for serving, posting or otherwise delivering any notice about the tenancy, including a notice ending a periodic tenancy or a three-day notice (Civ. Code 1946.1(i); CCP 1161(6)).")
fold("accommodation-request-rights-ca", "edu-accommodation-process-ca",
     "A tenant, a family member or anyone the tenant authorizes may request a reasonable accommodation or modification at any time, orally or in writing, without particular words, forms or procedures; you may not charge any fee, deposit or other financial contribution for receiving, processing or granting one, and a lease can't make the tenant give up the right to ask in future (2 CCR 12176(f)(1)).")
fold("reasonable-modification-ca", "edu-accommodation-process-ca",
     "Reasonable modifications: a tenant may make reasonable modifications at their own expense where a disability makes them necessary. You may ask for a reasonable description of the work and reasonable assurances it will be done competently with any required permits, but not require a particular contractor; you may not raise a customary security deposit, require a liability waiver or insurance, or require a move to another unit as a condition. Where reasonable, you may require the interior restored at the end of the tenancy, reasonable wear and tear excepted, but not exterior or common-area modifications (2 CCR 12181).")
move("repair-and-deduct-ca", "edu-repair-and-deduct-ca", "The Tenant's Repair-and-Deduct Remedy", "CONDITIONAL",
     "If a tenant gives you or your agent written or oral notice of conditions making the premises untenantable that you ought to repair, and you don't repair them within a reasonable time, the tenant may either repair them and deduct the cost from rent, up to one month's rent, or move out and be discharged from further rent and other obligations as of that date (Civ. Code 1942). The tenant may use the remedy no more than twice in any 12-month period, and not for a condition the tenant caused by violating Civ. Code 1929 or 1941.2. A lease can't take the remedy away.")
move("rent-increase-notice-ca", "edu-rent-increase-notice-ca", "Notice Before Raising Rent", "REQUIRED",
     "For a week-to-week, month-to-month or shorter tenancy, you may raise rent only by written notice delivered personally or served by mail under CCP 1013 (Civ. Code 827). If the increase, alone or combined with other increases in the prior 12 months, is 10% or less of the rent charged at any time in those 12 months, give at least 30 days' notice; if more than 10%, at least 90 days. A longer period in another statute, regulation, recorded regulatory agreement or contract controls. The Tenant Protection Act's cap may also apply (see the rent-increase cap note).")
L.off(ST, "political-signs-ca", "edu-tenant-display-and-use-rights-ca")
L.off(ST, "tenant-use-rights-ca", "edu-tenant-display-and-use-rights-ca")
L.edu(ST, "edu-tenant-display-and-use-rights-ca", "tenant-use-rights-ca", "Tenant Display and Use Rights You Can't Restrict", "PROHIBITED",
      "California limits what a lease can restrict. Political signs (Civ. Code 1940.4): a tenant may post signs about an election or legislative vote, an initiative, referendum or recall, or an issue before a public body; in a multifamily building in a window or on the door, and in a single-family home also from the yard, balcony or outside wall. You may prohibit one only if it is over six square feet, violates a law, or violates a lawful common-interest-development governing document, and posting is limited to the period local ordinance sets or, otherwise, a period you set that starts at least 90 days before and ends at least 15 days after the vote. Other rights: a tenant may display a religious item on the entry door or frame, within the limits of Civ. Code 1940.45; own a personal micromobility device and store and recharge up to one per occupant in the unit if it meets the safety standard or is insured, unless you provide secure long-term storage; use a clothesline or drying rack in a private area on the conditions in 1940.20; and, where the property has no more than two units and the tenant has a ground-level private outdoor area, grow personal agriculture in portable containers on the conditions in 1940.10.",
      "CA: Created by the three-bucket scrub (2026-09-29) from political-signs-ca and tenant-use-rights-ca (both switched off); content and citations unchanged: Civ. Code §§ 1940.4, 1940.45, 1940.41, 1940.20, 1940.10.",
      topic="political-signs")
c.move("tenant-use-rights-ca", "edu-tenant-display-and-use-rights-ca")
c.fold("political-signs-ca", "edu-tenant-display-and-use-rights-ca")
MOVES.update({"political-signs-ca": "edu-tenant-display-and-use-rights-ca", "tenant-use-rights-ca": "edu-tenant-display-and-use-rights-ca"})
fold("dv-lease-termination-ca", "edu-abuse-violence-protections-ca",
     "Ending the lease (Civ. Code 1946.7): a tenant may terminate if the tenant, a household member or an immediate family member was the victim of domestic violence, sexual assault, stalking, human trafficking, elder or dependent-adult abuse, a crime that caused bodily injury or death, a crime involving a firearm or other deadly weapon, or a crime involving force or its threat. The tenant gives you written notice, within 180 days of the order, report or act, attaching a qualifying restraining or protective order, a peace officer's written report that a report was filed, qualified third-party documentation in the statutory form, or other documentation reasonably verifying the act. The tenant owes rent for no more than 14 days after the notice (prorated if you re-rent sooner), is released without penalty, forfeits no deposit or advance rent, and isn't in breach; any other tenant stays bound. Keep the tenant's information confidential.")
fold("lock-change-non-cotenant-ca", "edu-abuse-violence-protections-ca",
     "Where the person who committed or allegedly committed the abuse or violence is not a tenant of the same unit, change the locks at your own expense within 24 hours of the tenant's written request with any documentation listed in Civ. Code 1941.5(d), and give the tenant a key. If you don't, the tenant may change the locks without your permission and you must reimburse them within 21 days, provided they use locks of similar or better quality, tell you within 24 hours and give you a key.")
move("emergency-assistance-right-ca", "edu-emergency-assistance-right-ca", "Never Penalize a Call for Police or Emergency Help", "PROHIBITED",
     "A lease can't prohibit or limit a tenant, resident or anyone else from summoning law enforcement or emergency assistance for a victim of abuse or crime or a person in an emergency, and you may not impose or threaten any fee, fine, penalty, termination, non-renewal or worse terms because such help was summoned (Civ. Code 1946.8).")
move("casualty-termination-ca", "edu-casualty-termination-ca", "When a Tenant May End the Lease for Your Non-Performance or Destruction", "CONDITIONAL",
     "A tenant may end the lease early if, within a reasonable time after the tenant asks, you don't put and keep them in quiet possession, put the property in good condition, or repair it; or if the greater part of the property, or the part that was the material inducement to the lease, is destroyed by any cause other than the tenant's want of ordinary care. If the property is destroyed, the lease ends (Civ. Code 1932). See the disaster note for returning advance rent.")
fold("immigration-status-inquiry-ca", "edu-tenant-harassment-ca",
     "Separately, you may not ask about the immigration or citizenship status of a tenant, prospective tenant, occupant or prospective occupant, or require them to disclose or certify it (Civ. Code 1940.3(b)). You may still request information or documentation needed to verify financial qualifications or identity, and comply with federal law, a subpoena, warrant or court order.")
move("pest-control-notice-ca", "edu-pest-control-notice-ca", "Pest Control and Pesticide Notices", "REQUIRED",
     "If you have a contract for periodic pest control service, give each new tenant a copy of the notice the registered pest control company provides (Civ. Code 1940.8). If you or your agent apply pesticide without a licensed operator, give the tenant written notice at least 24 hours in advance naming the pest, the pesticide's name and brand, the approximate date, time and frequency of application, the statutory caution statement, and that the date, time and frequency may change (1940.8.5); for a broadcast application, a total-release fogger or an aerosol spray, give the same notice to adjacent units that could reasonably be affected.")
move("disaster-duties-ca", "edu-disaster-duties-ca", "After a Declared Disaster", "REQUIRED",
     "If a declared disaster damages the property, remove the disaster debris and mitigate the hazards it causes (mold, smoke, smoke residue and odor, ash, asbestos, water damage) within a reasonable time, following any government cleaning protocols, then tell the tenant in writing that it's done and that they may see and request copies of any environmental studies, tests or reports (Civ. Code 1941.8). Unless the lease is lawfully ended, the tenancy continues and the tenant may return at the same rent once it's safe and practicable. Rent is discharged for any period the tenant can't occupy the unit under a mandatory evacuation order; return rent already paid for that period within 10 days after the order is lifted, or let the tenant deduct it from the next month's rent. If the lease ends because the property was destroyed or the tenant ended it under Civ. Code 1932(2), return advance rent for the period after termination within 21 days.")
move("internet-billing-optout-ca", "edu-internet-billing-optout-ca", "Tenants May Opt Out of Bundled Internet", "PROHIBITED",
     "If a tenancy is month-to-month or otherwise periodic and you offer internet service through a bulk-billing arrangement or other subscription with a third-party provider, the tenant may opt out of paying for it, you may not retaliate, and if you don't honor the opt-out the tenant may deduct the subscription's cost from rent (Civ. Code 1942.8).")
fold("military-lease-termination-ca", "edu-military-tenant-protections-ca",
     "Lease termination (Mil. & Vet. Code 409): a tenant may end the lease after entering military service during the term, or, if already in service when signing, after receiving orders for a permanent change of station or to deploy for at least 90 days. The tenant delivers written notice and a copy of the orders by hand, private business carrier or return-receipt mail. For monthly rent, termination takes effect 30 days after the next rent due date following delivery; earlier rent is prorated, you may not charge an early termination fee (other amounts due, such as reasonable excess-wear charges, still apply), you must refund rent paid in advance for after termination within 30 days, the dependents' obligations end too, and you may not hold belongings or the deposit for rent accruing after termination. If you think a request is incomplete, say what is missing in writing within 30 days.")

# ---- deposits ----
L.off(ST, "security-deposit-cap-ca", "edu-security-deposit-cap-ca")
L.edu(ST, "edu-security-deposit-cap-ca", "security-deposit-cap-ca", "Security Deposit Limits", "CONSTRAINED",
      "California caps security, however it's labeled, at one month's rent, furnished or not, on top of the first month's rent (Civ. Code 1950.5(c)); deposits collected before July 1, 2024 are grandfathered. Exceptions: a landlord who is a natural person, or an LLC whose members are all natural persons, and who owns no more than two residential rental properties with no more than four units in total may take two months, but not from a service member, and may not refuse to rent to a service member on that account; six or more months' rent may be paid in advance on a lease of six months or more; and you may raise the deposit by half a month's rent for a waterbed (1940.5(g)). A lease may not call any security nonrefundable (1950.5(n)). Use these limits as a guardrail when you enter the deposit amount.",
      f"CA: {MOVED.format('security-deposit-cap-ca', 'Civ. Code § 1950.5(c), (n); § 1940.5(g)')} The service-member written-explanation duty for above-standard security (§ 1950.5(c)(4)) is noted in the source row and still undrafted.",
      topic="security-deposit-cap")
c.move("security-deposit-cap-ca", "edu-security-deposit-cap-ca")
MOVES["security-deposit-cap-ca"] = "edu-security-deposit-cap-ca"
# California keeps a deposit amount and use clause: the shared security-deposit-use is broader than
# Civ. Code 1950.5(b) allows ("any Tenant default"), so a CA-specific row replaces it (Taylor, 2026-09-29).
new_use = [""] * len(L.H)
for k, v in dict(id="security-deposit-use-ca", group="Security Deposit", title="Security Deposit", states="CA", is_active="TRUE",
                 supersedes="security-deposit-use",
                 bodyText="Tenant shall pay Landlord a security deposit of {{security_deposit}} (Security Deposit) prior to occupancy. Landlord may apply the Security Deposit only to: unpaid Rent; repair of damage to the property, beyond ordinary wear and tear, caused by Tenant or by a guest or licensee of Tenant; cleaning needed when the tenancy ends to return the property to the level of cleanliness it was in when the tenancy began; and Tenant's failure to restore, replace or return personal property or appurtenances, beyond ordinary wear and tear. The Security Deposit will not relieve Tenant of any obligation to pay Rent.",
                 rule_type="CONSTRAINED", content_type="LEASE_CLAUSE", verification_status="VERIFIED",
                 notes="CA: Created 2026-09-29 by the three-bucket scrub, Taylor's decision that California keep a deposit amount and use clause when security-deposit-cap-ca moved to education. The shared security-deposit-use was checked against Civ. Code § 1950.5(b) first and fails: it lets the deposit cover 'a Tenant default under this Lease', but (b) allows only (1) default in paying rent, (2) damage beyond ordinary wear and tear caused by the tenant or a guest or licensee, (3) cleaning to the move-in level, and (4) failure to restore, replace or return personal property or appurtenances, and (4) only if the rental agreement authorizes it. This clause gives that authorization (a lease choice). § 1950.5(b) read 2026-09-29 through a fetch-tool summary quoting the official leginfo.legislature.ca.gov text verbatim. Carries the lease-choice sentence formerly in security-deposit-return-ca.",
                 effective_from=D, last_checked=D, topic_key="security-deposit-use",
                 lease_clause_basis=f"{CT} | {SL}").items():
    new_use[L.ix[k]] = v
L.rows.append(new_use); L.R["security-deposit-use-ca"] = new_use
c.rows.append(["security-deposit-use-ca", "LEASE_CLAUSE", "CA", "Civ. Code § 1950.5(b)", "CITED", "VERIFIED", D, D, "security-deposit-use",
               f"Three-bucket scrub {D}: created so CA keeps a deposit amount and use clause; the shared row fails § 1950.5(b)."])
c.R["security-deposit-use-ca"] = c.rows[-1]
move("security-deposit-return-ca", "edu-security-deposit-return-ca", "Deposit Return Deadline and Itemization", "REQUIRED",
     "Within 21 days after the tenant moves out, give the tenant an itemized statement of any deductions and return the balance (Civ. Code 1950.5). You may deduct only for unpaid rent, damage beyond ordinary wear and tear, cleaning back to the move-in level, and, where the lease authorizes it, replacing personal property or appurtenances. You may not charge for ordinary wear and tear or preexisting conditions, or require professional carpet or other professional cleaning unless it's reasonably necessary. Where repair and cleaning deductions exceed $125, include copies of bills, invoices or receipts and photographs of the unit. The tenant may request an initial inspection during the last two weeks of the tenancy and be present; tell the tenant of that right in writing and give at least 48 hours' written notice of the inspection. See the deposit-photo note.")

# ---- splits ----
L.edit(ST, "nsf-fee-limit-ca",
       body="If Tenant pays Rent or any other amount due under this Lease by check, draft or order for payment and it is not honored for lack of funds, because Tenant has no account with the drawee, or because Tenant stops payment, Tenant shall be liable to Landlord for the amount of the payment and a service charge of {{nsf_fee}}.",
       basis=CT, why="kept the landlord's fee; the restated $25/$35 cap and the tenant's statutory defenses moved to edu-nsf-treble-damages-ca.")
e = L.R["edu-nsf-treble-damages-ca"]
L.s(e, "bodyText", L.g(e, "bodyText") + " No service charge is owed if the tenant stopped payment to resolve a good-faith dispute with you, or shows written confirmation from their bank that the instrument was returned because of the bank's error, or that the account was short because a regularly scheduled social security or government benefit deposit was delayed (Civ. Code 1719(a)).")
L.note(e, "CA: Defenses sentence added by the three-bucket scrub (2026-09-29) from nsf-fee-limit-ca; content unchanged: Civ. Code § 1719(a).")
c.touch("nsf-fee-limit-ca", "trimmed to the landlord's fee; cap and defenses in edu-nsf-treble-damages-ca.")
L.edit(ST, "rent-increase-cap-ca",
       body="Any rent discount, incentive, concession or credit that applies to this tenancy is listed separately here: [list each, or state 'none'].",
       basis=f"{RD}: Civ. Code § 1947.12", rule="CONDITIONAL",
       why="kept the separate listing of discounts and concessions, which Civ. Code § 1947.12 requires in the lease; the restated cap, twice-a-year limit and notice rule moved to edu-rent-increase-cap-ca.")
L.s(L.R["rent-increase-cap-ca"], "title", "Rent Discounts and Concessions")
new_edu("edu-rent-increase-cap-ca", "rent-increase-cap-ca", "Rent Increase Cap (Tenant Protection Act)", "CONSTRAINED",
        "Where Civ. Code 1947.12 applies, you may not raise rent over any 12-month period by more than 5% plus the change in the cost of living, or 10%, whichever is lower, measured against the lowest rent charged for the unit in the 12 months before the increase, and you may not impose more than two increases in any 12 months. Discounts, incentives, concessions and credits are left out of the calculation and must be listed separately in the lease (the lease's Rent Discounts and Concessions clause does this). Give notice of any increase as Civ. Code 827 requires (see the rent-increase notice note). The cost-of-living figure is regional and changes each year, and several exemptions apply (see the rent-increase cap row's notes and the TPA notices).",
        "Civ. Code § 1947.12", topic="rent-increase-cap")
c.touch("rent-increase-cap-ca", "trimmed to the concession listing; cap in edu-rent-increase-cap-ca.")
L.edit(ST, "payment-methods-ca",
       body="Tenant may pay Rent and the Security Deposit by the following methods: [list the accepted methods, including at least one that is neither cash nor electronic funds transfer]. If Tenant attempts to pay with a check drawn on insufficient funds or instructs the drawee to stop payment, Landlord may require cash as the only form of payment for up to three months, after giving Tenant written notice that the instrument was dishonored, stating the length of the cash-only period, and attaching a copy of the dishonored instrument.",
       basis=f"{CT} | {SL}",
       why="kept the landlord's accepted methods and cash-only right; the statutory method rule is now a bracket prompt, and the third-party payment and no-check-fee duties moved to edu-payment-methods-ca.")
new_edu("edu-payment-methods-ca", "payment-methods-ca", "Rent Payment Method Rules", "CONSTRAINED",
        "California requires you to accept at least one form of rent payment that is neither cash nor electronic funds transfer, so a cash-only or electronic-only policy is unlawful from the start (Civ. Code 1947.3). You must let a third party pay rent on the tenant's behalf, subject to a signed acknowledgment that they aren't a tenant and that accepting payment creates no new tenancy. You may not charge a fee for paying rent or the deposit by check. You may require cash only after a dishonored check or stop-payment, for up to three months, with the written notice the statute requires. A tenant can't waive these rules.",
        "Civ. Code § 1947.3")
c.touch("payment-methods-ca", "trimmed to accepted methods and cash-only right; duties in edu-payment-methods-ca.")
L.edit(ST, "due-at-signing-ca",
       body="Tenant will pay Landlord the following amounts, at the time specified for each: first month's Monthly Rent ({{monthly_rent}}) due at signing, and the Security Deposit ({{security_deposit}}) due at signing. These amounts are due in addition to, and are not credited against, Rent due for any other month of the Term.",
       basis=SL, why="removed the restated deposit-cap sentence (edu-security-deposit-cap-ca).")
c.touch("due-at-signing-ca", "restated cap sentence removed.")
L.edit(ST, "stove-refrigerator-ca",
       body="[Include only if Tenant has asked to supply their own refrigerator.] \"Under state law, the landlord is required to provide a refrigerator in good working order in your unit. By checking this box, you acknowledge that you have asked to bring your own refrigerator and that you are responsible for keeping that refrigerator in working order.\" Tenant may, on 30 days' written notice, tell Landlord that Tenant no longer wishes to keep their own refrigerator, and at the end of that period Landlord will install a refrigerator in good working order. Landlord is not responsible for maintaining a refrigerator Tenant supplies.",
       basis=f"{RD}: Civ. Code § 1941.1(a)(11)(B)", rule="CONDITIONAL",
       why="kept the tenant-supplied refrigerator acknowledgment and the 30-day return route the statute requires in the lease; the landlord's stove and refrigerator duty moved to edu-stove-refrigerator-ca.")
L.s(L.R["stove-refrigerator-ca"], "title", "Tenant-Supplied Refrigerator")
new_edu("edu-stove-refrigerator-ca", "stove-refrigerator-ca", "Stove and Refrigerator Duty", "REQUIRED",
        "California requires you to provide and maintain in good working order a stove that can safely generate heat for cooking and a refrigerator that can safely store food (Civ. Code 1941.1(a)(10)-(11)). An appliance under a manufacturer or government recall isn't considered safe, and you must repair or replace it within 30 days of notice of the recall. You may not make the tenancy conditional on the tenant supplying a refrigerator; if the tenant asks to bring their own, the lease must carry the statutory acknowledgment and a 30-day route back to one you supply.",
        cite("stove-refrigerator-ca"))
c.touch("stove-refrigerator-ca", "trimmed to the tenant-supplied refrigerator acknowledgment; duty in edu-stove-refrigerator-ca.")
L.edit(ST, "security-devices-ca",
       body="Tenant will notify Landlord when Tenant becomes aware that any dead bolt lock or window security or locking device in the unit is inoperable.",
       basis=SL, rule="RECOMMENDED", why="kept the tenant's notice duty; the landlord's installation and repair duty moved to edu-security-devices-ca.")
L.s(L.R["security-devices-ca"], "title", "Reporting Inoperable Locks")
new_edu("edu-security-devices-ca", "security-devices-ca", "Required Locks and Security Devices", "REQUIRED",
        "California requires an operable dead bolt on each main swinging entry door, operable security or locking devices on windows designed to be opened, and code-compliant locking mechanisms on exterior doors that give access to common areas in multifamily buildings (Civ. Code 1941.3). Correct an inoperable device within a reasonable time after the tenant tells you.",
        cite("security-devices-ca"))
c.touch("security-devices-ca", "trimmed to the tenant's notice duty; duty in edu-security-devices-ca.")
L.edit(ST, "unbundled-parking-ca",
       body="Off-street parking is not included in the rent for this unit and is not part of this Lease. Any parking space is leased under a separate parking agreement or addendum. If a fee under that agreement remains unpaid 45 days after it is owed, Landlord may revoke Tenant's right to lease that space.",
       basis=f"{RD}: Civ. Code § 1947.1", why="kept the unbundling statement and the landlord's revocation right; the tenant's right of first refusal and the bar on evicting for an unpaid parking fee moved to edu-unbundled-parking-ca.")
new_edu("edu-unbundled-parking-ca", "unbundled-parking-ca", "Unbundled Parking at New Larger Buildings", "CONSTRAINED",
        "For a qualifying property (certificate of occupancy on or after January 1, 2025, 16 or more units, in one of ten named counties), parking may not be included in the rental agreement; it must be leased separately, permanently (Civ. Code 1947.1). Tenants have a right of first refusal to spaces built for the property. An unpaid parking fee can't support an eviction; after 45 days you may only revoke the space. Several kinds of unit are excluded (see the unbundled parking row's notes).",
        cite("unbundled-parking-ca"))
c.touch("unbundled-parking-ca", "trimmed to the unbundling statement and revocation right; rest in edu-unbundled-parking-ca.")

# ---- notice period (pattern 2) ----
L.edit(ST, "month-to-month-notice-ca",
       body="Either party may end a month-to-month tenancy by written notice served as provided in Code of Civil Procedure section 1162 or by certified or registered mail. Tenant will give at least [state the notice period: at least 30] days' notice. Landlord will give at least [state the notice period] days' notice, or any longer notice California law requires, together with any statement California law requires in the notice.",
       basis=CT, why="Taylor's pattern 2: notice periods are the chosen periods; the statutory 30/60-day rules, the 1946.1(d) sale exception, the abandoned-property statement and just cause moved to edu-termination-notice-periods-ca.")
new_edu("edu-termination-notice-periods-ca", "month-to-month-notice-ca", "Ending a Month-to-Month Tenancy", "CONSTRAINED",
        "A tenant must give notice at least as long as the rental period (30 days for month-to-month), however long they've lived there (Civ. Code 1946.1). You must give at least 60 days' notice, or 30 days if the tenant has lived there less than a year, or if the unit is separately alienable, is being sold to a natural-person bona fide purchaser in escrow, you give notice within 120 days of escrow opening and haven't given notice before, and the buyer intends to live there for at least a year. Your notice must include the statutory abandoned-property statement. Where the Tenant Protection Act (1946.2) applies, notice alone isn't enough: after the qualifying occupancy period you also need, and must state, a just cause.",
        cite("month-to-month-notice-ca"), topic="termination-notice-periods")
c.touch("month-to-month-notice-ca", "now the chosen periods; statutory rules in edu-termination-notice-periods-ca.")

# ---- pattern 3: optional disclosures with education companions ----
for cid, eid, extra in [
    ("bed-bug-disclosure-ca", "edu-bed-bug-landlord-duties-ca", "The information-about-bed-bugs notice is owed to prospective tenants before a new tenancy begins (Civ. Code 1954.603); the lease's optional clause carries the text and the reporting procedure, but give it before signing."),
    ("meth-disclosure-ca", "edu-meth-fentanyl-disclosure-duties-ca", "The lease's optional clause records the notice and acknowledgment; the duty itself is owed before the rental agreement is signed."),
    ("mold-booklet-disclosure-ca", "edu-mold-disclosure-contingency-ca", "The Department of Public Health's dampness-and-mold booklet must be given before the lease is signed; the lease's optional clause records that it was, and the tenant's duty to report dampness or mold."),
    ("water-submeter-disclosure-ca", "edu-water-submeter-billing-ca", "The submeter disclosure must be given, in at least 10-point type, before the lease is signed; the lease's optional clause carries it."),
]:
    L.edit(ST, cid, basis=SL, rule="RECOMMENDED",
           why=f"optional (Taylor's pattern 3): the disclosure is owed before signing; the clause records it. Companion: {eid}.")
    e = L.R[eid]
    L.s(e, "bodyText", L.g(e, "bodyText") + " " + extra)
    L.note(e, f"CA: Pattern-3 sentence added by the three-bucket scrub (2026-09-29) for {cid}.")
    c.touch(cid, f"now optional (RECOMMENDED); companion {eid}.")
L.edit(ST, "ordnance-demolition-meter-disclosures-ca", basis=SL, rule="RECOMMENDED",
       why="optional (Taylor's pattern 3): these disclosures are owed before signing; the clause records them. Companion: edu-pre-signing-disclosures-ca.")
new_edu("edu-pre-signing-disclosures-ca", "ordnance-demolition-meter-disclosures-ca", "Disclosures Owed Before Signing: Ordnance, Demolition, Shared Meters", "CONDITIONAL",
        "Before a lease is signed, California requires written disclosure of any former federal or state ordnance location within one mile that you actually know of (Civ. Code 1940.7); if you have applied for a permit to demolish the unit, the earliest approximate demolition date and when you expect to end the tenancy; and if gas or electric service through the tenant's meter also serves areas outside the unit, that fact, with a separate written agreement for paying for it. The lease's optional clause records these disclosures.",
        cite("ordnance-demolition-meter-disclosures-ca"))
c.touch("ordnance-demolition-meter-disclosures-ca", "now optional (RECOMMENDED); companion edu-pre-signing-disclosures-ca.")

# ---- cross-references left dangling by the moves ----
L.edit(ST, "possession-delay-ca",
       body="If Landlord is unable to deliver possession of the property to Tenant on the Start Date, Tenant will not owe Monthly Rent for any period before possession is delivered. If Tenant terminates this Lease because Landlord did not deliver possession, as the law permits, Landlord will return all amounts Tenant paid to Landlord.",
       why="reference to the Damage, Destruction and Failure to Deliver section (casualty-termination-ca, now education) replaced with 'as the law permits'.")
L.edit(ST, "common-area-use-ca",
       body=L.g(L.R["common-area-use-ca"], "bodyText").replace("Except for political signs displayed as permitted by this Lease and by Civil Code section 1940.4,", "Except for political signs Tenant may display under Civil Code section 1940.4,"),
       why="reference to the political-signs clause (now education) repointed to the statute.")
for k in ["possession-delay-ca", "common-area-use-ca"]:
    c.touch(k, "cross-reference to a switched-off clause updated.")

L.save()
print("CA", c.save(L))
print("checklist mentions annotated:", annotate_checklist(MOVES))
