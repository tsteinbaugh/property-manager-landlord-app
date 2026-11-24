import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import TenantSection from "../components/TenantSection";
import LeaseSection from "../components/LeaseSection";
import FinancesSnapshotCard from "../components/FinancesSnapshotCard";
import MaintenanceSnapshotCard from "../components/MaintenanceSnapshotCard";
import BackLink from "../components/BackLink";
import { FOR_CAUSE_EVICTION_EXEMPTION_OPTIONS } from "../lib/forCauseEvictionVariant";
import { useFactCatalog } from "../components/FactQuestions";
import { FactFieldsEdit, factViewRows, factPatch, questionsAt } from "../components/FactFields";
import { IN_UTILITY_ROWS, UtilityRowsEdit, utilityViewRows } from "../components/UtilityFields";

// The property's Lease questions, built into this page's sections (Taylor,
// 2026-11-22); the furnishings and flooring ones live on Property Specs.
const PROPERTY_PLACES = [
  "property.address",
  "property.structural",
  "property.parking",
  "property.utilities",
  "property.legal",
  "property.manager",
  "property.repairs",
  "property.access",
  "property.facilities",
  "property.disclosures",
];

// amenities is edited as a comma-separated text field, same convention as
// ClauseLibraryPage's `states` field and PropertiesPage's create form.
function parseAmenitiesInput(value) {
  return value
    .split(",")
    .map((a) => a.trim())
    .filter(Boolean);
}

// Local field helper — the second attributes batch (2026-08-20) added enough plain
// text/number inputs that spelling each one out inline would dwarf the rest of this file.
const TRASH_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "No curbside pickup"];

function TextField({ label, value, onChange, type = "text", placeholder, span, children }) {
  return (
    <label className={`block text-sm ${span ? "sm:col-span-2" : ""}`}>
      <span className="mb-1 block font-medium text-stone-700">{label}</span>
      <input
        type={type}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
      />
      {children}
    </label>
  );
}

// Provider + contact pair, side by side under one label — used for each of the 6
// utilities plus mortgage, since a bare provider name without who-to-call is only
// half useful.
function ContactPairField({ label, providerPlaceholder, form, setForm, providerKey, contactKey }) {
  return (
    <div className="sm:col-span-2">
      <span className="mb-1 block text-sm font-medium text-stone-700">{label}</span>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <input
          value={form[providerKey] ?? ""}
          onChange={(e) => setForm({ ...form, [providerKey]: e.target.value })}
          placeholder={providerPlaceholder || "Provider"}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
        />
        <input
          value={form[contactKey] ?? ""}
          onChange={(e) => setForm({ ...form, [contactKey]: e.target.value })}
          placeholder="Phone / account #"
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
        />
      </div>
    </div>
  );
}

const DETAIL_FACT_FIELDS = [
  ["stories", "Stories"],
  ["basement", "Basement"],
  ["lotSize", "Lot size"],
  ["mailboxLocation", "Mailbox"],
  ["trashPickupDay", "Trash pickup"],
  ["trashCanStorageLocation", "Trash cans"],
  ["hoaContact", "Association contact"],
  ["insuranceNotes", "Insurance"],
];

// Each utility is a provider + contact pair, collapsed into one display line —
// "Electricity: Xcel Energy — 1-800-895-4999, acct #555" — rather than two
// separate facts, since they're only ever meaningful together.
function utilityLine(property, providerKey, contactKey) {
  const provider = property[providerKey];
  const contact = property[contactKey];
  if (!provider && !contact) return null;
  if (provider && contact) return `${provider} — ${contact}`;
  return provider || contact;
}

// A free-text field as a row, or nothing when it's blank (so Group can tell).
function Line({ label, value }) {
  return (
    <p className={`text-stone-600 ${String(value).length > 60 ? "sm:col-span-2" : ""}`}>
      <span className="font-medium text-stone-700">{label}:</span> {value}
    </p>
  );
}
const line = (label, value) => (value ? <Line key={label} label={label} value={value} /> : null);

