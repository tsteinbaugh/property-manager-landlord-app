import { useState } from "react";
import { useApi } from "../hooks/useApi";

function emptyFormFor(fields) {
  return Object.fromEntries(fields.map((f) => [f.key, f.type === "select" ? f.options[0]?.value || "" : ""]));
}

// The Category-view building block for Property Specs — one shared component used for
// all 7 categories (Paint, Flooring, Countertops, Fixtures, Appliances, Backsplash,
// Exterior/Grounds), each with its own `fields` config. Same fixed-propertyId CRUD shape
// as IncomeSection/ExpenseSection (Property Specs is always property-scoped, no
// cross-property picker needed), combined with SimpleRecordSection's fields-array-driven
// form rendering, extended with a `select` field type for Fixture.fixtureType.
export default function PropertySpecSection({ title, addLabel, emptyLabel, items, fields, apiPath, propertyId, onChange, renderSummary }) {
  const api = useApi();
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(() => emptyFormFor(fields));
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function openForm(item) {
    if (item) {
      const f = {};
      for (const field of fields) f[field.key] = item[field.key] ?? "";
      setForm(f);
      setEditingId(item.id);
    } else {
      setForm(emptyFormFor(fields));
      setEditingId(null);
    }
    setFormOpen(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...form };
      for (const field of fields) {
        if (body[field.key] === "") delete body[field.key];
        else if (field.type === "number") body[field.key] = Number(body[field.key]);
      }

      if (editingId) {
        await api.put(`${apiPath}/${editingId}`, body);
      } else {
        await api.post(apiPath, { ...body, propertyId });
      }
      setFormOpen(false);
      onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(itemId) {
    if (!confirm("Delete this record? This can't be undone.")) return;
    setError(null);
    try {
      await api.del(`${apiPath}/${itemId}`);
      onChange();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-stone-900">{title}</h2>
        <button
          onClick={() => openForm(null)}
          className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
        >
          {addLabel}
        </button>
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      {formOpen && (
        <form onSubmit={handleSave} className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fields.map((field) => (
              <label key={field.key} className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">
                  {field.label}
                  {field.required ? " *" : ""}
                </span>
                {field.type === "select" ? (
                  <select
                    required={field.required}
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  >
                    {field.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    required={field.required}
                    type={field.type || "text"}
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    placeholder={field.placeholder}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                )}
              </label>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
            >
              {submitting ? "Saving..." : editingId ? "Save changes" : addLabel}
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

      {items.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">{emptyLabel}</p>
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm text-stone-700">{renderSummary(item)}</p>
              <div className="flex gap-3 text-sm">
                <button onClick={() => openForm(item)} className="text-emerald-700 hover:underline">
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
