import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { Question, displayValue, useFactCatalog } from "./FactQuestions";

const empty = (v) => v === undefined || v === null || v === "";

// A legal limit the answer is over in this lease's state, as its reason.
function overLimit(q, value, state) {
  const limit = q?.limits?.[state];
  return limit && !empty(value) && Number(value) > limit.max ? limit.why : null;
}

// Whether a follow-up applies, given the answers so far (its parent must too).
function applies(q, answers, terms) {
  if (!q.showIf) return true;
  const parent = terms.find((t) => t.id === q.showIf.id);
  return q.showIf.in.includes(answers[q.showIf.id]) && (!parent || applies(parent, answers, terms));
}

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
  const state = lease.property?.state;
  const choices = blanks.filter((b) => b.question?.choice).length;
  // A choice's follow-up ("A flat amount each month" asks the amount) shows as
  // soon as it's picked, not only after saving (checked on screen 2026-11-26).
  const allTerms = (lease.leaseClauses || []).flatMap((c) => c.terms || []);
  const followUps = (b) => {
    if (!b.question?.choice) return [];
    const seen = new Set();
    return allTerms
      .filter((t) => t.showIf?.id === b.question.id && !seen.has(t.id) && seen.add(t.id))
      .filter((t) => t.showIf.in.includes(draft[b.key]))
      .map((t) => ({ key: `${b.target}.${t.id}`, target: b.target, question: t }));
  };
  const entries = blanks.flatMap((b) => [b, ...followUps(b)]);
  const blocked = entries.some((b) => overLimit(b.question, draft[b.key], state));
  const answered = entries.filter((b) => b.question && !empty(draft[b.key]));

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
          {choices > 0
            ? "The lease PDF waits until every choice marked below is made. Any other blank prints as a line to fill in by hand."
            : "You can still generate the lease PDF. Any blank left here prints as a line to fill in by hand."}{" "}
          Answers are saved to the property or the lease, so each is asked once.
        </p>
      </div>
      {error && <p className="text-sm text-red-700">{error}</p>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {blanks.map((b) => (
          <div key={b.key} className="rounded-lg bg-white p-3">
            <p className="mb-1 text-sm font-medium text-stone-700">
              {b.label}
              {b.question?.choice && <span className="ml-2 text-xs font-normal text-red-700">Choose before generating the PDF</span>}
            </p>
            {b.question ? (
              <>
                {b.question.help && <p className="mb-2 text-xs text-stone-500">{b.question.help}</p>}
                <Question question={b.question} value={draft[b.key]} catalog={catalog} onChange={(v) => setDraft({ ...draft, [b.key]: v })} />
                {overLimit(b.question, draft[b.key], state) && (
                  <p className="mt-1 text-sm text-red-700">{overLimit(b.question, draft[b.key], state)} Enter a smaller number to save.</p>
                )}
                {followUps(b).map((f) => (
                  <div key={f.key} className="mt-3">
                    <p className="mb-1 text-sm font-medium text-stone-700">{f.question.label}</p>
                    {f.question.help && <p className="mb-2 text-xs text-stone-500">{f.question.help}</p>}
                    <Question question={f.question} value={draft[f.key]} catalog={catalog} onChange={(v) => setDraft({ ...draft, [f.key]: v })} />
                    {overLimit(f.question, draft[f.key], state) && (
                      <p className="mt-1 text-sm text-red-700">{overLimit(f.question, draft[f.key], state)} Enter a smaller number to save.</p>
                    )}
                  </div>
                ))}
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
        <button type="submit" disabled={saving || blocked || answered.length === 0} className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50">
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
  const state = lease.property?.state;
  const shownNow = (answers) => terms.filter((q) => applies(q, answers, terms));
  const blocked = draft && shownNow(draft).some((q) => overLimit(q, draft[q.id], state));

  async function save(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const changed = shownNow(draft).filter((q) => (draft[q.id] ?? null) !== (facts[q.id] ?? null));
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
            {shownNow(draft).map((q) => (
              <div key={q.id} className={q.choice || q.type === "longtext" ? "sm:col-span-2" : ""}>
                <p className="mb-1 font-medium text-stone-700">{q.label}</p>
                {q.help && <p className="mb-1 text-xs text-stone-500">{q.help}</p>}
                <Question question={q} value={draft[q.id]} catalog={catalog} onChange={(v) => setDraft({ ...draft, [q.id]: v })} />
                {overLimit(q, draft[q.id], state) && (
                  <p className="mt-1 text-red-700">{overLimit(q, draft[q.id], state)} Enter a smaller number to save.</p>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <button type="submit" disabled={saving || blocked} className="rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-800 disabled:opacity-50">
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
            {shownNow(facts).map((q) => (
              <p key={q.id} className="text-stone-600">
                <span className="font-medium text-stone-700">{q.label}:</span>{" "}
                {displayValue(q, facts[q.id], catalog) ?? (
                  <span className={q.choice ? "text-red-700" : "text-amber-700"}>{q.choice ? "choose before generating the PDF" : "blank"}</span>
                )}
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
