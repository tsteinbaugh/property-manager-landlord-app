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

  async function load() {
    setLoading(true);
    try {
      const [leaseData, propertyData] = await Promise.all([api.get("/api/leases"), api.get("/api/properties")]);
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
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h1 className="text-2xl text-stone-900">Leases</h1>
          <p className="text-sm text-stone-500">Every lease across all your properties.</p>
        </div>
        <Link to="/clauses" className="whitespace-nowrap text-sm text-emerald-700 hover:underline">
          Manage clause library →
        </Link>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      {loading ? (
        <p className="text-sm text-stone-500">Loading...</p>
      ) : (
        <LeaseSection items={leases} properties={properties} onChange={load} />
      )}
    </div>
  );
}
