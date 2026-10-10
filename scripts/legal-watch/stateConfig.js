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
  OK: "Oklahoma",
  MI: "Michigan",
  IA: "Iowa",
  NM: "New Mexico",
  MT: "Montana",
  NY: "New York",
  WI: "Wisconsin",
  WA: "Washington",
  OR: "Oregon",
  KY: "Kentucky",
  WV: "West Virginia",
  MD: "Maryland",
  MA: "Massachusetts",
  CT: "Connecticut",
  RI: "Rhode Island",
};

// New York consolidated-law abbreviations (as cited in the NY rows) and the
// names New York bills use for them, for the NY buildQuery.
const MD_ARTICLE_NAMES = {
  "Real Prop.": "Real Property",
  "Pub. Safety": "Public Safety",
  "Envir.": "Environment",
  "State Gov't": "State Government",
  "Com. Law": "Commercial Law",
  "Transp.": "Transportation",
  "Cts. & Jud. Proc.": "Courts and Judicial Proceedings",
  "Pub. Util.": "Public Utilities",
  "Crim. Law": "Criminal Law",
  "Hum. Servs.": "Human Services",
  "Local Gov't": "Local Government",
  "Corps. & Ass'ns": "Corporations and Associations",
  "Elec. Law": "Election Law",
  "Bus. Occ. & Prof.": "Business Occupations and Professions",
  "Hous. & Cmty. Dev.": "Housing and Community Development",
  "Health-Gen.": "Health General",
  "Tax-Prop.": "Tax Property",
  "Tax-Gen.": "Tax General",
  "Gen. Provis.": "General Provisions",
  "Agric.": "Agriculture",
  "Ins.": "Insurance",
  "Alc. Bev. & Cannabis": "Alcoholic Beverages and Cannabis",
};

