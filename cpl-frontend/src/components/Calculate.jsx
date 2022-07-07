import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Calculate = ({ onClick }) => {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(375);
  return (
    <div>
      <TextField
        type="number"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <TextField type="number" value={to} onChange={(e) => setTo(e.target.value)} />
      <Button onClick={() => onClick(from, to)}>calculate</Button>
    </div>
  );
};

export default Calculate;
