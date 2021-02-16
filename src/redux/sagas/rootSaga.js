import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { GET_USER } from "../ducks/user";

//will look out for specific actions and map them to their handler functions
//maybe change this to root saga and make it default
export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser); //maybe change takeLatest here to yield all() and
  //put the takeEvery in the individual functions
  //MAYBE PASS IN AN ARRAY OF OBJECTS
} //INSTEAD OF MAKING A BUNCH OF WATCHERS //BAHAHAHAH I WAS RIGHT

//*****I THINK THIS ANSWERS EVERYTHING!!!******** */
// function* helloSaga() {
//   console.log('Hello Sagas!')
// }

// function* incrementAsync() {
//   yield delay(1000)
//   yield put({ type: 'INCREMENT' })
// }

// SO IM GONNA WANNA MAKE A BUNCH OF THESE AND PUT THEM IN AN ARRAY LIKE BELOW
// function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }

// // notice how we now only export the rootSaga
// // single entry point to start all Sagas at once
// export default function* rootSaga() {
//   yield all([
//     helloSaga(),
//     watchIncrementAsync()
//   ])
// }
//************************************************** */

//when a get user action is dispatched, watcher saga will
//take that action and call get user, that get user will then call
//the requestGetUser which will make a get request to the url endpoint
//and will return data, the data is taken and will dispatch a redux action
//that will setUser to be the data we got from the endpoint.
