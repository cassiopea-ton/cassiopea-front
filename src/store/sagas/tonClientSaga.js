import { call, put ,all, takeEvery } from "redux-saga/effects";
import { TON_CLIENT_REQUEST_DATA } from "../../constants";
import { tonClientSetData } from '../actions/tonClientActions';
import tonClientService from '../../services/tonClientService';


function* requestTonClientSaga() {
    const client = yield call(tonClientService.getTonClient);
    console.log({client});
    yield put(tonClientSetData(client));
}

export default function* tonCLientSaga(){
    console.log('ton client saga init')
    yield all([takeEvery(TON_CLIENT_REQUEST_DATA,requestTonClientSaga)]);
}