const NY_LAW_NAMES = {
  "Real Prop. Law": "real property law",
  "Real Prop. Acts. Law": "real property actions and proceedings law",
  "Gen. Oblig. Law": "general obligations law",
  "Mult. Dwell. Law": "multiple dwelling law",
  "Mult. Resid. Law": "multiple residence law",
  "Exec. Law": "executive law",
  "Gen. Bus. Law": "general business law",
  "Pub. Health Law": "public health law",
  "Civ. Prac. L. & R.": "civil practice law and rules",
  "State Tech. Law": "state technology law",
  "Cannabis Law": "cannabis law",
  "Pub. Serv. Law": "public service law",
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
      {
        id: "co-ai-act-2027-changeover",
        label: "Colorado AI Act: SB 26-189 replaces C.R.S. § 6-1-1701 et seq. for decisions on or after 2027-01-01; rewrite the row then",
        clauseIds: ["edu-ai-consequential-decisions-co"],
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
      {
        id: "mn-court-rules",
        label:
          "Minnesota General Rules of Practice LegiScan can't see: Rule 604 (the complaint must plead compliance with Minn. Stat. § 504B.181; notice and lease attached or provided) and Rule 608 (rent deposit), which conflicts with § 504B.285 subd. 4(b)-(c)'s bar on deposits in a shared-metered utility-charge eviction; the later, more specific statute controls there (MN log, retro checks)",
        clauseIds: ["edu-landlord-disclosure-consequences-mn"],
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
      {
        id: "oh-superintendence-rules",
        label:
          "Ohio Rules of Superintendence restructured effective 2026-07-01: former Sup.R. 44-47 (public access to court records, including eviction records) were renumbered and the new numbers weren't resolved at the 2026-10-02 retro. Find them and confirm Ohio still has no eviction-record sealing rule, which the OH log records as absent (OH log, retro checks)",
        clauseIds: ["edu-three-day-notice-language-oh"],
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
        id: "az-rpea-emergency-amendments",
        label:
          "Arizona Rules of Procedure for Eviction Actions: emergency amendments effective 2026-09-12 (Rules 4, 5, 13, 14, 20 and Appendix A) await permanent adoption. RPEA 4(d) sets 30 days to file a satisfaction of judgment, while A.R.S. §§ 12-1567(A) and 22-247(A) set 40; the row tells landlords to meet the shorter (AZ retro, 2026-09-30)",
        clauseIds: ["edu-eviction-court-rules-az", "edu-eviction-record-sealing-az"],
      },
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
      {
        id: "ga-court-rules",
        label:
          "Georgia court rules LegiScan can't see: Uniform Magistrate Court Rules 6(D), 34.2 and 46 (record access; the CARES Act 30-day notice as a filing condition for a 'covered property', whose federal definition the library hasn't read) and Uniform Superior Court Rule 21 (GA log, retro checks)",
        clauseIds: ["edu-eviction-process-ga", "edu-eviction-record-sealing-ga"],
      },
      {
        id: "ga-lien-priority",
        label:
          "Landlord's lien for rent: O.C.G.A. §§ 44-14-341 and 44-14-342 date the general lien from the levy, but § 44-7-80 attaches the lien for rent from the § 44-7-71 affidavit; case law unread, and edu-landlord-remedies-ga tells landlords to assume the later date. Recheck if either is amended or a court resolves it (GA log, retro checks)",
        clauseIds: ["edu-landlord-remedies-ga"],
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
  OK: {
    // Oklahoma Statutes sections are cited by title and section, and some
    // sections carry an article prefix or a letter ("tit. 41, § 115",
    // "tit. 11, § 14-101.1", "tit. 10A, § 1-9-125", "tit. 12, § 1148.10A").
    // Bills amend "41 O.S. 2021, Section 115" with the compilation year in
    // between, so the query pairs the title's "O.S." with the section
    // ('"41 O.S." AND "Section 115"'), as PA does. Citations are split on ";"
    // and only "Okla. Stat." parts are read; a range ("§ 1148.1-1148.16") is
    // skipped, since its end sections are cited on their own. The
    // Constitution and court rules are manual recheck items.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        const m = part.match(/^Okla\. Stat\. tit\. (\d+[A-Z]?), §§? ([\d.\-]+[A-Za-z]?)/);
        if (!m) continue;
        const sec = m[2];
        const range = sec.match(/^(\d+)\.[\dA-Za-z]+-(\d+)\./);
        if (range && range[1] === range[2]) continue;
        out.push(`${m[1]}:${sec}`);
      }
      return out;
    },
    buildQuery(key) {
      const [title, sec] = key.split(":");
      return `"${title} O.S." AND "Section ${sec}"`;
    },
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "ok-future-dated-acts",
        label:
          "Oklahoma acts enacted but not yet compiled: HB 3127 (2026) and HB 3431 (2026) take effect 2026-11-01, SB 893 (2026) on 2027-07-01; re-read the rows once the compilation prints them (OK log §1.2, §7)",
        clauseIds: ["edu-foreign-ownership-ok", "edu-medical-marijuana-ok"],
      },
      {
        id: "ok-court-rules-constitution",
        label:
          "Oklahoma sources LegiScan can't see: the Rules for District Courts and Rules for the Administration of Courts (eviction rows), and the Constitution (art. II, § 26; art. XXII, § 1), which changes by ballot measure (OK log §1.1, §7)",
        clauseIds: ["edu-firearms-ok", "edu-foreign-ownership-ok"],
      },
      {
        id: "ok-case-law",
        label:
          "Oklahoma case law the rows flag but don't rely on: penalty doctrine (late, returned-payment and early-termination fees), waiver by accepting rent, the reach of Okla. Stat. tit. 41, § 113(A)(3)-(4), how 'immediate termination' under § 132(D) works, whether a residential lease is a lease of 'land' under tit. 60, § 121, and whether the Consumer Protection Act reaches leases (OK log §1.4, §7)",
        clauseIds: ["late-fee", "early-termination-ks", "default-by-tenant-ks-ne", "edu-consumer-protection-ok"],
      },
    ],
  },
  MI: {
    // Michigan Compiled Laws sections are chapter.section, with 1-3 digit
    // chapters and a letter on some sections ("554.633", "554.601b",
    // "37.2502", "8.3v"). Michigan bills amend "section 33 of 1978 PA 454
    // (MCL 554.633)", so '"MCL 554.633"' is the query. Citations are split on
    // ";" and only the "Mich. Comp. Laws" parts are read; a range
    // ("§§ 554.631-554.641") is skipped, since the sections the rows rely on
    // are cited on their own. Court rules, the Constitution and
    // administrative rules are manual recheck items.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^Mich\. Comp\. Laws/.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        if (/\d-\d/.test(body)) continue;
        for (const m of body.matchAll(/\b(\d{1,3}\.\d+[a-z]*)\b/g)) out.push(m[1]);
      }
      return out;
    },
    buildQuery(key) {
      return `"MCL ${key}"`;
    },
    cfrChecks: [
      { title: "40", section: "745.113", clauseIds: ["lead-based-paint"] },
      { title: "24", section: "100.204", clauseIds: ["edu-assistance-animals-mi", "edu-fair-housing-mi"] },
      { title: "24", section: "5.2005", clauseIds: ["criminal-activity-mi"] },
    ],
    federalStatuteChecks: [
      { section: "4852d", clauseIds: ["lead-based-paint", "edu-lead-hazard-mi"] },
      { section: "3604", clauseIds: ["edu-assistance-animals-mi", "edu-fair-housing-mi"] },
    ],
    manualRecheckItems: [
      {
        id: "mi-court-rules",
        label:
          "Michigan court rules LegiScan can't see: MCR 4.201 (summary proceedings: demand, answer, escrow orders, adjournment, judgment and writ timing), MCR 3.106 and MCR 8.119, and the SCAO forms DC 100a, 100c, 102a and 102c (MI log §1.1, §7)",
        clauseIds: ["default-by-tenant-mi", "edu-eviction-process-mi", "edu-nonpayment-notice-mi", "edu-attorney-fees-mi", "edu-post-eviction-property-mi", "edu-statutory-forms-mi"],
      },
      {
        id: "mi-constitution-admin-rules",
        label:
          "Michigan sources LegiScan can't see: the 1963 Constitution (art. I, § 6; art. X, §§ 3, 6), which changes by ballot measure, and the administrative rules the rows cite (Public Service Commission shutoff rules, R 460.101-460.169; smoke and carbon monoxide alarm rules, R 408.30546 and R 408.30520) (MI log §1.1, §7)",
        clauseIds: ["edu-firearms-mi", "edu-landlord-lien-mi", "edu-foreign-ownership-mi", "edu-utility-landlord-account-mi"],
      },
      {
        id: "mi-case-law",
        label:
          "Michigan case law the rows rely on or flag: penalty doctrine (Curran v Williams; UAW-GM v KSL), common-area snow and ice under Mich. Comp. Laws § 554.139 (Allison, Benton, Hadden, Bowerman (2026)), Attorney General v Eli Lilly & Co (2026) on the consumer protection act, and Laurel Woods on guest damage; the 2026 Supreme Court cases need their Michigan Reports page once it issues (MI log §1.4, §10)",
        clauseIds: ["late-fee", "snow-removal", "edu-habitability-mi", "edu-consumer-protection-mi", "tenant-caused-damage-mi", "casualty-termination-mi"],
      },
      {
        id: "mi-hud-assistance-animals",
        label:
          "HUD's assistance-animal position: the 2013 and 2020 notices were withdrawn (2025) and FHEO's 2026-05-22 memorandum limits Fair Housing Act charges to trained animals; Michigan's disability law is unchanged. Recheck before relying on either (MI log §1.4, §10)",
        clauseIds: ["assistance-animal-accommodation", "edu-assistance-animals-mi"],
      },
    ],
  },
  IA: {
    // Iowa Code sections are chapter.section, with letters on some chapters
    // and sections ("562A.12", "562A.27A", "216.8A", "10A.518", "554D.110").
    // Iowa bills amend "Section 562A.12, subsection 3, Code 2026", so the
    // bare quoted section number is specific enough and needs no buildQuery.
    // Citations are split on ";" and only the "Iowa Code" parts are read;
    // court rules, the Constitution and federal parts are skipped (court
    // rules and the Constitution are manual recheck items).
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^Iowa Code/.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,3}[A-Z]{0,2}\.\d+[A-Z]?)\b/g)) out.push(m[1]);
      }
      return out;
    },
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "ia-statute-pairs",
        label:
          "Iowa statute pairs that disagree (rule 31): Iowa Code § 562.6 (a written term ends without notice) vs § 562A.34(3) (30 days' notice to end a term longer than month-to-month); § 562.2 (double rental value) vs § 562A.34(4) (actual damages and fees for a willful holdover); § 562A.12(4) (an unclaimed deposit reverts to the landlord after one year) vs ch. 556 (unclaimed property lists security deposits). Recheck if any is amended or a court resolves it (IA log §10)",
        clauseIds: ["edu-end-of-term-ia", "holdover-ia", "edu-holdover-rate-ia", "security-deposit-return-ia"],
      },
      {
        id: "ia-2026-acts-code-2027",
        label:
          "Iowa acts effective after the Code 2026 compilation: 2026 Iowa Acts ch. 1002 and ch. 1200, § 40 (local civil rights ordinances), ch. 1182 (abandoned vehicles, July 1, 2026), ch. 1115, § 126 (§ 216.12(1)(e)). Check the rows against the Iowa Code 2027 compilation when it's published (IA log §1.2, §10)",
        clauseIds: ["edu-fair-housing-ia", "edu-towing-ia"],
      },
      {
        id: "ia-court-rules-admin-rules",
        label:
          "Iowa sources LegiScan can't see: the Iowa Court Rules (ch. 3 small claims forms, ch. 16 public access to eviction records), the State Fire Marshal's smoke and carbon monoxide alarm rules (not read), and the Constitution, which changes by ballot measure (IA log §1.1, §7)",
        clauseIds: ["edu-eviction-process-ia", "edu-no-eviction-sealing-ia", "edu-alarm-duties-ia", "smoke-alarm-battery-ia"],
      },
      {
        id: "ia-cerclis-name",
        label:
          "Iowa Code § 562A.13(6) names EPA's 'comprehensive environmental response compensation and liability information system'; whether EPA still keeps a list under that name, and where a landlord checks it, wasn't verified (IA log §7)",
        clauseIds: ["superfund-disclosure-ia"],
      },
    ],
  },
  NM: {
    // NMSA 1978 sections are chapter-article-section, with letters on some
    // articles and decimals on some sections ("47-8-18", "47-8-34.1",
    // "47-8A-1", "57-12-27"). New Mexico bills amend "Section 47-8-18 NMSA
    // 1978", so the bare quoted number is specific enough and needs no
    // buildQuery. Citations are split on ";" and only the "NMSA 1978" parts
    // are read; a range ("§§ 47-8-1 to 47-8-52") is skipped, and court rules,
    // the Constitution and federal parts are left to the items below.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^NMSA 1978/.test(part) || / to /.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,2}[A-Z]?-\d{1,2}[A-Z]?-\d{1,3}(?:\.\d{1,2})?)\b/g)) out.push(m[1]);
      }
      return out;
    },
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "nm-court-rules-forms",
        label:
          "New Mexico court rules and forms LegiScan can't see: the magistrate and metropolitan court rules for restitution (eviction) actions (Rules 2- and 3- NMRA) and the Supreme Court's civil forms (Form 4-901 NMRA and others), including any eviction-diversion or rental-assistance step (NM log §1.1)",
        clauseIds: ["edu-eviction-process-nm", "edu-statutory-forms-nm", "edu-post-eviction-property-nm"],
      },
      {
        id: "nm-deposit-interest-rate",
        label:
          "NMSA 1978, § 47-8-18(A)(1) sets deposit interest by reference to the passbook rate the Federal Home Loan Bank Board allowed savings and loan associations; the Board was abolished in 1989 and no successor rate is named. Recheck if the section is amended or a court sets the rate (NM log §7)",
        clauseIds: ["edu-deposit-interest-nm"],
      },
      {
        id: "nm-stale-cross-references",
        label:
          "Stale cross-references in relied-on New Mexico sections (rule 77): § 47-8-36(A)(4) cites repealed § 47-8-32; § 47-8-36(C)(2) points to § 47-8-48(B), now the screening-fee penalty; § 47-8-35, § 47-8-34(A), § 47-8-27.2(C) and the § 47-8-18(B) and § 57-12-27(A)(3)(a) compiler brackets. Check whether a later act or compilation fixes them (NM log §10)",
        clauseIds: ["edu-screening-fee-nm", "edu-rent-increase-notice-nm"],
      },
      {
        id: "nm-admin-rules",
        label:
          "New Mexico administrative rules not read: fire and building codes for smoke and carbon monoxide alarms, Public Regulation Commission utility shutoff and submetering rules, towing rules, and gross receipts and lodgers' tax regulations (NM log §7)",
        clauseIds: ["edu-no-alarm-statute-nm"],
      },
    ],
  },
  MT: {
    // Montana Code Annotated sections are title-chapter-section ("70-24-303",
    // "70-25-202", "16-12-108"). Montana bills amend "Section 70-24-303, MCA",
    // so the bare quoted number is specific enough and needs no buildQuery.
    // Citations are split on ";" and only the "Mont. Code Ann." parts are
    // read; court rules, the Constitution and federal parts are left to the
    // items below.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^Mont\. Code Ann\./.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,2}[A-Z]?-\d{1,3}[A-Z]?-\d{3,4})\b/g)) out.push(m[1]);
      }
      return out;
    },
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "mt-70-24-303-changeover",
        label:
          "Mont. Code Ann. § 70-24-303's temporary version ends January 1, 2031; the version effective January 2, 2031 drops the 'Subject to 27-1-1603' lead-in. Re-read the landlord-duty and chore rows then (MT log §7, §10)",
        clauseIds: ["maintenance-allocation-mt"],
      },
      {
        id: "mt-2025-ch-656",
        label:
          "2025 Mont. Laws ch. 656: whether 'for actual damages' in the deposit-deadline exception (Mont. Code Ann. § 70-25-202(2)) was struck wasn't confirmed from the enrolled PDF; the row takes the narrower reading. Recheck against the next compilation (MT log §1.2, §7)",
        clauseIds: ["security-deposit-return-mt"],
      },
      {
        id: "mt-court-rules-portal",
        label:
          "Montana sources LegiScan can't see: the Justice and City Court Rules of Civil Procedure (possession actions) and the Rules for Access to the Trial Court Public Record Portal (Section 4.30, two undated versions), behind the eviction and record rows (MT log §7)",
        clauseIds: ["edu-eviction-process-mt", "edu-eviction-record-sealing-mt"],
      },
    ],
  },
  NY: {
    // New York numbers sections separately in each consolidated law, so a
    // bare "711" or "238-a" is ambiguous. Keys carry the law ("Real Prop.
    // Law|238-a"), and the query pairs the section with the law's name the
    // way New York bills write it ("Section 238-a of the real property
    // law"): '"238-a" AND "real property law"'. Citations are split on ";"
    // and only "N.Y. <law> § <section>" parts are read; court rules
    // (NYCRR), the Constitution and federal parts are left to the items
    // below.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        const m = part.match(/^N\.Y\. (.+?) § (\d+(?:-[0-9a-z]+)*(?:\.\d+)?)/);
        if (!m || !NY_LAW_NAMES[m[1]]) continue;
        out.push(`${m[1]}|${m[2]}`);
      }
      return out;
    },
    buildQuery(key) {
      const [law, sec] = key.split("|");
      return `"${sec}" AND "${NY_LAW_NAMES[law]}"`;
    },
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "ny-good-cause-sunset",
        label:
          "New York's Good Cause Eviction Law (N.Y. Real Prop. Law art. 6-A) and the N.Y. Real Prop. Law § 231-c notice are repealed June 15, 2034; § 226-c(1)(a) reverts to its pre-2024 version and the Good Cause sentence in N.Y. Real Prop. Acts. Law § 711(2) lapses. Also check DHCR's list of opt-in localities (NY log §10.2, §7)",
        clauseIds: ["good-cause-notice-ny"],
      },
      {
        id: "ny-new-untested",
        label:
          "New and untested New York laws: N.Y. Exec. Law § 296(5-a) (disparate impact, from December 19, 2025), the FAIR Business Practices Act (N.Y. Gen. Bus. Law § 349, from February 17, 2026), and N.Y. Gen. Bus. Law § 340-b (coordinating rent-pricing software). Recheck for amendments and first cases (NY log §10.2, §10.3)",
        clauseIds: ["edu-fair-housing-ny"],
      },
      {
        id: "ny-rules-local",
        label:
          "New York sources LegiScan can't see: the Uniform Rules (22 NYCRR) for summary proceedings, DHCR and other administrative rules (9, 16, 19 NYCRR), the Constitution, and New York City's Administrative Code and Health Code (flagged under rule 3) (NY log §7)",
        clauseIds: ["edu-scope-ny"],
      },
    ],
  },
  WI: {
    // Wisconsin Statutes sections are chapter + "." + section ("704.28",
    // "799.40", "106.50"), so a bare number looks like a decimal. Wisconsin
    // bills cite them as "704.28 (4) (a) of the statutes is amended", so the
    // query pairs the number with "statutes". Citations are split on ";" and
    // only the "Wis. Stat." parts are read: the Administrative Code
    // (ATCP ch. 134 and others), the Constitution, supreme court rules and
    // federal parts change outside the legislature, so they are manual items
    // below. Subsection parentheses become spaces, so "704.07(3)(a)" stays
    // 704.07.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^Wis\. Stat\./.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,3}\.\d{2,4})\b/g)) out.push(m[1]);
      }
      return out;
    },
    buildQuery: (section) => `"${section}" AND "statutes"`,
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "wi-atcp-134-register",
        label:
          "Wis. Admin. Code ch. ATCP 134 (residential rental practices) changes by DATCP rule, not by bill, so LegiScan can't see it. Check the Wisconsin Administrative Register for any ATCP 134 (or ATCP 125, PSC 113, REEB 18 or REEB 25) rule since Register September 2026, No. 849 (WI log §1.2)",
        clauseIds: ["landlord-disclosure-wi", "nrp-deposit-withholding-wi", "nrp-entry-wi", "edu-landlord-entry-wi", "promised-repairs-wi"],
      },
      {
        id: "wi-koble-704-44-10",
        label:
          "Koble Investments v. Marquardt, 2026 WI 19, left open whether a lease barring unlawful use without the Wis. Stat. § 704.14 notice is void under § 704.44(10) (¶ 25). Check for a later appellate decision, and whether the statute annotations now reflect 2026 WI 19 (WI log §1.4, §10)",
        clauseIds: ["dv-protections-notice-wi", "edu-consumer-protection-wi", "edu-prohibited-terms-wi"],
      },
      {
        id: "wi-2027-effective-dates",
        label:
          "Delayed effective dates: 2025 Wis. Act 105 raises small-claims amounts (Wis. Stat. § 799.01(1)) from January 1, 2027; § 342.40(3)(c) changes January 4, 2027 (Act 196); § 814.61(1)(a) November 1, 2026 (Act 179). Re-read the eviction rows once each takes effect (WI log §1.2, §10)",
        clauseIds: ["edu-eviction-process-wi"],
      },
      {
        id: "wi-scr-72-eviction-records",
        label:
          "Eviction-record retention on the court access site rests on SCR ch. 72 and the 2024 WI 24 orders (Rule Petition 22-03), which LegiScan can't see. Check wicourts.gov for later rule orders (WI log §1.1, §7)",
        clauseIds: ["edu-eviction-records-wi"],
      },
    ],
  },
  WA: {
    // Revised Code of Washington sections are title.chapter.section
    // ("59.18.280", "59.12.030", "49.60.222"). Washington bills amend "RCW
    // 59.18.280 and 2023 c 123 s 4 are each amended", so the query pairs the
    // number with "RCW". Citations are split on ";" and only the "RCW" parts
    // are read; the Administrative Code, court rules and federal parts change
    // outside the legislature, so they are manual items below. Subsection
    // parentheses become spaces, so "59.18.280(1)(a)" stays 59.18.280.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^RCW /.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,2}A?\.\d{2,3}A?\.\d{3,4})\b/g)) out.push(m[1]);
      }
      return out;
    },
    buildQuery: (section) => `"${section}" AND "RCW"`,
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "wa-2027-01-01",
        label:
          "January 1, 2027: the smart access sections (RCW 59.18.750-59.18.760) and the dated RCW 59.18.030 version take effect, and the flood disclosure reaches leases entered into after December 31, 2026. Re-read the smart access, definitions and flood rows (WA log §1.2, §10)",
        clauseIds: ["edu-smart-access-wa", "landlords-access-wa"],
      },
      {
        id: "wa-2028-01-01",
        label:
          "January 1, 2028: the dated versions of RCW 59.18.200 and 59.18.650 take effect, and chapters 64.34 and 64.38 RCW give way to chapter 64.90 RCW for older communities (including the association display rules). Re-read the just-cause and termination rows (WA log §1.2, §10)",
        clauseIds: ["edu-for-cause-eviction-wa", "lease-end-continuation-wa", "fixed-term-end-without-cause-wa"],
      },
      {
        id: "wa-rent-limit-expiry",
        label:
          "July 1, 2040: RCW 59.18.700-59.18.720 (the statewide rent-increase limit) expire under RCW 59.18.700(8); each year the Department of Commerce publishes the next year's maximum percentage. Check the published figure each June and the expiry date (WA log §10)",
        clauseIds: ["edu-rent-increase-limit-wa", "edu-rent-increase-notice-wa"],
      },
      {
        id: "wa-wac-and-court-rules",
        label:
          "Sources LegiScan can't see: the Department of Health's mold information and chapter 246-260 WAC (pool rules), the building code council's carbon monoxide rules (WAC 51), SPR 98.24W and the county superior court local rules behind the eviction rows (WA log §1.1, §7, §10)",
        clauseIds: ["mold-disclosure-wa", "edu-eviction-process-wa"],
      },
    ],
  },
  OR: {
    // Oregon Revised Statutes sections are chapter.section ("90.300",
    // "105.105", "659A.421"), so a bare number looks like a decimal. Oregon
    // bills say "ORS 90.300 is amended to read", so the query pairs the number
    // with "ORS". Citations are split on ";" and only the "ORS" parts are
    // read; the administrative rules (OAR), uncompiled session-law sections
    // and federal parts are manual items below. Subsection parentheses become
    // spaces, so "90.300(7)(a)" stays 90.300.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^ORS \d/.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,3}[A-Z]?\.\d{3,4})\b/g)) out.push(m[1]);
      }
      return out;
    },
    buildQuery: (section) => `"${section}" AND "ORS"`,
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "or-2026-12-18-oar-333-062",
        label:
          "December 18, 2026: the temporary amendment to OAR 333-062-1000 ends. Check what replaces it and re-read the rows that cite it (OR log §10)",
        clauseIds: ["edu-private-well-testing-or"],
      },
      {
        id: "or-2027-01-01",
        label:
          "January 1, 2027: ORS 90.321 (drinking-water testing in a ground water quality management area) becomes operative, and Or. Laws 2026, ch. 60 (smoking definition and the ORS 90.262(2) exception) and ch. 118, § 6 (ORS 475C.792) take effect. Re-read the well-testing, smoking and cannabis rows (OR log §10)",
        clauseIds: ["edu-private-well-testing-or", "smoking-policy-or", "cannabis-cultivation-or"],
      },
      {
        id: "or-2027-09-28-ch-598",
        label:
          "September 28, 2027: Or. Laws 2025, ch. 598 (rescheduling an eviction trial for a Medicaid new parent) is repealed, which also changes the ORS 105.136 form. Re-read the eviction-process row (OR log §10)",
        clauseIds: ["edu-eviction-process-or"],
      },
      {
        id: "or-2028-dated-versions",
        label:
          "January 1-2, 2028: the dated versions of ORS 90.303 (applicant screening) and ORS 105.163 take effect, and Or. Laws 2026, ch. 79, §§ 2-3 (inclusionary zoning) is restated. Re-read the screening and eviction rows (OR log §10)",
        clauseIds: ["edu-tenant-screening-or", "edu-eviction-process-or"],
      },
      {
        id: "or-uncompiled-2026-ch-23",
        label:
          "Or. Laws 2026, ch. 23, § 3 (payments by check or other commercially reasonable methods; tenant portals) isn't yet compiled into ORS, so bill search can't find it by section. Once the 2027 ORS edition gives it a number, update the citations and add it to the watch (OR log §10)",
        clauseIds: ["late-fee-limit-or", "nsf-fee-limit-or", "edu-tenant-portal-or"],
      },
    ],
  },
  KY: {
    // Kentucky Revised Statutes sections are chapter.section ("383.580",
    // "411.195") or, in a few chapters, chapter.article-section
    // ("224.1-410"). Kentucky bills say "KRS 383.580 is amended to read", so
    // the query pairs the number with "KRS". Citations are split on ";" and
    // only the "KRS" parts are read; administrative regulations (KAR), local
    // URLTA adoptions and federal parts are manual items below. Subsection
    // parentheses become spaces, so "383.580(2)" stays 383.580.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^KRS \d/.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,3}[A-Z]?\.\d{1,3}-\d{3}|\d{1,3}[A-Z]?\.\d{3,4})\b/g)) out.push(m[1]);
      }
      return out;
    },
    buildQuery: (section) => `"${section}" AND "KRS"`,
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "ky-urlta-adoptions",
        label:
          "Which cities and counties have adopted the Uniform Residential Landlord and Tenant Act under KRS 383.500 changes by local ordinance, which LegiScan can't see, and no primary statewide list exists. Check for new adoptions or repeals (KY log §1.1, §7)",
        clauseIds: ["edu-urlta-scope-ky", "edu-local-preemption-ky"],
      },
      {
        id: "ky-kar-and-escheat",
        label:
          "Sources LegiScan can't see, and one open question: the building and fire code regulations (815 KAR 7, 815 KAR 10), Public Service Commission disconnection rules (807 KAR 5:006) and the methamphetamine disclosure regulations (902 KAR); and whether KRS 383.580(7)'s 60-day rule or the unclaimed property law (KRS 393.080, chapter 393A) governs an unclaimed deposit refund (KY log §6.3, §7, §10)",
        clauseIds: ["edu-deposit-escheat-ky", "meth-contamination-disclosure-ky"],
      },
    ],
  },
  WV: {
    // West Virginia Code sections are chapter-article-section ("37-6A-2",
    // "16B-18-5", "61-3-39e"). Bills amend "§37-6A-2 of the Code of West
    // Virginia, 1931, as amended", so the query pairs the number with "Code
    // of West Virginia". Citations are split on ";" and only the "W. Va.
    // Code" parts are read; legislative rules, court rules and federal parts
    // are manual items below. Subsection parentheses become spaces, so
    // "37-6A-2(b)(1)" stays 37-6A-2.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        if (!/^W\. Va\. Code/.test(part)) continue;
        const body = part.replace(/\([^)]*\)/g, " ");
        for (const m of body.matchAll(/\b(\d{1,2}[A-Z]?-\d{1,2}[A-Z]?-\d{1,3}[a-z]?)\b/g)) out.push(m[1]);
      }
      return out;
    },
    buildQuery: (section) => `"${section}" AND "Code of West Virginia"`,
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "wv-legislative-rules",
        label:
          "Legislative rules LegiScan can't see and the WV pass didn't read: the former drug-laboratory disclosure rule under W. Va. Code § 60A-11-3(a)(6), the State Fire Code and Building Code (smoke and carbon monoxide detectors), health and sanitation rules, Public Service Commission utility rules and Real Estate Commission trust-account rules (WV log §7)",
        clauseIds: ["edu-meth-lab-wv", "smoke-detectors-wv"],
      },
      {
        id: "wv-court-rules-conflicts",
        label:
          "Court rules LegiScan can't see, where they conflict with the statute: the jury election (Magistrate Court Civil Rule 6A's 5 days vs W. Va. Code § 50-5-8's 20), the appeal bond (Rule 18(b) vs § 50-5-12(a)) and possession during appeal (Rule 18A vs § 55-3A-3(g)). Check for rule amendments (WV log §10)",
        clauseIds: ["edu-eviction-process-wv", "edu-eviction-hardship-stay-wv"],
      },
    ],
  },
  MD: {
    // Maryland numbers sections separately in each article, so a bare
    // "8-203" is ambiguous. Keys carry the article ("Real Prop.|8-203"), and
    // the query pairs the section with the article's name the way Maryland
    // bills write it ("Article - Real Property Section 8-203"): '"8-203" AND
    // "Real Property"'. Bills print the section with an en dash ("8–203");
    // LegiScan's search splits on punctuation, so the hyphenated phrase
    // should match, and the first run's totals are checked (backlog).
    // Citations are split on ";" and only "Md. Code Ann., <article> §
    // <section>" parts are read; COMAR, court rules, chapter laws and federal
    // parts are left to the items below.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        const m = part.match(/^Md\. Code Ann\., (.+?) § (\d{1,2}[A-Z]?-\d{1,4}[A-Z]?(?:-\d{1,4})?(?:\.\d+)?)/);
        if (!m || !MD_ARTICLE_NAMES[m[1]]) continue;
        out.push(`${m[1]}|${m[2]}`);
      }
      return out;
    },
    buildQuery(key) {
      const [article, sec] = key.split("|");
      return `"${sec}" AND "${MD_ARTICLE_NAMES[article]}"`;
    },
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "md-regulations-pending",
        label:
          "COMAR regulations not yet adopted when the MD pass read COMAR (2026-10-08): positive rent reporting (Md. Code Ann., Real Prop. § 8-208.4), criminal-history screening (Real Prop. Title 8, Subtitle 2A, § 8-2A-12) and the Tenants' Bill of Rights text (Hous. & Cmty. Dev. § 5-104). Check whether they have been adopted and whether they add lease text (MD log §7)",
        clauseIds: ["rent-reporting-offer-md", "edu-criminal-history-screening-md", "tenants-bill-of-rights-md"],
      },
      {
        id: "md-court-rules-forms",
        label:
          "Maryland sources LegiScan can't see and the MD pass didn't read: the Maryland Rules (Title 3, District Court) and the Judiciary's forms, including the Real Prop. § 8-401(c) pre-filing notice form and the complaint forms; also the Minimum Livability Code text (Pub. Safety § 12-203) and local law flagged in MD log §7 (Baltimore City, Montgomery, Prince George's and Howard Counties)",
        clauseIds: ["edu-eviction-notices-md", "edu-eviction-service-md"],
      },
    ],
  },
  MA: {
    // Massachusetts numbers sections within each chapter of the General Laws,
    // so a bare "§ 15B" is ambiguous. Keys carry the chapter ("186|15B"), and
    // the query uses the phrase Massachusetts bills amend by: "Section 15B of
    // chapter 186 of the General Laws, as appearing in ..., is hereby amended".
    // Only "Mass. Gen. Laws ch. <ch>, § <sec>" parts of a citation are read;
    // regulations (CMR), session-law citations, court rules and federal parts
    // are left to the items below.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        const m = part.match(/^Mass\. Gen\. Laws ch\. (\d{1,3}[A-Z]{0,2}), § (\d{1,3}[A-Z]{0,4}(?:-\d{1,3}[A-Z]{0,2})?(?:½)?)/);
        if (!m) continue;
        // A cited range ("§§ 23-29", "§§ 127C-127I") is watched section by
        // section. Chapter 106 (the UCC) numbers sections with a hyphen
        // ("2-302", "2A-108"), so its numbers are single sections.
        const r = m[1] === "106" ? null : m[2].match(/^(\d+)([A-Z]?)-(\d+)([A-Z]?)$/);
        if (r && !r[2] && !r[4] && +r[1] < +r[3] && +r[3] - +r[1] <= 30) {
          for (let n = +r[1]; n <= +r[3]; n++) out.push(`${m[1]}|${n}`);
        } else if (r && r[1] === r[3] && r[2] && r[4] && r[2] < r[4]) {
          for (let c = r[2].charCodeAt(0); c <= r[4].charCodeAt(0); c++) out.push(`${m[1]}|${r[1]}${String.fromCharCode(c)}`);
        } else {
          out.push(`${m[1]}|${m[2]}`);
        }
      }
      return [...new Set(out)];
    },
    buildQuery(key) {
      const [chapter, sec] = key.split("|");
      return `"section ${sec} of chapter ${chapter}"`;
    },
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "ma-regulations",
        label:
          "Massachusetts regulations LegiScan can't see: 940 CMR 3.17 (Attorney General landlord-tenant rules), 105 CMR 410 (State Sanitary Code), 105 CMR 460 (lead), 940 CMR 38 (fee transparency) and any EOHLC regulation authorizing a fee in lieu of a security deposit under ch. 186, § 15B(1)(b)(iii) (none existed 2026-10-08). Check mass.gov for amendments since the MA pass (2026-10-08). Also ch. 186, § 23 still cites 105 CMR 410.020, which the 2023 Sanitary Code removed (MA log §10)",
        clauseIds: ["owner-contact-disclosure-ma", "utilities-responsibility-ma", "sanitary-code-variance-ma", "lead-law-certification-ma", "edu-fee-in-lieu-of-deposit-ma", "edu-automatic-renewal-rules-ma"],
      },
      {
        id: "ma-unread-sources",
        label:
          "Massachusetts sources the MA pass didn't read: the Uniform Summary Process Rules' proposed amendments (Rules 1, 4, 6, 8, 10-12; the comment notice returned 404), the Rules of Civil Procedure, 527 CMR (fire code), 780 CMR (building code), 935 CMR (cannabis) and 220 CMR (utilities), and local ordinances (MA log §7). Also confirm ch. 239, § 17 (federal-shutdown protections) is still in force; malegislature.gov files it under chapter 221's index",
        clauseIds: ["edu-nonpayment-notice-to-quit-ma", "edu-shutdown-late-fee-ma", "edu-cannabis-lease-limits-ma", "edu-storage-space-ma"],
      },
    ],
  },
  CT: {
    // Connecticut section numbers carry their title ("47a-21"), so they are
    // unique across the General Statutes. Bills amend by "Section 47a-21 of
    // the general statutes is repealed ..." or "subsection (b) of section
    // 47a-4d of the general statutes", so the query is that phrase. Only
    // "Conn. Gen. Stat. § <sec>" parts are read; regulations (Conn. Agencies
    // Regs.), the Practice Book, public acts and federal parts are left to the
    // items below. Cited ranges are already expanded in the citations file.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        const m = part.match(/^Conn\. Gen\. Stat\. § (\d{1,2}[a-z]{0,2}-\d{1,4}[a-z]{0,3}(?:-\d{1,4}[a-z]?)?)/);
        if (m) out.push(m[1]);
      }
      return [...new Set(out)];
    },
    buildQuery: (section) => `"section ${section} of the general statutes"`,
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-based-paint"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-based-paint"] }],
    manualRecheckItems: [
      {
        id: "ct-uncompiled-2026-acts",
        label:
          "Connecticut 2026 public acts the CT pass read before they were compiled (CT log §1.2): No. 26-113, § 1 (new § 47a-4(a)(11), utilities not separately metered), No. 26-68, § 59 (§ 47a-4d(b)), No. 26-79, § 3 (§ 47a-21(j)), No. 26-11, § 15 (§ 47a-23c cross-reference), No. 26-77 (fair housing misdemeanor moved), No. 26-58 (fire codes), No. 26-100, § 60, No. 26-127, § 9. When the 2027 revision or 2026 Supplement on cga.ct.gov prints them, confirm the compiled section numbers and wording match the rows that say \"compiled text pending\"",
        clauseIds: ["utilities-responsibility", "due-at-signing-ct", "edu-for-cause-eviction-ct", "edu-fair-housing-ct", "edu-applicable-codes-ct", "edu-tenant-paid-utilities-ct"],
      },
      {
        id: "ct-agency-figures-forms",
        label:
          "Connecticut figures and forms agencies publish, which LegiScan can't see: the Commissioner of Housing's CPI-adjusted screening-fee cap under § 47a-4d(c) (not located 2026-10-09), the Banking Commissioner's deposit index for each year (0.49% for 2026; § 47a-21(i), § 36a-26), the DOH Standardized Rental Terms Summary Form (§ 47a-7d(d)) and Form AM-011 protected-tenant notice (§ 47a-23c(e)), and the Judicial Branch right-to-counsel notice (§ 47a-75(f)). Check portal.ct.gov/doh and the Department of Banking deposit index page each January",
        clauseIds: ["security-deposit-interest-ct", "edu-application-screening-fees-ct", "edu-rental-terms-summary-form-ct", "edu-protected-tenant-notice-ct", "edu-nonpayment-notice-to-quit-ct"],
      },
      {
        id: "ct-regulations-court-rules",
        label:
          "Connecticut regulations and court rules LegiScan can't see: Conn. Agencies Regs. §§ 19a-111-1 to 19a-111-11 (lead), 16-3-100 (utility termination), the Fire Safety and Fire Prevention Code amendments (29-292, 29-291a), and the Practice Book (amendments adopted June 11, 2026 take effect January 1, 2027). Check eregulations.ct.gov and jud.ct.gov for changes since the CT pass (2026-10-09); the rest of the RCSA, including the Public Health Code (19-13), was not loaded (CT log §7)",
        clauseIds: ["edu-lead-abatement-ct", "edu-utility-shutoff-rules-ct", "edu-applicable-codes-ct", "edu-eviction-process-ct"],
      },
    ],
  },
  RI: {
    // Rhode Island sections are title-chapter-section ("34-18-19", with
    // decimal chapters and sections: "45-24.3-17", "34-18-16.1"), unique across
    // the General Laws, so keys are bare. Bills amend by "Section 34-18-19 of
    // the General Laws in Chapter 34-18 ..." (or list several sections), so the
    // query is the quoted number, as for NJ. Only "R.I. Gen. Laws §" parts are
    // read; RICR regulations, public laws, court rules and federal parts are
    // left to the items below. Cited ranges are expanded in the citations file.
    extractSections(text) {
      const out = [];
      for (const part of text.split(";").map((p) => p.trim()).filter(Boolean)) {
        const m = part.match(/^R\.I\. Gen\. Laws § (\d{1,2}[A-Z]?-\d{1,3}(?:\.\d{1,2})?-\d{1,4}(?:\.\d{1,2})?)/);
        if (m) out.push(m[1]);
      }
      return [...new Set(out)];
    },
    buildQuery: (section) => `"${section}"`,
    cfrChecks: [{ title: "40", section: "745.113", clauseIds: ["lead-disclosure-ri"] }],
    federalStatuteChecks: [{ section: "4852d", clauseIds: ["lead-disclosure-ri"] }],
    manualRecheckItems: [
      {
        id: "ri-uncompiled-2026-acts",
        label:
          "Rhode Island 2026 public laws the RI pass read before they were compiled (RI log §1.2): chs. 147, 148 (survivor protections, new §§ 34-18-63 to 34-18-67 and renumbered § 34-18-11 definitions, July 1, 2026), chs. 165, 166 (shoreline access disclosure, § 34-18-20(e), January 1, 2027), ch. 282 (jury-waiver timing, January 1, 2027), chs. 327, 328 (SAFE Units) and chs. 44, 45 (asbestos). When the General Laws on webserver.rilegislature.gov print them, confirm the compiled numbers and wording. Also: § 34-18-67's heading says \"through 34-18-64\" and its text \"through 34-18-65\" (RI log §10); watch for a correction",
        clauseIds: ["keys-ri", "shoreline-access-disclosure-ri", "edu-dv-lease-termination-ri", "edu-knowing-use-penalty-ri", "edu-jury-waiver-ri", "edu-pest-treatment-ri"],
      },
      {
        id: "ri-regulations",
        label:
          "Rhode Island regulations LegiScan can't see: 216-RICR-50-15-3 (lead poisoning prevention: the lease-time disclosure on its own page, certificates of conformance), and the parts the pass didn't load (Fire Safety Code and NFPA adoptions, State Building Code, DOH private-well rules, PUC utility termination rules). Check rules.sos.ri.gov for changes since the RI pass (2026-10-09); 216-RICR-50-15-3.2.1(A)(3)(a) carries a stale statutory cross-reference (RI log §10)",
        clauseIds: ["lead-disclosure-ri", "edu-lead-certificate-ri", "edu-alarm-duties-ri", "edu-private-well-testing-ri"],
      },
      {
        id: "ri-registry",
        label:
          "The Department of Health statewide rental registry (§ 34-18-58): registration is a condition of a nonpayment eviction, with annual re-registration by October 1. Check the DOH registry page each year for any change to the process or the online database",
        clauseIds: ["edu-rental-registry-ri"],
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
  "GA", "NC", "SC", "TN", "VA", "AL", "PA", "UT", "IL", "ID", "MO", "IN", "OK", "MI",
  "IA", "NM", "MT", "NY", "WI", "WA", "OR", "KY", "WV", "MD",
  "MA", "CT", "RI",
];
function cronFor(code) {
  const n = SCHEDULE_ORDER.indexOf(code);
  if (n < 0) throw new Error(`${code} is not in SCHEDULE_ORDER`);
  return `0 ${13 + Math.floor(n / 28)} ${(n % 28) + 1} * *`;
}

module.exports = { STATE_NAMES, STATE_CONFIG, SCHEDULE_ORDER, cronFor };
