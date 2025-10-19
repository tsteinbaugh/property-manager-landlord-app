import React from "react";
import { useNavigate } from "react-router-dom";
import FeverLight from "../components/ui/FeverLight";
import { tooltipForColor } from "../utils/feverStatus";
import { resolveDashboardFeverStatus } from "../utils/finance";
import styles from "./PropertyList.module.css";

/** Local maintenance fever (self-contained) */
function localGetMaintenanceFever({ items = [], approachingDays = 14, nowISO } = {}) {
  if (!Array.isArray(items) || items.length === 0) {
    return { color: "green", tooltip: "No open maintenance items." };
  }
  const now = nowISO ? new Date(nowISO) : new Date();
  const addDays = (d, n) => {
    const x = new Date(d);
    x.setDate(x.getDate() + n);
    return x;
  };

  const open = items.filter((i) => !i.completed);
  if (open.some((i) => i.emergency))
    return { color: "red", tooltip: "Emergency maintenance open." };

  const overdue = open.filter((i) => i.dueDate && new Date(i.dueDate) < now);
  if (overdue.length)
    return { color: "orange", tooltip: `${overdue.length} maintenance task(s) overdue.` };

  const soon = addDays(now, approachingDays);
  const approaching = open.filter(
    (i) => i.dueDate && new Date(i.dueDate) >= now && new Date(i.dueDate) <= soon,
  );
  if (approaching.length)
    return {
      color: "yellow",
      tooltip: `${approaching.length} maintenance task(s) due soon.`,
    };

  return { color: "green", tooltip: "All maintenance up to date." };
}

/** Try to hydrate financials from localStorage if missing on the property object */
function hydrateFinancialsIfMissing(property) {
  const cfg = property?.financialConfig || null;
  const rows = Array.isArray(property?.financialSchedule)
    ? property.financialSchedule
    : [];

  if (cfg && rows.length) return { cfg, rows };

  try {
    const raw = localStorage.getItem(`financials:${property.id}`);
    if (!raw) return { cfg: null, rows: [] };

    const parsed = JSON.parse(raw);
    const lcCfg = parsed?.config || null;
    const lcRows = Array.isArray(parsed?.schedule) ? parsed.schedule : [];
    return { cfg: lcCfg, rows: lcRows };
  } catch {
    return { cfg: null, rows: [] };
  }
}

export default function PropertyList({ role, properties }) {
  const navigate = useNavigate();

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th
              className={`${styles.cell} ${styles.details} ${styles.headerCell}`}
              style={{ textAlign: "left" }}
            >
              Property Information
            </th>
            <th className={`${styles.cell} ${styles.lightCell} ${styles.headerCell}`}>
              Financial Status
            </th>
            <th className={`${styles.cell} ${styles.lightCell} ${styles.headerCell}`}>
              Maintenance Status
            </th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => {
            // --- Maintenance ---
            const maintenanceItems = (
              property?.maintenance?.items ||
              property?.maintenanceItems ||
              []
            ).map((i) => ({
              title: i?.title,
              dueDate: i?.dueDate,
              tenantClaim: !!i?.tenantClaim,
              emergency: !!i?.emergency,
              completed: !!i?.completed,
            }));
            const maintState = localGetMaintenanceFever({
              items: maintenanceItems,
              approachingDays: 14,
            });

            // --- Financial for Dashboard (shared with FinancialTable) ---
            const { cfg, rows } = hydrateFinancialsIfMissing(property);
            const hasSetup = !!(cfg && Array.isArray(rows) && rows.length);

            const dash = hasSetup
              ? resolveDashboardFeverStatus(rows, cfg, { today: new Date() })
              : {
                  color: "gray",
                  label: "",
                  tooltip: "No financial data — click to set up",
                };

            const finColor = dash.color ?? "gray";
            const finTooltip = dash.tooltip || tooltipForColor(finColor) || "Financials";

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
                      {property.address}
                      {property.city ? `, ${property.city}` : ""}
                      {property.state ? `, ${property.state}` : ""}
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
                      <FeverLight
                        color={finColor}
                        size={25}
                        title={finTooltip}
                        split={true}
                        paid={dash.paid}
                      />
                      {/* if you want the month tag back: <span className={styles.monthTag}>{dash.label}</span> */}
                    </button>
                  ) : (
                    <span style={{ display: "inline-block", width: 25, height: 25 }} />
                  )}
                </td>

                {/* Col 3: Maintenance */}
                <td className={`${styles.cell} ${styles.lightCell}`}>
                  <FeverLight
                    color={maintState.color}
                    size={25}
                    title={maintState.tooltip}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
