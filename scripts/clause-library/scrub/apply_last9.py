# Three-bucket scrub, batch 6: FL, AZ, GA, NC, SC, TN, VA, AL, PA (2026-09-29).
# Verdicts: lease-clause-scrub-verdicts.md. Run from the repo root.
# These states' own research already wrote thorough education rows, so most
# switched-off clauses point at an existing row that states the same rules.
import sys
sys.path.insert(0, "scripts/clause-library/scrub")
from scrublib import Library, Citations, annotate_checklist, SL, CT, RD, D

L = Library()
MOVES = {}
MOVED = "Moved from {} by the three-bucket scrub (2026-09-29); content and citations unchanged: {}."


class State:
    def __init__(self, st):
        self.st, self.c = st, Citations(st)

    def cite(self, cid):
        return self.c.R[cid][3]

    def move(self, cid, eid, title, rule, body, topic=None):
        L.off(self.st, cid, eid)
        L.edu(self.st, eid, cid, title, rule, body, f"{self.st}: " + MOVED.format(cid, self.cite(cid)), topic=topic)
        self.c.move(cid, eid)
        MOVES[cid] = eid

    def covered(self, cid, eid, append=""):
        """Switched off; the existing education row already states its rules."""
        why = (f"Three-bucket scrub (2026-09-29): {cid} switched off; this row already states its rules"
               + (", with the added sentence" if append else "") + f" ({self.cite(cid)}).")
        L.merge(self.st, cid, eid, "", why, append=append)
        self.c.fold(cid, eid)
        MOVES[cid] = eid

    def trim(self, cid, body, basis, why, title=None, rule=None):
        if title:
            L.s(L.R[cid], "title", title)
        L.edit(self.st, cid, body=body, basis=basis, rule=rule, why=why)
        self.c.touch(cid, why)

    def new_edu(self, eid, src, title, rule, body, citation, topic=None):
        L.edu(self.st, eid, src, title, rule, body, f"{self.st}: Created by the three-bucket scrub (2026-09-29) from {src}; content unchanged: {citation}.", topic=topic)
        self.c.add(eid, citation, "CITED", L.g(L.R[src], "effective_from"), f"Three-bucket scrub {D}: created from {src}.")

    def optional(self, cid, eid, why):
        L.edit(self.st, cid, basis=SL, rule="RECOMMENDED", why=f"optional (Taylor's pattern 3): {why} Companion: {eid}.")
        self.c.touch(cid, f"now optional (RECOMMENDED); companion {eid}.")

    def done(self):
        print(self.st, self.c.save(L))


POSS = ("If you fail to deliver possession as the lease requires, rent abates until you do, and the tenant may either end the lease by {n}"
        "written notice, in which case you return all prepaid rent and security{t}, or demand that you perform, sue for possession against "
        "{who} wrongfully in possession, and recover damages. If a person's failure to deliver possession is willful and not in good faith, "
        "the tenant can recover from that person up to {mult}.")

# ---------------- Florida ----------------
s = State("FL")
b = L.g(L.R["security-deposit-return-fl"], "bodyText")
choice = b[:b.index(" Landlord will not commingle")]
s.trim("security-deposit-return-fl",
       choice + " If Tenant vacates before the end of the Term, or vacates a periodic tenancy, Tenant will give Landlord at least 7 days' written notice by certified mail or personal delivery before vacating, including an address where Tenant can be reached. If Tenant does not, Landlord is relieved of the statutory notice requirement for claims against the Security Deposit, but Tenant keeps any right Tenant has to the Security Deposit.",
       f"{CT} | {SL}",
       "kept the landlord's holding-method choice and the tenant's 7-day vacating-notice duty; the restated handling, claim-notice, objection, return and transfer rules moved to edu-security-deposit-rules-fl.",
       title="Security Deposit: Holding Method and Vacating Notice")
