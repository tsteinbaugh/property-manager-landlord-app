import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import SearchableSelect from "./SearchableSelect";

const EMPTY_CLAUSE_FORM = { title: "", bodyText: "", group: "" };

// Encodes which pool an attach-picker option came from into its value, so a
// single combined SearchableSelect can drive either POST body shape
// (`clauseId` vs `templateId`) on submit.
function encodeOption(kind, id) {
  return `${kind}:${id}`;
}
function decodeOption(value) {
  const [kind, ...rest] = value.split(":");
  return { kind, id: rest.join(":") };
}

// The clauses attached to one lease, in order — the v2 Lease Builder.
// Sits between the Tenants section and Document (generating a PDF here
// updates the same Document section a v1 upload would).
export default function LeaseBuilderSection({ lease, onChange }) {
  const api = useApi();
  const [library, setLibrary] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [groups, setGroups] = useState([]);
  const [addMode, setAddMode] = useState(null); // null | "library" | "custom"
  const [selectedOption, setSelectedOption] = useState("");
  const [customForm, setCustomForm] = useState(EMPTY_CLAUSE_FORM);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(EMPTY_CLAUSE_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([api.get("/api/clauses"), api.get("/api/clause-templates"), api.get("/api/clause-groups")])
      .then(([clauseData, templateData, groupData]) => {
        setLibrary(clauseData);
        setTemplates(templateData);
        setGroups(groupData);
      })
      .catch((err) => setError(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const attachedClauseIds = new Set(lease.leaseClauses.map((lc) => lc.sourceClauseId).filter(Boolean));
  const attachedTemplateIds = new Set(lease.leaseClauses.map((lc) => lc.sourceTemplateId).filter(Boolean));

  const pickerOptions = [
    ...library
      .filter((c) => !attachedClauseIds.has(c.id))
      .map((c) => ({ value: encodeOption("clause", c.id), label: `${c.title} — ${c.group}` })),
    ...templates
      .filter((t) => !attachedTemplateIds.has(t.id))
      .map((t) => ({ value: encodeOption("template", t.id), label: `${t.title} — ${t.group} (Provided)` })),
  ];

  async function handleAttach(e) {
    e.preventDefault();
    if (!selectedOption) return;
    setSubmitting(true);
    setError(null);
    try {
      const { kind, id } = decodeOption(selectedOption);
      const body = kind === "template" ? { templateId: id } : { clauseId: id };
      await api.post(`/api/leases/${lease.id}/clauses`, body);
      setSelectedOption("");
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
      await api.post(`/api/leases/${lease.id}/clauses`, customForm);
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
    setEditForm({ title: clause.title, bodyText: clause.bodyText, group: clause.group });
  }

  async function handleSaveEdit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await api.put(`/api/leases/${lease.id}/clauses/${editingId}`, editForm);
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

  async function handleAddDefaults() {
    setSubmitting(true);
    setError(null);
    try {
      await api.post(`/api/leases/${lease.id}/clauses/add-defaults`, {});
      await onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
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

  let lastGroup = null;

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-stone-900">Lease Builder</h2>
        <Link to="/clauses" className="text-xs text-emerald-700 hover:underline">
          Manage clause library →
        </Link>
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      {lease.leaseClauses.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
          No clauses attached yet.
        </p>
      ) : (
        <div className="space-y-2">
          {lease.leaseClauses.map((clause) => {
            const showGroupHeading = clause.group !== lastGroup;
            lastGroup = clause.group;

            return (
              <div key={clause.id}>
                {showGroupHeading && (
                  <h3 className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wide text-stone-400 first:mt-0">
                    {clause.sectionLabel.split(".")[0]}. {clause.group}
                  </h3>
                )}
                {editingId === clause.id ? (
                  <form
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
                        <span className="mb-1 block font-medium text-stone-700">Group *</span>
                        <select
                          required
                          value={editForm.group}
                          onChange={(e) => setEditForm({ ...editForm, group: e.target.value })}
                          className="w-full rounded-lg border border-stone-300 px-2 py-1.5 text-sm focus:border-emerald-600 focus:outline-none"
                        >
                          {groups.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
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
                  <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-stone-900">
                        {clause.sectionLabel} {clause.title}
                        {clause.sourceTemplateId && (
                          <span className="ml-2 rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600">
                            Provided
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
                    <p className="mt-1 whitespace-pre-wrap text-sm text-stone-600">{clause.resolvedBodyText}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {addMode === null && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleAddDefaults}
            disabled={submitting}
            className="rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-800 hover:bg-emerald-100 disabled:opacity-50"
          >
            Add my default clauses
          </button>
          <button
            onClick={() => setAddMode("library")}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Attach a clause
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
          onSubmit={handleAttach}
          className="flex flex-wrap items-end gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
        >
          <div className="min-w-64 flex-1">
            <span className="mb-1 block text-sm font-medium text-stone-700">Clause</span>
            {pickerOptions.length === 0 ? (
              <p className="text-sm text-stone-500">
                Nothing left to attach —{" "}
                <Link to="/clauses" className="text-emerald-700 hover:underline">
                  manage your library here
                </Link>
                .
              </p>
            ) : (
              <SearchableSelect
                value={selectedOption}
                onChange={setSelectedOption}
                options={pickerOptions}
                placeholder="Search your library and provided clauses..."
              />
            )}
          </div>
          <button
            type="submit"
            disabled={!selectedOption || submitting}
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
              <span className="mb-1 block font-medium text-stone-700">Group *</span>
              <select
                required
                value={customForm.group}
                onChange={(e) => setCustomForm({ ...customForm, group: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              >
                <option value="">Select a group</option>
                {groups.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
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
          Assembles the lease's key terms and attached clauses (with variables filled in) into a PDF, which shows
          up in the Document section below. Regenerating replaces the previous generated file.
        </p>
      </div>
    </section>
  );
}
