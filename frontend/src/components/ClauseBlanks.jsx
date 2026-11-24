import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { Question, displayValue, useFactCatalog } from "./FactQuestions";

const empty = (v) => v === undefined || v === null || v === "";

// Saves answers where they're kept: the property's or lease's answers, or the
// lease's own fields (a late fee amount also answers "late fee charged").
async function saveFacts(api, lease, entries) {
  const facts = { property: {}, lease: {}, leaseField: {} };
  for (const [target, id, value] of entries) facts[target][id] = value;
  if (Object.keys(facts.property).length) await api.put(`/api/properties/${lease.propertyId}/facts`, { facts: facts.property });
  if (Object.keys(facts.leaseField).length) await api.put(`/api/leases/${lease.id}`, facts.leaseField);
  if (Object.keys(facts.lease).length) await api.put(`/api/leases/${lease.id}/facts`, { facts: facts.lease });
}

// Blanks in the lease's clauses: a warning only, like Legal duty questions; the
// PDF prints a line for each (Taylor, 2026-11-23).
export function ClauseBlanksPanel({ lease, onSaved }) {
  const api = useApi();
  const catalog = useFactCatalog();
  const [draft, setDraft] = useState({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const blanks = lease.clauseBlanks || [];
  if (blanks.length === 0 || !catalog) return null;
  const answered = blanks.filter((b) => b.question && !empty(draft[b.key]));

  async function save(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      await saveFacts(api, lease, answered.map((b) => [b.target, b.question.id, draft[b.key]]));
      setDraft({});
      await onSaved();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={save} className="space-y-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
      <div>
        <h3 className="text-sm font-semibold text-amber-900">
          {blanks.length === 1 ? "1 blank" : `${blanks.length} blanks`} in this lease's clauses
        </h3>
        <p className="mt-1 text-xs text-amber-800">
          You can still generate the lease PDF. Any blank left here prints as a line to fill in by hand. Answers are saved to the property or
          the lease, so each is asked once.
        </p>
      </div>
      {error && <p className="text-sm text-red-700">{error}</p>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {blanks.map((b) => (
          <div key={b.key} className="rounded-lg bg-white p-3">
            <p className="mb-1 text-sm font-medium text-stone-700">{b.label}</p>
            {b.question ? (
              <>
                {b.question.help && <p className="mb-2 text-xs text-stone-500">{b.question.help}</p>}
                <Question question={b.question} value={draft[b.key]} catalog={catalog} onChange={(v) => setDraft({ ...draft, [b.key]: v })} />
              </>
            ) : (
              <p className="text-sm text-stone-600">
                {b.where ? `Fill it in on ${b.where}.` : "The app doesn't know this variable. Edit the clause to fix its name."}
              </p>
            )}
            <p className="mt-1 text-xs text-stone-400">
              In: {b.clauses.slice(0, 3).join("; ")}
              {b.clauses.length > 3 ? ` and ${b.clauses.length - 3} more` : ""}
            </p>
          </div>
        ))}
      </div>
      {blanks.some((b) => b.question) && (
        <button type="submit" disabled={saving || answered.length === 0} className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50">
          {saving ? "Saving..." : answered.length === 1 ? "Save 1 answer" : answered.length ? `Save ${answered.length} answers` : "Save answers"}
        </button>
      )}
    </form>
  );
}

// The terms that belong to one clause, asked under it.
export function ClauseTerms({ clause, lease, onSaved }) {
  const api = useApi();
  const catalog = useFactCatalog();
  const [draft, setDraft] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const terms = clause.terms || [];
  if (terms.length === 0 || !catalog) return null;
  const facts = lease.facts || {};

  async function save(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const changed = terms.filter((q) => (draft[q.id] ?? null) !== (facts[q.id] ?? null));
      await saveFacts(api, lease, changed.map((q) => ["lease", q.id, empty(draft[q.id]) ? null : draft[q.id]]));
      setDraft(null);
      await onSaved();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mt-3 rounded-lg border border-stone-200 bg-stone-50 p-3 text-sm">
      {error && <p className="mb-2 text-red-700">{error}</p>}
      {draft ? (
        <form onSubmit={save} className="space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {terms.map((q) => (
              <div key={q.id}>
                <p className="mb-1 font-medium text-stone-700">{q.label}</p>
                {q.help && <p className="mb-1 text-xs text-stone-500">{q.help}</p>}
                <Question question={q} value={draft[q.id]} catalog={catalog} onChange={(v) => setDraft({ ...draft, [q.id]: v })} />
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <button type="submit" disabled={saving} className="rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-800 disabled:opacity-50">
              {saving ? "Saving..." : "Save"}
            </button>
            <button type="button" onClick={() => setDraft(null)} className="rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-50">
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            {terms.map((q) => (
              <p key={q.id} className="text-stone-600">
                <span className="font-medium text-stone-700">{q.label}:</span>{" "}
                {displayValue(q, facts[q.id], catalog) ?? <span className="text-amber-700">blank</span>}
              </p>
            ))}
          </div>
          <button type="button" onClick={() => setDraft({ ...facts })} className="shrink-0 text-emerald-700 hover:underline">
            Fill in
          </button>
        </div>
      )}
    </div>
  );
}
