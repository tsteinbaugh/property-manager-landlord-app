# Three-bucket scrub, batch 5: Nevada, Texas, New Jersey (2026-09-29).
# Verdicts: lease-clause-scrub-verdicts.md. Run from the repo root.
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

    def fold(self, cid, eid, prepend="", append=""):
        L.merge(self.st, cid, eid, prepend, f"Content from {cid} (switched off) added by the three-bucket scrub (2026-09-29); unchanged: {self.cite(cid)}.", append=append)
        self.c.fold(cid, eid)
        MOVES[cid] = eid

    def trim(self, cid, body, basis, why, covered_by=None, title=None, rule=None):
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


# ---------------- Nevada ----------------
s = State("NV")
s.move("possession-delay-nv", "edu-possession-delay-nv", "If You Can't Deliver Possession on Time", "CONDITIONAL",
       "If you fail to deliver possession as the lease requires, rent abates until you do, and the tenant may end the lease on at least 5 days' written notice (you return all prepaid rent, the recoverable deposit and any payment made to secure the lease), demand performance and sue for possession against you or anyone wrongfully in possession and recover actual damages, or pursue any other remedy (NRS 118A.370). You aren't liable for damages if you used due diligence to evict a holdover tenant or fix the condition keeping the tenant out.")
s.fold("dv-lease-termination-nv", "edu-dv-termination-documentation-nv",
       prepend="If a tenant, co-tenant or household member (someone related by blood or marriage and living with the tenant) is the victim of domestic violence, harassment, sexual assault or stalking, the tenant or any co-tenant may end the lease by written notice, effective at the end of the current rental period or 30 days after notice, whichever is sooner, describing the reason and attaching the required documentation, if the events happened within the 90 days before the notice (NRS 118A.345). The terminating tenant owes only rent through termination and other outstanding obligations; you may keep prepaid rent for the final period (refunding any excess), and you may not withhold the deposit because of the early termination. Don't give the adverse party any information about the tenant's whereabouts. After notice, the tenant may require a new lock at their cost (you may rekey a working lock or replace the mechanism with one of equal or better quality); don't give the adverse party a key, or access to reclaim property unless a law enforcement officer is present.")
s.move("infirmity-death-termination-nv", "edu-infirmity-death-termination-nv", "Older or Disabled Tenants: Relocation and Death of a Co-Tenant", "CONDITIONAL",
       "A tenant who is 60 or older or has a physical or mental disability may end the lease on 30 days' written notice, given within 60 days after relocating, if their condition requires a move for care or treatment that can't be provided in the dwelling; a co-tenant may do the same if also 60 or older or disabled, or if they became a tenant on or after the date the relocating tenant signed (NRS 118A.340). Such a tenant may also end the lease on 60 days' written notice, within three months after the death of their spouse or co-tenant. The notice must set out the facts and, for a relocation, include reasonable verification of the condition and the need to move. A tenant's death does not by itself give you a right to end the lease.")
s.move("property-tax-rent-disclosure-nv", "edu-property-tax-rent-disclosure-nv", "Annual Property Tax Statement to Tenants", "REQUIRED",
       "Each July, and whenever the rent changes, give the tenant a written statement showing, for each periodic rent payment, the amount that represents property taxes you paid and the remainder. If you pay taxes on several properties together, apportion the tax among the rented properties by area and reduce it to the rent period (NRS 118.165).")
s.trim("late-fee-nv",
       "If Tenant fails to pay Monthly Rent in full within {{late_fee_grace_days}} days [not fewer than 3 calendar days] after it is due, a late fee of {{late_fee_amount}} [not more than 5% of the Monthly Rent] will be assessed. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
       f"{CT} | {RD}: NRS 118A.200(3)",
       "kept the landlord's fee and grace period (the lease must state them); the 3-day floor and 5% cap are now bracket prompts for the landlord, and the rules moved to edu-late-fee-rules-nv.")
