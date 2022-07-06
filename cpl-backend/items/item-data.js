const engineeringItems = require("../static/items/engineering.json");
const enchantingItems = require("../static/items/enchanting.json");
const auctionData = require("../services/auction-data");
const vendor = require("../static/items/vendor.json");

for (const key in engineeringItems) {
  if (!vendor[engineeringItems[key].name]) {
    delete engineeringItems[key].buy;
    if (auctionData[key]) {
      engineeringItems[key].auction = auctionData[key];
    }
  }
}

for (const key in enchantingItems) {
  if (!vendor[enchantingItems[key].name]) {
    delete enchantingItems[key].buy;
    if (auctionData[key]) {
      enchantingItems[key].auction = auctionData[key];
    }
  }
}

module.exports = { engineeringItems, enchantingItems };
