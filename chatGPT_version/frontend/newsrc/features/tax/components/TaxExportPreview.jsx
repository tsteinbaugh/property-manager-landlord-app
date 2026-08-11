import React, { useState } from "react";
import { useTaxExports } from "@features/tax/hooks/useTaxExports.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/**
 * TaxExportPreview
 * - Buttons are enabled only if the current role can EXPORT on TAX_EXPORTS.
 * - Defaults role to SYSADMIN to preserve existing tests/usage.
 */
export default function TaxExportPreview({ propertyId, defaultYear, role = ROLES.SYSADMIN }) {
  const [year, setYear] = useState(defaultYear || new Date().getFullYear());
  const { isLoading, result, exportExpensesCSV, exportSummaryJSON } = useTaxExports();

  const canExport = can(role, R.TAX_EXPORTS, A.EXPORT);

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Tax Exports</h3>

      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
        <label>Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.valueAsNumber || year)}
          style={{ width: 100 }}
        />
        <button
          onClick={() => exportExpensesCSV({ propertyId, year })}
          disabled={isLoading || !canExport}
          title={!canExport ? "Insufficient permissions" : undefined}
        >
          Export Expenses (CSV)
        </button>
        <button
          onClick={() => exportSummaryJSON({ propertyId, year })}
          disabled={isLoading || !canExport}
          title={!canExport ? "Insufficient permissions" : undefined}
        >
          Export Summary (JSON)
        </button>
      </div>

      {isLoading && <div>Generating…</div>}

      {result?.kind === "csv" && (
        <div>
          <div style={{ color: "#666", marginBottom: 4 }}>CSV rows: {result.count}</div>
          <textarea readOnly rows={8} style={{ width: "100%" }} value={result.csv} />
        </div>
      )}

      {result?.kind === "json" && (
        <pre
          style={{
            background: "#f6f6f6",
            padding: 8,
            borderRadius: 4,
            overflowX: "auto",
          }}
        >
{JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
