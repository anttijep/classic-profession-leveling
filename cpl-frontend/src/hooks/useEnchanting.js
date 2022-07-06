import { useState } from "react"
import getCheapest from "../utils/cheapest";

const useEnchanting = () => {
  const [levels, setLevels] = useState([]);

  const calculate = (spells, items, start, end) => {
    const cheapest = getCheapest(spells, items, start, end);
    setLevels(cheapest);
  }
  return { levels, calculate };
}

export default useEnchanting;