s.new_edu("edu-security-deposit-rules-fl", "security-deposit-return-fl", "Florida Security Deposit Rules", "REQUIRED",
          "Florida controls how a deposit and advance rent are held and returned (Fla. Stat. 83.49). Don't commingle the funds with your own, or pledge or use them, until they're actually due to you. Where interest is owed, pay it or credit it against the current month's rent at least once a year; a tenant who wrongfully ends the tenancy early gets no interest. If you won't claim against the deposit, return it with any interest within 15 days after the lease ends and the tenant vacates. If you will, give written notice of the claim and the reason within 30 days, by certified mail to the tenant's last known address (or by e-mail under an electronic-notice addendum), in the form 83.49(3)(a) prescribes; miss that and you lose the right to claim against the deposit (you may still sue for damages after returning it). The tenant has 15 days to object in writing; without an objection you may deduct the claim and must send the balance within 30 days of the notice, and the tenant can still sue. The prevailing party in a deposit lawsuit recovers costs and a reasonable attorney's fee. A renewal is a new rental agreement, and a deposit carried forward is a new deposit. On a sale or change of agent, transfer the deposit, advance rent and earned interest with an accounting.",
          s.cite("security-deposit-return-fl"))
s.move("casualty-damage-fl", "edu-casualty-damage-fl", "Fire or Casualty: The Tenant's Options", "CONDITIONAL",
       "If the property is damaged or destroyed, other than by the tenant's wrongful or negligent act, so that the tenant's enjoyment of it is substantially impaired, the tenant may end the lease and move out immediately, or vacate the unusable part and pay rent reduced by that part's fair rental value (Fla. Stat. 83.63). If the lease ends, handle the deposit under 83.49, and give the tenant either the chance to collect belongings when it is safe, or notice of the date by which they can, within a reasonable time.")
s.done()

# ---------------- Arizona ----------------
s = State("AZ")
s.trim("security-deposit-return-az",
       "When the tenancy ends, Landlord may apply property or money held as prepaid Rent and security to all Rent due and, subject to Landlord's duty to mitigate, to all charges specified in this Lease or provided by the Arizona Residential Landlord and Tenant Act, including damages Landlord has suffered because Tenant did not meet Tenant's maintenance obligations. Tenant is asked to give Landlord a forwarding address in writing, and may include Tenant's demand for return of the deposit with it. If Tenant does not dispute the deductions or the amount due within 60 days after the itemized list and amount due are mailed, the amount stated is final and any further claims by Tenant are waived.",
       SL, "kept the landlord's right to apply the deposit, the forwarding-address request and the 60-day finality rule; the restated 14-day itemization, mailing and refund duties are in edu-security-deposit-az.",
       title="Security Deposit: Application and Final Accounting")
s.covered("security-deposit-cap-az", "edu-security-deposit-az")
s.covered("move-in-inspection-az", "edu-security-deposit-az",
          append="You don't have to hold a joint move-out inspection with a tenant being evicted for a material and irreparable breach if you have reasonable cause to fear violence or intimidation.")
s.move("possession-delay-az", "edu-possession-delay-az", "If You Can't Deliver Possession on Time", "CONDITIONAL",
       POSS.format(n="at least 5 days' ", t="", who="you or anyone", mult="the greater of two months' periodic rent or twice actual damages") +
       " If possession is delivered but the property isn't in the condition Arizona law requires, rent doesn't abate on that account; the tenant has the remedies for landlord noncompliance instead (A.R.S. 33-1362).")
s.move("dv-lease-termination-az", "edu-dv-lease-termination-az", "Domestic Violence or Sexual Assault: Tenant's Right to End the Lease", "CONDITIONAL",
       "A tenant who is a victim of domestic violence, or of sexual assault in the property, may end the lease with written notice requesting release, a mutually agreed release date within 30 days, and either a copy of a protective order issued to the tenant or a written law enforcement report that the tenant reported being a victim, if the events happened within the 30 days before the notice (you may waive that limit) (A.R.S. 33-1318). You may ask in writing for the name and address of the person named in the order or report, if the tenant knows it. The tenant owes only rent through the termination date and earlier obligations, payable by move-out, and no future rent, penalty or fee; you may keep prepaid rent for the final month and may not withhold the deposit because of the early termination (only for damage from failure to maintain). If there are several tenants, all tenancies end, and non-victim tenants other than the named person may be released and allowed a new lease if they qualify. The victim may require a new lock at their cost; you may rekey or replace it, keep a key, and refuse a key to the named person, and may not let that person in to reclaim property after they've been served with an order of protection you've received, unless a law enforcement officer escorts them. A law enforcement officer protected by a recent harassment injunction may end the lease the same way after repaying lease concessions received. None of this limits your right to terminate for unrelated reasons.")
