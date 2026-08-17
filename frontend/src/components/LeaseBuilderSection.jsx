import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import SearchableSelect from "./SearchableSelect";
import { CLAUSE_CATEGORIES } from "../lib/clauseCategories";

const EMPTY_CLAUSE_FORM = { title: "", bodyText: "", sectionNumber: "", category: "", isEarlyTermination: false };

function clauseLabel(c) {
  return `${c.sectionNumber ? `${c.sectionNumber}. ` : ""}${c.title}${c.category ? ` — ${c.category}` : ""}`;
}

// The clauses attached to one lease, in order — the v2 Lease Builder.
// Sits between the Tenants section and Document (generating a PDF here
// updates the same Document section a v1 upload would).
export default function LeaseBuilderSection({ lease, onChange }) {
  const api = useApi();
  const [library, setLibrary] = useState([]);
  const [addMode, setAddMode] = useState(null); // null | "library" | "custom"
  const [selectedClauseId, setSelectedClauseId] = useState("");
  const [customForm, setCustomForm] = useState(EMPTY_CLAUSE_FORM);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(EMPTY_CLAUSE_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/api/clauses")
      .then(setLibrary)
      .catch((err) => setError(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const attachedSourceIds = new Set(lease.leaseClauses.map((lc) => lc.sourceClauseId).filter(Boolean));
  const attachableLibrary = library.filter((c) => !attachedSourceIds.has(c.id));

  async function handleAttachLibrary(e) {
    e.preventDefault();
    if (!selectedClauseId) return;
    setSubmitting(true);
    setError(null);
    try {
      await api.post(`/api/leases/${lease.id}/clauses`, { clauseId: selectedClauseId });
      setSelectedClauseId("");
      setAddMode(null);
      await onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleAddCustom(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...customForm };
      if (!body.sectionNumber) delete body.sectionNumber;
      if (!body.category) delete body.category;
      await api.post(`/api/leases/${lease.id}/clauses`, body);
      setCustomForm(EMPTY_CLAUSE_FORM);
      setAddMode(null);
      await onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  function startEdit(clause) {
    setEditingId(clause.id);
    setEditForm({
      title: clause.title,
      bodyText: clause.bodyText,
      sectionNumber: clause.sectionNumber || "",
      category: clause.category || "",
      isEarlyTermination: clause.isEarlyTermination,
    });
  }

  async function handleSaveEdit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...editForm };
      if (!body.sectionNumber) delete body.sectionNumber;
      if (!body.category) delete body.category;
      await api.put(`/api/leases/${lease.id}/clauses/${editingId}`, body);
      setEditingId(null);
      await onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleRemove(clauseId) {
    if (!confirm("Remove this clause from the lease?")) return;
    setError(null);
    try {
      await api.del(`/api/leases/${lease.id}/clauses/${clauseId}`);
      await onChange();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleGenerate() {
    setGenerating(true);
    setError(null);
    try {
      await api.post(`/api/leases/${lease.id}/generate-document`, {});
      await onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setGenerating(false);
    }
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-stone-900">Lease Builder</h2>
        <Link to="/clauses" className="text-xs text-emerald-700 hover:underline">
          Manage clause library →
        </Link>
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      {lease.missingEarlyTerminationClause && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          This lease has no early termination clause — nothing spells out what happens if a tenant breaks the
          lease and stops paying. Consider adding one before this lease is signed.
        </div>
      )}

      {lease.leaseClauses.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
          No clauses attached yet.
        </p>
      ) : (
        <div className="space-y-2">
          {lease.leaseClauses.map((clause) =>
            editingId === clause.id ? (
              <form
                key={clause.id}
                onSubmit={handleSaveEdit}
                className="space-y-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="block text-xs">
                    <span className="mb-1 block font-medium text-stone-700">Title *</span>
                    <input
                      required
                      value={editForm.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      className="w-full rounded-lg border border-stone-300 px-2 py-1.5 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </label>
                  <label className="block text-xs">
                    <span className="mb-1 block font-medium text-stone-700">Section number</span>
                    <input
                      value={editForm.sectionNumber}
                      onChange={(e) => setEditForm({ ...editForm, sectionNumber: e.target.value })}
                      className="w-full rounded-lg border border-stone-300 px-2 py-1.5 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </label>
                  <label className="block text-xs">
                    <span className="mb-1 block font-medium text-stone-700">Category</span>
                    <input
                      list="clause-categories-edit"
                      value={editForm.category}
                      onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                      className="w-full rounded-lg border border-stone-300 px-2 py-1.5 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                    <datalist id="clause-categories-edit">
                      {CLAUSE_CATEGORIES.map((c) => (
                        <option key={c} value={c} />
                      ))}
                    </datalist>
                  </label>
                  <label className="flex items-center gap-2 self-end pb-1.5 text-xs">
                    <input
                      type="checkbox"
                      checked={editForm.isEarlyTermination}
                      onChange={(e) => setEditForm({ ...editForm, isEarlyTermination: e.target.checked })}
                      className="h-4 w-4 rounded border-stone-300"
                    />
                    <span className="font-medium text-stone-700">Early termination clause</span>
                  </label>
                  <label className="block text-xs sm:col-span-2">
                    <span className="mb-1 block font-medium text-stone-700">Clause text (verbatim) *</span>
                    <textarea
                      required
                      rows={4}
                      value={editForm.bodyText}
                      onChange={(e) => setEditForm({ ...editForm, bodyText: e.target.value })}
                      className="w-full rounded-lg border border-stone-300 px-2 py-1.5 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </label>
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
                  >
                    {submitting ? "Saving..." : "Save"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-50"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div key={clause.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-2">
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
                  <div className="flex shrink-0 gap-3 text-sm">
                    <button onClick={() => startEdit(clause)} className="text-emerald-700 hover:underline">
                      Edit
                    </button>
                    <button onClick={() => handleRemove(clause.id)} className="text-red-600 hover:underline">
                      Remove
                    </button>
                  </div>
                </div>
                <p className="mt-1 whitespace-pre-wrap text-sm text-stone-600">{clause.bodyText}</p>
              </div>
            ),
          )}
        </div>
      )}

      {addMode === null && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setAddMode("library")}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Add from library
          </button>
          <button
            onClick={() => setAddMode("custom")}
            className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
          >
            Add custom clause
          </button>
        </div>
      )}

      {addMode === "library" && (
        <form
          onSubmit={handleAttachLibrary}
          className="flex flex-wrap items-end gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
        >
          <div className="min-w-64 flex-1">
            <span className="mb-1 block text-sm font-medium text-stone-700">Clause</span>
            {attachableLibrary.length === 0 ? (
              <p className="text-sm text-stone-500">
                Nothing left in your library to add —{" "}
                <Link to="/clauses" className="text-emerald-700 hover:underline">
                  manage it here
                </Link>
                .
              </p>
            ) : (
              <SearchableSelect
                value={selectedClauseId}
                onChange={setSelectedClauseId}
                options={attachableLibrary.map((c) => ({ value: c.id, label: clauseLabel(c) }))}
                placeholder="Search your clause library..."
              />
            )}
          </div>
          <button
            type="submit"
            disabled={!selectedClauseId || submitting}
            className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
          >
            Attach
          </button>
          <button
            type="button"
            onClick={() => setAddMode(null)}
            className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
          >
            Cancel
          </button>
        </form>
      )}

      {addMode === "custom" && (
        <form
          onSubmit={handleAddCustom}
          className="space-y-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
        >
          <p className="text-xs text-stone-500">
            This one-off clause is added to this lease only — it doesn't get saved to your library.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Title *</span>
              <input
                required
                value={customForm.title}
                onChange={(e) => setCustomForm({ ...customForm, title: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Section number</span>
              <input
                value={customForm.sectionNumber}
                onChange={(e) => setCustomForm({ ...customForm, sectionNumber: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Category</span>
              <input
                list="clause-categories-custom"
                value={customForm.category}
                onChange={(e) => setCustomForm({ ...customForm, category: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
              <datalist id="clause-categories-custom">
                {CLAUSE_CATEGORIES.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </label>
            <label className="flex items-center gap-2 self-end pb-2 text-sm">
              <input
                type="checkbox"
                checked={customForm.isEarlyTermination}
                onChange={(e) => setCustomForm({ ...customForm, isEarlyTermination: e.target.checked })}
                className="h-4 w-4 rounded border-stone-300"
              />
              <span className="font-medium text-stone-700">This is an early termination clause</span>
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="mb-1 block font-medium text-stone-700">Clause text (verbatim) *</span>
              <textarea
                required
                rows={4}
                value={customForm.bodyText}
                onChange={(e) => setCustomForm({ ...customForm, bodyText: e.target.value })}
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
              {submitting ? "Saving..." : "Add clause"}
            </button>
            <button
              type="button"
              onClick={() => setAddMode(null)}
              className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <button
          onClick={handleGenerate}
          disabled={generating || lease.leaseClauses.length === 0}
          className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
        >
          {generating ? "Generating..." : "Generate Lease PDF"}
        </button>
        {lease.leaseClauses.length === 0 && (
          <p className="mt-2 text-xs text-stone-400">Attach at least one clause to generate a lease document.</p>
        )}
        <p className="mt-2 text-xs text-stone-400">
          Assembles the lease's key terms and attached clauses into a PDF, which shows up in the Document section
          below. Regenerating replaces the previous generated file.
        </p>
      </div>
    </section>
  );
}
