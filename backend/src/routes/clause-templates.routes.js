const express = require("express");
const { CLAUSE_TEMPLATES } = require("../lib/clauseTemplates");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(CLAUSE_TEMPLATES);
});

module.exports = router;
