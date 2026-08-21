import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import TenantSection from "../components/TenantSection";
import LeaseSection from "../components/LeaseSection";
import FinancesSnapshotCard from "../components/FinancesSnapshotCard";
import MaintenanceSnapshotCard from "../components/MaintenanceSnapshotCard";
import BackLink from "../components/BackLink";

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
  ["propertyType", "Type"],
  ["stories", "Stories"],
  ["basement", "Basement"],
  ["lotSize", "Lot size"],
  ["parking", "Parking"],
  ["storage", "Storage"],
  ["mailboxLocation", "Mailbox"],
  ["trashPickupDay", "Trash pickup"],
  ["trashCanStorageLocation", "Trash cans"],
  ["hoaOrMetroDistrict", "HOA / metro district"],
  ["hoaContact", "HOA contact"],
  ["insuranceNotes", "Insurance"],
];

// Each utility is a provider + contact pair, collapsed into one display line —
// "Electricity: Xcel Energy — 1-800-895-4999, acct #555" — rather than two
// separate facts, since they're only ever meaningful together.
const UTILITY_FIELDS = [
  ["electricityProvider", "electricityContact", "Electricity"],
  ["gasProvider", "gasContact", "Gas"],
  ["waterProvider", "waterContact", "Water"],
  ["sewerProvider", "sewerContact", "Sewer"],
  ["trashProvider", "trashContact", "Trash"],
  ["internetProvider", "internetContact", "Internet"],
  ["mortgageCompany", "mortgageContact", "Mortgage"],
];

function utilityLine(property, providerKey, contactKey) {
  const provider = property[providerKey];
  const contact = property[contactKey];
  if (!provider && !contact) return null;
  if (provider && contact) return `${provider} — ${contact}`;
  return provider || contact;
}

