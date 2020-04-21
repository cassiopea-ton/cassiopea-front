import { all, fork } from "redux-saga/effects";
import tonClientSaga from "./tonClientSaga";

const sagas = [tonClientSaga];

console.log(sagas);
export default function* rootSaga() {
  console.log("root saga");
  yield all(sagas.map(fork));
}
