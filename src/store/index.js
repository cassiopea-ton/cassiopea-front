import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from './reducers';
import createSagaMiddleware from "redux-saga";
import sagas from './sagas';

const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware( sagaMiddleware)),
  );

sagaMiddleware.run(sagas);

export default store;