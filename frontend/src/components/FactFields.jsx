import { Question, displayValue, isVisible } from "./FactQuestions";

// Lease-question answers shown inside a page's own sections (Taylor,
// 2026-11-22: built into the pages, not a separate Lease questions card).
// `place` is a factCatalog.js place ("property.parking"); the page's edit form
// keeps the answers in its own draft and saves them with PUT .../facts.

// The short name shown beside an answer (factCatalog.js `short`).
export const viewLabel = (q) => q.short || q.label.replace(/\?$/, "");

export function questionsAt(catalog, target, place, states, answers, exclude = []) {
  if (!catalog) return [];
  return catalog.questions[target].filter((q) => q.place === place && !exclude.includes(q.id) && isVisible(q, states, answers || {}));
}

// The answers that changed, for PUT .../facts (null clears one).
export function factPatch(catalog, target, before, draft, places = null) {
  const patch = {};
  if (!catalog) return patch;
  for (const q of catalog.questions[target]) {
    if (places && !places.includes(q.place)) continue;
    const was = before?.[q.id] ?? null;
    let now = draft?.[q.id] ?? null;
    if (now === null && q.type === "checkbox" && was === null) continue;
    if ((q.type === "appliances" || q.type === "utilities") && now && Object.keys(now).length === 0) now = null;
    if (["number", "money"].includes(q.type) && now !== null && now !== "") now = Number(now);
    if (now === "") now = null;
    if (JSON.stringify(was) !== JSON.stringify(now)) patch[q.id] = now;
  }
  return patch;
}

// `flow` drops the component's own grid so its questions join the page's
// two-column grid, after the page's own fields, with no half-empty rows.
export function FactFieldsEdit({ catalog, target, place, states, answers, onChange, exclude = [], flow = false }) {
  const questions = questionsAt(catalog, target, place, states, answers, exclude);
  if (questions.length === 0) return null;
  const set = (id, v) => onChange({ ...answers, [id]: v });
  return (
    <div className={flow ? "contents" : "grid grid-cols-1 gap-4 sm:grid-cols-2"}>
      {questions.map((q) => {
        // Only lists of options and very long questions take the full width; a
        // longer label wraps in its column, as on the lease form.
        const wide = ["utilities", "appliances", "pickAny"].includes(q.type) || (q.label || "").length > 100;
        if (q.type === "checkbox") {
          const v = answers?.[q.id];
          return (
            <label key={q.id} className={`flex items-center gap-2 text-sm ${wide ? "sm:col-span-2" : ""}`}>
              <input
                type="checkbox"
                checked={v === undefined || v === null ? !!q.default : !!v}
                onChange={(e) => set(q.id, e.target.checked)}
                className="h-4 w-4 rounded border-stone-300"
              />
              <span className="font-medium text-stone-700">{q.label}</span>
            </label>
          );
        }
        return (
          <div key={q.id} className={`text-sm ${wide ? "sm:col-span-2" : ""}`}>
            <p className="mb-1 font-medium text-stone-700">
              {q.label}
            </p>
            {q.help && <p className="mb-2 text-xs text-stone-500">{q.help}</p>}
            <Question question={q} value={answers?.[q.id]} catalog={catalog} onChange={(v) => set(q.id, v)} />
          </div>
        );
      })}
    </div>
  );
}

// Read-only rows for the answered questions; a blank one isn't shown (Taylor,
// 2026-11-23: the lease builder's fill-in-the-gaps box asks what a lease needs).
export function FactFieldsView(props) {
  const rows = factViewRows(props);
  return rows.length ? <>{rows}</> : null;
}

// The same rows as an array (empty when there's nothing to show), so a page can
// leave out a section heading with nothing under it.
export function factViewRows({ catalog, target, place, states, answers, fromSpecs = {}, exclude = [] }) {
  const questions = questionsAt(catalog, target, place, states, answers, exclude);
  const rows = questions
    .map((q) => {
      const v = answers?.[q.id];
      if (q.type === "checkbox" && !(v ?? q.default)) return { q, shown: null };
      const own = displayValue(q, q.type === "checkbox" && (v === undefined || v === null) ? q.default ?? false : v, catalog);
      const shown = own ?? (fromSpecs[q.id] !== undefined ? `${displayValue(q, fromSpecs[q.id], catalog)} (from Property Specs)` : null);
      return { q, shown, value: v ?? fromSpecs[q.id] };
    })
    .filter(({ q, shown, value }) => shown !== null && (!q.showOnlyWhenYes || value === true));
  return rows.map(({ q, shown }) => (
    <p key={q.id} className={`text-stone-600 ${["utilities", "appliances", "pickAny"].includes(q.type) || viewLabel(q).length + String(shown).length > 60 ? "sm:col-span-2" : ""}`}>
      <span className="font-medium text-stone-700">{viewLabel(q)}:</span>{" "}
      {shown}
    </p>
  ));
}
