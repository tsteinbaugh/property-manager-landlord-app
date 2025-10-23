// src/features/financials/useFinancials.js
import { useEffect, useMemo, useRef, useState } from "react";
import { generateLeaseSchedule, computeRowTotals } from "./utils/finance";
import { useProperties } from "../../context/PropertyContext";

/** ---------- shared helpers ---------- */
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
function ym(iso) {
  if (!iso) return "";
  return String(iso).slice(0, 7);
}
function mergeSchedulePreservingPayments(oldRows = [], newRows = []) {
  const byYM = new Map();
  for (const r of oldRows) {
    const key = ym(r.dueDateISO) || r.periodLabel || "";
    if (key) byYM.set(key, r);
  }
  return (newRows || []).map((r) => {
    const key = ym(r.dueDateISO) || r.periodLabel || "";
    const old = key ? byYM.get(key) : null;
    if (!old) return r;

    const out = { ...r };

    // payments
    out.payments = dedupePayments([...(old.payments || [])]);

    // late fee intent
    if (old.lateFeeWaived) {
      out.lateFeeWaived = true;
      out.lateFee = 0;
    }

    // manual adjustments
    if (Array.isArray(old.adjustments) && old.adjustments.length) {
      out.adjustments = old.adjustments.map((a) => ({
        amount: Number(a.amount) || 0,
        reason: a.reason || "",
      }));
      out.expectedAdjustments = +(
        out.adjustments.reduce((s, a) => s + (Number(a.amount) || 0), 0)
      ).toFixed(2);
      out.adjustmentReasons = old.adjustmentReasons
        ? [...old.adjustmentReasons]
        : undefined;
    }

    // notice tracking
    if (old.notice) {
      out.notice = { ...old.notice };
    }

    return out;
  });
}

/** optional place for future migrations */
function migrateConfig(cfg) {
  // Example: lift legacy fields into cfg.deposit shape if needed.
  // Return cfg unchanged by default.
  return cfg || null;
}

/** The hook */
export function useFinancials({ property, routeId, initialConfig, initialSchedule }) {
  const { editProperty } = useProperties();
  const pid = property?.id ?? routeId ?? "temp";
  const storageKey = useMemo(() => `financials:${pid}`, [pid]);

  const [config, setConfig] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // snapshots for cancel
  const prevConfigRef = useRef(null);
  const prevScheduleRef = useRef([]);
  const prevHadScheduleRef = useRef(false);

  // load precedence: property → localStorage → initial props
  useEffect(() => {
    let loaded = false;

    if (property?.financialConfig && Array.isArray(property?.financialSchedule)) {
      setConfig(migrateConfig(property.financialConfig));
      setSchedule(normalizeSchedule(property.financialSchedule));
      setShowForm(property.financialSchedule.length === 0);
      loaded = true;
    }

    if (!loaded) {
      try {
        const raw = localStorage.getItem(storageKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed?.config) {
            setConfig(migrateConfig(parsed.config));
            setSchedule(
              Array.isArray(parsed.schedule) ? normalizeSchedule(parsed.schedule) : [],
            );
            setShowForm(!Array.isArray(parsed.schedule) || parsed.schedule.length === 0);
            loaded = true;
          }
        }
      } catch {}
    }

    if (!loaded) {
      setConfig(migrateConfig(initialConfig) || null);
      setSchedule(
        Array.isArray(initialSchedule) ? normalizeSchedule(initialSchedule) : [],
      );
      setShowForm(!initialConfig || !Array.isArray(initialSchedule) || !initialSchedule?.length);
    }
  }, [property, storageKey, initialConfig, initialSchedule]);

  // persist to localStorage
  useEffect(() => {
    if (!config) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify({ config, schedule }));
    } catch {}
  }, [config, schedule, storageKey]);

  /** create brand-new schedule */
  function createFinancials(cfg) {
    let built = generateLeaseSchedule(cfg);
    if (!Array.isArray(built) || built.length === 0) {
      setConfig(cfg);
      setSchedule([]);
      setShowForm(false);
      return;
    }
    const normalized = normalizeSchedule(built);
    setConfig(cfg);
    setSchedule(normalized);
    setShowForm(false);

    try {
      if (property && editProperty) {
        editProperty({
          ...property,
          financialConfig: cfg,
          financialSchedule: normalized,
        });
      }
    } catch {}
  }

  /** edit existing terms while preserving payments/flags */
  function saveEdits(cfg) {
    const fresh = generateLeaseSchedule(cfg) || [];
    const merged = mergeSchedulePreservingPayments(schedule || [], fresh || []);
    const next = normalizeSchedule(merged);

    setConfig(cfg);
    setSchedule(next);
    setShowForm(false);

    try {
      if (property && editProperty) {
        editProperty({
          ...property,
          financialConfig: cfg,
          financialSchedule: next,
        });
      }
    } catch {}
  }

  /** UI helpers */
  function beginEdit() {
    prevConfigRef.current = config ? JSON.parse(JSON.stringify(config)) : null;
    prevScheduleRef.current = schedule ? JSON.parse(JSON.stringify(schedule)) : [];
    prevHadScheduleRef.current = Array.isArray(schedule) && schedule.length > 0;
    setShowForm(true);
  }
  function cancelEdit() {
    setConfig(prevConfigRef.current);
    setSchedule(prevScheduleRef.current);
    setShowForm(false);
  }
  function resetAll() {
    if (!confirm("Reset this property's financial setup? This cannot be undone.")) return;
    try {
      localStorage.removeItem(storageKey);
    } catch {}
    setConfig(null);
    setSchedule([]);
    setShowForm(true);

    try {
      if (property && editProperty) {
        editProperty({
          ...property,
          financialConfig: null,
          financialSchedule: [],
        });
      }
    } catch {}

    prevConfigRef.current = null;
    prevScheduleRef.current = [];
    prevHadScheduleRef.current = false;
  }

  const hasSchedule = Array.isArray(schedule) && schedule.length > 0;

  return {
    state: { config, schedule, showForm, hasSchedule },
    setSchedule, // for table edits
    setConfig,   // for live form edits
    createFinancials,
    saveEdits,
    beginEdit,
    cancelEdit,
    resetAll,
    normalizeSchedule, // export if table needs it
  };
}
