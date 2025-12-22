// newsrc/features/tenants/pages/LandlordLeasesPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { leasesApi } from "@features/leases/api/leases.api.js";

// reuse tenant card styling so it visually matches tenants/properties
import styles from "@shared/styles/LandlordPage.module.css";

function LeaseCard({ lease, onClick }) {
  const { rentAmount, status, startDate, endDate, archived } = lease;

  const badgeClass = archived
    ? TenantCardStyles.badgeArchived
    : TenantCardStyles.badgeIdle;

  const badgeLabel = archived ? "Archived" : "Active lease";

  return (
    <div
      className={`${TenantCardStyles.card} ${
        archived ? TenantCardStyles.archived : ""
      }`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className={TenantCardStyles.header}>
        <div className={TenantCardStyles.title}>
          {"Unnamed lease"}
        </div>
        <span className={`${TenantCardStyles.badge} ${badgeClass}`}>
          {badgeLabel}
        </span>
      </div>

      <div className={TenantCardStyles.contact}>
        {rentAmount ? (
          <span className={TenantCardStyles.contactLine}>{rentAmount}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No rent amount set
          </span>
        )}
      </div>
      <div className={TenantCardStyles.contact}>
        {status ? (
          <span className={TenantCardStyles.contactLine}>{status}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No status not determined
          </span>
        )}
      </div>
      <div className={TenantCardStyles.contact}>
        {startDate ? (
          <span className={TenantCardStyles.contactLine}>{startDate}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No start date set
          </span>
        )}
      </div>
      <div className={TenantCardStyles.contact}>
        {endDate ? (
          <span className={TenantCardStyles.contactLine}>{endDate}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No end date set
          </span>
        )}
      </div>
    </div>
  );
}

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
            Manage your active, archived and draft leases..
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
