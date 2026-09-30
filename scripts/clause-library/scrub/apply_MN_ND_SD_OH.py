# Three-bucket scrub, batch 3: Minnesota, North Dakota, South Dakota, Ohio (2026-09-29).
# Verdicts: lease-clause-scrub-verdicts.md. Run from the repo root.
import sys
sys.path.insert(0, "scripts/clause-library/scrub")
from scrublib import Library, Citations, annotate_checklist, SL, CT, RD

L = Library()
MOVED = "Moved from {} by the three-bucket scrub (2026-09-29); content and citation unchanged: {}."
MOVES = {}


def move(st, c, cid, eid, title, rule, body, cite, topic=None):
    L.off(st, cid, eid)
    L.edu(st, eid, cid, title, rule, body, f"{st}: " + MOVED.format(cid, cite), topic=topic)
    c.move(cid, eid)
    MOVES[cid] = eid


def trim_to_notice(st, cid, eid, why):
    """A landlord-duty clause that keeps only the tenant's repair-notice duty."""
    L.s(L.R[cid], "title", "Repair Requests")
    L.edit(st, cid, body="Tenant will notify Landlord promptly in writing of any condition requiring repair or maintenance.",
           basis=SL, rule="RECOMMENDED", why=why)


# ---------------- Minnesota ----------------
c = Citations("MN")
move("MN", c, "security-deposit-return-mn", "edu-security-deposit-return-mn", "Deposit Return Deadline, Interest and Withholding", "REQUIRED",
     "Within three weeks after the lease ends, and after receiving the tenant's mailing address or delivery instructions, return the deposit with the simple interest Minnesota law requires, or give the tenant a written statement of the specific reasons for withholding any of it. You may withhold only what is reasonably necessary to remedy a default in paying rent or other money due under the lease, or to restore the property to its condition at the start of the tenancy, ordinary wear and tear excepted (Minn. Stat. 504B.178). If the tenant leaves because the building is legally condemned for reasons the tenant didn't cause, the return window is five days. See the inspection-notice penalty note.",
     "Minn. Stat. § 504B.178")
L.merge("MN", "termination-infirmity-mn", "edu-infirmity-termination-accessible-unit-mn", "",
        "Notice and documentation paragraph added by the three-bucket scrub (2026-09-29) from termination-infirmity-mn (switched off); content unchanged: Minn. Stat. § 504B.266.",
        append="To use the right, the tenant (or, if there are several, all tenants) needs a medical professional's written finding of the need to move into a nursing home, boarding care home, supervised living facility, assisted living facility or other qualifying facility or accessible unit, and must give you at least two months' written notice, effective on the last day of a calendar month, delivered by hand or first-class mail, with that documentation and proof of acceptance or a pending application at the facility. The tenant still owes rent and other sums for the period before and during the notice, and the cost of restoring the property beyond ordinary wear and tear.")
c.fold("termination-infirmity-mn", "edu-infirmity-termination-accessible-unit-mn")
MOVES["termination-infirmity-mn"] = "edu-infirmity-termination-accessible-unit-mn"
move("MN", c, "possession-delay-mn-new-construction", "edu-new-construction-delay-mn", "New Construction Not Ready by the Start Date", "CONDITIONAL",
     "If the property is new construction (a new building, rehabilitation, reconstruction or addition) and you know it won't be ready by the start date, notify the tenant in writing at least seven days before the start date and offer a choice of: alternative housing you provide, reasonably equivalent in size, amenities and location, until the property is ready; a payment equal to the rent to help cover alternative housing the tenant arranges; or ending the lease. If the tenant takes one of the first two options and the property still isn't ready within 90 days of the original start date, the tenant may then end the lease (Minn. Stat. 504B.153).",
     "Minn. Stat. § 504B.153")
