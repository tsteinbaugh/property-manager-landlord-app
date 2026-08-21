import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import LeaseSection from "../components/LeaseSection";

export default function LeasesPage() {
  const api = useApi();
  const [leases, setLeases] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Deleted leases are hidden by default — this is the "dig and view" toggle, mirroring
  // PropertiesPage's showArchived pattern exactly.
  const [showDeleted, setShowDeleted] = useState(false);

  async function load(deleted) {
    setLoading(true);
    try {
      const [leaseData, propertyData] = await Promise.all([
        api.get(`/api/leases${deleted ? "?deleted=true" : ""}`),
        api.get("/api/properties"),
      ]);
      setLeases(leaseData);
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
      <div className="flex items-start justify-between gap-2">
        <div>
          <h1 className="text-2xl text-stone-900">{showDeleted ? "Deleted leases" : "Leases"}</h1>
          <p className="text-sm text-stone-500">
            {showDeleted ? "Hidden from normal browsing — open one to restore it." : "Every lease across all your properties."}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-4">
          {!showDeleted && (
            <Link to="/clauses" className="whitespace-nowrap text-sm text-emerald-700 hover:underline">
              Manage clause library →
            </Link>
          )}
          <button
            type="button"
            onClick={() => setShowDeleted((v) => !v)}
            className="whitespace-nowrap text-sm font-medium text-stone-500 hover:text-stone-700 hover:underline"
          >
            {showDeleted ? "← Back to leases" : "View deleted"}
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      {loading ? (
        <p className="text-sm text-stone-500">Loading...</p>
      ) : (
        <LeaseSection items={leases} properties={properties} onChange={() => load(showDeleted)} hideAddForm={showDeleted} />
      )}
    </div>
  );
}
