import { Box } from "@mui/material";
import { coppersToString } from "../utils/helper";

const SpellInfo = ({ style, name, cost }) => {
  return (
    <Box style={style}>
      <div>{name}</div>
      <div>{coppersToString(cost)}</div>
    </Box>
  );
};

export default SpellInfo;