// newsrc/features/properties/pages/LandlordPropertiesPage.jsx
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { apiFetch } from "@lib/apiClient.js";
import PropertyCard from "@features/properties/components/PropertyCard.jsx"

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

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
    return landlordProps.filter((p) => !p.archivedAt);
  }, [properties, user, showArchived]);

  const hasVisibleProperties = visibleProperties.length > 0;
  const hasAnyArchived = (properties || []).some(
    (p) => p.landlordId === user?.id && p.archivedAt
  );

  const handleAddProperty = () => {
    navigate("/landlord/properties/new");
  };

  const handleOpenProperty = (propertyId) => {
    navigate(`/landlord/properties/${propertyId}`);
  };

  return (
    <div className={page.page}>
      <header className={page.header}>
        <div>
          <h1 className={page.title}>Your properties</h1>
          <p className={page.subtitle}>
            Manage your rentals, track tenants, leases, and finances from one place.
          </p>
        </div>

        <div
          className={page.actions}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          {hasVisibleProperties && (
            <button
              type="button"
              className={card.primaryButton}
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
        <div className={page.center}>
          <p className={shared.muted}>Loading your properties…</p>
        </div>
      )}

      {!isLoading && error && (
        <div className={page.center}>
          <p className={shared.error}>{error}</p>
        </div>
      )}

      {!isLoading && !error && !hasVisibleProperties && (
        <div className={page.empty}>
          <h2 className={page.emptyTitle}>
            {hasAnyArchived ? "No active properties" : "No properties yet"}
          </h2>
          <p className={page.emptyText}>
            {hasAnyArchived
              ? "Archived properties are hidden from your active list. You can view them using the link above."
              : "Once you add your first property, you’ll see it here with its tenants, lease, and financials."}
          </p>
          {!hasAnyArchived && (
            <button
              type="button"
              className={card.primaryButton}
              onClick={handleAddProperty}
            >
              Create your first property
            </button>
          )}
        </div>
      )}

      {!isLoading && !error && hasVisibleProperties && (
        <div className={page.grid}>
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
