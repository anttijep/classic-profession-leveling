const router = require("express").Router();
const { engineeringItems } = require("../items/item-data");

router.get("/", async (req, res) => {
  res.json(engineeringItems);
});


module.exports = router;
