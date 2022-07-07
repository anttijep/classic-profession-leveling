import { useState } from "react";
import getCheapest from "../utils/cheapest";
import { cloneDeep } from "lodash";

const useEnchanting = () => {
  const [levels, setLevels] = useState([]);

  const calculate = (spells, items, start, end) => {
    const cheapest = getCheapest(spells, items, start, end);
    setLevels(cheapest);
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
  return { levels, calculate, select };
};

export default useEnchanting;
