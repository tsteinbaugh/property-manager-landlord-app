// newsrc/features/tenants/pages/LandlordEmergencyContactsPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { emergencyContactsApi } from "@features/residents/api/emergencyContacts.api.js";

// reuse tenant card styling so it visually matches tenants/properties
import TenantCardStyles from "@features/residents/components/tenants/TenantCard.module.css";
import styles from "../tenants/LandlordTenantsPage.module.css";

function EmergencyContactCard({ emergencyContact, onClick }) {
  const { name, phone, relation, email, archived } = emergencyContact;

  const badgeClass = archived
    ? TenantCardStyles.badgeArchived
    : TenantCardStyles.badgeIdle;

  const badgeLabel = archived ? "Archived" : "Active emergency contact";

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
          {name || "Unnamed emergency contact"}
        </div>
        <span className={`${TenantCardStyles.badge} ${badgeClass}`}>
          {badgeLabel}
        </span>
      </div>

      <div className={TenantCardStyles.contact}>
        {phone ? (
          <span className={TenantCardStyles.contactLine}>{phone}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No phone number set
          </span>
        )}
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

      <div className={TenantCardStyles.contact}>
        {email ? (
          <span className={TenantCardStyles.contactLine}>{email}</span>
        ) : (
          <span className={TenantCardStyles.contactLineMuted}>
            No email set
          </span>
        )}
      </div>
    </div>
  );
}

export default function LandlordEmergencyContactsPage() {
  const [emergencyContacts, setEmergencyContacts] = useState([]);
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

        const data = await emergencyContactsApi.listAll({
          includeArchived: true,
          token,
        });
        if (!cancelled) {
          setEmergencyContacts(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load emergency contacts", err);
        if (!cancelled) {
          setError("Failed to load emergency contacts. Please try again.");
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

  const visibleEmergencyContacts = useMemo(() => {
    if (showArchived) return emergencyContacts;
    return (emergencyContacts || []).filter((o) => !o.archived);
  }, [emergencyContacts, showArchived]);

  const hasVisibleEmergencyContacts = visibleEmergencyContacts.length > 0;
  const hasAnyArchived = (emergencyContacts || []).some((o) => o.archived);

  const handleAddEmergencyContact = () => {
    navigate("/landlord/emergencyContacts/new");
  };

  const handleOpenEmergencyContact = (id) => {
    navigate(`/landlord/emergencyContacts/${id}`);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Your emergency contacts</h1>
          <p className={styles.subtitle}>
            See everyone living in your rentals, across all tenants and leases.
          </p>
        </div>

        <div
          className={styles.actions}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          {hasVisibleEmergencyContacts && (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddEmergencyContact}
            >
              + Add emergency contact
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
                ? "Hide archived emergency contacts"
                : "View archived emergency contacts"}
            </button>
          )}
        </div>
      </header>

      {isLoading && (
        <div className={styles.center}>
          <p className={styles.muted}>Loading your emergency contacts…</p>
        </div>
      )}

      {!isLoading && error && (
        <div className={styles.center}>
          <p className={styles.error}>{error}</p>
        </div>
      )}

      {!isLoading && !error && !hasVisibleEmergencyContacts && (
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>
            {hasAnyArchived ? "No active emergency contacts" : "No emergency contacts yet"}
          </h2>
          <p className={styles.emptyText}>
            {hasAnyArchived
              ? "Archived emergency contacts are hidden from your active list. You can view them using the link above."
              : "Once you add your first emergency contact, you’ll see them here. You can link them to tenants and leases later."}
          </p>

          {!hasAnyArchived && (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddEmergencyContact}
            >
              Create your first emergency contact
            </button>
          )}
        </div>
      )}

      {!isLoading && !error && hasVisibleEmergencyContacts && (
        <div className={styles.grid}>
          {visibleEmergencyContacts.map((o) => (
            <EmergencyContactCard
              key={o.id}
              emergencyContact={o}
              onClick={() => handleOpenEmergencyContact(o.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