s.move("casualty-termination-az", "edu-casualty-termination-az", "Fire or Casualty: The Tenant's Options", "CONDITIONAL",
       "If fire or casualty substantially impairs the tenant's enjoyment of the property, the tenant may move out immediately and tell you in writing within 14 days that they are ending the lease, which then ends on the date they moved out; or, if continued occupancy is lawful, vacate the unusable part and pay rent reduced in proportion to the drop in fair rental value (A.R.S. 33-1366). If the lease ends, return all recoverable security and account for rent as of the date the tenant vacated all or part of the property.")
s.optional("foreclosure-notice-az", "edu-foreclosure-notice-duty-az", "the foreclosure notice is owed before the lease is entered into; the clause carries its statutory text.")
e = L.R["edu-foreclosure-notice-duty-az"]
L.s(e, "bodyText", L.g(e, "bodyText") + " If a foreclosure action began before the lease is signed, give the tenant the statutory move-in notice first; the lease's optional Notice of Possible Foreclosure clause carries its text.")
L.note(e, "AZ: Pattern-3 sentence added by the three-bucket scrub (2026-09-29) for foreclosure-notice-az (A.R.S. § 33-1331(A)).")
s.done()

# ---------------- Georgia ----------------
s = State("GA")
s.covered("security-deposit-cap-ga", "edu-security-deposit-rules-ga")
s.trim("security-deposit-return-ga",
       "If Tenant is present at the move-out inspection, Landlord and Tenant will both sign the damage list, and the signed list is conclusive evidence of its accuracy; if Tenant disagrees with any item, Tenant must state in writing the specific items Tenant disputes and sign that statement. Landlord may keep from the Security Deposit amounts for unpaid Rent or late fees, abandonment of the property, unpaid utility charges, repair work or cleaning Tenant contracted for with third parties, unpaid pet fees, and actual damages caused by Tenant's breach, which Landlord will attempt to mitigate. Tenant should give Landlord a forwarding address in writing.",
       SL, "kept the tenant's sign-or-dissent duty, the landlord's permitted deductions and the forwarding-address request; the restated inspection timing, 30-day return, wear-and-tear and mailing rules are in edu-security-deposit-rules-ga.",
       title="Security Deposit: Move-Out List and Deductions")
s.move("dv-lease-termination-ga", "edu-dv-lease-termination-ga", "Family Violence or Stalking Order: Tenant's Right to End the Lease", "CONDITIONAL",
       "A tenant protected, with their minor child, by a civil or criminal family violence or stalking order may end the lease effective 30 days after giving you written notice with a copy of the order (and, for an ex parte temporary protective order, the police report), even as a joint tenant with no rent obligation (O.C.G.A. 44-7-23). The tenant may stay until the termination takes effect and owes rent prorated to that date, payable when it would have been due, plus sums owed before termination, but no other fees, rent or damages for the early termination; if they end it 14 or more days before occupancy, nothing is owed. This right can't be waived or modified.")
s.optional("flood-disclosure-ga", "edu-flood-disclosure-ga", "the flooding notice is owed as a separate writing before the lease is signed; the clause records it.")
s.new_edu("edu-flood-disclosure-ga", "flood-disclosure-ga", "Flooding Notice Before Signing", "CONDITIONAL",
          "If flooding has damaged any part of the living space at least three times in the five years before the lease, give the prospective tenant a separate written flooding notice before the lease is signed (O.C.G.A. 44-7-20). The lease's optional Flooding Notice clause carries the text and the tenant's acknowledgment.",
          s.cite("flood-disclosure-ga"))
s.done()