move("MN", c, "dv-lease-termination-mn", "edu-dv-lease-termination-mn", "Victims of Violence: Tenant's Right to End the Lease", "CONDITIONAL",
     "A Minnesota tenant may end the lease without penalty or liability if the tenant or another authorized occupant fears imminent violence after being subjected to domestic abuse, criminal sexual conduct, sexual extortion or harassment (Minn. Stat. 504B.206). The tenant must give you signed and dated advance written notice, before the tenancy ends, by mail, in person or by a form of written communication the tenant regularly uses with you, stating that they fear imminent violence from a person named in a qualifying document, that they need to end the tenancy, the termination date, and instructions for any remaining belongings; a qualifying document must come with it. Moving out before that date doesn't by itself end the tenancy. You may ask for the perpetrator's name to protect other residents, but the tenant may decline for safety reasons. A sole tenant owes rent for the full month in which the tenancy ends, gives up the claim to the deposit, and owes nothing for the rest of the term; if there are several tenants, the lease ends for all of them (see the qualifying-documents note). Debts owed before termination are unaffected, and the tenant's notice, documents, new address and status are confidential.",
     "Minn. Stat. § 504B.206")
move("MN", c, "fire-casualty-termination-mn", "edu-casualty-termination-mn", "Fire or Casualty: The Tenant May Leave", "CONDITIONAL",
     "If the property is destroyed, or becomes uninhabitable or unfit for occupancy, through no fault or neglect of the tenant or any occupant, the tenant may move out and surrender it; rent is prorated to the date they leave and they owe no rent after that (Minn. Stat. 504B.131). Your duty to keep the property fit and in reasonable repair continues and can't be waived.",
     "Minn. Stat. § 504B.131")
move("MN", c, "cash-rent-receipt-mn", "edu-cash-rent-receipt-mn", "Receipts for Cash Rent", "REQUIRED",
     "If a tenant pays rent or any other payment in cash, give a written receipt immediately if they pay in person, or within three business days if they don't (Minn. Stat. 504B.118).",
     "Minn. Stat. § 504B.118")
L.merge("MN", "prelease-deposit-application-mn", "edu-prelease-deposit-mn", "",
        "Three-bucket scrub (2026-09-29): prelease-deposit-application-mn switched off; this row already states its rule (money taken to hold a unit is applied to the deposit or rent, never kept as a fee).")
c.fold("prelease-deposit-application-mn", "edu-prelease-deposit-mn")
MOVES["prelease-deposit-application-mn"] = "edu-prelease-deposit-mn"

L.edit("MN", "utility-apportionment-mn",
       body="If the property is part of a shared-metered residential building and Landlord apportions natural gas or water and sewer service to Tenant, Landlord will use the apportionment method Minnesota law requires and will bill Tenant no less often than Landlord is billed by the utility. If Tenant vacates before Landlord receives the actual utility bill for the final period, Landlord may issue an estimated final utility bill, calculated as applicable law permits from the immediately preceding billing period and prorated to the date Tenant vacates.",
       basis=SL, why="kept the billing terms and the landlord's estimated-final-bill right; the restated limits (landlord stays customer of record, no electricity apportionment, bill copies on request, $8 and $5 fee caps, no disconnection) moved to edu-utility-apportionment-limits-mn. The statutory disclosure attachment is a separate builder item (edu-utility-disclosure-attachment-mn).")
L.edu("MN", "edu-utility-apportionment-limits-mn", "utility-apportionment-mn", "Limits on Apportioning Shared-Meter Utilities", "CONSTRAINED",
      "If you apportion utilities in a shared-metered building, Minnesota requires that you stay the bill payer and customer of record for the building; you may not apportion or bill tenants for electricity (it may only be submetered as the law allows); any administrative billing charge may not exceed $8 per billing period; a late charge on utilities billed separately from rent may not exceed $5 a month and may not compound; you must give tenants copies of the underlying bills on request; and you may not disconnect or cause disconnection of a tenant's service for nonpayment of utility charges (Minn. Stat. 504B.216). The required disclosure attachment is covered in its own note.",
      "MN: Created by the three-bucket scrub (2026-09-29) from utility-apportionment-mn; content and citations unchanged: Minn. Stat. § 504B.216; § 216B.023.")
c.add("edu-utility-apportionment-limits-mn", "Minn. Stat. § 504B.216", "CITED", L.g(L.R["utility-apportionment-mn"], "effective_from"),
      "Three-bucket scrub 2026-09-29: created from utility-apportionment-mn.")
c.touch("utility-apportionment-mn", "trimmed to billing terms and the estimated-final-bill right; limits in edu-utility-apportionment-limits-mn.")

