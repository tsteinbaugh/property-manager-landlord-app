const { shapeProperty } = require("@shapes/property.shape.js");
const { shapeLease } = require("@shapes/lease.shape.js");
const { shapeTenant } = require("@shapes/tenant.shape.js");
const { shapeOccupant } = require("@shapes/occupant.shape.js");
const { shapePet } = require("@shapes/pet.shape.js");
const { shapeEmergencyContact } = require("@shapes/emergencyContact.shape.js");
const { shapeVehicle } = require("@shapes/vehicle.shape.js");

module.exports = {
  shapeProperty,
  shapeLease,
  shapeTenant,
  shapeOccupant,
  shapePet,
  shapeEmergencyContact,
  shapeVehicle,
};
