// newsrc/features/residents/pages/LandlordResidentsPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { occupantsApi } from "@features/tenants/api/occupants.api.js";

import TenantCard from "@features/tenants/components/TenantCard.jsx";
import OccupantCard from "../components/OccupantCard";

import styles from "@features/tenants/pages/LandlordTenantsPage.module.css";

export default function LandlordResidentsPage() {
  const [activeTab, setActiveTab] = useState("tenants");
  const navigate = useNavigate();

  // ---------------- TENANTS STATE ----------------

  const [tenants, setTenants] = useState([]);
  const [tenantsLoading, setTenantsLoading] = useState(true);
  const [tenantsError, setTenantsError] = useState("");
  const [showArchivedTenants, setShowArchivedTenants] = useState(false);

  // Load tenants when Tenants tab is active
  useEffect(() => {
    if (activeTab !== "tenants") return;

    let cancelled = false;

    async function load() {
      try {
        setTenantsLoading(true);
        setTenantsError("");
        const data = await tenantsApi.list();
        if (!cancelled) {
          setTenants(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load tenants (Residents page)", err);
        if (!cancelled) {
          setTenantsError("Failed to load tenants. Please try again.");
        }
      } finally {
        if (!cancelled) setTenantsLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [activeTab]);

  const visibleTenants = useMemo(() => {
    if (showArchivedTenants) return tenants;
    return (tenants || []).filter((t) => !t.archived);
  }, [tenants, showArchivedTenants]);

  const hasVisibleTenants = visibleTenants.length > 0;
  const hasAnyArchivedTenants = (tenants || []).some((t) => t.archived);

  const handleAddTenant = () => {
    navigate("/landlord/tenants/new");
  };

  const handleOpenTenant = (tenantId) => {
    navigate(`/landlord/tenants/${tenantId}`);
  };

  const renderTenantsTab = () => (
    <>
      {tenantsLoading && (
        <div className={styles.center}>
          <p className={styles.muted}>Loading your tenants…</p>
        </div>
      )}

      {!tenantsLoading && tenantsError && (
        <div className={styles.center}>
          <p className={styles.error}>{tenantsError}</p>
        </div>
      )}

      {!tenantsLoading && !tenantsError && !hasVisibleTenants && (
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>
            {hasAnyArchivedTenants ? "No active tenants" : "No tenants yet"}
          </h2>
          <p className={styles.emptyText}>
            {hasAnyArchivedTenants
              ? "Archived tenants are hidden from your active list. You can view them using the link above."
              : "Once you add your first tenant, you’ll see them here."}
          </p>
          {!hasAnyArchivedTenants && (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddTenant}
            >
              Create your first tenant
            </button>
          )}
        </div>
      )}

      {!tenantsLoading && !tenantsError && hasVisibleTenants && (
        <div className={styles.grid}>
          {visibleTenants.map((t) => (
            <TenantCard
              key={t.id}
              tenant={t}
              onClick={() => handleOpenTenant(t.id)}
            />
          ))}
        </div>
      )}
    </>
  );

  // ---------------- OCCUPANTS STATE ----------------

  const [occupants, setOccupants] = useState([]);
  const [occupantsLoading, setOccupantsLoading] = useState(true);
  const [occupantsError, setOccupantsError] = useState("");
  const [showArchivedOccupants, setShowArchivedOccupants] = useState(false);

  // Load occupants when Occupants tab is active
  useEffect(() => {
    if (activeTab !== "occupants") return;

    let cancelled = false;

    async function load() {
      try {
        setOccupantsLoading(true);
        setOccupantsError("");
        // NEW: use decoupled API – listAll across all occupants
        const data = await occupantsApi.listAll({ includeArchived: true });
        if (!cancelled) {
          setOccupants(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load occupants (Residents page)", err);
        if (!cancelled) {
          setOccupantsError("Failed to load occupants. Please try again.");
        }
      } finally {
        if (!cancelled) setOccupantsLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [activeTab]);

  const visibleOccupants = useMemo(() => {
    if (showArchivedOccupants) return occupants;
    return (occupants || []).filter((o) => !o.archived);
  }, [occupants, showArchivedOccupants]);

  const hasVisibleOccupants = visibleOccupants.length > 0;
  const hasAnyArchivedOccupants = (occupants || []).some((o) => o.archived);

  const handleAddOccupant = () => {
    navigate("/landlord/occupants/new");
  };

  const handleOpenOccupant = (occupantId) => {
    navigate(`/landlord/occupants/${occupantId}`);
  };

  const renderOccupantsTab = () => (
    <>
      {occupantsLoading && (
        <div className={styles.center}>
          <p className={styles.muted}>Loading your occupants…</p>
        </div>
      )}

      {!occupantsLoading && occupantsError && (
        <div className={styles.center}>
          <p className={styles.error}>{occupantsError}</p>
        </div>
      )}

      {!occupantsLoading && !occupantsError && !hasVisibleOccupants && (
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>
            {hasAnyArchivedOccupants ? "No active occupants" : "No occupants yet"}
          </h2>
          <p className={styles.emptyText}>
            {hasAnyArchivedOccupants
              ? "Archived occupants are hidden from your active list. You can view them using the link above."
              : "Once you add your first occupant, you’ll see them here. You can link them to leases later."}
          </p>
          {!hasAnyArchivedOccupants && (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddOccupant}
            >
              Create your first occupant
            </button>
          )}
        </div>
      )}

      {!occupantsLoading && !occupantsError && hasVisibleOccupants && (
        <div className={styles.grid}>
          {visibleOccupants.map((o) => (
            <OccupantCard
              key={o.id}
              occupant={o}
              onClick={() => handleOpenOccupant(o.id)}
            />
          ))}
        </div>
      )}
    </>
  );

  const renderPlaceholderTab = (title, body) => (
    <div className={styles.empty}>
      <h2 className={styles.emptyTitle}>{title}</h2>
      <p className={styles.emptyText}>{body}</p>
    </div>
  );

  // ---------------- RENDER ----------------

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Your residents</h1>
          <p className={styles.subtitle}>
            Tenants, occupants, pets, and emergency contacts all live here.
          </p>
        </div>

        {/* Tab-specific header actions */}
        {activeTab === "tenants" && (
          <div
            className={styles.actions}
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            {/* Always allow adding a tenant (matches LandlordTenantsPage) */}
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddTenant}
            >
              + Add tenant
            </button>

            {hasAnyArchivedTenants && (
              <button
                type="button"
                onClick={() => setShowArchivedTenants((s) => !s)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: 14,
                  textDecoration: "underline",
                  cursor: "pointer",
                  alignSelf: "flex-end",
                  color: "#4b5563",
                }}
              >
                {showArchivedTenants
                  ? "Hide archived tenants"
                  : "View archived tenants"}
              </button>
            )}
          </div>
        )}

        {activeTab === "occupants" && (
          <div
            className={styles.actions}
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            {/* Always allow adding an occupant, even if all are archived */}
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddOccupant}
            >
              + Add occupant
            </button>

            {hasAnyArchivedOccupants && (
              <button
                type="button"
                onClick={() => setShowArchivedOccupants((s) => !s)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: 14,
                  textDecoration: "underline",
                  cursor: "pointer",
                  alignSelf: "flex-end",
                  color: "#4b5563",
                }}
              >
                {showArchivedOccupants
                  ? "Hide archived occupants"
                  : "View archived occupants"}
              </button>
            )}
          </div>
        )}
      </header>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 12,
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {[
          { key: "tenants", label: "Tenants" },
          { key: "occupants", label: "Occupants" },
          { key: "pets", label: "Pets" },
          { key: "econtacts", label: "Emergency contacts" },
        ].map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              style={{
                border: "none",
                background: "none",
                padding: "6px 10px",
                borderBottom: isActive
                  ? "2px solid #4f46e5"
                  : "2px solid transparent",
                color: isActive ? "#111827" : "#6b7280",
                fontSize: 14,
                fontWeight: isActive ? 600 : 500,
                cursor: "pointer",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      {activeTab === "tenants" && renderTenantsTab()}
      {activeTab === "occupants" && renderOccupantsTab()}
      {activeTab === "pets" &&
        renderPlaceholderTab(
          "Pets dashboard coming soon",
          "We’ll surface all pets here once the resident flow is wired up. For now, pets live under each tenant."
        )}
      {activeTab === "econtacts" &&
        renderPlaceholderTab(
          "Emergency contacts dashboard coming soon",
          "Later you’ll see all emergency contacts here in one place. For now, they’re available in each tenant profile."
        )}
    </div>
  );
}
