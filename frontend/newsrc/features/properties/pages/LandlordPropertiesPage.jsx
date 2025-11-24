// newsrc/features/properties/pages/LandlordPropertiesPage.jsx
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { apiFetch } from "@lib/apiClient.js";
import PropertyCard from "../components/PropertyCard.jsx";
import styles from "./LandlordPropertiesPage.module.css";

export default function LandlordPropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showArchived, setShowArchived] = useState(false);

  const navigate = useNavigate();
  const { user, token } = useUser() || {};

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const data = await apiFetch("/api/properties", { token });

        if (!cancelled) {
          setProperties(Array.isArray(data) ? data : data.properties || []);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Failed to load properties", err);
          setError("Failed to load properties. Please try again.");
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

  // Only show properties owned by this landlord (or unassigned, for migration)
  const visibleProperties = useMemo(() => {
    if (!user) return properties || [];

    const landlordProps = (properties || []).filter((p) => {
      if (!p.landlordId) return true; // allow legacy/unassigned
      return p.landlordId === user.id;
    });

    if (showArchived) return landlordProps;
    return landlordProps.filter((p) => !p.isArchived);
  }, [properties, user, showArchived]);

  const hasVisibleProperties = visibleProperties.length > 0;
  const hasAnyArchived = (properties || []).some(
    (p) => p.landlordId === user?.id && p.isArchived
  );

  const handleAddProperty = () => {
    navigate("/landlord/properties/new");
  };

  const handleOpenProperty = (propertyId) => {
    navigate(`/landlord/properties/${propertyId}`);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Your properties</h1>
          <p className={styles.subtitle}>
            Manage your rentals, track tenants, leases, and finances from one place.
          </p>
        </div>

        <div
          className={styles.actions}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          {hasVisibleProperties && (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddProperty}
            >
              + Add property
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
              {showArchived ? "Hide archived properties" : "View archived properties"}
            </button>
          )}
        </div>
      </header>

      {isLoading && (
        <div className={styles.center}>
          <p className={styles.muted}>Loading your properties…</p>
        </div>
      )}

      {!isLoading && error && (
        <div className={styles.center}>
          <p className={styles.error}>{error}</p>
        </div>
      )}

      {!isLoading && !error && !hasVisibleProperties && (
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>
            {hasAnyArchived ? "No active properties" : "No properties yet"}
          </h2>
          <p className={styles.emptyText}>
            {hasAnyArchived
              ? "Archived properties are hidden from your active list. You can view them using the link above."
              : "Once you add your first property, you’ll see it here with its tenants, lease, and financials."}
          </p>
          {!hasAnyArchived && (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddProperty}
            >
              Create your first property
            </button>
          )}
        </div>
      )}

      {!isLoading && !error && hasVisibleProperties && (
        <div className={styles.grid}>
          {visibleProperties.map((p) => (
            <PropertyCard
              key={p.id}
              property={p}
              onClick={() => handleOpenProperty(p.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
