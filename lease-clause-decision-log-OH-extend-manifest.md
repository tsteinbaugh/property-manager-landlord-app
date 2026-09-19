# Ohio — base-clause extend manifest (2026-09-18)

Screened all **52 active base rows** (tagged to 2+ core states) against Ohio primary text.
Output CSV: `lease-clauses-oh-extends.csv` — 541 rows, no ids added or removed, no duplicates.
**46 rows newly tagged `OH`** (47 carry an OH tag in total, including the pre-existing inactive
`security-deposit-interest-oh`). **8 of the 46 carry a delimited `OH:` note** per Instructions item 14.

## ⚠️ Correction to my earlier screen — three more exculpation rows

In the first pass I flagged only `tenants-property-insurance` as failing §5321.13(D). Re-screening
with the clause text actually open found **three more rows carrying the same defect**:

| Row | Offending language |
|---|---|
| `services-utilities-provided` | "Landlord is **not liable** for any interruption or insufficiency…" |
| `parking` | "Landlord … is **not liable** for damage to or theft of a vehicle or its contents" |
| `storage-space` | "Landlord is **not liable** for damage to or theft of items stored there" |

§5321.13(D) bars any tenant agreement to the **exculpation or limitation of any liability of the
landlord arising under law**. All three limit liability that would otherwise arise under law.

This is the recall-vs-section-open failure that instruction 22 describes, caught by re-screening.
Note the library already anticipated the pattern for Kansas — `parking-ks` and `storage-space-ks`
exist as separate rows — so Ohio needs the same treatment, not a blanket extend.

## Blocked — do NOT tag OH (7)

| Row | Reason |
|---|---|
| `default-by-tenant` | §5321.13(C) voids the prevailing-party fee sentence, bilaterally. **Use `default-by-tenant-ks-ne`** (tagged OH). |
| `tenants-property-insurance` | Exculpation — §5321.13(D). |
| `services-utilities-provided` | Exculpation — §5321.13(D). **Newly found.** |
| `parking` | Exculpation — §5321.13(D). **Newly found.** |
| `storage-space` | Exculpation — §5321.13(D). **Newly found.** |
| `holdover` | "Maximum permitted by applicable law" resolves to **nothing** in Ohio. Needs `holdover-oh` with a stated multiplier. |
| `security-deposit-return` | Needs `security-deposit-return-oh` (§5321.16(B) timeline + forwarding-address forfeiture). |

## Tagged with a delimited `OH:` note (8)

`application-of-payments` · `due-at-signing` · `returned-payments` · `early-termination` ·
`existing-condition` · `surrender-end-of-term` · `pet-policy` · `pet-insurance-requirement`

Two of these are more than drafting notes:

- **`application-of-payments`** promises that nothing limits "Tenant's statutory right to cure
  nonpayment of base rent." **Ohio has no such right** — §1923.04 is a notice to *leave*, not a
  pay-or-quit. The sentence has no referent in Ohio and should not ship as written.
- **`pet-policy`** and **`pet-insurance-requirement`** charge pet rent, a pet deposit, and require
  pet-liability coverage. **OAC 4112-5-07(C) bars *any* extra charge for an animal assistant**
  (the tenant remains liable for damage it causes). Both need an assistance-animal carve-out.
  `pet-policy` additionally carries an indemnity limb to review against §5321.13(D).

## Still to build for Ohio

**Overrides (4):** `security-deposit-return-oh` · `holdover-oh` · `tenants-property-insurance-oh` ·
rewrite of `security-deposit-interest-oh`. **Plus, newly required:** Ohio equivalents of
`services-utilities-provided`, `parking`, `storage-space` with the exculpation removed.

**New rows (9):** §5321.18 identity-as-lease-content · §5321.131 flag display · §5321.13(F) one-way
delegation · §5321.07(C) portfolio exemption · §5321.04(A)(9) mandatory drug termination ·
§5321.03(A)(5)/§5321.051 sex-offender proximity · §1923.05(B)–(C) minor-tenant filing trap ·
§1923.04 verbatim notice script · §4112.055(A)(2) election right.

**Education rows:** alarm duty in the fire code not the ORC · bilateral fee ban · two cure windows
before bad-check exposure · waiver-by-acceptance procedure · deposit-on-sale pledge rule ·
four portfolio thresholds · no abandoned-property safe harbour.

## Not applied here

The filter fix (blank `states` → "All states" browsing only) is **deferred to the CSV sync**
per the 2026-09-18 decision. The open `supersedes`-suppression question should be answered
before that lands, or the fix will mask the symptom.
