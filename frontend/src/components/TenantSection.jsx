import { useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import SearchableSelect from "./SearchableSelect";

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
// `hideAddForm` suppresses the Add Tenant button/form entirely — used by
// TenantsPage's "View deleted" mode, where adding a new tenant doesn't apply.
export default function TenantSection({ items, onChange, propertyId, properties, hideAddForm = false }) {
  const api = useApi();
  const isPickerMode = !propertyId;

  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_TENANT_FORM);
  const [formPropertyId, setFormPropertyId] = useState(propertyId || "");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // "Copy details from an existing tenant" — for reassigning someone to a different
  // property you own (a new application row, per the existing "Tenant = applied to this
  // property" rule, not a move) without re-typing their name/phone/email. Fetched lazily —
  // only needed once the Add Tenant form is actually open — and includes every tenant
  // regardless of status (?deleted=all), since the point is finding them even if their old
  // record is itself hidden.
  const [copyFromId, setCopyFromId] = useState("");
  const [copySourceOptions, setCopySourceOptions] = useState([]);

  function propertyLabel(pid) {
    const p = properties?.find((pp) => pp.id === pid);
    return p ? p.name || p.address1 : "—";
  }

  function openForm() {
    setForm(EMPTY_TENANT_FORM);
    setFormPropertyId(propertyId || "");
    setCopyFromId("");
    setFormOpen(true);
    api
      .get("/api/tenants?deleted=all")
      .then((all) =>
        setCopySourceOptions(
          all.map((t) => ({
            value: t.id,
            label: `${t.firstName} ${t.lastName}${propertyLabel(t.propertyId) !== "—" ? ` — ${propertyLabel(t.propertyId)}` : ""}${t.deleted ? " (deleted)" : ""}`,
          })),
        ),
      )
      .catch(() => {}); // non-critical — the picker just stays empty if this fails
  }

  function handleCopyFromChange(tenantId) {
    setCopyFromId(tenantId);
    if (!tenantId) return;
    api
      .get(`/api/tenants/${tenantId}`)
      .then((source) =>
        setForm((f) => ({
          ...f,
          firstName: source.firstName || "",
          lastName: source.lastName || "",
          phone: source.phone || "",
          email: source.email || "",
        })),
      )
      .catch(() => {});
  }

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await api.post("/api/tenants", {
        ...form,
        propertyId: formPropertyId,
        ...(copyFromId ? { previousTenantId: copyFromId } : {}),
      });
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
        {!hideAddForm && (
          <button
            onClick={openForm}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Add tenant
          </button>
        )}
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      {formOpen && (
        <form onSubmit={handleSave} className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          {copySourceOptions.length > 0 && (
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">
                Copy details from an existing tenant (optional)
              </span>
              <SearchableSelect
                value={copyFromId}
                onChange={handleCopyFromChange}
                options={copySourceOptions}
                placeholder="e.g. a tenant moving from another property you own..."
              />
              <span className="mt-1 block text-xs text-stone-400">
                Fills in name/phone/email below and links back to their prior record — this still starts a fresh
                application, not a copy of their screening status.
              </span>
            </label>
          )}
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
          {hideAddForm
            ? "No deleted tenants."
            : isPickerMode
              ? "No tenants yet."
              : "No tenants or applicants for this property yet."}
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
              {tenant.deleted && (
                <p className="text-xs text-stone-500">
                  Deleted {tenant.deletedAt ? new Date(tenant.deletedAt).toLocaleDateString() : ""}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
