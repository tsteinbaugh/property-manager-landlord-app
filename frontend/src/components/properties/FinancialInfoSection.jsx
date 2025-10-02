// property-manager-landlord-app/frontend/src/components/properties/FinancialInfoSection.jsx
import React from "react";
import FinancialForm from "../financials/FinancialForm";

export default function FinancialInfoSection({ initialValues = {}, onChange, onValidChange }) {
  function handleCreate(cfg){
    onChange?.(cfg);
    const ok = !!cfg.startDateISO && cfg.months>0 && cfg.dueDay>=1 && cfg.dueDay<=31 && cfg.monthlyRent>=0;
    onValidChange?.(ok);
  }
  return (
    <FinancialForm
      initialValues={initialValues}
      onCreate={handleCreate}
      onLiveChange={onChange}
      onLiveValid={onValidChange}
    />
  );
}
