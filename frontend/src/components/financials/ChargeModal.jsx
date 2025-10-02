import React, { useEffect } from "react";
import styles from "./PaymentModal.module.css"; // reuse modal look
import buttonStyles from "../../styles/Buttons.module.css";

export default function ChargeModal({ open, onClose, onAdd }) {
  const [amount, setAmount] = React.useState("");
  const [reason, setReason] = React.useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "Enter") handleSubmit(e);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line
  }, [open, amount, reason]);

  function handleSubmit(e) {
    e?.preventDefault?.();
    const a = Number(amount);
    if (!Number.isFinite(a) || a === 0) return;
    onAdd?.({ amount: a, reason: reason.trim() || "Adjustment" });
  }

  if (!open) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title}>Add Charge</h3>
        <div className={styles.row}>
          <label>Amount</label>
          <input type="number" step="0.01" value={amount} onChange={(e)=>setAmount(e.target.value)} />
        </div>
        <div className={styles.row}>
          <label>Reason</label>
          <input type="text" placeholder="e.g., Unpaid electric bill" value={reason} onChange={(e)=>setReason(e.target.value)} />
        </div>
        <div className={styles.actions}>
          <button className={buttonStyles.primaryButton} onClick={handleSubmit}>Add</button>
          <button className={buttonStyles.secondaryButton} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
