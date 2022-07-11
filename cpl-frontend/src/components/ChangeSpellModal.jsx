import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import Enchant from "./Enchant";

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
  }
  return (
    <div>
      <Button onClick={handleOpen}>Change</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {possible.map((p) => {
            return <ListItem key={`${level}${spells[p.id].name}`}>
              <Button onClick={() => change(level, p.id)}>Change</Button><Enchant level={p} items={items} spells={spells}/>
            </ListItem>;
          })}
        </Box>
      </Modal>
    </div>
  );
};

export default ChangeSpellModal;
