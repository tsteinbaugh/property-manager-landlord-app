import { useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const LEASE_STATUS_STYLES = {
  ACTIVE: "bg-emerald-100 text-emerald-800",
  MONTH_TO_MONTH: "bg-amber-100 text-amber-800",
  EXPIRED: "bg-stone-100 text-stone-600",
  TERMINATED: "bg-red-100 text-red-800",
};

const EMPTY_LEASE_FORM = { startDate: "", endDate: "", monthlyRent: "", securityDepositAmount: "" };

function money(amount) {
  if (amount === null || amount === undefined) return null;
  return `$${Number(amount).toLocaleString()}`;
}

// Same fixed-property/picker dual mode as the other extracted sections. No
// inline edit/delete — everything else about a lease (tenants, late fees,
// pet policy, the PDF) is only ever managed from its own detail page.
// `hideAddForm` suppresses the Add Lease button/form — used by LeasesPage's
// "View deleted" mode, where adding a new lease doesn't apply.
export default function LeaseSection({ items, onChange, propertyId, properties, hideAddForm = false }) {
  const api = useApi();
  const isPickerMode = !propertyId;

  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_LEASE_FORM);
  const [formPropertyId, setFormPropertyId] = useState(propertyId || "");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function propertyLabel(pid) {
    const p = properties?.find((pp) => pp.id === pid);
    return p ? p.name || p.address1 : "—";
  }

  function openForm() {
    setForm(EMPTY_LEASE_FORM);
    setFormPropertyId(propertyId || "");
    setFormOpen(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...form, propertyId: formPropertyId };
      if (!body.endDate) delete body.endDate;
      if (!body.securityDepositAmount) delete body.securityDepositAmount;
      await api.post("/api/leases", body);
      setFormOpen(false);
      onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-stone-900">Leases</h2>
        {!hideAddForm && (
          <button
            onClick={openForm}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Add lease
          </button>
        )}
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      {formOpen && (
        <form onSubmit={handleSave} className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {isPickerMode && (
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Property *</span>
                <select
                  required
                  value={formPropertyId}
                  onChange={(e) => setFormPropertyId(e.target.value)}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                >
                  <option value="">Select a property</option>
                  {properties.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name || p.address1}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Start date *</span>
              <input
                required
                type="date"
                value={form.startDate}
                onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">End date</span>
              <input
                type="date"
                value={form.endDate}
                onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Monthly rent *</span>
              <input
                required
                type="number"
                min="0"
                step="0.01"
                value={form.monthlyRent}
                onChange={(e) => setForm({ ...form, monthlyRent: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Security deposit</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={form.securityDepositAmount}
                onChange={(e) => setForm({ ...form, securityDepositAmount: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
          </div>
          <p className="text-xs text-stone-400">
            Late fees, pet policy, tenants, and the lease PDF are managed from the lease's page.
          </p>
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
            >
              {submitting ? "Saving..." : "Add lease"}
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
          {hideAddForm ? "No deleted leases." : isPickerMode ? "No leases yet." : "No leases for this property yet."}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((lease) => (
            <Link
              key={lease.id}
              to={`/leases/${lease.id}`}
              className="block space-y-2 rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:border-emerald-300"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-stone-900">{money(lease.monthlyRent)}/mo</h3>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${LEASE_STATUS_STYLES[lease.status] || "bg-stone-100 text-stone-600"}`}
                >
                  {lease.status}
                </span>
              </div>
              {isPickerMode && <p className="text-xs text-stone-400">{propertyLabel(lease.propertyId)}</p>}
              <p className="text-sm text-stone-500">
                {new Date(lease.startDate).toLocaleDateString()}
                {lease.endDate ? ` – ${new Date(lease.endDate).toLocaleDateString()}` : " – open"}
              </p>
              <p className="text-xs text-stone-400">
                {lease.leaseTenants.length === 0
                  ? "No tenants attached"
                  : lease.leaseTenants.map((lt) => `${lt.tenant.firstName} ${lt.tenant.lastName}`).join(", ")}
              </p>
              {lease.deleted && (
                <p className="text-xs text-stone-500">
                  Deleted {lease.deletedAt ? new Date(lease.deletedAt).toLocaleDateString() : ""}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
