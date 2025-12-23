// backend/src/shared/status.enums.js
const USER_STATUS = new Set ([
  "ACTIVE",
  "INVITED",
  "DISABLED",
]);


const PROPERTY_STATUS = new Set ([
  "ACTIVE",
  "INACTIVE",
]);

const LEASE_STATUS = new Set ([
  "DRAFT",
  "ACTIVE",
  "ENDED",
  "TERMINATED",
  "LEGAL_HOLD",
]);

const TENANT_STATUS = new Set ([
  "DRAFT",
  "CANDIDATE",
  "ACTIVE",
  "INACTIVE",
]);

module.exports = { USER_STATUS, PROPERTY_STATUS, LEASE_STATUS, TENANT_STATUS };