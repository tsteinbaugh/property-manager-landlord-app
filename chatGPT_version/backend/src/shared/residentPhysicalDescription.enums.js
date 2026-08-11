// backend/src/shared/person.enums.js

const SEX = new Set(["MALE", "FEMALE", "OTHER", "UNKNOWN"]);

const HAIR_COLOR = new Set([
  "BLACK",
  "BROWN",
  "BLONDE",
  "RED",
  "GRAY",
  "WHITE",
  "DYED",
  "BALD",
  "OTHER",
  "UNKNOWN",
]);

const EYE_COLOR = new Set([
  "BROWN",
  "BLUE",
  "GREEN",
  "HAZEL",
  "GRAY",
  "AMBER",
  "OTHER",
  "UNKNOWN",
]);

const BODY_BUILD = new Set([
  "SLIM",
  "AVERAGE",
  "ATHLETIC",
  "HEAVYSET",
  "OTHER",
  "UNKNOWN",
]);

module.exports = { SEX, HAIR_COLOR, EYE_COLOR, BODY_BUILD };
