const { TONClient } = require('ton-client-web-js');

const getTonClient = () => TONClient.create({
  servers: ['https://testnet.ton.dev'],
});

export default { getTonClient };
