import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import BackLink from "../components/BackLink";

// states is edited as a single comma-separated text field ("CO, NY, TX") and parsed into an
// array on submit — simpler UI than a multi-select for what's usually 0-1 states, still
// supports the multi-state case (several states sharing identical clause language).
const EMPTY_FORM = { title: "", bodyText: "", group: "", states: "" };
const ALL_STATES = "ALL";

function parseStatesInput(value) {
  return value
    .split(",")
    .map((s) => s.trim().toUpperCase())
    .filter(Boolean);
}

const AVAILABLE_VARIABLES = [
  ["monthly_rent", "Monthly rent"],
  ["security_deposit", "Security deposit amount"],
  ["pet_deposit", "Pet deposit amount (from the lease's PET-type Deposit)"],
  ["late_fee_amount", "Late fee amount"],
  ["late_fee_grace_days", "Late fee grace period (days)"],
  ["pet_rent_amount", "Pet rent amount"],
  ["tenant_insurance_minimum", "Required minimum renter's-insurance coverage"],
  ["renewal_rent_increase_cap", "Renewal rent increase cap"],
  ["start_date", "Lease start date"],
  ["end_date", "Lease end date"],
  ["tenant_names", "Tenant name(s)"],
  ["occupant_names", "Additional occupants linked to the lease's tenant(s)"],
  ["appliance_list", "Property's active appliances (from Property Specs)"],
  ["property_address", "Property address"],
  ["landlord_name", "Landlord / entity name"],
  ["state", "Property's state"],
];

function groupByGroup(items, groups) {
  return groups.map((group) => ({ group, items: items.filter((i) => i.group === group) })).filter((g) => g.items.length > 0);
}

function VariableHint() {
  return (
    <details className="text-xs text-stone-500">
      <summary className="cursor-pointer text-emerald-700 hover:underline">Available variables</summary>
      <p className="mt-1">
        These fill in automatically from the lease they're attached to (left as-is if unset):
      </p>
      <ul className="mt-1 grid grid-cols-1 gap-x-4 sm:grid-cols-2">
        {AVAILABLE_VARIABLES.map(([key, label]) => (
          <li key={key}>
            <code className="text-stone-700">{`{{${key}}}`}</code> — {label}
          </li>
        ))}
      </ul>
    </details>
  );
}

