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