# ---------------- North Carolina ----------------
s = State("NC")
s.trim("late-fee-limit-nc",
       "If any payment of Monthly Rent is five or more calendar days late, counting from the day after it was due, Tenant will owe a late fee of {{late_fee_amount}}. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
       f"{CT} | {RD}: N.C. Gen. Stat. § 42-46(a)",
       "kept the landlord's fee and its five-day trigger; the restated cap, subsidy, once-only and utility rules are in edu-late-and-eviction-fees-nc.")
s.covered("security-deposit-cap-nc", "edu-security-deposit-rules-nc")
s.covered("security-deposit-return-nc", "edu-security-deposit-rules-nc")
s.move("dv-lease-termination-nc", "edu-dv-lease-termination-nc", "Domestic Violence, Sexual Assault or Stalking: Termination and Lock Changes", "CONDITIONAL",
       "A protected tenant (a tenant or household member who is a victim of domestic violence, sexual assault or stalking) may end the lease by written notice effective at least 30 days after you receive it, with a copy of a non-ex-parte Chapter 50B or 50C protective order, a criminal no-contact order, or an Address Confidentiality Program card; a domestic violence or sexual assault victim must also include a safety plan from a qualifying program, dated during the tenancy, recommending relocation (N.C. Gen. Stat. 42-45.1). The tenant owes rent prorated to the termination date and nothing else for the early termination (nothing at all if they end it 14 or more days before occupancy), and you may not apply the deposit to early-termination damages. Remaining tenants stay bound, and a perpetrator excluded by court order stays liable. Any tenant may ask, orally or in writing, for the locks to be changed: within 48 hours with no documentation if the perpetrator isn't a tenant, or within 72 hours of receiving a stay-away order if they are (42-42.3); the protected tenant pays, and if you don't act in time may change them and must give you a key within 48 hours. You may not terminate, refuse to renew or retaliate because of victim status or use of these rights, which can't be waived.")
s.done()

# ---------------- South Carolina ----------------
s = State("SC")
s.trim("security-deposit-return-sc",
       "When the tenancy ends, Landlord may withhold from the Security Deposit and any prepaid Rent accrued Rent and the damages Landlord has suffered because Tenant did not comply with Tenant's obligations under this Lease and the South Carolina Residential Landlord and Tenant Act. Tenant will give Landlord in writing a forwarding or new address to which the written notice and any amount due may be sent.",
       SL, "kept the landlord's withholding right and the tenant's forwarding-address duty; the restated 30-day itemization, mailing and sale rules are in edu-security-deposit-rules-sc.",
       title="Security Deposit: Withholding and Forwarding Address")
s.optional("security-deposit-standards-sc", "edu-security-deposit-rules-sc", "the statement of deposit standards is owed before signing; the clause records it.")
e = L.R["edu-security-deposit-rules-sc"]
L.s(e, "bodyText", L.g(e, "bodyText") + " A landlord renting more than four adjoining units who uses different standards to set deposits must give each tenant a written statement of those standards before the lease is signed (S.C. Code Ann. 27-40-410(c)); the lease's optional clause records it.")
L.note(e, "SC: Pattern-3 sentence added by the three-bucket scrub (2026-09-29) for security-deposit-standards-sc.")
s.move("possession-delay-sc", "edu-possession-delay-sc", "If You Can't Deliver Possession on Time", "CONDITIONAL",
       POSS.format(n="at least 5 days' ", t="", who="you or anyone", mult="the greater of three months' periodic rent or twice actual damages, plus reasonable attorney's fees") +
       " You aren't liable for damages if a previous tenant held over without your consent and you made reasonable efforts to get possession (S.C. Code Ann. 27-40-620).")
s.move("dv-lease-termination-sc", "edu-dv-lease-termination-sc", "Domestic Violence by a Co-Tenant: Tenant's Right to End the Lease", "CONDITIONAL",
       "A protected tenant (a victim of domestic abuse or violence by another tenant on the same lease, documented by a restraining order, order of protection or conviction) may end their future obligations by written notice within 60 days after the incident, with the documentation, effective at least 30 days after you receive it unless you agree to an earlier date (S.C. Code Ann. 27-40-350). The tenant gives up possession and owes rent and other amounts through that date and any damage they caused, but no early-termination fee; any deposit due is returned at the end of the term. Other tenants stay liable for the full rent; if the perpetrator is the only remaining tenant, you may end the lease on 5 days' written notice and recover actual damages from them. You may not require the protected tenant to leave before the 60 days end, except by agreement, or retaliate.")
