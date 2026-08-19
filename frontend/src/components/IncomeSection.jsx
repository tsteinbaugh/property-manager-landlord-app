import { useState } from "react";
import { useApi } from "../hooks/useApi";
import ReceiptsPanel from "./ReceiptsPanel";
import { categoryLabel } from "../lib/financeLabels";

const INCOME_CATEGORIES = ["RENT", "LATE_FEE", "PET_RENT", "DEPOSIT", "OTHER"];
const EMPTY_INCOME_FORM = { category: "RENT", amount: "", date: "", method: "", notes: "", leaseId: "" };

function money(amount) {
  if (amount === null || amount === undefined) return null;
  return `$${Number(amount).toLocaleString()}`;
}

// Reused on both a property's own page and its Finances ledger page — both
// are property-scoped routes, so this never needs a property picker (unlike
// Maintenance, which also renders on the cross-property Maintenance hub).
export default function IncomeSection({ items, leases, propertyId, onChange }) {
  const api = useApi();
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_INCOME_FORM);
  const [editingId, setEditingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function openForm(income) {
    if (income) {
      setForm({
        category: income.category,
        amount: income.amount,
        date: income.date.slice(0, 10),
        method: income.method || "",
        notes: income.notes || "",
        leaseId: income.leaseId || "",
      });
      setEditingId(income.id);
    } else {
      setForm(EMPTY_INCOME_FORM);
      setEditingId(null);
    }
    setFormOpen(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...form, amount: Number(form.amount) };
      if (!body.method) delete body.method;
      if (!body.notes) delete body.notes;
      if (!body.leaseId) delete body.leaseId;

      if (editingId) {
        await api.put(`/api/income/${editingId}`, body);
      } else {
        await api.post("/api/income", { ...body, propertyId });
      }
      setFormOpen(false);
      onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(incomeId) {
    if (!confirm("Delete this income record? This can't be undone.")) return;
    try {
      await api.del(`/api/income/${incomeId}`);
      onChange();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-stone-900">Income</h2>
        <button
          onClick={() => openForm(null)}
          className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
        >
          Add income
        </button>
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      {formOpen && (
        <form onSubmit={handleSave} className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Category *</span>
              <select
                required
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              >
                {INCOME_CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {categoryLabel(c)}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Amount *</span>
              <input
                required
                type="number"
                min="0"
                step="0.01"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Date *</span>
              <input
                required
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Lease</span>
              <select
                value={form.leaseId}
                onChange={(e) => setForm({ ...form, leaseId: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              >
                <option value="">None</option>
                {leases.map((lease) => (
                  <option key={lease.id} value={lease.id}>
                    {money(lease.monthlyRent)}/mo — {new Date(lease.startDate).toLocaleDateString()}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Method</span>
              <input
                value={form.method}
                onChange={(e) => setForm({ ...form, method: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                placeholder="Check, cash, bank transfer"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Notes</span>
              <input
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
            >
              {submitting ? "Saving..." : editingId ? "Save changes" : "Add income"}
            </button>
            <button
              type="button"
              onClick={() => setFormOpen(false)}
              className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {items.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
          No income logged for this property yet.
        </p>
      ) : (
        <div className="space-y-2">
          {items.map((income) => (
            <div key={income.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-stone-900">{money(income.amount)}</span>
                  <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                    {categoryLabel(income.category)}
                  </span>
                  {income.allocations?.length > 1 && (
                    <p className="text-xs text-stone-500">
                      {income.allocations.map((a) => `${categoryLabel(a.category)} ${money(a.amount)}`).join(" + ")}
                    </p>
                  )}
                  <p className="text-xs text-stone-400">
                    {new Date(income.date).toLocaleDateString()}
                    {income.method ? ` · ${income.method}` : ""}
                    {income.notes ? ` · ${income.notes}` : ""}
                  </p>
                </div>
                <div className="flex gap-3 text-sm">
                  <button
                    onClick={() => setExpandedId(expandedId === income.id ? null : income.id)}
                    className="text-stone-500 hover:underline"
                  >
                    Receipts
                  </button>
                  <button onClick={() => openForm(income)} className="text-emerald-700 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(income.id)} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
              </div>
              {expandedId === income.id && <ReceiptsPanel api={api} basePath={`/api/income/${income.id}`} />}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
