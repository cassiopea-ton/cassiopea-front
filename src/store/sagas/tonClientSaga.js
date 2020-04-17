import { call, put ,all, takeEvery } from "redux-saga/effects";
import { TON_CLIENT_REQUEST_DATA } from "../../constants";
import { tonClientSetData } from '../actions/tonClientActions';
import tonClientService from '../../services/tonClientService';


function* requestTonClientSaga() {
    const client = yield call(tonClientService.getTonClient);
    yield put(tonClientSetData(client));
}

export default function* tonCLientSaga(){
    yield all([takeEvery(TON_CLIENT_REQUEST_DATA,requestTonClientSaga)]);
}