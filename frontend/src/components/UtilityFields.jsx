import { Question, displayValue, isVisible } from "./FactQuestions";

// The property's utilities, one block per utility (Taylor, 2026-11-22): who pays
// (and how, when it's charged back), the question that belongs to that utility
// (water source, sewer type, trash removal) and the provider and contact.

const inputClass =
  "w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none";

export const UTILITY_ROWS = [
  { kind: "electric", label: "Electricity", provider: "electricityProvider", contact: "electricityContact", questions: ["electricMeterOutsideUnit"] },
  { kind: "gas", label: "Gas", provider: "gasProvider", contact: "gasContact", questions: ["gasMeterOutsideUnit"] },
  { kind: "water", label: "Water", provider: "waterProvider", contact: "waterContact", questions: ["waterSource", "waterMeterOutsideUnit"] },
  { kind: "sewer", label: "Sewer", provider: "sewerProvider", contact: "sewerContact", questions: ["sewerType"] },
  { kind: "trash", label: "Trash", provider: "trashProvider", contact: "trashContact", questions: ["trashHauling"] },
  { kind: null, label: "Internet", provider: "internetProvider", contact: "internetContact", providerPlaceholder: "Leave blank if tenant's choice" },
];

// Questions shown inside the utility blocks; the rest of the Utilities
// questions are listed after them.
export const IN_UTILITY_ROWS = ["utilities", ...UTILITY_ROWS.flatMap((r) => r.questions || [])];

function questionFor(catalog, id, states, facts) {
  const q = catalog.questions.property.find((x) => x.id === id);
  return q && isVisible(q, states, facts) ? q : null;
}

export function UtilityRowsEdit({ catalog, states, form, setForm }) {
  const facts = form.facts || {};
  const utilities = facts.utilities || {};
  const setFacts = (patch) => setForm({ ...form, facts: { ...facts, ...patch } });
  const setPays = (kind, patch) => {
    const entry = { ...(utilities[kind] || {}), ...patch };
    if (entry.whoPays !== "CHARGED_BACK") delete entry.method;
    setFacts({ utilities: { ...utilities, [kind]: entry } });
  };

  return (
    <div className="space-y-4">
      {UTILITY_ROWS.map((row) => {
        const pays = row.kind ? utilities[row.kind] || {} : null;
        const extras = pays?.whoPays === "NOT_PROVIDED" ? [] : (row.questions || []).map((id) => questionFor(catalog, id, states, facts)).filter(Boolean);
        return (
          <div key={row.label} className="rounded-lg border border-stone-200 p-3">
            <p className="mb-2 text-sm font-semibold text-stone-800">{row.label}</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {row.kind && (
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">
                    Who pays?
                  </span>
                  <select value={pays.whoPays ?? ""} onChange={(e) => setPays(row.kind, { whoPays: e.target.value || null })} className={inputClass}>
                    <option value="">Select…</option>
                    {catalog.utilityWhoPays.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              {pays?.whoPays === "CHARGED_BACK" && (
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">How is it charged?</span>
                  <select value={pays.method ?? ""} onChange={(e) => setPays(row.kind, { method: e.target.value || null })} className={inputClass}>
                    <option value="">Select…</option>
                    {catalog.utilityMethods.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              {extras.map((extra) => (
                <div key={extra.id} className={`text-sm ${extra.label.length > 60 ? "sm:col-span-2" : ""}`}>
                  <p className="mb-1 font-medium text-stone-700">
                    {extra.label}
                  </p>
                  <Question question={extra} value={facts[extra.id]} catalog={catalog} onChange={(v) => setFacts({ [extra.id]: v })} />
                </div>
              ))}
              <div className="grid grid-cols-1 gap-2 sm:col-span-2 sm:grid-cols-2">
                <input
                  value={form[row.provider] ?? ""}
                  onChange={(e) => setForm({ ...form, [row.provider]: e.target.value })}
                  placeholder={row.providerPlaceholder || "Provider"}
                  className={inputClass}
                />
                <input
                  value={form[row.contact] ?? ""}
                  onChange={(e) => setForm({ ...form, [row.contact]: e.target.value })}
                  placeholder="Phone / account #"
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// One line per utility: "Water: Tenant pays the company directly · Public water · City of Frederick — acct #778899".
export function utilityViewRows({ catalog, states, property }) {
  const facts = property.facts || {};
  return UTILITY_ROWS.map((row) => {
    const parts = [];
    if (row.kind) {
      const pays = facts.utilities?.[row.kind];
      if (pays?.whoPays) {
        const who = catalog.utilityWhoPays.find((o) => o.value === pays.whoPays)?.label;
        const how = catalog.utilityMethods.find((o) => o.value === pays.method)?.label;
        parts.push(how ? `${who} (${how.toLowerCase()})` : who);
      }
    }
    const notProvided = row.kind && facts.utilities?.[row.kind]?.whoPays === "NOT_PROVIDED";
    for (const id of notProvided ? [] : row.questions || []) {
      const extra = questionFor(catalog, id, states, facts);
      if (!extra) continue;
      const shown = displayValue(extra, facts[extra.id], catalog);
      if (shown === null) continue;
      if (id.endsWith("MeterOutsideUnit")) parts.push(facts[id] ? "meter also serves areas outside the unit" : "meter serves only the unit");
      else parts.push(shown);
    }
    const provider = [property[row.provider], property[row.contact]].filter(Boolean).join(" — ");
    if (provider) parts.push(provider);
    if (parts.length === 0) return null;
    return (
      <p key={row.label} className="text-stone-600 sm:col-span-2">
        <span className="font-medium text-stone-700">{row.label}:</span> {parts.join(" · ")}
      </p>
    );
  }).filter(Boolean);
}
