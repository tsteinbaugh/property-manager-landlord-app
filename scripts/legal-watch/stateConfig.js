// Per-state configuration for checkCitations.js: statute-numbering formats
// genuinely differ state to state (this isn't cosmetic -- a regex tuned to one
// state's citation format will silently mis-extract or miss citations entirely
// in another), plus each state's own hand-curated list of non-statute
// references (CFR/federal-statute/case-law) that need a different monitoring
// approach than a plain LegiScan section search. See checkCitations.js's own
// header comment for why CFR/federal-statute/case-law each need a different
// mechanism, and why administrative-code/regulation citations (K.A.R., N.D.
// Admin. Code, ARSD) are deliberately excluded from LegiScan monitoring
// entirely -- LegiScan only sees legislative bills, not agency rulemaking.

const STATE_NAMES = {
  CO: "Colorado",
  WY: "Wyoming",
  KS: "Kansas",
  NE: "Nebraska",
  MN: "Minnesota",
  ND: "North Dakota",
  SD: "South Dakota",
  OH: "Ohio",
  CA: "California",
  NV: "Nevada",
  TX: "Texas",
  NJ: "New Jersey",
  FL: "Florida",
  AZ: "Arizona",
  GA: "Georgia",
  NC: "North Carolina",
  SC: "South Carolina",
  TN: "Tennessee",
  VA: "Virginia",
  AL: "Alabama",
  PA: "Pennsylvania",
  UT: "Utah",
  IL: "Illinois",
  ID: "Idaho",
  MO: "Missouri",
  IN: "Indiana",
};

