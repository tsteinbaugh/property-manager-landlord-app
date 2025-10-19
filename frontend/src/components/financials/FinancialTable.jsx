// property-manager-landlord-app/frontend/src/components/financials/FinancialTable.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import styles from "./FinancialTable.module.css";
import FeverLight from "../ui/FeverLight";
import PaymentModal from "./PaymentModal";
import ManagePaymentsModal from "./ManagePaymentsModal";
import DepositSettlementModal from "./DepositSettlementModal";
import buttonStyles from "../../styles/Buttons.module.css";
import {
  computeRowTotals,
  maybeApplyLateFee,
  finalizeMonthIfPaid,
  getPetRent,
  computeAssessedLateFeeAmount,
} from "../../utils/finance";
import { resolveFeverStatus } from "../../utils/feverStatus";
import ChargeModal from "./ChargeModal";
import NoticeModal from "./NoticeModal";

// ---- local normalize (dedupe payments in any updated rows)
function normalizeRows(rows = []) {
  const keyOf = (p) =>
    [
      Number(p.amount),
      p.dateISO || "",
      (p.method || "").trim(),
      (p.note || "").trim(),
    ].join("|");
  return rows.map((r) => {
    const seen = new Set();
    const payments = [];
    for (const p of r.payments || []) {
      const k = keyOf(p);
      if (!seen.has(k)) {
        seen.add(k);
        payments.push({ ...p, amount: Number(p.amount) });
      }
    }
    return { ...r, payments };
  });
}

function downloadBlob(filename, content, type = "text/plain") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// helper: latest (max) ISO date among a list
function latestISO(dates = []) {
  const filtered = dates.filter(Boolean);
  if (!filtered.length) return null;
  return filtered.sort((a, b) => (a || "").localeCompare(b || ""))[filtered.length - 1];
}

function addDays(dateOrISO, n) {
  const d = typeof dateOrISO === "string" ? new Date(dateOrISO) : new Date(dateOrISO);
  const out = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  out.setDate(out.getDate() + Number(n || 0));
  return out.toISOString().slice(0, 10);
}

// compute the legal start date for notice from the row.notice object
function computeNoticeStartISO(notice) {
  if (!notice) return null;
  const dates = [
    notice.postedOnISO || null,
    ...(Array.isArray(notice.methods)
      ? notice.methods.map((m) => m?.dateISO || null)
      : []),
  ];
  return latestISO(dates);
}

/** Map fever color -> user-facing trend bucket */
function colorToBucket(color) {
  switch (color) {
    case "green":
      return "onTime";
    case "yellow":
      return "withinGrace";
    case "orange":
      return "late";
    case "red":
      return "noticeGiven";
    case "black":
      return "beyondNotice";
    default:
      return "ignored"; // gray, unknown, etc.
  }
}

/** Compute “nice” y-axis ticks up to maxY (e.g., 0,3,6,9,12, …) */
function niceTicks(maxY) {
  const stepCandidates = [1, 2, 3, 5];
  let step = 1;
  for (const s of stepCandidates) {
    if (maxY / s <= 6) {
      step = s;
      break;
    }
  }
  const ticks = [];
  for (let v = 0; v <= Math.max(1, Math.ceil(maxY / step) * step); v += step) {
    ticks.push(v);
  }
  return ticks;
}

