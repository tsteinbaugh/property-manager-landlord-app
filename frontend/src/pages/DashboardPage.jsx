import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useApi } from "../hooks/useApi";

export default function DashboardPage() {
  const { user } = useUser();
  const api = useApi();
  const [entities, setEntities] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.get("/api/entities"), api.get("/api/properties")])
      .then(([entityData, propertyData]) => {
        setEntities(entityData);
        setProperties(propertyData);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-stone-900">Welcome{user?.firstName ? `, ${user.firstName}` : ""}</h1>
        <p className="text-sm text-stone-500">Your portfolio at a glance.</p>
      </div>

      {loading ? (
        <p className="text-sm text-stone-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            to="/entities"
            className="block rounded-xl border border-stone-200 bg-white p-5 shadow-sm hover:border-emerald-300"
          >
            <p className="text-sm font-medium text-stone-500">Entities</p>
            <p className="mt-1 text-3xl font-semibold text-stone-900">{entities.length}</p>
          </Link>
          <Link
            to="/properties"
            className="block rounded-xl border border-stone-200 bg-white p-5 shadow-sm hover:border-emerald-300"
          >
            <p className="text-sm font-medium text-stone-500">Properties</p>
            <p className="mt-1 text-3xl font-semibold text-stone-900">{properties.length}</p>
          </Link>
        </div>
      )}

      {!loading && entities.length === 0 && (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
          Start by adding an{" "}
          <Link to="/entities" className="text-emerald-700 hover:underline">
            entity
          </Link>{" "}
          — the LLC (or "Self / Personal") that owns your properties.
        </p>
      )}
    </div>
  );
}
