// property-manager-landlord-app/frontend/src/components/financials/FinancialTable.jsx
import React, { useMemo, useState, useEffect } from "react";
import styles from "./FinancialTable.module.css";
import FeverLight from "../ui/FeverLight";
import PaymentModal from "./PaymentModal";
import buttonStyles from "../../styles/Buttons.module.css";
import { computeRowTotals, maybeApplyLateFee, finalizeMonthIfPaid, getPetRent } from "../../utils/finance";
import { resolveFeverStatus } from "../../utils/feverStatus";
import ChargeModal from "./ChargeModal";

// ---- local normalize (dedupe payments in any updated rows)
function normalizeRows(rows = []) {
  const keyOf = (p) => [Number(p.amount), p.dateISO || "", (p.method || "").trim(), (p.note || "").trim()].join("|");
  return rows.map(r => {
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
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

export default function FinancialTable({ schedule, config, onChange }) {
  const [modalIdx, setModalIdx] = useState(null);
  const [showChargeIdx, setShowChargeIdx] = useState(null);

  // Render from a safe, normalized copy; DO NOT inject payments here
  const derived = useMemo(() => {
    const rows = normalizeRows(schedule).map(r => ({ ...r }));
    rows.forEach((row) => {
      maybeApplyLateFee(row, config);
      finalizeMonthIfPaid(row, config);
    });
    return rows;
  }, [schedule, config]);

  // If our normalized/latefee-finalized view differs, push a normalized version upstream once.
  // Pause while a modal is open — prevents modal from closing as you type.
  useEffect(() => {
    if (modalIdx !== null || showChargeIdx !== null) return;
    const raw = JSON.stringify(schedule);
    const norm = JSON.stringify(normalizeRows(derived));
    if (raw !== norm) onChange(normalizeRows(derived));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [derived, modalIdx, showChargeIdx]);

  // ---- KPIs ----
  const summary = useMemo(() => {
    let expected=0, received=0, balance=0;
    let green=0, yellow=0, orange=0, red=0, black=0, gray=0;

    derived.forEach((r) => {
      const t = computeRowTotals(r, config);
      expected += t.expected;
      received += t.receivedTotal;
      balance  += t.balance;

      const expectedTotal =
        (Number(r.expectedBase) || 0) +
        getPetRent(config) +
        (Number(r.expectedOther) || 0) +
        (Array.isArray(r.adjustments)
          ? r.adjustments.reduce((s, a) => s + (Number(a.amount) || 0), 0)
          : (Number(r.expectedAdjustments) || 0)) +
        (r.lateFeeWaived ? 0 : (Number(r.lateFee) || 0));

      const st = resolveFeverStatus({
        dueDateISO: r.dueDateISO,
        payments: r.payments,
        expectedTotal,
        graceDays: Number(config?.graceDays ?? config?.lateFeeDays ?? 0),
        noticeGivenAtISO: config?.noticeGivenAtISO || null,
        noticeDays: Number(config?.noticeDays ?? 10),
      });

      const color = st?.color;
      if (color === "green") green++;
      else if (color === "yellow") yellow++;
      else if (color === "orange") orange++;
      else if (color === "red") red++;
      else if (color === "black") black++;
      else gray++;
    });

    return { expected, received, balance, green, yellow, orange, red, black, gray };
  }, [derived, config]);

  function exportCSV() {
    const header = [
      "Period","DueDate","ExpectedTotal","Breakdown",
      "PaymentAmount","PaymentDate","PaymentMethod","PaymentNote",
      "RowTotalReceived","RowBalance","RowStatus"
    ].join(",");
    const lines = [header];

    derived.forEach((row) => {
      const t = computeRowTotals(row, config);
      const pet = getPetRent(config);
      const expected = (
        (Number(row.expectedBase) || 0) +
        pet +
        (Number(row.expectedOther) || 0) +
        (Array.isArray(row.adjustments)
          ? row.adjustments.reduce((s, a) => s + (Number(a.amount) || 0), 0)
          : (Number(row.expectedAdjustments) || 0)) +
        (row.lateFeeWaived ? 0 : (Number(row.lateFee) || 0))
      ).toFixed(2);

      const adjLabel =
        row.adjustmentReasons?.length ? row.adjustmentReasons.join(" + ") : "Adj";

      const breakdown = `Rent ${Number(row.expectedBase).toFixed(2)}${
        pet ? ` + Pet ${pet.toFixed(2)}` : ""
      }${
        row.expectedOther ? ` + Other ${Number(row.expectedOther).toFixed(2)}` : ""
      }${
        (Array.isArray(row.adjustments) && row.adjustments.length)
          ? ` + ${adjLabel} ${row.adjustments.reduce((s, a) => s + (Number(a.amount) || 0), 0).toFixed(2)}`
          : (row.expectedAdjustments ? ` + ${adjLabel} ${Number(row.expectedAdjustments).toFixed(2)}` : "")
      }${
        !row.lateFeeWaived && row.lateFee ? ` + Late ${Number(row.lateFee).toFixed(2)}` : ""
      }`;

      if (row.payments.length === 0) {
        lines.push([
          row.periodLabel,
          row.dueDateISO,
          expected,
          `"${breakdown}"`,
          "",
          "",
          "",
          "",
          t.receivedTotal.toFixed(2),
          t.balance.toFixed(2),
          row.state || ""
        ].join(","));
      } else {
        row.payments.forEach((p) => {
          lines.push([
            row.periodLabel,
            row.dueDateISO,
            expected,
            `"${breakdown}"`,
            Number(p.amount).toFixed(2),
            p.dateISO,
            p.method || "",
            p.note ? `"${p.note.replace(/"/g, '""')}"` : "",
            t.receivedTotal.toFixed(2),
            t.balance.toFixed(2),
            row.state || ""
          ].join(","));
        });
      }
    });

    downloadBlob("financials.csv", lines.join("\n"), "text/csv");
  }

  function exportPDF() { window.print(); }

  // All mutators: normalize before sending upstream
  function toggleLateFee(idx, waived) {
    const next = schedule.map((r, i) => (i === idx ? { ...r, lateFeeWaived: waived, lateFee: waived ? 0 : r.lateFee } : r));
    next.forEach((row) => finalizeMonthIfPaid(row, config));
    onChange(normalizeRows(next));
  }

  function addPayment(idx, payment) {
    const next = schedule.map((r, i) =>
      i === idx ? { ...r, payments: [...(r.payments || []), { ...payment, amount: Number(payment.amount) }] } : r
    );
    next.forEach((row) => finalizeMonthIfPaid(row, config));
    onChange(normalizeRows(next));
  }

  function clearPayments(idx) {
    const next = schedule.map((r, i) => (i === idx ? { ...r, payments: [] } : r));
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
        expectedAdjustments: +(Number(r.expectedAdjustments || 0) + amt).toFixed(2), // legacy sync
        adjustmentReasons: reasons,
      };
    });
    next.forEach((row) => finalizeMonthIfPaid(row, config));
    onChange(normalizeRows(next));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <h3>Lease Payment Schedule</h3>
          <div className={styles.kpis}>
            <div className={styles.kpi}><span>Total Expected</span><strong>${summary.expected.toFixed(2)}</strong></div>
            <div className={styles.kpi}><span>Total Received</span><strong>${summary.received.toFixed(2)}</strong></div>
            <div className={styles.kpi}><span>Balance</span><strong>${summary.balance.toFixed(2)}</strong></div>
            <div className={styles.kpi}>
              <span>Trend</span>
              <strong>
                {summary.green} green / {summary.yellow} yellow / {summary.orange} orange /
                {` ${summary.red} red / ${summary.black} black / ${summary.gray} grey`}
              </strong>
            </div>
          </div>
        </div>
        <div className={styles.headerActions}>
          <button className={buttonStyles.secondaryButton} onClick={exportCSV}>Export CSV</button>
          <button className={buttonStyles.secondaryButton} onClick={exportPDF}>Print</button>
        </div>
      </div>

      <div className={styles.table}>
        <div className={`${styles.row} ${styles.head}`}>
          <div>Month</div>
          <div>Expected</div>
          <div>Due</div>
          <div>Payments</div>
          <div>Total Received</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        {derived.map((row, idx) => {
          const t = computeRowTotals(row, config);
          const pet = getPetRent(config);

          const expectedDisplay = (
            (Number(row.expectedBase) || 0) +
            pet +
            (Number(row.expectedOther) || 0) +
            (Array.isArray(row.adjustments)
              ? row.adjustments.reduce((s, a) => s + (Number(a.amount) || 0), 0)
              : (Number(row.expectedAdjustments) || 0)) +
            (row.lateFeeWaived ? 0 : (Number(row.lateFee) || 0))
          );

          const status = resolveFeverStatus({
            dueDateISO: row.dueDateISO,
            payments: row.payments,
            expectedTotal: expectedDisplay,
            graceDays: Number(config?.graceDays ?? config?.lateFeeDays ?? 0),
            noticeGivenAtISO: config?.noticeGivenAtISO || null,
            noticeDays: Number(config?.noticeDays ?? 10),
          });

          const adjLabel =
            row.adjustmentReasons?.length ? row.adjustmentReasons.join(" + ") : "Adj";

          const showLight = !!status.color;

          return (
            <div key={row.dueDateISO + ":" + idx} className={styles.row}>
              <div>
                <div className={styles.period}>{row.periodLabel}</div>
                {row.prepaid && <div className={styles.badge}>Prepaid</div>}
              </div>

              <div>
                <div>${expectedDisplay.toFixed(2)}</div>
                <div className={styles.subtle}>
                  Rent ${Number(row.expectedBase).toFixed(2)}
                  {pet ? ` + Pet $${pet.toFixed(2)}` : ""}
                  {row.expectedOther ? ` + Other $${Number(row.expectedOther).toFixed(2)}` : ""}
                  {(Array.isArray(row.adjustments) && row.adjustments.length)
                    ? ` + ${adjLabel} $${row.adjustments.reduce((s, a) => s + (Number(a.amount) || 0), 0).toFixed(2)}`
                    : (row.expectedAdjustments ? ` + ${adjLabel} $${Number(row.expectedAdjustments).toFixed(2)}` : "")
                  }
                  {!row.lateFeeWaived && row.lateFee ? ` + Late $${Number(row.lateFee).toFixed(2)}` : ""}
                </div>
                {!!row.lateFee && (
                  <label className={styles.waive}>
                    <input
                      type="checkbox"
                      checked={row.lateFeeWaived}
                      onChange={(e) => toggleLateFee(idx, e.target.checked)}
                    />{" "}
                    Waive late fee
                  </label>
                )}
              </div>

              <div>{row.dueDateISO}</div>

              <div>
                {row.payments.length === 0 && <div className={styles.subtle}>No payments</div>}
                {row.payments.map((p, i) => (
                  <div key={i} className={styles.paymentLine}>
                    ${Number(p.amount).toFixed(2)} on {p.dateISO}
                    {p.method ? ` · ${p.method}` : ""}
                    {p.note ? ` — ${p.note}` : ""}
                  </div>
                ))}
              </div>

              <div>${t.receivedTotal.toFixed(2)}</div>

              <div>
                {showLight ? (
                  <FeverLight color={status.color} size={16} title={status.tooltip} />
                ) : (
                  <span style={{ display: "inline-block", width: 16, height: 16 }} />
                )}
                {row.lockedState && <div className={styles.subtle}>Locked {row.lockedAtISO}</div>}
              </div>

              <div className={styles.actionsCell}>
                <button className={buttonStyles.primaryButton} onClick={() => setModalIdx(idx)}>+ Payment</button>
                <button
                  className={buttonStyles.secondaryButton}
                  onClick={() => setShowChargeIdx(idx)}
                  title="Add one-off charge (e.g., utilities, fees)"
                >
                  + Charge
                </button>
                {row.payments.length > 0 && (
                  <button className={buttonStyles.secondaryButton} onClick={() => clearPayments(idx)}>
                    Clear
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <PaymentModal
        open={modalIdx !== null}
        title="Add Payment"
        onClose={() => setModalIdx(null)}
        onAddPayment={(p) => addPayment(modalIdx, p)}
      />

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
    </div>
  );
}