/** Mini running-total chart (no deps) */
function TrendMiniChart({ rowsStatuses, monthLabels }) {
  const n = rowsStatuses.length;

  const seriesKeys = ["onTime", "withinGrace", "late", "noticeGiven", "beyondNotice"];
  const seriesColors = {
    onTime: "green",
    withinGrace: "gold",
    late: "orange",
    noticeGiven: "red",
    beyondNotice: "black",
  };

  // Build cumulative series
  const series = {};
  seriesKeys.forEach((k) => (series[k] = new Array(n).fill(0)));

  let running = {
    onTime: 0,
    withinGrace: 0,
    late: 0,
    noticeGiven: 0,
    beyondNotice: 0,
  };
  for (let i = 0; i < n; i++) {
    const b = rowsStatuses[i];
    if (running[b] !== undefined) running[b] += 1;
    seriesKeys.forEach((k) => {
      series[k][i] = running[k];
    });
  }

  const maxY = Math.max(1, ...seriesKeys.map((k) => (n ? series[k][n - 1] : 0)));
  const yTicks = niceTicks(maxY);

  // Responsive width
  const wrapperRef = useRef(null);
  const [width, setWidth] = useState(480);
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        setWidth(Math.max(260, Math.min(900, Math.floor(w))));
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const height = 140;
  const padLeft = 40; // y labels
  const padRight = 30; // avoid clipping last label
  const padTop = 10;
  const padBottom = 30; // x labels
  const innerW = width - padLeft - padRight;
  const innerH = height - padTop - padBottom;
  const xStep = n > 1 ? innerW / (n - 1) : 0;

  const pathFor = (arr) => {
    if (n === 0) return "";
    const points = arr.map((v, i) => {
      const x = padLeft + i * xStep;
      const y = padTop + innerH - (v / maxY) * innerH;
      return `${x},${y}`;
    });
    return "M" + points.join(" L ");
  };

  // X-axis tick policy
  const maxXLabels = Math.floor(innerW / 60);
  const xLabelStep = Math.max(1, Math.ceil(n / Math.max(1, maxXLabels)));

  const legend = (
    <div
      style={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        marginTop: 6,
        justifyContent: "center",
      }}
    >
      {seriesKeys.map((k) => (
        <div
          key={k}
          style={{
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: 999,
              background: seriesColors[k],
              border: "1px solid rgba(0,0,0,0.15)",
            }}
          />
          <span style={{ color: "#4b5563" }}>
            {k === "onTime"
              ? "On time"
              : k === "withinGrace"
                ? "Within grace"
                : k === "late"
                  ? "Late"
                  : k === "noticeGiven"
                    ? "Notice given"
                    : "Beyond notice"}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div ref={wrapperRef} style={{ width: "100%", margin: "0 auto" }}>
      <svg width={width} height={height} role="img" aria-label="Running totals by status">
        <title>Running totals by status</title>
        <rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill="white"
          rx="8"
          ry="8"
          stroke="#e5e7eb"
        />
        {/* Y axis */}
        <line
          x1={padLeft}
          y1={padTop}
          x2={padLeft}
          y2={padTop + innerH}
          stroke="#e5e7eb"
        />
        {/* X axis */}
        <line
          x1={padLeft}
          y1={padTop + innerH}
          x2={padLeft + innerW}
          y2={padTop + innerH}
          stroke="#e5e7eb"
        />

        {/* Y ticks & labels */}
        {yTicks.map((t, i) => {
          const y = padTop + innerH - (t / maxY) * innerH;
          return (
            <g key={`y-${i}`}>
              <line x1={padLeft - 5} y1={y} x2={padLeft} y2={y} stroke="#9ca3af" />
              <line x1={padLeft} y1={y} x2={padLeft + innerW} y2={y} stroke="#f3f4f6" />
              <text
                x={padLeft - 8}
                y={y + 4}
                fontSize="10"
                textAnchor="end"
                fill="#6b7280"
              >
                {t}
              </text>
            </g>
          );
        })}

        {/* X ticks & labels */}
        {monthLabels.map((lbl, i) => {
          const x = padLeft + i * xStep;
          const show = i % xLabelStep === 0 || i === n - 1;
          return (
            <g key={`x-${i}`}>
              <line
                x1={x}
                y1={padTop + innerH}
                x2={x}
                y2={padTop + innerH + 5}
                stroke="#9ca3af"
              />
              {show && (
                <text
                  x={x}
                  y={padTop + innerH + 18}
                  fontSize="10"
                  textAnchor="middle"
                  fill="#6b7280"
                >
                  {lbl}
                </text>
              )}
            </g>
          );
        })}

        {/* Series paths */}
        {seriesKeys.map((k) => (
          <path
            key={k}
            d={pathFor(series[k])}
            fill="none"
            stroke={seriesColors[k]}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      {legend}
    </div>
  );
}

function withinClosingWindow(schedule, monthsWindow = 2) {
  if (!Array.isArray(schedule) || schedule.length === 0) return false;
  const last = schedule[schedule.length - 1];
  if (!last?.dueDateISO) return false;
  const lastDate = new Date(last.dueDateISO + "T00:00:00");
  const today = new Date();
  const start = new Date(lastDate);
  start.setMonth(start.getMonth() - Math.max(0, monthsWindow));
  return today >= start; // true in last N months or after last month
}

export default function FinancialTable({ schedule, config, onChange }) {
  const [modalIdx, setModalIdx] = useState(null);
  const [manageIdx, setManageIdx] = useState(null);
  const [showChargeIdx, setShowChargeIdx] = useState(null);
  const [showNoticeIdx, setShowNoticeIdx] = useState(null);
  const [showSettlement, setShowSettlement] = useState(false);

  // Render from a safe, normalized copy; DO NOT inject payments here
  const derived = useMemo(() => {
    const rows = normalizeRows(schedule).map((r) => ({ ...r }));
    rows.forEach((row) => {
      maybeApplyLateFee(row, config);
      finalizeMonthIfPaid(row, config);
      if (row.notice) {
        const startISO = computeNoticeStartISO(row.notice);
        const endISO =
          startISO && row.notice.days
            ? addDays(startISO, Math.max(0, Number(row.notice.days)))
            : null;
        row.notice.startISO = startISO || null;
        row.notice.endISO = endISO || null;
      }
    });
    return rows;
  }, [schedule, config]);

  // Push normalized upstream unless a modal is open
  useEffect(() => {
    if (
      modalIdx !== null ||
      manageIdx !== null ||
      showChargeIdx !== null ||
      showNoticeIdx !== null ||
      showSettlement
    )
      return;
    const raw = JSON.stringify(schedule);
    const norm = JSON.stringify(normalizeRows(derived));
    if (raw !== norm) onChange(normalizeRows(derived));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [derived, modalIdx, manageIdx, showChargeIdx, showNoticeIdx, showSettlement]);

  // ---- KPIs + trend buckets (only up through TODAY for trends/chart) ----
  const { kpis, trendBucketsToday, rowsStatusesToday, monthLabelsToday } = useMemo(() => {
    let expected = 0,
      received = 0,
      balance = 0;

    const todayISO = new Date().toISOString().slice(0, 10);
    const eligible = derived.filter((r) => (r.dueDateISO || "") <= todayISO);

    let onTime = 0,
      withinGrace = 0,
      late = 0,
      noticeGiven = 0,
      beyondNotice = 0;
    const rowsStatuses = [];
    const monthLabels = [];

    // KPI totals still reflect the whole table
    derived.forEach((r) => {
      const t = computeRowTotals(r, config);
      expected += t.expected;
      received += t.receivedTotal;
      balance += t.balance;
    });

    eligible.forEach((r) => {
      const expectedTotal =
        (Number(r.expectedBase) || 0) +
        getPetRent(config) +
        (Number(r.expectedOther) || 0) +
        (Array.isArray(r.adjustments)
          ? r.adjustments.reduce((s, a) => s + (Number(a.amount) || 0), 0)
          : Number(r.expectedAdjustments) || 0) +
        (r.lateFeeWaived ? 0 : Number(r.lateFee) || 0);

      const st = resolveFeverStatus({
        dueDateISO: r.dueDateISO,
        payments: r.payments,
        expectedTotal,
        graceDays: Number(config?.graceDays ?? config?.lateFeeDays ?? 0),
        noticeGivenAtISO: r?.notice?.startISO ?? config?.noticeGivenAtISO ?? null,
        noticeDays: Number(r?.notice?.days ?? config?.noticeDays ?? 10),
      });

      const bucket = colorToBucket(st?.color);
      rowsStatuses.push(bucket);

      // Month label
      let label = r.periodLabel;
      if (!label && r.dueDateISO) {
        const d = new Date(r.dueDateISO + "T00:00:00");
        const month = d.toLocaleString(undefined, { month: "short" });
        label = `${month} ${d.getFullYear()}`;
      }
      monthLabels.push(label || "");

      if (bucket === "onTime") onTime++;
      else if (bucket === "withinGrace") withinGrace++;
      else if (bucket === "late") late++;
      else if (bucket === "noticeGiven") noticeGiven++;
      else if (bucket === "beyondNotice") beyondNotice++;
    });

    return {
      kpis: { expected, received, balance },
      trendBucketsToday: { onTime, withinGrace, late, noticeGiven, beyondNotice },
      rowsStatusesToday: rowsStatuses,
      monthLabelsToday: monthLabels,
    };
  }, [derived, config]);

  // ---- CSV/PDF ----
  function exportCSV() {
    const header = [
      "Period",
      "DueDate",
      "ExpectedTotal",
      "Breakdown",
      "PaymentAmount",
      "PaymentDate",
      "PaymentMethod",
      "PaymentNote",
      "RowTotalReceived",
      "RowBalance",
      "RowStatus",
      "NoticeStart",
      "NoticeEnd",
      "NoticeDays",
      "NoticePostedOn",
      "NoticeMethods",
    ].join(",");
    const lines = [header];

    derived.forEach((row) => {
      const t = computeRowTotals(row, config);
      const pet = getPetRent(config);
      const hypotheticalLateCSV = computeAssessedLateFeeAmount(row, config);
      const expected = (
        (Number(row.expectedBase) || 0) +
        pet +
        (Number(row.expectedOther) || 0) +
        (Array.isArray(row.adjustments)
          ? row.adjustments.reduce((s, a) => s + (Number(a.amount) || 0), 0)
          : Number(row.expectedAdjustments) || 0) +
        (row.lateFeeWaived ? 0 : Number(row.lateFee) || 0)
      ).toFixed(2);

      const adjLabel = row.adjustmentReasons?.length
        ? row.adjustmentReasons.join(" + ")
        : "Adj";

      const breakdown = `Rent ${Number(row.expectedBase).toFixed(2)}${
        pet ? ` + Pet ${pet.toFixed(2)}` : ""
      }${row.expectedOther ? ` + Other ${Number(row.expectedOther).toFixed(2)}` : ""}${
        Array.isArray(row.adjustments) && row.adjustments.length
          ? ` + ${adjLabel} ${row.adjustments
              .reduce((s, a) => s + (Number(a.amount) || 0), 0)
              .toFixed(2)}`
          : row.expectedAdjustments
            ? ` + ${adjLabel} ${Number(row.expectedAdjustments).toFixed(2)}`
            : ""
      }${
        row.lateFeeWaived
          ? hypotheticalLateCSV
            ? ` + Late ${hypotheticalLateCSV.toFixed(2)} (waived)`
            : ""
          : row.lateFee
            ? ` + Late ${Number(row.lateFee).toFixed(2)}`
            : ""
      }`;

      const notice = row.notice || {};
      const noticeMethods = (notice.methods || [])
        .map(
          (m) =>
            `${m.type || ""}@${m.dateISO || ""}${m.proofName ? ` (${m.proofName})` : ""}`,
        )
        .join(" | ");

      const baseCols = [
        row.periodLabel,
        row.dueDateISO,
        expected,
        `"${breakdown}"`,
        "", // PaymentAmount (per payment)
        "", // PaymentDate
        "", // PaymentMethod
        "", // PaymentNote
        t.receivedTotal.toFixed(2),
        t.balance.toFixed(2),
        row.state || "",
        notice.startISO || "",
        notice.endISO || "",
        Number(notice.days || 0) || "",
        notice.postedOnISO || "",
        `"${noticeMethods}"`,
      ];

      if (row.payments.length === 0) {
        lines.push(baseCols.join(","));
      } else {
        row.payments.forEach((p) => {
          const cols = [...baseCols];
          cols[4] = Number(p.amount).toFixed(2);
          cols[5] = p.dateISO || "";
          cols[6] = p.method || "";
          cols[7] = p.note ? `"${p.note.replace(/"/g, '""')}"` : "";
          lines.push(cols.join(","));
        });
      }
    });

    downloadBlob("financials.csv", lines.join("\n"), "text/csv");
  }

  function exportPDF() {
    window.print();
  }

  // ---- payment mutators ----
  function addPayment(idx, payment) {
    const next = schedule.map((r, i) =>
      i === idx
        ? {
            ...r,
            payments: [
              ...(r.payments || []),
              { ...payment, amount: Number(payment.amount) },
            ],
          }
        : r,
    );
    next.forEach((row) => finalizeMonthIfPaid(row, config));
    onChange(normalizeRows(next));
  }

  function updatePayment(idx, pIndex, payment) {
    const next = schedule.map((r, i) => {
      if (i !== idx) return r;
      const payments = [...(r.payments || [])];
      if (pIndex >= 0 && pIndex < payments.length) {
        payments[pIndex] = { ...payment, amount: Number(payment.amount) };
      }
      return { ...r, payments };
    });
    next.forEach((row) => finalizeMonthIfPaid(row, config));
    onChange(normalizeRows(next));
  }

  function deletePayment(idx, pIndex) {
    const next = schedule.map((r, i) => {
      if (i !== idx) return r;
      const payments = [...(r.payments || [])];
      if (pIndex >= 0 && pIndex < payments.length) {
        payments.splice(pIndex, 1);
      }
      return { ...r, payments };
    });
    next.forEach((row) => finalizeMonthIfPaid(row, config));
    onChange(normalizeRows(next));
  }

  function addAdj(idx, payload) {
    if (!payload) return;
    const amt = Number(payload.amount);
    if (!Number.isFinite(amt) || amt === 0) return;

    const next = schedule.map((r, i) => {
      if (i !== idx) return r;
      const reasons = r.adjustmentReasons ? [...r.adjustmentReasons] : [];
      if (payload.reason && payload.reason.trim()) reasons.push(payload.reason.trim());

      const adjustments = Array.isArray(r.adjustments) ? [...r.adjustments] : [];
      adjustments.push({ amount: amt, reason: payload.reason || "" });

      return {
        ...r,
        adjustments,
        expectedAdjustments: +(Number(r.expectedAdjustments || 0) + amt).toFixed(2),
        adjustmentReasons: reasons,
      };
    });
    next.forEach((row) => finalizeMonthIfPaid(row, config));
    onChange(normalizeRows(next));
  }

  function toggleLateFee(idx, waived) {
    const next = schedule.map((r, i) =>
      i === idx ? { ...r, lateFeeWaived: waived, lateFee: waived ? 0 : r.lateFee } : r,
    );
    next.forEach((row) => finalizeMonthIfPaid(row, config));
    onChange(normalizeRows(next));
  }

  function saveNotice(idx, noticePayload) {
    const startISO = computeNoticeStartISO(noticePayload);
    const endISO =
      startISO && noticePayload.days
        ? addDays(startISO, Math.max(0, Number(noticePayload.days)))
        : null;

    const next = schedule.map((r, i) => {
      if (i !== idx) return r;
      return {
        ...r,
        notice: {
          ...noticePayload,
          startISO: startISO || null,
          endISO: endISO || null,
        },
      };
    });
    onChange(normalizeRows(next));
  }

  // ---- Deposits (Security + Pet). Support legacy and new shapes ----
  const secExpected = Number(
    (config?.deposit?.expected ?? config?.securityDeposit ?? 0) || 0,
  );
  const secReceived = Number(
    (config?.deposit?.received ?? config?.securityDepositPayment?.amount ?? 0) || 0,
  );
  const secDate =
    config?.deposit?.dateISO ?? config?.securityDepositPayment?.dateISO ?? "";

  const petExpected = Number((config?.petDeposit ?? 0) || 0);
  const petReceived = Number((config?.petDepositPayment?.amount ?? 0) || 0);
  const petDate = config?.petDepositPayment?.dateISO ?? "";

  const depositsExpected = secExpected + petExpected;
  const depositsReceived = secReceived + petReceived;
  const depositsBalance = +(depositsExpected - depositsReceived).toFixed(2);
  const showDeposits = depositsExpected > 0 || depositsReceived > 0;

  // Settlement storage lives on the FINAL row: row.depositSettlement
  const finalRow = derived[derived.length - 1];
  const existingSettlement = finalRow?.depositSettlement || null;

  // Prepare schedule snapshot for the modal unpaid calc (only rows with due dates)
  const scheduleForUnpaid = useMemo(() => {
    return derived
      .filter((r) => !!r.dueDateISO)
      .map((r) => ({
        dueDateISO: r.dueDateISO,
        expectedBase: r.expectedBase,
        expectedOther: r.expectedOther,
        expectedAdjustments: r.expectedAdjustments,
        adjustments: r.adjustments,
        lateFee: r.lateFeeWaived ? 0 : r.lateFee,
        payments: r.payments || [],
      }));
  }, [derived]);

  function saveDepositSettlement(settlement) {
    const next = schedule.map((r, i, arr) =>
      i === arr.length - 1 ? { ...r, depositSettlement: settlement } : r,
    );
    onChange(normalizeRows(next));
    setShowSettlement(false);
  }

  return (
    <div className={styles.wrapper}>
      {/* Payment Trends */}
      <div style={{ marginBottom: 4 }}>
        <h3 style={{ margin: "0 0 6px 0" }}>Payment Trends</h3>

        {/* Trend summary line (string to avoid React key warnings) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 14,
            color: "#374151",
            marginBottom: 4,
          }}
        >
          <span
            style={{
              border: "1px solid #e5e7eb",
              background: "#f9fafb",
              padding: "2px 8px",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 12,
              color: "#374151",
            }}
          >
            Trend
          </span>
          <span>
            {(() => {
              const t = trendBucketsToday;
              return (
                `on time: ${t.onTime}` +
                (t.withinGrace > 0 ? ` / within grace: ${t.withinGrace}` : "") +
                ` / late: ${t.late} / notice given: ${t.noticeGiven} / beyond notice: ${t.beyondNotice}`
              );
            })()}
          </span>
        </div>

        <div
          style={{
            display: "grid",
            placeItems: "center",
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            padding: 8,
            background: "#f8fafc",
          }}
        >
          <div style={{ width: "100%", maxWidth: 900 }}>
            <TrendMiniChart
              rowsStatuses={rowsStatusesToday}
              monthLabels={monthLabelsToday}
            />
          </div>
        </div>
      </div>

      {/* Deposits (Security + Pet) — ALWAYS VISIBLE */}
      <div style={{ margin: "6px 0 4px" }}>
        <h3 style={{ margin: "0 0 6px 0" }}>Deposits</h3>
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            padding: 8,
            background: "#f8fafc",
            display: "grid",
            gap: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {showDeposits ? (
              <>
                {depositsExpected > 0 && (
                  <div>
                    <strong>Total Expected:</strong> ${depositsExpected.toFixed(2)}
                  </div>
                )}
                <div>
                  <strong>Total Received:</strong> ${depositsReceived.toFixed(2)}
                </div>
                {depositsExpected > 0 && (
                  <div>
                    <strong>Balance:</strong> ${depositsBalance.toFixed(2)}
                  </div>
                )}
              </>
            ) : (
              <div style={{ color: "#6b7280" }}>No deposit payments recorded yet.</div>
            )}

            {/* Status chip (only if there are deposits or a prior settlement) */}
            {(showDeposits || existingSettlement) && (
              <span
                style={{
                  marginLeft: "auto",
                  padding: "2px 8px",
                  borderRadius: 9999,
                  background:
                    depositsReceived >= depositsExpected && showDeposits
                      ? "#e8f5e9"
                      : "#f3f4f6",
                  color:
                    depositsReceived >= depositsExpected && showDeposits
                      ? "#065f46"
                      : "#374151",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {showDeposits
                  ? depositsReceived >= depositsExpected
                    ? "Paid in full"
                    : depositsReceived > 0
                      ? "Partial"
                      : "Not received"
                  : "No deposits"}
              </span>
            )}
          </div>

          {/* Breakdown (Security + Pet + dates) */}
          <div style={{ color: "#374151" }}>
            <div style={{ display: "grid", gap: 2 }}>
              <div>
                <strong>Security:</strong>{" "}
                {secExpected ? `Expected $${secExpected.toFixed(2)} · ` : ""}
                Received ${secReceived.toFixed(2)}
                {secDate ? ` on ${secDate}` : ""}
              </div>
              <div>
                <strong>Pet:</strong>{" "}
                {petExpected ? `Expected $${petExpected.toFixed(2)} · ` : ""}
                Received ${petReceived.toFixed(2)}
                {petDate ? ` on ${petDate}` : ""}
              </div>
            </div>
          </div>

          {/* Settlement row — ALWAYS SHOW A BUTTON */}
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              marginTop: 4,
              flexWrap: "wrap",
            }}
          >
            {existingSettlement ? (
              <>
                <span
                  className={styles.badge}
                  title="Settlement status"
                  style={{
                    background:
                      existingSettlement.status === "settled"
                        ? Number(existingSettlement.refundable) >= 0
                          ? "#e6fffa"
                          : "#fee2e2"
                        : "#fff7ed",
                    color:
                      existingSettlement.status === "settled"
                        ? Number(existingSettlement.refundable) >= 0
                          ? "#065f46"
                          : "#7f1d1d"
                        : "#9a3412",
                  }}
                >
                  {existingSettlement.status === "settled"
                    ? Number(existingSettlement.refundable) >= 0
                      ? "Settled"
                      : "Settled (tenant owes)"
                    : "Deferred"}
                </span>

                {existingSettlement.status === "settled" && (
                  <span style={{ color: "#374151" }}>
                    {Number(existingSettlement.refundable || 0) > 0 ? (
                      <>
                        Refunded ${Number(existingSettlement.refundable).toFixed(2)}
                        {existingSettlement.refundDateISO
                          ? ` on ${existingSettlement.refundDateISO}`
                          : ""}{" "}
                        {existingSettlement.refundMethod
                          ? ` via ${existingSettlement.refundMethod}`
                          : ""}
                      </>
                    ) : Number(existingSettlement.refundable || 0) === 0 ? (
                      <>Even — no refund due</>
                    ) : (
                      <>
                        Tenant owes $
                        {Math.abs(Number(existingSettlement.refundable)).toFixed(2)}{" "}
                        (beyond deposits)
                      </>
                    )}
                  </span>
                )}

                {existingSettlement.status === "deferred" &&
                  existingSettlement.deferReason && (
                    <span style={{ color: "#6b7280" }}>
                      ({existingSettlement.deferReason})
                    </span>
                  )}

                <button
                  className={buttonStyles.secondaryButton}
                  onClick={() => setShowSettlement(true)}
                >
                  View / Edit Settlement
                </button>
              </>
            ) : (
              <button
                className={buttonStyles.primaryButton}
                onClick={() => {
                  console.debug("Open DepositSettlementModal");
                  setShowSettlement(true);
                }}
              >
                Settle Deposits
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lease Payment Schedule header + toolbar row (KPIs left, buttons right) */}
      <div className={styles.header} style={{ marginTop: 2, marginBottom: 2 }}>
        <div style={{ width: "100%" }}>
          <h3 style={{ marginBottom: 6 }}>Lease Payment Schedule</h3>

          {/* Header actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 8,
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <div className={styles.kpis} style={{ marginTop: 0 }}>
              <div className={styles.kpi}>
                <span>Total Expected</span>
                <strong>${kpis.expected.toFixed(2)}</strong>
              </div>
              <div className={styles.kpi}>
                <span>Total Received</span>
                <strong>${kpis.received.toFixed(2)}</strong>
              </div>
              <div className={styles.kpi}>
                <span>Balance</span>
                <strong>${kpis.balance.toFixed(2)}</strong>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
              <button className={buttonStyles.secondaryButton} onClick={exportCSV}>
                Export CSV
              </button>
              <button className={buttonStyles.secondaryButton} onClick={exportPDF}>
                Print
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className={styles.table}>
        <div className={`${styles.row} ${styles.head}`}>
          <div>Month</div>
          <div>Status/Payment</div>
          <div>Expected</div>
          <div>Due</div>
          <div>Payments</div>
          <div>Total Received</div>
          <div>Actions</div>
        </div>

        {derived.map((row, idx) => {
          const t = computeRowTotals(row, config);
          const pet = getPetRent(config);
          const hypotheticalLate = computeAssessedLateFeeAmount(row, config);

          const expectedDisplay =
            (Number(row.expectedBase) || 0) +
            pet +
            (Number(row.expectedOther) || 0) +
            (Array.isArray(row.adjustments)
              ? row.adjustments.reduce((s, a) => s + (Number(a.amount) || 0), 0)
              : Number(row.expectedAdjustments) || 0) +
            (row.lateFeeWaived ? 0 : Number(row.lateFee) || 0);

          const status = resolveFeverStatus({
            dueDateISO: row.dueDateISO,
            payments: row.payments,
            expectedTotal: expectedDisplay,
            graceDays: Number(config?.graceDays ?? config?.lateFeeDays ?? 0),
            noticeGivenAtISO: row?.notice?.startISO ?? config?.noticeGivenAtISO ?? null,
            noticeDays: Number(row?.notice?.days ?? config?.noticeDays ?? 10),
          });

          const adjLabel = row.adjustmentReasons?.length
            ? row.adjustmentReasons.join(" + ")
            : "Adj";

          const canStartNotice = status.color === "orange" || !!row.notice;

          return (
            <div key={row.dueDateISO + ":" + idx} className={styles.row}>
              {/* Month */}
              <div>
                <div className={styles.period}>{row.periodLabel}</div>
                {row.prepaid && <div className={styles.badge}>Prepaid</div>}
              </div>

              {/* Status + Notice badge */}
              <div className={styles.statusCell}>
                <div className={styles.statusInner}>
                  {status.color ? (
                    <FeverLight
                      color={status.color}
                      size={25}
                      title={status.tooltip}
                      paid={!!status.finalPaidAtISO}
                      split={true}
                    />
                  ) : (
                    <span style={{ display: "inline-block", width: 25, height: 25 }} />
                  )}

                  {row.notice?.startISO && row.notice?.endISO && (
                    <div
                      className={styles.badge}
                      style={{ marginTop: 6 }}
                      title={`Notice window`}
                    >
                      Notice Period {row.notice.startISO} → {row.notice.endISO}
                    </div>
                  )}
                </div>
              </div>

              {/* Expected */}
              <div>
                <div>${expectedDisplay.toFixed(2)}</div>
                <div className={styles.subtle}>
                  Rent ${Number(row.expectedBase).toFixed(2)}
                  {pet ? ` + Pet $${pet.toFixed(2)}` : ""}
                  {row.expectedOther
                    ? ` + Other $${Number(row.expectedOther).toFixed(2)}`
                    : ""}
                  {Array.isArray(row.adjustments) && row.adjustments.length
                    ? ` + ${adjLabel} $${row.adjustments
                        .reduce((s, a) => s + (Number(a.amount) || 0), 0)
                        .toFixed(2)}`
                    : row.expectedAdjustments
                      ? ` + ${adjLabel} $${Number(row.expectedAdjustments).toFixed(2)}`
                      : ""}
                  {row.lateFeeWaived
                    ? hypotheticalLate
                      ? ` + Late $${hypotheticalLate.toFixed(2)} (waived)`
                      : ""
                    : row.lateFee
                      ? ` + Late $${Number(row.lateFee).toFixed(2)}`
                      : ""}
                </div>
                {(() => {
                  const showWaive =
                    row.lateFee > 0 || (row.lateFeeWaived && hypotheticalLate > 0);
                  return showWaive ? (
                    <label className={styles.waive}>
                      <input
                        type="checkbox"
                        checked={row.lateFeeWaived}
                        onChange={(e) => toggleLateFee(idx, e.target.checked)}
                      />{" "}
                      Waive late fee
                    </label>
                  ) : null;
                })()}
              </div>

              {/* Due */}
              <div>{row.dueDateISO}</div>

              {/* Payments */}
              <div>
                {row.payments.length === 0 && (
                  <div className={styles.subtle}>No payments</div>
                )}
                {row.payments.map((p, i) => (
                  <div key={i} className={styles.paymentLine}>
                    ${Number(p.amount).toFixed(2)} on {p.dateISO}
                    {p.method ? ` · ${p.method}` : ""}
                    {p.note ? ` — ${p.note}` : ""}
                  </div>
                ))}
              </div>

              {/* Total Received */}
              <div>${t.receivedTotal.toFixed(2)}</div>

              {/* Actions */}
              <div className={styles.actionsCell}>
                <div className={styles.actionsGroup}>
                  {/* Top row: + Payment | Manage Payments */}
                  <div className={styles.actionsRow}>
                    <button
                      className={`${buttonStyles.primaryButton} ${styles.actionsButton}`}
                      onClick={() => {
                        if ((row.payments || []).length === 0) {
                          setModalIdx(idx); // open Add Payment
                        } else {
                          setManageIdx(idx); // open Manage Payments
                        }
                      }}
                      title={
                        (row.payments || []).length === 0
                          ? "Add a payment"
                          : "View, add, or edit payments"
                      }
                    >
                      Payments
                    </button>
                  </div>

                  {/* Bottom row */}
                  {canStartNotice ? (
                    <div className={styles.actionsRow}>
                      <button
                        className={`${buttonStyles.secondaryButton} ${styles.actionsButton}`}
                        onClick={() => setShowChargeIdx(idx)}
                        title="Add one-off charge (e.g. utilities, fees)"
                      >
                        + Charge
                      </button>
                      <button
                        className={`${buttonStyles.secondaryButton} ${styles.actionsButton}`}
                        onClick={() => setShowNoticeIdx(idx)}
                        title="Record or update notice period details"
                      >
                        {row.notice ? "Edit Notice" : "+ Notice"}
                      </button>
                    </div>
                  ) : (
                    <div className={styles.actionsRow}>
                      <button
                        className={`${buttonStyles.secondaryButton} ${styles.actionsButton}`}
                        onClick={() => setShowChargeIdx(idx)}
                        title="Add one-off charge (e.g. utilities, fees)"
                      >
                        + Charge
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick add */}
      <PaymentModal
        open={modalIdx !== null}
        title="Add Payment"
        onClose={() => setModalIdx(null)}
        expectedAmount={(() => {
          if (modalIdx === null) return undefined;
          const row = derived[modalIdx];
          // Prefill with the remaining balance for that row
          const t = computeRowTotals(row, config);
          return Math.max(0, Number(t.balance) || 0);
        })()}
        onAddPayment={(p) => addPayment(modalIdx, p)}
      />

      {/* Manage (add/edit/delete) */}
      {manageIdx !== null && (
        <ManagePaymentsModal
          open={manageIdx !== null}
          title={`Manage Payments — ${derived[manageIdx]?.periodLabel || ""}`}
          payments={derived[manageIdx]?.payments || []}
          onClose={() => setManageIdx(null)}
          onAdd={(p) => addPayment(manageIdx, p)}
          onUpdate={(pIndex, p) => updatePayment(manageIdx, pIndex, p)}
          onDelete={(pIndex) => deletePayment(manageIdx, pIndex)}
        />
      )}

      {/* One-off charge */}
      {showChargeIdx !== null && (
        <ChargeModal
          open={showChargeIdx !== null}
          onClose={() => setShowChargeIdx(null)}
          onSave={(payload) => {
            addAdj(showChargeIdx, payload);
            setShowChargeIdx(null);
          }}
        />
      )}

      {/* Notice tracking */}
      {showNoticeIdx !== null && (
        <NoticeModal
          open={showNoticeIdx !== null}
          dueDateISO={derived[showNoticeIdx]?.dueDateISO}
          graceDays={Number(config?.graceDays ?? config?.lateFeeDays ?? 0)}
          value={derived[showNoticeIdx]?.notice || null}
          onClose={() => setShowNoticeIdx(null)}
          onSave={(payload) => {
            saveNotice(showNoticeIdx, payload);
            setShowNoticeIdx(null);
          }}
        />
      )}

      {/* Deposit Settlement */}
      <DepositSettlementModal
        open={showSettlement}
        onClose={() => setShowSettlement(false)}
        deposits={{
          security: { expected: secExpected, received: secReceived, dateISO: secDate },
          pet: { expected: petExpected, received: petReceived, dateISO: petDate },
        }}
        schedule={scheduleForUnpaid}
        existing={existingSettlement}
        onSave={saveDepositSettlement}
      />
    </div>
  );
}
