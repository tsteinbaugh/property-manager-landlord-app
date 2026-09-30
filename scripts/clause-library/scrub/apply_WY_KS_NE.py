# Three-bucket scrub, batch 2: Wyoming, Kansas, Nebraska (2026-09-29).
# Verdicts: lease-clause-scrub-verdicts.md. Run from the repo root.
import sys
sys.path.insert(0, "scripts/clause-library/scrub")
from scrublib import Library, Citations, SL, CT

L = Library()
MOVED = "Moved from {} by the three-bucket scrub (2026-09-29); content and citation unchanged: {}."

# ---------------- Wyoming ----------------
c = Citations("WY")
L.off("WY", "dv-safe-homes-wy", "edu-safe-homes-rent-defense-wy")
L.edu("WY", "edu-safe-homes-rent-defense-wy", "dv-safe-homes-wy", "Safe Homes Act: A Tenant Who Leaves Because of Abuse Owes No Later Rent", "CONDITIONAL",
      "Under Wyoming's Safe Homes Act (Wyo. Stat. 1-21-1303), a tenant who moves out because of a credible imminent threat of domestic abuse or sexual violence at the property, or because the tenant or a household member was a victim of domestic abuse or sexual violence at the property within the preceding 60 days, is not liable for rent accruing after moving out. The tenant must give you written notice at least 7 days before moving out, stating the reason and, where applicable, the date of the incident with supporting medical, court or police evidence. If hospitalization, or seeking shelter or counseling, prevented notice within the 60 days, notice given as soon as practicable afterward still counts. Rent owed for the period before the tenant moved out and gave the notice is still owed, and your remedies for it are unaffected. These rights can't be waived (see the Safe Homes nonwaiver note).",
      "WY: " + MOVED.format("dv-safe-homes-wy", "Wyo. Stat. § 1-21-1303(a), (b), (d)"))
c.move("dv-safe-homes-wy", "edu-safe-homes-rent-defense-wy")

L.off("WY", "habitability-baseline-wy", "edu-habitability-baseline-wy")
L.edu("WY", "edu-habitability-baseline-wy", "habitability-baseline-wy", "Your Basic Habitability Duties", "REQUIRED",
      "Wyoming requires you to keep the property safe and sanitary and fit for human habitation, including operational electrical, heating and plumbing systems with hot and cold running water, unless you and the tenant agree otherwise in writing (Wyo. Stat. 1-21-1202). The tenant must cooperate in maintaining the property. See the related notes on responding to a habitability notice and on reassigning duties by written agreement.",
      "WY: " + MOVED.format("habitability-baseline-wy", "Wyo. Stat. § 1-21-1202(a), (b)"))
c.move("habitability-baseline-wy", "edu-habitability-baseline-wy")

L.off("WY", "utility-deposit-return-wy", "edu-utility-deposit-return-wy")
L.edu("WY", "edu-utility-deposit-return-wy", "utility-deposit-return-wy", "Returning a Separate Utility Deposit", "REQUIRED",
      "If you hold a deposit identified separately as a utility deposit, refund it within 10 days after the tenant shows that all utility charges they incurred are paid. If the tenant hasn't shown that within 45 days after the lease ends, apply the deposit to the tenant's outstanding utility debt within 15 days after that period ends, then refund any remaining balance within 7 days after applying it, or within 15 days after receiving the tenant's forwarding address, whichever is later (Wyo. Stat. 1-21-1208(b)).",
      "WY: " + MOVED.format("utility-deposit-return-wy", "Wyo. Stat. § 1-21-1208(b)"))
c.move("utility-deposit-return-wy", "edu-utility-deposit-return-wy")

L.edit("WY", "security-deposit-return-wy",
       body="Tenant will notify Landlord in writing, within 30 days after termination of this Lease, of the address where the balance of the Security Deposit and any notice about it should be sent.",
       basis=SL, why="kept the tenant's forwarding-address duty; the restated return deadline and itemization duty moved to edu-security-deposit-return-wy.")