const STATE_CONFIG = {
  CO: {
    stripPatterns: [],
    sectionPattern: /\b(\d{1,2}-\d{1,3}-\d{2,4}(?:\.\d+)?)\b/g,
    cfrChecks: [
      { title: "40", section: "745.113", clauseIds: ["lead-based-paint"] },
      { title: "24", section: "30.65", clauseIds: ["lead-based-paint"] },
    ],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "case-anderson-shorter-arms",
        label: "Anderson v. Shorter Arms Investors, LLC, 2023 COA 71, 537 P.3d 831",
        clauseIds: ["habitability-notice-co", "edu-written-notice-strictly-required-co"],
      },
      {
        id: "case-behr-burge",
        label: "Behr v. Burge, 940 P.2d 1084 (Colo. App. 1996)",
        clauseIds: ["edu-holdover-co"],
      },
      {
        id: "hud-esa-guidance",
        label: "HUD FHEO-2020-01 guidance withdrawal (2025-09-17) / HUD enforcement-narrowing memo (2026-05-22)",
        clauseIds: ["edu-esa-federal-state-divergence-co"],
      },
    ],
  },

  WY: {
    stripPatterns: [],
    // Wyo. Stat. citations are 3-part (title-chapter-section), same shape as
    // Colorado's -- confirmed against all 33 monitorable WY rows before shipping.
    sectionPattern: /\b(\d{1,2}-\d{1,3}-\d{2,4}(?:\.\d+)?)\b/g,
    cfrChecks: [],
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "case-wy-fee-reciprocity-cluster",
        label:
          "Cowardin v. Finnerty (Wyo. 1999); Emken, 2006 WY 112, ¶8; Thorkildsen v. Belden, 2012 WY 8, ¶10; Circle Resources v. Hassler, 2023 WY 22, ¶8",
        clauseIds: ["edu-no-fee-reciprocity-wy", "default-by-tenant"],
      },
    ],
  },

  KS: {
    // K.A.R. = Kansas Administrative Regulations -- agency rules, not
    // legislative bills. LegiScan can't see these regardless (same reasoning
    // as ND's admin code and SD's ARSD below), so strip before extracting to
    // avoid a spurious partial match (e.g. "K.A.R. 21-60-16" would otherwise
    // still look like a plausible 3-part statute citation).
    stripPatterns: [/K\.A\.R\.[^;]*/g],
    // K.S.A. citations are 2-part (chapter-section), with an occasional
    // comma-continuation form for a subchapter ("58-25,137"). Confirmed
    // against all 64 monitorable KS rows before shipping.
    // Letter suffix allowed ("12-808c", added 2026-09-28 for the backfill).
    sectionPattern: /\b(\d{1,3}-\d{1,4}(?:,\d{1,4})?[a-z]?)\b/g,
    extraSectionAliases: {
      // "K.S.A. 39-1102/1107/1108" -- a slash-separated list sharing the
      // "39-" prefix. One occurrence in the whole file; hand-curated rather
      // than building a generic slash-list parser for a single row.
      "assistance-animal-accommodation": ["39-1107", "39-1108"],
    },
    cfrChecks: [{ title: "24", section: "100.204", clauseIds: ["assistance-animal-accommodation"] }],
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "case-schutt-foster",
        label: "Schutt v. Foster (Kan. Sup. Ct., 2025)",
        clauseIds: ["edu-unconscionability-ks", "late-fee-ks"],
      },
      {
        id: "case-asbury-mauk",
        label: "Asbury v. Mauk, 9 Kan. App. 2d 699 (1984): a deposit claim is not a compulsory counterclaim under K.S.A. 58-2561",
        clauseIds: ["edu-rent-into-court-counterclaim-ks"],
      },
    ],
  },

  NE: {
    stripPatterns: [],
    // Neb. Rev. Stat. citations are 2-part, with both a comma-continuation
    // form ("81-5,142") and a decimal form ("20-131.01"). Order matters in the
    // alternation: try the more specific forms first so the plain alternative
    // doesn't win a partial match. Confirmed against all 66 monitorable NE
    // rows before shipping.
    sectionPattern: /\b(\d{1,3}-\d{1,4},\d{2,4}|\d{1,3}-\d{1,4}\.\d{1,3}|\d{1,3}-\d{1,4})\b/g,
    cfrChecks: [],
    // NOT monitored, deliberately: edu-esa-federal-only-ne cites 28 C.F.R.
    // §36.104 "as it existed 2008-01-01" -- Nebraska's statute freezes to that
    // specific past version. Watching the CURRENT/evolving CFR text for
    // amendments is the wrong question for a frozen incorporation; a future
    // amendment to today's §36.104 has no bearing on NE's 2008-frozen
    // definition. The real risk is Nebraska's OWN statute (§49-801) being
    // amended to change or remove the freeze, which the plain "49-801" section
    // search already covers.
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "case-lomack-kohl-watts",
        label: "Lomack v. Kohl-Watts, 13 Neb. App. 14 (2004)",
        clauseIds: ["edu-security-deposit-noncompliance-penalty-ne", "edu-statutory-attorney-fee-actions-ne"],
      },
      {
        id: "case-black-brooks",
        label: "Black v. Brooks, 285 Neb. 440 (2013)",
        clauseIds: ["edu-statutory-attorney-fee-actions-ne"],
      },
    ],
  },

  MN: {
    stripPatterns: [],
    // Minn. Stat. citations have no hyphens at all: chapter (optionally with a
    // trailing letter) + "." + section, e.g. "504B.113", "325G.31". A bare
    // chapter mention ("Ch. 504B") has no decimal and is correctly excluded by
    // requiring one. Confirmed against all 75 monitorable MN rows before
    // shipping.
    sectionPattern: /\b(\d{2,4}[A-Z]?\.\d{1,4}[a-z]?)\b/g,
    cfrChecks: [],
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "case-hook-ladder-nalewaja",
        label: "Hook & Ladder Apartments, L.P. v. Nalewaja, A23-1048 (Minn. Sept. 24, 2025)",
        clauseIds: ["edu-late-rent-reservation-fix-mn"],
      },
      {
        id: "case-justice-marvel-dewitt",
        label: "Justice v. Marvel, LLC, 979 N.W.2d 384 (Minn. 2022); Dewitt v. London Rd. Rental Ctr., Inc., 910 N.W.2d 412 (Minn. 2018)",
        clauseIds: ["parking-mn", "storage-space-mn", "tenants-property-insurance-mn", "pet-policy-mn"],
      },
    ],
  },

  ND: {
    // N.D. Admin. Code citations use a 4-part hyphenated format with a
    // decimal in the FIRST group ("24.1-06-01-40"). Left unstripped, the
    // 3-part statute pattern below would still match a spurious trailing
    // fragment ("06-01-40") since matching isn't anchored to the string
    // start. Administrative rules aren't legislative bills anyway --
    // LegiScan can't see them -- so strip first, same reasoning as KS's
    // K.A.R. and SD's ARSD.
    //
    // NOT monitored, deliberately, as a result: edu-alarm-requirements-by-
    // building-type-nd, edu-carbon-monoxide-alarm-requirement-nd, and
    // edu-fire-code-standard-nd all cite N.D. Admin. Code sections only.
    // These are real, important compliance findings -- just not something
    // this tripwire can watch for free the way a state-legislature bill can
    // be watched.
    stripPatterns: [/N\.D\. Admin\. Code[^;]*/g],
    // N.D.C.C. citations are 3-part, and uniquely among these states can
    // carry a decimal in ANY of the three positions ("14-02.5-06"). Confirmed
    // against all 64 monitorable ND rows before shipping.
    sectionPattern: /\b(\d{1,2}(?:\.\d+)?-\d{1,3}(?:\.\d+)?-\d{1,3}(?:\.\d+)?)\b/g,
    cfrChecks: [],
    federalStatuteChecks: [],
    manualRecheckItems: [],
  },

  SD: {
    // ARSD (Administrative Rules of South Dakota) citations use colon
    // separators ("61:15:01:14"), which never collides with SDCL's hyphenated
    // format, so no stripping is needed the way ND's admin code requires --
    // confirmed these simply fail to match the hyphen-based pattern below.
    // NOT monitored, deliberately, as a result: edu-detector-duty-scope-sd
    // cites ARSD sections only -- same "LegiScan can't see agency rules"
    // limitation as ND's admin code.
    stripPatterns: [],
    // SDCL citations are 3-part, the first part occasionally carrying a
    // letter suffix ("57A-3-421"), and the last part can be a single digit
    // ("53-9-3") -- Colorado's own \d{2,4} floor on the last group would
    // silently miss these. Confirmed against all 44 monitorable SD rows
    // before shipping.
    // Letter allowed in the chapter too ("34-20G-19", added 2026-09-28).
    sectionPattern: /\b(\d{1,2}[A-Z]?-\d{1,2}[A-Z]?-\d{1,3}(?:\.\d+)?)\b/g,
    cfrChecks: [],
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "case-holzer-domson",
        label: "Holzer v. Dakota Speedway, 2000 S.D. 65, 610 N.W.2d 787; Domson v. Kadrmas Lee & Jackson, 2018 S.D. 67, 918 N.W.2d 396",
        clauseIds: ["edu-exculpatory-clause-limit-sd"],
      },
      {
        id: "case-rozeboom-nw-bell",
        label: "Rozeboom v. Nw. Bell Tel. Co., 358 N.W.2d 241 (S.D. 1984)",
        clauseIds: ["edu-unconscionability-doctrine-sd"],
      },
    ],
  },

  OH: {
    // OAC (Ohio Administrative Code) citations use a hyphenated format
    // ("4112-5-07", "4112-3-05") -- agency rulemaking, not legislative bills,
    // so LegiScan can't see them regardless (same reasoning as KS's K.A.R.,
    // ND's N.D. Admin. Code, and SD's ARSD). Unlike ND's admin code, OH's OAC
    // format has no decimal in it at all, so it doesn't structurally collide
    // with the dot-based R.C. pattern below (confirmed: stripping this made
    // no difference to what the R.C. pattern would have matched anyway) --
    // stripped here purely for documentation clarity and defense-in-depth if
    // the section pattern ever changes, not because a real collision exists
    // today. NOT monitored, deliberately, as a result: the OAC 4112-5-07 and
    // 4112-3-05 references in assistance-animal-accommodation-oh and
    // edu-fair-housing-election-oh are administrative, not legislative.
    stripPatterns: [/OAC[^;]*/g],
    // R.C. (Ohio Revised Code) citations have no hyphens at all: chapter +
    // "." + section, e.g. "5321.16", "1923.04", "4112.055" -- same shape as
    // Minnesota's format. Confirmed against all 27 monitorable OH rows before
    // shipping: 31 distinct sections auto-extracted, the only two
    // zero-extraction rows independently confirmed to be genuine case-law-
    // only citations (edu-waiver-by-acceptance-oh, edu-deposit-on-sale-oh).
    sectionPattern: /\b(\d{2,4}[A-Z]?\.\d{1,4}[a-z]?)\b/g,
    extraSectionAliases: {
      // "R.C. 1923.12-.14" -- a range notation the base pattern can't parse
      // (it correctly extracts 1923.12, but ".14" alone has no leading digit
      // to match). Both sections describe the same manufactured-home-park-
      // only abandoned-property procedure the clause's citation depends on,
      // so both need to be monitored, not just the first.
      "surrender-end-of-term": ["1923.13", "1923.14"],
    },
    cfrChecks: [],
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "case-oh-waiver-by-acceptance-cluster",
        label:
          "King v. Dolton, 9th Dist. No. 02CA0041, 2003-Ohio-2423; Bristol Court v. Jones (4th Dist. 1994); N. Face Properties v. Lin, 2013-Ohio-2281 (12th Dist.); OZ Property Mgt. v. Williams, 2025-Ohio-318 (12th Dist.); Premiere Mgt. v. Nutt, 2010-Ohio-1255 (3d Dist.)",
        clauseIds: ["edu-waiver-by-acceptance-oh", "holdover-oh"],
      },
      {
        id: "case-oh-deposit-pledge-cluster",
        label:
          "Castlebrook, Ltd. v. Dayton Properties Ltd. Partnership, 78 Ohio App.3d 340 (2d Dist. 1992); Tuteur v. P. & F. Enterprises, Inc., 21 Ohio App.2d 122 (8th Dist. 1970); Grisham v. Meadow Ridge Cincinnati Assocs. (12th Dist.)",
        clauseIds: ["edu-deposit-on-sale-oh"],
      },
      {
        id: "case-oh-lemstone-mitigation",
        label: "Frenchtown Square Partnership v. Lemstone, 99 Ohio St.3d 254, 2003-Ohio-3648",
        clauseIds: ["edu-casualty-and-mitigation-waivable-oh"],
      },
    ],
  },

  CA: {
    // California can't use a bare-number pattern like every other state: a
    // section number is only a citation together with its code body -- §1953
    // exists in both the Civil Code and the Code of Civil Procedure, §12178
    // in two others (lease-clause-decision-log-CA.md, "Cross-body citation
    // ambiguity"). And a bare 4-digit number like "1953" or "1717" would
    // match every bill mentioning that year. So CA section keys carry their
    // code ("Civ. Code 1946.2") and the LegiScan query pairs the section with
    // the code name the way CA bills actually write it ("Section 1946.2 of
    // the Civil Code").
    //
    // Regulations are stripped -- 2 CCR (Civil Rights Council) and 17 CCR
    // (CDPH) are agency rulemaking LegiScan can't see (same reasoning as
    // KS's K.A.R., ND's admin code, SD's ARSD, OH's OAC). The Civil Rights
    // Council rules back the REQUIRED assistance-animal family, so they get a
    // manual-recheck reminder below instead (CA log §9 item 4). Case-law
    // names are stripped for the same reason and also get reminders.
    stripPatterns: [/\d+ CCR[^;]*/g, /CASE LAW:.*$/g, /\d+ C\.F\.R\.[^;]*/g, /\d+ U\.S\.C\.[^;]*/g],
    extractSections(text) {
      const CODES = [
        [/^Civ\. Code/, "Civ. Code"],
        [/^CCP/, "CCP"],
        [/^Gov\. Code/, "Gov. Code"],
        [/^H&S/, "H&S"],
        [/^Pen\. Code/, "Pen. Code"],
        [/^Mil\. & Vet\.( Code)?/, "Mil. & Vet. Code"],
        [/^Rev\. & Tax\.( Code)?/, "Rev. & Tax. Code"],
        [/^Veh\. Code/, "Veh. Code"],
      ];
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        const code = CODES.find(([re]) => re.test(part));
        if (!code) continue;
        // Drop subdivisions -- "1946.2(b)(2)(A)" is watched as 1946.2.
        const body = part.replace(code[0], "").replace(/\([^)]*\)/g, "");
        // Up to 6 digits: H&S sections run that long (§105430).
        for (const m of body.matchAll(/(\d{2,6}(?:\.\d+)?[a-z]?)(?:\s*-\s*(\d{2,6}))?/g)) {
          const [, start, end] = m;
          // Expand a short integer range ("§§1980-1991") into every section.
          if (end && /^\d+$/.test(start) && Number(end) > Number(start) && Number(end) - Number(start) <= 20) {
            for (let n = Number(start); n <= Number(end); n++) out.push(`${code[1]} ${n}`);
          } else {
            out.push(`${code[1]} ${start}`);
          }
        }
      }
      return out;
    },
    buildQuery(sectionKey) {
      const NAMES = {
        "Civ. Code": "Civil Code",
        CCP: "Code of Civil Procedure",
        "Gov. Code": "Government Code",
        "H&S": "Health and Safety Code",
        "Pen. Code": "Penal Code",
        "Mil. & Vet. Code": "Military and Veterans Code",
        "Rev. & Tax. Code": "Revenue and Taxation Code",
        "Veh. Code": "Vehicle Code",
      };
      const i = sectionKey.lastIndexOf(" ");
      return `"Section ${sectionKey.slice(i + 1)}" AND "${NAMES[sectionKey.slice(0, i)]}"`;
    },
    cfrChecks: [
      // Same regulation KS already watches; pet-insurance-requirement's
      // assistance-animal carve-out rests on it (federal, all states).
      { title: "24", section: "100.204", clauseIds: ["pet-insurance-requirement"] },
    ],
    federalStatuteChecks: [
      // Servicemembers Civil Relief Act sections the CA military rows compare
      // against (CA log §5.29).
      { section: "3955", clauseIds: ["edu-military-tenant-protections-ca"] },
      { section: "3931", clauseIds: ["edu-military-default-judgment-ca"] },
    ],
    manualRecheckItems: [
      {
        id: "reg-ca-civil-rights-council",
        label:
          "Civil Rights Council housing regulations, 2 CCR §§12176, 12178, 12180, 12181, 12185, 12264 (agency rulemaking -- not visible to LegiScan)",
        clauseIds: [
          "assistance-animal-accommodation-ca",
          "edu-assistance-animal-documentation-ca",
          "edu-accommodation-process-ca",
          "edu-criminal-history-screening-ca",
        ],
      },
      {
        id: "reg-ca-cdph-lead",
        label: "CDPH lead regulations, 17 CCR §35033 et seq. (agency rulemaking)",
        clauseIds: ["edu-lead-hazards-ca"],
      },
      {
        id: "reg-ca-oehha-prop65",
        label:
          "OEHHA Proposition 65 regulations, 27 CCR §§25600-25607.35 (rental warnings §§25607.34-.35; symbol §25603) and the Prop 65 chemical list (agency rulemaking -- not visible to LegiScan)",
        clauseIds: ["edu-prop65-rental-warning-ca", "edu-no-radon-disclosure-ca"],
      },
      {
        id: "ca-tpa-sunset-and-cpi",
        label:
          "Tenant Protection Act sunset 2030-01-01 (Civ. Code §§1946.2(n), 1947.12(o)) and §1946.3 sunset 2029-01-20 -- also re-check the CPI-indexed figures that can't be hardcoded: the §1950.6 screening-fee cap and the §1947.12 rent cap",
        clauseIds: ["tpa-notice-ca", "tpa-exemption-notice-ca", "rent-increase-cap-ca", "edu-tpa-sunset-ca", "edu-screening-fee-ca", "edu-social-security-defense-ca"],
      },
      {
        id: "ca-3485-revival",
        label: "Civ. Code §3485 (nuisance-eviction assignment) -- repealed 2024-01-01 but revived four times before; watch for a re-add",
        clauseIds: ["edu-nuisance-eviction-assignment-ca", "unbundled-parking-ca"],
      },
      {
        id: "case-ca-exculpation",
        label: "Henrioulle v. Marin Ventures, Inc. (1978) 20 Cal.3d 512; Tunkl v. Regents (1963) 60 Cal.2d 92; Lewis Operating Corp. v. Superior Court; Whitehead v. City of Oakland",
        clauseIds: ["edu-exculpation-case-law-ca"],
      },
      {
        id: "case-ca-jury-waiver",
        label: "Grafton Partners L.P. v. Superior Court (2005) 36 Cal.4th 944; EpicentRx, Inc. v. Superior Court (2025) 18 Cal.5th 58 (fn. 7 preserves statutes voiding waivers)",
        clauseIds: ["edu-no-jury-waiver-ca"],
      },
      {
        id: "case-ca-waiver-by-acceptance",
        label: "Baca v. Kuang (2025) 107 Cal.App.5th 1292; Kaufman v. Goldman (2011) 195 Cal.App.4th 734; Woodman Partners v. Sofa U Love (2001) 94 Cal.App.4th 766; Kern Sunset Oil Co. v. Good Roads Oil Co. (1931); Karbelnig v. Brothwell (1966) 244 Cal.App.2d 333",
        clauseIds: ["edu-waiver-by-acceptance-ca"],
      },
      {
        id: "case-ca-auburn-woods",
        label: "Auburn Woods I Homeowners Assn. v. Fair Employment & Housing Com. (2004) 121 Cal.App.4th 1578",
        clauseIds: ["assistance-animal-accommodation-ca"],
      },
    ],
  },
  TX: {
    // Texas, like California, spreads landlord-tenant law across several
    // codes (Property, Business & Commerce, Water, Occupations, Local
    // Government, Human Resources, Civil Practice & Remedies), and the same
    // section number can exist in more than one of them. So TX section keys
    // carry their code ("Prop. 92.0131"), and the query pairs the section
    // with the code name the way Texas bills write it ("Section 92.0131,
    // Property Code, is amended"). A bare "3.506" or "1.004" would also match
    // dollar amounts and decimals.
    //
    // 16 TAC (Public Utility Commission rules) is agency rulemaking LegiScan
    // can't see -- stripped here and given a manual-recheck reminder instead
    // (same reasoning as KS's K.A.R., OH's OAC, CA's CCR).
    stripPatterns: [/16 TAC[^;]*/g],
    extractSections(text) {
      const CODES = [
        [/^Tex\. Prop\. Code/, "Prop."],
        [/^Tex\. Bus\. & Com\. Code/, "Bus. & Com."],
        [/^Tex\. Water Code/, "Water"],
        [/^Tex\. Occ\. Code/, "Occ."],
        [/^Tex\. Loc\. Gov't Code/, "Loc. Gov't"],
        [/^Tex\. Hum\. Res\. Code/, "Hum. Res."],
        [/^Tex\. Civ\. Prac\. & Rem\. Code/, "Civ. Prac. & Rem."],
        // Added 2026-09-28: the pool-yard enclosure rules (ch. 757) found by the gap-discovery backfill.
        [/^Tex\. Health & Safety Code/, "Health & Safety"],
      ];
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        const code = CODES.find(([re]) => re.test(part));
        if (!code) continue;
        const body = part.replace(code[0], "").replace(/\([^)]*\)/g, "");
        for (const m of body.matchAll(/\b(\d{1,4}[A-Z]?\.\d{3,5})\b/g)) out.push(`${code[1]} ${m[1]}`);
      }
      return out;
    },
    buildQuery(sectionKey) {
      const NAMES = {
        "Prop.": "Property Code",
        "Bus. & Com.": "Business & Commerce Code",
        Water: "Water Code",
        "Occ.": "Occupations Code",
        "Loc. Gov't": "Local Government Code",
        "Hum. Res.": "Human Resources Code",
        "Civ. Prac. & Rem.": "Civil Practice and Remedies Code",
        "Health & Safety": "Health and Safety Code",
      };
      const i = sectionKey.lastIndexOf(" ");
      return `"Section ${sectionKey.slice(i + 1)}" AND "${NAMES[sectionKey.slice(0, i)]}"`;
    },
    cfrChecks: [
      // The assistance-animal family rests on Texas's generic accommodation
      // duty, which must mirror federal regulations (Prop. Code §301.062) --
      // same regulation KS, CA and NV watch.
      { title: "24", section: "100.204", clauseIds: ["assistance-animal-accommodation", "pet-insurance-requirement"] },
    ],
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "reg-tx-puc-submetering",
        label:
          "PUC submetering/allocation rules, 16 TAC §§24.279, 24.281 (water) and §25.142 (electric) -- agency rulemaking, not visible to LegiScan; currency last asserted as of the PUC postings (eff. 10/17/18 and 6/10/13)",
        clauseIds: ["utility-submetering-disclosure-tx", "edu-water-submetering-tx", "electric-submeter-disclosure-tx", "edu-non-waivable-terms-tx"],
      },
      {
        id: "tx-sb38-lookback",
        label:
          "S.B. 38 eviction-notice look-back ('not late or delinquent ... before the month in which the notice is given', Prop. Code §24.005(a)) -- undefined; watch TRCP 510.6(a)(13) and any appellate decision",
        clauseIds: ["edu-eviction-notice-tx", "notice-to-vacate-period-tx"],
      },
      {
        id: "tx-local-preemption-litigation",
        label:
          "Prop. Code §1.004 (H.B. 2127) litigation: State v. City of Houston (3d COA 2025; en banc denied 2026-05-14) and the reported Dallas case in the Fifteenth Court of Appeals",
        clauseIds: ["edu-local-preemption-tx"],
      },
      {
        id: "tx-sb17-designations",
        label:
          "S.B. 17 (Prop. Code Subch. H): the designated-country list, Wang v. Paxton (5th Cir. 2025) / Huang v. Paxton (W.D. Tex.)",
        clauseIds: ["edu-foreign-acquisition-leases-tx"],
      },
    ],
  },
  NV: {
    // NRS (Nevada Revised Statutes) sections are chapter + "." + section with
    // no hyphens ("118A.200", "40.2514", "202.2483", "477.140") -- the same
    // shape as Ohio's and Minnesota's, so the same pattern works. The
    // LegiScan query is the phrase "NRS <section>" rather than the bare
    // number, because Nevada bills cite sections that way ("NRS 118A.200 is
    // hereby amended") and a bare short number like "40.250" or "41.620"
    // would also match dollar amounts. No regulation citations appear in the
    // NV citations file; NAC is not cited, so nothing needs stripping.
    sectionPattern: /\b(\d{2,4}[A-Z]?\.\d{1,4})\b/g,
    buildQuery: (section) => `"NRS ${section}"`,
    extraSectionAliases: {
      // Range citations ("118A.240-.250", "40.0025-.0045", "118.045-.093",
      // "118.171-.205") -- the base pattern only catches the first section.
      "edu-no-deposit-interest-nv": ["118A.250"],
      "edu-shutdown-worker-protection-nv": ["40.0035", "40.004", "40.0045"],
      "edu-fair-housing-nv": ["118.093"],
      "edu-abandonment-notice-nv": ["118.205"],
    },
    cfrChecks: [
      // The no-fee assistance-animal promise now rests on the federal
      // reasonable-accommodation rule alone (HUD guidance withdrawn
      // 2025-09-17) -- same regulation KS and CA watch.
      { title: "24", section: "100.204", clauseIds: ["assistance-animal-accommodation", "edu-assistance-animal-nv"] },
    ],
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "nv-hud-assistance-animal-guidance",
        label:
          "HUD assistance-animal guidance: FHEO-2020-01 and FHEO Notice 2013-01 withdrawn 2025-09-17 (FR Doc. 2026-06624) -- check whether replacement guidance has issued",
        clauseIds: ["assistance-animal-accommodation", "edu-assistance-animal-nv"],
      },
      {
        id: "nv-open-interpretive-questions",
        label:
          "Open NV questions with no authority yet: NRS 118A.190(2)/40.280 notice-server scope; 40.253(5)(b)/118A.480 lockout interplay; 118A.303(1)(a) issuer-fee reading; 597.960 reach to rent -- check for a Nevada appellate decision or AG opinion",
        clauseIds: ["notices", "edu-notice-service-nv", "edu-self-help-eviction-ban-nv", "payment-methods-nv", "returned-payments-nv"],
      },
    ],
  },
  NJ: {
    // N.J.S.A. sections are title:chapter-section ("46:8-21.1", "2A:18-61.1",
    // "52:27D-437.16", "2A:18-61.1f") -- the colon and hyphen make a bare
    // number unambiguous, but a search engine may split it into tokens, so the
    // query is the quoted phrase. NJ bills cite sections as "C.46:8-21.1" or
    // "R.S.46:8-10", which contain the phrase.
    //
    // N.J.A.C. (DCA rules, 5:10; LAD rules, 13:13) is agency rulemaking
    // LegiScan can't see -- stripped here and given a manual-recheck reminder
    // (same reasoning as KS's K.A.R., OH's OAC, TX's TAC).
    stripPatterns: [/N\.J\.A\.C\.[^;]*/g, /\bR\. \d:[^;]*/g],
    sectionPattern: /\b(\d{1,2}[A-Z]?:\d{1,3}[A-Z]?-\d{1,3}(?:\.\d{1,3})?[a-z]?)\b/g,
    buildQuery: (section) => `"${section}"`,
    cfrChecks: [
      // NJ's assistance-animal row rests partly on the reasonable-accommodation
      // duty, which tracks the federal regulation KS, CA, NV and TX watch.
      { title: "24", section: "100.204", clauseIds: ["assistance-animal-accommodation-nj"] },
    ],
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "nj-court-rules-retro",
        label:
          "New Jersey court rules LegiScan can't see: R. 6:6-3 (default-judgment affidavit on non-base charges), R. 6:7-1 (warrant timing), R. 6:10 (entity landlords need an attorney) and R. 1:38-3 (public access to eviction records) (NJ retro, 2026-09-30)",
        clauseIds: ["edu-eviction-court-rules-nj", "edu-eviction-record-sealing-nj", "edu-fees-as-rent-nj"],
      },
      {
        id: "nj-fair-act-chapter-law",
        label:
          "S451 (2R), the FAIR Act on algorithmic rent-setting, effective 2027-07-01: confirm the enacted text as P.L.2026, c.43 and its codification, then move edu-algorithmic-rent-setting-nj from NEEDS_REVIEW (NJ retro)",
        clauseIds: ["edu-algorithmic-rent-setting-nj"],
      },
      {
        id: "reg-nj-dca-5-10",
        label:
          "N.J.A.C. 5:10 (Regulations for Maintenance of Hotels and Multiple Dwellings) -- DCA rulemaking, not visible to LegiScan; currency last asserted as of the OAL compilation stamped 55 N.J.R. (2023-08-07), last amendment seen R.2023 d.103 (eff. 2023-09-05)",
        clauseIds: [
          "utilities-responsibility", "utility-service-continuity", "tenant-maintenance", "services-utilities-provided",
          "landlord-maintenance", "landlords-access", "inspection-rights", "storage-space-ks-oh-ca",
          "window-guard-notice-nj", "tenant-supplied-heat-nj", "edu-heat-and-pest-duties-nj",
        ],
      },
      {
        id: "reg-nj-lad-13-13",
        label:
          "N.J.A.C. 13:13-3.4 (LAD reasonable accommodation, the basis for emotional support animals) -- Division on Civil Rights rulemaking; not read section-open",
        clauseIds: ["assistance-animal-accommodation-nj"],
      },
      {
        id: "case-nj-fees-as-rent",
        label:
          "Community Realty Mgmt. v. Harris, 155 N.J. 212 (1998); Hodges v. Sasil Corp., 189 N.J. 210 (2007) -- late/legal fees are not rent unless the lease says so, never for Section 8/public housing",
        clauseIds: ["late-fee-nj", "application-of-payments", "default-by-tenant-nj"],
      },
      {
        id: "case-nj-landlord-tenant-doctrines",
        label:
          "Sommer v. Kridel, 74 N.J. 446 (1977) (mitigation); Marini v. Ireland, 56 N.J. 130 (1970) and Berzito v. Gambino, 63 N.J. 460 (1973) (habitability); Lorril Co. v. La Corte, 352 N.J. Super. 433 (2002) (holdover double rent); Reilly v. Weiss, 406 N.J. Super. 71 (App. Div. 2009) (pet deposit counts toward the cap); Fromet Properties v. Buel, 294 N.J. Super. 601 (App. Div. 1996) (unconscionable increases)",
        clauseIds: [
          "early-termination-ks", "tenant-caused-damage-nj", "default-by-tenant-nj", "landlord-maintenance", "edu-rent-receivership-withholding-nj",
          "holdover-nj", "security-deposit-return-nj", "pet-policy-nj", "edu-municipal-rent-control-nj",
        ],
      },
    ],
  },
  FL: {
    // Florida Statutes sections are chapter + "." + section ("83.49",
    // "715.10", "125.0103", "250.5202"), so a bare number looks like a
    // decimal or dollar amount. Florida bills cite them as "Section 83.49,
    // Florida Statutes, is amended", so the query pairs the number with
    // "Florida Statutes". Citations are split on ";" and only the
    // "Fla. Stat." parts are read, because FL rows also cite federal law
    // (40 C.F.R. §745.113, 50 U.S.C. §3955) whose numbers share the same
    // dotted shape. Subsection parentheses become spaces, not nothing:
    // "83.56(5)(a)1" must stay 83.56, not collapse into "83.561" (and
    // "83.51(2)(a)2" into the real, different section 83.512).
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^Fla\. Stat\./.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,4}\.\d{2,5})\b/g)) out.push(m[1]);
      }
      return out;
    },
    buildQuery: (section) => `"${section}" AND "Florida Statutes"`,
    extraSectionAliases: {
      // "715.10-715.111" range citations: the extractor catches only the
      // two ends. The act's sections in between are the ones rows rely on.
      "surrender-end-of-term": ["715.101", "715.104", "715.105", "715.106", "715.107", "715.108", "715.109", "715.11"],
      "abandoned-property-release-fl": ["715.104"],
      "edu-abandoned-property-fl": ["715.101", "715.103", "715.104", "715.105", "715.106", "715.107", "715.108", "715.109", "715.11"],
      "edu-deceased-tenant-fl": ["715.104"],
    },
    cfrChecks: [],
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "fl-local-fair-housing-preemption",
        label:
          "Fla. Stat. §83.425 (2023) vs local fair-housing ordinances adding classes (e.g. Miami-Dade source of income): no court or AG opinion yet -- check for one",
        clauseIds: ["edu-local-preemption-fl", "edu-fair-housing-fl"],
      },
    ],
  },

  AZ: {
    // A.R.S. sections are title-section, hyphenated like KS/NE ("33-1321",
    // "9-1303", "41-1491.19", "33-1314.01"). Only citation text that starts
    // with "A.R.S." is read, so the federal lead-paint row (42 U.S.C. /
    // CFR) contributes no state sections. Subsection parentheses become
    // spaces so "44-301(17)(b)(ii)" stays 44-301. Every AZ row cites
    // statutes only: no A.A.C. rule and no case law is relied on (AZ log §8).
    extractSections(text) {
      if (!/^A\.R\.S\./.test(text.trim())) return [];
      const body = text.replace(/\([^)]*\)/g, " ");
      return [...body.matchAll(/\b(\d{1,2}-\d{3,4}(?:\.\d{1,2})?)\b/g)].map((m) => m[1]);
    },
    cfrChecks: [
      { title: "24", section: "100.204", clauseIds: ["assistance-animal-accommodation"] },
      { title: "40", section: "745.113", clauseIds: ["lead-based-paint"] },
    ],
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "az-rental-tax-sunset",
        label:
          "A.R.S. §33-1332 (Laws 2023, ch. 204) is repealed after 2026-12-31 and is missing from the azleg compilation: revise edu-rental-tax-az on or after 2027-01-01",
        clauseIds: ["edu-rental-tax-az"],
      },
      {
        id: "az-foreign-adversary-reach",
        label:
          "A.R.S. §33-443 (as amended by Laws 2026, ch. 240): check for AG guidance or a ruling on whether it reaches an individual residential tenant",
        clauseIds: ["edu-foreign-adversary-land-ban-az"],
      },
    ],
  },

  GA: {
    // O.C.G.A. sections are title-chapter-section, hyphenated like CO
    // ("44-7-30", "44-7-30.1", "44-12-239.2"), so a bare quoted number is
    // specific enough and needs no buildQuery. Citations are split on ";"
    // and only the "O.C.G.A." parts are read, since the lead-paint row also
    // cites 42 U.S.C. / CFR. Subsection parentheses become spaces so
    // "44-7-24(d)(1)(A)" stays 44-7-24. No Ga. Comp. R. & Regs. rule and no
    // case law is relied on (GA log §8).
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^O\.C\.G\.A\./.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,2}-\d{1,2}-\d{1,3}(?:\.\d{1,2})?)\b/g)) out.push(m[1]);
      }
      return out;
    },
    extraSectionAliases: {
      // Small "X to Y" ranges: the extractor catches only the two ends.
      // Larger ranges (44-7-70 to 44-7-81 distress warrants, read by summary;
      // 44-12-190 to 44-12-239.2 unclaimed property) stay endpoint-only.
      "guest-policy": ["44-11-31", "44-11-32"],
      "edu-unauthorized-occupant-removal-ga": ["44-11-31"],
      "lead-based-paint": ["31-41-13", "31-41-14", "31-41-15", "31-41-16", "31-41-17"],
      "edu-lead-poisoning-abatement-ga": ["31-41-13", "31-41-14", "31-41-16"],
      "edu-dv-lease-termination-ga": ["16-5-91", "16-5-92", "16-5-93"],
    },
    cfrChecks: [
      { title: "24", section: "100.204", clauseIds: ["assistance-animal-accommodation-ga"] },
      { title: "40", section: "745.113", clauseIds: ["lead-based-paint"] },
    ],
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "ga-eviction-sealing-effective",
        label:
          "O.C.G.A. §44-7-50(e) (eviction record sealing) takes effect 2027-01-01: on or after that date, confirm the codified text matches edu-eviction-record-sealing-ga",
        clauseIds: ["edu-eviction-record-sealing-ga"],
      },
      {
        id: "ga-agency-rules",
        label:
          "Georgia agency rules LegiScan can't see: Department of Public Safety towing rules, Department of Public Health lead rules, PSC utility rules (GA log §7)",
        clauseIds: ["edu-towing-ga", "edu-lead-poisoning-abatement-ga", "utility-service-continuity"],
      },
    ],
  },

  NC: {
    // N.C. Gen. Stat. sections are chapter-section ("42-46", "42-25.6"),
    // with lettered chapters ("160D-1207", "127B-25", "168A-3") and a few
    // three-part ones ("28A-25-7", "25-3-506"). A bare two-part number is
    // too loose for a full-text search, and NC bills cite sections as
    // "G.S. 42-46", so the query uses that phrase. Citations are split on
    // ";" and only the "N.C. Gen. Stat." parts are read (the lead-paint and
    // foreclosure rows also cite U.S.C./CFR). Subsection parentheses become
    // spaces. No N.C. Admin. Code rule and no case law is relied on (NC log §8).
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^N\.C\. Gen\. Stat\./.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,3}[A-Z]?-\d{1,4}(?:\.\d{1,2})?(?:-\d{1,3})?)\b/g)) out.push(m[1]);
      }
      return out;
    },
    buildQuery: (section) => `"G.S. ${section}"`,
    extraSectionAliases: {
      // Small "X to Y" ranges: the extractor catches only the two ends.
      // Larger ranges (42-59 to 42-76 expedited eviction, 127B-25 to 127B-36
      // servicemembers, 66-311 to 66-330 UETA) stay endpoint-only.
      "security-deposit-use-nc": ["42-25.7", "42-25.8"],
      "edu-unauthorized-occupant-removal-nc": ["14-159.51", "14-159.52", "14-159.53", "14-159.54", "14-159.55"],
      "lead-based-paint": ["130A-131.8"],
    },
    cfrChecks: [
      { title: "24", section: "100.204", clauseIds: ["assistance-animal-accommodation-nc"] },
      { title: "40", section: "745.113", clauseIds: ["lead-based-paint"] },
    ],
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "nc-42-46-compilation-misprint",
        label:
          "N.C. Gen. Stat. §42-46(i)(4)-(5): the official compilation misprints these after S.L. 2025-52 and 2025-54 (checklist instruction 46); check whether ncleg.gov has corrected it",
        clauseIds: ["eviction-fees-nc", "edu-late-and-eviction-fees-nc"],
      },
      {
        id: "nc-agency-rules",
        label:
          "North Carolina agency rules LegiScan can't see: NCUC utility-billing rules (incl. Rule 18-6), Real Estate Commission trust-account rules (21 NCAC 58A), DHHS service-animal and meth-decontamination rules (NC log §7)",
        clauseIds: ["utility-billing-nc", "security-deposit-holding-nc", "edu-meth-decontamination-nc"],
      },
    ],
  },

  SC: {
    // S.C. Code Ann. sections are title-chapter-section, hyphenated like CO
    // ("27-40-410", "58-37-50"), so a bare quoted number is specific enough
    // and needs no buildQuery. Citations are split on ";" and only the
    // "S.C. Code Ann." parts are read, since the lead-paint row also cites
    // U.S.C./CFR. Subsection parentheses become spaces. No S.C. Code Ann.
    // Regs. rule and no case law is relied on (SC log §8).
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^S\.C\. Code Ann\./.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,2}-\d{1,3}-\d{1,4}(?:\.\d{1,2})?)\b/g)) out.push(m[1]);
      }
      return out;
    },
    cfrChecks: [
      { title: "24", section: "100.204", clauseIds: ["assistance-animal-accommodation-sc"] },
      { title: "40", section: "745.113", clauseIds: ["lead-based-paint"] },
    ],
    federalStatuteChecks: [],
    manualRecheckItems: [
      {
        id: "sc-2026-acts-codification",
        label:
          "South Carolina's online Code was a session behind at the SC pass: 2026 Acts No. 184 (S.C. Code Ann. §27-40-350 DV termination), 214 and 252 (squatter removal, appeal stay) were read from the acts. Check the codified text once scstatehouse.gov updates",
        clauseIds: ["edu-dv-lease-termination-sc", "edu-unauthorized-occupant-removal-sc", "edu-eviction-process-sc"],
      },
      {
        id: "sc-eviction-record-removal-effective",
        label:
          "S.C. Code Ann. §30-2-60 eviction-record removal starts in 2027: confirm the codified text matches edu-eviction-record-removal-sc once it takes effect",
        clauseIds: ["edu-eviction-record-removal-sc"],
      },
      {
        id: "sc-agency-rules",
        label:
          "South Carolina agency rules LegiScan can't see: State Fire Marshal detector regulations, lead rules, PSC utility disconnection rules, Real Estate Commission trust-account rules (SC log §7)",
        clauseIds: ["edu-lead-hazards-sc"],
      },
    ],
  },

  TN: {
    // Tenn. Code Ann. sections are title-chapter-section, hyphenated like CO
    // ("66-28-301", "29-18-115"), so a bare quoted number is specific enough
    // and needs no buildQuery. Citations are split on ";" and only the
    // "Tenn. Code Ann." parts are read (the lead-paint and lien rows also
    // cite U.S.C./CFR). Subsection parentheses become spaces. No Tenn. Comp.
    // R. & Regs. rule and no case law is relied on (TN log §7).
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^Tenn\. Code Ann\./.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,2}-\d{1,3}-\d{1,4}(?:\.\d{1,2})?)\b/g)) out.push(m[1]);
      }
      return out;
    },
    cfrChecks: [
      { title: "24", section: "100.204", clauseIds: ["assistance-animal-accommodation-tn"] },
      { title: "40", section: "745.113", clauseIds: ["lead-based-paint"] },
    ],
    federalStatuteChecks: [{ section: "3955", clauseIds: ["edu-servicemember-rights-tn"] }],
    manualRecheckItems: [
      {
        id: "tn-firearm-rule-effective",
        label:
          "2026 Pub. Ch. 606 (no lease or rule may ban a tenant's lawful firearms) applies to leases signed, amended or renewed from 2027-01-01: confirm the codified text once it takes effect",
        clauseIds: ["edu-tenant-firearms-tn", "firearm-carry-rules-tn"],
      },
      {
        id: "tn-agency-rules",
        label:
          "Tennessee agency rules LegiScan can't see: TPUC utility disconnection rules and any Tenn. Comp. R. & Regs. touching deposits or lead (TN log §7)",
        clauseIds: ["edu-urlta-county-scope-tn"],
      },
    ],
  },

  VA: {
    // Code of Virginia sections are title-section, and titles can carry a
    // decimal ("55.1-1226", "8.01-126", "36-96.3", "34-22"). Short ones like
    // "34-22" are too loose on their own, and Virginia bills cite sections as
    // "§ 55.1-1226 of the Code of Virginia", so the query pairs the number
    // with "Code of Virginia". Citations are split on ";" and only the
    // "Va. Code Ann." parts are read (several rows also cite U.S.C./CFR).
    // Subsection parentheses become spaces. No Virginia Administrative Code
    // rule and no case law is relied on (VA log §7).
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^Va\. Code Ann\./.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,2}(?:\.\d{1,2})?-\d{1,4}(?:\.\d{1,2})?)\b/g)) out.push(m[1]);
      }
      return out;
    },
    buildQuery: (section) => `"${section}" AND "Code of Virginia"`,
    cfrChecks: [
      { title: "24", section: "100.204", clauseIds: ["assistance-animal-accommodation-va"] },
      { title: "40", section: "745.113", clauseIds: ["lead-based-paint"] },
    ],
    federalStatuteChecks: [{ section: "3955", clauseIds: ["edu-servicemember-rights-va"] }],
    manualRecheckItems: [
      {
        id: "va-2027-effective-dates",
        label:
          "Virginia provisions with 2027 effective dates (plug-in solar 2027-01-01; 90-day renewal notice and the payment-plan-before-eviction version of Va. Code Ann. §55.1-1245, 2027-07-01): confirm the codified text matches the rows once each takes effect",
        clauseIds: ["edu-portable-solar-va", "edu-renewal-and-rent-increase-va", "portable-solar-va-small", "renewal-notice-va-small", "edu-termination-notices-va"],
      },
      {
        id: "va-dhcd-forms",
        label:
          "DHCD's Statement of Tenant Rights and Responsibilities and related forms are agency documents LegiScan can't see: check for a revised edition (VA log §7)",
        clauseIds: ["tenant-rights-statement-va"],
      },
    ],
  },

  AL: {
    // Code of Alabama sections are title-chapter-section, and both the
    // title and the chapter can carry a letter ("35-9A-201", "13A-11-204",
    // "6-10-120", "11-80-8.1"). A three-part number is specific enough for
    // a bare quoted query. Citations are split on ";" and only the
    // "Ala. Code" parts are read (the lead-paint and servicemember rows also
    // cite U.S.C./CFR). Subsection parentheses become spaces. No Alabama
    // Administrative Code rule and no case law is relied on (AL log §8).
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^Ala\. Code/.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,2}[A-Z]?-\d{1,3}[A-Z]?-\d{1,4}(?:\.\d{1,2})?)\b/g)) out.push(m[1]);
      }
      return out;
    },
    cfrChecks: [
      { title: "24", section: "100.204", clauseIds: ["assistance-animal-accommodation-al"] },
      { title: "40", section: "745.113", clauseIds: ["lead-based-paint"] },
    ],
    federalStatuteChecks: [{ section: "3955", clauseIds: ["edu-servicemember-rights-al"] }],
    manualRecheckItems: [
      {
        id: "al-agency-rules",
        label:
          "Alabama agency rules LegiScan can't see: State Fire Marshal and building-code alarm rules, Real Estate Commission trust-account rules, PSC disconnection rules, State Board of Health lead rules (AL log §7)",
        clauseIds: ["lead-based-paint"],
      },
    ],
  },
  PA: {
    // Pennsylvania cites three kinds of statute, and its bills name each one
    // differently, so the key carries the kind and buildQuery builds a query
    // in the bill's own wording (PA log §9.1):
    // - The Landlord and Tenant Act of 1951 is cited by Purdon's number
    //   ("68 P.S. § 250.511a"), but bills amend it by the Act's own section
    //   ("Section 511.1 of the act of April 6, 1951 (P.L.69, No.20)"). Purdon's
    //   letter suffix maps to the Act's decimal (a -> .1, b -> .2, c -> .3);
    //   "-A"/"-B" article sections keep their letter ("505-A").
    // - Consolidated Statutes ("66 Pa.C.S. § 1529") are amended as
    //   "Section 1529 of Title 66".
    // - Other unconsolidated acts are amended by name, so their P.S. or
    //   "Act N of YYYY" cites map to the act's short title.
    // Citations are split on ";". Court rules (Pa.R.Civ.P.M.D.J., Pa.R.C.P.)
    // and Pa. Code rules are manual-recheck items; LegiScan can't see them.
    extractSections(text) {
      const out = [];
      const ACT_BY_PS = [
        [/^73 P\.S\. §§? 22(0\d|1[0-2])\b/, "Plain Language Consumer Contract Act"],
        [/^73 P\.S\. §§? 2260\./, "Electronic Transactions Act"],
        [/^43 P\.S\. §§? 95\d/, "Pennsylvania Human Relations Act"],
      ];
      const ACT_BY_NUMBER = {
        "Act 118 of 2018": "Assistance and Service Animal Integrity Act",
        "Act 121 of 2013": "Carbon Monoxide Alarm Standards Act",
      };
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        let m;
        if (/^68 P\.S\. §§? 250\./.test(part)) {
          const body = part.replace(/\([^)]*\)/g, " ");
          for (const n of body.matchAll(/250\.(\d{3})([a-c])?(-[A-B])?\b/g)) {
            const dec = n[2] ? "." + ("abc".indexOf(n[2]) + 1) : "";
            out.push(`1951 Act ${n[1]}${dec}${n[3] || ""}`);
          }
        } else if ((m = part.match(/^(\d{1,2}) Pa\.C\.S\. §§? /))) {
          const body = part.slice(m[0].length).replace(/\([^)]*\)/g, " ");
          for (const n of body.matchAll(/\b(\d{1,4}[A-Z]?\d{0,2}(?:\.\d{1,2})?)\b/g)) out.push(`Title ${m[1]} ${n[1]}`);
        } else if ((m = part.match(/^72 P\.S\. §§? (1301\.\d+[a-z]?)/))) {
          out.push(`Fiscal Code ${m[1]}`);
        } else {
          for (const [re, name] of ACT_BY_PS) if (re.test(part)) out.push(`act: ${name}`);
          if (ACT_BY_NUMBER[part]) out.push(`act: ${ACT_BY_NUMBER[part]}`);
        }
      }
      return out;
    },
    buildQuery(key) {
      let m;
      if ((m = key.match(/^1951 Act (.+)$/))) return `"Landlord and Tenant Act of 1951" AND "${m[1]}"`;
      if ((m = key.match(/^Title (\d+) (.+)$/))) return `"Title ${m[1]}" AND "Section ${m[2]}"`;
      if ((m = key.match(/^Fiscal Code (.+)$/))) return `"Fiscal Code" AND "${m[1]}"`;
      if ((m = key.match(/^act: (.+)$/))) return `"${m[1]}"`;
      return `"${key}"`;
    },
    cfrChecks: [
      { title: "24", section: "100.204", clauseIds: ["assistance-animal-accommodation-pa"] },
      { title: "40", section: "745.113", clauseIds: ["lead-based-paint"] },
    ],
    federalStatuteChecks: [
      { section: "4852d", clauseIds: ["lead-based-paint"] },
      { section: "3955", clauseIds: ["edu-servicemember-rights-pa"] },
    ],
    manualRecheckItems: [
      {
        id: "pa-court-rules",
        label:
          "Pennsylvania court rules LegiScan can't see: Pa.R.Civ.P.M.D.J. Chapters 500 and 1000 (eviction timing) and Pa.R.C.P. 2950/2970 (confessed judgment), published in the Pennsylvania Bulletin (PA log §9.1)",
        clauseIds: ["edu-eviction-process-pa", "edu-confession-of-judgment-pa", "holdover-rate-pa"],
      },
      {
        id: "pa-unconsolidated-acts",
        label:
          "Pennsylvania acts the watch can't search by section: City Rent Withholding Act (35 P.S. § 1700-1) and the Expedited Eviction of Drug Traffickers Act; also 37 Pa. Code Chapter 307 (Attorney General plain-language policy) (PA log §7)",
        clauseIds: ["edu-rent-withholding-pa", "edu-drug-activity-eviction-pa", "edu-plain-language-lease-pa"],
      },
      {
        id: "pa-case-law",
        label:
          "Pennsylvania case law the rows flag but don't rely on: implied warranty of habitability (Pugh v. Holmes), penalty doctrine for late/holdover/early-termination charges, waiver of a notice to quit by accepting rent (PA log §7)",
        clauseIds: ["edu-habitability-pa", "late-fee", "holdover-rate-pa"],
      },
    ],
  },

  UT: {
    // Utah Code sections are title-chapter-section, and the title or chapter
    // can carry a letter ("78B-6a-405", "26B-6-803", "57-8a-209", "57-22-5.1").
    // Utah bills amend by the bare number ("Section 57-22-4"), so a quoted
    // three-part number is the query, as for Alabama. Citations are split on
    // ";" and only the "Utah Code Ann." parts are read (absence text and the
    // U.S.C./CFR and court-rule parts are skipped). Subsection parentheses
    // become spaces. Utah Admin. Code rules are not relied on (UT log §1.1).
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^Utah Code Ann\./.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,2}[A-Z]?-\d{1,2}[a-z]?-\d{1,4}(?:\.\d{1,2})?)\b/g)) out.push(m[1]);
      }
      return out;
    },
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [
      { section: "4852d", clauseIds: ["lead-based-paint"] },
      { section: "3955", clauseIds: ["edu-servicemember-rights-ut"] },
    ],
    manualRecheckItems: [
      {
        id: "ut-2027-effective-dates",
        label:
          "Utah Code Ann. § 57-22-5.1 changes on 2027-01-01 (Laws of Utah 2026, ch. 445 removes the crime-victim exclusions used for new locks): confirm the row matches the new text once it takes effect (UT log §1.2)",
        clauseIds: ["edu-crime-victim-locks-ut", "edu-dv-termination-ut"],
      },
      {
        id: "ut-court-rules-forms",
        label:
          "Utah court rules and forms LegiScan can't see: Utah R. Civ. P. 26.3 (eviction disclosures and timing) and the Judicial Council eviction forms under Utah Code Ann. § 78B-6-812(6) (UT log §7)",
        clauseIds: ["edu-eviction-process-ut"],
      },
      {
        id: "ut-case-law",
        label:
          "Utah case law the rows flag but don't rely on: penalty doctrine for fees (notice-service, returned-payment, early termination), waiver by accepting rent, exculpatory clauses, utility shutoff as 'willful exclusion', enforceability of a § 57-22-3(4) duty allocation (UT log §7)",
        clauseIds: ["notice-service-fee-ut", "late-fee", "tenant-repair-agreement-ut", "edu-self-help-eviction-ut"],
      },
    ],
  },
  IL: {
    // Illinois Compiled Statutes are cited chapter, act and section
    // ("765 ILCS 705/35", "735 ILCS 5/9-209", "765 ILCS 710/1"), and Illinois
    // bills print that same form in each amended section's header, so the
    // quoted citation itself is the query. Citations are split on ";" and only
    // the ILCS parts are read; subsection parentheses are dropped. The absence
    // text, CFR/U.S.C. parts and court rules are skipped (IL log §1.1).
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        const m = part.match(/^(\d{1,3}) ILCS (\d+)\/([0-9A-Za-z.-]+)/);
        if (m) out.push(`${m[1]} ILCS ${m[2]}/${m[3]}`);
      }
      return out;
    },
    buildQuery(key) {
      return `"${key}"`;
    },
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "il-pa-104-479-effective-date",
        label:
          "P.A. 104-479 (765 ILCS 705/35, rental fee transparency): the Act's Section 99 says July 1, 2026, but the Public Act page and ILCS source note say January 1, 2027. Rows apply it now on Taylor's decision; confirm which date governs (IL log §6.1)",
        clauseIds: ["fee-disclosure-first-page-il", "edu-rental-fee-law-il", "edu-application-fees-il", "edu-late-fee-il"],
      },
      {
        id: "il-future-dates",
        label:
          "Illinois changes with future dates: Illinois Human Rights Act definitions (P.A. 104-793 eff. 2027-01-01; P.A. 104-744 eff. 2027-06-01) and 765 ILCS 160/1-35 (P.A. 104-734): confirm the rows once each takes effect (IL log §1.2)",
        clauseIds: ["edu-fair-housing-il", "edu-no-lease-copy-rule-il"],
      },
      {
        id: "il-court-rules-agency-forms",
        label:
          "Illinois material LegiScan can't see: Ill. S. Ct. R. 139 and R. 99.2 (eviction), and the IDHR Summary of Rights for Safer Homes (a new version must be attached as issued; V.2025-12.3 seen) (IL log §7)",
        clauseIds: ["edu-eviction-process-il", "summary-of-rights-il"],
      },
      {
        id: "il-case-law",
        label:
          "Illinois case law the rows flag but don't rely on: implied warranty of habitability and its waiver, penalty doctrine for late and returned-payment fees, waiver by accepting rent, constructive eviction and casualty (IL log §7)",
        clauseIds: ["edu-habitability-il", "late-fee", "returned-payments-il", "casualty-termination-il"],
      },
    ],
  },
  ID: {
    // Idaho Code sections are title-chapter-section, sometimes with a letter
    // ("6-321", "55-304", "67-5909", "6-310A", "18-5812A"). Idaho bills amend
    // "Section 6-321, Idaho Code" and cross-reference "section 6-321, Idaho
    // Code", so '"6-321, Idaho Code"' is the query. Citations are split on
    // ";" and only the "Idaho Code" parts are read; absence text and
    // U.S.C./CFR parts are skipped. The site's chapter PDFs lag its section
    // pages (ID log §1.2), which doesn't affect LegiScan. IDAPA rules are not
    // relied on (ID log §1.1).
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^Idaho Code/.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,2}[A-Z]?-\d{1,4}[A-Z]?(?:\.\d{1,2})?)\b/g)) out.push(m[1]);
      }
      return out;
    },
    buildQuery(key) {
      return `"${key}, Idaho Code"`;
    },
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [
      { section: "4852d", clauseIds: ["lead-based-paint"] },
      { section: "3955", clauseIds: ["edu-no-servicemember-statute-id"] },
    ],
    manualRecheckItems: [
      {
        id: "id-court-rules",
        label:
          "Idaho court rules LegiScan can't see: I.C.A.R. 32(j) (eviction record shielding) and the Idaho R. Civ. P., plus the court's self-help eviction forms (ID log §1.1, §7)",
        clauseIds: ["edu-eviction-record-shielding-id", "edu-eviction-process-id"],
      },
      {
        id: "id-case-law",
        label:
          "Idaho case law the rows flag but don't rely on: what fee is 'reasonable' under Idaho Code § 55-305(1), whether 'actual cost' is an agreed amount, the penalty doctrine for notice-service and collection fees, waiver by accepting rent, and what counts as waste (ID log §7)",
        clauseIds: ["edu-late-fee-reasonable-id", "notice-service-fee-id", "collection-fee-id", "edu-tenant-waste-id", "late-fee"],
      },
    ],
  },
  MO: {
    // Revised Statutes of Missouri sections are chapter.section ("535.300",
    // "441.043", "441.060"). Missouri bills amend "Section 441.043, RSMo", so
    // '"441.043, RSMo"' is the query. Citations are split on ";" and only the
    // "Mo. Rev. Stat." parts are read; absence text, constitutional and
    // U.S.C./CFR parts are skipped (the Constitution is a manual recheck item:
    // it changes by ballot measure, not by bill alone).
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^Mo\. Rev\. Stat\./.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,3}\.\d{3,4})\b/g)) out.push(m[1]);
      }
      return out;
    },
    buildQuery(key) {
      return `"${key}, RSMo"`;
    },
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "mo-constitution-art-xiv",
        label:
          "Mo. Const. art. XIV (marijuana): its protection of non-smoking use in leases made after 2022-12-08 shapes smoking-policy-mo and cannabis-cultivation-mo; amended by ballot measure or legislative referral, which the bill watch may not catch (MO log §6.2)",
        clauseIds: ["smoking-policy-mo", "cannabis-cultivation-mo", "edu-cannabis-mo"],
      },
      {
        id: "mo-case-law",
        label:
          "Missouri case law the rows flag but don't rely on: waiver by accepting rent, exact-amount demand, jury trial in rent-and-possession cases (Brainchild Holdings v. Cameron), exculpatory clauses, the penalty doctrine, what 'accidentally' covers in Mo. Rev. Stat. § 441.010, and whether vaping is 'smoking' under art. XIV (MO log §7)",
        clauseIds: ["late-fee", "tenant-caused-damage-mo", "smoking-policy-mo", "default-by-tenant"],
      },
    ],
  },
  IN: {
    // Indiana Code sections are title-article-chapter-section, with decimals
    // in any part ("32-31-3-12", "32-31-8.5-5", "22-11-18-3.5",
    // "26-1-3.1-502.5"). Indiana bills print "IC 32-31-3-12 IS AMENDED TO
    // READ", so '"IC 32-31-3-12"' is the query. Citations are split on ";"
    // and only the "Ind. Code" parts are read; absence text, court rules and
    // U.S.C./CFR parts are skipped.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^Ind\. Code/.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,2}-\d{1,2}(?:\.\d+)?-\d{1,2}(?:\.\d+)?-\d{1,4}(?:\.\d+)?)\b/g)) out.push(m[1]);
      }
      return out;
    },
    buildQuery(key) {
      return `"IC ${key}"`;
    },
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "in-court-rules",
        label:
          "Indiana court rules LegiScan can't see: the Small Claims Rules (eviction filings and service) and Trial Rules cited in the eviction rows (IN log §1.1, §7)",
        clauseIds: ["edu-eviction-process-in"],
      },
      {
        id: "in-case-law",
        label:
          "Indiana case law the rows flag but don't rely on: penalty doctrine (late fees, holdover rate), waiver by accepting rent, exculpatory clauses, 'reasonable' entry notice, whether Ind. Code § 32-31-5-4 permits unilateral changes, and enforceability of unilateral rent and no-cure terms (IN log §7)",
        clauseIds: ["late-fee", "holdover-rate-in", "midterm-rent-increase-in", "criminal-activity-in"],
      },
    ],
  },
};

// Monthly schedule (2026-09-29; LegiScan's free tier drops to 10,000 queries
// a month on 2026-10-01). States run in the order they were added: the Nth
// state runs on day ((N-1) % 28) + 1 of the month, so no day past the 28th is
// used and every month has every day. When states share a day (the 29th state
// onward), each later cycle runs an hour later: hour 13 + floor((N-1) / 28)
// UTC. Add a new state to the END of this list and give its workflow the cron
// that cronFor() returns; checkConfigIds.js fails if a workflow doesn't match.
const SCHEDULE_ORDER = [
  "CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ",
  "GA", "NC", "SC", "TN", "VA", "AL", "PA", "UT", "IL", "ID", "MO", "IN",
];
function cronFor(code) {
  const n = SCHEDULE_ORDER.indexOf(code);
  if (n < 0) throw new Error(`${code} is not in SCHEDULE_ORDER`);
  return `0 ${13 + Math.floor(n / 28)} ${(n % 28) + 1} * *`;
}

module.exports = { STATE_NAMES, STATE_CONFIG, SCHEDULE_ORDER, cronFor };
