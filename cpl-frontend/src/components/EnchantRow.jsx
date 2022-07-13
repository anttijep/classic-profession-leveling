import Enchant from "./Enchant";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ExpandLevel from "./ExpandLevel";

import SvgMore from "@mui/icons-material/ExpandMore";
import SvgLess from "@mui/icons-material/ExpandLess";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Typography } from "@mui/material";
const EnchantRow = ({ level, spells, items, change, levels }) => {
  const [expand, setExpand] = useState(false);
  const toggle = () => {
    setExpand(!expand);
  };
  return (
    <>
      <TableRow>
        <TableCell>
          <Typography>{`${level.start}-${level.end}`}</Typography>
        </TableCell>
        <TableCell>
          <Enchant
            level={level}
            spells={spells}
            items={items}
            levels={levels}
          />
        </TableCell>
        <TableCell>
          <IconButton onClick={toggle}>
            {(expand && <SvgLess />) || <SvgMore />}
          </IconButton>
        </TableCell>
      </TableRow>
      {expand && (
        <ExpandLevel
          level={level}
          levels={levels}
          spells={spells}
          items={items}
          change={change}
        />
      )}
    </>
  );
};

export default EnchantRow;
