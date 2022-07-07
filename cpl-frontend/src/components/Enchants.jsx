import Enchant from "../components/Enchant";
import { Grid, Box } from "@mui/material";

const Enchants = ({ levels, spells, items, select, allLevels }) => {
  const style = {
    display: "flex",
    margin: "0.5em",
    backgroundColor: "grey"
  };
  return (
    <div>
      {levels.map((k) => (
        <Grid style={style} key={`${k.start}-${k.end}r`}>
          <div>{`${k.start}-${k.end}`}</div>
          <Enchant
            level={k}
            spells={spells}
            items={items}
            levels={allLevels}
            select={select}
          />
        </Grid>
      ))}
    </div>
  );
};

export default Enchants;
