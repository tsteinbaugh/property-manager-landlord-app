function shapePet(pet) {
  return {
    id: pet.id,
    name: pet.name,
    type: pet.type,
    breed: pet.breed,
    weightLb: pet.weightLb,
    age: pet.age,
    license: pet.license,
    notes: pet.notes,
    archived: pet.archivedAt,
    createdAt: pet.createdAt,
    updatedAt: pet.updatedAt,
    landlordId: pet.landlordId,
  };
}

module.exports = { shapePet }