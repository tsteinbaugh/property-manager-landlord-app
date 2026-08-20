import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useApi } from "../hooks/useApi";
import { rentSeverity, maintenanceSeverity, severityStyle, buildFlags } from "../lib/domainStatus";

export default function DashboardPage() {
  const { user } = useUser();
  const api = useApi();
  const [entities, setEntities] = useState([]);
  const [properties, setProperties] = useState([]);
  const [rentStatuses, setRentStatuses] = useState([]);
  const [maintenanceStatuses, setMaintenanceStatuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get("/api/entities"),
      api.get("/api/properties"),
      api.get("/api/rent-status"),
      api.get("/api/maintenance-status"),
    ])
      .then(([entityData, propertyData, rentStatusData, maintenanceStatusData]) => {
        setEntities(entityData);
        setProperties(propertyData);
        setRentStatuses(rentStatusData);
        setMaintenanceStatuses(maintenanceStatusData);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // One card per property, worst-domain-wins color + a terse line per real
  // issue — the per-property Finances/Maintenance snapshot cards on the
  // property page show the same underlying data with more detail; this is
  // the same idea compressed to fit next to every other property at once.
  const propertyCards = properties
    .map((property) => {
      const rent = rentStatuses.find((r) => r.propertyId === property.id) || { status: "NONE" };
      const maintenance = maintenanceStatuses.find((m) => m.propertyId === property.id) || {
        status: "OK",
        openRequestsCount: 0,
        overdueSchedulesCount: 0,
      };
      const severity = Math.max(rentSeverity(rent.status), maintenanceSeverity(maintenance.status));
      const flags = buildFlags({ rent, maintenance });
      return { property, severity, flags };
    })
    .sort((a, b) => b.severity - a.severity);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-stone-900">Welcome{user?.firstName ? `, ${user.firstName}` : ""}</h1>
        <p className="text-sm text-stone-500">Your portfolio at a glance.</p>
      </div>

      {loading ? (
        <p className="text-sm text-stone-500">Loading...</p>
      ) : (
        <>
          {propertyCards.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-stone-700">Your properties</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {propertyCards.map(({ property, severity, flags }) => {
                  const style = severityStyle(severity);
                  return (
                    <Link
                      key={property.id}
                      to={`/properties/${property.id}`}
                      className={`block space-y-2 rounded-xl border p-4 shadow-sm hover:opacity-90 ${style.card}`}
                    >
                      <h3 className="font-medium text-stone-900">{property.name || property.address1}</h3>
                      {flags.length === 0 ? (
                        <p className="text-xs text-stone-400">All clear</p>
                      ) : (
                        <ul className="space-y-0.5">
                          {flags.map((flag) => (
                            <li key={flag.text} className={`text-xs font-medium ${severityStyle(flag.severity).flag}`}>
                              {flag.text}
                            </li>
                          ))}
                        </ul>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}

      {!loading && entities.length === 0 && (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
          Start by adding an{" "}
          <Link to="/entities" className="text-emerald-700 hover:underline">
            entity
          </Link>{" "}
          — the LLC (or "Self / Personal") that owns your properties.
        </p>
      )}
    </div>
  );
}
