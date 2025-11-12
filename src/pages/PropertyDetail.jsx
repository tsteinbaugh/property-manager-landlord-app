import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./PropertyDetail.module.css";
import { useProperties } from "../context/PropertyContext";
import buttonStyles from "../styles/Buttons.module.css";
import TenantModal from "../components/TenantModal.jsx"
import OccupantModal from "../components/OccupantModal.jsx"
import PetModal from "../components/PetModal.jsx"
import EmergencyContactModal from "../components/EmergencyContactModal.jsx"
import PropertyModal from "../components/PropertyModal.jsx"

const formatCurrency = (n) => {
  const num = Number(n);
  return n != null && !Number.isNaN(num)
    ? new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(num)
    : "(not set)";
};

export default function PropertyDetail({ role }) {
  const [editingProperty, setEditingProperty] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { properties, editProperty, deleteProperty } = useProperties();
  const property = properties.find((p) => p.id === Number(id));
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingTenantIndex, setEditingTenantIndex] = useState(null);
  const [editingOccupantIndex, setEditingOccupantIndex] = useState(null);
  const [editingPetIndex, setEditingPetIndex] = useState(null);
  const [editingEmergencyContactIndex, setEditingEmergencyContactIndex] = useState(null);
  const [showNewTenantModal, setShowNewTenantModal] = useState(false);
  const [showNewOccupantModal, setShowNewOccupantModal] = useState(false);
  const [showNewPetModal, setShowNewPetModal] = useState(false);
  const [showNewEmergencyContactModal, setShowNewEmergencyContactModal] = useState(false);

  // Detect financials from either property or localStorage
  const hasFinancials = useMemo(() => {
    if (!property) return false;
    const fromProp =
      (!!property.financialConfig &&
        Array.isArray(property.financialSchedule) &&
        property.financialSchedule.length > 0) ||
      (!!property.financials &&
        (property.financials.monthlyRent != null ||
          property.financials.baseRent != null ||
          property.financials.rent != null));
    if (fromProp) return true;

    try {
      const raw = localStorage.getItem(`financials:${property.id}`);
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      return !!(
        parsed?.config &&
        Array.isArray(parsed?.schedule) &&
        parsed.schedule.length > 0
      );
    } catch {
      return false;
    }
  }, [property]);

  const handleDeleteProperty = () => {
    if (confirm("Are you sure you want to delete this property?")) {
      deleteProperty(property.id);
      navigate("/dashboard");
    }
  };

  const handleDeleteTenant = (index) => {
    if (confirm("Are you sure you want to delete this tenant?")) {
      const updatedTenants = [...property.tenants];
      updatedTenants.splice(index, 1);
      editProperty({ ...property, tenants: updatedTenants });
    }
  };

  const handleDeleteOccupant = (index) => {
    if (confirm("Are you sure you want to delete this occupant?")) {
      const updatedOccupants = [...property.occupants];
      updatedOccupants.splice(index, 1);
      editProperty({ ...property, occupants: updatedOccupants });
    }
  };

  const handleDeletePet = (index) => {
    if (confirm("Are you sure you want to delete this pet?")) {
      const updatedPets = [...property.pets];
      updatedPets.splice(index, 1);
      editProperty({ ...property, pets: updatedPets });
    }
  };

  const handleDeleteEmergencyContact = (index) => {
    if (confirm("Are you sure you want to delete this emergency contact?")) {
      const updatedEmergencyContacts = [...property.emergencyContacts];
      updatedEmergencyContacts.splice(index, 1);
      editProperty({ ...property, emergencyContacts: updatedEmergencyContacts });
    }
  };

  const handleLeaseUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const updatedProperty = { ...property, leaseFile: file.name };
    editProperty(updatedProperty);
  };

  const getFinancialState = useMemo(() => {
    if (!property) return () => ({ config: null, schedule: [] });
    return () => {
      const configFromProp = property.financialConfig || null;
      const schedFromProp = Array.isArray(property.financialSchedule)
        ? property.financialSchedule
        : [];
      if (configFromProp && schedFromProp.length > 0) {
        return { config: configFromProp, schedule: schedFromProp };
      }
      try {
        const raw = localStorage.getItem(`financials:${property.id}`);
        if (!raw) return { config: null, schedule: [] };
        const parsed = JSON.parse(raw);
        const config = parsed?.config || null;
        const schedule = Array.isArray(parsed?.schedule) ? parsed.schedule : [];
        return { config, schedule };
      } catch {
        return { config: null, schedule: [] };
      }
    };
  }, [property]);

  const computedRent = useMemo(() => {
    const p = property || {};
    const f = p.financials || p.financial || {};
    if (f.monthlyRent != null && f.monthlyRent !== "") return Number(f.monthlyRent);
    if (f.baseRent != null && f.baseRent !== "") return Number(f.baseRent);
    if (f.rent != null && f.rent !== "") return Number(f.rent);

    const { config, schedule } = getFinancialState();
    if (config) {
      const fromConfig =
        config.monthlyRent ??
        config.baseRent ??
        config.rent ??
        config.expectedBase ??
        null;
      if (fromConfig != null && fromConfig !== "") return Number(fromConfig);
    }

    const row = (Array.isArray(schedule) ? schedule : []).find(
      (r) =>
        r &&
        (r.expectedBase != null ||
          r.expectedTotal != null ||
          r.base != null ||
          r.amount != null ||
          r.rent != null),
    );
    if (row) {
      if (row.expectedBase != null && row.expectedBase !== "")
        return Number(row.expectedBase);
      if (row.base != null && row.base !== "") return Number(row.base);
      if (row.rent != null && row.rent !== "") return Number(row.rent);
      const total = Number(row.expectedTotal ?? row.amount ?? 0);
      const pet = Number(row.expectedPetRent ?? row.petRent ?? 0);
      const base = total - pet;
      if (Number.isFinite(base) && base > 0) return base;
      if (Number.isFinite(total) && total > 0) return total;
    }

    const leaseRent = p.leaseExtract?.fields?.monthlyRent;
    if (leaseRent != null && leaseRent !== "") return Number(leaseRent);
    return null;
  }, [property, getFinancialState]);
  if (!property) return <p className={styles.page}>Property not found.</p>;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.headerRow}>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>
              {property.address}, {property.city}, {property.state}, {property.zip}
            </h1>
            {role === "landlord" && property.owner && (
              <div className={styles.subtleLine}>
                <strong>Owner:</strong> {property.owner}
              </div>
            )}
          </div>

          {role === "landlord" && (
            <div className={styles.rightActions}>
              <button
                onClick={() => {
                  setEditingProperty(property);
                  setShowEditModal(true);
                }}
                className={buttonStyles.softEditButton}
              >
                Edit Property
              </button>
              <button
                onClick={handleDeleteProperty}
                className={buttonStyles.outlineDeleteButton}
              >
                Delete Property
              </button>
            </div>
          )}
        </div>

        {/* Quick facts */}
        <div className={styles.kpis}>
          <div className={styles.kpi}>
            <span>🛏 Beds:</span> {property.bedrooms ?? "—"}
          </div>
          <div className={styles.kpi}>
            <span>🛁 Baths:</span> {property.bathrooms ?? "—"}
          </div>
          <div className={styles.kpi}>
            <span>📐 Sq Ft:</span> {property.squareFeet ?? "—"}
          </div>
        </div>

        {/* Property modal */}
        {showEditModal && editingProperty && (
          <PropertyModal
            isOpen={showEditModal}
            initialData={editingProperty}
            onClose={() => setShowEditModal(false)}
            onSave={(updated) => {
              editProperty({ ...editingProperty, ...updated });
              setShowEditModal(false);
            }}
          />
        )}

        {/* Tenants */}
        {property.tenants && (
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Tenants</h2>
              {role === "landlord" && (
                <div className={styles.leftActions}>
                  <button
                    className={buttonStyles.primaryButton}
                    onClick={() => setShowNewTenantModal(true)}
                  >
                    Add Tenant
                  </button>
                </div>
              )}
            </div>

            <div className={styles.sectionBody}>
              {property.tenants.length ? (
                property.tenants.map((tenant, idx) => (
                  <div key={idx} className={styles.itemCard}>
                    <div className={styles.itemHeader}>
                      <div className={styles.itemTitle}>{tenant.name || "Unnamed"}</div>
                      {role === "landlord" && (
                        <div className={styles.leftActions}>
                          <button
                            className={buttonStyles.softEditButton}
                            onClick={() => setEditingTenantIndex(idx)}
                          >
                            Edit Tenant
                          </button>
                          <button
                            className={buttonStyles.outlineDeleteButton}
                            onClick={() => handleDeleteTenant(idx)}
                          >
                            Delete Tenant
                          </button>
                        </div>
                      )}
                    </div>

                    <div className={styles.detailGrid}>
                      {tenant.age && (
                        <div>
                          <span className={styles.label}>Age:</span> {tenant.age}
                        </div>
                      )}
                      {tenant.occupation && (
                        <div>
                          <span className={styles.label}>Occupation:</span>{" "}
                          {tenant.occupation}
                        </div>
                      )}

                      {(tenant.contact?.phone || tenant.contact?.email) && (
                        <div className={styles.contactBlock}>
                          <div className={styles.contactHeader}>Contact:</div>
                          {tenant.contact?.phone && (
                            <div className={styles.contactLine}>
                              <span className={styles.label}>Phone:</span>{" "}
                              {tenant.contact.phone}
                            </div>
                          )}
                          {tenant.contact?.email && (
                            <div className={styles.contactLine}>
                              <span className={styles.label}>Email:</span>{" "}
                              {tenant.contact.email}
                            </div>
                          )}
                        </div>
                      )}

                      {role === "landlord" &&
                        (tenant.photoIdName || tenant.photoIdDataUrl) && (
                          <div>
                            <span className={styles.label}>Photo ID:</span>{" "}
                            {tenant.photoIdName || "(uploaded)"}
                            {tenant.photoIdDataUrl && (
                              <>
                                {" "}
                                <a
                                  href={tenant.photoIdDataUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  View Photo ID
                                </a>
                              </>
                            )}
                          </div>
                        )}
                    </div>

                    {editingTenantIndex === idx && (
                      <TenantModal
                        isOpen={true}
                        tenant={tenant}
                        onClose={() => setEditingTenantIndex(null)}
                        onSave={(updatedTenant) => {
                          const updatedTenants = [...property.tenants];
                          updatedTenants[idx] = updatedTenant;
                          editProperty({ ...property, tenants: updatedTenants });
                          setEditingTenantIndex(null);
                        }}
                        title="Edit Tenant"
                      />
                    )}
                  </div>
                ))
              ) : (
                <p className={styles.subtle}>None</p>
              )}
            </div>

            {showNewTenantModal && (
              <TenantModal
                isOpen={showNewTenantModal}
                tenant={{
                  name: "",
                  age: "",
                  occupation: "",
                  contact: { phone: "", email: "" },
                }}
                onClose={() => setShowNewTenantModal(false)}
                onSave={(newTenant) => {
                  const updatedTenants = [...(property.tenants || []), newTenant];
                  editProperty({ ...property, tenants: updatedTenants });
                  setShowNewTenantModal(false);
                }}
                title="Add Tenant"
              />
            )}
          </div>
        )}

        {/* Occupants */}
        {property.occupants && (
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Occupants</h2>
              {role === "landlord" && (
                <div className={styles.leftActions}>
                  <button
                    className={buttonStyles.primaryButton}
                    onClick={() => setShowNewOccupantModal(true)}
                  >
                    Add Occupant
                  </button>
                </div>
              )}
            </div>

            <div className={styles.sectionBody}>
              {property.occupants?.length ? (
                property.occupants.map((occupant, idx) => (
                  <div key={idx} className={styles.itemCard}>
                    <div className={styles.itemHeader}>
                      <div className={styles.itemTitle}>{occupant.name || "Unnamed"}</div>
                      {role === "landlord" && (
                        <div className={styles.leftActions}>
                          <button
                            className={buttonStyles.softEditButton}
                            onClick={() => setEditingOccupantIndex(idx)}
                          >
                            Edit Occupant
                          </button>
                          <button
                            className={buttonStyles.outlineDeleteButton}
                            onClick={() => handleDeleteOccupant(idx)}
                          >
                            Delete Occupant
                          </button>
                        </div>
                      )}
                    </div>

                    <div className={styles.detailGrid}>
                      {occupant.age && (
                        <div>
                          <span className={styles.label}>Age:</span> {occupant.age}
                        </div>
                      )}
                      {occupant.occupation && (
                        <div>
                          <span className={styles.label}>Occupation:</span>{" "}
                          {occupant.occupation}
                        </div>
                      )}
                      {occupant.relationship && (
                        <div>
                          <span className={styles.label}>Relationship:</span>{" "}
                          {occupant.relationship}
                        </div>
                      )}

                      {(occupant.contact?.phone || occupant.contact?.email) && (
                        <div className={styles.contactBlock}>
                          <div className={styles.contactHeader}>Contact:</div>
                          {occupant.contact?.phone && (
                            <div className={styles.contactLine}>
                              <span className={styles.label}>Phone:</span>{" "}
                              {occupant.contact.phone}
                            </div>
                          )}
                          {occupant.contact?.email && (
                            <div className={styles.contactLine}>
                              <span className={styles.label}>Email:</span>{" "}
                              {occupant.contact.email}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {editingOccupantIndex === idx && (
                      <OccupantModal
                        isOpen={true}
                        occupant={occupant}
                        onClose={() => setEditingOccupantIndex(null)}
                        onSave={(updatedOccupant) => {
                          const updatedOccupants = [...property.occupants];
                          updatedOccupants[idx] = updatedOccupant;
                          editProperty({ ...property, occupants: updatedOccupants });
                          setEditingOccupantIndex(null);
                        }}
                        title="Edit Occupant"
                      />
                    )}
                  </div>
                ))
              ) : (
                <p className={styles.subtle}>None</p>
              )}
            </div>

            {showNewOccupantModal && (
              <OccupantModal
                isOpen={showNewOccupantModal}
                occupant={{
                  name: "",
                  age: "",
                  occupation: "",
                  relationship: "",
                  contact: { phone: "", email: "" },
                }}
                onClose={() => setShowNewOccupantModal(false)}
                onSave={(newOccupant) => {
                  const updatedOccupants = [...(property.occupants || []), newOccupant];
                  editProperty({ ...property, occupants: updatedOccupants });
                  setShowNewOccupantModal(false);
                }}
                title="Add Occupant"
              />
            )}
          </div>
        )}

        {/* Pets */}
        {property.pets && (
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Pets</h2>
              {role === "landlord" && (
                <div className={styles.leftActions}>
                  <button
                    className={buttonStyles.primaryButton}
                    onClick={() => setShowNewPetModal(true)}
                  >
                    Add Pet
                  </button>
                </div>
              )}
            </div>

            <div className={styles.sectionBody}>
              {property.pets?.length ? (
                property.pets.map((pet, idx) => (
                  <div key={idx} className={styles.itemCard}>
                    <div className={styles.itemHeader}>
                      <div className={styles.itemTitle}>{pet.name || "Unnamed"}</div>
                      {role === "landlord" && (
                        <div className={styles.leftActions}>
                          <button
                            onClick={() => setEditingPetIndex(idx)}
                            className={buttonStyles.softEditButton}
                          >
                            Edit Pet
                          </button>
                          <button
                            onClick={() => handleDeletePet(idx)}
                            className={buttonStyles.outlineDeleteButton}
                          >
                            Delete Pet
                          </button>
                        </div>
                      )}
                    </div>

                    <div className={styles.detailGrid}>
                      <div>
                        <span className={styles.label}>Type:</span> {pet.type || "—"}
                      </div>
                      {pet.size && (
                        <div>
                          <span className={styles.label}>Size:</span> {pet.size}
                        </div>
                      )}
                      {pet.license && (
                        <div>
                          <span className={styles.label}>License #:</span> {pet.license}
                        </div>
                      )}
                    </div>

                    {editingPetIndex === idx && (
                      <PetModal
                        isOpen={true}
                        pet={pet}
                        onClose={() => setEditingPetIndex(null)}
                        onSave={(updatedPet) => {
                          const updatedPets = [...property.pets];
                          updatedPets[idx] = updatedPet;
                          editProperty({ ...property, pets: updatedPets });
                          setEditingPetIndex(null);
                        }}
                        title="Edit Pet"
                      />
                    )}
                  </div>
                ))
              ) : (
                <p className={styles.subtle}>None</p>
              )}
            </div>

            {showNewPetModal && (
              <PetModal
                isOpen={showNewPetModal}
                pet={{ name: "", type: "", size: "", license: "" }}
                onClose={() => setShowNewPetModal(false)}
                onSave={(newPet) => {
                  const updatedPets = [...(property.pets || []), newPet];
                  editProperty({ ...property, pets: updatedPets });
                  setShowNewPetModal(false);
                }}
                title="Add Pet"
              />
            )}
          </div>
        )}

        {/* Emergency Contacts */}
        {property.emergencyContacts && (
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Emergency Contacts</h2>
              {role === "landlord" && (
                <div className={styles.leftActions}>
                  <button
                    className={buttonStyles.primaryButton}
                    onClick={() => setShowNewEmergencyContactModal(true)}
                  >
                    Add Emergency Contact
                  </button>
                </div>
              )}
            </div>

            <div className={styles.sectionBody}>
              {property.emergencyContacts?.length ? (
                property.emergencyContacts.map((emergencyContact, idx) => (
                  <div key={idx} className={styles.itemCard}>
                    <div className={styles.itemHeader}>
                      <div className={styles.itemTitle}>
                        {emergencyContact.name || "Unnamed"}
                      </div>
                      {role === "landlord" && (
                        <div className={styles.leftActions}>
                          <button
                            className={buttonStyles.softEditButton}
                            onClick={() => setEditingEmergencyContactIndex(idx)}
                          >
                            Edit Emergency Contact
                          </button>
                          <button
                            className={buttonStyles.outlineDeleteButton}
                            onClick={() => handleDeleteEmergencyContact(idx)}
                          >
                            Delete Emergency Contact
                          </button>
                        </div>
                      )}
                    </div>

                    <div className={styles.detailGrid}>
                      {emergencyContact.contact?.phone ||
                      emergencyContact.contact?.email ? (
                        <div className={styles.contactBlock}>
                          <div className={styles.contactHeader}>Contact:</div>
                          {emergencyContact.contact?.phone && (
                            <div className={styles.contactLine}>
                              <span className={styles.label}>Phone:</span>{" "}
                              {emergencyContact.contact.phone}
                            </div>
                          )}
                          {emergencyContact.contact?.email && (
                            <div className={styles.contactLine}>
                              <span className={styles.label}>Email:</span>{" "}
                              {emergencyContact.contact.email}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className={styles.subtle}>No contact provided.</div>
                      )}
                    </div>

                    {editingEmergencyContactIndex === idx && (
                      <EmergencyContactModal
                        isOpen={true}
                        emergencyContact={emergencyContact}
                        onClose={() => setEditingEmergencyContactIndex(null)}
                        onSave={(updatedEmergencyContact) => {
                          const updatedEmergencyContacts = [
                            ...property.emergencyContacts,
                          ];
                          updatedEmergencyContacts[idx] = updatedEmergencyContact;
                          editProperty({
                            ...property,
                            emergencyContacts: updatedEmergencyContacts,
                          });
                          setEditingEmergencyContactIndex(null);
                        }}
                        title="Edit Emergency Contact"
                      />
                    )}
                  </div>
                ))
              ) : (
                <p className={styles.subtle}>None</p>
              )}
            </div>

            {showNewEmergencyContactModal && (
              <EmergencyContactModal
                isOpen={showNewEmergencyContactModal}
                emergencyContact={{ name: "", contact: { phone: "", email: "" } }}
                onClose={() => setShowNewEmergencyContactModal(false)}
                onSave={(newEmergencyContact) => {
                  const updatedEmergencyContacts = [
                    ...(property.emergencyContacts || []),
                    newEmergencyContact,
                  ];
                  editProperty({
                    ...property,
                    emergencyContacts: updatedEmergencyContacts,
                  });
                  setShowNewEmergencyContactModal(false);
                }}
                title="Add Emergency Contact"
              />
            )}
          </div>
        )}

        {/* Financials summary */}
        {role === "landlord" && (
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Financials</h2>
              <div className={styles.leftActions}>
                <Link
                  className={`${buttonStyles.primaryButton} ${buttonStyles.noUnderline}`}
                  to={`/properties/${property.id}/financials`}
                >
                  {hasFinancials ? "Open Financials" : "Set Up Financials"}
                </Link>
              </div>
            </div>

            <div className={styles.sectionBody}>
              {hasFinancials ? (
                <div className={styles.detailGrid}>
                  <div>
                    <span className={styles.label}>Rent:</span>{" "}
                    {formatCurrency(computedRent)}
                  </div>
                </div>
              ) : (
                <p className={styles.subtle}>Financials not configured yet.</p>
              )}
            </div>
          </div>
        )}

        {/* Lease */}
        {role === "landlord" && (
          <div className={styles.sectionBox}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Lease Agreement</h2>
              <div className={styles.leftActions}>
                <label className={buttonStyles.primaryButton}>
                  Upload Lease Agreement
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    style={{ display: "none" }}
                    onChange={(e) => handleLeaseUpload(e)}
                  />
                </label>
              </div>
            </div>

            <div className={styles.sectionBody}>
              {property.leaseFile ? (
                <a
                  href={`/leases/${property.leaseFile}`}
                  download
                  className={styles.leaseLink}
                >
                  Download Lease
                </a>
              ) : (
                <p className={styles.subtle}>None uploaded</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