s.move("casualty-termination-sc", "edu-casualty-termination-sc", "Fire or Casualty: The Tenant's Options", "CONDITIONAL",
       "If fire or casualty substantially impairs normal use and occupancy, the tenant may move out immediately and tell you in writing within 7 days that they are ending the lease, which then ends on the date they moved out; or, if continued occupancy is lawful, vacate the unusable part and pay rent reduced in proportion to the drop in fair-market rental value (S.C. Code Ann. 27-40-650). Account for rent as of the date of the casualty. If the lease ends, return the recoverable deposit and prepaid rent, unless the tenant caused the fire or casualty, in which case you may withhold them but must still give the itemized written notice.")
s.done()

# ---------------- Tennessee ----------------
s = State("TN")
s.trim("late-fee-limit-tn",
       "If any Rent is not paid in full by the end of the grace period, Tenant will owe a late fee of {{late_fee_amount}}. The grace period is five days, beginning on and counting the day the Rent is due. Landlord's acceptance of a late payment does not change the due date of any later payment.",
       CT, "kept the landlord's fee and grace period; the restated Sunday and holiday rule and the 10% cap are in edu-late-fee-rules-tn.")
b = L.g(L.R["security-deposit-return-tn-act"], "bodyText")
drop = b[b.index(" If Tenant has vacated without written notice"):b.index(" If Tenant vacates owing Rent")]
s.trim("security-deposit-return-tn-act", b.replace(drop, ""), f"{CT} | {SL}",
       "removed only the restated duty to inspect without the tenant; the account-location statement, inspection notice, the waiver warning the statute requires in the lease, and the landlord's rights stay (edu-security-deposit-rules-tn).")
L.s(L.R["security-deposit-return-tn-other"], "lease_clause_basis", f"{CT} | {SL}")
L.edit("TN", "security-deposit-return-tn-other",
       why="reviewed and kept: outside the URLTA counties no deposit statute applies, so the 30-day return is the lease's own term, not a restated duty (verdict revised from split).")
s.c.touch("security-deposit-return-tn-other", "kept whole: a contract term outside the URLTA counties.")
s.move("dv-lease-termination-tn", "edu-dv-lease-termination-tn", "Domestic Abuse, Sexual Assault or Stalking: Tenant's Right to End the Lease", "CONDITIONAL",
       "For a lease entered into or renewed on or after July 1, 2021, a tenant who, or whose household family member, is a domestic abuse, sexual assault or stalking victim may end the lease with written notice requesting release, a mutually agreed release date within 30 days, and either an order of protection issued or extended after a hearing finding them a victim, or documentation of a criminal charge based on a police report, dated no more than 60 days before the notice (Tenn. Code Ann. 66-28-205). The tenant moves out within 30 days of notice or as agreed and owes rent for the full month in which the tenancy ends and outstanding obligations, but no future rent, penalty or fee; other parties aren't released. Don't reveal information that could locate the tenant without written consent unless law or a court requires it, and don't terminate or evict solely because of victim status. See also the note on evicting only the perpetrator.")
s.trim("casualty-termination-tn",
       "If restoring the property to its undamaged condition after fire or casualty requires Tenant to vacate, Landlord may terminate this Lease within 14 days after giving Tenant written notice. This Section does not relieve Tenant of liability for damage caused by the fault or neglect of Tenant or anyone at the property with Tenant's consent.",
       SL, "kept the landlord's termination right and the tenant's liability for damage they cause; the tenant's statutory options moved to edu-casualty-termination-tn.",
       title="Fire or Casualty: Landlord's Right to End the Lease")
