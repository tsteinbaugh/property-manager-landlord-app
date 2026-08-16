import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const APPLICATION_STATUS_STYLES = {
  PENDING: "bg-amber-100 text-amber-800",
  APPROVED: "bg-emerald-100 text-emerald-800",
  REJECTED: "bg-red-100 text-red-800",
};

export default function TenantsPage() {
  const api = useApi();
  const [tenants, setTenants] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([api.get("/api/tenants"), api.get("/api/properties")])
      .then(([tenantData, propertyData]) => {
        setTenants(tenantData);
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
        <h1 className="text-2xl text-stone-900">Tenants</h1>
        <p className="text-sm text-stone-500">Every tenant and applicant across all your properties.</p>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      {loading ? (
        <p className="text-sm text-stone-500">Loading...</p>
      ) : tenants.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
          No tenants yet. Add one from a property's page.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tenants.map((tenant) => (
            <Link
              key={tenant.id}
              to={`/tenants/${tenant.id}`}
              className="block space-y-1 rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:border-emerald-300"
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
              <p className="text-xs text-stone-400">{propertyLabel(tenant.propertyId)}</p>
              {(tenant.phone || tenant.email) && (
                <p className="text-sm text-stone-500">{[tenant.phone, tenant.email].filter(Boolean).join(" · ")}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
