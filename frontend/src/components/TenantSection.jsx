import { useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const APPLICATION_STATUS_STYLES = {
  PENDING: "bg-amber-100 text-amber-800",
  APPROVED: "bg-emerald-100 text-emerald-800",
  REJECTED: "bg-red-100 text-red-800",
};

const EMPTY_TENANT_FORM = { firstName: "", lastName: "", phone: "", email: "" };

// Renders on a single property's page (`propertyId` fixed, no picker) or on
// the cross-property Tenants page (`properties` list instead, enabling an
// in-form property picker + a per-card property badge). Pass exactly one of
// `propertyId` / `properties`. No inline edit/delete — a Tenant's other
// fields (screening, documents, pets/occupants/vehicles) are only ever
// managed from its own detail page, same as before this was extracted.
export default function TenantSection({ items, onChange, propertyId, properties }) {
  const api = useApi();
  const isPickerMode = !propertyId;

  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_TENANT_FORM);
  const [formPropertyId, setFormPropertyId] = useState(propertyId || "");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function propertyLabel(pid) {
    const p = properties?.find((pp) => pp.id === pid);
    return p ? p.name || p.address1 : "—";
  }

  function openForm() {
    setForm(EMPTY_TENANT_FORM);
    setFormPropertyId(propertyId || "");
    setFormOpen(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await api.post("/api/tenants", { ...form, propertyId: formPropertyId });
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
        <h2 className="text-lg font-medium text-stone-900">Tenants</h2>
        <button
          onClick={openForm}
          className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
        >
          Add tenant
        </button>
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      {formOpen && (
        <form onSubmit={handleSave} className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              <span className="mb-1 block font-medium text-stone-700">First name *</span>
              <input
                required
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Last name *</span>
              <input
                required
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Phone</span>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
          </div>
          <p className="text-xs text-stone-400">
            Applications start as Pending. Add ID, credit check, employment, and other details from the tenant's
            page.
          </p>
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
            >
              {submitting ? "Saving..." : "Add tenant"}
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
          {isPickerMode ? "No tenants yet." : "No tenants or applicants for this property yet."}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((tenant) => (
            <Link
              key={tenant.id}
              to={`/tenants/${tenant.id}`}
              className="block space-y-2 rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:border-emerald-300"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-stone-900">
                  {tenant.firstName} {tenant.lastName}
                </h3>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${APPLICATION_STATUS_STYLES[tenant.applicationStatus] || "bg-stone-100 text-stone-600"}`}
                >
                  {tenant.applicationStatus}
                </span>
              </div>
              {isPickerMode && <p className="text-xs text-stone-400">{propertyLabel(tenant.propertyId)}</p>}
              {(tenant.phone || tenant.email) && (
                <p className="text-sm text-stone-500">{[tenant.phone, tenant.email].filter(Boolean).join(" · ")}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