s.new_edu("edu-casualty-termination-tn", "casualty-termination-tn", "Fire or Casualty: The Tenant's Options", "CONDITIONAL",
          "If fire or casualty substantially impairs use of the property, or leaves it untenantable or unfit (including by a government finding), the tenant may move out immediately and tell you in writing within 14 days that they are ending the lease, which then ends on the date they moved out (Tenn. Code Ann. 66-28-503). If the lease ends, return all prepaid rent and the recoverable deposit, accounting for rent as of the date the tenant returned the keys or moved out, whichever is earlier.",
          s.cite("casualty-termination-tn"))
s.trim("periodic-tenancy-notice-tn",
       "If this Lease continues as a month-to-month tenancy, either Landlord or Tenant may end it by written notice given to the other at least [state the notice period: at least 30] days before the periodic rental date specified in the notice as the termination date. If this Lease continues as a week-to-week tenancy, either party may end it by written notice given at least [state the notice period: at least 10] days before the termination date. Rent remains payable through the termination date. This Section does not limit either party's right to end this Lease earlier where this Lease or applicable law allows it.",
       CT, "Taylor's pattern 2: the notice periods are the landlord's chosen periods; the statutory minimums moved to edu-termination-notice-periods-tn.", rule="CONSTRAINED")
s.new_edu("edu-termination-notice-periods-tn", "periodic-tenancy-notice-tn", "Ending a Month-to-Month or Week-to-Week Tenancy", "CONSTRAINED",
          "Tennessee sets minimum notice to end a periodic tenancy: at least 30 days before the periodic rental date for month-to-month, and at least 10 days for week-to-week (Tenn. Code Ann. 66-28-512(a), 66-7-109). Your lease states your chosen periods; use these minimums as the guardrail.",
          s.cite("periodic-tenancy-notice-tn"), topic="termination-notice-periods")
s.done()

# ---------------- Virginia ----------------
s = State("VA")
s.trim("late-fee-limit-va",
       "If Tenant does not pay Monthly Rent in full within {{late_fee_grace_days}} days after it is due, Tenant will owe a late charge of {{late_fee_amount}}. Landlord's acceptance of a late payment does not change the due date of any later payment.",
       f"{CT} | {RD}: Va. Code Ann. § 55.1-1204(E)",
       "kept the landlord's fee (it must be in the written lease to be charged); the restated 10% cap is in edu-late-fee-rules-va.")
s.trim("returned-payments-va",
       "If a check or electronic funds transfer Tenant gives Landlord is refused or rejected because of insufficient funds or because there is no account, or because a stop-payment order was placed in bad faith, Tenant will pay Landlord a processing fee of {{nsf_fee}}, together with any other amounts Virginia law allows Landlord to recover for a dishonored payment. If the dishonored payment was for Rent, Landlord may give Tenant written notice requiring payment within 14 days by cash, cashier's check, certified check or a completed electronic funds transfer, and may terminate this Lease as Virginia law provides if Tenant does not pay within that period.",
       CT, "kept the landlord's fee and 14-day demand right; the restated $50 cap is in edu-dishonored-payment-remedies-va.")
s.trim("acceptable-payment-methods-va",
       "Landlord accepts payment of Rent and the Security Deposit by personal check and by money order, and also by the following methods: [list any other accepted methods, e.g. online payment portal, ACH transfer, debit or credit card]. The accepted payment methods may be changed only by a written agreement signed by Landlord and Tenant.",
       CT, "kept the landlord's accepted methods; the restated receipt and fee rules are in edu-rent-payment-rules-va.")
s.covered("security-deposit-return-va", "edu-security-deposit-rules-va")
s.covered("renewal-notice-va", "edu-renewal-and-rent-increase-va")
s.covered("dv-lease-termination-va", "edu-dv-tenancy-protections-va")
s.covered("foreclosure-notice-va", "edu-sale-and-foreclosure-va")
s.move("redemption-rights-va", "edu-redemption-rights-va", "The Tenant's Right of Redemption", "CONDITIONAL",
       "If you file an eviction case only for nonpayment of rent, the tenant (or someone for them) can have it dismissed by paying you, your attorney or the court all rent due as of the court date, other charges and fees, late charges, reasonable attorney fees and court costs at or before the first return date, or by presenting a written commitment from a local government or nonprofit to pay within 10 days (Va. Code Ann. 55.1-1250). After the first return date, the tenant can still cancel a scheduled eviction by paying everything claimed, including sheriff fees, at least 48 hours before it. On written request, give the tenant a written statement of all amounts owed; redemption payments come by cashier's check, certified check or money order. A landlord with four or fewer units may limit redemption to once per lease period with written notice (the lease's optional clause).")
