const { TONClient } = require('ton-client-web-js');

const getTonClient = () => TONClient.create({
  servers: ['net.ton.dev'],
});

export default { getTonClient };