// Read-only rollup of the second attributes batch — only renders facts that are
// actually set, so a property nobody's filled these in for shows nothing extra.
function PropertyDetailFacts({ property }) {
  const facts = DETAIL_FACT_FIELDS.filter(([key]) => property[key]);
  const utilities = UTILITY_FIELDS.map(([providerKey, contactKey, label]) => [
    label,
    utilityLine(property, providerKey, contactKey),
  ]).filter(([, line]) => line);
  if (facts.length === 0 && utilities.length === 0 && !property.acceptsSection8) return null;

  return (
    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 border-t border-stone-100 pt-3 text-sm sm:grid-cols-2">
      {property.acceptsSection8 && (
        <p className="text-stone-600 sm:col-span-2">
          <span className="font-medium text-stone-700">Accepts Section 8</span>
        </p>
      )}
      {facts.map(([key, label]) => (
        <p key={key} className="text-stone-600">
          <span className="font-medium text-stone-700">{label}:</span> {property[key]}
        </p>
      ))}
      {utilities.map(([label, line]) => (
        <p key={label} className="text-stone-600">
          <span className="font-medium text-stone-700">{label}:</span> {line}
        </p>
      ))}
    </div>
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
  const [submitting, setSubmitting] = useState(false);

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
      const updated = await api.put(`/api/properties/${id}`, payload);
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

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;
  if (!property) return <p className="text-sm text-red-700">{error || "Property not found."}</p>;

  return (
    <div className="space-y-8">
      <BackLink fallback="/properties" />

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-2xl text-stone-900">{property.name || property.address1}</h1>
            <p className="text-sm text-stone-500">
              {property.address1}
              {property.address2 ? `, ${property.address2}` : ""}, {property.city}, {property.state}{" "}
              {property.zip}
            </p>
            <Link to={`/properties/${id}/specs`} className="text-xs text-emerald-700 hover:underline">
              Property Specs →
            </Link>
          </div>
          {!editing && (
            <div className="flex shrink-0 gap-3 text-sm">
              <button onClick={() => setEditing(true)} className="text-emerald-700 hover:underline">
                Edit
              </button>
              <button onClick={handleDelete} className="text-red-600 hover:underline">
                Delete
              </button>
            </div>
          )}
        </div>

        {editing ? (
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

            <div className="border-t border-stone-200 pt-4">
              <h3 className="mb-3 text-sm font-semibold text-stone-800">Structural</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <TextField
                  label="Property type"
                  placeholder="Single-family, duplex, apartment building, ADU, condo..."
                  value={form.propertyType}
                  onChange={(v) => setForm({ ...form, propertyType: v })}
                >
                  <span className="mt-1 block text-xs text-stone-400">
                    For one unit in a larger building, use Address line 2 for the unit number and this field for
                    the building type.
                  </span>
                </TextField>
                <TextField label="Stories" type="number" value={form.stories} onChange={(v) => setForm({ ...form, stories: v })} />
                <TextField label="Basement" placeholder="Finished, unfinished, crawlspace, none..." value={form.basement} onChange={(v) => setForm({ ...form, basement: v })} />
                <TextField label="Lot size" placeholder="0.25 acres or 6,500 sq ft" value={form.lotSize} onChange={(v) => setForm({ ...form, lotSize: v })} />
                <TextField label="Parking" placeholder="2-car garage, driveway + street..." value={form.parking} onChange={(v) => setForm({ ...form, parking: v })} />
                <TextField label="Storage" placeholder="Shed in backyard, none..." value={form.storage} onChange={(v) => setForm({ ...form, storage: v })} />
              </div>
            </div>

            <div className="border-t border-stone-200 pt-4">
              <h3 className="mb-3 text-sm font-semibold text-stone-800">Utilities</h3>
              <p className="mb-3 text-xs text-stone-400">
                Provider + who to call, for taking over service or troubleshooting at turnover. No phone/cable —
                that's the tenant's own choice, not tracked here.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <ContactPairField label="Electricity" form={form} setForm={setForm} providerKey="electricityProvider" contactKey="electricityContact" />
                <ContactPairField label="Gas" form={form} setForm={setForm} providerKey="gasProvider" contactKey="gasContact" />
                <ContactPairField label="Water" form={form} setForm={setForm} providerKey="waterProvider" contactKey="waterContact" />
                <ContactPairField label="Sewer" form={form} setForm={setForm} providerKey="sewerProvider" contactKey="sewerContact" />
                <ContactPairField label="Trash" form={form} setForm={setForm} providerKey="trashProvider" contactKey="trashContact" />
                <ContactPairField
                  label="Internet"
                  providerPlaceholder="Leave blank if tenant's choice"
                  form={form}
                  setForm={setForm}
                  providerKey="internetProvider"
                  contactKey="internetContact"
                />
              </div>
            </div>

            <div className="border-t border-stone-200 pt-4">
              <h3 className="mb-3 text-sm font-semibold text-stone-800">Access & trash</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <TextField label="Mailbox location" value={form.mailboxLocation} onChange={(v) => setForm({ ...form, mailboxLocation: v })} />
                <TextField label="Trash pickup day" placeholder="Tuesday" value={form.trashPickupDay} onChange={(v) => setForm({ ...form, trashPickupDay: v })} />
                <TextField
                  span
                  label="Trash can storage location"
                  placeholder="Side yard, behind gate"
                  value={form.trashCanStorageLocation}
                  onChange={(v) => setForm({ ...form, trashCanStorageLocation: v })}
                />
              </div>
            </div>

            <div className="border-t border-stone-200 pt-4">
              <h3 className="mb-3 text-sm font-semibold text-stone-800">Legal & financial</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <TextField label="HOA / metro district" placeholder="Maple Grove Metro District" value={form.hoaOrMetroDistrict} onChange={(v) => setForm({ ...form, hoaOrMetroDistrict: v })} />
                  <TextField label="HOA contact" value={form.hoaContact} onChange={(v) => setForm({ ...form, hoaContact: v })} />
                </div>
                <ContactPairField label="Mortgage" form={form} setForm={setForm} providerKey="mortgageCompany" contactKey="mortgageContact" providerPlaceholder="Lender name" />
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={!!form.acceptsSection8}
                    onChange={(e) => setForm({ ...form, acceptsSection8: e.target.checked })}
                    className="h-4 w-4 rounded border-stone-300"
                  />
                  <span className="font-medium text-stone-700">Accepts Section 8</span>
                </label>
                <TextField
                  label="Insurance notes"
                  placeholder="Insurer, policy #, agent contact..."
                  value={form.insuranceNotes}
                  onChange={(v) => setForm({ ...form, insuranceNotes: v })}
                />
              </div>
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
            <PropertyDetailFacts property={property} />
          </>
        )}
      </div>

      <TenantSection propertyId={id} items={tenants} onChange={load} />
      <LeaseSection propertyId={id} items={leases} onChange={load} />

      <FinancesSnapshotCard propertyId={id} incomes={incomes} expenses={expenses} />
      <MaintenanceSnapshotCard propertyId={id} requests={requests} schedules={schedules} />
    </div>
  );
}

