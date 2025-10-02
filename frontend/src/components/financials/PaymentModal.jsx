import React, { useEffect, useRef, useState } from "react";
import ModalRoot from "../ui/ModalRoot";
import FloatingField from "../ui/FloatingField";
import buttonStyles from "../../styles/Buttons.module.css";

/**
 * Modal for recording a payment.
 * NOTE: No <form> here — we prevent submit bubbling to parent pages.
 */
export default function PaymentModal({
  open,
  title = "Add Payment",
  initial = { amount: "", dateISO: "", method: "", note: "" },
  onAddPayment,
  onClose,
}) {
  const [amount, setAmount] = useState(initial.amount ?? "");
  const [dateISO, setDateISO] = useState(initial.dateISO ?? "");
  const [method, setMethod] = useState(initial.method ?? "");
  const [note, setNote] = useState(initial.note ?? "");
  const [submitted, setSubmitted] = useState(false);

  const containerRef = useRef(null);

  // (Re)seed when opened
  useEffect(() => {
    if (!open) return;
    setAmount(initial.amount ?? "");
    setDateISO(initial.dateISO ?? "");
    setMethod(initial.method ?? "");
    setNote(initial.note ?? "");
    setSubmitted(false);
  }, [open, initial]);

  // Trap Enter/Tab inside the modal; never let key events bubble to parent pages
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      // Never let this bubble up to parent pages
      e.stopPropagation();

      // Ignore composition events (IME)
      if (e.isComposing || e.keyCode === 229) return;

      if (e.key === "Enter") {
        e.preventDefault();
        handleSave();
      }
    };

    // Listen at window to catch Enter regardless of which child has focus
    window.addEventListener("keydown", onKeyDown, true); // capture phase
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, [open, amount, dateISO, method, note]);

  function handleSave() {
    setSubmitted(true);
    const amt = Number(amount);
    if (!Number.isFinite(amt) || amt <= 0) return;
    if (!dateISO) return;

    onAddPayment?.({
      amount: amt,
      dateISO,
      method: (method || "").trim(),
      note: (note || "").trim(),
    });
    onClose?.();
  }

  if (!open) return null;

  return (
    <ModalRoot isOpen={open} onClose={onClose}>
      <div
        ref={containerRef}
        // Don’t let *any* click/keyboard bubble to the parent
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <h2 style={{ marginTop: 0, marginBottom: 12 }}>{title}</h2>

        <div style={{ display: "grid", gap: 8 }}>
          <FloatingField
            type="number"
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            inputProps={{ step: "0.01", min: 0 }}
            required
          />
          <FloatingField
            type="date"
            label="Payment Date"
            value={dateISO}
            onChange={(e) => setDateISO(e.target.value)}
            required
          />
          <FloatingField
            label="Method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            placeholder="(e.g., ACH, Check #1234)"
          />
          <FloatingField
            label="Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          {submitted && (!Number(amount) || !dateISO) && (
            <div style={{ color: "#b91c1c", fontSize: 14 }}>
              Please enter a positive amount and a payment date.
            </div>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 12 }}>
          <button type="button" className={buttonStyles.secondaryButton} onClick={onClose}>
            Cancel
          </button>
          <button type="button" className={buttonStyles.primaryButton} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </ModalRoot>
  );
}
