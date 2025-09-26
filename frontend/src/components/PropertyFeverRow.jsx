// frontend/src/components/PropertyFeverRow.jsx
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import FeverLight from "./FeverLight";
import { getFinancialFever, getMaintenanceFever } from "../utils/feverStatus";
import styles from "./PropertyFeverRow.module.css";

/**
 * Shows the Financial + Maintenance fever lights for a property.
 * Financial is hidden for non-landlords.
 *
 * Props:
 *  - role: "landlord" | "manager" | "viewer" (etc.)
 *  - financial: {
 *      dueDate: string|Date,
 *      monthlyRent: number,
 *      payments: Array<{date: string|Date, amount: number}>,
 *      lateFeeDays?: number,
 *      noticeDays?: number
 *    }
 *  - maintenance: {
 *      items: Array<{
 *        title?: string,
 *        dueDate?: string|Date,
 *        tenantClaim?: boolean,
 *        emergency?: boolean,
 *        completed?: boolean
 *      }>,
 *      approachingDays?: number
 *    }
 *  - compact?: boolean  (smaller dots)
 */
export default function PropertyFeverRow({
  role = "viewer",
  financial,
  maintenance,
  compact = false,
}) {
  const size = compact ? 10 : 14;

  const fin = useMemo(() => {
    if (!financial) return null;
    return getFinancialFever(financial);
  }, [financial]);

  const maint = useMemo(() => {
    return getMaintenanceFever(maintenance || {});
  }, [maintenance]);

  return (
    <div className={styles.row}>
      {role === "landlord" && fin ? (
        <FeverLight
          color={fin.color}
          tooltip={fin.tooltip}
          label="Financial"
          size={size}
        />
      ) : null}
      <FeverLight
        color={maint.color}
        tooltip={maint.tooltip}
        label="Maintenance"
        size={size}
      />
    </div>
  );
}

PropertyFeverRow.propTypes = {
  role: PropTypes.string,
  financial: PropTypes.shape({
    dueDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
      .isRequired,
    monthlyRent: PropTypes.number.isRequired,
    payments: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
          .isRequired,
        amount: PropTypes.number.isRequired,
      })
    ).isRequired,
    lateFeeDays: PropTypes.number,
    noticeDays: PropTypes.number,
  }),
  maintenance: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        dueDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        tenantClaim: PropTypes.bool,
        emergency: PropTypes.bool,
        completed: PropTypes.bool,
      })
    ),
    approachingDays: PropTypes.number,
  }),
  compact: PropTypes.bool,
};
