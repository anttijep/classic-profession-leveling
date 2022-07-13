export const sources = {
  unknown: 0x1,
  crafted: 0x2,
  drop: 0x4,
  quest: 0x8,
  vendor: 0x10,
  trainer: 0x20,
};

export const coppersToString = (coppers) => {
  const gold = Math.floor(coppers / 10000);
  const silver = Math.floor((coppers / 100) % 100);
  const copper = coppers % 100;
  if (gold) {
    return `${gold}g ${silver}s ${copper}c`;
  }
  if (silver) {
    return `${silver}s ${copper}c`;
  }
  return `${copper}c`;
};

export const groupLevels = (levels) => {
  let totalCost = 0;

  const indices = Object.keys(levels);
  indices.sort((a, b) => a - b);

  const displayedLevels = [];
  indices.forEach((i) => {
    if (displayedLevels.length === 0) {
      displayedLevels.push({ ...levels[i][0] });
      totalCost = levels[i][0].cost;
    } else {
      let last = displayedLevels.length - 1;
      totalCost += levels[i][0].cost;
      if (displayedLevels[last].id === levels[i][0].id) {
        ++displayedLevels[last].end;
        displayedLevels[last].cost += levels[i][0].cost;
      } else {
        displayedLevels.push({ ...levels[i][0] });
      }
    }
  });
  return [displayedLevels, totalCost];
};

export const anySource = () => {
  return Object.values(sources).reduce((p, v) => p | v);
};