// The property's details, one card per section (like the lease page's
// Notices). Free-text fields show only when set, and so do Lease questions:
// the lease builder's fill-in-the-gaps box asks whatever a lease still needs.
function propertySections(property, catalog) {
  const states = [property.state];
  const view = (place) =>
    factViewRows({ catalog, target: "property", place, states, answers: property.facts, fromSpecs: property.factsFromSpecs });
  const text = (key) => DETAIL_FACT_FIELDS.find(([k]) => k === key);
  const lines = (keys) => keys.map((k) => line(text(k)[1], property[k]));
  // Only surfaced when it's the exceptional case: STANDARD_LONG_TERM is the
  // default/expected value for most properties, not worth a line.
  const exemptionLabel = FOR_CAUSE_EVICTION_EXEMPTION_OPTIONS.find((opt) => opt.value === property.forCauseEvictionExemption);
  const showExemptionFact = exemptionLabel && property.forCauseEvictionExemption !== "STANDARD_LONG_TERM";
  const sections = [
    { key: "structural", title: "Structural", items: [lines(["stories", "basement", "lotSize"]), view("property.structural")] },
    { key: "parking", title: "Parking and storage", items: [view("property.parking")] },
    {
      key: "utilities",
      title: "Utilities",
      note: "Who pays, plus the provider and who to call for taking over service or troubleshooting at turnover. No phone/cable — that's the tenant's own choice, not tracked here.",
      items: [
        utilityViewRows({ catalog, states, property }),
        factViewRows({ catalog, target: "property", place: "property.utilities", states, answers: property.facts, exclude: IN_UTILITY_ROWS }),
      ],
    },
    { key: "access", title: "Access and trash", items: [lines(["mailboxLocation", "trashPickupDay", "trashCanStorageLocation"]), view("property.access")] },
    {
      key: "legal",
      title: "Legal and financial",
      items: [
        view("property.legal"),
        lines(["hoaContact"]),
        line("Mortgage", utilityLine(property, "mortgageCompany", "mortgageContact")),
        lines(["insuranceNotes"]),
        showExemptionFact && line("For-cause eviction status", exemptionLabel.label),
      ],
    },
    { key: "manager", title: "Property manager", items: [view("property.manager")] },
  ];
  // Fields that only fill clauses, where this state's clauses use some.
  for (const [key, title] of [["repairs", "Repairs and services"], ["facilities", "Shared facilities"]]) {
    if (questionsAt(catalog, "property", `property.${key}`, states, property.facts).length > 0) {
      sections.push({ key, title, note: "The lease clauses fill these in.", items: [view(`property.${key}`)] });
    }
  }
  // Disclosures only where the state's law asks some.
  if (questionsAt(catalog, "property", "property.disclosures", states, property.facts).length > 0) {
    sections.push({
      key: "disclosures",
      title: "Disclosures",
      note: `What you know about the property that the law in ${property.state} makes you tell a tenant.`,
      items: [view("property.disclosures")],
    });
  }
  return sections;
}

