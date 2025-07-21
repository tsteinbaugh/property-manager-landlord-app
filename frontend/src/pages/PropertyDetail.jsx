import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import { useProperties } from '../context/PropertyContext';
import PropertyModal from '../components/PropertyModal';
import styles from './PropertyDetail.module.css';
import buttonStyles from '../styles/Buttons.module.css';


export default function PropertyDetail({ role, setRole }) {
  const [editingProperty, setEditingProperty] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { properties, editProperty, deleteProperty } = useProperties();
  const property = properties.find((p) => p.id === Number(id));
  const [showEditModal, setShowEditModal] = useState(false);

  if (!property) return <p className={styles.container}>Property not found.</p>;

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this property?')) {
      deleteProperty(property.id);
      navigate('/dashboard');
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
        <div className={styles.landlordActions}>

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
            onClick={handleDelete}
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
                <ul key={idx} className={styles.list}>
                  <li>Name: {tenant.name}</li>
                  <ul className={styles.subList}>
                    <li>Contact Information:</li>
                    <ul className={styles.subList}>
                      <li>Phone: {tenant.contact.phone}</li>
                      <li>Email: {tenant.contact.email}</li>
                    </ul>
                    <li>Age: {tenant.age}</li>
                    <li>Occupation: {tenant.occupation}</li>
                  </ul>
                </ul>
              ))
            ) : (
              ' None'
            )}
          </div>

          <div className={styles.propertyStats}>
            <strong>Occupant(s):</strong>
            {property.occupants?.length ? (
              property.occupants.map((occupant, idx) => (
                <ul key={idx} className={styles.list}>
                  <li>Name: {occupant.name}</li>
                  <ul className={styles.subList}>
                    <li>Age: {occupant.age}</li>
                  </ul>
                </ul>
              ))
            ) : (
              ' None'
            )}
          </div>

          <div className={styles.propertyStats}>
            <strong>Pet(s):</strong>
            {property.pets?.length ? (
              property.pets.map((pet, idx) => (
                <ul key={idx} className={styles.list}>
                  <li>Name: {pet.name}</li>
                  <ul className={styles.subList}>
                    <li>Type: {pet.type}</li>
                    <li>Size: {pet.size}</li>
                    <li>License #: {pet.license}</li>
                  </ul>
                </ul>
              ))
            ) : (
              ' None'
            )}
          </div>

          <div className={styles.propertyStats}>
            <strong>Emergency Contact:</strong>
            {property.emergencyContact?.length ? (
              property.emergencyContact.map((eContact, idx) => (
                <ul key={idx} className={styles.list}>
                  <li>Name: {eContact.name}</li>
                  <ul className={styles.subList}>
                    <li>Contact Information:</li>
                    <ul className={styles.subList}>
                      <li>Phone: {eContact.contact.phone}</li>
                      <li>Email: {eContact.contact.email}</li>
                    </ul>
                  </ul>
                </ul>
              ))
            ) : (
              ' None'
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
