import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
//THIS IS IMPORTING THE DEFAULT, WHICH IS THE SWITCH STATEMENT
//IS THE SWITCH STATEMENT THE ACTUAL REDUCER OMG ?????
import counterReducer from "./ducks/counter";
import userReducer from "./ducks/user";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware]; //for future middleware

const store = createStore(reducer, {}, applyMiddleware(...middleWare));

//watches for actions that get dispatched
sagaMiddleware.run(watcherSaga);

export default store;
