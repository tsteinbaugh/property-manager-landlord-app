// backend/src/shapes/tenant.shape.js
function shapeTenant(tenant) {
  if (!tenant) return null;

  return {
    id: tenant.id,
    name: tenant.name,
    email: tenant.email,
    phone: tenant.phone,
    age: tenant.age,
    heightFeet: tenant.heightFeet,
    heightInches: tenant.heightInches,
    weight: tenant.weight,
    sex: tenant.sex,
    hairColor: tenant.hairColor,
    eyeColor: tenant.eyeColor,
    bodyBuild: tenant.bodyBuild,
    markings: tenant.markings,
    occupation: tenant.occupation,
    employer: tenant.employer,
    income: tenant.income,
    creditScore: tenant.creditScore,
    notes: tenant.notes,

    archived: !!tenant.archivedAt,
    archivedAt: tenant.archivedAt,

    landlordId: tenant.landlordId,

    // Keep any extra payload your detail service returns (leases + linked residents)
    leaseTenants: Array.isArray(tenant.leaseTenants) ? tenant.leaseTenants : undefined,
    occupants: Array.isArray(tenant.occupants) ? tenant.occupants : undefined,
    pets: Array.isArray(tenant.pets) ? tenant.pets : undefined,
    emergencyContacts: Array.isArray(tenant.emergencyContacts) ? tenant.emergencyContacts : undefined,
    vehicles: Array.isArray(tenant.vehicles) ? tenant.vehicles : undefined,

    // Attachments (documents + photos) - same shape as lease attachments
    attachments: Array.isArray(tenant.attachments)
      ? tenant.attachments.map((a) => ({
          id: a.id,
          url: a.url,
          originalName: a.originalName,
          mimeType: a.mimeType,
          size: a.size,
          createdAt: a.createdAt,
          createdById: a.createdById,
          archivedAt: a.archivedAt,
          archiveReason: a.archiveReason,
          archivedById: a.archivedById,
        }))
      : [],

    createdAt: tenant.createdAt,
    updatedAt: tenant.updatedAt,
  };
}

module.exports = { shapeTenant };
