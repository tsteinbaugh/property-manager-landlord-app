const { shapeProperty } = require("./property.shape.js");
const { shapeLease } = require("./lease.shape.js");
const { shapeTenant } = require("./tenant.shape.js");
const { shapeOccupant } = require("./occupant.shape.js");
const { shapePet } = require("./pet.shape.js");
const { shapeEmergencyContact } = require("./emergencyContact.shape.js");
const { shapeVehicle } = require("./vehicle.shape.js");

module.exports = {
  shapeProperty,
  shapeLease,
  shapeTenant,
  shapeOccupant,
  shapePet,
  shapeEmergencyContact,
  shapeVehicle,
};
