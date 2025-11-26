// newsrc/features/tenants/pages/LandlordTenantsPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import TenantCard from "@features/tenants/components/TenantCard.jsx";
import styles from "./LandlordTenantsPage.module.css";

export default function LandlordTenantsPage() {
  const [tenants, setTenants] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showArchived, setShowArchived] = useState(false);
  const navigate = useNavigate();
  const { token } = useUser() || {};

  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");
        const data = await tenantsApi.list({ token });
        if (!cancelled) {
          setTenants(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load tenants", err);
        if (!cancelled) {
          setError("Failed to load tenants. Please try again.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const visibleTenants = useMemo(() => {
    if (showArchived) return tenants;
    return (tenants || []).filter((t) => !t.archived);
  }, [tenants, showArchived]);

  const hasVisibleTenants = visibleTenants.length > 0;
  const hasAnyArchived = (tenants || []).some((t) => t.archived);

  const handleAddTenant = () => {
    navigate("/landlord/tenants/new");
  };

  const handleOpenTenant = (tenantId) => {
    navigate(`/landlord/tenants/${tenantId}`);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Your tenants</h1>
          <p className={styles.subtitle}>
            Manage tenant profiles separately from properties and leases.
          </p>
        </div>

        <div
          className={styles.actions}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          {/* Always allow adding a tenant, even if all are archived */}
          <button
            type="button"
            className={styles.primaryButton}
            onClick={handleAddTenant}
          >
            + Add tenant
          </button>

          {hasAnyArchived && (
            <button
              type="button"
              onClick={() => setShowArchived((s) => !s)}
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
              {showArchived ? "Hide archived tenants" : "View archived tenants"}
            </button>
          )}
        </div>
      </header>

      {isLoading && (
        <div className={styles.center}>
          <p className={styles.muted}>Loading your tenants…</p>
        </div>
      )}

      {!isLoading && error && (
        <div className={styles.center}>
          <p className={styles.error}>{error}</p>
        </div>
      )}

      {!isLoading && !error && !hasVisibleTenants && (
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>
            {hasAnyArchived ? "No active tenants" : "No tenants yet"}
          </h2>
          <p className={styles.emptyText}>
            {hasAnyArchived
              ? "Archived tenants are hidden from your active list. You can view them using the link above."
              : "Once you add your first tenant, you’ll see them here with their occupants, pets, and emergency contacts."}
          </p>
          {!hasAnyArchived && (
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

      {!isLoading && !error && hasVisibleTenants && (
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
    </div>
  );
}
