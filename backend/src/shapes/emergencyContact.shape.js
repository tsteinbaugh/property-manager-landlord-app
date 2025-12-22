function shapeEmergencyContact(emergencyContact) {
  return {
    id: emergencyContact.id,
    name: emergencyContact.name,
    phone: emergencyContact.phone,
    email: emergencyContact.email,
    address1: emergencyContact.address1,
    city: emergencyContact.city,
    state: emergencyContact.state,
    postalCode: emergencyContact.postalCode,
    relation: emergencyContact.relation,
    notes: emergencyContact.notes,
    archived: emergencyContact.archivedAt,
    createdAt: emergencyContact.createdAt,
    updatedAt: emergencyContact.updatedAt,
    landlordId: emergencyContact.landlordId,
  };
}

module.exports = { shapeEmergencyContact }