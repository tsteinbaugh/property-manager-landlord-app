import React, { useEffect, useRef, useState } from "react";
import ModalRoot from "../../ui/ModalRoot";
import FloatingField from "../../ui/FloatingField";
import buttonStyles from "../../../styles/Buttons.module.css";

/**
 * Add-only payment modal (shared by form + table).
 * - Auto-fills today's date
 * - If `expectedAmount` provided, auto-fills Amount on open
 *   (unless a non-empty initial.amount is provided)
 */
export default function PaymentModal({
  open,
  title = "Add Payment",
  initial = { amount: "", dateISO: "", method: "", note: "" },
  expectedAmount, // number (optional): pre-fill Amount
  onAddPayment,
  onClose,
}) {
  const todayISO = new Date().toISOString().slice(0, 10);

  const [amount, setAmount] = useState(initial.amount ?? "");
  const [dateISO, setDateISO] = useState(initial.dateISO || todayISO);
  const [method, setMethod] = useState(initial.method ?? "");
  const [note, setNote] = useState(initial.note ?? "");
  const [submitted, setSubmitted] = useState(false);

  const firstFieldRef = useRef(null);
  const prevOpen = useRef(open);

  useEffect(() => {
    // when modal just opened
    if (!prevOpen.current && open) {
      const hasInitial = initial && String(initial.amount ?? "").trim() !== "";
      const amtToSet = hasInitial
        ? String(initial.amount)
        : Number.isFinite(Number(expectedAmount))
          ? String(Number(expectedAmount))
          : "";
      setAmount(amtToSet);
      setDateISO(initial.dateISO || todayISO);
      setMethod(initial.method || "");
      setNote(initial.note || "");
      setSubmitted(false);
      setTimeout(() => firstFieldRef.current?.focus(), 0);
    }

    // when expectedAmount changes while open and no user-typed amount yet
    if (open && !amount && Number.isFinite(Number(expectedAmount))) {
      setAmount(String(Number(expectedAmount)));
    }

    prevOpen.current = open;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, expectedAmount]);

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

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      const tag = e.target?.tagName?.toLowerCase();
      if (tag !== "textarea") {
        e.preventDefault();
        e.stopPropagation();
        handleSave();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      onClose?.();
    } else {
      e.stopPropagation();
    }
  }

  if (!open) return null;

  return (
    <ModalRoot isOpen={open} onClose={onClose}>
      <div
        data-modal="true"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        style={{ outline: "none" }}
      >
        <h2 style={{ marginTop: 0, marginBottom: 12 }}>{title}</h2>

        <div style={{ display: "grid", gap: 8 }}>
          <FloatingField
            type="number"
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            inputProps={{ step: "0.01", min: 0, ref: firstFieldRef }}
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

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            marginTop: 12,
          }}
        >
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
            Save
          </button>
        </div>
      </div>
    </ModalRoot>
  );
}
