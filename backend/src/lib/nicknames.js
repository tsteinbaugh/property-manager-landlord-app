// Common English first-name clusters (formal name + its everyday nicknames),
// lowercase. Search expands a query word to its cluster-mates so "Bob" also
// searches "Robert" — a relationship trigram similarity and Soundex both miss
// (see search.js). Plain data — extend anytime a gap comes up.
const NICKNAME_CLUSTERS = [
  ["robert", "bob", "bobby", "rob", "robbie", "bert"],
  ["william", "bill", "billy", "will", "willy", "liam"],
  ["richard", "rick", "ricky", "dick", "rich"],
  ["james", "jim", "jimmy", "jamie"],
  ["john", "jack", "jon", "johnny"],
  ["michael", "mike", "mikey", "mick"],
  ["thomas", "tom", "tommy"],
  ["charles", "charlie", "chuck", "chas"],
  ["edward", "ed", "eddie", "ted", "teddy"],
  ["elizabeth", "liz", "lizzie", "beth", "betty", "eliza", "betsy"],
  ["katherine", "catherine", "kate", "katie", "kathy", "cathy", "kit"],
  ["margaret", "maggie", "meg", "peggy", "marge"],
  ["patricia", "pat", "patty", "trish"],
  ["jennifer", "jen", "jenny"],
  ["christopher", "chris", "topher"],
  ["daniel", "dan", "danny"],
  ["david", "dave", "davey"],
  ["joseph", "joe", "joey"],
  ["anthony", "tony"],
  ["alexander", "alex", "al", "xander", "sasha"],
  ["nicholas", "nick", "nicky"],
  ["matthew", "matt"],
  ["andrew", "andy", "drew"],
  ["benjamin", "ben", "benny"],
  ["samuel", "sam", "sammy"],
  ["jonathan", "jon", "jonny"],
  ["timothy", "tim", "timmy"],
  ["gregory", "greg"],
  ["steven", "stephen", "steve", "stevie"],
  ["kenneth", "ken", "kenny"],
  ["ronald", "ron", "ronnie"],
  ["donald", "don", "donnie"],
  ["frederick", "fred", "freddie"],
  ["douglas", "doug"],
  ["jeffrey", "jeff"],
  ["raymond", "ray"],
  ["lawrence", "larry"],
  ["walter", "walt", "wally"],
  ["harold", "harry", "hal"],
  ["albert", "al", "bert"],
  ["francis", "frank", "frankie"],
  ["theodore", "ted", "theo"],
  ["nathaniel", "nate", "nat"],
  ["zachary", "zach", "zack"],
  ["victoria", "vicky", "tori"],
  ["rebecca", "becky", "becca"],
  ["deborah", "debbie", "deb"],
  ["susan", "sue", "susie"],
  ["barbara", "barb", "barbie"],
  ["cynthia", "cindy"],
  ["christina", "christine", "chris", "tina", "christy"],
  ["jacqueline", "jackie", "jacque"],
  ["stephanie", "steph"],
  ["kimberly", "kim"],
  ["amanda", "mandy"],
  ["samantha", "sam", "sammy"],
  ["alexandra", "alex", "sandy", "lexi"],
  ["isabella", "bella", "izzy"],
  ["gabriel", "gabe"],
  ["nathan", "nate"],
];

const ALIAS_LOOKUP = new Map();
for (const cluster of NICKNAME_CLUSTERS) {
  for (const name of cluster) {
    const existing = ALIAS_LOOKUP.get(name) || new Set();
    for (const other of cluster) {
      if (other !== name) existing.add(other);
    }
    ALIAS_LOOKUP.set(name, existing);
  }
}

// Returns the other names in `word`'s nickname cluster (lowercase), or an
// empty array if it isn't part of one.
function getNameAliases(word) {
  const aliases = ALIAS_LOOKUP.get(word.toLowerCase().trim());
  return aliases ? Array.from(aliases) : [];
}

module.exports = { getNameAliases };