trim_to_notice("MN", "habitability-baseline-mn", "edu-habitability-baseline-mn",
               "kept only the tenant's written repair-notice duty; the restated landlord duties moved to edu-habitability-baseline-mn. It still supersedes the shared landlord-maintenance.")
L.edu("MN", "edu-habitability-baseline-mn", "habitability-baseline-mn", "Your Basic Habitability Duties", "REQUIRED",
      "Minnesota requires you to keep the property and common areas fit for the use the parties intended and in reasonable repair, including heat of at least 68 degrees Fahrenheit in all places meant for habitation, kitchens and bathrooms included, from October 1 through April 30 (unless a utility company requires it lowered), and extermination of insects, rodents, vermin and other pests (Minn. Stat. 504B.161). These duties don't apply to disrepair caused by the tenant's own willful, malicious or irresponsible conduct, or that of someone under the tenant's direction. You must also keep the property in compliance with health and safety laws, including any local rental-licensing ordinance, and make it reasonably energy efficient where that is cost-effective.",
      "MN: Created by the three-bucket scrub (2026-09-29) from habitability-baseline-mn, which keeps only the tenant's repair-notice duty; content and citations unchanged: Minn. Stat. § 504B.161.")
c.add("edu-habitability-baseline-mn", "Minn. Stat. § 504B.161", "CITED", L.g(L.R["habitability-baseline-mn"], "effective_from"),
      "Three-bucket scrub 2026-09-29: created from habitability-baseline-mn.")
c.touch("habitability-baseline-mn", "trimmed to the tenant's repair-notice duty; landlord duties in edu-habitability-baseline-mn.")

L.edit("MN", "foreclosure-disclosure-mn", basis=SL, rule="RECOMMENDED",
       why="optional (Taylor's pattern 3): the notice is owed in writing before the lease is signed; the clause records it. Companion: edu-foreclosure-disclosure-mn.")
L.edu("MN", "edu-foreclosure-disclosure-mn", "foreclosure-disclosure-mn", "Tell Prospective Tenants About a Pending Foreclosure", "CONDITIONAL",
      "If you've received notice of a contract-for-deed cancellation or a mortgage foreclosure sale affecting the property, you must tell a prospective tenant in writing, before signing the lease and before accepting rent or a deposit, including the date the cancellation period or redemption period ends (Minn. Stat. 504B.151). The lease's optional clause records that you did; the duty itself is owed before signing.",
      "MN: Created by the three-bucket scrub (2026-09-29) as the pattern-3 companion to foreclosure-disclosure-mn; content from that row: Minn. Stat. § 504B.151.")
c.add("edu-foreclosure-disclosure-mn", "Minn. Stat. § 504B.151", "CITED", L.g(L.R["foreclosure-disclosure-mn"], "effective_from"),
      "Three-bucket scrub 2026-09-29: pattern-3 companion to foreclosure-disclosure-mn.")
c.touch("foreclosure-disclosure-mn", "now optional (RECOMMENDED); companion edu-foreclosure-disclosure-mn.")

L.edit("MN", "initial-final-inspection-mn", basis=SL, rule="RECOMMENDED",
       why="optional (Taylor's pattern 3): the clause gives the start-of-tenancy inspection-option notice; the duty and its penalty are in edu-inspection-notice-penalty-mn.")
e = L.R["edu-inspection-notice-penalty-mn"]
L.s(e, "bodyText", L.g(e, "bodyText") + " You can give the start-of-tenancy notice in the lease itself (the optional Initial and Move-Out Inspections clause does this) or separately in writing within 14 days of the tenant moving in; the move-out notice still has to be given near the end of the tenancy.")
L.note(e, "MN: Sentence on where the notice can be given added by the three-bucket scrub (2026-09-29), pattern-3 companion to initial-final-inspection-mn; from that row's content (Minn. Stat. § 504B.182).")
c.touch("initial-final-inspection-mn", "now optional (RECOMMENDED); companion edu-inspection-notice-penalty-mn.")
print("MN", c.save(L))

