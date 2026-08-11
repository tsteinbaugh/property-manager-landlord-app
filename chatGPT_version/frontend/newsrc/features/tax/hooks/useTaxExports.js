import { useCallback, useState } from "react";
import { taxExportsApi } from "../api/taxExports.api.js";

export function useTaxExports() {
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const exportExpensesCSV = useCallback(async ({ propertyId, year }) => {
    setLoading(true);
    try {
      const res = await taxExportsApi.exportExpensesCSV({ propertyId, year });
      setResult({ kind: "csv", ...res });
      return res;
    } finally {
      setLoading(false);
    }
  }, []);

  const exportSummaryJSON = useCallback(async ({ propertyId, year }) => {
    setLoading(true);
    try {
      const res = await taxExportsApi.exportSummaryJSON({ propertyId, year });
      setResult({ kind: "json", ...res });
      return res;
    } finally {
      setLoading(false);
    }
  }, []);

  return { isLoading, result, exportExpensesCSV, exportSummaryJSON };
}
