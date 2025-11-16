import { useMemo, useState, useEffect, useLayoutEffect, useRef } from "react";

import styles from "./FinancialForm.module.css";
import buttonStyles from "../../styles/Buttons.module.css";
import FloatingField from "../ui/FloatingField";

function toMoney(n) {
  const v = Number(n || 0);
  return Number.isFinite(v) ? v : 0;
}

export default function DepositSettlementModal({
  open,
  onClose,
  deposits = {
    security: { expected: 0, received: 0, dateISO: "" },
    pet: { expected: 0, received: 0, dateISO: "" },
  },
  schedule = [],
  existing = null,
  onSave,
}) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Measure INPUT height so the Remove button can match it visually
  const probeRef = useRef(null);
  const [inputH, setInputH] = useState(44);

  useLayoutEffect(() => {
    if (!open) return;
    window.requestAnimationFrame(() => {
      const root = probeRef.current;
      const input = root?.querySelector("input, select, textarea");
      const ih = input?.offsetHeight || 40;
      setInputH(ih);
    });
  }, [open]);

  // Auto-calc unpaid (sum positive balances)
  const unpaid = useMemo(() => {
    return schedule.reduce((sum, r) => {
      const receivedTotal = (r.payments || []).reduce((s, p) => s + toMoney(p.amount), 0);
      const expectedDisplay =
        toMoney(r.expectedBase) +
        toMoney(r.expectedOther) +
        (Array.isArray(r.adjustments)
          ? r.adjustments.reduce((s, a) => s + toMoney(a.amount), 0)
          : toMoney(r.expectedAdjustments)) +
        toMoney(r.lateFee);
      const balance = Math.max(0, +(expectedDisplay - receivedTotal).toFixed(2));
      return sum + balance;
    }, 0);
  }, [schedule]);

  // Form state
  const initialDeferred =
    existing?.status === "deferred"
      ? true
      : existing?.status === "settled"
        ? false
        : false;

  const [isDeferred, setIsDeferred] = useState(initialDeferred);
  const [reason, setReason] = useState(
    existing?.status === "deferred"
      ? /month-to-month/i.test(existing.deferReason || "")
        ? "m2m"
        : /renewal/i.test(existing.deferReason || "")
          ? "renewal"
          : /(court|suing|legal)/i.test(existing.deferReason || "")
            ? "legal"
            : "other"
      : "m2m",
  );

  const [refundDateISO, setRefundDateISO] = useState(
    existing?.refundDateISO || new Date().toISOString().slice(0, 10),
  );
  const [refundMethod, setRefundMethod] = useState(existing?.refundMethod || "");
  const [refundReference, setRefundReference] = useState(existing?.refundReference || "");
  const [notes, setNotes] = useState(existing?.notes || "");

  const [damageItems, setDamageItems] = useState(
    existing?.damageItems?.length
      ? existing.damageItems
      : [{ description: "", amount: "", receipt: "" }],
  );

  // Totals (ALLOWS NEGATIVE)
  const depositsReceived =
    toMoney(deposits?.security?.received) + toMoney(deposits?.pet?.received);
  const damagesTotal = damageItems.reduce((s, it) => s + toMoney(it.amount), 0);
  const deductions = +(unpaid + damagesTotal).toFixed(2);
  const netBalance = +(depositsReceived - deductions).toFixed(2);

  // Damage item helpers
  function addDamageRow() {
    setDamageItems((arr) => [...arr, { description: "", amount: "", receipt: "" }]);
  }
  function updateDamageRow(i, patch) {
    setDamageItems((arr) => arr.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  }
  function removeDamageRow(i) {
    setDamageItems((arr) => arr.filter((_, idx) => idx !== i));
  }

  function exportCSV() {
    const lines = [];
    lines.push(["Section", "Field", "Value"].join(","));
    lines.push(
      [
        "Deposits",
        "Security Expected",
        toMoney(deposits?.security?.expected).toFixed(2),
      ].join(","),
    );
    lines.push(
      [
        "Deposits",
        "Security Received",
        toMoney(deposits?.security?.received).toFixed(2),
      ].join(","),
    );
    lines.push(
      ["Deposits", "Security Date", deposits?.security?.dateISO || ""].join(","),
    );
    lines.push(
      ["Deposits", "Pet Expected", toMoney(deposits?.pet?.expected).toFixed(2)].join(","),
    );
    lines.push(
      ["Deposits", "Pet Received", toMoney(deposits?.pet?.received).toFixed(2)].join(","),
    );
    lines.push(["Deposits", "Pet Date", deposits?.pet?.dateISO || ""].join(","));
    lines.push(["Totals", "Deposits Received", depositsReceived.toFixed(2)].join(","));
    lines.push(["Deductions", "Unpaid (auto)", unpaid.toFixed(2)].join(","));
    damageItems.forEach((it, i) => {
      const idx = i + 1;
      if (it.description || toMoney(it.amount) > 0 || it.receipt) {
        lines.push(
          [
            "Deductions",
            `Damage ${idx} - ${it.description}`,
            toMoney(it.amount).toFixed(2),
          ].join(","),
        );
        if (it.receipt)
          lines.push(
            [
              "Deductions",
              `Damage ${idx} Receipt`,
              `"${String(it.receipt).replace(/"/g, '""')}"`,
            ].join(","),
          );
      }
    });
    lines.push(["Totals", "Deductions", deductions.toFixed(2)].join(","));
    lines.push(["Totals", "NetBalance", netBalance.toFixed(2)].join(","));

    if (isDeferred) {
      const reasonLabel =
        reason === "m2m"
          ? "Month-to-month"
          : reason === "renewal"
            ? "Renewal"
            : reason === "legal"
              ? "Going to court / suing"
              : "Other";
      lines.push(["Settlement", "Status", "deferred"].join(","));
      lines.push(
        ["Settlement", "Defer Reason", `"${reasonLabel.replace(/"/g, '""')}"`].join(","),
      );
    } else {
      lines.push(["Settlement", "Status", "settled"].join(","));
      lines.push(["Settlement", "Refund Date", refundDateISO].join(","));
      lines.push(
        ["Settlement", "Method", `"${refundMethod.replace(/"/g, '""')}"`].join(","),
      );
      if (refundReference)
        lines.push(
          ["Settlement", "Reference", `"${refundReference.replace(/"/g, '""')}"`].join(
            ",",
          ),
        );
    }

    if (notes)
      lines.push(["Settlement", "Notes", `"${notes.replace(/"/g, '""')}"`].join(","));

    const blob = new Blob([lines.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "deposit_settlement.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleSave() {
    if (isDeferred) {
      if (!["m2m", "renewal", "legal", "other"].includes(reason)) {
        alert("Please select a reason for deferring.");
        return;
      }
    } else {
      if (netBalance > 0 && !refundMethod.trim()) {
        alert("Please enter a refund method (check, ACH, etc.).");
        return;
      }
    }

    for (const [i, it] of damageItems.entries()) {
      if (
        (it.description || it.amount || it.receipt) &&
        (!it.description.trim() ||
          !Number.isFinite(toMoney(it.amount)) ||
          toMoney(it.amount) < 0)
      ) {
        alert(`Damage item ${i + 1} is incomplete or invalid.`);
        return;
      }
    }

    const reasonLabel =
      reason === "m2m"
        ? "Month-to-month"
        : reason === "renewal"
          ? "Renewal"
          : reason === "legal"
            ? "Going to court / suing"
            : "Other";

    const settlement = {
      version: 1,
      createdAtISO: existing?.createdAtISO || new Date().toISOString(),
      updatedAtISO: new Date().toISOString(),
      status: isDeferred ? "deferred" : "settled",
      depositsSnapshot: {
        securityExpected: toMoney(deposits?.security?.expected),
        securityReceived: toMoney(deposits?.security?.received),
        petExpected: toMoney(deposits?.pet?.expected),
        petReceived: toMoney(deposits?.pet?.received),
      },
      unpaidAuto: +unpaid.toFixed(2),
      damageItems: damageItems
        .filter(
          (it) =>
            it.description.trim() ||
            toMoney(it.amount) > 0 ||
            (it.receipt && it.receipt.trim()),
        )
        .map((it) => ({
          description: it.description.trim(),
          amount: +toMoney(it.amount).toFixed(2),
          receipt: (it.receipt || "").trim(),
        })),
      deductions: +deductions.toFixed(2),
      refundable: +netBalance.toFixed(2), // can be negative
      refundDateISO: !isDeferred ? refundDateISO : null,
      refundMethod: !isDeferred && netBalance > 0 ? refundMethod.trim() : null,
      refundReference: !isDeferred && netBalance > 0 ? refundReference.trim() : null,
      deferReason: isDeferred ? reasonLabel : null,
      notes: notes.trim(),
    };

    onSave?.(settlement);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "grid",
        placeItems: "center",
        background: "rgba(17,24,39,0.5)",
        padding: 12,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className={styles.card}
        style={{
          width: "min(1100px, 100%)",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        <div className={styles.sectionHeader} style={{ marginTop: 0 }}>
          <h3 className={styles.sectionTitle} style={{ margin: 0 }}>
            Deposit Settlement
          </h3>
          <button
            className={buttonStyles.secondaryButton}
            onClick={onClose}
            aria-label="Close"
            title="Close"
            type="button"
          >
            Close
          </button>
        </div>

        {/* Hidden probe to measure input height */}
        <div style={{ position: "absolute", left: -99999, top: -99999 }} ref={probeRef}>
          <FloatingField type="text" label="Probe" value="" onChange={() => {}} />
        </div>

        <div className={styles.grid}>
          {/* Deposits */}
          <div className={styles.sectionBox} style={{ maxWidth: 980 }}>
            <div className={styles.sectionHeader}>
              <h4 className={styles.sectionTitle}>Deposits</h4>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.help}>
                <strong>Security:</strong> Expected $
                {toMoney(deposits?.security?.expected).toFixed(2)} · Received $
                {toMoney(deposits?.security?.received).toFixed(2)}
                {deposits?.security?.dateISO ? ` on ${deposits.security.dateISO}` : ""}
              </div>
              <div className={styles.help}>
                <strong>Pet:</strong> Expected $
                {toMoney(deposits?.pet?.expected).toFixed(2)} · Received $
                {toMoney(deposits?.pet?.received).toFixed(2)}
                {deposits?.pet?.dateISO ? ` on ${deposits.pet.dateISO}` : ""}
              </div>
              <div className={styles.totalLine} style={{ paddingTop: 0 }}>
                <span>Total deposits received</span>
                <strong>
                  $
                  {(
                    toMoney(deposits?.security?.received) +
                    toMoney(deposits?.pet?.received)
                  ).toFixed(2)}
                </strong>
              </div>
            </div>
          </div>

          {/* Deductions */}
          <div className={styles.sectionBox} style={{ maxWidth: 980 }}>
            <div className={styles.sectionHeader}>
              <h4 className={styles.sectionTitle}>Deductions</h4>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.help}>
                <strong>Unpaid rent/fees (auto):</strong> ${unpaid.toFixed(2)}
                <div className={styles.subtle}>
                  Sums positive balances across the schedule.
                </div>
              </div>

              {/* Damages card */}
              <div className={styles.fieldBox} style={{ maxWidth: "100%" }}>
                <div className={styles.fieldBoxHeader} style={{ marginBottom: 14 }}>
                  <div className={styles.fieldBoxTitle}>Damages (itemize)</div>
                </div>

                <div
                  className={styles.fieldBoxBody}
                  style={{ gap: 10, maxWidth: "100%" }}
                >
                  {damageItems.map((it, i) => (
                    <div
                      key={`damage-${i}`}
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "minmax(0,1fr) 140px minmax(0,1fr) max-content",
                        gap: 10,
                        alignItems: "end",
                        maxWidth: "100%",
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        <FloatingField
                          className={styles.noMargin} // << kill the 12px bottom margin
                          type="text"
                          label="Description"
                          value={it.description}
                          onChange={(e) =>
                            updateDamageRow(i, { description: e.target.value })
                          }
                        />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <FloatingField
                          className={styles.noMargin} // << kill the 12px bottom margin
                          type="text"
                          label="Amount"
                          value={it.amount}
                          onChange={(e) => updateDamageRow(i, { amount: e.target.value })}
                          onBlur={(e) =>
                            updateDamageRow(i, {
                              amount:
                                e.target.value === ""
                                  ? ""
                                  : toMoney(e.target.value).toFixed(2),
                            })
                          }
                          inputProps={{ inputMode: "decimal" }}
                        />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <FloatingField
                          className={styles.noMargin} // << kill the 12px bottom margin
                          type="text"
                          label="Receipt/Link/ID (optional)"
                          value={it.receipt}
                          onChange={(e) =>
                            updateDamageRow(i, { receipt: e.target.value })
                          }
                        />
                      </div>

                      {/* Remove button — match input height for identical visual rhythm */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                        }}
                      >
                        <button
                          type="button"
                          className={buttonStyles.secondaryButton}
                          onClick={() => removeDamageRow(i)}
                          title="Remove damage row"
                          style={{
                            height: inputH,
                            padding: "0 12px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            lineHeight: "normal",
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className={styles.leftActions}>
                    <button
                      type="button"
                      className={buttonStyles.secondaryButton}
                      onClick={addDamageRow}
                    >
                      + Add damage
                    </button>
                  </div>

                  <div className={styles.totalLine} style={{ maxWidth: "100%" }}>
                    <span>Damages total</span>
                    <strong>${damagesTotal.toFixed(2)}</strong>
                  </div>
                </div>
              </div>

              <div className={styles.totalLine}>
                <span>Total deductions</span>
                <strong>${deductions.toFixed(2)}</strong>
              </div>

              <div className={styles.totalLine}>
                <span>Net balance</span>
                <strong
                  title="Positive = refund owed to tenant; Negative = amount still owed by tenant"
                  style={{
                    color:
                      netBalance > 0 ? "#065f46" : netBalance < 0 ? "#7f1d1d" : "#111827",
                  }}
                >
                  ${netBalance.toFixed(2)}
                </strong>
              </div>
              <div className={styles.subtle}>
                {netBalance > 0 && "Positive: refund owed to tenant."}
                {netBalance === 0 && "Even: no money due either way."}
                {netBalance < 0 && "Negative: tenant still owes beyond deposits."}
              </div>
            </div>
          </div>

          {/* Outcome */}
          <div className={styles.sectionBox} style={{ maxWidth: 980 }}>
            <div className={styles.sectionHeader}>
              <h4 className={styles.sectionTitle}>Settlement outcome</h4>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.inline} style={{ justifyContent: "flex-start" }}>
                <span>Settled</span>
                <label className={styles.switch} title="Toggle to mark as Deferred">
                  <input
                    type="checkbox"
                    checked={isDeferred}
                    onChange={(e) => setIsDeferred(e.target.checked)}
                  />
                  <span className={styles.slider} />
                </label>
                <span>Deferred</span>
              </div>
              <div className={styles.subtle} style={{ marginTop: 2 }}>
                {isDeferred
                  ? "Use when tenant renews/goes month-to-month, legal action is pending, etc."
                  : "If the net balance is positive, record how you refunded it."}
              </div>

              {isDeferred ? (
                <div style={{ marginTop: 10 }}>
                  <FloatingField
                    as="select"
                    label="Reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    options={[
                      { value: "m2m", label: "Month-to-month" },
                      { value: "renewal", label: "Renewal" },
                      { value: "legal", label: "Going to court / suing" },
                      { value: "other", label: "Other" },
                    ]}
                  />
                </div>
              ) : (
                <div
                  className={styles.pair}
                  style={{
                    gridTemplateColumns: "1fr 1fr 1fr",
                    maxWidth: "100%",
                    marginTop: 10,
                  }}
                >
                  <FloatingField
                    type="date"
                    label="Refund date"
                    value={refundDateISO}
                    onChange={(e) => setRefundDateISO(e.target.value)}
                    inputProps={{ disabled: netBalance <= 0 }}
                  />
                  <FloatingField
                    type="text"
                    label="Refund method (check, ACH, Zelle…)"
                    value={refundMethod}
                    onChange={(e) => setRefundMethod(e.target.value)}
                    inputProps={{ disabled: netBalance <= 0 }}
                  />
                  <FloatingField
                    type="text"
                    label="Reference # (optional)"
                    value={refundReference}
                    onChange={(e) => setRefundReference(e.target.value)}
                    inputProps={{ disabled: netBalance <= 0 }}
                  />
                </div>
              )}

              <FloatingField
                as="textarea"
                rows={3}
                label="Notes (optional)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{ marginTop: 6 }}
              />
            </div>
          </div>

          {/* Actions */}
          <div
            className={styles.actions}
            style={{ justifyContent: "space-between", maxWidth: 980 }}
          >
            <div className={styles.leftActions}>
              <button
                type="button"
                className={buttonStyles.secondaryButton}
                onClick={() => window.print()}
              >
                Print Statement
              </button>
              <button
                type="button"
                className={buttonStyles.secondaryButton}
                onClick={exportCSV}
              >
                Export CSV
              </button>
            </div>
            <div className={styles.leftActions} style={{ justifyContent: "flex-end" }}>
              <button
                type="button"
                className={buttonStyles.secondaryButton}
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className={buttonStyles.primaryButton}
                onClick={handleSave}
              >
                Save Settlement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
