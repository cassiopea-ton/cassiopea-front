import QueryClient from './queryClient'
const { TONClient } = require("ton-client-node-js");
const { BagOfCells } = require("cassiopeia-ton-sdk");


async function main(client) {
  let registerAddr =
    "-1:441c478f14f86140604578eabdac3531471273f7e8dbc826e309e9d8b328a1d9";
  let queryClient = new QueryClient(client);

  // Look up for smart contract storage
  const account = await queryClient.getAccount(registerAddr);

  // Convert smart contract storage to buffer
  const buffer = Buffer.from(account[0].data, "base64");

  // Deserialize smart contract storage (general information, without data)
  let c = new BagOfCells(buffer);

  // Deserialize root cell in storage
  console.log(JSON.stringify(c.cellDataSlice[0].deserialize(abi)));
}

(async () => {
  try {
    const client = new TONClient();
    client.config.setData({
      servers: ["https://testnet.ton.dev"],
    });
    await client.setup();
    await main(client);
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
})();
