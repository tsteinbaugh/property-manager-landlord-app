import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import { useProperties } from '../context/PropertyContext';
import PropertyModal from '../components/PropertyModal';
import styles from './PropertyDetail.module.css';
import buttonStyles from '../styles/Buttons.module.css';
import layoutStyles from '../styles/EditDeleteButtonsLayout.module.css';
import TenantModal from '../components/TenantModal';
import OccupantModal from '../components/OccupantModal';
import PetModal from '../components/PetModal';
import EmergencyContactModal from '../components/EmergencyContactModal';

export default function PropertyDetail({ role, setRole }) {
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


  if (!property) return <p className={styles.container}>Property not found.</p>;

  const handleDeleteProperty = () => {
    if (confirm('Are you sure you want to delete this property?')) {
      deleteProperty(property.id);
      navigate('/dashboard');
    }
  };

  const handleDeleteTenant = (index) => {
    if (confirm('Are you sure you want to delete this tenant?')) {
      const updatedTenants = [...property.tenants];
      updatedTenants.splice(index, 1);
      editProperty({ ...property, tenants: updatedTenants });
    }
  };

  const handleDeleteOccupant = (index) => {
    if (confirm('Are you sure you want to delete this occupant?')) {
      const updatedOccupants = [...property.occupants];
      updatedOccupants.splice(index, 1);
      editProperty({ ...property, occupants: updatedOccupants });
    }
  };

  const handleDeletePet = (index) => {
    if (confirm('Are you sure you want to delete this pet?')) {
      const updatedPets = [...property.pets];
      updatedPets.splice(index, 1);
      editProperty({ ...property, pets: updatedPets });
    }
  };

  const handleDeleteEmergencyContact = (index) => {
    if (confirm('Are you sure you want to delete this emergency contact?')) {
      const updatedEmergencyContacts = [...property.emergencyContacts];
      updatedEmergencyContacts.splice(index, 1);
      editProperty({ ...property, emergencyContacts: updatedEmergencyContacts });
    }
  };

  return (
    <div className={styles.container}>
      <Header setRole={setRole} />
      <Link to="/dashboard" className={styles.backLink}>← Back to Properties</Link>

      <h1 className={styles.title}>
        {property.address}, {property.city}, {property.state}
      </h1>
      <p className={styles.propertyStats}>🛏️ {property.bedrooms} bed</p>
      <p className={styles.propertyStats}>🛁 {property.bathrooms} bath</p>
      <p className={styles.propertyStats}>📐 {property.squareFeet} sq ft</p>

      {role === 'landlord' && (
        <div className={layoutStyles.buttonGroup}>

          <button
            onClick={() => {
              setEditingProperty(property);
              setShowEditModal(true);
            }}
            className={buttonStyles.primaryButton}
          >
            Edit Property
          </button>

          <button
            onClick={handleDeleteProperty}
            className={buttonStyles.deleteButton}
          >
            Delete Property
          </button>
        </div>
      )}


      {showEditModal && editingProperty && (
        <PropertyModal
          initialData={editingProperty}
          onClose={() => setShowEditModal(false)}
          onSubmit={(updated) => {
            editProperty({ ...editingProperty, ...updated });
            setShowEditModal(false);
          }}
        />
      )}

      {property.tenants && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Tenant Information</h2>

          <div className={styles.propertyStats}>
            <strong>Tenant(s):</strong>
            {property.tenants.length ? (
              property.tenants.map((tenant, idx) => (
                <div key={idx} className="ml-4">
                  <ul className="list-disc list-inside">
                    <li>Name: {tenant.name}</li>
                    <ul className="ml-6">
                      <li>Contact:</li>
                      <ul className="ml-8">
                        <li>Phone: {tenant.contact?.phone}</li>
                        <li>Email: {tenant.contact?.email}</li>
                      </ul>
                      <li>Age: {tenant.age}</li>
                      <li>Occupation: {tenant.occupation}</li>
                    </ul>
                  </ul>

                  <div className={layoutStyles.buttonGroup}>
                    <button
                      className={buttonStyles.primaryButton}
                      onClick={() => setEditingTenantIndex(idx)}
                    >
                      Edit Tenant
                    </button>
                    <button
                      className={buttonStyles.deleteButton}
                      onClick={() => handleDeleteTenant(idx)}
                    >
                      Delete Tenant
                    </button>
                  </div>

                  {editingTenantIndex === idx && (
                    <TenantModal
                      tenant={tenant}
                      onClose={() => setEditingTenantIndex(null)}
                      onSave={(updatedTenant) => {
                        const updatedTenants = [...property.tenants];
                        updatedTenants[idx] = updatedTenant;
                        editProperty({ ...property, tenants: updatedTenants });
                        setEditingTenantIndex(null);
                      }}
                    />
                  )}
                </div>
              ))
            ) : (
              <p className="ml-4 italic text-gray-500">None</p>
            )}
          </div>


          <div className={styles.propertyStats}>
            <strong>Occupant(s):</strong>
            {property.occupants?.length ? (
              property.occupants.map((occupant, idx) => (
                <div key={idx} className="ml-4">
                  <ul className="list-disc list-inside">
                    <li>Name: {occupant.name}</li>
                    <li>Age: {occupant.age}</li>
                    <li>Relationship: {occupant.relationship}</li>
                  </ul>

                  <div className={layoutStyles.buttonGroup}>
                    <button
                      className={buttonStyles.primaryButton}
                      onClick={() => setEditingOccupantIndex(idx)}
                    >
                      Edit Occupant
                    </button>
                    <button
                      className={buttonStyles.deleteButton}
                      onClick={() => handleDeleteOccupant(idx)}
                    >
                      Delete Occupant
                    </button>
                  </div>

                  {editingOccupantIndex === idx && (
                    <OccupantModal
                      occupant={occupant}
                      onClose={() => setEditingOccupantIndex(null)}
                      onSave={(updatedOccupant) => {
                        const updatedOccupants = [...property.occupants];
                        updatedOccupants[idx] = updatedOccupant;
                        editProperty({ ...property, occupants: updatedOccupants });
                        setEditingOccupantIndex(null);
                      }}
                    />
                  )}
                </div>
              ))
            ) : (
              <p className="ml-4 italic text-gray-500">None</p>
            )}
          </div>

          <div className={styles.propertyStats}>
            <strong>Pet(s):</strong>
            {property.pets?.length ? (
              property.pets.map((pet, idx) => (
                <div key={idx} className="ml-4">
                  <ul className="list-disc list-inside">
                    <li>Name: {pet.name}</li>
                    <ul className="ml-6">
                      <li>Type: {pet.type}</li>
                      <li>Size: {pet.size}</li>
                      <li>License #: {pet.license}</li>
                    </ul>
                  </ul>

                  <div className={layoutStyles.buttonGroup}>
                    <button
                      onClick={() => setEditingPetIndex(idx)}
                      className={buttonStyles.primaryButton}
                    >
                      Edit Pet
                    </button>
                    <button
                      onClick={() => handleDeletePet(idx)}
                      className={buttonStyles.deleteButton}
                    >
                      Delete Pet
                    </button>
                  </div>

                  {editingPetIndex === idx && (
                    <PetModal
                      pet={pet}
                      onClose={() => setEditingPetIndex(null)}
                      onSave={(updatedPet) => {
                        const updatedPets = [...property.pets];
                        updatedPets[idx] = updatedPet;
                        editProperty({ ...property, pets: updatedPets });
                        setEditingPetIndex(null);
                      }}
                    />
                  )}
                </div>
              ))
            ) : (
              <p className="ml-4 italic text-gray-500">None</p>
            )}
          </div>

          <div className={styles.propertyStats}>
            <strong>Emergency Contact:</strong>
            {property.emergencyContacts?.length ? (
              property.emergencyContacts.map((emergencyContact, idx) => (
                <div key={idx} className="ml-4">
                  <ul className="list-disc list-inside">
                    <li>Name: {emergencyContact.name}</li>
                    <ul className="ml-6">
                      <li>Contact Information:</li>
                      <ul className="ml-8">
                        <li>Phone: {emergencyContact.contact.phone}</li>
                        <li>Email: {emergencyContact.contact.email}</li>
                      </ul>
                    </ul>
                  </ul>

                  <div className={layoutStyles.buttonGroup}>
                    <button
                      className={buttonStyles.primaryButton}
                      onClick={() => setEditingEmergencyContactIndex(idx)}
                    >
                      Edit Emergency Contact
                    </button>
                    <button
                      className={buttonStyles.deleteButton}
                      onClick={() => handleDeleteEmergencyContact(idx)}
                    >
                      Delete Emergency Contact
                    </button>
                  </div>

                  {editingEmergencyContactIndex === idx && (
                    <EmergencyContactModal
                      emergencyContact={emergencyContact}
                      onClose={() => setEditingEmergencyContactIndex(null)}
                      onSave={(updatedEmergencyContact) => {
                        const updatedEmergencyContacts = [...property.emergencyContacts];
                        updatedEmergencyContacts[idx] = updatedEmergencyContact;
                        editProperty({ ...property, emergencyContacts: updatedEmergencyContacts });
                        setEditingEmergencyContactIndex(null);
                      }}
                    />
                  )}
                </div>
              ))
            ) : (
              <p className="ml-4 italic text-gray-500">None</p>
            )}
          </div>

          <div className={styles.propertyStats}>
            <strong>Financials:</strong>
            {property.financials?.[0] ? (
              <ul className={styles.list}>
                <li>Rent: ${property.financials[0].rent}</li>
                <li>Security Deposit: ${property.financials[0].securityDeposit}</li>
                <li>Pet Deposit: ${property.financials[0].petDeposit}</li>
              </ul>
            ) : (
              ' None'
            )}
          </div>

          <div className={styles.propertyStats}>
            <strong>Lease Agreement:</strong>{' '}
            <a
              href={`/leases/${property.leaseFile}`}
              download
              className={styles.leaseLink}
            >
              Download Lease
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
