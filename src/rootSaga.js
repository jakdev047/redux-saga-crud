import { all } from "redux-saga/effects";
import { waitFetchUsers } from "./sagas/usersSaga";

export default function* rootSaga() {
   yield all([
      waitFetchUsers()
   ]);
};