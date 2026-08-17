const { CLAUSE_GROUPS } = require("./clauseGroups");

// Sorts a lease's clauses by (group's position in the fixed list, attach
// order) and labels each with its computed section number — e.g. the 2nd
// clause in the 3rd group actually used on this lease becomes "3.2". Groups
// with no clauses on this lease are skipped entirely (compact numbering, no
// gaps), matching how a real lease reads. One shared implementation used by
// both the JSON API response and the PDF generator, so on-screen numbering
// and the generated document can never drift apart.
function orderAndLabelClauses(leaseClauses) {
  const sorted = [...leaseClauses].sort((a, b) => {
    const groupDiff = CLAUSE_GROUPS.indexOf(a.group) - CLAUSE_GROUPS.indexOf(b.group);
    return groupDiff !== 0 ? groupDiff : a.order - b.order;
  });

  const groupPositions = [];
  let currentGroup = null;
  let indexInGroup = 0;

  return sorted.map((clause) => {
    if (clause.group !== currentGroup) {
      currentGroup = clause.group;
      groupPositions.push(currentGroup);
      indexInGroup = 0;
    }
    indexInGroup += 1;
    return { ...clause, sectionLabel: `${groupPositions.length}.${indexInGroup}` };
  });
}

module.exports = { orderAndLabelClauses };
