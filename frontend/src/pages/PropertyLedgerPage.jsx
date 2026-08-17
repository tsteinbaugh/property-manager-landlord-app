import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import IncomeSection from "../components/IncomeSection";
import ExpenseSection from "../components/ExpenseSection";
import { categoryLabel } from "../lib/financeLabels";
import BackLink from "../components/BackLink";

function money(amount) {
  return `$${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default function PropertyLedgerPage() {
  const { id } = useParams();
  const api = useApi();

  const [property, setProperty] = useState(null);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [leases, setLeases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const entries = [
    ...incomes.map((i) => ({ ...i, kind: "income" })),
    ...expenses.map((e) => ({ ...e, kind: "expense" })),
  ].sort((a, b) => new Date(a.date) - new Date(b.date));

  let runningBalance = 0;
  for (const entry of entries) {
    runningBalance += entry.kind === "income" ? Number(entry.amount) : -Number(entry.amount);
    entry.balance = runningBalance;
  }
  entries.reverse();

  const totalIncome = entries.filter((e) => e.kind === "income").reduce((sum, e) => sum + Number(e.amount), 0);
  const totalExpenses = entries.filter((e) => e.kind === "expense").reduce((sum, e) => sum + Number(e.amount), 0);

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

      {entries.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
          No income or expenses logged for this property yet.
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
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={`${entry.kind}-${entry.id}`} className="border-b border-stone-100 last:border-0">
                  <td className="whitespace-nowrap px-4 py-2 text-stone-500">
                    {new Date(entry.date).toLocaleDateString()}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-stone-700">{categoryLabel(entry.category)}</td>
                  <td className="px-4 py-2 text-stone-500">
                    {entry.kind === "expense" && !entry.paid && (
                      <span className="mr-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                        Unpaid
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
                  <td className="whitespace-nowrap px-4 py-2 text-right text-stone-500">{money(entry.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <IncomeSection propertyId={id} items={incomes} leases={leases} onChange={load} />
      <ExpenseSection propertyId={id} items={expenses} onChange={load} />
    </div>
  );
}