s.move("portable-solar-va", "edu-portable-solar-va", "Tenants' Right to Plug-In Solar (From 2027)", "PROHIBITED",
       "From January 1, 2027, a tenant may install a small portable solar device (up to 1,200 watts per unit, plugged into an outlet, meeting Virginia's safety and certification requirements) on the exterior of their premises, subject to your reasonable restrictions on size, place and manner (Va. Code Ann. 55.1-1212.1). The tenant gives you written notice at least seven days before, with documentation and the proposed location, and is responsible for any damage. You may prohibit or restrict installation elsewhere on the property; the right doesn't apply where utilities are billed by ratio billing, or to devices needing alterations to the building, wiring or panels without your written approval. A landlord with four or fewer units isn't bound and may require consent (the lease's optional clause).")
s.move("military-lease-termination-va", "edu-military-lease-termination-va", "Military Tenants: Right to End the Lease", "CONDITIONAL",
       "A member of the U.S. Armed Forces, or a National Guard member on full-time duty or serving as a civil service technician, may end the lease on receiving permanent change of station orders, temporary duty orders of more than three months, discharge or release, orders to government quarters forfeiting the housing allowance, or a stop-movement order of at least 30 days that prevents occupancy (Va. Code Ann. 55.1-1235). The tenant gives written notice effective at least 30 days after the next rent due date, and before then a copy of the orders or a commanding officer's letter. You may not charge liquidated damages; the tenant's maintenance duties continue to the termination date, and federal Servicemembers Civil Relief Act rights still apply.")
s.trim("casualty-termination-va",
       "If fire or casualty damage to the property or premises requires Tenant's removal and substantially impairs Tenant's use and enjoyment of the property, Landlord may terminate this Lease by giving Tenant 14 days' notice (21 days' notice on or after January 1, 2027). On and after January 1, 2027, before giving that notice Landlord will meet or make a reasonable effort to meet with Tenant about the extent of the damage and any reasonable alternatives to termination, and will offer Tenant any substantially similar unit in the same complex that is available within a reasonable time on the terms of this Lease, unless Landlord has determined that Tenant's violation of Tenant's maintenance obligations caused the damage.",
       SL, "kept the landlord's termination right with its 2027 conditions; the tenant's options and the deposit and rent rules moved to edu-casualty-termination-va.",
       title="Fire or Casualty: Landlord's Right to End the Lease")
s.new_edu("edu-casualty-termination-va", "casualty-termination-va", "Fire or Casualty: The Tenant's Options", "CONDITIONAL",
          "If fire or casualty substantially impairs the tenant's use and enjoyment of the property, or repairs can be made only if the tenant leaves, the tenant may move out and, within 14 days (21 days if they vacate on or after January 1, 2027), give written notice that they are ending the lease, which then ends on the date they moved out (Va. Code Ann. 55.1-1240). From 2027, a tenant who receives your termination notice may ask in writing within seven days that you reevaluate the damage with them. If the lease ends, return the deposit as the law requires and any prepaid rent, with interest recoverable by law, unless you reasonably believe the tenant, an occupant or a guest caused the damage, in which case give a written statement based on the damage. Rent is prorated as of the casualty date, and if continued occupancy is lawful, rent is reasonably reduced for the period of impairment.",
          s.cite("casualty-termination-va"))
for cid in ["meth-disclosure-va", "defective-drywall-disclosure-va", "military-air-zone-disclosure-va"]:
    s.optional(cid, "edu-pre-signing-disclosures-va", "the disclosure is owed in writing before the lease is signed; the clause records it.")
