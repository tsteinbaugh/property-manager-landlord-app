// property-manager-landlord-app/frontend/src/components/financials/NoticeModal.jsx
import { useMemo, useState } from "react";

import modalStyles from "./PaymentModal.module.css"; // backdrop, modal, actions, field, subtle, grid2, sectionTitle, card
import buttonStyles from "../../styles/Buttons.module.css";
import FloatingField from "../ui/FloatingField";

function atStart(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
function addDays(dateOrISO, n) {
  const d = typeof dateOrISO === "string" ? new Date(dateOrISO) : new Date(dateOrISO);
  const out = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  out.setDate(out.getDate() + Number(n || 0));
  return out.toISOString().slice(0, 10);
}
function isoToday() {
  return new Date().toISOString().slice(0, 10);
}

const METHOD_OPTIONS = [
  { value: "certified_mail", label: "Certified mail" },
  { value: "posting", label: "Posting on property" },
  { value: "email", label: "Email" },
];

export default function NoticeModal({
  open,
  onClose,
  onSave,
  value, // existing notice (if any)
  dueDateISO, // for gating: only after grace
  graceDays = 0,
}) {
  const [postedOnISO, setPostedOnISO] = useState(value?.postedOnISO || isoToday());
  const [days, setDays] = useState(String(value?.days ?? 10));
  const [methods, setMethods] = useState(
    value?.methods?.length
      ? value.methods
      : [{ type: "certified_mail", dateISO: isoToday(), proofName: "", proofURL: "" }],
  );

  // gating: grace starts on due + graceDays
  const graceStartISO = useMemo(() => {
    if (!dueDateISO) return null;
    return addDays(dueDateISO, graceDays);
  }, [dueDateISO, graceDays]);

  const isAfterGrace = useMemo(() => {
    if (!graceStartISO) return true; // if unknown, don't block
    const today = atStart(new Date());
    const graceStart = atStart(new Date(graceStartISO));
    return today.getTime() >= graceStart.getTime();
  }, [graceStartISO]);

  const startISO = useMemo(() => {
    const dates = [postedOnISO, ...methods.map((m) => m.dateISO || "").filter(Boolean)];
    if (!dates.length) return "";
    dates.sort((a, b) => (a || "").localeCompare(b || ""));
    return dates[dates.length - 1] || "";
  }, [postedOnISO, methods]);

  const endISO = useMemo(() => {
    if (!startISO) return "";
    const n = Math.max(0, Number(days || 0));
    return addDays(startISO, n);
  }, [startISO, days]);

  const hasCertified = methods.some((m) => m.type === "certified_mail");

  function updateMethod(i, patch) {
    setMethods((prev) => prev.map((m, idx) => (idx === i ? { ...m, ...patch } : m)));
  }

  function addMethod() {
    setMethods((prev) => [
      ...prev,
      { type: "certified_mail", dateISO: isoToday(), proofName: "", proofURL: "" },
    ]);
  }

  function removeMethod(i) {
    setMethods((prev) => prev.filter((_, idx) => idx !== i));
  }

  function handleSave() {
    const payload = {
      postedOnISO: postedOnISO || "",
      days: Number(days) || 10,
      methods: methods.map((m) => ({
        type: m.type || "",
        dateISO: m.dateISO || "",
        proofName: m.proofName || "",
        proofURL: m.proofURL || "",
      })),
      startISO: startISO || null,
      endISO: endISO || null,
    };
    onSave(payload);
  }

  if (!open) return null;

  return (
    <div className={modalStyles.backdrop} onClick={onClose}>
      <div className={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
        <h3>Record Notice Period</h3>

        {!isAfterGrace && (
          <div className={modalStyles.error} style={{ marginBottom: 12 }}>
            You can only start a notice <strong>after</strong> grace begins. Grace starts
            on <strong>{graceStartISO}</strong>.
          </div>
        )}

        {!hasCertified && (
          <div className={modalStyles.warning} style={{ marginBottom: 12 }}>
            At minimum, tenants must be notified via <strong>certified mail</strong>. Add
            a certified mail method before saving.
          </div>
        )}

        {/* Section: Notice period details */}
        <div className={modalStyles.grid2}>
          <FloatingField
            label="Notice posted date"
            type="date"
            value={postedOnISO}
            onChange={(e) => setPostedOnISO(e.target.value)}
          />
          <FloatingField
            label="Notice period (days)"
            type="number"
            min={1}
            step={1}
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </div>

        {/* Divider / section header */}
        <hr style={{ margin: "16px 0", border: 0, borderTop: "1px solid #eee" }} />
        <div className={modalStyles.sectionTitle}>Notice methods &amp; proofs</div>

        {/* Methods list */}
        <div style={{ display: "grid", gap: 8 }}>
          {methods.map((m, idx) => (
            <div key={idx} className={modalStyles.card}>
              <div className={modalStyles.grid2}>
                <FloatingField
                  label="Method"
                  value={m.type}
                  onChange={(e) => updateMethod(idx, { type: e.target.value })}
                  options={METHOD_OPTIONS}
                />
                <FloatingField
                  label="Date sent/posted"
                  type="date"
                  value={m.dateISO || ""}
                  onChange={(e) => updateMethod(idx, { dateISO: e.target.value })}
                />
              </div>

              <div className={modalStyles.grid2} style={{ marginTop: 8 }}>
                <FloatingField
                  label="Proof name (receipt/photo)"
                  type="text"
                  placeholder="e.g., USPS_Receipt_9405…pdf"
                  value={m.proofName || ""}
                  onChange={(e) => updateMethod(idx, { proofName: e.target.value })}
                />
                <FloatingField
                  label="Proof URL (optional)"
                  type="url"
                  placeholder="https://…"
                  value={m.proofURL || ""}
                  onChange={(e) => updateMethod(idx, { proofURL: e.target.value })}
                />
              </div>

              {methods.length > 1 && (
                <div style={{ marginTop: 8, textAlign: "right" }}>
                  <button
                    className={buttonStyles.linkButton || buttonStyles.secondaryButton}
                    onClick={() => removeMethod(idx)}
                  >
                    Remove method
                  </button>
                </div>
              )}
            </div>
          ))}
          <div>
            <button className={buttonStyles.secondaryButton} onClick={addMethod}>
              + Add method
            </button>
          </div>
        </div>

        {/* Computed dates — bottom */}
        <hr style={{ margin: "16px 0", border: 0, borderTop: "1px solid #eee" }} />
        <div className={modalStyles.grid2}>
          <div className={modalStyles.field}>
            <div className={modalStyles.subtle}>Computed notice start</div>
            <div>
              <strong>{startISO || "(set posted/method dates)"}</strong>
            </div>
          </div>
          <div className={modalStyles.field}>
            <div className={modalStyles.subtle}>Computed notice finish</div>
            <div>
              <strong>{endISO || "(set start & days)"}</strong>
            </div>
          </div>
        </div>

        <div className={modalStyles.actions} style={{ marginTop: 16 }}>
          <button className={buttonStyles.secondaryButton} onClick={onClose}>
            Cancel
          </button>
          <button
            className={buttonStyles.primaryButton}
            onClick={handleSave}
            disabled={!isAfterGrace || !hasCertified}
            title={
              !isAfterGrace
                ? "You must be past grace to start notice"
                : !hasCertified
                  ? "Certified mail is required"
                  : ""
            }
          >
            Save Notice
          </button>
        </div>
      </div>
    </div>
  );
}
