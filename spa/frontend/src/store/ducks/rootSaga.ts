import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes, AuthForm } from "./auth/types";
import { AddressTypes } from "./address/types";
import { auth } from "./auth/sagas";
import { load } from "./address/sagas";
export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOAD_REQUEST, auth),
    takeLatest(AddressTypes.LOAD_REQUEST, load)
  ]);
}
