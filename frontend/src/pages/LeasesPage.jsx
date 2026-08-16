import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";

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

export default function LeasesPage() {
  const api = useApi();
  const [leases, setLeases] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([api.get("/api/leases"), api.get("/api/properties")])
      .then(([leaseData, propertyData]) => {
        setLeases(leaseData);
        setProperties(propertyData);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const propertyLabel = (propertyId) => {
    const p = properties.find((prop) => prop.id === propertyId);
    return p ? p.name || p.address1 : "—";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-stone-900">Leases</h1>
        <p className="text-sm text-stone-500">Every lease across all your properties.</p>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      {loading ? (
        <p className="text-sm text-stone-500">Loading...</p>
      ) : leases.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
          No leases yet. Add one from a property's page.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leases.map((lease) => (
            <Link
              key={lease.id}
              to={`/leases/${lease.id}`}
              className="block space-y-1 rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:border-emerald-300"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-stone-900">{money(lease.monthlyRent)}/mo</h3>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${LEASE_STATUS_STYLES[lease.status] || "bg-stone-100 text-stone-600"}`}
                >
                  {lease.status}
                </span>
              </div>
              <p className="text-xs text-stone-400">{propertyLabel(lease.propertyId)}</p>
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
    </div>
  );
}
