import { useEffect, useRef, useState } from "react";

import buttonStyles from "../../styles/Buttons.module.css";

export default function ManagePaymentsModal({
  open,
  title = "Manage Payments",
  payments = [],
  onClose,
  onAdd,
  onUpdate, // (pIndex, payment)
  onDelete, // (pIndex)
  expectedAmount, // <— NEW: optional prefill for the inner "Add Payment" modal
}) {
  const containerRef = useRef(null);
  const [addOpen, setAddOpen] = useState(false);
  const [editIdx, setEditIdx] = useState(null);

  // block bubbling so parent forms don't intercept keys
  function handleKeyDown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      // close nested modals first
      if (addOpen) setAddOpen(false);
      else if (editIdx !== null) setEditIdx(null);
      else onClose?.();
      return;
    }
    // prevent Enter from doing anything at the table level
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.stopPropagation();
    }
  }

  useEffect(() => {
    if (!open) {
      setAddOpen(false);
      setEditIdx(null);
    }
  }, [open]);

  if (!open) return null;

  return (
    <ModalRoot isOpen={open} onClose={onClose}>
      <div
        data-modal="true"
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        style={{ outline: "none", maxWidth: 720 }}
      >
        <h2 style={{ marginTop: 0, marginBottom: 12 }}>{title}</h2>

        {/* Payments list */}
        <div style={{ display: "grid", gap: 8 }}>
          {payments.length === 0 ? (
            <div style={{ color: "#6b7280" }}>No payments recorded for this period.</div>
          ) : (
            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 2fr auto",
                  gap: 0,
                  background: "#f8fafc",
                  padding: "8px 10px",
                  fontWeight: 600,
                  fontSize: 14,
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <div>Amount</div>
                <div>Date</div>
                <div>Method</div>
                <div>Note</div>
                <div style={{ textAlign: "right" }}>Actions</div>
              </div>

              {payments.map((p, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 2fr auto",
                    gap: 0,
                    padding: "8px 10px",
                    borderBottom: "1px solid #f1f5f9",
                    alignItems: "center",
                  }}
                >
                  <div>${Number(p.amount).toFixed(2)}</div>
                  <div>{p.dateISO || ""}</div>
                  <div>{p.method || ""}</div>
                  <div style={{ color: "#374151" }}>{p.note || ""}</div>
                  <div
                    style={{
                      textAlign: "right",
                      display: "flex",
                      gap: 8,
                      justifyContent: "flex-end",
                    }}
                  >
                    <button
                      type="button"
                      className={buttonStyles.secondaryButton}
                      onClick={() => setEditIdx(idx)}
                      title="Edit this payment"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className={
                        buttonStyles.dangerButton || buttonStyles.secondaryButton
                      }
                      onClick={() => onDelete?.(idx)}
                      title="Delete this payment"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 8,
            marginTop: 12,
            flexWrap: "wrap",
          }}
        >
          <div>
            <button
              type="button"
              className={buttonStyles.secondaryButton}
              onClick={() => setAddOpen(true)}
            >
              + Add Payment
            </button>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <button
              type="button"
              className={buttonStyles.secondaryButton}
              onClick={onClose}
            >
              Done
            </button>
          </div>
        </div>

        {/* Nested: Add (prefill with expectedAmount if provided) */}
        <PaymentModal
          open={addOpen}
          title="Add Payment"
          expectedAmount={expectedAmount}
          onClose={() => setAddOpen(false)}
          onAddPayment={(p) => {
            onAdd?.(p);
            setAddOpen(false);
          }}
        />

        {/* Nested: Edit */}
        {editIdx !== null && (
          <PaymentModal
            open={editIdx !== null}
            title="Edit Payment"
            initial={{
              amount: payments[editIdx]?.amount ?? "",
              dateISO: payments[editIdx]?.dateISO ?? "",
              method: payments[editIdx]?.method ?? "",
              note: payments[editIdx]?.note ?? "",
            }}
            onClose={() => setEditIdx(null)}
            onAddPayment={(p) => {
              onUpdate?.(editIdx, p);
              setEditIdx(null);
            }}
          />
        )}
      </div>
    </ModalRoot>
  );
}
