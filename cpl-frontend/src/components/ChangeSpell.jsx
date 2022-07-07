import Toggle from "./Toggle";
import SpellInfo from "./SpellInfo";

const ChangeSpell = ({level, possible, spells, select}) => {
  return(
    <Toggle title={level}>
      <ul>
      {possible && possible.map(p => <li key={`${level}${p.id}`}><SpellInfo name={spells[p.id].name} cost={p.cost}/> <button onClick={() => select(level, p.id)}>change</button></li>)}
      </ul>
    </Toggle>
  );
};

export default ChangeSpell;
