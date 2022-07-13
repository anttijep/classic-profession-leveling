import SpellInfo from "./SpellInfo";

const Enchant = ({ style, level, spells, items, levels }) => {
  const name = spells[level.id].name;
  const spellStyle = {
    marginLeft: "0.5em",
    marginRight: "0.5em",
  };
  return (
    <SpellInfo
      style={{ ...spellStyle, ...style }}
      name={name}
      cost={level.cost}
    />
  );
};

export default Enchant;
