//backend/src/shapes/property.shape.js
function shapeProperty(property) {
    if (!property) return null;
    return {
        id: property.id,
        name: property.name,
        address1: property.address1,
        address2: property.address2,
        city: property.city,
        state: property.state,
        postalCode: property.postalCode,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        sqft: property.sqft,
        yearBuilt: property.yearBuilt,
        status: property.status,
        notes: property.notes,
        archived: !!property.archivedAt,
        archivedAt: property.archivedAt,
        createdAt: property.createdAt,
        updatedAt: property.updatedAt,
        landlordId: property.landlordId,
    };
}

module.exports = { shapeProperty };