import apiService from "../services/apiService";
import { useEffect, useState } from "react";
import useEnchanting from "../hooks/useEnchanting";
import Calculate from "../components/Calculate";
import Enchants from "../components/Enchants";
import { coppersToString, groupLevels } from "../utils/helper";
import Container from "@mui/material/Container";
import BannedSpells from "../components/BannedSpells";
import { Typography } from "@mui/material";
import AllowedSources from "../components/AllowedSources";

const Enchanting = () => {
  const [items, setItems] = useState({});
  const [spells, setSpells] = useState({});
  const [banned, setBanned] = useState({});
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
    (async () => {
      const data = await apiService.getLimited("enchanting");
      setBanned(data);
    })();
  }, []);
  if (Object.keys(items).length === 0 || Object.keys(spells).length === 0) {
    return null;
  }
  const handleCalculate = (from, to) => {
    calculate(spells, items, from, to, 0, banned);
  };

  const handleChange = (level, index) => {
    select(level, index);
  };
  const handleAddBan = (id) => {
    setBanned(banned.concat({ id: id, name: spells[id].name }));
  };

  const [displayedLevels, totalCost] = groupLevels(levels);

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
        {totalCost > 0 && (
          <Typography>total: {coppersToString(totalCost)}</Typography>
        )}
      </Container>
      <Container
        sx={{
          flexDirection: "column",
        }}
      >
        <AllowedSources />
        <BannedSpells onAdd={handleAddBan} spells={spells} banned={banned} />
      </Container>
    </Container>
  );
};

export default Enchanting;
