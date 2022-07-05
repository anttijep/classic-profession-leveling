const auctions = require("../auctions.json");

const auctionData = auctions.reduce((p, c) => {
  p[c.item.id] = c.buyout;
  return p;
}, {});

module.exports = auctionData;
