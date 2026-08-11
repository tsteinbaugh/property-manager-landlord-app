// src/components/financials/ChargeModal.jsx
import { useEffect, useMemo, useState } from "react";

import styles from "./PaymentModal.module.css"; // reuse modal look
import buttonStyles from "../../styles/Buttons.module.css";

export default function ChargeModal({ open, onClose, onAdd }) {
  const [amountInput, setAmountInput] = useState("");
  const [reason, setReason] = useState("");

  // Normalize user input to a number (strip $ , spaces)
  const amount = useMemo(() => {
    const cleaned = String(amountInput).replace(/[^0-9.-]/g, "");
    if (cleaned === "" || cleaned === "-" || cleaned === "." || cleaned === "-.") return NaN;
    return Number(cleaned);
  }, [amountInput]);

  const isValid = Number.isFinite(amount) && amount > 0;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function handleSubmit(e) {
    e?.preventDefault?.();
    if (!isValid) return;
    const payload = {
      amount: Number(amount.toFixed(2)),
      reason: reason.trim() || "Adjustment",
    };
    onAdd?.(payload);
    // reset + close for clear UX
    setAmountInput("");
    setReason("");
    onClose?.();
  }

  if (!open) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title}>Add Charge</h3>

        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label htmlFor="charge-amount">Amount</label>
            <input
              id="charge-amount"
              type="text"              // text lets users type $ and commas; we normalize
              inputMode="decimal"
              placeholder="e.g. 100.00"
              value={amountInput}
              onChange={(e) => setAmountInput(e.target.value)}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="charge-reason">Reason</label>
            <input
              id="charge-reason"
              type="text"
              placeholder="e.g., Unpaid electric bill"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          <div className={styles.actions}>
            <button
              type="submit"
              className={buttonStyles.primaryButton}
              disabled={!isValid}
              title={!isValid ? "Enter a positive amount" : "Add charge"}
            >
              Add
            </button>
            <button
              type="button"
              className={buttonStyles.secondaryButton}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