L.edu("WY", "edu-security-deposit-return-wy", "security-deposit-return-wy", "Deposit Return Deadline and Itemization", "REQUIRED",
      "Within 30 days after the lease ends, or within 15 days after receiving the tenant's forwarding address, whichever is later, deliver or mail the balance of the deposit and any prepaid rent with a written itemization of any deductions and the reasons for them. If the property is damaged, the period is extended by another 30 days (Wyo. Stat. 1-21-1208(a)). See the penalty note for what happens if you miss it.",
      "WY: Created by the three-bucket scrub (2026-09-29) from security-deposit-return-wy, which keeps only the tenant's forwarding-address duty; content unchanged: Wyo. Stat. § 1-21-1208(a).")
c.add("edu-security-deposit-return-wy", "Wyo. Stat. § 1-21-1208(a)", "CITED", L.g(L.R["security-deposit-return-wy"], "effective_from"),
      "Three-bucket scrub 2026-09-29: created from security-deposit-return-wy.")
c.touch("security-deposit-return-wy", "trimmed to the tenant's forwarding-address duty; return rules in edu-security-deposit-return-wy.")
print("WY", c.save(L))

# ---------------- Kansas ----------------
c = Citations("KS")
L.off("KS", "security-deposit-return-ks", "edu-security-deposit-return-ks")
L.edu("KS", "edu-security-deposit-return-ks", "security-deposit-return-ks", "Deposit Return Deadline and Itemization", "REQUIRED",
      "If you keep any part of the deposit for damages or other allowable charges besides rent, return the balance within 14 days after determining the amount kept, and no later than 30 days after the lease ends, possession is delivered and the tenant demands the deposit. If the tenant doesn't demand it within 30 days after the lease ends, mail the balance to the tenant's last known address. Itemize anything you keep in a written notice to the tenant (K.S.A. 58-2550(b)). See the penalty note for what happens if you don't.",
      "KS: " + MOVED.format("security-deposit-return-ks", "K.S.A. 58-2550(b)"))
c.move("security-deposit-return-ks", "edu-security-deposit-return-ks")

L.off("KS", "habitability-baseline-ks", "edu-habitability-baseline-ks")
L.edu("KS", "edu-habitability-baseline-ks", "habitability-baseline-ks", "Your Basic Habitability Duties", "REQUIRED",
      "Except when prevented by an act of God, a failure of public utility services or other conditions beyond your control, Kansas requires you to: comply with building and housing codes materially affecting health and safety; take reasonable care of common areas; keep the electrical, plumbing, sanitary, heating, ventilating and air-conditioning systems you supply in good and safe working order; provide trash receptacles and arrange removal, unless a government entity does; and supply running water and reasonable hot water and heat, unless the building isn't required by law to have them or the unit's heat or hot water comes from a tenant-controlled installation on a direct utility connection. You also can't interfere with or refuse a tenant access to a municipally franchised cable or communication service (K.S.A. 58-2553(a)). See the note on when you can shift some of these duties to the tenant.",
      "KS: " + MOVED.format("habitability-baseline-ks", "K.S.A. 58-2553(a)"))
c.move("habitability-baseline-ks", "edu-habitability-baseline-ks")

L.off("KS", "dv-housing-protections-ks", "edu-dv-housing-protections-ks")
L.edu("KS", "edu-dv-housing-protections-ks", "dv-housing-protections-ks", "Domestic Violence, Sexual Assault, Trafficking and Stalking: Housing Protections", "PROHIBITED",
      "Kansas protects a tenant or applicant who has been, is, or is in imminent danger of becoming a victim of domestic violence, sexual assault, human trafficking or stalking within the preceding 12 months (K.S.A. 58-25,137). You can't deny tenancy to, evict, or find a lease violation against that person based on that status if they otherwise qualify. A tenant who asks to end the lease early under this protection owes no rent after moving out, though you may charge a reasonable early-termination fee of up to one month's rent, and you may ask for supporting documentation as the law allows. The lease continues for any remaining co-tenants. Neither side can waive these rights. See the note on the consequences of violating this protection.",
      "KS: " + MOVED.format("dv-housing-protections-ks", "K.S.A. 58-25,137"))
