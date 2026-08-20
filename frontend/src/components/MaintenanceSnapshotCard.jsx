import { Link } from "react-router-dom";

const PREVIEW_COUNT = 3;

// Read-only snapshot for the property page — replaces the old full
// MaintenanceRequestSection/MaintenanceScheduleSection CRUD blocks, which
// duplicated the Maintenance hub's own full CRUD. All add/edit/delete/history
// now live only on the Maintenance hub (filtered to this property via
// `?propertyId=`); this card exists so the property page still answers
// "what needs attention here" without leaving the page. Lists a few actual
// item titles (not just counts) since the property page has more room than
// a Dashboard card does for the same information.
export default function MaintenanceSnapshotCard({ propertyId, requests, schedules }) {
  const openRequests = requests.filter((r) => r.status !== "CLOSED");
  const overdueSchedules = schedules.filter((s) => s.overdue);

  return (
    <section className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-stone-900">Maintenance</h2>
        <Link to={`/maintenance?propertyId=${propertyId}`} className="text-sm text-emerald-700 hover:underline">
          View maintenance →
        </Link>
      </div>

      {openRequests.length === 0 && overdueSchedules.length === 0 ? (
        <p className="mt-3 text-sm text-stone-500">Nothing needs attention right now.</p>
      ) : (
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium text-stone-500">
              Open requests <span className="text-stone-400">({openRequests.length})</span>
            </p>
            {openRequests.length === 0 ? (
              <p className="mt-1 text-sm text-stone-400">None</p>
            ) : (
              <ul className="mt-1 space-y-0.5 text-sm text-stone-700">
                {openRequests.slice(0, PREVIEW_COUNT).map((r) => (
                  <li key={r.id} className="truncate">
                    {r.title}
                  </li>
                ))}
                {openRequests.length > PREVIEW_COUNT && (
                  <li className="text-xs text-stone-400">+{openRequests.length - PREVIEW_COUNT} more</li>
                )}
              </ul>
            )}
          </div>
          <div>
            <p className="text-xs font-medium text-stone-500">
              Overdue preventive items <span className="text-stone-400">({overdueSchedules.length})</span>
            </p>
            {overdueSchedules.length === 0 ? (
              <p className="mt-1 text-sm text-stone-400">None</p>
            ) : (
              <ul className="mt-1 space-y-0.5 text-sm text-red-700">
                {overdueSchedules.slice(0, PREVIEW_COUNT).map((s) => (
                  <li key={s.id} className="truncate">
                    {s.title}
                  </li>
                ))}
                {overdueSchedules.length > PREVIEW_COUNT && (
                  <li className="text-xs text-stone-400">+{overdueSchedules.length - PREVIEW_COUNT} more</li>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
