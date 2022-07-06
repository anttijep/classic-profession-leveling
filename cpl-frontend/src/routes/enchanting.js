import apiService from "../services/apiService";
import { useEffect, useState } from "react";
import Enchant from "../components/enchant";
import useEnchanting from "../hooks/useEnchanting";

const Enchanting = () => {
  const [items, setItems] = useState({});
  const [spells, setSpells] = useState({});
  const { levels, calculate } = useEnchanting();
  useEffect(() => {
    (async () => {
      const data = await apiService.getSpells("enchanting");
      setSpells(data);
    })();
    (async () => {
      const data = await apiService.getItems("enchanting");
      setItems(data);
    })();
  }, []);
  if (Object.keys(items).length === 0 || Object.keys(spells).length === 0) {
    return null;
  }
  const handleCalculate = () => {
    calculate(spells, items, 1, 375);
  };

  const groupedLevels = [];
  if (levels.length > 1) {
    groupedLevels.push({ start: 1, end: 1, id: levels[1] });
    for (let i = 2; i < levels.length; ++i) {
      const last = groupedLevels.length - 1;
      if (levels[i] === groupedLevels[last].id) {
        ++groupedLevels[last].end;
      } else {
        groupedLevels.push({ start: i, end: i, id: levels[i] });
      }
    }
  }
  console.log(levels);

  return (
    <div>
      <button onClick={handleCalculate}>calculate</button>
      {groupedLevels &&
        groupedLevels.map(
          (k) =>
            console.log(k) || (
              <Enchant
                start={k.start}
                end={k.end}
                key={`${k.start}-${k.end}`}
                id={k.id}
                spell={spells[k.id]}
                items={items}
              />
            )
        )}
    </div>
  );
};

export default Enchanting;
