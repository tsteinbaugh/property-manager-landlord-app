import { useState } from "react";
import { useApi } from "../hooks/useApi";
import ReceiptsPanel from "./ReceiptsPanel";
import { categoryLabel } from "../lib/financeLabels";

const EXPENSE_CATEGORIES = [
  "MORTGAGE",
  "UTILITIES",
  "REPAIRS",
  "MAINTENANCE",
  "LANDSCAPING",
  "INSURANCE_PREMIUM",
  "TAX",
  "LEGAL",
  "OTHER",
];
const EMPTY_EXPENSE_FORM = { category: "MORTGAGE", amount: "", date: "", payee: "", method: "", paid: true, notes: "" };

function money(amount) {
  if (amount === null || amount === undefined) return null;
  return `$${Number(amount).toLocaleString()}`;
}

// Reused on both a property's own page and its Finances ledger page — see
// IncomeSection for why no property picker is needed here.
export default function ExpenseSection({ items, propertyId, onChange }) {
  const api = useApi();
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_EXPENSE_FORM);
  const [editingId, setEditingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function openForm(expense) {
    if (expense) {
      setForm({
        category: expense.category,
        amount: expense.amount,
        date: expense.date.slice(0, 10),
        payee: expense.payee || "",
        method: expense.method || "",
        paid: expense.paid,
        notes: expense.notes || "",
      });
      setEditingId(expense.id);
    } else {
      setForm(EMPTY_EXPENSE_FORM);
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
      if (!body.payee) delete body.payee;
      if (!body.method) delete body.method;
      if (!body.notes) delete body.notes;

      if (editingId) {
        await api.put(`/api/expenses/${editingId}`, body);
      } else {
        await api.post("/api/expenses", { ...body, propertyId });
      }
      setFormOpen(false);
      onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(expenseId) {
    if (!confirm("Delete this expense record? This can't be undone.")) return;
    try {
      await api.del(`/api/expenses/${expenseId}`);
      onChange();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-stone-900">Expenses</h2>
        <button
          onClick={() => openForm(null)}
          className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
        >
          Add expense
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
                {EXPENSE_CATEGORIES.map((c) => (
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
              <span className="mb-1 block font-medium text-stone-700">Payee</span>
              <input
                value={form.payee}
                onChange={(e) => setForm({ ...form, payee: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
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
            <label className="flex items-center gap-2 self-end pb-2 text-sm">
              <input
                type="checkbox"
                checked={form.paid}
                onChange={(e) => setForm({ ...form, paid: e.target.checked })}
                className="h-4 w-4 rounded border-stone-300"
              />
              <span className="font-medium text-stone-700">Paid</span>
            </label>
            <label className="block text-sm sm:col-span-2">
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
              {submitting ? "Saving..." : editingId ? "Save changes" : "Add expense"}
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
          No expenses logged for this property yet.
        </p>
      ) : (
        <div className="space-y-2">
          {items.map((expense) => (
            <div key={expense.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-stone-900">{money(expense.amount)}</span>
                  <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                    {categoryLabel(expense.category)}
                  </span>
                  {!expense.paid && (
                    <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                      Unpaid
                    </span>
                  )}
                  <p className="text-xs text-stone-400">
                    {new Date(expense.date).toLocaleDateString()}
                    {expense.payee ? ` · ${expense.payee}` : ""}
                    {expense.method ? ` · ${expense.method}` : ""}
                    {expense.notes ? ` · ${expense.notes}` : ""}
                  </p>
                </div>
                <div className="flex gap-3 text-sm">
                  <button
                    onClick={() => setExpandedId(expandedId === expense.id ? null : expense.id)}
                    className="text-stone-500 hover:underline"
                  >
                    Receipts
                  </button>
                  <button onClick={() => openForm(expense)} className="text-emerald-700 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(expense.id)} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
              </div>
              {expandedId === expense.id && <ReceiptsPanel api={api} basePath={`/api/expenses/${expense.id}`} />}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
