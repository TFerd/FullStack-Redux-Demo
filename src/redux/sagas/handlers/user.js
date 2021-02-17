import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/user";
import { requestGetUser } from "../requests/user";

//so confusing

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);

    const { data } = response; //destruct the data

    //now store in reducer by passing into set user
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
