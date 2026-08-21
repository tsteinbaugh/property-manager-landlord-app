import { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";
import TenantSection from "../components/TenantSection";

export default function TenantsPage() {
  const api = useApi();
  const [tenants, setTenants] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Deleted tenants are hidden by default (GET /api/tenants already excludes them) — this is
  // the "dig and view" toggle, mirroring PropertiesPage's showArchived pattern exactly.
  const [showDeleted, setShowDeleted] = useState(false);

  async function load(deleted) {
    setLoading(true);
    try {
      const [tenantData, propertyData] = await Promise.all([
        api.get(`/api/tenants${deleted ? "?deleted=true" : ""}`),
        api.get("/api/properties"),
      ]);
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
    load(showDeleted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDeleted]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-stone-900">{showDeleted ? "Deleted tenants" : "Tenants"}</h1>
          <p className="text-sm text-stone-500">
            {showDeleted
              ? "Hidden from normal browsing — open one to restore it."
              : "Every tenant and applicant across all your properties."}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowDeleted((v) => !v)}
          className="text-sm font-medium text-stone-500 hover:text-stone-700 hover:underline"
        >
          {showDeleted ? "← Back to tenants" : "View deleted"}
        </button>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      {loading ? (
        <p className="text-sm text-stone-500">Loading...</p>
      ) : (
        <TenantSection
          items={tenants}
          properties={properties}
          onChange={() => load(showDeleted)}
          hideAddForm={showDeleted}
        />
      )}
    </div>
  );
}
