// newsrc/features/tenants/pages/LandlordOccupantsPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { occupantsApi } from "@features/residents/api/occupants.api.js";

// reuse tenant card styling so it visually matches tenants/properties
import TenantCardStyles from "@features/residents/components/tenants/TenantCard.module.css";
import styles from "../tenants/LandlordTenantsPage.module.css";

function OccupantCard({ occupant, onClick }) {
  const { name, relation, archived } = occupant;

  const badgeClass = archived
    ? TenantCardStyles.badgeArchived
    : TenantCardStyles.badgeIdle;

  const badgeLabel = archived ? "Archived" : "Active occupant";

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
          {name || "Unnamed occupant"}
        </div>
        <span className={`${TenantCardStyles.badge} ${badgeClass}`}>
          {badgeLabel}
        </span>
      </div>

      <div className={TenantCardStyles.contact}>
        {relation ? (
          <span className={TenantCardStyles.contactLine}>{relation}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No relation set (roommate, child, etc.)
          </span>
        )}
      </div>
    </div>
  );
}

export default function LandlordOccupantsPage() {
  const [occupants, setOccupants] = useState([]);
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

        const data = await occupantsApi.listAll({
          includeArchived: true,
          token,
        });
        if (!cancelled) {
          setOccupants(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load occupants", err);
        if (!cancelled) {
          setError("Failed to load occupants. Please try again.");
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

  const visibleOccupants = useMemo(() => {
    if (showArchived) return occupants;
    return (occupants || []).filter((o) => !o.archived);
  }, [occupants, showArchived]);

  const hasVisibleOccupants = visibleOccupants.length > 0;
  const hasAnyArchived = (occupants || []).some((o) => o.archived);

  const handleAddOccupant = () => {
    navigate("/landlord/occupants/new");
  };

  const handleOpenOccupant = (id) => {
    navigate(`/landlord/occupants/${id}`);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Your occupants</h1>
          <p className={styles.subtitle}>
            See everyone living in your rentals, across all tenants and leases.
          </p>
        </div>

        <div
          className={styles.actions}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          {hasVisibleOccupants && (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddOccupant}
            >
              + Add occupant
            </button>
          )}

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
                ? "Hide archived occupants"
                : "View archived occupants"}
            </button>
          )}
        </div>
      </header>

      {isLoading && (
        <div className={styles.center}>
          <p className={styles.muted}>Loading your occupants…</p>
        </div>
      )}

      {!isLoading && error && (
        <div className={styles.center}>
          <p className={styles.error}>{error}</p>
        </div>
      )}

      {!isLoading && !error && !hasVisibleOccupants && (
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>
            {hasAnyArchived ? "No active occupants" : "No occupants yet"}
          </h2>
          <p className={styles.emptyText}>
            {hasAnyArchived
              ? "Archived occupants are hidden from your active list. You can view them using the link above."
              : "Once you add your first occupant, you’ll see them here. You can link them to tenants and leases later."}
          </p>

          {!hasAnyArchived && (
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

      {!isLoading && !error && hasVisibleOccupants && (
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
    </div>
  );
}
