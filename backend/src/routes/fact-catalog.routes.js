const express = require("express");
const catalog = require("../lib/factCatalog");

// The applicability questions (factCatalog.js), for the forms that ask them.
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    questions: catalog.CATALOG,
    utilityKinds: catalog.UTILITY_KINDS,
    utilityWhoPays: catalog.UTILITY_WHO_PAYS,
    utilityMethods: catalog.UTILITY_METHODS,
    applianceKinds: catalog.APPLIANCE_KINDS,
    applianceTerms: catalog.APPLIANCE_TERMS,
  });
});

module.exports = router;
