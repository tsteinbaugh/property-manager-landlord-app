import React, { useEffect, useMemo, useState } from "react";
import FloatingField from "../ui/FloatingField";
import styles from "./FinancialForm.module.css";
import buttonStyles from "../../styles/Buttons.module.css";
import PaymentModal from "./PaymentModal";
import ManagePaymentsModal from "./ManagePaymentsModal";

const toNum = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : 0; };
const clampInt = (v, min = -Infinity, max = Infinity, fallback = "") => {
  if (v === "" || v === null || v === undefined) return "";
  const n = parseInt(v, 10); if (!Number.isFinite(n)) return fallback;
  return String(Math.max(min, Math.min(max, n)));
};
const moneyOnBlur = (s) => { if (s === "" || s === null || s === undefined) return ""; const n = toNum(s); return n.toFixed(2); };
const sumPayments = (arr) => (arr || []).reduce((s, p) => s + (Number(p.amount) || 0), 0);

export default function FinancialForm({
  initialValues = {},
  onCreate,
  onLiveChange,
  onLiveValid,
  showPrimaryAction = true,
  showErrors = false,
}) {
  /* ---------- fields (strings for stable typing) ---------- */
  const [startDateISO, setStartDateISO] = useState(initialValues.startDateISO || new Date().toISOString().slice(0, 10));
  const [monthsStr, setMonthsStr] = useState(initialValues.months != null ? String(initialValues.months) : "12");
  const [dueDayStr, setDueDayStr] = useState(initialValues.dueDay != null ? String(initialValues.dueDay) : "1");
  const [monthlyRentStr, setMonthlyRentStr] = useState(initialValues.monthlyRent != null ? String(initialValues.monthlyRent) : "0.00");

  const [petsEnabled, setPetsEnabled] = useState(!!initialValues.petRentEnabled);
  const [petRentAmountStr, setPetRentAmountStr] = useState(initialValues.petRentAmount != null ? String(initialValues.petRentAmount) : "0.00");

  const [securityDepositStr, setSecurityDepositStr] = useState(initialValues.securityDeposit != null ? String(initialValues.securityDeposit) : "0.00");
  const [secDepEqualsRent, setSecDepEqualsRent] = useState(!!initialValues.secDepEqualsRent);
  const [petDepositStr, setPetDepositStr] = useState(initialValues.petDeposit != null ? String(initialValues.petDeposit) : "0.00");

  const [securityDepositPayments, setSecurityDepositPayments] = useState(
    Array.isArray(initialValues.securityDepositPayments)
      ? initialValues.securityDepositPayments.map((p) => ({ ...p, amount: Number(p.amount) || 0 }))
      : (initialValues.securityDepositPayment ? [{ ...initialValues.securityDepositPayment, amount: Number(initialValues.securityDepositPayment.amount) || 0 }] : [])
  );
  const [petDepositPayments, setPetDepositPayments] = useState(
    Array.isArray(initialValues.petDepositPayments)
      ? initialValues.petDepositPayments.map((p) => ({ ...p, amount: Number(p.amount) || 0 }))
      : (initialValues.petDepositPayment ? [{ ...initialValues.petDepositPayment, amount: Number(initialValues.petDepositPayment.amount) || 0 }] : [])
  );

  const [firstMonthPrepaid, setFirstMonthPrepaid] = useState(!!initialValues.firstMonthPrepaid);
  const [lastMonthPrepaid, setLastMonthPrepaid] = useState(!!initialValues.lastMonthPrepaid);
  const [firstMonthPayments, setFirstMonthPayments] = useState(
    Array.isArray(initialValues.firstMonthPayments) ? initialValues.firstMonthPayments.map((p) => ({ ...p, amount: Number(p.amount) || 0 }))
      : (initialValues.firstMonthPayment ? [{ ...initialValues.firstMonthPayment, amount: Number(initialValues.firstMonthPayment.amount) || 0 }] : [])
  );
  const [lastMonthPayments, setLastMonthPayments] = useState(
    Array.isArray(initialValues.lastMonthPayments) ? initialValues.lastMonthPayments.map((p) => ({ ...p, amount: Number(p.amount) || 0 }))
      : (initialValues.lastMonthPayment ? [{ ...initialValues.lastMonthPayment, amount: Number(initialValues.lastMonthPayment.amount) || 0 }] : [])
  );

  const [graceDaysStr, setGraceDaysStr] = useState(initialValues.graceDays != null ? String(initialValues.graceDays) : "7");
  const [lateFeeType, setLateFeeType] = useState(initialValues.lateFeePolicy?.type || "flat");
  const [lateFeeValueStr, setLateFeeValueStr] = useState(initialValues.lateFeePolicy?.value != null ? String(initialValues.lateFeePolicy.value) : "50.00");

  const [otherRecurring, setOtherRecurring] = useState(initialValues.otherRecurring || []);

  const [secDueSigning, setSecDueSigning] = useState(!!initialValues.secDueSigning);
  const [petDepDueSigning, setPetDepDueSigning] = useState(!!initialValues.petDepDueSigning);
  const [firstDueSigning, setFirstDueSigning] = useState(!!initialValues.firstDueSigning);
  const [lastDueSigning, setLastDueSigning] = useState(!!initialValues.lastDueSigning);
  const [signingPayment, setSigningPayment] = useState(initialValues.signingPayment || null);

  const [openQuickAdd, setOpenQuickAdd] = useState(null); // 'sec'|'pet'|'first'|'last'|'signing'
  const [openManageKey, setOpenManageKey] = useState(null);
  const modalOpen = !!(openQuickAdd || openManageKey);

  /* derived numbers */
  const months = useMemo(() => toNum(monthsStr), [monthsStr]);
  const dueDay = useMemo(() => toNum(dueDayStr), [dueDayStr]);
  const monthlyRent = useMemo(() => toNum(monthlyRentStr), [monthlyRentStr]);
  const petRentAmount = useMemo(() => toNum(petRentAmountStr), [petRentAmountStr]);
  const securityDeposit = useMemo(() => toNum(securityDepositStr), [securityDepositStr]);
  const petDeposit = useMemo(() => toNum(petDepositStr), [petDepositStr]);
  const graceDays = useMemo(() => toNum(graceDaysStr), [graceDaysStr]);
  const lateFeeValue = useMemo(() => toNum(lateFeeValueStr), [lateFeeValueStr]);

  const firstMonthDue = useMemo(
    () => (monthlyRent || 0) + (petsEnabled ? (petRentAmount || 0) : 0),
    [monthlyRent, petsEnabled, petRentAmount]
  );
  const lastMonthDue = firstMonthDue;

  /* sync SecDep when equals-rent is ON */
  useEffect(() => { if (secDepEqualsRent) setSecurityDepositStr(monthlyRentStr); }, [monthlyRentStr, secDepEqualsRent]);

  /* due-at-signing breakdown */
  const signingBreakdown = useMemo(() => {
    const lines = [];
    if (secDueSigning && (securityDeposit > 0)) lines.push({ key: "sec", label: "Security deposit", amount: securityDeposit });
    if (petsEnabled && petDepDueSigning && (petDeposit > 0)) lines.push({ key: "pet", label: "Pet deposit", amount: petDeposit });
    if (firstDueSigning && (firstMonthDue > 0)) lines.push({ key: "first", label: "First month", amount: firstMonthDue });
    if (lastDueSigning && (lastMonthDue > 0)) lines.push({ key: "last", label: "Last month", amount: lastMonthDue });
    return lines;
  }, [secDueSigning, petsEnabled, petDepDueSigning, firstDueSigning, lastDueSigning, securityDeposit, petDeposit, firstMonthDue, lastMonthDue]);
  const signingTotal = useMemo(() => signingBreakdown.reduce((s, l) => s + (Number(l.amount) || 0), 0), [signingBreakdown]);

  const hasAnyItemizedForSelected =
    (secDueSigning && securityDepositPayments.length > 0) ||
    (petsEnabled && petDepDueSigning && petDepositPayments.length > 0) ||
    (firstDueSigning && firstMonthPayments.length > 0) ||
    (lastDueSigning && lastMonthPayments.length > 0);

  function applySigningPayment(p) {
    let remaining = Number(p.amount) || 0;
    const base = { dateISO: p.dateISO, method: p.method || "", note: p.note || "" };
    const take = (need) => { if (remaining <= 0) return 0; const amt = Math.min(remaining, Number(need) || 0); remaining = +(remaining - amt).toFixed(2); return amt; };

    const nextSec = [...securityDepositPayments];
    const nextPet = [...petDepositPayments];
    const nextFirst = [...firstMonthPayments];
    const nextLast = [...lastMonthPayments];

    if (secDueSigning && (securityDeposit > 0)) { const a = take(securityDeposit); if (a > 0) nextSec.push({ amount: a, ...base }); }
    if (petsEnabled && petDepDueSigning && (petDeposit > 0)) { const a = take(petDeposit); if (a > 0) nextPet.push({ amount: a, ...base }); }
    if (firstDueSigning && (firstMonthDue > 0)) { const a = take(firstMonthDue); if (a > 0) nextFirst.push({ amount: a, ...base }); }
    if (lastDueSigning && (lastMonthDue > 0)) { const a = take(lastMonthDue); if (a > 0) nextLast.push({ amount: a, ...base }); }

    setSecurityDepositPayments(nextSec);
    setPetDepositPayments(nextPet);
    setFirstMonthPayments(nextFirst);
    setLastMonthPayments(nextLast);
    setSigningPayment({ ...p, amount: Number(p.amount) || 0 });
  }

  const cfg = useMemo(() => ({
    startDateISO,
    months: toNum(monthsStr),
    dueDay: toNum(dueDayStr),
    monthlyRent: toNum(monthlyRentStr),

    petRentEnabled: petsEnabled,
    petRentAmount: petsEnabled ? toNum(petRentAmountStr) : 0,

    securityDeposit: toNum(securityDepositStr),
    secDepEqualsRent,
    petDeposit: petsEnabled ? toNum(petDepositStr) : 0,

    firstMonthPrepaid,
    lastMonthPrepaid,
    graceDays: toNum(graceDaysStr),
    lateFeePolicy: { type: lateFeeType, value: toNum(lateFeeValueStr) },
    otherRecurring,

    securityDepositPayments,
    petDepositPayments: petsEnabled ? petDepositPayments : [],
    firstMonthPayments,
    lastMonthPayments,

    securityDepositPayment: securityDepositPayments[0] || null,
    petDepositPayment: petsEnabled ? (petDepositPayments[0] || null) : null,
    firstMonthPayment: firstMonthPayments[0] || null,
    lastMonthPayment: lastMonthPayments[0] || null,

    secDueSigning,
    petDepDueSigning: petsEnabled ? petDepDueSigning : false,
    firstDueSigning,
    lastDueSigning,
    signingPayment,
  }), [
    startDateISO, monthsStr, dueDayStr, monthlyRentStr, petsEnabled, petRentAmountStr,
    securityDepositStr, secDepEqualsRent, petDepositStr,
    firstMonthPrepaid, lastMonthPrepaid, graceDaysStr, lateFeeType, lateFeeValueStr, otherRecurring,
    securityDepositPayments, petDepositPayments, firstMonthPayments, lastMonthPayments,
    secDueSigning, petDepDueSigning, firstDueSigning, lastDueSigning, signingPayment,
  ]);

  const errors = useMemo(() => {
    const e = {};
    if (!cfg.startDateISO) e.startDateISO = "Lease Start is required.";
    if (!(Number(cfg.months) >= 1)) e.months = "Duration must be at least 1 month.";
    if (!(Number(cfg.dueDay) >= 1 && Number(cfg.dueDay) <= 31)) e.dueDay = "Rent due day must be 1–31.";
    if (!(Number(cfg.monthlyRent) > 0)) e.monthlyRent = "Monthly base rent is required.";
    if (cfg.petRentEnabled && Number(cfg.petRentAmount) < 0) e.petRentAmount = "Pet rent cannot be negative.";
    if (cfg.petRentEnabled && Number(cfg.petDeposit) < 0) e.petDeposit = "Pet deposit cannot be negative.";
    if (!(Number(cfg.graceDays) >= 0)) e.graceDays = "Grace days must be 0 or more.";
    if (!(Number(cfg.lateFeePolicy?.value) >= 0)) e.lateFeeValue = "Late fee must be 0 or more.";
    return e;
  }, [cfg]);

  const isValid = Object.keys(errors).length === 0;

  useEffect(() => { onLiveChange?.(cfg); onLiveValid?.(isValid); }, [cfg, isValid, onLiveChange, onLiveValid]);

  function updateRecurring(idx, val) { setOtherRecurring((prev) => prev.map((c, i) => (i === idx ? val : c))); }
  function removeRecurring(idx) { setOtherRecurring((prev) => prev.filter((_, i) => i !== idx)); }

  function handleSubmit(e) {
    e?.preventDefault?.();
    if (modalOpen) return;
    if (!isValid) return;
    onCreate?.(cfg);
  }

  function openPaymentsFor(key) {
    const map = { sec: securityDepositPayments, pet: petDepositPayments, first: firstMonthPayments, last: lastMonthPayments };
    const arr = map[key] || [];
    if (arr.length === 0) setOpenQuickAdd(key);
    else setOpenManageKey(key);
  }
  function addPayment(key, payment) {
    const p = { ...payment, amount: Number(payment.amount) || 0 };
    if (key === "sec") setSecurityDepositPayments((prev) => [...prev, p]);
    if (key === "pet") setPetDepositPayments((prev) => [...prev, p]);
    if (key === "first") setFirstMonthPayments((prev) => [...prev, p]);
    if (key === "last") setLastMonthPayments((prev) => [...prev, p]);
  }
  function updatePayment(key, idx, payment) {
    const p = { ...payment, amount: Number(payment.amount) || 0 };
    const update = (arr) => arr.map((it, i) => (i === idx ? p : it));
    if (key === "sec") setSecurityDepositPayments((prev) => update(prev));
    if (key === "pet") setPetDepositPayments((prev) => update(prev));
    if (key === "first") setFirstMonthPayments((prev) => update(prev));
    if (key === "last") setLastMonthPayments((prev) => update(prev));
  }
  function deletePayment(key, idx) {
    const remove = (arr) => arr.filter((_, i) => i !== idx);
    if (key === "sec") setSecurityDepositPayments((prev) => remove(prev));
    if (key === "pet") setPetDepositPayments((prev) => remove(prev));
    if (key === "first") setFirstMonthPayments((prev) => remove(prev));
    if (key === "last") setLastMonthPayments((prev) => remove(prev));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      noValidate
      onKeyDownCapture={(e) => {
        if (e.key !== "Enter") return;
        const inModal = e.target?.closest?.('[data-modal="true"]');
        if (inModal) return;
        if (modalOpen) { e.preventDefault(); e.stopPropagation(); return; }
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
            <ul>{Object.values(errors).map((msg, i) => (<li key={i}>{msg}</li>))}</ul>
          </div>
        )}

        <div className={styles.grid}>
          {/* TERMS */}
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeader}><h4 className={styles.sectionTitle}>Terms</h4></div>
            <div className={styles.sectionBody}>
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
                value={monthsStr}
                onChange={(e) => setMonthsStr(e.target.value)}
                onBlur={(e) => setMonthsStr(clampInt(e.target.value, 1, 120, "1"))}
                required
                inputProps={{ min: 1 }}
                error={showErrors ? errors.months : ""}
              />
              <FloatingField
                type="text"
                label="Monthly Base Rent"
                value={monthlyRentStr}
                onChange={(e) => setMonthlyRentStr(e.target.value)}
                onBlur={(e) => setMonthlyRentStr(moneyOnBlur(e.target.value))}
                required
                inputProps={{ inputMode: "decimal" }}
                error={showErrors ? errors.monthlyRent : ""}
              />
              <FloatingField
                type="number"
                label="Rent Due Day (1–31)"
                value={dueDayStr}
                onChange={(e) => setDueDayStr(e.target.value)}
                onBlur={(e) => setDueDayStr(clampInt(e.target.value, 1, 31, "1"))}
                required
                inputProps={{ min: 1, max: 31 }}
                error={showErrors ? errors.dueDay : ""}
              />
            </div>
          </div>

          {/* SECURITY DEPOSIT */}
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeader}><h4 className={styles.sectionTitle}>Security Deposit</h4></div>
            <div className={styles.sectionBody}>
              <div className={styles.fieldBox}>
                <div className={styles.fieldBoxHeader}>
                  <div className={styles.fieldBoxTitle}>Equals one month’s base rent?</div>
                  <label className={styles.switch} title="When ON, Security Deposit mirrors Monthly Base Rent and becomes read-only.">
                    <input
                      type="checkbox"
                      checked={secDepEqualsRent}
                      onChange={(e) => { const checked = e.target.checked; setSecDepEqualsRent(checked); if (checked) setSecurityDepositStr(monthlyRentStr); }}
                    />
                    <span className={styles.slider} />
                  </label>
                </div>
                <div className={styles.sectionHelp}>When enabled, the Security Deposit field mirrors Monthly Base Rent and can’t be edited.</div>
              </div>

              <div className={secDepEqualsRent ? styles.readonly : ""} title={secDepEqualsRent ? "Turn off the toggle above to edit" : ""}>
                <FloatingField
                  type="text"
                  label="Security Deposit"
                  value={securityDepositStr}
                  onChange={(e) => setSecurityDepositStr(e.target.value)}
                  onBlur={(e) => setSecurityDepositStr(moneyOnBlur(e.target.value))}
                  inputProps={{ inputMode: "decimal", readOnly: secDepEqualsRent, disabled: secDepEqualsRent }}
                />
              </div>

              {(securityDeposit > 0 || securityDepositPayments.length > 0) && (
                <>
                  <div>
                    {securityDepositPayments.length === 0 ? (
                      <div className={styles.subtle}>No payments</div>
                    ) : (
                      securityDepositPayments.map((p, i) => (
                        <div key={i} className={styles.paymentLine}>
                          ${Number(p.amount).toFixed(2)} on {p.dateISO}
                          {p.method ? ` · ${p.method}` : ""}{p.note ? ` — ${p.note}` : ""}
                        </div>
                      ))
                    )}
                  </div>
                  <div className={styles.leftActions}>
                    <button
                      type="button"
                      className={buttonStyles.secondaryButton}
                      disabled={securityDeposit <= 0 || (!!signingPayment && secDueSigning)}
                      title={securityDeposit <= 0
                        ? "Enter a Security Deposit amount first"
                        : (signingPayment && secDueSigning
                          ? "A Signing Payment exists and includes security deposit. Remove it or uncheck 'Due at Signing' to add itemized payments."
                          : "Add or manage payments")}
                      onClick={() => openPaymentsFor("sec")}
                    >
                      Payments
                    </button>
                    {securityDepositPayments.length > 0 && (
                      <div className={styles.subtle}>Received: ${sumPayments(securityDepositPayments).toFixed(2)}</div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* PETS */}
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeader}><h4 className={styles.sectionTitle}>Pets</h4></div>
            <div className={styles.sectionBody}>
              <div className={styles.fieldBox}>
                <div className={styles.fieldBoxHeader}>
                  <div className={styles.fieldBoxTitle}>Allowing pets?</div>
                  <label className={styles.switch}>
                    <input type="checkbox" checked={petsEnabled} onChange={(e) => setPetsEnabled(e.target.checked)} />
                    <span className={styles.slider} />
                  </label>
                </div>
              </div>

              {petsEnabled && (
                <div className={styles.fieldBoxBody}>
                  <FloatingField
                    type="text"
                    label="Pet Rent"
                    value={petRentAmountStr}
                    onChange={(e) => setPetRentAmountStr(e.target.value)}
                    onBlur={(e) => setPetRentAmountStr(moneyOnBlur(e.target.value))}
                    inputProps={{ inputMode: "decimal" }}
                    error={showErrors ? errors.petRentAmount : ""}
                  />
                  <FloatingField
                    type="text"
                    label="Pet Deposit"
                    value={petDepositStr}
                    onChange={(e) => setPetDepositStr(e.target.value)}
                    onBlur={(e) => setPetDepositStr(moneyOnBlur(e.target.value))}
                    inputProps={{ inputMode: "decimal" }}
                    error={showErrors ? errors.petDeposit : ""}
                  />

                  {(toNum(petDepositStr) > 0 || petDepositPayments.length > 0) && (
                    <>
                      <div>
                        {petDepositPayments.length === 0 ? (
                          <div className={styles.subtle}>No payments</div>
                        ) : (
                          petDepositPayments.map((p, i) => (
                            <div key={i} className={styles.paymentLine}>
                              ${Number(p.amount).toFixed(2)} on {p.dateISO}
                              {p.method ? ` · ${p.method}` : ""}{p.note ? ` — ${p.note}` : ""}
                            </div>
                          ))
                        )}
                      </div>
                      <div className={styles.leftActions}>
                        <button
                          type="button"
                          className={buttonStyles.secondaryButton}
                          disabled={toNum(petDepositStr) <= 0 || (!!signingPayment && petDepDueSigning)}
                          title={toNum(petDepositStr) <= 0
                            ? "Enter a Pet Deposit amount first"
                            : (signingPayment && petDepDueSigning
                              ? "A Signing Payment exists and includes pet deposit. Remove it or uncheck 'Due at Signing' to add itemized payments."
                              : "Add or manage payments")}
                          onClick={() => openPaymentsFor("pet")}
                        >
                          Payments
                        </button>
                        {petDepositPayments.length > 0 && (
                          <div className={styles.subtle}>Received: ${sumPayments(petDepositPayments).toFixed(2)}</div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* FIRST / LAST */}
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeader}><h4 className={styles.sectionTitle}>First / Last Month</h4></div>
            <div className={styles.sectionBody}>
              <div className={styles.twoCol}>
                <div className={styles.colBox}>
                  <div className={styles.colHeader}>
                    <span className={styles.colTitle}>First Month Prepaid?</span>
                    <label className={styles.switch}>
                      <input type="checkbox" checked={firstMonthPrepaid} onChange={(e) => { const c = e.target.checked; setFirstMonthPrepaid(c); if (!c) setFirstMonthPayments([]); }} />
                      <span className={styles.slider} />
                    </label>
                  </div>
                  {firstMonthPrepaid && (
                    <>
                      <div className={styles.colBody}>
                        {firstMonthPayments.length === 0 ? (
                          <div className={styles.subtle}>No payments</div>
                        ) : (
                          firstMonthPayments.map((p, i) => (
                            <div key={i} className={styles.paymentLine}>
                              ${Number(p.amount).toFixed(2)} on {p.dateISO}
                              {p.method ? ` · ${p.method}` : ""}{p.note ? ` — ${p.note}` : ""}
                            </div>
                          ))
                        )}
                      </div>
                      <div className={styles.leftActions}>
                        <button
                          type="button"
                          className={buttonStyles.secondaryButton}
                          disabled={!!signingPayment && firstDueSigning}
                          title={signingPayment && firstDueSigning
                            ? "A Signing Payment exists and includes first month. Remove it or uncheck 'Due at Signing' to add itemized payments."
                            : "Add or manage payments"}
                          onClick={() => openPaymentsFor("first")}
                        >
                          Payments
                        </button>
                        {firstMonthPayments.length > 0 && (
                          <div className={styles.subtle}>Received: ${sumPayments(firstMonthPayments).toFixed(2)}</div>
                        )}
                      </div>
                    </>
                  )}
                </div>

                <div className={styles.colBox}>
                  <div className={styles.colHeader}>
                    <span className={styles.colTitle}>Last Month Prepaid?</span>
                    <label className={styles.switch}>
                      <input type="checkbox" checked={lastMonthPrepaid} onChange={(e) => { const c = e.target.checked; setLastMonthPrepaid(c); if (!c) setLastMonthPayments([]); }} />
                      <span className={styles.slider} />
                    </label>
                  </div>
                  {lastMonthPrepaid && (
                    <>
                      <div className={styles.colBody}>
                        {lastMonthPayments.length === 0 ? (
                          <div className={styles.subtle}>No payments</div>
                        ) : (
                          lastMonthPayments.map((p, i) => (
                            <div key={i} className={styles.paymentLine}>
                              ${Number(p.amount).toFixed(2)} on {p.dateISO}
                              {p.method ? ` · ${p.method}` : ""}{p.note ? ` — ${p.note}` : ""}
                            </div>
                          ))
                        )}
                      </div>
                      <div className={styles.leftActions}>
                        <button
                          type="button"
                          className={buttonStyles.secondaryButton}
                          disabled={!!signingPayment && lastDueSigning}
                          title={signingPayment && lastDueSigning
                            ? "A Signing Payment exists and includes last month. Remove it or uncheck 'Due at Signing' to add itemized payments."
                            : "Add or manage payments"}
                          onClick={() => openPaymentsFor("last")}
                        >
                          Payments
                        </button>
                        {lastMonthPayments.length > 0 && (
                          <div className={styles.subtle}>Received: ${sumPayments(lastMonthPayments).toFixed(2)}</div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* LATE FEES */}
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeader}><h4 className={styles.sectionTitle}>Late Fees</h4></div>
            <div className={styles.sectionBody}>
              <FloatingField
                type="number"
                label="Grace Days"
                value={graceDaysStr}
                onChange={(e) => setGraceDaysStr(e.target.value)}
                onBlur={(e) => setGraceDaysStr(clampInt(e.target.value, 0, 90, "0"))}
                inputProps={{ min: 0 }}
                error={showErrors ? errors.graceDays : ""}
              />
              <div className={styles.pair}>
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
                  type="text"
                  label="Late Fee Value"
                  value={lateFeeValueStr}
                  onChange={(e) => setLateFeeValueStr(e.target.value)}
                  onBlur={(e) => setLateFeeValueStr(moneyOnBlur(e.target.value))}
                  inputProps={{ inputMode: "decimal" }}
                  error={showErrors ? errors.lateFeeValue : ""}
                />
              </div>
            </div>
          </div>

          {/* DUE AT SIGNING */}
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeader}><h4 className={styles.sectionTitle}>Due at Signing?</h4></div>
            <div className={styles.sectionBody}>
              <div className={styles.stackToggles}>
                <label className={styles.stackRow}>
                  <span>Security deposit</span>
                  <label className={styles.switch}>
                    <input type="checkbox" checked={secDueSigning} onChange={(e) => setSecDueSigning(e.target.checked)} />
                    <span className={styles.slider} />
                  </label>
                </label>

                {petsEnabled && (
                  <label className={styles.stackRow}>
                    <span>Pet deposit</span>
                    <label className={styles.switch}>
                      <input type="checkbox" checked={petDepDueSigning} onChange={(e) => setPetDepDueSigning(e.target.checked)} />
                      <span className={styles.slider} />
                    </label>
                  </label>
                )}

                {/* Only show First/Last toggles if those sections are enabled */}
                {firstMonthPrepaid && (
                  <label className={styles.stackRow}>
                    <span>First month</span>
                    <label className={styles.switch}>
                      <input
                        type="checkbox"
                        checked={firstDueSigning}
                        onChange={(e) => setFirstDueSigning(e.target.checked)}
                      />
                      <span className={styles.slider} />
                    </label>
                  </label>
                )}
                
                {lastMonthPrepaid && (
                  <label className={styles.stackRow}>
                    <span>Last month</span>
                    <label className={styles.switch}>
                      <input
                        type="checkbox"
                        checked={lastDueSigning}
                        onChange={(e) => setLastDueSigning(e.target.checked)}
                      />
                      <span className={styles.slider} />
                    </label>
                  </label>
                )}
              </div>

              <hr className={styles.boxDivider} />

              <div className={styles.sectionHeader} style={{ marginTop: 0 }}>
                <h4 className={styles.sectionTitle}>Total expected at signing</h4>
              </div>

              <div className={styles.breakdownList}>
                {(signingBreakdown.length === 0)
                  ? <div className={styles.subtle}>Nothing selected as due at signing.</div>
                  : signingBreakdown.map((l) => (
                      <div key={l.key} className={styles.breakdownRow}>
                        <span>{l.label}</span><strong>${(Number(l.amount) || 0).toFixed(2)}</strong>
                      </div>
                    ))
                }
              </div>

              <div className={styles.totalLine}>
                <span>Total due at signing</span>
                <strong>${signingTotal.toFixed(2)}</strong>
              </div>

              <div className={styles.leftActions}>
                <button
                  type="button"
                  className={buttonStyles.primaryButton}
                  disabled={signingTotal <= 0 || hasAnyItemizedForSelected}
                  title={signingTotal <= 0
                    ? "Select items above to include at signing"
                    : (hasAnyItemizedForSelected
                      ? "Itemized payments already exist for one or more selected items. Remove those or turn off their toggles to record a single Signing Payment."
                      : "Record a single payment that covers the total due at signing.")}
                  onClick={() => setOpenQuickAdd("signing")}
                >
                  {signingPayment ? "Edit Signing Payment" : "Record Signing Payment"}
                </button>
              </div>

              {signingPayment && (
                <div className={styles.help} style={{ marginTop: 6 }}>
                  Signing payment: ${Number(signingPayment.amount).toFixed(2)} on {signingPayment.dateISO}
                  {signingPayment.method ? ` · ${signingPayment.method}` : ""}{signingPayment.note ? ` — ${signingPayment.note}` : ""}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showPrimaryAction && (
        <div className={styles.actions}>
          <button type="submit" className={buttonStyles.primaryButton}>Save Financial Info</button>
        </div>
      )}

      {/* QUICK ADD (prefill expectedAmount) */}
      {openQuickAdd && (
        <PaymentModal
          open={!!openQuickAdd}
          title={
            openQuickAdd === "sec"     ? "Add Security Deposit Payment" :
            openQuickAdd === "pet"     ? "Add Pet Deposit Payment" :
            openQuickAdd === "first"   ? "Add First Month Payment" :
            openQuickAdd === "last"    ? "Add Last Month Payment" :
            openQuickAdd === "signing" ? "Record Signing Payment" : "Add Payment"
          }
          expectedAmount={
            openQuickAdd === "sec"     ? securityDeposit :
            openQuickAdd === "pet"     ? petDeposit :
            openQuickAdd === "first"   ? firstMonthDue :
            openQuickAdd === "last"    ? lastMonthDue :
            openQuickAdd === "signing" ? signingTotal : undefined
          }
          initial={
            openQuickAdd === "signing"
              ? {
                  amount: (signingPayment?.amount ?? "") || "",
                  dateISO: (signingPayment?.dateISO || "") || "",
                  method: (signingPayment?.method || ""),
                  note: (signingPayment?.note || ""),
                }
              : undefined
          }
          onClose={() => setOpenQuickAdd(null)}
          onAddPayment={(p) => {
            if (openQuickAdd === "signing") {
              const amt = Math.max(0, Math.min(Number(p.amount) || 0, signingTotal));
              applySigningPayment({ ...p, amount: amt });
            } else {
              addPayment(openQuickAdd, p);
            }
            setOpenQuickAdd(null);
          }}
        />
      )}

      {/* MANAGE (pass expectedAmount so its inner Add modal pre-fills) */}
      {openManageKey && (
        <ManagePaymentsModal
          open={!!openManageKey}
          title={
            openManageKey === "sec"   ? "Manage Payments — Security Deposit" :
            openManageKey === "pet"   ? "Manage Payments — Pet Deposit" :
            openManageKey === "first" ? "Manage Payments — First Month" :
            openManageKey === "last"  ? "Manage Payments — Last Month" : "Manage Payments"
          }
          payments={
            openManageKey === "sec"   ? securityDepositPayments :
            openManageKey === "pet"   ? petDepositPayments :
            openManageKey === "first" ? firstMonthPayments :
            openManageKey === "last"  ? lastMonthPayments : []
          }
          expectedAmount={
            openManageKey === "sec"   ? securityDeposit :
            openManageKey === "pet"   ? petDeposit :
            openManageKey === "first" ? firstMonthDue :
            openManageKey === "last"  ? lastMonthDue : undefined
          }
          onClose={() => setOpenManageKey(null)}
          onAdd={(p) => addPayment(openManageKey, p)}
          onUpdate={(idx, p) => updatePayment(openManageKey, idx, p)}
          onDelete={(idx) => deletePayment(openManageKey, idx)}
        />
      )}
    </form>
  );
}
