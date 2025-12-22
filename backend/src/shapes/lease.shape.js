function shapeLease(lease) {
  if (!lease) return null;

  return {
    id: lease.id,
    status: lease.status,
    rentAmount: lease.rentAmount,
    startDate: lease.startDate,
    endDate: lease.endDate,
    notes: lease.notes,
    archived: lease.archivedAt,

    landlordId: lease.landlordId,
    propertyId: lease.propertyId,

    property: lease.property
      ? {
          id: lease.property.id,
          name: lease.property.name,
          address1: lease.property.address1,
          city: lease.property.city,
          state: lease.property.state,
          postalCode: lease.property.postalCode,
          archived: lease.property.archivedAt,
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
          isPrimary: !!leaseTenant.isPrimary,
          startDate: leaseTenant.startDate,
          endDate: leaseTenant.endDate,

          tenant: leaseTenant.tenant
            ? {
                id: leaseTenant.tenant.id,
                name: leaseTenant.tenant.name,
                email: leaseTenant.tenant.email,
                phone: leaseTenant.tenant.phone,
                archived: leaseTenant.tenant.archivedAt,
              }
            : null,
        }))
      : [],

    propertyLabel: lease.propertyLabel || null,

    fileUrl: lease.fileUrl || null,
    fileOriginalName: lease.fileOriginalName || null,
    fileMimeType: lease.fileMimeType || null,
    fileSize: lease.fileSize ?? null,

    createdAt: lease.createdAt,
    updatedAt: lease.updatedAt,
  };
}

module.exports = { shapeLease };
