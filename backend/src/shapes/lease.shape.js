//backend/src/shapes/lease.shape.js
function shapeLease(lease) {
  if (!lease) return null;

  return {
    id: lease.id,
    status: lease.status,
    leaseType: lease.leaseType,
    rentAmountCents: lease.rentAmountCents,
    startDate: lease.startDate,
    endDate: lease.endDate,
    notes: lease.notes,
    archived: !!lease.archivedAt,
    archivedAt: lease.archivedAt,

    landlordId: lease.landlordId,
    propertyId: lease.propertyId,

    property: lease.property
      ? {
          id: lease.property.id,
          name: lease.property.name,
          address1: lease.property.address1,
          address2: lease.property.address2,
          city: lease.property.city,
          state: lease.property.state,
          postalCode: lease.property.postalCode,
          archived: !!lease.property.archivedAt,
          archivedAt: lease.property.archivedAt
        }
      : null,

    leaseTenants: Array.isArray(lease.leaseTenants)
      ? lease.leaseTenants.map((leaseTenant) => ({
          id: leaseTenant.id,
          tenantId: leaseTenant.tenantId,
          tenantName:
            leaseTenant.tenantName ||
            leaseTenant.tenant?.name ||
            null,
          startDate: leaseTenant.startDate,
          endDate: leaseTenant.endDate,

          tenant: leaseTenant.tenant
            ? {
                id: leaseTenant.tenant.id,
                name: leaseTenant.tenant.name,
                email: leaseTenant.tenant.email,
                phone: leaseTenant.tenant.phone,
                archived: !!leaseTenant.tenant.archivedAt,
                archivedAt: leaseTenant.tenant.archivedAt
              }
            : null,
        }))
      : [],

    propertyLabel: lease.propertyLabel || null,

    attachments: Array.isArray(lease.attachments)
      ? lease.attachments.map((d) => ({
          id: d.id,
          url: d.url,
          originalName: d.originalName,
          mimeType: d.mimeType,
          size: d.size,
          createdAt: d.createdAt,
          createdById: d.createdById,
          archivedAt: d.archivedAt,
          archiveReason: d.archiveReason,
          archivedById: d.archivedById,
        }))
      : [],

    createdAt: lease.createdAt,
    updatedAt: lease.updatedAt,
  };
}

module.exports = { shapeLease };
