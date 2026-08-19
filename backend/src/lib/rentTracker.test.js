const { buildRentTracker, suggestPaymentAllocation, summarizeRentStatus } = require("./rentTracker");

const LEASE_ID = "lease-1";

function baseLease(overrides = {}) {
  return {
    id: LEASE_ID,
    startDate: "2026-01-01T00:00:00.000Z",
    endDate: "2026-12-31T00:00:00.000Z",
    status: "ACTIVE",
    monthlyRent: "3000.00",
    petPolicy: false,
    petRentAmount: null,
    lateFeeAmount: "150.00",
    lateFeeGraceDays: 5,
    ...overrides,
  };
}

function income({ category, amount, date, appliesToPeriod, leaseId = LEASE_ID, id = "income-1", method = null }) {
  return { id, leaseId, category, amount, date, appliesToPeriod, method };
}

describe("buildRentTracker", () => {
  it("marks a future period as UPCOMING with no charges collected", () => {
    const today = new Date("2026-01-15T00:00:00.000Z");
    const rows = buildRentTracker({ lease: baseLease(), incomes: [], waivers: [], today });
    const march = rows.find((r) => r.period.startsWith("2026-03"));
    expect(march.status).toBe("UPCOMING");
    expect(march.totalExpected).toBe(3000);
    expect(march.totalCollected).toBe(0);
  });

  it("marks the current period DUE while still inside the grace window", () => {
    const today = new Date("2026-01-03T00:00:00.000Z"); // grace is 5 days
    const rows = buildRentTracker({ lease: baseLease(), incomes: [], waivers: [], today });
    const jan = rows.find((r) => r.period.startsWith("2026-01"));
    expect(jan.status).toBe("DUE");
    expect(jan.expectedLateFee).toBe(0);
  });

  it("triggers the late fee once the grace deadline passes unpaid, and marks OVERDUE", () => {
    const today = new Date("2026-01-10T00:00:00.000Z"); // past Jan 6 deadline
    const rows = buildRentTracker({ lease: baseLease(), incomes: [], waivers: [], today });
    const jan = rows.find((r) => r.period.startsWith("2026-01"));
    expect(jan.status).toBe("OVERDUE");
    expect(jan.expectedLateFee).toBe(150);
    expect(jan.balance).toBe(3150);
  });

  it("does not trigger a late fee for a period paid before its deadline, and marks it PAID", () => {
    const today = new Date("2026-01-20T00:00:00.000Z");
    const incomes = [income({ category: "RENT", amount: "3000.00", date: "2026-01-02T00:00:00.000Z", appliesToPeriod: "2026-01-01T00:00:00.000Z" })];
    const rows = buildRentTracker({ lease: baseLease(), incomes, waivers: [], today });
    const jan = rows.find((r) => r.period.startsWith("2026-01"));
    expect(jan.status).toBe("PAID");
    expect(jan.expectedLateFee).toBe(0);
    expect(jan.balance).toBe(0);
  });

  it("marks a period PAID_LATE when rent arrives after the deadline, and keeps the late fee even once the balance is settled", () => {
    const today = new Date("2026-02-01T00:00:00.000Z");
    const incomes = [
      income({ category: "RENT", amount: "3000.00", date: "2026-01-20T00:00:00.000Z", appliesToPeriod: "2026-01-01T00:00:00.000Z" }),
      income({ category: "LATE_FEE", amount: "150.00", date: "2026-01-20T00:00:00.000Z", appliesToPeriod: "2026-01-01T00:00:00.000Z" }),
    ];
    const rows = buildRentTracker({ lease: baseLease(), incomes, waivers: [], today });
    const jan = rows.find((r) => r.period.startsWith("2026-01"));
    expect(jan.status).toBe("PAID_LATE");
    expect(jan.balance).toBe(0);
  });

  it("a waived period never accrues a late fee even past the deadline", () => {
    const today = new Date("2026-01-10T00:00:00.000Z");
    const waivers = [{ period: "2026-01-01T00:00:00.000Z" }];
    const rows = buildRentTracker({ lease: baseLease(), incomes: [], waivers, today });
    const jan = rows.find((r) => r.period.startsWith("2026-01"));
    expect(jan.isLateFeeWaived).toBe(true);
    expect(jan.expectedLateFee).toBe(0);
    expect(jan.balance).toBe(3000);
  });

  it("PARTIAL status when some but not all of an overdue period is collected", () => {
    const today = new Date("2026-01-10T00:00:00.000Z");
    const incomes = [income({ category: "RENT", amount: "1000.00", date: "2026-01-09T00:00:00.000Z", appliesToPeriod: "2026-01-01T00:00:00.000Z" })];
    const rows = buildRentTracker({ lease: baseLease(), incomes, waivers: [], today });
    const jan = rows.find((r) => r.period.startsWith("2026-01"));
    expect(jan.status).toBe("PARTIAL");
    expect(jan.balance).toBe(2150); // 3000 + 150 fee - 1000 collected
  });

  it("includes pet rent as its own expected/collected amount when the lease has a pet policy", () => {
    const today = new Date("2026-01-04T00:00:00.000Z"); // still inside the 5-day grace window
    const lease = baseLease({ petPolicy: true, petRentAmount: "50.00" });
    const incomes = [income({ category: "RENT", amount: "3000.00", date: "2026-01-02T00:00:00.000Z", appliesToPeriod: "2026-01-01T00:00:00.000Z" })];
    const rows = buildRentTracker({ lease, incomes, waivers: [], today });
    const jan = rows.find((r) => r.period.startsWith("2026-01"));
    expect(jan.expectedPetRent).toBe(50);
    expect(jan.totalExpected).toBe(3050);
    expect(jan.balance).toBe(50);
  });

  it("unpaid pet rent past the deadline triggers the same late fee as unpaid base rent, since both are lease-tied charges", () => {
    const today = new Date("2026-01-20T00:00:00.000Z");
    const lease = baseLease({ petPolicy: true, petRentAmount: "50.00" });
    const incomes = [income({ category: "RENT", amount: "3000.00", date: "2026-01-02T00:00:00.000Z", appliesToPeriod: "2026-01-01T00:00:00.000Z" })];
    const rows = buildRentTracker({ lease, incomes, waivers: [], today });
    const jan = rows.find((r) => r.period.startsWith("2026-01"));
    expect(jan.expectedLateFee).toBe(150);
    expect(jan.balance).toBe(200); // $50 pet rent + $150 late fee
  });

  it("a MONTH_TO_MONTH lease's table grows to the current month, ignoring endDate", () => {
    const today = new Date("2027-02-15T00:00:00.000Z");
    const lease = baseLease({ status: "MONTH_TO_MONTH", endDate: "2026-12-31T00:00:00.000Z" });
    const rows = buildRentTracker({ lease, incomes: [], waivers: [], today });
    expect(rows[rows.length - 1].period.startsWith("2027-02")).toBe(true);
  });

  it("reports which Income row(s) contributed to a period's collected total, for linking back to the Ledger", () => {
    const today = new Date("2026-01-20T00:00:00.000Z");
    const incomes = [
      income({ id: "income-a", category: "RENT", amount: "1000.00", date: "2026-01-05T00:00:00.000Z", appliesToPeriod: "2026-01-01T00:00:00.000Z", method: "cash" }),
      income({ id: "income-b", category: "RENT", amount: "2000.00", date: "2026-01-10T00:00:00.000Z", appliesToPeriod: "2026-01-01T00:00:00.000Z", method: "check" }),
    ];
    const rows = buildRentTracker({ lease: baseLease(), incomes, waivers: [], today });
    const jan = rows.find((r) => r.period.startsWith("2026-01"));
    expect(jan.payments).toEqual([
      { incomeId: "income-a", category: "RENT", amount: 1000, method: "cash" },
      { incomeId: "income-b", category: "RENT", amount: 2000, method: "check" },
    ]);
  });

  it("a split payment's allocation line items all report back the same shared incomeId", () => {
    const today = new Date("2026-02-01T00:00:00.000Z");
    const incomes = [
      income({ id: "income-shared", category: "LATE_FEE", amount: "150.00", date: "2026-01-20T00:00:00.000Z", appliesToPeriod: "2026-01-01T00:00:00.000Z", method: "check" }),
      income({ id: "income-shared", category: "RENT", amount: "3000.00", date: "2026-01-20T00:00:00.000Z", appliesToPeriod: "2026-01-01T00:00:00.000Z", method: "check" }),
    ];
    const rows = buildRentTracker({ lease: baseLease(), incomes, waivers: [], today });
    const jan = rows.find((r) => r.period.startsWith("2026-01"));
    expect(jan.payments.map((p) => p.incomeId)).toEqual(["income-shared", "income-shared"]);
    expect(jan.payments.map((p) => p.category).sort()).toEqual(["LATE_FEE", "RENT"]);
  });

  it("an ignores income logged for a different lease", () => {
    const today = new Date("2026-01-20T00:00:00.000Z");
    const incomes = [income({ category: "RENT", amount: "3000.00", date: "2026-01-02T00:00:00.000Z", appliesToPeriod: "2026-01-01T00:00:00.000Z", leaseId: "some-other-lease" })];
    const rows = buildRentTracker({ lease: baseLease(), incomes, waivers: [], today });
    const jan = rows.find((r) => r.period.startsWith("2026-01"));
    expect(jan.totalCollected).toBe(0);
  });
});