s.new_edu("edu-late-fee-rules-nv", "late-fee-nv", "Nevada Late Fee Rules", "CONSTRAINED",
          "A Nevada late fee must be stated in the lease, can't be charged until rent is at least 3 calendar days late, and can't exceed 5% of the periodic rent; the maximum can't be increased because of a late fee charged earlier (NRS 118A.210(4)). Use these limits as a guardrail when you enter the fee.",
          s.cite("late-fee-nv"))
s.trim("security-deposit-cap-nv",
       "Tenant may, if Landlord consents, purchase a surety bond in place of all or part of the Security Deposit.",
       SL, "kept the surety-bond option (the landlord's choice to accept one); the three-month cap and the bar on requiring a bond are in edu-security-deposit-rules-nv.",
       title="Surety Bond Option", rule="CONDITIONAL")
s.trim("security-deposit-return-nv",
       "Except for a nonrefundable cleaning charge of [state a reasonable amount, or 'none'], no part of the Security Deposit is nonrefundable. Tenant is asked to give Landlord a forwarding address in writing.",
       f"{CT} | {SL}",
       "kept the landlord's nonrefundable cleaning charge (it must be stated in the lease) and the forwarding-address request; the claim, accounting and return rules are in edu-security-deposit-rules-nv.")
s.trim("rent-increase-notice-nv",
       "During the Term, the Monthly Rent will not be increased except as this Lease expressly provides.",
       SL, "kept the no-mid-term-increase term; the statutory 60-day and 30-day notice rule moved to edu-rent-increase-notice-nv.",
       title="Rent During the Term")
s.new_edu("edu-rent-increase-notice-nv", "rent-increase-notice-nv", "Notice Before Raising Rent", "REQUIRED",
          "You may not raise rent without serving the tenant written notice at least 60 days before the first increased payment, or at least 30 days before for a periodic tenancy of less than a month (NRS 118A.300).",
          s.cite("rent-increase-notice-nv"))
s.trim("casualty-termination-nv",
       "If the property is damaged or destroyed by fire or casualty to an extent that Tenant's enjoyment of it is substantially impaired, Landlord may terminate this Lease.",
       SL, "kept the landlord's termination right; the tenant's statutory options moved to edu-casualty-termination-nv.",
       title="Fire or Casualty: Landlord's Right to End the Lease")
s.new_edu("edu-casualty-termination-nv", "casualty-termination-nv", "Fire or Casualty: The Tenant's Options", "CONDITIONAL",
          "If fire or casualty substantially impairs the tenant's enjoyment of the property, the tenant may move out immediately and tell you within 7 days that they are ending the lease, which then ends on the date they moved out; or, if continued occupancy is lawful, vacate the unusable part and pay rent reduced in proportion to the drop in fair rental value or lack of use (NRS 118A.400). If the lease ends, return all prepaid rent and the recoverable deposit, accounting for rent as of the date they moved out. None of this applies if the tenant, a household member or someone there with the tenant's consent caused the fire or casualty deliberately or negligently.",
          s.cite("casualty-termination-nv"))
s.optional("foreclosure-disclosure-nv", "edu-foreclosure-disclosure-nv", "the written foreclosure disclosure is owed before the tenant enters the lease; the clause records it.")
s.new_edu("edu-foreclosure-disclosure-nv", "foreclosure-disclosure-nv", "Disclose Foreclosure Proceedings Before Signing", "CONDITIONAL",
          "Before a tenant enters into a lease, disclose in writing whether the property is the subject of any foreclosure proceedings (NRS 118A.275). The lease's optional clause records the disclosure.",
          s.cite("foreclosure-disclosure-nv"))
print("NV", s.c.save(L))

