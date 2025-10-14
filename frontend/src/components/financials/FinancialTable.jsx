// property-manager-landlord-app/frontend/src/components/financials/FinancialTable.jsx
import React, { useMemo, useState, useEffect } from "react";
import styles from "./FinancialTable.module.css";
import FeverLight from "../ui/FeverLight";
import PaymentModal from "./PaymentModal";
import ManagePaymentsModal from "./ManagePaymentsModal";
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
  return filtered.sort((a, b) => (a || "").localeCompare(b || ""))[
    filtered.length - 1
  ];
}

function addDays(dateOrISO, n) {
  const d =
    typeof dateOrISO === "string" ? new Date(dateOrISO) : new Date(dateOrISO);
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

export default function FinancialTable({ schedule, config, onChange }) {
  const [modalIdx, setModalIdx] = useState(null);            // quick add payment
  const [manageIdx, setManageIdx] = useState(null);          // edit/delete payments
  const [showChargeIdx, setShowChargeIdx] = useState(null);
  const [showNoticeIdx, setShowNoticeIdx] = useState(null);

  // Render from a safe, normalized copy; DO NOT inject payments here
  const derived = useMemo(() => {
    const rows = normalizeRows(schedule).map((r) => ({ ...r }));
    rows.forEach((row) => {
      maybeApplyLateFee(row, config);
      finalizeMonthIfPaid(row, config);
      // keep computed notice start/end in sync for convenience
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

  // If our normalized view differs, push upstream once (unless a modal is open).
  useEffect(() => {
    if (
      modalIdx !== null ||
      manageIdx !== null ||
      showChargeIdx !== null ||
      showNoticeIdx !== null
    )
      return;
    const raw = JSON.stringify(schedule);
    const norm = JSON.stringify(normalizeRows(derived));
    if (raw !== norm) onChange(normalizeRows(derived));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [derived, modalIdx, manageIdx, showChargeIdx, showNoticeIdx]);

  // ---- KPIs ----
  const summary = useMemo(() => {
    let expected = 0,
      received = 0,
      balance = 0;
    let green = 0,
      yellow = 0,
      orange = 0,
      red = 0,
      black = 0,
      gray = 0;

    derived.forEach((r) => {
      const t = computeRowTotals(r, config);
      expected += t.expected;
      received += t.receivedTotal;
      balance += t.balance;

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
        // prefer per-row notice over global config
        noticeGivenAtISO: r?.notice?.startISO ?? config?.noticeGivenAtISO ?? null,
        noticeDays: Number(r?.notice?.days ?? config?.noticeDays ?? 10),
      });

      const color = st?.color;
      if (color === "green") green++;
      else if (color === "yellow") yellow++;
      else if (color === "orange") orange++;
      else if (color === "red") red++;
      else if (color === "black") black++;
      else gray++;
    });

    return {
      expected,
      received,
      balance,
      green,
      yellow,
      orange,
      red,
      black,
      gray,
    };
  }, [derived, config]);

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
      }${
        row.expectedOther ? ` + Other ${Number(row.expectedOther).toFixed(2)}` : ""
      }${
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
            `${m.type || ""}@${m.dateISO || ""}${
              m.proofName ? ` (${m.proofName})` : ""
            }`
        )
        .join(" | ");

      const baseCols = [
        row.periodLabel,
        row.dueDateISO,
        expected,
        `"${breakdown}"`,
        "", // PaymentAmount (filled per payment)
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

  // ---- payment mutators: normalize before sending upstream
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
        : r
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
      if (payload.reason && payload.reason.trim())
        reasons.push(payload.reason.trim());

      const adjustments = Array.isArray(r.adjustments) ? [...r.adjustments] : [];
      adjustments.push({ amount: amt, reason: payload.reason || "" });

      return {
        ...r,
        adjustments,
        expectedAdjustments: +(
          Number(r.expectedAdjustments || 0) + amt
        ).toFixed(2),
        adjustmentReasons: reasons,
      };
    });
    next.forEach((row) => finalizeMonthIfPaid(row, config));
    onChange(normalizeRows(next));
  }

  function toggleLateFee(idx, waived) {
    const next = schedule.map((r, i) =>
      i === idx
        ? { ...r, lateFeeWaived: waived, lateFee: waived ? 0 : r.lateFee }
        : r
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <h3>Lease Payment Schedule</h3>
          <div className={styles.kpis}>
            <div className={styles.kpi}>
              <span>Total Expected</span>
              <strong>${summary.expected.toFixed(2)}</strong>
            </div>
            <div className={styles.kpi}>
              <span>Total Received</span>
              <strong>${summary.received.toFixed(2)}</strong>
            </div>
            <div className={styles.kpi}>
              <span>Balance</span>
              <strong>${summary.balance.toFixed(2)}</strong>
            </div>
            <div className={styles.kpi}>
              <span>Trend</span>
              <strong>
                {summary.green} green / {summary.yellow} yellow / {summary.orange} orange / {` ${summary.red} red / `}
                {summary.black} black / {summary.gray} grey
              </strong>
            </div>
          </div>
        </div>
        <div className={styles.headerActions}>
          <button className={buttonStyles.secondaryButton} onClick={exportCSV}>
            Export CSV
          </button>
          <button className={buttonStyles.secondaryButton} onClick={exportPDF}>
            Print
          </button>
        </div>
      </div>

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
            // per-row notice overrides global
            noticeGivenAtISO:
              row?.notice?.startISO ?? config?.noticeGivenAtISO ?? null,
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
                    ? ` + ${adjLabel} $${Number(row.expectedAdjustments).toFixed(
                        2
                      )}`
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
                      onClick={() => setModalIdx(idx)}
                      title="Add a payment"
                    >
                      + Payment
                    </button>

                    <button
                      className={`${buttonStyles.secondaryButton} ${styles.actionsButton}`}
                      onClick={() => setManageIdx(idx)}
                      title="Edit or delete payments"
                    >
                      Manage Payments
                    </button>
                  </div>

                  {/* Bottom row */}
                  {canStartNotice ? (
                    // + Charge | + Notice
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
                    // Only + Charge, full width (same width as both buttons above combined)
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
    </div>
  );
}
