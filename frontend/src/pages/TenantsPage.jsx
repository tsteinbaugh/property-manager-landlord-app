import { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";
import TenantSection from "../components/TenantSection";

export default function TenantsPage() {
  const api = useApi();
  const [tenants, setTenants] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function load() {
    setLoading(true);
    try {
      const [tenantData, propertyData] = await Promise.all([api.get("/api/tenants"), api.get("/api/properties")]);
      setTenants(tenantData);
      setProperties(propertyData);
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
  }, []);

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
      ) : (
        <TenantSection items={tenants} properties={properties} onChange={load} />
      )}
    </div>
  );
}
