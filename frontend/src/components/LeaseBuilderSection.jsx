import { useEffect, useState } from "react";
import MissingFactsPanel from "./MissingFactsPanel";
import AboutClause from "./AboutClause";
import { ClauseBlanksPanel, ClauseTerms } from "./ClauseBlanks";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import SearchableSelect from "./SearchableSelect";
import LeaseAttachmentsPanel from "./LeaseAttachmentsPanel";
import { isWrongForCauseVariant } from "../lib/forCauseEvictionVariant";
import { pickerTitle, sortClausesForDisplay } from "../lib/jurisdictions";

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
  // The picker offers only clauses for this lease's own property state (Taylor, 2026-11-21: a
  // lease never needs another state's clauses; browsing every state is the Clause Library's job).
  const stateFilter = lease.property?.state || null;

  // The fill-in-the-gaps questions and the clauses the law requires for this
  // lease now (GET /api/leases/:id/applicability), refreshed whenever the lease changes.
  const [applicability, setApplicability] = useState(null);
  useEffect(() => {
    api
      .get(`/api/leases/${lease.id}/applicability`)
      .then(setApplicability)
      .catch(() => setApplicability(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lease]);
  const lockedTemplateIds = new Set((applicability?.clauses.required || []).map((c) => c.templateId));
  const missingRequired = (applicability?.clauses.required || []).filter((c) => !c.attached);
  const missingLegalDuty = (applicability?.clauses.legalDuty || []).filter((c) => !c.attached);
  const blockingQuestions = (applicability?.questions || []).filter((q) => q.blocks);
  // Recommended and Optional clauses this lease's answers rule out (pool rules
  // without a pool) are hidden from the picker unless the landlord asks to see them.
  const ruledOutIds = new Set((applicability?.hidden || []).map((h) => h.templateId));
  const [showRuledOut, setShowRuledOut] = useState(false);

  async function handleAddMissing(templateId) {
    setSubmitting(true);
    setError(null);
    try {
      await api.post(`/api/leases/${lease.id}/clauses`, { templateId });
      await onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

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

  // `treatBlankAsUniversal` defaults to true for a landlord's own personal clauses — they wrote
  // the text themselves, so a never-tagged clause still means "applies everywhere I use it."
  // Provided-library templates pass `false`: per clauseTemplates.js's header, blank `states`
  // there means "not yet verified for any state," so it never stands in as a verified-looking
  // clause for a state nobody's checked it against (see the security-deposit-return latent-trap finding
  // Ohio's research surfaced and Taylor decided to fix, 2026-09-18).
  function matchesStateFilter(item, { treatBlankAsUniversal = true } = {}) {
    if (!item.states || item.states.length === 0) return treatBlankAsUniversal;
    return item.states.includes(stateFilter);
  }

  // When filtered to a specific state, hide a universal template that a visible state-specific
  // template fully replaces (see clauseTemplates.js's `supersedes` field) — same behavior as
  // ClauseLibraryPage, so the picker doesn't offer both a generic and a more-specific version
  // of the same clause at once.
  const matchingTemplates = templates.filter((t) => matchesStateFilter(t, { treatBlankAsUniversal: false }));
  const supersededTemplateIds = new Set(matchingTemplates.filter((t) => t.supersedes).map((t) => t.supersedes));

  // Two CO clause templates (month-to-month-notice-co-exempt / -covered) cover mutually
  // exclusive legal situations for the same property fact — which one applies is a property
  // attribute (forCauseEvictionExemption), not a landlord judgment call, so hide whichever one
  // doesn't match this lease's property rather than making the landlord pick correctly by hand.
  const forCauseExemption = lease.property?.forCauseEvictionExemption;

  // Templates sharing a `choiceGroup` are mutually exclusive alternatives (e.g. California's
  // TPA-covered vs TPA-exempt notice) — once one is attached, stop offering the others. The
  // backend refuses a second one anyway; see backend/src/lib/clauseChoiceGroups.js.
  const attachedChoiceGroups = new Set(
    templates.filter((t) => t.choiceGroup && attachedTemplateIds.has(t.id)).map((t) => t.choiceGroup),
  );

  // Grouped by lease section (in the lease's own section order), then sorted by title.
  const pickerItems = [
    ...library
      .filter((c) => !attachedClauseIds.has(c.id) && matchesStateFilter(c))
      .map((c) => ({ ...c, optionValue: encodeOption("clause", c.id) })),
    ...matchingTemplates
      .filter(
        (t) =>
          !attachedTemplateIds.has(t.id) &&
          !supersededTemplateIds.has(t.id) &&
          !isWrongForCauseVariant(t.id, forCauseExemption) &&
          !(t.choiceGroup && attachedChoiceGroups.has(t.choiceGroup)) &&
          (showRuledOut || !ruledOutIds.has(t.id)),
      )
      .map((t) => ({ ...t, optionValue: encodeOption("template", t.id) })),
  ];
  const pickerOptions = groups.flatMap((group) =>
    sortClausesForDisplay(
      pickerItems.filter((item) => item.group === group),
      templates,
    ).map((item) => ({ value: item.optionValue, label: pickerTitle(item.title), group })),
  );


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

  const templatesById = new Map(templates.map((t) => [t.id, t]));
  const selected = selectedOption ? decodeOption(selectedOption) : null;
  const selectedTemplate = selected?.kind === "template" ? templatesById.get(selected.id) : null;
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

      {applicability?.questions.length > 0 && (
        <MissingFactsPanel lease={lease} questions={applicability.questions} onSaved={onChange} />
      )}
      <ClauseBlanksPanel lease={lease} onSaved={onChange} />

      {lease.leaseClauses.length > 0 && (missingRequired.length > 0 || missingLegalDuty.length > 0) && (
        <MissingClausesNotice
          required={missingRequired}
          legalDuty={missingLegalDuty}
          disabled={submitting}
          onAdd={handleAddMissing}
        />
      )}

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
                    <p className="text-sm font-medium text-stone-900">
                      {clause.sectionLabel} {clause.title}
                      {clause.sourceTemplateId && (
                        <span className="ml-2 rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600">
                          Provided
                        </span>
                      )}
                    </p>
                    <p className="mt-1 whitespace-pre-wrap text-sm text-stone-600">{clause.resolvedBodyText}</p>
                    <ClauseTerms clause={clause} lease={lease} onSaved={onChange} />
                    <AboutClause
                      template={templatesById.get(clause.sourceTemplateId)}
                      state={stateFilter}
                      actions={
                        <div className="flex shrink-0 gap-3 text-sm">
                          {!clause.sourceTemplateId && (
                            <button onClick={() => startEdit(clause)} className="text-emerald-700 hover:underline">
                              Edit
                            </button>
                          )}
                          {lockedTemplateIds.has(clause.sourceTemplateId) ? (
                            <span className="text-stone-400" title="The law requires this clause in this lease">
                              Required, can't be removed
                            </span>
                          ) : (
                            <button onClick={() => handleRemove(clause.id)} className="text-red-600 hover:underline">
                              Remove
                            </button>
                          )}
                        </div>
                      }
                    />
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
          {!stateFilter && (
            <p className="w-full text-sm text-amber-700">
              This lease's property has no state set, so only your own untagged clauses are listed. Set the
              property's state to see the provided clauses for it.
            </p>
          )}
          <div className="min-w-64 flex-1">
            <span className="mb-1 block text-sm font-medium text-stone-700">Clause</span>
            {ruledOutIds.size > 0 && (
              <button
                type="button"
                onClick={() => setShowRuledOut(!showRuledOut)}
                className="mb-2 text-xs text-stone-500 hover:text-stone-700 hover:underline"
              >
                {showRuledOut
                  ? "Hide clauses your answers rule out"
                  : `${ruledOutIds.size} clause${ruledOutIds.size === 1 ? "" : "s"} hidden because your answers rule ${ruledOutIds.size === 1 ? "it" : "them"} out (for example, pool rules for a property without a pool). Show them`}
              </button>
            )}
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
          {selectedTemplate && (
            <div className="w-full">
              <AboutClause key={selectedTemplate.id} template={selectedTemplate} state={stateFilter} />
            </div>
          )}
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

      <LeaseAttachmentsPanel api={api} leaseId={lease.id} />

      <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <button
          onClick={handleGenerate}
          disabled={generating || lease.leaseClauses.length === 0 || missingRequired.length > 0 || blockingQuestions.length > 0}
          className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
        >
          {generating ? "Generating..." : "Generate Lease PDF"}
        </button>
        {lease.leaseClauses.length === 0 && (
          <p className="mt-2 text-xs text-stone-400">Attach at least one clause to generate a lease document.</p>
        )}
        {lease.leaseClauses.length > 0 && blockingQuestions.length > 0 && (
          <p className="mt-2 text-xs text-red-700">
            Answer the {blockingQuestions.length === 1 ? "question" : `${blockingQuestions.length} questions`} marked
            "Needed for the lease" at the top of the Lease Builder before generating the lease.
          </p>
        )}
        {lease.leaseClauses.length > 0 && blockingQuestions.length === 0 && missingRequired.length > 0 && (
          <p className="mt-2 text-xs text-red-700">
            Add the {missingRequired.length === 1 ? "clause" : `${missingRequired.length} clauses`} the law requires
            (listed above) before generating the lease.
          </p>
        )}
        <p className="mt-2 text-xs text-stone-400">
          Assembles the lease's key terms and attached clauses (with variables filled in) into a PDF, which shows
          up in the Document section below. Regenerating replaces the previous generated file.
        </p>
      </div>
    </section>
  );
}

// The clauses the law requires for this lease now that it doesn't have, for
// example after an answer changed once clauses were added (Taylor, 2026-11-22):
// a missing Required clause blocks the PDF, a missing Legal duty clause warns.
function MissingClausesNotice({ required, legalDuty, disabled, onAdd }) {
  const row = (c) => (
    <li key={c.templateId} className="flex items-start justify-between gap-3">
      <span>
        <span className="font-medium">{c.title}</span>
        {c.note && <span className="text-stone-600">: applies {c.note}</span>}
      </span>
      <button
        type="button"
        disabled={disabled}
        onClick={() => onAdd(c.templateId)}
        className="shrink-0 rounded-lg border border-stone-300 bg-white px-2 py-1 text-xs font-medium text-stone-700 hover:bg-stone-50 disabled:opacity-50"
      >
        Add it
      </button>
    </li>
  );
  return (
    <div className="space-y-3">
      {required.length > 0 && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
          <p className="font-semibold">This lease is missing {required.length === 1 ? "a clause" : "clauses"} the law requires for it</p>
          <p className="mt-1 text-xs">The lease PDF can't be generated until {required.length === 1 ? "it's" : "they're"} added.</p>
          <ul className="mt-2 space-y-2">{required.map(row)}</ul>
        </div>
      )}
      {legalDuty.length > 0 && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">The law requires you to give the tenant this information</p>
          <p className="mt-1 text-xs">
            Add the clause, or untick it in the Clause Library if you give the tenant this another way.
          </p>
          <ul className="mt-2 space-y-2">{legalDuty.map(row)}</ul>
        </div>
      )}
    </div>
  );
}

