// newsrc/features/tenants/pages/LandlordPetsPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { petsApi } from "@features/residents/api/pets.api.js";

// reuse tenant card styling so it visually matches tenants/properties
import TenantCardStyles from "@features/residents/components/tenants/TenantCard.module.css";
import styles from "../tenants/LandlordTenantsPage.module.css";

function PetCard({ pet, onClick }) {
  const { name, type, breed, weightLb, archived } = pet;

  const badgeClass = archived
    ? TenantCardStyles.badgeArchived
    : TenantCardStyles.badgeIdle;

  const badgeLabel = archived ? "Archived" : "Active pet";

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
          {name || "Unnamed pet"}
        </div>
        <span className={`${TenantCardStyles.badge} ${badgeClass}`}>
          {badgeLabel}
        </span>
      </div>

      <div className={TenantCardStyles.contact}>
        {type ? (
          <span className={TenantCardStyles.contactLine}>{type}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No type set (dog, cat, bird, etc.)
          </span>
        )}
      </div>
      <div className={TenantCardStyles.contact}>
        {breed ? (
          <span className={TenantCardStyles.contactLine}>{breed}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No breed set (poodle, boxer, etc.)
          </span>
        )}
      </div>
      <div className={TenantCardStyles.contact}>
        {weightLb ? (
          <span className={TenantCardStyles.contactLine}>{weightLb}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No weight set (Lb)
          </span>
        )}
      </div>
    </div>
  );
}

export default function LandlordPetsPage() {
  const [pets, setPets] = useState([]);
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

        const data = await petsApi.listAll({
          includeArchived: true,
          token,
        });
        if (!cancelled) {
          setPets(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load pets", err);
        if (!cancelled) {
          setError("Failed to load pets. Please try again.");
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

  const visiblePets = useMemo(() => {
    if (showArchived) return pets;
    return (pets || []).filter((o) => !o.archived);
  }, [pets, showArchived]);

  const hasVisiblePets = visiblePets.length > 0;
  const hasAnyArchived = (pets || []).some((o) => o.archived);

  const handleAddPet = () => {
    navigate("/landlord/pets/new");
  };

  const handleOpenPet = (id) => {
    navigate(`/landlord/pets/${id}`);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Your pets</h1>
          <p className={styles.subtitle}>
            See everyone living in your rentals, across all tenants and leases.
          </p>
        </div>

        <div
          className={styles.actions}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          {hasVisiblePets && (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddPet}
            >
              + Add pet
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
                ? "Hide archived pets"
                : "View archived pets"}
            </button>
          )}
        </div>
      </header>

      {isLoading && (
        <div className={styles.center}>
          <p className={styles.muted}>Loading your pets…</p>
        </div>
      )}

      {!isLoading && error && (
        <div className={styles.center}>
          <p className={styles.error}>{error}</p>
        </div>
      )}

      {!isLoading && !error && !hasVisiblePets && (
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>
            {hasAnyArchived ? "No active pets" : "No pets yet"}
          </h2>
          <p className={styles.emptyText}>
            {hasAnyArchived
              ? "Archived pets are hidden from your active list. You can view them using the link above."
              : "Once you add your first pet, you’ll see them here. You can link them to tenants and leases later."}
          </p>

          {!hasAnyArchived && (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddPet}
            >
              Create your first pet
            </button>
          )}
        </div>
      )}

      {!isLoading && !error && hasVisiblePets && (
        <div className={styles.grid}>
          {visiblePets.map((o) => (
            <PetCard
              key={o.id}
              pet={o}
              onClick={() => handleOpenPet(o.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
