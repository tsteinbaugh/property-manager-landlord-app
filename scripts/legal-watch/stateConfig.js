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
};

module.exports = { STATE_NAMES, STATE_CONFIG };
