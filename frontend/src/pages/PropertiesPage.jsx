import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import RentStatusPill from "../components/RentStatusPill";

const EMPTY_FORM = { entityId: "", name: "", address1: "", address2: "", city: "", state: "", zip: "" };

export default function PropertiesPage() {
  const api = useApi();
  const [entities, setEntities] = useState([]);
  const [properties, setProperties] = useState([]);
  const [rentStatuses, setRentStatuses] = useState([]);
  const [entityFilter, setEntityFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);

  async function loadAll(filterEntityId) {
    setLoading(true);
    try {
      const [entityData, propertyData] = await Promise.all([
        api.get("/api/entities"),
        api.get(`/api/properties${filterEntityId ? `?entityId=${filterEntityId}` : ""}`),
      ]);
      setEntities(entityData);
      setProperties(propertyData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAll(entityFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityFilter]);

  useEffect(() => {
    api
      .get("/api/rent-status")
      .then(setRentStatuses)
      .catch(() => {}); // non-critical — the pill just doesn't render if this fails
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rentStatusFor = (propertyId) => rentStatuses.find((r) => r.propertyId === propertyId)?.status;

  function openCreateForm() {
    setForm({ ...EMPTY_FORM, entityId: entities[0]?.id || "" });
    setFormOpen(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await api.post("/api/properties", form);
      setFormOpen(false);
      await loadAll(entityFilter);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  const entityName = (entityId) => entities.find((e) => e.id === entityId)?.legalName || "—";

  if (!loading && entities.length === 0) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl text-stone-900">Properties</h1>
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
          You need at least one entity before adding a property.{" "}
          <Link to="/entities" className="text-emerald-700 hover:underline">
            Add one first
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-stone-900">Properties</h1>
          <p className="text-sm text-stone-500">Every property is owned by one of your entities.</p>
        </div>
        <button
          onClick={openCreateForm}
          className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800"
        >
          Add property
        </button>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <label className="block max-w-xs text-sm">
        <span className="mb-1 block font-medium text-stone-700">Filter by entity</span>
        <select
          value={entityFilter}
          onChange={(e) => setEntityFilter(e.target.value)}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
        >
          <option value="">All entities</option>
          {entities.map((entity) => (
            <option key={entity.id} value={entity.id}>
              {entity.legalName}
            </option>
          ))}
        </select>
      </label>

      {formOpen && (
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-medium text-stone-900">New property</h2>

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
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                placeholder="Maple St"
              />
            </label>

            <label className="block text-sm sm:col-span-2">
              <span className="mb-1 block font-medium text-stone-700">Address line 1 *</span>
              <input
                required
                value={form.address1}
                onChange={(e) => setForm({ ...form, address1: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                placeholder="123 Maple St"
              />
            </label>

            <label className="block text-sm sm:col-span-2">
              <span className="mb-1 block font-medium text-stone-700">Address line 2</span>
              <input
                value={form.address2}
                onChange={(e) => setForm({ ...form, address2: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                placeholder="Unit, apt, etc."
              />
            </label>

            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">City *</span>
              <input
                required
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                placeholder="Frederick"
              />
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">State *</span>
                <input
                  required
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  placeholder="CO"
                />
              </label>

              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Zip *</span>
                <input
                  required
                  value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  placeholder="80530"
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
              {submitting ? "Saving..." : "Create property"}
            </button>
            <button
              type="button"
              onClick={() => setFormOpen(false)}
              className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              Cancel
            </button>
          </div>
        </form>
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
              to={`/properties/${property.id}`}
              className="block space-y-2 rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:border-emerald-300"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-stone-900">{property.name || property.address1}</h3>
                {rentStatusFor(property.id) && rentStatusFor(property.id) !== "PAID" && (
                  <RentStatusPill status={rentStatusFor(property.id)} />
                )}
              </div>
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
