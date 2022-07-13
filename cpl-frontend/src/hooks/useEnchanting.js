import { useState } from "react";
import getCheapest from "../utils/cheapest";
import { cloneDeep } from "lodash";

const useEnchanting = () => {
  const [levels, setLevels] = useState([]);
  const [success, setSuccess] = useState(true);

  const calculate = (spells, items, start, end, source, banned) => {
    const [cheapest, reachedEnd] = getCheapest(spells, items, start, end, source, banned);
    setLevels(cheapest);
    setSuccess(reachedEnd);
  };
  const select = (level, id) => {
    if (!levels[level]) {
      throw new Error("Invalid level");
    }

    const newLevels = cloneDeep(levels);
    const temp = newLevels[level][0];
    for (let i = 0; i < newLevels[level].length; ++i) {
      if (newLevels[level][i].id === id) {
        newLevels[level][0] = newLevels[level][i];
        newLevels[level][i] = temp;
        setLevels(newLevels);
        return;
      }
    }
    console.log(`Failed to select ${level}, ${id}`);
  };
  return { levels, success, calculate, select };
};

export default useEnchanting;
