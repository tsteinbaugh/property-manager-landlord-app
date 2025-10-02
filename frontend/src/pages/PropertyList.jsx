// property-manager-landlord-app/frontend/src/pages/PropertyList.jsx
import { Link } from "react-router-dom";
import FeverLight from "../components/ui/FeverLight"; // fixed path
import { getFinancialFever, getMaintenanceFever } from "../utils/feverStatus";
import styles from "./PropertyList.module.css";

export default function PropertyList({ role, properties }) {
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
            const maintState = getMaintenanceFever({ items: maintenanceItems, approachingDays: 14 });

            // --- Financial ---
            const dueDate =
              property?.financial?.currentPeriod?.dueDate ||
              property?.financial?.dueDate ||
              property?.nextRentDueDate ||
              property?.rentDueDate ||
              null;

            const monthlyRent =
              property?.financial?.rentAmount ??
              property?.rentAmount ??
              property?.rent ??
              (Array.isArray(property?.tenants) ? property.tenants[0]?.rent : undefined);

            const payments = property?.financial?.currentPeriod?.payments || property?.payments || [];

            const finState =
              dueDate && Number(monthlyRent) > 0
                ? getFinancialFever({
                    dueDate,
                    monthlyRent: Number(monthlyRent),
                    payments,
                    lateFeeDays: 7,
                    noticeDays: 10,
                  })
                : { color: "gray", tooltip: "No financial data." };

            return (
              <tr key={property.id}>
                {/* Col 1: Property details */}
                <td className={`${styles.cell} ${styles.details}`}>
                  <Link to={`/property/${property.id}`} className={styles.addrLink}>
                    <span className={styles.addrText}>
                      {property.address}, {property.city}, {property.state}
                    </span>
                  </Link>
                </td>

                {/* Col 2: Financial (landlord only) */}
                <td className={`${styles.cell} ${styles.lightCell}`}>
                  {role === "landlord" ? (
                    <Link
                      to={`/properties/${property.id}/financials`}
                      title={finState.tooltip || "Open financials"}
                      style={{ display: "inline-flex", alignItems: "center" }}
                      aria-label="Open financials"
                    >
                      <FeverLight color={finState.color} size={18} title={finState.tooltip} />
                    </Link>
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