c.move("dv-housing-protections-ks", "edu-dv-housing-protections-ks")

L.off("KS", "possession-delay-ks", "edu-possession-delay-ks")
L.edu("KS", "edu-possession-delay-ks", "possession-delay-ks", "If You Can't Deliver Possession on Time", "CONDITIONAL",
      "If you fail to deliver possession as the lease requires, rent abates until you do, and the tenant may either end the lease on at least 5 days' written notice, in which case you return the full deposit, or demand that you perform, sue for possession against you or anyone wrongfully in possession, and recover damages. If your failure is willful and not in good faith, the tenant can recover up to 1.5 times the periodic rent or 1.5 times actual damages, whichever is greater (K.S.A. 58-2560).",
      "KS: " + MOVED.format("possession-delay-ks", "K.S.A. 58-2560"))
c.move("possession-delay-ks", "edu-possession-delay-ks")

L.off("KS", "fire-casualty-termination-ks", "edu-casualty-termination-ks")
L.edu("KS", "edu-casualty-termination-ks", "fire-casualty-termination-ks", "Fire or Casualty: The Tenant's Options", "CONDITIONAL",
      "If fire or casualty damages the property enough to substantially impair its use and habitability, the tenant may move out immediately and notify you in writing within 5 days that they are ending the lease, which then ends on the date they moved out; or, if continued occupancy is lawful, vacate only the unusable part and pay rent reduced in proportion to the drop in the property's fair rental value (K.S.A. 58-2562). If the lease ends this way, return the part of the deposit the tenant is entitled to and account for rent as of the date they moved out.",
      "KS: " + MOVED.format("fire-casualty-termination-ks", "K.S.A. 58-2562"))
c.move("fire-casualty-termination-ks", "edu-casualty-termination-ks")
print("KS", c.save(L))

# ---------------- Nebraska ----------------
c = Citations("NE")
L.off("NE", "security-deposit-return-ne", "edu-security-deposit-return-ne")
L.edu("NE", "edu-security-deposit-return-ne", "security-deposit-return-ne", "Deposit Return Deadline, Itemization and Unclaimed Deposits", "REQUIRED",
      "If you keep any part of the deposit, deliver or mail the balance and a written itemization of what you kept within 14 days after the lease ends (Neb. Rev. Stat. 76-1416(2)). If the tenant gave no forwarding address or delivery instructions, mail it by first-class mail to the tenant's last known address. If that mailing comes back undeliverable, or the balance stays unclaimed for a year, report and send it to the State Treasurer as unclaimed property (69-1329). See the penalty note for what happens if you miss the deadline.",
      "NE: " + MOVED.format("security-deposit-return-ne", "Neb. Rev. Stat. § 76-1416(2); § 69-1329"))
c.move("security-deposit-return-ne", "edu-security-deposit-return-ne")

