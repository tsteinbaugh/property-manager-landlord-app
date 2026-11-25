import { useState } from "react";
import { useApi } from "../hooks/useApi";

// Education text is paragraphs split by a blank line, "- " bullets and **bold**.
function EducationText({ text }) {
  const bold = (line) =>
    line.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
  return text.split("\n\n").map((block, i) => {
    const lines = block.split("\n");
    const bullets = lines.filter((l) => l.startsWith("- "));
    const intro = lines.filter((l) => !l.startsWith("- "));
    return (
      <div key={i} className="mt-2">
        {intro.length > 0 && <p>{bold(intro.join(" "))}</p>}
        {bullets.length > 0 && (
          <ul className="mt-1 list-disc space-y-1 pl-5">
            {bullets.map((l, j) => (
              <li key={j}>{bold(l.slice(2))}</li>
            ))}
          </ul>
        )}
      </div>
    );
  });
}

// The collapsed "About this clause" under a provided clause: when to use it and
// the landlord education linked to it in this state (Taylor, 2026-11-24). For
// the landlord only; none of it prints in the lease. `actions` (the card's
// own controls) share its line and show even when there is nothing to say.
export default function AboutClause({ template, state, actions }) {
  const api = useApi();
  const [open, setOpen] = useState(false);
  const [education, setEducation] = useState(null);
  const [error, setError] = useState(null);

  const hasEducation = Boolean(state && template?.educationStates?.includes(state));
  const hasAbout = Boolean(template && (template.useWhen || hasEducation));
  if (!hasAbout && !actions) return null;

  async function toggle() {
    const opening = !open;
    setOpen(opening);
    if (!opening || !hasEducation || education) return;
    setError(null);
    try {
      setEducation(await api.get(`/api/clause-templates/${template.id}/education?state=${state}`));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="mt-2">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        {hasAbout ? (
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            className="text-xs font-medium text-emerald-700 hover:underline"
          >
            {open ? "▾" : "▸"} About this clause
          </button>
        ) : (
          <span />
        )}
        {actions}
      </div>
      {open && (
        <div className="mt-2 space-y-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-stone-700">
          <p className="text-xs text-stone-500">Informational. This never prints in the lease.</p>
          {template.useWhen && (
            <p>
              <span className="font-medium text-stone-900">When to use this clause: </span>
              {template.useWhen}
            </p>
          )}
          {hasEducation && !education && !error && <p className="text-xs text-stone-500">Loading...</p>}
          {error && <p className="text-xs text-red-700">{error}</p>}
          {education?.map((row) => (
            <div key={row.id}>
              <p className="font-medium text-stone-900">{row.title}</p>
              <EducationText text={row.bodyText} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
