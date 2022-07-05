// this script is used to parse _STATIC_ item names for item ids
const axios = require("axios").default;
require("dotenv").config();
const fs = require("fs");

const config = {
  client: {
    id: process.env.BNET_ID,
    secret: process.env.BNET_SECRET,
  },
  auth: {
    tokenHost: process.env.BNET_OAUTH_HOST,
  },
};

const { ClientCredentials } = require("simple-oauth2");

const input = require("./static/items/backup/tailoring.json");
const output_file = "./static/items/tailoring_with_ids.json";
const already = fs.existsSync(output_file) ? require(output_file) : {}; 

async function sleep_for_second() {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, 1000);
  });
}

(async () => {
  const tokenParams = {};
  const client = new ClientCredentials(config);
  const output = {};
  try {
    const accessToken = await client.getToken(tokenParams);
    let counter = 0;
    for (let i = 0; i < input.length; ++i) {
      if (already[input[i]]) {
        console.log(`Skipping ${already[input[i]].name}`);
        output[input[i]] = already[input[i]];
        continue;
      }
      ++counter;
      if (counter % 90 === 0) {
        console.log(counter);
        await sleep_for_second();
      }
      const resp = await axios.get(
        `https://eu.api.blizzard.com/data/wow/item/${input[i]}?namespace=static-classic-eu&locale=en_GB`,
        {
          headers: {
            Authorization: `Bearer ${accessToken.token.access_token}`,
          },
        }
      );
      output[input[i]] = {name:  resp.data.name, buy: resp.data.purchase_price, sell: resp.data.sell_price};
    }
  } catch (error) {
    console.log(error);
  }
  fs.writeFile(output_file, JSON.stringify(output), (error) => error && console.log(error));
})();
