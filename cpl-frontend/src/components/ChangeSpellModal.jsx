import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Box";
import { useState } from "react";
import Enchant from "./Enchant";
import Container from "@mui/material/Container";

const ChangeSpellModal = ({ level, possible, spells, items, change }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: "50%",
    bgcolor: "background.paper",
    border: "px solid #000",
    boxShadow: 24,
    overflow: "scroll",
    p: 4,
  };
  return (
    <Container>
      <Button onClick={handleOpen}>Change</Button>
      <Modal open={open} onClose={handleClose}>
        <Grid container sx={style}>
          {possible.map((p) => {
            return (
              <Grid
                style={{ margin: "1em" }}
                item
                key={`${level}${spells[p.id].name}`}
              >
                <Enchant
                  style={{ flexGrow: 1 }}
                  level={p}
                  items={items}
                  spells={spells}
                />
                <Button
                  style={{ marginTop: "5px" }}
                  color="primary"
                  variant="contained"
                  onClick={() => change(level, p.id)}
                >
                  Use
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Modal>
    </Container>
  );
};

export default ChangeSpellModal;