# ---------------- North Dakota ----------------
c = Citations("ND")
move("ND", c, "security-deposit-return-nd", "edu-security-deposit-return-nd", "Deposit Return Deadline and Unclaimed Deposits", "REQUIRED",
     "Within 30 days after the lease ends and the tenant delivers possession, or after a different starting point North Dakota law sets (such as a domestic-violence termination), return the deposit with any interest the law requires, less lawful deductions, and a written itemization of anything you kept (N.D.C.C. 47-16-07.1). If the deposit goes unclaimed for a year after the lease ends, report and remit it under North Dakota's unclaimed property law (47-30.2-04). See the notes on interest, penalties and domestic-violence timing.",
     "N.D.C.C. § 47-16-07.1(1), (3), (4); § 47-16-17.1(8); § 47-30.2-04")
move("ND", c, "termination-by-death-nd", "edu-tenant-death-termination-nd", "If a Tenant Dies", "CONDITIONAL",
     "If a tenant dies, a surviving co-tenant or the tenant's estate may choose to end the lease. It then ends on the last day of the month after the month of death, unless the term would have ended sooner, and the estate owes rent through that date (N.D.C.C. 47-16-18).",
     "N.D.C.C. § 47-16-18")
move("ND", c, "fire-casualty-termination-nd", "edu-casualty-termination-nd", "Fire or Casualty: When the Lease Ends", "CONDITIONAL",
     "If the greater part of the property, or the part that was the tenant's material reason for leasing it, is destroyed or damaged through no fault of the tenant, the tenant may end the lease. If the property is destroyed, the lease ends automatically (N.D.C.C. 47-16-14(4), 47-16-17(2)).",
     "N.D.C.C. §§ 47-16-14(4), 47-16-17(2)")
move("ND", c, "dv-lease-release-nd", "edu-dv-lease-release-nd", "Domestic Violence: Tenant's Right to End the Lease", "CONDITIONAL",
     "A North Dakota tenant who is a victim of domestic violence by a family or household member, or who fears imminent domestic violence against themselves or their minor children by such a person if they stay, may end the lease without penalty or liability (N.D.C.C. 47-16-17.1). The tenant must give you advance written notice, by mail, fax or in person before the tenancy ends, stating that they fear imminent domestic violence from a person named in a court order, an order prohibiting contact, a civil protection order or another record filed with a court; that they need to end the tenancy; and the date it will end. The tenant owes rent for the full month in which the tenancy ends plus one more month's rent, subject to your duty to mitigate, and must pay that on or before termination to be released from the rest of the term; rent and other amounts already owed remain due. The tenancy, including the right of possession, ends on the date in the notice, and it continues for any other tenants. See the notes on confidentiality and deposit timing.",
     "N.D.C.C. § 47-16-17.1(1)-(3), (5)-(7), (9)")
trim_to_notice("ND", "landlord-maintenance-nd", "edu-habitability-baseline-nd",
               "kept only the tenant's written repair-notice duty; the restated landlord duties moved to edu-habitability-baseline-nd. It still supersedes the shared landlord-maintenance.")
L.edu("ND", "edu-habitability-baseline-nd", "landlord-maintenance-nd", "Your Basic Habitability Duties", "REQUIRED",
      "North Dakota requires you to comply with building and housing codes materially affecting health and safety; make all repairs needed to keep the property fit and habitable; keep common areas clean and safe; maintain the electrical, plumbing, sanitary, heating, ventilating, air-conditioning and other facilities and appliances you supply or are required to supply in good and safe working order; provide waste receptacles and arrange removal; and supply running water and reasonable hot water and heat, unless the building isn't required by law to have them or the heat or hot water is under the tenant's exclusive control through a direct utility connection (N.D.C.C. 47-16-13.1). See the note on the tenant's repair-and-deduct remedy.",
      "ND: Created by the three-bucket scrub (2026-09-29) from landlord-maintenance-nd, which keeps only the tenant's repair-notice duty; content unchanged: N.D.C.C. § 47-16-13.1.")
c.add("edu-habitability-baseline-nd", "N.D.C.C. § 47-16-13.1", "CITED", L.g(L.R["landlord-maintenance-nd"], "effective_from"),
      "Three-bucket scrub 2026-09-29: created from landlord-maintenance-nd.")
