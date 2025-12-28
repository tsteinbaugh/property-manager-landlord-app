function shapeOccupant(occupant) {
  return {
    id: occupant.id,
    name: occupant.name,
    email: occupant.email,
    phone: occupant.phone,
    relation: occupant.relation,
    age: occupant.age,
    heightFeet: occupant.heightFeet,
    heightInches: occupant.heightInches,
    weight: occupant.weight,
    sex: occupant.sex,
    hairColor: occupant.hairColor,
    eyeColor: occupant.eyeColor,
    bodyBuild: occupant.bodyBuild,
    markings: occupant.markings,
    notes: occupant.notes,
    archived: occupant.archivedAt,
    createdAt: occupant.createdAt,
    updatedAt: occupant.updatedAt,
    landlordId: occupant.landlordId,
  };
}

module.exports = { shapeOccupant }