export default function ClauseLibraryPage() {
  const api = useApi();
  const [clauses, setClauses] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [stateFilter, setStateFilter] = useState(ALL_STATES);

  async function load() {
    setLoading(true);
    try {
      const [clauseData, templateData, groupData] = await Promise.all([
        api.get("/api/clauses"),
        api.get("/api/clause-templates"),
        api.get("/api/clause-groups"),
      ]);
      setClauses(clauseData);
      setTemplates(templateData);
      setGroups(groupData);
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
      setForm({ title: clause.title, bodyText: clause.bodyText, group: clause.group, states: (clause.states || []).join(", ") });
      setEditingId(clause.id);
    } else {
      setForm({ ...EMPTY_FORM, group: groups[0] || "" });
      setEditingId(null);
    }
    setFormOpen(true);
  }

  // Copying a provided clause just prefills the add form with its content —
  // nothing is created until the landlord edits and submits their own copy.
  function copyTemplate(template) {
    setForm({
      title: template.title,
      bodyText: template.bodyText,
      group: template.group,
      states: (template.states || []).join(", "),
    });
    setEditingId(null);
    setFormOpen(true);
  }

  // Derived from whatever's actually tagged, rather than a fixed 50-state list — most of that
  // list would be empty in practice, and any new state tag just shows up here automatically.
  const availableStates = [...new Set([...clauses, ...templates].flatMap((c) => c.states || []))].sort();

  function matchesStateFilter(item) {
    return stateFilter === ALL_STATES || !item.states || item.states.length === 0 || item.states.includes(stateFilter);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const payload = { ...form, states: parseStatesInput(form.states) };
      if (editingId) {
        await api.put(`/api/clauses/${editingId}`, payload);
      } else {
        await api.post("/api/clauses", payload);
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

  async function toggleClauseDefault(clause) {
    setError(null);
    try {
      await api.put(`/api/clauses/${clause.id}`, { isDefault: !clause.isDefault });
      await load();
    } catch (err) {
      setError(err.message);
    }
  }

  // Toggling a provided template's default status never copies or edits its
  // wording — it's just remembered separately (DefaultClauseTemplate) and
  // resolved fresh from the static template each time it's attached.
  async function toggleTemplateDefault(template) {
    setError(null);
    try {
      if (template.isDefault) {
        await api.del(`/api/clause-templates/${template.id}/default`);
      } else {
        await api.post(`/api/clause-templates/${template.id}/default`, {});
      }
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
          Provided clauses are locked starting points — copy one to customize it. Your own clauses are fully
          editable. Either kind attaches directly to a lease from the Lease Builder, or check "Include by
          default" so it's added automatically whenever you click "Add my default clauses" on a lease.
        </p>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => openForm(null)}
          className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
        >
          Add clause
        </button>
        <label className="flex items-center gap-2 text-sm">
          <span className="font-medium text-stone-700">State</span>
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="rounded-lg border border-stone-300 px-2 py-1.5 text-sm focus:border-emerald-600 focus:outline-none"
          >
            <option value={ALL_STATES}>All states</option>
            {availableStates.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>
      {stateFilter !== ALL_STATES && (
        <p className="text-xs text-stone-500">
          Showing clauses tagged {stateFilter} plus every clause that applies to all states.
        </p>
      )}

      {formOpen && (
        <form onSubmit={handleSave} className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          {editingId && (
            <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
              Editing here only affects future attachments — leases this clause is already attached to keep
              their own copy of the current wording, unchanged. To update one of those, remove and re-add the
              clause there, or edit that lease's copy of it directly.
            </p>
          )}
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
              <span className="mb-1 block font-medium text-stone-700">Group *</span>
              <select
                required
                value={form.group}
                onChange={(e) => setForm({ ...form, group: e.target.value })}
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
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">States (optional)</span>
              <input
                value={form.states}
                onChange={(e) => setForm({ ...form, states: e.target.value })}
                placeholder="e.g. CO, or HI, KY, RI — leave blank to apply everywhere"
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm uppercase focus:border-emerald-600 focus:outline-none"
              />
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
            <div className="sm:col-span-2">
              <VariableHint />
            </div>
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

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-stone-900">Your Clauses</h2>
        {clauses.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No clauses yet — add one, or copy a provided clause below to customize it.
          </p>
        ) : (
          <div className="space-y-4">
            {groupByGroup(clauses.filter(matchesStateFilter), groups).map(({ group, items }) => (
              <div key={group} className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-400">{group}</h3>
                {items.map((clause) => (
                  <div key={clause.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-stone-900">
                        {clause.title}
                        {clause.states?.map((s) => (
                          <span key={s} className="ml-2 rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700">
                            {s}
                          </span>
                        ))}
                      </p>
                      <div className="flex shrink-0 items-center gap-3 text-sm">
                        <label className="flex items-center gap-1.5 text-xs text-stone-600">
                          <input
                            type="checkbox"
                            checked={clause.isDefault}
                            onChange={() => toggleClauseDefault(clause)}
                            className="h-4 w-4 rounded border-stone-300"
                          />
                          Include by default
                        </label>
                        <button onClick={() => openForm(clause)} className="text-emerald-700 hover:underline">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(clause.id)} className="text-red-600 hover:underline">
                          Delete
                        </button>
                      </div>
                    </div>
                    <p className="mt-1 whitespace-pre-wrap text-sm text-stone-600">{clause.bodyText}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-stone-900">Provided Clauses</h2>
        <p className="text-xs text-stone-500">
          Generic starting points, not legal advice — locked as shipped; copy one to edit it for your lease and
          state.
        </p>
        <div className="space-y-4">
          {groupByGroup(templates.filter(matchesStateFilter), groups).map(({ group, items }) => (
            <div key={group} className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-400">{group}</h3>
              {items.map((template) => (
                <div key={template.id} className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-stone-900">
                      {template.title}
                      {template.states?.map((s) => (
                        <span key={s} className="ml-2 rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700">
                          {s}
                        </span>
                      ))}
                    </p>
                    <div className="flex shrink-0 items-center gap-3 text-sm">
                      <label className="flex items-center gap-1.5 text-xs text-stone-600">
                        <input
                          type="checkbox"
                          checked={template.isDefault}
                          onChange={() => toggleTemplateDefault(template)}
                          className="h-4 w-4 rounded border-stone-300"
                        />
                        Include by default
                      </label>
                      <button onClick={() => copyTemplate(template)} className="text-emerald-700 hover:underline">
                        Copy to customize
                      </button>
                    </div>
                  </div>
                  <p className="mt-1 whitespace-pre-wrap text-sm text-stone-600">{template.bodyText}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
