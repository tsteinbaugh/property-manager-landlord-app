import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const APPLICATION_STATUS_STYLES = {
  PENDING: "bg-amber-100 text-amber-800",
  APPROVED: "bg-emerald-100 text-emerald-800",
  REJECTED: "bg-red-100 text-red-800",
};

const LEASE_STATUS_STYLES = {
  ACTIVE: "bg-emerald-100 text-emerald-800",
  MONTH_TO_MONTH: "bg-amber-100 text-amber-800",
  EXPIRED: "bg-stone-100 text-stone-600",
  TERMINATED: "bg-red-100 text-red-800",
};

function money(amount) {
  if (amount === null || amount === undefined) return null;
  return `$${Number(amount).toLocaleString()}`;
}

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

  const [tenantFormOpen, setTenantFormOpen] = useState(false);
  const [tenantForm, setTenantForm] = useState({ firstName: "", lastName: "", phone: "", email: "" });

  const [leaseFormOpen, setLeaseFormOpen] = useState(false);
  const [leaseForm, setLeaseForm] = useState({ startDate: "", endDate: "", monthlyRent: "", securityDepositAmount: "" });

  async function load() {
    setLoading(true);
    try {
      const [propertyData, entityData, tenantData, leaseData] = await Promise.all([
        api.get(`/api/properties/${id}`),
        api.get("/api/entities"),
        api.get(`/api/tenants?propertyId=${id}`),
        api.get(`/api/leases?propertyId=${id}`),
      ]);
      setProperty(propertyData);
      setEntities(entityData);
      setTenants(tenantData);
      setLeases(leaseData);
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

  async function handleAddTenant(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await api.post("/api/tenants", { ...tenantForm, propertyId: id });
      setTenantForm({ firstName: "", lastName: "", phone: "", email: "" });
      setTenantFormOpen(false);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleAddLease(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...leaseForm, propertyId: id };
      if (!body.endDate) delete body.endDate;
      if (!body.securityDepositAmount) delete body.securityDepositAmount;
      await api.post("/api/leases", body);
      setLeaseForm({ startDate: "", endDate: "", monthlyRent: "", securityDepositAmount: "" });
      setLeaseFormOpen(false);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;
  if (!property) return <p className="text-sm text-red-700">{error || "Property not found."}</p>;

  return (
    <div className="space-y-8">
      <Link to="/properties" className="text-sm text-emerald-700 hover:underline">
        ← Back to properties
      </Link>

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

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-stone-900">Tenants</h2>
          <button
            onClick={() => setTenantFormOpen(true)}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Add tenant
          </button>
        </div>

        {tenantFormOpen && (
          <form
            onSubmit={handleAddTenant}
            className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">First name *</span>
                <input
                  required
                  value={tenantForm.firstName}
                  onChange={(e) => setTenantForm({ ...tenantForm, firstName: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Last name *</span>
                <input
                  required
                  value={tenantForm.lastName}
                  onChange={(e) => setTenantForm({ ...tenantForm, lastName: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Phone</span>
                <input
                  value={tenantForm.phone}
                  onChange={(e) => setTenantForm({ ...tenantForm, phone: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Email</span>
                <input
                  type="email"
                  value={tenantForm.email}
                  onChange={(e) => setTenantForm({ ...tenantForm, email: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
            </div>
            <p className="text-xs text-stone-400">
              Applications start as Pending. Add ID, credit check, employment, and other details from the
              tenant's page.
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
                onClick={() => setTenantFormOpen(false)}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {tenants.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No tenants or applicants for this property yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tenants.map((tenant) => (
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
                {(tenant.phone || tenant.email) && (
                  <p className="text-sm text-stone-500">{[tenant.phone, tenant.email].filter(Boolean).join(" · ")}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-stone-900">Leases</h2>
          <button
            onClick={() => setLeaseFormOpen(true)}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Add lease
          </button>
        </div>

        {leaseFormOpen && (
          <form
            onSubmit={handleAddLease}
            className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Start date *</span>
                <input
                  required
                  type="date"
                  value={leaseForm.startDate}
                  onChange={(e) => setLeaseForm({ ...leaseForm, startDate: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">End date</span>
                <input
                  type="date"
                  value={leaseForm.endDate}
                  onChange={(e) => setLeaseForm({ ...leaseForm, endDate: e.target.value })}
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
                  value={leaseForm.monthlyRent}
                  onChange={(e) => setLeaseForm({ ...leaseForm, monthlyRent: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Security deposit</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={leaseForm.securityDepositAmount}
                  onChange={(e) => setLeaseForm({ ...leaseForm, securityDepositAmount: e.target.value })}
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
                onClick={() => setLeaseFormOpen(false)}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {leases.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No leases for this property yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leases.map((lease) => (
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
                <p className="text-sm text-stone-500">
                  {new Date(lease.startDate).toLocaleDateString()}
                  {lease.endDate ? ` – ${new Date(lease.endDate).toLocaleDateString()}` : " – open"}
                </p>
                <p className="text-xs text-stone-400">
                  {lease.leaseTenants.length === 0
                    ? "No tenants attached"
                    : lease.leaseTenants.map((lt) => `${lt.tenant.firstName} ${lt.tenant.lastName}`).join(", ")}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
