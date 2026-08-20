import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import TenantSection from "../components/TenantSection";
import LeaseSection from "../components/LeaseSection";
import FinancesSnapshotCard from "../components/FinancesSnapshotCard";
import MaintenanceSnapshotCard from "../components/MaintenanceSnapshotCard";
import BackLink from "../components/BackLink";

export default function PropertyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = useApi();

  const [property, setProperty] = useState(null);
  const [entities, setEntities] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [leases, setLeases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [requests, setRequests] = useState([]);
  const [schedules, setSchedules] = useState([]);

  async function load() {
    setLoading(true);
    try {
      const [propertyData, entityData, tenantData, leaseData, incomeData, expenseData, requestData, scheduleData] =
        await Promise.all([
          api.get(`/api/properties/${id}`),
          api.get("/api/entities"),
          api.get(`/api/tenants?propertyId=${id}`),
          api.get(`/api/leases?propertyId=${id}`),
          api.get(`/api/income?propertyId=${id}`),
          api.get(`/api/expenses?propertyId=${id}`),
          api.get(`/api/maintenance-requests?propertyId=${id}`),
          api.get(`/api/maintenance-schedules?propertyId=${id}`),
        ]);
      setProperty(propertyData);
      setEntities(entityData);
      setTenants(tenantData);
      setLeases(leaseData);
      setIncomes(incomeData);
      setExpenses(expenseData);
      setRequests(requestData);
      setSchedules(scheduleData);
      setForm(propertyData);
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
      const updated = await api.put(`/api/properties/${id}`, form);
      setProperty(updated);
      setForm(updated);
      setEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete "${property.name || property.address1}"? This can't be undone.`)) return;
    try {
      await api.del(`/api/properties/${id}`);
      navigate("/properties");
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;
  if (!property) return <p className="text-sm text-red-700">{error || "Property not found."}</p>;

  return (
    <div className="space-y-8">
      <BackLink fallback="/properties" />

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-2xl text-stone-900">{property.name || property.address1}</h1>
            <p className="text-sm text-stone-500">
              {property.address1}
              {property.address2 ? `, ${property.address2}` : ""}, {property.city}, {property.state}{" "}
              {property.zip}
            </p>
            <Link to={`/properties/${id}/specs`} className="text-xs text-emerald-700 hover:underline">
              Property Specs →
            </Link>
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
                <span className="mb-1 block font-medium text-stone-700">Entity *</span>
                <select
                  required
                  value={form.entityId}
                  onChange={(e) => setForm({ ...form, entityId: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                >
                  {entities.map((entity) => (
                    <option key={entity.id} value={entity.id}>
                      {entity.legalName}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Nickname</span>
                <input
                  value={form.name || ""}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-stone-700">Address line 1 *</span>
                <input
                  required
                  value={form.address1 || ""}
                  onChange={(e) => setForm({ ...form, address1: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-stone-700">Address line 2</span>
                <input
                  value={form.address2 || ""}
                  onChange={(e) => setForm({ ...form, address2: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">City *</span>
                <input
                  required
                  value={form.city || ""}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">State *</span>
                  <input
                    required
                    value={form.state || ""}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Zip *</span>
                  <input
                    required
                    value={form.zip || ""}
                    onChange={(e) => setForm({ ...form, zip: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
              </div>
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
                  setForm(property);
                  setEditing(false);
                }}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <p className="mt-3 text-sm text-stone-400">
            Owned by {entities.find((e) => e.id === property.entityId)?.legalName || "—"}
          </p>
        )}
      </div>

      <TenantSection propertyId={id} items={tenants} onChange={load} />
      <LeaseSection propertyId={id} items={leases} onChange={load} />

      <FinancesSnapshotCard propertyId={id} incomes={incomes} expenses={expenses} />
      <MaintenanceSnapshotCard propertyId={id} requests={requests} schedules={schedules} />
    </div>
  );
}

