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
import FinancialModal from '../components/FinancialModal';

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
  const [editingFinancialIndex, setEditingFinancialIndex] = useState(null);
  const [showNewTenantModal, setShowNewTenantModal] = useState(false);
  const [showNewOccupantModal, setShowNewOccupantModal] = useState(false);
  const [showNewPetModal, setShowNewPetModal] = useState(false);
  const [showNewEmergencyContactModal, setShowNewEmergencyContactModal] = useState(false);



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


  const handleLeaseUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Example: Save just the filename for now
    const updatedProperty = {
      ...property,
      leaseFile: file.name, // Later, you'll store the actual file on a server
    };

  editProperty(updatedProperty);
};


  return (
    <>
      <div className={styles.container}>
        <Header setRole={setRole} />
        <Link to="/dashboard" className={styles.backLink}>← Back to Properties</Link>

        <h1 className={styles.title}>
          {property.address}, {property.city}, {property.state}
        </h1>
          <h2 className={styles.sectionTitle}>Property Information</h2>
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
            onSave={(updated) => {
              editProperty({ ...editingProperty, ...updated });
              setShowEditModal(false);
            }}
          />
        )}

        {property.tenants && (
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Tenants</h2>
            <div className={styles.propertyStats}>
              {property.tenants.length ? (
                property.tenants.map((tenant, idx) => (
                  <div key={idx} className="ml-4">
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Name:</strong> {tenant.name}
                        <ul className="ml-6">
                          {tenant.age && (
                            <li><strong>Age:</strong> {tenant.age}</li>
                          )}
                          {tenant.occupation && (
                            <li><strong>Occupation:</strong> {tenant.occupation}</li>
                          )}
                          <li>
                            <strong>Contact:</strong>
                            <ul className="ml-8">
                              <li><strong>Phone:</strong> {tenant.contact?.phone}</li>
                              <li><strong>Email:</strong> {tenant.contact?.email}</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>

                    {role === 'landlord' && (
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
                    )}

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

            {role === 'landlord' && (
              <div className={layoutStyles.buttonGroup}>
                <button
                  className={buttonStyles.primaryButton}
                  onClick={() => setShowNewTenantModal(true)}
                >
                  Add Tenant
                </button>
              </div>
            )}
          </div>
        )}

        {showNewTenantModal && (
          <TenantModal
            tenant={{ name: '', age: '', occupation: '', contact: { phone: '', email: '' } }}
            onClose={() => setShowNewTenantModal(false)}
            onSave={(newTenant) => {
              const updatedTenants = [...(property.tenants || []), newTenant];
              editProperty({ ...property, tenants: updatedTenants });
              setShowNewTenantModal(false);
            }}
          />
        )}


        {property.occupants && (
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Occupants</h2>
            <div className={styles.propertyStats}>
              {property.occupants?.length ? (
                property.occupants.map((occupant, idx) => (
                  <div key={idx} className="ml-4">

                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Name:</strong> {occupant.name}
                        <ul className="ml-6">
                          {occupant.age && (
                            <li><strong>Age:</strong> {occupant.age}</li>
                          )}
                          {occupant.occupation && (
                            <li><strong>Occupation:</strong> {occupant.occupation}</li>
                          )}
                          {occupant.relationship && (
                            <li><strong>Relationship to tenants:</strong> {occupant.relationship}</li>
                          )}


                          {(occupant.contact?.phone || occupant.contact?.email) && (
                            <li>
                              <strong>Contact:</strong>
                              <ul className="ml-8">
                                {occupant.contact?.phone && (
                                  <li><strong>Phone:</strong> {occupant.contact.phone}</li>
                                )}
                                {occupant.contact?.email && (
                                  <li><strong>Email:</strong> {occupant.contact.email}</li>
                                )}
                              </ul>
                            </li>
                          )}
                        </ul>
                      </li>
                    </ul>

                    {role === 'landlord' && (
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
                    )}

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

            {role === 'landlord' && (
              <div className={layoutStyles.buttonGroup}>
                <button
                  className={buttonStyles.primaryButton}
                  onClick={() => setShowNewOccupantModal(true)}
                >
                  Add Occupant
                </button>
              </div>
            )}

          </div>
        )}


        {showNewOccupantModal && (
          <OccupantModal
            occupant={{ name: '', age: '', occupation: '', relationship: '', contact: { phone: '', email: '' } }}
            onClose={() => setShowNewOccupantModal(false)}
            onSave={(newOccupant) => {
              const updatedOccupants = [...(property.occupants || []), newOccupant];
              editProperty({ ...property, occupants: updatedOccupants });
              setShowNewOccupantModal(false);
            }}
          />
        )}

        {property.pets && (
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Pets</h2>
            <div className={styles.propertyStats}>
              {property.pets?.length ? (
                property.pets.map((pet, idx) => (
                  <div key={idx} className="ml-4">
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Name:</strong> {pet.name}
                        <ul className="ml-6">
                          <li><strong>Type:</strong> {pet.type}</li>
                          {pet.size && (
                            <li><strong>Size:</strong> {pet.size}</li>
                          )}
                          {pet.license && (
                            <li><strong>License #:</strong> {pet.license}</li>
                          )}
                        </ul>
                      </li>
                    </ul>

                    {role === 'landlord' && (
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
                    )}

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

            {role === 'landlord' && (
              <div className={layoutStyles.buttonGroup}>
                <button
                  className={buttonStyles.primaryButton}
                  onClick={() => setShowNewPetModal(true)}
                >
                  Add Pet
                </button>
              </div>
            )}
          </div>
        )}

        {showNewPetModal && (
          <PetModal
            pet={{ name: '', type: '', size: '', license: '' }}
            onClose={() => setShowNewPetModal(false)}
            onSave={(newPet) => {
              const updatedPets = [...(property.pets || []), newPet];
              editProperty({ ...property, pets: updatedPets });
              setShowNewPetModal(false);
            }}
          />
        )}

        {property.emergencyContacts && (
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Emergency Contacts</h2>
            <div className={styles.propertyStats}>
              {property.emergencyContacts?.length ? (
                property.emergencyContacts.map((emergencyContact, idx) => (
                  <div key={idx} className="ml-4">
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Name:</strong> {emergencyContact.name}
                        <ul className="ml-6">
                          <li>
                          <li><strong>Contact:</strong></li>
                            <ul className="ml-8">
                              <li><strong>Phone:</strong> {emergencyContact.contact.phone}</li>
                              {emergencyContact.contact.email && (
                                <li><strong>Email:</strong> {emergencyContact.contact.email}</li>
                              )}
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>

                    {role === 'landlord' && (
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
                    )}

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

             {role === 'landlord' && (
              <div className={layoutStyles.buttonGroup}>
                <button
                  className={buttonStyles.primaryButton}
                  onClick={() => setShowNewEmergencyContactModal(true)}
                >
                  Add Emergency Contact
                </button>
              </div>
            )}



          </div>
        )}

        {showNewEmergencyContactModal && (
          <EmergencyContactModal
            EmergencyContact={{ name: '', contact: { phone: '', email: '' } }}
            onClose={() => setShowNewEmergencyContactModal(false)}
            onSave={(newEmergencyContact) => {
              const updatedEmergencyContacts = [...(property.emergencyContacts || []), newEmergencyContact];
              editProperty({ ...property, emergencyContacts: updatedEmergencyContacts });
              setShowNewEmergencyContactModal(false);
            }}
          />
        )}

        {role === 'landlord' && property.financials && (
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Financials</h2>
            <div className={styles.propertyStats}>
              {property.financials?.[0] ? (
                <div className="ml-4">
                  <ul className={styles.list}>
                    <li><strong>Rent:</strong> ${property.financials[0].rent}</li>
                    <li><strong>Security Deposit:</strong> ${property.financials[0].securityDeposit}</li>
                    <li><strong>Pet Deposit:</strong> ${property.financials[0].petDeposit}</li>
                  </ul>

                  <div className={layoutStyles.buttonGroup}>
                    <button
                      className={buttonStyles.primaryButton}
                      onClick={() => setEditingFinancialIndex(0)}
                    >
                      Edit Financials
                    </button>
                  </div>

                  {editingFinancialIndex === 0 && (
                    <FinancialModal
                      financial={property.financials[0]}
                      onClose={() => setEditingFinancialIndex(null)}
                      onSave={(updatedFinancial) => {
                        const updatedFinancials = [...property.financials];
                        updatedFinancials[0] = updatedFinancial;
                        editProperty({ ...property, financials: updatedFinancials });
                        setEditingFinancialIndex(null);
                      }}
                    />
                  )}
                </div>
              ) : (
                <p className="ml-4 italic text-gray-500">None</p>
              )}
            </div>
          </div>
        )}

        {role === 'landlord' && (
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Lease Agreement</h2>
            <div className={styles.propertyStats}>
              {property.leaseFile? (
                <a
                  href={`/leases/${property.leaseFile}`}
                  download
                  className={styles.leaseLink}
                >
                  Download Lease
                </a>
              ) : (
                <p className="ml-4 italic text-gray-500">None uploaded</p>
              )} 
            </div>

            <div className={layoutStyles.buttonGroup}>
              <label className={buttonStyles.primaryButton}>
                Upload Lease Agreement
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  style={{ display: 'none' }}
                  onChange={(e) => handleLeaseUpload(e)}
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
