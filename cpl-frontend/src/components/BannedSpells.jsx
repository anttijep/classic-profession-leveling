import { Button, IconButton, ListItem, ListItemText } from "@mui/material";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import SvgClearIcon from "@mui/icons-material/Clear";

import { useState } from "react";

const BannedSpells = ({ banned, onAdd, spells, onRemove }) => {
  const [spell, setSpell] = useState("");

  const handleAdd = () => {
    if (onAdd && spell) {
      onAdd(spell);
      setSpell("");
    }
  };
  const handleRemove = (id) => {
    if (onRemove) {
      onRemove(id);
    }
  };

  return (
    <Container>
      <Container>
        <TextField
          value={spell}
          onChange={(e) => setSpell(e.target.value)}
        ></TextField>
        <Button color="primary" variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Container>
      <Container
        sx={{
          width: 300,
          height: 400,
          overflow: "scroll",
          borderWidth: "1px",
          borderStyle: "dotted",
        }}
      >
        {banned &&
          spells &&
          Object.keys(banned).map((b) => {
            console.log(b);
            if (!spells[b]) {
              return <></>;
            }
            return (
              <ListItem key={b}>
                <ListItemText primary={spells[b].name} />
                <IconButton onClick={() => handleRemove(b)}>
                  <SvgClearIcon />
                </IconButton>
              </ListItem>
            );
          })}
      </Container>
    </Container>
  );
};

export default BannedSpells;
