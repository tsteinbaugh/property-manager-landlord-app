function shapeVehicle(vehicle) {
  return {
    id: vehicle.id,
    make: vehicle.make,
    model: vehicle.model,
    year: vehicle.year,
    color: vehicle.color,
    state: vehicle.state,
    plate: vehicle.plate,
    permit: vehicle.permit,
    parking: vehicle.parking,
    vehicleType: vehicle.vehicleType,
    vehicleSubType: vehicle.vehicleSubType,
    notes: vehicle.notes,
    archived: vehicle.archivedAt,
    createdAt: vehicle.createdAt,
    updatedAt: vehicle.updatedAt,
    landlordId: vehicle.landlordId,
  };
}

module.exports = { shapeVehicle }