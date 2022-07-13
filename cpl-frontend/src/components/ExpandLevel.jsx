import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Enchant from "./Enchant";
import ChangeSpellModal from "./ChangeSpellModal";
import { Typography } from "@mui/material";

const ChangeLevel = ({ level, levels, spells, change, items }) => {
  const list = [];
  for (let i = level.start; i <= level.end; ++i) {
    list.push(
      <TableRow key={`${i}c`}>
        <TableCell>
          <Typography>{i}</Typography>
        </TableCell>
        <TableCell>
          <Enchant level={levels[i][0]} spells={spells} />
        </TableCell>
        <TableCell>
          <ChangeSpellModal
            change={change}
            level={i}
            possible={levels[i]}
            spells={spells}
            items={items}
          />
        </TableCell>
      </TableRow>
    );
  }
  return <>{list}</>;
};

export default ChangeLevel;