c.touch("landlord-maintenance-nd", "trimmed to the tenant's repair-notice duty; landlord duties in edu-habitability-baseline-nd.")
L.edit("ND", "termination-notice-nd",
       body="Either Landlord or Tenant may end a month-to-month tenancy under this Lease, including one that continues after the Term, by giving the other written notice at least [state the notice period: at least one calendar month] before the end of a month. Rent is due through the termination date.",
       basis=CT, rule="CONSTRAINED",
       why="Taylor's pattern 2: the notice is the landlord's chosen period; the statutory minimum and rules moved to edu-termination-notice-periods-nd. A period longer than one month also needs lease-notice-initial-requirement-nd (N.D.C.C. § 47-16-15(4)).")
L.edu("ND", "edu-termination-notice-periods-nd", "termination-notice-nd", "Termination Notice Periods", "CONSTRAINED",
      "In North Dakota, either party may end a month-to-month tenancy by giving at least one calendar month's written notice, unless the parties agreed in writing to a longer period or a different notice time; rent is due through the termination date. If a lease doesn't specify its term, notice must be at least as long as the term itself, up to one calendar month. A lease that converts to month-to-month ends on the last day of a month with at least one calendar month's notice (N.D.C.C. 47-16-15). A lease notice requirement longer than one month only binds the tenant if they initial it (see the initialing clause).",
      "ND: Created by the three-bucket scrub (2026-09-29) from termination-notice-nd; content and citations unchanged: N.D.C.C. § 47-16-15(1), (2), (5).",
      topic="termination-notice-periods")
c.add("edu-termination-notice-periods-nd", "N.D.C.C. § 47-16-15(1), (2), (5)", "CITED", L.g(L.R["termination-notice-nd"], "effective_from"),
      "Three-bucket scrub 2026-09-29: created from termination-notice-nd.")
c.touch("termination-notice-nd", "now the landlord's chosen period; statutory rules in edu-termination-notice-periods-nd.")
print("ND", c.save(L))

# ---------------- South Dakota ----------------
c = Citations("SD")
L.merge("SD", "security-deposit-return-sd", "edu-security-deposit-itemized-accounting-sd",
        "Within 21 days after the tenancy ends and you receive the tenant's mailing address or delivery instructions, return the deposit or give the tenant a written statement of the specific reasons for withholding any of it. You may withhold only what is reasonably necessary to remedy the tenant's default in rent or other amounts due under the lease, or to restore the property to its condition at the start of the term, ordinary wear and tear excepted (SDCL 43-32-24).",
        "Opening paragraph added by the three-bucket scrub (2026-09-29) from security-deposit-return-sd (switched off); content unchanged: SDCL 43-32-24, as amended by SL 2026 ch 179 § 1.")
c.fold("security-deposit-return-sd", "edu-security-deposit-itemized-accounting-sd")
MOVES["security-deposit-return-sd"] = "edu-security-deposit-itemized-accounting-sd"
move("SD", c, "dv-lease-release-sd", "edu-dv-lease-release-sd", "Domestic Abuse or Stalking: Tenant's Right to End the Lease", "CONDITIONAL",
     "If a South Dakota tenant or a household member is the victim of alleged domestic abuse, unlawful sexual behavior or stalking, the tenant may end the lease without an early-termination penalty, effective on a specified date, by giving you written notice that the termination is due to fear of imminent danger or injury, with one of these dated within the 30 days before the notice: a signed police report on the incident, a protection order issued in response to it, or documentation from a licensed health care provider who examined the person and has reasonable cause to believe they were a victim (SDCL 43-32-19(3), 43-32-19.1). The tenant owes no otherwise-applicable early-termination fee and no rent for the month after the month they move out.",
     "SDCL 43-32-19(3); SDCL 43-32-19.1")
r = L.R["edu-tenant-termination-causes-sd"]
L.s(r, "content_type", "LANDLORD_EDUCATION"); L.s(r, "lease_clause_basis", ""); L.s(r, "last_checked", "2026-09-29")
L.s(r, "bodyText", "Besides the domestic abuse and stalking right, a South Dakota tenant may end the lease if you don't, within a reasonable time after the tenant's written request, put and keep them in quiet possession or put the property into good condition or repair it; or if the greater part of the property, or the part that was a material inducement to the lease as you had reason to know, is destroyed by any cause other than the tenant's ordinary negligence (SDCL 43-32-19(1), (2)).")
L.note(r, "SD: Three-bucket scrub (2026-09-29): converted in place from a lease clause to education (it restated the tenant's statutory termination rights); content unchanged.")
c.R["edu-tenant-termination-causes-sd"][1] = "LANDLORD_EDUCATION"
c.touch("edu-tenant-termination-causes-sd", "converted from a lease clause to education.")
trim_to_notice("SD", "landlord-maintenance-sd", "edu-habitability-duty-sd",
               "kept only the tenant's written repair-notice duty; the restated landlord duties are in the existing edu-habitability-duty-sd. It still supersedes the shared landlord-maintenance.")