# ---------------- Texas ----------------
s = State("TX")
s.trim("late-fee-safe-harbor-tx",
       "If any portion of the Rent for a rental period remains unpaid {{late_fee_grace_days}} days [not fewer than two full days] after the date it was originally due, Tenant will pay a late fee consisting of an initial fee of {{late_fee_amount}}[, plus a daily fee of {{late_fee_daily_amount}} for each additional day any portion of that Rent remains unpaid]. Landlord and Tenant agree the late fee is a reasonable estimate of uncertain damages to Landlord related to the late payment of rent. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
       f"{CT} | {RD}: Tex. Prop. Code § 92.019",
       "kept the landlord's fee and the agreed-damages sentence; the two-day floor is now a bracket prompt, and the 12%/10% cap and written-statement duty are in edu-late-fee-rules-tx.")
s.trim("nsf-fee-limit-tx",
       "If any payment of Rent or other amount due under this Lease is dishonored and returned unpaid, Tenant will pay Landlord a processing fee of {{nsf_fee}}. Landlord may require that the payment be replaced by a cashier's check, certified check, or money order. If more than two of Tenant's payments during the Term are returned unpaid, Landlord may require all future payments of Rent to be made by cashier's check, certified check, or money order.",
       CT, "kept the landlord's fee and payment-method rights; the $30 cap moved to edu-returned-payment-fee-tx.")
s.new_edu("edu-returned-payment-fee-tx", "nsf-fee-limit-tx", "Returned Payment Fee Limit", "CONSTRAINED",
          "Texas caps the processing fee for a dishonored payment at $30 (Tex. Bus. & Com. Code 3.506). Use it as a guardrail when you enter the fee.",
          s.cite("nsf-fee-limit-tx"))
body = L.g(L.R["utility-submetering-disclosure-tx"], "bodyText")
cut = " Landlord will not charge Tenant more than the charges the law permits for this service"
assert cut in body
s.trim("utility-submetering-disclosure-tx", body[:body.index(cut)],
       f"{RD}: 16 Tex. Admin. Code § 24.279",
       "kept the required disclosures; the restated charge, pass-through and 5% water late-fee limits are in edu-water-submetering-tx.")
s.trim("security-deposit-return-tx",
       "Tenant will give Landlord a written statement of Tenant's forwarding address for the purpose of refunding the Security Deposit. Notices and other communications about the Security Deposit may be sent by e-mail if Tenant and Landlord or Landlord's agent have previously communicated by e-mail, and Landlord may designate a specific e-mail address for Tenant to use for that purpose.",
       SL, "kept the forwarding-address statement and e-mail designation; the 30-day refund, itemization and wear-and-tear rules are in edu-security-deposit-rules-tx.")
s.optional("emergency-phone-tx", "edu-emergency-phone-tx", "the statute requires the landlord to provide the number, not to put it in the lease; the lease is a convenient place.")
s.new_edu("edu-emergency-phone-tx", "emergency-phone-tx", "Provide an Emergency Repair Phone Number", "REQUIRED",
          "You must give tenants a 24-hour telephone number for reporting emergencies that materially affect a tenant's physical health or safety; if you have an on-site management or superintendent's office, post the number prominently outside it (Tex. Prop. Code 92.020). The lease's optional clause is a convenient place to give it.",
          s.cite("emergency-phone-tx"))
print("TX", s.c.save(L))

# ---------------- New Jersey ----------------
s = State("NJ")
s.move("security-deposit-interest-nj", "edu-security-deposit-rules-nj", "Security Deposit Rules", "REQUIRED",
       "New Jersey's Rent Security Deposit Act controls deposits, and a tenant can't waive it (N.J.S.A. 46:8-19 et seq.). Amount: no more than one and a half months' rent, and any added security in a year may not exceed 10% of the current deposit. Holding: keep it in trust, unmixed with your own money, in a New Jersey interest-bearing account or fund of the required kind. Notice: within 30 days of receiving it, tell the tenant in writing the institution's name and address, the type of account, the current rate and the amount; give the same notice within 30 days after moving it, after any transfer of ownership or control, and with each annual interest payment. Interest belongs to the tenant: pay it in cash each year, or credit it toward rent on the renewal or anniversary date, or on January 31 if you've told the tenant in writing. If you fail to hold it, give a notice or pay interest, the tenant may give written notice to apply the deposit plus 7% interest to rent, after which you can't demand another deposit (for a missed annual payment or notice alone, the tenant must first give notice and allow 30 days). Use: make no deduction while the tenant is in possession. Return: within 30 days after the lease ends, return the deposit plus interest, less lawful charges, by personal delivery or registered or certified mail, with an itemized statement of the interest and each deduction; a shorter timetable applies if the tenant is displaced by fire, flood, condemnation or evacuation (46:8-21.1) or ends the lease as a domestic violence victim (46:8-9.6).")
