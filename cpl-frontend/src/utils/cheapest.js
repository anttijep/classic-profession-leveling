const MAX_SKILL = 375;

const getCheapest = (spells, items, start, end, badluck = 0) => {
  // TODO: find a better place (and better way) to do this
  const levels = new Array(MAX_SKILL + 1);
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
      continue;
    }
    for (let i = val.lev; i < val.diff[3] && i < end; ++i) {
      let skillupChance = Math.min(
        1,
        (val.diff[3] - i) / (val.diff[3] - val.diff[1])
      );
      if (skillupChance < 1) {
        skillupChance -= badluck;
      }
      if (skillupChance > 0) {
        if (levels[i] === undefined) {
          levels[i] = [];
        }
        levels[i].push([key, skillupChance, (1 / skillupChance) * cost]);
      }
    }
  }
  const output = [];
  for (let i = start; i < end; ++i) {
    if (levels[i].length === 0) {
      break;
    }
    const cheap = levels[i].reduce((p, n) => (p[2] < n[2] ? p : n))[0];
    output.push(cheap);
  }
  return output;
};

export default getCheapest;
