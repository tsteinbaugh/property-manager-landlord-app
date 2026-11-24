import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { useFactCatalog } from "./FactQuestions";
import { FactFieldsEdit, factPatch, factViewRows, questionsAt } from "./FactFields";

// The lease page's sections of fields that only fill clause text
// (backend/src/lib/clauseFields.js). A section shows only the fields this
// state's clauses use, and not at all when there are none.

function LeaseFieldSection({ lease, catalog, place, title, note, exclude, onSaved }) {
  const api = useApi();
  const [draft, setDraft] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const states = lease.property?.state ? [lease.property.state] : [];
  const props = { catalog, target: "lease", place, states, exclude };
  if (questionsAt(catalog, "lease", place, states, lease.facts, exclude).length === 0) return null;
  const rows = factViewRows({ ...props, answers: lease.facts });

  async function save(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const patch = factPatch(catalog, "lease", lease.facts, draft, [place]);
      if (Object.keys(patch).length) await api.put(`/api/leases/${lease.id}/facts`, { facts: patch });
      setDraft(null);
      await onSaved();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-medium text-stone-900">{title}</h2>
      <div className="rounded-xl border border-stone-200 bg-white p-5 text-sm shadow-sm">
        <p className="mb-3 text-stone-600">{note}</p>
        {error && <p className="mb-3 text-red-700">{error}</p>}
        {draft ? (
          <form onSubmit={save} className="space-y-4">
            <FactFieldsEdit {...props} answers={draft} onChange={setDraft} />
            <div className="flex gap-2">
              <button type="submit" disabled={saving} className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50">
                {saving ? "Saving..." : "Save"}
              </button>
              <button type="button" onClick={() => setDraft(null)} className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50">
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="flex items-start justify-between gap-4">
            {rows.length > 0 ? (
              <div className="grid min-w-0 flex-1 grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">{rows}</div>
            ) : (
              <p className="text-stone-500">Nothing entered yet.</p>
            )}
            <button type="button" onClick={() => setDraft({ ...(lease.facts || {}) })} className="shrink-0 rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-50">
              Edit
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

const FILLS = "The lease clauses fill these in. Leave a field blank if its clause isn't in this lease.";

export default function LeaseFieldSections({ lease, onSaved }) {
  const catalog = useFactCatalog();
  if (!catalog) return null;
  const hasGuarantor = (lease.leaseTenants || []).some((lt) => lt.role === "GUARANTOR");
  const guarantorFields = catalog.questions.lease.filter((q) => q.guarantor).map((q) => q.id);
  const section = (place, title, exclude = []) => (
    <LeaseFieldSection lease={lease} catalog={catalog} place={place} title={title} note={FILLS} exclude={exclude} onSaved={onSaved} />
  );
  return (
    <>
      {section("lease.fees", "Fees and charges")}
      {lease.securityDepositTaken !== false && section("lease.deposit", "Holding the deposit")}
      {section("lease.noticePeriods", "Notice periods")}
      {section("lease.maintenance", "Tenant maintenance")}
      {section("lease.contacts", hasGuarantor ? "Guarantor and authorized contact" : "Authorized contact", hasGuarantor ? [] : guarantorFields)}
    </>
  );
}
