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
    sectionPattern: /\b(\d{1,3}-\d{1,4}(?:,\d{1,4})?)\b/g,
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
    sectionPattern: /\b(\d{1,2}[A-Z]?-\d{1,2}-\d{1,3}(?:\.\d+)?)\b/g,
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
          "accommodation-request-rights-ca",
          "edu-accommodation-process-ca",
          "reasonable-modification-ca",
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
};

module.exports = { STATE_NAMES, STATE_CONFIG };
