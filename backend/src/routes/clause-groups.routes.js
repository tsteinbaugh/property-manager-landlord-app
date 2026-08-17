const express = require("express");
const { CLAUSE_GROUPS } = require("../lib/clauseGroups");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(CLAUSE_GROUPS);
});

module.exports = router;