s.c.fold("security-deposit-return-nj", "edu-security-deposit-rules-nj")
s.c.rows.append(["security-deposit-return-nj", "LEASE_CLAUSE", "NJ", "N.J.S.A. 46:8-21.1, 46:8-21.2, 46:8-24", "CITED", "VERIFIED",
                 L.g(L.R["security-deposit-return-nj"], "effective_from"), D, "",
                 f"Three-bucket scrub {D}: trimmed to the deposit amount and permitted uses; the restated rules are in edu-security-deposit-rules-nj."])
s.c.R["security-deposit-return-nj"] = s.c.rows[-1]
L.s(L.R["security-deposit-return-nj"], "title", "Security Deposit: Amount and Use")
L.edit("NJ", "security-deposit-return-nj",
       body="Tenant will pay a Security Deposit of {{security_deposit}}. Landlord may use the Security Deposit only for charges permitted by this Lease, including unpaid Rent and damage beyond ordinary wear and tear.",
       basis=f"{CT} | {SL}",
       why="kept the deposit amount and permitted uses; the restated cap, holding, interest, return and nonwaiver rules are in edu-security-deposit-rules-nj.")
L.note(L.R["edu-security-deposit-rules-nj"], "NJ: Amount, use and return rules added by the three-bucket scrub (2026-09-29) from security-deposit-return-nj; content unchanged: N.J.S.A. 46:8-21.1, 46:8-21.2, 46:8-24.")
s.trim("late-fee-nj",
       "If Tenant fails to pay Monthly Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
       CT, "kept the landlord's fee; the five-business-day grace period for senior and benefit-receiving tenants moved to edu-late-fee-rules-nj.")
s.new_edu("edu-late-fee-rules-nj", "late-fee-nj", "Senior and Benefit-Recipient Grace Period", "CONSTRAINED",
          "If rent is due on the first of the month and a tenant is a senior citizen receiving Social Security Old Age benefits, Railroad Retirement or another government pension in lieu of Social Security, or receives Social Security Disability, Supplemental Security Income or Work First New Jersey benefits, you may not charge a late fee until after a five-business-day grace period (excluding weekends and state or federal holidays) (N.J.S.A. 2A:42-6.1). Use it as a guardrail when you set the grace period.",
          s.cite("late-fee-nj"))
s.trim("acceptable-payment-methods-nj",
       "Rent and other amounts due under this Lease may be paid by any of the following methods: [list accepted payment methods, including at least one that is not an electronic funds transfer, e.g. check or money order]. Landlord may change the accepted methods on reasonable written notice.",
       CT, "kept the landlord's accepted methods; the non-EFT rule is now a bracket prompt, and the cash-receipt and post-warrant payment duties moved to edu-payment-rules-nj.")
s.new_edu("edu-payment-rules-nj", "acceptable-payment-methods-nj", "Rent Payment Rules", "REQUIRED",
          "You may not require a tenant to pay by electronic funds transfer, including automatic recurring transfers, so accept at least one other method (N.J.S.A. 46:8-49.1 et seq.). For each cash payment, give a printed or emailed receipt stating the amount, purpose, date received, the printed names of landlord and tenant, and who accepted it. If a warrant for removal has been posted or a lockout executed for nonpayment, accept payment of all rent due within the next three business days by cash, certified check or money order, or from a government rental assistance program or bona fide charity, and give a dated receipt (2A:42-10.16a).",
          s.cite("acceptable-payment-methods-nj"))
