import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const Calculate = ({ onClick }) => {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(375);
  return (
    <Container>
      <TextField
        type="number"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <TextField
        type="number"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <Button
        color="primary"
        variant="contained"
        onClick={() => onClick(from, to)}
      >
        calculate
      </Button>
    </Container>
  );
};

export default Calculate;
