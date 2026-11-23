// The one Yes/No control (Taylor, 2026-11-23: radio buttons, the same
// everywhere). It starts blank, so "not answered" stays different from "No",
// and Clear puts an answer back to blank.
export default function YesNo({ value, onChange, name = "", noLabel }) {
  const no = noLabel || (name.startsWith("To your best knowledge") ? "No, not to my knowledge" : "No");
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm">
      {[
        [true, "Yes"],
        [false, no],
      ].map(([v, label]) => (
        <label key={String(v)} className="flex items-center gap-1.5">
          <input type="radio" checked={value === v} onChange={() => onChange(v)} className="h-4 w-4 border-stone-300" />
          <span className="text-stone-700">{label}</span>
        </label>
      ))}
      {value !== undefined && value !== null && (
        <button type="button" onClick={() => onChange(null)} className="text-xs text-stone-400 hover:text-stone-600">
          Clear
        </button>
      )}
    </div>
  );
}
