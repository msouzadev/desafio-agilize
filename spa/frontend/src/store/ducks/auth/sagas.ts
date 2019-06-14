import { call, put } from "redux-saga/effects";

import api from "../../../services/api";
import { AuthForm } from "./types";
import { authSuccess } from "./actions";

export function* auth(credentials: any) {
  try {
    const response = yield call(api.post, "auth", credentials);
    yield put(authSuccess(response.data));
  } catch (error) {}
}
