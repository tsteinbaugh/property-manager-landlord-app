import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import PropertySpecSection from "../components/PropertySpecSection";

function money(amount) {
  if (amount === null || amount === undefined) return null;
  return `$${Number(amount).toLocaleString()}`;
}

const PAINT_FIELDS = [
  { key: "location", label: "Location" },
  { key: "brand", label: "Brand" },
  { key: "colorName", label: "Color name" },
  { key: "colorCode", label: "Color code" },
  { key: "sheen", label: "Sheen" },
  { key: "base", label: "Base" },
  { key: "formula", label: "Formula" },
  { key: "gallonsUsed", label: "Gallons used", type: "number" },
  { key: "datePainted", label: "Date painted", type: "date" },
  { key: "paintedBy", label: "Painted by" },
  { key: "touchUpStorageLocation", label: "Touch-up paint storage", placeholder: "Labeled quart, garage shelf" },
  { key: "notes", label: "Notes" },
];

// Flooring/Countertop/Backsplash link to the real Expense that paid for
// them instead of a standalone cost field (no separate number to drift from
// the actual books) — the options depend on that property's fetched
// Expenses, so these three are functions called at render time rather than
// module-level constants like the other four categories.
function expenseLinkField(expenseOptions) {
  return {
    key: "expenseId",
    label: "Linked expense",
    type: "select",
    options: [{ value: "", label: "None" }, ...expenseOptions],
  };
}

function flooringFields(expenseOptions) {
  return [
    { key: "location", label: "Location" },
    { key: "brand", label: "Brand" },
    { key: "productName", label: "Product name" },
    { key: "type", label: "Type", placeholder: "LVP, tile, carpet, hardwood" },
    { key: "sqFtCovered", label: "Sq ft covered", type: "number" },
    { key: "boxesInstalled", label: "Boxes installed", type: "number" },
    { key: "boxesLeftover", label: "Boxes leftover", type: "number" },
    { key: "leftoverStorageLocation", label: "Leftover storage location" },
    { key: "installedBy", label: "Installed by" },
    { key: "installDate", label: "Install date", type: "date" },
    expenseLinkField(expenseOptions),
    { key: "warranty", label: "Warranty" },
    { key: "notes", label: "Notes" },
  ];
}

function countertopFields(expenseOptions) {
  return [
    { key: "location", label: "Location" },
    { key: "brand", label: "Brand" },
    { key: "productName", label: "Product name" },
    { key: "material", label: "Material", placeholder: "Quartz, granite, cultured marble, laminate" },
    { key: "sqFt", label: "Sq ft", type: "number" },
    { key: "installedBy", label: "Installed by" },
    { key: "installDate", label: "Install date", type: "date" },
    expenseLinkField(expenseOptions),
    { key: "warranty", label: "Warranty" },
    { key: "notes", label: "Notes" },
  ];
}

const FIXTURE_TYPE_OPTIONS = [
  { value: "SINK", label: "Sink" },
  { value: "FAUCET", label: "Faucet" },
  { value: "SHOWER_TUB", label: "Shower / Tub" },
  { value: "TOILET", label: "Toilet" },
  { value: "HARDWARE", label: "Hardware" },
];

const FIXTURE_FIELDS = [
  { key: "location", label: "Location" },
  { key: "fixtureType", label: "Type", type: "select", required: true, options: FIXTURE_TYPE_OPTIONS },
  { key: "brand", label: "Brand" },
  { key: "model", label: "Model" },
  { key: "finish", label: "Finish" },
  { key: "warranty", label: "Warranty" },
  { key: "notes", label: "Notes", placeholder: "GPF, rough-in, part numbers, recaulk schedule, etc." },
];

const APPLIANCE_FIELDS = [
  { key: "location", label: "Location" },
  { key: "make", label: "Make" },
  { key: "model", label: "Model" },
  { key: "year", label: "Year", type: "number" },
  { key: "serialNumber", label: "Serial number" },
  { key: "warrantyExpiration", label: "Warranty expiration", type: "date" },
  { key: "maintenanceIntervalDays", label: "Maintenance interval (days)", type: "number" },
  { key: "lastServiceDate", label: "Last service date", type: "date" },
  { key: "filterSize", label: "Filter size" },
  { key: "notes", label: "Notes" },
];

function backsplashFields(expenseOptions) {
  return [
    { key: "location", label: "Location" },
    { key: "brand", label: "Brand" },
    { key: "productName", label: "Product name" },
    { key: "material", label: "Material" },
    { key: "tileSize", label: "Tile size" },
    { key: "groutColor", label: "Grout color" },
    { key: "groutBrand", label: "Grout brand" },
    { key: "spareTilesOnHand", label: "Spare tiles on hand", type: "number" },
    expenseLinkField(expenseOptions),
    { key: "notes", label: "Notes" },
  ];
}

