import ChangeSpell from "./ChangeSpell";
import { Box } from "@mui/material";
import { useState } from "react";
import SpellInfo from "./SpellInfo";

const Enchant = ({ level, spells, items, levels, select }) => {
  const [fullInfo, setFullInfo] = useState();
  const toggleInfo = () => {
    setFullInfo(!fullInfo);
  };
  const All = () => {
    const info = [];
    for (let i = level.start; i <= level.end; ++i) {
      info.push({ level: i, possible: levels[i] });
    }
    return (
      <div>
        {info.map((i) => (
          <ChangeSpell key={i.level} {...i} spells={spells} select={select} />
        ))}
      </div>
    );
  };
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
    <div>
      <Box container style={containerStyle}>
        <SpellInfo name={name} style={spellStyle} cost={level.cost} />
        <div>
          <button onClick={toggleInfo}>{fullInfo ? ">" : "<"}</button>
        </div>
      </Box>
      {fullInfo && <All />}
    </div>
  );
};

export default Enchant;
