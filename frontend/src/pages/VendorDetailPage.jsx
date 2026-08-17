import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import BackLink from "../components/BackLink";

const STATUS_STYLES = {
  OPEN: "bg-amber-100 text-amber-800",
  IN_PROGRESS: "bg-sky-100 text-sky-800",
  CLOSED: "bg-stone-100 text-stone-600",
};

function money(amount) {
  if (amount === null || amount === undefined) return null;
  return `$${Number(amount).toLocaleString()}`;
}

export default function VendorDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = useApi();

  const [vendor, setVendor] = useState(null);
  const [requests, setRequests] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const [vendorData, requestData, scheduleData, propertyData] = await Promise.all([
        api.get(`/api/vendors/${id}`),
        api.get(`/api/maintenance-requests?vendorId=${id}`),
        api.get(`/api/maintenance-schedules?vendorId=${id}`),
        api.get("/api/properties"),
      ]);
      setVendor(vendorData);
      setRequests(requestData);
      setSchedules(scheduleData);
      setProperties(propertyData);
      setForm(vendorData);
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

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const updated = await api.put(`/api/vendors/${id}`, form);
      setVendor(updated);
      setForm(updated);
      setEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete "${vendor.name}"? This can't be undone.`)) return;
    try {
      await api.del(`/api/vendors/${id}`);
      navigate("/vendors");
    } catch (err) {
      setError(err.message);
    }
  }

  const propertyLabel = (propertyId) => {
    const p = properties.find((prop) => prop.id === propertyId);
    return p ? p.name || p.address1 : "—";
  };

  const totalSpent = requests.reduce((sum, r) => sum + Number(r.actualCost || 0), 0);

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;
  if (!vendor) return <p className="text-sm text-red-700">{error || "Vendor not found."}</p>;

  return (
    <div className="space-y-6">
      <BackLink fallback="/maintenance" />

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl text-stone-900">{vendor.name}</h1>
              {vendor.preferred && (
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                  Preferred
                </span>
              )}
            </div>
            {vendor.trade && <p className="text-sm text-stone-500">{vendor.trade}</p>}
          </div>
          {!editing && (
            <div className="flex shrink-0 gap-3 text-sm">
              <button onClick={() => setEditing(true)} className="text-emerald-700 hover:underline">
                Edit
              </button>
              <button onClick={handleDelete} className="text-red-600 hover:underline">
                Delete
              </button>
            </div>
          )}
        </div>

        {editing ? (
          <form onSubmit={handleSave} className="mt-4 space-y-4 border-t border-stone-200 pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Name *</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Trade</span>
                <input
                  value={form.trade || ""}
                  onChange={(e) => setForm({ ...form, trade: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Phone</span>
                <input
                  value={form.phone || ""}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Email</span>
                <input
                  type="email"
                  value={form.email || ""}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="flex items-center gap-2 self-end pb-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.preferred}
                  onChange={(e) => setForm({ ...form, preferred: e.target.checked })}
                  className="h-4 w-4 rounded border-stone-300"
                />
                <span className="font-medium text-stone-700">Preferred</span>
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-stone-700">Notes</span>
                <input
                  value={form.notes || ""}
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
                {submitting ? "Saving..." : "Save changes"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setForm(vendor);
                  setEditing(false);
                }}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-4 space-y-1 border-t border-stone-200 pt-4 text-sm">
            {vendor.phone && <p className="text-stone-700">{vendor.phone}</p>}
            {vendor.email && <p className="text-stone-700">{vendor.email}</p>}
            {vendor.notes && <p className="text-stone-500">{vendor.notes}</p>}
          </div>
        )}
      </div>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-stone-900">Maintenance history</h2>
          {requests.length > 0 && (
            <p className="text-sm text-stone-500">Total spent: {money(totalSpent)}</p>
          )}
        </div>
        {requests.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No maintenance requests assigned to this vendor yet.
          </p>
        ) : (
          <div className="space-y-2">
            {requests.map((request) => (
              <div key={request.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-stone-900">{request.title}</span>
                    <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600">
                      {propertyLabel(request.propertyId)}
                    </span>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[request.status]}`}>
                    {request.status.replace("_", " ")}
                  </span>
                </div>
                <p className="text-xs text-stone-400">
                  {new Date(request.reportedDate).toLocaleDateString()}
                  {request.actualCost ? ` · ${money(request.actualCost)}` : ""}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-stone-900">Recurring schedules</h2>
        {schedules.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No recurring schedules assigned to this vendor.
          </p>
        ) : (
          <div className="space-y-2">
            {schedules.map((schedule) => (
              <div key={schedule.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-stone-900">{schedule.title}</span>
                  <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600">
                    {propertyLabel(schedule.propertyId)}
                  </span>
                  {schedule.overdue && (
                    <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                      Overdue
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-400">every {schedule.intervalDays} days</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
