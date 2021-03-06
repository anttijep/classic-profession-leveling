const router = require("express").Router();
const { engineeringItems, enchantingItems } = require("../items/item-data");
const { engineeringSpells, enchantingSpells } = require("../spells/spell-data");
const { enchantingLimited } = require("../spells/limited-spells");

router.get("/:prof/items", async (req, res) => {
  switch (req.params.prof.toLocaleLowerCase()) {
    case "engineering":
      return res.json(engineeringItems);
    case "enchanting":
      return res.json(enchantingItems);
    default:
      break;
  }
  res.status(404).end();
});

router.get("/:prof/limited", async (req, res) => {
  console.log("test");
  switch (req.params.prof.toLocaleLowerCase()) {
    //    case "engineering":
    //      return res.json(engineeringItems);
    case "enchanting":
      return res.json(enchantingLimited);
    default:
      break;
  }
  res.status(404).end();
});

router.get("/:prof/spells", async (req, res) => {
  switch (req.params.prof.toLocaleLowerCase()) {
    case "engineering":
      return res.json(engineeringSpells);
    case "enchanting":
      return res.json(enchantingSpells);
    default:
      break;
  }
  res.status(404).end();
});

module.exports = router;
