import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import BackLink from "../components/BackLink";
import { CLAUSE_CATEGORIES } from "../lib/clauseCategories";

const EMPTY_FORM = { title: "", bodyText: "", sectionNumber: "", category: "", isEarlyTermination: false };

export default function ClauseLibraryPage() {
  const api = useApi();
  const [clauses, setClauses] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const [clauseData, templateData] = await Promise.all([
        api.get("/api/clauses"),
        api.get("/api/clause-templates"),
      ]);
      setClauses(clauseData);
      setTemplates(templateData);
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

  function openForm(clause) {
    if (clause) {
      setForm({
        title: clause.title,
        bodyText: clause.bodyText,
        sectionNumber: clause.sectionNumber || "",
        category: clause.category || "",
        isEarlyTermination: clause.isEarlyTermination,
      });
      setEditingId(clause.id);
    } else {
      setForm(EMPTY_FORM);
      setEditingId(null);
    }
    setFormOpen(true);
    setTemplatesOpen(false);
  }

  // Importing a template just prefills the add-clause form with its content
  // — the landlord edits before saving their own copy. Nothing is created
  // until they submit, matching "template library, landlord edits to match
  // their lease."
  function importTemplate(template) {
    setForm({
      title: template.title,
      bodyText: template.bodyText,
      sectionNumber: template.sectionNumber || "",
      category: template.category || "",
      isEarlyTermination: template.isEarlyTermination,
    });
    setEditingId(null);
    setFormOpen(true);
    setTemplatesOpen(false);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...form };
      if (!body.sectionNumber) delete body.sectionNumber;
      if (!body.category) delete body.category;

      if (editingId) {
        await api.put(`/api/clauses/${editingId}`, body);
      } else {
        await api.post("/api/clauses", body);
      }
      setFormOpen(false);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this clause from your library? Leases it's already attached to keep their own copy.")) return;
    setError(null);
    try {
      await api.del(`/api/clauses/${id}`);
      await load();
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;

  return (
    <div className="space-y-6">
      <BackLink fallback="/leases" />

      <div>
        <h1 className="text-2xl text-stone-900">Clause Library</h1>
        <p className="text-sm text-stone-500">
          Your reusable clauses — stored verbatim, attached to leases from the Lease Builder.
        </p>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => openForm(null)}
          className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
        >
          Add clause
        </button>
        <button
          onClick={() => {
            setTemplatesOpen(!templatesOpen);
            setFormOpen(false);
          }}
          className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
        >
          Browse templates
        </button>
      </div>

      {templatesOpen && (
        <div className="space-y-2 rounded-xl border border-stone-200 bg-stone-50 p-4">
          <p className="text-xs text-stone-500">
            Generic starting points, not legal advice — edit them to match your lease and state before use.
          </p>
          {templates.map((t) => (
            <div key={t.id} className="flex items-start justify-between gap-3 rounded-lg bg-white p-3 shadow-sm">
              <div>
                <p className="text-sm font-medium text-stone-900">
                  {t.sectionNumber ? `${t.sectionNumber}. ` : ""}
                  {t.title}
                  {t.isEarlyTermination && (
                    <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                      Early termination
                    </span>
                  )}
                </p>
                <p className="mt-1 text-xs text-stone-500">{t.bodyText}</p>
              </div>
              <button
                onClick={() => importTemplate(t)}
                className="shrink-0 text-sm text-emerald-700 hover:underline"
              >
                Add to my library
              </button>
            </div>
          ))}
        </div>
      )}

      {formOpen && (
        <form onSubmit={handleSave} className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Title *</span>
              <input
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Section number</span>
              <input
                value={form.sectionNumber}
                onChange={(e) => setForm({ ...form, sectionNumber: e.target.value })}
                placeholder="e.g. 12 or 12.3"
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Category</span>
              <input
                list="clause-categories"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
              <datalist id="clause-categories">
                {CLAUSE_CATEGORIES.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </label>
            <label className="flex items-center gap-2 self-end pb-2 text-sm">
              <input
                type="checkbox"
                checked={form.isEarlyTermination}
                onChange={(e) => setForm({ ...form, isEarlyTermination: e.target.checked })}
                className="h-4 w-4 rounded border-stone-300"
              />
              <span className="font-medium text-stone-700">This is an early termination clause</span>
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="mb-1 block font-medium text-stone-700">Clause text (verbatim) *</span>
              <textarea
                required
                rows={5}
                value={form.bodyText}
                onChange={(e) => setForm({ ...form, bodyText: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
            >
              {submitting ? "Saving..." : editingId ? "Save changes" : "Add clause"}
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

      {clauses.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
          No clauses yet — add one, or browse templates for a starting point.
        </p>
      ) : (
        <div className="space-y-2">
          {clauses.map((clause) => (
            <div key={clause.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-medium text-stone-900">
                    {clause.sectionNumber ? `${clause.sectionNumber}. ` : ""}
                    {clause.title}
                    {clause.category && (
                      <span className="ml-2 rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600">
                        {clause.category}
                      </span>
                    )}
                    {clause.isEarlyTermination && (
                      <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                        Early termination
                      </span>
                    )}
                  </p>
                  <p className="mt-1 whitespace-pre-wrap text-sm text-stone-600">{clause.bodyText}</p>
                </div>
                <div className="flex shrink-0 gap-3 text-sm">
                  <button onClick={() => openForm(clause)} className="text-emerald-700 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(clause.id)} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
