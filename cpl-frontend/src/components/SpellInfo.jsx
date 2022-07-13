import { coppersToString } from "../utils/helper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const SpellInfo = ({ style, name, cost }) => {
  return (
    <Card style={style}>
      <Typography>{name}</Typography>
      <Typography>{coppersToString(cost)}</Typography>
    </Card>
  );
};

export default SpellInfo;
