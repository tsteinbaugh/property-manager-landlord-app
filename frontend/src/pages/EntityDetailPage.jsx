import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const ENTITY_TYPES = [
  { value: "LLC", label: "LLC" },
  { value: "S_CORP", label: "S-Corp" },
  { value: "PERSONAL", label: "Self / Personal" },
  { value: "OTHER", label: "Other" },
];

const EDITABLE_FIELDS = [
  "contactEmail",
  "contactPhone",
  "mailingAddress",
  "stateOfFormation",
  "ein",
  "registeredAgent",
  "bankAccount",
  "formationDate",
  "annualReportDueDate",
];

function emptyForm(entity) {
  const form = {};
  for (const field of EDITABLE_FIELDS) {
    const value = entity[field];
    form[field] = value && (field === "formationDate" || field === "annualReportDueDate") ? value.slice(0, 10) : value || "";
  }
  return form;
}

function isDueSoon(dateStr) {
  if (!dateStr) return false;
  const days = (new Date(dateStr).getTime() - Date.now()) / (1000 * 60 * 60 * 24);
  return days >= 0 && days <= 60;
}

export default function EntityDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = useApi();

  const [entity, setEntity] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});
  const [nameForm, setNameForm] = useState({ legalName: "", entityType: "LLC" });
  const [submitting, setSubmitting] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const [entityData, propertyData] = await Promise.all([
        api.get(`/api/entities/${id}`),
        api.get(`/api/properties?entityId=${id}`),
      ]);
      setEntity(entityData);
      setProperties(propertyData);
      setForm(emptyForm(entityData));
      setNameForm({ legalName: entityData.legalName, entityType: entityData.entityType });
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
  }, [id]);

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const body = entity.isDefault ? { ...form } : { ...nameForm, ...form };
    for (const key of Object.keys(body)) {
      if (body[key] === "") delete body[key];
    }

    try {
      const updated = await api.put(`/api/entities/${id}`, body);
      setEntity(updated);
      setForm(emptyForm(updated));
      setEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete "${entity.legalName}"? This can't be undone.`)) return;
    try {
      await api.del(`/api/entities/${id}`);
      navigate("/entities");
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;
  if (!entity) return <p className="text-sm text-red-700">{error || "Entity not found."}</p>;

  return (
    <div className="space-y-6">
      <Link to="/entities" className="text-sm text-emerald-700 hover:underline">
        ← Back to entities
      </Link>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl text-stone-900">{entity.legalName}</h1>
              {entity.isDefault && (
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                  Default
                </span>
              )}
            </div>
            <p className="text-sm text-stone-500">
              {ENTITY_TYPES.find((t) => t.value === entity.entityType)?.label || entity.entityType}
            </p>
          </div>
          <div className="flex shrink-0 gap-3 text-sm">
            {!editing && (
              <button onClick={() => setEditing(true)} className="text-emerald-700 hover:underline">
                Edit
              </button>
            )}
            {!entity.isDefault && (
              <button onClick={handleDelete} className="text-red-600 hover:underline">
                Delete
              </button>
            )}
          </div>
        </div>

        {entity.isDefault && (
          <p className="mt-2 text-xs text-stone-400">
            Name and type follow your account name — update it from the account menu, top right.
          </p>
        )}

        {entity.annualReportDueDate && (
          <p className={`mt-3 text-sm ${isDueSoon(entity.annualReportDueDate) ? "font-medium text-amber-700" : "text-stone-500"}`}>
            Annual report due {new Date(entity.annualReportDueDate).toLocaleDateString()}
            {isDueSoon(entity.annualReportDueDate) ? " — due soon" : ""}
          </p>
        )}

        {editing ? (
          <form onSubmit={handleSave} className="mt-4 space-y-4 border-t border-stone-200 pt-4">
            {!entity.isDefault && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Legal name *</span>
                  <input
                    required
                    value={nameForm.legalName}
                    onChange={(e) => setNameForm({ ...nameForm, legalName: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Entity type *</span>
                  <select
                    required
                    value={nameForm.entityType}
                    onChange={(e) => setNameForm({ ...nameForm, entityType: e.target.value })}
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
            )}

            <div>
              <h2 className="mb-2 text-sm font-semibold text-stone-700">Contact info</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Contact email</span>
                  <input
                    type="email"
                    value={form.contactEmail}
                    onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                    placeholder="business@example.com"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Contact phone</span>
                  <input
                    value={form.contactPhone}
                    onChange={(e) => setForm({ ...form, contactPhone: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm sm:col-span-2">
                  <span className="mb-1 block font-medium text-stone-700">Mailing address</span>
                  <input
                    value={form.mailingAddress}
                    onChange={(e) => setForm({ ...form, mailingAddress: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                    placeholder="For correspondence — can differ from any property address"
                  />
                </label>
              </div>
            </div>

            <div>
              <h2 className="mb-2 text-sm font-semibold text-stone-700">Legal / formation info</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">State of formation</span>
                  <input
                    value={form.stateOfFormation}
                    onChange={(e) => setForm({ ...form, stateOfFormation: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">EIN</span>
                  <input
                    value={form.ein}
                    onChange={(e) => setForm({ ...form, ein: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Registered agent</span>
                  <input
                    value={form.registeredAgent}
                    onChange={(e) => setForm({ ...form, registeredAgent: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Bank account</span>
                  <input
                    value={form.bankAccount}
                    onChange={(e) => setForm({ ...form, bankAccount: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Formation date</span>
                  <input
                    type="date"
                    value={form.formationDate}
                    onChange={(e) => setForm({ ...form, formationDate: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Annual report due date</span>
                  <input
                    type="date"
                    value={form.annualReportDueDate}
                    onChange={(e) => setForm({ ...form, annualReportDueDate: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
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
                {submitting ? "Saving..." : "Save changes"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setForm(emptyForm(entity));
                  setNameForm({ legalName: entity.legalName, entityType: entity.entityType });
                  setEditing(false);
                }}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 border-t border-stone-200 pt-4 text-sm sm:grid-cols-2">
            <DetailRow label="Contact email" value={entity.contactEmail} />
            <DetailRow label="Contact phone" value={entity.contactPhone} />
            <DetailRow label="Mailing address" value={entity.mailingAddress} />
            <DetailRow label="State of formation" value={entity.stateOfFormation} />
            <DetailRow label="EIN" value={entity.ein} />
            <DetailRow label="Registered agent" value={entity.registeredAgent} />
            <DetailRow label="Bank account" value={entity.bankAccount} />
            <DetailRow
              label="Formation date"
              value={entity.formationDate ? new Date(entity.formationDate).toLocaleDateString() : null}
            />
          </div>
        )}
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-medium text-stone-900">Properties</h2>
        {properties.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No properties assigned to this entity yet.{" "}
            <Link to="/properties" className="text-emerald-700 hover:underline">
              Add one
            </Link>
            .
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <div key={property.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                <h3 className="font-medium text-stone-900">{property.name || property.address1}</h3>
                <p className="text-sm text-stone-500">
                  {property.address1}
                  {property.address2 ? `, ${property.address2}` : ""}
                  <br />
                  {property.city}, {property.state} {property.zip}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  if (!value) return null;
  return (
    <div>
      <span className="text-stone-400">{label}: </span>
      <span className="text-stone-700">{value}</span>
    </div>
  );
}
