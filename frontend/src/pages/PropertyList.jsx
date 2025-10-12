// property-manager-landlord-app/frontend/src/pages/PropertyList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import FeverLight from "../components/ui/FeverLight";
import { pickDashboardStatusFromRows, tooltipForColor } from "../utils/feverStatus";
import styles from "./PropertyList.module.css";

/** Local maintenance fever (self-contained) */
function localGetMaintenanceFever({ items = [], approachingDays = 14, nowISO } = {}) {
  if (!Array.isArray(items) || items.length === 0) {
    return { color: "green", tooltip: "No open maintenance items." };
  }
  const now = nowISO ? new Date(nowISO) : new Date();
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

  const open = items.filter(i => !i.completed);
  if (open.some(i => i.emergency)) return { color: "red", tooltip: "Emergency maintenance open." };

  const overdue = open.filter(i => i.dueDate && new Date(i.dueDate) < now);
  if (overdue.length) return { color: "orange", tooltip: `${overdue.length} maintenance task(s) overdue.` };

  const soon = addDays(now, approachingDays);
  const approaching = open.filter(i => i.dueDate && new Date(i.dueDate) >= now && new Date(i.dueDate) <= soon);
  if (approaching.length) return { color: "yellow", tooltip: `${approaching.length} maintenance task(s) due soon.` };

  return { color: "green", tooltip: "All maintenance up to date." };
}

export default function PropertyList({ role, properties }) {
  const navigate = useNavigate();

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={`${styles.cell} ${styles.details} ${styles.headerCell}`} style={{ textAlign: "left" }}>
              Property Information
            </th>
            <th className={`${styles.cell} ${styles.lightCell} ${styles.headerCell}`}>Financial Status</th>
            <th className={`${styles.cell} ${styles.lightCell} ${styles.headerCell}`}>Maintenance Status</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => {
            // --- Maintenance ---
            const maintenanceItems =
              (property?.maintenance?.items || property?.maintenanceItems || []).map((i) => ({
                title: i?.title,
                dueDate: i?.dueDate,
                tenantClaim: !!i?.tenantClaim,
                emergency: !!i?.emergency,
                completed: !!i?.completed,
              }));
            const maintState = localGetMaintenanceFever({ items: maintenanceItems, approachingDays: 14 });

            // --- Financial for Dashboard (shared with FinancialTable) ---
            const rows = property?.financialSchedule || [];
            const cfg  = property?.financialConfig || null;
            const dash = (cfg && Array.isArray(rows) && rows.length)
              ? pickDashboardStatusFromRows(rows, cfg)
              : null;

            const hasSetup  = !!(cfg && Array.isArray(rows) && rows.length);
            const finColor  = hasSetup ? (dash?.color ?? "gray") : "gray";
            const finTooltip = hasSetup
              ? (dash?.tooltip || tooltipForColor(finColor) || "Financials")
              : "No financial data — click to set up";

            const handleOpenFinancials = () => {
              navigate(`/property/${property.id}/financials`);
            };

            return (
              <tr key={property.id}>
                {/* Col 1: Property details */}
                <td className={`${styles.cell} ${styles.details}`}>
                  <button
                    type="button"
                    className={styles.addrLink}
                    onClick={() => navigate(`/property/${property.id}`)}
                    title="Open property"
                  >
                    <span className={styles.addrText}>
                      {property.address}{property.city ? `, ${property.city}` : ""}{property.state ? `, ${property.state}` : ""}
                    </span>
                  </button>
                </td>

                {/* Col 2: Financial (landlord only) */}
                <td className={`${styles.cell} ${styles.lightCell}`}>
                  {role === "landlord" ? (
                    <button
                      type="button"
                      onClick={handleOpenFinancials}
                      title={finTooltip}
                      className={styles.lightButton}
                      aria-label="Open financials"
                    >
                      <FeverLight color={finColor} size={18} title={finTooltip} />
                      {/* intentionally removed month text next to the light */}
                    </button>
                  ) : (
                    <span style={{ display: "inline-block", width: 18, height: 18 }} />
                  )}
                </td>

                {/* Col 3: Maintenance */}
                <td className={`${styles.cell} ${styles.lightCell}`}>
                  <FeverLight color={maintState.color} size={18} title={maintState.tooltip} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