c.touch("landlord-maintenance-sd", "trimmed to the tenant's repair-notice duty; landlord duties in edu-habitability-duty-sd.")
L.edit("SD", "meth-disclosure-sd",
       body="Methamphetamine disclosure. [State one: Landlord has actual knowledge that methamphetamine was previously manufactured on the property (for a building of two or more units, in this unit), and discloses that fact / Landlord has no actual knowledge that methamphetamine was previously manufactured on the property.] Tenant acknowledges receiving this disclosure before becoming obligated under this Lease.",
       basis=SL, rule="RECOMMENDED",
       why="optional (Taylor's pattern 3): the disclosure is owed before the tenant is obligated; the clause now records it instead of restating the duty. Companion: edu-meth-disclosure-sd.")
L.edu("SD", "edu-meth-disclosure-sd", "meth-disclosure-sd", "Disclose Known Prior Meth Manufacturing", "CONDITIONAL",
      "If you actually know methamphetamine was previously manufactured on the property, you must tell the tenant before they become obligated under the lease. For a building of two or more units, the duty covers only the unit you know about (SDCL 43-32-30). The lease's optional clause records the disclosure.",
      "SD: Created by the three-bucket scrub (2026-09-29) as the pattern-3 companion to meth-disclosure-sd; content from that row: SDCL 43-32-30.")
c.add("edu-meth-disclosure-sd", "SDCL 43-32-30", "CITED", L.g(L.R["meth-disclosure-sd"], "effective_from"),
      "Three-bucket scrub 2026-09-29: pattern-3 companion to meth-disclosure-sd.")
c.touch("meth-disclosure-sd", "now optional (RECOMMENDED) and records the disclosure; companion edu-meth-disclosure-sd.")
print("SD", c.save(L))

# ---------------- Ohio ----------------
c = Citations("OH")
move("OH", c, "security-deposit-interest-oh", "edu-security-deposit-interest-oh", "Interest on Larger Deposits", "REQUIRED",
     "If a deposit is more than $50 or one month's rent, whichever is greater, the excess earns interest at 5% a year for any period the tenant stays in possession six months or more. Compute and pay it to the tenant every year. No interest is owed on the part at or below that threshold (R.C. 5321.16(A)).",
     "R.C. 5321.16(A)")
move("OH", c, "flag-display-oh", "edu-flag-display-oh", "Tenants' Right to Display Certain Flags", "PROHIBITED",
     "Ohio doesn't let a lease restrict a tenant from displaying the U.S. flag, the POW/MIA flag, the Ohio flag, or a Defense-approved service flag, displayed according to federal, state and local law and patriotic custom (R.C. 5321.131). Before installing a flag pole or a permanently affixed bracket for the U.S. or POW/MIA flag, the tenant must contact you with reasonable notice to discuss placement and size, and the tenant still has to return the property in the same condition at the end of the term.",
     "R.C. 5321.131")
move("OH", c, "landlord-maintenance-oh", "edu-landlord-duties-oh", "Your Basic Duties as an Ohio Landlord", "REQUIRED",
     "Ohio requires you to comply with building, housing, health and safety codes that materially affect health and safety; make all repairs and do whatever is reasonably necessary to keep the property fit and habitable; keep common areas safe and sanitary; keep the electrical, plumbing, sanitary, heating, ventilating and air-conditioning fixtures and appliances, and elevators, you supply or must supply in good and safe working order; and supply running water, reasonable hot water and reasonable heat at all times, unless the building isn't required by law to have them or the unit's heat or hot water comes from an installation under the tenant's exclusive control on a direct utility connection. If you rent four or more units in the same structure, you must also provide waste receptacles and arrange removal (R.C. 5321.04). These duties can't be waived; see the rent-escrow note for the tenant's remedy.",
     "R.C. 5321.04")
