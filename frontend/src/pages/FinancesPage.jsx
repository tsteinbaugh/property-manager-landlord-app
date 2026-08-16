import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";

export default function FinancesPage() {
  const api = useApi();
  const [properties, setProperties] = useState([]);
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([api.get("/api/properties"), api.get("/api/entities")])
      .then(([propertyData, entityData]) => {
        setProperties(propertyData);
        setEntities(entityData);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const entityName = (entityId) => entities.find((e) => e.id === entityId)?.legalName || "—";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-stone-900">Finances</h1>
        <p className="text-sm text-stone-500">Pick a property to see its full income and expense ledger.</p>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      {loading ? (
        <p className="text-sm text-stone-500">Loading...</p>
      ) : properties.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
          No properties yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Link
              key={property.id}
              to={`/finances/${property.id}`}
              className="block space-y-1 rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:border-emerald-300"
            >
              <h3 className="font-medium text-stone-900">{property.name || property.address1}</h3>
              <p className="text-sm text-stone-500">
                {property.address1}
                {property.address2 ? `, ${property.address2}` : ""}
                <br />
                {property.city}, {property.state} {property.zip}
              </p>
              <p className="text-xs text-stone-400">{entityName(property.entityId)}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
