import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App/App";
import { rootReducer } from "./redux/rootReducer";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import { helloSaga } from "./services/getTonClient";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
  )
);
console.log(store.getState());
sagaMiddleware.run(helloSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