function PropertySection({ title, note, items, editing, canEdit, submitting, onEdit, onCancel, onSave, children }) {
  const rows = [items].flat(Infinity).filter(Boolean);
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-medium text-stone-900">{title}</h2>
      <div className="rounded-xl border border-stone-200 bg-white p-5 text-sm shadow-sm">
        {note && <p className="mb-3 text-stone-600">{note}</p>}
        {editing ? (
          <form onSubmit={onSave} className="space-y-4">
            {children}
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
              >
                {submitting ? "Saving..." : "Save"}
              </button>
              <button type="button" onClick={onCancel} className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50">
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
            {canEdit && (
              <button
                type="button"
                onClick={onEdit}
                className="shrink-0 rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Edit
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default function PropertyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = useApi();

  const [property, setProperty] = useState(null);
  const [entities, setEntities] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [leases, setLeases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(null);
  const catalog = useFactCatalog();
  const [submitting, setSubmitting] = useState(false);

  const [archiving, setArchiving] = useState(false);
  const [archiveReason, setArchiveReason] = useState("");
  const [archiveSubmitting, setArchiveSubmitting] = useState(false);

  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [requests, setRequests] = useState([]);
  const [schedules, setSchedules] = useState([]);

  async function load() {
    setLoading(true);
    try {
      const [propertyData, entityData, tenantData, leaseData, incomeData, expenseData, requestData, scheduleData] =
        await Promise.all([
          api.get(`/api/properties/${id}`),
          api.get("/api/entities"),
          api.get(`/api/tenants?propertyId=${id}`),
          api.get(`/api/leases?propertyId=${id}`),
          api.get(`/api/income?propertyId=${id}`),
          api.get(`/api/expenses?propertyId=${id}`),
          api.get(`/api/maintenance-requests?propertyId=${id}`),
          api.get(`/api/maintenance-schedules?propertyId=${id}`),
        ]);
      setProperty(propertyData);
      setEntities(entityData);
      setTenants(tenantData);
      setLeases(leaseData);
      setIncomes(incomeData);
      setExpenses(expenseData);
      setRequests(requestData);
      setSchedules(scheduleData);
      setForm(propertyData);
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
  }, [id]);

  // Props for a group of Lease questions in the edit form, kept in form.facts.
  function factProps(place) {
    return {
      catalog,
      target: "property",
      place,
      states: [form.state],
      answers: form.facts || {},
      onChange: (facts) => setForm({ ...form, facts }),
    };
  }

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const payload = {
        ...form,
        yearBuilt: form.yearBuilt === "" || form.yearBuilt === null ? undefined : Number(form.yearBuilt),
        bedrooms: form.bedrooms === "" || form.bedrooms === null ? undefined : Number(form.bedrooms),
        bathrooms: form.bathrooms === "" || form.bathrooms === null ? undefined : Number(form.bathrooms),
        sqFt: form.sqFt === "" || form.sqFt === null ? undefined : Number(form.sqFt),
        stories: form.stories === "" || form.stories === null ? undefined : Number(form.stories),
      };
      delete payload.facts;
      let updated = await api.put(`/api/properties/${id}`, payload);
      const patch = factPatch(catalog, "property", property.facts, form.facts, PROPERTY_PLACES);
      if (Object.keys(patch).length) updated = await api.put(`/api/properties/${id}/facts`, { facts: patch });
      setProperty(updated);
      setForm(updated);
      setEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete "${property.name || property.address1}"? This can't be undone.`)) return;
    try {
      await api.del(`/api/properties/${id}`);
      navigate("/properties");
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleArchive(e) {
    e.preventDefault();
    setArchiveSubmitting(true);
    setError(null);
    try {
      const updated = await api.post(`/api/properties/${id}/archive`, { reason: archiveReason.trim() || null });
      setProperty(updated);
      setForm(updated);
      setArchiving(false);
      setArchiveReason("");
    } catch (err) {
      setError(err.message);
    } finally {
      setArchiveSubmitting(false);
    }
  }

  async function handleUnarchive() {
    setError(null);
    try {
      const updated = await api.post(`/api/properties/${id}/unarchive`);
      setProperty(updated);
      setForm(updated);
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;
  if (!property) return <p className="text-sm text-red-700">{error || "Property not found."}</p>;

  // Each section of the property's details is its own card with its own Edit,
  // like the lease page's Notices (Taylor, 2026-11-23). One section edits at a
  // time; Save saves the whole form, which differs from the property only there.
  const sectionEdits = {
    structural: (
      <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField label="Stories" type="number" value={form.stories} onChange={(v) => setForm({ ...form, stories: v })} />
              <TextField label="Basement" placeholder="Finished, unfinished, crawlspace, none..." value={form.basement} onChange={(v) => setForm({ ...form, basement: v })} />
              <TextField label="Lot size" placeholder="0.25 acres or 6,500 sq ft" value={form.lotSize} onChange={(v) => setForm({ ...form, lotSize: v })} />
              <FactFieldsEdit {...factProps("property.structural")} flow />
            </div>
      </>
    ),
    parking: (
      <>
            <FactFieldsEdit {...factProps("property.parking")} />
      </>
    ),
    utilities: (
      <>
            <UtilityRowsEdit catalog={catalog} states={[form.state]} form={form} setForm={setForm} />
            <div className="mt-4">
              <FactFieldsEdit {...factProps("property.utilities")} exclude={IN_UTILITY_ROWS} />
            </div>
      </>
    ),
    access: (
      <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField label="Mailbox location" value={form.mailboxLocation} onChange={(v) => setForm({ ...form, mailboxLocation: v })} />
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Trash pickup day</span>
                <select
                  value={form.trashPickupDay ?? ""}
                  onChange={(e) => setForm({ ...form, trashPickupDay: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                >
                  <option value="">Select…</option>
                  {/* An older free-text answer stays selectable until it's changed. */}
                  {[...(form.trashPickupDay && !TRASH_DAYS.includes(form.trashPickupDay) ? [form.trashPickupDay] : []), ...TRASH_DAYS].map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </label>
              <TextField
                span
                label="Trash can storage location"
                placeholder="Side yard, behind gate"
                value={form.trashCanStorageLocation}
                onChange={(v) => setForm({ ...form, trashCanStorageLocation: v })}
              />
              <FactFieldsEdit {...factProps("property.access")} flow />
            </div>
      </>
    ),
    legal: (
      <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FactFieldsEdit {...factProps("property.legal")} flow />
              <TextField label="Association contact" value={form.hoaContact} onChange={(v) => setForm({ ...form, hoaContact: v })} />
              <TextField
                label="Insurance notes"
                placeholder="Insurer, policy #, agent contact..."
                value={form.insuranceNotes}
                onChange={(v) => setForm({ ...form, insuranceNotes: v })}
              />
              <ContactPairField label="Mortgage" form={form} setForm={setForm} providerKey="mortgageCompany" contactKey="mortgageContact" providerPlaceholder="Lender name" />
              <div className="sm:col-span-2">
                <p className="mb-2 text-sm font-medium text-stone-700">Colorado for-cause eviction status</p>
                <p className="mb-2 text-xs text-stone-500">
                  Determines which month-to-month termination-notice clause the Lease Builder offers for this property —
                  see C.R.S. § 38-12-1302.
                </p>
                <div className="space-y-2">
                  {FOR_CAUSE_EVICTION_EXEMPTION_OPTIONS.map((opt) => (
                    <label key={opt.value} className="flex items-start gap-2 text-sm">
                      <input
                        type="radio"
                        name="forCauseEvictionExemption"
                        value={opt.value}
                        checked={(form.forCauseEvictionExemption || "STANDARD_LONG_TERM") === opt.value}
                        onChange={(e) => setForm({ ...form, forCauseEvictionExemption: e.target.value })}
                        className="mt-0.5 h-4 w-4 border-stone-300"
                      />
                      <span className="text-stone-600">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
      </>
    ),
    manager: (
      <>
            <FactFieldsEdit {...factProps("property.manager")} />
      </>
    ),
    repairs: <FactFieldsEdit {...factProps("property.repairs")} />,
    facilities: <FactFieldsEdit {...factProps("property.facilities")} />,
    disclosures: (
      <>
              <FactFieldsEdit {...factProps("property.disclosures")} />
      </>
    ),
  };

  return (
    <div className="space-y-8">
      <BackLink fallback="/properties" />

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
        {property.archived && (
          <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            <p className="font-medium">
              Archived {property.archivedAt ? new Date(property.archivedAt).toLocaleDateString() : ""}
            </p>
            {property.archivedReason && <p className="mt-0.5">{property.archivedReason}</p>}
            <p className="mt-1 text-xs text-amber-700">
              Hidden from normal browsing and locked from edits. Unarchive to make changes again.
            </p>
            <button
              onClick={handleUnarchive}
              className="mt-2 rounded-lg border border-amber-300 bg-white px-3 py-1.5 text-sm font-medium text-amber-800 hover:bg-amber-100"
            >
              Unarchive
            </button>
          </div>
        )}

        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-2xl text-stone-900">{property.name || property.address1}</h1>
            <p className="text-sm text-stone-500">
              {property.address1}
              {property.address2 ? `, ${property.address2}` : ""}, {property.city}, {property.state}{" "}
              {property.zip}
            </p>
            {(property.facts?.county || property.facts?.island) && (
              <p className="text-sm text-stone-500">
                {[property.facts.county && `${property.facts.county.replace(/ County$/i, "")} County`, property.facts.island].filter(Boolean).join(" · ")}
              </p>
            )}
            <Link to={`/properties/${id}/specs`} className="text-xs text-emerald-700 hover:underline">
              Property Specs →
            </Link>
          </div>
          {!editing && !archiving && !property.archived && (
            <div className="flex shrink-0 gap-3 text-sm">
              <button onClick={() => {
                  setForm(property);
                  setEditing("main");
                }} className="text-emerald-700 hover:underline">
                Edit
              </button>
              <button onClick={() => setArchiving(true)} className="text-stone-500 hover:underline">
                Archive
              </button>
              {/* Delete only ever appears for a genuinely empty property (a real mistake,
                  nothing attached yet) — the moment anything real is attached, Archive is
                  the only removal-adjacent action. Taylor's call. */}
              {property.canDelete && (
                <button onClick={handleDelete} className="text-red-600 hover:underline">
                  Delete
                </button>
              )}
            </div>
          )}
        </div>

        {archiving && (
          <form onSubmit={handleArchive} className="mt-4 space-y-3 border-t border-stone-200 pt-4">
            <div>
              <p className="mb-1 text-sm font-medium text-stone-700">Reason for archiving (optional)</p>
              <div className="mb-2 flex flex-wrap gap-2">
                {["Sold", "Owner moved in / no longer rented", "Other"].map((suggestion) => (
                  <button
                    type="button"
                    key={suggestion}
                    onClick={() => setArchiveReason(suggestion === "Other" ? "" : suggestion)}
                    className="rounded-full border border-stone-300 px-3 py-1 text-xs text-stone-600 hover:bg-stone-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              <textarea
                value={archiveReason}
                onChange={(e) => setArchiveReason(e.target.value)}
                rows={2}
                placeholder="e.g. Sold March 2027, no longer renting it out..."
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </div>
            <p className="text-xs text-stone-500">
              This hides the property from normal browsing and locks it from further edits. Nothing is deleted —
              it stays fully recoverable via "View archived properties," and can be unarchived any time.
            </p>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={archiveSubmitting}
                className="rounded-lg bg-stone-700 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800 disabled:opacity-50"
              >
                {archiveSubmitting ? "Archiving..." : "Archive property"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setArchiving(false);
                  setArchiveReason("");
                }}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {editing === "main" ? (
          <form onSubmit={handleSave} className="mt-4 space-y-4 border-t border-stone-200 pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Entity *</span>
                <select
                  required
                  value={form.entityId}
                  onChange={(e) => setForm({ ...form, entityId: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                >
                  {entities.map((entity) => (
                    <option key={entity.id} value={entity.id}>
                      {entity.legalName}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Nickname</span>
                <input
                  value={form.name || ""}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-stone-700">Address line 1 *</span>
                <input
                  required
                  value={form.address1 || ""}
                  onChange={(e) => setForm({ ...form, address1: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-stone-700">Address line 2</span>
                <input
                  value={form.address2 || ""}
                  onChange={(e) => setForm({ ...form, address2: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">City *</span>
                <input
                  required
                  value={form.city || ""}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">State *</span>
                  <input
                    required
                    value={form.state || ""}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Zip *</span>
                  <input
                    required
                    value={form.zip || ""}
                    onChange={(e) => setForm({ ...form, zip: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
              </div>
              <FactFieldsEdit {...factProps("property.address")} flow />

              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Year built</span>
                <input
                  type="number"
                  value={form.yearBuilt ?? ""}
                  onChange={(e) => setForm({ ...form, yearBuilt: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>

              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Sq ft</span>
                <input
                  type="number"
                  value={form.sqFt ?? ""}
                  onChange={(e) => setForm({ ...form, sqFt: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>

              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Bedrooms</span>
                <input
                  type="number"
                  min="0"
                  value={form.bedrooms ?? ""}
                  onChange={(e) => setForm({ ...form, bedrooms: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>

              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Bathrooms</span>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={form.bathrooms ?? ""}
                  onChange={(e) => setForm({ ...form, bathrooms: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>

              <label className="block text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-stone-700">Amenities</span>
                <input
                  value={(form.amenities || []).join(", ")}
                  onChange={(e) => setForm({ ...form, amenities: parseAmenitiesInput(e.target.value) })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  placeholder="Garage, Fenced yard, Central AC"
                />
                <span className="mt-1 block text-xs text-stone-400">Comma-separated</span>
              </label>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
              >
                {submitting ? "Saving..." : "Save changes"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setForm(property);
                  setEditing(false);
                }}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <p className="mt-3 text-sm text-stone-400">
              Owned by {entities.find((e) => e.id === property.entityId)?.legalName || "—"}
            </p>
            {(property.bedrooms || property.bathrooms || property.sqFt || property.yearBuilt) && (
              <p className="mt-1 text-sm text-stone-500">
                {[
                  property.bedrooms ? `${property.bedrooms} bed` : null,
                  property.bathrooms ? `${property.bathrooms} bath` : null,
                  property.sqFt ? `${Number(property.sqFt).toLocaleString()} sq ft` : null,
                  property.yearBuilt ? `built ${property.yearBuilt}` : null,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
            {property.amenities?.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {property.amenities.map((a) => (
                  <span key={a} className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600">
                    {a}
                  </span>
                ))}
              </div>
            )}
          </>
        )}
      </div>


      {catalog &&
        propertySections(property, catalog).map((section) => (
          <PropertySection
            key={section.key}
            title={section.title}
            note={section.note}
            items={section.items}
            // The top card's Edit opens every section at once; each card's own
            // Edit opens just that one. Any Save saves the whole form.
            editing={editing === section.key || editing === "main"}
            canEdit={!editing && !archiving && !property.archived}
            submitting={submitting}
            onEdit={() => {
              setForm(property);
              setEditing(section.key);
            }}
            onCancel={() => {
              setForm(property);
              setEditing(false);
            }}
            onSave={handleSave}
          >
            {sectionEdits[section.key]}
          </PropertySection>
        ))}

      <TenantSection propertyId={id} items={tenants} onChange={load} />
      <LeaseSection propertyId={id} items={leases} onChange={load} />

      <FinancesSnapshotCard propertyId={id} incomes={incomes} expenses={expenses} />
      <MaintenanceSnapshotCard propertyId={id} requests={requests} schedules={schedules} />
    </div>
  );
}

