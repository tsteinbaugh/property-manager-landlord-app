// property-manager-landlord-app/frontend/src/pages/PropertyFinancials.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import FinancialForm from "../components/financials/FinancialForm";
import FinancialTable from "../components/financials/FinancialTable";
import { generateLeaseSchedule } from "../utils/finance";
import buttonStyles from "../styles/Buttons.module.css";
import { useProperties } from "../context/PropertyContext";

// ---- helpers (single definitions)
function samePayment(a, b) {
  if (!a || !b) return false;
  const amtA = Number(a.amount),
    amtB = Number(b.amount);
  const dateA = a.dateISO || "",
    dateB = b.dateISO || "";
  const methodA = (a.method || "").trim(),
    methodB = (b.method || "").trim();
  const noteA = (a.note || "").trim(),
    noteB = (b.note || "").trim();
  return amtA === amtB && dateA === dateB && methodA === methodB && noteA === noteB;
}
function dedupePayments(payments = []) {
  const seen = new Set();
  const out = [];
  for (const p of payments) {
    const key = [
      Number(p.amount),
      p.dateISO || "",
      (p.method || "").trim(),
      (p.note || "").trim(),
    ].join("|");
    if (!seen.has(key)) {
      seen.add(key);
      out.push({ ...p, amount: Number(p.amount) });
    }
  }
  return out;
}
function normalizeSchedule(rows = []) {
  return rows.map((r) => ({ ...r, payments: dedupePayments(r.payments || []) }));
}

export default function PropertyFinancials({
  property, // optional when navigated from PropertyDetail
  initialConfig,
  initialSchedule,
}) {
  const params = useParams?.() || {};
  const routeId = params.id;
  const { properties = [], editProperty } = useProperties?.() || {};

  const record =
    property || properties.find((p) => String(p.id) === String(routeId)) || null;

  const pid = record?.id || routeId || "temp";
  const storageKey = useMemo(() => `financials:${pid}`, [pid]);

  const [config, setConfig] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Load
  useEffect(() => {
    let loaded = false;

    // 1) From property (preferred)
    if (record?.financialConfig && Array.isArray(record?.financialSchedule)) {
      setConfig(record.financialConfig);
      setSchedule(normalizeSchedule(record.financialSchedule));
      setShowForm(record.financialSchedule.length === 0);
      loaded = true;
    }

    // 2) From localStorage
    if (!loaded) {
      try {
        const raw = localStorage.getItem(storageKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed?.config) {
            setConfig(parsed.config);
            setSchedule(
              Array.isArray(parsed.schedule) ? normalizeSchedule(parsed.schedule) : [],
            );
            setShowForm(!Array.isArray(parsed.schedule) || parsed.schedule.length === 0);
            loaded = true;
          }
        }
      } catch {}
    }

    // 3) From initial props
    if (!loaded) {
      if (initialConfig) setConfig(initialConfig);
      if (Array.isArray(initialSchedule)) setSchedule(normalizeSchedule(initialSchedule));
      setShowForm(
        !initialConfig || !Array.isArray(initialSchedule) || initialSchedule.length === 0,
      );
    }
  }, [storageKey, initialConfig, initialSchedule]);

  // Persist
  useEffect(() => {
    if (!config) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify({ config, schedule }));
    } catch {}
  }, [config, schedule, storageKey]);

  // Build + inject first/last ONCE, then normalize (idempotent)
  function finishSetup(cfg) {
    // build schedule (finance.js already injects first/last if flags & payments exist)
    let built = generateLeaseSchedule(cfg);

    if (!Array.isArray(built) || built.length === 0) {
      setConfig(cfg);
      setSchedule([]);
      setShowForm(false);
      return;
    }

    // ensure payments are normalized/deduped
    built = normalizeSchedule(built);

    setConfig(cfg);
    setSchedule(built);
    setShowForm(false);

    // Write back to global property so PropertyDetail can flip the button text
    try {
      if (record && editProperty) {
        editProperty({
          ...record,
          financialConfig: cfg,
          financialSchedule: built,
        });
      }
    } catch {}
  }

  function resetAll() {
    if (!confirm("Reset this property's financial schedule? This cannot be undone."))
      return;
    try {
      localStorage.removeItem(storageKey);
    } catch {}
    setConfig(null);
    setSchedule([]);
    setShowForm(true);
  }

  const hasSchedule = Array.isArray(schedule) && schedule.length > 0;

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0 }}>
        {record?.address ? `${record.address} — Financials` : "Financials"}
      </h2>

      {showForm && (
        <FinancialForm
          initialValues={config || {}}
          onCreate={finishSetup}
          onLiveChange={setConfig}
          onLiveValid={() => {}}
          showPrimaryAction={true}
          showErrors={false}
        />
      )}

      {!showForm && !hasSchedule && (
        <div
          style={{
            padding: 16,
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            background: "#fafafa",
          }}
        >
          <p style={{ marginTop: 0 }}>Financials aren’t set up for this property yet.</p>
          <button
            onClick={() => setShowForm(true)}
            className={buttonStyles.primaryButton}
          >
            Set Up Financials
          </button>
        </div>
      )}

      {!showForm && hasSchedule && (
        <>
          {/* Security Deposit banner removed; FinancialTable now owns that section */}
          <FinancialTable
            schedule={schedule}
            config={config}
            onChange={(rows) => setSchedule(normalizeSchedule(rows))}
          />
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
            <button
              onClick={resetAll}
              className={buttonStyles.secondaryButton}
              title="Clear this setup and start over"
            >
              Reset Financials
            </button>
          </div>
        </>
      )}
    </div>
  );
}
