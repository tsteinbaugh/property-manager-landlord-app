import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { Question, useFactCatalog } from "./FactQuestions";

// The lease builder's fill-in-the-gaps questions (agreed with Taylor
// 2026-11-22): only the blank answers this lease's required clauses still wait
// on (GET /api/leases/:id/missing-facts). Each answer saves back to where it
// lives, so it's asked once. A question can bring a follow-up (units in the
// building, after the property type); the list refreshes after each save.

const inputClass =
  "w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none";

function isFilled(q, v) {
  if (q.type === "deposit") return v?.taken === false || (v?.taken === true && Number(v.amount) > 0);
  if (q.type === "utilities") return v && Object.keys(v).length > 0;
  return v !== undefined && v !== null && v !== "" && !(Array.isArray(v) && v.length === 0);
}

function DepositQuestion({ value, onChange }) {
  const v = value || {};
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm">
      {[
        [true, "Yes"],
        [false, "No"],
      ].map(([taken, label]) => (
        <label key={label} className="flex items-center gap-1.5">
          <input type="radio" checked={v.taken === taken} onChange={() => onChange({ ...v, taken })} className="h-4 w-4 border-stone-300" />
          <span className="text-stone-700">{label}</span>
        </label>
      ))}
      {v.taken === true && (
        <input
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Amount"
          value={v.amount ?? ""}
          onChange={(e) => onChange({ ...v, amount: e.target.value })}
          className="w-40 rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
        />
      )}
    </div>
  );
}

function ClauseList({ clauses }) {
  const shown = clauses.slice(0, 3);
  const more = clauses.length - shown.length;
  return (
    <p className="mt-1 text-xs text-stone-400">
      Decides: {shown.join("; ")}
      {more > 0 ? ` and ${more} more` : ""}
    </p>
  );
}

// questions: from GET /api/leases/:id/applicability (LeaseBuilderSection loads it).
export default function MissingFactsPanel({ lease, questions, onSaved }) {
  const api = useApi();
  const catalog = useFactCatalog();
  const [draft, setDraft] = useState({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  if (!questions || questions.length === 0 || !catalog) return null;

  async function handleSave(e) {
    e.preventDefault();
    const facts = { property: {}, lease: {}, account: {} };
    const propertyFields = {};
    const leaseFields = {};
    const people = [];
    for (const q of questions) {
      const v = draft[q.key];
      if (!isFilled(q, v)) continue;
      if (q.target === "tenant" || q.target === "occupant") people.push([q, v]);
      else if (q.target === "propertyField") propertyFields[q.id] = Number(v);
      else if (q.target === "leaseField") {
        if (q.type === "deposit") {
          leaseFields.securityDepositTaken = v.taken;
          leaseFields.securityDepositAmount = v.taken ? Number(v.amount) : null;
        } else leaseFields[q.id] = v;
      } else facts[q.target][q.id] = v;
    }
    setSaving(true);
    setError(null);
    try {
      const calls = [];
      if (Object.keys(propertyFields).length) calls.push(api.put(`/api/properties/${lease.propertyId}`, propertyFields));
      if (Object.keys(facts.property).length) calls.push(api.put(`/api/properties/${lease.propertyId}/facts`, { facts: facts.property }));
      if (Object.keys(facts.account).length) calls.push(api.put("/api/me/facts", { facts: facts.account }));
      for (const [q, v] of people) calls.push(api.put(`/api/${q.target === "tenant" ? "tenants" : "occupants"}/${q.recordId}`, { [q.id]: v }));
      // Lease saves run one after the other: both return the whole lease.
      await Promise.all(calls);
      if (Object.keys(leaseFields).length) await api.put(`/api/leases/${lease.id}`, leaseFields);
      if (Object.keys(facts.lease).length) await api.put(`/api/leases/${lease.id}/facts`, { facts: facts.lease });
      setDraft({});
      await onSaved();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  const answered = questions.filter((q) => isFilled(q, draft[q.key])).length;

  return (
    <form onSubmit={handleSave} className="space-y-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
      <div>
        <h3 className="text-sm font-semibold text-amber-900">
          Before adding clauses, answer {questions.length === 1 ? "this question" : `these ${questions.length} questions`}
        </h3>
        <p className="mt-1 text-xs text-amber-800">
          They decide which required clauses this lease needs. Each answer is saved to the property, the lease or your
          account, so you won't be asked again. Questions marked "Needed for the lease" decide a clause the law requires
          in the lease, so the lease PDF waits for them; the others decide information the law requires you to give the
          tenant. You can add clauses before answering, and the builder adds what applies so far.
        </p>
      </div>
      {error && <p className="text-sm text-red-700">{error}</p>}
      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q.key} className="rounded-lg bg-white p-3">
            <p className="mb-1 text-sm font-medium text-stone-700">
              {q.label}
              {q.blocks && <span className="ml-2 rounded bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-800">Needed for the lease</span>}
            </p>
            {q.help && <p className="mb-2 text-xs text-stone-500">{q.help}</p>}
            {q.type === "deposit" ? (
              <DepositQuestion value={draft[q.key]} onChange={(v) => setDraft({ ...draft, [q.key]: v })} />
            ) : q.type === "date" ? (
              <input type="date" value={draft[q.key] ?? ""} onChange={(e) => setDraft({ ...draft, [q.key]: e.target.value })} className={inputClass} />
            ) : (
              <Question question={q} value={draft[q.key]} catalog={catalog} onChange={(v) => setDraft({ ...draft, [q.key]: v })} />
            )}
            <ClauseList clauses={q.clauses} />
          </div>
        ))}
      </div>
      <button
        type="submit"
        disabled={saving || answered === 0}
        className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
      >
        {saving ? "Saving..." : `Save ${answered || ""} answer${answered === 1 ? "" : "s"}`.replace("  ", " ")}
      </button>
    </form>
  );
}
