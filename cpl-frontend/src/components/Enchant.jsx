import { Box } from "@mui/material";
import SpellInfo from "./SpellInfo";

const Enchant = ({ level, spells, items, levels }) => {
  const name = spells[level.id].name;
  const spellStyle = {
    marginLeft: "0.5em",
    marginRight: "0.5em",
  };
  const containerStyle = {
    display: "flex",
    marginTop: "1em",
  };
  return (
    <Box container style={containerStyle}>
      <SpellInfo name={name} style={spellStyle} cost={level.cost} />
    </Box>
  );
};

export default Enchant;
