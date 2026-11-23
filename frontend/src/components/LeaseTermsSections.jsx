import { useState } from "react";
import { useApi } from "../hooks/useApi";

// The lease page's First month and Notices sections (Taylor, 2026-11-22).
// Both save to the lease's Lease questions answers (PUT /api/leases/:id/facts).

const inputClass =
  "w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none";

function money(n) {
  return `$${Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Rent is due on the 1st, so a lease that starts on another day has a partial
// first month: the days from the start date to the end of that month.
export function firstMonthFacts(lease) {
  if (!lease.startDate) return null;
  const [y, m, d] = lease.startDate.slice(0, 10).split("-").map(Number);
  const daysInMonth = new Date(Date.UTC(y, m, 0)).getUTCDate();
  const days = daysInMonth - d + 1;
  const monthName = new Date(Date.UTC(y, m - 1, 1)).toLocaleString("en-US", { month: "long", timeZone: "UTC" });
  const nextFirst = new Date(Date.UTC(y, m, 1)).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
  const prorated = Math.round(((Number(lease.monthlyRent) * days) / daysInMonth) * 100) / 100;
  return { startsOnFirst: d === 1, days, daysInMonth, monthName, nextFirst, prorated, startDay: d };
}

const CHOICES = [
  { value: "FULL", label: "Full month's rent" },
  { value: "PRORATED", label: "Prorated: rent only for the days the tenant has the rental that month" },
  { value: "WAIVED", label: "Free: no rent for the days before the first full month" },
];

export function FirstMonthSection({ lease, onSaved }) {
  const api = useApi();
  const facts = lease.facts || {};
  const info = firstMonthFacts(lease);
  const [editing, setEditing] = useState(false);
  const [choice, setChoice] = useState(facts.firstMonthRent ?? "");
  const [amount, setAmount] = useState(facts.firstMonthAmount ?? "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  if (!info) return null;
  const suggested = info.startsOnFirst ? "FULL" : "PRORATED";
  const ordinal = (n) => n + (["th", "st", "nd", "rd"][n % 100 > 10 && n % 100 < 14 ? 0 : n % 10] || "th");

  async function save(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      await api.put(`/api/leases/${lease.id}/facts`, {
        facts: {
          firstMonthRent: choice || null,
          firstMonthAmount: choice === "PRORATED" && amount !== "" ? Number(amount) : null,
        },
      });
      setEditing(false);
      await onSaved();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  const current = CHOICES.find((c) => c.value === facts.firstMonthRent);
  const shownAmount = facts.firstMonthAmount ?? info.prorated;

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-medium text-stone-900">First month</h2>
      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm text-sm">
        <p className="text-stone-600">
          {info.startsOnFirst
            ? `The lease starts on ${info.monthName} 1st, so the first month is a full month.`
            : `The lease starts on ${info.monthName} ${ordinal(info.startDay)}, so the tenant has the rental for ${info.days} of ${info.daysInMonth} days that month. The first full month starts ${info.nextFirst}.`}
        </p>
        {editing ? (
          <form onSubmit={save} className="mt-3 space-y-3">
            {error && <p className="text-red-700">{error}</p>}
            <p className="font-medium text-stone-700">How is the first month's rent handled?</p>
            {CHOICES.map((c) => (
              <label key={c.value} className="flex items-start gap-2">
                <input type="radio" checked={choice === c.value} onChange={() => setChoice(c.value)} className="mt-0.5 h-4 w-4 border-stone-300" />
                <span className="text-stone-700">
                  {c.label}
                  {c.value === suggested && <span className="ml-2 text-xs text-emerald-700">Suggested</span>}
                </span>
              </label>
            ))}
            {choice === "PRORATED" && (
              <label className="block max-w-xs">
                <span className="mb-1 block font-medium text-stone-700">First month's rent</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder={String(info.prorated)}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={inputClass}
                />
                <span className="mt-1 block text-xs text-stone-500">
                  Worked out as {money(lease.monthlyRent)} × {info.days}/{info.daysInMonth} days = {money(info.prorated)}. Leave it
                  blank to use that, or enter your own.
                </span>
              </label>
            )}
            <div className="flex gap-2">
              <button type="submit" disabled={saving} className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50">
                {saving ? "Saving..." : "Save"}
              </button>
              <button type="button" onClick={() => setEditing(false)} className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50">
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-3 flex items-start justify-between gap-4">
            <div>
              {current ? (
                <p className="text-stone-800">
                  {current.label}
                  {current.value === "PRORATED" && `: ${money(shownAmount)}`}
                </p>
              ) : (
                <p className="text-amber-700">
                  Not answered. Suggested: {CHOICES.find((c) => c.value === suggested).label.split(":")[0]}
                  {suggested === "PRORATED" && ` (${money(info.prorated)})`}.
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                setChoice(facts.firstMonthRent ?? suggested);
                setAmount(facts.firstMonthAmount ?? "");
                setEditing(true);
              }}
              className="shrink-0 rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              {current ? "Edit" : "Answer"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export function NoticesSection({ lease, onSaved }) {
  const api = useApi();
  const entity = lease.property?.entity;
  const own = lease.facts?.noticeAddress || "";
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(own);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  async function save(address) {
    setSaving(true);
    setError(null);
    try {
      await api.put(`/api/leases/${lease.id}/facts`, { facts: { noticeAddress: address || null } });
      setEditing(false);
      await onSaved();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-medium text-stone-900">Notices</h2>
      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm text-sm">
        <p className="text-stone-600">Where the tenant sends notices to you under this lease. The lease clauses fill it in.</p>
        {error && <p className="mt-2 text-red-700">{error}</p>}
        {editing ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              save(value.trim());
            }}
            className="mt-3 space-y-3"
          >
            <textarea rows={3} value={value} onChange={(e) => setValue(e.target.value)} className={inputClass} placeholder="Street, city, state and ZIP" />
            <div className="flex gap-2">
              <button type="submit" disabled={saving || !value.trim()} className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50">
                {saving ? "Saving..." : "Save"}
              </button>
              <button type="button" onClick={() => setEditing(false)} className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50">
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-3 flex items-start justify-between gap-4">
            <div>
              {own ? (
                <>
                  <p className="whitespace-pre-wrap text-stone-800">{own}</p>
                  <p className="mt-1 text-xs text-stone-500">A different address for this lease.</p>
                </>
              ) : entity?.mailingAddress ? (
                <>
                  <p className="whitespace-pre-wrap text-stone-800">{entity.mailingAddress}</p>
                  <p className="mt-1 text-xs text-stone-500">{entity.legalName}'s mailing address (the default).</p>
                </>
              ) : (
                <p className="text-amber-700">
                  {entity?.legalName || "The owning entity"} has no mailing address yet. Add one on the entity's page, or enter an
                  address for this lease.
                </p>
              )}
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <button
                type="button"
                onClick={() => {
                  setValue(own);
                  setEditing(true);
                }}
                className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                {own ? "Edit" : entity?.mailingAddress ? "Use a different address" : "Enter an address"}
              </button>
              {own && (
                <button type="button" disabled={saving} onClick={() => save(null)} className="text-xs text-stone-500 hover:underline">
                  Use the entity's address instead
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
