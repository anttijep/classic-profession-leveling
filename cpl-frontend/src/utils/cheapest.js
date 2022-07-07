const MAX_SKILL = 375;

const getCheapest = (spells, items, start, end, badluck = 0) => {
  // TODO: find a better place (and better way) to do this
  const levels = new Array(MAX_SKILL);
  for (const [key, val] of Object.entries(spells)) {
    let cost = 0;
    for (let j = 0; j < val.reag.length; ++j) {
      let r = val.reag[j];
      let item = items[r.id];
      if (item.buy) {
        cost += item.buy * r.c;
      } else if (item.auction) {
        cost += item.auction * r.c;
      } else {
        cost = -1;
        break;
      }
    }
    if (cost === -1) {
      console.debug(`Can't make: ${key}`)
      continue;
    }
    for (let i = Math.max(val.lev, start) ; i < val.diff[3] && i < end; ++i) {
      let skillupChance = Math.min(
        1,
        (val.diff[3] - i) / (val.diff[3] - val.diff[1])
      );
      if (skillupChance < 1 && badluck) {
        skillupChance -= badluck;
      }
      if (skillupChance > 0) {
        if (levels[i] === undefined) {
          levels[i] = [];
        }
        levels[i].push({id: key, chance: skillupChance, cost: Math.round((1 / skillupChance) * cost), start: i, end: i});
      }
    }
  }
  const output = {};
  for (let i = start; i < end; ++i) {
    levels[i].sort((a, b) => a.cost - b.cost);
    output[i] = levels[i];
  }
  return output;
};

export default getCheapest;