s.new_edu("edu-pre-signing-disclosures-va", "military-air-zone-disclosure-va", "Disclosures Owed Before Signing: Meth, Drywall, Military Air Zones", "CONDITIONAL",
          "Before a lease is signed, Virginia requires written disclosure if you actually know the property was used to manufacture methamphetamine and hasn't been cleaned up under Department of Health guidelines (Va. Code Ann. 55.1-1219), or contains defective drywall that hasn't been remediated (55.1-1218), and if the property is in a noise zone or accident potential zone on the official zoning map of a locality with a military air installation (55.1-1217). The lease's optional clauses record these disclosures.",
          "Va. Code Ann. §§ 55.1-1217, 55.1-1218, 55.1-1219")
s.done()

# ---------------- Alabama ----------------
s = State("AL")
s.trim("security-deposit-return-al",
       "When the tenancy ends and Tenant delivers possession, Landlord may apply the Security Deposit to accrued Rent and to damages Landlord has suffered because Tenant did not meet Tenant's statutory duties to keep and use the property properly. When Tenant vacates, Tenant will give Landlord a valid forwarding address in writing. Under Alabama law, a deposit refund or refund check that Tenant does not claim within 90 days is forfeited.",
       SL, "kept the landlord's application right, the tenant's forwarding-address duty and the 90-day forfeiture; the restated 60-day refund, wear-and-tear, mailing and sale rules are in edu-security-deposit-rules-al.",
       title="Security Deposit: Application and Forwarding Address")
s.trim("security-deposit-cap-al",
       "Additional security Landlord requires for pets, for changes to the property, or for increased liability risks, and its purpose: [state any additional security, its amount and its purpose, or state 'None']. Rent that Tenant pays in advance for a specific rental period is prepaid Rent, not security.",
       f"{CT} | {SL}",
       "kept the landlord's additional-security terms; the restated one-month cap is in edu-security-deposit-rules-al. Basis recorded as the landlord's own term rather than a required disclosure, since whether § 35-9A-201(a) requires the statement in the lease was never confirmed.",
       title="Additional Security")
s.move("possession-delay-al", "edu-possession-delay-al", "If You Can't Deliver Possession on Time", "CONDITIONAL",
       POSS.format(n="", t=" within five days", who="anyone", mult="the greater of three months' periodic rent or actual damages, plus reasonable attorney's fees") + " (Ala. Code 35-9A-402)")
s.move("casualty-termination-al", "edu-casualty-termination-al", "Fire or Casualty: The Tenant's Options", "CONDITIONAL",
       "If fire or casualty not caused by the tenant substantially impairs their enjoyment of the property, the tenant may move out immediately and tell you in writing within 14 days that they are ending the lease, which then ends on the date they moved out; or, if continued occupancy is lawful, vacate the unusable part and pay rent reduced in proportion to the drop in fair rental value (Ala. Code 35-9A-406). If the lease ends, return the recoverable deposit and all unearned prepaid rent, accounting for rent as of the date of the casualty.")
s.done()

# ---------------- Pennsylvania ----------------
s = State("PA")
s.trim("security-deposit-return-pa",
       "Landlord may keep all or part of the Security Deposit, including unpaid interest, for Rent Tenant has not paid or for Tenant's breach of another term of this Lease. When this Lease ends or Tenant surrenders the property, Tenant will give Landlord Tenant's new address in writing. If Tenant does not, Pennsylvania law relieves Landlord of liability under the statute that sets the deposit-return deadlines and penalties.",
       SL, "kept the landlord's withholding right and the tenant's new-address duty with its consequence; the restated 30-day list, forfeiture and double-damages rules are in edu-security-deposit-rules-pa.",
       title="Security Deposit: Withholding and New Address")
b = L.g(L.R["security-deposit-holding-pa"], "bodyText")
s.trim("security-deposit-holding-pa", b[:b.index(" If Landlord moves the Security Deposit")],
       f"{RD}: 68 P.S. § 250.511b(a)",
       "kept the required written notice of where the deposit is held (or the bond); the restated notice-on-transfer and interest rules are in edu-security-deposit-rules-pa.",
       title="Where the Security Deposit Is Held")
s.done()

L.save()
print("checklist mentions annotated:", annotate_checklist(MOVES))
