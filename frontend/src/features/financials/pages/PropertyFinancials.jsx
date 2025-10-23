// src/features/properties/pages/PropertyFinancials.jsx
import React from "react";
import { useParams } from "react-router-dom";

import FinancialForm from "../components/FinancialForm";
import FinancialTable from "../components/FinancialTable";
import { generateLeaseSchedule } from "../utils/finance";
import buttonStyles from "../../../styles/Buttons.module.css";

import { useProperties } from "../../../context/PropertyContext";
import { useFinancials } from "../../../features/financials/useFinancials";

export default function PropertyFinancials() {
  // Route + property lookup
  const { id: routeId } = useParams();
  const { properties } = useProperties();
  const property =
    properties?.find((p) => String(p.id) === String(routeId)) || null;

  // Centralized financials logic
  const {
    state: { config, schedule, showForm, hasSchedule },
    setSchedule,
    setConfig,
    createFinancials,
    saveEdits,
    beginEdit,
    cancelEdit,
    resetAll,
    normalizeSchedule,
  } = useFinancials({ property, routeId });

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0 }}>
        {property?.address ? `${property.address} — Financials` : "Financials"}
      </h2>

      {/* FORM MODE (create or edit) */}
      {showForm && (
        <>
          <FinancialForm
            initialValues={config || {}}
            onLiveChange={setConfig}
            onLiveValid={() => {}}
            showPrimaryAction={false} // we render our own Save/Cancel buttons below
            showErrors={false}
          />

          {/* Actions under the form */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 8,
              flexWrap: "wrap",
              marginTop: 12,
            }}
          >
            <button
              onClick={cancelEdit}
              className={buttonStyles.secondaryButton}
              title="Discard changes and revert to previous state"
            >
              Cancel
            </button>
            <button
              onClick={() => (hasSchedule ? saveEdits(config) : createFinancials(config))}
              className={buttonStyles.primaryButton}
              title={hasSchedule ? "Save updated financial configuration" : "Create schedule"}
            >
              {hasSchedule ? "Save Changes" : "Create Schedule"}
            </button>
          </div>
        </>
      )}

      {/* EMPTY STATE (no schedule yet, not editing) */}
      {!showForm && !hasSchedule && (
        <div
          style={{
            padding: 16,
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            background: "#fafafa",
          }}
        >
          <p style={{ marginTop: 0 }}>
            Financials aren’t set up for this property yet.
          </p>
          <button onClick={beginEdit} className={buttonStyles.primaryButton}>
            Set Up Financials
          </button>
        </div>
      )}

      {/* TABLE VIEW (has schedule, not editing) */}
      {!showForm && hasSchedule && (
        <>
          <FinancialTable
            schedule={schedule}
            config={config}
            onChange={(rows) => setSchedule(normalizeSchedule(rows))}
          />

          {/* Toolbar: Edit + Reset (Reset lives on the table page per spec) */}
          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "flex-end",
              marginTop: 12,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={beginEdit}
              className={buttonStyles.secondaryButton}
              title="Edit configuration (payments/notice/adjustments will be preserved)"
            >
              Edit Financials
            </button>

            <button
              onClick={resetAll}
              className={buttonStyles.outlineDeleteButton}
              title="Clear all financials and start fresh"
            >
              Reset Financials
            </button>
          </div>
        </>
      )}
    </div>
  );
}