const EXTERIOR_FIELDS = [
  { key: "location", label: "Location", placeholder: "Front yard, backyard..." },
  { key: "name", label: "Name", placeholder: "Oak tree, front lawn..." },
  { key: "approxAge", label: "Approx. age (years)", type: "number" },
  { key: "size", label: "Size" },
  { key: "lastTrimmedDate", label: "Last trimmed", type: "date" },
  { key: "lastTreatedDate", label: "Last treated", type: "date" },
  { key: "lastFertilizedDate", label: "Last fertilized", type: "date" },
  { key: "notes", label: "Notes" },
];

// Special-cases the expense-link field to show the linked Expense's real
// amount/date directly (already embedded on the item via the backend's
// `include`) rather than doing an options-array lookup — simpler than
// keeping a dynamic option list in sync just for read-only display.
function formatFieldValue(field, item) {
  if (field.key === "expenseId") {
    return item.expense ? `${money(item.expense.amount)} · ${new Date(item.expense.date).toLocaleDateString()}` : null;
  }
  const value = item[field.key];
  if (value === null || value === undefined || value === "") return null;
  if (field.type === "date") return new Date(value).toLocaleDateString();
  if (field.type === "select") return field.options.find((o) => o.value === value)?.label || value;
  return value;
}

// Reuses the same field configs the Category-view edit forms use (passed in
// by the parent, since Flooring/Countertop/Backsplash's fields depend on
// fetched Expense options), so the By Room view's "click for details"
// expansion never drifts out of sync with what's actually editable.
function ItemDetailFields({ item, fields }) {
  const populated = (fields || []).filter((f) => formatFieldValue(f, item) !== null && formatFieldValue(f, item) !== "");
  const hasHistory = (item.maintenanceRequests?.length || 0) + (item.maintenanceSchedules?.length || 0) > 0;

  return (
    <div className="space-y-3">
      {populated.length === 0 ? (
        <p className="text-xs text-stone-400">No additional details recorded.</p>
      ) : (
        <dl className="grid grid-cols-1 gap-x-4 gap-y-1 text-xs sm:grid-cols-2">
          {populated.map((f) => (
            <div key={f.key}>
              <dt className="inline text-stone-400">{f.label}: </dt>
              <dd className="inline text-stone-700">{formatFieldValue(f, item)}</dd>
            </div>
          ))}
        </dl>
      )}

      {hasHistory && (
        <div className="border-t border-stone-200 pt-3">
          <p className="mb-1 text-xs font-semibold text-stone-600">Maintenance history</p>
          <div className="space-y-1 text-xs text-stone-500">
            {(item.maintenanceRequests || []).map((r) => (
              <p key={`req-${r.id}`}>
                {r.title} — {r.status.replace("_", " ")} ({new Date(r.reportedDate).toLocaleDateString()})
              </p>
            ))}
            {(item.maintenanceSchedules || []).map((s) => (
              <p key={`sched-${s.id}`}>
                {s.title} — every {s.intervalDays} days
                {s.lastDoneDate ? `, last done ${new Date(s.lastDoneDate).toLocaleDateString()}` : ""}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function roomSummary(item) {
  switch (item.category) {
    case "Paint":
      return [item.brand, item.colorName].filter(Boolean).join(" · ") || "Paint";
    case "Flooring":
      return [item.brand, item.productName, item.type].filter(Boolean).join(" · ") || "Flooring";
    case "Countertops":
      return [item.brand, item.material].filter(Boolean).join(" · ") || "Countertop";
    case "Fixtures":
      return [item.fixtureType?.replace("_", "/"), item.brand, item.model].filter(Boolean).join(" · ") || "Fixture";
    case "Appliances & Systems":
      return [item.make, item.model].filter(Boolean).join(" · ") || "Appliance";
    case "Backsplash":
      return [item.brand, item.material].filter(Boolean).join(" · ") || "Backsplash";
    case "Exterior / Grounds":
      return item.name || "Exterior feature";
    default:
      return item.category;
  }
}

export default function PropertySpecsPage() {
  const { id } = useParams();
  const api = useApi();

  const [property, setProperty] = useState(null);
  const [paintSpecs, setPaintSpecs] = useState([]);
  const [flooringSpecs, setFlooringSpecs] = useState([]);
  const [countertopSpecs, setCountertopSpecs] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const [appliances, setAppliances] = useState([]);
  const [backsplashSpecs, setBacksplashSpecs] = useState([]);
  const [exteriorFeatures, setExteriorFeatures] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState("category");
  const [expandedItem, setExpandedItem] = useState(null);
  const [showRetired, setShowRetired] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const q = `propertyId=${id}${showRetired ? "&includeRetired=true" : ""}`;
      const [propertyData, paint, flooring, countertops, fixtureData, applianceData, backsplash, exterior, expenseData] =
        await Promise.all([
          api.get(`/api/properties/${id}`),
          api.get(`/api/paint-specs?${q}`),
          api.get(`/api/flooring-specs?${q}`),
          api.get(`/api/countertop-specs?${q}`),
          api.get(`/api/fixtures?${q}`),
          api.get(`/api/appliances?${q}`),
          api.get(`/api/backsplash-specs?${q}`),
          api.get(`/api/exterior-features?${q}`),
          api.get(`/api/expenses?propertyId=${id}`),
        ]);
      setProperty(propertyData);
      setPaintSpecs(paint);
      setFlooringSpecs(flooring);
      setCountertopSpecs(countertops);
      setFixtures(fixtureData);
      setAppliances(applianceData);
      setBacksplashSpecs(backsplash);
      setExteriorFeatures(exterior);
      setExpenses(expenseData);
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
  }, [id, showRetired]);

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;
  if (!property) return <p className="text-sm text-red-700">{error || "Property not found."}</p>;

  const allItems = [
    ...paintSpecs.map((i) => ({ ...i, category: "Paint" })),
    ...flooringSpecs.map((i) => ({ ...i, category: "Flooring" })),
    ...countertopSpecs.map((i) => ({ ...i, category: "Countertops" })),
    ...fixtures.map((i) => ({ ...i, category: "Fixtures" })),
    ...appliances.map((i) => ({ ...i, category: "Appliances & Systems" })),
    ...backsplashSpecs.map((i) => ({ ...i, category: "Backsplash" })),
    ...exteriorFeatures.map((i) => ({ ...i, category: "Exterior / Grounds" })),
  ];

  const expenseOptions = expenses.map((e) => ({
    value: e.id,
    label: `${money(e.amount)} · ${new Date(e.date).toLocaleDateString()}${e.payee ? ` · ${e.payee}` : ""}`,
  }));
  const resolvedFlooringFields = flooringFields(expenseOptions);
  const resolvedCountertopFields = countertopFields(expenseOptions);
  const resolvedBacksplashFields = backsplashFields(expenseOptions);
  const fieldsByCategory = {
    Paint: PAINT_FIELDS,
    Flooring: resolvedFlooringFields,
    Countertops: resolvedCountertopFields,
    Fixtures: FIXTURE_FIELDS,
    "Appliances & Systems": APPLIANCE_FIELDS,
    Backsplash: resolvedBacksplashFields,
    "Exterior / Grounds": EXTERIOR_FIELDS,
  };

  const roomMap = new Map();
  for (const item of allItems) {
    const label = item.location?.trim() || "Unassigned";
    const key = label.toLowerCase();
    if (!roomMap.has(key)) roomMap.set(key, { label, items: [] });
    roomMap.get(key).items.push(item);
  }
  const rooms = Array.from(roomMap.values()).sort((a, b) => {
    if (a.label === "Unassigned") return 1;
    if (b.label === "Unassigned") return -1;
    return a.label.localeCompare(b.label);
  });

  return (
    <div className="space-y-6">
      <Link to={`/properties/${id}`} className="text-sm text-emerald-700 hover:underline">
        ← Back to property
      </Link>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-stone-900">Property Specs</h1>
          <p className="text-sm text-stone-500">{property.name || property.address1}</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-stone-600">
            <input
              type="checkbox"
              checked={showRetired}
              onChange={(e) => setShowRetired(e.target.checked)}
              className="h-4 w-4 rounded border-stone-300"
            />
            Show retired
          </label>
          <div className="flex rounded-lg border border-stone-300 bg-white p-1 text-sm">
            <button
              onClick={() => setView("room")}
              className={`rounded-md px-3 py-1.5 font-medium ${view === "room" ? "bg-emerald-700 text-white" : "text-stone-600 hover:bg-stone-100"}`}
            >
              By Room
            </button>
            <button
              onClick={() => setView("category")}
              className={`rounded-md px-3 py-1.5 font-medium ${view === "category" ? "bg-emerald-700 text-white" : "text-stone-600 hover:bg-stone-100"}`}
            >
              By Category
            </button>
          </div>
        </div>
      </div>

      {view === "room" ? (
        <div className="space-y-6">
          <p className="text-xs text-stone-400">
            Read-only browse view — click a card for details, switch to By Category to add or edit.
          </p>
          {rooms.length === 0 ? (
            <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
              No specs recorded for this property yet. Switch to By Category to add some.
            </p>
          ) : (
            rooms.map((room) => (
              <div key={room.label} className="space-y-3">
                <h2 className="text-lg font-medium text-stone-900">{room.label}</h2>
                <div className="space-y-2">
                  {room.items.map((item) => {
                    const itemKey = `${item.category}-${item.id}`;
                    const expanded = expandedItem === itemKey;
                    return (
                      <div
                        key={itemKey}
                        onClick={() => setExpandedItem(expanded ? null : itemKey)}
                        className="cursor-pointer rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:border-emerald-300"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-stone-700">{roomSummary(item)}</p>
                          <div className="flex items-center gap-2 text-xs">
                            {!item.active && (
                              <span className="rounded-full bg-stone-200 px-2 py-0.5 font-medium text-stone-500">Retired</span>
                            )}
                            {item.lowStock && (
                              <span className="rounded-full bg-red-100 px-2 py-0.5 font-medium text-red-800">Low stock</span>
                            )}
                            {item.warrantyExpiringSoon && (
                              <span className="rounded-full bg-amber-100 px-2 py-0.5 font-medium text-amber-800">
                                Warranty expiring
                              </span>
                            )}
                            <span className="rounded-full bg-stone-100 px-2 py-0.5 font-medium text-stone-600">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        {expanded && (
                          <div className="mt-3 border-t border-stone-200 pt-3">
                            <ItemDetailFields item={item} fields={fieldsByCategory[item.category]} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="space-y-8">
          <PropertySpecSection
            title="Paint"
            addLabel="Add paint"
            emptyLabel="No paint specs yet."
            items={paintSpecs}
            fields={PAINT_FIELDS}
            apiPath="/api/paint-specs"
            propertyId={id}
            onChange={load}
            renderSummary={(p) =>
              [p.location, p.brand, p.colorName, p.touchUpStorageLocation ? `touch-up: ${p.touchUpStorageLocation}` : null]
                .filter(Boolean)
                .join(" · ")
            }
          />

          <PropertySpecSection
            title="Flooring"
            addLabel="Add flooring"
            emptyLabel="No flooring specs yet."
            items={flooringSpecs}
            fields={resolvedFlooringFields}
            apiPath="/api/flooring-specs"
            propertyId={id}
            onChange={load}
            renderSummary={(f) => (
              <>
                {[f.location, f.brand, f.productName, f.type].filter(Boolean).join(" · ")}
                {f.boxesLeftover !== null && f.boxesLeftover !== undefined && ` · ${f.boxesLeftover} boxes left`}
                {f.expense && ` · ${money(f.expense.amount)}`}
                {f.lowStock && <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">Low stock</span>}
              </>
            )}
          />

          <PropertySpecSection
            title="Countertops"
            addLabel="Add countertop"
            emptyLabel="No countertop specs yet."
            items={countertopSpecs}
            fields={resolvedCountertopFields}
            apiPath="/api/countertop-specs"
            propertyId={id}
            onChange={load}
            renderSummary={(c) =>
              [c.location, c.brand, c.material, c.expense ? money(c.expense.amount) : null].filter(Boolean).join(" · ")
            }
          />

          <PropertySpecSection
            title="Fixtures"
            addLabel="Add fixture"
            emptyLabel="No fixtures yet."
            items={fixtures}
            fields={FIXTURE_FIELDS}
            apiPath="/api/fixtures"
            propertyId={id}
            onChange={load}
            renderSummary={(f) =>
              [f.location, FIXTURE_TYPE_OPTIONS.find((o) => o.value === f.fixtureType)?.label, f.brand, f.model, f.finish]
                .filter(Boolean)
                .join(" · ")
            }
          />

          <PropertySpecSection
            title="Appliances & Systems"
            addLabel="Add appliance"
            emptyLabel="No appliances or systems yet."
            items={appliances}
            fields={APPLIANCE_FIELDS}
            apiPath="/api/appliances"
            propertyId={id}
            onChange={load}
            renderSummary={(a) => (
              <>
                {[a.location, a.make, a.model, a.filterSize ? `filter: ${a.filterSize}` : null].filter(Boolean).join(" · ")}
                {a.warrantyExpiringSoon && (
                  <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                    Warranty expiring soon
                  </span>
                )}
              </>
            )}
          />

          <PropertySpecSection
            title="Backsplash"
            addLabel="Add backsplash"
            emptyLabel="No backsplash specs yet."
            items={backsplashSpecs}
            fields={resolvedBacksplashFields}
            apiPath="/api/backsplash-specs"
            propertyId={id}
            onChange={load}
            renderSummary={(b) =>
              [b.location, b.brand, b.material, b.expense ? money(b.expense.amount) : null].filter(Boolean).join(" · ")
            }
          />

          <PropertySpecSection
            title="Exterior / Grounds"
            addLabel="Add exterior feature"
            emptyLabel="No exterior features yet."
            items={exteriorFeatures}
            fields={EXTERIOR_FIELDS}
            apiPath="/api/exterior-features"
            propertyId={id}
            onChange={load}
            renderSummary={(e) => [e.location, e.name, e.size].filter(Boolean).join(" · ")}
          />
        </div>
      )}
    </div>
  );
}
