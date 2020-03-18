import { TONClient } from "ton-client-web-js";

async function main(client) {}

(async () => {
  try {
    const client = await TONClient.create({
      servers: "http://localhost",
      transactionTimeout: 30000
    });

    await main(client);
    console.log("Hello");
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
})();

