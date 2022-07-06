const router = require("express").Router();

const { items } = require("../items/item-data");
const { spells } = require("../spells/spell-data");

router.get("/items", async (req, res) => {
  res.json(items);
});

router.get("/spells", async (req, res) => {
  res.json(spells);
});

module.exports = router;