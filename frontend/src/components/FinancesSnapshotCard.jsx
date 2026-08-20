import { Link } from "react-router-dom";

function money(amount) {
  return `$${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Read-only snapshot for the property page — replaces the old full
// Income/Expense CRUD sections, which duplicated the Ledger page's own full
// CRUD table. All add/edit/delete/receipts now live only on the Ledger
// (`PropertyLedgerPage`); this card exists so the property page still
// answers "how are the books for this property" without leaving the page.
export default function FinancesSnapshotCard({ propertyId, incomes, expenses }) {
  const totalIncome = incomes.reduce((sum, i) => sum + Number(i.amount), 0);
  const totalExpenses = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const net = totalIncome - totalExpenses;

  return (
    <section className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-stone-900">Finances</h2>
        <Link to={`/finances/${propertyId}`} className="text-sm text-emerald-700 hover:underline">
          View full ledger →
        </Link>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs font-medium text-stone-500">Total income</p>
          <p className="mt-1 text-lg font-semibold text-emerald-700">{money(totalIncome)}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-stone-500">Total expenses</p>
          <p className="mt-1 text-lg font-semibold text-red-700">{money(totalExpenses)}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-stone-500">Net</p>
          <p className="mt-1 text-lg font-semibold text-stone-900">{money(net)}</p>
        </div>
      </div>
    </section>
  );
}
