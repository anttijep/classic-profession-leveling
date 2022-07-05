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

const {
  ClientCredentials,
} = require("simple-oauth2");


(async () => {
  const tokenParams = {};
  const client = new ClientCredentials(config);
  try {
    const accessToken = await client.getToken(tokenParams);
    console.log(accessToken);
    const resp = await axios.get(
      "https://eu.api.blizzard.com/data/wow/connected-realm/4476/auctions/6?namespace=dynamic-classic-eu&locale=en_GB",
      {
        headers: {
          Authorization: `Bearer ${accessToken.token.access_token}`,
        },
      }
    );
    fs.writeFile("auctions.json", JSON.stringify(resp.data.auctions), (error) => console.log(error));
  } catch (error) {
    console.log(error.message);
  }
})();
