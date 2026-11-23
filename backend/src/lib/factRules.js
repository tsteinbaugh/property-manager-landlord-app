// Applicability rules written as data: for each Required or Legal duty clause
// the law requires only in some situations, the condition (over the Lease
// questions' answers) under which this lease needs it. See ruleConditions.js
// for the format. A missing answer counts as "applies" unless the rule says
// `unknownMeans: false`. Each condition comes from the clause's research notes
// in lease-clauses.csv, which quote the statute (2026-11-22).

// `unknownMeans: false` marks a clause that states the triggering fact as true
// (for example, that meth was made on the property), which would be wrong in a
// lease that doesn't need it: it is added only once the answer is Yes, and the
// builder asks the question (CLAUDE.md: a missing fact counts as "applies",
// except where the clause would be wrong in a lease that doesn't need it).
//
// Drafted 2026-11-22 from each clause's bodyText and research notes and
// reviewed by Claude Code. The last three without a rule got one 2026-11-23.

const FACT_RULES = {
  // NRS 118A.275(1): a written disclosure to a prospective tenant if the
  // property is the subject of any foreclosure proceedings. Nevada only: the
  // clause's other states record no duty (stateScopedTags.js). A blank answer
  // counts as applies; the clause states either way.
  "foreclosure-disclosure-nv": {
    condition: {
      all: [
        { fact: "property.state", op: "eq", value: "NV" },
        { fact: "lease.foreclosureUnderway", op: "eq", value: true },
      ],
    },
    note: "in Nevada, when the property is the subject of foreclosure proceedings",
  },
  // Every District lease: the application packet, the ch. 3 copy and the signed
  // copy apply to every tenancy (D.C. Code § 42-3502.22(b); 14 DCMR §§ 300.1,
  // 303.1); items (b) and (c) are bracketed by whether the unit is rent-stabilized.
  "required-disclosures-dc": {
    condition: { fact: "property.state", op: "eq", value: "DC" },
    note: "to every District of Columbia lease",
  },
  // Minn. Stat. § 325F.722, subd. 2(c)(5): only an exempt setting's contract
  // needs the statement, so the clause waits for a Yes.
  "key-control-exempt-setting-mn": {
    condition: { fact: "property.mnExemptSetting", op: "eq", value: true },
    note: "when the property is a Minnesota exempt setting (housing with services exempt from assisted living licensure)",
    unknownMeans: false,
  },
  "access-control-lease-statement-pr": {
    condition: {
      fact: "property.accessControlledCommunity",
      op: "eq",
      value: true,
    },
    note: "when the property is in a community with a municipal access-control permit",
    unknownMeans: false,
  },
  "activity-use-limitation-ma": {
    condition: {
      fact: "property.environmentalRestriction",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, there is a recorded environmental restriction on the land",
    unknownMeans: false,
  },
  "activity-use-limitation-notice-ct": {
    condition: {
      fact: "property.environmentalRestriction",
      op: "eq",
      value: true,
    },
    note: "when a Notice of Activity and Use Limitation is recorded on the property",
    unknownMeans: false,
  },
  "activity-use-restriction-nh": {
    condition: {
      fact: "property.environmentalRestriction",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, a recorded environmental restriction applies to the land",
    unknownMeans: false,
  },
  "asbestos-disposal-site-disclosure-nh": {
    condition: {
      fact: "property.asbestosDisposalSite",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, there is an asbestos disposal site on the property",
    unknownMeans: false,
  },
  "association-obligations-disclosure-dc": {
    condition: {
      any: [
        {
          fact: "property.propertyType",
          op: "in",
          value: ["CONDO", "COOP"],
        },
        {
          fact: "property.associationType",
          op: "in",
          value: ["CONDO", "COOP"],
        },
      ],
    },
    note: "when the unit is in a condominium or cooperative",
    unknownMeans: false,
  },
  "bed-bug-disclosure-ct": {
    condition: {
      fact: "property.propertyType",
      op: "ne",
      value: "SINGLE_FAMILY",
    },
    note: "for every unit except a single-family detached house",
  },
  "bed-bug-disclosure-me": {
    condition: {
      fact: "property.bedBugs",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, this unit or a unit next to it has bed bugs or is being treated for them",
  },
  "bedbug-obligations-az": {
    condition: {
      fact: "property.propertyType",
      op: "ne",
      value: "SINGLE_FAMILY",
    },
    note: "unless the property is a single-family house",
  },
  "broker-duties-confirmation-ok": {
    condition: {
      any: [
        {
          fact: "lease.brokerInvolved",
          op: "eq",
          value: true,
        },
        {
          fact: "property.managerLicensed",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when a real estate broker provides brokerage services to you or the tenant for this lease",
  },
  "brownfield-notice-ms": {
    condition: {
      fact: "property.environmentalRestriction",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, a recorded environmental restriction (such as a brownfield notice) applies to the land",
    unknownMeans: false,
  },
  "certificate-of-occupancy-notice-ny": {
    condition: {
      any: [
        {
          fact: "property.propertyType",
          op: "nin",
          value: ["APARTMENT"],
        },
        {
          fact: "property.unitsInBuilding",
          op: "lte",
          value: 3,
        },
        {
          all: [
            {
              fact: "property.unitsInBuilding",
              op: "eq",
              value: 4,
            },
            {
              fact: "property.ownerLivesInBuilding",
              op: "eq",
              value: true,
            },
          ],
        },
      ],
    },
    note: "when the property has three or fewer rental units (a house, ADU, condo, co-op or townhouse unit, or a building of three or fewer rental units)",
  },
  "cic-notice-ct": {
    condition: {
      all: [
        {
          fact: "property.associationType",
          op: "in",
          value: ["HOA", "CONDO", "COOP"],
        },
        {
          fact: "property.landlordIsDeclarant",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when you're the developer (declarant) of the common interest community the unit is in, or act for one",
    unknownMeans: false,
  },
  "columbia-association-md": {
    condition: {
      all: [
        {
          fact: "property.county",
          op: "matches",
          value: ["Howard"],
        },
        {
          fact: "property.columbiaAssociation",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when the property is in Howard County and subject to Columbia Association covenants",
    unknownMeans: false,
  },
  "common-area-lighting-ca": {
    condition: {
      all: [
        {
          fact: "property.electricOrGasMeterOutsideUnit",
          op: "eq",
          value: true,
        },
        {
          not: {
            all: [
              {
                fact: "property.utility.electric.whoPays",
                op: "in",
                value: ["INCLUDED", "NOT_PROVIDED"],
              },
              {
                fact: "property.utility.gas.whoPays",
                op: "in",
                value: ["INCLUDED", "NOT_PROVIDED"],
              },
            ],
          },
        },
      ],
    },
    note: "when the tenant's electric or gas meter also serves areas outside the unit (hallway or outdoor lights, a shared laundry)",
    unknownMeans: false,
  },
  "common-area-lighting-ma": {
    condition: {
      all: [
        {
          any: [
            {
              all: [
                {
                  fact: "property.propertyType",
                  op: "in",
                  value: ["APARTMENT", "CONDO", "COOP", "TOWNHOUSE"],
                },
                {
                  fact: "property.unitsInBuilding",
                  op: "in",
                  value: [2, 3],
                },
              ],
            },
            {
              fact: "property.propertyType",
              op: "eq",
              value: "ADU",
            },
          ],
        },
        {
          fact: "property.electricMeterOutsideUnit",
          op: "eq",
          value: true,
        },
        {
          fact: "property.utility.electric.whoPays",
          op: "nin",
          value: ["INCLUDED", "NOT_PROVIDED"],
        },
      ],
    },
    note: "when the building has two or three units, the unit's meter also runs common hallway or stair lights, and the tenant pays for the unit's electricity",
    unknownMeans: false,
  },
  "condition-disclosure-wi": {
    condition: {
      any: [
        {
          fact: "property.codeViolations",
          op: "eq",
          value: true,
        },
        {
          fact: "property.habitabilityProblem",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when, to your best knowledge, there are open code violations or a listed habitability problem at the property",
  },
  "condo-documents-wi": {
    condition: {
      all: [
        {
          any: [
            {
              fact: "property.propertyType",
              op: "eq",
              value: "CONDO",
            },
            {
              fact: "property.associationType",
              op: "eq",
              value: "CONDO",
            },
          ],
        },
        {
          not: {
            all: [
              {
                fact: "lease.leaseType",
                op: "eq",
                value: "FIXED",
              },
              {
                fact: "lease.termDays",
                op: "lte",
                value: 31,
              },
            ],
          },
        },
      ],
    },
    note: "when the property is a condominium unit, unless the lease is a fixed term of one month or less",
  },
  "condo-repair-contact-ma": {
    condition: {
      any: [
        {
          fact: "property.propertyType",
          op: "eq",
          value: "CONDO",
        },
        {
          fact: "property.associationType",
          op: "eq",
          value: "CONDO",
        },
      ],
    },
    note: "when the property is a condominium unit",
    unknownMeans: false,
  },
  "condo-unit-particulars-ny": {
    condition: {
      any: [
        {
          fact: "property.propertyType",
          op: "eq",
          value: "CONDO",
        },
        {
          fact: "property.associationType",
          op: "eq",
          value: "CONDO",
        },
      ],
    },
    note: "when the property is a condominium unit",
    unknownMeans: false,
  },
  "condominium-apartment-particulars-gu": {
    condition: {
      any: [
        {
          fact: "property.propertyType",
          op: "eq",
          value: "CONDO",
        },
        {
          fact: "property.associationType",
          op: "eq",
          value: "CONDO",
        },
      ],
    },
    note: "when the property is a condominium apartment",
    unknownMeans: false,
  },
  "condominium-lease-statement-pr": {
    condition: {
      any: [
        {
          fact: "property.propertyType",
          op: "eq",
          value: "CONDO",
        },
        {
          fact: "property.associationType",
          op: "eq",
          value: "CONDO",
        },
      ],
    },
    note: "when the property is a condominium unit",
    unknownMeans: false,
  },
  "condominium-unit-identification-wv": {
    condition: {
      any: [
        {
          fact: "property.propertyType",
          op: "eq",
          value: "CONDO",
        },
        {
          fact: "property.associationType",
          op: "eq",
          value: "CONDO",
        },
      ],
    },
    note: "when the property is a condominium unit",
    unknownMeans: false,
  },
  "condominium-unit-lease-contents-mt": {
    condition: {
      any: [
        {
          fact: "property.propertyType",
          op: "eq",
          value: "CONDO",
        },
        {
          fact: "property.associationType",
          op: "eq",
          value: "CONDO",
        },
      ],
    },
    note: "when the property is a condominium unit",
    unknownMeans: false,
  },
  "contamination-disclosure-mo": {
    condition: {
      fact: "property.hazardousContamination",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, the property is or was contaminated with radioactive or other hazardous material",
    unknownMeans: false,
  },
  "contamination-notice-mi": {
    condition: {
      any: [
        {
          fact: "property.environmentalRestriction",
          op: "eq",
          value: true,
        },
        {
          fact: "property.knownContamination",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when, to your best knowledge, part of the land is contaminated or listed as a contaminated site, or a recorded environmental restriction applies",
    unknownMeans: false,
  },
  "continuing-obligation-wi": {
    condition: {
      any: [
        {
          fact: "property.environmentalRestriction",
          op: "eq",
          value: true,
        },
        {
          fact: "property.knownContamination",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when, to your best knowledge, part of the land is contaminated or under a cleanup closure, or a recorded environmental restriction applies",
    unknownMeans: false,
  },
  "conversion-notice-md": {
    condition: {
      fact: "property.condoConversion",
      op: "eq",
      value: true,
    },
    note: "when the tenants of the building have been given a notice of conversion to a condominium or cooperative",
    unknownMeans: false,
  },
  "conversion-statement-nj": {
    condition: {
      all: [
        {
          fact: "property.propertyType",
          op: "nin",
          value: ["SINGLE_FAMILY", "ADU", "ROOM_IN_OWNER_HOME"],
        },
        {
          any: [
            {
              fact: "property.condoConversion",
              op: "eq",
              value: true,
            },
            {
              all: [
                {
                  any: [
                    {
                      fact: "property.propertyType",
                      op: "in",
                      value: ["CONDO", "COOP"],
                    },
                    {
                      fact: "property.associationType",
                      op: "in",
                      value: ["CONDO", "COOP"],
                    },
                  ],
                },
                {
                  fact: "property.condoConversion",
                  op: "ne",
                  value: false,
                },
              ],
            },
          ],
        },
      ],
    },
    note: "when the building or park is being converted to, or has been converted to, a condominium or cooperative",
    unknownMeans: false,
  },
  "deposit-bank-notice-ny": {
    condition: {
      fact: "lease.depositTaken",
      op: "eq",
      value: true,
    },
    note: "when you take a security deposit, or the deposit isn't entered",
  },
  "disability-modification-restoration-id": {
    condition: {
      all: [
        {
          fact: "property.propertyType",
          op: "ne",
          value: "ROOM_IN_OWNER_HOME",
        },
        {
          not: {
            all: [
              {
                fact: "property.ownerLivesInBuilding",
                op: "eq",
                value: true,
              },
              {
                fact: "property.unitsInBuilding",
                op: "lte",
                value: 2,
              },
            ],
          },
        },
      ],
    },
    note: "unless the owner lives in a building of two units or fewer, or the tenant rents a room in the owner's home",
  },
  "electric-account-charge-notice-wi": {
    condition: {
      all: [
        {
          fact: "property.energyChargeOnBill",
          op: "eq",
          value: true,
        },
        {
          fact: "property.utility.electric.whoPays",
          op: "nin",
          value: ["INCLUDED", "NOT_PROVIDED"],
        },
      ],
    },
    note: "when the electric account carries a project or energy-efficiency charge and the tenant pays the electric bills",
    unknownMeans: false,
  },
  "electric-allocation-disclosure-tx": {
    condition: {
      all: [
        {
          fact: "property.utility.electric.method",
          op: "in",
          value: ["SHARED_SPLIT", "FLAT"],
        },
        {
          fact: "property.propertyType",
          op: "ne",
          value: "SINGLE_FAMILY",
        },
      ],
    },
    note: "when you split a master-metered or central-system electric bill among the tenants of a property with two or more units",
  },
  "electric-submetering-disclosure-in": {
    condition: {
      all: [
        {
          fact: "property.utility.electric.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
        {
          fact: "property.utility.electric.method",
          op: "eq",
          value: "SUBMETER",
        },
      ],
    },
    note: "when you charge the tenant for electricity through a submeter",
    unknownMeans: false,
  },
  "emergency-contact-consent-ny": {
    condition: {
      all: [
        {
          not: {
            fact: "property.propertyType",
            op: "in",
            value: [
              "SINGLE_FAMILY",
              "ADU",
              "ROOM_IN_OWNER_HOME",
              "MANUFACTURED_HOME",
            ],
          },
        },
        {
          not: {
            fact: "property.unitsInBuilding",
            op: "lte",
            value: 2,
          },
        },
      ],
    },
    note: "when the building has three or more units",
  },
  "energy-data-release-mn": {
    condition: {
      any: [
        {
          fact: "property.utility.gas.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
        {
          fact: "property.utility.water.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
        {
          fact: "property.utility.sewer.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
      ],
    },
    note: "when you charge the tenant back for natural gas, water or sewer",
  },
  "energy-tariff-disclosure-nh": {
    condition: {
      fact: "property.energyChargeOnBill",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, a utility the tenant pays carries an energy-efficiency or renewable-energy charge",
    unknownMeans: false,
  },
  "environmental-covenant-incorporation-co": {
    condition: {
      fact: "property.environmentalRestriction",
      op: "eq",
      value: true,
    },
    note: "when a recorded environmental covenant or notice of environmental use restrictions applies to the property",
    unknownMeans: false,
  },
  "environmental-easement-ny": {
    condition: {
      fact: "property.environmentalRestriction",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, a recorded environmental restriction (such as a state environmental easement) applies to the land",
    unknownMeans: false,
  },
  "environmental-use-restriction-az": {
    condition: {
      fact: "property.environmentalRestriction",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, there is a recorded environmental restriction on the land",
    unknownMeans: false,
  },
  "fee-disclosure-first-page-il": {
    condition: {
      not: {
        any: [
          {
            fact: "property.propertyType",
            op: "eq",
            value: "ROOM_IN_OWNER_HOME",
          },
          {
            all: [
              {
                fact: "property.ownerLivesInBuilding",
                op: "eq",
                value: true,
              },
              {
                fact: "property.unitsInBuilding",
                op: "lte",
                value: 6,
              },
            ],
          },
        ],
      },
    },
    note: "unless the owner lives in the building and it has six or fewer units",
  },
  "fire-relocation-benefit-notice-ma": {
    condition: {
      all: [
        {
          fact: "property.propertyType",
          op: "nin",
          value: ["SINGLE_FAMILY", "MANUFACTURED_HOME", "ROOM_IN_OWNER_HOME"],
        },
        {
          any: [
            {
              fact: "property.propertyType",
              op: "in",
              value: ["APARTMENT", "CONDO", "COOP", "ADU"],
            },
            {
              fact: "property.unitsInBuilding",
              op: "gte",
              value: 2,
            },
          ],
        },
      ],
    },
    note: "when the property is part of a building or lot with more than one dwelling unit (apartment, condo, co-op, ADU, or townhouse in a multi-unit building), or the property type isn't entered",
  },
  // Ind. Code § 32-31-1-21: the lowest floor at or below the 100-year flood
  // elevation on a DNR, FEMA or FEMA-approved local map (read 2026-11-22; the
  // FEMA flood-zone question was a stand-in).
  "flood-disclosure-in": {
    condition: {
      fact: "property.belowFloodElevationIN",
      op: "eq",
      value: true,
    },
    note: "when the building's lowest floor is at or below the 100-year flood elevation",
    unknownMeans: false,
  },
  "flood-disclosure-ok": {
    condition: {
      fact: "property.floodedRecently",
      op: "eq",
      value: true,
    },
    note: "when you know the property flooded in the last five years",
    unknownMeans: false,
  },
  "flood-insurance-lease-notice-nj": {
    condition: {
      all: [
        {
          not: {
            fact: "property.propertyType",
            op: "in",
            value: ["SINGLE_FAMILY", "ADU", "ROOM_IN_OWNER_HOME"],
          },
        },
        {
          not: {
            fact: "property.unitsInBuilding",
            op: "lte",
            value: 2,
          },
        },
        {
          not: {
            all: [
              {
                fact: "property.ownerLivesInBuilding",
                op: "eq",
                value: true,
              },
              {
                fact: "property.unitsInBuilding",
                op: "lte",
                value: 3,
              },
            ],
          },
        },
        {
          not: {
            all: [
              {
                fact: "lease.seasonal",
                op: "eq",
                value: true,
              },
              {
                fact: "lease.termDays",
                op: "lt",
                value: 120,
              },
            ],
          },
        },
      ],
    },
    note: "when the building has three or more units, unless the owner lives in a building of three units, and it isn't a seasonal rental of under 120 days",
  },
  "flood-plain-notice-or": {
    condition: {
      fact: "property.floodZone",
      op: "eq",
      value: true,
    },
    note: "when the property is in a FEMA 100-year flood plain",
    unknownMeans: false,
  },
  "flood-risk-disclosure-nj": {
    condition: {
      all: [
        {
          not: {
            fact: "property.propertyType",
            op: "in",
            value: ["SINGLE_FAMILY", "ADU", "ROOM_IN_OWNER_HOME"],
          },
        },
        {
          not: {
            fact: "property.unitsInBuilding",
            op: "lte",
            value: 2,
          },
        },
        {
          not: {
            all: [
              {
                fact: "property.ownerLivesInBuilding",
                op: "eq",
                value: true,
              },
              {
                fact: "property.unitsInBuilding",
                op: "lte",
                value: 3,
              },
            ],
          },
        },
        {
          not: {
            all: [
              {
                fact: "lease.seasonal",
                op: "eq",
                value: true,
              },
              {
                fact: "lease.termDays",
                op: "lt",
                value: 120,
              },
            ],
          },
        },
      ],
    },
    note: "when the building has three or more units, unless the owner lives in a building of three units, and it isn't a seasonal rental of under 120 days",
  },
  // Ley 3-1961 art. 8(b): land in a zone the Planning Board declared flood-prone,
  // provisional zones included (read 2026-11-22; was the FEMA question).
  "flood-zone-notice-pr": {
    condition: {
      fact: "property.floodProneZonePR",
      op: "eq",
      value: true,
    },
    note: "when the property is in a flood-prone zone",
    unknownMeans: false,
  },
  "foreclosure-disclosure-la": {
    condition: {
      fact: "property.state",
      op: "eq",
      value: "LA",
    },
    note: "in every lease: it states whether a foreclosure is pending and the tenant's right to notice of a seizure",
  },
  "foreclosure-disclosure-mn": {
    condition: {
      any: [
        {
          fact: "lease.foreclosureUnderway",
          op: "eq",
          value: true,
        },
        {
          fact: "lease.contractForDeedCancellation",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when a foreclosure is under way on the property or you have received a notice cancelling a contract for deed for it",
  },
  "foreclosure-disclosure-or": {
    condition: {
      all: [
        {
          fact: "lease.foreclosureUnderway",
          op: "eq",
          value: true,
        },
        {
          not: {
            all: [
              {
                fact: "property.propertyType",
                op: "in",
                value: ["APARTMENT", "CONDO", "COOP", "TOWNHOUSE"],
              },
              {
                fact: "property.unitsInBuilding",
                op: "gt",
                value: 4,
              },
            ],
          },
        },
      ],
    },
    note: "when a foreclosure, notice of default, contract forfeiture or tax-lien foreclosure is pending, in a building of four or fewer units",
    unknownMeans: false,
  },
  "foreclosure-notice-az": {
    condition: {
      all: [
        {
          fact: "lease.foreclosureUnderway",
          op: "eq",
          value: true,
        },
        {
          not: {
            all: [
              {
                fact: "property.propertyType",
                op: "in",
                value: ["APARTMENT", "CONDO", "COOP", "TOWNHOUSE"],
              },
              {
                fact: "property.unitsInBuilding",
                op: "gte",
                value: 4,
              },
            ],
          },
        },
      ],
    },
    note: "when a foreclosure on the property is under way when the lease is signed, unless the unit is in a building of four or more connected units",
    unknownMeans: false,
  },
  "formaldehyde-health-notice-mn": {
    condition: {
      all: [
        {
          fact: "property.ureaFormaldehyde",
          op: "eq",
          value: true,
        },
        {
          fact: "property.propertyType",
          op: "ne",
          value: "MANUFACTURED_HOME",
        },
      ],
    },
    note: "when, to your best knowledge, the unit contains urea-formaldehyde building materials and isn't a manufactured home",
    unknownMeans: false,
  },
  "good-cause-nonrenewal-tx": {
    condition: {
      any: [
        {
          fact: "property.programHousing",
          op: "includesAny",
          value: ["LIHTC", "PROJECT_SUBSIDY"],
        },
        {
          fact: "property.publicCorporationOwned",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when the unit is in a tax credit or other subsidized project, or the property is owned by a public facility or housing finance corporation, or those questions aren't answered",
  },
  "hazardous-contamination-disclosure-nc": {
    condition: {
      fact: "property.environmentalRestriction",
      op: "eq",
      value: true,
    },
    note: "when a contaminated-site, brownfields, disposal-site or similar environmental notice is recorded for the property",
    unknownMeans: false,
  },
  "hazardous-waste-disclosure-wv": {
    condition: {
      fact: "property.hazardousContamination",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, the property or the ground under it was used to store, treat or dispose of hazardous waste",
    unknownMeans: false,
  },
  "high-rise-sprinkler-notice-md": {
    condition: {
      all: [
        {
          fact: "property.propertyType",
          op: "nin",
          value: ["SINGLE_FAMILY", "MANUFACTURED_HOME", "ADU"],
        },
        {
          fact: "property.highRise",
          op: "eq",
          value: true,
        },
        {
          fact: "property.completeSprinklers",
          op: "eq",
          value: false,
        },
      ],
    },
    note: "when the building is four or more stories or over 45 feet tall and has no complete sprinkler system",
    unknownMeans: false,
  },
  "hoa-compliance-de": {
    condition: {
      fact: "property.associationType",
      op: "in",
      value: ["HOA", "CONDO", "COOP"],
    },
    note: "when the property is in a homeowners, condominium or co-op association, or the association question isn't answered",
  },
  "hoa-compliance-mi": {
    condition: {
      any: [
        {
          fact: "property.propertyType",
          op: "eq",
          value: "CONDO",
        },
        {
          fact: "property.associationType",
          op: "eq",
          value: "CONDO",
        },
      ],
    },
    note: "when the property is a condominium unit (including a site condominium)",
  },
  "holding-deposit-credited-wy": {
    condition: {
      all: [
        {
          fact: "lease.holdingDeposit",
          op: "eq",
          value: true,
        },
        {
          not: {
            fact: "lease.seasonal",
            op: "eq",
            value: true,
          },
        },
      ],
    },
    note: "when the tenant paid a holding deposit before signing, unless it's a seasonal or vacation rental",
    unknownMeans: false,
  },
  "housing-code-violations-disclosure-ri": {
    condition: {
      fact: "property.codeViolations",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, there are open housing or building code violations at the property, or that question isn't answered",
  },
  "indoor-air-test-notice-ny": {
    condition: {
      fact: "property.indoorAirTestResults",
      op: "eq",
      value: true,
    },
    note: "when you have received indoor air contamination test results for the property from a cleanup party or the Department of Environmental Conservation",
    unknownMeans: false,
  },
  "landlord-billed-utilities-md": {
    condition: {
      any: [
        {
          all: [
            {
              fact: "property.utility.water.whoPays",
              op: "eq",
              value: "CHARGED_BACK",
            },
            {
              not: {
                all: [
                  {
                    fact: "property.utility.water.method",
                    op: "eq",
                    value: "SHARED_SPLIT",
                  },
                  {
                    fact: "property.unitsInBuilding",
                    op: "gte",
                    value: 6,
                  },
                ],
              },
            },
          ],
        },
        {
          all: [
            {
              fact: "property.utility.sewer.whoPays",
              op: "eq",
              value: "CHARGED_BACK",
            },
            {
              not: {
                all: [
                  {
                    fact: "property.utility.sewer.method",
                    op: "eq",
                    value: "SHARED_SPLIT",
                  },
                  {
                    fact: "property.unitsInBuilding",
                    op: "gte",
                    value: 6,
                  },
                ],
              },
            },
          ],
        },
        {
          all: [
            {
              fact: "property.utility.gas.whoPays",
              op: "eq",
              value: "CHARGED_BACK",
            },
            {
              not: {
                all: [
                  {
                    fact: "property.utility.gas.method",
                    op: "eq",
                    value: "SHARED_SPLIT",
                  },
                  {
                    fact: "property.unitsInBuilding",
                    op: "gte",
                    value: 6,
                  },
                ],
              },
            },
          ],
        },
        {
          all: [
            {
              fact: "property.utility.electric.whoPays",
              op: "eq",
              value: "CHARGED_BACK",
            },
            {
              not: {
                all: [
                  {
                    fact: "property.utility.electric.method",
                    op: "eq",
                    value: "SHARED_SPLIT",
                  },
                  {
                    fact: "property.unitsInBuilding",
                    op: "gte",
                    value: 6,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    note: "when the tenant pays you for water, sewer, gas or electricity, except a shared-bill split in a building of six or more units",
    unknownMeans: false,
  },
  "landlord-disclosure-il": {
    condition: {
      all: [
        {
          fact: "property.propertyType",
          op: "in",
          value: ["APARTMENT", "CONDO", "COOP", "TOWNHOUSE"],
        },
        {
          fact: "property.unitsInBuilding",
          op: "gt",
          value: 4,
        },
        {
          fact: "property.ownerLivesInBuilding",
          op: "ne",
          value: true,
        },
        {
          fact: "property.onsiteManagerOrOffice",
          op: "ne",
          value: true,
        },
      ],
    },
    note: "when the building has more than four units and neither the owner nor a manager or agent lives or keeps an office there",
  },
  "landlord-disclosure-ky": {
    condition: {
      fact: "property.state",
      op: "eq",
      value: "KY",
    },
    // KRS 383.585 binds only where the URLTA (KRS 383.505-383.705) was adopted
    // locally, and there's no official list of adopting cities and counties, so
    // a landlord can't reliably answer it; the clause is lawful everywhere and
    // only a Legal duty. Kept as is after a second look (2026-11-22).
    note: "in every Kentucky lease, because the duty applies wherever the city or county has adopted the uniform landlord-tenant act and the clause is harmless elsewhere",
  },
  "landlord-disclosure-tn": {
    condition: {
      fact: "property.county",
      op: "matches",
      value: [
        "Anderson",
        "Blount",
        "Bradley",
        "Davidson",
        "Hamilton",
        "Knox",
        "Madison",
        "Maury",
        "Montgomery",
        "Rutherford",
        "Sevier",
        "Shelby",
        "Sullivan",
        "Sumner",
        "Washington",
        "Williamson",
        "Wilson",
      ],
    },
    note: "when the property is in one of the 17 Tennessee counties covered by the landlord-tenant act (Anderson, Blount, Bradley, Davidson, Hamilton, Knox, Madison, Maury, Montgomery, Rutherford, Sevier, Shelby, Sullivan, Sumner, Washington, Williamson, Wilson), or the county isn't entered",
  },
  "landlord-disclosure-wi": {
    condition: {
      not: {
        any: [
          {
            fact: "property.propertyType",
            op: "eq",
            value: "ROOM_IN_OWNER_HOME",
          },
          {
            all: [
              {
                fact: "property.propertyType",
                op: "in",
                value: ["APARTMENT", "CONDO", "COOP", "TOWNHOUSE"],
              },
              {
                fact: "property.unitsInBuilding",
                op: "lte",
                value: 4,
              },
              {
                fact: "property.ownerLivesInBuilding",
                op: "eq",
                value: true,
              },
            ],
          },
        ],
      },
    },
    note: "unless the owner lives in the building and it has four or fewer units",
  },
  "landlord-registration-disclosure-nj": {
    condition: {
      all: [
        {
          fact: "property.propertyType",
          op: "ne",
          value: "ROOM_IN_OWNER_HOME",
        },
        {
          not: {
            all: [
              {
                fact: "property.ownerLivesInBuilding",
                op: "eq",
                value: true,
              },
              {
                fact: "property.unitsInBuilding",
                op: "lte",
                value: 2,
              },
            ],
          },
        },
      ],
    },
    note: "unless the owner lives in a building of two units or fewer, or the tenant rents a room in the owner's home",
  },
  "lead-hazard-order-disclosure-nh": {
    condition: {
      fact: "property.leadHazardOrder",
      op: "eq",
      value: true,
    },
    note: "when a lead hazard reduction order has been issued for the property",
    unknownMeans: false,
  },
  "lead-in-drinking-water-disclosure-nj": {
    condition: {
      all: [
        {
          fact: "property.yearBuilt",
          op: "lte",
          value: 1986,
        },
        {
          not: {
            fact: "lease.seasonal",
            op: "eq",
            value: true,
          },
        },
      ],
    },
    note: "when the property was built in 1986 or earlier or its year built isn't entered, unless it is a seasonal rental",
  },
  "lead-information-il": {
    condition: {
      any: [
        {
          fact: "property.yearBuilt",
          op: "lt",
          value: 1978,
        },
        {
          fact: "property.leadHazardOrder",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when the property was built before 1978 (or its year built isn't entered), or a lead mitigation notice has been issued for it",
  },
  "lead-risk-reduction-md": {
    condition: {
      all: [
        {
          fact: "property.yearBuilt",
          op: "lt",
          value: 1978,
        },
        {
          not: {
            fact: "property.certifiedLeadFree",
            op: "eq",
            value: true,
          },
        },
      ],
    },
    note: "when the property was built before 1978 (or its year built isn't entered), unless the unit is certified lead-free",
  },
  "lead-rrpm-disclosure-vt": {
    condition: {
      all: [
        {
          fact: "property.yearBuilt",
          op: "lt",
          value: 1978,
        },
        {
          not: {
            fact: "lease.termDays",
            op: "lte",
            value: 30,
          },
        },
      ],
    },
    note: "when the property was built before 1978 or its year built isn't entered, unless the rental is for 30 days or less",
  },
  "lead-safe-certification-nj": {
    condition: {
      all: [
        {
          fact: "property.yearBuilt",
          op: "lt",
          value: 1978,
        },
        {
          not: {
            fact: "property.certifiedLeadFree",
            op: "eq",
            value: true,
          },
        },
        {
          not: {
            all: [
              {
                fact: "lease.seasonal",
                op: "eq",
                value: true,
              },
              {
                any: [
                  {
                    fact: "property.propertyType",
                    op: "in",
                    value: [
                      "SINGLE_FAMILY",
                      "ADU",
                      "MANUFACTURED_HOME",
                      "ROOM_IN_OWNER_HOME",
                    ],
                  },
                  {
                    fact: "property.unitsInBuilding",
                    op: "lte",
                    value: 2,
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    note: "when the property was built before 1978 or its year built isn't entered, unless the unit is certified lead-free or it is a seasonal rental in a one- or two-family building",
  },
  "lead-service-line-notice-nj": {
    condition: {
      fact: "property.leadServiceLineNotice",
      op: "eq",
      value: true,
    },
    note: "when your water system has notified you that the property has a lead service line",
    unknownMeans: false,
  },
  "licensee-status-disclosure-il": {
    condition: {
      any: [
        {
          fact: "account.landlordLicensed",
          op: "eq",
          value: true,
        },
        {
          fact: "property.managerLicensed",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when you or your property manager hold an Illinois real estate license",
    unknownMeans: false,
  },
  "licensee-status-disclosure-in": {
    condition: {
      fact: "account.landlordLicensed",
      op: "eq",
      value: true,
    },
    note: "when you hold a real estate license",
    unknownMeans: false,
  },
  "licensee-status-disclosure-ok": {
    condition: {
      any: [
        {
          fact: "account.landlordLicensed",
          op: "eq",
          value: true,
        },
        {
          all: [
            {
              fact: "property.managerLicensed",
              op: "eq",
              value: true,
            },
            {
              fact: "property.managerSignsLeases",
              op: "eq",
              value: true,
            },
          ],
        },
      ],
    },
    note: "when you hold an Oklahoma real estate license, or a licensed manager signs the lease for you",
  },
  "licensee-status-disclosure-sc": {
    condition: {
      fact: "account.landlordLicensed",
      op: "eq",
      value: true,
    },
    note: "when you hold a real estate license",
    unknownMeans: false,
  },
  "meter-conservation-charge-notice-sc": {
    condition: {
      fact: "property.energyChargeOnBill",
      op: "eq",
      value: true,
    },
    note: "when the electric or gas account the tenant pays carries a meter conservation charge",
    unknownMeans: false,
  },
  "meth-contamination-disclosure-ky": {
    condition: {
      fact: "property.drugContamination",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, the property was used to make methamphetamine or a cleanup has been ordered",
    unknownMeans: false,
  },
  "meth-disclosure-ca": {
    condition: {
      fact: "property.drugContamination",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, the property was used to make or use meth or other illegal drugs or a health officer has ordered a cleanup, or that question isn't answered",
  },
  "meth-disclosure-mo": {
    condition: {
      fact: "property.drugContamination",
      op: "eq",
      value: true,
    },
    note: "when you know the property is or was used to make methamphetamine",
    unknownMeans: false,
  },
  "meth-disclosure-ok": {
    condition: {
      fact: "property.drugContamination",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, the property was used to make or use meth or other illegal drugs",
    unknownMeans: false,
  },
  "meth-disclosure-ut": {
    condition: {
      fact: "property.drugContamination",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, the property was used to make or use meth or other drugs, or a health officer ordered a cleanup",
    unknownMeans: false,
  },
  "meth-lab-disclosure-wv": {
    condition: {
      fact: "property.drugContamination",
      op: "eq",
      value: true,
    },
    note: "when a clandestine drug laboratory has been identified on the property, even if it was cleaned up",
    unknownMeans: false,
  },
  "meth-production-disclosure-nh": {
    condition: {
      fact: "property.drugContamination",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, methamphetamine was made on the property",
    unknownMeans: false,
  },
  "military-installation-disclosure-in": {
    condition: {
      fact: "property.nearMilitaryInstallation",
      op: "eq",
      value: true,
    },
    note: "when the property is within 3 miles of a military installation",
    unknownMeans: false,
  },
  "mold-disclosure-mt": {
    condition: {
      fact: "property.mold",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, there is mold in the building or it has been tested for mold",
  },
  "montgomery-association-docs-md": {
    condition: {
      all: [
        {
          fact: "property.county",
          op: "matches",
          value: ["Montgomery"],
        },
        {
          fact: "property.associationType",
          op: "in",
          value: ["HOA", "CONDO"],
        },
        {
          fact: "lease.leaseType",
          op: "ne",
          value: "MONTH_TO_MONTH",
        },
        {
          fact: "lease.termDays",
          op: "gte",
          value: 125,
        },
      ],
    },
    note: "when the property is in Montgomery County in a condominium or homeowners association and the lease's first term is 125 days or more",
    unknownMeans: false,
  },
  "noise-waiver-disclosure-il": {
    condition: {
      fact: "property.noiseWaiver",
      op: "eq",
      value: true,
    },
    note: "when a noise waiver for a wind or solar energy facility is recorded against the property",
    unknownMeans: false,
  },
  "nonresident-alien-statement-ak": {
    condition: {
      fact: "lease.anyNonresidentAlien",
      op: "eq",
      value: true,
    },
    note: "when a tenant is a nonresident alien",
    unknownMeans: false,
  },
  "nonresident-owner-agent-hi": {
    condition: {
      fact: "landlord.sameIsland",
      op: "eq",
      value: false,
    },
    note: "when you live outside Hawaii or on a different island from the property, or your residence or the property's island isn't entered",
  },
  "nonresident-owner-agent-va": {
    condition: {
      all: [
        {
          fact: "landlord.isEntity",
          op: "eq",
          value: false,
        },
        {
          fact: "landlord.livesInPropertyState",
          op: "eq",
          value: false,
        },
      ],
    },
    note: "when the owner is an individual (not a company) who doesn't live in Virginia, or your residence isn't entered",
  },
  "parking-rules-notice-co": {
    condition: {
      all: [
        {
          fact: "property.state",
          op: "eq",
          value: "CO",
        },
        {
          fact: "property.enforcesParkingRules",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "in Colorado, when the property has parking or towing rules",
    unknownMeans: false,
  },
  "pest-control-notice-ca": {
    condition: {
      any: [
        {
          fact: "property.pestControlContract",
          op: "eq",
          value: true,
        },
        {
          all: [
            {
              fact: "property.propertyType",
              op: "ne",
              value: "SINGLE_FAMILY",
            },
            {
              fact: "property.routineCommonAreaPesticide",
              op: "eq",
              value: true,
            },
          ],
        },
      ],
    },
    note: "when a pest control company treats the property under a periodic contract, or you apply pesticide in common areas on a regular schedule without a licensed operator",
  },
  "private-well-disclosure-md": {
    condition: {
      fact: "property.waterSource",
      op: "eq",
      value: "WELL",
    },
    note: "when the property's water comes from a private well",
    unknownMeans: false,
  },
  "private-well-notice-ct": {
    condition: {
      fact: "property.waterSource",
      op: "eq",
      value: "WELL",
    },
    note: "when the property's water comes from a private well",
    unknownMeans: false,
  },
  "prorated-rent-mn": {
    condition: {
      any: [
        {
          fact: "lease.startsMidMonth",
          op: "eq",
          value: true,
        },
        {
          all: [
            {
              fact: "lease.leaseType",
              op: "ne",
              value: "MONTH_TO_MONTH",
            },
            {
              fact: "lease.endsMidMonth",
              op: "eq",
              value: true,
            },
          ],
        },
      ],
    },
    note: "when the lease starts after the 1st or ends before a month's last day",
  },
  "radon-disclosure-il": {
    condition: {
      all: [
        {
          fact: "property.unitFloor",
          op: "lt",
          value: 3,
        },
        {
          fact: "lease.startDate",
          op: "gte",
          value: "2024-01-01",
        },
      ],
    },
    note: "for every unit below the third story above ground, or when the floor isn't entered",
  },
  "ratio-utility-billing-md": {
    condition: {
      all: [
        {
          fact: "property.chargeBackMethods",
          op: "includes",
          value: "SHARED_SPLIT",
        },
        {
          not: {
            fact: "property.propertyType",
            op: "in",
            value: ["CONDO", "COOP"],
          },
        },
      ],
    },
    note: "when you split a shared utility bill among tenants without measuring each one's use, unless the unit is a condo or co-op",
    unknownMeans: false,
  },
  "rent-control-exemption-notice-nj": {
    condition: {
      all: [
        {
          fact: "property.propertyType",
          op: "in",
          value: ["APARTMENT", "CONDO", "COOP", "TOWNHOUSE"],
        },
        {
          fact: "property.unitsInBuilding",
          op: "gte",
          value: 4,
        },
        {
          fact: "property.yearBuilt",
          op: "gte",
          value: 1987,
        },
        {
          not: {
            fact: "property.programHousing",
            op: "includes",
            value: "SENIOR",
          },
        },
        {
          fact: "property.rentControlExemptionClaimed",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when the property is in a building of four or more units built since 1987, not senior housing, that has claimed New Jersey's rent control exemption for new construction",
    unknownMeans: false,
  },
  "rent-reporting-offer-md": {
    condition: {
      all: [
        {
          any: [
            {
              fact: "landlord.propertyCountInState",
              op: "gte",
              value: 6,
            },
            {
              fact: "account.ownsSixPlusUnitsMD",
              op: "eq",
              value: true,
            },
          ],
        },
        {
          fact: "lease.startDate",
          op: "gte",
          value: "2026-10-01",
        },
      ],
    },
    note: "to a lease starting on or after October 1, 2026 when you own six or more rental units in Maryland",
  },
  "renters-insurance-advisory-tn": {
    condition: {
      fact: "property.county",
      op: "matches",
      value: [
        "Anderson",
        "Blount",
        "Bradley",
        "Davidson",
        "Hamilton",
        "Knox",
        "Madison",
        "Maury",
        "Montgomery",
        "Rutherford",
        "Sevier",
        "Shelby",
        "Sullivan",
        "Sumner",
        "Washington",
        "Williamson",
        "Wilson",
      ],
    },
    note: "when the property is in one of the 17 Tennessee counties where the landlord-tenant act applies",
  },
  "safety-exception-notice-nj": {
    condition: {
      all: [
        {
          fact: "property.propertyType",
          op: "in",
          value: ["APARTMENT", "CONDO", "COOP", "TOWNHOUSE"],
        },
        {
          fact: "property.unitsInBuilding",
          op: "gte",
          value: 3,
        },
        {
          fact: "property.stateSafetyException",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when the building has three or more units and the state has granted a safety-code exception for it",
    unknownMeans: false,
  },
  "sanitary-code-variance-ma": {
    condition: {
      fact: "property.sanitaryCodeVariance",
      op: "eq",
      value: true,
    },
    note: "when a board of health variance from the State Sanitary Code is in effect for the property",
    unknownMeans: false,
  },
  "security-deposit-disposition-az": {
    condition: {
      all: [
        {
          fact: "property.hasManager",
          op: "eq",
          value: true,
        },
        {
          fact: "property.managerSignsLeases",
          op: "ne",
          value: false,
        },
      ],
    },
    note: "when a property manager signs the lease for you",
  },
  "security-deposit-escrow-ga": {
    condition: {
      all: [
        {
          not: {
            fact: "lease.depositTaken",
            op: "eq",
            value: false,
          },
        },
        {
          any: [
            {
              fact: "landlord.isEntity",
              op: "eq",
              value: true,
            },
            {
              fact: "property.hasManager",
              op: "eq",
              value: true,
            },
            {
              fact: "landlord.propertyCount",
              op: "gt",
              value: 10,
            },
            {
              fact: "account.moreThanTenRentalUnits",
              op: "eq",
              value: true,
            },
          ],
        },
      ],
    },
    note: "when you take a security deposit, unless you are an individual who (with spouse and minor children) owns 10 or fewer rental units and doesn't use a paid manager",
  },
  "security-deposit-receipt-nh": {
    condition: {
      fact: "lease.depositTaken",
      op: "eq",
      value: true,
    },
    note: "when you take a security deposit",
    unknownMeans: false,
  },
  "security-deposit-return-tn-act": {
    condition: {
      all: [
        {
          fact: "property.county",
          op: "matches",
          value: [
            "Anderson",
            "Blount",
            "Bradley",
            "Davidson",
            "Hamilton",
            "Knox",
            "Madison",
            "Maury",
            "Montgomery",
            "Rutherford",
            "Sevier",
            "Shelby",
            "Sullivan",
            "Sumner",
            "Washington",
            "Williamson",
            "Wilson",
          ],
        },
        {
          fact: "lease.depositTaken",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when you take a security deposit and the property is in one of the 17 Tennessee counties where the landlord-tenant act applies",
    unknownMeans: false,
  },
  "security-deposit-use-ky": {
    condition: {
      fact: "lease.depositTaken",
      op: "eq",
      value: true,
    },
    note: "when you take a security deposit",
  },
  "sex-offender-registry-notice-ca": {
    condition: {
      any: [
        {
          fact: "property.propertyType",
          op: "in",
          value: [
            "SINGLE_FAMILY",
            "TOWNHOUSE",
            "ADU",
            "MANUFACTURED_HOME",
            "ROOM_IN_OWNER_HOME",
          ],
        },
        {
          fact: "property.unitsInBuilding",
          op: "gt",
          value: 4,
        },
      ],
    },
    note: "when the property is a house (single-family, townhouse, ADU, manufactured home or a room in a house) or a unit in a building with more than four units, or the property type or unit count isn't entered",
  },
  "sex-offender-registry-notice-la": {
    condition: {
      any: [
        {
          fact: "account.landlordLicensed",
          op: "eq",
          value: true,
        },
        {
          all: [
            {
              fact: "property.hasManager",
              op: "eq",
              value: true,
            },
            {
              fact: "property.managerSignsLeases",
              op: "eq",
              value: true,
            },
            {
              fact: "property.managerLicensed",
              op: "eq",
              value: true,
            },
          ],
        },
      ],
    },
    note: "when you, or a licensed manager who signs leases, hold a real estate license",
  },
  // NRS 118A.200(4): the exception is signing by an agent who holds a permit to
  // engage in property management under NRS chapter 645, not just a license
  // (read 2026-11-22). (10): a structure of four or fewer units, not a
  // manufactured home.
  "sfr-occupancy-disclosure-nv": {
    condition: {
      all: [
        {
          not: {
            fact: "property.propertyType",
            op: "eq",
            value: "MANUFACTURED_HOME",
          },
        },
        {
          any: [
            {
              fact: "property.propertyType",
              op: "in",
              value: ["SINGLE_FAMILY", "ADU", "ROOM_IN_OWNER_HOME"],
            },
            {
              fact: "property.unitsInBuilding",
              op: "lte",
              value: 4,
            },
          ],
        },
        {
          not: {
            all: [
              {
                fact: "property.hasManager",
                op: "eq",
                value: true,
              },
              {
                fact: "property.managerSignsLeases",
                op: "eq",
                value: true,
              },
              {
                fact: "property.pmPermitNV",
                op: "eq",
                value: true,
              },
            ],
          },
        },
      ],
    },
    note: "when the property is in a building of four or fewer units (not a manufactured home) and the lease isn't signed by a licensed property manager",
  },
  "shared-utility-disclosure-or": {
    condition: {
      all: [
        {
          fact: "property.meterServesOutsideUnit",
          op: "eq",
          value: true,
        },
        {
          any: [
            {
              fact: "property.utility.electric.whoPays",
              op: "eq",
              value: "TENANT_DIRECT",
            },
            {
              fact: "property.utility.gas.whoPays",
              op: "eq",
              value: "TENANT_DIRECT",
            },
            {
              fact: "property.utility.water.whoPays",
              op: "eq",
              value: "TENANT_DIRECT",
            },
            {
              fact: "property.utility.sewer.whoPays",
              op: "eq",
              value: "TENANT_DIRECT",
            },
            {
              fact: "property.utility.trash.whoPays",
              op: "eq",
              value: "TENANT_DIRECT",
            },
          ],
        },
      ],
    },
    note: "when a utility the tenant pays directly also serves areas outside the unit (hallway or outdoor lights, a shared laundry)",
    unknownMeans: false,
  },
  "shoreline-access-disclosure-ri": {
    condition: {
      all: [
        {
          fact: "property.shoreline",
          op: "eq",
          value: true,
        },
        {
          fact: "lease.startDate",
          op: "gte",
          value: "2027-01-01",
        },
      ],
    },
    note: "when the property is on the shoreline, for tenancies beginning on or after January 1, 2027",
    unknownMeans: false,
  },
  "smoke-detector-duties-ny": {
    condition: {
      all: [
        {
          not: {
            fact: "property.propertyType",
            op: "in",
            value: [
              "SINGLE_FAMILY",
              "ADU",
              "ROOM_IN_OWNER_HOME",
              "MANUFACTURED_HOME",
            ],
          },
        },
        {
          not: {
            fact: "property.unitsInBuilding",
            op: "lte",
            value: 2,
          },
        },
        {
          not: {
            fact: "property.county",
            op: "matches",
            value: [
              "New York",
              "Kings",
              "Queens",
              "Bronx",
              "Richmond",
              "Manhattan",
              "Brooklyn",
              "Staten Island",
            ],
          },
        },
      ],
    },
    note: "when the building has three or more units and is outside New York City",
  },
  "social-services-hotline-lease-notice-nj": {
    condition: {
      all: [
        {
          fact: "property.propertyType",
          op: "in",
          value: ["APARTMENT", "CONDO", "COOP", "TOWNHOUSE"],
        },
        {
          any: [
            {
              fact: "property.unitsInBuilding",
              op: "gte",
              value: 3,
            },
            {
              all: [
                {
                  fact: "property.unitsInBuilding",
                  op: "eq",
                  value: 2,
                },
                {
                  fact: "landlord.propertyCount",
                  op: "gte",
                  value: 10,
                },
              ],
            },
          ],
        },
      ],
    },
    note: "when the unit is in a building of three or more units (or in one of ten or more two-unit buildings you own)",
  },
  "spa-pool-notice-mn": {
    condition: {
      all: [
        {
          fact: "property.propertyType",
          op: "in",
          value: ["SINGLE_FAMILY", "MANUFACTURED_HOME"],
        },
        {
          fact: "property.waterFeatures",
          op: "includes",
          value: "SPA",
        },
      ],
    },
    note: "when the property is a stand-alone single-unit rental with a hot tub, spa or whirlpool",
  },
  "special-district-disclosure-ms": {
    condition: {
      fact: "property.specialDistrict",
      op: "eq",
      value: true,
    },
    note: "when the property is in a special or public improvement district",
    unknownMeans: false,
  },
  "special-district-representation-id": {
    condition: {
      fact: "property.specialDistrict",
      op: "eq",
      value: true,
    },
    note: "when the property is in a special or business improvement district",
    unknownMeans: false,
  },
  "special-district-representation-pr": {
    condition: {
      fact: "property.specialDistrict",
      op: "eq",
      value: true,
    },
    note: "when the property is in a special district (the Convention Center District or the Science, Technology and Research District)",
    unknownMeans: false,
  },
  // § 47a-3f(b) applies where § 29-315 or the fire codes require sprinklers:
  // buildings over four stories, some elderly housing, and what the building
  // and fire codes require; the Fire Safety Code doesn't reach one- and
  // two-family dwellings (§ 29-292(a)(1)). Three or more units over-includes
  // (older buildings), which only adds an accurate notice; kept after a second
  // look (2026-11-22).
  "sprinkler-notice-ct": {
    condition: {
      all: [
        {
          not: {
            fact: "property.propertyType",
            op: "in",
            value: [
              "SINGLE_FAMILY",
              "ADU",
              "ROOM_IN_OWNER_HOME",
              "MANUFACTURED_HOME",
            ],
          },
        },
        {
          not: {
            fact: "property.unitsInBuilding",
            op: "lte",
            value: 2,
          },
        },
      ],
    },
    note: "when the building has three or more units",
  },
  "steam-radiator-cover-notice-nj": {
    condition: {
      fact: "property.uncoveredSteamRadiators",
      op: "eq",
      value: true,
    },
    note: "when the unit has uncovered steam radiators",
  },
  "student-housing-certification-pr": {
    condition: {
      all: [
        {
          any: [
            {
              fact: "lease.anyStudent",
              op: "eq",
              value: true,
            },
            {
              fact: "property.programHousing",
              op: "includes",
              value: "STUDENT",
            },
          ],
        },
        {
          any: [
            {
              fact: "property.propertyType",
              op: "eq",
              value: "ROOM_IN_OWNER_HOME",
            },
            {
              fact: "property.ownerLivesInBuilding",
              op: "eq",
              value: true,
            },
            {
              fact: "lease.peopleCount",
              op: "gte",
              value: 3,
            },
          ],
        },
      ],
    },
    note: "when you rent to a student and either you live there or three or more people will live in the unit",
    unknownMeans: false,
  },
  "student-housing-oh": {
    condition: {
      all: [
        {
          fact: "landlord.isEntity",
          op: "eq",
          value: true,
        },
        {
          fact: "lease.anyStudent",
          op: "eq",
          value: true,
        },
        {
          fact: "account.isCollegeOrUniversity",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when you are a college or university renting the unit to one of your own students",
    unknownMeans: false,
  },
  "submetered-water-md": {
    condition: {
      any: [
        {
          fact: "property.utility.water.method",
          op: "eq",
          value: "SUBMETER",
        },
        {
          fact: "property.utility.sewer.method",
          op: "eq",
          value: "SUBMETER",
        },
      ],
    },
    note: "when water or sewer is charged back to the tenant through a submeter",
    unknownMeans: false,
  },
  "submetering-lease-statement-va": {
    condition: {
      all: [
        {
          any: [
            {
              fact: "property.utility.electric.method",
              op: "eq",
              value: "SUBMETER",
            },
            {
              fact: "property.utility.gas.method",
              op: "eq",
              value: "SUBMETER",
            },
          ],
        },
        {
          fact: "property.propertyType",
          op: "ne",
          value: "SINGLE_FAMILY",
        },
      ],
    },
    note: "when you bill the tenant for electricity or gas measured by a submeter or energy allocation equipment",
    unknownMeans: false,
  },
  "subsidy-lease-conditions-pr": {
    condition: {
      all: [
        {
          fact: "property.programHousing",
          op: "includesAny",
          value: ["VOUCHER", "PROJECT_SUBSIDY", "SENIOR"],
        },
        {
          fact: "lease.prRentSubsidy",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when the tenant receives a Puerto Rico older-adult rent subsidy or veterans' rent matching",
    unknownMeans: false,
  },
  "superfund-disclosure-ia": {
    condition: {
      fact: "property.superfundListed",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, the property is listed in EPA's Superfund site database",
    unknownMeans: false,
  },
  "tenant-employee-de": {
    condition: {
      all: [
        { fact: "lease.tenantIsEmployee", op: "eq", value: true },
        { fact: "lease.employeeHousingLink", op: "eq", value: "PART_OF_PAY" },
      ],
    },
    note: "when the tenant is your (or your manager's) employee and the housing is part of the job's pay",
    unknownMeans: false,
  },
  "tpa-notice-ca": {
    condition: {
      not: {
        any: [
          {
            fact: "property.propertyType",
            op: "eq",
            value: "ROOM_IN_OWNER_HOME",
          },
          {
            all: [
              {
                fact: "property.propertyType",
                op: "in",
                value: ["APARTMENT", "CONDO", "COOP", "TOWNHOUSE"],
              },
              {
                fact: "property.unitsInBuilding",
                op: "eq",
                value: 2,
              },
              {
                fact: "property.ownerLivesInBuilding",
                op: "eq",
                value: true,
              },
            ],
          },
        ],
      },
    },
    note: "unless the tenant rents a room in your home, or the building is a duplex you live in",
  },
  "truth-in-renting-statement-nj": {
    condition: {
      all: [
        {
          not: {
            fact: "property.propertyType",
            op: "in",
            value: ["SINGLE_FAMILY", "ADU", "ROOM_IN_OWNER_HOME"],
          },
        },
        {
          not: {
            fact: "property.unitsInBuilding",
            op: "lte",
            value: 2,
          },
        },
        {
          not: {
            all: [
              {
                fact: "property.ownerLivesInBuilding",
                op: "eq",
                value: true,
              },
              {
                fact: "property.unitsInBuilding",
                op: "lte",
                value: 3,
              },
            ],
          },
        },
        {
          not: {
            fact: "lease.seasonal",
            op: "eq",
            value: true,
          },
        },
      ],
    },
    note: "when the building has three or more units, unless the owner lives in a building of three units, and it isn't a seasonal rental",
  },
  "utility-allocation-wi": {
    condition: {
      any: [
        {
          fact: "property.chargeBackMethods",
          op: "includesAny",
          value: ["SHARED_SPLIT", "FLAT"],
        },
        {
          fact: "property.meterServesOutsideUnit",
          op: "eq",
          value: true,
        },
      ],
    },
    note: "when you split a shared utility bill among units or charge a per-unit share, or the unit's meter also serves areas outside the unit",
    unknownMeans: false,
  },
  "utility-billing-disclosure-az": {
    condition: {
      fact: "property.anyUtilityChargedBack",
      op: "eq",
      value: true,
    },
    note: "when you charge the tenant back for gas, water, sewer, trash or electricity (submeter, a split of a shared bill, or a per-unit allocation)",
    unknownMeans: false,
  },
  "utility-billing-or": {
    condition: {
      fact: "property.anyUtilityChargedBack",
      op: "eq",
      value: true,
    },
    note: "when you bill the tenant for any utility or service charge billed to you",
    unknownMeans: false,
  },
  "utility-billing-schedule-mn": {
    condition: {
      any: [
        {
          fact: "property.utility.electric.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
        {
          fact: "property.utility.gas.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
      ],
    },
    note: "when you bill the tenant for electricity or natural gas yourself (submeter or a split of a shared bill)",
  },
  "utility-billing-va": {
    condition: {
      fact: "property.anyUtilityChargedBack",
      op: "eq",
      value: true,
    },
    note: "when you charge the tenant back for any utility (submeter, shared bill or flat charge)",
    unknownMeans: false,
  },
  "utility-disclosure-attachment-nc": {
    condition: {
      any: [
        {
          fact: "property.utility.water.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
        {
          fact: "property.utility.sewer.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
        {
          fact: "property.utility.electric.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
        {
          fact: "property.utility.gas.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
      ],
    },
    note: "when you bill the tenant for water, sewer, electricity or natural gas",
    unknownMeans: false,
  },
  "utility-formula-il": {
    condition: {
      fact: "property.chargeBackMethods",
      op: "includesAny",
      value: ["SHARED_SPLIT", "FLAT"],
    },
    note: "when you charge the tenant a share of a shared (master-metered) utility bill",
    unknownMeans: false,
  },
  "utility-submetering-disclosure-tx": {
    condition: {
      all: [
        {
          fact: "property.propertyType",
          op: "in",
          value: [
            "CONDO",
            "MANUFACTURED_HOME",
            "APARTMENT",
            "COOP",
            "TOWNHOUSE",
          ],
        },
        {
          any: [
            {
              fact: "property.utility.water.whoPays",
              op: "eq",
              value: "CHARGED_BACK",
            },
            {
              fact: "property.utility.sewer.whoPays",
              op: "eq",
              value: "CHARGED_BACK",
            },
          ],
        },
      ],
    },
    note: "when you bill the tenant for water or wastewater (submetered or split from a master meter) at an apartment, condominium, townhouse or manufactured home property",
  },
  "utility-submetering-energy-md": {
    condition: {
      any: [
        {
          fact: "property.utility.electric.method",
          op: "eq",
          value: "SUBMETER",
        },
        {
          fact: "property.utility.gas.method",
          op: "eq",
          value: "SUBMETER",
        },
      ],
    },
    note: "when electricity or gas is charged back to the tenant through a submeter",
    unknownMeans: false,
  },
  "voluntary-cleanup-notice-al": {
    condition: {
      fact: "property.environmentalRestriction",
      op: "eq",
      value: true,
    },
    note: "when, to your best knowledge, a recorded environmental restriction (such as a voluntary cleanup listing) applies to the land",
    unknownMeans: false,
  },
  "water-sewer-billing-disclosure-in": {
    condition: {
      any: [
        {
          fact: "property.utility.water.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
        {
          fact: "property.utility.sewer.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
      ],
    },
    note: "when you charge the tenant separately for water or sewer",
    unknownMeans: false,
  },
  "water-submetering-ma": {
    condition: {
      any: [
        {
          fact: "property.utility.water.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
        {
          fact: "property.utility.sewer.whoPays",
          op: "eq",
          value: "CHARGED_BACK",
        },
      ],
    },
    note: "when you charge the tenant separately for water or sewer",
    unknownMeans: false,
  },
  "water-submetering-ms": {
    condition: {
      all: [
        {
          any: [
            {
              fact: "property.utility.water.method",
              op: "eq",
              value: "SUBMETER",
            },
            {
              fact: "property.utility.sewer.method",
              op: "eq",
              value: "SUBMETER",
            },
          ],
        },
        {
          fact: "property.propertyType",
          op: "in",
          value: [
            "APARTMENT",
            "CONDO",
            "COOP",
            "TOWNHOUSE",
            "MANUFACTURED_HOME",
          ],
        },
      ],
    },
    note: "when you bill the tenant for submetered water or wastewater at an apartment, condominium, townhouse or manufactured home property",
    unknownMeans: false,
  },
  "well-water-testing-notice-or": {
    condition: {
      all: [
        {
          fact: "property.waterSource",
          op: "eq",
          value: "WELL",
        },
        {
          fact: "property.groundwaterArea",
          op: "eq",
          value: true,
        },
        {
          any: [
            {
              fact: "today",
              op: "gte",
              value: "2027-01-01",
            },
            {
              fact: "lease.startDate",
              op: "gte",
              value: "2027-01-01",
            },
          ],
        },
      ],
    },
    note: "from January 1, 2027, when the drinking water comes from a well and the property is in a groundwater management area",
    unknownMeans: false,
  },
  "window-guard-notice-nj": {
    condition: {
      all: [
        {
          all: [
            {
              fact: "property.propertyType",
              op: "in",
              value: ["APARTMENT", "CONDO", "COOP", "TOWNHOUSE"],
            },
            {
              any: [
                {
                  fact: "property.unitsInBuilding",
                  op: "gte",
                  value: 3,
                },
                {
                  all: [
                    {
                      fact: "property.unitsInBuilding",
                      op: "eq",
                      value: 2,
                    },
                    {
                      fact: "landlord.propertyCount",
                      op: "gte",
                      value: 10,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          not: {
            fact: "lease.seasonal",
            op: "eq",
            value: true,
          },
        },
      ],
    },
    note: "when the unit is in a building of three or more units (or in one of ten or more two-unit buildings you own), unless it's a seasonal rental",
  },
};

module.exports = { FACT_RULES };
