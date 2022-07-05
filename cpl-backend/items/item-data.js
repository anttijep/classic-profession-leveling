const engineeringItems = require("../static/items/engineering.json");
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

module.exports = { engineeringItems };
