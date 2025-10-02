// property-manager-landlord-app/frontend/src/components/financials/FinancialForm.jsx
import React, { useEffect, useMemo, useState } from "react";
import FloatingField from "../ui/FloatingField";
import styles from "./FinancialForm.module.css";
import buttonStyles from "../../styles/Buttons.module.css";
import PaymentModal from "./PaymentModal";

export default function FinancialForm({
  initialValues = {},
  onCreate,            // called on submit (standalone)
  onLiveChange,        // emits cfg on every change
  onLiveValid,         // emits boolean validity on every change
  showPrimaryAction = true, // standalone: true; wizard: false
  showErrors = false,
}) {
  // --- base fields
  const [startDateISO, setStartDateISO] = useState(
    initialValues.startDateISO || new Date().toISOString().slice(0, 10)
  );
  const [months, setMonths] = useState(initialValues.months ?? 12);
  const [dueDay, setDueDay] = useState(initialValues.dueDay ?? 1);
  const [monthlyRent, setMonthlyRent] = useState(initialValues.monthlyRent ?? 0);
  const [petRentEnabled, setPetRentEnabled] = useState(!!initialValues.petRentEnabled);
  const [petRentAmount, setPetRentAmount] = useState(initialValues.petRentAmount ?? 0);
  const [securityDeposit, setSecurityDeposit] = useState(initialValues.securityDeposit ?? 0);
  const [firstMonthPrepaid, setFirstMonthPrepaid] = useState(!!initialValues.firstMonthPrepaid);
  const [lastMonthPrepaid, setLastMonthPrepaid] = useState(!!initialValues.lastMonthPrepaid);
  const [graceDays, setGraceDays] = useState(initialValues.graceDays ?? 7);
  const [lateFeeType, setLateFeeType] = useState(initialValues.lateFeePolicy?.type || "flat");
  const [lateFeeValue, setLateFeeValue] = useState(initialValues.lateFeePolicy?.value ?? 50);
  const [otherRecurring, setOtherRecurring] = useState(initialValues.otherRecurring || []);

  // --- captured payments (modals)
  const [firstMonthPayment, setFirstMonthPayment] = useState(initialValues.firstMonthPayment || null);
  const [lastMonthPayment, setLastMonthPayment] = useState(initialValues.lastMonthPayment || null);
  const [securityDepositPayment, setSecurityDepositPayment] = useState(initialValues.securityDepositPayment || null);

  // modals
  const [openFirstModal, setOpenFirstModal] = useState(false);
  const [openLastModal, setOpenLastModal] = useState(false);
  const [openDepModal, setOpenDepModal] = useState(false);

  // hydrate when initial changes
  useEffect(() => {
    if (!initialValues) return;
    if (initialValues.startDateISO) setStartDateISO(initialValues.startDateISO);
    if (initialValues.months != null) setMonths(initialValues.months);
    if (initialValues.dueDay != null) setDueDay(initialValues.dueDay);
    if (initialValues.monthlyRent != null) setMonthlyRent(initialValues.monthlyRent);
    if (initialValues.petRentEnabled != null) setPetRentEnabled(!!initialValues.petRentEnabled);
    if (initialValues.petRentAmount != null) setPetRentAmount(initialValues.petRentAmount);
    if (initialValues.securityDeposit != null) setSecurityDeposit(initialValues.securityDeposit);
    if (initialValues.firstMonthPrepaid != null) setFirstMonthPrepaid(!!initialValues.firstMonthPrepaid);
    if (initialValues.lastMonthPrepaid != null) setLastMonthPrepaid(!!initialValues.lastMonthPrepaid);
    if (initialValues.graceDays != null) setGraceDays(initialValues.graceDays);
    if (initialValues.lateFeePolicy?.type) setLateFeeType(initialValues.lateFeePolicy.type);
    if (initialValues.lateFeePolicy?.value != null) setLateFeeValue(initialValues.lateFeePolicy.value);
    if (Array.isArray(initialValues.otherRecurring)) setOtherRecurring(initialValues.otherRecurring);
    if (initialValues.firstMonthPayment) setFirstMonthPayment(initialValues.firstMonthPayment);
    if (initialValues.lastMonthPayment) setLastMonthPayment(initialValues.lastMonthPayment);
    if (initialValues.securityDepositPayment) setSecurityDepositPayment(initialValues.securityDepositPayment);
  }, [initialValues]);

  const cfg = useMemo(
    () => ({
      startDateISO,
      months,
      dueDay,
      monthlyRent,
      petRentEnabled,
      petRentAmount,
      securityDeposit,
      firstMonthPrepaid,
      lastMonthPrepaid,
      graceDays,
      lateFeePolicy: { type: lateFeeType, value: lateFeeValue },
      otherRecurring,
      // captured payment metadata:
      firstMonthPayment,
      lastMonthPayment,
      securityDepositPayment,
    }),
    [
      startDateISO,
      months,
      dueDay,
      monthlyRent,
      petRentEnabled,
      petRentAmount,
      securityDeposit,
      firstMonthPrepaid,
      lastMonthPrepaid,
      graceDays,
      lateFeeType,
      lateFeeValue,
      otherRecurring,
      firstMonthPayment,
      lastMonthPayment,
      securityDepositPayment,
    ]
  );

  // validation
  const errors = useMemo(() => {
    const e = {};
    if (!cfg.startDateISO) e.startDateISO = "Lease Start is required.";
    if (!(Number(cfg.months) >= 1)) e.months = "Duration must be at least 1 month.";
    if (!(Number(cfg.dueDay) >= 1 && Number(cfg.dueDay) <= 31))
      e.dueDay = "Rent due day must be 1–31.";
    if (!(Number(cfg.monthlyRent) > 0)) e.monthlyRent = "Monthly rent is required.";
    if (cfg.petRentEnabled && Number(cfg.petRentAmount) < 0)
      e.petRentAmount = "Pet rent cannot be negative.";
    if (!(Number(cfg.graceDays) >= 0)) e.graceDays = "Grace days must be 0 or more.";
    if (!(Number(cfg.lateFeePolicy?.value) >= 0))
      e.lateFeeValue = "Late fee must be 0 or more.";
    // If they claim prepaid or deposit > 0, encourage capturing a payment (not strictly required)
    return e;
  }, [cfg]);

  const isValid = Object.keys(errors).length === 0;

  useEffect(() => {
    onLiveChange?.(cfg);
    onLiveValid?.(isValid);
  }, [cfg, isValid, onLiveChange, onLiveValid]);

  function updateRecurring(idx, val) {
    setOtherRecurring((prev) => prev.map((c, i) => (i === idx ? val : c)));
  }
  function removeRecurring(idx) {
    setOtherRecurring((prev) => prev.filter((_, i) => i !== idx));
  }

  function handleSubmit(e) {
    e?.preventDefault?.();
    if (!isValid) return;
    onCreate?.(cfg);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      onKeyDown={(e) => {
        if (e.key !== "Enter") return;
      
        // If any payment modal is open, let the modal's handler own Enter
        if (openFirstModal || openLastModal || openDepModal) return;
      
        // Don’t submit when typing inside a textarea or when focused on a non-submit button
        const el = e.target;
        const tag = (el?.tagName || "").toLowerCase();
        const type = (el?.getAttribute?.("type") || "").toLowerCase();
        if (tag === "textarea") return;
        if (tag === "button" && type !== "submit") return;
      
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <div className={styles.card}>
        <h3>Financial Info</h3>

        {showErrors && !isValid && (
          <div className={styles.error}>
            <strong>Please fix the following:</strong>
            <ul>
              {Object.values(errors).map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.grid}>
          <FloatingField
            type="date"
            label="Lease Start"
            value={startDateISO}
            onChange={(e) => setStartDateISO(e.target.value)}
            required
            error={showErrors ? errors.startDateISO : ""}
          />

          <FloatingField
            type="number"
            label="Duration (months)"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value || 1))}
            required
            inputProps={{ min: 1 }}
            error={showErrors ? errors.months : ""}
          />

          <FloatingField
            type="number"
            label="Rent Due Day (1–31)"
            value={dueDay}
            onChange={(e) => setDueDay(Number(e.target.value || 1))}
            required
            inputProps={{ min: 1, max: 31 }}
            error={showErrors ? errors.dueDay : ""}
          />

          <FloatingField
            type="number"
            label="Monthly Rent"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(Number(e.target.value || 0))}
            required
            inputProps={{ step: "0.01" }}
            error={showErrors ? errors.monthlyRent : ""}
          />

          {/* Pet rent */}
          <div className={styles.inline}>
            <label className={styles.chk}>
              <input
                type="checkbox"
                checked={petRentEnabled}
                onChange={(e) => setPetRentEnabled(e.target.checked)}
              />
              Pet Rent
            </label>
            {petRentEnabled && (
              <FloatingField
                type="number"
                label="Pet Rent Amount"
                value={petRentAmount}
                onChange={(e) => setPetRentAmount(Number(e.target.value || 0))}
                inputProps={{ step: "0.01" }}
                error={showErrors ? errors.petRentAmount : ""}
              />
            )}
          </div>

          {/* Security deposit (with optional payment capture) */}
          <div className={styles.inline}>
            <FloatingField
              type="number"
              label="Security Deposit"
              value={securityDeposit}
              onChange={(e) => {
                const val = Number(e.target.value || 0);
                setSecurityDeposit(val);
                // Do NOT open here while typing
              }}
              onBlur={(e) => {
                const val = Number(e.target.value || 0);
                if (val > 0 && !securityDepositPayment) {
                  setOpenDepModal(true);
                }
              }}
              inputProps={{ step: "0.01", min: 0 }}
            />
            {securityDepositPayment && (
              <button
                type="button"
                className={buttonStyles.secondaryButton}
                onClick={() => setOpenDepModal(true)}
              >
                Edit Deposit Payment
              </button>
            )}
          </div>
          {securityDepositPayment && (
            <div className={styles.help}>
              Deposit payment: ${Number(securityDepositPayment.amount).toFixed(2)} on {securityDepositPayment.dateISO}
              {securityDepositPayment.method ? ` · ${securityDepositPayment.method}` : ""}
              {securityDepositPayment.note ? ` — ${securityDepositPayment.note}` : ""}
            </div>
          )}

          {/* Prepaid toggles + capture */}
          <div className={styles.inline}>
            <label className={styles.chk}>
              <input
                type="checkbox"
                checked={firstMonthPrepaid}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setFirstMonthPrepaid(checked);
                  if (checked) setOpenFirstModal(true);
                  else setFirstMonthPayment(null);
                }}
              />
              First Month Prepaid
            </label>

            <label className={styles.chk}>
              <input
                type="checkbox"
                checked={lastMonthPrepaid}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setLastMonthPrepaid(checked);
                  if (checked) setOpenLastModal(true);
                  else setLastMonthPayment(null);
                }}
              />
              Last Month Prepaid
            </label>
          </div>

          {firstMonthPayment && (
            <div className={styles.help}>
              First month payment: ${firstMonthPayment.amount.toFixed(2)} on {firstMonthPayment.dateISO}
              {firstMonthPayment.method ? ` · ${firstMonthPayment.method}` : ""}
              {firstMonthPayment.note ? ` — ${firstMonthPayment.note}` : ""}
            </div>
          )}
          {lastMonthPayment && (
            <div className={styles.help}>
              Last month payment: ${lastMonthPayment.amount.toFixed(2)} on {lastMonthPayment.dateISO}
              {lastMonthPayment.method ? ` · ${lastMonthPayment.method}` : ""}
              {lastMonthPayment.note ? ` — ${lastMonthPayment.note}` : ""}
            </div>
          )}

          <FloatingField
            type="number"
            label="Grace Days"
            value={graceDays}
            onChange={(e) => setGraceDays(Number(e.target.value || 0))}
            inputProps={{ min: 0 }}
            error={showErrors ? errors.graceDays : ""}
          />

          <div className={styles.inline}>
            <FloatingField
              as="select"
              label="Late Fee Type"
              value={lateFeeType}
              onChange={(e) => setLateFeeType(e.target.value)}
              options={[
                { value: "flat", label: "Flat $" },
                { value: "percent", label: "% of Rent" },
              ]}
            />
            <FloatingField
              type="number"
              label="Late Fee Value"
              value={lateFeeValue}
              onChange={(e) => setLateFeeValue(Number(e.target.value || 0))}
              inputProps={{ step: "0.01" }}
              error={showErrors ? errors.lateFeeValue : ""}
            />
          </div>

          {/* Other recurring charges (monthly) */}
          <div>
            {!!otherRecurring.length &&
              otherRecurring.map((c, idx) => (
                <div key={idx} className={styles.inline}>
                  <FloatingField
                    label="Charge name (e.g., Water)"
                    value={c.name}
                    onChange={(e) => updateRecurring(idx, { ...c, name: e.target.value })}
                  />
                  <FloatingField
                    type="number"
                    label="Amount"
                    value={c.amount}
                    onChange={(e) =>
                      updateRecurring(idx, { ...c, amount: Number(e.target.value || 0) })
                    }
                    inputProps={{ step: "0.01" }}
                  />
                  <button
                    type="button"
                    onClick={() => removeRecurring(idx)}
                    className={buttonStyles.secondaryButton}
                  >
                    Remove
                  </button>
                </div>
              ))}
            <button
              type="button"
              onClick={() => setOtherRecurring([...otherRecurring, { name: "", amount: 0 }])}
              className={buttonStyles.secondaryButton}
            >
              + Add charge
            </button>
          </div>
        </div>
      </div>

      {/* SINGLE save button (standalone only). Wizard passes showPrimaryAction={false} */}
      {showPrimaryAction && (
        <div className={styles.actions}>
          <button type="submit" className={buttonStyles.primaryButton}>
            Save Financial Info
          </button>
        </div>
      )}

      {/* Payment modals */}
      <PaymentModal
        open={openDepModal}
        title="Record Security Deposit Payment"
        initial={{
          amount: securityDeposit || "",
          dateISO: new Date().toISOString().slice(0, 10),
          method: "",
          note: "",
        }}
        onAddPayment={(p) => setSecurityDepositPayment(p)}
        onClose={() => setOpenDepModal(false)}
      />

      <PaymentModal
        open={openFirstModal}
        title="Record First Month Payment"
        initial={{
          amount: (Number(monthlyRent) + (petRentEnabled ? Number(petRentAmount) : 0)) || "",
          dateISO: new Date().toISOString().slice(0, 10),
          method: "",
          note: "",
        }}
        onAddPayment={(p) => setFirstMonthPayment(p)}
        onClose={() => setOpenFirstModal(false)}
      />

      <PaymentModal
        open={openLastModal}
        title="Record Last Month Payment"
        initial={{
          amount: (Number(monthlyRent) + (petRentEnabled ? Number(petRentAmount) : 0)) || "",
          dateISO: new Date().toISOString().slice(0, 10),
          method: "",
          note: "",
        }}
        onAddPayment={(p) => setLastMonthPayment(p)}
        onClose={() => setOpenLastModal(false)}
      />
    </form>
  );
}
