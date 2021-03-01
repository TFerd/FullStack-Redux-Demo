import { call, put } from "redux-saga/effects";
import { setUser, setUserList } from "../../ducks/user";
import { requestGetUser, requestGetUserList } from "../requests/user";

//so confusing
//so the handlers actually call the requests
//so now  you can think of requests folder as APIrequests instead??
//the requests return the data and the handlers HANDLE the rest...
export function* handleGetUser(action) {
  console.log("./handlers/user.js handleGetUser() called...action is:", action);
  console.log("Payload is:", action.payload);
  try {
    const response = yield call(requestGetUser, action.payload);

    const { data } = response; //destruct the data
    console.log("Response is: ", response);
    console.log("Data is: ", data);
    //now store in reducer by passing into set user
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetUserList(action) {
  console.log(
    "./handlers/user.js handleGetUserList() called...action is:",
    action
  );

  try {
    //GOTTA FIND OUT HOW TO PASS USER ID INTO HERE
    const response = yield call(requestGetUserList);

    const { data } = response; //destruct the data

    //now store in reducer by passing into set user
    yield put(setUserList(data));
  } catch (error) {
    console.log(error);
  }
}
