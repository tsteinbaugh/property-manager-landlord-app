// newsrc/features/tenants/pages/LandlordLeasesPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { leasesApi } from "@features/leases/api/leases.api.js";
import LeaseCard from "@features/leases/components/LeaseCard.jsx"

import styles from "@shared/styles/LandlordPage.module.css";

export default function LandlordLeasesPage() {
  const [leases, setLeases] = useState([]);
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

        const data = await leasesApi.listAll({
          includeArchived: true,
          token,
        });
        if (!cancelled) {
          setLeases(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load leases", err);
        if (!cancelled) {
          setError("Failed to load leases. Please try again.");
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

  const visibleLeases = useMemo(() => {
    if (showArchived) return leases;
    return (leases || []).filter((o) => !o.archived);
  }, [leases, showArchived]);

  const hasVisibleLeases = visibleLeases.length > 0;
  const hasAnyArchived = (leases || []).some((o) => o.archived);

  const handleAddLease = () => {
    navigate("/landlord/leases/new");
  };

  const handleOpenLease = (id) => {
    navigate(`/landlord/leases/${id}`);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Your leases</h1>
          <p className={styles.subtitle}>
            Manage your active, archived and draft leases.
          </p>
        </div>

        <div
          className={styles.actions}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          <button
            type="button"
            className={styles.primaryButton}
            onClick={handleAddLease}
          >
            + Add lease
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
              {showArchived
                ? "Hide archived leases"
                : "View archived leases"}
            </button>
          )}
        </div>
      </header>

      {isLoading && (
        <div className={styles.center}>
          <p className={styles.muted}>Loading your leases…</p>
        </div>
      )}

      {!isLoading && error && (
        <div className={styles.center}>
          <p className={styles.error}>{error}</p>
        </div>
      )}

      {!isLoading && !error && !hasVisibleLeases && (
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>
            {hasAnyArchived ? "No active leases" : "No leases yet"}
          </h2>
          <p className={styles.emptyText}>
            {hasAnyArchived
              ? "Archived leases are hidden from your active list. You can view them using the link above."
              : "Once you add your first lease, you’ll see them here. You can link them to tenants and leases later."}
          </p>

          {!hasAnyArchived && (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddLease}
            >
              Create your first lease
            </button>
          )}
        </div>
      )}

      {!isLoading && !error && hasVisibleLeases && (
        <div className={styles.grid}>
          {visibleLeases.map((o) => (
            <LeaseCard
              key={o.id}
              lease={o}
              onClick={() => handleOpenLease(o.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
