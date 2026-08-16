import { formatFieldValue } from "../lib/specFieldFormat";

// Read-only "everything about this item" detail block — shared by Room
// view's click-to-expand cards (PropertySpecsPage) and Category view's
// click-to-expand cards (PropertySpecSection), so both surfaces show the
// exact same populated-fields + maintenance-history view.
export default function SpecItemDetailFields({ item, fields }) {
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
