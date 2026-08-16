import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";

const MAINTENANCE_STATUSES = ["OPEN", "IN_PROGRESS", "CLOSED"];
const MAINTENANCE_STATUS_STYLES = {
  OPEN: "bg-amber-100 text-amber-800",
  IN_PROGRESS: "bg-sky-100 text-sky-800",
  CLOSED: "bg-stone-100 text-stone-600",
};

const EMPTY_REQUEST_FORM = {
  title: "",
  description: "",
  tenantId: "",
  vendorId: "",
  reportedBy: "",
  status: "OPEN",
  estimatedCost: "",
  actualCost: "",
  notes: "",
};

function money(amount) {
  if (amount === null || amount === undefined) return null;
  return `$${Number(amount).toLocaleString()}`;
}

// Renders on a single property's page (`propertyId` fixed, no picker — the
// common case) or on the cross-property Maintenance hub (`properties` list
// instead, enabling an in-form property picker + a per-row property badge).
// Pass exactly one of `propertyId` / `properties`. Tenants are fetched
// on-demand for whichever property is "active" in the form (fixed, or
// currently picked) — not eagerly loaded by the parent — since the hub
// spans every property and most of those tenant lists are irrelevant most
// of the time.
export default function MaintenanceRequestSection({ items, vendors, onChange, propertyId, properties }) {
  const api = useApi();
  const isPickerMode = !propertyId;

  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_REQUEST_FORM);
  const [formPropertyId, setFormPropertyId] = useState(propertyId || "");
  const [tenants, setTenants] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!formPropertyId) {
      setTenants([]);
      return;
    }
    let cancelled = false;
    api
      .get(`/api/tenants?propertyId=${formPropertyId}`)
      .then((data) => {
        if (!cancelled) setTenants(data);
      })
      .catch(() => {
        if (!cancelled) setTenants([]);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formPropertyId]);

  function propertyLabel(pid) {
    const p = properties?.find((pp) => pp.id === pid);
    return p ? p.name || p.address1 : "—";
  }
  const vendorLabel = (vendorId) => vendors.find((v) => v.id === vendorId)?.name || null;

  function openForm(request) {
    if (request) {
      setForm({
        title: request.title,
        description: request.description || "",
        tenantId: request.tenantId || "",
        vendorId: request.vendorId || "",
        reportedBy: request.reportedBy || "",
        status: request.status,
        estimatedCost: request.estimatedCost ?? "",
        actualCost: request.actualCost ?? "",
        notes: request.notes || "",
      });
      setFormPropertyId(request.propertyId);
      setEditingId(request.id);
    } else {
      setForm(EMPTY_REQUEST_FORM);
      setFormPropertyId(propertyId || "");
      setEditingId(null);
    }
    setFormOpen(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...form };
      if (!body.description) delete body.description;
      if (!body.tenantId) delete body.tenantId;
      if (!body.vendorId) delete body.vendorId;
      if (!body.reportedBy) delete body.reportedBy;
      if (!body.notes) delete body.notes;
      if (body.estimatedCost === "") delete body.estimatedCost;
      else body.estimatedCost = Number(body.estimatedCost);
      if (body.actualCost === "") delete body.actualCost;
      else body.actualCost = Number(body.actualCost);

      if (editingId) {
        await api.put(`/api/maintenance-requests/${editingId}`, body);
      } else {
        await api.post("/api/maintenance-requests", { ...body, propertyId: formPropertyId });
      }
      setFormOpen(false);
      onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(requestId) {
    if (!confirm("Delete this maintenance request? This can't be undone.")) return;
    try {
      await api.del(`/api/maintenance-requests/${requestId}`);
      onChange();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-stone-900">Maintenance requests</h2>
        <button
          onClick={() => openForm(null)}
          className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
        >
          Add request
        </button>
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      {formOpen && (
        <form onSubmit={handleSave} className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {isPickerMode && (
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Property *</span>
                {editingId ? (
                  <p className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-500">
                    {propertyLabel(formPropertyId)}
                  </p>
                ) : (
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
                )}
              </label>
            )}
            <label className="block text-sm sm:col-span-2 lg:col-span-3">
              <span className="mb-1 block font-medium text-stone-700">Title *</span>
              <input
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                placeholder="Leaking kitchen faucet"
              />
            </label>
            <label className="block text-sm sm:col-span-2 lg:col-span-3">
              <span className="mb-1 block font-medium text-stone-700">Description</span>
              <input
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Status</span>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              >
                {MAINTENANCE_STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s.replace("_", " ")}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Tenant</span>
              <select
                value={form.tenantId}
                onChange={(e) => {
                  const tenantId = e.target.value;
                  const tenant = tenants.find((t) => t.id === tenantId);
                  setForm({
                    ...form,
                    tenantId,
                    reportedBy: tenant ? `${tenant.firstName} ${tenant.lastName}` : "",
                  });
                }}
                disabled={isPickerMode && !formPropertyId}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none disabled:bg-stone-100"
              >
                <option value="">Not a tenant on file</option>
                {tenants.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.firstName} {t.lastName}
                  </option>
                ))}
              </select>
              <span className="mt-1 block text-xs text-stone-400">
                Links this request to their record — pick this if a tenant on file reported it.
              </span>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Reported by</span>
              <input
                disabled={!!form.tenantId}
                value={form.reportedBy}
                onChange={(e) => setForm({ ...form, reportedBy: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none disabled:bg-stone-100 disabled:text-stone-400"
                placeholder="Landlord, a neighbor, etc."
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Vendor</span>
              <select
                value={form.vendorId}
                onChange={(e) => setForm({ ...form, vendorId: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              >
                <option value="">None</option>
                {vendors.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Estimated cost</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={form.estimatedCost}
                onChange={(e) => setForm({ ...form, estimatedCost: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Actual cost</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={form.actualCost}
                onChange={(e) => setForm({ ...form, actualCost: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm sm:col-span-2 lg:col-span-3">
              <span className="mb-1 block font-medium text-stone-700">Notes</span>
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={3}
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
              {submitting ? "Saving..." : editingId ? "Save changes" : "Add request"}
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
          {isPickerMode ? "Nothing here yet." : "No maintenance requests for this property yet."}
        </p>
      ) : (
        <div className="space-y-2">
          {items.map((request) => (
            <div key={request.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-stone-900">{request.title}</span>
                  <span
                    className={`ml-2 rounded-full px-2 py-0.5 text-xs font-medium ${MAINTENANCE_STATUS_STYLES[request.status]}`}
                  >
                    {request.status.replace("_", " ")}
                  </span>
                  {isPickerMode && (
                    <span className="ml-2 rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600">
                      {propertyLabel(request.propertyId)}
                    </span>
                  )}
                  <p className="text-xs text-stone-400">
                    {new Date(request.reportedDate).toLocaleDateString()}
                    {request.reportedBy ? ` · ${request.reportedBy}` : ""}
                    {vendorLabel(request.vendorId) ? ` · ${vendorLabel(request.vendorId)}` : ""}
                    {request.actualCost ? ` · ${money(request.actualCost)}` : ""}
                  </p>
                </div>
                <div className="flex gap-3 text-sm">
                  <button
                    onClick={() => setExpandedId(expandedId === request.id ? null : request.id)}
                    className="text-stone-500 hover:underline"
                  >
                    History
                  </button>
                  <button onClick={() => openForm(request)} className="text-emerald-700 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(request.id)} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
              </div>
              {expandedId === request.id && (
                <div className="mt-3 space-y-2 border-t border-stone-200 pt-3 text-xs text-stone-500">
                  {request.notes && (
                    <p>
                      <span className="font-semibold text-stone-600">Notes: </span>
                      {request.notes}
                    </p>
                  )}
                  <div className="space-y-1">
                    {request.statusChanges.map((change) => (
                      <p key={change.id}>
                        {new Date(change.changedAt).toLocaleString()} —{" "}
                        {change.fromStatus ? `${change.fromStatus.replace("_", " ")} → ` : ""}
                        {change.toStatus.replace("_", " ")}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