describe("suggestPaymentAllocation — Taylor's real scenario", () => {
  // Month 1 rent $3000 unpaid -> $150 late fee. Month 2 rent $3000 unpaid ->
  // $150 late fee. Total owed: $6300. Payments arrive as $2500, $1500,
  // $1000, $1300 (in that order) and should exactly zero out the balance,
  // fees paid off first, then rent oldest period first.
  const lease = baseLease({ startDate: "2026-01-01T00:00:00.000Z", endDate: "2026-02-28T00:00:00.000Z" });
  const today = new Date("2026-03-01T00:00:00.000Z"); // both periods well past their deadlines, unpaid

  function rowsAfter(incomes) {
    return buildRentTracker({ lease, incomes, waivers: [], today });
  }

  it("applies the first $2500 to both late fees, then as much of Jan rent as it covers", () => {
    const rows = rowsAfter([]);
    const { allocations, unapplied } = suggestPaymentAllocation({ rows, amount: 2500 });
    expect(unapplied).toBe(0);
    expect(allocations).toEqual([
      { period: rows[0].period, category: "LATE_FEE", amount: 150 },
      { period: rows[1].period, category: "LATE_FEE", amount: 150 },
      { period: rows[0].period, category: "RENT", amount: 2200 },
    ]);
  });

  it("walks through all four payments and lands on exactly $0 owed, matching the real numbers", () => {
    let incomes = [];
    let runningTotal = 0;
    for (const amount of [2500, 1500, 1000, 1300]) {
      const rows = rowsAfter(incomes);
      const { allocations, unapplied } = suggestPaymentAllocation({ rows, amount });
      expect(unapplied).toBe(0);
      for (const a of allocations) {
        incomes.push(income({ category: a.category, amount: String(a.amount), date: "2026-03-05T00:00:00.000Z", appliesToPeriod: a.period }));
        runningTotal += a.amount;
      }
    }
    expect(runningTotal).toBe(6300);
    const finalRows = rowsAfter(incomes);
    expect(finalRows.every((r) => r.balance === 0)).toBe(true);
    expect(finalRows.every((r) => r.status === "PAID" || r.status === "PAID_LATE")).toBe(true);
  });

  it("leaves `unapplied` set when a payment overshoots everything owed", () => {
    const rows = rowsAfter([]);
    const { unapplied, allocations } = suggestPaymentAllocation({ rows, amount: 10000 });
    const totalOwed = rows.reduce((sum, r) => sum + r.balance, 0);
    const totalAllocated = allocations.reduce((sum, a) => sum + a.amount, 0);
    expect(totalAllocated).toBe(totalOwed);
    expect(unapplied).toBe(Math.round((10000 - totalOwed) * 100) / 100);
  });
});

describe("summarizeRentStatus", () => {
  it("returns NONE for an empty table", () => {
    expect(summarizeRentStatus([])).toBe("NONE");
  });

  it("OVERDUE outranks a since-caught-up PARTIAL elsewhere in the history", () => {
    const rows = [{ status: "PARTIAL" }, { status: "OVERDUE" }, { status: "PAID" }];
    expect(summarizeRentStatus(rows)).toBe("OVERDUE");
  });

  it("PARTIAL outranks DUE", () => {
    expect(summarizeRentStatus([{ status: "DUE" }, { status: "PARTIAL" }])).toBe("PARTIAL");
  });

  it("returns PAID when every period is settled", () => {
    expect(summarizeRentStatus([{ status: "PAID" }, { status: "PAID_LATE" }, { status: "UPCOMING" }])).toBe("PAID");
  });
});
