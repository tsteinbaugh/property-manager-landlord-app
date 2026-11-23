// A shared clause carries one tag (generate.py, from its rule_type), but a few
// are a legal duty in one state and an optional statement in the others that
// share the row. This lists the states where the tag holds; elsewhere the
// clause counts as `elsewhere` (its basis, SERVES_LANDLORD, gives Recommended).
// Found 2026-11-23 by listing every shared Required or Legal duty clause; the
// federal lead disclosure is the only other one, and its tag holds everywhere.
const STATE_SCOPED_TAGS = {
  // NRS 118A.275(1): disclose in writing to a prospective tenant if the
  // property is the subject of any foreclosure proceedings. The other eight
  // states' notes record no such duty.
  "foreclosure-disclosure-nv": { states: ["NV"], elsewhere: "RECOMMENDED" },
  // HRS § 521-43(d) and A.R.S. § 33-1322(E) make the landlord give the tenant a
  // copy of the lease; the other thirteen record no duty, so the receipt is
  // evidence only there. It stays on by default everywhere (harmless).
  "lease-copy-receipt-hi": { states: ["HI", "AZ"], elsewhere: "RECOMMENDED" },
  // C.R.S. § 40-10.1-805(2): a written document with the parking regulations
  // before the person agrees to be a tenant; South Carolina's note records no
  // such duty.
  "parking-rules-notice-co": { states: ["CO"], elsewhere: "RECOMMENDED" },
};

// The clause's tag in this state.
function tagIn(template, state) {
  const scoped = STATE_SCOPED_TAGS[template.id];
  if (!scoped || !state || scoped.states.includes(state)) return template.tag;
  return scoped.elsewhere;
}

module.exports = { STATE_SCOPED_TAGS, tagIn };
