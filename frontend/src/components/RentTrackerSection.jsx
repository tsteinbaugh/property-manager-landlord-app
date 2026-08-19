import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { PERIOD_STATUS, monthLabel } from "../lib/rentTrackerStatus";
import { categoryLabel } from "../lib/financeLabels";

function money(amount) {
  return `$${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

const EMPTY_PAY_FORM = { amount: "", date: new Date().toISOString().slice(0, 10), method: "", notes: "" };

// Per-property payment history — one row per month of the active lease's
// term (or, for month-to-month, one row per elapsed month). Distinct from
// the Ledger tab: this only tracks charges the lease itself specifies
// (rent, late fee, pet rent), computed live from Income rows tagged with
// the period they satisfy, never stored. See CLAUDE.md's Finances
// automation notes and memory `project_late_fees_not_eviction_basis` for
// why this is bookkeeping only, never a legal/eviction determination.
export default function RentTrackerSection({ leases, onJumpToPayment, onChange }) {
  const api = useApi();
  const lease = leases.find((l) => l.status === "ACTIVE" || l.status === "MONTH_TO_MONTH");

  const [rows, setRows] = useState([]);
  const [waivers, setWaivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [payOpen, setPayOpen] = useState(false);
  const [payForm, setPayForm] = useState(EMPTY_PAY_FORM);
  const [preview, setPreview] = useState(null); // { allocations: [{period, category, amount}], unapplied }
  const [previewing, setPreviewing] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function load() {
    if (!lease) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const [trackerRows, waiverRows] = await Promise.all([
        api.get(`/api/leases/${lease.id}/rent-tracker`),
        api.get(`/api/leases/${lease.id}/late-fee-waivers`),
      ]);
      setRows(trackerRows);
      setWaivers(waiverRows);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lease?.id]);

  function waiverFor(period) {
    return waivers.find((w) => w.period === period);
  }

  async function handleWaive(period) {
    const note = prompt("Optional note (e.g. why this fee is waived):") || undefined;
    try {
      await api.post(`/api/leases/${lease.id}/late-fee-waivers`, { period, note });
      await load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleUnwaive(waiverId) {
    if (!confirm("Restore this period's late fee?")) return;
    try {
      await api.del(`/api/leases/${lease.id}/late-fee-waivers/${waiverId}`);
      await load();
    } catch (err) {
      setError(err.message);
    }
  }

  function openPayForm() {
    setPayForm(EMPTY_PAY_FORM);
    setPreview(null);
    setPayOpen(true);
  }

  // The fees-first/oldest-first split is a deterministic function of the
  // amount and what's currently owed — there's nothing for the landlord to
  // decide by clicking a "preview" button, so it just (re)computes itself,
  // debounced, whenever the amount changes. The result is still fully
  // editable below before anything is actually logged.
  useEffect(() => {
    if (!payOpen) return;
    const amount = Number(payForm.amount);
    if (!amount || amount <= 0) {
      setPreview(null);
      return;
    }
    setPreviewing(true);
    const handle = setTimeout(() => {
      api
        .post(`/api/leases/${lease.id}/rent-payments/preview`, { amount })
        .then((result) => {
          setPreview(result);
          setError(null);
        })
        .catch((err) => setError(err.message))
        .finally(() => setPreviewing(false));
    }, 400);
    return () => clearTimeout(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payForm.amount, payOpen]);

  function updateAllocationAmount(index, value) {
    setPreview((p) => ({
      ...p,
      allocations: p.allocations.map((a, i) => (i === index ? { ...a, amount: value } : a)),
    }));
  }

  function removeAllocation(index) {
    setPreview((p) => ({ ...p, allocations: p.allocations.filter((_, i) => i !== index) }));
  }

  async function handleConfirmPayment() {
    setSubmitting(true);
    setError(null);
    try {
      const allocations = preview.allocations
        .map((a) => ({ ...a, amount: Number(a.amount) }))
        .filter((a) => a.amount > 0);
      await api.post(`/api/leases/${lease.id}/rent-payments`, {
        date: payForm.date,
        method: payForm.method || undefined,
        notes: payForm.notes || undefined,
        allocations,
      });
      setPayOpen(false);
      setPreview(null);
      await Promise.all([load(), onChange?.()]);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (!lease) {
    return (
      <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
        No active lease on this property — the Rent Tracker needs an active or month-to-month lease to track against.
      </p>
    );
  }

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-stone-900">Rent Tracker</h2>
        <button
          onClick={openPayForm}
          className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
        >
          Log a payment
        </button>
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      {payOpen && (
        <div className="space-y-4 rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Amount *</span>
              <input
                required
                type="number"
                min="0"
                step="0.01"
                value={payForm.amount}
                onChange={(e) => setPayForm({ ...payForm, amount: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Date *</span>
              <input
                required
                type="date"
                value={payForm.date}
                onChange={(e) => setPayForm({ ...payForm, date: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Method</span>
              <input
                value={payForm.method}
                onChange={(e) => setPayForm({ ...payForm, method: e.target.value })}
                placeholder="Check, cash, bank transfer"
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Notes</span>
              <input
                value={payForm.notes}
                onChange={(e) => setPayForm({ ...payForm, notes: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
          </div>

          {previewing && <p className="text-xs text-stone-400">Calculating split...</p>}

          {preview && (
            <div className="space-y-3 border-t border-stone-200 pt-4">
              <p className="text-xs text-stone-500">
                Suggested split (fees first, then rent, oldest month first — matches your lease's Application of
                Payments clause). This will log as one payment; adjust amounts or remove a row before confirming.
              </p>
              {preview.unapplied > 0 && (
                <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                  {money(preview.unapplied)} of this payment doesn't match anything currently owed. Add it to one of
                  the rows below (e.g. as a rent prepayment) before confirming.
                </p>
              )}
              <div className="space-y-2">
                {preview.allocations.map((a, i) => (
                  <div key={`${a.period}-${a.category}-${i}`} className="flex items-center gap-3 text-sm">
                    <span className="w-32 shrink-0 text-stone-600">{monthLabel(a.period)}</span>
                    <span className="w-24 shrink-0 rounded-full bg-stone-100 px-2 py-0.5 text-center text-xs font-medium text-stone-700">
                      {categoryLabel(a.category)}
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={a.amount}
                      onChange={(e) => updateAllocationAmount(i, e.target.value)}
                      className="w-28 rounded-lg border border-stone-300 px-2 py-1 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                    <button type="button" onClick={() => removeAllocation(i)} className="text-red-600 hover:underline">
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleConfirmPayment}
                  disabled={submitting || preview.allocations.length === 0}
                  className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
                >
                  {submitting ? "Logging..." : "Confirm & log payment"}
                </button>
                <button
                  type="button"
                  onClick={() => setPayOpen(false)}
                  className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          {!preview && (
            <button
              type="button"
              onClick={() => setPayOpen(false)}
              className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              Cancel
            </button>
          )}
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-200 text-left text-xs font-medium text-stone-500">
              <th className="px-4 py-2">Month</th>
              <th className="px-4 py-2 text-right">Expected</th>
              <th className="px-4 py-2 text-right">Collected</th>
              <th className="px-4 py-2 text-right">Balance</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const { label, className } = PERIOD_STATUS[row.status];
              const waiver = waiverFor(row.period);
              return (
                <tr key={row.period} className="border-b border-stone-100 last:border-0 align-top">
                  <td className="whitespace-nowrap px-4 py-2 text-stone-700">{monthLabel(row.period)}</td>
                  <td className="px-4 py-2 text-right text-stone-700">
                    {money(row.totalExpected)}
                    <div className="text-xs text-stone-400">
                      {row.expectedRent > 0 && <div>Rent {money(row.expectedRent)}</div>}
                      {row.expectedPetRent > 0 && <div>Pet rent {money(row.expectedPetRent)}</div>}
                      {row.expectedLateFee > 0 && <div>Late fee {money(row.expectedLateFee)}</div>}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-right text-stone-700">
                    {money(row.totalCollected)}
                    {row.payments.length > 0 && (
                      <div className="mt-1 space-y-0.5">
                        {row.payments.map((p, i) => (
                          <button
                            key={`${p.incomeId}-${p.category}-${i}`}
                            type="button"
                            onClick={() => onJumpToPayment?.(p.incomeId)}
                            className="block w-full text-right text-xs text-emerald-700 hover:underline"
                            title="View this payment in the Ledger"
                          >
                            {money(p.amount)} · {categoryLabel(p.category)}
                            {p.method ? ` · ${p.method}` : ""}
                          </button>
                        ))}
                      </div>
                    )}
                  </td>
                  <td className={`px-4 py-2 text-right font-medium ${row.balance > 0 ? "text-red-700" : "text-stone-700"}`}>
                    {money(row.balance)}
                  </td>
                  <td className="px-4 py-2">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${className}`}>{label}</span>
                    {row.daysLate > 0 && <div className="mt-1 text-xs text-stone-400">{row.daysLate}d late</div>}
                  </td>
                  <td className="px-4 py-2 text-right text-xs">
                    {row.expectedLateFee > 0 && !row.isLateFeeWaived && (
                      <button onClick={() => handleWaive(row.period)} className="text-emerald-700 hover:underline">
                        Waive late fee
                      </button>
                    )}
                    {row.isLateFeeWaived && waiver && (
                      <button onClick={() => handleUnwaive(waiver.id)} className="text-stone-500 hover:underline">
                        Un-waive
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
