//backend/src/shapes/tenant.shape.js
function shapeTenant(tenant) {
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
    violations: tenant.violations,
    notes: tenant.notes,
    archived: tenant.archivedAt,
    createdAt: tenant.createdAt,
    updatedAt: tenant.updatedAt,
    landlordId: tenant.landlordId,
  };
}

module.exports = { shapeTenant }