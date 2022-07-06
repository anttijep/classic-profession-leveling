const router = require("express").Router();
const { engineeringItems } = require("../items/item-data");
const { engineeringSpells } = require("../spells/spell-data");

router.get("/items", async (req, res) => {
  res.json(engineeringItems);
});

router.get("/spells", async (req, res) => {
  res.json(engineeringSpells);
});

module.exports = router;
