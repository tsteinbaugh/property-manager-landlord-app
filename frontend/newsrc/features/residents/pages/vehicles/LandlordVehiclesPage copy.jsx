// newsrc/features/tenants/pages/LandlordVehiclesPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { vehiclesApi } from "@features/residents/api/vehicles.api.js";

// reuse tenant card styling so it visually matches tenants/properties
import TenantCardStyles from "@features/residents/components/tenants/TenantCard.module.css";
import styles from "../tenants/LandlordTenantsPage.module.css";

function VehicleCard({ vehicle, onClick }) {
  const { make, model, year, color, state, plate, permit, archived } = vehicle;

  const badgeClass = archived
    ? TenantCardStyles.badgeArchived
    : TenantCardStyles.badgeIdle;

  const badgeLabel = archived ? "Archived" : "Active vehicle";

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
          {permit || plate || "Unnamed vehicle"}
        </div>
        <span className={`${TenantCardStyles.badge} ${badgeClass}`}>
          {badgeLabel}
        </span>
      </div>

      <div className={TenantCardStyles.contact}>
        {make ? (
          <span className={TenantCardStyles.contactLine}>{make}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No make set (Honda, Tacoma, Nissan, etc.)
          </span>
        )}
      </div>
      <div className={TenantCardStyles.contact}>
        {model ? (
          <span className={TenantCardStyles.contactLine}>{model}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No model set (Civic, Tacoma, Rouge, etc.)
          </span>
        )}
      </div>
      <div className={TenantCardStyles.contact}>
        {year ? (
          <span className={TenantCardStyles.contactLine}>{year}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No year set
          </span>
        )}
      </div>
      <div className={TenantCardStyles.contact}>
        {color ? (
          <span className={TenantCardStyles.contactLine}>{color}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No color set
          </span>
        )}
      </div>
      <div className={TenantCardStyles.contact}>
        {state ? (
          <span className={TenantCardStyles.contactLine}>{state}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No state set
          </span>
        )}
      </div>
      <div className={TenantCardStyles.contact}>
        {plate ? (
          <span className={TenantCardStyles.contactLine}>{plate}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No license plate set
          </span>
        )}
      </div>
      <div className={TenantCardStyles.contact}>
        {permit ? (
          <span className={TenantCardStyles.contactLine}>{permit}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No permit # set
          </span>
        )}
      </div>
    </div>
  );
}

export default function LandlordVehiclesPage() {
  const [vehicles, setVehicles] = useState([]);
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

        const data = await vehiclesApi.listAll({
          includeArchived: true,
          token,
        });
        if (!cancelled) {
          setVehicles(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load vehicles", err);
        if (!cancelled) {
          setError("Failed to load vehicles. Please try again.");
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

  const visibleVehicles = useMemo(() => {
    if (showArchived) return vehicles;
    return (vehicles || []).filter((o) => !o.archived);
  }, [vehicles, showArchived]);

  const hasVisibleVehicles = visibleVehicles.length > 0;
  const hasAnyArchived = (vehicles || []).some((o) => o.archived);

  const handleAddVehicle = () => {
    navigate("/landlord/vehicles/new");
  };

  const handleOpenVehicle = (id) => {
    navigate(`/landlord/vehicles/${id}`);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Your vehicles</h1>
          <p className={styles.subtitle}>
            See everyone living in your rentals, across all tenants and leases.
          </p>
        </div>

        <div
          className={styles.actions}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          <button
            type="button"
            className={styles.primaryButton}
            onClick={handleAddVehicle}
          >
            + Add vehicle
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
                ? "Hide archived vehicles"
                : "View archived vehicles"}
            </button>
          )}
        </div>
      </header>

      {isLoading && (
        <div className={styles.center}>
          <p className={styles.muted}>Loading your vehicles…</p>
        </div>
      )}

      {!isLoading && error && (
        <div className={styles.center}>
          <p className={styles.error}>{error}</p>
        </div>
      )}

      {!isLoading && !error && !hasVisibleVehicles && (
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>
            {hasAnyArchived ? "No active vehicles" : "No vehicles yet"}
          </h2>
          <p className={styles.emptyText}>
            {hasAnyArchived
              ? "Archived vehicles are hidden from your active list. You can view them using the link above."
              : "Once you add your first vehicle, you’ll see them here. You can link them to tenants and leases later."}
          </p>

          {!hasAnyArchived && (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddVehicle}
            >
              Create your first vehicle
            </button>
          )}
        </div>
      )}

      {!isLoading && !error && hasVisibleVehicles && (
        <div className={styles.grid}>
          {visibleVehicles.map((o) => (
            <VehicleCard
              key={o.id}
              vehicle={o}
              onClick={() => handleOpenVehicle(o.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
