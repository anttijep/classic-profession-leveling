import apiService from "../services/apiService";
import { useEffect, useState } from "react";
import useEnchanting from "../hooks/useEnchanting";
import Calculate from "../components/Calculate";
import Enchants from "../components/Enchants";
import { coppersToString } from "../utils/helper";
import Container from "@mui/material/Container";
import BannedItems from "../components/BannedItems";

const Enchanting = () => {
  const [items, setItems] = useState({});
  const [spells, setSpells] = useState({});
  const { levels, calculate, select } = useEnchanting();
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
  const handleCalculate = (from, to) => {
    calculate(spells, items, from, to);
  };

  const handleChange = (level, index) => {
    select(level, index);
  };

  const displayedLevels = [];
  let totalCost = 0;

  const indices = Object.keys(levels);
  indices.sort((a, b) => a - b);

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

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Container
        sx={{
          flexDirection: "column",
        }}
      >
        <Calculate onClick={handleCalculate} />
        {displayedLevels && (
          <Enchants
            levels={displayedLevels}
            items={items}
            spells={spells}
            allLevels={levels}
            change={handleChange}
          />
        )}
        {totalCost > 0 && <div>total: {coppersToString(totalCost)}</div>}
      </Container>
      <Container
        sx={{
          flexDirection: "column",
        }}
      >
        <BannedItems />
      </Container>
    </Container>
  );
};

export default Enchanting;
