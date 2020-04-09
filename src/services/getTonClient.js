import {call, put} from 'redux-saga/effects';
const { TONClient } = require('ton-client-node-js');

const getTonClientData = async  () => {
    const client =  await TONClient.create({
        servers: ['htttps://testnet.ton.dev'],
        transtationTimeout: 3000,
    });
    return client;
}

export default {
    getTonClientData,
}


function* getTonClientDataSaga() {
    const data = yield call((getTonClientData))
    // yield put(updateTonClientData(data))
}

export function* helloSaga() {
  alert("connected!")
}