import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const ENTITY_TYPES = [
  { value: "LLC", label: "LLC" },
  { value: "S_CORP", label: "S-Corp" },
  { value: "PERSONAL", label: "Self / Personal" },
  { value: "OTHER", label: "Other" },
];

const EMPTY_FORM = { legalName: "", entityType: "LLC" };

function isDueSoon(dateStr) {
  if (!dateStr) return false;
  const due = new Date(dateStr);
  const days = (due.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
  return days >= 0 && days <= 60;
}

export default function EntitiesPage() {
  const api = useApi();
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);

  async function loadEntities() {
    setLoading(true);
    try {
      const data = await api.get("/api/entities");
      setEntities(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEntities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await api.post("/api/entities", form);
      setForm(EMPTY_FORM);
      setFormOpen(false);
      await loadEntities();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-stone-900">Entities</h1>
          <p className="text-sm text-stone-500">The legal owner behind each of your properties.</p>
        </div>
        <button
          onClick={() => setFormOpen(true)}
          className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800"
        >
          Add entity
        </button>
      </div>

      <p className="rounded-xl border border-stone-200 bg-white p-4 text-sm text-stone-600">
        An entity is who legally owns a property on paper — either an LLC, or just you personally
        ("Self / Personal"). You were set up with a default Self / Personal entity when you signed up, so
        you don't need one of these to add a property. If you form an LLC later, add it as a new entity
        here, then go to that property and reassign it to the LLC — don't try to convert your Self /
        Personal entity into the LLC, since that would carry over any other properties still using it.
      </p>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      {formOpen && (
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-medium text-stone-900">New entity</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Legal name *</span>
              <input
                required
                value={form.legalName}
                onChange={(e) => setForm({ ...form, legalName: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                placeholder="Steinbaugh Estates LLC"
              />
            </label>

            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Entity type *</span>
              <select
                required
                value={form.entityType}
                onChange={(e) => setForm({ ...form, entityType: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              >
                {ENTITY_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="text-xs text-stone-400">
            You can add contact info, EIN, and other details after creating it, from the entity's page.
          </p>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
            >
              {submitting ? "Saving..." : "Create entity"}
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
      ) : entities.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
          No entities yet. Add one to start attaching properties to it.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entities.map((entity) => (
            <Link
              key={entity.id}
              to={`/entities/${entity.id}`}
              className="block space-y-2 rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:border-emerald-300"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-stone-900">{entity.legalName}</h3>
                <div className="flex shrink-0 gap-1">
                  {entity.isDefault && (
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                      Default
                    </span>
                  )}
                  <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600">
                    {ENTITY_TYPES.find((t) => t.value === entity.entityType)?.label || entity.entityType}
                  </span>
                </div>
              </div>
              {entity.stateOfFormation && <p className="text-sm text-stone-500">{entity.stateOfFormation}</p>}
              {entity.annualReportDueDate && (
                <p className={`text-sm ${isDueSoon(entity.annualReportDueDate) ? "font-medium text-amber-700" : "text-stone-500"}`}>
                  Annual report due {new Date(entity.annualReportDueDate).toLocaleDateString()}
                  {isDueSoon(entity.annualReportDueDate) ? " — due soon" : ""}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