s.trim("holdover-nj",
       "If Tenant remains in possession after the end of the Term and Landlord accepts Rent, the tenancy will continue from month to month on the terms of this Lease unless the parties agree otherwise. If Tenant gives Landlord written notice of Tenant's intention to vacate on a stated date and does not vacate on that date, Tenant will pay double the Rent from that date for as long as Tenant remains, to the extent N.J.S.A. 2A:42-5 applies. Where the New Jersey Anti-Eviction Act does not apply and Tenant willfully remains after the Term has ended and after Landlord's written demand for possession, Tenant will be liable for double the yearly value of the property for the period Tenant remains, as provided in N.J.S.A. 2A:42-6.",
       SL, "kept the month-to-month continuation and the landlord's double-rent remedies; the tenant's Anti-Eviction Act protection moved to edu-anti-eviction-act-nj.")
e = L.R["edu-anti-eviction-act-nj"]
L.s(e, "bodyText", L.g(e, "bodyText") + " Where the Act applies, the end of the lease term does not by itself end the tenant's right to stay; a holdover tenant can be removed only for good cause under the Act.")
L.note(e, "NJ: Holdover sentence added by the three-bucket scrub (2026-09-29) from holdover-nj; content unchanged: N.J.S.A. 2A:18-61.1 et seq.")
s.trim("surrender-end-of-term-nj",
       "When Tenant's tenancy ends, whether because Tenant gives notice and vacates, Landlord and Tenant agree to end it, or a court enters a judgment for possession that is lawfully executed, Tenant will surrender possession of the property and return all keys to Landlord. The property will be left in the same condition as at the start of the Term, except for ordinary wear and tear, and free of Tenant's personal property.",
       SL, "kept the tenant's surrender duties; the statutory procedure for property left behind moved to edu-property-left-behind-nj.")
s.new_edu("edu-property-left-behind-nj", "surrender-end-of-term-nj", "Property a Tenant Leaves Behind", "REQUIRED",
          "If a tenant leaves belongings after a warrant for removal is executed or after giving written notice of voluntarily giving up possession, you may deal with them only as N.J.S.A. 2A:18-72 through 2A:18-84 allow: send the tenant written notice first, store the property with reasonable care, and don't sell or dispose of it until at least 30 days after the notice is delivered (75 days for a manufactured or mobile home). The tenant may reclaim it in that time without paying unpaid rent, but must reimburse your reasonable storage and removal costs.",
          s.cite("surrender-end-of-term-nj"))
s.trim("private-well-test-results-nj",
       "The property's drinking water comes from a private well. Tenant acknowledges receiving a written copy of the most recent water test results for the property under the New Jersey Private Well Testing Act.",
       SL, "kept the tenant's acknowledgment of receipt; the testing and delivery duty moved to edu-private-well-testing-nj.")
s.new_edu("edu-private-well-testing-nj", "private-well-test-results-nj", "Private Well Testing", "REQUIRED",
          "If the property's drinking water comes from a private well, give each tenant a written copy of the most recent test results, have the water tested at least once every five years as the Private Well Testing Act requires, and give tenants a written copy of each new result within 30 days of receiving it (N.J.S.A. 58:12A-32).",
          s.cite("private-well-test-results-nj"))
s.move("casualty-nj", "edu-casualty-nj", "Fire and Other Casualty", "CONDITIONAL",
       "In New Jersey, if the property is damaged by fire without the tenant's fault, rent stops until it's fully repaired, and you should repair it as quickly as possible; if the building is totally destroyed without the tenant's fault, rent is owed only to the date of destruction and the lease ends (N.J.S.A. 46:8-6, 46:8-7).")
print("NJ", s.c.save(L))

L.save()
print("checklist mentions annotated:", annotate_checklist(MOVES))
