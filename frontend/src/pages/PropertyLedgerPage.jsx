import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import ReceiptsPanel from "../components/ReceiptsPanel";
import RentTrackerSection from "../components/RentTrackerSection";
import { categoryLabel, INCOME_CATEGORIES, EXPENSE_CATEGORIES } from "../lib/financeLabels";
import BackLink from "../components/BackLink";

function money(amount) {
  return `$${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

const EMPTY_INCOME_FORM = { category: "RENT", amount: "", date: "", method: "", notes: "", leaseId: "" };
const EMPTY_EXPENSE_FORM = { category: "MORTGAGE", amount: "", date: "", payee: "", method: "", paid: true, notes: "" };

export default function PropertyLedgerPage() {
  const { id } = useParams();
  const api = useApi();

  const [property, setProperty] = useState(null);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [leases, setLeases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState("ledger");
  const [highlightIncomeId, setHighlightIncomeId] = useState(null);

  const [kindFilter, setKindFilter] = useState("all");
  const [formKind, setFormKind] = useState(null); // "income" | "expense" | null
  const [form, setForm] = useState(EMPTY_INCOME_FORM);
  const [editingEntry, setEditingEntry] = useState(null); // { kind, id }
  const [expandedKey, setExpandedKey] = useState(null); // `${kind}-${id}`
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);

  async function load() {
    setLoading(true);
    try {
      const [propertyData, incomeData, expenseData, leaseData] = await Promise.all([
        api.get(`/api/properties/${id}`),
        api.get(`/api/income?propertyId=${id}`),
        api.get(`/api/expenses?propertyId=${id}`),
        api.get(`/api/leases?propertyId=${id}`),
      ]);
      setProperty(propertyData);
      setIncomes(incomeData);
      setExpenses(expenseData);
      setLeases(leaseData);
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
  }, [id]);

  // Jumping here from the Rent Tracker tab: switch to the Ledger, scroll the
  // specific payment into view, and briefly highlight it so it's obvious
  // which row answers "where's this money in my books."
  function jumpToIncome(incomeId) {
    setTab("ledger");
    setHighlightIncomeId(incomeId);
  }

  useEffect(() => {
    if (tab !== "ledger" || !highlightIncomeId) return;
    const el = document.getElementById(`income-row-${highlightIncomeId}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    const timeout = setTimeout(() => setHighlightIncomeId(null), 2500);
    return () => clearTimeout(timeout);
  }, [tab, highlightIncomeId]);

  const entries = [
    ...incomes.map((i) => ({ ...i, kind: "income" })),
    ...expenses.map((e) => ({ ...e, kind: "expense" })),
  ].sort((a, b) => new Date(a.date) - new Date(b.date));

  // Balance always reflects the whole ledger, even when the table below is
  // filtered down to just income or just expenses.
  let runningBalance = 0;
  for (const entry of entries) {
    runningBalance += entry.kind === "income" ? Number(entry.amount) : -Number(entry.amount);
    entry.balance = runningBalance;
  }
  entries.reverse();

  const totalIncome = entries.filter((e) => e.kind === "income").reduce((sum, e) => sum + Number(e.amount), 0);
  const totalExpenses = entries.filter((e) => e.kind === "expense").reduce((sum, e) => sum + Number(e.amount), 0);

  const visibleEntries = entries.filter((e) => kindFilter === "all" || e.kind === kindFilter);

  function openAddForm(kind) {
    setFormKind(kind);
    setForm(kind === "income" ? EMPTY_INCOME_FORM : EMPTY_EXPENSE_FORM);
    setEditingEntry(null);
    setFormError(null);
  }

  function openEditForm(entry) {
    setFormKind(entry.kind);
    setEditingEntry({ kind: entry.kind, id: entry.id });
    setFormError(null);
    if (entry.kind === "income") {
      setForm({
        category: entry.category,
        amount: entry.amount,
        date: entry.date.slice(0, 10),
        method: entry.method || "",
        notes: entry.notes || "",
        leaseId: entry.leaseId || "",
      });
    } else {
      setForm({
        category: entry.category,
        amount: entry.amount,
        date: entry.date.slice(0, 10),
        payee: entry.payee || "",
        method: entry.method || "",
        paid: entry.paid,
        notes: entry.notes || "",
      });
    }
  }

  function closeForm() {
    setFormKind(null);
    setEditingEntry(null);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);
    try {
      const body = { ...form, amount: Number(form.amount) };
      if (!body.method) delete body.method;
      if (!body.notes) delete body.notes;
      if (formKind === "income" && !body.leaseId) delete body.leaseId;
      if (formKind === "expense" && !body.payee) delete body.payee;

      const base = formKind === "income" ? "/api/income" : "/api/expenses";
      if (editingEntry) {
        await api.put(`${base}/${editingEntry.id}`, body);
      } else {
        await api.post(base, { ...body, propertyId: id });
      }
      closeForm();
      load();
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(entry) {
    const label = entry.kind === "income" ? "income" : "expense";
    if (!confirm(`Delete this ${label} record? This can't be undone.`)) return;
    try {
      const base = entry.kind === "income" ? "/api/income" : "/api/expenses";
      await api.del(`${base}/${entry.id}`);
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;
  if (!property) return <p className="text-sm text-red-700">{error || "Property not found."}</p>;

  return (
    <div className="space-y-6">
      <BackLink fallback="/finances" />

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <div>
        <h1 className="text-2xl text-stone-900">{property.name || property.address1}</h1>
        <p className="text-sm text-stone-500">
          {property.address1}, {property.city}, {property.state} {property.zip}
        </p>
        <Link to={`/properties/${property.id}`} className="text-xs text-emerald-700 hover:underline">
          View this property's full page →
        </Link>
      </div>

      <div className="flex gap-1 border-b border-stone-200">
        {[
          { key: "ledger", label: "Ledger" },
          { key: "rent-tracker", label: "Rent Tracker" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium ${
              tab === t.key
                ? "border-emerald-700 text-emerald-700"
                : "border-transparent text-stone-500 hover:text-stone-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "ledger" ? (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-medium text-stone-500">Total income</p>
              <p className="mt-1 text-xl font-semibold text-emerald-700">{money(totalIncome)}</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-medium text-stone-500">Total expenses</p>
              <p className="mt-1 text-xl font-semibold text-red-700">{money(totalExpenses)}</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-medium text-stone-500">Net</p>
              <p className="mt-1 text-xl font-semibold text-stone-900">{money(totalIncome - totalExpenses)}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-1">
              {[
                { key: "all", label: "All" },
                { key: "income", label: "Income" },
                { key: "expense", label: "Expenses" },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setKindFilter(f.key)}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    kindFilter === f.key
                      ? "bg-emerald-700 text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => openAddForm("income")}
                className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
              >
                Add income
              </button>
              <button
                onClick={() => openAddForm("expense")}
                className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Add expense
              </button>
            </div>
          </div>

          {formKind && (
            <form
              onSubmit={handleSave}
              className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-sm font-medium text-stone-900">
                {editingEntry ? "Edit" : "Add"} {formKind === "income" ? "income" : "expense"}
              </h3>
              {formError && <p className="text-sm text-red-700">{formError}</p>}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Category *</span>
                  <select
                    required
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  >
                    {(formKind === "income" ? INCOME_CATEGORIES : EXPENSE_CATEGORIES).map((c) => (
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

                {formKind === "income" ? (
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
                ) : (
                  <label className="block text-sm">
                    <span className="mb-1 block font-medium text-stone-700">Payee</span>
                    <input
                      value={form.payee}
                      onChange={(e) => setForm({ ...form, payee: e.target.value })}
                      className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </label>
                )}

                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Method</span>
                  <input
                    value={form.method}
                    onChange={(e) => setForm({ ...form, method: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                    placeholder="Check, cash, bank transfer"
                  />
                </label>

                {formKind === "expense" && (
                  <label className="flex items-center gap-2 self-end pb-2 text-sm">
                    <input
                      type="checkbox"
                      checked={form.paid}
                      onChange={(e) => setForm({ ...form, paid: e.target.checked })}
                      className="h-4 w-4 rounded border-stone-300"
                    />
                    <span className="font-medium text-stone-700">Paid</span>
                  </label>
                )}

                <label className="block text-sm sm:col-span-2 lg:col-span-3">
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
                  {submitting ? "Saving..." : editingEntry ? "Save changes" : "Add"}
                </button>
                <button
                  type="button"
                  onClick={closeForm}
                  className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {visibleEntries.length === 0 ? (
            <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
              {kindFilter === "all"
                ? "No income or expenses logged for this property yet."
                : kindFilter === "income"
                  ? "No income logged for this property yet."
                  : "No expenses logged for this property yet."}
            </p>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-200 text-left text-xs font-medium text-stone-500">
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Details</th>
                    <th className="px-4 py-2 text-right">Amount</th>
                    <th className="px-4 py-2 text-right">Balance</th>
                    <th className="px-4 py-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleEntries.map((entry) => {
                    const key = `${entry.kind}-${entry.id}`;
                    return (
                      <Fragment key={key}>
                        <tr
                          id={entry.kind === "income" ? `income-row-${entry.id}` : undefined}
                          className={`border-b border-stone-100 last:border-0 ${
                            entry.kind === "income" && entry.id === highlightIncomeId ? "bg-emerald-50" : ""
                          }`}
                        >
                          <td className="whitespace-nowrap px-4 py-2 text-stone-500">
                            {new Date(entry.date).toLocaleDateString()}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-stone-700">
                            {categoryLabel(entry.category)}
                          </td>
                          <td className="px-4 py-2 text-stone-500">
                            {entry.kind === "expense" && !entry.paid && (
                              <span className="mr-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                                Unpaid
                              </span>
                            )}
                            {entry.kind === "income" && entry.allocations?.length > 1 && (
                              <span className="mr-1 text-stone-600">
                                {entry.allocations
                                  .map((a) => `${categoryLabel(a.category)} ${money(a.amount)}`)
                                  .join(" + ")}
                              </span>
                            )}
                            {[entry.payee, entry.method, entry.notes].filter(Boolean).join(" · ")}
                          </td>
                          <td
                            className={`whitespace-nowrap px-4 py-2 text-right font-medium ${entry.kind === "income" ? "text-emerald-700" : "text-red-700"}`}
                          >
                            {entry.kind === "income" ? "+" : "-"}
                            {money(entry.amount)}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-right text-stone-500">
                            {money(entry.balance)}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-right text-xs">
                            <div className="flex justify-end gap-3">
                              <button
                                onClick={() => setExpandedKey(expandedKey === key ? null : key)}
                                className="text-stone-500 hover:underline"
                              >
                                Receipts
                              </button>
                              <button onClick={() => openEditForm(entry)} className="text-emerald-700 hover:underline">
                                Edit
                              </button>
                              <button onClick={() => handleDelete(entry)} className="text-red-600 hover:underline">
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                        {expandedKey === key && (
                          <tr className="border-b border-stone-100 bg-stone-50 last:border-0">
                            <td colSpan={6} className="px-4 py-3">
                              <ReceiptsPanel
                                api={api}
                                basePath={
                                  entry.kind === "income" ? `/api/income/${entry.id}` : `/api/expenses/${entry.id}`
                                }
                              />
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : (
        <RentTrackerSection leases={leases} onJumpToPayment={jumpToIncome} onChange={load} />
      )}
    </div>
  );
}