L.off("NE", "dv-lease-release-ne", "edu-dv-tenant-rights-ne")
L.off("NE", "dv-perpetrator-removal-ne", "edu-dv-tenant-rights-ne")
L.off("NE", "dv-lockchange-ne", "edu-dv-tenant-rights-ne")
L.edu("NE", "edu-dv-tenant-rights-ne", "dv-lease-release-ne", "Domestic Violence: Lease Release, Removing the Abuser, and Lock Changes", "CONDITIONAL",
      "Nebraska gives a tenant who, or whose household member, is a victim of domestic violence three rights, each triggered by a qualifying protective order or third-party domestic-violence certification plus written notice (see the documentation note). Lease release (Neb. Rev. Stat. 76-1431.01): the tenant names a release date at least 14 and no more than 30 days after the notice and any household members also released; they owe rent for the month the lease ends but nothing after the release date, and no fee solely because of the release. The release doesn't extend to another tenant on the lease who isn't a household member. Removing the abuser (76-1431.02): if the abuser is a co-tenant or other occupant of the unit, the victim can have them removed from the lease and excluded, and you then proceed against the abuser only under Nebraska's expedited removal procedure; you aren't liable for actions taken in good faith. Lock change (76-1431.03, 76-1431.04): if the abuser isn't a co-tenant or occupant, change the locks within 24 hours of a written request; if you don't, the tenant may change them in a workmanlike manner with locks of similar or better quality, must tell you promptly, and must give you a new key or code.",
      "NE: Created by the three-bucket scrub (2026-09-29) from dv-lease-release-ne, dv-perpetrator-removal-ne and dv-lockchange-ne (all switched off); content and citations unchanged: Neb. Rev. Stat. §§ 76-1431.01, 76-1431.02, 76-1431.03, 76-1431.04.",
      topic="dv-lease-release")
c.move("dv-lease-release-ne", "edu-dv-tenant-rights-ne")
c.fold("dv-perpetrator-removal-ne", "edu-dv-tenant-rights-ne")
c.fold("dv-lockchange-ne", "edu-dv-tenant-rights-ne")

L.off("NE", "habitability-baseline-ne", "edu-habitability-baseline-ne")
L.edu("NE", "edu-habitability-baseline-ne", "habitability-baseline-ne", "Your Basic Habitability Duties", "REQUIRED",
      "Except when prevented by an act of God, a failure of public utility services or other conditions beyond your control, Nebraska requires you to: substantially comply, after written or actual notice, with minimum housing codes materially affecting health and safety; make all repairs and do whatever is necessary, after written or actual notice, to keep the property fit and habitable; keep common areas clean and safe; maintain the electrical, plumbing, sanitary, heating, ventilating and air-conditioning systems and appliances you supply in good and safe working order; provide waste receptacles and arrange removal; and supply running water and reasonable hot water and heat, unless the building isn't required by law to have them or the unit's heat or hot water comes from a tenant-controlled installation on a direct utility connection (Neb. Rev. Stat. 76-1419(1)). See the note on delegating some duties to the tenant.",
      "NE: " + MOVED.format("habitability-baseline-ne", "Neb. Rev. Stat. § 76-1419(1)"))
c.move("habitability-baseline-ne", "edu-habitability-baseline-ne")

L.off("NE", "possession-delay-ne", "edu-possession-delay-ne")
L.edu("NE", "edu-possession-delay-ne", "possession-delay-ne", "If You Can't Deliver Possession on Time", "CONDITIONAL",
      "If you fail to deliver possession as the lease requires, rent abates until you do, and the tenant may either end the lease on at least 5 days' written notice, in which case you return all prepaid rent and the full deposit, or demand that you perform, sue for possession against you or anyone wrongfully in possession, and recover damages. If your failure is willful and not in good faith, the tenant can recover up to three months' periodic rent or three times actual damages, whichever is greater (Neb. Rev. Stat. 76-1426).",
      "NE: " + MOVED.format("possession-delay-ne", "Neb. Rev. Stat. § 76-1426"))
c.move("possession-delay-ne", "edu-possession-delay-ne")

L.merge("NE", "casualty-termination-ne", "edu-casualty-damage-ne",
        "If fire or casualty damages the property enough to substantially impair the tenant's enjoyment of it, the tenant may move out immediately and notify you in writing within 14 days that they are ending the lease, or, if continued occupancy is lawful, vacate only the unusable part and pay rent reduced in proportion to the loss in fair rental value (Neb. Rev. Stat. 76-1429).",
        "Opening sentence added by the three-bucket scrub (2026-09-29) from casualty-termination-ne (switched off); content unchanged: Neb. Rev. Stat. § 76-1429; § 76-1415.")
c.fold("casualty-termination-ne", "edu-casualty-damage-ne")
print("NE", c.save(L))

L.save()