L.merge("OH", "fire-casualty-termination-oh", "edu-casualty-and-mitigation-waivable-oh", "",
        "Sentence added by the three-bucket scrub (2026-09-29) from fire-casualty-termination-oh (switched off); content unchanged: R.C. 5301.11.",
        append="Under the default, rent already owed before the damage stays due, and the tenant stops owing rent only by surrendering possession of all of what remains; they can't stop paying while leaving belongings there or otherwise keeping possession.")
c.fold("fire-casualty-termination-oh", "edu-casualty-and-mitigation-waivable-oh")
MOVES["fire-casualty-termination-oh"] = "edu-casualty-and-mitigation-waivable-oh"
L.edit("OH", "security-deposit-return-oh",
       body="Tenant will provide Landlord with Tenant's forwarding address in writing. If Tenant does not, Tenant remains entitled to the return of any balance due, but is not entitled to damages or attorneys' fees for Landlord's failure to comply with the rules for returning the Security Deposit.",
       basis=SL, rule="RECOMMENDED",
       why="kept the tenant's forwarding-address duty and its landlord-favorable consequence; the restated 30-day return and itemization duty moved to edu-security-deposit-return-oh.")
L.edu("OH", "edu-security-deposit-return-oh", "security-deposit-return-oh", "Deposit Return Deadline and Itemization", "REQUIRED",
      "Within 30 days after the lease ends and the tenant delivers possession, deliver or mail the deposit, less amounts properly applied, with a written itemization of the deductions and the reasons for them (R.C. 5321.16(B)). A tenant who didn't give a forwarding address in writing still gets the balance but can't recover damages or attorney's fees (5321.16(C)).",
      "OH: Created by the three-bucket scrub (2026-09-29) from security-deposit-return-oh; content unchanged: R.C. 5321.16(B), (C).")
c.add("edu-security-deposit-return-oh", "R.C. 5321.16(B), (C)", "CITED", L.g(L.R["security-deposit-return-oh"], "effective_from"),
      "Three-bucket scrub 2026-09-29: created from security-deposit-return-oh.")
c.touch("security-deposit-return-oh", "trimmed to the tenant's forwarding-address duty; return rules in edu-security-deposit-return-oh.")
L.edit("OH", "termination-notice-oh",
       body="Either Landlord or Tenant may end a month-to-month tenancy by giving the other notice at least [state the notice period: at least 30] days before the periodic rental date, or a week-to-week tenancy by notice at least [state the notice period: at least 7] days before the termination date stated in the notice. This Section does not apply to a termination based on a breach of this Lease or of a duty imposed by law.",
       basis=CT, rule="CONSTRAINED",
       why="Taylor's pattern 2: the notice is the landlord's chosen period; the statutory minimums and the R.C. 5321.05(A)(9) exception moved to edu-termination-notice-periods-oh.")
L.edu("OH", "edu-termination-notice-periods-oh", "termination-notice-oh", "Termination Notice Periods", "CONSTRAINED",
      "In Ohio, either party may end a week-to-week tenancy with notice at least 7 days before the termination date, and a month-to-month tenancy with notice at least 30 days before the periodic rental date (R.C. 5321.17). These minimums don't apply to a termination for breach of the lease or of a duty imposed by law, and they don't limit a shorter notice Ohio law requires where a tenant has violated R.C. 5321.05(A)(9).",
      "OH: Created by the three-bucket scrub (2026-09-29) from termination-notice-oh; content unchanged: R.C. 5321.17.",
      topic="termination-notice-periods")
c.add("edu-termination-notice-periods-oh", "R.C. 5321.17", "CITED", L.g(L.R["termination-notice-oh"], "effective_from"),
      "Three-bucket scrub 2026-09-29: created from termination-notice-oh.")
c.touch("termination-notice-oh", "now the landlord's chosen period; statutory rules in edu-termination-notice-periods-oh.")
print("OH", c.save(L))

L.save()
# Earlier batches' switched-off rows named in the checklist, plus this batch's.
MOVES.update({"dv-lockchange-ne": "edu-dv-tenant-rights-ne", "possession-delay-ne": "edu-possession-delay-ne",
              "casualty-termination-ne": "edu-casualty-damage-ne"})
print("checklist mentions annotated:", annotate_checklist(MOVES))
