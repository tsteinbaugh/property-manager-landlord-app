import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { formatDay } from "../lib/dates";
import { JURISDICTION_NAMES as STATE_NAMES } from "../lib/jurisdictions";

// The applicability questions (backend/src/lib/factCatalog.js) for one record:
// a property, a lease, a property's owner or the landlord's account. Mirrors the backend's
// visibility rules.

let catalogPromise = null;
export function useFactCatalog() {
  const api = useApi();
  const [catalog, setCatalog] = useState(null);
  useEffect(() => {
    if (!catalogPromise) catalogPromise = api.get("/api/fact-catalog").catch((err) => {
      catalogPromise = null;
      throw err;
    });
    catalogPromise.then(setCatalog).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return catalog;
}

// ownerKind: "person" or "business", for an owner's questions (a question with
// `kind` fits only one of them: only a person lives somewhere).
export function isVisible(question, states, answers, ownerKind = null) {
  if (question.builderOnly || question.ownSection) return false;
  if (question.kind && question.kind !== ownerKind) return false;
  if (question.states && !question.states.some((s) => states.includes(s))) return false;
  if (question.showIf) {
    if (question.showIf.isSet) {
      const ids = [].concat(question.showIf.id);
      if (!ids.some((id) => answers?.[id] !== undefined && answers?.[id] !== null && answers?.[id] !== "")) return false;
    } else if (question.showIf.whoPays) {
      const entries = Object.values(answers?.[question.showIf.id] || {});
      if (!entries.some((u) => question.showIf.whoPays.includes(u?.whoPays))) return false;
    } else {
      const other = answers?.[question.showIf.id];
      const values = Array.isArray(other) ? other : [other];
      if (!values.some((v) => question.showIf.in.includes(v))) return false;
    }
  }
  return true;
}

const inputClass =
  "w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none";

export { default as YesNo } from "./YesNo";
import YesNo from "./YesNo";

export function Question({ question, value, onChange, catalog }) {
  const q = question;
  switch (q.type) {
    case "yesno":
      return <YesNo value={value} onChange={onChange} name={q.label} />;
    case "checkbox":
      return null;
    case "pickOne":
      if (q.choice) {
        return (
          <div className="space-y-1">
            {q.options.map((o) => (
              <label key={o.value} className="flex items-start gap-2 text-sm text-stone-700">
                <input type="radio" name={q.id} checked={value === o.value} onChange={() => onChange(o.value)} className="mt-0.5" />
                <span>{o.label}</span>
              </label>
            ))}
          </div>
        );
      }
      return (
        <select value={value ?? ""} onChange={(e) => onChange(e.target.value || null)} className={inputClass}>
          <option value="">Select…</option>
          {q.options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    case "state":
      return (
        <select value={value ?? ""} onChange={(e) => onChange(e.target.value || null)} className={inputClass}>
          <option value="">Select…</option>
          {Object.entries(STATE_NAMES).map(([code, name]) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      );
    case "pickAny": {
      const chosen = Array.isArray(value) ? value : [];
      return (
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {q.options.map((o) => (
            <label key={o.value} className="flex items-center gap-1.5">
              <input
                type="checkbox"
                checked={chosen.includes(o.value)}
                onChange={(e) => {
                  let next;
                  if (!e.target.checked) next = chosen.filter((v) => v !== o.value);
                  else if (o.exclusive) next = [o.value];
                  else next = [...chosen.filter((v) => !q.options.find((x) => x.value === v)?.exclusive), o.value];
                  onChange(next.length ? next : null);
                }}
                className="h-4 w-4 rounded border-stone-300"
              />
              <span className="text-stone-700">{o.label}</span>
            </label>
          ))}
        </div>
      );
    }
    case "number":
      return (
        <input
          type="number"
          min="0"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value === "" ? null : Number(e.target.value))}
          className={inputClass}
        />
      );
    case "money":
      return (
        <div className="flex items-center gap-2">
          <span className="text-stone-500">$</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value === "" ? null : Number(e.target.value))}
            className={inputClass}
          />
        </div>
      );
    case "date":
      return <input type="date" value={value ?? ""} onChange={(e) => onChange(e.target.value || null)} className={inputClass} />;
    case "text":
      return <input type="text" value={value ?? ""} onChange={(e) => onChange(e.target.value || null)} className={inputClass} />;
    case "longtext":
      return <textarea rows={2} value={value ?? ""} onChange={(e) => onChange(e.target.value || null)} className={inputClass} />;
    case "utilities": {
      const current = value || {};
      const set = (kind, patch) => {
        const entry = { ...(current[kind] || {}), ...patch };
        if (entry.whoPays !== "CHARGED_BACK") delete entry.method;
        onChange({ ...current, [kind]: entry });
      };
      return (
        <div className="space-y-2">
          {catalog.utilityKinds.map((u) => (
            <div key={u.value} className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr_1fr] sm:items-center">
              <span className="text-sm font-medium text-stone-700">{u.label}</span>
              <select value={current[u.value]?.whoPays ?? ""} onChange={(e) => set(u.value, { whoPays: e.target.value || null })} className={inputClass}>
                <option value="">Select…</option>
                {catalog.utilityWhoPays.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              {current[u.value]?.whoPays === "CHARGED_BACK" ? (
                <select value={current[u.value]?.method ?? ""} onChange={(e) => set(u.value, { method: e.target.value || null })} className={inputClass}>
                  <option value="">Select…</option>
                  {catalog.utilityMethods.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      );
    }
    case "appliances": {
      const current = value || {};
      return (
        <div className="space-y-2">
          {catalog.applianceKinds.map((a) => (
            <div key={a.value} className="grid grid-cols-1 gap-2 sm:grid-cols-[10rem_1fr] sm:items-center">
              <span className="text-sm font-medium text-stone-700">{a.label}</span>
              <select
                value={current[a.value] ?? ""}
                onChange={(e) => {
                  const next = { ...current };
                  if (e.target.value) next[a.value] = e.target.value;
                  else delete next[a.value];
                  onChange(next);
                }}
                className={inputClass}
              >
                <option value="">Select…</option>
                {catalog.applianceTerms.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      );
    }
    default:
      return null;
  }
}

export function displayValue(q, value, catalog) {
  if (value === undefined || value === null || value === "") return null;
  switch (q.type) {
    case "yesno":
      return value ? "Yes" : q.label.startsWith("To your best knowledge") ? "No, not to my knowledge" : "No";
    case "checkbox":
      return value ? "Yes" : "No";
    case "pickOne":
      return q.options.find((o) => o.value === value)?.label ?? value;
    case "money":
      return `$${Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    case "date":
      return formatDay(value);
    case "state":
      return STATE_NAMES[value] ?? value;
    case "pickAny":
      return value.map((v) => q.options.find((o) => o.value === v)?.label ?? v).join(", ") || null;
    case "utilities": {
      const parts = catalog.utilityKinds
        .filter((u) => value[u.value]?.whoPays)
        .map((u) => {
          const who = catalog.utilityWhoPays.find((o) => o.value === value[u.value].whoPays)?.label;
          const how = catalog.utilityMethods.find((o) => o.value === value[u.value].method)?.label;
          return `${u.label}: ${who}${how ? ` (${how.toLowerCase()})` : ""}`;
        });
      return parts.length ? parts.join("; ") : null;
    }
    case "appliances": {
      const parts = catalog.applianceKinds
        .filter((a) => value[a.value])
        .map((a) => `${a.label}: ${catalog.applianceTerms.find((t) => t.value === value[a.value])?.label.toLowerCase()}`);
      return parts.length ? parts.join("; ") : null;
    }
    default:
      return String(value);
  }
}

// A card listing the questions for `target`, grouped by section, with an Edit
// mode. `onSave(patch)` receives only the answers that changed (null = cleared).
// fromSpecs: answers Property Specs supply when the landlord hasn't answered
// (carpet flooring answers "Does the rental have carpet?"), shown but not saved.
// places: show only the questions that live in these page sections (factCatalog.js `place`).
export default function FactQuestionsCard({ title, target, states, answers, onSave, disabled, intro, fromSpecs = {}, places = null, ownerKind = null }) {
  const catalog = useFactCatalog();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(answers || {});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!editing) setDraft(answers || {});
  }, [answers, editing]);

  if (!catalog) return null;

  const source = editing ? draft : answers || {};
  const inPlace = (q) => !places || places.includes(q.place);
  const questions = catalog.questions[target].filter((q) => inPlace(q) && isVisible(q, states, source, ownerKind));
  const sections = [...new Set(questions.map((q) => q.section))];

  function valueOf(q) {
    const v = source[q.id];
    if (q.type === "checkbox" && (v === undefined || v === null)) return q.default ?? false;
    return v;
  }

  async function handleSave(e) {
    e.preventDefault();
    const patch = {};
    for (const q of catalog.questions[target].filter(inPlace)) {
      const before = answers?.[q.id] ?? null;
      let after = draft[q.id] ?? null;
      if (after === null && q.type === "checkbox" && before === null) continue;
      if (q.type === "appliances" && after && Object.keys(after).length === 0) after = null;
      if (JSON.stringify(before) !== JSON.stringify(after)) patch[q.id] = after;
    }
    setSaving(true);
    setError(null);
    try {
      if (Object.keys(patch).length) await onSave(patch);
      setEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-stone-900">{title}</h2>
          {intro && <p className="mt-1 text-sm text-stone-500">{intro}</p>}
        </div>
        {!editing && !disabled && (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
          >
            Edit
          </button>
        )}
      </div>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      {editing ? (
        <form onSubmit={handleSave} className="mt-4 space-y-6 border-t border-stone-200 pt-4">
          {sections.map((section) => (
            <div key={section}>
              <h3 className="mb-3 text-sm font-semibold text-stone-800">{section}</h3>
              <div className="space-y-4">
                {questions
                  .filter((q) => q.section === section)
                  .map((q) =>
                    q.type === "checkbox" ? (
                      <label key={q.id} className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={!!valueOf(q)}
                          onChange={(e) => setDraft({ ...draft, [q.id]: e.target.checked })}
                          className="h-4 w-4 rounded border-stone-300"
                        />
                        <span className="font-medium text-stone-700">{q.label}</span>
                      </label>
                    ) : (
                      <div key={q.id}>
                        <p className="mb-1 text-sm font-medium text-stone-700">
                          {q.label}
                        </p>
                        {q.help && <p className="mb-2 text-xs text-stone-500">{q.help}</p>}
                        <Question question={q} value={draft[q.id]} catalog={catalog} onChange={(v) => setDraft({ ...draft, [q.id]: v })} />
                      </div>
                    ),
                  )}
              </div>
            </div>
          ))}
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save answers"}
            </button>
            <button
              type="button"
              onClick={() => {
                setDraft(answers || {});
                setEditing(false);
              }}
              className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <dl className="mt-4 space-y-4 border-t border-stone-200 pt-4 text-sm">
          {sections.map((section) => {
            // Answered rows only; an unticked checkbox and an ordinary No aren't shown.
            const rows = questions
              .filter((q) => q.section === section)
              .map((q) => {
                const v = source[q.id] ?? fromSpecs[q.id];
                if (q.type === "checkbox" && !v) return null;
                if (q.showOnlyWhenYes && v !== true) return null;
                const own = displayValue(q, valueOf(q), catalog);
                const shown = own ?? (fromSpecs[q.id] !== undefined ? `${displayValue(q, fromSpecs[q.id], catalog)} (from Property Specs)` : null);
                return shown === null ? null : { q, shown };
              })
              .filter(Boolean);
            if (rows.length === 0) return null;
            return (
              <div key={section}>
                <h3 className="mb-2 text-sm font-semibold text-stone-800">{section}</h3>
                <div className="space-y-1">
                  {rows.map(({ q, shown }) => (
                    <div key={q.id} className="grid grid-cols-1 gap-1 sm:grid-cols-[1fr_1fr] sm:gap-4">
                      <dt className="text-stone-500">{q.short || q.label}</dt>
                      <dd className="text-stone-800">{shown}</dd>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </dl>
      )}
    </div>
  );
}
