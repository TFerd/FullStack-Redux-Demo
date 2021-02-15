import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { GET_USER } from "../ducks/user";

//will look out for specific actions and map them to their handler functions
export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}

//when a get user action is dispatched, watcher saga will
//take that action and call get user, that get user will then call
//the requestGetUser which will make a get request to the url endpoint
//and will return data, the data is taken and will dispatch a redux action
//that will setUser to be the data we got from the endpoint.
