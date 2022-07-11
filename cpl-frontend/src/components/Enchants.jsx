import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import EnchantRow from "./EnchantRow";

const Enchants = ({ levels, spells, items, change, allLevels }) => {
  return (
    <Table>
      <TableBody>
        {levels.map((k) => (
          <EnchantRow key={`${k.start}-${k.end}r`} level={k} spells={spells} items={items} change={change} levels={allLevels}/>
        ))}
      </TableBody>
    </Table>
  );
};

export default Enchants;
